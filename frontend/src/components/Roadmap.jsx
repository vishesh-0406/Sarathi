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
    ChevronUpIcon 
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
                                                <div className="questions-grid">
                                                    {filteredQuestions.map((q) => {
                                                        const isDetailOpen = expandedQuestionDetails[q._id];
                                                        const matched = q.matchedProblems?.[0];
                                                        const userChoice = quizAnswers[q._id];

                                                        return (
                                                            <div key={q._id} className="roadmap-q-card">
                                                                <div className="card-top-row">
                                                                    <div className="badges-group">
                                                                        <span className={`cat-tag ${getCategoryBadgeClass(q.category)}`}>
                                                                            {q.category}
                                                                        </span>
                                                                        <span className={`diff-tag ${getDifficultyClass(q.difficulty)}`}>
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

                                                                    <span className="round-tag">{q.round || 'Technical Round'}</span>
                                                                </div>

                                                                <h4 className="q-title">{q.title}</h4>
                                                                <p className="q-snippet">
                                                                    {(q.problemStatement || q.question || '').slice(0, 160)}...
                                                                </p>

                                                                {/* Direct Interactive Action Row */}
                                                                <div className="card-action-row">
                                                                    {q.category === 'DSA' && (
                                                                        <button 
                                                                            className="ide-btn"
                                                                            onClick={() => onOpenIDE(q)}
                                                                        >
                                                                            <ZapIcon size={14} /> Solve in IDE
                                                                        </button>
                                                                    )}

                                                                    {q.category === 'Aptitude' && (
                                                                        <button 
                                                                            className="quiz-btn"
                                                                            onClick={() => toggleQuestionDetail(q._id)}
                                                                        >
                                                                            {isDetailOpen ? 'Hide Quiz' : <><AptitudeIcon size={14} /> Practice Quiz</>}
                                                                        </button>
                                                                    )}

                                                                    {q.category === 'Interview' && (
                                                                        <button 
                                                                            className="star-btn"
                                                                            onClick={() => toggleQuestionDetail(q._id)}
                                                                        >
                                                                            {isDetailOpen ? 'Hide Guide' : <><DocumentIcon size={14} /> View STAR Guide</>}
                                                                        </button>
                                                                    )}

                                                                    {q.category === 'DSA' && (
                                                                        <button
                                                                            className="details-btn"
                                                                            onClick={() => toggleQuestionDetail(q._id)}
                                                                        >
                                                                            {isDetailOpen ? 'Less' : 'Details'}
                                                                        </button>
                                                                    )}
                                                                </div>

                                                                {/* Expanded Content Drawer */}
                                                                {isDetailOpen && (
                                                                    <div className="q-detail-drawer">
                                                                        {/* Full Problem Statement */}
                                                                        <div className="full-statement">
                                                                            <strong>Problem Statement:</strong>
                                                                            <p>{q.problemStatement || q.question}</p>
                                                                        </div>

                                                                        {/* Constraints if available */}
                                                                        {q.constraints && q.constraints.length > 0 && (
                                                                            <div className="constraints-box">
                                                                                <strong>Constraints:</strong>
                                                                                <ul>
                                                                                    {q.constraints.map((c, i) => (
                                                                                        <li key={i}>{c}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        )}

                                                                        {/* Aptitude Multiple Choice Interactive Section */}
                                                                        {q.category === 'Aptitude' && q.options && (
                                                                            <div className="aptitude-quiz-box">
                                                                                <strong>Select Answer:</strong>
                                                                                <div className="quiz-options-list">
                                                                                    {(() => {
                                                                                        const correctLetter = (q.correctOption || '').trim().match(/^[A-D]/i) ? (q.correctOption || '').trim()[0].toUpperCase() : '';
                                                                                        const userChoiceLetter = (userChoice || '').trim().match(/^[A-D]/i) ? (userChoice || '').trim()[0].toUpperCase() : userChoice;
                                                                                        const isUserAnswerCorrect = userChoiceLetter === correctLetter;

                                                                                        return (
                                                                                            <>
                                                                                                {q.options.map((opt, i) => {
                                                                                                    const optLetter = opt.trim().match(/^[A-D]/i) ? opt.trim()[0].toUpperCase() : String.fromCharCode(65 + i);
                                                                                                    const isSelected = userChoiceLetter === optLetter;
                                                                                                    const isOptCorrect = optLetter === correctLetter;
                                                                                                    let optClass = 'quiz-opt';
                                                                                                    if (userChoice) {
                                                                                                        if (isOptCorrect) optClass += ' correct option-correct';
                                                                                                        else if (isSelected) optClass += ' wrong incorrect option-wrong';
                                                                                                        else optClass += ' option-disabled';
                                                                                                    }
                                                                                                    return (
                                                                                                        <button
                                                                                                            key={i}
                                                                                                            className={optClass}
                                                                                                            onClick={() => handleSelectOption(q._id, optLetter)}
                                                                                                        >
                                                                                                            {opt}
                                                                                                        </button>
                                                                                                    );
                                                                                                })}

                                                                                                {userChoice && (
                                                                                                    <div className="quiz-feedback-box">
                                                                                                        <p className={isUserAnswerCorrect ? 'feedback-correct' : 'feedback-wrong'}>
                                                                                                            {isUserAnswerCorrect ? '✓ Correct Answer!' : `✗ Incorrect. Correct: Option ${correctLetter || q.correctOption}`}
                                                                                                        </p>
                                                                                                        {q.explanation && (
                                                                                                            <div className="math-explanation">
                                                                                                                <strong>Step-by-step Solution:</strong>
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
                                                                        {q.category === 'Interview' && q.answer && (
                                                                            <div className="star-answer-box">
                                                                                <strong>Recommended STAR Model Response:</strong>
                                                                                <div className="star-content">
                                                                                    {q.answer}
                                                                                </div>
                                                                                {q.topic && (
                                                                                    <span className="interview-topic-tag">
                                                                                        Topic Focus: {q.topic}
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                        )}

                                                                        {/* DSA Sample Test Cases if available */}
                                                                        {q.category === 'DSA' && q.testCases && q.testCases.length > 0 && (
                                                                            <div className="sample-tc-box">
                                                                                <strong>Sample Test Case:</strong>
                                                                                <pre>Input: {q.testCases[0].input}</pre>
                                                                                <pre>Output: {q.testCases[0].expectedOutput}</pre>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
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