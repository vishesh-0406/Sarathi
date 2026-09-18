import { useState, useEffect, useCallback, useMemo } from 'react';
import CompanyLogo from './CompanyLogos';
import {
    ArrowLeftIcon,
    InterviewIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    LinkedInIcon,
    ExternalLinkIcon,
    CalendarIcon
} from './Icons';

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

    return (
        <section id="interviews-section" className="interviews-section">
            <div className="section-header-row">
                {onBack && (
                    <button className="back-btn" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
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
                        onChange={(e) => setSelectedCompany(e.target.value)}
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
                <span className="recency-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <CalendarIcon size={13} /> Sourced from 2024–2026 Hiring Cycles
                </span>
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
                                <span className="company-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                                    <CompanyLogo name={q.company} size={16} />
                                    <span>{q.company}</span>
                                </span>
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
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                                    >
                                        <span>💡 Recommended STAR Answer Strategy & Key Points</span>
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                                            {isExpanded ? (
                                                <>Hide <ChevronUpIcon size={13} /></>
                                            ) : (
                                                <>Reveal Tips <ChevronDownIcon size={13} /></>
                                            )}
                                        </span>
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
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                                    >
                                        <LinkedInIcon size={14} /> View on LinkedIn <ExternalLinkIcon size={11} />
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
