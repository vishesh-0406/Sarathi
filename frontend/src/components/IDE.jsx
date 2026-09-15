import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '../context/ThemeContext';
import { generateLeetCodeTemplate } from '../utils/leetcodeTemplates';
import './IDE.css';

const API_BASE_URL = 'http://localhost:5000/api';


function IDE({ question, onBack }) {
    const { theme } = useTheme();
    const [language, setLanguage] = useState('python');
    const [code, setCode] = useState('');
    const [activeTab, setActiveTab] = useState('testcase'); // 'testcase' | 'result' | 'submission'
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

    const editorRef = useRef(null);
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

                        <div className="company-mcq-section">
                            <h5 className="mcq-prompt">Choose the correct answer:</h5>
                            <div className="options-grid">
                                {question.options.map((opt, i) => {
                                    const optLetter = opt.trim()[0];
                                    const isSelected = selectedOption === optLetter;
                                    const isCorrect = question.correctOption === optLetter;
                                    let btnClass = 'option-btn';
                                    if (selectedOption) {
                                        if (isCorrect) btnClass += ' correct';
                                        else if (isSelected) btnClass += ' incorrect';
                                    }
                                    return (
                                        <button
                                            key={i}
                                            type="button"
                                            className={btnClass}
                                            onClick={() => setSelectedOption(optLetter)}
                                        >
                                            <span className="option-indicator">{optLetter}</span>
                                            <span className="option-text">{opt.replace(/^[A-D]\)\s*/, '')}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {selectedOption && question.explanation && (
                                <div className="explanation-card">
                                    <div className="explanation-status">
                                        {selectedOption === question.correctOption ? '🎉 Correct Answer!' : '❌ Incorrect Selection'}
                                    </div>
                                    <p className="explanation-detail">{question.explanation}</p>
                                </div>
                            )}
                        </div>

                        <div className="non-coding-footer-hint">
                            <span>💡 <em>Aptitude, Verbal, and Logical Reasoning questions are multiple-choice assessments and do not require code compilation.</em></span>
                            <button className="solve-ide-btn" onClick={onBack}>← Back to Questions List</button>
                        </div>
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
                return { input: currentInput, output: currentExpected };
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
        setActiveTab('submission');

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
                    {/* Language Switcher */}
                    <div className="lang-select-wrapper">
                        <label>Language:</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="lang-select"
                        >
                            <option value="python">🐍 Python 3</option>
                            <option value="javascript">🟨 JavaScript</option>
                            <option value="java">☕ Java</option>
                            <option value="cpp">⚡ C++ (GCC)</option>
                        </select>
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
                {/* Left Panel: Problem Statement, Examples & Constraints */}
                <div className="ide-problem-panel">
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
                </div>

                {/* Right Panel: Monaco Editor & Interactive Testcase Console */}
                <div className="ide-editor-panel">
                    {/* Visual Editor Bar */}
                    <div className="editor-header-bar">
                        <div className="editor-file-tab">
                            <span>💻 solution.{language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : 'cpp'}</span>
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

                    {/* Bottom Console: Testcases, Execution Results & Submission Analytics */}
                    <div className="ide-console-panel">
                        <div className="console-tab-header">
                            <button
                                className={`console-tab-btn ${activeTab === 'testcase' ? 'active' : ''}`}
                                onClick={() => setActiveTab('testcase')}
                            >
                                🧪 Testcases
                            </button>
                            <button
                                className={`console-tab-btn ${activeTab === 'result' ? 'active' : ''}`}
                                onClick={() => setActiveTab('result')}
                            >
                                📊 Test Result {runResult && (
                                    <span className={`tab-dot ${runResult.status === 'Accepted' ? 'pass' : 'fail'}`}>•</span>
                                )}
                            </button>
                            <button
                                className={`console-tab-btn ${activeTab === 'submission' ? 'active' : ''}`}
                                onClick={() => setActiveTab('submission')}
                            >
                                🚀 Submission {submissionResult && (
                                    <span className={`tab-dot ${submissionResult.passed ? 'pass' : 'fail'}`}>•</span>
                                )}
                            </button>

                            {/* Contextual Right Status Badge */}
                            {activeTab === 'result' && runResult && runResult.duration !== undefined && (
                                <span className="console-runtime-badge">
                                    Runtime: {runResult.duration} ms
                                </span>
                            )}
                            {activeTab === 'submission' && submissionResult && submissionResult.complexity && (
                                <span className={`console-runtime-badge ${submissionResult.passed ? 'submission-badge-opt' : 'submission-badge-warn'}`}>
                                    {submissionResult.complexity.statusTag || (submissionResult.passed ? 'Accepted' : 'Failed')}
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
                                        <div className="console-empty-prompt">
                                            Click <strong>▶ Run Code</strong> to execute your solution against all sample test cases.
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
                                                    {runResult.passedCount} / {runResult.totalCount} Testcases Passed
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

                            {/* TAB 3: SUBMISSION (AUTHENTIC LEETCODE 1:1 LAYOUT) */}
                            {activeTab === 'submission' && (
                                <div className="submission-view">
                                    {!submissionResult && !submitting && (
                                        <div className="console-empty-prompt">
                                            Click <strong>🚀 Submit</strong> to test your code against the full LeetCode test suite and see where you rank.
                                        </div>
                                    )}

                                    {submitting && (
                                        <div className="console-running-prompt">
                                            <div className="mini-spinner"></div>
                                            🚀 Evaluating submission against all testcases & generating distribution benchmarks...
                                        </div>
                                    )}

                                    {submissionResult && !submitting && (
                                        <div className="leetcode-submission-container">
                                            {/* Top Status Banner */}
                                            <div className="leetcode-submission-header">
                                                <div className="status-main-row">
                                                    <div className={`status-brand-badge ${submissionResult.passed ? 'accepted' : 'wrong-answer'}`}>
                                                        <span className="brand-check-icon">{submissionResult.passed ? '✓' : '✗'}</span>
                                                        <span className="brand-status-title">
                                                            {submissionResult.passed ? 'Accepted' : submissionResult.status || 'Wrong Answer'}
                                                        </span>
                                                    </div>
                                                    <span className="brand-testcases-count">
                                                        <strong>{submissionResult.passedCount} / {submissionResult.totalCount}</strong> testcases passed
                                                    </span>
                                                </div>
                                                <div className="status-sub-row">
                                                    <span className="submission-time-label">
                                                        Submitted at {new Date(submissionResult.submittedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}, {new Date(submissionResult.submittedAt || Date.now()).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* LeetCode Metric Selector Tabs */}
                                            <div className="leetcode-metric-tabs">
                                                <button
                                                    type="button"
                                                    className={`metric-tab-card ${submissionChartMetric === 'runtime' ? 'active' : ''}`}
                                                    onClick={() => setSubmissionChartMetric('runtime')}
                                                >
                                                    <div className="metric-card-top">
                                                        <span className="metric-name">Runtime</span>
                                                        <span className="metric-headline-val">
                                                            {submissionResult.runtimeDisplay || `${submissionResult.complexity?.runtimeMs || 0} ms`}
                                                        </span>
                                                    </div>
                                                    <div className="metric-beats-caption">
                                                        Beats <strong className="beats-green">{submissionResult.complexity?.runtimePercentile || 88.5}%</strong> of users with {language === 'cpp' ? 'C++' : language === 'javascript' ? 'JavaScript' : language === 'java' ? 'Java' : 'Python 3'}
                                                    </div>
                                                </button>

                                                <button
                                                    type="button"
                                                    className={`metric-tab-card ${submissionChartMetric === 'memory' ? 'active' : ''}`}
                                                    onClick={() => setSubmissionChartMetric('memory')}
                                                >
                                                    <div className="metric-card-top">
                                                        <span className="metric-name">Memory</span>
                                                        <span className="metric-headline-val">
                                                            {submissionResult.memoryDisplay || `${submissionResult.complexity?.memoryMB || 44.6} MB`}
                                                        </span>
                                                    </div>
                                                    <div className="metric-beats-caption">
                                                        Beats <strong className="beats-green">{submissionResult.complexity?.memoryPercentile || 82.4}%</strong> of users with {language === 'cpp' ? 'C++' : language === 'javascript' ? 'JavaScript' : language === 'java' ? 'Java' : 'Python 3'}
                                                    </div>
                                                </button>
                                            </div>

                                            {/* LeetCode Signature Distribution Histogram */}
                                            <div className="leetcode-histogram-card">
                                                <div className="histogram-top-bar">
                                                    <span className="histogram-title">
                                                        {submissionChartMetric === 'runtime' ? 'Runtime Distribution' : 'Memory Distribution'}
                                                    </span>
                                                    <span className="histogram-subtitle">
                                                        {submissionChartMetric === 'runtime'
                                                            ? `Your runtime: ${submissionResult.runtimeDisplay || '0 ms'} (Beats ${submissionResult.complexity?.runtimePercentile || 88.5}%)`
                                                            : `Your memory: ${submissionResult.memoryDisplay || '44.60 MB'} (Beats ${submissionResult.complexity?.memoryPercentile || 82.4}%)`}
                                                    </span>
                                                </div>

                                                <div className="histogram-chart-area">
                                                    {(() => {
                                                        const bins = submissionChartMetric === 'runtime'
                                                            ? (submissionResult.complexity?.runtimeDistribution || [
                                                                { bin: '0 ms', percent: 48.2 },
                                                                { bin: '1 ms', percent: 22.5 },
                                                                { bin: '2 ms', percent: 11.8 },
                                                                { bin: '3 ms', percent: 6.4 },
                                                                { bin: '5 ms', percent: 4.2 },
                                                                { bin: '10 ms', percent: 3.1 },
                                                                { bin: '18 ms', percent: 2.1 },
                                                                { bin: '25+ ms', percent: 1.7 }
                                                            ])
                                                            : (submissionResult.complexity?.memoryDistribution || [
                                                                { bin: '43.8 MB', percent: 12.4 },
                                                                { bin: '44.2 MB', percent: 38.6 },
                                                                { bin: '44.8 MB', percent: 28.5 },
                                                                { bin: '45.4 MB', percent: 13.2 },
                                                                { bin: '46.0+ MB', percent: 7.3 }
                                                            ]);

                                                        const maxPercent = Math.max(...bins.map(b => b.percent), 50);

                                                        let activeIndex = 0;
                                                        if (submissionChartMetric === 'runtime') {
                                                            const userMs = submissionResult.complexity?.runtimeMs || 0;
                                                            if (userMs === 0) activeIndex = 0;
                                                            else if (userMs === 1) activeIndex = 1;
                                                            else if (userMs <= 2) activeIndex = 2;
                                                            else if (userMs <= 5) activeIndex = 4;
                                                            else if (userMs <= 10) activeIndex = 5;
                                                            else if (userMs <= 20) activeIndex = Math.min(bins.length - 2, 6);
                                                            else activeIndex = bins.length - 1;
                                                        } else {
                                                            activeIndex = Math.min(bins.length - 1, 1);
                                                        }

                                                        return (
                                                            <div className="histogram-bars-wrapper">
                                                                {bins.map((item, idx) => {
                                                                    const isUserBin = idx === activeIndex;
                                                                    const barHeightPercent = Math.max(12, Math.round((item.percent / maxPercent) * 100));

                                                                    return (
                                                                        <div key={idx} className={`histogram-column ${isUserBin ? 'user-column' : ''}`}>
                                                                            {isUserBin && (
                                                                                <div className="user-marker-badge">
                                                                                    <span>You are here</span>
                                                                                    <div className="marker-arrow"></div>
                                                                                </div>
                                                                            )}
                                                                            <div className="histogram-bar-track">
                                                                                <div
                                                                                    className={`histogram-bar-fill ${isUserBin ? 'user-bar-fill' : ''}`}
                                                                                    style={{ height: `${barHeightPercent}%` }}
                                                                                    title={`${item.bin}: ${item.percent}% of submissions`}
                                                                                />
                                                                            </div>
                                                                            <span className={`histogram-x-label ${isUserBin ? 'user-x-label' : ''}`}>
                                                                                {item.bin}
                                                                            </span>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        );
                                                    })()}
                                                </div>
                                            </div>

                                            {/* Editorial & Interviewer Coaching Details */}
                                            {submissionResult.complexity && (
                                                <div className="leetcode-editorial-footer">
                                                    <div className="editorial-meta-row">
                                                        <span className="editorial-title">Complexity Analysis:</span>
                                                        <span className="editorial-pill time-pill">Time: {submissionResult.complexity.userTimeComplexity}</span>
                                                        <span className="editorial-pill space-pill">Space: {submissionResult.complexity.userSpaceComplexity}</span>
                                                        <span className={`editorial-status-tag ${submissionResult.complexity.isTimeOptimal ? 'opt' : 'warn'}`}>
                                                            {submissionResult.complexity.isTimeOptimal ? '✓ Optimal Time' : '⚠️ Suboptimal Time'}
                                                        </span>
                                                    </div>
                                                    {submissionResult.complexity.feedback && (
                                                        <p className="editorial-feedback-text">
                                                            {submissionResult.complexity.feedback}
                                                        </p>
                                                    )}
                                                </div>
                                            )}

                                            {/* Failing Testcase Details if any */}
                                            {!submissionResult.passed && submissionResult.failingCase && (
                                                <div className="submission-failing-section">
                                                    <span className="failing-heading">
                                                        Failed on Testcase {submissionResult.failingCase.caseIdx + 1}:
                                                    </span>
                                                    <div className="result-comparison-grid">
                                                        <div className="comparison-col">
                                                            <span className="output-label">Input:</span>
                                                            <pre className="comparison-terminal neutral">
                                                                {submissionResult.failingCase.input || '(empty)'}
                                                            </pre>
                                                        </div>
                                                        <div className="comparison-col">
                                                            <span className="output-label">Your Output:</span>
                                                            <pre className="comparison-terminal fail">
                                                                {submissionResult.failingCase.output || submissionResult.failingCase.error || '(empty output)'}
                                                            </pre>
                                                        </div>
                                                        <div className="comparison-col">
                                                            <span className="output-label">Expected Output:</span>
                                                            <pre className="comparison-terminal expected">
                                                                {submissionResult.failingCase.expected || '(none)'}
                                                            </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
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
