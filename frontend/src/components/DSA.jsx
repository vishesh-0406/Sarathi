import { useState, useEffect, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

const COMPANIES_LIST = [
    'All', 'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant', 'Capgemini',
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle', 'Salesforce'
];

const TOPIC_PILLS = [
    'All', 'Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs',
    'Dynamic Programming', 'Stacks & Queues', 'Binary Search', 'Two Pointers'
];

function DSA({ onBack, onOpenIDE }) {
    const [selectedCompany, setSelectedCompany] = useState('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const pageSize = 12;

    const fetchDSAQuestions = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            let url = `${API_BASE_URL}/questions?category=DSA`;
            if (selectedCompany !== 'All') {
                url += `&company=${encodeURIComponent(selectedCompany)}`;
            }
            if (selectedDifficulty !== 'All') {
                url += `&difficulty=${encodeURIComponent(selectedDifficulty)}`;
            }

            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setQuestions(data || []);
            setPage(1);
        } catch (err) {
            setError(err.message || 'Failed to fetch DSA questions');
        } finally {
            setLoading(false);
        }
    }, [selectedCompany, selectedDifficulty]);

    useEffect(() => {
        fetchDSAQuestions();
    }, [fetchDSAQuestions]);

    const filteredQuestions = questions.filter(q => {
        // Search query filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            const matchesText =
                q.title?.toLowerCase().includes(query) ||
                q.problemStatement?.toLowerCase().includes(query) ||
                q.company?.toLowerCase().includes(query) ||
                q.matchedProblems?.some(m => m.problemName?.toLowerCase().includes(query));
            if (!matchesText) return false;
        }

        // Topic filter heuristic based on title, problemStatement, and matchedProblem
        if (selectedTopic !== 'All') {
            const topic = selectedTopic.toLowerCase();
            const combinedText = `${q.title} ${q.problemStatement} ${q.matchedProblems?.map(m => m.problemName).join(' ')}`.toLowerCase();
            if (topic === 'arrays' && !combinedText.includes('array') && !combinedText.includes('subarray')) return false;
            if (topic === 'strings' && !combinedText.includes('string') && !combinedText.includes('anagram') && !combinedText.includes('palindrome')) return false;
            if (topic === 'linked lists' && !combinedText.includes('list') && !combinedText.includes('node')) return false;
            if (topic === 'trees' && !combinedText.includes('tree') && !combinedText.includes('bst') && !combinedText.includes('ancestor')) return false;
            if (topic === 'graphs' && !combinedText.includes('graph') && !combinedText.includes('island') && !combinedText.includes('course') && !combinedText.includes('path')) return false;
            if (topic === 'dynamic programming' && !combinedText.includes('dp') && !combinedText.includes('subsequence') && !combinedText.includes('coin') && !combinedText.includes('jump')) return false;
            if (topic === 'stacks & queues' && !combinedText.includes('stack') && !combinedText.includes('queue') && !combinedText.includes('parenthes')) return false;
            if (topic === 'binary search' && !combinedText.includes('binary search') && !combinedText.includes('rotated') && !combinedText.includes('median')) return false;
            if (topic === 'two pointers' && !combinedText.includes('two-pointer') && !combinedText.includes('water') && !combinedText.includes('3sum')) return false;
        }

        return true;
    });

    const totalPages = Math.ceil(filteredQuestions.length / pageSize) || 1;
    const paginatedQuestions = filteredQuestions.slice((page - 1) * pageSize, page * pageSize);

    return (
        <section id="dsa-section" className="dsa-section">
            <div className="section-header-row">
                {onBack && (
                    <button className="back-btn" onClick={onBack}>
                        ← Back to Preparation
                    </button>
                )}
                <div>
                    <h2>💻 Data Structures & Algorithms Practice</h2>
                    <p className="section-intro">
                        Curated <strong>600 placement coding problems</strong> across 12 target companies.
                        Dynamically linked with <strong>LeetCode problems</strong> for online practice and testcase validation.
                    </p>
                </div>
            </div>

            {/* Topic Pills */}
            <div className="topic-pills-bar">
                {TOPIC_PILLS.map(topic => (
                    <button
                        key={topic}
                        className={`topic-pill-btn ${selectedTopic === topic ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedTopic(topic);
                            setPage(1);
                        }}
                    >
                        {topic}
                    </button>
                ))}
            </div>

            {/* Filter Row */}
            <div className="filters-container dsa-filters">
                <div className="filter-group">
                    <label>Company:</label>
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        className="filter-select"
                    >
                        {COMPANIES_LIST.map(c => (
                            <option key={c} value={c}>{c === 'All' ? '🏢 All 12 Companies' : c}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label>Difficulty:</label>
                    <select
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                        className="filter-select"
                    >
                        <option value="All">⚡ All Difficulties</option>
                        <option value="Easy">🟢 Easy</option>
                        <option value="Medium">🟡 Medium</option>
                        <option value="Hard">🔴 Hard</option>
                    </select>
                </div>

                <div className="filter-group search-group">
                    <label>Search Problem:</label>
                    <input
                        type="text"
                        placeholder="Search by topic, algorithm, keyword..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setPage(1);
                        }}
                        className="search-input"
                    />
                </div>
            </div>

            {/* Meta Row */}
            <div className="meta-results-row">
                <span>Showing <strong>{filteredQuestions.length}</strong> matching DSA questions</span>
                <span className="recency-pill">📅 Verified 2024–2026 Hiring Patterns</span>
            </div>

            {/* Loading & Error */}
            {loading && <div className="loading-spinner">Loading DSA problems...</div>}
            {error && <div className="error-box">{error}</div>}

            {!loading && !error && filteredQuestions.length === 0 && (
                <div className="no-results-box">No DSA problems found matching the selected filters.</div>
            )}

            {/* Question Cards Grid */}
            <div className="dsa-cards-grid">
                {paginatedQuestions.map((q) => {
                    const matched = q.matchedProblems?.[0];
                    return (
                        <div key={q._id} className="dsa-card">
                            <div className="card-top-row">
                                <span className="company-tag">{q.company}</span>
                                <span className="round-tag">{q.round}</span>
                                <span className={`difficulty-badge ${q.difficulty?.toLowerCase()}`}>
                                    {q.difficulty}
                                </span>
                            </div>

                            <h3 className="dsa-title">{q.title}</h3>

                            <div className="dsa-problem-text">
                                <p>{q.problemStatement}</p>
                            </div>

                            {q.constraints && q.constraints.length > 0 && (
                                <div className="dsa-constraints">
                                    <strong>Constraints:</strong>
                                    <ul>
                                        {q.constraints.slice(0, 3).map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Action Row with IDE Solver & LeetCode */}
                            <div className="card-action-row">
                                {onOpenIDE && (
                                    <button
                                        type="button"
                                        className="solve-ide-btn"
                                        onClick={() => onOpenIDE(q)}
                                    >
                                        💻 Solve in IDE
                                    </button>
                                )}

                                {matched && matched.problemUrl && (
                                    <a
                                        href={matched.problemUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="solve-leetcode-btn"
                                        title={matched.problemName}
                                    >
                                        🚀 LeetCode ({Math.round(matched.similarityScore * 100)}%) ↗
                                    </a>
                                )}
                            </div>

                            {/* Card Footer with Reddit Link */}
                            <div className="card-footer">
                                <span className="source-info">Source: <strong>{q.source || 'Candidate Discussion'}</strong></span>
                                {q.sourceUrl && (
                                    <a
                                        href={q.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="source-link reddit-link"
                                    >
                                        💬 Community Discussions ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="pagination-bar">
                    <button
                        className="page-btn"
                        onClick={() => setPage(prev => Math.max(1, prev - 1))}
                        disabled={page === 1}
                    >
                        ← Previous Page
                    </button>
                    <span className="page-indicator">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        className="page-btn"
                        onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={page === totalPages}
                    >
                        Next Page →
                    </button>
                </div>
            )}
        </section>
    );
}

export default DSA;
