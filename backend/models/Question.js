const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        default: 'Interview Problem'
    },
    problemStatement: {
        type: String,
        required: true
    },
    constraints: [{
        type: String
    }],
    recollectionType: {
        type: String,
        enum: ['original', 'randomised', 'constraint'],
        default: 'randomised'
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Medium'
    },
    category: {
        type: String,
        default: 'DSA'
    },
    round: {
        type: String,
        default: 'Technical Round'
    },
    year: {
        type: Number,
        default: 2025
    },
    batch: {
        type: String,
        default: '2024–2026'
    },
    source: {
        type: String,
        default: 'Interview Experience'
    },
    sourceUrl: {
        type: String
    },
    matchedProblems: [{
        platform: {
            type: String,
            enum: ['LeetCode', 'Codeforces', 'GeeksforGeeks']
        },
        problemName: String,
        problemUrl: String,
        similarityScore: Number
    }]
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;