import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import CompanyLogo from './CompanyLogos';
import { UserIcon, MailIcon, LockIcon, SpinnerIcon } from './Icons';
import './AuthModal.css';

const TARGET_COMPANIES = [
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle',
    'Salesforce', 'Uber', 'Zoho', 'Flipkart', 'Goldman Sachs',
    'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant',
    'Capgemini', 'HCLTech', 'Tech Mahindra', 'LTIMindtree', 'Genpact'
];

function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
    const { login, register } = useAuth();
    const [mode, setMode] = useState(initialMode); // 'login' | 'register'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [targetCompany, setTargetCompany] = useState('Amazon');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Reset error when switching mode or opening
    useEffect(() => {
        setMode(initialMode);
        setError(null);
    }, [initialMode, isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (mode === 'login') {
            const res = await login(email, password);
            setLoading(false);
            if (res.success) {
                onClose();
            } else {
                setError(res.error);
            }
        } else {
            if (!name.trim()) {
                setError('Please enter your full name');
                setLoading(false);
                return;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters long');
                setLoading(false);
                return;
            }

            const res = await register(name, email, password, targetCompany);
            setLoading(false);
            if (res.success) {
                onClose();
            } else {
                setError(res.error);
            }
        }
    };

    return (
        <div className="auth-modal-backdrop" onClick={onClose}>
            <div 
                className="auth-modal-card" 
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                {/* Modal Header & Tabs */}
                <div className="auth-modal-header">
                    <div className="auth-tab-switch">
                        <button
                            type="button"
                            className={`auth-tab-btn ${mode === 'login' ? 'active' : ''}`}
                            onClick={() => { setMode('login'); setError(null); }}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className={`auth-tab-btn ${mode === 'register' ? 'active' : ''}`}
                            onClick={() => { setMode('register'); setError(null); }}
                        >
                            Create Account
                        </button>
                    </div>

                    <button 
                        className="auth-close-btn" 
                        onClick={onClose}
                        title="Close modal"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                </div>

                <div className="auth-modal-body">
                    <div className="auth-welcome-meta">
                        <h3 className="auth-title">
                            {mode === 'login' ? 'Welcome Back to Sarathi' : 'Begin Your Placement Preparation'}
                        </h3>
                        <p className="auth-subtitle">
                            {mode === 'login' 
                                ? 'Sign in to access your personal AI progress, solved history, and bookmarks.' 
                                : 'Track authentic multi-round company roadmaps and placement readiness.'}
                        </p>
                    </div>

                    {error && (
                        <div className="auth-error-banner" role="alert">
                            <span className="auth-error-icon">⚠️</span>
                            <span className="auth-error-text">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form">
                        {mode === 'register' && (
                            <div className="auth-field-group">
                                <label className="auth-label">Full Name</label>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon"><UserIcon size={14} /></span>
                                    <input
                                        type="text"
                                        className="auth-input"
                                        placeholder="e.g. Vishesh Kumar"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        autoFocus
                                    />
                                </div>
                            </div>
                        )}

                        <div className="auth-field-group">
                            <label className="auth-label">Email Address</label>
                            <div className="auth-input-wrapper">
                                <span className="auth-input-icon"><MailIcon size={14} /></span>
                                <input
                                    type="email"
                                    className="auth-input"
                                    placeholder="student@college.edu"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoFocus={mode === 'login'}
                                />
                            </div>
                        </div>

                        <div className="auth-field-group">
                            <label className="auth-label">Password</label>
                            <div className="auth-input-wrapper">
                                <span className="auth-input-icon"><LockIcon size={14} /></span>
                                <input
                                    type="password"
                                    className="auth-input"
                                    placeholder={mode === 'register' ? 'Minimum 6 characters' : 'Enter your password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {mode === 'register' && (
                            <div className="auth-field-group">
                                <label className="auth-label">Target Dream Company</label>
                                <div className="auth-select-wrapper">
                                    <select
                                        className="auth-select"
                                        value={targetCompany}
                                        onChange={(e) => setTargetCompany(e.target.value)}
                                    >
                                        {TARGET_COMPANIES.map(comp => (
                                            <option key={comp} value={comp}>{comp}</option>
                                        ))}
                                    </select>
                                    <div className="auth-select-logo">
                                        <CompanyLogo name={targetCompany} size={16} />
                                    </div>
                                </div>
                                <span className="auth-field-hint">
                                    Your AI roadmap will prioritize interview questions from {targetCompany}.
                                </span>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="auth-submit-btn" 
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="btn-loading-state">
                                    <SpinnerIcon size={14} /> 
                                    <span>{mode === 'login' ? 'Authenticating...' : 'Creating Profile...'}</span>
                                </span>
                            ) : (
                                <span>{mode === 'login' ? 'Sign In' : 'Create Account & Start Preparing'}</span>
                            )}
                        </button>
                    </form>

                    <div className="auth-footer-prompt">
                        {mode === 'login' ? (
                            <span>
                                Don't have an account?{' '}
                                <button 
                                    type="button" 
                                    className="auth-switch-link"
                                    onClick={() => { setMode('register'); setError(null); }}
                                >
                                    Create one for free
                                </button>
                            </span>
                        ) : (
                            <span>
                                Already have an account?{' '}
                                <button 
                                    type="button" 
                                    className="auth-switch-link"
                                    onClick={() => { setMode('login'); setError(null); }}
                                >
                                    Sign in instead
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
