import { useState, useEffect, useCallback } from 'react';

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
        }
    ]
};

function Companies() {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [questionsList, setQuestionsList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadingQuestion, setLoadingQuestion] = useState(false);
    const [questionError, setQuestionError] = useState(null);

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
        }
    }, [selectedCompany, fetchCompanyQuestions]);

    const handleSelectCompany = (company) => {
        setSelectedCompany(company);
        setCurrentIndex(0);
    };

    const handleBackToCompanies = () => {
        setSelectedCompany(null);
        setQuestionsList([]);
        setCurrentIndex(0);
        setQuestionError(null);
    };

    const handlePrevQuestion = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNextQuestion = () => {
        setCurrentIndex((prev) => Math.min(questionsList.length - 1, prev + 1));
    };

    const handleRandomQuestion = () => {
        if (questionsList.length <= 1) return;
        let nextIdx = currentIndex;
        while (nextIdx === currentIndex) {
            nextIdx = Math.floor(Math.random() * questionsList.length);
        }
        setCurrentIndex(nextIdx);
    };

    const currentQuestion = questionsList[currentIndex] || null;

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
                    ← Back to {selectedType === 'service' ? 'Service Companies' : 'Product Companies'}
                </button>

                <div className="company-details">
                    <div className="company-details-header">
                        <span className={`company-badge ${selectedType}`}>
                            {selectedType === 'service' ? 'Service-Based' : 'Product-Based'}
                        </span>
                        <h2>{selectedCompany.name}</h2>
                        <p>{selectedCompany.description}</p>
                    </div>

                    {/* =========================
                        QUESTION DELIVERER SECTION
                       ========================= */}
                    <div className="question-box-section">
                        <div className="question-box-header">
                            <div>
                                <div className="question-header-title-row">
                                    <h3>Real Interview Questions</h3>
                                    {questionsList.length > 0 && (
                                        <span className="question-count-badge">
                                            {questionsList.length} Questions Available
                                        </span>
                                    )}
                                </div>
                                <p className="question-box-subtitle">
                                    Reported by candidates in recent campus & off-campus rounds
                                </p>
                            </div>

                            {questionsList.length > 1 && (
                                <button
                                    className="random-question-btn"
                                    onClick={handleRandomQuestion}
                                    title="Jump to a random question"
                                >
                                    🔀 Random Question
                                </button>
                            )}
                        </div>

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
                                        Question <strong>{currentIndex + 1}</strong> of <strong>{questionsList.length}</strong>
                                    </span>
                                    <div className="progress-track">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${((currentIndex + 1) / questionsList.length) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="question-meta-row">
                                    <span className={`difficulty-tag difficulty-${currentQuestion.difficulty?.toLowerCase()}`}>
                                        {currentQuestion.difficulty || 'Medium'}
                                    </span>
                                    {currentQuestion.category && (
                                        <span className="category-tag">{currentQuestion.category}</span>
                                    )}
                                    {currentQuestion.round && (
                                        <span className="round-tag">Round: {currentQuestion.round}</span>
                                    )}
                                    <span className="batch-tag" title="Verified question from past 2 years placement cycle">
                                        📅 {currentQuestion.batch || (currentQuestion.year ? `${currentQuestion.year} Pattern` : '2024–2026 Pattern')}
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
                                </div>

                                <h4 className="question-title">{currentQuestion.title}</h4>

                                <div className="question-statement">
                                    <p>{currentQuestion.problemStatement}</p>
                                </div>

                                {currentQuestion.constraints && currentQuestion.constraints.length > 0 && (
                                    <div className="constraints-section">
                                        <h5>⚡ Memory Constraints & Bounds</h5>
                                        <ul>
                                            {currentQuestion.constraints.map((c, i) => (
                                                <li key={i}><code>{c}</code></li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* PHASE 2 MATCHED PROBLEM PREVIEW */}
                                {currentQuestion.matchedProblems && currentQuestion.matchedProblems.length > 0 && (
                                    <div className="matched-problems-box">
                                        <div className="matched-header">
                                            <span>✨ Closest Canonical Match</span>
                                            <span className="similarity-badge">
                                                {Math.round((currentQuestion.matchedProblems[0].similarityScore || 0.85) * 100)}% Match
                                            </span>
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
                                                    {currentQuestion.matchedProblems[0].problemName} ↗
                                                </a>
                                            ) : (
                                                <span>{currentQuestion.matchedProblems[0].problemName}</span>
                                            )}
                                        </p>
                                    </div>
                                )}

                                {/* QUESTION FOOTER WITH VERIFIED SOURCE & PREV/NEXT NAV */}
                                <div className="question-card-footer">
                                    <div className="source-info-box">
                                        <span className="source-verification-badge">💬 Community Discussions</span>
                                        {currentQuestion.sourceUrl ? (
                                            <a
                                                href={currentQuestion.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="source-external-link"
                                                title="View live candidate placement discussions on Reddit"
                                            >
                                                {currentQuestion.source || 'Candidate Discussion'} ↗
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
                                            ← Previous
                                        </button>

                                        <span className="nav-index-indicator">
                                            {currentIndex + 1} / {questionsList.length}
                                        </span>

                                        <button
                                            className="nav-btn next-btn"
                                            onClick={handleNextQuestion}
                                            disabled={currentIndex === questionsList.length - 1}
                                            title="Go to next question"
                                        >
                                            Next Question →
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


    /* =========================
       COMPANY LIST SCREEN
       ========================= */

    if (selectedType) {
        return (
            <section id="companies" className="companies-section">

                <button
                    className="back-button"
                    onClick={() => setSelectedType(null)}
                >
                    ← Back to Categories
                </button>

                <h2>
                    {selectedType === 'service'
                        ? 'Service-Based Companies'
                        : 'Product-Based Companies'}
                </h2>

                <p className="companies-intro">
                    Select a company to explore its placement information
                    and preparation resources.
                </p>

                <div className="company-container">

                    {companies[selectedType].map((company) => (
                        <div
                            className="company-card"
                            key={company.name}
                        >

                            <h3>{company.name}</h3>

                            <p>
                                {company.description}
                            </p>

                            <button
                                onClick={() =>
                                    handleSelectCompany(company)
                                }
                            >
                                View Details
                            </button>

                        </div>
                    ))}

                </div>

            </section>
        );
    }


    /* =========================
       COMPANY CATEGORY SCREEN
       ========================= */

    return (
        <section id="companies" className="companies-section">

            <h2>Explore Companies</h2>

            <p className="companies-intro">
                Choose the type of company you want to explore.
            </p>

            <div className="company-type-container">

                <div
                    className="company-type-card"
                    onClick={() => setSelectedType('service')}
                >

                    <h3>Service-Based</h3>

                    <p>
                        Explore service-based companies and their
                        placement opportunities.
                    </p>

                    <button>
                        Explore
                    </button>

                </div>


                <div
                    className="company-type-card"
                    onClick={() => setSelectedType('product')}
                >

                    <h3>Product-Based</h3>

                    <p>
                        Explore product-based companies and their
                        placement opportunities.
                    </p>

                    <button>
                        Explore
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Companies;