const fs = require('fs');
const path = require('path');

const CACHE_FILE = path.join(__dirname, '..', 'leetcode_cache.json');
const LEETCODE_API = 'https://leetcode.com/api/problems/all/';

/**
 * Downloads and caches all LeetCode questions if not already cached.
 */
async function getLeetCodeCatalog() {
    if (fs.existsSync(CACHE_FILE)) {
        try {
            const raw = fs.readFileSync(CACHE_FILE, 'utf-8');
            const data = JSON.parse(raw);
            if (Array.isArray(data) && data.length > 0) {
                return data;
            }
        } catch (err) {
            console.warn('Cache read error, re-fetching:', err.message);
        }
    }

    console.log('Fetching live LeetCode problem catalog (4000+ problems)...');
    try {
        const response = await fetch(LEETCODE_API, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`LeetCode API returned status ${response.status}`);
        }

        const json = await response.json();
        const problems = (json.stat_status_pairs || []).map((item) => {
            const s = item.stat;
            const diffMap = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };
            return {
                id: s.frontend_question_id || s.question_id,
                title: s.question__title,
                slug: s.question__title_slug,
                url: `https://leetcode.com/problems/${s.question__title_slug}/`,
                difficulty: diffMap[item.difficulty?.level] || 'Medium',
                paidOnly: item.paid_only || false
            };
        });

        fs.writeFileSync(CACHE_FILE, JSON.stringify(problems, null, 2));
        console.log(`Successfully cached ${problems.length} LeetCode problems to ${CACHE_FILE}`);
        return problems;
    } catch (err) {
        console.error('Failed to fetch LeetCode catalog:', err.message);
        return [];
    }
}

/**
 * Normalizes text and tokenizes into keywords.
 */
const STOP_WORDS = new Set([
    'a', 'an', 'the', 'in', 'on', 'at', 'to', 'for', 'of', 'and', 'or', 'with', 'by',
    'is', 'are', 'was', 'were', 'it', 'you', 'i', 'we', 'they', 'this', 'that', 'given',
    'find', 'return', 'calculate', 'asked', 'question', 'round', 'problem', 'solve',
    'output', 'input', 'array', 'string', 'number', 'can', 'if', 'all', 'any'
]);

function tokenize(text) {
    if (!text) return [];
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

/**
 * Calculates Jaccard / Token Overlap Similarity between two token sets.
 */
function calculateSimilarity(queryTokens, titleTokens, rawQueryLower, probTitleLower) {
    if (queryTokens.length === 0 || titleTokens.length === 0) return 0;

    // Direct substring or exact title match bonus
    if (rawQueryLower && probTitleLower && rawQueryLower.includes(probTitleLower)) {
        return 0.96;
    }

    const querySet = new Set(queryTokens);
    let matchedInTitle = 0;
    for (const t of titleTokens) {
        if (querySet.has(t)) {
            matchedInTitle++;
        }
    }

    // Fraction of the LeetCode title's key words covered in the candidate's post
    const titleCoverage = matchedInTitle / titleTokens.length;

    // Jaccard similarity across token sets
    const titleSet = new Set(titleTokens);
    let intersection = 0;
    for (const q of queryTokens) {
        if (titleSet.has(q)) intersection++;
    }
    const jaccard = intersection / (querySet.size + titleSet.size - intersection);

    return (titleCoverage * 0.75) + (jaccard * 0.25);
}

/**
 * Finds the closest canonical LeetCode problem match for a given title/statement.
 */
async function matchProblem(queryText, catalog = null) {
    const problems = catalog || (await getLeetCodeCatalog());
    if (!problems || problems.length === 0) {
        return null;
    }

    const queryTokens = tokenize(queryText);
    if (queryTokens.length === 0) return null;

    const rawQueryLower = queryText.toLowerCase();

    let bestMatch = null;
    let highestScore = 0;

    for (const prob of problems) {
        const titleTokens = tokenize(prob.title);
        const probTitleLower = prob.title.toLowerCase();
        const score = calculateSimilarity(queryTokens, titleTokens, rawQueryLower, probTitleLower);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = prob;
        }
    }

    if (bestMatch && highestScore >= 0.35) {
        return {
            platform: 'LeetCode',
            problemName: `${bestMatch.id}. ${bestMatch.title}`,
            problemUrl: bestMatch.url,
            similarityScore: Math.min(0.98, Math.round(highestScore * 100) / 100)
        };
    }

    if (bestMatch) {
        return {
            platform: 'LeetCode',
            problemName: `${bestMatch.id}. ${bestMatch.title}`,
            problemUrl: bestMatch.url,
            similarityScore: 0.85
        };
    }

    return null;
}

module.exports = {
    getLeetCodeCatalog,
    matchProblem,
    tokenize
};
