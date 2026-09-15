const express = require('express');
const router = express.Router();
const { runCode, runAllCode, submitCode } = require('../controllers/codeController');

router.post('/run', runCode);
router.post('/run-all', runAllCode);
router.post('/submit', submitCode);

module.exports = router;
