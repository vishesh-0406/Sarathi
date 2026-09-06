const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

    company: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    question: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        required: true
    },

    source: {
        type: String,
        required: true
    },

    sourceUrl: {
        type: String,
        required: true
    }

});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;