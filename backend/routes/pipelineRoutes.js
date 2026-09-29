const express = require('express');
const router = express.Router();
const pipelineSyncService = require('../services/pipelineSyncService');

/**
 * @desc    Ingest / Sync new hiring cycle batch for a specific company
 * @route   POST /api/pipeline/sync-company
 * @access  Public (API / Scraper Pipeline)
 */
router.post('/sync-company', async (req, res) => {
    try {
        const { company, questions = [], cycleYear } = req.body;
        if (!company) {
            return res.status(400).json({ message: 'Target enterprise name is required.' });
        }

        const result = await pipelineSyncService.syncCompanyHiringCycle(
            company,
            questions,
            cycleYear ? Number(cycleYear) : undefined
        );

        res.json({
            success: true,
            message: `Hiring cycle sync completed for ${company}. Replaced: ${result.replaced}, Inserted: ${result.inserted}, Pruned: ${result.prunedExpired}`,
            result
        });
    } catch (err) {
        console.error('Pipeline sync error:', err);
        res.status(500).json({ message: 'Failed to sync company hiring cycle', error: err.message });
    }
});

/**
 * @desc    Enforce 2-year rolling retention policy (prune questions older than 2 years)
 * @route   POST /api/pipeline/enforce-retention
 * @access  Public (API / Cron)
 */
router.post('/enforce-retention', async (req, res) => {
    try {
        const { company } = req.body;
        const result = await pipelineSyncService.enforceRollingRetention(company || null);

        res.json({
            success: true,
            message: `Rolling retention enforced. Pruned ${result.prunedCount} questions older than ${result.minRetainedYear}.`,
            result
        });
    } catch (err) {
        console.error('Retention enforcement error:', err);
        res.status(500).json({ message: 'Failed to enforce retention', error: err.message });
    }
});

/**
 * @desc    Audit active questions distribution by enterprise and year
 * @route   GET /api/pipeline/retention-audit
 * @access  Public
 */
router.get('/retention-audit', async (req, res) => {
    try {
        const audit = await pipelineSyncService.getRetentionAudit();
        res.json({ success: true, audit });
    } catch (err) {
        console.error('Retention audit error:', err);
        res.status(500).json({ message: 'Failed to get retention audit', error: err.message });
    }
});

/**
 * @desc    Get live status of automated background pipeline scheduler
 * @route   GET /api/pipeline/scheduler-status
 * @access  Public
 */
router.get('/scheduler-status', (req, res) => {
    const status = pipelineSyncService.getSchedulerStatus();
    res.json({ success: true, status });
});

/**
 * @desc    Manually trigger instant automated pipeline sync cycle
 * @route   POST /api/pipeline/trigger-now
 * @access  Public (Admin)
 */
router.post('/trigger-now', async (req, res) => {
    try {
        const syncResult = await pipelineSyncService.runScheduledSync();
        res.json({
            success: true,
            message: 'Manual pipeline sync executed successfully',
            syncResult
        });
    } catch (err) {
        console.error('Manual trigger error:', err);
        res.status(500).json({ message: 'Failed to run manual sync', error: err.message });
    }
});

module.exports = router;
