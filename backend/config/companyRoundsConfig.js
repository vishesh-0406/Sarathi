/**
 * Authentic Company-Specific Recruitment Pipelines & Round Configurations
 * Reflects real-world recruitment processes for 20 companies:
 * - Product Firms (3, 4, or 5 custom rounds with official company naming)
 * - Service & Consulting Firms (3 authentic rounds matching national hiring pipelines)
 */

const COMPANY_ROUNDS_CONFIG = {
    // =========================================================================
    // 1. PRODUCT-BASED LEADERS (4 & 5 STAGES)
    // =========================================================================

    'Google': {
        tier: 'Global Technology Leader',
        focusAreas: ['Topological Sort & DAGs', 'Tries & Prefix Search', 'Tree Traversals & Serialization', 'Dynamic Programming', 'Googleyness & Ambiguity'],
        rounds: [
            {
                roundNumber: 1,
                id: 'google-r1-goc-phone',
                name: 'Round 1: Google Online Challenge (GOC) & Technical Phone Screen',
                subtitle: 'Quantitative screening and a 45-minute live interactive session on CoderPad/Docs evaluating clean code and time complexity',
                estimatedTime: 'Week 1',
                focusPillars: ['Cognitive Screening', 'Hash Tables & Two Pointers', 'Time Complexity Analysis', 'Clean Modular Syntax'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'google-r2-onsite-foundations',
                name: 'Round 2: Onsite Technical Round 1 — Linear Structures & Recursion',
                subtitle: 'First virtual onsite round: linear data structures, sliding windows, recursion, and boundary condition handling',
                estimatedTime: 'Week 2',
                focusPillars: ['Array Windows', 'String Processing', 'Recursion & Backtracking', 'Corner Case Robustness'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('tree') && !q.title.toLowerCase().includes('graph')))
            },
            {
                roundNumber: 3,
                id: 'google-r3-onsite-trees-tries',
                name: 'Round 3: Onsite Technical Round 2 — Complex Trees, Tries & Graph Traversals',
                subtitle: 'Hierarchical structures, prefix search engines (Tries), topological sort, and cycle detection in directed graphs',
                estimatedTime: 'Week 3',
                focusPillars: ['Binary Trees & BSTs', 'Prefix Trees (Tries)', 'Topological Sorting', 'Graph BFS / DFS'],
                filter: (q) => q.category === 'DSA' && (q.title.toLowerCase().includes('tree') || q.title.toLowerCase().includes('trie') || q.title.toLowerCase().includes('graph') || q.title.toLowerCase().includes('course') || q.title.toLowerCase().includes('alien'))
            },
            {
                roundNumber: 4,
                id: 'google-r4-onsite-dp-scale',
                name: 'Round 4: Onsite Technical Round 3 — Dynamic Programming & Scale Optimization',
                subtitle: 'Hard algorithmic challenges: multi-state dynamic programming, rate limiting logic, and memory-efficient data structures',
                estimatedTime: 'Week 4',
                focusPillars: ['Multi-Dimensional DP', 'Monotonic Stacks', 'Rate Limiter Logic', 'Memory Optimization'],
                filter: (q) => q.category === 'DSA' // remaining DSA
            },
            {
                roundNumber: 5,
                id: 'google-r5-googleyness-leadership',
                name: 'Round 5: Googleyness & Leadership / Team Matching',
                subtitle: 'Google culture evaluation: thriving in ambiguity, constructive disagreement, ethical engineering, and cross-functional leadership',
                estimatedTime: 'Week 5',
                focusPillars: ['Navigating Ambiguity', 'Ethical Engineering', 'Collaborative Disagreement', 'Team Alignment'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Zoho': {
        tier: 'Global SaaS Leader (Bootstrapped)',
        focusAreas: ['Custom String Parsing (No Libraries)', '2D Matrix Traversals', 'Machine Coding & OOP Architecture', 'Code Walkthrough & Defense'],
        rounds: [
            {
                roundNumber: 1,
                id: 'zoho-r1-aptitude-c',
                name: 'Round 1: General Aptitude & C Pointer Tracing',
                subtitle: 'Written elimination round testing mathematical ability, C pointer tracing, and manual code output prediction (no IDE allowed)',
                estimatedTime: 'Day 1',
                focusPillars: ['C Pointer Arithmetic', 'Loop Output Tracing', 'Quantitative Aptitude', 'Mathematical Logic'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'zoho-r2-basic-programming',
                name: 'Round 2: Basic Programming (No Built-in Libraries)',
                subtitle: 'Write pure algorithms from scratch without library utilities: custom substring search, matrix spirals, and character arrays',
                estimatedTime: 'Day 2',
                focusPillars: ['Custom String Logic', 'Matrix Spirals', 'Two Pointers', 'Array Manipulations'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && (q.title.toLowerCase().includes('string') || q.title.toLowerCase().includes('matrix'))))
            },
            {
                roundNumber: 3,
                id: 'zoho-r3-machine-coding',
                name: 'Round 3: Advanced Machine Coding & Mini-Systems',
                subtitle: 'Zoho signature round: build complete working console applications from scratch (Railway Reservation, Snake & Ladder, Invoicing)',
                estimatedTime: 'Day 3',
                focusPillars: ['Object-Oriented Design', 'Railway Berth Allocation', 'Custom Regex Engine', 'Modular Architecture'],
                filter: (q) => q.category === 'DSA' && (q.isNovel || q.difficulty === 'Hard')
            },
            {
                roundNumber: 4,
                id: 'zoho-r4-tech-interview',
                name: 'Round 4: Technical Interview & Code Defense',
                subtitle: 'Defend your Machine Coding architecture, explain time/space complexities, handle live requirement extensions, and review CS fundamentals',
                estimatedTime: 'Day 4',
                focusPillars: ['Code Defense & Walkthrough', 'Time & Space Complexity', 'Refactoring Under Pressure', 'OOP Design Patterns'],
                filter: (q) => q.category === 'DSA' // remaining DSA
            },
            {
                roundNumber: 5,
                id: 'zoho-r5-hr-culture',
                name: 'Round 5: HR Interview & Cultural Alignment',
                subtitle: 'Zoho culture evaluation: long-term company loyalty, hands-on craft mindset, and product ownership ethos',
                estimatedTime: 'Day 5',
                focusPillars: ['Company Loyalty', 'Self-Driven Learning', 'Product Craft Mindset', 'Team Collaboration'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Amazon': {
        tier: 'Global Cloud & E-Commerce Leader',
        focusAreas: ['Sliding Window & Two Pointers', 'Trees & Lowest Common Ancestor', 'Graph BFS/DFS & Heaps', '16 Leadership Principles'],
        rounds: [
            {
                roundNumber: 1,
                id: 'amazon-r1-oa',
                name: 'Round 1: Online Assessment (OA on HackerRank)',
                subtitle: '70-minute assessment: cognitive screening, 2 DSA coding challenges, and the Amazon Work Style Behavioral Assessment',
                estimatedTime: 'Week 1',
                focusPillars: ['Cognitive Screening', 'Sliding Window', 'Two Pointers', 'Work Style Assessment'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'amazon-r2-tech-1',
                name: 'Round 2: Technical Round 1 — Data Structures & Problem Solving',
                subtitle: 'Live 1-on-1 coding focusing on Trees, Hash Maps, Linked Lists, and optimal edge-case handling',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary Trees & LCA', 'Linked Lists & Reversal', 'Hash Map Frequency', 'Boundary Conditions'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('graph') && !q.title.toLowerCase().includes('grid')))
            },
            {
                roundNumber: 3,
                id: 'amazon-r3-tech-2',
                name: 'Round 3: Technical Round 2 — Advanced Algorithms & Architecture',
                subtitle: 'Complex algorithmic challenges (Grid BFS, Shortest Paths with obstacles, Dynamic Programming, Heaps) and Amazon exclusives',
                estimatedTime: 'Week 3',
                focusPillars: ['Grid Obstacle BFS', 'Priority Queues / Heaps', 'Dynamic Programming', 'Amazon Exclusives'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 4,
                id: 'amazon-r4-bar-raiser',
                name: 'Round 4: The Bar Raiser Round — 16 Leadership Principles',
                subtitle: 'Amazon signature Bar Raiser: rigorous behavioral interview evaluating Customer Obsession, Ownership, Bias for Action, and Hard Problem Solving',
                estimatedTime: 'Week 4',
                focusPillars: ['Customer Obsession', 'Ownership & Earn Trust', 'Invent and Simplify', 'STAR Model Defense'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Microsoft': {
        tier: 'Global Computing & Cloud Platform Leader',
        focusAreas: ['Binary Trees & BST Traversals', 'Graph Search & Backtracking', 'Low-Level Component Design', 'As-Appropriate (AA) Leadership'],
        rounds: [
            {
                roundNumber: 1,
                id: 'microsoft-r1-codility-oa',
                name: 'Round 1: Microsoft Codility Online Assessment (OA)',
                subtitle: 'Screening round on Codility: algorithmic problem solving, string manipulation, and bitwise optimization under strict memory constraints',
                estimatedTime: 'Week 1',
                focusPillars: ['Cognitive Screening', 'String Manipulation', 'Bitwise Operators', 'Memory Bounds'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'microsoft-r2-tech-1',
                name: 'Round 2: Technical Round 1 — Data Structures & Foundations',
                subtitle: 'Live coding session covering Binary Trees, Two Pointers, Stacks, and in-place array transformations',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary Search Trees', 'Stack Logic', 'Two Pointers', 'Recursion & Memoization'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('graph')))
            },
            {
                roundNumber: 3,
                id: 'microsoft-r3-tech-2',
                name: 'Round 3: Technical Round 2 — Algorithms & Low-Level Component Design',
                subtitle: 'Advanced algorithms (Heaps, Graphs, Dynamic Programming) alongside low-level design of subsystems (Undo-Redo Trees, VM Monitors)',
                estimatedTime: 'Week 3',
                focusPillars: ['Graph BFS / DFS', 'Heap Priority Queues', 'Low-Level Design', 'Microsoft Exclusives'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 4,
                id: 'microsoft-r4-as-appropriate',
                name: 'Round 4: As-Appropriate (AA) / Executive Leadership Interview',
                subtitle: 'Microsoft signature "AA" round with a Partner / Director: deep-dive into architectural trade-offs, growth mindset, and technical ownership',
                estimatedTime: 'Week 4',
                focusPillars: ['Growth Mindset', 'Architectural Ownership', 'System Scalability', 'STAR Behavioral Evaluation'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Adobe': {
        tier: 'Creative Cloud & Digital Experience Leader',
        focusAreas: ['Intervals & Range Queries', 'Binary Trees & Geometry', 'Dynamic Programming & Memoization', 'Digital Media Architecture'],
        rounds: [
            {
                roundNumber: 1,
                id: 'adobe-r1-campus-oa',
                name: 'Round 1: Adobe Campus Coding Assessment (OA)',
                subtitle: 'Preliminary screening on HackerRank / CoCubes covering quantitative analysis, core CS fundamentals, and algorithmic coding',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Ability', 'Interval Overlaps', 'Array Sorting', 'Prefix Calculations'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'adobe-r2-tech-1',
                name: 'Round 2: Technical Round 1 — Core Data Structures & Logic',
                subtitle: 'Live 1-on-1 coding interview evaluating Linked Lists, Binary Trees, String Pattern Matching, and runtime complexity',
                estimatedTime: 'Week 2',
                focusPillars: ['Linked Lists', 'Binary Trees', 'String Searching', 'Clean Code Hygiene'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('matrix') && !q.title.toLowerCase().includes('render')))
            },
            {
                roundNumber: 3,
                id: 'adobe-r3-tech-2',
                name: 'Round 3: Technical Round 2 — Advanced Algorithms & Media Systems',
                subtitle: 'Complex 2D matrix geometry, render pipeline simulation, graph traversals, and Adobe proprietary algorithmic challenges',
                estimatedTime: 'Week 3',
                focusPillars: ['2D Matrix Operations', 'Dynamic Programming', 'Heaps & Priority', 'Adobe Exclusives'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 4,
                id: 'adobe-r4-director-culture',
                name: 'Round 4: Senior Director & HR Culture Fit',
                subtitle: 'Behavioral discussion with an Adobe Engineering Director: user-centric design, innovation, and Adobe core cultural values',
                estimatedTime: 'Week 4',
                focusPillars: ['Creative Problem Solving', 'Product Ownership', 'STAR Behavioral Answers', 'Culture Fit'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Oracle': {
        tier: 'Enterprise Database & Cloud Infrastructure Leader',
        focusAreas: ['B-Trees & Indexing Algorithms', 'Concurrency & Deadlock Resolution', 'Core Systems & Memory Architecture', 'SQL & DBMS Optimization'],
        rounds: [
            {
                roundNumber: 1,
                id: 'oracle-r1-tech-assessment',
                name: 'Round 1: Oracle Technical Assessment & Quantitative Screen',
                subtitle: 'Online screening covering analytical aptitude, OS/DBMS core fundamentals, and foundational coding challenges',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Analysis', 'OS & Memory MCQs', 'DBMS & SQL Concepts', 'Foundational Arrays'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'oracle-r2-tech-1',
                name: 'Round 2: Technical Round 1 — Core Problem Solving (DSA)',
                subtitle: 'Live coding session on linear data structures, tree traversals, two pointers, and memory-efficient algorithms',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary Trees', 'Linked Lists', 'Hash Tables', 'Two Pointers'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('concur') && !q.title.toLowerCase().includes('buffer') && !q.title.toLowerCase().includes('lru')))
            },
            {
                roundNumber: 3,
                id: 'oracle-r3-core-systems',
                name: 'Round 3: Core Systems & Server Technology Round',
                subtitle: 'Oracle signature round: concurrency, deadlock detection, buffer pool management, LRU caches, and database internals',
                estimatedTime: 'Week 3',
                focusPillars: ['Concurrency & Locks', 'Buffer Pools & LRU', 'B-Trees & Indexing', 'Oracle Exclusives'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 4,
                id: 'oracle-r4-director-hr',
                name: 'Round 4: Technical Director / Managerial & HR Round',
                subtitle: 'Discussion on distributed transaction reliability, ACID properties, engineering maturity, and professional aspirations',
                estimatedTime: 'Week 4',
                focusPillars: ['ACID & Reliability', 'System Scalability', 'STAR Situational Responses', 'Team Collaboration'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Uber': {
        tier: 'Global Mobility & Distributed Systems Leader',
        focusAreas: ['Graph Shortest Paths (Dijkstra/A*)', 'High-Throughput Concurrency', 'Geohashing & Spatial Algorithms', 'Uber Bar Raiser'],
        rounds: [
            {
                roundNumber: 1,
                id: 'uber-r1-analytical-screen',
                name: 'Round 1: Quantitative & Analytical Online Assessment',
                subtitle: 'HackerRank test assessing speed math, probability, array intervals, and foundational algorithmic efficiency',
                estimatedTime: 'Week 1',
                focusPillars: ['Probability & Math', 'Interval Overlaps', 'Two Pointers', 'Array Partitions'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'uber-r2-coderpad-screen',
                name: 'Round 2: Technical Screen (CoderPad Live Coding)',
                subtitle: 'Live collaborative session with an Uber engineer focusing on clean code, optimal data structures, and edge-case handling',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary Trees & BSTs', 'Hash Maps & Stacks', 'Sliding Window', 'Code Hygiene'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('graph') && !q.title.toLowerCase().includes('route') && !q.title.toLowerCase().includes('fare')))
            },
            {
                roundNumber: 3,
                id: 'uber-r3-distributed-onsite',
                name: 'Round 3: Technical Onsite — Distributed Algorithms & Concurrency',
                subtitle: 'Uber signature challenges: driver matching, surge pricing simulations, geohash spatial grids, and shortest path algorithms',
                estimatedTime: 'Week 3',
                focusPillars: ['Dijkstra & Graph Paths', 'Rate Limiters & Queues', 'Spatial Geohashing', 'Uber Exclusives'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 4,
                id: 'uber-r4-bar-raiser',
                name: 'Round 4: SDE Bar Raiser & Engineering Leadership',
                subtitle: 'Rigorous behavioral evaluation assessing architectural ownership, bias for high-velocity execution, and Uber cultural norms',
                estimatedTime: 'Week 4',
                focusPillars: ['High-Velocity Execution', 'Architectural Ownership', 'Constructive Disagreement', 'STAR Leadership Defense'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Salesforce': {
        tier: 'Enterprise Cloud & CRM Architecture Leader',
        focusAreas: ['Multi-Tenant Data Modeling', 'Graph Traversal & BFS', 'Dynamic Programming', 'Trust & Ohana Culture'],
        rounds: [
            {
                roundNumber: 1,
                id: 'salesforce-r1-hackerrank-oa',
                name: 'Round 1: Salesforce HackerRank Online Assessment',
                subtitle: 'Screening assessment on quantitative ability, core CS principles, and 2 hands-on coding challenges',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Aptitude', 'String Hashing', 'Array Permutations', 'Core CS Fundamentals'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'salesforce-r2-tech-1',
                name: 'Round 2: Technical Round 1 — Data Structures & Foundations',
                subtitle: '1-on-1 coding interview evaluating Binary Trees, Linked Lists, sliding windows, and optimal time complexities',
                estimatedTime: 'Week 2',
                focusPillars: ['Binary Search Trees', 'Linked Lists', 'Sliding Window', 'Complexity Analysis'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('tenant') && !q.title.toLowerCase().includes('event')))
            },
            {
                roundNumber: 3,
                id: 'salesforce-r3-tech-2-systems',
                name: 'Round 3: Technical Round 2 — Systems & Architecture (MTS Evaluation)',
                subtitle: 'Advanced algorithmic challenges (Graphs, Heaps, DP) and multi-tenant cloud design scenarios (Event Queues, Org Limits)',
                estimatedTime: 'Week 3',
                focusPillars: ['Graph BFS / DFS', 'Dynamic Programming', 'Multi-Tenant Architecture', 'Salesforce Exclusives'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 4,
                id: 'salesforce-r4-manager-culture',
                name: 'Round 4: Engineering Manager & Cultural Alignment',
                subtitle: 'Evaluation of customer success mindset, Trust (Salesforce #1 value), team communication, and past project architecture',
                estimatedTime: 'Week 4',
                focusPillars: ['Customer Trust', 'Ohana Values', 'Project Architecture', 'STAR Scenario Answers'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    // =========================================================================
    // 2. PRODUCT-BASED LEADERS (3 STAGES)
    // =========================================================================

    'Flipkart': {
        tier: 'Top E-Commerce Product Firm',
        focusAreas: ['Machine Coding (Low-Level Design)', 'Sliding Window & Queues', '0/1 Knapsack & DP', 'Customer First Mindset'],
        rounds: [
            {
                roundNumber: 1,
                id: 'flipkart-r1-oa',
                name: 'Round 1: Online Coding Assessment (OA on HackerRank)',
                subtitle: 'Screening test focusing on quantitative reasoning, prefix sums, sliding window arrays, and interval scheduling',
                estimatedTime: 'Day 1',
                focusPillars: ['Quantitative Aptitude', 'Sliding Window', 'Interval Scheduling', 'Prefix Calculations'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'flipkart-r2-machine-coding',
                name: 'Round 2: Machine Coding Round (Low-Level Design)',
                subtitle: 'Flipkart signature 90-minute round: implement an in-memory subsystem (Cart Locker, Flash Sale Queue, Voucher Engine) with clean OOP',
                estimatedTime: 'Day 2',
                focusPillars: ['In-Memory System Design', 'Flash Sale Reservation', 'Voucher Knapsack', 'Clean Extensible Code'],
                filter: (q) => q.category === 'DSA' && (q.isNovel || q.difficulty === 'Hard' || q.title.toLowerCase().includes('machine') || q.title.toLowerCase().includes('design'))
            },
            {
                roundNumber: 3,
                id: 'flipkart-r3-advanced-problem-solving',
                name: 'Round 3: Problem Solving, Advanced DSA & Hiring Manager Round',
                subtitle: 'Exhaustive data structures interview (Hard DP, Monotonic Queues, Graphs) followed by scalability and cultural alignment with the Engineering Manager',
                estimatedTime: 'Day 3',
                focusPillars: ['Dynamic Programming', 'Monotonic Queues', 'Graph Shortest Paths', 'Customer First & Ownership'],
                filter: (q) => q.category === 'DSA' || q.category === 'Interview'
            }
        ]
    },

    'Goldman Sachs': {
        tier: 'Global Investment Banking & Financial Technology Leader',
        focusAreas: ['Probability & Combinatorics', 'Financial Mathematics & Hash Maps', 'Two Pointers & Binary Search', 'Integrity & Excellence'],
        rounds: [
            {
                roundNumber: 1,
                id: 'goldman-r1-quant-oa',
                name: 'Round 1: Quantitative Aptitude & Technical Assessment',
                subtitle: 'Rigorous HackerRank test covering advanced probability, permutations, number theory, and 2 algorithmic coding problems',
                estimatedTime: 'Week 1',
                focusPillars: ['Probability & Statistics', 'Combinatorics', 'Number Theory', 'Foundational Arrays'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'goldman-r2-coderpad-tech',
                name: 'Round 2: CoderPad Technical Interview (Math Logic & DSA)',
                subtitle: 'Live pair programming with an Associate/VP: mathematical algorithmic logic, hash tables, sliding windows, and string parsing',
                estimatedTime: 'Week 2',
                focusPillars: ['Mathematical Logic', 'Two Pointers', 'Hash Map Frequency', 'Binary Search Variants'],
                filter: (q) => q.category === 'DSA' && (q.difficulty === 'Easy' || (!q.isNovel && q.difficulty === 'Medium' && !q.title.toLowerCase().includes('graph') && !q.title.toLowerCase().includes('trade')))
            },
            {
                roundNumber: 3,
                id: 'goldman-r3-final-onsite',
                name: 'Round 3: Final Technical Onsite & Divisional Interview',
                subtitle: 'Deep algorithmic problem solving (DP, Graph traversals, Trade order simulations) followed by behavioral evaluation on integrity and client service',
                estimatedTime: 'Week 3',
                focusPillars: ['Dynamic Programming', 'Graph Cycles & Topo Sort', 'Ethical Integrity', 'Goldman Sachs Exclusives'],
                filter: (q) => q.category === 'DSA' || q.category === 'Interview'
            }
        ]
    },

    // =========================================================================
    // 3. SERVICE & CONSULTING LEADERS (3 AUTHENTIC STAGES)
    // =========================================================================

    'TCS': {
        tier: 'Global IT Services Leader',
        focusAreas: ['Mathematical Number Theory', 'Greedy Optimization', 'DBMS / SQL Queries', 'Ninja / Digital / Prime Upgrades'],
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
                name: 'Round 2: TCS Advanced Coding Assessment (Ninja, Digital & Prime Tracks)',
                subtitle: 'Hands-on coding challenges: solve foundational problems for Ninja or advanced algorithms for high-package Digital/Prime upgrades',
                estimatedTime: 'Week 2',
                focusPillars: ['Vehicle Wheel Calculation', 'Subarray Divisibility', 'String Manipulation', 'Prime Track Challenges'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'tcs-r3-tr-mr-hr',
                name: 'Round 3: Technical, Managerial & HR Integrated Interview (TR / MR / HR)',
                subtitle: 'Panel interview covering core CS fundamentals (DBMS, SQL, OOPs), final year project defense, and managerial situational questions',
                estimatedTime: 'Week 3',
                focusPillars: ['DBMS & SQL Queries', 'OOPs Principles', 'Project Code Walkthrough', 'STAR Situational Answers'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Infosys': {
        tier: 'Global Digital Services & Consulting Leader',
        focusAreas: ['InfyTQ / HackWithInfy Testing', 'Data Structures & Recursion', 'Specialist Programmer (SP) / DSE Tracks', 'Corporate Client Readiness'],
        rounds: [
            {
                roundNumber: 1,
                id: 'infosys-r1-certification-oa',
                name: 'Round 1: Infosys Certification Assessment (InfyTQ / HackWithInfy)',
                subtitle: 'National screening test covering programming fundamentals, quantitative aptitude, and core algorithmic problem solving',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Aptitude', 'Reasoning Ability', 'Programming Logic', 'Speed & Accuracy'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'infosys-r2-specialist-coding',
                name: 'Round 2: Technical Interview (Specialist Programmer & DSE Tracks)',
                subtitle: 'Comprehensive technical interview: coding challenges, tree/array algorithms, OOP architecture, and SQL query optimization',
                estimatedTime: 'Week 2',
                focusPillars: ['Data Structures & Algorithms', 'OOP in Python/Java', 'Database Query Tuning', 'Specialist Programmer Problems'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'infosys-r3-behavioral-hr',
                name: 'Round 3: Behavioral & HR Discussion',
                subtitle: 'Evaluation of communication clarity, learning agility, team collaboration, and client deployment readiness',
                estimatedTime: 'Week 3',
                focusPillars: ['Communication Fluency', 'Continuous Learning', 'Shift / Location Flexibility', 'STAR Scenario Responses'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Accenture': {
        tier: 'Global Tech Consulting Leader',
        focusAreas: ['Binary / Bitwise Operations', 'String Transformations', 'Automata Coding Assessment', 'Communication Fluency'],
        rounds: [
            {
                roundNumber: 1,
                id: 'accenture-r1-cognitive-pseudocode',
                name: 'Round 1: Cognitive & Critical Reasoning Assessment + Pseudocode Debugging',
                subtitle: 'Analytical thinking, abstract reasoning, quantitative puzzles, English ability, and bitwise loop pseudocode tracing',
                estimatedTime: 'Week 1',
                focusPillars: ['Critical Reasoning', 'Abstract Logic', 'Quantitative Math', 'Pseudocode Debugging'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'accenture-r2-automata-coding',
                name: 'Round 2: Coding Assessment (Automata)',
                subtitle: '2 Coding questions in 45 minutes: string manipulation, autobiographical numbers, binary operations, and Accenture exclusives',
                estimatedTime: 'Week 2',
                focusPillars: ['Rat Food House Calculation', 'Autobiographical Number', 'Move Hyphens Logic', 'Large Small Sum Array'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'accenture-r3-communication-hr',
                name: 'Round 3: Communication Assessment & Virtual Technical + HR Interview',
                subtitle: 'Voice-based automated fluency assessment followed by technical discussion on core CS, projects, and situational roleplays',
                estimatedTime: 'Week 3',
                focusPillars: ['Fluency & Pronunciation', 'Core CS Fundamentals', 'Final Year Project Defense', 'Client Situational Roleplay'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Wipro': {
        tier: 'Global IT & Consulting Corporation',
        focusAreas: ['Elite NLTH Assessment', 'Automata Coding', 'Turbo Assessment Tracks', 'Professional Adaptability'],
        rounds: [
            {
                roundNumber: 1,
                id: 'wipro-r1-elite-nlth',
                name: 'Round 1: Elite NLTH Online Assessment (Aptitude, English & Coding)',
                subtitle: 'National-level talent hunt covering Quantitative Aptitude, Logical Reasoning, Verbal English, and Automata coding challenges',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability', 'Automata Coding'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'wipro-r2-technical-interview',
                name: 'Round 2: Technical Interview (Elite / Turbo Assessment)',
                subtitle: '1-on-1 interview: array logic, string parsing, OOP concepts, DBMS joins, and candidate project code walkthrough',
                estimatedTime: 'Week 2',
                focusPillars: ['Data Structures & Arrays', 'OOPs in Java/C++', 'SQL Joins & Normalization', 'Turbo Coding Challenges'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'wipro-r3-hr-discussion',
                name: 'Round 3: HR & Behavioral Discussion',
                subtitle: 'Evaluation of adaptability to project demands, professional communication, corporate values, and relocation flexibility',
                estimatedTime: 'Week 3',
                focusPillars: ['Professional Communication', 'Work Flexibility', 'Corporate Values', 'STAR Behavioral Answers'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Cognizant': {
        tier: 'Leading Professional Services & IT Leader',
        focusAreas: ['GenC & GenC Next Hiring', 'Analytical Puzzles', 'Algorithmic Problem Solving', 'Elevate Track Assessment'],
        rounds: [
            {
                roundNumber: 1,
                id: 'cognizant-r1-genc-assessment',
                name: 'Round 1: GenC / GenC Next Online Assessment',
                subtitle: 'Preliminary screening on Quantitative Aptitude, Analytical Ability, and hands-on coding challenges for GenC Next upgrade',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Aptitude', 'Analytical Ability', 'Foundational Coding', 'GenC Next Challenges'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'cognizant-r2-technical-interview',
                name: 'Round 2: Technical Interview (GenC Next / Elevate Track)',
                subtitle: 'In-depth technical discussion: advanced data structures, SQL queries, debugging live snippets, and project architecture',
                estimatedTime: 'Week 2',
                focusPillars: ['Advanced Data Structures', 'SQL & Relational DBs', 'Code Debugging', 'Project Architecture'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'cognizant-r3-hr-discussion',
                name: 'Round 3: HR Discussion & Behavioral Evaluation',
                subtitle: 'Role clarity, career aspirations, corporate communication, and adaptability to client engagements',
                estimatedTime: 'Week 3',
                focusPillars: ['Role Clarity', 'Career Growth Goals', 'Adaptability', 'Communication Skills'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Capgemini': {
        tier: 'Global Technology Consulting & Transformation Leader',
        focusAreas: ['Pseudo-code Tracing', 'Game-Based Cognitive Tests', 'Capgemini Exceller Coding', 'Core CS Fundamentals'],
        rounds: [
            {
                roundNumber: 1,
                id: 'capgemini-r1-pseudocode-cognitive',
                name: 'Round 1: Pseudo-code & Cognitive Assessment',
                subtitle: 'Elimination round covering pseudocode output tracing, bitwise logic, English comprehension, and game-based cognitive tests',
                estimatedTime: 'Week 1',
                focusPillars: ['Pseudocode Tracing', 'Bitwise Operators', 'Cognitive Games', 'Verbal English'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'capgemini-r2-exceller-coding',
                name: 'Round 2: Capgemini Exceller Coding Assessment',
                subtitle: 'Hands-on programming round evaluating string hashing, arrays, mathematical algorithms, and clean logic formulation',
                estimatedTime: 'Week 2',
                focusPillars: ['Array Algorithms', 'String Transformations', 'Hashing Techniques', 'Exceller Challenges'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'capgemini-r3-technical-hr',
                name: 'Round 3: Technical & HR Integrated Interview',
                subtitle: 'Comprehensive discussion on Core CS fundamentals (OS, DBMS, OOP), academic project defense, and behavioral fitment',
                estimatedTime: 'Week 3',
                focusPillars: ['Core CS Subjects', 'Project Implementation', 'Client Orientation', 'STAR Behavioral Responses'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'HCLTech': {
        tier: 'Global Engineering & R&D Services Pioneer',
        focusAreas: ['First Careers Assessment', 'Data Structures & Arrays', 'Core CS Subjects', 'Engineering Mindset'],
        rounds: [
            {
                roundNumber: 1,
                id: 'hcl-r1-first-careers-aptitude',
                name: 'Round 1: First Careers Aptitude & Technical Screening',
                subtitle: 'Online screening covering Quantitative Math, Logical Reasoning, and fundamental Computer Science principles',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Math', 'Logical Deduction', 'Computer Science Basics', 'Speed & Accuracy'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'hcl-r2-technical-coding',
                name: 'Round 2: Technical Assessment & Coding Round',
                subtitle: 'Hands-on coding challenges testing array operations, string manipulation, search/sort algorithms, and logic building',
                estimatedTime: 'Week 2',
                focusPillars: ['Array Operations', 'String Parsing', 'Search & Sort', 'Complexity Optimization'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'hcl-r3-technical-hr-managerial',
                name: 'Round 3: Technical & HR Managerial Interview',
                subtitle: 'Panel interview: core engineering concepts, project walkthrough, willingness to learn new technologies, and cultural fit',
                estimatedTime: 'Week 3',
                focusPillars: ['Engineering Fundamentals', 'Project Code Walkthrough', 'Adaptability', 'Professional Communication'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Tech Mahindra': {
        tier: 'Global Telecom & Digital Transformation Giant',
        focusAreas: ['Conversant Cognitive Assessment', 'Mindcraft Coding Challenges', 'OOP & Networking Fundamentals', 'Customer Experience'],
        rounds: [
            {
                roundNumber: 1,
                id: 'techm-r1-conversant-cognitive',
                name: 'Round 1: Conversant Cognitive & Mindcraft Assessment',
                subtitle: 'Preliminary test evaluating quantitative aptitude, logical reasoning, English essay writing, and technical MCQs',
                estimatedTime: 'Week 1',
                focusPillars: ['Quantitative Aptitude', 'Logical Reasoning', 'Written English Essay', 'Technical MCQs'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'techm-r2-conversant-coding',
                name: 'Round 2: Conversant Coding Assessment (Hands-on Programming)',
                subtitle: 'Hands-on programming round testing string manipulation, array algorithms, number theory, and telecommunication problem scenarios',
                estimatedTime: 'Week 2',
                focusPillars: ['String Transformations', 'Array Algorithms', 'Number Theory', 'Conversant Coding Tasks'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'techm-r3-technical-hr',
                name: 'Round 3: Technical & HR Interview',
                subtitle: 'Discussion on OOP concepts, database normalization, telecommunications/project architecture, and workplace values',
                estimatedTime: 'Week 3',
                focusPillars: ['OOPs Concepts', 'DBMS Normalization', 'Project Architecture', 'STAR Situational Answers'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'LTIMindtree': {
        tier: 'Global Digital Transformation & Cloud Engineering Leader',
        focusAreas: ['Ignition & Spark Hiring', 'Full Stack & Cloud Fundamentals', 'Algorithmic Problem Solving', 'Enterprise Architecture'],
        rounds: [
            {
                roundNumber: 1,
                id: 'lti-r1-ignition-aptitude',
                name: 'Round 1: Ignition & Spark Aptitude Assessment',
                subtitle: 'Comprehensive online screening covering analytical ability, quantitative aptitude, verbal fluency, and technical fundamentals',
                estimatedTime: 'Week 1',
                focusPillars: ['Analytical Reasoning', 'Quantitative Aptitude', 'Verbal Fluency', 'Technical Basics'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'lti-r2-ignition-coding',
                name: 'Round 2: Ignition Technical Coding Assessment',
                subtitle: 'Hands-on coding challenges testing array manipulation, two pointers, searching/sorting algorithms, and clean syntax',
                estimatedTime: 'Week 2',
                focusPillars: ['Array Manipulation', 'Two Pointers', 'Search & Sort', 'Ignition Coding Challenges'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'lti-r3-tech-architecture-hr',
                name: 'Round 3: Technical Architecture & HR Discussion',
                subtitle: 'Discussion on cloud fundamentals, database design, full stack concepts, candidate project defense, and behavioral fitment',
                estimatedTime: 'Week 3',
                focusPillars: ['Cloud & Web Concepts', 'Database Design', 'Project Defense', 'STAR Behavioral Responses'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    },

    'Genpact': {
        tier: 'Global Professional Services & Digital Analytics Leader',
        focusAreas: ['Analytics & Data Interpretation', 'Domain Software Engineering', 'SQL & Database Manipulation', 'Business Transformation'],
        rounds: [
            {
                roundNumber: 1,
                id: 'genpact-r1-technical-analytical-screen',
                name: 'Round 1: Technical & Analytical Online Screening',
                subtitle: 'Assessment evaluating numerical data interpretation, critical reasoning, and foundational programming concepts',
                estimatedTime: 'Week 1',
                focusPillars: ['Data Interpretation', 'Critical Reasoning', 'Numerical Math', 'Programming Concepts'],
                filter: (q) => q.category === 'Aptitude'
            },
            {
                roundNumber: 2,
                id: 'genpact-r2-domain-engineering',
                name: 'Round 2: Domain Software Engineering Assessment',
                subtitle: 'Hands-on programming challenges testing array logic, SQL data manipulation, string parsing, and algorithmic reasoning',
                estimatedTime: 'Week 2',
                focusPillars: ['Array Algorithms', 'SQL Data Manipulation', 'String Parsing', 'Analytics Logic'],
                filter: (q) => q.category === 'DSA'
            },
            {
                roundNumber: 3,
                id: 'genpact-r3-leadership-discussion',
                name: 'Round 3: Technical & Leadership Discussion',
                subtitle: 'Interview focusing on problem solving mindset, business transformation awareness, project implementation, and culture fit',
                estimatedTime: 'Week 3',
                focusPillars: ['Business Problem Solving', 'Project Implementation', 'Domain Consulting', 'STAR Behavioral Evaluation'],
                filter: (q) => q.category === 'Interview'
            }
        ]
    }
};

module.exports = COMPANY_ROUNDS_CONFIG;
