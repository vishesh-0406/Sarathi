const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    startMockTest,
    submitMockTest,
    getMockTestReports,
    completeOnboarding
} = require('../controllers/mockTestController');

router.use(protect);

router.post('/start', startMockTest);
router.post('/submit', submitMockTest);
router.get('/reports', getMockTestReports);
router.post('/onboarding', completeOnboarding);

module.exports = router;
