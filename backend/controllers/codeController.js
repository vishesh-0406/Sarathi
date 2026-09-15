const codeExecutionService = require('../services/codeExecutionService');
const complexityAnalyzerService = require('../services/complexityAnalyzerService');

const runCode = async (req, res) => {
    try {
        const { language, code, input, expectedOutput } = req.body;

        if (!language || typeof language !== 'string') {
            return res.status(400).json({
                status: 'Error',
                message: 'Programming language must be specified.'
            });
        }

        if (!code || typeof code !== 'string') {
            return res.status(400).json({
                status: 'Error',
                message: 'Code payload cannot be empty.'
            });
        }

        const result = await codeExecutionService.execute(language, code, input, expectedOutput);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            status: 'Server Error',
            message: 'Internal execution service error',
            error: error.message
        });
    }
};

const runAllCode = async (req, res) => {
    try {
        const { language, code, testCases } = req.body;

        if (!language || typeof language !== 'string') {
            return res.status(400).json({
                status: 'Error',
                message: 'Programming language must be specified.'
            });
        }

        if (!code || typeof code !== 'string') {
            return res.status(400).json({
                status: 'Error',
                message: 'Code payload cannot be empty.'
            });
        }

        const cases = Array.isArray(testCases) && testCases.length > 0
            ? testCases
            : [{ input: req.body.input || '', output: req.body.expectedOutput || '' }];

        const results = [];
        let overallStatus = 'Accepted';
        let totalDuration = 0;
        let passedCount = 0;

        for (let i = 0; i < cases.length; i++) {
            const tc = cases[i];
            const caseInput = tc.input !== undefined ? tc.input : '';
            const caseExpected = tc.output !== undefined ? tc.output : '';

            const resCase = await codeExecutionService.execute(language, code, caseInput, caseExpected);
            totalDuration += (resCase.duration || 0);

            if (resCase.passed) {
                passedCount++;
            } else {
                if (resCase.status === 'Compilation Error') {
                    overallStatus = 'Compilation Error';
                } else if (resCase.status === 'Runtime Error' && overallStatus !== 'Compilation Error') {
                    overallStatus = 'Runtime Error';
                } else if (resCase.status === 'Time Limit Exceeded' && !['Compilation Error', 'Runtime Error'].includes(overallStatus)) {
                    overallStatus = 'Time Limit Exceeded';
                } else if (overallStatus === 'Accepted') {
                    overallStatus = 'Wrong Answer';
                }
            }

            results.push({
                caseIdx: i,
                status: resCase.status,
                passed: resCase.passed,
                input: caseInput,
                output: resCase.output,
                expected: caseExpected,
                duration: resCase.duration,
                error: resCase.error || null
            });
        }

        res.json({
            status: overallStatus,
            passedCount,
            totalCount: cases.length,
            duration: totalDuration,
            cases: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'Server Error',
            message: 'Internal multi-testcase execution service error',
            error: error.message
        });
    }
};

const submitCode = async (req, res) => {
    try {
        const { language, code, question, testCases } = req.body;

        if (!language || typeof language !== 'string') {
            return res.status(400).json({
                status: 'Error',
                message: 'Programming language must be specified.'
            });
        }

        if (!code || typeof code !== 'string') {
            return res.status(400).json({
                status: 'Error',
                message: 'Code payload cannot be empty.'
            });
        }

        const cases = Array.isArray(testCases) && testCases.length > 0
            ? testCases
            : (Array.isArray(question?.testCases) && question.testCases.length > 0
                ? question.testCases
                : [{ input: '', output: '' }]);

        const results = [];
        let overallStatus = 'Accepted';
        let maxDuration = 0;
        let totalDuration = 0;
        let passedCount = 0;
        let failingCase = null;

        for (let i = 0; i < cases.length; i++) {
            const tc = cases[i];
            const caseInput = tc.input !== undefined ? tc.input : '';
            const caseExpected = tc.output !== undefined ? tc.output : '';

            const resCase = await codeExecutionService.execute(language, code, caseInput, caseExpected);
            const caseDuration = resCase.duration || 0;
            totalDuration += caseDuration;
            if (caseDuration > maxDuration) maxDuration = caseDuration;

            if (resCase.passed) {
                passedCount++;
            } else {
                if (!failingCase) {
                    failingCase = {
                        caseIdx: i,
                        input: caseInput,
                        output: resCase.output,
                        expected: caseExpected,
                        error: resCase.error
                    };
                }

                if (resCase.status === 'Compilation Error') {
                    overallStatus = 'Compilation Error';
                } else if (resCase.status === 'Runtime Error' && overallStatus !== 'Compilation Error') {
                    overallStatus = 'Runtime Error';
                } else if (resCase.status === 'Time Limit Exceeded' && !['Compilation Error', 'Runtime Error'].includes(overallStatus)) {
                    overallStatus = 'Time Limit Exceeded';
                } else if (overallStatus === 'Accepted') {
                    overallStatus = 'Wrong Answer';
                }
            }

            results.push({
                caseIdx: i,
                status: resCase.status,
                passed: resCase.passed,
                input: caseInput,
                output: resCase.output,
                expected: caseExpected,
                duration: caseDuration,
                error: resCase.error || null
            });
        }

        // Evaluate complexity
        const complexityReport = complexityAnalyzerService.evaluateSubmission(
            code,
            language,
            question,
            maxDuration
        );

        const totalOfficialTestcases = complexityReport.totalTestcases || cases.length;
        const officialPassedCount = overallStatus === 'Accepted'
            ? totalOfficialTestcases
            : Math.max(1, Math.floor(totalOfficialTestcases * (passedCount / cases.length)));

        res.json({
            status: overallStatus,
            passed: overallStatus === 'Accepted',
            passedCount: officialPassedCount,
            totalCount: totalOfficialTestcases,
            duration: complexityReport.runtimeMs !== undefined ? complexityReport.runtimeMs : totalDuration,
            runtimeDisplay: complexityReport.runtimeDisplay || `${complexityReport.runtimeMs || 0} ms`,
            memoryDisplay: complexityReport.memoryDisplay || `${complexityReport.memoryMB || 44.2} MB`,
            submittedAt: new Date().toISOString(),
            failingCase,
            cases: results,
            complexity: complexityReport
        });
    } catch (error) {
        res.status(500).json({
            status: 'Server Error',
            message: 'Internal submission service error',
            error: error.message
        });
    }
};

module.exports = {
    runCode,
    runAllCode,
    submitCode
};
