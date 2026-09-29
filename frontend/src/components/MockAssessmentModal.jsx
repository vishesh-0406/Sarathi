import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useAuth } from '../context/AuthContext';
import { CompanyLogo } from './CompanyLogos';
import { generateLeetCodeTemplate } from '../utils/leetcodeTemplates';
import { PythonIcon, JavaIcon, JavaScriptIcon, CppIcon } from './LanguageIcons';
import { 
    TargetIcon, 
    TrophyIcon, 
    BrainIcon, 
    CheckIcon, 
    SpinnerIcon, 
    PlayIcon, 
    ArrowRightIcon, 
    ArrowLeftIcon,
    SparklesIcon,
    UndoIcon,
    LeetCodeIcon
} from './Icons';
import './MockAssessmentModal.css';

const API_BASE_URL = 'http://localhost:5000/api';

const SUPPORTED_LANGUAGES = [
    { id: 'python', name: 'Python 3', icon: PythonIcon },
    { id: 'java', name: 'Java 17', icon: JavaIcon },
    { id: 'cpp', name: 'C++ 20', icon: CppIcon },
    { id: 'javascript', name: 'JavaScript (Node.js)', icon: JavaScriptIcon },
];

function isCodeModifiedByUser(code, language, question) {
    if (!code || typeof code !== 'string') return false;
    const starter = question?.starterCode || generateLeetCodeTemplate(language || 'python', question);
    const norm = (s) => (s || '').replace(/\r\n/g, '\n').replace(/\s+/g, ' ').trim();
    if (norm(code) === norm(starter)) return false;

    // Strip comments and standard function signature shells
    const stripped = code
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*$/gm, '')
        .replace(/#.*$/gm, '')
        .replace(/class\s+\w+[\s\S]*?:/g, '')
        .replace(/def\s+\w+\s*\([^)]*\)\s*(?:->\s*[^:]+)?:/g, '')
        .replace(/public\s+class\s+[\s\S]*?\{/g, '')
        .replace(/public\s+[\w<>\[\]]+\s+\w+\s*\([^)]*\)\s*\{/g, '')
        .replace(/var\s+\w+\s*=\s*function\s*\([^)]*\)\s*\{/g, '')
        .replace(/\b(pass|return|return\s+0|return\s+false|return\s+true|return\s+null|return\s+nullptr|return\s+new\s+[\w\[\]\{\}]+|return\s+\[\]|return\s+""|return\s+\{\})\s*;?/g, '')
        .replace(/[\{\}\(\);\s]/g, '')
        .trim();

    return stripped.length >= 5;
}

function MockAssessmentModal({
    isOpen,
    company = 'Amazon',
    roundNumber = 1,
    roundTitle = 'Mock Assessment',
    isComprehensive = false,
    onClose,
    onSolveQuestion,
    onTestCompleted
}) {
    const { token } = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [testSession, setTestSession] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [diagnosticReport, setDiagnosticReport] = useState(null);
    const [activeReviewTab, setActiveReviewTab] = useState('summary'); // 'summary' | 'diagnostics'

    // DSA IDE State
    const [selectedLanguage, setSelectedLanguage] = useState('python');
    const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
    const [runningCode, setRunningCode] = useState(false);
    const [codeRunResult, setCodeRunResult] = useState(null);
    const [mobileTab, setMobileTab] = useState('problem'); // 'problem' | 'ide'
    const editorRef = useRef(null);
    const codeCacheRef = useRef({});

    // Initialize Mock Test Session
    useEffect(() => {
        if (!isOpen) {
            setTestSession(null);
            setDiagnosticReport(null);
            setCurrentIndex(0);
            setAnswers({});
            setCodeRunResult(null);
            setError(null);
            return;
        }

        if (diagnosticReport) {
            return;
        }

        async function initTest() {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`${API_BASE_URL}/user/mock-test/start`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ company, roundNumber, isComprehensive })
                });

                const data = await res.json();
                if (!res.ok || !data.success) {
                    throw new Error(data.message || 'Failed to start mock assessment');
                }

                setTestSession(data.testSession);
                setTimeLeft((data.testSession.durationMinutes || 30) * 60);

                // Initialize starter code or blank answers
                const initialAnswers = {};
                (data.testSession.questions || []).forEach(q => {
                    const defaultCode = q.starterCode || generateLeetCodeTemplate('python', q);
                    initialAnswers[q._id] = {
                        selectedOption: '',
                        codeAnswer: defaultCode,
                        language: 'python',
                        responseText: '',
                        hasUserWrittenCode: false
                    };
                });
                setAnswers(initialAnswers);
            } catch (err) {
                console.error('Error starting test:', err);
                setError(err.message || 'Unable to load mock test questions');
            } finally {
                setLoading(false);
            }
        }

        initTest();
    }, [isOpen, company, roundNumber, isComprehensive, token]);

    // Update editor template when question or language switches
    const questions = testSession?.questions || [];
    const currentQ = questions[currentIndex];
    const totalQuestions = questions.length;

    useEffect(() => {
        if (currentQ && currentQ.category === 'DSA') {
            const currentAnswer = answers[currentQ._id];
            const existingCode = currentAnswer?.codeAnswer;
            if (!existingCode || existingCode.trim().length === 0) {
                const templ = generateLeetCodeTemplate(selectedLanguage, currentQ);
                setAnswers(prev => ({
                    ...prev,
                    [currentQ._id]: {
                        ...prev[currentQ._id],
                        codeAnswer: templ,
                        language: selectedLanguage
                    }
                }));
            }
            setSelectedCaseIdx(0);
            setCodeRunResult(null);
        }
    }, [currentIndex, selectedLanguage, currentQ?._id]);

    // Live countdown timer
    useEffect(() => {
        if (!isOpen || !testSession || diagnosticReport || timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    handleAutoSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isOpen, testSession, diagnosticReport, timeLeft]);

    const handleAutoSubmit = () => {
        handleSubmitTest();
    };

    const handleAnswerMCQ = (qId, optionKey) => {
        setAnswers(prev => ({
            ...prev,
            [qId]: {
                ...prev[qId],
                selectedOption: optionKey
            }
        }));
    };

    const saveCurrentCode = () => {
        if (currentQ && currentQ.category === 'DSA' && editorRef.current) {
            const liveCode = editorRef.current.getValue();
            codeCacheRef.current[currentQ._id] = liveCode;
            const isModified = isCodeModifiedByUser(liveCode, selectedLanguage, currentQ);
            setAnswers(prev => ({
                ...prev,
                [currentQ._id]: {
                    ...prev[currentQ._id],
                    codeAnswer: liveCode,
                    language: selectedLanguage,
                    hasUserWrittenCode: isModified
                }
            }));
        }
    };

    const handleNavigateToQuestion = (targetIdx) => {
        if (targetIdx === currentIndex) return;
        saveCurrentCode();
        setCurrentIndex(targetIdx);
        setCodeRunResult(null);
    };

    const handleCodeChange = (newCode) => {
        if (!currentQ) return;
        codeCacheRef.current[currentQ._id] = newCode;
    };

    const handleLanguageChange = (newLang) => {
        setSelectedLanguage(newLang);
        if (currentQ) {
            const freshTempl = generateLeetCodeTemplate(newLang, currentQ);
            codeCacheRef.current[currentQ._id] = freshTempl;
            setAnswers(prev => ({
                ...prev,
                [currentQ._id]: {
                    ...prev[currentQ._id],
                    codeAnswer: freshTempl,
                    language: newLang,
                    hasUserWrittenCode: false
                }
            }));
            if (editorRef.current) {
                editorRef.current.setValue(freshTempl);
            }
        }
    };

    const handleResetStarterCode = () => {
        if (!currentQ) return;
        const freshTempl = generateLeetCodeTemplate(selectedLanguage, currentQ);
        codeCacheRef.current[currentQ._id] = freshTempl;
        setAnswers(prev => ({
            ...prev,
            [currentQ._id]: {
                ...prev[currentQ._id],
                codeAnswer: freshTempl,
                language: selectedLanguage,
                hasUserWrittenCode: false
            }
        }));
        if (editorRef.current) {
            editorRef.current.setValue(freshTempl);
        }
        setCodeRunResult(null);
    };

    const handleResponseChange = (qId, text) => {
        setAnswers(prev => ({
            ...prev,
            [qId]: {
                ...prev[qId],
                responseText: text
            }
        }));
    };

    // Run code in browser against sample test cases
    const handleRunCodeAgainstTestcases = async () => {
        if (!currentQ || runningCode) return;

        try {
            setRunningCode(true);
            const userCode = editorRef.current ? editorRef.current.getValue() : (answers[currentQ._id]?.codeAnswer || '');

            const testCasesToRun = (currentQ.testCases && currentQ.testCases.length > 0)
                ? currentQ.testCases
                : [{ input: 'nums = [1, 2, 3]', output: '6' }];

            const res = await fetch(`${API_BASE_URL}/code/run-all`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language: selectedLanguage,
                    code: userCode,
                    testCases: testCasesToRun
                })
            });

            if (!res.ok) {
                throw new Error(`Execution service returned HTTP ${res.status}`);
            }

            const data = await res.json();
            setCodeRunResult(data);
        } catch (err) {
            console.error('Error running testcode:', err);
            setCodeRunResult({
                status: 'Error',
                message: err.message,
                results: [{ passed: false, actual: err.message, expected: 'N/A' }]
            });
        } finally {
            setRunningCode(false);
        }
    };

    const handleSubmitTest = async () => {
        if (!testSession || submitting) return;

        try {
            setSubmitting(true);
            saveCurrentCode();
            const totalDurationSec = (testSession.durationMinutes || 30) * 60;
            const timeSpent = Math.max(10, totalDurationSec - timeLeft);

            // Sanitize answers ensuring untouched boilerplate is marked as unwritten
            const sanitizedAnswers = {};
            questions.forEach(q => {
                const ans = answers[q._id] || {};
                if (q.category === 'DSA') {
                    const currentLiveCode = (q._id === currentQ?._id && editorRef.current) 
                        ? editorRef.current.getValue() 
                        : (codeCacheRef.current[q._id] || ans.codeAnswer || '');
                    const hasRealCode = isCodeModifiedByUser(currentLiveCode, ans.language || selectedLanguage, q);
                    sanitizedAnswers[q._id] = {
                        ...ans,
                        codeAnswer: hasRealCode ? currentLiveCode : '',
                        hasUserWrittenCode: hasRealCode
                    };
                } else {
                    sanitizedAnswers[q._id] = ans;
                }
            });

            const res = await fetch(`${API_BASE_URL}/user/mock-test/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    company: testSession.company,
                    roundNumber: testSession.roundNumber,
                    roundTitle: testSession.roundTitle,
                    isComprehensive: testSession.isComprehensive,
                    answers: sanitizedAnswers,
                    timeSpentSeconds: timeSpent
                })
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Failed to submit test');
            }

            setDiagnosticReport(data.report);
            if (onTestCompleted) {
                onTestCompleted(data.report);
            }
        } catch (err) {
            console.error('Error submitting test:', err);
            alert(`Failed to submit: ${err.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    const handleRetakeTest = async () => {
        setDiagnosticReport(null);
        setCurrentIndex(0);
        setAnswers({});
        setCodeRunResult(null);
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${API_BASE_URL}/user/mock-test/start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ company, roundNumber, isComprehensive })
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Failed to start mock assessment');
            }

            setTestSession(data.testSession);
            setTimeLeft((data.testSession.durationMinutes || 30) * 60);

            const initialAnswers = {};
            (data.testSession.questions || []).forEach(q => {
                const defaultCode = q.starterCode || generateLeetCodeTemplate('python', q);
                initialAnswers[q._id] = {
                    selectedOption: '',
                    codeAnswer: defaultCode,
                    language: 'python',
                    responseText: '',
                    hasUserWrittenCode: false
                };
            });
            setAnswers(initialAnswers);
        } catch (err) {
            console.error('Error retaking test:', err);
            setError(err.message || 'Unable to load mock test questions');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    const formatTimer = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const isQuestionAnswered = (q) => {
        if (!q) return false;
        const a = answers[q._id];
        if (!a) return false;
        if (q.category === 'Aptitude') {
            return Boolean(a.selectedOption && a.selectedOption.trim());
        }
        if (q.category === 'DSA') {
            return Boolean(a.hasUserWrittenCode);
        }
        if (q.category === 'Interview') {
            return Boolean(a.responseText && a.responseText.trim().split(/\s+/).filter(Boolean).length >= 10);
        }
        return false;
    };

    const countAnswered = questions.filter(isQuestionAnswered).length;

    const sampleCases = currentQ?.testCases && currentQ.testCases.length > 0 
        ? currentQ.testCases 
        : [{ input: 'Standard Sample Input', output: 'Expected Output' }];

    return (
        <div className="assessment-arena-fullscreen">
            {/* 1. TOP CONSOLE COMMAND BAR */}
            <header className="arena-top-bar">
                <div className="arena-top-left">
                    <div className="arena-brand">
                        <CompanyLogo name={company} size={26} />
                        <div className="arena-title-stack">
                            <div className="arena-title-line">
                                <h2 className="arena-test-name">
                                    {diagnosticReport ? 'AI Diagnostic Report Card' : testSession?.roundTitle || roundTitle}
                                </h2>
                                <span className={`arena-round-badge ${isComprehensive ? 'comp' : 'round'}`}>
                                    {isComprehensive ? 'Comprehensive Drive' : `Round ${roundNumber}`}
                                </span>
                            </div>
                            <span className="arena-subtitle">
                                {company} Recruitment Assessment Arena • {diagnosticReport ? 'Performance Analysis' : `${totalQuestions} Questions`}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Question Navigator Ribbon (Horizontal Palette) */}
                {!diagnosticReport && testSession && (
                    <div className="arena-palette-ribbon">
                        {questions.map((q, idx) => {
                            const isDone = isQuestionAnswered(q);
                            const isCurrent = idx === currentIndex;
                            const typeIcon = q.category === 'DSA' ? '💻' : q.category === 'Aptitude' ? '🧠' : '💬';

                            return (
                                <button
                                    key={q._id}
                                    type="button"
                                    className={`palette-chip ${isCurrent ? 'active' : ''} ${isDone ? 'answered' : ''}`}
                                    onClick={() => handleNavigateToQuestion(idx)}
                                    title={`Q${idx + 1}: ${q.title} (${q.category})`}
                                >
                                    <span className="palette-chip-icon">{typeIcon}</span>
                                    <span className="palette-chip-num">{idx + 1}</span>
                                    {isDone && <span className="palette-done-dot">✓</span>}
                                </button>
                            );
                        })}
                    </div>
                )}

                <div className="arena-top-right">
                    {!diagnosticReport && testSession && (
                        <>
                            <div className={`arena-timer-pill ${timeLeft < 300 ? 'urgent' : ''}`}>
                                <span className="timer-symbol">⏱</span>
                                <span className="timer-countdown">{formatTimer(timeLeft)}</span>
                            </div>

                            <button
                                type="button"
                                className="arena-submit-btn"
                                onClick={handleSubmitTest}
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                                        <SpinnerIcon size={15} />
                                        <span>Grading...</span>
                                    </>
                                ) : (
                                    <>
                                        <CheckIcon size={15} />
                                        <span>Submit Test ({countAnswered}/{totalQuestions})</span>
                                    </>
                                )}
                            </button>
                        </>
                    )}

                    <button 
                        type="button" 
                        className="arena-exit-btn"
                        onClick={onClose}
                        title="Exit Assessment"
                    >
                        ✕
                    </button>
                </div>
            </header>

            {/* 2. LOADING STATE */}
            {loading && (
                <div className="arena-loading-screen">
                    <SpinnerIcon size={40} />
                    <h3>Configuring Official {company} Assessment Console...</h3>
                    <p>Curating real interview testcases and LeetCode-canonical IDE environments for {roundTitle}.</p>
                </div>
            )}

            {/* 3. ERROR STATE */}
            {error && !loading && (
                <div className="arena-error-screen">
                    <h3>Unable to Initialize Assessment Console</h3>
                    <p>{error}</p>
                    <button type="button" className="arena-primary-btn" onClick={onClose}>
                        Return to Sankalp
                    </button>
                </div>
            )}

            {/* 4. ACTIVE ASSESSMENT WORKSPACE (TWO-PANE SPLIT) */}
            {!loading && !error && testSession && !diagnosticReport && currentQ && (
                <>
                    {/* Mobile Pane Switcher (Responsive for phones & tablets <= 768px) */}
                    <div className="arena-mobile-pane-switcher">
                        <button
                            type="button"
                            className={`mobile-switch-btn ${mobileTab === 'problem' ? 'active' : ''}`}
                            onClick={() => setMobileTab('problem')}
                        >
                            <span>📄 Problem Specs</span>
                        </button>
                        <button
                            type="button"
                            className={`mobile-switch-btn ${mobileTab === 'ide' ? 'active' : ''}`}
                            onClick={() => setMobileTab('ide')}
                        >
                            <span>{currentQ.category === 'DSA' ? '💻 Code Editor' : '✏️ Answer Console'}</span>
                        </button>
                    </div>

                    <main className={`arena-workspace mobile-view-${mobileTab}`}>
                    {/* ========================================================
                        A. LEFT PANEL: PROBLEM SPECIFICATIONS & CONSTRAINTS
                       ======================================================== */}
                    <section className="arena-left-pane">
                        <div className="pane-header-meta">
                            <div className="pane-meta-tags">
                                <span className={`pane-tag diff-${currentQ.difficulty?.toLowerCase() || 'medium'}`}>
                                    {currentQ.difficulty || 'Medium'}
                                </span>
                                <span className="pane-tag category-tag">{currentQ.category}</span>
                                <span className="pane-tag topic-tag">{currentQ.topic || 'General'}</span>
                            </div>
                            <span className="pane-counter-label">
                                Question {currentIndex + 1} of {totalQuestions}
                            </span>
                        </div>

                        {/* Question Provenance & Origin Bar (Matches DSA Arena & Company Tracker) */}
                        <div className="pane-provenance-bar">
                            {/* Recollection / Question Origin Badge */}
                            {currentQ.recollectionType && (
                                <span className={`arena-badge recollection-badge recollection-${currentQ.recollectionType}`}>
                                    {currentQ.recollectionType === 'original' && '🎯 Exact Statement'}
                                    {currentQ.recollectionType === 'constraint' && '⚡ Modified Constraints'}
                                    {currentQ.recollectionType === 'randomised' && '🧠 Recalled Scenario'}
                                </span>
                            )}

                            {/* Novelty / LeetCode Equivalence Badge */}
                            {(!currentQ.matchedProblems || currentQ.matchedProblems.length === 0 || currentQ.isNovel) ? (
                                <span className="arena-badge exclusive-badge" title="Authentic company-exclusive question with no direct LeetCode clone">
                                    <SparklesIcon size={12} /> Company Exclusive • Campus OA
                                </span>
                            ) : (
                                <span className="arena-badge leetcode-badge" title={currentQ.matchedProblems[0]?.problemName}>
                                    <LeetCodeIcon size={13} /> LeetCode: {currentQ.matchedProblems[0]?.problemName} ({Math.round((currentQ.matchedProblems[0]?.similarityScore || 0.95) * 100)}%)
                                </span>
                            )}

                            {/* Verified Source Tag */}
                            {currentQ.source && (
                                <span className="arena-badge source-badge" title="Question recollection source">
                                    Source: {currentQ.source}
                                </span>
                            )}
                        </div>

                        <div className="pane-scroll-body">
                            <h1 className="problem-primary-title">{currentQ.title}</h1>

                            <div className="problem-description-text">
                                {currentQ.problemStatement}
                            </div>

                            {/* Constraints Section */}
                            {currentQ.constraints && currentQ.constraints.length > 0 && (
                                <div className="problem-section-block">
                                    <h4 className="section-block-title">Constraints</h4>
                                    <ul className="constraints-list">
                                        {currentQ.constraints.map((c, cIdx) => (
                                            <li key={cIdx}><code>{c}</code></li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Sample Cases / Examples Section */}
                            {currentQ.category === 'DSA' && (
                                <div className="problem-section-block">
                                    <h4 className="section-block-title">Sample Testcases & Format</h4>
                                    {sampleCases.map((tc, tcIdx) => (
                                        <div key={tcIdx} className="sample-case-box">
                                            <span className="case-box-label">Example {tcIdx + 1}:</span>
                                            <div className="case-io-row">
                                                <span className="io-name">Input:</span>
                                                <code className="io-code">{tc.input || 'nums = [1, 2, 3]'}</code>
                                            </div>
                                            <div className="case-io-row">
                                                <span className="io-name">Output:</span>
                                                <code className="io-code">{tc.output || 'Result'}</code>
                                            </div>
                                            {tc.explanation && (
                                                <div className="case-io-row">
                                                    <span className="io-name">Explanation:</span>
                                                    <span className="io-exp">{tc.explanation}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Bottom Navigation on Left Pane */}
                        <div className="pane-nav-footer">
                            <button
                                type="button"
                                className="arena-nav-btn prev-btn"
                                disabled={currentIndex === 0}
                                onClick={() => handleNavigateToQuestion(Math.max(0, currentIndex - 1))}
                            >
                                <ArrowLeftIcon size={14} />
                                <span>Previous</span>
                            </button>

                            <button
                                type="button"
                                className="arena-nav-btn mobile-jump-btn"
                                onClick={() => setMobileTab('ide')}
                            >
                                <span>{currentQ.category === 'DSA' ? 'Open Editor 💻' : 'Open Answer ✏️'}</span>
                            </button>

                            <button
                                type="button"
                                className="arena-nav-btn next-btn"
                                disabled={currentIndex === totalQuestions - 1}
                                onClick={() => handleNavigateToQuestion(Math.min(totalQuestions - 1, currentIndex + 1))}
                            >
                                <span>Next</span>
                                <ArrowRightIcon size={14} />
                            </button>
                        </div>
                    </section>

                    {/* ========================================================
                        B. RIGHT PANEL: IN-BROWSER CODE IDE OR QUIZ CONSOLE
                       ======================================================== */}
                    <section className="arena-right-pane">
                        {/* MODE 1: DSA IN-BROWSER CODE IDE WITH MONACO EDITOR */}
                        {currentQ.category === 'DSA' && (
                            <div className="arena-ide-wrapper">
                                {/* Editor Toolbar */}
                                <div className="ide-toolbar">
                                    <div className="lang-picker-group">
                                        <span className="lang-picker-label">Language:</span>
                                        <div className="lang-buttons-row">
                                            {SUPPORTED_LANGUAGES.map(lang => {
                                                const IconComp = lang.icon;
                                                const isActive = selectedLanguage === lang.id;
                                                return (
                                                    <button
                                                        key={lang.id}
                                                        type="button"
                                                        className={`lang-select-pill ${isActive ? 'active' : ''}`}
                                                        onClick={() => handleLanguageChange(lang.id)}
                                                    >
                                                        <IconComp size={15} />
                                                        <span>{lang.name}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="reset-code-btn"
                                        onClick={handleResetStarterCode}
                                        title="Reset to fresh boilerplate template"
                                    >
                                        <UndoIcon size={13} />
                                        <span>Reset Boilerplate</span>
                                    </button>
                                </div>

                                {/* Monaco Code Editor */}
                                <div className="monaco-host-container">
                                    <Editor
                                        key={`mock_dsa_${currentQ?._id}_${selectedLanguage}`}
                                        height="100%"
                                        language={selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage === 'java' ? 'java' : selectedLanguage === 'javascript' ? 'javascript' : 'python'}
                                        theme="vs-dark"
                                        defaultValue={codeCacheRef.current[currentQ?._id] || answers[currentQ?._id]?.codeAnswer || generateLeetCodeTemplate(selectedLanguage, currentQ)}
                                        onChange={handleCodeChange}
                                        onMount={(editor) => {
                                            editorRef.current = editor;
                                            try {
                                                const model = editor.getModel();
                                                if (model) {
                                                    const lines = model.getLinesContent();
                                                    let targetLine = 1;
                                                    for (let i = 0; i < lines.length; i++) {
                                                        const l = lines[i];
                                                        if (l.includes('pass') || l.includes('TODO') || l.includes('// Write') || l.includes('# Write') || l.includes('return')) {
                                                            targetLine = i + 1;
                                                            break;
                                                        }
                                                    }
                                                    if (targetLine === 1 && lines.length > 2) {
                                                        targetLine = Math.min(3, lines.length);
                                                    }
                                                    editor.setPosition({ lineNumber: targetLine, column: 999 });
                                                    editor.focus();
                                                }
                                            } catch (e) {}
                                        }}
                                        options={{
                                            fontSize: 13.5,
                                            fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, Menlo, Consolas, monospace",
                                            minimap: { enabled: false },
                                            scrollBeyondLastLine: false,
                                            lineNumbers: 'on',
                                            roundedSelection: true,
                                            cursorBlinking: 'smooth',
                                            cursorSmoothCaretAnimation: 'on',
                                            cursorSurroundingLines: 3,
                                            autoClosingBrackets: 'always',
                                            autoClosingQuotes: 'always',
                                            fixedOverflowWidgets: true,
                                            automaticLayout: true,
                                            tabSize: 4,
                                            renderWhitespace: 'none',
                                            padding: { top: 12, bottom: 20 }
                                        }}
                                    />
                                </div>

                                {/* Bottom Testcase & Execution Console */}
                                <div className="ide-console-dock">
                                    <div className="console-tabs-strip">
                                        <div className="console-testcases-tabs">
                                            <span className="console-label">Testcase:</span>
                                            {sampleCases.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className={`tc-tab-btn ${selectedCaseIdx === idx ? 'active' : ''}`}
                                                    onClick={() => setSelectedCaseIdx(idx)}
                                                >
                                                    Case {idx + 1}
                                                </button>
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            className="run-testcase-btn"
                                            onClick={handleRunCodeAgainstTestcases}
                                            disabled={runningCode}
                                        >
                                            {runningCode ? (
                                                <>
                                                    <SpinnerIcon size={14} />
                                                    <span>Running...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <PlayIcon size={13} />
                                                    <span>Run Code</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Testcase Input / Output Preview or Run Results */}
                                    <div className="console-output-pane">
                                        {codeRunResult ? (
                                            <div className="run-results-viewer">
                                                <div className="result-status-header">
                                                    <span className={`run-status-chip ${codeRunResult.status === 'Accepted' || codeRunResult.status === 'Passed' ? 'passed' : 'failed'}`}>
                                                        {codeRunResult.status || 'Executed'}
                                                    </span>
                                                    {codeRunResult.runtime && (
                                                        <span className="run-time-meta">Runtime: {codeRunResult.runtime}ms</span>
                                                    )}
                                                </div>

                                                <div className="result-io-grid">
                                                    <div className="io-col">
                                                        <span className="io-col-title">Sample Input:</span>
                                                        <pre className="io-col-body">{sampleCases[selectedCaseIdx]?.input || 'N/A'}</pre>
                                                    </div>
                                                    <div className="io-col">
                                                        <span className="io-col-title">Expected:</span>
                                                        <pre className="io-col-body">{sampleCases[selectedCaseIdx]?.output || 'N/A'}</pre>
                                                    </div>
                                                    <div className="io-col">
                                                        <span className="io-col-title">Your Output:</span>
                                                        <pre className="io-col-body actual">{codeRunResult.results?.[selectedCaseIdx]?.actual || codeRunResult.output || codeRunResult.stdout || 'Program executed'}</pre>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="case-preview-viewer">
                                                <div className="case-row">
                                                    <span className="case-key">Input:</span>
                                                    <code className="case-val">{sampleCases[selectedCaseIdx]?.input || 'Sample Input'}</code>
                                                </div>
                                                <div className="case-row">
                                                    <span className="case-key">Expected Output:</span>
                                                    <code className="case-val">{sampleCases[selectedCaseIdx]?.output || 'Sample Output'}</code>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* MODE 2: APTITUDE / MCQ INTERFACE */}
                        {currentQ.category === 'Aptitude' && (
                            <div className="arena-mcq-wrapper">
                                <div className="mcq-console-header">
                                    <h3>Select Correct Option</h3>
                                    <p>Select one of the 4 options below. Your choice is automatically recorded into your assessment.</p>
                                </div>

                                <div className="mcq-options-grid">
                                    {(currentQ.options || []).map((opt, optIdx) => {
                                        const letter = String.fromCharCode(65 + optIdx);
                                        const isSelected = answers[currentQ._id]?.selectedOption === letter;

                                        return (
                                            <div
                                                key={optIdx}
                                                className={`mcq-card-option ${isSelected ? 'selected' : ''}`}
                                                onClick={() => handleAnswerMCQ(currentQ._id, letter)}
                                            >
                                                <div className="mcq-radio-circle">
                                                    <span className="mcq-letter-label">{letter}</span>
                                                    {isSelected && <div className="radio-dot" />}
                                                </div>
                                                <div className="mcq-text-content">
                                                    <span className="mcq-opt-text">{opt}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {answers[currentQ._id]?.selectedOption && (
                                    <div className="mcq-selection-confirmed">
                                        <CheckIcon size={14} />
                                        <span>Option <strong>{answers[currentQ._id].selectedOption}</strong> registered for Question {currentIndex + 1}.</span>
                                        <button 
                                            type="button" 
                                            className="clear-choice-btn"
                                            onClick={() => handleAnswerMCQ(currentQ._id, '')}
                                        >
                                            Clear Selection
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* MODE 3: TECHNICAL & HR INTERVIEW (STAR FORMAT) */}
                        {currentQ.category === 'Interview' && (
                            <div className="arena-star-wrapper">
                                <div className="star-console-header">
                                    <div className="star-header-left">
                                        <span className="star-framework-tag">STAR Behavioral Framework</span>
                                        <h4>Structured Response Workspace</h4>
                                    </div>
                                    <span className="star-word-counter">
                                        {(answers[currentQ._id]?.responseText || '').split(/\s+/).filter(Boolean).length} words
                                    </span>
                                </div>

                                <div className="star-guidance-strip">
                                    <div className="star-pillar"><strong>S</strong>: Situation</div>
                                    <div className="star-pillar"><strong>T</strong>: Task</div>
                                    <div className="star-pillar"><strong>A</strong>: Action Taken</div>
                                    <div className="star-pillar"><strong>R</strong>: Measurable Result</div>
                                </div>

                                <textarea
                                    className="star-response-editor"
                                    rows={14}
                                    placeholder="Structure your interview response using the STAR framework:&#10;&#10;Situation: Detail the engineering or operational context...&#10;Task: What challenge or objective were you tasked with?&#10;Action: What concrete architectural or technical decisions did you make?&#10;Result: What quantifiable metric or outcome was achieved?"
                                    value={answers[currentQ._id]?.responseText || ''}
                                    onChange={e => handleResponseChange(currentQ._id, e.target.value)}
                                />
                            </div>
                        )}
                    </section>
                </main>
                </>
            )}

            {/* 5. POST-SUBMISSION AI DIAGNOSTIC REPORT CARD */}
            {diagnosticReport && (
                <div className="arena-report-container">
                    <div className="report-content-max">
                        {/* Score Hero Banner */}
                        <div className={`report-score-hero ${diagnosticReport.passed ? 'passed' : 'needs-work'}`}>
                            <div className="score-meter-wrap">
                                <div className="score-circle">
                                    <span className="score-number">{diagnosticReport.score}%</span>
                                    <span className="score-label">Score</span>
                                </div>
                            </div>

                            <div className="score-details">
                                <div className="verdict-tag">
                                    {diagnosticReport.passed ? '✅ ROUND CLEARANCE ACHIEVED' : '⚠️ TARGETED PRACTICE NEEDED'}
                                </div>
                                <h3 className="verdict-headline">{diagnosticReport.verdict}</h3>
                                <p className="verdict-sub">
                                    {company} • {diagnosticReport.roundTitle} • Solved {diagnosticReport.correctCount} of {diagnosticReport.totalQuestions} Questions Correctly
                                </p>
                            </div>
                        </div>

                        {/* Tab Switcher */}
                        <div className="report-tabs-bar">
                            <button
                                type="button"
                                className={`report-tab ${activeReviewTab === 'summary' ? 'active' : ''}`}
                                onClick={() => setActiveReviewTab('summary')}
                            >
                                <BrainIcon size={15} />
                                <span>Strong & Weak Zones Radar</span>
                            </button>
                            <button
                                type="button"
                                className={`report-tab ${activeReviewTab === 'diagnostics' ? 'active' : ''}`}
                                onClick={() => setActiveReviewTab('diagnostics')}
                            >
                                <TargetIcon size={15} />
                                <span>Detailed Question Solutions ({diagnosticReport.questionDiagnostics?.length || 0})</span>
                            </button>
                        </div>

                        {/* TAB 1: SUMMARY (STRONG & WEAK ZONES) */}
                        {activeReviewTab === 'summary' && (
                            <div className="report-tab-pane">
                                <div className="zones-grid">
                                    {/* Strong Zones */}
                                    <div className="zone-card strong-zone-card">
                                        <div className="zone-card-header">
                                            <span className="zone-icon">🟢</span>
                                            <h4>Demonstrated Strong Zones</h4>
                                        </div>
                                        <p className="zone-sub">Topics where your accuracy was above 70%.</p>
                                        <div className="zone-chips-wrap">
                                            {diagnosticReport.strongZones && diagnosticReport.strongZones.length > 0 ? (
                                                diagnosticReport.strongZones.map((sz, idx) => (
                                                    <span key={idx} className="zone-chip strong-chip">
                                                        ✓ {sz}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="zone-empty-text">Continue practicing to solidify strong zones.</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Weak Zones */}
                                    <div className="zone-card weak-zone-card">
                                        <div className="zone-card-header">
                                            <span className="zone-icon">🔴</span>
                                            <h4>Vulnerable / Weak Zones</h4>
                                        </div>
                                        <p className="zone-sub">High-priority areas requiring immediate remediation.</p>
                                        <div className="zone-chips-wrap">
                                            {diagnosticReport.weakZones && diagnosticReport.weakZones.length > 0 ? (
                                                diagnosticReport.weakZones.map((wz, idx) => (
                                                    <span key={idx} className="zone-chip weak-chip">
                                                        ⚠ {wz}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="zone-empty-text">Zero critical weak zones identified! Outstanding performance.</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Targeted Remediation Questions */}
                                {diagnosticReport.remediationQuestions && diagnosticReport.remediationQuestions.length > 0 && (
                                    <div className="remediation-section">
                                        <div className="remediation-header">
                                            <SparklesIcon size={16} />
                                            <h4>Targeted Practice Recommendations to Plug Weak Zones</h4>
                                        </div>
                                        <div className="remediation-list">
                                            {diagnosticReport.remediationQuestions.map(rq => (
                                                <div key={rq._id} className="remediation-item">
                                                    <div className="rem-left">
                                                        <span className={`diff-pill ${rq.difficulty?.toLowerCase() || 'medium'}`}>
                                                            {rq.difficulty || 'Medium'}
                                                        </span>
                                                        <span className="rem-title">{rq.title}</span>
                                                        <span className="rem-topic">{rq.topic}</span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="rem-solve-btn"
                                                        onClick={() => {
                                                            onClose();
                                                            if (onSolveQuestion) onSolveQuestion(rq);
                                                        }}
                                                    >
                                                        <PlayIcon size={12} />
                                                        <span>Practice in IDE</span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* TAB 2: DETAILED QUESTION DIAGNOSTICS */}
                        {activeReviewTab === 'diagnostics' && (
                            <div className="report-tab-pane">
                                <div className="diagnostics-list">
                                    {(diagnosticReport.questionDiagnostics || []).map((qd, qIdx) => (
                                        <div key={qd.questionId || qIdx} className={`diag-item ${qd.isCorrect ? 'correct' : 'incorrect'}`}>
                                            <div className="diag-item-head">
                                                <div className="diag-title-row">
                                                    <span className={`diag-status-badge ${qd.isCorrect ? 'is-correct' : 'is-wrong'}`}>
                                                        {qd.isCorrect ? '✓ Correct' : '✗ Needs Improvement'}
                                                    </span>
                                                    <h5 className="diag-q-title">Q{qIdx + 1}: {qd.title}</h5>
                                                </div>
                                                <div className="diag-meta-tags">
                                                    <span className="diag-meta-tag">{qd.category}</span>
                                                    <span className="diag-meta-tag">{qd.topic}</span>
                                                    {qd.recollectionType && (
                                                        <span className={`arena-badge recollection-badge recollection-${qd.recollectionType}`}>
                                                            {qd.recollectionType === 'original' && '🎯 Exact Statement'}
                                                            {qd.recollectionType === 'constraint' && '⚡ Modified Constraints'}
                                                            {qd.recollectionType === 'randomised' && '🧠 Recalled Scenario'}
                                                        </span>
                                                    )}
                                                    {(!qd.matchedProblems || qd.matchedProblems.length === 0 || qd.isNovel) ? (
                                                        <span className="arena-badge exclusive-badge">
                                                            <SparklesIcon size={11} /> Company Exclusive • Campus OA
                                                        </span>
                                                    ) : (
                                                        <span className="arena-badge leetcode-badge">
                                                            <LeetCodeIcon size={12} /> LeetCode: {qd.matchedProblems[0]?.problemName}
                                                        </span>
                                                    )}
                                                    {qd.source && (
                                                        <span className="arena-badge source-badge">
                                                            Source: {qd.source}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="diag-answers-box">
                                                <div className="diag-ans-row">
                                                    <span className="ans-label">Your Submission:</span>
                                                    <span className="ans-val user-val">{qd.userAnswer || 'Not answered'}</span>
                                                </div>
                                                {qd.correctOption && (
                                                    <div className="diag-ans-row">
                                                        <span className="ans-label">Correct Option:</span>
                                                        <span className="ans-val correct-val">{qd.correctOption}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="diag-explanation">
                                                <span className="exp-label">Explanation & Blueprint:</span>
                                                <p className="exp-text">{qd.explanation}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Report Footer Actions */}
                        <div className="mock-report-footer">
                            <button
                                type="button"
                                className="report-retake-btn"
                                onClick={handleRetakeTest}
                            >
                                <SparklesIcon size={14} />
                                <span>Retake Test (Generate New Questions)</span>
                            </button>
                            <button
                                type="button"
                                className="report-done-btn"
                                onClick={onClose}
                            >
                                <span>Save Report & Return to Sankalp</span>
                                <ArrowRightIcon size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MockAssessmentModal;
