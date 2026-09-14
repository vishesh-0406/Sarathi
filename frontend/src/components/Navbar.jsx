import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

function Navbar({ activeView, onNavigate }) {
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'roadmap', label: 'Roadmaps', icon: '🎯' },
        { id: 'companies', label: 'Companies', icon: '🏢' },
        { id: 'dsa', label: 'DSA Arena', icon: '💻' },
        { id: 'aptitude', label: 'Aptitude', icon: '🧠' },
        { id: 'interviews', label: 'Interviews', icon: '🤝' },
    ];

    return (
        <header className="gov-navbar-wrapper">
            <nav className="gov-navbar">
                {/* Brand Logo & Tagline */}
                <div className="gov-brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
                    <div className="gov-logo-icon">🧭</div>
                    <div className="gov-logo-text">
                        <span className="gov-brand-name">Sarathi</span>
                        <span className="gov-brand-sub">Placement Intelligence</span>
                    </div>
                </div>

                {/* Pill-Style View Navigation */}
                <div className="gov-nav-links">
                    {navItems.map(item => {
                        const isActive = activeView === item.id;
                        return (
                            <button
                                key={item.id}
                                className={`gov-nav-pill ${isActive ? 'active' : ''}`}
                                onClick={() => onNavigate(item.id)}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Utilities: Theme Toggle & Quick Badge */}
                <div className="gov-nav-actions">
                    <button 
                        className="gov-theme-toggle" 
                        onClick={toggleTheme}
                        title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                    >
                        {theme === 'light' ? (
                            <>
                                <span className="theme-icon">🌙</span>
                                <span className="theme-label">Dark</span>
                            </>
                        ) : (
                            <>
                                <span className="theme-icon">☀️</span>
                                <span className="theme-label">Light</span>
                            </>
                        )}
                    </button>

                    <div className="gov-status-badge">
                        <span className="pulse-dot"></span>
                        <span>20 Companies • 2,000 Qs</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;