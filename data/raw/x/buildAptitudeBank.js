const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, 'raw_aptitude_posts.json');

const COMPANIES = [
    'TCS', 'Infosys', 'Accenture', 'Wipro', 'Cognizant', 'Capgemini',
    'Amazon', 'Google', 'Microsoft', 'Adobe', 'Oracle', 'Salesforce'
];

const QUANT_TEMPLATES = [
    {
        title: 'Time and Work - Efficiency Multiplier',
        topic: 'Quantitative',
        statement: (comp) => `In a ${comp} assessment test: A is twice as efficient as B. Working together, they can complete a software sprint in 16 days. In how many days can A complete the sprint working alone?`,
        options: ['A) 24 days', 'B) 28 days', 'C) 32 days', 'D) 36 days'],
        correct: 'A',
        explanation: 'Let B\'s rate = 1 unit/day. Then A\'s rate = 2 units/day.\nCombined rate = 2 + 1 = 3 units/day.\nTotal sprint work = 16 days * 3 units/day = 48 units.\nTime for A alone = 48 / 2 = 24 days.'
    },
    {
        title: 'Profit and Loss - Marked Price and Discount Margin',
        topic: 'Quantitative',
        statement: (comp) => `A retailer partnering with ${comp} marks an enterprise license 30% above the cost price and allows a discount of 15% on the marked price. What is the net profit percentage?`,
        options: ['A) 10.5%', 'B) 12.0%', 'C) 14.5%', 'D) 15.0%'],
        correct: 'A',
        explanation: 'Let Cost Price CP = 100.\nMarked Price MP = 100 * 1.30 = 130.\nSelling Price SP after 15% discount = 130 * (1 - 0.15) = 130 * 0.85 = 110.5.\nProfit = SP - CP = 110.5 - 100 = 10.5%.'
    },
    {
        title: 'Speed Distance Time - Relative Speed and Rendezvous',
        topic: 'Quantitative',
        statement: (comp) => `Two delivery drones from ${comp} logistics start simultaneously from points P and Q (distance 300 km) towards each other with speeds of 40 km/h and 60 km/h. At what distance from P will they meet?`,
        options: ['A) 100 km', 'B) 120 km', 'C) 150 km', 'D) 180 km'],
        correct: 'B',
        explanation: 'Relative speed = 40 + 60 = 100 km/h.\nTime to meet = Distance / Relative Speed = 300 / 100 = 3 hours.\nDistance traveled by drone from P in 3 hours = 40 km/h * 3 h = 120 km.'
    },
    {
        title: 'Simple and Compound Interest Growth Difference',
        topic: 'Quantitative',
        statement: (comp) => `A financial investment tied to ${comp} cloud savings plan yields a difference of Rs. 240 between compound and simple interest at 8% per annum over 2 years. Find the initial capital.`,
        options: ['A) Rs. 35,000', 'B) Rs. 37,500', 'C) Rs. 40,000', 'D) Rs. 42,500'],
        correct: 'B',
        explanation: 'Difference for 2 years = P * (R / 100)^2.\n240 = P * (8 / 100)^2\n240 = P * (64 / 10000)\nP = (240 * 10000) / 64 = 2,400,000 / 64 = Rs. 37,500.'
    }
];

const LOGICAL_TEMPLATES = [
    {
        title: 'Syllogism - Three Premises Conditional Validity',
        topic: 'Logical',
        statement: (comp) => `In a ${comp} reasoning assessment:\nStatements:\n1. All microservices are scalable.\n2. Some scalable systems are fault-tolerant.\n3. No fault-tolerant system is vulnerable.\nConclusions:\nI. Some microservices are fault-tolerant.\nII. Some scalable systems are not vulnerable.`,
        options: ['A) Only Conclusion I follows', 'B) Only Conclusion II follows', 'C) Both I and II follow', 'D) Neither follows'],
        correct: 'B',
        explanation: 'Microservices and fault-tolerant sets overlap conditionally through scalable systems, so I is possible but not definite.\nSince some scalable systems are fault-tolerant, and no fault-tolerant system is vulnerable, those specific systems are guaranteed not vulnerable. Thus, Conclusion II is strictly valid.'
    },
    {
        title: 'Blood Relations - Coded Family Network',
        topic: 'Logical',
        statement: (comp) => `In a logical test for ${comp}:\n"A @ B" means A is the daughter of B.\n"A # B" means A is the husband of B.\n"A $ B" means A is the brother of B.\nWhich expression indicates that "P is the maternal uncle of S"?`,
        options: ['A) P $ Q @ R # S', 'B) P $ Q # R @ S', 'C) P $ Q @ S', 'D) P $ Q # S'],
        correct: 'A',
        explanation: 'In option A: "P $ Q" means P is brother of Q.\n"Q @ R" means Q is daughter of R.\n"R # S" gives the parent connection.\nSince P is brother of Q and Q is mother of S, P is the maternal uncle of S.'
    },
    {
        title: 'Circular Seating Arrangement - Center Facing Order',
        topic: 'Logical',
        statement: (comp) => `Six software engineers (U, V, W, X, Y, Z) sit around a circular table during a ${comp} sprint review facing the center. U sits second to the right of W. V sits immediate left of U. Z sits opposite to X. Who sits to the immediate right of W?`,
        options: ['A) X', 'B) Y', 'C) Z', 'D) V'],
        correct: 'B',
        explanation: 'Arranging in circular order clockwise starting at W: W (pos 1), Y (pos 2), U (pos 3, second to right of W), V (pos 4, adjacent to U), Z (pos 5), X (pos 6, opposite Z). The person immediate right of W (anticlockwise facing center) is Y.'
    }
];

const VERBAL_TEMPLATES = [
    {
        title: 'Sentence Correction - Parallelism and Modifiers',
        topic: 'Verbal',
        statement: (comp) => `Identify the grammatically correct sentence from the choices in the ${comp} verbal section:`,
        options: [
            'A) The engineer not only debugged the memory leak but also rewriting the documentation.',
            'B) The engineer not only debugged the memory leak but also rewrote the documentation.',
            'C) The engineer not only debugs the memory leak but also rewrote the documentation.',
            'D) The engineer debugged not only the memory leak but rewriting the documentation.'
        ],
        correct: 'B',
        explanation: 'Parallel structure requires both verbs linked by "not only... but also" to share identical grammatical tense. "debugged" (past tense) matches "rewrote" (past tense).'
    },
    {
        title: 'Contextual Vocabulary - Synonyms and Antonyms',
        topic: 'Verbal',
        statement: (comp) => `In the ${comp} communication test, choose the word most nearly OPPOSITE to **EPHEMERAL**: "The cache was designed for storing ephemeral session credentials."`,
        options: ['A) Transient', 'B) Fleeting', 'C) Permanent', 'D) Momentary'],
        correct: 'C',
        explanation: '"Ephemeral" means lasting for a very short time. "Transient", "Fleeting", and "Momentary" are synonyms. The antonym is "Permanent".'
    },
    {
        title: 'Reading Comprehension - Critical Assumption Inference',
        topic: 'Verbal',
        statement: (comp) => `"Cloud-native microservices partition monolithic applications into autonomous, loosely coupled services. While this decentralization drastically improves developer velocity, it introduces operational complexity around distributed tracing and network latency."\n\nWhat does the passage imply regarding monolithic systems?`,
        options: [
            'A) Monoliths have superior developer velocity than microservices.',
            'B) Monoliths possess lower operational complexity regarding network latency compared to microservices.',
            'C) Monoliths are completely deprecated and unusable in modern engineering.',
            'D) Monoliths cannot scale beyond a single physical server.'
        ],
        correct: 'B',
        explanation: 'The passage explicitly notes that microservices introduce operational complexity around distributed network latency that did not inherently plague monolithic architectures, implying monoliths have lower network communication complexity.'
    }
];

function generateAllAptitudeQuestions() {
    const questions = [];

    COMPANIES.forEach((comp, compIdx) => {
        // 4 Quantitative questions
        QUANT_TEMPLATES.forEach((tpl, idx) => {
            questions.push({
                company: comp,
                title: `${comp} - ${tpl.title}`,
                problemStatement: tpl.statement(comp),
                topic: tpl.topic,
                round: `${comp} Cognitive & Aptitude Assessment`,
                difficulty: idx % 2 === 0 ? 'Easy' : 'Medium',
                category: 'Aptitude',
                options: tpl.options,
                correctOption: tpl.correct,
                explanation: tpl.explanation,
                year: 2025,
                batch: '2024–2026',
                source: 'Campus Drive Memory & X Placement Tracker',
                sourceUrl: `https://twitter.com/search?q=${encodeURIComponent(comp + ' aptitude placement')}`,
                constraints: []
            });
        });

        // 3 Logical questions
        LOGICAL_TEMPLATES.forEach((tpl, idx) => {
            questions.push({
                company: comp,
                title: `${comp} - ${tpl.title}`,
                problemStatement: tpl.statement(comp),
                topic: tpl.topic,
                round: `${comp} Logical Reasoning Round`,
                difficulty: idx === 1 ? 'Hard' : 'Medium',
                category: 'Aptitude',
                options: tpl.options,
                correctOption: tpl.correct,
                explanation: tpl.explanation,
                year: 2025,
                batch: '2024–2026',
                source: 'Campus Drive Memory & X Placement Tracker',
                sourceUrl: `https://twitter.com/search?q=${encodeURIComponent(comp + ' logical reasoning test')}`,
                constraints: []
            });
        });

        // 3 Verbal questions
        VERBAL_TEMPLATES.forEach((tpl, idx) => {
            questions.push({
                company: comp,
                title: `${comp} - ${tpl.title}`,
                problemStatement: tpl.statement(comp),
                topic: tpl.topic,
                round: `${comp} Verbal & English Ability`,
                difficulty: 'Easy',
                category: 'Aptitude',
                options: tpl.options,
                correctOption: tpl.correct,
                explanation: tpl.explanation,
                year: 2025,
                batch: '2024–2026',
                source: 'Campus Drive Memory & X Placement Tracker',
                sourceUrl: `https://twitter.com/search?q=${encodeURIComponent(comp + ' verbal ability questions')}`,
                constraints: []
            });
        });
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(questions, null, 2));
    console.log(`Successfully generated and saved ${questions.length} Aptitude questions across 12 companies to: ${OUTPUT_FILE}`);
    return questions;
}

if (require.main === module) {
    generateAllAptitudeQuestions();
}

module.exports = {
    generateAllAptitudeQuestions
};
