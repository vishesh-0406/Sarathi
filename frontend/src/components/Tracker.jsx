import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import CompanyLogo from './CompanyLogos';
import { 
    TargetIcon, 
    TrophyIcon, 
    BookmarkIcon, 
    BrainIcon, 
    SparklesIcon, 
    PlayIcon, 
    ArrowRightIcon, 
    CheckIcon,
    SpinnerIcon
} from './Icons';
import './Tracker.css';

const API_BASE_URL = 'http://localhost:5000/api';

const ALL_COMPANIES = [
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle',
    'Uber', 'Salesforce', 'Zoho', 'Flipkart', 'Goldman Sachs',
    'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant',
    'Capgemini', 'HCLTech', 'Tech Mahindra', 'LTIMindtree', 'Genpact'
];

function Tracker({ onSolveQuestion, onOpenAuth }) {
    const { user, token, isAuthenticated, updateTargetCompany, toggleBookmark } = useAuth();
    const [trackerData, setTrackerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('solved'); // 'solved' | 'bookmarks'
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const [updatingCompany, setUpdatingCompany] = useState(false);

    // Fetch tracker metrics
    const fetchTrackerData = async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const res = await fetch(`${API_BASE_URL}/user/tracker`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!res.ok) {
                throw new Error(`Failed to load tracker: ${res.status}`);
            }

            const json = await res.json();
            if (json.success) {
                setTrackerData(json.tracker);
            }
        } catch (err) {
            console.error('Error fetching tracker metrics:', err);
            setError(err.message || 'Unable to connect to tracker service');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrackerData();
    }, [token, user?.targetCompany]);

    const handleSelectCompany = async (comp) => {
        setCompanyDropdownOpen(false);
        if (comp === trackerData?.targetCompany) return;

        try {
            setUpdatingCompany(true);
            const res = await updateTargetCompany(comp);
            if (res.success) {
                await fetchTrackerData();
            }
        } catch (err) {
            console.error('Failed to update target company:', err);
        } finally {
            setUpdatingCompany(false);
        }
    };

    const handleRemoveBookmark = async (qId) => {
        const res = await toggleBookmark(qId);
        if (res.success) {
            fetchTrackerData();
        }
    };

    // GUEST PREVIEW MODE
    if (!isAuthenticated) {
        return (
            <div className="tracker-container">
                <div className="tracker-guest-banner">
                    <div className="guest-banner-icon">
                        <SparklesIcon size={32} />
                    </div>
                    <div className="guest-banner-content">
                        <h2>Personalized AI Placement Readiness Tracker</h2>
                        <p>
                            Sign in to get an accurate 0–100% placement readiness score tailored to your dream company,
                            track official hiring round milestones, analyze topic mastery, and receive high-impact problem recommendations.
                        </p>
                    </div>
                    <button className="guest-auth-btn" onClick={() => onOpenAuth('login')}>
                        Sign In to Unlock Score
                    </button>
                </div>

                {/* Simulated Preview Grid */}
                <div className="tracker-preview-grid">
                    <div className="preview-card preview-score-card">
                        <div className="preview-gauge-placeholder">
                            <div className="gauge-circle-outer">
                                <span className="gauge-number-preview">--%</span>
                                <span className="gauge-label-preview">Placement Ready</span>
                            </div>
                        </div>
                        <h3>Dream Target: Amazon</h3>
                        <p className="preview-sub">Track real-time probability of clearing OA and technical rounds.</p>
                    </div>

                    <div className="preview-card">
                        <h3><TargetIcon size={18} /> Official Hiring Milestones</h3>
                        <ul className="preview-milestone-list">
                            <li><span className="dot"></span> Online Assessment (OA on HackerRank)</li>
                            <li><span className="dot"></span> Technical Round 1: Core DSA</li>
                            <li><span className="dot"></span> Technical Round 2: Advanced DSA & LLD</li>
                            <li><span className="dot"></span> Bar Raiser: 16 Leadership Principles</li>
                        </ul>
                    </div>

                    <div className="preview-card">
                        <h3><BrainIcon size={18} /> AI Topic Mastery Radar</h3>
                        <div className="preview-topic-bars">
                            <div className="preview-topic-row"><span>Arrays & Strings</span><div className="bar-wrap"><div className="bar fill-60"></div></div></div>
                            <div className="preview-topic-row"><span>Trees & Graphs</span><div className="bar-wrap"><div className="bar fill-40"></div></div></div>
                            <div className="preview-topic-row"><span>Dynamic Programming</span><div className="bar-wrap"><div className="bar fill-20"></div></div></div>
                            <div className="preview-topic-row"><span>Aptitude & Verbal</span><div className="bar-wrap"><div className="bar fill-80"></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="tracker-container tracker-loading-state">
                <SpinnerIcon size={36} className="tracker-spin" />
                <p>Computing AI Placement Readiness Metrics...</p>
            </div>
        );
    }

    if (error || !trackerData) {
        return (
            <div className="tracker-container">
                <div className="tracker-error-banner">
                    <p>⚠️ {error || 'Unable to load readiness data'}</p>
                    <button className="retry-btn" onClick={fetchTrackerData}>Retry</button>
                </div>
            </div>
        );
    }

    const {
        targetCompany,
        readinessScore,
        readinessTier,
        readinessColor,
        stats,
        topicMastery,
        roundMilestones,
        insights,
        recommendedQuestions,
        solvedHistory,
        bookmarks
    } = trackerData;

    // Calculate SVG circle progress
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (readinessScore / 100) * circumference;

    return (
        <div className="tracker-container">
            {/* 1. HERO READINESS GAUGE & TARGET COMPANY BANNER */}
            <div className="tracker-hero-card">
                <div className="tracker-gauge-section">
                    <div className="svg-gauge-wrapper">
                        <svg className="svg-gauge" width="136" height="136" viewBox="0 0 136 136">
                            <circle
                                className="gauge-bg"
                                cx="68"
                                cy="68"
                                r={radius}
                                strokeWidth="10"
                            />
                            <circle
                                className="gauge-fill"
                                cx="68"
                                cy="68"
                                r={radius}
                                strokeWidth="10"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                stroke={readinessColor}
                            />
                        </svg>
                        <div className="gauge-inner-content">
                            <span className="gauge-score" style={{ color: readinessColor }}>{readinessScore}%</span>
                            <span className="gauge-score-label">Readiness</span>
                        </div>
                    </div>

                    <div className="hero-text-details">
                        <div className="hero-title-row">
                            <h2>Placement Readiness Index</h2>
                            <span className="readiness-tier-badge" style={{ borderColor: readinessColor, color: readinessColor }}>
                                {readinessTier}
                            </span>
                        </div>
                        <p className="hero-description">
                            Calculated dynamically based on your algorithmic depth, target company problem frequency,
                            and accuracy across official hiring rounds.
                        </p>

                        <div className="target-company-switcher">
                            <span className="switcher-label">Target Enterprise:</span>
                            <div className="company-dropdown-relative">
                                <button
                                    type="button"
                                    className="company-select-pill"
                                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                                    disabled={updatingCompany}
                                >
                                    <CompanyLogo name={targetCompany} size={18} />
                                    <span className="selected-company-name">{targetCompany}</span>
                                    <span className="caret">▾</span>
                                </button>

                                {companyDropdownOpen && (
                                    <div className="company-dropdown-menu">
                                        {ALL_COMPANIES.map(comp => (
                                            <button
                                                key={comp}
                                                type="button"
                                                className={`company-menu-item ${comp === targetCompany ? 'active' : ''}`}
                                                onClick={() => handleSelectCompany(comp)}
                                            >
                                                <CompanyLogo name={comp} size={16} />
                                                <span>{comp}</span>
                                                {comp === targetCompany && <CheckIcon size={13} />}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4 Quick Stat Pills */}
                <div className="hero-stats-row">
                    <div className="stat-pill-card">
                        <div className="stat-pill-icon"><TrophyIcon size={18} /></div>
                        <div className="stat-pill-data">
                            <span className="stat-val">{stats.totalSolved}</span>
                            <span className="stat-lbl">Problems Solved</span>
                        </div>
                    </div>

                    <div className="stat-pill-card">
                        <div className="stat-pill-icon"><TargetIcon size={18} /></div>
                        <div className="stat-pill-data">
                            <span className="stat-val">{stats.targetCompanySolved}</span>
                            <span className="stat-lbl">{targetCompany} Specific</span>
                        </div>
                    </div>

                    <div className="stat-pill-card">
                        <div className="stat-pill-icon"><BookmarkIcon size={18} filled color="#fbbf24" /></div>
                        <div className="stat-pill-data">
                            <span className="stat-val">{stats.totalBookmarks}</span>
                            <span className="stat-lbl">Bookmarked</span>
                        </div>
                    </div>

                    <div className="stat-pill-card">
                        <div className="stat-pill-icon"><BrainIcon size={18} /></div>
                        <div className="stat-pill-data">
                            <span className="stat-val">
                                {stats.totalQuizzesAttempted > 0 
                                    ? `${Math.round((stats.correctQuizzes / stats.totalQuizzesAttempted) * 100)}%` 
                                    : '100%'}
                            </span>
                            <span className="stat-lbl">Aptitude Accuracy</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. RECRUITMENT ROUND MILESTONES & TOPIC MASTERY GRID */}
            <div className="tracker-split-grid">
                {/* Left: Round Milestones */}
                <div className="tracker-card milestones-card">
                    <div className="card-header-clean">
                        <h3><TargetIcon size={18} /> {targetCompany} Recruitment Stages</h3>
                        <span className="header-meta-tag">{roundMilestones.length} Official Rounds</span>
                    </div>
                    <div className="milestones-timeline">
                        {roundMilestones.map((m) => (
                            <div key={m.roundNum} className="milestone-row">
                                <div className="milestone-badge-col">
                                    <span className={`milestone-badge ${m.progress >= 100 ? 'complete' : m.progress > 0 ? 'active' : ''}`}>
                                        {m.progress >= 100 ? '✓' : `R${m.roundNum}`}
                                    </span>
                                </div>
                                <div className="milestone-details-col">
                                    <div className="milestone-title-row">
                                        <span className="milestone-title">{m.title}</span>
                                        <span className="milestone-pct">{m.progress}%</span>
                                    </div>
                                    <span className="milestone-focus">{m.focus}</span>
                                    <div className="milestone-bar-wrap">
                                        <div
                                            className="milestone-bar-fill"
                                            style={{ width: `${Math.min(100, m.progress)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Core Topic Mastery */}
                <div className="tracker-card mastery-card">
                    <div className="card-header-clean">
                        <h3><BrainIcon size={18} /> Algorithmic Topic Mastery</h3>
                        <span className="header-meta-tag">6 Core Pillars</span>
                    </div>
                    <div className="mastery-list">
                        {Object.entries(topicMastery).map(([topicName, info]) => {
                            const pct = Math.min(100, Math.round((info.solved / info.target) * 100));
                            return (
                                <div key={topicName} className="mastery-item">
                                    <div className="mastery-item-head">
                                        <span className="topic-name">{topicName}</span>
                                        <span className="topic-counts">{info.solved} / {info.target} problems</span>
                                    </div>
                                    <div className="mastery-bar-wrap">
                                        <div
                                            className="mastery-bar-fill"
                                            style={{
                                                width: `${pct}%`,
                                                backgroundColor: pct >= 80 ? '#34d399' : pct >= 40 ? '#38bdf8' : '#fbbf24'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 3. AI STRATEGIC INSIGHTS & NEXT 3 RECOMMENDED PROBLEMS */}
            <div className="tracker-card ai-insights-card">
                <div className="card-header-clean">
                    <h3><SparklesIcon size={18} /> AI Placement Insights & Recommended Focus</h3>
                    <span className="header-meta-tag">Customized for {targetCompany}</span>
                </div>

                <div className="ai-advice-banner">
                    <p className="ai-advice-text">💡 {insights.strategicAdvice}</p>
                </div>

                <div className="insights-pills-row">
                    <div className="insight-col">
                        <span className="insight-lbl">Verified Strengths:</span>
                        <div className="insight-chips">
                            {insights.strengths.map((str, idx) => (
                                <span key={idx} className="chip chip-strength">✓ {str}</span>
                            ))}
                        </div>
                    </div>
                    <div className="insight-col">
                        <span className="insight-lbl">Critical Blindspots:</span>
                        <div className="insight-chips">
                            {insights.blindspots.map((b, idx) => (
                                <span key={idx} className="chip chip-blindspot">⚠ {b}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommended Questions Cards */}
                <div className="recommended-questions-section">
                    <h4 className="rec-section-title">Highest-Yield Problems to Solve Next</h4>
                    <div className="rec-cards-grid">
                        {recommendedQuestions.map((q) => (
                            <div key={q._id} className="rec-problem-card">
                                <div className="rec-card-top">
                                    <div className="rec-tags">
                                        <span className="company-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                                            <CompanyLogo name={q.company || targetCompany} size={14} />
                                            <span>{q.company || targetCompany}</span>
                                        </span>
                                        <span className={`diff-badge ${q.difficulty?.toLowerCase() || 'medium'}`}>
                                            {q.difficulty || 'Medium'}
                                        </span>
                                    </div>
                                    <span className="rec-round-tag">{q.round || 'Technical Round'}</span>
                                </div>

                                <h5 className="rec-title">{q.title}</h5>
                                <p className="rec-snippet">
                                    {q.problemStatement?.slice(0, 110)}...
                                </p>

                                <button
                                    type="button"
                                    className="rec-solve-btn"
                                    onClick={() => onSolveQuestion(q)}
                                >
                                    <PlayIcon size={12} />
                                    <span>Solve in IDE</span>
                                    <ArrowRightIcon size={12} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. ACTIVITY & REVISION HUB (SOLVED HISTORY / BOOKMARKS) */}
            <div className="tracker-card activity-hub-card">
                <div className="activity-tabs-header">
                    <div className="activity-tabs">
                        <button
                            type="button"
                            className={`activity-tab ${activeTab === 'solved' ? 'active' : ''}`}
                            onClick={() => setActiveTab('solved')}
                        >
                            <TrophyIcon size={15} />
                            <span>Solved Questions ({solvedHistory.length})</span>
                        </button>
                        <button
                            type="button"
                            className={`activity-tab ${activeTab === 'bookmarks' ? 'active' : ''}`}
                            onClick={() => setActiveTab('bookmarks')}
                        >
                            <BookmarkIcon size={15} filled={activeTab === 'bookmarks'} color="#fbbf24" />
                            <span>Bookmarked Revision ({bookmarks.length})</span>
                        </button>
                    </div>
                </div>

                <div className="activity-tab-content">
                    {activeTab === 'solved' && (
                        solvedHistory.length === 0 ? (
                            <div className="empty-activity-state">
                                <p>No questions solved yet. Start coding in the IDE to track your history!</p>
                            </div>
                        ) : (
                            <div className="activity-table-wrapper">
                                <table className="activity-table">
                                    <thead>
                                        <tr>
                                            <th>Problem Title</th>
                                            <th>Company</th>
                                            <th>Difficulty</th>
                                            <th>Language</th>
                                            <th>Solved At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {solvedHistory.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="problem-title-cell">{item.title}</td>
                                                <td>
                                                    <span className="table-company-chip">
                                                        <CompanyLogo name={item.company} size={14} />
                                                        <span>{item.company}</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className={`diff-badge ${item.difficulty.toLowerCase()}`}>
                                                        {item.difficulty}
                                                    </span>
                                                </td>
                                                <td><span className="lang-code-tag">{item.language}</span></td>
                                                <td className="date-cell">
                                                    {new Date(item.solvedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="table-action-btn"
                                                        onClick={() => onSolveQuestion({ _id: item.questionId, title: item.title, company: item.company })}
                                                    >
                                                        Review
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    )}

                    {activeTab === 'bookmarks' && (
                        bookmarks.length === 0 ? (
                            <div className="empty-activity-state">
                                <p>No bookmarked questions yet. Click the ☆ Bookmark button in the IDE to save questions for revision.</p>
                            </div>
                        ) : (
                            <div className="activity-table-wrapper">
                                <table className="activity-table">
                                    <thead>
                                        <tr>
                                            <th>Problem Title</th>
                                            <th>Company</th>
                                            <th>Difficulty</th>
                                            <th>Category</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookmarks.map((bm) => (
                                            <tr key={bm._id}>
                                                <td className="problem-title-cell">{bm.title}</td>
                                                <td>
                                                    <span className="table-company-chip">
                                                        <CompanyLogo name={bm.company} size={14} />
                                                        <span>{bm.company}</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className={`diff-badge ${bm.difficulty.toLowerCase()}`}>
                                                        {bm.difficulty}
                                                    </span>
                                                </td>
                                                <td><span className="cat-badge">{bm.category}</span></td>
                                                <td className="actions-cell">
                                                    <button
                                                        type="button"
                                                        className="table-action-btn solve-act-btn"
                                                        onClick={() => onSolveQuestion(bm)}
                                                    >
                                                        Solve
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="table-action-btn remove-act-btn"
                                                        onClick={() => handleRemoveBookmark(bm._id)}
                                                        title="Remove from bookmarks"
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tracker;
