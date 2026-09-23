const Question = require('../models/Question');

// Official hiring stage definitions for all 20 companies
const COMPANY_ROUND_SCHEMAS = {
    'Google': [
        { roundNum: 1, title: 'Google Online Challenge (GOC)', focus: 'Arrays, Strings & Math' },
        { roundNum: 2, title: 'Onsite Tech 1: Linear & Recursion', focus: 'Two Pointers, Sliding Window, Linked Lists' },
        { roundNum: 3, title: 'Onsite Tech 2: Trees & Graphs', focus: 'BFS/DFS, Topological Sort, Tries' },
        { roundNum: 4, title: 'Onsite Tech 3: Dynamic Programming', focus: '2D DP, State Compression, Optimization' },
        { roundNum: 5, title: 'Googleyness & Leadership', focus: 'Behavioral, Collaboration, Ambiguity' }
    ],
    'Amazon': [
        { roundNum: 1, title: 'Online Assessment (HackerRank OA)', focus: 'Arrays, Hash Maps, Greedy Algorithms' },
        { roundNum: 2, title: 'Technical Round 1: Core DSA', focus: 'Binary Trees, BSTs, Heap & Priority Queue' },
        { roundNum: 3, title: 'Technical Round 2: Advanced DSA & LLD', focus: 'Graphs, BFS/DFS, Object-Oriented Design' },
        { roundNum: 4, title: 'Bar Raiser Round', focus: '16 Leadership Principles & Scalability' }
    ],
    'Microsoft': [
        { roundNum: 1, title: 'Online Assessment (Codility)', focus: 'Bit Manipulation, Strings, Math' },
        { roundNum: 2, title: 'Technical Round 1: Core Data Structures', focus: 'Trees, Linked Lists, Stack/Queue' },
        { roundNum: 3, title: 'Technical Round 2: Architecture & Algorithms', focus: 'Dynamic Programming, Graph Traversal' },
        { roundNum: 4, title: 'As-Appropriate (AA) Partner Round', focus: 'Engineering Culture, Code Defense' }
    ],
    'Adobe': [
        { roundNum: 1, title: 'Online Assessment (HackerRank)', focus: 'Arrays, Hashing, Mathematical Logic' },
        { roundNum: 2, title: 'Technical Round 1: Core Algorithms', focus: 'Binary Trees, Heaps, Two Pointers' },
        { roundNum: 3, title: 'Technical Round 2: Media & Systems DP', focus: 'Dynamic Programming, Matrix Manipulation' },
        { roundNum: 4, title: 'Director & Cultural Fit Round', focus: 'Problem Solving Attitude & Collaboration' }
    ],
    'Oracle': [
        { roundNum: 1, title: 'Online Technical Screening', focus: 'Core DSA, Database Fundamentals, CS' },
        { roundNum: 2, title: 'Technical Round 1: Data Structures', focus: 'Trees, Graphs, Hash Tables' },
        { roundNum: 3, title: 'Technical Round 2: Concurrency & Systems', focus: 'Multi-threading, Buffer Sync, OS' },
        { roundNum: 4, title: 'Director / Hiring Manager Round', focus: 'Design Trade-offs & Behavioral' }
    ],
    'Uber': [
        { roundNum: 1, title: 'Quantitative & Analytical Screen', focus: 'Algorithms & Probabilistic Reasoning' },
        { roundNum: 2, title: 'Technical Screen (CoderPad Live)', focus: 'Graph Traversal, Dijkstra, Geohashing' },
        { roundNum: 3, title: 'Technical Onsite: Distributed Systems', focus: 'Concurrency, Dynamic Programming, Caching' },
        { roundNum: 4, title: 'SDE Bar Raiser Round', focus: 'High Scale Architecture & Leadership' }
    ],
    'Salesforce': [
        { roundNum: 1, title: 'HackerRank Online Assessment', focus: 'Strings, Arrays, Hash Tables' },
        { roundNum: 2, title: 'Technical Round 1: Data Structures', focus: 'Trees, Recursion, Sorting' },
        { roundNum: 3, title: 'Technical Round 2: Multi-Tenant Systems', focus: 'Rate Limiting, Graph Traversal, LLD' },
        { roundNum: 4, title: 'Engineering Manager Alignment', focus: 'Customer Trust & Core Architecture' }
    ],
    'Zoho': [
        { roundNum: 1, title: 'General Aptitude & C Logic', focus: 'Pointers, Loops, Output Prediction' },
        { roundNum: 2, title: 'Basic Programming (No Built-ins)', focus: 'String Manipulation, Custom Parsing' },
        { roundNum: 3, title: 'Advanced Machine Coding', focus: 'Mini Applications, LLD without Libraries' },
        { roundNum: 4, title: 'Technical Interview & Code Defense', focus: 'Time Complexity, Memory Efficiency' },
        { roundNum: 5, title: 'HR & Cultural Alignment', focus: 'Work Ethic & Long-term Fit' }
    ],
    'Flipkart': [
        { roundNum: 1, title: 'Online Coding Assessment (HackerRank)', focus: 'Greedy, Arrays, Two Pointers' },
        { roundNum: 2, title: 'Machine Coding Round', focus: 'Clean OOP, Design Patterns, Modularity' },
        { roundNum: 3, title: 'Problem Solving & Hiring Manager', focus: 'Advanced Graph/DP & Production Scale' }
    ],
    'Goldman Sachs': [
        { roundNum: 1, title: 'Aptitude & Technical Assessment', focus: 'Probability, Combinatorics, Math, DSA' },
        { roundNum: 2, title: 'CoderPad Technical Interview', focus: 'Order Book Matching, Heaps, Two Pointers' },
        { roundNum: 3, title: 'Final Technical Onsite', focus: 'Low Latency Thinking, Core CS & Finance Fit' }
    ],
    'TCS': [
        { roundNum: 1, title: 'TCS NQT Cognitive Assessment', focus: 'Numerical Ability, Reasoning, Verbal' },
        { roundNum: 2, title: 'TCS Advanced Coding Assessment', focus: 'Prime Track Algorithms, Array Simulations' },
        { roundNum: 3, title: 'Technical + Managerial Discussion', focus: 'Core CS (DBMS, OOP, OS) & Projects' }
    ],
    'Infosys': [
        { roundNum: 1, title: 'Infosys Online Test', focus: 'Pseudocode, Mathematical Reasoning, Verbal' },
        { roundNum: 2, title: 'Hands-on Coding Assessment', focus: 'Specialist / DSE Track Matrix DP & Graphs' },
        { roundNum: 3, title: 'Technical + HR Interview', focus: 'Code Walkthrough & Soft Skills' }
    ],
    'Accenture': [
        { roundNum: 1, title: 'Cognitive & Critical Reasoning', focus: 'Analytical Reasoning, Verbal, Spatial' },
        { roundNum: 2, title: 'Technical Assessment & Automata Coding', focus: 'Bitwise Logic, String Parsing, Pseudocode' },
        { roundNum: 3, title: 'Communication Assessment & Tech HR', focus: 'Verbal Fluency, Project Discussion' }
    ],
    'Wipro': [
        { roundNum: 1, title: 'Wipro Elite NTH Assessment', focus: 'Quantitative Aptitude, Logical Reasoning' },
        { roundNum: 2, title: 'Turbo Upgrade Coding Round', focus: 'Number Theory, Arrays, Bitwise Operations' },
        { roundNum: 3, title: 'Technical & HR Composite Interview', focus: 'Core Programming Language Knowledge' }
    ],
    'Cognizant': [
        { roundNum: 1, title: 'GenC / GenC Next Online Assessment', focus: 'Quantitative, Analytical & Code Tracing' },
        { roundNum: 2, title: 'GenC Next Technical Coding', focus: 'Algorithms, Prime Shifts, Hashing' },
        { roundNum: 3, title: 'Technical & HR Discussion', focus: 'Project Defense & Engineering Fundamentals' }
    ],
    'Capgemini': [
        { roundNum: 1, title: 'Cognitive & Pseudocode Assessment', focus: 'Data Interpretation, Game-based Logic' },
        { roundNum: 2, title: 'Hands-on Coding Assessment', focus: 'Permutations, Sorting, Strings' },
        { roundNum: 3, title: 'Technical & HR Interview', focus: 'Resume Deep Dive & Situational Scenarios' }
    ],
    'HCLTech': [
        { roundNum: 1, title: 'Analytical & Screening Assessment', focus: 'Quantitative Aptitude & Logical Reasoning' },
        { roundNum: 2, title: 'Technical Coding Assessment', focus: 'Network Routing Simulations, Arrays' },
        { roundNum: 3, title: 'Technical & HR Interview', focus: 'Networking Concepts, OOP & Problem Solving' }
    ],
    'Tech Mahindra': [
        { roundNum: 1, title: 'Aptitude & Technical Competency', focus: 'Logical Reasoning & Quantitative Math' },
        { roundNum: 2, title: 'Automata Coding Round', focus: 'Sliding Window, Telemetry Processing' },
        { roundNum: 3, title: 'Technical & HR Discussion', focus: 'CS Fundamentals & Communication' }
    ],
    'LTIMindtree': [
        { roundNum: 1, title: 'Online Aptitude Assessment', focus: 'Logical & Numerical Analysis' },
        { roundNum: 2, title: 'Edge / YIP Coding Round', focus: 'Greedy Loading, Stack/Queue Logic' },
        { roundNum: 3, title: 'Technical & HR Interview', focus: 'Code Quality, Data Structures & Behavioral' }
    ],
    'Genpact': [
        { roundNum: 1, title: 'Technical & Analytical Screening', focus: 'Math, Data Interpretation & Logic' },
        { roundNum: 2, title: 'Domain Software Coding', focus: 'Line Item Matching, String Distances' },
        { roundNum: 3, title: 'Technical & Leadership Discussion', focus: 'Domain Engineering & Teamwork' }
    ]
};

// Strategic company insights and tailored placement advice
const COMPANY_STRATEGIC_ADVICE = {
    'Amazon': 'Amazon heavily weights leadership principles alongside clean O(N) or O(N log N) algorithmic solutions. Ensure you can explain code trade-offs and articulate the "Customer Obsession" angle.',
    'Google': 'Google evaluates optimal computational complexity and scale. Brute-force solutions are heavily penalized. Practice finding the most optimal asymptotic bounds.',
    'Microsoft': 'Microsoft focuses on clean code structure, modular methods, and edge cases (null inputs, empty strings, integer overflow).',
    'TCS': 'For TCS Digital and Prime tracks, speed in arithmetic simulation and clean boundary handling in Automata are key differentiators.',
    'Zoho': 'Zoho forbids built-in helper libraries in Rounds 2 & 3. You must be comfortable writing your own string parsers, linked structures, and matrix manipulations from scratch.',
    'Goldman Sachs': 'Goldman tests mathematical depth, probability, and heap-based order processing. Prioritize Two Pointers, Heaps, and Combinatorics.'
};

const CORE_TOPICS = [
    'Arrays & Strings',
    'Trees & Graphs',
    'Dynamic Programming',
    'Greedy & Math',
    'System Design & OOP',
    'Aptitude & Logical'
];

/**
 * Categorize a question into one of the 6 core pillars
 */
function mapTopicPillar(q) {
    if (q.category === 'Aptitude') return 'Aptitude & Logical';
    const text = `${q.title} ${q.topic || ''} ${q.problemStatement || ''}`.toLowerCase();
    
    if (text.includes('tree') || text.includes('bst') || text.includes('graph') || text.includes('bfs') || text.includes('dfs') || text.includes('trie')) {
        return 'Trees & Graphs';
    }
    if (text.includes('dynamic') || text.includes('dp') || text.includes('knapsack') || text.includes('memoiz') || text.includes('subsequence')) {
        return 'Dynamic Programming';
    }
    if (text.includes('design') || text.includes('lru') || text.includes('cache') || text.includes('rate limit') || text.includes('system') || text.includes('machine coding')) {
        return 'System Design & OOP';
    }
    if (text.includes('greedy') || text.includes('prime') || text.includes('math') || text.includes('fibonacci') || text.includes('probability')) {
        return 'Greedy & Math';
    }
    return 'Arrays & Strings';
}

/**
 * Compute real-time Placement Readiness Metrics for a user
 */
async function computeReadinessMetrics(user) {
    const targetCompany = user.targetCompany || 'Amazon';
    const solvedQuestionsList = user.solvedQuestions || [];
    const quizAttemptsList = user.quizAttempts || [];
    const bookmarkIds = (user.bookmarks || []).map(b => b.toString());

    // Extract unique solved question IDs
    const solvedIds = [...new Set(solvedQuestionsList.map(sq => sq.questionId ? sq.questionId.toString() : null).filter(Boolean))];

    // Fetch full question docs for solved questions
    const solvedDocList = solvedIds.length > 0
        ? await Question.find({ _id: { $in: solvedIds } }).lean()
        : [];

    // Map doc details for fast lookup
    const docMap = new Map();
    solvedDocList.forEach(q => docMap.set(q._id.toString(), q));

    // 1. Target Company Specific Solved Count & Global Breakdown
    let targetCompanySolvedCount = 0;
    let easySolved = 0;
    let mediumSolved = 0;
    let hardSolved = 0;

    const topicStats = {
        'Arrays & Strings': { solved: 0, target: 12 },
        'Trees & Graphs': { solved: 0, target: 10 },
        'Dynamic Programming': { solved: 0, target: 8 },
        'Greedy & Math': { solved: 0, target: 8 },
        'System Design & OOP': { solved: 0, target: 6 },
        'Aptitude & Logical': { solved: 0, target: 10 }
    };

    solvedDocList.forEach(q => {
        if (q.company && q.company.toLowerCase() === targetCompany.toLowerCase()) {
            targetCompanySolvedCount++;
        }
        if (q.difficulty === 'Easy') easySolved++;
        else if (q.difficulty === 'Medium') mediumSolved++;
        else if (q.difficulty === 'Hard') hardSolved++;

        const pillar = mapTopicPillar(q);
        if (topicStats[pillar]) {
            topicStats[pillar].solved++;
        }
    });

    // Also account for quiz attempts under Aptitude & Logical
    const correctQuizzes = quizAttemptsList.filter(qa => qa.isCorrect).length;
    topicStats['Aptitude & Logical'].solved += correctQuizzes;

    // 2. Compute Weighted Readiness Index (0 - 100)
    // Pillar A: Target Company Intensity (40% weight, baseline goal 15 company questions)
    const targetCompanyGoal = 15;
    const targetScore = Math.min(40, (targetCompanySolvedCount / targetCompanyGoal) * 40);

    // Pillar B: Overall Algorithmic Breadth & Complexity (30% weight)
    // Weighted: Easy = 1, Medium = 2, Hard = 3.5. Target aggregate weight = 40
    const aggregateWeight = (easySolved * 1) + (mediumSolved * 2) + (hardSolved * 3.5);
    const breadthScore = Math.min(30, (aggregateWeight / 40) * 30);

    // Pillar C: Aptitude & Assessment Accuracy (15% weight)
    let quizScore = 0;
    if (quizAttemptsList.length > 0) {
        const accuracy = correctQuizzes / quizAttemptsList.length;
        quizScore = Math.min(15, (accuracy * 10) + Math.min(5, (quizAttemptsList.length / 10) * 5));
    } else {
        // Baseline 3 pts if no quizzes yet to avoid penalizing pure coders excessively
        quizScore = 3;
    }

    // Pillar D: Topic Balance (15% weight)
    // Award up to 2.5 pts for each of the 6 core pillars that has at least 1 problem solved
    let pillarsActive = 0;
    CORE_TOPICS.forEach(topic => {
        if (topicStats[topic].solved > 0) pillarsActive++;
    });
    const balanceScore = (pillarsActive / CORE_TOPICS.length) * 15;

    const rawReadiness = Math.round(targetScore + breadthScore + quizScore + balanceScore);
    const readinessScore = Math.max(5, Math.min(100, rawReadiness)); // Baseline 5% for registering

    // 3. Readiness Status Tier & Label
    let readinessTier = 'Foundation Building';
    let readinessColor = '#94a3b8'; // Slate
    if (readinessScore >= 80) {
        readinessTier = 'Offer Caliber / Placement Ready';
        readinessColor = '#34d399'; // Mint
    } else if (readinessScore >= 55) {
        readinessTier = 'Competitive Contender';
        readinessColor = '#38bdf8'; // Sky Blue
    } else if (readinessScore >= 30) {
        readinessTier = 'Active Progression';
        readinessColor = '#fbbf24'; // Amber
    }

    // 4. Round Milestone Progress for Target Company
    const roundsConfig = COMPANY_ROUND_SCHEMAS[targetCompany] || [
        { roundNum: 1, title: 'Screening Assessment', focus: 'Foundational Aptitude & Coding' },
        { roundNum: 2, title: 'Technical Interview 1', focus: 'Data Structures & Problem Solving' },
        { roundNum: 3, title: 'Technical Interview 2', focus: 'Algorithms & System Optimization' },
        { roundNum: 4, title: 'Managerial & Cultural Fit', focus: 'Behavioral & Core Principles' }
    ];

    // Compute progress for each round based on target company solved questions
    const roundMilestones = roundsConfig.map((r, idx) => {
        // Calculate an intuitive milestone percentage based on user's solves
        let progress = 0;
        if (idx === 0) {
            // Round 1 (OA): requires basic solves + aptitude
            progress = Math.min(100, Math.round(((easySolved + mediumSolved + targetCompanySolvedCount) / 8) * 100));
        } else if (idx === 1) {
            // Round 2 (Tech 1): requires medium solves in target company
            progress = Math.min(100, Math.round((targetCompanySolvedCount / 5) * 100));
        } else if (idx === 2) {
            // Round 3 (Tech 2): requires medium/hard solves
            progress = Math.min(100, Math.round(((mediumSolved + hardSolved) / 6) * 100));
        } else {
            // Final round (Leadership/HR): overall readiness reflection
            progress = Math.min(100, Math.round((readinessScore / 80) * 100));
        }

        return {
            roundNum: r.roundNum,
            title: r.title,
            focus: r.focus,
            progress: Math.max(progress, 0)
        };
    });

    // 5. Strengths & Critical Blindspots Analysis
    const sortedTopics = Object.entries(topicStats).sort((a, b) => b[1].solved - a[1].solved);
    const strengths = sortedTopics
        .filter(([_, stats]) => stats.solved >= 2)
        .map(([name, stats]) => `${name} (${stats.solved} mastered)`);

    const blindspots = sortedTopics
        .filter(([_, stats]) => stats.solved === 0)
        .map(([name]) => name);

    // 6. Next 3 High-Impact Recommended Questions
    // Fetch unsolved questions for target company
    const queryFilter = {
        company: new RegExp(`^${targetCompany}$`, 'i'),
        _id: { $nin: solvedDocList.map(q => q._id) }
    };

    let recommendedQuestions = await Question.find(queryFilter)
        .select('_id title difficulty category topic round problemStatement matchedProblems company')
        .sort({ difficulty: -1 }) // prioritize Medium / Hard
        .limit(3)
        .lean();

    // Fallback if user already solved all or company has few
    if (recommendedQuestions.length < 3) {
        const fallbackQs = await Question.find({
            _id: { $nin: [...solvedDocList.map(q => q._id), ...recommendedQuestions.map(q => q._id)] },
            category: 'DSA'
        })
            .select('_id title difficulty category topic round problemStatement matchedProblems company')
            .limit(3 - recommendedQuestions.length)
            .lean();

        recommendedQuestions = [...recommendedQuestions, ...fallbackQs];
    }

    // 7. Solved Timeline (formatted for quick view)
    const solvedHistory = solvedQuestionsList.map(sq => {
        const doc = docMap.get(sq.questionId ? sq.questionId.toString() : '');
        return {
            questionId: sq.questionId,
            title: doc ? doc.title : 'Interview Question',
            company: doc ? doc.company : 'Company',
            difficulty: doc ? doc.difficulty : 'Medium',
            category: doc ? doc.category : 'DSA',
            language: sq.language || 'python',
            solvedAt: sq.solvedAt,
            isBookmarked: bookmarkIds.includes(sq.questionId ? sq.questionId.toString() : '')
        };
    }).sort((a, b) => new Date(b.solvedAt) - new Date(a.solvedAt));

    // 8. Bookmarks List
    const bookmarksList = bookmarkIds.length > 0
        ? await Question.find({ _id: { $in: bookmarkIds } })
            .select('_id title difficulty category company topic')
            .lean()
        : [];

    return {
        targetCompany,
        readinessScore,
        readinessTier,
        readinessColor,
        stats: {
            totalSolved: solvedDocList.length,
            targetCompanySolved: targetCompanySolvedCount,
            easySolved,
            mediumSolved,
            hardSolved,
            totalBookmarks: bookmarkIds.length,
            totalQuizzesAttempted: quizAttemptsList.length,
            correctQuizzes
        },
        topicMastery: topicStats,
        roundMilestones,
        insights: {
            strengths: strengths.length > 0 ? strengths : ['Starting your preparation trajectory'],
            blindspots: blindspots.length > 0 ? blindspots : ['None identified — comprehensive coverage'],
            strategicAdvice: COMPANY_STRATEGIC_ADVICE[targetCompany] || 'Focus on clean code, edge case testing, and optimal time complexity.'
        },
        recommendedQuestions,
        solvedHistory: solvedHistory.slice(0, 15), // latest 15 solves
        bookmarks: bookmarksList
    };
}

module.exports = {
    computeReadinessMetrics,
    COMPANY_ROUND_SCHEMAS,
    COMPANY_STRATEGIC_ADVICE
};
