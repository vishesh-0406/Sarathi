const User = require('../models/User');
const Question = require('../models/Question');
const COMPANY_ROUNDS_CONFIG = require('../config/companyRoundsConfig');

const codeExecutionService = require('../services/codeExecutionService');
const { getHiddenTestCases, detectHardcodedSolution } = require('../services/hiddenTestCasesService');

/**
 * Helper to normalize option letters (A, B, C, D)
 */
function normalizeLetter(opt) {
    if (!opt) return '';
    const trimmed = String(opt).trim();
    const match = trimmed.match(/^[A-D]/i);
    return match ? match[0].toUpperCase() : trimmed.toUpperCase();
}

/**
 * Helper to shuffle array randomly (Fisher-Yates)
 */
function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

/**
 * Detects whether code is empty or untouched boilerplate starter template
 */
function isUntouchedBoilerplate(code, language) {
    if (!code || typeof code !== 'string') return true;
    const trimmed = code.trim();
    if (!trimmed) return true;

    const strippedComments = trimmed
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*$/gm, '')
        .replace(/#.*$/gm, '')
        .trim();

    const strippedBoilerplate = strippedComments
        .replace(/from\s+typing\s+import\s+[^;\n]+/gi, '')
        .replace(/import\s+[^;\n]+/gi, '')
        .replace(/#include\s+<[^>]+>/gi, '')
        .replace(/using\s+namespace\s+\w+;/gi, '')
        .replace(/class\s+TreeNode\s*\{[\s\S]*?\}/gi, '')
        .replace(/class\s+ListNode\s*\{[\s\S]*?\}/gi, '')
        .replace(/struct\s+TreeNode\s*\{[\s\S]*?\};?/gi, '')
        .replace(/struct\s+ListNode\s*\{[\s\S]*?\};?/gi, '')
        .replace(/function\s+TreeNode\s*\([^)]*\)\s*\{[\s\S]*?\}/gi, '')
        .replace(/function\s+ListNode\s*\([^)]*\)\s*\{[\s\S]*?\}/gi, '')
        .replace(/class\s+Solution\s*\{?/gi, '')
        .replace(/public:\s*/gi, '')
        .replace(/public\s+[\w<>\[\]]+\s+\w+\s*\([^)]*\)\s*\{?/gi, '')
        .replace(/def\s+\w+\s*\([^)]*\)\s*(?:->\s*[^:]+)?:/gi, '')
        .replace(/var\s+\w+\s*=\s*function\s*\([^)]*\)\s*\{?/gi, '')
        .replace(/\b(pass|return|return\s+0|return\s+false|return\s+true|return\s+null|return\s+nullptr|return\s+new\s+[\w\[\]\{\}]+|return\s+\[\]|return\s+""|return\s+\{\})\s*;?/gi, '')
        .replace(/[\{\}\(\);\s]/g, '')
        .trim();

    return strippedBoilerplate.length < 5;
}


/**
 * @desc    Generate / Start a Mock Test Session (Per-Round or Full-Company Comprehensive)
 * @route   POST /api/user/mock-test/start
 * @access  Private
 */
const startMockTest = async (req, res) => {
    try {
        const { company = 'Amazon', roundNumber = 1, isComprehensive = false } = req.body;

        const compConfig = COMPANY_ROUNDS_CONFIG[company] || COMPANY_ROUNDS_CONFIG['Amazon'];
        const rounds = compConfig?.rounds || [];
        const targetRound = rounds.find(r => r.roundNumber === Number(roundNumber)) || rounds[0];

        const allQuestions = await Question.find({ company }).lean();
        let questions = [];

        if (isComprehensive) {
            // Comprehensive Simulation: Select 10 diverse questions across all categories randomly
            const dsaQs = shuffleArray(allQuestions.filter(q => q.category === 'DSA'));
            const aptQs = shuffleArray(allQuestions.filter(q => q.category === 'Aptitude'));
            const intQs = shuffleArray(allQuestions.filter(q => q.category === 'Interview'));

            questions = [
                ...dsaQs.slice(0, 4),
                ...aptQs.slice(0, 4),
                ...intQs.slice(0, 2)
            ];

            if (questions.length < 10) {
                const remaining = allQuestions.filter(q => !questions.some(sel => sel._id.toString() === q._id.toString()));
                questions = [...questions, ...shuffleArray(remaining).slice(0, 10 - questions.length)];
            }
        } else {
            // Per-Round Mock Assessment: filter authentic round questions using company configuration
            const roundTitle = targetRound?.name || targetRound?.roundTitle || `Round ${roundNumber}`;
            let roundCandidates = [];

            if (targetRound?.filter && typeof targetRound.filter === 'function') {
                roundCandidates = allQuestions.filter(q => {
                    try {
                        return targetRound.filter(q);
                    } catch (e) {
                        return false;
                    }
                });
            }

            if (roundCandidates.length < 4) {
                // Secondary fallback matching on round name keywords
                const roundKeywords = (roundTitle || '').toLowerCase().split(/[\s:,-]+/);
                roundCandidates = allQuestions.filter(q => {
                    const qRound = (q.round || '').toLowerCase();
                    return roundKeywords.some(kw => kw.length > 3 && qRound.includes(kw));
                });
            }

            if (roundCandidates.length < 4) {
                const primaryCat = roundNumber === 1 ? 'Aptitude' : roundNumber === 4 ? 'Interview' : 'DSA';
                const catQs = allQuestions.filter(q => q.category === primaryCat);
                const otherQs = allQuestions.filter(q => q.category !== primaryCat);
                roundCandidates = [...catQs, ...otherQs];
            }

            if (roundCandidates.length === 0) {
                roundCandidates = allQuestions;
            }

            // Shuffle pool and select 6 questions dynamically
            const randomized = shuffleArray(roundCandidates);
            questions = randomized.slice(0, 6);
        }

        if (!questions || questions.length === 0) {
            questions = shuffleArray(allQuestions).slice(0, 6);
        }

        // Strip confidential answers & explanations before sending test questions to client
        const sanitizedQuestions = questions.map(q => ({
            _id: q._id,
            title: q.title,
            category: q.category,
            difficulty: q.difficulty,
            problemStatement: q.problemStatement || q.question,
            options: q.options || [],
            constraints: q.constraints || [],
            examples: q.examples || [],
            testCases: q.testCases?.slice(0, 3) || [],
            starterCode: q.starterCode,
            topic: q.topic || (q.tags && q.tags[0]) || 'General Engineering',
            round: q.round,
            recollectionType: q.recollectionType || 'original',
            isNovel: Boolean(q.isNovel),
            matchedProblems: q.matchedProblems || [],
            source: q.source || 'Campus Placement Archive',
            sourceUrl: q.sourceUrl || null
        }));

        const durationMinutes = isComprehensive ? 60 : roundNumber === 1 ? 25 : 35;
        const resolvedRoundTitle = isComprehensive 
            ? `Full ${company} Comprehensive Campus Drive Simulation` 
            : targetRound?.name || targetRound?.roundTitle || `Round ${roundNumber} Mock Assessment`;

        res.json({
            success: true,
            testSession: {
                company,
                roundNumber: isComprehensive ? 0 : Number(roundNumber),
                roundTitle: resolvedRoundTitle,
                isComprehensive: Boolean(isComprehensive),
                durationMinutes,
                totalQuestions: sanitizedQuestions.length,
                questions: sanitizedQuestions
            }
        });
    } catch (error) {
        console.error('Error starting mock test:', error);
        res.status(500).json({ message: 'Failed to initialize mock test session', error: error.message });
    }
};

/**
 * @desc    Submit & Evaluate Mock Test, Generate AI Diagnostic Report
 * @route   POST /api/user/mock-test/submit
 * @access  Private
 */
const submitMockTest = async (req, res) => {
    try {
        const {
            company = 'Amazon',
            roundNumber = 1,
            roundTitle = 'Mock Assessment',
            isComprehensive = false,
            answers = {}, // { [questionId]: { selectedOption, codeAnswer, responseText } }
            timeSpentSeconds = 600
        } = req.body;

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const questionIds = Object.keys(answers);
        const realQuestions = await Question.find({ _id: { $in: questionIds } }).lean();
        const questionMap = new Map(realQuestions.map(q => [q._id.toString(), q]));

        let totalQuestions = realQuestions.length;
        if (totalQuestions === 0) {
            return res.status(400).json({ message: 'No answered questions provided for evaluation' });
        }

        let correctCount = 0;
        const topicStats = {}; // { [topic]: { total: 0, correct: 0 } }
        const questionDiagnostics = [];

        for (const q of realQuestions) {
            const qIdStr = q._id.toString();
            const userSubmission = answers[qIdStr] || {};
            const topic = q.topic || (q.tags && q.tags[0]) || q.category || 'Problem Solving';

            if (!topicStats[topic]) {
                topicStats[topic] = { total: 0, correct: 0 };
            }
            topicStats[topic].total += 1;

            let isCorrect = false;
            let userAnswerText = 'Unanswered';
            let correctOptionText = q.correctOption || null;

            if (q.category === 'Aptitude') {
                const correct = normalizeLetter(q.correctOption);
                const userChoice = normalizeLetter(userSubmission.selectedOption);
                if (!userChoice) {
                    isCorrect = false;
                    userAnswerText = 'Unanswered';
                } else {
                    isCorrect = Boolean(userChoice === correct);
                    userAnswerText = `Option ${userChoice} (${isCorrect ? 'Correct' : 'Incorrect'})`;
                }
            } else if (q.category === 'DSA') {
                const rawCode = (userSubmission.codeAnswer || '').trim();
                const language = (userSubmission.language || 'python').toLowerCase();
                const isUntouched = userSubmission.hasUserWrittenCode === false || isUntouchedBoilerplate(rawCode, language);

                if (isUntouched) {
                    isCorrect = false;
                    userAnswerText = 'No code written (Starter template untouched)';
                } else {
                    // 1. Anti-Cheat Check: Detect hardcoded conditional mapping of sample outputs
                    const rawSampleCases = q.testCases || [];
                    const cheatCheck = detectHardcodedSolution(rawCode, rawSampleCases);

                    if (cheatCheck.isHardcoded) {
                        isCorrect = false;
                        userAnswerText = cheatCheck.reason;
                    } else {
                        // 2. Comprehensive Execution against Sample + Hidden Test Cases!
                        const sampleCases = rawSampleCases.map(tc => ({
                            input: tc.input || '',
                            output: tc.output || '',
                            explanation: tc.explanation || '',
                            isHidden: false
                        }));
                        const hiddenCases = (getHiddenTestCases(q) || []).map(tc => ({
                            input: tc.input || '',
                            output: tc.output || '',
                            explanation: tc.explanation || '',
                            isHidden: true
                        }));
                        const allTestCases = [...sampleCases, ...hiddenCases];

                        if (allTestCases.length > 0) {
                            let passedCount = 0;
                            let allPassed = true;
                            let failureMsg = '';

                            for (let tcIdx = 0; tcIdx < allTestCases.length; tcIdx++) {
                                const tc = allTestCases[tcIdx];
                                try {
                                    const execRes = await codeExecutionService.execute(language, rawCode, tc.input || '', tc.output || '');
                                    if (execRes.passed) {
                                        passedCount++;
                                    } else {
                                        allPassed = false;
                                        const caseType = tc.isHidden
                                            ? `Hidden Testcase #${tcIdx - sampleCases.length + 1}`
                                            : `Sample Testcase #${tcIdx + 1}`;
                                        const shortErr = execRes.error ? execRes.error.split('\n')[0].replace(/^Traceback.*$/i, '').trim().slice(0, 50) : '';
                                        const mismatch = execRes.output !== undefined
                                            ? `Output: "${String(execRes.output).slice(0, 15)}", Expected: "${String(tc.output).slice(0, 15)}"`
                                            : '';
                                        failureMsg = `Failed on ${caseType} (${execRes.status || 'Wrong Answer'}${mismatch ? ' • ' + mismatch : ''}${shortErr ? ' • ' + shortErr : ''})`;
                                        break;
                                    }
                                } catch (err) {
                                    allPassed = false;
                                    failureMsg = `Execution Error on Testcase #${tcIdx + 1}: ${err.message.slice(0, 40)}`;
                                    break;
                                }
                            }

                            if (allPassed) {
                                isCorrect = true;
                                userAnswerText = `Passed All ${allTestCases.length} Test Cases (${sampleCases.length} Sample + ${hiddenCases.length} Hidden) • ${language.toUpperCase()}`;
                            } else {
                                isCorrect = false;
                                userAnswerText = failureMsg || `Failed ${allTestCases.length - passedCount} of ${allTestCases.length} testcases`;
                            }
                        } else {
                            isCorrect = false;
                            userAnswerText = 'Evaluation failed: missing test cases';
                        }
                    }
                }

                const totalCasesCount = (q.testCases?.length || 0) + (getHiddenTestCases(q)?.length || 0);
                if (totalCasesCount > 0) {
                    correctOptionText = `All ${totalCasesCount} Test Cases Passed (${q.testCases?.length || 0} Sample + ${getHiddenTestCases(q)?.length || 0} Hidden)`;
                }
            } else if (q.category === 'Interview') {
                const text = (userSubmission.responseText || '').trim();
                const words = text.split(/\s+/).filter(Boolean);

                if (words.length < 20) {
                    isCorrect = false;
                    userAnswerText = words.length === 0 ? 'Unanswered' : `Incomplete response (${words.length} words, minimum 20 required)`;
                } else {
                    const lower = text.toLowerCase();
                    const hasSTARKeywords = (
                        lower.includes('situation') || 
                        lower.includes('task') || 
                        lower.includes('action') || 
                        lower.includes('result') ||
                        lower.includes('project') ||
                        lower.includes('team') ||
                        lower.includes('challenge') ||
                        lower.includes('implemented') ||
                        lower.includes('optimized')
                    );
                    const uniqueWords = new Set(words.map(w => w.toLowerCase()));
                    const uniqueRatio = uniqueWords.size / words.length;

                    if (words.length >= 25 && hasSTARKeywords && uniqueRatio >= 0.45) {
                        isCorrect = true;
                        userAnswerText = `Structured STAR Response (${words.length} words)`;
                    } else {
                        isCorrect = false;
                        userAnswerText = `Needs Improvement (${words.length} words, lacks structured STAR detail)`;
                    }
                }
            }

            if (isCorrect) {
                correctCount += 1;
                topicStats[topic].correct += 1;
            }

            questionDiagnostics.push({
                questionId: q._id,
                title: q.title,
                category: q.category,
                topic,
                difficulty: q.difficulty,
                isCorrect,
                userAnswer: userAnswerText,
                correctOption: correctOptionText,
                explanation: q.explanation || q.answer || q.answerTips || 'Refer to company preparation blueprint.',
                recollectionType: q.recollectionType || 'original',
                isNovel: Boolean(q.isNovel),
                matchedProblems: q.matchedProblems || [],
                source: q.source || 'Campus Placement Archive',
                sourceUrl: q.sourceUrl || null
            });

            // Record quiz attempt to universal activity log so heatmap auto-updates!
            user.quizAttempts.push({
                questionId: q._id,
                selectedOption: userAnswerText,
                isCorrect,
                attemptedAt: new Date()
            });
        }

        const score = Math.round((correctCount / totalQuestions) * 100);
        const passed = score >= 70;

        // Categorize into Strong Zones vs Weak Zones
        const strongZones = [];
        const weakZones = [];

        Object.entries(topicStats).forEach(([topic, stat]) => {
            const accuracy = stat.total > 0 ? (stat.correct / stat.total) : 0;
            if (accuracy >= 0.7) {
                strongZones.push(topic);
            } else {
                weakZones.push(topic);
            }
        });

        // Ensure at least one indicator if list is empty
        if (strongZones.length === 0 && score > 40) {
            strongZones.push('Analytical Tenacity & Code Structuring');
        }
        if (weakZones.length === 0 && score < 100) {
            weakZones.push('Advanced Time-Complexity Optimization');
        }

        // Determine Verdict
        let verdict = 'Moderate — Targeted Practice Required';
        if (score >= 85) {
            verdict = '🎯 Placement Ready — High Probability of Round Clearance';
        } else if (score >= 70) {
            verdict = '✅ Clearance Likely — Solid Performance';
        } else if (score < 50) {
            verdict = '⚠️ Foundational Reinforcement Required';
        }

        // Fetch 3 recommended remediation questions targeting weak topics
        let remediationQuestions = [];
        if (weakZones.length > 0) {
            remediationQuestions = await Question.find({
                company,
                $or: [
                    { topic: { $in: weakZones } },
                    { tags: { $in: weakZones } }
                ],
                _id: { $nin: questionIds }
            }).limit(3);
        }

        if (remediationQuestions.length === 0) {
            remediationQuestions = await Question.find({
                company,
                _id: { $nin: questionIds }
            }).limit(3);
        }

        const reportDoc = {
            company,
            roundNumber: Number(roundNumber),
            roundTitle,
            isComprehensive: Boolean(isComprehensive),
            score,
            passed,
            totalQuestions,
            correctCount,
            timeSpentSeconds: Number(timeSpentSeconds),
            strongZones,
            weakZones,
            verdict,
            remediationQuestionIds: remediationQuestions.map(q => q._id),
            completedAt: new Date()
        };

        user.mockTestReports.push(reportDoc);
        await user.save();

        res.json({
            success: true,
            report: {
                ...reportDoc,
                questionDiagnostics,
                remediationQuestions: remediationQuestions.map(q => ({
                    _id: q._id,
                    title: q.title,
                    category: q.category,
                    difficulty: q.difficulty,
                    topic: q.topic || 'Core Practice'
                }))
            }
        });
    } catch (error) {
        console.error('Error submitting mock test:', error);
        res.status(500).json({ message: 'Failed to evaluate mock test', error: error.message });
    }
};

/**
 * @desc    Get user's mock test reports history
 * @route   GET /api/user/mock-test/reports
 * @access  Private
 */
const getMockTestReports = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('mockTestReports.remediationQuestionIds', 'title category difficulty topic');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const reports = (user.mockTestReports || []).sort((a, b) => b.completedAt - a.completedAt);

        res.json({
            success: true,
            count: reports.length,
            reports
        });
    } catch (error) {
        console.error('Error fetching mock test reports:', error);
        res.status(500).json({ message: 'Failed to retrieve reports', error: error.message });
    }
};

/**
 * @desc    Complete Day 1 Onboarding & Lock in Target Company
 * @route   POST /api/user/onboarding
 * @access  Private
 */
const completeOnboarding = async (req, res) => {
    try {
        const { targetCompany = 'Amazon', targetPlacementDate } = req.body;

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.targetCompany = targetCompany.trim();
        user.hasCompletedOnboarding = true;
        user.onboardedAt = new Date();

        if (targetPlacementDate) {
            user.targetPlacementDate = new Date(targetPlacementDate);
        } else if (!user.targetPlacementDate) {
            user.targetPlacementDate = new Date(Date.now() + 45 * 24 * 60 * 60 * 1000);
        }

        await user.save();

        res.json({
            success: true,
            message: `Onboarding completed! Initialized Day 1 roadmap for ${user.targetCompany}.`,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                targetCompany: user.targetCompany,
                targetPlacementDate: user.targetPlacementDate,
                hasCompletedOnboarding: user.hasCompletedOnboarding,
                onboardedAt: user.onboardedAt
            }
        });
    } catch (error) {
        console.error('Error completing onboarding:', error);
        res.status(500).json({ message: 'Failed to complete onboarding', error: error.message });
    }
};

module.exports = {
    startMockTest,
    submitMockTest,
    getMockTestReports,
    completeOnboarding
};
