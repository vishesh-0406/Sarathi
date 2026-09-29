import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const API_BASE_URL = 'http://localhost:5000/api';

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('sarathi_token'));
    const [loading, setLoading] = useState(true);

    // Initial session verification: hydrate user profile if token is present
    useEffect(() => {
        async function verifySession() {
            const savedToken = localStorage.getItem('sarathi_token');
            if (!savedToken) {
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(`${API_BASE_URL}/auth/me`, {
                    headers: {
                        'Authorization': `Bearer ${savedToken}`
                    }
                });

                if (res.ok) {
                    const userData = await res.json();
                    setUser(userData);
                    setToken(savedToken);
                } else {
                    // Stale or invalid token: cleanly clear storage
                    localStorage.removeItem('sarathi_token');
                    setUser(null);
                    setToken(null);
                }
            } catch (err) {
                console.error('Failed to verify stored session:', err);
                // In case of network glitch, preserve offline state without crashing
            } finally {
                setLoading(false);
            }
        }

        verifySession();
    }, []);

    // User Login
    const login = async (email, password) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                if (data.requiresVerification) {
                    return { 
                        success: false, 
                        requiresVerification: true, 
                        email: data.email, 
                        error: data.message 
                    };
                }
                return { success: false, error: data.message || 'Login failed' };
            }

            localStorage.setItem('sarathi_token', data.token);
            setToken(data.token);
            setUser({
                _id: data._id,
                name: data.name,
                email: data.email,
                targetCompany: data.targetCompany,
                solvedCount: data.solvedCount || 0,
                bookmarksCount: data.bookmarksCount || 0
            });

            return { success: true, user: data };
        } catch (err) {
            return { success: false, error: 'Network error. Please ensure the Sarathi server is running.' };
        }
    };

    // User Registration
    const register = async (name, email, password, targetCompany) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, targetCompany })
            });

            const data = await res.json();

            if (!res.ok) {
                return { success: false, error: data.message || 'Registration failed' };
            }

            if (data.requiresVerification) {
                return {
                    success: false,
                    requiresVerification: true,
                    email: data.email,
                    message: data.message
                };
            }

            if (data.token) {
                localStorage.setItem('sarathi_token', data.token);
                setToken(data.token);
                setUser({
                    _id: data._id,
                    name: data.name,
                    email: data.email,
                    targetCompany: data.targetCompany,
                    solvedCount: 0,
                    bookmarksCount: 0
                });
            }

            return { success: true, user: data };
        } catch (err) {
            return { success: false, error: 'Network error. Please ensure the Sarathi server is running.' };
        }
    };

    // Email OTP Verification
    const verifyEmail = async (email, otp) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/verify-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });

            const data = await res.json();

            if (!res.ok) {
                return { success: false, error: data.message || 'Verification failed' };
            }

            if (data.token) {
                localStorage.setItem('sarathi_token', data.token);
                setToken(data.token);
                setUser({
                    _id: data._id,
                    name: data.name,
                    email: data.email,
                    targetCompany: data.targetCompany,
                    solvedCount: data.solvedCount || 0,
                    bookmarksCount: data.bookmarksCount || 0
                });
            }

            return { success: true, user: data };
        } catch (err) {
            return { success: false, error: 'Network error during verification.' };
        }
    };

    // Resend Verification OTP
    const resendOtp = async (email) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/resend-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            if (!res.ok) {
                return { success: false, error: data.message || 'Failed to resend code' };
            }

            return { success: true, message: data.message };
        } catch (err) {
            return { success: false, error: 'Network error while resending code.' };
        }
    };

    // Forgot Password - Request 6-digit OTP to real email
    const forgotPassword = async (email) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            if (!res.ok) {
                return { success: false, error: data.message || 'Failed to send password reset code' };
            }

            return { success: true, message: data.message, email: data.email };
        } catch (err) {
            return { success: false, error: 'Network error while requesting password reset code.' };
        }
    };

    // Reset Password - Verify OTP and update password
    const resetPassword = async (email, otp, newPassword) => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, newPassword })
            });

            const data = await res.json();
            if (!res.ok) {
                return { success: false, error: data.message || 'Failed to reset password' };
            }

            if (data.token) {
                localStorage.setItem('sarathi_token', data.token);
                setToken(data.token);
                setUser({
                    _id: data.user?._id || data._id,
                    name: data.user?.name || data.name,
                    email: data.user?.email || data.email,
                    targetCompany: data.user?.targetCompany || data.targetCompany || 'Amazon',
                    solvedCount: 0,
                    bookmarksCount: 0
                });
            }

            return { success: true, message: data.message };
        } catch (err) {
            return { success: false, error: 'Network error while resetting password.' };
        }
    };

    // User Logout
    const logout = () => {
        localStorage.removeItem('sarathi_token');
        setUser(null);
        setToken(null);
    };

    // Update target company preference
    const updateTargetCompany = async (targetCompany) => {
        if (!token) return { success: false, error: 'Not authenticated' };

        try {
            const res = await fetch(`${API_BASE_URL}/auth/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ targetCompany })
            });

            const data = await res.json();
            if (!res.ok) {
                return { success: false, error: data.message || 'Update failed' };
            }

            setUser(prev => prev ? { ...prev, targetCompany: data.targetCompany } : null);
            return { success: true, user: data };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    // Refresh profile state
    const refreshUser = async () => {
        if (!token) return;
        try {
            const res = await fetch(`${API_BASE_URL}/auth/me`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const userData = await res.json();
                setUser(userData);
            }
        } catch (err) {
            console.error('Failed to refresh user:', err);
        }
    };

    // Toggle bookmark for a question
    const toggleBookmark = async (questionId) => {
        if (!token) return { success: false, requiresAuth: true };
        try {
            const res = await fetch(`${API_BASE_URL}/user/bookmark`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ questionId })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setUser(prev => prev ? { ...prev, bookmarksCount: data.bookmarksCount } : null);
                return { success: true, bookmarked: data.bookmarked, count: data.bookmarksCount };
            }
            return { success: false, error: data.message };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    // Record quiz attempt
    const recordQuizAttempt = async (questionId, selectedOption, isCorrect) => {
        if (!token) return;
        try {
            await fetch(`${API_BASE_URL}/user/quiz-attempt`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ questionId, selectedOption, isCorrect })
            });
        } catch (err) {
            console.error('Failed to record quiz attempt:', err);
        }
    };

    // Update target placement drive date
    const updateTargetPlacementDate = async (targetDate) => {
        if (!token) return { success: false, error: 'Not authenticated' };

        try {
            const res = await fetch(`${API_BASE_URL}/user/target-date`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ targetDate })
            });

            const data = await res.json();
            if (!res.ok) {
                return { success: false, error: data.message || 'Update failed' };
            }

            return { success: true, targetPlacementDate: data.targetPlacementDate, tracker: data.tracker };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    // Complete Day 1 Onboarding and configure target company & timeline
    const completeOnboarding = async (targetCompany, targetPlacementDate) => {
        if (!token) return { success: false, error: 'Not authenticated' };

        try {
            const res = await fetch(`${API_BASE_URL}/user/mock-test/onboarding`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ targetCompany, targetPlacementDate })
            });

            const data = await res.json();
            if (!res.ok) {
                return { success: false, error: data.message || 'Onboarding failed' };
            }

            setUser(prev => prev ? { 
                ...prev, 
                targetCompany: data.user.targetCompany, 
                hasCompletedOnboarding: true,
                onboardedAt: data.user.onboardedAt,
                targetPlacementDate: data.user.targetPlacementDate
            } : null);

            return { success: true, user: data.user };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            token,
            isAuthenticated: !!user,
            loading,
            login,
            register,
            verifyEmail,
            resendOtp,
            forgotPassword,
            resetPassword,
            logout,
            updateTargetCompany,
            updateTargetPlacementDate,
            completeOnboarding,
            toggleBookmark,
            recordQuizAttempt,
            refreshUser
        }}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
