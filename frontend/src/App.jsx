import Navbar from './components/Navbar';
import './App.css';
import Companies from './components/Companies';

function App() {
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
                        <div className="feature-card">
                            <h3>Companies</h3>
                            <p>
                                Explore companies and their hiring process.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>DSA</h3>
                            <p>
                                Prepare coding and data structures topics.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Aptitude</h3>
                            <p>
                                Practice aptitude and reasoning resources.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Interviews</h3>
                            <p>
                                Prepare for technical and HR interviews.
                            </p>
                        </div>
                    </div>
                </section>


                {/* =========================
                    COMPANIES SECTION
                   ========================= */}

                <Companies />


                {/* =========================
                    PREPARATION SECTION
                   ========================= */}

                <section id="preparation" className="preparation-section">
                    <h2>Preparation</h2>

                    <p className="section-intro">
                        Build your placement preparation with focused
                        practice areas.
                    </p>

                    <div className="preparation-container">
                        <div className="preparation-card">
                            <h3>DSA</h3>
                            <p>
                                Practice data structures and algorithms
                                for coding rounds.
                            </p>
                            <button>Explore DSA</button>
                        </div>

                        <div className="preparation-card">
                            <h3>Aptitude</h3>
                            <p>
                                Improve quantitative aptitude, logical
                                reasoning, and problem solving.
                            </p>
                            <button>Practice Aptitude</button>
                        </div>

                        <div className="preparation-card">
                            <h3>Interviews</h3>
                            <p>
                                Prepare for technical and HR interview
                                rounds.
                            </p>
                            <button>Prepare for Interviews</button>
                        </div>
                    </div>
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