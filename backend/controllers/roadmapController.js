const Question = require('../models/Question');
const Company = require('../models/Company');

const COMPANY_ROUNDS_CONFIG = require('../config/companyRoundsConfig');

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getCompanyRoadmap = async (req, res) => {
    try {
        const companyName = req.params.company.trim();
        const compRegex = new RegExp(`^${escapeRegex(companyName)}$`, 'i');

        const companyDoc = await Company.findOne({ name: compRegex });
        const allQuestions = await Question.find({ company: compRegex }).sort({ difficulty: 1, title: 1 });

        if (!allQuestions || allQuestions.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No questions found for company: ${companyName}`
            });
        }

        const canonicalName = companyDoc ? companyDoc.name : companyName;
        const companyType = companyDoc ? companyDoc.type : (allQuestions[0].companyType || 'service');

        // Look up company-specific authentic round configuration
        let config = COMPANY_ROUNDS_CONFIG[canonicalName];
        if (!config) {
            const matchedKey = Object.keys(COMPANY_ROUNDS_CONFIG).find(k => k.toLowerCase() === canonicalName.toLowerCase());
            if (matchedKey) config = COMPANY_ROUNDS_CONFIG[matchedKey];
        }

        if (!config) {
            return res.status(404).json({
                success: false,
                message: `No recruitment pipeline configuration found for company: ${canonicalName}`
            });
        }

        // Partition the 100 questions into the company's authentic rounds without dropping any questions
        const assignedQuestions = new Set();
        const milestoneRounds = [];

        // Track questions categorized
        const remainingPool = [...allQuestions];

        config.rounds.forEach((roundDef, idx) => {
            const isLastRound = idx === config.rounds.length - 1;
            let matchedQuestions = [];

            if (isLastRound) {
                // Any questions not yet assigned fall into the final round
                matchedQuestions = remainingPool.filter(q => !assignedQuestions.has(q._id.toString()));
            } else {
                matchedQuestions = remainingPool.filter(q => {
                    if (assignedQuestions.has(q._id.toString())) return false;
                    return roundDef.filter(q);
                });
            }

            matchedQuestions.forEach(q => assignedQuestions.add(q._id.toString()));

            milestoneRounds.push({
                roundNumber: roundDef.roundNumber,
                id: roundDef.id,
                name: roundDef.name,
                subtitle: roundDef.subtitle,
                estimatedTime: roundDef.estimatedTime,
                focusPillars: roundDef.focusPillars,
                questionsCount: matchedQuestions.length,
                questions: matchedQuestions.map(q => ({
                    ...q.toObject(),
                    roundStageName: roundDef.name
                }))
            });
        });

        // Ensure any leftovers are safely placed in round with matching category
        if (assignedQuestions.size < allQuestions.length) {
            allQuestions.forEach(q => {
                if (!assignedQuestions.has(q._id.toString())) {
                    // Place in round 3 (Technical) or round 4 (HR)
                    const targetRound = q.category === 'Interview' ? milestoneRounds[milestoneRounds.length - 1] : milestoneRounds[milestoneRounds.length - 2];
                    targetRound.questions.push(q.toObject());
                    targetRound.questionsCount = targetRound.questions.length;
                    assignedQuestions.add(q._id.toString());
                }
            });
        }

        const dsaQuestions = allQuestions.filter(q => q.category === 'DSA');
        const aptitudeQuestions = allQuestions.filter(q => q.category === 'Aptitude');
        const interviewQuestions = allQuestions.filter(q => q.category === 'Interview');
        const novelDSA = dsaQuestions.filter(q => q.isNovel || !q.matchedProblems || q.matchedProblems.length === 0);
        const canonicalDSA = dsaQuestions.filter(q => !q.isNovel && q.matchedProblems && q.matchedProblems.length > 0);

        const stats = {
            totalQuestions: allQuestions.length,
            dsaCount: dsaQuestions.length,
            aptitudeCount: aptitudeQuestions.length,
            interviewCount: interviewQuestions.length,
            novelCount: novelDSA.length,
            canonicalCount: canonicalDSA.length,
            difficulty: {
                easy: allQuestions.filter(q => q.difficulty === 'Easy').length,
                medium: allQuestions.filter(q => q.difficulty === 'Medium').length,
                hard: allQuestions.filter(q => q.difficulty === 'Hard').length
            }
        };

        // Create recruitment pipeline stages for the blueprint card
        const recruitmentPipeline = milestoneRounds.map(r => ({
            step: `Round ${r.roundNumber}`,
            name: r.name.replace(/^Round \d+:\s*/i, ''),
            desc: r.subtitle
        }));

        return res.json({
            success: true,
            company: {
                name: canonicalName,
                type: companyType,
                tier: config.tier,
                focusAreas: config.focusAreas,
                hiringProcess: recruitmentPipeline
            },
            stats,
            rounds: milestoneRounds,
            totalRounds: milestoneRounds.length
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to generate company roadmap',
            error: error.message
        });
    }
};

module.exports = {
    getCompanyRoadmap
};