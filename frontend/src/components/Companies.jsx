import { useState, useEffect, useCallback } from 'react';
import { CompanyLogo } from './CompanyLogos';
import { 
    ArrowLeftIcon, 
    ArrowRightIcon,
    SearchIcon,
    RoadmapIcon, 
    ShuffleIcon, 
    DSAIcon, 
    AptitudeIcon, 
    InterviewIcon, 
    SparklesIcon, 
    CalendarIcon, 
    ZapIcon, 
    LockIcon, 
    ExternalLinkIcon, 
    ChatIcon 
} from './Icons';
import './Companies.css';

const API_BASE_URL = 'http://localhost:5000/api';

const companies = {
    service: [
        {
            name: 'TCS',
            description: 'Explore TCS placement process, NQT test patterns, and real interview questions.'
        },
        {
            name: 'Infosys',
            description: 'Explore Infosys placement process, InfyTQ/DSE hiring, and preparation resources.'
        },
        {
            name: 'Accenture',
            description: 'Explore Accenture cognitive & technical assessments and coding problems.'
        },
        {
            name: 'Wipro',
            description: 'Explore Wipro Elite NLTH placement process and interview preparation.'
        },
        {
            name: 'Cognizant',
            description: 'Explore Cognizant GenC & GenC Next technical rounds and preparation.'
        },
        {
            name: 'Capgemini',
            description: 'Explore Capgemini placement process, pseudo-code questions, and interviews.'
        },
        {
            name: 'HCLTech',
            description: 'Explore HCLTech First Careers program, technical assessments, and core engineering interviews.'
        },
        {
            name: 'Tech Mahindra',
            description: 'Explore Tech Mahindra Conversant rounds, Mindcraft assessments, and telecom engineering questions.'
        },
        {
            name: 'LTIMindtree',
            description: 'Explore LTIMindtree Ignition & Spark hiring, cloud architecture rounds, and coding interviews.'
        },
        {
            name: 'Genpact',
            description: 'Explore Genpact digital transformation assessments, analytics rounds, and domain consulting interviews.'
        }
    ],

    product: [
        {
            name: 'Amazon',
            description: 'Explore Amazon SDE OA patterns, Leadership Principles, and interview problems.'
        },
        {
            name: 'Microsoft',
            description: 'Explore Microsoft campus & off-campus hiring, Codility rounds, and interviews.'
        },
        {
            name: 'Google',
            description: 'Explore Google SWE interview rounds, DSA problems, and phone screen questions.'
        },
        {
            name: 'Adobe',
            description: 'Explore Adobe campus hiring process, coding rounds, and technical questions.'
        },
        {
            name: 'Oracle',
            description: 'Explore Oracle technical assessments, core CS topics, and interview questions.'
        },
        {
            name: 'Salesforce',
            description: 'Explore Salesforce developer hiring, HackerRank rounds, and system design.'
        },
        {
            name: 'Uber',
            description: 'Explore Uber SDE-1 OA patterns, high-scale system design, and algorithms rounds.'
        },
        {
            name: 'Zoho',
            description: 'Explore Zoho machine coding, advanced programming without libraries, and craft-first design rounds.'
        },
        {
            name: 'Flipkart',
            description: 'Explore Flipkart machine coding, SDE OA patterns, and high-concurrency e-commerce challenges.'
        },
        {
            name: 'Goldman Sachs',
            description: 'Explore Goldman Sachs CoderPad technical rounds, quantitative puzzles, and low-latency systems.'
        }
    ]
};

const ALL_COMPANIES = [
    ...companies.service.map(c => ({
        ...c,
        type: 'service',
        typeLabel: 'Service-Based',
        track: 'IT Services & Enterprise Consulting',
        rounds: '3-4 Rounds'
    })),
    ...companies.product.map(c => ({
        ...c,
        type: 'product',
        typeLabel: 'Product-Based',
        track: 'Product & Cloud Systems Engineering',
        rounds: '3-5 Rounds'
    }))
];

function Companies({ onOpenIDE, onSelectRoadmap }) {
    const [typeFilter, setTypeFilter] = useState('all'); // 'all' | 'service' | 'product'
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [questionsList, setQuestionsList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadingQuestion, setLoadingQuestion] = useState(false);
    const [questionError, setQuestionError] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState('ALL'); // 'ALL' | 'DSA' | 'Aptitude' | 'Interview'
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswerTips, setShowAnswerTips] = useState(false);

    const fetchCompanyQuestions = useCallback(async (companyName) => {
        setLoadingQuestion(true);
        setQuestionError(null);

        try {
            const res = await fetch(`${API_BASE_URL}/questions?company=${encodeURIComponent(companyName)}`);
            if (!res.ok) {
                throw new Error(`Server returned status ${res.status}`);
            }
            const data = await res.json();
            if (!data || data.length === 0) {
                setQuestionsList([]);
                setQuestionError(`No interview questions found in database for ${companyName} yet.`);
            } else {
                setQuestionsList(data);
                setCurrentIndex(0);
                setSelectedOption(null);
                setShowAnswerTips(false);
            }
        } catch (err) {
            setQuestionError(err.message || 'Unable to connect to Sarathi backend.');
        } finally {
            setLoadingQuestion(false);
        }
    }, []);

    useEffect(() => {
        if (selectedCompany?.name) {
            fetchCompanyQuestions(selectedCompany.name);
        } else {
            setQuestionsList([]);
            setCurrentIndex(0);
            setQuestionError(null);
            setSelectedOption(null);
            setShowAnswerTips(false);
        }
    }, [selectedCompany, fetchCompanyQuestions]);

    const handleSelectCompany = (company) => {
        setSelectedCompany(company);
        setCurrentIndex(0);
        setCategoryFilter('ALL');
        setSelectedOption(null);
        setShowAnswerTips(false);
    };

    const handleBackToCompanies = () => {
        setSelectedCompany(null);
        setQuestionsList([]);
        setCurrentIndex(0);
        setQuestionError(null);
        setSelectedOption(null);
        setShowAnswerTips(false);
    };

    const filteredQuestions = questionsList.filter((q) => {
        if (categoryFilter === 'ALL') return true;
        if (categoryFilter === 'Novel') {
            return q.category === 'DSA' && (!q.matchedProblems || q.matchedProblems.length === 0 || q.isNovel);
        }
        return q.category?.toLowerCase() === categoryFilter.toLowerCase();
    });

    const handlePrevQuestion = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
        setSelectedOption(null);
        setShowAnswerTips(false);
    };

    const handleNextQuestion = () => {
        setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1));
        setSelectedOption(null);
        setShowAnswerTips(false);
    };

    const handleRandomQuestion = () => {
        if (filteredQuestions.length <= 1) return;
        let nextIdx = currentIndex;
        while (nextIdx === currentIndex) {
            nextIdx = Math.floor(Math.random() * filteredQuestions.length);
        }
        setCurrentIndex(nextIdx);
        setSelectedOption(null);
        setShowAnswerTips(false);
    };

    const currentQuestion = filteredQuestions[currentIndex] || null;

    /* =========================
       COMPANY DETAILS SCREEN
       ========================= */

    if (selectedCompany) {
        return (
            <section id="companies" className="companies-section">
                <button
                    className="back-button"
                    onClick={handleBackToCompanies}
                >
                    <ArrowLeftIcon size={14} /> Back to All Companies
                </button>

                <div className="company-details">
                    <div className="company-details-header">
                        <CompanyLogo name={selectedCompany.name} size={56} className="company-detail-logo" />
                        <div>
                            <span className={`company-category-badge ${selectedCompany.type || 'service'}`}>
                                {selectedCompany.type === 'service' ? 'Service-Based' : 'Product-Based'}
                            </span>
                            <h2 style={{ margin: '6px 0 4px 0' }}>{selectedCompany.name}</h2>
                            <p style={{ margin: 0 }}>{selectedCompany.description}</p>
                        </div>
                    </div>

                    {/* =========================
                        QUESTION DELIVERER SECTION
                       ========================= */}
                    <div className="question-box-section">
                        <div className="question-box-header">
                            <div>
                                <div className="question-header-title-row">
                                    <h3>Real Interview Questions</h3>
                                    {filteredQuestions.length > 0 && (
                                        <span className="question-count-badge">
                                            {filteredQuestions.length} Questions
                                        </span>
                                    )}
                                </div>
                                <p className="question-box-subtitle">
                                    Reported by candidates in recent campus & off-campus rounds
                                </p>
                            </div>

                            {filteredQuestions.length > 1 && (
                                <button
                                    className="random-question-btn"
                                    onClick={handleRandomQuestion}
                                    title="Jump to a random question"
                                >
                                    <ShuffleIcon size={14} /> Random Question
                                </button>
                            )}
                        </div>

                        {/* CATEGORY FILTER TABS */}
                        {questionsList.length > 0 && (
                            <div className="company-category-filters">
                                <button
                                    type="button"
                                    className={`filter-pill ${categoryFilter === 'ALL' ? 'active' : ''}`}
                                    onClick={() => { setCategoryFilter('ALL'); setCurrentIndex(0); setSelectedOption(null); setShowAnswerTips(false); }}
                                >
                                    All ({questionsList.length})
                                </button>
                                <button
                                    type="button"
                                    className={`filter-pill ${categoryFilter === 'DSA' ? 'active' : ''}`}
                                    onClick={() => { setCategoryFilter('DSA'); setCurrentIndex(0); setSelectedOption(null); setShowAnswerTips(false); }}
                                >
                                    <DSAIcon size={14} /> Coding / DSA ({questionsList.filter((q) => q.category === 'DSA').length})
                                </button>
                                <button
                                    type="button"
                                    className={`filter-pill ${categoryFilter === 'Aptitude' ? 'active' : ''}`}
                                    onClick={() => { setCategoryFilter('Aptitude'); setCurrentIndex(0); setSelectedOption(null); setShowAnswerTips(false); }}
                                >
                                    <AptitudeIcon size={14} /> Aptitude & Verbal ({questionsList.filter((q) => q.category === 'Aptitude').length})
                                </button>
                                <button
                                    type="button"
                                    className={`filter-pill ${categoryFilter === 'Interview' ? 'active' : ''}`}
                                    onClick={() => { setCategoryFilter('Interview'); setCurrentIndex(0); setSelectedOption(null); setShowAnswerTips(false); }}
                                >
                                    <InterviewIcon size={14} /> HR & Interview ({questionsList.filter((q) => q.category === 'Interview').length})
                                </button>
                                {questionsList.some((q) => q.category === 'DSA' && (!q.matchedProblems || q.matchedProblems.length === 0 || q.isNovel)) && (
                                    <button
                                        type="button"
                                        className={`filter-pill novel-filter-pill ${categoryFilter === 'Novel' ? 'active' : ''}`}
                                        onClick={() => { setCategoryFilter('Novel'); setCurrentIndex(0); setSelectedOption(null); setShowAnswerTips(false); }}
                                    >
                                        <SparklesIcon size={14} /> Exclusive / New ({questionsList.filter((q) => q.category === 'DSA' && (!q.matchedProblems || q.matchedProblems.length === 0 || q.isNovel)).length})
                                    </button>
                                )}
                            </div>
                        )}

                        {/* QUESTION DISPLAY CARD */}
                        {loadingQuestion && (
                            <div className="question-loading">
                                <div className="spinner"></div>
                                <p>Loading interview questions for {selectedCompany.name}...</p>
                            </div>
                        )}

                        {questionError && (
                            <div className="question-error-card">
                                <p>⚠️ {questionError}</p>
                                <small>Make sure the Sarathi Express backend is running on port 5000.</small>
                                <button
                                    className="retry-btn"
                                    onClick={() => fetchCompanyQuestions(selectedCompany.name)}
                                >
                                    Retry
                                </button>
                            </div>
                        )}

                        {!loadingQuestion && !questionError && currentQuestion && (
                            <div className="question-card-active">
                                {/* PROGRESS BAR & COUNTER */}
                                <div className="question-progress-bar-row">
                                    <span className="progress-counter-text">
                                        Question <strong>{currentIndex + 1}</strong> of <strong>{filteredQuestions.length}</strong>
                                    </span>
                                    <div className="progress-track">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="question-meta-row">
                                    <span className={`difficulty-tag difficulty-${currentQuestion.difficulty?.toLowerCase()}`}>
                                        {currentQuestion.difficulty || 'Medium'}
                                    </span>
                                    {currentQuestion.category && (
                                        <span className={`category-tag category-${currentQuestion.category.toLowerCase()}`}>
                                            {currentQuestion.category}
                                        </span>
                                    )}
                                    {currentQuestion.round && (
                                        <span className="round-tag">Round: {currentQuestion.round}</span>
                                    )}
                                    <span className="batch-tag" title="Verified question from past 2 years placement cycle">
                                        <CalendarIcon size={13} /> {currentQuestion.batch || (currentQuestion.year ? `${currentQuestion.year} Pattern` : '2024–2026 Pattern')}
                                    </span>
                                    {currentQuestion.recollectionType && (
                                        <span className={`recollection-tag recollection-${currentQuestion.recollectionType}`}>
                                            {currentQuestion.recollectionType === 'original'
                                                ? 'Exact Statement'
                                                : currentQuestion.recollectionType === 'constraint'
                                                ? 'Constraint Memory'
                                                : 'Recalled Scenario'}
                                        </span>
                                    )}
                                    {currentQuestion.category === 'DSA' && (!currentQuestion.matchedProblems || currentQuestion.matchedProblems.length === 0 || currentQuestion.isNovel) && (
                                        <span className="novel-pill-tag" title="Authentic company-exclusive question with no LeetCode equivalent">
                                            <SparklesIcon size={13} /> New Question (No LeetCode Match)
                                        </span>
                                    )}
                                </div>

                                <h4 className="question-title">{currentQuestion.title}</h4>

                                <div className="question-statement">
                                    <p>{currentQuestion.problemStatement}</p>
                                </div>

                                {/* CASE 1: APTITUDE & VERBAL MCQ CARD */}
                                {currentQuestion.category === 'Aptitude' && currentQuestion.options && currentQuestion.options.length > 0 && (
                                    <div className="company-mcq-section">
                                        <h5 className="mcq-prompt">Choose the correct answer:</h5>
                                        <div className="options-grid">
                                            {(() => {
                                                const correctLetter = (currentQuestion.correctOption || '').trim().match(/^[A-D]/i) ? (currentQuestion.correctOption || '').trim()[0].toUpperCase() : '';
                                                return (
                                                    <>
                                                        {currentQuestion.options.map((opt, i) => {
                                                            const optLetter = opt.trim().match(/^[A-D]/i) ? opt.trim()[0].toUpperCase() : String.fromCharCode(65 + i);
                                                            const isSelected = selectedOption === optLetter;
                                                            const isCorrect = optLetter === correctLetter;
                                                            let btnClass = 'option-btn';
                                                            if (selectedOption) {
                                                                if (isCorrect) btnClass += ' correct option-correct';
                                                                else if (isSelected) btnClass += ' incorrect wrong option-wrong';
                                                                else btnClass += ' option-disabled';
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

                                                        {selectedOption && currentQuestion.explanation && (
                                                            <div className="explanation-card">
                                                                <div className="explanation-status">
                                                                    {selectedOption === correctLetter ? '🎉 Correct Answer!' : `❌ Incorrect Selection (Correct: Option ${correctLetter || currentQuestion.correctOption})`}
                                                                </div>
                                                                <p className="explanation-detail">{currentQuestion.explanation}</p>
                                                            </div>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                )}

                                {/* CASE 2: HR & TECHNICAL INTERVIEW STAR METHOD GUIDE */}
                                {currentQuestion.category === 'Interview' && currentQuestion.answerTips && (
                                    <div className="company-interview-guide">
                                        <button
                                            type="button"
                                            className="accordion-toggle-btn"
                                            onClick={() => setShowAnswerTips(!showAnswerTips)}
                                        >
                                            <span>💡 Recommended STAR Strategy & Key Talking Points</span>
                                            <span>{showAnswerTips ? '▲ Hide' : '▼ View Strategy'}</span>
                                        </button>
                                        {showAnswerTips && (
                                            <div className="accordion-content">
                                                <p className="answer-tips-text">{currentQuestion.answerTips}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* CASE 3: DSA CODING CONSTRAINTS, CANONICAL MATCH & IDE BUTTON */}
                                {currentQuestion.category === 'DSA' && (
                                    <>
                                        {currentQuestion.constraints && currentQuestion.constraints.length > 0 && (
                                            <div className="constraints-section">
                                                <h5 style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><ZapIcon size={14} color="#f59e0b" /> Memory Constraints & Bounds</h5>
                                                <ul>
                                                    {currentQuestion.constraints.map((c, i) => (
                                                        <li key={i}><code>{c}</code></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* CLOSEST CANONICAL LEETCODE MATCH OR NOVEL QUESTION NOTICE */}
                                        {currentQuestion.matchedProblems && currentQuestion.matchedProblems.length > 0 ? (
                                            <div className="matched-problems-box">
                                                <div className="matched-header">
                                                    <span><SparklesIcon size={14} /> Closest Canonical Match</span>
                                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                        {currentQuestion.matchedProblems[0].isPremium && (
                                                            <span className="premium-lock-badge" title="LeetCode Premium subscription required">
                                                                <LockIcon size={13} /> LeetCode Premium
                                                            </span>
                                                        )}
                                                        <span className="similarity-badge">
                                                            {Math.round((currentQuestion.matchedProblems[0].similarityScore || 0.85) * 100)}% Match
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="matched-problem-name">
                                                    <strong>{currentQuestion.matchedProblems[0].platform}:</strong>{' '}
                                                    {currentQuestion.matchedProblems[0].problemUrl ? (
                                                        <a
                                                            href={currentQuestion.matchedProblems[0].problemUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="canonical-link"
                                                        >
                                                            {currentQuestion.matchedProblems[0].problemName} <ExternalLinkIcon size={12} />
                                                        </a>
                                                    ) : (
                                                        <span>{currentQuestion.matchedProblems[0].problemName}</span>
                                                    )}
                                                </p>
                                                {currentQuestion.matchedProblems[0].isPremium && (
                                                    <p className="premium-notice-text">
                                                        <LockIcon size={12} /> <em>Note: This problem is locked behind a LeetCode Premium subscription. You can practice and verify your solution directly here in SARATHI for free!</em>
                                                    </p>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="matched-problems-box novel-problem-box">
                                                <div className="matched-header">
                                                    <span className="novel-box-title"><SparklesIcon size={14} /> New Question · No Match Found in LeetCode</span>
                                                    <span className="novel-badge">Company Exclusive</span>
                                                </div>
                                                <p className="matched-problem-name novel-problem-text">
                                                    <SparklesIcon size={14} color="#f59e0b" /> <strong>Real Interview Experience:</strong> This question is an authentic candidate recollection exclusive to this company's assessment. It does not exist in standard LeetCode archives — practice it directly in SARATHI!
                                                </p>
                                            </div>
                                        )}

                                        {/* SOLVE IN IDE ACTION ROW ONLY FOR DSA */}
                                        {onOpenIDE && (
                                            <div className="company-ide-action-row">
                                                <button
                                                    type="button"
                                                    className={`solve-ide-btn company-solve-ide-btn ${(!currentQuestion.matchedProblems || currentQuestion.matchedProblems.length === 0 || currentQuestion.isNovel) ? 'novel-solve-btn' : ''}`}
                                                    onClick={() => onOpenIDE(currentQuestion)}
                                                >
                                                    <ZapIcon size={14} /> {(!currentQuestion.matchedProblems || currentQuestion.matchedProblems.length === 0 || currentQuestion.isNovel)
                                                        ? 'Solve New Question in IDE'
                                                        : 'Open & Solve in IDE'}
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* QUESTION FOOTER WITH VERIFIED SOURCE & PREV/NEXT NAV */}
                                <div className="question-card-footer">
                                    <div className="source-info-box">
                                        <span className="source-verification-badge"><ChatIcon size={13} /> Community Discussions</span>
                                        {currentQuestion.sourceUrl ? (
                                            <a
                                                href={currentQuestion.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="source-external-link"
                                                title={`View live candidate placement discussions for ${currentQuestion.company}`}
                                            >
                                                {currentQuestion.source || 'Candidate Discussion'} <ExternalLinkIcon size={12} />
                                            </a>
                                        ) : (
                                            <span className="source-text">{currentQuestion.source || 'Candidate Discussion'}</span>
                                        )}
                                    </div>

                                    {/* PREVIOUS & NEXT QUESTION CONTROLS */}
                                    <div className="question-nav-group">
                                        <button
                                            className="nav-btn prev-btn"
                                            onClick={handlePrevQuestion}
                                            disabled={currentIndex === 0}
                                            title="Go to previous question"
                                        >
                                            <ArrowLeftIcon size={13} /> Previous
                                        </button>

                                        <span className="nav-index-indicator">
                                            {currentIndex + 1} / {filteredQuestions.length}
                                        </span>

                                        <button
                                            className="nav-btn next-btn"
                                            onClick={handleNextQuestion}
                                            disabled={currentIndex === filteredQuestions.length - 1}
                                            title="Go to next question"
                                        >
                                            Next Question <ArrowRightIcon size={13} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!loadingQuestion && !questionError && questionsList.length === 0 && (
                            <div className="question-empty-state">
                                <p>No questions currently indexed for <strong>{selectedCompany.name}</strong>.</p>
                            </div>
                        )}
                    </div>

                    {/* COMPANY OVERVIEW INFORMATION */}
                    <div className="details-placeholder">
                        <h3>Hiring & Eligibility Process</h3>
                        <p>
                            Standard criteria typically includes 60% or 6.0+ CGPA in graduation, no active backlogs, and proficiency in core fundamentals.
                        </p>

                        <h3>Selection Stages</h3>
                        <p>
                            Round 1: Online Assessment (Aptitude + Coding) <br />
                            Round 2: Technical Interview (DSA, Problem Solving, Core CS) <br />
                            Round 3: Techno-Managerial / HR Discussion
                        </p>

                        <h3>Preparation Recommendation</h3>
                        <p>
                            Focus on company-specific patterns, past asked questions, and timed problem solving.
                        </p>
                    </div>
                </div>
            </section>
        );
    }


    /* ============================================================
       COMPANY DIRECTORY SCREEN (SIMPLE, NEAT & MODERN)
       ============================================================ */

    const displayedCompanies = ALL_COMPANIES.filter(c => {
        const matchesType = typeFilter === 'all' || c.type === typeFilter;
        const query = searchTerm.trim().toLowerCase();
        const matchesSearch = !query || 
            c.name.toLowerCase().includes(query) || 
            c.description.toLowerCase().includes(query) ||
            c.track.toLowerCase().includes(query);
        return matchesType && matchesSearch;
    });

    return (
        <section id="companies" className="companies-section">
            <div className="companies-header">
                <h2>Explore Companies</h2>
                <p className="companies-intro">
                    Explore authentic recruitment patterns, interview debriefs, and tailored preparation roadmaps across 20 top tech companies.
                </p>
            </div>

            {/* Toolbar: Category Filters & Search */}
            <div className="companies-toolbar">
                <div className="companies-filter-group">
                    <button
                        type="button"
                        className={`company-type-filter-btn ${typeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setTypeFilter('all')}
                    >
                        All Companies ({ALL_COMPANIES.length})
                    </button>
                    <button
                        type="button"
                        className={`company-type-filter-btn ${typeFilter === 'service' ? 'active' : ''}`}
                        onClick={() => setTypeFilter('service')}
                    >
                        Service-Based (10)
                    </button>
                    <button
                        type="button"
                        className={`company-type-filter-btn ${typeFilter === 'product' ? 'active' : ''}`}
                        onClick={() => setTypeFilter('product')}
                    >
                        Product-Based (10)
                    </button>
                </div>

                <div className="companies-search-box">
                    <SearchIcon size={16} className="search-input-icon" />
                    <input
                        type="text"
                        className="companies-search-input"
                        placeholder="Search company (e.g. Amazon, TCS, Google)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* 20 Companies Grid */}
            <div className="companies-grid">
                {displayedCompanies.map((company) => (
                    <div className="company-grid-card" key={company.name}>
                        <div className="company-card-header">
                            <div className="company-card-identity">
                                <CompanyLogo name={company.name} size={44} />
                                <div>
                                    <h3 className="company-card-name">{company.name}</h3>
                                    <span className="company-track-sub">{company.track}</span>
                                </div>
                            </div>
                            <span className={`company-category-badge ${company.type}`}>
                                {company.type === 'service' ? 'Service' : 'Product'}
                            </span>
                        </div>

                        <p className="company-card-desc">{company.description}</p>

                        <div className="company-card-meta-row">
                            <span className="company-meta-chip">100 Questions</span>
                            <span className="company-meta-chip">{company.rounds}</span>
                        </div>

                        <div className="company-card-actions">
                            <button
                                type="button"
                                className="company-explore-btn"
                                onClick={() => handleSelectCompany(company)}
                            >
                                Explore Questions
                            </button>
                            {onSelectRoadmap && (
                                <button
                                    type="button"
                                    className="company-roadmap-btn"
                                    onClick={() => onSelectRoadmap(company.name)}
                                    title={`View ${company.name} hiring roadmap`}
                                >
                                    <RoadmapIcon size={14} /> Roadmap
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {displayedCompanies.length === 0 && (
                    <div className="companies-empty-search">
                        <p>No companies found matching "<strong>{searchTerm}</strong>".</p>
                        <button
                            type="button"
                            className="company-type-filter-btn active"
                            style={{ marginTop: '10px' }}
                            onClick={() => { setSearchTerm(''); setTypeFilter('all'); }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Companies;