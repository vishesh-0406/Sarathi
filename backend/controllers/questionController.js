const Question = require('../models/Question');

const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch questions'
        });
    }
};

const createQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create question'
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

        res.json(question);

    } catch (error) {
        res.status(400).json({
            message: 'Failed to update question'
        });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);

        res.json({
            message: 'Question deleted successfully',
            question
        });

    } catch (error) {
        res.status(400).json({
            message: 'Failed to delete question'
        });
    }
};

module.exports = {
    getQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion
};