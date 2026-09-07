const mongoose = require('mongoose');
require('dotenv').config();
const Question = require('./models/Question');
const Company = require('./models/Company');

const sampleCompanies = [
    { name: 'TCS', type: 'service' },
    { name: 'Infosys', type: 'service' },
    { name: 'Accenture', type: 'service' },
    { name: 'Wipro', type: 'service' },
    { name: 'Cognizant', type: 'service' },
    { name: 'Amazon', type: 'product' },
    { name: 'Microsoft', type: 'product' },
    { name: 'Google', type: 'product' },
    { name: 'Adobe', type: 'product' }
];

const sampleQuestions = [
    // --- TCS QUESTIONS ---
    {
        company: 'TCS',
        title: 'Vehicle Fleet Wheel Assembly Check',
        problemStatement: 'An automobile company manufactures both two-wheelers (V1) and four-wheelers (V2). Given the total number of vehicles V and the total number of wheels W, calculate how many two-wheelers and four-wheelers were produced. If it is impossible with the given counts, return an invalid indicator.',
        constraints: [
            '2 <= W <= 10^5',
            'W >= 2 * V',
            'W must be an even number',
            'Time limit: 1.0s, Space limit: 128MB'
        ],
        recollectionType: 'original',
        difficulty: 'Easy',
        category: 'Aptitude & Math',
        round: 'TCS NQT Advanced Section',
        source: 'Campus Placement Discussion',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: 'Linear Equations in Two Variables Pattern',
                similarityScore: 0.95
            }
        ]
    },
    {
        company: 'TCS',
        title: 'Non-Repeating Character in Production Stream',
        problemStatement: 'We had a question in the coding round where a sequence of characters was coming in. You need to find the first character in the stream that does not repeat anywhere in the sequence. If all characters repeat, print -1.',
        constraints: [
            'Length of string <= 10^5',
            'Only lowercase English letters a-z',
            'Must solve in O(N) time with O(1) auxiliary space (character alphabet size)'
        ],
        recollectionType: 'randomised',
        difficulty: 'Easy',
        category: 'DSA',
        round: 'TCS Digital Coding Round',
        source: 'r/developersIndia',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '387. First Unique Character in a String',
                problemUrl: 'https://leetcode.com/problems/first-unique-character-in-a-string/',
                similarityScore: 0.98
            }
        ]
    },
    {
        company: 'TCS',
        title: 'Consecutive Subarray Sum Divisibility',
        problemStatement: 'Problem asked us to count subarrays whose sum is divisible by K. Candidate remembered only that array size was up to 10^5 and brute force O(N^2) gave Time Limit Exceeded (TLE). Prefix sum with remainder frequency map was required.',
        constraints: [
            '1 <= N <= 10^5',
            '1 <= K <= 10^4',
            '-10^9 <= nums[i] <= 10^9',
            'Strict O(N) time complexity'
        ],
        recollectionType: 'constraint',
        difficulty: 'Medium',
        category: 'DSA',
        round: 'TCS Prime Coding Round',
        source: 'Student Interview Memory',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '974. Subarray Sums Divisible by K',
                problemUrl: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/',
                similarityScore: 0.96
            }
        ]
    },

    // --- INFOSYS QUESTIONS ---
    {
        company: 'Infosys',
        title: 'Special Matrix Path with Blocked Cells',
        problemStatement: 'Given an N x M matrix where some cells contain obstacles. A robot starts at (0, 0) and can only move down or right. In each step, if it visits a bonus cell, its energy increments. Find the maximum energy path to reach (N-1, M-1).',
        constraints: [
            '1 <= N, M <= 500',
            'Energy values between -100 and 100',
            'O(N * M) DP approach expected'
        ],
        recollectionType: 'randomised',
        difficulty: 'Medium',
        category: 'DSA',
        round: 'Infosys SP / DSE Round',
        source: 'Interview Experience Post',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '64. Minimum Path Sum / Dungeon Game Variant',
                similarityScore: 0.91
            }
        ]
    },
    {
        company: 'Infosys',
        title: 'String Transformation with Cost',
        problemStatement: 'Convert string S1 to string S2 using operations: add character (cost A), remove character (cost B), replace character (cost C). Output the minimum total cost.',
        constraints: [
            '|S1|, |S2| <= 2000',
            'Costs A, B, C are positive integers <= 100'
        ],
        recollectionType: 'original',
        difficulty: 'Medium',
        category: 'DSA',
        round: 'InfyTQ Technical Round',
        source: 'Campus Candidate',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '72. Edit Distance',
                problemUrl: 'https://leetcode.com/problems/edit-distance/',
                similarityScore: 0.97
            }
        ]
    },

    // --- ACCENTURE QUESTIONS ---
    {
        company: 'Accenture',
        title: 'Binary String Operations Evaluation',
        problemStatement: 'You are given a string containing binary digits (0 and 1) interspersed with operations A (AND), B (OR), and C (XOR). Operations are evaluated from left to right with no operator precedence. Return the final single binary digit.',
        constraints: [
            'String length is odd and <= 1000',
            'Valid characters: 0, 1, A, B, C only',
            'O(N) time and O(1) space'
        ],
        recollectionType: 'original',
        difficulty: 'Easy',
        category: 'DSA',
        round: 'Accenture Assessment Coding',
        source: 'Campus Assessment',
        matchedProblems: [
            {
                platform: 'GeeksforGeeks',
                problemName: 'Evaluate Binary String',
                similarityScore: 0.99
            }
        ]
    },

    // --- AMAZON QUESTIONS ---
    {
        company: 'Amazon',
        title: 'Warehouse Package Optimization with Weight Limit',
        problemStatement: 'You are given an array of package weights and a fleet of conveyor belts. Each belt can carry at most 2 packages and has a maximum weight capacity. Determine the minimum number of conveyor belts required to transport all packages without overloading any belt.',
        constraints: [
            '1 <= weights.length <= 5 * 10^4',
            '1 <= weights[i] <= capacity <= 3 * 10^4',
            'Two-pointer greedy technique in O(N log N)'
        ],
        recollectionType: 'original',
        difficulty: 'Medium',
        category: 'DSA',
        round: 'Amazon Online Assessment (OA)',
        source: 'r/cscareerquestions',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '881. Boats to Save People',
                problemUrl: 'https://leetcode.com/problems/boats-to-save-people/',
                similarityScore: 0.98
            }
        ]
    },
    {
        company: 'Amazon',
        title: 'Shortest Delivery Grid Path with Teleportation Obstacles',
        problemStatement: 'Candidate remembers a 2D city grid where delivery agents must deliver from start to goal. There were walls, but the agent was allowed to eliminate up to K walls. Candidate remembered doing BFS with 3 states (row, col, remaining_k).',
        constraints: [
            'Grid dimensions M, N <= 40',
            '0 <= K <= M * N',
            'Must avoid infinite cycles with visited array of shape [M][N][K+1]'
        ],
        recollectionType: 'randomised',
        difficulty: 'Hard',
        category: 'DSA',
        round: 'Amazon SDE-1 Technical Round 2',
        source: 'Reddit Interview Thread',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '1293. Shortest Path in a Grid with Obstacles Elimination',
                problemUrl: 'https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/',
                similarityScore: 0.96
            }
        ]
    },
    {
        company: 'Amazon',
        title: 'K-Length Window Diversity Metric',
        problemStatement: 'Only memory preserved: "Given a stream of server IDs, for every continuous window of size K, output the number of unique servers active. Sliding window required because N was 2 * 10^5 and nested loops caused timeout."',
        constraints: [
            '1 <= K <= N <= 2 * 10^5',
            'Server IDs up to 10^9',
            'Strict O(N) runtime required'
        ],
        recollectionType: 'constraint',
        difficulty: 'Medium',
        category: 'DSA',
        round: 'Amazon SDE-1 Technical Round 1',
        source: 'Campus Recruits Memory',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: 'Count Distinct Elements in Every Window of Size K',
                similarityScore: 0.94
            }
        ]
    },

    // --- GOOGLE QUESTIONS ---
    {
        company: 'Google',
        title: 'Logger Rate Limiter with Exponential Backoff',
        problemStatement: 'Design a high-throughput logging system that receives messages with timestamps. A message should only be printed if it has not been printed in the last 10 seconds. Return true if printed, false otherwise.',
        constraints: [
            'Timestamps are in non-decreasing order',
            'Up to 10^5 function calls',
            'Space must be managed so old timestamps do not cause memory leaks'
        ],
        recollectionType: 'original',
        difficulty: 'Medium',
        category: 'System & DSA',
        round: 'Google Software Engineer Phone Screen',
        source: 'Interview Archive',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '359. Logger Rate Limiter',
                problemUrl: 'https://leetcode.com/problems/logger-rate-limiter/',
                similarityScore: 0.99
            }
        ]
    },
    {
        company: 'Google',
        title: 'Server Cluster Dependency Network Cycle',
        problemStatement: 'Interview question was about a graph of microservices where service A calls service B. If there is a cycle, the system deadlocks. We had to detect cycles and output the topological order of safe deployments. Candidate recalled using Kahn algorithm / DFS coloring.',
        constraints: [
            'Number of services V <= 10^5',
            'Number of dependency edges E <= 5 * 10^5',
            'O(V + E) required'
        ],
        recollectionType: 'randomised',
        difficulty: 'Medium',
        category: 'DSA',
        round: 'Google SWE Round 2',
        source: 'Reddit r/developersIndia',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '210. Course Schedule II',
                problemUrl: 'https://leetcode.com/problems/course-schedule-ii/',
                similarityScore: 0.97
            }
        ]
    },

    // --- MICROSOFT QUESTIONS ---
    {
        company: 'Microsoft',
        title: 'Spreadsheet Column Title to Number Translation',
        problemStatement: 'Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number (e.g. A -> 1, B -> 2, Z -> 26, AA -> 27).',
        constraints: [
            '1 <= columnTitle.length <= 7',
            'columnTitle consists only of uppercase English letters',
            'Result fits in standard 32-bit signed integer'
        ],
        recollectionType: 'original',
        difficulty: 'Easy',
        category: 'DSA',
        round: 'Microsoft Campus Technical Round 1',
        source: 'Campus Placement Archive',
        matchedProblems: [
            {
                platform: 'LeetCode',
                problemName: '171. Excel Sheet Column Number',
                problemUrl: 'https://leetcode.com/problems/excel-sheet-column-number/',
                similarityScore: 0.99
            }
        ]
    }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sarathi');
        console.log('Connected to MongoDB for seeding...');

        // Upsert Companies
        for (const comp of sampleCompanies) {
            await Company.findOneAndUpdate(
                { name: comp.name },
                comp,
                { upsert: true, new: true }
            );
        }
        console.log(`Seeded ${sampleCompanies.length} companies.`);

        // Clear and seed Questions
        await Question.deleteMany({});
        const inserted = await Question.insertMany(sampleQuestions);
        console.log(`Successfully seeded ${inserted.length} interview questions across companies!`);

        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err.message);
        process.exit(1);
    }
}

seed();
