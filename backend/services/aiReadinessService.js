const Question = require('../models/Question');
const COMPANY_ROUNDS_CONFIG = require('../config/companyRoundsConfig');

// Official hiring stage definitions fallback
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
    'Microsoft': 'Microsoft interviewers love clean recursive tree structures, string parsing, and modular object design. Be prepared for follow-up scalability questions.',
    'Adobe': 'Adobe tests rigorous matrix algorithms, interval intersections, and core geometry logic. Emphasize modular helper functions and memory bounds.',
    'Oracle': 'Oracle focuses on memory alignment, concurrency, buffer pool LRU caches, and deep DBMS indexing. Demonstrate an understanding of thread synchronization.',
    'Uber': 'Uber challenges candidates on graph shortest paths (Dijkstra), spatial geohashing, and concurrent rate-limiting algorithms. Practice high-throughput patterns.',
    'Salesforce': 'Salesforce values clean object-oriented architecture, multi-tenant state isolation, and graph BFS algorithms. Keep code extensible.',
    'Zoho': 'Zoho bans built-in libraries in early rounds. Practice writing manual string parsers, matrix traversals, and custom sorting from first principles.',
    'Flipkart': 'Flipkart Machine Coding evaluates low-level modular design. Write clean class hierarchies, follow SOLID principles, and handle flash-sale edge cases.',
    'Goldman Sachs': 'Goldman Sachs focuses on probability, combinatorics, and high-frequency trade order book simulation. Precision and numerical edge cases are key.',
    'TCS': 'TCS NQT requires speed in Quantitative Aptitude to qualify for coding. Digital and Prime upgrades require solving dynamic programming and number theory challenges.',
    'Infosys': 'Infosys Specialist Programmer (SP) and DSE tracks require mastering multi-dimensional DP and tree traversals. Ensure high accuracy on HackWithInfy problems.',
    'Accenture': 'Accenture Automata tests bitwise logic, string transformations, and clean execution. Zero runtime errors on sample test cases is crucial.',
    'Wipro': 'Wipro Elite NLTH combines quantitative aptitude with automata coding. Turbo tracks demand proficiency in array subarrays and search/sort optimization.',
    'Cognizant': 'Cognizant GenC Next assesses complex array transformations and hashing logic. Code readability and clean time complexity determine upgrade calls.',
    'Capgemini': 'Capgemini evaluates pseudocode output tracing and game-based cognitive tests before coding. Focus on bitwise loops and string parsing.',
    'HCLTech': 'HCLTech tests networking algorithms and array logic. Maintain strong fundamentals in core CS topics (OS, DBMS, Computer Networks).',
    'Tech Mahindra': 'Tech Mahindra Conversant tests string manipulation and telecom routing simulations. Emphasize clean variable naming and edge case checks.',
    'LTIMindtree': 'LTIMindtree Ignition and Spark tracks prioritize full-stack logic, array algorithms, and clean syntax. Practice two pointers and sorting.',
    'Genpact': 'Genpact evaluates analytics logic, SQL joins, and data interpretation. Demonstrate an ability to translate business requirements into clean algorithms.'
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
 * Generate Activity Heatmap across calendar days
 * Real-time aggregation of solved coding challenges and quiz attempts
 */
function generateActivityHeatmap(user) {
    const activityMap = {};

    // 1. Gather all solved questions
    if (Array.isArray(user.solvedQuestions)) {
        user.solvedQuestions.forEach(sq => {
            if (sq.solvedAt) {
                const dateStr = new Date(sq.solvedAt).toISOString().split('T')[0];
                activityMap[dateStr] = (activityMap[dateStr] || 0) + 1;
            }
        });
    }

    // 2. Gather all quiz attempts
    if (Array.isArray(user.quizAttempts)) {
        user.quizAttempts.forEach(qa => {
            if (qa.attemptedAt) {
                const dateStr = new Date(qa.attemptedAt).toISOString().split('T')[0];
                activityMap[dateStr] = (activityMap[dateStr] || 0) + 1;
            }
        });
    }

    // Rolling 28 weeks (196 days) ending on the current day
    const numDays = 196;
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const baseDate = new Date(`${todayStr}T12:00:00.000Z`);

    const days = [];
    let totalActivities = 0;
    const activeDatesSet = new Set();

    for (let i = numDays - 1; i >= 0; i--) {
        const d = new Date(baseDate.getTime() - (i * 86400000));
        const dateStr = d.toISOString().split('T')[0];
        const count = activityMap[dateStr] || 0;
        totalActivities += count;

        let level = 0;
        if (count >= 5) level = 4;
        else if (count >= 3) level = 3;
        else if (count >= 2) level = 2;
        else if (count >= 1) level = 1;

        if (count > 0) activeDatesSet.add(dateStr);

        days.push({
            date: dateStr,
            count,
            level,
            dayOfWeek: d.getUTCDay() // 0 = Sun, 1 = Mon, ..., 6 = Sat
        });
    }

    // Calculate Streaks
    let currentStreak = 0;
    let longestStreak = 0;

    const yesterdayDate = new Date(baseDate.getTime() - 86400000);
    const yesterdayStr = yesterdayDate.toISOString().split('T')[0];

    // Current streak is active if today has activity OR yesterday had activity
    let checkDateMs = (activityMap[todayStr] && activityMap[todayStr] > 0)
        ? baseDate.getTime()
        : (activityMap[yesterdayStr] && activityMap[yesterdayStr] > 0)
            ? yesterdayDate.getTime()
            : null;

    if (checkDateMs !== null) {
        while (true) {
            const d = new Date(checkDateMs);
            const dStr = d.toISOString().split('T')[0];
            if (activityMap[dStr] && activityMap[dStr] > 0) {
                currentStreak++;
                checkDateMs -= 86400000;
            } else {
                break;
            }
        }
    }

    // Longest streak calculation across sorted active dates
    const sortedActiveDates = Object.keys(activityMap).sort();
    if (sortedActiveDates.length > 0) {
        let tempStreak = 1;
        longestStreak = 1;
        for (let i = 1; i < sortedActiveDates.length; i++) {
            const prev = new Date(sortedActiveDates[i - 1]);
            const curr = new Date(sortedActiveDates[i]);
            const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                tempStreak++;
                if (tempStreak > longestStreak) longestStreak = tempStreak;
            } else if (diffDays > 1) {
                tempStreak = 1;
            }
        }
        if (currentStreak > longestStreak) longestStreak = currentStreak;
    }

    return {
        days,
        totalActiveDays: activeDatesSet.size,
        totalActivities,
        currentStreak,
        longestStreak,
        activityMap
    };
}

/**
 * Compute Round-by-Round Clearance Probability Breakdown (Option B)
 * Evaluates user's performance against the company's authentic recruitment stages
 */
async function computeRoundClearanceProbabilities(targetCompany, solvedDocList, correctQuizzes, readinessScore) {
    const config = COMPANY_ROUNDS_CONFIG[targetCompany] || COMPANY_ROUNDS_CONFIG['Amazon'];
    if (!config || !Array.isArray(config.rounds)) {
        return [];
    }

    // Fetch all questions for this company to partition them accurately by round
    const allCompanyQuestions = await Question.find({
        company: new RegExp(`^${targetCompany}$`, 'i')
    }).sort({ difficulty: 1, title: 1 }).lean();

    const assignedQuestions = new Set();
    const roundQuestionsMap = {};

    config.rounds.forEach((roundDef, idx) => {
        const isLastRound = idx === config.rounds.length - 1;
        let matched = [];
        if (isLastRound) {
            matched = allCompanyQuestions.filter(q => !assignedQuestions.has(q._id.toString()));
        } else {
            matched = allCompanyQuestions.filter(q => {
                if (assignedQuestions.has(q._id.toString())) return false;
                return roundDef.filter(q);
            });
        }
        matched.forEach(q => assignedQuestions.add(q._id.toString()));
        roundQuestionsMap[roundDef.roundNumber] = matched;
    });

    const solvedIdsSet = new Set(solvedDocList.map(q => q._id.toString()));

    return config.rounds.map((roundDef, idx) => {
        const roundQuestions = roundQuestionsMap[roundDef.roundNumber] || [];
        const solvedInRound = roundQuestions.filter(q => solvedIdsSet.has(q._id.toString())).length;

        let totalProgressCredits = solvedInRound;
        let targetQuota = 6;

        if (roundDef.roundNumber === 1) {
            // Round 1 includes cognitive aptitude quiz credits
            const quizBonus = Math.min(4, Math.floor(correctQuizzes / 2));
            totalProgressCredits += quizBonus;
            targetQuota = 8;
        } else if (roundDef.roundNumber === 2) {
            targetQuota = 6;
        } else if (roundDef.roundNumber === 3) {
            targetQuota = 5;
        } else {
            targetQuota = 4;
        }

        // Clearance probability calculation (15% baseline floor up to 98%)
        const solvedRatio = Math.min(1.0, totalProgressCredits / targetQuota);
        let prob = 18;
        if (totalProgressCredits > 0) {
            prob = Math.min(98, Math.round(18 + (solvedRatio * 72) + (readinessScore * 0.08)));
        } else {
            prob = Math.min(25, Math.round(15 + (readinessScore * 0.1)));
        }

        let status = 'Needs Focus';
        let statusColor = '#f43f5e';
        if (prob >= 75) {
            status = 'High Clearance Probability';
            statusColor = '#10b981';
        } else if (prob >= 45) {
            status = 'Moderate — In Progress';
            statusColor = '#38bdf8';
        }

        // Stage-tailored strategic advice
        let roundTip = '';
        if (roundDef.roundNumber === 1) {
            roundTip = `${targetCompany}'s preliminary screening eliminates over 70% of candidates. Focus on speed and zero runtime penalties.`;
        } else if (roundDef.roundNumber === 2) {
            roundTip = 'Live 1-on-1 coding interview: verbalize edge cases and write clean, modular helper functions.';
        } else if (roundDef.roundNumber === 3) {
            roundTip = 'Advanced architectural round: optimize for memory bounds and multi-state dynamic programming.';
        } else {
            roundTip = 'Culture & leadership interview: practice structured STAR answers emphasizing technical ownership.';
        }

        return {
            roundNumber: roundDef.roundNumber,
            id: roundDef.id,
            name: roundDef.name,
            subtitle: roundDef.subtitle,
            focusPillars: roundDef.focusPillars || [],
            totalQuestions: roundQuestions.length,
            solvedCount: totalProgressCredits,
            actualCodeSolved: solvedInRound,
            targetQuota,
            clearanceProbability: prob,
            status,
            statusColor,
            roundTip
        };
    });
}

/**
 * Compute Placement Drive Countdown & Study Pace (Option A)
 */
function computePlacementCountdown(user, targetCompanySolvedCount) {
    const targetDate = user.targetPlacementDate || new Date(Date.now() + 45 * 24 * 60 * 60 * 1000);
    const now = new Date();
    const daysRemaining = Math.max(1, Math.ceil((new Date(targetDate) - now) / (1000 * 60 * 60 * 24)));
    
    // Target benchmark of 25 company-specific questions for offer caliber
    const targetBenchmark = 25;
    const questionsRemaining = Math.max(0, targetBenchmark - targetCompanySolvedCount);
    const dailyTargetPace = Math.max(1, Math.ceil(questionsRemaining / daysRemaining));

    return {
        targetPlacementDate: new Date(targetDate).toISOString(),
        formattedTargetDate: new Date(targetDate).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }),
        daysRemaining,
        questionsRemaining,
        dailyTargetPace,
        targetBenchmark
    };
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
    const aggregateWeight = (easySolved * 1) + (mediumSolved * 2) + (hardSolved * 3.5);
    const breadthScore = Math.min(30, (aggregateWeight / 40) * 30);

    // Pillar C: Aptitude & Assessment Accuracy (15% weight)
    let quizScore = 0;
    if (quizAttemptsList.length > 0) {
        const accuracy = correctQuizzes / quizAttemptsList.length;
        quizScore = Math.min(15, (accuracy * 10) + Math.min(5, (quizAttemptsList.length / 10) * 5));
    } else {
        quizScore = 3;
    }

    // Pillar D: Topic Balance (15% weight)
    let pillarsActive = 0;
    CORE_TOPICS.forEach(topic => {
        if (topicStats[topic].solved > 0) pillarsActive++;
    });
    const balanceScore = (pillarsActive / CORE_TOPICS.length) * 15;

    const rawReadiness = Math.round(targetScore + breadthScore + quizScore + balanceScore);
    const readinessScore = Math.max(5, Math.min(100, rawReadiness));

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

    // 4. Activity Heatmap Generator (LeetCode style)
    const heatmap = generateActivityHeatmap(user);

    // 5. Round-by-Round Clearance Probability (Option B)
    const roundClearance = await computeRoundClearanceProbabilities(targetCompany, solvedDocList, correctQuizzes, readinessScore);

    // 6. Placement Drive Countdown (Option A)
    const countdown = computePlacementCountdown(user, targetCompanySolvedCount);

    // Legacy milestones for backwards compatibility
    const roundsConfig = COMPANY_ROUND_SCHEMAS[targetCompany] || [
        { roundNum: 1, title: 'Screening Assessment', focus: 'Foundational Aptitude & Coding' },
        { roundNum: 2, title: 'Technical Interview 1', focus: 'Data Structures & Problem Solving' },
        { roundNum: 3, title: 'Technical Interview 2', focus: 'Algorithms & System Optimization' },
        { roundNum: 4, title: 'Managerial & Cultural Fit', focus: 'Behavioral & Core Principles' }
    ];

    const roundMilestones = roundsConfig.map((r, idx) => {
        let progress = 0;
        if (idx === 0) {
            progress = Math.min(100, Math.round(((easySolved + mediumSolved + targetCompanySolvedCount) / 8) * 100));
        } else if (idx === 1) {
            progress = Math.min(100, Math.round((targetCompanySolvedCount / 5) * 100));
        } else if (idx === 2) {
            progress = Math.min(100, Math.round(((mediumSolved + hardSolved) / 6) * 100));
        } else {
            progress = Math.min(100, Math.round((readinessScore / 80) * 100));
        }

        return {
            roundNum: r.roundNum,
            title: r.title,
            focus: r.focus,
            progress: Math.max(progress, 0)
        };
    });

    // 7. Strengths & Critical Blindspots Analysis
    const sortedTopics = Object.entries(topicStats).sort((a, b) => b[1].solved - a[1].solved);
    const strengths = sortedTopics
        .filter(([_, stats]) => stats.solved >= 2)
        .map(([name, stats]) => `${name} (${stats.solved} mastered)`);

    const blindspots = sortedTopics
        .filter(([_, stats]) => stats.solved === 0)
        .map(([name]) => name);

    // 8. Next 3 High-Impact Recommended Questions
    const queryFilter = {
        company: new RegExp(`^${targetCompany}$`, 'i'),
        _id: { $nin: solvedDocList.map(q => q._id) }
    };

    let recommendedQuestions = await Question.find(queryFilter)
        .select('_id title difficulty category topic round problemStatement matchedProblems company')
        .sort({ difficulty: -1 })
        .limit(3)
        .lean();

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

    // 9. Solved Timeline
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

    // 10. Bookmarks List
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
        roundClearance,
        heatmap,
        countdown,
        insights: {
            strengths: strengths.length > 0 ? strengths : ['Starting your preparation trajectory'],
            blindspots: blindspots.length > 0 ? blindspots : ['None identified — comprehensive coverage'],
            strategicAdvice: COMPANY_STRATEGIC_ADVICE[targetCompany] || 'Focus on clean code, edge case testing, and optimal time complexity.'
        },
        recommendedQuestions,
        solvedHistory: solvedHistory.slice(0, 15),
        bookmarks: bookmarksList
    };
}

module.exports = {
    computeReadinessMetrics,
    generateActivityHeatmap,
    computeRoundClearanceProbabilities,
    computePlacementCountdown,
    COMPANY_ROUND_SCHEMAS,
    COMPANY_STRATEGIC_ADVICE
};
