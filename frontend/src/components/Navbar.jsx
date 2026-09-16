import { useTheme } from '../context/ThemeContext';
import { 
    SarathiLogo, 
    HomeIcon, 
    RoadmapIcon, 
    CompanyIcon, 
    DSAIcon, 
    AptitudeIcon, 
    InterviewIcon, 
    SunIcon, 
    MoonIcon 
} from './Icons';
import './Navbar.css';

function Navbar({ activeView, onNavigate }) {
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { id: 'home', label: 'Home', icon: HomeIcon },
        { id: 'roadmap', label: 'Roadmaps', icon: RoadmapIcon },
        { id: 'companies', label: 'Companies', icon: CompanyIcon },
        { id: 'dsa', label: 'DSA Arena', icon: DSAIcon },
        { id: 'aptitude', label: 'Aptitude', icon: AptitudeIcon },
        { id: 'interviews', label: 'Interviews', icon: InterviewIcon },
    ];

    return (
        <header className="gov-navbar-wrapper">
            <nav className="gov-navbar">
                {/* Brand Logo & Tagline */}
                <div className="gov-brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
                    <div className="gov-logo-icon">
                        <SarathiLogo size={32} />
                    </div>
                    <div className="gov-logo-text">
                        <span className="gov-brand-name">Sarathi</span>
                        <span className="gov-brand-sub">Placement Intelligence</span>
                    </div>
                </div>

                {/* Pill-Style View Navigation */}
                <div className="gov-nav-links">
                    {navItems.map(item => {
                        const isActive = activeView === item.id;
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                className={`gov-nav-pill ${isActive ? 'active' : ''}`}
                                onClick={() => onNavigate(item.id)}
                            >
                                <span className="nav-icon"><IconComponent size={16} /></span>
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
                                <span className="theme-icon"><MoonIcon size={16} /></span>
                                <span className="theme-label">Dark</span>
                            </>
                        ) : (
                            <>
                                <span className="theme-icon"><SunIcon size={16} /></span>
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