const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    getTrackerDashboard,
    toggleBookmark,
    recordQuizAttempt,
    updateTargetCompany
} = require('../controllers/userProgressController');

// All user progress endpoints require valid JWT authentication
router.use(protect);

router.get('/tracker', getTrackerDashboard);
router.post('/bookmark', toggleBookmark);
router.post('/quiz-attempt', recordQuizAttempt);
router.put('/target-company', updateTargetCompany);

module.exports = router;
