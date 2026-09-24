const User = require('../models/User');
const Question = require('../models/Question');
const { computeReadinessMetrics } = require('../services/aiReadinessService');

/**
 * @desc    Get AI Progress Tracker & Placement Readiness Dashboard
 * @route   GET /api/user/tracker
 * @access  Private
 */
const getTrackerDashboard = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const metrics = await computeReadinessMetrics(user);
        res.json({
            success: true,
            tracker: metrics
        });
    } catch (error) {
        console.error('Error fetching tracker dashboard:', error.message);
        res.status(500).json({ message: 'Failed to generate readiness metrics', error: error.message });
    }
};

/**
 * @desc    Toggle bookmark state for a question
 * @route   POST /api/user/bookmark
 * @access  Private
 */
const toggleBookmark = async (req, res) => {
    try {
        const { questionId } = req.body;
        if (!questionId) {
            return res.status(400).json({ message: 'questionId is required' });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const existingIdx = user.bookmarks.findIndex(
            b => b.toString() === questionId.toString()
        );

        let bookmarked = false;
        if (existingIdx > -1) {
            user.bookmarks.splice(existingIdx, 1);
            bookmarked = false;
        } else {
            user.bookmarks.push(questionId);
            bookmarked = true;
        }

        await user.save();

        res.json({
            success: true,
            bookmarked,
            bookmarksCount: user.bookmarks.length,
            message: bookmarked ? 'Question bookmarked for revision' : 'Bookmark removed'
        });
    } catch (error) {
        console.error('Toggle bookmark error:', error.message);
        res.status(500).json({ message: 'Failed to toggle bookmark', error: error.message });
    }
};

/**
 * @desc    Record an Aptitude / MCQ quiz attempt
 * @route   POST /api/user/quiz-attempt
 * @access  Private
 */
const recordQuizAttempt = async (req, res) => {
    try {
        const { questionId, selectedOption, isCorrect } = req.body;
        if (!questionId) {
            return res.status(400).json({ message: 'questionId is required' });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const existingIdx = user.quizAttempts.findIndex(
            qa => qa.questionId && qa.questionId.toString() === questionId.toString()
        );

        if (existingIdx > -1) {
            user.quizAttempts[existingIdx].selectedOption = selectedOption;
            user.quizAttempts[existingIdx].isCorrect = Boolean(isCorrect);
            user.quizAttempts[existingIdx].attemptedAt = new Date();
        } else {
            user.quizAttempts.push({
                questionId,
                selectedOption,
                isCorrect: Boolean(isCorrect),
                attemptedAt: new Date()
            });
        }

        await user.save();

        res.json({
            success: true,
            message: 'Quiz attempt recorded successfully'
        });
    } catch (error) {
        console.error('Record quiz attempt error:', error.message);
        res.status(500).json({ message: 'Failed to record quiz attempt', error: error.message });
    }
};

/**
 * @desc    Update target company and recalculate readiness
 * @route   PUT /api/user/target-company
 * @access  Private
 */
const updateTargetCompany = async (req, res) => {
    try {
        const { targetCompany } = req.body;
        if (!targetCompany) {
            return res.status(400).json({ message: 'targetCompany is required' });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.targetCompany = targetCompany.trim();
        await user.save();

        const updatedMetrics = await computeReadinessMetrics(user);

        res.json({
            success: true,
            targetCompany: user.targetCompany,
            tracker: updatedMetrics
        });
    } catch (error) {
        console.error('Update target company error:', error.message);
        res.status(500).json({ message: 'Failed to update target company', error: error.message });
    }
};

/**
 * @desc    Update target placement drive date and recalculate countdown
 * @route   PUT /api/user/target-date
 * @access  Private
 */
const updateTargetPlacementDate = async (req, res) => {
    try {
        const { targetDate } = req.body;
        if (!targetDate) {
            return res.status(400).json({ message: 'targetDate is required' });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.targetPlacementDate = new Date(targetDate);
        await user.save();

        const updatedMetrics = await computeReadinessMetrics(user);

        res.json({
            success: true,
            targetPlacementDate: user.targetPlacementDate,
            tracker: updatedMetrics
        });
    } catch (error) {
        console.error('Update target date error:', error.message);
        res.status(500).json({ message: 'Failed to update target placement date', error: error.message });
    }
};

module.exports = {
    getTrackerDashboard,
    toggleBookmark,
    recordQuizAttempt,
    updateTargetCompany,
    updateTargetPlacementDate
};
