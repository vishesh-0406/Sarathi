const fs = require('fs');
const path = require('path');
const { collectRedditPosts } = require('../raw/reddit/redditCollector');
const { matchProblem, getLeetCodeCatalog } = require('../matchers/leetcodeMatcher');
const { getOrFetchDescription, getCachedExamples } = require('../matchers/leetcodeDescriptionFetcher');
const { generateTestCaseForTitle } = require('../banks/testCaseTemplates');

const PROCESSED_QUESTIONS_FILE = path.join(__dirname, '..', 'processed_questions.json');

async function processCandidateExperiences() {
    console.log('--- Step 1: Collecting Candidate Posts ---');
    const posts = await collectRedditPosts();

    console.log('\n--- Step 2: Loading LeetCode Problem Catalog ---');
    const catalog = await getLeetCodeCatalog();
    console.log(`Loaded ${catalog.length} canonical LeetCode problems for matching.`);

    console.log('\n--- Step 3: Dynamically Matching Questions with LeetCode & Enhancing Descriptions ---');
    const processedQuestions = [];

    for (const post of posts) {
        const match = await matchProblem(post.title, post.selftext, catalog);

        const matchedList = [];
        let finalProblemStatement = post.selftext;
        let finalTestCases = post.testCases && post.testCases.length > 0 ? [...post.testCases] : [];

        if (match) {
            if (match.slug) {
                const canonicalDesc = await getOrFetchDescription(match.slug);
                if (canonicalDesc && canonicalDesc.length > 25) {
                    finalProblemStatement = canonicalDesc;
                }
                const canonicalExamples = getCachedExamples(match.slug);
                if (canonicalExamples && canonicalExamples.length > 0) {
                    finalTestCases = canonicalExamples;
                }
            }
            matchedList.push(match);
            console.log(`  ✓ [${post.company}] "${post.title.substring(0, 45)}..." -> Matched to: ${match.problemName} (${Math.round(match.similarityScore * 100)}%)`);
        } else {
            console.log(`  ⚠ [${post.company}] No confident LeetCode match found for: "${post.title.substring(0, 40)}"`);
        }

        // Check if test cases are missing or generic fallback
        const isFallback = finalTestCases.length === 0 || finalTestCases.some(tc => 
            tc.input === 'nums = [1, 3, 2, 5, 4]' || tc.input === 's = "abacaba"' || tc.input === 'grid = [[1, 2], [3, 4]]'
        );
        if (isFallback) {
            const specificTC = generateTestCaseForTitle(post.title, post.selftext);
            if (specificTC && specificTC.length > 0) {
                finalTestCases = specificTC;
            }
        }

        const structuredQuestion = {
            company: post.company,
            title: post.title.split(' - ')[1] || post.title,
            problemStatement: finalProblemStatement,
            constraints: post.constraints || [],
            recollectionType: post.recollectionType || 'randomised',
            difficulty: post.difficulty || 'Medium',
            category: 'DSA',
            round: post.round || 'Technical Round',
            year: post.year || 2025,
            batch: post.batch || '2024–2026',
            source: `${post.source} (${post.author})`,
            sourceUrl: post.sourceUrl,
            matchedProblems: matchedList,
            testCases: finalTestCases,
            isNovel: matchedList.length === 0,
            novelDescription: matchedList.length === 0 ? 'Authentic company-exclusive interview problem with no standard LeetCode equivalent.' : null
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
