const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'sarathi_placement_jwt_secret_key_2026_dev';

// Generate stateless JWT token valid for 30 days
const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: '30d'
    });
};

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
const registerUser = async (req, res) => {
    try {
        const { name, email, password, targetCompany } = req.body;

        // 1. Validation checks
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields (name, email, password)' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        const normalizedEmail = email.toLowerCase().trim();

        // 2. Check if user already exists
        const userExists = await User.findOne({ email: normalizedEmail });
        if (userExists) {
            return res.status(400).json({ message: 'An account with this email already exists. Please sign in.' });
        }

        // 3. Create user (password is automatically hashed by Mongoose pre-save hook)
        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password,
            targetCompany: targetCompany ? targetCompany.trim() : 'Amazon'
        });

        // 4. Return token and user profile
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            targetCompany: user.targetCompany,
            solvedCount: 0,
            bookmarksCount: 0,
            token: generateToken(user._id)
        });
    } catch (error) {
        console.error('Registration error:', error.message);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};

/**
 * @desc    Authenticate user & get token
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

        const normalizedEmail = email.toLowerCase().trim();

        // 2. Find user (explicitly include password hash with +password)
        const user = await User.findOne({ email: normalizedEmail }).select('+password');

        // 3. Verify existence and compare bcrypt password hash
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password. Please check your credentials.' });
        }

        // 4. Return token and user profile
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            targetCompany: user.targetCompany,
            solvedCount: user.solvedQuestions ? user.solvedQuestions.length : 0,
            bookmarksCount: user.bookmarks ? user.bookmarks.length : 0,
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
            bookmarksCount: updatedUser.bookmarks ? updatedUser.bookmarks.length : 0
        });
    } catch (error) {
        console.error('Update profile error:', error.message);
        res.status(500).json({ message: 'Failed to update profile', error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
    updateProfile
};
