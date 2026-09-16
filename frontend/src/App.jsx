import { useState } from 'react';
import Navbar from './components/Navbar';
import Companies from './components/Companies';
import DSA from './components/DSA';
import Aptitude from './components/Aptitude';
import Interviews from './components/Interviews';
import Roadmap from './components/Roadmap';
import IDE from './components/IDE';
import { CompanyLogo } from './components/CompanyLogos';
import { 
    RoadmapIcon, 
    CompanyIcon, 
    DSAIcon, 
    AptitudeIcon, 
    InterviewIcon, 
    SearchIcon, 
    ArrowLeftIcon, 
    ArrowRightIcon, 
    SparklesIcon 
} from './components/Icons';
import './App.css';

const POPULAR_COMPANIES = [
    { name: 'Amazon', type: 'product', role: 'SDE-1 & Cloud', badge: 'Product' },
    { name: 'Google', type: 'product', role: 'Software Engineer', badge: 'Product' },
    { name: 'TCS', type: 'service', role: 'Ninja, Digital & Prime', badge: 'Service' },
    { name: 'Zoho', type: 'product', role: 'Machine Coding SWE', badge: 'Product' },
    { name: 'Flipkart', type: 'product', role: 'SDE-1 Machine Coding', badge: 'Product' },
    { name: 'Accenture', type: 'service', role: 'ASE & FSE Careers', badge: 'Service' },
    { name: 'Goldman Sachs', type: 'product', role: 'Engineering Campus', badge: 'Product' },
    { name: 'Microsoft', type: 'product', role: 'Software Development', badge: 'Product' },
];

function App() {
    const [activeView, setActiveView] = useState('home'); // 'home' | 'roadmap' | 'companies' | 'dsa' | 'aptitude' | 'interviews'
    const [activeIdeQuestion, setActiveIdeQuestion] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCompanyForRoadmap, setSelectedCompanyForRoadmap] = useState('Amazon');

    const handleNavigate = (viewName) => {
        setActiveIdeQuestion(null);
        setActiveView(viewName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleOpenIDE = (question) => {
        setActiveIdeQuestion(question);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackFromIDE = () => {
        setActiveIdeQuestion(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const q = searchQuery.trim().toLowerCase();
        if (!q) return;

        // Check if query matches a company
        const matchComp = POPULAR_COMPANIES.find(c => c.name.toLowerCase().includes(q));
        if (matchComp) {
            setSelectedCompanyForRoadmap(matchComp.name);
            handleNavigate('roadmap');
        } else if (q.includes('dsa') || q.includes('code') || q.includes('tree') || q.includes('graph') || q.includes('dp')) {
            handleNavigate('dsa');
        } else if (q.includes('aptitude') || q.includes('math') || q.includes('logical')) {
            handleNavigate('aptitude');
        } else if (q.includes('interview') || q.includes('hr') || q.includes('star')) {
            handleNavigate('interviews');
        } else {
            handleNavigate('roadmap');
        }
    };

    const handleLaunchCompanyRoadmap = (compName) => {
        setSelectedCompanyForRoadmap(compName);
        handleNavigate('roadmap');
    };

    return (
        <div className="gov-app-container">
            {/* Top GovOS-style Navigation */}
            <Navbar activeView={activeIdeQuestion ? 'ide' : activeView} onNavigate={handleNavigate} />

            <main className="gov-main-content">
                {/* 1. ACTIVE IDE WORKSPACE VIEW */}
                {activeIdeQuestion && (
                    <div className="view-wrapper ide-view">
                        <div className="view-breadcrumb-bar">
                            <button className="breadcrumb-back-btn" onClick={handleBackFromIDE} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <ArrowLeftIcon size={14} /> Back to {activeView === 'roadmap' ? 'Roadmap' : activeView === 'dsa' ? 'DSA Arena' : 'Overview'}
                            </button>
                            <span className="breadcrumb-current">In-Browser Code Execution Workspace</span>
                        </div>
                        <IDE question={activeIdeQuestion} onBack={handleBackFromIDE} />
                    </div>
                )}

                {/* 2. DEDICATED VIEW: ROADMAPS */}
                {!activeIdeQuestion && activeView === 'roadmap' && (
                    <div className="view-wrapper">
                        <div className="view-breadcrumb-bar">
                            <button className="breadcrumb-back-btn" onClick={() => handleNavigate('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <ArrowLeftIcon size={14} /> Back to Home
                            </button>
                            <span className="breadcrumb-current">Company-Specific Preparation Roadmap</span>
                        </div>
                        <Roadmap 
                            initialCompany={selectedCompanyForRoadmap}
                            onBack={() => handleNavigate('home')} 
                            onOpenIDE={handleOpenIDE} 
                        />
                    </div>
                )}

                {/* 3. DEDICATED VIEW: COMPANIES */}
                {!activeIdeQuestion && activeView === 'companies' && (
                    <div className="view-wrapper">
                        <div className="view-breadcrumb-bar">
                            <button className="breadcrumb-back-btn" onClick={() => handleNavigate('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <ArrowLeftIcon size={14} /> Back to Home
                            </button>
                            <span className="breadcrumb-current">All 20 Tech Companies & Hiring Blueprints</span>
                        </div>
                        <Companies onOpenIDE={handleOpenIDE} onSelectRoadmap={handleLaunchCompanyRoadmap} />
                    </div>
                )}

                {/* 4. DEDICATED VIEW: DSA ARENA */}
                {!activeIdeQuestion && activeView === 'dsa' && (
                    <div className="view-wrapper">
                        <div className="view-breadcrumb-bar">
                            <button className="breadcrumb-back-btn" onClick={() => handleNavigate('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <ArrowLeftIcon size={14} /> Back to Home
                            </button>
                            <span className="breadcrumb-current">1,400 LeetCode-Matched DSA Practice Arena</span>
                        </div>
                        <DSA onBack={() => handleNavigate('home')} onOpenIDE={handleOpenIDE} />
                    </div>
                )}

                {/* 5. DEDICATED VIEW: APTITUDE */}
                {!activeIdeQuestion && activeView === 'aptitude' && (
                    <div className="view-wrapper">
                        <div className="view-breadcrumb-bar">
                            <button className="breadcrumb-back-btn" onClick={() => handleNavigate('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <ArrowLeftIcon size={14} /> Back to Home
                            </button>
                            <span className="breadcrumb-current">Quantitative, Logical & Verbal Aptitude Arena</span>
                        </div>
                        <Aptitude onBack={() => handleNavigate('home')} />
                    </div>
                )}

                {/* 6. DEDICATED VIEW: INTERVIEWS */}
                {!activeIdeQuestion && activeView === 'interviews' && (
                    <div className="view-wrapper">
                        <div className="view-breadcrumb-bar">
                            <button className="breadcrumb-back-btn" onClick={() => handleNavigate('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <ArrowLeftIcon size={14} /> Back to Home
                            </button>
                            <span className="breadcrumb-current">Technical & HR Interview Navigator (STAR Framework)</span>
                        </div>
                        <Interviews onBack={() => handleNavigate('home')} />
                    </div>
                )}

                {/* 7. HOMEPAGE PORTAL (GOVOS COMMAND CENTER) */}
                {!activeIdeQuestion && activeView === 'home' && (
                    <div className="gov-home-portal">
                        {/* Split Hero Section */}
                        <section className="gov-hero-section">
                            <div className="gov-hero-content">
                                <div className="gov-hero-tag">
                                    <span className="tag-sparkle">✨</span>
                                    <span>YOUR PATH TO PLACEMENT SUCCESS.</span>
                                </div>

                                <h1 className="gov-hero-title">
                                    Campus Placements.<br />
                                    <span className="gov-title-gradient">Simplified</span> for You.
                                </h1>

                                <p className="gov-hero-desc">
                                    Find authentic company hiring rounds, practice 2,000 real interview questions, 
                                    and prepare smarter with verified LeetCode canonical mappings and zero-fallback testcases.
                                </p>

                                {/* Search Bar Hub */}
                                <form className="gov-search-form" onSubmit={handleSearch}>
                                    <div className="gov-search-box">
                                        <span className="search-icon"><SearchIcon size={18} /></span>
                                        <input 
                                            type="text" 
                                            placeholder="Search company, topic, or role (e.g. Amazon, Zoho, Graphs, NQT)..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button type="submit" className="search-action-btn">
                                            Search
                                        </button>
                                    </div>
                                </form>

                                {/* Popular Quick Tags */}
                                <div className="gov-popular-tags">
                                    <span className="tags-label">Popular:</span>
                                    {['Amazon', 'TCS', 'Google', 'Zoho', 'Flipkart', 'Accenture'].map(tag => (
                                        <button 
                                            key={tag}
                                            className="tag-pill"
                                            onClick={() => handleLaunchCompanyRoadmap(tag)}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>

                                {/* Primary CTA Action Buttons */}
                                <div className="gov-hero-actions">
                                    <button 
                                        className="primary-hero-btn"
                                        onClick={() => handleNavigate('roadmap')}
                                    >
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                            <RoadmapIcon size={18} /> Explore Target Roadmaps
                                        </span>
                                        <span className="btn-arrow">→</span>
                                    </button>

                                    <button 
                                        className="secondary-hero-btn"
                                        onClick={() => handleNavigate('companies')}
                                    >
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                            <CompanyIcon size={18} /> Browse 20 Companies
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Hero Right Artistic Graphic Card */}
                            <div className="gov-hero-graphic-card">
                                <div className="graphic-glass-panel">
                                    <div className="graphic-badge">
                                        <span>🌟 Small Steps, Big Opportunities</span>
                                    </div>

                                    <div className="graphic-illustration-art">
                                        <div className="campus-dome-silhouette">🏛️</div>
                                        <div className="student-silhouette">🎒 🚶‍♂️</div>
                                        <div className="success-stars">✨ 🎯 🚀</div>
                                    </div>

                                    <div className="graphic-stat-strip">
                                        <div className="g-stat">
                                            <strong>20</strong>
                                            <span>Companies</span>
                                        </div>
                                        <div className="g-divider"></div>
                                        <div className="g-stat">
                                            <strong>2,000</strong>
                                            <span>Real Questions</span>
                                        </div>
                                        <div className="g-divider"></div>
                                        <div className="g-stat">
                                            <strong>0</strong>
                                            <span>Dummy Fallbacks</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4 Pastel Quick-Access Action Cards */}
                        <section className="gov-quick-cards-section">
                            <div className="gov-cards-grid">
                                <div 
                                    className="gov-feature-card pastel-green"
                                    onClick={() => handleNavigate('roadmap')}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="card-icon-bubble green">
                                        <RoadmapIcon size={24} />
                                    </div>
                                    <h3>Target Company Roadmaps</h3>
                                    <p>Authentic company-tailored recruitment pipelines (3, 4, and 5 rounds) for 20 top firms with round-specific question alignment.</p>
                                    <span className="card-arrow-link">Explore Roadmaps →</span>
                                </div>

                                <div 
                                    className="gov-feature-card pastel-peach"
                                    onClick={() => handleNavigate('dsa')}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="card-icon-bubble peach">
                                        <DSAIcon size={24} />
                                    </div>
                                    <h3>DSA Code Arena</h3>
                                    <p>1,400 LeetCode-matched problems across all 9 pillars with real-time in-browser code execution.</p>
                                    <span className="card-arrow-link">Start Coding →</span>
                                </div>

                                <div 
                                    className="gov-feature-card pastel-lavender"
                                    onClick={() => handleNavigate('aptitude')}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="card-icon-bubble lavender">
                                        <AptitudeIcon size={24} />
                                    </div>
                                    <h3>Aptitude & Reasoning</h3>
                                    <p>300 quantitative, logical, and verbal questions with step-by-step mathematical derivations.</p>
                                    <span className="card-arrow-link">Practice Aptitude →</span>
                                </div>

                                <div 
                                    className="gov-feature-card pastel-blue"
                                    onClick={() => handleNavigate('interviews')}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="card-icon-bubble blue">
                                        <InterviewIcon size={24} />
                                    </div>
                                    <h3>Interview Navigator</h3>
                                    <p>300 HR, Core CS, and behavioral questions with STAR framework models and evaluation rubrics.</p>
                                    <span className="card-arrow-link">Prepare Interviews →</span>
                                </div>
                            </div>
                        </section>

                        {/* How Sarathi Works Horizontal Progression Banner */}
                        <section className="gov-workflow-section">
                            <div className="workflow-title-box">
                                <h2>How Sarathi Works</h2>
                                <p>A simple, transparent way to stay ahead in your campus placement journey.</p>
                            </div>

                            <div className="workflow-container">
                                <div className="workflow-steps-strip">
                                    <div className="workflow-step">
                                        <div className="step-num-badge">1</div>
                                        <div className="step-text">
                                            <h4>Select Target Company</h4>
                                            <p>Choose from 20 top product & service companies.</p>
                                        </div>
                                    </div>
                                    <div className="workflow-connector">→</div>

                                    <div className="workflow-step">
                                        <div className="step-num-badge">2</div>
                                        <div className="step-text">
                                            <h4>Follow Authentic Rounds</h4>
                                            <p>Prepare for exact filtration stages with real candidate memory questions.</p>
                                        </div>
                                    </div>
                                    <div className="workflow-connector">→</div>

                                    <div className="workflow-step">
                                        <div className="step-num-badge">3</div>
                                        <div className="step-text">
                                            <h4>Practice & Master</h4>
                                            <p>Test with real cases in the IDE, take quizzes, and master STAR frameworks.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="workflow-quote-box">
                                    <div className="quote-mark">“</div>
                                    <p>A structured step towards preparation creates a big placement opportunity tomorrow.</p>
                                    <div className="quote-accent-bar"></div>
                                </div>
                            </div>
                        </section>

                        {/* Popular Companies Strip */}
                        <section className="gov-popular-companies-section">
                            <div className="companies-strip-header">
                                <div>
                                    <h2>Popular Recruiters</h2>
                                    <p>Explore the most sought-after campus placement companies in tech.</p>
                                </div>
                                <button className="view-all-link" onClick={() => handleNavigate('companies')}>
                                    View All 20 Companies →
                                </button>
                            </div>

                            <div className="popular-companies-cards-row">
                                {POPULAR_COMPANIES.map(comp => (
                                    <div 
                                        key={comp.name} 
                                        className="popular-comp-card"
                                        onClick={() => handleLaunchCompanyRoadmap(comp.name)}
                                    >
                                        <div className="comp-card-top">
                                            <CompanyLogo name={comp.name} size={42} className="popular-comp-logo" />
                                            <span className={`comp-type-pill ${comp.type}`}>
                                                {comp.badge}
                                            </span>
                                        </div>
                                        <h4>{comp.name}</h4>
                                        <span className="comp-role-sub">{comp.role}</span>
                                        <span className="comp-launch-text">Open Roadmap →</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;