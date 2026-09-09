const codeExecutionService = require('../services/codeExecutionService');

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

module.exports = {
    runCode
};
