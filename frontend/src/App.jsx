import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Companies from './components/Companies';
import DSA from './components/DSA';
import Aptitude from './components/Aptitude';
import Interviews from './components/Interviews';
import Roadmap from './components/Roadmap';
import IDE from './components/IDE';

function App() {
    const [activePrepSection, setActivePrepSection] = useState(null);
    const [activeIdeQuestion, setActiveIdeQuestion] = useState(null);

    const openSection = (sectionName) => {
        setActiveIdeQuestion(null);
        setActivePrepSection(sectionName);
        setTimeout(() => {
            const el = document.getElementById('preparation');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    const handleOpenIDE = (question) => {
        setActiveIdeQuestion(question);
        setTimeout(() => {
            const el = document.getElementById('ide-workspace-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    return (
        <>
            <Navbar onOpenRoadmap={() => openSection('roadmap')} />

            <main>
                {/* =========================
                    HOME / HERO SECTION
                   ========================= */}

                <section id="home" className="hero-section">
                    <h1>Your Career Journey Starts Here</h1>

                    <p>
                        Authentic campus placement intelligence platform with 2,000 verified questions, 
                        LeetCode canonical matching, and personalized 4-stage company roadmaps.
                    </p>

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => {
                                document.getElementById('companies').scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            Explore Companies
                        </button>
                        <button
                            onClick={() => openSection('roadmap')}
                            style={{ background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)', color: '#fff' }}
                        >
                            🎯 Target Company Roadmap
                        </button>
                    </div>
                </section>


                {/* =========================
                    FEATURES SECTION
                   ========================= */}

                <section className="features">
                    <h2>What can Sarathi help you with?</h2>

                    <div className="feature-container">
                        <div
                            className="feature-card clickable"
                            onClick={() => openSection('roadmap')}
                        >
                            <h3>🎯 Company Roadmaps</h3>
                            <p>
                                4-stage hiring milestones tailored for 20 top tech giants.
                            </p>
                        </div>

                        <div
                            className="feature-card clickable"
                            onClick={() => {
                                document.getElementById('companies').scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <h3>Companies</h3>
                            <p>
                                Explore 20 top companies (10 Service + 10 Product) and hiring patterns.
                            </p>
                        </div>

                        <div
                            className="feature-card clickable"
                            onClick={() => openSection('dsa')}
                        >
                            <h3>DSA</h3>
                            <p>
                                Practice 1,400 LeetCode-matched problems across all 9 pillars.
                            </p>
                        </div>

                        <div
                            className="feature-card clickable"
                            onClick={() => openSection('aptitude')}
                        >
                            <h3>Aptitude</h3>
                            <p>
                                300 Quantitative, Logical, and Verbal tests with step-by-step math.
                            </p>
                        </div>

                        <div
                            className="feature-card clickable"
                            onClick={() => openSection('interviews')}
                        >
                            <h3>Interviews</h3>
                            <p>
                                300 HR, Core CS, and Behavioral questions with STAR frameworks.
                            </p>
                        </div>
                    </div>
                </section>


                {/* =========================
                    COMPANIES SECTION
                   ========================= */}

                <Companies onOpenIDE={handleOpenIDE} />


                {/* =========================
                    PREPARATION SECTION & IDE
                   ========================= */}

                <section id="preparation" className="preparation-section">
                    {/* Active IDE Workspace View */}
                    {activeIdeQuestion && (
                        <div id="ide-workspace-section">
                            <IDE
                                question={activeIdeQuestion}
                                onBack={() => setActiveIdeQuestion(null)}
                            />
                        </div>
                    )}

                    {!activeIdeQuestion && activePrepSection === 'roadmap' && (
                        <Roadmap
                            onBack={() => setActivePrepSection(null)}
                            onOpenIDE={handleOpenIDE}
                        />
                    )}

                    {!activeIdeQuestion && activePrepSection === 'dsa' && (
                        <DSA
                            onBack={() => setActivePrepSection(null)}
                            onOpenIDE={handleOpenIDE}
                        />
                    )}

                    {!activeIdeQuestion && activePrepSection === 'aptitude' && (
                        <Aptitude onBack={() => setActivePrepSection(null)} />
                    )}

                    {!activeIdeQuestion && activePrepSection === 'interviews' && (
                        <Interviews onBack={() => setActivePrepSection(null)} />
                    )}

                    {!activeIdeQuestion && !activePrepSection && (
                        <>
                            <h2>Preparation</h2>

                            <p className="section-intro">
                                Build your placement preparation with focused
                                practice areas powered by Reddit, LinkedIn, and X.
                            </p>

                            <div className="preparation-container">
                                <div className="preparation-card" style={{ border: '1px solid rgba(56, 189, 248, 0.4)' }}>
                                    <h3 style={{ color: '#38bdf8' }}>🎯 Company Roadmaps</h3>
                                    <p>
                                        Select your target company (Amazon, TCS, Google, Zoho...) and follow a 
                                        structured 4-stage milestone curriculum directly mapped to hiring rounds.
                                    </p>
                                    <button onClick={() => openSection('roadmap')} style={{ background: '#0284c7', color: '#fff' }}>
                                        Start Roadmap
                                    </button>
                                </div>

                                <div className="preparation-card">
                                    <h3>DSA</h3>
                                    <p>
                                        Practice 1,400 data structures & algorithm problems
                                        with automated LeetCode matching and in-browser IDE.
                                    </p>
                                    <button onClick={() => openSection('dsa')}>Explore DSA</button>
                                </div>

                                <div className="preparation-card">
                                    <h3>Aptitude</h3>
                                    <p>
                                        Improve quantitative aptitude, logical
                                        reasoning, and verbal ability with step-by-step math solutions.
                                    </p>
                                    <button onClick={() => openSection('aptitude')}>Practice Aptitude</button>
                                </div>

                                <div className="preparation-card">
                                    <h3>Interviews</h3>
                                    <p>
                                        Prepare for technical (DBMS, OS, OOP) and HR behavioral
                                        interview rounds with STAR answer guidelines from LinkedIn.
                                    </p>
                                    <button onClick={() => openSection('interviews')}>Prepare for Interviews</button>
                                </div>
                            </div>
                        </>
                    )}
                </section>


                {/* =========================
                    RESOURCES SECTION
                   ========================= */}

                <section id="resources" className="resources-section">
                    <h2>Resources</h2>

                    <p className="section-intro">
                        Access useful resources to support your placement
                        preparation.
                    </p>

                    <div className="resources-container">
                        <div 
                            className="resource-card clickable" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => openSection('roadmap')}
                        >
                            <h3>Roadmaps</h3>
                            <p>
                                Follow structured 4-stage learning paths for
                                20 top target companies.
                            </p>
                        </div>

                        <div className="resource-card">
                            <h3>Study Material</h3>
                            <p>
                                Access important concepts and learning
                                material.
                            </p>
                        </div>

                        <div className="resource-card">
                            <h3>Practice Resources</h3>
                            <p>
                                Find useful resources for regular practice
                                and preparation.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;