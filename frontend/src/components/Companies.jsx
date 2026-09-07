import { useState } from 'react';

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
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [loadingQuestion, setLoadingQuestion] = useState(false);
    const [questionError, setQuestionError] = useState(null);

    const handleSelectCompany = (company) => {
        setSelectedCompany(company);
        setCurrentQuestion(null);
        setQuestionError(null);
    };

    const handleBackToCompanies = () => {
        setSelectedCompany(null);
        setCurrentQuestion(null);
        setQuestionError(null);
    };

    const fetchQuestion = async (companyName) => {
        setLoadingQuestion(true);
        setQuestionError(null);

        try {
            const res = await fetch(`${API_BASE_URL}/questions/random?company=${encodeURIComponent(companyName)}`);
            if (!res.ok) {
                if (res.status === 404) {
                    throw new Error(`No interview questions found in database for ${companyName} yet.`);
                }
                throw new Error(`Failed to load question (Server returned status ${res.status})`);
            }
            const data = await res.json();
            setCurrentQuestion(data);
        } catch (err) {
            setQuestionError(err.message || 'Unable to connect to Sarathi backend.');
        } finally {
            setLoadingQuestion(false);
        }
    };

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
                                <h3>Real Interview Questions</h3>
                                <p className="question-box-subtitle">
                                    Questions reported by candidates in recent campus & off-campus rounds
                                </p>
                            </div>

                            <button
                                className="get-question-btn"
                                onClick={() => fetchQuestion(selectedCompany.name)}
                                disabled={loadingQuestion}
                            >
                                {loadingQuestion
                                    ? 'Fetching...'
                                    : currentQuestion
                                    ? '🔄 Give Me Another Question'
                                    : '🎯 Give Me a Question'}
                            </button>
                        </div>

                        {/* QUESTION DISPLAY CARD */}
                        {loadingQuestion && (
                            <div className="question-loading">
                                <div className="spinner"></div>
                                <p>Loading a real interview question for {selectedCompany.name}...</p>
                            </div>
                        )}

                        {questionError && (
                            <div className="question-error-card">
                                <p>⚠️ {questionError}</p>
                                <small>Make sure the Sarathi Express backend is running on port 5000.</small>
                                <button
                                    className="retry-btn"
                                    onClick={() => fetchQuestion(selectedCompany.name)}
                                >
                                    Retry
                                </button>
                            </div>
                        )}

                        {!loadingQuestion && !questionError && currentQuestion && (
                            <div className="question-card-active">
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
                                                {Math.round((currentQuestion.matchedProblems[0].similarityScore || 0.9) * 100)}% Match
                                            </span>
                                        </div>
                                        <p className="matched-problem-name">
                                            <strong>{currentQuestion.matchedProblems[0].platform}:</strong>{' '}
                                            {currentQuestion.matchedProblems[0].problemUrl ? (
                                                <a
                                                    href={currentQuestion.matchedProblems[0].problemUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {currentQuestion.matchedProblems[0].problemName} ↗
                                                </a>
                                            ) : (
                                                <span>{currentQuestion.matchedProblems[0].problemName}</span>
                                            )}
                                        </p>
                                    </div>
                                )}

                                <div className="question-card-footer">
                                    <span className="source-info">
                                        Source: {currentQuestion.source || 'Candidate Recollection'}
                                    </span>
                                    <button
                                        className="next-question-btn"
                                        onClick={() => fetchQuestion(selectedCompany.name)}
                                    >
                                        Next Question →
                                    </button>
                                </div>
                            </div>
                        )}

                        {!loadingQuestion && !questionError && !currentQuestion && (
                            <div className="question-empty-state">
                                <p>Click <strong>"Give Me a Question"</strong> above to pull an interview question asked at {selectedCompany.name}.</p>
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
                                    setSelectedCompany(company)
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