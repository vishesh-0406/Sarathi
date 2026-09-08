import { useState, useEffect, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:5000/api';

const TOPICS = [
    { key: 'All', label: '📊 All Aptitude' },
    { key: 'Quantitative', label: '🔢 Quantitative Aptitude' },
    { key: 'Logical', label: '🧠 Logical Reasoning' },
    { key: 'Verbal', label: '📖 Verbal Ability' }
];

const COMPANIES_LIST = [
    'All', 'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant', 'Capgemini',
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle', 'Salesforce'
];

function Aptitude({ onBack }) {
    const [selectedTopic, setSelectedTopic] = useState('All');
    const [selectedCompany, setSelectedCompany] = useState('All');
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Selected answers map: { [questionId]: { selectedOption: 'A', isCorrect: true } }
    const [userAnswers, setUserAnswers] = useState({});
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);

    const fetchAptitudeQuestions = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            let url = `${API_BASE_URL}/questions?category=Aptitude`;
            if (selectedTopic !== 'All') {
                url += `&topic=${encodeURIComponent(selectedTopic)}`;
            }
            if (selectedCompany !== 'All') {
                url += `&company=${encodeURIComponent(selectedCompany)}`;
            }

            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setQuestions(data || []);
            setCurrentIndex(0);
            setShowExplanation(false);
        } catch (err) {
            setError(err.message || 'Failed to fetch aptitude questions');
        } finally {
            setLoading(false);
        }
    }, [selectedTopic, selectedCompany]);

    useEffect(() => {
        fetchAptitudeQuestions();
    }, [fetchAptitudeQuestions]);

    const currentQ = questions[currentIndex];

    const handleSelectOption = (optionLetter) => {
        if (!currentQ || userAnswers[currentQ._id]) return; // Already answered

        const isCorrect = optionLetter.toUpperCase() === currentQ.correctOption?.toUpperCase();
        setUserAnswers(prev => ({
            ...prev,
            [currentQ._id]: {
                selected: optionLetter,
                isCorrect
            }
        }));

        if (isCorrect) {
            setScore(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
        setShowExplanation(false);
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1));
        setShowExplanation(false);
    };

    const handleRandom = () => {
        if (questions.length <= 1) return;
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
        } while (randomIndex === currentIndex);
        setCurrentIndex(randomIndex);
        setShowExplanation(false);
    };

    const currentAnswer = currentQ ? userAnswers[currentQ._id] : null;

    return (
        <section id="aptitude-section" className="aptitude-section">
            <div className="section-header-row">
                {onBack && (
                    <button className="back-btn" onClick={onBack}>
                        ← Back to Preparation
                    </button>
                )}
                <div>
                    <h2>🎯 Interactive Aptitude Arena</h2>
                    <p className="section-intro">
                        Real aptitude test patterns collected from <strong>X (Twitter) & Drive Exam Memories</strong>.
                        Instant answer verification with step-by-step mathematical & logical explanations.
                    </p>
                </div>
            </div>

            {/* Score & Progress Tracker */}
            <div className="aptitude-score-bar">
                <div className="score-stat">
                    <span>🏆 Score:</span>
                    <strong>{score}</strong>
                </div>
                <div className="score-stat">
                    <span>📝 Questions Answered:</span>
                    <strong>{Object.keys(userAnswers).length} / {questions.length}</strong>
                </div>
                <div className="recency-pill">
                    📅 2024–2026 Test Pattern
                </div>
            </div>

            {/* Topic Navigation Tabs */}
            <div className="topic-tabs-row">
                {TOPICS.map(t => (
                    <button
                        key={t.key}
                        className={`topic-tab-btn ${selectedTopic === t.key ? 'active' : ''}`}
                        onClick={() => setSelectedTopic(t.key)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {/* Company Filter Dropdown */}
            <div className="filters-container aptitude-filters">
                <div className="filter-group">
                    <label>Filter by Drive Pattern:</label>
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        className="filter-select"
                    >
                        {COMPANIES_LIST.map(c => (
                            <option key={c} value={c}>{c === 'All' ? '🏢 All Drive Patterns' : `${c} Placement Test`}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Loading & Error */}
            {loading && <div className="loading-spinner">Loading aptitude questions...</div>}
            {error && <div className="error-box">{error}</div>}

            {!loading && !error && questions.length === 0 && (
                <div className="no-results-box">No aptitude questions found matching your filter selection.</div>
            )}

            {/* Interactive Question Card */}
            {!loading && !error && currentQ && (
                <div className="aptitude-card">
                    <div className="aptitude-card-header">
                        <div className="header-badges">
                            <span className="company-tag">{currentQ.company}</span>
                            <span className="topic-tag">{currentQ.topic}</span>
                            <span className="round-tag">{currentQ.round}</span>
                        </div>
                        <span className="progress-counter">
                            Question {currentIndex + 1} of {questions.length}
                        </span>
                    </div>

                    <h3 className="aptitude-title">{currentQ.title}</h3>

                    <div className="aptitude-statement">
                        <p>{currentQ.problemStatement}</p>
                    </div>

                    {/* Multiple Choice Options Grid */}
                    <div className="options-grid">
                        {currentQ.options && currentQ.options.map((opt, idx) => {
                            const optionLetter = opt.trim().charAt(0); // 'A', 'B', 'C', 'D'
                            const isSelected = currentAnswer?.selected === optionLetter;
                            const isCorrectOpt = optionLetter.toUpperCase() === currentQ.correctOption?.toUpperCase();

                            let optionClass = 'option-btn';
                            if (currentAnswer) {
                                if (isCorrectOpt) {
                                    optionClass += ' option-correct';
                                } else if (isSelected && !currentAnswer.isCorrect) {
                                    optionClass += ' option-wrong';
                                } else {
                                    optionClass += ' option-disabled';
                                }
                            }

                            return (
                                <button
                                    key={idx}
                                    type="button"
                                    className={optionClass}
                                    onClick={() => handleSelectOption(optionLetter)}
                                    disabled={!!currentAnswer}
                                >
                                    <span className="option-letter">{optionLetter}</span>
                                    <span className="option-text">{opt.substring(2).trim()}</span>
                                    {currentAnswer && isCorrectOpt && <span className="feedback-icon">✓</span>}
                                    {currentAnswer && isSelected && !currentAnswer.isCorrect && <span className="feedback-icon">✗</span>}
                                </button>
                            );
                        })}
                    </div>

                    {/* Post-Answer Feedback Bar */}
                    {currentAnswer && (
                        <div className={`result-banner ${currentAnswer.isCorrect ? 'banner-correct' : 'banner-wrong'}`}>
                            {currentAnswer.isCorrect ? (
                                <span>🎉 <strong>Correct!</strong> Well done. Click below to inspect the mathematical breakdown.</span>
                            ) : (
                                <span>❌ <strong>Incorrect.</strong> The correct answer is <strong>Option {currentQ.correctOption}</strong>.</span>
                            )}
                        </div>
                    )}

                    {/* Step-by-Step Explanation Accordion */}
                    <div className="explanation-section">
                        <button
                            type="button"
                            className="explanation-toggle-btn"
                            onClick={() => setShowExplanation(prev => !prev)}
                        >
                            <span>📐 {showExplanation ? 'Hide Step-by-Step Solution' : 'View Step-by-Step Solution & Shortcuts'}</span>
                            <span>{showExplanation ? '▲' : '▼'}</span>
                        </button>

                        {showExplanation && (
                            <div className="explanation-box">
                                <h4>Step-by-Step Solution:</h4>
                                <pre className="explanation-text">{currentQ.explanation}</pre>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="aptitude-nav-bar">
                        <button
                            className="nav-btn prev-btn"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            ← Previous
                        </button>

                        <button
                            className="nav-btn random-btn"
                            onClick={handleRandom}
                        >
                            🔀 Random Question
                        </button>

                        <button
                            className="nav-btn next-btn"
                            onClick={handleNext}
                            disabled={currentIndex === questions.length - 1}
                        >
                            Next Question →
                        </button>
                    </div>

                    {/* Card Footer with Twitter/X Source */}
                    <div className="card-footer">
                        <span className="source-info">Source: <strong>{currentQ.source || 'Drive Memories'}</strong></span>
                        {currentQ.sourceUrl && (
                            <a
                                href={currentQ.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="source-link twitter-link"
                            >
                                🐦 View Discussions on X ↗
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Aptitude;
