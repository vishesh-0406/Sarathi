const Question = require('../models/Question');

const getQuestions = async (req, res) => {
    try {
        const { company, category, difficulty, topic } = req.query;
        const filter = {};

        if (company) {
            // Case-insensitive match for company name
            filter.company = new RegExp(`^${company.trim()}$`, 'i');
        }
        if (category) {
            filter.category = new RegExp(`^${category.trim()}$`, 'i');
        }
        if (difficulty) {
            filter.difficulty = new RegExp(`^${difficulty.trim()}$`, 'i');
        }
        if (topic) {
            filter.topic = new RegExp(`^${topic.trim()}$`, 'i');
        }

        const questions = await Question.find(filter).sort({ createdAt: -1 });
        res.json(questions);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch questions',
            error: error.message
        });
    }
};

const getRandomQuestion = async (req, res) => {
    try {
        const { company, category, difficulty, topic } = req.query;
        const match = {};

        if (company) {
            match.company = new RegExp(`^${company.trim()}$`, 'i');
        }
        if (category) {
            match.category = new RegExp(`^${category.trim()}$`, 'i');
        }
        if (difficulty) {
            match.difficulty = new RegExp(`^${difficulty.trim()}$`, 'i');
        }
        if (topic) {
            match.topic = new RegExp(`^${topic.trim()}$`, 'i');
        }

        const sample = await Question.aggregate([
            { $match: match },
            { $sample: { size: 1 } }
        ]);

        if (!sample || sample.length === 0) {
            return res.status(404).json({
                message: `No questions found for the given criteria${company ? ' (' + company + ')' : ''}`
            });
        }

        res.json(sample[0]);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch random question',
            error: error.message
        });
    }
};

const createQuestion = async (req, res) => {
    try {
        // Handle both problemStatement and legacy question field
        const data = { ...req.body };
        if (!data.problemStatement && data.question) {
            data.problemStatement = data.question;
        }

        const question = await Question.create(data);
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create question',
            error: error.message
        });
    }
};

const updateQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.json(question);

    } catch (error) {
        res.status(400).json({
            message: 'Failed to update question',
            error: error.message
        });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.json({
            message: 'Question deleted successfully',
            question
        });

    } catch (error) {
        res.status(400).json({
            message: 'Failed to delete question',
            error: error.message
        });
    }
};

module.exports = {
    getQuestions,
    getRandomQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
};