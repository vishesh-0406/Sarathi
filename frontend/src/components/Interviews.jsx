import { useState, useEffect, useCallback, useMemo } from 'react';
import CompanyLogo from './CompanyLogos';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    InterviewIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    LinkedInIcon,
    ExternalLinkIcon,
    CalendarIcon,
    SparklesIcon
} from './Icons';
import './Interviews.css';

const API_BASE_URL = 'http://localhost:5000/api';

const COMPANIES_LIST = [
    'All', 'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant', 'Capgemini',
    'HCLTech', 'Tech Mahindra', 'LTIMindtree', 'Genpact',
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle', 'Salesforce',
    'Uber', 'Zoho', 'Flipkart', 'Goldman Sachs'
];

const COMPANY_DISPLAY_ORDER = [
    'Google', 'TCS', 'Amazon', 'Infosys', 'Microsoft', 'Accenture',
    'Adobe', 'Wipro', 'Oracle', 'Cognizant', 'Salesforce', 'Capgemini',
    'Uber', 'HCLTech', 'Zoho', 'Tech Mahindra', 'Flipkart', 'LTIMindtree',
    'Goldman Sachs', 'Genpact'
];

function interleaveByCompany(list) {
    if (!list || list.length <= 1) return list;
    const companyMap = new Map();
    for (const q of list) {
        const comp = q.company || 'Other';
        if (!companyMap.has(comp)) {
            companyMap.set(comp, []);
        }
        companyMap.get(comp).push(q);
    }

    const sortedCompanies = Array.from(companyMap.keys()).sort((a, b) => {
        const idxA = COMPANY_DISPLAY_ORDER.findIndex(c => c.toLowerCase() === a.toLowerCase());
        const idxB = COMPANY_DISPLAY_ORDER.findIndex(c => c.toLowerCase() === b.toLowerCase());
        const posA = idxA === -1 ? 999 : idxA;
        const posB = idxB === -1 ? 999 : idxB;
        return posA - posB;
    });

    const companyLists = sortedCompanies.map(comp => companyMap.get(comp));
    const interleaved = [];
    let maxLen = 0;
    for (const l of companyLists) {
        if (l.length > maxLen) maxLen = l.length;
    }

    for (let i = 0; i < maxLen; i++) {
        for (const l of companyLists) {
            if (i < l.length) {
                interleaved.push(l[i]);
            }
        }
    }

    return interleaved;
}

const TOPICS_LIST = [
    'All', 'HR & Behavioral', 'Core CS (DBMS)', 'Core CS (Operating Systems)',
    'Core CS (OOP Concepts)', 'Core CS (Computer Networks & Web)', 'System Design', 'Leadership Principles (LP)', 'Googleyness & Behavioral'
];

const PAGE_SIZE = 12;

function Interviews({ onBack }) {
    const [selectedCompany, setSelectedCompany] = useState('All');
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [expandedIds, setExpandedIds] = useState({});
    const [viewMode, setViewMode] = useState('stream'); // 'stream' or 'compact'
    const [currentPage, setCurrentPage] = useState(1);

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
            setCurrentPage(1);
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

    const handleExpandAll = () => {
        const allExp = {};
        paginatedQuestions.forEach(q => { allExp[q._id] = true; });
        setExpandedIds(allExp);
    };

    const handleCollapseAll = () => {
        setExpandedIds({});
    };

    const filteredQuestions = useMemo(() => {
        const filtered = questions.filter(q => {
            if (!searchQuery.trim()) return true;
            const qStr = searchQuery.toLowerCase();
            return (
                q.title?.toLowerCase().includes(qStr) ||
                q.problemStatement?.toLowerCase().includes(qStr) ||
                q.company?.toLowerCase().includes(qStr) ||
                q.round?.toLowerCase().includes(qStr)
            );
        });

        if (selectedCompany === 'All') {
            return interleaveByCompany(filtered);
        }
        return filtered;
    }, [questions, searchQuery, selectedCompany]);

    const totalPages = Math.ceil(filteredQuestions.length / PAGE_SIZE) || 1;
    const paginatedQuestions = useMemo(() => {
        const start = (currentPage - 1) * PAGE_SIZE;
        return filteredQuestions.slice(start, start + PAGE_SIZE);
    }, [filteredQuestions, currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <section id="interviews-section" className="interviews-section">
            <div className="section-header-row">
                {onBack && (
                    <button className="back-btn" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', alignSelf: 'flex-start' }}>
                        <ArrowLeftIcon size={14} /> Back to Preparation
                    </button>
                )}
                <div>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <InterviewIcon size={26} color="#7c3aed" /> HR & Technical Interview Prep
                    </h2>
                    <p className="section-intro">
                        Authentic candidate experiences harvested from <strong>LinkedIn (#interviewexperience)</strong>.
                        Master HR behavioral rounds, STAR frameworks, and core CS deep-dives across all 20 companies.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="filters-container">
                <div className="filter-group">
                    <label>Filter by Company:</label>
                    <select
                        value={selectedCompany}
                        onChange={(e) => {
                            setSelectedCompany(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="filter-select"
                    >
                        {COMPANIES_LIST.map(c => (
                            <option key={c} value={c}>{c === 'All' ? '🏢 All 20 Companies' : c}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label>Filter by Focus Area:</label>
                    <select
                        value={selectedTopic}
                        onChange={(e) => {
                            setSelectedTopic(e.target.value);
                            setCurrentPage(1);
                        }}
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
                        placeholder="Search by keyword, scenario, or competency..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="search-input"
                    />
                </div>
            </div>

            {/* Toolbar: Count Badge & View Controls */}
            <div className="interview-toolbar">
                <div className="meta-results-row">
                    <span>
                        Showing <strong>{filteredQuestions.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, filteredQuestions.length)}</strong> of <strong>{filteredQuestions.length}</strong> verified questions
                    </span>
                    <span className="recency-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        <CalendarIcon size={13} /> 2024–2026 Hiring Cycles
                    </span>
                </div>

                <div className="toolbar-actions">
                    <div className="view-mode-toggle">
                        <button
                            type="button"
                            className={`toggle-mode-btn ${viewMode === 'stream' ? 'active' : ''}`}
                            onClick={() => setViewMode('stream')}
                        >
                            📋 Curriculum Stream
                        </button>
                        <button
                            type="button"
                            className={`toggle-mode-btn ${viewMode === 'compact' ? 'active' : ''}`}
                            onClick={() => setViewMode('compact')}
                        >
                            📊 Compact Sheet
                        </button>
                    </div>

                    <button type="button" className="bulk-toggle-btn" onClick={handleExpandAll}>
                        Expand All
                    </button>
                    <button type="button" className="bulk-toggle-btn" onClick={handleCollapseAll}>
                        Collapse All
                    </button>
                </div>
            </div>

            {/* Loading & Error States */}
            {loading && <div className="loading-spinner">Loading interview experiences...</div>}
            {error && <div className="error-box">{error}</div>}

            {/* Empty State */}
            {!loading && !error && filteredQuestions.length === 0 && (
                <div className="no-results-box">No interview questions found matching your filter criteria.</div>
            )}

            {/* MAIN CONTENT: STREAM VIEW (NOT FLASHCARDS) */}
            {!loading && !error && viewMode === 'stream' && (
                <div className="interview-stream-container">
                    {paginatedQuestions.map((q, idx) => {
                        const isExpanded = !!expandedIds[q._id];
                        const globalIndex = (currentPage - 1) * PAGE_SIZE + idx + 1;
                        const indexStr = `#${globalIndex.toString().padStart(2, '0')}`;

                        return (
                            <div key={q._id} className={`interview-stream-item ${isExpanded ? 'is-expanded' : ''}`}>
                                <div className="stream-item-top">
                                    <div className="stream-badges-left">
                                        <span className="item-index-tag">{indexStr}</span>
                                        <span className="company-tag">
                                            <CompanyLogo name={q.company} size={15} />
                                            <span>{q.company}</span>
                                        </span>
                                        <span className="round-tag">{q.round || q.topic || 'Behavioral Round'}</span>
                                    </div>
                                    <span className={`difficulty-badge ${q.difficulty?.toLowerCase() || 'medium'}`}>
                                        {q.difficulty || 'Medium'}
                                    </span>
                                </div>

                                <div className="stream-item-main">
                                    <h3 className="interview-title">{q.title}</h3>
                                    <div className="interview-scenario-box">
                                        <p className="interview-scenario-text">
                                            "{q.problemStatement}"
                                        </p>
                                    </div>
                                </div>

                                {/* Action Strip with STAR Model Toggle */}
                                <div className="stream-item-action-strip">
                                    <button
                                        type="button"
                                        className={`star-strategy-btn ${isExpanded ? 'active' : ''}`}
                                        onClick={() => toggleExpand(q._id)}
                                    >
                                        <span>💡 Recommended STAR Strategy & Key Points</span>
                                        {isExpanded ? <ChevronUpIcon size={13} /> : <ChevronDownIcon size={13} />}
                                    </button>

                                    <div className="source-info">
                                        <span>Source: <strong>{q.source || 'LinkedIn Discussion'}</strong> ({q.year || '2025'})</span>
                                    </div>
                                </div>

                                {/* Full-Width STAR Strategy Preparation Center */}
                                {isExpanded && (
                                    <div className="star-workspace-drawer">
                                        <div className="star-workspace-header">
                                            <h4>
                                                <SparklesIcon size={15} color="#fbbf24" /> STAR Framework Response Blueprint
                                            </h4>
                                            {q.topic && (
                                                <span className="competency-tag">
                                                    Evaluated Competency: {q.topic}
                                                </span>
                                            )}
                                        </div>

                                        <div className="star-advice-content">
                                            <div className="star-point-box">
                                                <p>{q.answerTips || 'Structure your response with a concise Situation setup, your specific individual Task responsibility, high-agency engineering or leadership Actions taken, and measurable quantitative Results.'}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Footer Provenance */}
                                <div className="stream-item-footer">
                                    <span>Verified candidate experience harvested from hiring cycles</span>
                                    {q.sourceUrl && (
                                        <a
                                            href={q.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="source-link linkedin-link"
                                        >
                                            <LinkedInIcon size={14} /> View Discussion on LinkedIn <ExternalLinkIcon size={11} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* COMPACT TABLE / SHEET VIEW */}
            {!loading && !error && viewMode === 'compact' && (
                <div className="compact-table-wrapper">
                    {paginatedQuestions.map((q, idx) => {
                        const isExpanded = !!expandedIds[q._id];
                        const globalIndex = (currentPage - 1) * PAGE_SIZE + idx + 1;
                        const indexStr = `#${globalIndex.toString().padStart(2, '0')}`;

                        return (
                            <div key={q._id}>
                                <div className="compact-row-item" onClick={() => toggleExpand(q._id)}>
                                    <span className="compact-col-index">{indexStr}</span>
                                    <span className="compact-col-company">
                                        <CompanyLogo name={q.company} size={15} />
                                        <span>{q.company}</span>
                                    </span>
                                    <span className="compact-col-title">{q.title}</span>
                                    <span className="compact-col-topic">{q.round || q.topic}</span>
                                    <span className="compact-col-diff">
                                        <span className={`difficulty-badge ${q.difficulty?.toLowerCase() || 'medium'}`}>
                                            {q.difficulty}
                                        </span>
                                    </span>
                                    <span className="compact-col-action">
                                        <button type="button" className="compact-action-btn">
                                            {isExpanded ? 'Hide' : 'STAR Guide'}
                                        </button>
                                    </span>
                                </div>

                                {isExpanded && (
                                    <div style={{ padding: '0 20px 16px 20px', background: 'var(--bg-surface)' }}>
                                        <div className="star-workspace-drawer">
                                            <p style={{ margin: '0 0 10px 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                                "{q.problemStatement}"
                                            </p>
                                            <div className="star-point-box">
                                                <p><strong>💡 Recommended STAR Strategy:</strong> {q.answerTips}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Pagination Controls */}
            {!loading && !error && totalPages > 1 && (
                <div className="pagination-bar">
                    <button
                        type="button"
                        className="pagination-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ArrowLeftIcon size={14} /> Previous
                    </button>

                    <span className="pagination-info">
                        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                    </span>

                    <button
                        type="button"
                        className="pagination-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next <ArrowRightIcon size={14} />
                    </button>
                </div>
            )}
        </section>
    );
}

export default Interviews;
