import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import CompanyLogo from './CompanyLogos';
import { 
    SarathiLogo, 
    HomeIcon, 
    RoadmapIcon, 
    CompanyIcon, 
    DSAIcon, 
    AptitudeIcon, 
    InterviewIcon, 
    SunIcon, 
    MoonIcon,
    UserIcon,
    LogOutIcon,
    TargetIcon
} from './Icons';
import './Navbar.css';

function Navbar({ activeView, onNavigate, onOpenAuth }) {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const profileDropdownRef = useRef(null);

    const navItems = [
        { id: 'home', label: 'Home', icon: HomeIcon },
        { id: 'tracker', label: 'AI Tracker', icon: TargetIcon },
        { id: 'roadmap', label: 'Roadmaps', icon: RoadmapIcon },
        { id: 'companies', label: 'Companies', icon: CompanyIcon },
        { id: 'dsa', label: 'DSA Arena', icon: DSAIcon },
        { id: 'aptitude', label: 'Aptitude', icon: AptitudeIcon },
        { id: 'interviews', label: 'Interviews', icon: InterviewIcon },
    ];


    // Close profile dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setProfileMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

                {/* Right Utilities: Auth Controls, Theme Toggle & Status Badge */}
                <div className="gov-nav-actions">
                    {/* User Auth Chip or Sign In Button */}
                    {!user ? (
                        <button 
                            className="gov-auth-btn signin-btn" 
                            onClick={() => onOpenAuth && onOpenAuth('login')}
                            title="Sign in to save placement progress"
                        >
                            <UserIcon size={14} />
                            <span>Sign In</span>
                        </button>
                    ) : (
                        <div className="gov-user-profile-wrapper" ref={profileDropdownRef}>
                            <button 
                                className="gov-user-chip-btn" 
                                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                                title="View your candidate profile"
                            >
                                <span className="user-avatar-circle">
                                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                </span>
                                <span className="user-display-name">{user.name.split(' ')[0]}</span>
                                {user.targetCompany && (
                                    <span className="user-target-tag">
                                        <CompanyLogo name={user.targetCompany} size={13} />
                                        <span>{user.targetCompany}</span>
                                    </span>
                                )}
                            </button>

                            {profileMenuOpen && (
                                <div className="gov-profile-dropdown" role="menu">
                                    <div className="dropdown-user-header">
                                        <div className="dropdown-user-name">{user.name}</div>
                                        <div className="dropdown-user-email">{user.email}</div>
                                    </div>

                                    <div className="dropdown-meta-row">
                                        <span className="meta-label">Dream Target:</span>
                                        <span className="meta-val">
                                            <CompanyLogo name={user.targetCompany || 'Amazon'} size={13} />
                                            <strong>{user.targetCompany || 'Amazon'}</strong>
                                        </span>
                                    </div>

                                    <div className="dropdown-divider"></div>

                                    <button 
                                        className="dropdown-item-btn" 
                                        onClick={() => {
                                            onNavigate('tracker');
                                            setProfileMenuOpen(false);
                                        }}
                                        role="menuitem"
                                    >
                                        <TargetIcon size={14} />
                                        <span>AI Readiness Tracker</span>
                                    </button>

                                    <button 
                                        className="dropdown-item-btn logout-btn" 
                                        onClick={() => {
                                            logout();
                                            setProfileMenuOpen(false);
                                        }}
                                        role="menuitem"
                                    >
                                        <LogOutIcon size={14} />
                                        <span>Sign Out</span>
                                    </button>

                                </div>
                            )}
                        </div>
                    )}

                    {/* Theme Toggle */}
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