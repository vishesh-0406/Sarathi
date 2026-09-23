const express = require('express');
const router = express.Router();
const { runCode, runAllCode, submitCode } = require('../controllers/codeController');
const { protectOptional } = require('../middleware/authMiddleware');

router.post('/run', runCode);
router.post('/run-all', runAllCode);
router.post('/submit', protectOptional, submitCode);

module.exports = router;

