import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Companies from './components/Companies';
import DSA from './components/DSA';
import Aptitude from './components/Aptitude';
import Interviews from './components/Interviews';
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
            <Navbar />

            <main>
                {/* =========================
                    HOME / HERO SECTION
                   ========================= */}

                <section id="home" className="hero-section">
                    <h1>Your Career Journey Starts Here</h1>

                    <p>
                        Prepare for placements with the right resources,
                        company information, and interview preparation.
                    </p>

                    <button
                        onClick={() => {
                            document.getElementById('companies').scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                        Explore Companies
                    </button>
                </section>


                {/* =========================
                    FEATURES SECTION
                   ========================= */}

                <section className="features">
                    <h2>What can Sarathi help you with?</h2>

                    <div className="feature-container">
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
                                Explore 12 top companies and 600 verified hiring patterns.
                            </p>
                        </div>

                        <div
                            className="feature-card clickable"
                            onClick={() => openSection('dsa')}
                        >
                            <h3>DSA</h3>
                            <p>
                                Practice 600 LeetCode-matched coding problems by topic.
                            </p>
                        </div>

                        <div
                            className="feature-card clickable"
                            onClick={() => openSection('aptitude')}
                        >
                            <h3>Aptitude</h3>
                            <p>
                                Practice Quantitative, Logical, and Verbal tests with instant checks.
                            </p>
                        </div>

                        <div
                            className="feature-card clickable"
                            onClick={() => openSection('interviews')}
                        >
                            <h3>Interviews</h3>
                            <p>
                                Prepare for HR, Core CS, and Behavioral rounds from LinkedIn.
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
                                <div className="preparation-card">
                                    <h3>DSA</h3>
                                    <p>
                                        Practice 600 data structures & algorithm problems
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

                                <div className="preparation-card ide-sandbox-card">
                                    <h3>Code IDE</h3>
                                    <p>
                                        Sandboxed code execution for Python, JavaScript, and Java
                                        with real-time testcase verification and TLE detection.
                                    </p>
                                    <button onClick={() => handleOpenIDE({
                                        title: 'Two Sum Problem',
                                        problemStatement: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.',
                                        constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9'],
                                        difficulty: 'Easy',
                                        company: 'Amazon / TCS Digital',
                                        round: 'Coding Assessment'
                                    })}>
                                        Launch IDE
                                    </button>
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
                        <div className="resource-card">
                            <h3>Roadmaps</h3>
                            <p>
                                Follow structured learning paths for
                                placement preparation.
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