const Question = require('../models/Question');

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const TOPIC_REGEX_MAP = {
    'HR & Behavioral': /HR|Behavioral|Managerial|Culture|Values/i,
    'Core CS (DBMS)': /DBMS|Database/i,
    'Core CS (Operating Systems)': /Operating System/i,
    'Core CS (OOP Concepts)': /OOP|Language Internals/i,
    'Core CS (Computer Networks & Web)': /Network|Web|API|Security/i,
    'System Design': /System Design|Cloud|Distributed/i,
    'Leadership Principles (LP)': /Leadership Principles|LP/i,
    'Googleyness & Behavioral': /Googleyness/i
};

function buildTopicRegex(topicStr) {
    const trimmed = topicStr.trim();
    if (TOPIC_REGEX_MAP[trimmed]) {
        return TOPIC_REGEX_MAP[trimmed];
    }
    return new RegExp(escapeRegex(trimmed), 'i');
}

// Balanced alternating company distribution: top product leaders & premier services
const COMPANY_DISPLAY_ORDER = [
    'Google', 'TCS', 'Amazon', 'Infosys', 'Microsoft', 'Accenture',
    'Adobe', 'Wipro', 'Oracle', 'Cognizant', 'Salesforce', 'Capgemini',
    'Uber', 'HCLTech', 'Zoho', 'Tech Mahindra', 'Flipkart', 'LTIMindtree',
    'Goldman Sachs', 'Genpact'
];

function interleaveByCompany(questions) {
    if (!questions || questions.length <= 1) return questions;

    // Group questions by normalized company name
    const companyMap = new Map();
    for (const q of questions) {
        const comp = q.company || 'Other';
        if (!companyMap.has(comp)) {
            companyMap.set(comp, []);
        }
        companyMap.get(comp).push(q);
    }

    // Sort company keys according to balanced display order
    const sortedCompanies = Array.from(companyMap.keys()).sort((a, b) => {
        const idxA = COMPANY_DISPLAY_ORDER.findIndex(c => c.toLowerCase() === a.toLowerCase());
        const idxB = COMPANY_DISPLAY_ORDER.findIndex(c => c.toLowerCase() === b.toLowerCase());
        const posA = idxA === -1 ? 999 : idxA;
        const posB = idxB === -1 ? 999 : idxB;
        return posA - posB;
    });

    const companyLists = sortedCompanies.map(comp => companyMap.get(comp));
    const interleaved = [];
    let maxLen = 0;
    for (const list of companyLists) {
        if (list.length > maxLen) maxLen = list.length;
    }

    for (let i = 0; i < maxLen; i++) {
        for (const list of companyLists) {
            if (i < list.length) {
                interleaved.push(list[i]);
            }
        }
    }

    return interleaved;
}

const getQuestions = async (req, res) => {
    try {
        const { company, category, difficulty, topic } = req.query;
        const filter = {};

        if (company) {
            filter.company = new RegExp(`^${escapeRegex(company.trim())}$`, 'i');
        }
        if (category) {
            filter.category = new RegExp(`^${escapeRegex(category.trim())}$`, 'i');
        }
        if (difficulty) {
            filter.difficulty = new RegExp(`^${escapeRegex(difficulty.trim())}$`, 'i');
        }
        if (topic) {
            filter.topic = buildTopicRegex(topic);
        }

        let questions = await Question.find(filter).lean();

        // If no specific company filter is requested (All Companies view),
        // interleave questions across all 20 companies so students see a diverse, balanced mix
        if (!company) {
            questions = interleaveByCompany(questions);
        } else {
            questions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

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
            match.company = new RegExp(`^${escapeRegex(company.trim())}$`, 'i');
        }
        if (category) {
            match.category = new RegExp(`^${escapeRegex(category.trim())}$`, 'i');
        }
        if (difficulty) {
            match.difficulty = new RegExp(`^${escapeRegex(difficulty.trim())}$`, 'i');
        }
        if (topic) {
            match.topic = buildTopicRegex(topic);
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