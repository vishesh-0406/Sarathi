import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import CompanyLogo from './CompanyLogos';
import { UserIcon, MailIcon, LockIcon, SpinnerIcon, CheckIcon } from './Icons';
import './AuthModal.css';

const TARGET_COMPANIES = [
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle',
    'Salesforce', 'Uber', 'Zoho', 'Flipkart', 'Goldman Sachs',
    'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant',
    'Capgemini', 'HCLTech', 'Tech Mahindra', 'LTIMindtree', 'Genpact'
];

function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
    const { login, register, verifyEmail, resendOtp, forgotPassword, resetPassword } = useAuth();
    const [mode, setMode] = useState(initialMode); // 'login' | 'register' | 'verify' | 'forgot' | 'reset'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [targetCompany, setTargetCompany] = useState('Amazon');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [infoMessage, setInfoMessage] = useState(null);
    const [resendCooldown, setResendCooldown] = useState(0);

    // Reset error when switching mode or opening
    useEffect(() => {
        setMode(initialMode);
        setError(null);
        setInfoMessage(null);
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
    }, [initialMode, isOpen]);

    // Resend cooldown timer
    useEffect(() => {
        if (resendCooldown <= 0) return;
        const timer = setInterval(() => {
            setResendCooldown(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [resendCooldown]);

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
        setInfoMessage(null);
        setLoading(true);

        // 1. REGISTRATION EMAIL OTP VERIFICATION
        if (mode === 'verify') {
            if (!otp.trim() || otp.trim().length !== 6) {
                setError('Please enter the full 6-digit verification code.');
                setLoading(false);
                return;
            }

            const res = await verifyEmail(email, otp.trim());
            setLoading(false);
            if (res.success) {
                onClose();
            } else {
                setError(res.error || 'Verification failed. Please check your code and try again.');
            }
            return;
        }

        // 2. FORGOT PASSWORD REQUEST
        if (mode === 'forgot') {
            if (!email.trim()) {
                setError('Please enter your registered email address.');
                setLoading(false);
                return;
            }

            const res = await forgotPassword(email.trim());
            setLoading(false);
            if (res.success) {
                setMode('reset');
                setOtp('');
                setNewPassword('');
                setConfirmPassword('');
                setInfoMessage(res.message || `A 6-digit reset code has been sent to ${email}. Please check your inbox.`);
                setResendCooldown(30);
            } else {
                setError(res.error || 'Failed to send password reset code.');
            }
            return;
        }

        // 3. RESET PASSWORD CONFIRMATION
        if (mode === 'reset') {
            if (!otp.trim() || otp.trim().length !== 6) {
                setError('Please enter the 6-digit verification code sent to your email.');
                setLoading(false);
                return;
            }

            if (newPassword.length < 6) {
                setError('New password must be at least 6 characters long.');
                setLoading(false);
                return;
            }

            if (newPassword !== confirmPassword) {
                setError('Passwords do not match. Please re-enter your password.');
                setLoading(false);
                return;
            }

            const res = await resetPassword(email.trim(), otp.trim(), newPassword);
            setLoading(false);
            if (res.success) {
                onClose();
            } else {
                setError(res.error || 'Failed to reset password. Please check your code.');
            }
            return;
        }

        // 4. NORMAL SIGN IN
        if (mode === 'login') {
            const res = await login(email, password);
            setLoading(false);
            if (res.success) {
                onClose();
            } else if (res.requiresVerification) {
                setMode('verify');
                setInfoMessage(res.error || `A 6-digit verification code has been dispatched to ${email}. Please check your email inbox.`);
                setResendCooldown(30);
            } else {
                setError(res.error);
            }
        } else {
            // 5. REGISTRATION
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
            } else if (res.requiresVerification) {
                setMode('verify');
                setInfoMessage(res.message || `A verification code was dispatched to ${res.email}. Please check your inbox.`);
                setResendCooldown(30);
            } else {
                setError(res.error);
            }
        }
    };

    const handleResendOtp = async () => {
        if (resendCooldown > 0) return;
        setError(null);
        setLoading(true);

        if (mode === 'reset' || mode === 'forgot') {
            const res = await forgotPassword(email.trim());
            setLoading(false);
            if (res.success) {
                setInfoMessage(res.message || `A fresh reset code has been sent to ${email}. Please check your email inbox.`);
                setResendCooldown(30);
            } else {
                setError(res.error);
            }
        } else {
            const res = await resendOtp(email.trim());
            setLoading(false);
            if (res.success) {
                setInfoMessage(res.message || `A new code has been dispatched to ${email}. Please check your inbox.`);
                setResendCooldown(30);
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
                    {mode === 'login' || mode === 'register' ? (
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
                    ) : mode === 'forgot' || mode === 'reset' ? (
                        <div className="auth-verify-head-badge reset-badge">
                            <span>🔑 Password Recovery</span>
                        </div>
                    ) : (
                        <div className="auth-verify-head-badge">
                            <MailIcon size={16} />
                            <span>Email Verification Required</span>
                        </div>
                    )}

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
                            {mode === 'verify' 
                                ? 'Verify Your Email Address' 
                                : mode === 'forgot'
                                ? 'Reset Your Password'
                                : mode === 'reset'
                                ? 'Set New Password'
                                : mode === 'login' 
                                ? 'Welcome Back to Sarathi' 
                                : 'Begin Your Placement Preparation'}
                        </h3>
                        <p className="auth-subtitle">
                            {mode === 'verify'
                                ? `Check your email inbox to find the 6-digit verification code sent to ${email}.`
                                : mode === 'forgot'
                                ? 'Enter your registered email address and we will dispatch a 6-digit verification code.'
                                : mode === 'reset'
                                ? `Enter the 6-digit code sent to ${email} along with your new password.`
                                : mode === 'login' 
                                ? 'Sign in to access your personal AI progress, solved history, and bookmarks.' 
                                : 'Track authentic multi-round company roadmaps and placement readiness.'}
                        </p>
                    </div>

                    {error && (
                        <div className="auth-error-banner" role="alert">
                            <span className="auth-error-icon">⚠️</span>
                            <div className="auth-error-content">
                                <span className="auth-error-text">{error}</span>
                                {mode === 'register' && (error.toLowerCase().includes('already registered') || error.toLowerCase().includes('already exists')) && (
                                    <div className="auth-error-actions">
                                        <button
                                            type="button"
                                            className="auth-error-action-btn"
                                            onClick={() => {
                                                setMode('login');
                                                setError(null);
                                                setInfoMessage(`Please enter your password to sign in to ${email}`);
                                            }}
                                        >
                                            Switch to Sign In →
                                        </button>
                                        <button
                                            type="button"
                                            className="auth-error-action-sublink"
                                            onClick={() => {
                                                setMode('forgot');
                                                setError(null);
                                                setInfoMessage(null);
                                            }}
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {infoMessage && (
                        <div className="auth-info-banner">
                            <CheckIcon size={14} />
                            <span>{infoMessage}</span>
                        </div>
                    )}

                    {mode === 'verify' && (
                        <div className="auth-inbox-prompt-card">
                            <span className="inbox-prompt-icon">📬</span>
                            <div className="inbox-prompt-text">
                                <span className="inbox-prompt-title">Verification Code Dispatched</span>
                                <span className="inbox-prompt-desc">
                                    We sent an email with your 6-digit OTP code to <strong>{email}</strong>. Please check your inbox and promotions/spam folder.
                                </span>
                            </div>
                        </div>
                    )}

                    {mode === 'reset' && (
                        <div className="auth-inbox-prompt-card">
                            <span className="inbox-prompt-icon">📬</span>
                            <div className="inbox-prompt-text">
                                <span className="inbox-prompt-title">Reset Code Dispatched</span>
                                <span className="inbox-prompt-desc">
                                    We sent an email with your 6-digit password reset code to <strong>{email}</strong>.
                                </span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form">
                        {/* MODE 1: OTP REGISTRATION VERIFICATION */}
                        {mode === 'verify' && (
                            <div className="auth-field-group">
                                <label className="auth-label">6-Digit Verification Code</label>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon"><LockIcon size={14} /></span>
                                    <input
                                        type="text"
                                        maxLength={6}
                                        className="auth-input otp-code-input"
                                        placeholder="• • • • • •"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                        required
                                        autoFocus
                                    />
                                </div>
                                <span className="auth-field-hint">
                                    Only authenticated inboxes are permitted to access Sarathi Placement Intelligence.
                                </span>
                            </div>
                        )}

                        {/* MODE 2: FORGOT PASSWORD REQUEST (EMAIL INPUT) */}
                        {mode === 'forgot' && (
                            <div className="auth-field-group">
                                <label className="auth-label">Registered Email Address</label>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon"><MailIcon size={14} /></span>
                                    <input
                                        type="email"
                                        className="auth-input"
                                        placeholder="student@college.edu or yourname@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoFocus
                                    />
                                </div>
                                <span className="auth-field-hint">
                                    We will dispatch a secure 6-digit code to this inbox to verify account ownership.
                                </span>
                            </div>
                        )}

                        {/* MODE 3: RESET PASSWORD WITH OTP & NEW PASSWORD */}
                        {mode === 'reset' && (
                            <>
                                <div className="auth-field-group">
                                    <label className="auth-label">6-Digit Password Reset Code</label>
                                    <div className="auth-input-wrapper">
                                        <span className="auth-input-icon"><LockIcon size={14} /></span>
                                        <input
                                            type="text"
                                            maxLength={6}
                                            className="auth-input otp-code-input"
                                            placeholder="• • • • • •"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                            required
                                            autoFocus
                                        />
                                    </div>
                                </div>

                                <div className="auth-field-group">
                                    <label className="auth-label">New Password</label>
                                    <div className="auth-input-wrapper">
                                        <span className="auth-input-icon"><LockIcon size={14} /></span>
                                        <input
                                            type="password"
                                            className="auth-input"
                                            placeholder="Minimum 6 characters"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="auth-field-group">
                                    <label className="auth-label">Confirm New Password</label>
                                    <div className="auth-input-wrapper">
                                        <span className="auth-input-icon"><LockIcon size={14} /></span>
                                        <input
                                            type="password"
                                            className="auth-input"
                                            placeholder="Re-enter your new password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* MODE 4: REGISTER FULL NAME */}
                        {mode === 'register' && (
                            <div className="auth-field-group">
                                <label className="auth-label">Full Name</label>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon"><UserIcon size={14} /></span>
                                    <input
                                        type="text"
                                        className="auth-input"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        autoFocus
                                    />
                                </div>
                            </div>
                        )}

                        {/* MODE 5: COMMON EMAIL & PASSWORD FOR LOGIN / REGISTER */}
                        {(mode === 'login' || mode === 'register') && (
                            <>
                                <div className="auth-field-group">
                                    <label className="auth-label">Email Address</label>
                                    <div className="auth-input-wrapper">
                                        <span className="auth-input-icon"><MailIcon size={14} /></span>
                                        <input
                                            type="email"
                                            className="auth-input"
                                            placeholder="student@college.edu or yourname@gmail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoFocus={mode === 'login'}
                                        />
                                    </div>
                                    <span className="auth-field-hint">
                                        Must be an active email domain with verified mail exchange servers.
                                    </span>
                                </div>

                                <div className="auth-field-group">
                                    <div className="auth-label-row">
                                        <label className="auth-label">Password</label>
                                        {mode === 'login' && (
                                            <button
                                                type="button"
                                                className="auth-forgot-link"
                                                onClick={() => {
                                                    setMode('forgot');
                                                    setError(null);
                                                    setInfoMessage(null);
                                                }}
                                            >
                                                Forgot password?
                                            </button>
                                        )}
                                    </div>
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
                            </>
                        )}

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
                                    <span>
                                        {mode === 'verify' 
                                            ? 'Verifying Code...' 
                                            : mode === 'forgot'
                                            ? 'Sending Reset Code...'
                                            : mode === 'reset'
                                            ? 'Resetting Password...'
                                            : mode === 'login' 
                                            ? 'Authenticating...' 
                                            : 'Validating Email & Creating Profile...'}
                                    </span>
                                </span>
                            ) : (
                                <span>
                                    {mode === 'verify' 
                                        ? 'Verify Email & Launch Sarathi' 
                                        : mode === 'forgot'
                                        ? 'Send 6-Digit Reset Code'
                                        : mode === 'reset'
                                        ? 'Reset Password & Sign In'
                                        : mode === 'login' 
                                        ? 'Sign In' 
                                        : 'Create Account & Send Verification'}
                                </span>
                            )}
                        </button>
                    </form>

                    {/* FOOTER ACTIONS */}
                    <div className="auth-footer-prompt">
                        {mode === 'verify' ? (
                            <div className="verify-footer-actions">
                                <button
                                    type="button"
                                    className="auth-switch-link"
                                    disabled={resendCooldown > 0 || loading}
                                    onClick={handleResendOtp}
                                >
                                    {resendCooldown > 0 ? `Resend Code in ${resendCooldown}s` : 'Resend Verification Code'}
                                </button>
                                <span className="footer-dot">•</span>
                                <button
                                    type="button"
                                    className="auth-switch-link"
                                    onClick={() => { setMode('login'); setError(null); }}
                                >
                                    Back to Sign In
                                </button>
                            </div>
                        ) : mode === 'reset' ? (
                            <div className="verify-footer-actions">
                                <button
                                    type="button"
                                    className="auth-switch-link"
                                    disabled={resendCooldown > 0 || loading}
                                    onClick={handleResendOtp}
                                >
                                    {resendCooldown > 0 ? `Resend Code in ${resendCooldown}s` : 'Resend Reset Code'}
                                </button>
                                <span className="footer-dot">•</span>
                                <button
                                    type="button"
                                    className="auth-switch-link"
                                    onClick={() => { setMode('login'); setError(null); }}
                                >
                                    Back to Sign In
                                </button>
                            </div>
                        ) : mode === 'forgot' ? (
                            <span>
                                Remember your password?{' '}
                                <button 
                                    type="button" 
                                    className="auth-switch-link"
                                    onClick={() => { setMode('login'); setError(null); }}
                                >
                                    Back to Sign In
                                </button>
                            </span>
                        ) : mode === 'login' ? (
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
