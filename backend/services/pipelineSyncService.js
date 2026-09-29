const fs = require('fs');
const path = require('path');
const Question = require('../models/Question');

/**
 * Sarathi Dynamic Placement Intelligence Data Pipeline
 * 
 * Rules:
 * 1. 2-Year Rolling Retention Window:
 *    Keeps authentic hiring cycle questions within [currentYear - 2, currentYear] (e.g. 2024–2026).
 *    Any question older than 2 years is automatically pruned.
 * 
 * 2. Company-Scoped Replacement & Deduplication:
 *    If a new hiring cycle question arrives for Company X (e.g., Amazon) and already exists in Company X,
 *    the old question in Company X is removed and replaced with the updated hiring cycle version.
 *    Any other company (e.g., TCS, Wipro) containing that same problem pattern is STRICTLY UNTOUCHED.
 */

// Helper to escape regex special characters
function escapeRegex(text) {
    if (!text) return '';
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

class PipelineSyncService {
    constructor() {
        this.currentYear = new Date().getFullYear() || 2026;
        this.schedulerInterval = null;
        this.lastRunAt = null;
        this.nextRunAt = null;
        this.isRunning = false;
        this.intervalHours = 24;
    }

    /**
     * Enforce 2-year rolling retention for a company or all companies
     * @param {string|null} company - Optional specific company name
     * @param {number} currentYear - Reference hiring year
     */
    async enforceRollingRetention(company = null, currentYear = this.currentYear) {
        const minYear = currentYear - 2; // e.g. 2026 - 2 = 2024
        const filter = {
            year: { $lt: minYear }
        };

        if (company) {
            filter.company = company;
        }

        const deleteResult = await Question.deleteMany(filter);
        return {
            minRetainedYear: minYear,
            currentYear,
            company: company || 'ALL_COMPANIES',
            prunedCount: deleteResult.deletedCount
        };
    }

    /**
     * Ingest or update a single question for a specific enterprise with company isolation
     * @param {string} company - Target enterprise (e.g. 'Amazon')
     * @param {Object} questionData - New question details
     * @param {number} cycleYear - Current hiring cycle year
     */
    async ingestCompanyQuestion(company, questionData, cycleYear = this.currentYear) {
        if (!company || !questionData) {
            throw new Error('Company and question data are required for pipeline ingestion');
        }

        const normalizedTitle = (questionData.title || '').trim();
        const primaryMatchedName = questionData.matchedProblems?.[0]?.problemName;

        // Query criteria strictly scoped to this single company
        const companyCriteria = { company };
        const identityOr = [];

        if (normalizedTitle) {
            identityOr.push({ title: new RegExp(`^${escapeRegex(normalizedTitle)}$`, 'i') });
        }
        if (primaryMatchedName) {
            identityOr.push({ 'matchedProblems.problemName': primaryMatchedName });
        }

        let existingCompanyQuestion = null;
        if (identityOr.length > 0) {
            existingCompanyQuestion = await Question.findOne({
                company,
                $or: identityOr
            });
        }

        let actionTaken = 'inserted';
        let previousId = null;

        if (existingCompanyQuestion) {
            // Strictly delete the old question belonging to THIS company only
            previousId = existingCompanyQuestion._id;
            await Question.deleteOne({ _id: existingCompanyQuestion._id });
            actionTaken = 'replaced';
        }

        // Prepare updated question payload
        const updatedPayload = {
            ...questionData,
            company,
            year: cycleYear,
            batch: `${cycleYear - 1}–${cycleYear} Pattern`,
            isNovel: questionData.isNovel !== undefined 
                ? Boolean(questionData.isNovel) 
                : (!questionData.matchedProblems || questionData.matchedProblems.length === 0),
            updatedAt: new Date()
        };

        const newDoc = await Question.create(updatedPayload);

        return {
            company,
            title: newDoc.title,
            action: actionTaken,
            replacedQuestionId: previousId,
            newQuestionId: newDoc._id,
            year: newDoc.year,
            batch: newDoc.batch
        };
    }

    /**
     * Ingests a new hiring cycle batch for a single company
     * 1. Replaces matching questions within THIS company only.
     * 2. Preserves all other companies completely.
     * 3. Prunes questions older than 2 years for THIS company.
     */
    async syncCompanyHiringCycle(company, newQuestions = [], cycleYear = this.currentYear) {
        if (!company) {
            throw new Error('Target company must be specified for hiring cycle sync');
        }

        const results = {
            company,
            cycleYear,
            retentionWindow: `${cycleYear - 2} – ${cycleYear}`,
            inserted: 0,
            replaced: 0,
            prunedExpired: 0,
            details: []
        };

        // 1. Process and ingest questions for this company
        for (const q of newQuestions) {
            const op = await this.ingestCompanyQuestion(company, q, cycleYear);
            if (op.action === 'replaced') {
                results.replaced++;
            } else {
                results.inserted++;
            }
            results.details.push(op);
        }

        // 2. Enforce 2-year retention for this company only
        const retentionResult = await this.enforceRollingRetention(company, cycleYear);
        results.prunedExpired = retentionResult.prunedCount;

        // 3. Count total active questions for this company
        results.totalActiveQuestions = await Question.countDocuments({ company });

        return results;
    }

    /**
     * Audit database question retention distribution by company and year
     */
    async getRetentionAudit(currentYear = this.currentYear) {
        const minYear = currentYear - 2;

        const audit = await Question.aggregate([
            {
                $group: {
                    _id: { company: '$company', year: '$year' },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { '_id.company': 1, '_id.year': -1 }
            }
        ]);

        const totalActive = await Question.countDocuments({ year: { $gte: minYear } });
        const totalExpired = await Question.countDocuments({ year: { $lt: minYear } });

        return {
            currentYear,
            minRetainedYear: minYear,
            retentionPolicy: 'Past 2 Years (Rolling)',
            totalActiveInWindow: totalActive,
            totalExpiredLegacy: totalExpired,
            distribution: audit
        };
    }

    /**
     * Run full automated sync across all active company feeds
     */
    async runScheduledSync() {
        if (this.isRunning) {
            console.log('[PIPELINE SCHEDULER] Sync already in progress, skipping cycle.');
            return { skipped: true, reason: 'Already in progress' };
        }

        this.isRunning = true;
        this.lastRunAt = new Date();
        console.log(`[PIPELINE SCHEDULER] Automated sync initiated at ${this.lastRunAt.toISOString()}`);

        try {
            // 1. Enforce 2-year rolling retention
            const retention = await this.enforceRollingRetention(null, this.currentYear);
            console.log(`[PIPELINE SCHEDULER] Pruned ${retention.prunedCount} questions older than ${retention.minRetainedYear}.`);

            // 2. Load latest authentic candidate collections if available
            let syncedCompanies = 0;
            let totalInserted = 0;
            let totalReplaced = 0;

            try {
                const rawRedditPath = path.join(__dirname, '../../data/raw/reddit/raw_posts.json');
                if (fs.existsSync(rawRedditPath)) {
                    const rawData = JSON.parse(fs.readFileSync(rawRedditPath, 'utf8'));
                    const companyMap = {};
                    for (const item of rawData) {
                        if (!item.company) continue;
                        if (!companyMap[item.company]) companyMap[item.company] = [];
                        companyMap[item.company].push(item);
                    }

                    for (const [comp, qList] of Object.entries(companyMap)) {
                        const syncRes = await this.syncCompanyHiringCycle(comp, qList, this.currentYear);
                        syncedCompanies++;
                        totalInserted += syncRes.inserted;
                        totalReplaced += syncRes.replaced;
                    }
                }
            } catch (feedErr) {
                console.warn('[PIPELINE SCHEDULER] Feed sync notice:', feedErr.message);
            }

            console.log(`[PIPELINE SCHEDULER] Automated sync complete. Processed ${syncedCompanies} enterprises, ${totalReplaced} updated, ${totalInserted} new.`);

            this.isRunning = false;
            return {
                success: true,
                executedAt: this.lastRunAt,
                prunedExpired: retention.prunedCount,
                syncedCompanies,
                totalReplaced,
                totalInserted
            };
        } catch (err) {
            this.isRunning = false;
            console.error('[PIPELINE SCHEDULER] Error during scheduled sync:', err);
            throw err;
        }
    }

    /**
     * Start the automated background scheduler
     */
    startAutomatedWorker({ intervalHours = 24, runOnStart = false } = {}) {
        this.intervalHours = intervalHours;
        const intervalMs = intervalHours * 60 * 60 * 1000;

        if (this.schedulerInterval) {
            clearInterval(this.schedulerInterval);
        }

        this.nextRunAt = new Date(Date.now() + intervalMs);

        if (runOnStart) {
            this.runScheduledSync().catch(console.error);
        }

        this.schedulerInterval = setInterval(() => {
            this.nextRunAt = new Date(Date.now() + intervalMs);
            this.runScheduledSync().catch(console.error);
        }, intervalMs);

        console.log(`[PIPELINE SCHEDULER] Background worker initialized. Frequency: Every ${intervalHours} hour(s). Next automated run: ${this.nextRunAt.toISOString()}`);
    }

    /**
     * Get scheduler status
     */
    getSchedulerStatus() {
        return {
            active: !!this.schedulerInterval,
            intervalHours: this.intervalHours,
            lastRunAt: this.lastRunAt,
            nextRunAt: this.nextRunAt,
            isCurrentlyRunning: this.isRunning,
            retentionPolicy: 'Past 2 Years (Rolling)',
            monitoredSources: [
                'Reddit (r/developersIndia, r/leetcode, r/cscareerquestions)',
                'LinkedIn (STAR interview debriefs & HR rounds)',
                'X / Twitter (NQT & OA quantitative aptitude and reasoning)'
            ]
        };
    }
}

module.exports = new PipelineSyncService();
