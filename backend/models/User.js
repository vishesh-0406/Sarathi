const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
        maxlength: [60, 'Name cannot exceed 60 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false // Exclude from queries by default to prevent accidental leakage
    },
    targetCompany: {
        type: String,
        default: 'Amazon',
        trim: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    emailVerificationOtp: {
        type: String,
        select: false
    },
    otpExpiresAt: {
        type: Date,
        select: false
    },
    resetPasswordOtp: {
        type: String,
        select: false
    },
    resetPasswordExpires: {
        type: Date,
        select: false
    },
    targetPlacementDate: {
        type: Date,
        default: () => new Date(Date.now() + 45 * 24 * 60 * 60 * 1000)
    },
    // DSA / Coding Solved Questions
    solvedQuestions: [{
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true
        },
        status: {
            type: String,
            enum: ['Accepted', 'Attempted'],
            default: 'Accepted'
        },
        language: {
            type: String,
            default: 'python'
        },
        solvedAt: {
            type: Date,
            default: Date.now
        }
    }],
    // Bookmarked Questions for Quick Revision
    bookmarks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    hasCompletedOnboarding: {
        type: Boolean,
        default: false
    },
    onboardedAt: {
        type: Date,
        default: Date.now
    },
    // Aptitude & MCQ Attempts
    quizAttempts: [{
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true
        },
        selectedOption: String,
        isCorrect: Boolean,
        attemptedAt: {
            type: Date,
            default: Date.now
        }
    }],
    // Mock Test Assessments & Diagnostic Reports
    mockTestReports: [{
        company: { type: String, required: true },
        roundNumber: { type: Number, default: 1 },
        roundTitle: { type: String, default: 'Mock Assessment' },
        isComprehensive: { type: Boolean, default: false },
        score: { type: Number, default: 0 },
        passed: { type: Boolean, default: false },
        totalQuestions: { type: Number, default: 0 },
        correctCount: { type: Number, default: 0 },
        timeSpentSeconds: { type: Number, default: 0 },
        strongZones: [{ type: String }],
        weakZones: [{ type: String }],
        verdict: { type: String, default: 'Moderate' },
        remediationQuestionIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }],
        completedAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

// Pre-save hook: Hash password before saving if modified
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare entered password with hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
