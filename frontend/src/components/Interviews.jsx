import { useState, useEffect, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

const COMPANIES_LIST = [
    'All', 'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant', 'Capgemini',
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle', 'Salesforce'
];

const TOPICS_LIST = [
    'All', 'HR & Behavioral', 'Core CS (DBMS)', 'Core CS (Operating Systems)',
    'Core CS (OOP Concepts)', 'System Design', 'Leadership Principles (LP)', 'Googleyness & Behavioral'
];

function Interviews({ onBack }) {
    const [selectedCompany, setSelectedCompany] = useState('All');
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [expandedIds, setExpandedIds] = useState({});

    const fetchInterviews = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            let url = `${API_BASE_URL}/questions?category=Interview`;
            if (selectedCompany !== 'All') {
                url += `&company=${encodeURIComponent(selectedCompany)}`;
            }
            if (selectedTopic !== 'All') {
                url += `&topic=${encodeURIComponent(selectedTopic)}`;
            }

            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setQuestions(data || []);
        } catch (err) {
            setError(err.message || 'Failed to fetch interview questions');
        } finally {
            setLoading(false);
        }
    }, [selectedCompany, selectedTopic]);

    useEffect(() => {
        fetchInterviews();
    }, [fetchInterviews]);

    const toggleExpand = (id) => {
        setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredQuestions = questions.filter(q => {
        if (!searchQuery.trim()) return true;
        const qStr = searchQuery.toLowerCase();
        return (
            q.title?.toLowerCase().includes(qStr) ||
            q.problemStatement?.toLowerCase().includes(qStr) ||
            q.company?.toLowerCase().includes(qStr) ||
            q.round?.toLowerCase().includes(qStr)
        );
    });

    return (
        <section id="interviews-section" className="interviews-section">
            <div className="section-header-row">
                {onBack && (
                    <button className="back-btn" onClick={onBack}>
                        ← Back to Preparation
                    </button>
                )}
                <div>
                    <h2>👔 HR & Technical Interview Prep</h2>
                    <p className="section-intro">
                        Authentic candidate experiences harvested from <strong>LinkedIn (#interviewexperience)</strong>.
                        Master HR behavioral rounds, STAR frameworks, and core CS deep-dives across all 12 companies.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="filters-container">
                <div className="filter-group">
                    <label>Filter by Company:</label>
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
                    <label>Filter by Focus Area:</label>
                    <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="filter-select"
                    >
                        {TOPICS_LIST.map(t => (
                            <option key={t} value={t}>{t === 'All' ? '🎯 All Focus Areas' : t}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group search-group">
                    <label>Search Questions:</label>
                    <input
                        type="text"
                        placeholder="Search by keyword, concept..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            {/* Count Badge */}
            <div className="meta-results-row">
                <span>Showing <strong>{filteredQuestions.length}</strong> verified interview questions</span>
                <span className="recency-pill">📅 Sourced from 2024–2026 Hiring Cycles</span>
            </div>

            {/* Loading & Error States */}
            {loading && <div className="loading-spinner">Loading interview experiences...</div>}
            {error && <div className="error-box">{error}</div>}

            {/* Questions List */}
            {!loading && !error && filteredQuestions.length === 0 && (
                <div className="no-results-box">No interview questions found matching your filter criteria.</div>
            )}

            <div className="interview-cards-grid">
                {filteredQuestions.map((q) => {
                    const isExpanded = !!expandedIds[q._id];
                    return (
                        <div key={q._id} className="interview-card">
                            <div className="card-top-row">
                                <span className="company-tag">{q.company}</span>
                                <span className="round-tag">{q.round}</span>
                                <span className={`difficulty-badge ${q.difficulty?.toLowerCase()}`}>
                                    {q.difficulty}
                                </span>
                            </div>

                            <h3 className="interview-title">{q.title}</h3>

                            <div className="interview-problem">
                                <p>{q.problemStatement}</p>
                            </div>

                            {/* STAR Answer Strategy Accordion */}
                            {q.answerTips && (
                                <div className="answer-accordion">
                                    <button
                                        type="button"
                                        className="accordion-toggle-btn"
                                        onClick={() => toggleExpand(q._id)}
                                    >
                                        <span>💡 Recommended STAR Answer Strategy & Key Points</span>
                                        <span>{isExpanded ? '▲ Hide' : '▼ Reveal Tips'}</span>
                                    </button>

                                    {isExpanded && (
                                        <div className="accordion-content">
                                            <p className="answer-tips-text">{q.answerTips}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Card Footer with LinkedIn Link */}
                            <div className="card-footer">
                                <span className="source-info">Source: <strong>{q.source || 'LinkedIn Discussion'}</strong></span>
                                {q.sourceUrl && (
                                    <a
                                        href={q.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="source-link linkedin-link"
                                    >
                                        💬 View on LinkedIn ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Interviews;
