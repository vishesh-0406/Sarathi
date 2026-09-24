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
    SpinnerIcon,
    CalendarIcon,
    FlameIcon
} from './Icons';
import './Tracker.css';

const API_BASE_URL = 'http://localhost:5000/api';

const ALL_COMPANIES = [
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle',
    'Uber', 'Salesforce', 'Zoho', 'Flipkart', 'Goldman Sachs',
    'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant',
    'Capgemini', 'HCLTech', 'Tech Mahindra', 'LTIMindtree', 'Genpact'
];

function Tracker({ onSolveQuestion, onOpenAuth, onSelectRoadmap }) {
    const { user, token, isAuthenticated, updateTargetCompany, updateTargetPlacementDate, toggleBookmark } = useAuth();
    const [trackerData, setTrackerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('solved'); // 'solved' | 'bookmarks'
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const [updatingCompany, setUpdatingCompany] = useState(false);
    const [dateModalOpen, setDateModalOpen] = useState(false);
    const [customDate, setCustomDate] = useState('');
    const [updatingDate, setUpdatingDate] = useState(false);
    const [hoveredCell, setHoveredCell] = useState(null);

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
    }, [token, user?.targetCompany, user?.solvedCount]);

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

    const handleSetPlacementDays = async (days) => {
        const target = new Date();
        target.setDate(target.getDate() + days);
        await savePlacementDate(target.toISOString());
    };

    const handleSaveCustomDate = async (e) => {
        e.preventDefault();
        if (!customDate) return;
        await savePlacementDate(new Date(customDate).toISOString());
    };

    const savePlacementDate = async (dateStr) => {
        try {
            setUpdatingDate(true);
            const res = await updateTargetPlacementDate(dateStr);
            if (res.success) {
                setDateModalOpen(false);
                await fetchTrackerData();
            }
        } catch (err) {
            console.error('Failed to update target date:', err);
        } finally {
            setUpdatingDate(false);
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
                        <h2>Personalized AI Placement Readiness & Milestone Tracker</h2>
                        <p>
                            Sign in to get an accurate 0–100% placement readiness score tailored to your dream company,
                            view round-by-round clearance probability, track your daily solving heatmap, and maintain a consistent prep streak.
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
                        <h3><TargetIcon size={18} /> Round-by-Round Clearance Probability</h3>
                        <ul className="preview-milestone-list">
                            <li><span className="dot dot-high"></span> Round 1: OA on HackerRank (82% High)</li>
                            <li><span className="dot dot-med"></span> Round 2: Tech Round 1 — Core DSA (60% Moderate)</li>
                            <li><span className="dot dot-low"></span> Round 3: Tech Round 2 — Systems (35% Focus)</li>
                            <li><span className="dot dot-high"></span> Round 4: Bar Raiser (75% High)</li>
                        </ul>
                    </div>

                    <div className="preview-card">
                        <h3><FlameIcon size={18} /> Daily Activity Heatmap & Countdown</h3>
                        <p className="preview-sub" style={{ marginBottom: '10px' }}>Target: Campus Drives in 45 Days (2 Problems/Day)</p>
                        <div className="preview-heatmap-grid">
                            {Array.from({ length: 28 * 7 }).map((_, i) => (
                                <div key={i} className={`mini-cell lvl-${(i % 5 === 0) ? 2 : (i % 7 === 0) ? 4 : (i % 3 === 0) ? 1 : 0}`}></div>
                            ))}
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
                <p>Computing AI Placement Readiness Metrics & Heatmap...</p>
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
        roundClearance = [],
        heatmap = { days: [], currentStreak: 0, longestStreak: 0, totalActiveDays: 0, totalActivities: 0 },
        countdown = { daysRemaining: 45, formattedTargetDate: 'Nov 2026', dailyTargetPace: 1 },
        insights,
        recommendedQuestions,
        solvedHistory,
        bookmarks
    } = trackerData;

    // Calculate SVG circle progress
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (readinessScore / 100) * circumference;

    // Group heatmap into 28 weeks (columns of 7 days)
    const weeks = [];
    const totalDays = heatmap.days.length;
    for (let i = 0; i < totalDays; i += 7) {
        weeks.push(heatmap.days.slice(i, i + 7));
    }

    // Determine month labels for heatmap
    const monthLabels = [];
    let lastMonth = '';
    weeks.forEach((w, wIdx) => {
        if (w.length > 0) {
            const d = new Date(w[0].date);
            const m = d.toLocaleString('default', { month: 'short' });
            if (m !== lastMonth && wIdx % 4 === 0) {
                monthLabels.push({ index: wIdx, label: m });
                lastMonth = m;
            }
        }
    });

    return (
        <div className="tracker-container">
            {/* 1. HERO READINESS GAUGE & TARGET ENTERPRISE BANNER */}
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

                        <div className="hero-action-pills-row">
                            {/* Target Company Switcher */}
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

                            {/* Placement Drive Countdown Pill */}
                            <div className="countdown-display-pill" onClick={() => setDateModalOpen(true)} title="Click to adjust your campus placement target date">
                                <CalendarIcon size={16} color="#38bdf8" />
                                <div className="countdown-pill-text">
                                    <span className="countdown-days-bold">{countdown.daysRemaining} Days</span>
                                    <span className="countdown-date-sub">Drive Target: {countdown.formattedTargetDate}</span>
                                </div>
                                <span className="edit-date-badge">Edit</span>
                            </div>

                            {/* Daily Pace Recommended */}
                            <div className="pace-display-pill">
                                <FlameIcon size={16} color="#f97316" />
                                <span>Pace: <strong>{countdown.dailyTargetPace} problem{countdown.dailyTargetPace > 1 ? 's' : ''}/day</strong></span>
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

            {/* DATE PICKER MODAL (OPTION A) */}
            {dateModalOpen && (
                <div className="tracker-modal-overlay" onClick={() => setDateModalOpen(false)}>
                    <div className="tracker-modal-card" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3><CalendarIcon size={18} /> Set Campus Placement Drive Target</h3>
                            <button className="close-modal-btn" onClick={() => setDateModalOpen(false)}>✕</button>
                        </div>
                        <p className="modal-subtitle">
                            Configure when your target company campus drives begin to calibrate your daily study pace.
                        </p>

                        <div className="preset-buttons-row">
                            <button type="button" className="preset-btn" onClick={() => handleSetPlacementDays(30)} disabled={updatingDate}>
                                30 Days (1 Month)
                            </button>
                            <button type="button" className="preset-btn" onClick={() => handleSetPlacementDays(45)} disabled={updatingDate}>
                                45 Days (Standard)
                            </button>
                            <button type="button" className="preset-btn" onClick={() => handleSetPlacementDays(60)} disabled={updatingDate}>
                                60 Days (2 Months)
                            </button>
                            <button type="button" className="preset-btn" onClick={() => handleSetPlacementDays(90)} disabled={updatingDate}>
                                90 Days (Quarter)
                            </button>
                        </div>

                        <form onSubmit={handleSaveCustomDate} className="custom-date-form">
                            <label className="form-label">Or Pick Exact Date:</label>
                            <div className="date-input-row">
                                <input
                                    type="date"
                                    className="custom-date-input"
                                    value={customDate}
                                    min={new Date().toISOString().split('T')[0]}
                                    onChange={e => setCustomDate(e.target.value)}
                                    required
                                />
                                <button type="submit" className="save-date-btn" disabled={updatingDate || !customDate}>
                                    {updatingDate ? 'Saving...' : 'Set Date'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* 2. LIVE ACTIVITY HEATMAP CARD (LEETCODE / GITHUB STYLE) */}
            <div className="tracker-card heatmap-card">
                <div className="card-header-clean">
                    <div className="heatmap-header-title">
                        <h3><FlameIcon size={20} color="#f97316" /> Activity Heatmap & Consistency</h3>
                        <span className="live-pulse-badge">Live Real-Time Sync</span>
                    </div>
                    <div className="heatmap-stats-strip">
                        <div className="h-stat-chip">
                            <span className="h-stat-icon">🔥</span>
                            <span className="h-stat-label">Current Streak:</span>
                            <strong>{heatmap.currentStreak} Days</strong>
                        </div>
                        <div className="h-stat-chip">
                            <span className="h-stat-icon">⚡</span>
                            <span className="h-stat-label">Longest Streak:</span>
                            <strong>{heatmap.longestStreak} Days</strong>
                        </div>
                        <div className="h-stat-chip">
                            <span className="h-stat-icon">📅</span>
                            <span className="h-stat-label">Active Days:</span>
                            <strong>{heatmap.totalActiveDays}</strong>
                        </div>
                        <div className="h-stat-chip">
                            <span className="h-stat-icon">🏆</span>
                            <span className="h-stat-label">Total Submissions:</span>
                            <strong>{heatmap.totalActivities}</strong>
                        </div>
                    </div>
                </div>

                <p className="heatmap-desc">
                    Every solved coding problem in any round, Aptitude test, and mock assessment updates this activity map automatically.
                </p>

                {/* Heatmap Grid Wrapper */}
                <div className="heatmap-scroll-container">
                    <div className="heatmap-grid-outer">
                        {/* Day of Week Labels (Mon, Wed, Fri) */}
                        <div className="heatmap-day-labels">
                            <span></span>
                            <span>Mon</span>
                            <span></span>
                            <span>Wed</span>
                            <span></span>
                            <span>Fri</span>
                            <span></span>
                        </div>

                        {/* 28-Week Heatmap Columns */}
                        <div className="heatmap-weeks-container">
                            {weeks.map((week, wIdx) => (
                                <div key={wIdx} className="heatmap-week-column">
                                    {week.map((day) => (
                                        <div
                                            key={day.date}
                                            className={`heatmap-cell level-${day.level}`}
                                            onMouseEnter={() => setHoveredCell(day)}
                                            onMouseLeave={() => setHoveredCell(null)}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tooltip Overlay */}
                    {hoveredCell && (
                        <div className="heatmap-tooltip">
                            <strong>{hoveredCell.count} question{hoveredCell.count === 1 ? '' : 's'} solved / attempted</strong>
                            <span>on {new Date(hoveredCell.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                    )}

                    {/* Legend Bar */}
                    <div className="heatmap-footer-legend">
                        <span className="legend-label">Less</span>
                        <div className="legend-cells">
                            <div className="heatmap-cell level-0"></div>
                            <div className="heatmap-cell level-1"></div>
                            <div className="heatmap-cell level-2"></div>
                            <div className="heatmap-cell level-3"></div>
                            <div className="heatmap-cell level-4"></div>
                        </div>
                        <span className="legend-label">More</span>
                    </div>
                </div>
            </div>

            {/* 3. ROUND-BY-ROUND CLEARANCE PROBABILITY BREAKDOWN (OPTION B) */}
            <div className="tracker-card round-clearance-card">
                <div className="card-header-clean">
                    <div>
                        <h3><TargetIcon size={20} color="#34d399" /> Official Recruitment Round Clearance Probability</h3>
                        <p className="card-sub-explain">
                            Dynamic probability of clearing each official hiring round at <strong>{targetCompany}</strong> based on your authentic problem coverage.
                        </p>
                    </div>
                    <span className="header-meta-tag">{roundClearance.length} Hiring Stages</span>
                </div>

                <div className="round-clearance-grid">
                    {roundClearance.map((rc) => (
                        <div key={rc.roundNumber} className="round-prob-card">
                            <div className="round-prob-card-header">
                                <div className="round-prob-badge">Round {rc.roundNumber}</div>
                                <span className={`prob-status-chip status-${rc.status.toLowerCase().replace(/[\s—]+/g, '-')}`} style={{ borderColor: rc.statusColor, color: rc.statusColor }}>
                                    {rc.status}
                                </span>
                            </div>

                            <h4 className="round-prob-name">{rc.name}</h4>
                            <p className="round-prob-sub">{rc.subtitle}</p>

                            {/* Large Clearance Meter */}
                            <div className="clearance-meter-wrap">
                                <div className="clearance-meter-header">
                                    <span className="prob-value" style={{ color: rc.statusColor }}>
                                        {rc.clearanceProbability}%
                                    </span>
                                    <span className="quota-tag">
                                        {rc.solvedCount} / {rc.targetQuota} Target Solved
                                    </span>
                                </div>
                                <div className="meter-bar-track">
                                    <div
                                        className="meter-bar-fill"
                                        style={{
                                            width: `${Math.min(100, rc.clearanceProbability)}%`,
                                            backgroundColor: rc.statusColor
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Evaluated Focus Pillars */}
                            <div className="round-focus-strip">
                                {rc.focusPillars?.map((p, idx) => (
                                    <span key={idx} className="focus-pill">{p}</span>
                                ))}
                            </div>

                            {/* Strategic Stage Tip */}
                            <div className="round-prob-tip">
                                <span>💡 {rc.roundTip}</span>
                            </div>

                            {/* Action CTA to Roadmap */}
                            {onSelectRoadmap && (
                                <button
                                    type="button"
                                    className="round-practice-cta"
                                    onClick={() => onSelectRoadmap(targetCompany)}
                                >
                                    <span>Practice Round {rc.roundNumber} in Roadmap</span>
                                    <ArrowRightIcon size={13} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. CORE TOPIC MASTERY (6 PILLARS) */}
            <div className="tracker-card mastery-card">
                <div className="card-header-clean">
                    <h3><BrainIcon size={18} /> Algorithmic Topic Mastery Radar</h3>
                    <span className="header-meta-tag">6 Core Placement Pillars</span>
                </div>
                <div className="mastery-grid">
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

            {/* 5. AI STRATEGIC INSIGHTS & NEXT 3 RECOMMENDED PROBLEMS */}
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

            {/* 6. ACTIVITY & REVISION HUB (SOLVED HISTORY / BOOKMARKS) */}
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
                                <p>No questions solved yet. Start coding in the IDE to track your history and light up your activity heatmap!</p>
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
