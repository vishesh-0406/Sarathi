const express = require('express');

const router = express.Router();

const {
    getQuestions,
    getRandomQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
} = require('../controllers/questionController');

router.get('/', getQuestions);
router.get('/random', getRandomQuestion);

router.post('/', createQuestion);

router.put('/:id', updateQuestion);

router.delete('/:id', deleteQuestion);

module.exports = router;