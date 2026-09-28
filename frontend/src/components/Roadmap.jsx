import { useState, useEffect, useCallback } from 'react';
import { CompanyLogo } from './CompanyLogos';
import { 
    RoadmapIcon, 
    ArrowLeftIcon, 
    ZapIcon, 
    LinkIcon, 
    LockIcon, 
    SparklesIcon, 
    AptitudeIcon, 
    DocumentIcon, 
    ChevronDownIcon, 
    ChevronUpIcon,
    ChatIcon,
    LinkedInIcon,
    XTwitterIcon,
    ExternalLinkIcon,
    DSAIcon,
    InterviewIcon
} from './Icons';
import './Roadmap.css';

const API_BASE_URL = 'http://localhost:5000/api';

const ALL_COMPANIES = [
    // 10 Service
    { name: 'TCS', type: 'service' },
    { name: 'Infosys', type: 'service' },
    { name: 'Wipro', type: 'service' },
    { name: 'Accenture', type: 'service' },
    { name: 'Cognizant', type: 'service' },
    { name: 'Capgemini', type: 'service' },
    { name: 'HCLTech', type: 'service' },
    { name: 'Tech Mahindra', type: 'service' },
    { name: 'LTIMindtree', type: 'service' },
    { name: 'Genpact', type: 'service' },
    // 10 Product
    { name: 'Amazon', type: 'product' },
    { name: 'Google', type: 'product' },
    { name: 'Microsoft', type: 'product' },
    { name: 'Adobe', type: 'product' },
    { name: 'Oracle', type: 'product' },
    { name: 'Salesforce', type: 'product' },
    { name: 'Uber', type: 'product' },
    { name: 'Zoho', type: 'product' },
    { name: 'Flipkart', type: 'product' },
    { name: 'Goldman Sachs', type: 'product' }
];

function Roadmap({ initialCompany = 'Amazon', onBack, onOpenIDE }) {
    const [selectedCompany, setSelectedCompany] = useState(initialCompany);
    const [companyTypeFilter, setCompanyTypeFilter] = useState('all'); // 'all' | 'product' | 'service'
    const [roadmapData, setRoadmapData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [expandedRounds, setExpandedRounds] = useState({});
    const [activeCategoryFilter, setActiveCategoryFilter] = useState('All'); // 'All' | 'DSA' | 'Aptitude' | 'Interview'
    const [expandedQuestionDetails, setExpandedQuestionDetails] = useState({});
    const [quizAnswers, setQuizAnswers] = useState({});

    useEffect(() => {
        if (initialCompany) {
            setSelectedCompany(initialCompany);
        }
    }, [initialCompany]);

    const fetchRoadmap = useCallback(async (companyName) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API_BASE_URL}/companies/${encodeURIComponent(companyName)}/roadmap`);
            if (!res.ok) {
                throw new Error(`Failed to load roadmap (HTTP ${res.status})`);
            }
            const data = await res.json();
            if (data.success) {
                setRoadmapData(data);
                // Expand all rounds by default
                const roundsList = data.rounds || data.milestones || [];
                const initExpanded = {};
                roundsList.forEach(r => {
                    initExpanded[r.roundNumber || r.level] = true;
                });
                setExpandedRounds(initExpanded);
                // Reset answers and details on company change
                setExpandedQuestionDetails({});
                setQuizAnswers({});
            } else {
                throw new Error(data.message || 'Error fetching roadmap');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchRoadmap(selectedCompany);
    }, [selectedCompany, fetchRoadmap]);

    const toggleRound = (roundNum) => {
        setExpandedRounds(prev => ({
            ...prev,
            [roundNum]: !prev[roundNum]
        }));
    };

    const toggleQuestionDetail = (qId) => {
        setExpandedQuestionDetails(prev => ({
            ...prev,
            [qId]: !prev[qId]
        }));
    };

    const handleSelectOption = (qId, option) => {
        setQuizAnswers(prev => ({
            ...prev,
            [qId]: option
        }));
    };

    const filteredCompanyList = ALL_COMPANIES.filter(c => {
        if (companyTypeFilter === 'all') return true;
        return c.type === companyTypeFilter;
    });

    const getDifficultyClass = (diff) => {
        switch ((diff || '').toLowerCase()) {
            case 'easy': return 'diff-easy';
            case 'medium': return 'diff-medium';
            case 'hard': return 'diff-hard';
            default: return 'diff-medium';
        }
    };

    const getCategoryBadgeClass = (cat) => {
        switch ((cat || '').toLowerCase()) {
            case 'dsa': return 'badge-dsa';
            case 'aptitude': return 'badge-aptitude';
            case 'interview': return 'badge-interview';
            default: return 'badge-dsa';
        }
    };

    const renderCategoryBadge = (cat) => {
        const lower = (cat || '').toLowerCase();
        if (lower === 'dsa') {
            return (
                <span className="track-cat-pill dsa">
                    <DSAIcon size={12} /> DSA
                </span>
            );
        } else if (lower === 'aptitude') {
            return (
                <span className="track-cat-pill aptitude">
                    <AptitudeIcon size={12} /> Aptitude
                </span>
            );
        } else if (lower === 'interview') {
            return (
                <span className="track-cat-pill interview">
                    <InterviewIcon size={12} /> Interview
                </span>
            );
        }
        return (
            <span className="track-cat-pill">
                {cat}
            </span>
        );
    };

    const rounds = roadmapData?.rounds || roadmapData?.milestones || [];

    return (
        <div className="roadmap-page">
            {/* Header Navigation Bar */}
            <div className="roadmap-topbar">
                <button className="back-btn" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <ArrowLeftIcon size={14} /> Back to Preparation
                </button>
                <div className="roadmap-title-box">
                    <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <RoadmapIcon size={28} /> Company-Specific Preparation Roadmap
                    </h1>
                    <p>Authentic recruitment rounds and filtration stages tailored to each company's exact hiring bar.</p>
                </div>
            </div>

            {/* Target Company Selector */}
            <div className="company-selection-card">
                <div className="company-type-tabs">
                    <span className="filter-label">Filter:</span>
                    <button 
                        className={`type-tab ${companyTypeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setCompanyTypeFilter('all')}
                    >
                        All (20)
                    </button>
                    <button 
                        className={`type-tab ${companyTypeFilter === 'product' ? 'active' : ''}`}
                        onClick={() => setCompanyTypeFilter('product')}
                    >
                        Product-Based (10)
                    </button>
                    <button 
                        className={`type-tab ${companyTypeFilter === 'service' ? 'active' : ''}`}
                        onClick={() => setCompanyTypeFilter('service')}
                    >
                        Service-Based (10)
                    </button>
                </div>

                <div className="company-chips-grid">
                    {filteredCompanyList.map(comp => (
                        <button
                            key={comp.name}
                            className={`company-chip ${selectedCompany === comp.name ? 'selected' : ''}`}
                            onClick={() => setSelectedCompany(comp.name)}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            <CompanyLogo name={comp.name} size={20} />
                            <span className="chip-name">{comp.name}</span>
                            <span className={`chip-badge ${comp.type}`}>
                                {comp.type === 'product' ? 'Product' : 'Service'}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {loading && (
                <div className="roadmap-loading">
                    <div className="spinner"></div>
                    <p>Loading authentic {selectedCompany} recruitment rounds...</p>
                </div>
            )}

            {error && (
                <div className="roadmap-error">
                    <p>⚠️ {error}</p>
                    <button onClick={() => fetchRoadmap(selectedCompany)}>Retry</button>
                </div>
            )}

            {!loading && !error && roadmapData && (
                <>
                    {/* Company Intelligence & Blueprint Card */}
                    <div className="company-blueprint-card">
                        <div className="blueprint-header" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <CompanyLogo name={roadmapData.company.name} size={54} className="blueprint-company-logo" />
                            <div>
                                <span className={`company-tier-tag ${roadmapData.company.type}`}>
                                    {roadmapData.company.tier || (roadmapData.company.type === 'product' ? 'Top Product Firm' : 'Global IT Services Leader')}
                                </span>
                                <h2 style={{ margin: '4px 0 0 0' }}>{roadmapData.company.name} Placement Blueprint</h2>
                            </div>

                            <div className="blueprint-meta-stats">
                                <div className="meta-stat-pill">
                                    <strong>{roadmapData.stats.totalQuestions}</strong> Authentic Questions
                                </div>
                                <div className="meta-stat-pill">
                                    <strong>{roadmapData.stats.dsaCount}</strong> DSA
                                </div>
                                <div className="meta-stat-pill">
                                    <strong>{roadmapData.stats.aptitudeCount}</strong> Aptitude
                                </div>
                                <div className="meta-stat-pill">
                                    <strong>{roadmapData.stats.interviewCount}</strong> HR / CS
                                </div>
                                <div className="meta-stat-pill novel">
                                    <SparklesIcon size={13} /> <strong>{roadmapData.stats.novelCount}</strong> Exclusives
                                </div>
                            </div>
                        </div>

                        {/* Visual Hiring Stages Pipeline */}
                        <div className="hiring-pipeline-section">
                            <h3>Official Recruitment Pipeline ({rounds.length} Authentic Rounds)</h3>
                            <div className="pipeline-steps">
                                {roadmapData.company.hiringProcess?.map((step, idx) => (
                                    <div key={idx} className="pipeline-step-card">
                                        <div className="step-indicator">{step.step}</div>
                                        <h4>{step.name}</h4>
                                        <p>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Focus Pillars & Difficulty Mix */}
                        <div className="blueprint-footer">
                            <div className="focus-pillars-box">
                                <span className="box-title">Key Evaluated Pillars:</span>
                                <div className="pill-tags">
                                    {roadmapData.company.focusAreas?.map((area, i) => (
                                        <span key={i} className="focus-tag">{area}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="difficulty-distribution-box">
                                <span className="box-title">Difficulty Mix:</span>
                                <div className="diff-bar-container">
                                    <span className="diff-count easy">Easy: {roadmapData.stats.difficulty.easy}</span>
                                    <span className="diff-count medium">Medium: {roadmapData.stats.difficulty.medium}</span>
                                    <span className="diff-count hard">Hard: {roadmapData.stats.difficulty.hard}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter for Rounds */}
                    <div className="milestone-controls-bar">
                        <div className="category-filter-group">
                            <span className="filter-title">Filter Questions:</span>
                            {['All', 'DSA', 'Aptitude', 'Interview'].map(cat => (
                                <button
                                    key={cat}
                                    className={`cat-btn ${activeCategoryFilter === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategoryFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="expand-controls">
                            <button 
                                onClick={() => {
                                    const allExp = {};
                                    rounds.forEach(r => allExp[r.roundNumber || r.level] = true);
                                    setExpandedRounds(allExp);
                                }}
                            >
                                Expand All
                            </button>
                            <button 
                                onClick={() => setExpandedRounds({})}
                            >
                                Collapse All
                            </button>
                        </div>
                    </div>

                    {/* Authentic Company Rounds Timeline */}
                    <div className="milestones-timeline">
                        {rounds.map((roundItem) => {
                            const rNum = roundItem.roundNumber || roundItem.level;
                            const isExpanded = Boolean(expandedRounds[rNum]);
                            const filteredQuestions = roundItem.questions.filter(q => {
                                if (activeCategoryFilter === 'All') return true;
                                return q.category === activeCategoryFilter;
                            });

                            return (
                                <div key={roundItem.id} className={`milestone-container level-${rNum}`}>
                                    {/* Round Header */}
                                    <div 
                                        className="milestone-header-row"
                                        onClick={() => toggleRound(rNum)}
                                    >
                                        <div className="milestone-badge-box">
                                            <span className="level-number">Round {rNum}</span>
                                            <span className="timeline-est">{roundItem.estimatedTime}</span>
                                        </div>

                                        <div className="milestone-headings">
                                            <h3>{roundItem.name || roundItem.title}</h3>
                                            <p>{roundItem.subtitle}</p>
                                            <div className="milestone-focus-strip">
                                                {roundItem.focusPillars?.map((p, idx) => (
                                                    <span key={idx} className="focus-pill">{p}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="milestone-actions-meta">
                                            <span className="q-count-badge">
                                                {filteredQuestions.length} Questions
                                            </span>
                                            <span className="accordion-arrow">
                                                {isExpanded ? <ChevronUpIcon size={14} /> : <ChevronDownIcon size={14} />}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Round Questions List */}
                                    {isExpanded && (
                                        <div className="milestone-body">
                                            {filteredQuestions.length === 0 ? (
                                                <p className="no-q-msg">No questions in this round match the selected filter.</p>
                                            ) : (
                                                <div className="roadmap-curriculum-track">
                                                    {filteredQuestions.map((q, idx) => {
                                                        const isDetailOpen = expandedQuestionDetails[q._id];
                                                        const matched = q.matchedProblems?.[0];
                                                        const userChoice = quizAnswers[q._id];
                                                        const seqNumber = `#${String(idx + 1).padStart(2, '0')}`;

                                                        return (
                                                            <div key={q._id} className={`roadmap-track-item ${isDetailOpen ? 'is-expanded' : ''}`}>
                                                                {/* Problem Item Header Bar */}
                                                                <div className="track-item-top">
                                                                    <div className="track-badges-left">
                                                                        <span className="track-seq-idx">{seqNumber}</span>
                                                                        {renderCategoryBadge(q.category)}
                                                                        <span className={`track-diff-pill ${getDifficultyClass(q.difficulty)}`}>
                                                                            {q.difficulty}
                                                                        </span>
                                                                        {q.isNovel ? (
                                                                            <span className="novel-exclusive-tag">
                                                                                <SparklesIcon size={13} /> Company Exclusive
                                                                            </span>
                                                                        ) : matched ? (
                                                                            <a
                                                                                href={matched.problemUrl || `https://leetcode.com/problems/${matched.problemName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/`}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="canonical-lc-link"
                                                                                title="View canonical problem on LeetCode"
                                                                            >
                                                                                <LinkIcon size={13} /> {matched.problemName}
                                                                                {matched.isPremium && <span className="premium-lock"> <LockIcon size={12} /></span>}
                                                                            </a>
                                                                        ) : null}
                                                                    </div>

                                                                    <div className="track-badges-right">
                                                                        <span className="round-tag">{q.round || 'Technical Round'}</span>
                                                                    </div>
                                                                </div>

                                                                {/* Question Title & Problem Premise */}
                                                                <div className="track-title-row">
                                                                    <h4 className="track-problem-title">{q.title}</h4>
                                                                </div>

                                                                <p className="track-problem-snippet">
                                                                    {(q.problemStatement || q.question || '').slice(0, 220)}...
                                                                </p>

                                                                {/* Direct Interactive Action Bar */}
                                                                <div className="track-action-bar">
                                                                    {q.category === 'DSA' && (
                                                                        <>
                                                                            <button 
                                                                                type="button"
                                                                                className="ide-btn"
                                                                                onClick={() => onOpenIDE(q)}
                                                                            >
                                                                                <ZapIcon size={14} /> Solve in IDE
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className={`details-btn ${isDetailOpen ? 'active' : ''}`}
                                                                                onClick={() => toggleQuestionDetail(q._id)}
                                                                            >
                                                                                {isDetailOpen ? 'Hide Problem ▴' : 'View Problem Details ▾'}
                                                                            </button>
                                                                        </>
                                                                    )}

                                                                    {q.category === 'Aptitude' && (
                                                                        <button 
                                                                            type="button"
                                                                            className={`quiz-btn ${isDetailOpen ? 'active' : ''}`}
                                                                            onClick={() => toggleQuestionDetail(q._id)}
                                                                        >
                                                                            {isDetailOpen ? 'Hide Quiz ▴' : <><AptitudeIcon size={14} /> Practice Quiz ▾</>}
                                                                        </button>
                                                                    )}

                                                                    {q.category === 'Interview' && (
                                                                        <button 
                                                                            type="button"
                                                                            className={`star-btn ${isDetailOpen ? 'active' : ''}`}
                                                                            onClick={() => toggleQuestionDetail(q._id)}
                                                                        >
                                                                            {isDetailOpen ? 'Hide Strategy ▴' : <><DocumentIcon size={14} /> View STAR Strategy ▾</>}
                                                                        </button>
                                                                    )}
                                                                </div>

                                                                {/* In-Place Full-Width Stage Workspace Drawer */}
                                                                {isDetailOpen && (
                                                                    <div className="track-stage-workspace">
                                                                        {/* Full Problem Statement */}
                                                                        <div className="workspace-statement">
                                                                            <span className="workspace-section-label">Full Problem Statement</span>
                                                                            <p>{q.problemStatement || q.question}</p>
                                                                        </div>

                                                                        {/* Aptitude Multiple Choice Interactive Section */}
                                                                        {q.category === 'Aptitude' && q.options && (
                                                                            <div className="aptitude-quiz-console">
                                                                                <div className="quiz-console-header">
                                                                                    <span className="quiz-header-label">
                                                                                        <AptitudeIcon size={14} /> Multiple Choice Challenge
                                                                                    </span>
                                                                                    <span className="quiz-header-hint">
                                                                                        Select an option to evaluate your answer immediately
                                                                                    </span>
                                                                                </div>

                                                                                <div className="quiz-options-grid">
                                                                                    {(() => {
                                                                                        const correctLetter = (q.correctOption || '').trim().match(/^[A-D]/i) ? (q.correctOption || '').trim()[0].toUpperCase() : '';
                                                                                        const userChoiceLetter = (userChoice || '').trim().match(/^[A-D]/i) ? (userChoice || '').trim()[0].toUpperCase() : userChoice;
                                                                                        const isUserAnswerCorrect = userChoiceLetter === correctLetter;

                                                                                        return (
                                                                                            <>
                                                                                                <div className="quiz-opts-wrapper">
                                                                                                    {q.options.map((opt, i) => {
                                                                                                        const optLetter = opt.trim().match(/^[A-D]/i) ? opt.trim()[0].toUpperCase() : String.fromCharCode(65 + i);
                                                                                                        const isSelected = userChoiceLetter === optLetter;
                                                                                                        const isOptCorrect = optLetter === correctLetter;
                                                                                                        let optClass = 'quiz-opt-btn';
                                                                                                        if (userChoice) {
                                                                                                            if (isOptCorrect) optClass += ' correct';
                                                                                                            else if (isSelected) optClass += ' wrong';
                                                                                                            else optClass += ' disabled';
                                                                                                        }
                                                                                                        const cleanOptText = opt.replace(/^[A-D][.):\s]+/i, '');

                                                                                                        return (
                                                                                                            <button
                                                                                                                key={i}
                                                                                                                type="button"
                                                                                                                className={optClass}
                                                                                                                onClick={() => handleSelectOption(q._id, optLetter)}
                                                                                                            >
                                                                                                                <span className="opt-letter-badge">{optLetter}</span>
                                                                                                                <span className="opt-text-val">{cleanOptText || opt}</span>
                                                                                                                {userChoice && isOptCorrect && (
                                                                                                                    <span className="opt-status-check">✓ Correct</span>
                                                                                                                )}
                                                                                                                {userChoice && isSelected && !isOptCorrect && (
                                                                                                                    <span className="opt-status-cross">✗ Your choice</span>
                                                                                                                )}
                                                                                                            </button>
                                                                                                        );
                                                                                                    })}
                                                                                                </div>

                                                                                                {userChoice && (
                                                                                                    <div className={`quiz-feedback-banner ${isUserAnswerCorrect ? 'correct' : 'wrong'}`}>
                                                                                                        <div className="feedback-result-row">
                                                                                                            <span className="feedback-verdict">
                                                                                                                {isUserAnswerCorrect ? '✓ Correct Answer!' : `✗ Incorrect Choice`}
                                                                                                            </span>
                                                                                                            {!isUserAnswerCorrect && (
                                                                                                                <span className="feedback-correct-answer">
                                                                                                                    Correct Answer: Option {correctLetter || q.correctOption}
                                                                                                                </span>
                                                                                                            )}
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="quiz-retry-btn"
                                                                                                                onClick={() => handleSelectOption(q._id, null)}
                                                                                                            >
                                                                                                                ↺ Retry Question
                                                                                                            </button>
                                                                                                        </div>
                                                                                                        {q.explanation && (
                                                                                                            <div className="quiz-math-explanation">
                                                                                                                <span className="solution-heading">Step-by-step Solution:</span>
                                                                                                                <p>{q.explanation}</p>
                                                                                                            </div>
                                                                                                        )}
                                                                                                    </div>
                                                                                                )}
                                                                                            </>
                                                                                        );
                                                                                    })()}
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        {/* Interview STAR Answer Section */}
                                                                        {q.category === 'Interview' && (
                                                                            <div className="interview-star-console">
                                                                                <div className="star-console-header">
                                                                                    <span className="star-console-label">
                                                                                        <SparklesIcon size={14} color="#fbbf24" /> Recommended STAR Framework Strategy
                                                                                    </span>
                                                                                    {q.topic && (
                                                                                        <span className="interview-topic-tag">
                                                                                            Focus: {q.topic}
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                <div className="star-console-body">
                                                                                    {q.answer ? (
                                                                                        <div className="star-answer-content">{q.answer}</div>
                                                                                    ) : (
                                                                                        <div className="star-answer-tips">
                                                                                            {q.answerTips || 'Structure your response using the STAR framework: clearly articulate the Situation, specify your Task responsibility, highlight concrete engineering Actions, and quantify measurable Results.'}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        {/* DSA Constraints & Test Cases */}
                                                                        {q.category === 'DSA' && (
                                                                            <div className="dsa-workspace-console">
                                                                                {q.constraints && q.constraints.length > 0 && (
                                                                                    <div className="dsa-constraints-box">
                                                                                        <span className="workspace-section-label">Constraints:</span>
                                                                                        <ul>
                                                                                            {q.constraints.map((c, i) => (
                                                                                                <li key={i}><code>{c}</code></li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </div>
                                                                                )}

                                                                                {q.testCases && q.testCases.length > 0 && (
                                                                                    <div className="dsa-sample-tc-box">
                                                                                        <span className="workspace-section-label">Sample Test Case:</span>
                                                                                        <div className="sample-tc-block">
                                                                                            <div className="tc-row">
                                                                                                <span className="tc-tag">Input:</span>
                                                                                                <code>{q.testCases[0].input}</code>
                                                                                            </div>
                                                                                            <div className="tc-row">
                                                                                                <span className="tc-tag">Output:</span>
                                                                                                <code>{q.testCases[0].expectedOutput}</code>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )}

                                                                                <div className="dsa-action-footer">
                                                                                    <button 
                                                                                        type="button"
                                                                                        className="ide-btn launch-ide-lg"
                                                                                        onClick={() => onOpenIDE(q)}
                                                                                    >
                                                                                        <ZapIcon size={14} /> Open in Sarathi Cloud IDE
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}

                                                                {/* Card Footer with Verified Provenance & Discussions Link */}
                                                                <div className="track-item-footer">
                                                                    <span className="source-info">
                                                                        Source: <strong>{q.source || 'Candidate Discussion'}</strong>
                                                                    </span>
                                                                    {q.sourceUrl && (
                                                                        <a
                                                                            href={q.sourceUrl}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className={`track-source-link ${(q.category === 'Interview' || (q.source && q.source.includes('LinkedIn'))) ? 'linkedin-link' : (q.category === 'Aptitude' || (q.source && (q.source.includes('X') || q.source.includes('Twitter')))) ? 'twitter-link' : 'reddit-link'}`}
                                                                            title="View candidate discussion & experience thread"
                                                                        >
                                                                            {(q.category === 'Interview' || (q.source && q.source.includes('LinkedIn'))) ? (
                                                                                <><LinkedInIcon size={13} /> Verified Discussion <ExternalLinkIcon size={11} /></>
                                                                            ) : (q.category === 'Aptitude' || (q.source && (q.source.includes('X') || q.source.includes('Twitter')))) ? (
                                                                                <><XTwitterIcon size={12} /> Discussion Thread <ExternalLinkIcon size={11} /></>
                                                                            ) : (
                                                                                <><ChatIcon size={13} /> Community Discussions <ExternalLinkIcon size={11} /></>
                                                                            )}
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

export default Roadmap;