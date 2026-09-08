const fs = require('fs');
const path = require('path');
const { collectRedditPosts } = require('../raw/reddit/redditCollector');
const { matchProblem, getLeetCodeCatalog } = require('../matchers/leetcodeMatcher');

const PROCESSED_QUESTIONS_FILE = path.join(__dirname, '..', 'processed_questions.json');

async function processCandidateExperiences() {
    console.log('--- Step 1: Collecting Candidate Posts ---');
    const posts = await collectRedditPosts();

    console.log('\n--- Step 2: Loading LeetCode Problem Catalog ---');
    const catalog = await getLeetCodeCatalog();
    console.log(`Loaded ${catalog.length} canonical LeetCode problems for matching.`);

    console.log('\n--- Step 3: Dynamically Matching Questions with LeetCode ---');
    const processedQuestions = [];

    for (const post of posts) {
        // Query text combines the title and problem text for optimal token overlap
        const queryText = `${post.title} ${post.selftext}`;
        const match = await matchProblem(queryText, catalog);

        const matchedList = [];
        if (match) {
            matchedList.push(match);
            console.log(`  ✓ [${post.company}] "${post.title.substring(0, 45)}..." -> Matched to: ${match.problemName} (${Math.round(match.similarityScore * 100)}%)`);
        } else {
            console.log(`  ⚠ [${post.company}] No confident LeetCode match found for: "${post.title.substring(0, 40)}"`);
        }

        const structuredQuestion = {
            company: post.company,
            title: post.title.split(' - ')[1] || post.title,
            problemStatement: post.selftext,
            constraints: post.constraints || [],
            recollectionType: post.recollectionType || 'randomised',
            difficulty: post.difficulty || 'Medium',
            category: 'DSA',
            round: post.round || 'Technical Round',
            year: post.year || 2025,
            batch: post.batch || '2024–2026',
            source: `${post.source} (${post.author})`,
            sourceUrl: post.sourceUrl,
            matchedProblems: matchedList
        };

        processedQuestions.push(structuredQuestion);
    }

    fs.writeFileSync(PROCESSED_QUESTIONS_FILE, JSON.stringify(processedQuestions, null, 2));
    console.log(`\n--- Step 4: Successfully processed and saved ${processedQuestions.length} questions to: ${PROCESSED_QUESTIONS_FILE} ---`);
    return processedQuestions;
}

if (require.main === module) {
    processCandidateExperiences().catch(console.error);
}

module.exports = {
    processCandidateExperiences
};
