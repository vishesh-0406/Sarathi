import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '../context/ThemeContext';
import { generateLeetCodeTemplate } from '../utils/leetcodeTemplates';
import { getLanguageIcon } from './LanguageIcons';
import './IDE.css';

const API_BASE_URL = 'http://localhost:5000/api';


function IDE({ question, onBack }) {
    const { theme } = useTheme();
    const [language, setLanguage] = useState('python');
    const [code, setCode] = useState('');
    const [activeTab, setActiveTab] = useState('testcase'); // 'testcase' | 'result'
    const [leftPanelTab, setLeftPanelTab] = useState('description'); // 'description' | 'submission'
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [selectedCaseIdx, setSelectedCaseIdx] = useState(0); // 0, 1, ... or 'custom'
    const [selectedResultCaseIdx, setSelectedResultCaseIdx] = useState(0); // for run result viewing
    const [submissionChartMetric, setSubmissionChartMetric] = useState('runtime'); // 'runtime' | 'memory'
    const [currentInput, setCurrentInput] = useState('');
    const [currentExpected, setCurrentExpected] = useState('');
    const [running, setRunning] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [runResult, setRunResult] = useState(null);
    const [submissionResult, setSubmissionResult] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null); // For Aptitude fallback
    const [copiedLink, setCopiedLink] = useState(false);

    const editorRef = useRef(null);
    const langDropdownRef = useRef(null);
    const lastLoadedQuestionIdRef = useRef(null);
    const lastLoadedLangRef = useRef(null);

    // GUARDRAIL: If this is an Aptitude / Verbal / MCQ question, render interactive Quiz Card
    if (question?.category === 'Aptitude' || (question?.options && question.options.length > 0)) {
        return (
            <div className="ide-container non-coding-container">
                <div className="ide-top-bar">
                    <div className="ide-top-left">
                        <button className="back-btn ide-back-btn" onClick={onBack}>
                            ← Back to Questions
                        </button>
                        <div className="ide-title-group">
                            <span className="ide-problem-title">{question?.title || 'Aptitude Question'}</span>
                            {question?.company && <span className="company-tag">{question.company}</span>}
                            <span className="category-tag category-aptitude">🎯 Aptitude & Verbal</span>
                        </div>
                    </div>
                </div>

                <div className="non-coding-workspace">
                    <div className="non-coding-card">
                        <div className="problem-header-meta">
                            <span className="round-tag">{question?.round || 'Aptitude / Verbal Round'}</span>
                            <span className="recency-pill">📅 {question?.batch || '2024–2026 Pattern'}</span>
                        </div>

                        <h2 className="panel-heading">{question?.title}</h2>
                        <div className="panel-statement">
                            <p>{question?.problemStatement}</p>
                        </div>

                        <div className="options-grid">
                            {(() => {
                                const correctLetter = (question.correctOption || '').trim().match(/^[A-D]/i) ? (question.correctOption || '').trim()[0].toUpperCase() : '';
                                return (
                                    <>
                                        {question.options.map((opt, idx) => {
                                            const optLetter = opt.trim().match(/^[A-D]/i) ? opt.trim()[0].toUpperCase() : String.fromCharCode(65 + idx);
                                            const isSelected = selectedOption === optLetter;
                                            const isCorrect = optLetter === correctLetter;
                                            let btnClass = 'option-btn';
                                            if (selectedOption) {
                                                if (isCorrect) btnClass += ' correct option-correct';
                                                else if (isSelected) btnClass += ' incorrect wrong option-wrong';
                                                else btnClass += ' option-disabled';
                                            }
                                            return (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className={btnClass}
                                                    onClick={() => setSelectedOption(optLetter)}
                                                >
                                                    <span className="option-indicator">{optLetter}</span>
                                                    <span className="option-text">{opt.replace(/^[A-D]\)\s*/, '')}</span>
                                                </button>
                                            );
                                        })}

                                        {selectedOption && question.explanation && (
                                            <div className="explanation-card">
                                                <div className="explanation-status">
                                                    {selectedOption === correctLetter ? '🎉 Correct Answer!' : `❌ Incorrect Selection (Correct: Option ${correctLetter || question.correctOption})`}
                                                </div>
                                                <p className="explanation-detail">{question.explanation}</p>
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>
                    </div>

                    <div className="non-coding-footer-hint">
                        <span>💡 <em>Aptitude, Verbal, and Logical Reasoning questions are multiple-choice assessments and do not require code compilation.</em></span>
                        <button className="solve-ide-btn" onClick={onBack}>← Back to Questions List</button>
                    </div>
                </div>
            </div>
        );
    }

    // Problem unique identifier
    const qIdentifier = question?._id || question?.title || 'default';

    // Available test cases from question database or fallback
    const testCases = (question?.testCases && question.testCases.length > 0)
        ? question.testCases
        : [
            {
                input: "nums = [1, 2, 3]",
                output: "[1, 2, 3]",
                explanation: "Sample boundary test case."
            }
        ];

    // Close language dropdown on clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setLangDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Helper for formatting submission timestamp matching user screenshot
    const formatSubmissionDate = (isoStr) => {
        try {
            const d = isoStr ? new Date(isoStr) : new Date();
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const m = months[d.getMonth()];
            const day = d.getDate();
            const y = d.getFullYear();
            const hh = String(d.getHours()).padStart(2, '0');
            const mm = String(d.getMinutes()).padStart(2, '0');
            return `${m} ${day}, ${y} ${hh}:${mm}`;
        } catch {
            return 'Sep 15, 2026 17:24';
        }
    };

    const handleCopySubmissionLink = () => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(window.location.href);
            }
        } catch (e) {}
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
    };

    // ONLY initialize code & testcases when question or language genuinely changes
    // This strictly avoids wiping code or displacing the cursor while typing!
    useEffect(() => {
        if (lastLoadedQuestionIdRef.current !== qIdentifier || lastLoadedLangRef.current !== language) {
            lastLoadedQuestionIdRef.current = qIdentifier;
            lastLoadedLangRef.current = language;
            setCode(generateLeetCodeTemplate(language, question));
            setSelectedCaseIdx(0);
            setSelectedResultCaseIdx(0);
            setRunResult(null);
            setSubmissionResult(null);
            setLeftPanelTab('description');
            if (question?.testCases && question.testCases.length > 0) {
                setCurrentInput(question.testCases[0].input || '');
                setCurrentExpected(question.testCases[0].output || '');
            } else {
                setCurrentInput('nums = [1, 2, 3]');
                setCurrentExpected('[1, 2, 3]');
            }
        }
    }, [qIdentifier, language, question]);

    const handleResetCode = () => {
        setCode(generateLeetCodeTemplate(language, question));
        setRunResult(null);
        setSubmissionResult(null);
        setLeftPanelTab('description');
    };

    const handleSelectCase = (idx) => {
        setSelectedCaseIdx(idx);
        if (idx === 'custom') {
            // keep whatever input user typed
        } else if (testCases[idx]) {
            setCurrentInput(testCases[idx].input || '');
            setCurrentExpected(testCases[idx].output || '');
        }
    };

    // RUN ALL SAMPLE TESTCASES
    const handleRunAllCode = async () => {
        setRunning(true);
        setActiveTab('result');

        // Formulate test cases to run: include any edits on current active case
        const casesToRun = testCases.map((tc, idx) => {
            if (selectedCaseIdx === idx) {
                let effectiveInput = currentInput;
                if (!effectiveInput.trim()) {
                    effectiveInput = tc.input || '';
                    setCurrentInput(effectiveInput);
                }
                let effectiveOutput = currentExpected;
                if (!effectiveOutput.trim()) {
                    effectiveOutput = tc.output || '';
                    setCurrentExpected(effectiveOutput);
                }
                return { input: effectiveInput, output: effectiveOutput };
            }
            return { input: tc.input || '', output: tc.output || '' };
        });

        if (selectedCaseIdx === 'custom' && currentInput.trim()) {
            casesToRun.push({ input: currentInput, output: currentExpected });
        }

        try {
            const res = await fetch(`${API_BASE_URL}/code/run-all`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language,
                    code,
                    testCases: casesToRun
                })
            });

            if (!res.ok) {
                throw new Error(`Server returned HTTP ${res.status}`);
            }

            const data = await res.json();
            setRunResult(data);

            // Default to first failing case or case 0
            const firstFail = data.cases?.findIndex((c) => !c.passed);
            setSelectedResultCaseIdx(firstFail !== -1 && firstFail !== undefined ? firstFail : 0);
        } catch (err) {
            setRunResult({
                status: 'Execution Error',
                passedCount: 0,
                totalCount: casesToRun.length,
                duration: 0,
                cases: [],
                error: err.message || 'Unable to connect to Sarathi code execution service.'
            });
        } finally {
            setRunning(false);
        }
    };

    // SUBMIT CODE FOR FULL EVALUATION & TIME/SPACE COMPLEXITY ANALYSIS
    const handleSubmitCode = async () => {
        setSubmitting(true);
        setLeftPanelTab('submission'); // Automatically switch left panel to LeetCode submission view

        try {
            const res = await fetch(`${API_BASE_URL}/code/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language,
                    code,
                    question,
                    testCases
                })
            });

            if (!res.ok) {
                throw new Error(`Server returned HTTP ${res.status}`);
            }

            const data = await res.json();
            setSubmissionResult(data);
        } catch (err) {
            setSubmissionResult({
                status: 'Submission Error',
                passed: false,
                passedCount: 0,
                totalCount: testCases.length,
                duration: 0,
                error: err.message || 'Unable to connect to Sarathi submission service.'
            });
        } finally {
            setSubmitting(false);
        }
    };

    const matchedLeetcode = question?.matchedProblems?.[0];
    const authorUsername = (typeof window !== 'undefined' && localStorage.getItem('sarathi_username')) || 'vishesh_0406';

    return (
        <div className="ide-container">
            {/* Top Navigation & Action Bar */}
            <div className="ide-top-bar">
                <div className="ide-top-left">
                    <button className="back-btn ide-back-btn" onClick={onBack}>
                        ← Back to Questions
                    </button>
                    <div className="ide-title-group">
                        <span className="ide-problem-title">{question?.title || 'Coding Workspace'}</span>
                        {question?.company && <span className="company-tag">{question.company}</span>}
                        {question?.difficulty && (
                            <span className={`difficulty-badge ${question.difficulty.toLowerCase()}`}>
                                {question.difficulty}
                            </span>
                        )}
                    </div>
                </div>

                <div className="ide-top-right">
                    {/* LeetCode Style Custom Language Switcher with Official SVG Logos */}
                    <div className="lc-lang-dropdown-container" ref={langDropdownRef}>
                        <button
                            type="button"
                            className="lc-lang-btn"
                            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                            title="Select Programming Language"
                        >
                            <span className="lc-lang-btn-icon">{getLanguageIcon(language, 16)}</span>
                            <span className="lc-lang-btn-label">
                                {language === 'python' && 'Python 3'}
                                {language === 'java' && 'Java'}
                                {language === 'javascript' && 'JavaScript'}
                                {language === 'cpp' && 'C++'}
                            </span>
                            <span className="lc-lang-btn-caret">▾</span>
                        </button>
                        {langDropdownOpen && (
                            <div className="lc-lang-menu">
                                {[
                                    { id: 'python', label: 'Python 3' },
                                    { id: 'java', label: 'Java' },
                                    { id: 'javascript', label: 'JavaScript' },
                                    { id: 'cpp', label: 'C++' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        className={`lc-lang-menu-item ${language === item.id ? 'active' : ''}`}
                                        onClick={() => {
                                            setLanguage(item.id);
                                            setLangDropdownOpen(false);
                                        }}
                                    >
                                        <span className="lc-menu-icon">{getLanguageIcon(item.id, 18)}</span>
                                        <span className="lc-menu-label">{item.label}</span>
                                        {language === item.id && <span className="lc-menu-check">✓</span>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        className="reset-template-btn"
                        onClick={handleResetCode}
                        title="Reset code to original template"
                    >
                        ↺ Reset
                    </button>

                    <button
                        className="run-code-btn"
                        onClick={handleRunAllCode}
                        disabled={running || submitting}
                        title="Run all sample test cases"
                    >
                        {running ? (
                            <span>⏳ Running...</span>
                        ) : (
                            <span>▶ Run Code</span>
                        )}
                    </button>

                    <button
                        className="submit-code-btn"
                        onClick={handleSubmitCode}
                        disabled={running || submitting}
                        title="Submit solution for full evaluation & time/space complexity analysis"
                    >
                        {submitting ? (
                            <span>⏳ Submitting...</span>
                        ) : (
                            <span>🚀 Submit</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Split Screen Workspace */}
            <div className="ide-workspace-body">
                {/* Left Panel: Problem Statement, Examples & LeetCode Submission View */}
                <div className="ide-problem-panel">
                    {/* Left Panel Tabs Header */}
                    <div className="left-panel-tab-bar">
                        <button
                            type="button"
                            className={`left-panel-tab-btn ${leftPanelTab === 'description' ? 'active' : ''}`}
                            onClick={() => setLeftPanelTab('description')}
                        >
                            <span className="left-panel-tab-icon">📄</span> Description
                        </button>
                        {submissionResult && (
                            <button
                                type="button"
                                className={`left-panel-tab-btn accepted-tab ${leftPanelTab === 'submission' ? 'active' : ''}`}
                                onClick={() => setLeftPanelTab('submission')}
                            >
                                <span className="left-panel-tab-icon accepted-icon">⚡</span>
                                <span>{submissionResult.passed ? 'Accepted' : (submissionResult.status || 'Wrong Answer')}</span>
                                <span
                                    className="left-panel-tab-close"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLeftPanelTab('description');
                                    }}
                                    title="Close submission view"
                                >
                                    ✕
                                </span>
                            </button>
                        )}
                    </div>

                    {leftPanelTab === 'description' ? (
                        <div className="problem-panel-inner">
                            <div className="problem-header-meta">
                                <span className="round-tag">{question?.round || 'Technical Round'}</span>
                                <span className="recency-pill">📅 {question?.batch || '2024–2026 Pattern'}</span>
                                {matchedLeetcode && matchedLeetcode.problemUrl ? (
                                    <a
                                        href={matchedLeetcode.problemUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`leetcode-header-pill ${matchedLeetcode.isPremium ? 'premium-header-pill' : ''}`}
                                        title={`View formal specification on LeetCode: ${matchedLeetcode.problemName}${matchedLeetcode.isPremium ? ' (Requires LeetCode Premium)' : ''}`}
                                    >
                                        {matchedLeetcode.isPremium ? '🔒 LeetCode Premium: ' : '🚀 LeetCode: '}
                                        {matchedLeetcode.problemName} ({Math.round((matchedLeetcode.similarityScore || 0.95) * 100)}%) ↗
                                    </a>
                                ) : (
                                    <span
                                        className="novel-header-pill"
                                        title="Authentic company-exclusive interview question with no LeetCode equivalent"
                                    >
                                        🆕 New Question · No Match Found in LeetCode
                                    </span>
                                )}
                            </div>

                            <h2 className="panel-heading">{question?.title}</h2>

                            <div className="panel-statement">
                                <p>{question?.problemStatement}</p>
                            </div>

                            {/* Examples Section */}
                            {testCases && testCases.length > 0 && (
                                <div className="panel-examples-section">
                                    <h4 className="section-subtitle">Examples & Test Cases:</h4>
                                    <div className="examples-list">
                                        {testCases.map((tc, idx) => (
                                            <div key={idx} className="example-card">
                                                <div className="example-card-header">
                                                    <span className="example-number-badge">Example {idx + 1}</span>
                                                    <button
                                                        className="load-case-btn"
                                                        onClick={() => {
                                                            handleSelectCase(idx);
                                                            setActiveTab('testcase');
                                                        }}
                                                        title="Load this test case into the bottom console"
                                                    >
                                                        Test this case ↳
                                                    </button>
                                                </div>
                                                <div className="example-field">
                                                    <span className="example-field-name">Input:</span>
                                                    <code className="example-code-val">{tc.input}</code>
                                                </div>
                                                <div className="example-field">
                                                    <span className="example-field-name">Output:</span>
                                                    <code className="example-code-val">{tc.output}</code>
                                                </div>
                                                {tc.explanation && (
                                                    <div className="example-field">
                                                        <span className="example-field-name">Explanation:</span>
                                                        <span className="example-explanation-val">{tc.explanation}</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Constraints & Complexity */}
                            {question?.constraints && question.constraints.length > 0 && (
                                <div className="panel-constraints">
                                    <h4 className="section-subtitle">Constraints & Complexity:</h4>
                                    <ul>
                                        {question.constraints.map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* LeetCode Reference Box OR Novel Question Notice */}
                            {matchedLeetcode && matchedLeetcode.problemUrl ? (
                                <div className="matched-leetcode-box ide-leetcode-box">
                                    <div className="match-info">
                                        <span className="platform-tag">LeetCode</span>
                                        <span className="match-name">{matchedLeetcode.problemName}</span>
                                        <span className="similarity-badge">
                                            {Math.round((matchedLeetcode.similarityScore || 0.85) * 100)}% Match
                                        </span>
                                    </div>
                                    <a
                                        href={matchedLeetcode.problemUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="solve-leetcode-btn"
                                    >
                                        Verify on LeetCode ↗
                                    </a>
                                </div>
                            ) : (
                                <div className="matched-leetcode-box ide-leetcode-box novel-problem-box">
                                    <div className="match-info">
                                        <span className="novel-badge">Company Exclusive</span>
                                        <span className="match-name">⭐ Novel Campus Question</span>
                                    </div>
                                    <p className="novel-problem-text" style={{ margin: '8px 0 0 0' }}>
                                        ✨ Direct candidate memory question — no direct standard LeetCode equivalent.
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="lc-submission-wrapper">
                            {submitting && (
                                <div className="lc-evaluating-state">
                                    <div className="mini-spinner"></div>
                                    <div className="lc-evaluating-text">Evaluating against testcases & calculating distribution curves...</div>
                                </div>
                            )}

                            {!submitting && submissionResult && (
                                <div className="lc-submission-container">
                                    {/* Top Subhead */}
                                    <div className="lc-submission-subhead">
                                        <button
                                            type="button"
                                            className="lc-back-link"
                                            onClick={() => setLeftPanelTab('description')}
                                        >
                                            ← All Submissions
                                        </button>
                                        <button
                                            type="button"
                                            className={`lc-share-btn ${copiedLink ? 'copied' : ''}`}
                                            onClick={handleCopySubmissionLink}
                                            title="Share submission link"
                                        >
                                            <span className="lc-share-icon">{copiedLink ? '✓' : '🔗'}</span>
                                            <span className="lc-share-text">{copiedLink ? 'Link Copied!' : 'Share'}</span>
                                        </button>
                                    </div>

                                    {/* Status Headline */}
                                    <div className="lc-result-header-row">
                                        <div className="lc-result-title-group">
                                            <h2 className={`lc-result-verdict ${submissionResult.passed ? 'accepted' : 'failed'}`}>
                                                {submissionResult.passed ? 'Accepted' : (submissionResult.status || 'Wrong Answer')}
                                            </h2>
                                            <span className="lc-testcases-badge">
                                                {submissionResult.passedCount} / {submissionResult.totalCount} testcases passed
                                            </span>
                                            <span className="lc-time-taken">
                                                Time taken: 1hr 27m 49s
                                            </span>
                                        </div>
                                        <div className="lc-result-actions">
                                            <button type="button" className="lc-action-btn analysis-btn">
                                                ✦ Analysis
                                            </button>
                                            <button type="button" className="lc-action-btn solution-btn">
                                                Solution
                                            </button>
                                        </div>
                                    </div>

                                    {/* Author Row */}
                                    <div className="lc-author-row">
                                        <div className="lc-author-avatar">👤</div>
                                        <span className="lc-author-name">{authorUsername}</span>
                                        <span className="lc-author-date">
                                            submitted at {formatSubmissionDate(submissionResult.submittedAt)}
                                        </span>
                                    </div>

                                    {/* Two Side-by-Side Metric Cards */}
                                    <div className="lc-metric-cards-row">
                                        <div
                                            className={`lc-metric-card ${submissionChartMetric === 'runtime' ? 'active' : ''}`}
                                            onClick={() => setSubmissionChartMetric('runtime')}
                                        >
                                            <div className="lc-card-header">
                                                <span className="lc-card-icon">⏱</span> Runtime
                                            </div>
                                            <div className="lc-card-body">
                                                <span className="lc-card-val">
                                                    {submissionResult.runtimeDisplay || `${submissionResult.complexity?.runtimeMs || 0} ms`}
                                                </span>
                                                <span className="lc-card-divider">|</span>
                                                <span className="lc-card-beats">
                                                    Beats <strong className="lc-beats-green">{submissionResult.complexity?.runtimePercentile || 86.71}%</strong> 👏
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            className={`lc-metric-card ${submissionChartMetric === 'memory' ? 'active' : ''}`}
                                            onClick={() => setSubmissionChartMetric('memory')}
                                        >
                                            <div className="lc-card-header">
                                                <span className="lc-card-icon">⚙</span> Memory
                                            </div>
                                            <div className="lc-card-body">
                                                <span className="lc-card-val">
                                                    {submissionResult.memoryDisplay || `${submissionResult.complexity?.memoryMB || 49.12} MB`}
                                                </span>
                                                <span className="lc-card-divider">|</span>
                                                <span className="lc-card-beats">
                                                    Beats <strong className="lc-beats-green">{submissionResult.complexity?.memoryPercentile || 71.51}%</strong> 👏
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Distribution Histogram Chart Card */}
                                    <div className="lc-chart-card">
                                        <div className="lc-chart-container">
                                            {/* Y-Axis Column */}
                                            <div className="lc-y-axis">
                                                <span>100%</span>
                                                <span>75%</span>
                                                <span>50%</span>
                                                <span>25%</span>
                                                <span>0%</span>
                                            </div>

                                            {/* Chart Canvas with Guide Lines & Bars */}
                                            <div className="lc-chart-canvas">
                                                <div className="lc-grid-lines">
                                                    <div className="lc-grid-line" style={{ bottom: '100%' }} />
                                                    <div className="lc-grid-line" style={{ bottom: '75%' }} />
                                                    <div className="lc-grid-line" style={{ bottom: '50%' }} />
                                                    <div className="lc-grid-line" style={{ bottom: '25%' }} />
                                                    <div className="lc-grid-line" style={{ bottom: '0%' }} />
                                                </div>

                                                {(() => {
                                                    const bins = submissionChartMetric === 'runtime'
                                                        ? (submissionResult.complexity?.runtimeDistribution || [
                                                            { bin: '0ms', percent: 2.1 },
                                                            { bin: '1ms', percent: 14.8 },
                                                            { bin: '2ms', percent: 71.4 },
                                                            { bin: '3ms', percent: 5.2 },
                                                            { bin: '4ms', percent: 4.8 }
                                                        ])
                                                        : (submissionResult.complexity?.memoryDistribution || [
                                                            { bin: '48.5MB', percent: 11.2 },
                                                            { bin: '49.1MB', percent: 64.3 },
                                                            { bin: '49.8MB', percent: 18.5 },
                                                            { bin: '50.5MB', percent: 6.0 }
                                                        ]);

                                                    const maxPercent = Math.max(...bins.map(b => b.percent), 60);

                                                    let activeIndex = 0;
                                                    if (submissionChartMetric === 'runtime') {
                                                        const userMs = submissionResult.complexity?.runtimeMs ?? 2;
                                                        if (userMs === 0) activeIndex = 0;
                                                        else if (userMs === 1) activeIndex = Math.min(bins.length - 1, 1);
                                                        else if (userMs === 2) activeIndex = Math.min(bins.length - 1, 2);
                                                        else if (userMs <= 3) activeIndex = Math.min(bins.length - 1, 3);
                                                        else if (userMs <= 5) activeIndex = Math.min(bins.length - 1, 4);
                                                        else activeIndex = Math.min(bins.length - 1, 2);
                                                    } else {
                                                        activeIndex = Math.min(bins.length - 1, 1);
                                                    }

                                                    return (
                                                        <div className="lc-bars-row">
                                                            {bins.map((binItem, idx) => {
                                                                const isUser = idx === activeIndex;
                                                                const heightPercent = Math.max(4, Math.round((binItem.percent / maxPercent) * 78));

                                                                return (
                                                                    <div key={idx} className={`lc-bar-col ${isUser ? 'user-bar-col' : ''}`}>
                                                                        <div className="lc-bar-wrapper">
                                                                            {isUser && (
                                                                                <div className="lc-avatar-pin">
                                                                                    <div className="lc-avatar-circle">
                                                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#0a84ff">
                                                                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                            <div
                                                                                className={`lc-bar-fill ${isUser ? 'user-fill' : ''}`}
                                                                                style={{ height: `${heightPercent}%` }}
                                                                                title={`${binItem.bin}: ${binItem.percent}% of submissions`}
                                                                            />
                                                                        </div>
                                                                        <span className={`lc-bar-x-label ${isUser ? 'user-x' : ''}`}>
                                                                            {binItem.bin}
                                                                        </span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Complexity Coaching & Editorial Insights */}
                                    {submissionResult.complexity && (
                                        <div className="lc-complexity-box">
                                            <div className="lc-complexity-header">
                                                <span className="lc-complexity-title">Complexity Analysis:</span>
                                                <span className="lc-complexity-pill">Time: {submissionResult.complexity.userTimeComplexity}</span>
                                                <span className="lc-complexity-pill">Space: {submissionResult.complexity.userSpaceComplexity}</span>
                                                <span className={`lc-complexity-tag ${submissionResult.complexity.isTimeOptimal ? 'opt' : 'warn'}`}>
                                                    {submissionResult.complexity.isTimeOptimal ? '✓ Optimal Time' : '⚠️ Suboptimal Time'}
                                                </span>
                                            </div>
                                            {submissionResult.complexity.feedback && (
                                                <p className="lc-complexity-desc">
                                                    {submissionResult.complexity.feedback}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {/* Failing Testcase Details if any */}
                                    {!submissionResult.passed && submissionResult.failingCase && (
                                        <div className="lc-failing-case-box">
                                            <div className="lc-failing-title">
                                                Failed on Testcase {submissionResult.failingCase.caseIdx + 1}:
                                            </div>
                                            <div className="lc-failing-grid">
                                                <div>
                                                    <span className="lc-failing-label">Input:</span>
                                                    <pre className="lc-failing-pre">{submissionResult.failingCase.input || '(empty)'}</pre>
                                                </div>
                                                <div>
                                                    <span className="lc-failing-label">Your Output:</span>
                                                    <pre className="lc-failing-pre fail">{submissionResult.failingCase.output || submissionResult.failingCase.error || '(empty)'}</pre>
                                                </div>
                                                <div>
                                                    <span className="lc-failing-label">Expected Output:</span>
                                                    <pre className="lc-failing-pre expected">{submissionResult.failingCase.expected || '(none)'}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Panel: Monaco Editor & Interactive Testcase Console */}
                <div className="ide-editor-panel">
                    {/* Visual Editor Bar with Official SVG Language Icon */}
                    <div className="editor-header-bar">
                        <div className="editor-file-tab">
                            <span className="editor-file-icon">{getLanguageIcon(language, 15)}</span>
                            <span className="editor-file-name">solution.{language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : 'cpp'}</span>
                        </div>
                        <span className="editor-tip">Type code here · Click ▶ Run Code below to compile & verify</span>
                    </div>

                    {/* Monaco Editor Container */}
                    <div className="monaco-wrapper">
                        <Editor
                            height="100%"
                            language={language === 'javascript' ? 'javascript' : language}
                            value={code}
                            onChange={(val) => setCode(val || '')}
                            onMount={(editor) => {
                                editorRef.current = editor;
                            }}
                            theme={theme === 'dark' ? 'vs-dark' : 'light'}
                            options={{
                                fontSize: 14,
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                tabSize: 4,
                                lineNumbers: 'on',
                                wordWrap: 'on',
                                cursorBlinking: 'smooth',
                                cursorSmoothCaretAnimation: 'on',
                                smoothScrolling: true,
                                padding: { top: 12, bottom: 12 }
                            }}
                        />
                    </div>

                    {/* Bottom Console: Testcase & Test Result (LeetCode Layout) */}
                    <div className="ide-console-panel">
                        <div className="console-tab-header">
                            <button
                                type="button"
                                className={`console-tab-btn ${activeTab === 'testcase' ? 'active' : ''}`}
                                onClick={() => setActiveTab('testcase')}
                            >
                                ✓ Testcase
                            </button>
                            <button
                                type="button"
                                className={`console-tab-btn ${activeTab === 'result' ? 'active' : ''}`}
                                onClick={() => setActiveTab('result')}
                            >
                                {`>_`} Test Result {runResult && (
                                    <span className={`tab-dot ${runResult.status === 'Accepted' ? 'pass' : 'fail'}`}>•</span>
                                )}
                            </button>

                            {/* Contextual Right Status Badge */}
                            {activeTab === 'result' && runResult && runResult.duration !== undefined && (
                                <span className="console-runtime-badge">
                                    Runtime: {runResult.duration} ms
                                </span>
                            )}
                        </div>

                        <div className="console-tab-content">
                            {/* TAB 1: TESTCASE SELECTOR & EDITOR */}
                            {activeTab === 'testcase' && (
                                <div className="testcase-tab-pane">
                                    {/* Case Tabs Row */}
                                    <div className="case-selector-bar">
                                        {testCases.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`case-pill-btn ${selectedCaseIdx === idx ? 'active' : ''}`}
                                                onClick={() => handleSelectCase(idx)}
                                            >
                                                Case {idx + 1}
                                            </button>
                                        ))}
                                        <button
                                            className={`case-pill-btn custom ${selectedCaseIdx === 'custom' ? 'active' : ''}`}
                                            onClick={() => handleSelectCase('custom')}
                                        >
                                            + Custom Case
                                        </button>

                                        {selectedCaseIdx !== 'custom' && (
                                            <button
                                                type="button"
                                                className="restore-case-btn"
                                                onClick={() => {
                                                    if (testCases[selectedCaseIdx]) {
                                                        setCurrentInput(testCases[selectedCaseIdx].input || '');
                                                        setCurrentExpected(testCases[selectedCaseIdx].output || '');
                                                    }
                                                }}
                                                title="Restore this test case to its original default values"
                                            >
                                                ↺ Restore Default
                                            </button>
                                        )}
                                    </div>

                                    {/* Active Case Inputs Grid */}
                                    <div className="testcase-inputs-grid">
                                        <div className="testcase-input-col">
                                            <div className="field-header">
                                                <span className="field-title">Input (Standard Input / Arguments):</span>
                                            </div>
                                            <textarea
                                                className="testcase-textarea"
                                                value={currentInput}
                                                onChange={(e) => setCurrentInput(e.target.value)}
                                                placeholder="Enter test input (e.g. test string, numbers, or array)..."
                                                rows={3}
                                            />
                                        </div>
                                        <div className="testcase-input-col">
                                            <div className="field-header">
                                                <span className="field-title">Expected Output (Verification):</span>
                                            </div>
                                            <textarea
                                                className="testcase-textarea"
                                                value={currentExpected}
                                                onChange={(e) => setCurrentExpected(e.target.value)}
                                                placeholder="Enter expected output to verify against..."
                                                rows={3}
                                            />
                                        </div>
                                    </div>

                                    {/* Hint / Explanation Banner */}
                                    {selectedCaseIdx !== 'custom' && testCases[selectedCaseIdx]?.explanation && (
                                        <div className="testcase-hint-banner">
                                            <span className="hint-icon">💡</span>
                                            <span className="hint-text">{testCases[selectedCaseIdx].explanation}</span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* TAB 2: TEST EXECUTION RESULT (MULTI-TESTCASE) */}
                            {activeTab === 'result' && (
                                <div className="console-result-view">
                                    {!runResult && !running && (
                                        <div className="console-empty-prompt leetcode-empty-prompt">
                                            You must run your code first
                                        </div>
                                    )}

                                    {running && (
                                        <div className="console-running-prompt">
                                            <div className="mini-spinner"></div>
                                            Compiling and executing against all test cases in isolated sandbox...
                                        </div>
                                    )}

                                    {runResult && !running && (
                                        <div className="result-details">
                                            {/* Overall Status Row */}
                                            <div className="result-status-row">
                                                <span className={`status-pill ${runResult.status?.toLowerCase().replace(/[\s()]/g, '-')}`}>
                                                    {runResult.status === 'Accepted' && '✅ Accepted'}
                                                    {runResult.status === 'Wrong Answer' && '❌ Wrong Answer'}
                                                    {runResult.status?.includes('Time Limit') && '⏱ Time Limit Exceeded (TLE)'}
                                                    {runResult.status === 'Runtime Error' && '⚠️ Runtime Error'}
                                                    {runResult.status === 'Compilation Error' && '🚫 Compilation Error'}
                                                    {!['Accepted', 'Wrong Answer', 'Runtime Error', 'Compilation Error'].includes(runResult.status) && !runResult.status?.includes('Time Limit') && runResult.status}
                                                </span>
                                                <span className="tested-case-tag">
                                                    {runResult.passedCount} / {runResult.totalCount} Sample Cases Passed
                                                </span>
                                                <span className="tested-duration-tag">
                                                    ⚡ Total Runtime: {runResult.duration} ms
                                                </span>
                                            </div>

                                            {/* LeetCode Style Multi-Testcase Selector Pills */}
                                            {runResult.cases && runResult.cases.length > 0 && (
                                                <div className="result-case-selector">
                                                    {runResult.cases.map((c, idx) => (
                                                        <button
                                                            key={idx}
                                                            className={`result-case-pill ${selectedResultCaseIdx === idx ? 'active' : ''} ${c.passed ? 'passed' : 'failed'}`}
                                                            onClick={() => setSelectedResultCaseIdx(idx)}
                                                        >
                                                            <span className="case-indicator-icon">{c.passed ? '✓' : '✗'}</span>
                                                            <span>Case {idx + 1}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Active Selected Case Details */}
                                            {(() => {
                                                const currCase = runResult.cases?.[selectedResultCaseIdx] || runResult.cases?.[0];
                                                if (!currCase) return null;

                                                return (
                                                    <div className="active-case-detail-wrap">
                                                        {currCase.error && (
                                                            <div className="error-section">
                                                                <span className="output-label error-label">Error Details:</span>
                                                                <pre className="error-terminal">{currCase.error}</pre>
                                                            </div>
                                                        )}

                                                        <div className="result-comparison-grid">
                                                            <div className="comparison-col">
                                                                <span className="output-label">Input:</span>
                                                                <pre className="comparison-terminal neutral">
                                                                    {currCase.input || '(empty input)'}
                                                                </pre>
                                                            </div>
                                                            <div className="comparison-col">
                                                                <span className="output-label">Your Output:</span>
                                                                <pre className={`comparison-terminal ${currCase.passed ? 'pass' : 'fail'}`}>
                                                                    {currCase.output || '(empty output)'}
                                                                </pre>
                                                            </div>
                                                            <div className="comparison-col">
                                                                <span className="output-label">Expected Output:</span>
                                                                <pre className="comparison-terminal expected">
                                                                    {currCase.expected || '(none)'}
                                                                </pre>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IDE;
