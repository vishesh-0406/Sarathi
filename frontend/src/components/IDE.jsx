import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const API_BASE_URL = 'http://localhost:5000/api';

const DEFAULT_TEMPLATES = {
    python: (title) => `# Problem: ${title || 'Solution'}
# Write your Python 3 solution below.
# Output printed to standard output is verified against the expected output.

def solve():
    # TODO: Implement solution logic
    print("Solution executed")

if __name__ == "__main__":
    solve()
`,
    javascript: (title) => `// Problem: ${title || 'Solution'}
// Write your JavaScript (Node.js) solution below.

function solve() {
    // TODO: Implement solution logic
    console.log("Solution executed");
}

solve();
`,
    java: (title) => `// Problem: ${title || 'Solution'}
// Write your Java solution below.

public class Solution {
    public static void main(String[] args) {
        // TODO: Implement solution logic
        System.out.println("Solution executed");
    }
}
`,
    cpp: (title) => `// Problem: ${title || 'Solution'}
// Write your C++ (GCC) solution below.

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    // TODO: Implement solution logic
    cout << "Solution executed" << endl;
    return 0;
}
`
};

function IDE({ question, onBack }) {
    const [language, setLanguage] = useState('python');
    const [code, setCode] = useState('');
    const [activeTab, setActiveTab] = useState('testcase'); // 'testcase' | 'result'
    const [selectedCaseIdx, setSelectedCaseIdx] = useState(0); // 0, 1, ... or 'custom'
    const [currentInput, setCurrentInput] = useState('');
    const [currentExpected, setCurrentExpected] = useState('');
    const [running, setRunning] = useState(false);
    const [result, setResult] = useState(null);

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

    // Initialize starter template and test cases when question or language changes
    useEffect(() => {
        const title = question?.title || 'Placement Coding Challenge';
        const templateFn = DEFAULT_TEMPLATES[language] || DEFAULT_TEMPLATES.python;
        setCode(templateFn(title));
        setResult(null);

        // Load Case 1
        setSelectedCaseIdx(0);
        if (testCases && testCases.length > 0) {
            setCurrentInput(testCases[0].input || '');
            setCurrentExpected(testCases[0].output || '');
        } else {
            setCurrentInput('');
            setCurrentExpected('');
        }
    }, [question, language]);

    const handleResetCode = () => {
        const title = question?.title || 'Placement Coding Challenge';
        const templateFn = DEFAULT_TEMPLATES[language] || DEFAULT_TEMPLATES.python;
        setCode(templateFn(title));
        setResult(null);
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

    const handleRunCode = async () => {
        setRunning(true);
        setActiveTab('result');

        try {
            const res = await fetch(`${API_BASE_URL}/code/run`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language,
                    code,
                    input: currentInput,
                    expectedOutput: currentExpected.trim()
                })
            });

            if (!res.ok) {
                throw new Error(`Server returned HTTP ${res.status}`);
            }

            const data = await res.json();
            setResult({
                ...data,
                ranCaseIdx: selectedCaseIdx,
                ranInput: currentInput,
                ranExpected: currentExpected
            });
        } catch (err) {
            setResult({
                status: 'Execution Error',
                output: '',
                error: err.message || 'Unable to connect to Sarathi code execution service.',
                duration: 0,
                passed: false,
                ranCaseIdx: selectedCaseIdx,
                ranInput: currentInput,
                ranExpected: currentExpected
            });
        } finally {
            setRunning(false);
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
                        onClick={handleRunCode}
                        disabled={running}
                    >
                        {running ? (
                            <span>⏳ Running...</span>
                        ) : (
                            <span>▶ Run Code</span>
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

                        {/* LeetCode Reference Box */}
                        {matchedLeetcode && (
                            <div className="matched-leetcode-box ide-leetcode-box">
                                <div className="match-info">
                                    <span className="platform-tag">LeetCode</span>
                                    <span className="match-name">{matchedLeetcode.problemName}</span>
                                    <span className="similarity-badge">
                                        {Math.round(matchedLeetcode.similarityScore * 100)}% Match
                                    </span>
                                </div>
                                {matchedLeetcode.problemUrl && (
                                    <a
                                        href={matchedLeetcode.problemUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="solve-leetcode-btn"
                                    >
                                        Verify on LeetCode ↗
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Panel: Monaco Editor & Interactive Testcase Console */}
                <div className="ide-editor-panel">
                    {/* Monaco Editor Container */}
                    <div className="monaco-wrapper">
                        <Editor
                            height="100%"
                            language={language === 'javascript' ? 'javascript' : language}
                            value={code}
                            onChange={(val) => setCode(val || '')}
                            theme="vs-dark"
                            options={{
                                fontSize: 14,
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                tabSize: 4,
                                lineNumbers: 'on',
                                wordWrap: 'on',
                                padding: { top: 12, bottom: 12 }
                            }}
                        />
                    </div>

                    {/* Bottom Console: Testcases & Execution Results */}
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
                                📊 Test Result {result && <span className="tab-dot">•</span>}
                            </button>

                            {result && result.duration !== undefined && (
                                <span className="console-runtime-badge">
                                    Runtime: {result.duration} ms
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
                                                placeholder="e.g. nums = [2, 0, 2, 1, 1, 0]"
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
                                                placeholder="e.g. [0, 0, 1, 1, 2, 2]"
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

                            {/* TAB 2: TEST EXECUTION RESULT */}
                            {activeTab === 'result' && (
                                <div className="console-result-view">
                                    {!result && !running && (
                                        <div className="console-empty-prompt">
                                            Click <strong>▶ Run Code</strong> to test your solution against{' '}
                                            <span className="highlight-case">
                                                {selectedCaseIdx === 'custom' ? 'Custom Case' : `Case ${selectedCaseIdx + 1}`}
                                            </span>.
                                        </div>
                                    )}

                                    {running && (
                                        <div className="console-running-prompt">
                                            <div className="mini-spinner"></div>
                                            Compiling and executing in isolated sandbox...
                                        </div>
                                    )}

                                    {result && !running && (
                                        <div className="result-details">
                                            {/* Status Badge & Tested Case */}
                                            <div className="result-status-row">
                                                <span className={`status-pill ${result.status?.toLowerCase().replace(/[\s()]/g, '-')}`}>
                                                    {result.status === 'Accepted' && '✅ Accepted'}
                                                    {result.status === 'Wrong Answer' && '❌ Wrong Answer'}
                                                    {result.status?.includes('Time Limit') && '⏱ Time Limit Exceeded (TLE)'}
                                                    {result.status === 'Runtime Error' && '⚠️ Runtime Error'}
                                                    {result.status === 'Compilation Error' && '🚫 Compilation Error'}
                                                    {!['Accepted', 'Wrong Answer'].includes(result.status) && !result.status?.includes('Time Limit') && result.status}
                                                </span>
                                                <span className="tested-case-tag">
                                                    Tested on: {result.ranCaseIdx === 'custom' ? 'Custom Case' : `Case ${result.ranCaseIdx + 1}`}
                                                </span>
                                            </div>

                                            {/* Error Box if any */}
                                            {result.error && (
                                                <div className="error-section">
                                                    <span className="output-label error-label">Error Details:</span>
                                                    <pre className="error-terminal">{result.error}</pre>
                                                </div>
                                            )}

                                            {/* Comparison Grid */}
                                            <div className="result-comparison-grid">
                                                <div className="comparison-col">
                                                    <span className="output-label">Input Tested:</span>
                                                    <pre className="comparison-terminal neutral">
                                                        {result.ranInput || '(empty input)'}
                                                    </pre>
                                                </div>
                                                <div className="comparison-col">
                                                    <span className="output-label">Your Output:</span>
                                                    <pre className={`comparison-terminal ${result.passed ? 'pass' : 'fail'}`}>
                                                        {result.output || '(empty output)'}
                                                    </pre>
                                                </div>
                                                <div className="comparison-col">
                                                    <span className="output-label">Expected Output:</span>
                                                    <pre className="comparison-terminal expected">
                                                        {result.expected || result.ranExpected || '(none)'}
                                                    </pre>
                                                </div>
                                            </div>
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
