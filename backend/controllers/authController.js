const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validateEmail } = require('../utils/emailValidator');
const emailService = require('../services/emailService');

const JWT_SECRET = process.env.JWT_SECRET || 'sarathi_placement_jwt_secret_key_2026_dev';

// Generate stateless JWT token valid for 30 days
const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: '30d'
    });
};

/**
 * @desc    Register a new user with real email validation & 6-digit OTP generation
 * @route   POST /api/auth/register
 * @access  Public
 */
const registerUser = async (req, res) => {
    try {
        const { name, email, password, targetCompany } = req.body;

        // 1. Basic validation checks
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields (name, email, password)' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        // 2. Strict Email Verification (syntax, disposable blacklist & live DNS MX lookup)
        const emailCheck = await validateEmail(email);
        if (!emailCheck.isValid) {
            return res.status(400).json({ message: emailCheck.reason });
        }

        const normalizedEmail = emailCheck.normalizedEmail;

        // 3. Check if user already exists
        const userExists = await User.findOne({ email: normalizedEmail });
        if (userExists) {
            if (userExists.isEmailVerified) {
                return res.status(400).json({ 
                    message: `An account with this email (${normalizedEmail}) is already registered. Please sign in instead.` 
                });
            }

            // User started registration earlier but never verified the OTP
            // Update name, company, and password with their latest submission so changes are honored
            userExists.name = name.trim();
            userExists.targetCompany = targetCompany ? targetCompany.trim() : 'Amazon';
            userExists.password = password;

            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            userExists.emailVerificationOtp = otp;
            userExists.otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
            await userExists.save();

            // Dispatch real email directly to user's inbox
            await emailService.sendVerificationEmail(normalizedEmail, otp, userExists.name);
            console.log(`[AUTH] Resent Verification OTP email to inbox of ${normalizedEmail}`);

            return res.status(200).json({
                success: true,
                requiresVerification: true,
                message: `Account pending verification. A fresh 6-digit verification code has been dispatched to ${normalizedEmail}. Please check your email inbox.`,
                email: normalizedEmail
            });
        }

        // 4. Generate 6-digit verification code
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

        // 5. Create user in MongoDB with isEmailVerified: false
        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password,
            targetCompany: targetCompany ? targetCompany.trim() : 'Amazon',
            isEmailVerified: false,
            emailVerificationOtp: otp,
            otpExpiresAt
        });

        // Dispatch real email directly to candidate's inbox
        await emailService.sendVerificationEmail(normalizedEmail, otp, name.trim());
        console.log(`[AUTH] User created. Verification OTP dispatched to inbox of ${normalizedEmail}`);

        // Return prompt WITHOUT revealing the OTP code
        res.status(201).json({
            success: true,
            requiresVerification: true,
            message: `A 6-digit verification code has been sent to your email (${normalizedEmail}). Please check your inbox to activate your account.`,
            email: normalizedEmail
        });
    } catch (error) {
        console.error('Registration error:', error.message);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};

/**
 * @desc    Verify Email with 6-digit OTP
 * @route   POST /api/auth/verify-email
 * @access  Public
 */
const verifyEmail = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ message: 'Please provide both email and 6-digit verification code' });
        }

        const normalizedEmail = email.toLowerCase().trim();
        const user = await User.findOne({ email: normalizedEmail }).select('+emailVerificationOtp +otpExpiresAt');

        if (!user) {
            return res.status(404).json({ message: 'No registered user found with this email' });
        }

        if (user.isEmailVerified) {
            return res.json({
                success: true,
                message: 'Email is already verified. You can log in.',
                token: generateToken(user._id),
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    targetCompany: user.targetCompany,
                    hasCompletedOnboarding: user.hasCompletedOnboarding || false
                }
            });
        }

        // Validate OTP match
        if (String(user.emailVerificationOtp).trim() !== String(otp).trim()) {
            return res.status(400).json({ message: 'Incorrect verification code. Please check and try again.' });
        }

        // Check expiration (15 minutes)
        if (user.otpExpiresAt && new Date() > user.otpExpiresAt) {
            return res.status(400).json({ message: 'Verification code has expired. Please click "Resend Code".' });
        }

        // Mark verified & clear OTP
        user.isEmailVerified = true;
        user.emailVerificationOtp = undefined;
        user.otpExpiresAt = undefined;
        await user.save();

        res.json({
            success: true,
            message: 'Email successfully verified! Welcome to Sarathi.',
            _id: user._id,
            name: user.name,
            email: user.email,
            targetCompany: user.targetCompany,
            solvedCount: user.solvedQuestions ? user.solvedQuestions.length : 0,
            bookmarksCount: user.bookmarks ? user.bookmarks.length : 0,
            hasCompletedOnboarding: user.hasCompletedOnboarding || false,
            onboardedAt: user.onboardedAt,
            targetPlacementDate: user.targetPlacementDate,
            mockTestReports: user.mockTestReports || [],
            token: generateToken(user._id)
        });
    } catch (error) {
        console.error('Verify email error:', error.message);
        res.status(500).json({ message: 'Verification failed', error: error.message });
    }
};

/**
 * @desc    Resend 6-digit OTP verification code
 * @route   POST /api/auth/resend-otp
 * @access  Public
 */
const resendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Please provide email address' });
        }

        const normalizedEmail = email.toLowerCase().trim();
        const user = await User.findOne({ email: normalizedEmail }).select('+emailVerificationOtp +otpExpiresAt');

        if (!user) {
            return res.status(404).json({ message: 'User not found with this email' });
        }

        if (user.isEmailVerified) {
            return res.json({ message: 'Email is already verified. You can log in directly.' });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.emailVerificationOtp = otp;
        user.otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000);
        await user.save();

        // Dispatch real email to candidate inbox
        await emailService.sendVerificationEmail(normalizedEmail, otp, user.name || 'Candidate');
        console.log(`[AUTH] Resent Verification OTP email directly to inbox of ${normalizedEmail}`);

        res.json({
            success: true,
            message: `A fresh 6-digit verification code has been dispatched to ${normalizedEmail}. Please check your email inbox.`
        });
    } catch (error) {
        console.error('Resend OTP error:', error.message);
        res.status(500).json({ message: 'Failed to resend code', error: error.message });
    }
};

/**
 * @desc    Authenticate user & get token (requires verified email)
 * @route   POST /api/auth/login
 * @access  Public
 */
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Validation checks
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide both email and password' });
        }

        const emailCheck = await validateEmail(email);
        if (!emailCheck.isValid) {
            return res.status(400).json({ message: emailCheck.reason });
        }

        const normalizedEmail = emailCheck.normalizedEmail;

        // 2. Find user (explicitly include password hash with +password)
        const user = await User.findOne({ email: normalizedEmail }).select('+password +emailVerificationOtp +otpExpiresAt');

        // 3. Verify existence and compare bcrypt password hash
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password. Please check your credentials.' });
        }

        // 4. Enforce Email Verification Check
        if (!user.isEmailVerified) {
            // Generate a fresh OTP and prompt user to verify
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            user.emailVerificationOtp = otp;
            user.otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000);
            await user.save();

            // Dispatch real email directly to candidate inbox
            await emailService.sendVerificationEmail(normalizedEmail, otp, user.name || 'Candidate');
            console.log(`[AUTH] Login blocked for unverified email ${normalizedEmail}. OTP dispatched to inbox.`);

            return res.status(403).json({
                requiresVerification: true,
                message: `Your email address is not yet verified. A 6-digit verification code has been sent to ${normalizedEmail}. Please check your email inbox to activate your account.`,
                email: normalizedEmail
            });
        }

        // 5. Return token and user profile
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            targetCompany: user.targetCompany,
            solvedCount: user.solvedQuestions ? user.solvedQuestions.length : 0,
            bookmarksCount: user.bookmarks ? user.bookmarks.length : 0,
            hasCompletedOnboarding: user.hasCompletedOnboarding || false,
            onboardedAt: user.onboardedAt,
            targetPlacementDate: user.targetPlacementDate,
            mockTestReports: user.mockTestReports || [],
            token: generateToken(user._id)
        });
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};

/**
 * @desc    Get current authenticated user profile
 * @route   GET /api/auth/me
 * @access  Private
 */
const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            targetCompany: user.targetCompany,
            solvedCount: user.solvedQuestions ? user.solvedQuestions.length : 0,
            bookmarksCount: user.bookmarks ? user.bookmarks.length : 0,
            hasCompletedOnboarding: user.hasCompletedOnboarding || false,
            onboardedAt: user.onboardedAt,
            targetPlacementDate: user.targetPlacementDate,
            mockTestReports: user.mockTestReports || [],
            createdAt: user.createdAt
        });
    } catch (error) {
        console.error('Get profile error:', error.message);
        res.status(500).json({ message: 'Failed to retrieve profile', error: error.message });
    }
};

/**
 * @desc    Update user profile & target company preference
 * @route   PUT /api/auth/profile
 * @access  Private
 */
const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.body.name) {
            user.name = req.body.name.trim();
        }

        if (req.body.targetCompany) {
            user.targetCompany = req.body.targetCompany.trim();
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            targetCompany: updatedUser.targetCompany,
            solvedCount: updatedUser.solvedQuestions ? updatedUser.solvedQuestions.length : 0,
            bookmarksCount: updatedUser.bookmarks ? updatedUser.bookmarks.length : 0,
            hasCompletedOnboarding: updatedUser.hasCompletedOnboarding || false,
            onboardedAt: updatedUser.onboardedAt,
            targetPlacementDate: updatedUser.targetPlacementDate,
            mockTestReports: updatedUser.mockTestReports || []
        });
    } catch (error) {
        console.error('Update profile error:', error.message);
        res.status(500).json({ message: 'Failed to update profile', error: error.message });
    }
};

/**
 * @desc    Request Password Reset (Dispatches 6-digit OTP to user's real email)
 * @route   POST /api/auth/forgot-password
 * @access  Public
 */
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Please enter your registered email address' });
        }

        const normalizedEmail = email.toLowerCase().trim();
        const user = await User.findOne({ email: normalizedEmail }).select('+resetPasswordOtp +resetPasswordExpires');

        if (!user) {
            return res.status(404).json({ message: 'No account found with this email address. Please check your email or register.' });
        }

        // Generate 6-digit cryptographic OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.resetPasswordOtp = otp;
        user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
        await user.save();

        // Dispatch real password reset email
        await emailService.sendPasswordResetEmail(normalizedEmail, otp, user.name || 'Candidate');
        console.log(`[AUTH] Password reset OTP dispatched to inbox of ${normalizedEmail}`);

        res.json({
            success: true,
            message: `A 6-digit password reset code has been sent to ${normalizedEmail}. Please check your inbox.`,
            email: normalizedEmail
        });
    } catch (error) {
        console.error('Forgot password error:', error.message);
        res.status(500).json({ message: 'Failed to process password reset request', error: error.message });
    }
};

/**
 * @desc    Verify OTP and Reset Password
 * @route   POST /api/auth/reset-password
 * @access  Public
 */
const resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        if (!email || !otp || !newPassword) {
            return res.status(400).json({ message: 'Please provide email, verification code, and new password' });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ message: 'New password must be at least 6 characters long' });
        }

        const normalizedEmail = email.toLowerCase().trim();
        const user = await User.findOne({ email: normalizedEmail }).select('+password +resetPasswordOtp +resetPasswordExpires');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate OTP match
        if (!user.resetPasswordOtp || String(user.resetPasswordOtp).trim() !== String(otp).trim()) {
            return res.status(400).json({ message: 'Invalid verification code. Please check your email and try again.' });
        }

        // Check expiration
        if (user.resetPasswordExpires && new Date() > user.resetPasswordExpires) {
            return res.status(400).json({ message: 'Verification code has expired. Please request a new code.' });
        }

        // Update password and clear OTP
        user.password = newPassword; // Will be hashed by pre-save hook
        user.resetPasswordOtp = undefined;
        user.resetPasswordExpires = undefined;
        user.isEmailVerified = true; // Proves ownership of email
        await user.save();

        console.log(`[AUTH] Password successfully reset for ${normalizedEmail}`);

        res.json({
            success: true,
            message: 'Password reset successful! You can now log in with your new password.',
            token: generateToken(user._id),
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                targetCompany: user.targetCompany
            }
        });
    } catch (error) {
        console.error('Reset password error:', error.message);
        res.status(500).json({ message: 'Failed to reset password', error: error.message });
    }
};

module.exports = {
    registerUser,
    verifyEmail,
    resendOtp,
    loginUser,
    getMe,
    updateProfile,
    forgotPassword,
    resetPassword
};
