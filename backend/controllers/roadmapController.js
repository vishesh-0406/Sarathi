const Question = require('../models/Question');
const Company = require('../models/Company');

const COMPANY_ROUNDS_CONFIG = {
    'Zoho': {
        tier: 'Product (SaaS Leader)',
        focusAreas: ['Custom String Parsing (No Libraries)', 'Recursion & Backtracking', 'Machine Coding & OOP Design', 'Low-Level Architecture'],
        rounds: [
            {
                roundNumber: 1,
                id: 'zoho-r1-aptitude-c',
                name: 'Round 1: General Aptitude & C Logic Snippets',
                subtitle: 'Written elimination round testing mathematical ability, C pointer tracing, and code output prediction',
                estimatedTime: 'Day 1',
                focusPillars: ['C Pointer Tracing', 'Output Prediction', 'Quantitative Logic', 'Number Puzzles'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'zoho-r2-basic-programming',
                name: 'Round 2: Basic Programming (No Built-in Libraries)',
                subtitle: 'Hands-on coding where you must write custom logic for string pattern matching and 2D matrices without using library helpers',
                estimatedTime: 'Day 2',
                focusPillars: ['Custom String Logic', 'Matrix Traversals', 'Two Pointers', 'Array Manipulations'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && q.title.toLowerCase().includes('string') || q.title.toLowerCase().includes('matrix')))
            },
            {
                roundNumber: 3,
                id: 'zoho-r3-machine-coding',
                name: 'Round 3: Advanced Machine Coding & Mini-Systems',
                subtitle: 'Zoho signature round: build complete working console applications from scratch (Railway Reservation, Snake & Ladder, Invoicing)',
                estimatedTime: 'Day 3',
                focusPillars: ['Object-Oriented Design', 'Railway Berth Allocation', 'Custom Regex Engine', 'Modular Architecture'],
                filter: (q) => q.category === 'DSA' // remaining DSA assigned here
            },
            {
                roundNumber: 4,
                id: 'zoho-r4-tech-hr',
                name: 'Round 4: Technical & HR Code Defense',
                subtitle: 'Defend your Machine Coding architecture, explain time/space complexities, and demonstrate long-term cultural alignment',
                estimatedTime: 'Day 4',
                focusPillars: ['Code Defense & Walkthrough', 'Time & Space Complexity', 'Clean Coding Principles', 'Company Loyalty & Culture'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },
    'Flipkart': {
        tier: 'Top E-Commerce Product',
        focusAreas: ['Machine Coding (Clean Architecture)', 'Sliding Window & Queues', '0/1 Knapsack & DP', 'Customer Centricity'],
        rounds: [
            {
                roundNumber: 1,
                id: 'flipkart-r1-oa',
                name: 'Round 1: Online Coding Assessment (OA)',
                subtitle: 'HackerRank test focusing on mathematical reasoning, sliding windows, and interval scheduling algorithms',
                estimatedTime: 'Day 1',
                focusPillars: ['Quantitative Aptitude', 'Sliding Window', 'Interval Scheduling', 'Prefix Sums'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'flipkart-r2-machine-coding',
                name: 'Round 2: Machine Coding Round (Low-Level Design)',
                subtitle: 'Flipkart signature 90-minute round: implement an in-memory subsystem (Cart Locker, Flash Sale Queue, Voucher Engine) with clean OOP',
                estimatedTime: 'Day 2',
                focusPillars: ['In-Memory System Design', 'Flash Sale Reservation', 'Voucher Knapsack', 'Clean Extensible Code'],
                filter: (q) => q.category === 'DSA' && q.isNovel
            },
            {
                roundNumber: 3,
                id: 'flipkart-r3-advanced-dsa',
                name: 'Round 3: Problem Solving & Advanced DSA',
                subtitle: 'Exhaustive data structures and algorithmic efficiency round (Hard DP, Monotonic Queues, Graphs, Two Pointers)',
                estimatedTime: 'Day 3',
                focusPillars: ['Dynamic Programming', 'Monotonic Queues', 'Shortest Paths & Graphs', 'Binary Search Variants'],
                filter: (q) => q.category === 'DSA' // remaining DSA
            },
            {
                roundNumber: 4,
                id: 'flipkart-r4-manager-culture',
                name: 'Round 4: Hiring Manager & Culture Fit',
                subtitle: 'Engineering trade-offs at e-commerce scale, high-load concurrency discussions, and Flipkart cultural values',
                estimatedTime: 'Day 4',
                focusPillars: ['Customer Obsession', 'Scale & Concurrency', 'Ownership Bias for Action', 'STAR Scenario Answers'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },
    'Amazon': {
        tier: 'Global Cloud & E-Commerce Leader',
        focusAreas: ['Sliding Window & Two Pointers', 'Trees & Lowest Common Ancestor', 'Graph BFS/DFS & Dijkstra', '16 Leadership Principles'],
        rounds: [
            {
                roundNumber: 1,
                id: 'amazon-r1-oa',
                name: 'Round 1: Online Assessment (OA on HackerRank)',
                subtitle: 'Quantitative screening + 2 DSA coding challenges (70 mins) + Work Style Assessment evaluating Amazon Leadership Principles',
                estimatedTime: 'Week 1',
                focusPillars: ['Cognitive Screening', 'Sliding Window', 'Two Pointers', 'Greedy Package Transport'],
                filter: (q) => q.category === 'Aptitude' || (q.category === 'DSA' && (q.round || '').toLowerCase().includes('oa'))
            },
            {
                roundNumber: 2,
                id: 'amazon-r2-tech-1',
                name: 'Round 2: Technical Round 1 — Data Structures & Problem Solving',
                subtitle: 'Live 1-on-1 coding focusing on Trees, Hash Maps, Linked Lists, and edge-case handling with optimal complexity',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary Trees & LCA', 'Linked Lists & Reversal', 'Hash Map Frequency', 'Boundary Conditions'],
                filter: (q) => q.category === 'DSA' && ((q.round || '').toLowerCase().includes('round 1') || q.difficulty === 'Easy')
            },
            {
                roundNumber: 3,
                id: 'amazon-r3-tech-2',
                name: 'Round 3: Technical Round 2 — Advanced Algorithms & Low-Level Design',
                subtitle: 'Complex algorithmic challenges (Graphs, Shortest Paths with obstacles, Dynamic Programming, Heaps) and component design',
                estimatedTime: 'Week 3',
                focusPillars: ['Grid Obstacle BFS', 'Priority Queues / Heaps', 'Dynamic Programming', 'Novel Warehouse Routing'],
                filter: (q) => q.category === 'DSA' // remaining DSA
            },
            {
                roundNumber: 4,
                id: 'amazon-r4-bar-raiser',
                name: 'Round 4: Bar Raiser Round — 16 Leadership Principles',
                subtitle: 'Amazon signature Bar Raiser: rigorous behavioral interview evaluating Customer Obsession, Ownership, Bias for Action, and Hard Problem Solving',
                estimatedTime: 'Week 4',
                focusPillars: ['Customer Obsession', 'Ownership & Earn Trust', 'Invent and Simplify', 'STAR Model Behavioral Defense'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },
    'Google': {
        tier: 'Global Tech Leader',
        focusAreas: ['Topological Sort & Graphs', 'Tries & Tree Traversals', 'Dynamic Programming', 'Googleyness & Ambiguity'],
        rounds: [
            {
                roundNumber: 1,
                id: 'google-r1-phone-screen',
                name: 'Round 1: Google Online Challenge (GOC) & Phone Screen',
                subtitle: '45-minute live interactive algorithmic coding session with a Google engineer on Google Docs / CoderPad',
                estimatedTime: 'Week 1',
                focusPillars: ['Foundational DSA', 'Hash Tables & Strings', 'Time Complexity Analysis', 'Clean Modular Syntax'],
                filter: (q) => q.category === 'Aptitude' || (q.category === 'DSA' && (q.round || '').toLowerCase().includes('phone'))
            },
            {
                roundNumber: 2,
                id: 'google-r2-onsite-1',
                name: 'Round 2: Onsite Technical Round 1 — Complex Trees & Tries',
                subtitle: 'In-depth problem solving on hierarchical data structures, prefix trees (Tries), recursive traversals, and memoization',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary Trees & BSTs', 'Prefix Trees (Tries)', 'Tree Serialization', 'Recursion & Memoization'],
                filter: (q) => q.category === 'DSA' && ((q.round || '').toLowerCase().includes('round 1') || q.difficulty === 'Easy')
            },
            {
                roundNumber: 3,
                id: 'google-r3-onsite-2',
                name: 'Round 3: Onsite Technical Round 2 — Graphs, Topo Sort & DP',
                subtitle: 'Hard algorithmic challenges: Topological sort (Alien Dictionary / Course Schedule), DAG traversals, Rate Limiters, and DP',
                estimatedTime: 'Week 3',
                focusPillars: ['Topological Sort', 'DAG Cycle Detection', 'Rate Limiter Architecture', 'Multi-State DP'],
                filter: (q) => q.category === 'DSA' // remaining DSA
            },
            {
                roundNumber: 4,
                id: 'google-r4-googliness',
                name: 'Round 4: Googliness & Leadership / Team Matching',
                subtitle: 'Google culture interview: thriving in ambiguity, constructive disagreement, ethical engineering, and team collaboration',
                estimatedTime: 'Week 4',
                focusPillars: ['Navigating Ambiguity', 'Doing the Right Thing', 'Collaborative Problem Solving', 'Engineering Humility'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },
    'TCS': {
        tier: 'Global IT Services Leader',
        focusAreas: ['Mathematical Number Theory', 'Greedy Optimization', 'DBMS / SQL Queries', 'Prefix Sums / Dynamic Programming'],
        rounds: [
            {
                roundNumber: 1,
                id: 'tcs-r1-nqt-cognitive',
                name: 'Round 1: TCS NQT Cognitive Assessment',
                subtitle: 'Preliminary screening on Numerical Ability, Logical Reasoning, and Verbal English required to qualify for coding tracks',
                estimatedTime: 'Week 1',
                focusPillars: ['Numerical Ability', 'Logical Deduction', 'Data Interpretation', 'Verbal English'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'tcs-r2-nqt-coding',
                name: 'Round 2: TCS Advanced Coding Assessment (Ninja, Digital, Prime)',
                subtitle: 'Hands-on coding challenges: solve foundational problems for Ninja or advanced algorithms for high-package Digital/Prime upgrades',
                estimatedTime: 'Week 2',
                focusPillars: ['Vehicle Wheel Calculation', 'Subarray Divisibility', 'String Manipulation', 'Prime Track Challenges'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (q.round || '').toLowerCase().includes('nqt') || (q.round || '').toLowerCase().includes('ninja'))
            },
            {
                roundNumber: 3,
                id: 'tcs-r3-technical-interview',
                name: 'Round 3: Technical Interview (Core CS & Projects)',
                subtitle: '1-on-1 technical discussion on Core CS fundamentals (DBMS, SQL Joins, OOP, Operating Systems) and your final year project',
                estimatedTime: 'Week 3',
                focusPillars: ['Advanced Problem Solving', 'DBMS & SQL Normalization', 'OOPs Polymorphism & Inheritance', 'Project Code Walkthrough'],
                filter: (q) => q.category === 'DSA' // remaining DSA
            },
            {
                roundNumber: 4,
                id: 'tcs-r4-managerial-hr',
                name: 'Round 4: Managerial Round (MR) & HR Discussion',
                subtitle: 'Managerial situational scenarios, corporate communication, relocation flexibility, and background verification',
                estimatedTime: 'Week 4',
                focusPillars: ['Situational Conflict Resolution', 'Work Shift & Relocation Flexibility', 'Team Collaboration', 'STAR Behavioral Answers'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },
    'Accenture': {
        tier: 'Global Tech Consulting Leader',
        focusAreas: ['Binary / Bitwise Operations', 'String Transformations', 'Pseudocode Debugging', 'Logical Reasoning'],
        rounds: [
            {
                roundNumber: 1,
                id: 'accenture-r1-cognitive',
                name: 'Round 1: Cognitive & Critical Reasoning Assessment',
                subtitle: 'Analytical thinking, abstract reasoning, quantitative puzzles, and English language communication',
                estimatedTime: 'Week 1',
                focusPillars: ['Critical Reasoning', 'Abstract Logic', 'Quantitative Math', 'English Language'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'accenture-r2-technical-pseudocode',
                name: 'Round 2: Technical Assessment & Pseudocode Logic',
                subtitle: 'Code snippet execution, loop analysis, bitwise AND/OR/XOR operators, and algorithmic debugging',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary String Operations (A/B/C)', 'Bitwise Operators', 'Loop Output Tracing', 'Algorithm Debugging'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || q.title.toLowerCase().includes('binary') || q.title.toLowerCase().includes('sum'))
            },
            {
                roundNumber: 3,
                id: 'accenture-r3-coding-automata',
                name: 'Round 3: Coding Assessment (Automata)',
                subtitle: '2 Coding questions in 45 minutes: string manipulation, autobiographical numbers, and genuine Accenture exclusive problems',
                estimatedTime: 'Week 3',
                focusPillars: ['Rat Food House Calculation', 'Autobiographical Number', 'Move Hyphens Logic', 'Large Small Sum Array'],
                filter: (q) => q.category === 'DSA' // remaining DSA
            },
            {
                roundNumber: 4,
                id: 'accenture-r4-communication-hr',
                name: 'Round 4: Communication Assessment & Technical + HR Interview',
                subtitle: 'Voice-based communication evaluation followed by technical interview on core CS basics, projects, and behavioral scenarios',
                estimatedTime: 'Week 4',
                focusPillars: ['Fluency & Pronunciation', 'Core CS Fundamentals', 'Final Year Project Defense', 'Client Situational Roleplay'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    }
};

// Generic Generator for the other 14 companies to ensure EVERY company has tailored rounds
function generateDefaultCompanyRounds(canonicalName, companyType) {
    const isProduct = companyType === 'product';

    if (isProduct) {
        return {
            tier: 'Top Tier Product Firm',
            focusAreas: ['Data Structures & Algorithms', 'System Architecture & Concurrency', 'Low-Level Design', 'Cultural Alignment'],
            rounds: [
                {
                    roundNumber: 1,
                    id: `${canonicalName.toLowerCase()}-r1-oa`,
                    name: 'Round 1: Online Assessment (OA & Core Problem Solving)',
                    subtitle: `${canonicalName} preliminary screening: mathematical rigor and high-frequency algorithmic challenges`,
                    estimatedTime: 'Week 1',
                    focusPillars: ['Quantitative Reasoning', 'Sliding Window', 'Two Pointers', 'Array Partitioning'],
                    filter: (q) => q.category === 'Aptitude'
                },
                {
                    roundNumber: 2,
                    id: `${canonicalName.toLowerCase()}-r2-tech-1`,
                    name: 'Round 2: Technical Round 1 — Data Structures & Foundations',
                    subtitle: `Live 1-on-1 coding interview evaluating linear data structures, tree traversals, and clean edge-case handling`,
                    estimatedTime: 'Week 2',
                    focusPillars: ['Binary Trees', 'Linked Lists', 'Stack Logic', 'Hash Map Frequency'],
                    filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium'))
                },
                {
                    roundNumber: 3,
                    id: `${canonicalName.toLowerCase()}-r3-tech-2`,
                    name: 'Round 3: Technical Round 2 — Advanced Algorithms & Architecture',
                    subtitle: `Complex algorithmic paradigms (Graphs, Shortest Paths, DP, Heaps) and ${canonicalName} company-exclusive assessments`,
                    estimatedTime: 'Week 3',
                    focusPillars: ['Graph BFS/DFS', 'Dynamic Programming', 'Priority Queues', '✨ Company Exclusives'],
                    filter: (q) => q.category === 'DSA'
                },
                {
                    roundNumber: 4,
                    id: `${canonicalName.toLowerCase()}-r4-leadership`,
                    name: 'Round 4: Senior Leadership & Engineering Culture',
                    subtitle: `In-depth behavioral evaluation using the STAR framework, architectural ownership, and cultural alignment`,
                    estimatedTime: 'Week 4',
                    focusPillars: ['Core CS Subjects', 'System Design Trade-offs', 'Engineering Leadership', 'STAR Model Responses'],
                    filter: (q) => q.category === 'Interview'
                }
            ]
        };
    } else {
        return {
            tier: 'Global IT Services Leader',
            focusAreas: ['Cognitive & Numerical Reasoning', 'Core Programming & Logic', 'DBMS / SQL Queries', 'Client Readiness'],
            rounds: [
                {
                    roundNumber: 1,
                    id: `${canonicalName.toLowerCase()}-r1-aptitude`,
                    name: `Round 1: ${canonicalName} Cognitive & Aptitude Assessment`,
                    subtitle: `Preliminary aptitude screening covering numerical ability, logical deduction, and verbal comprehension`,
                    estimatedTime: 'Week 1',
                    focusPillars: ['Numerical Ability', 'Logical Reasoning', 'Verbal Comprehension', 'Speed & Accuracy'],
                    filter: (q) => q.category === 'Aptitude'
                },
                {
                    roundNumber: 2,
                    id: `${canonicalName.toLowerCase()}-r2-coding-assessment`,
                    name: `Round 2: ${canonicalName} Hands-on Coding Assessment`,
                    subtitle: `Hands-on programming round testing foundational string manipulation, arrays, and mathematical algorithms`,
                    estimatedTime: 'Week 2',
                    focusPillars: ['Array Operations', 'String Parsing', 'Two Pointers', 'Basic Dynamic Programming'],
                    filter: (q) => q.category === 'DSA' && q.difficulty === 'Easy'
                },
                {
                    roundNumber: 3,
                    id: `${canonicalName.toLowerCase()}-r3-technical-interview`,
                    name: `Round 3: Technical Interview (DSA & Core CS)`,
                    subtitle: `1-on-1 interview on intermediate data structures, algorithm efficiency, DBMS, and academic projects`,
                    estimatedTime: 'Week 3',
                    focusPillars: ['Trees & Search', 'SQL Normalization', 'OOP Principles', '✨ Company Exclusives'],
                    filter: (q) => q.category === 'DSA'
                },
                {
                    roundNumber: 4,
                    id: `${canonicalName.toLowerCase()}-r4-hr-interview`,
                    name: `Round 4: HR & Behavioral Interview`,
                    subtitle: `Professional communication, cultural fit, adaptability to client engagements, and teamwork`,
                    estimatedTime: 'Week 4',
                    focusPillars: ['Professional Communication', 'Situational Judgments', 'Team Collaboration', 'STAR Behavioral Model'],
                    filter: (q) => q.category === 'Interview'
                }
            ]
        };
    }
}

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getCompanyRoadmap = async (req, res) => {
    try {
        const companyName = req.params.company.trim();
        const compRegex = new RegExp(`^${escapeRegex(companyName)}$`, 'i');

        const companyDoc = await Company.findOne({ name: compRegex });
        const allQuestions = await Question.find({ company: compRegex }).sort({ difficulty: 1, title: 1 });

        if (!allQuestions || allQuestions.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No questions found for company: ${companyName}`
            });
        }

        const canonicalName = companyDoc ? companyDoc.name : companyName;
        const companyType = companyDoc ? companyDoc.type : (allQuestions[0].companyType || 'service');

        // Look up company-specific round configuration
        const config = COMPANY_ROUNDS_CONFIG[canonicalName] || generateDefaultCompanyRounds(canonicalName, companyType);

        // Partition the 100 questions into the company's authentic rounds without dropping any questions
        const assignedQuestions = new Set();
        const milestoneRounds = [];

        // Track questions categorized
        const remainingPool = [...allQuestions];

        config.rounds.forEach((roundDef, idx) => {
            const isLastRound = idx === config.rounds.length - 1;
            let matchedQuestions = [];

            if (isLastRound) {
                // Any questions not yet assigned fall into the final round
                matchedQuestions = remainingPool.filter(q => !assignedQuestions.has(q._id.toString()));
            } else {
                matchedQuestions = remainingPool.filter(q => {
                    if (assignedQuestions.has(q._id.toString())) return false;
                    return roundDef.filter(q);
                });
            }

            matchedQuestions.forEach(q => assignedQuestions.add(q._id.toString()));

            milestoneRounds.push({
                roundNumber: roundDef.roundNumber,
                id: roundDef.id,
                name: roundDef.name,
                subtitle: roundDef.subtitle,
                estimatedTime: roundDef.estimatedTime,
                focusPillars: roundDef.focusPillars,
                questionsCount: matchedQuestions.length,
                questions: matchedQuestions.map(q => ({
                    ...q.toObject(),
                    roundStageName: roundDef.name
                }))
            });
        });

        // Ensure any leftovers are safely placed in round with matching category
        if (assignedQuestions.size < allQuestions.length) {
            allQuestions.forEach(q => {
                if (!assignedQuestions.has(q._id.toString())) {
                    // Place in round 3 (Technical) or round 4 (HR)
                    const targetRound = q.category === 'Interview' ? milestoneRounds[milestoneRounds.length - 1] : milestoneRounds[milestoneRounds.length - 2];
                    targetRound.questions.push(q.toObject());
                    targetRound.questionsCount = targetRound.questions.length;
                    assignedQuestions.add(q._id.toString());
                }
            });
        }

        const dsaQuestions = allQuestions.filter(q => q.category === 'DSA');
        const aptitudeQuestions = allQuestions.filter(q => q.category === 'Aptitude');
        const interviewQuestions = allQuestions.filter(q => q.category === 'Interview');
        const novelDSA = dsaQuestions.filter(q => q.isNovel || !q.matchedProblems || q.matchedProblems.length === 0);
        const canonicalDSA = dsaQuestions.filter(q => !q.isNovel && q.matchedProblems && q.matchedProblems.length > 0);

        const stats = {
            totalQuestions: allQuestions.length,
            dsaCount: dsaQuestions.length,
            aptitudeCount: aptitudeQuestions.length,
            interviewCount: interviewQuestions.length,
            novelCount: novelDSA.length,
            canonicalCount: canonicalDSA.length,
            difficulty: {
                easy: allQuestions.filter(q => q.difficulty === 'Easy').length,
                medium: allQuestions.filter(q => q.difficulty === 'Medium').length,
                hard: allQuestions.filter(q => q.difficulty === 'Hard').length
            }
        };

        // Create recruitment pipeline stages for the blueprint card
        const recruitmentPipeline = milestoneRounds.map(r => ({
            step: `Round ${r.roundNumber}`,
            name: r.name.replace(/^Round \d+:\s*/i, ''),
            desc: r.subtitle
        }));

        return res.json({
            success: true,
            company: {
                name: canonicalName,
                type: companyType,
                tier: config.tier,
                focusAreas: config.focusAreas,
                hiringProcess: recruitmentPipeline
            },
            stats,
            rounds: milestoneRounds,
            totalRounds: milestoneRounds.length
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to generate company roadmap',
            error: error.message
        });
    }
};

module.exports = {
    getCompanyRoadmap
};