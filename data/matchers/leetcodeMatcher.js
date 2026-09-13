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

function stemWord(w) {
    if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) {
        return w.slice(0, -1);
    }
    return w;
}

function tokenize(text) {
    if (!text) return [];
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .map(stemWord)
        .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const GENERIC_SINGLE_WORDS = new Set([
    'tree', 'graph', 'search', 'matrix', 'array', 'string', 'node', 'list',
    'stack', 'queue', 'number', 'design', 'check', 'find', 'count', 'maximum',
    'minimum', 'sum', 'difference', 'path', 'level', 'order', 'binary', 'valid',
    'reverse', 'invert', 'remove', 'insert', 'delete', 'clone', 'flatten', 'single'
]);

const COMMON_ALIASES = [
    { pattern: /\banagrams?\b/i, targetId: 242 },
    { pattern: /\bsqrt\b/i, targetId: 69 },
    { pattern: /\bfizz\s*buzz\b/i, targetId: 412 },
    { pattern: /\btwo\s*sum\b/i, targetId: 1 },
    { pattern: /\b3\s*sum\b/i, targetId: 15 },
    { pattern: /\b4\s*sum\b/i, targetId: 18 },
    { pattern: /\blru\s*cache\b/i, targetId: 146 },
    { pattern: /\blfu\s*cache\b/i, targetId: 460 },
    { pattern: /\bmin\s*stack\b/i, targetId: 155 },
    { pattern: /\bmax\s*stack\b/i, targetId: 716 },
    { pattern: /\btrapping\s*rain\s*water\b/i, targetId: 42 },
    { pattern: /\b(largest|maximum)\s*(rectangular|rectangle)\s*(area)?\s*in\s*histogram\b/i, targetId: 84 },
    { pattern: /\bpower\s*set\b/i, targetId: 78 },
    { pattern: /\brotate\s*matrix\s*by\s*90\b/i, targetId: 48 },
    { pattern: /\bstrstr\b/i, targetId: 28 },
    { pattern: /\binsert\s*delete\s*getrandom\b/i, targetId: 380 },
    { pattern: /\bbalanced\s*parentheses\b/i, targetId: 20 },
    { pattern: /\blowest\s*common\s*ancestor\s*of\s*(a\s*)?bst\b/i, targetId: 235 },
    { pattern: /\bpopulating\s*next\s*right\s*pointers\b/i, targetId: 116 },
    { pattern: /\bconnect\s*nodes\s*at\s*same\s*level\b/i, targetId: 116 },
    { pattern: /\bpow\s*x\s*n\b/i, targetId: 50 },
    { pattern: /\blevel\s*order\s*traversal\s*queue\b/i, targetId: 102 },
    { pattern: /\bcheck\s*if\s*string\s*is\s*rotation\b/i, targetId: 796 },
    { pattern: /\bstock\s*span\s*problem\b/i, targetId: 901 },
    { pattern: /\bdetect\s*loop\s*in\s*(singly\s*)?linked\s*list\b/i, targetId: 141 },
    { pattern: /\b(loop|cycle)\s*in\s*(singly\s*)?linked\s*list\b/i, targetId: 141 },
    { pattern: /\b(form|construct)\s*smallest\s*number\s*following\s*di\s*pattern\b/i, targetId: 2375 },
    { pattern: /\bbeautiful\s*subarrays\s*with\s*exactly\s*k\s*odd\s*numbers\b/i, targetId: 1248 },
    { pattern: /\bminimum\s*operations\s*to\s*reduce\s*number\s*to\s*1\b/i, targetId: 397 },
    { pattern: /\bminimum\s*cost\s*path\s*in\s*matrix\s*with\s*3\s*directions\b/i, targetId: 64 },
    { pattern: /\bmaximum\s*energy\s*path\s*in\s*grid\b/i, targetId: 64 },
    { pattern: /\bsearch\s*(target\s*in\s*)?2d\s*sorted\s*array\b/i, targetId: 74 },
    { pattern: /\bsearch\s*in\s*row\s*and\s*column\s*sorted\s*matrix\b/i, targetId: 240 },
    { pattern: /\bcount\s*pairs\s*in\s*array\s*with\s*given\s*sum\b/i, targetId: 1 },
    { pattern: /\bsaddle\s*point\s*in\s*matrix\b/i, targetId: 1380 },
    { pattern: /\bin-?place\s*array\s*reversal\b/i, targetId: 344 },
    { pattern: /\b(array\s*leaders|superior\s*elements\s*leaders)\b/i, targetId: 1299 },
    { pattern: /\bfibonacci\s*sequence\s*nth\s*term\b/i, targetId: 509 },
    { pattern: /\binvert\s*bits\s*of\s*integer\b/i, targetId: 190 },
    { pattern: /\bmodular\s*exponentiation\s*fast\s*power\b/i, targetId: 50 },
    { pattern: /\bcheck\s*if\s*array\s*is\s*sorted\s*in\s*ascending\s*order\b/i, targetId: 1752 },
    { pattern: /\bsum\s*of\s*all\s*proper\s*divisors\b/i, targetId: 507 },
    { pattern: /\bpalindromic\s*numbers\s*in\s*range\b/i, targetId: 9 },
    { pattern: /\bcount\s*elements\s*with\s*absolute\s*difference\b/i, targetId: 2006 },
    { pattern: /\b(count\s*specific\s*digits?\s*in\s*range|digit\s*count\s*in\s*range)\b/i, targetId: 1067 },
    { pattern: /\bfind\s*duplicate\s*number\s*in\s*array\s*floyd\b/i, targetId: 287 }
];

function calculateSimilarity(qTitleTokens, pTitleTokens, qTitleLower, pTitleLower) {
    if (qTitleTokens.length === 0 || pTitleTokens.length === 0) return 0;

    // 1. Exact title match bonus
    if (qTitleLower === pTitleLower) {
        return 0.98;
    }

    // 2. Exact multi-word or non-generic single-word phrase match
    const pWords = pTitleLower.split(/\s+/);
    if (pWords.length >= 2 || (pWords.length === 1 && !GENERIC_SINGLE_WORDS.has(pWords[0]) && pWords[0].length >= 3)) {
        const regex = new RegExp('(^|\\s)' + escapeRegex(pTitleLower) + '(\\s|$)', 'i');
        if (regex.test(qTitleLower)) {
            return qTitleLower.startsWith(pTitleLower) ? 0.96 : 0.92;
        }
    }

    // 3. Token coverage analysis
    const querySet = new Set(qTitleTokens);
    let matchedInTitle = 0;
    for (const t of pTitleTokens) {
        if (querySet.has(t)) {
            matchedInTitle++;
        }
    }

    const pCoverage = matchedInTitle / pTitleTokens.length;
    const qCoverage = matchedInTitle / qTitleTokens.length;

    // Check raw word coverage from original LeetCode title to prevent false word-pair matches
    const pRawWords = pTitleLower.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 0 && !STOP_WORDS.has(w));
    const qRawWords = new Set(qTitleLower.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 0));
    let rawMatches = 0;
    for (const w of pRawWords) {
        if (qRawWords.has(w) || qRawWords.has(stemWord(w))) {
            rawMatches++;
        }
    }
    const rawCoverage = pRawWords.length > 0 ? (rawMatches / pRawWords.length) : 0;

    // Reject match if less than 70% of significant words in LeetCode title are present in query
    if (rawCoverage < 0.70) {
        return 0.20;
    }

    // If 100% of the LeetCode title tokens are present in the candidate title (e.g. "Subsets", "Word Break")
    if (pTitleTokens.length >= 2 && pCoverage === 1.0 && rawCoverage >= 0.80) {
        return 0.85 + (qCoverage * 0.1);
    }

    if (pCoverage >= 0.75 && matchedInTitle >= 2 && qCoverage >= 0.20 && rawCoverage >= 0.75) {
        const titleSet = new Set(pTitleTokens);
        let intersection = 0;
        for (const q of qTitleTokens) {
            if (titleSet.has(q)) intersection++;
        }
        const jaccard = intersection / (querySet.size + titleSet.size - intersection);
        return (pCoverage * 0.5) + (qCoverage * 0.3) + (jaccard * 0.2);
    }

    return 0.20;
}

const PROPRIETARY_PATTERNS = [
    /pdf\s*outline/i,
    /photoshop/i,
    /glyph\s*cache/i,
    /redo\s*log/i,
    /b-tree\s*index\s*block/i,
    /wal\s*segment/i,
    /two\s*wheeler\s*and\s*four\s*wheeler/i,
    /tablespace\s*extent/i,
    /cloud\s*tenant\s*resource/i,
    /minimum\s*adjacent\s*swaps\s*to\s*make\s*binary\s*array\s*palindromic/i,
    /amazon\s*logistics/i,
    /prime\s*video\s*bandwidth/i,
    /robocart\s*minimum\s*battery/i,
    /warehouse\s*order\s*queue\s*deadlock/i,
    /locker\s*box\s*size/i,
    /delivery\s*drone\s*flight\s*corridor/i,
    /seller\s*rating\s*quantile/i,
    /docs\s*collaborative\s*operational\s*transformation/i,
    /file\s*system\s*chunk\s*replication/i,
    /mountain\s*trail\s*elevation/i,
    /calendar\s*multi-timezone/i,
    /bigquery\s*columnar\s*block\s*compression/i,
    /word\s*undo-redo\s*document\s*snapshot/i,
    /azure\s*vm\s*node\s*auto-scaling/i,
    /excel\s*cyclic\s*formula/i,
    /teams\s*active\s*audio\s*stream/i,
    /vehicle\s*fleet\s*wheel\s*assembly/i,
    /superbike\s*gear\s*ratio/i,
    /washing\s*machine\s*weight\s*capacity/i,
    /smart\s*energy\s*meter\s*tariff/i,
    /monkey\s*banana\s*jump/i,
    /airport\s*luggage\s*conveyor/i,
    /special\s*matrix\s*energy\s*path/i,
    /hackwithinfy\s*monster/i,
    /rpg\s*hero\s*magical\s*weapon/i,
    /turbo\s*special\s*prime\s*fibonacci/i,
    /warehouse\s*carton\s*stacking/i,
    /smart\s*streetlight\s*sensor/i,
    /binary\s*string\s*operations\s*evaluation/i,
    /autobiographical\s*number/i,
    /rat\s*food\s*storage/i,
    /genc\s*next\s*encrypted\s*string/i,
    /multi-vendor\s*inventory\s*discrepancy/i,
    /telecom\s*call\s*cdr/i,
    /distinct\s*digit\s*product\s*permutations/i,
    /circular\s*token\s*passing/i,
    /network\s*packet\s*router\s*hop/i,
    /redo\s*log\s*ring\s*buffer/i,
    /transaction\s*wal\s*commit/i,
    /multi-tenant\s*governor\s*limit/i,
    /apex\s*trigger\s*batch/i,
    /soql\s*query\s*plan/i,
    /lightning\s*web\s*component\s*virtual\s*dom/i
];

/**
 * Finds the closest canonical LeetCode problem match for a given title/statement.
 * Returns null if no confident match exists (identifying it as a Novel Question).
 */
async function matchProblem(rawTitle, selftext = '', catalog = null) {
    const problems = catalog || (await getLeetCodeCatalog());
    if (!problems || problems.length === 0) {
        return null;
    }

    const cleanTitle = (rawTitle || '').replace(/^[A-Za-z]+ - /, '').trim();
    const qTitleLower = cleanTitle.toLowerCase();
    const fullTextLower = `${cleanTitle} ${selftext || ''}`.toLowerCase();

    // Proprietary domain-specific questions are 100% company-exclusive by design
    if (PROPRIETARY_PATTERNS.some(p => p.test(cleanTitle))) {
        return null;
    }

    // Check alias rules first
    for (const alias of COMMON_ALIASES) {
        if (alias.pattern.test(qTitleLower) || alias.pattern.test(fullTextLower)) {
            const aliasMatch = problems.find(p => p.id === alias.targetId);
            if (aliasMatch) {
                return {
                    platform: 'LeetCode',
                    problemName: `${aliasMatch.id}. ${aliasMatch.title}`,
                    problemUrl: aliasMatch.url,
                    similarityScore: 0.95,
                    slug: aliasMatch.slug,
                    isPremium: Boolean(aliasMatch.paidOnly)
                };
            }
        }
    }

    const qTitleTokens = tokenize(cleanTitle);
    if (qTitleTokens.length === 0) return null;

    let bestMatch = null;
    let highestScore = 0;

    for (const prob of problems) {
        const pTitleTokens = tokenize(prob.title);
        const pTitleLower = prob.title.toLowerCase();
        const score = calculateSimilarity(qTitleTokens, pTitleTokens, qTitleLower, pTitleLower);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = prob;
        }
    }

    // High confidence threshold (>= 0.78): Only match when genuine algorithmic resemblance exists.
    // If it is only a weak or superficial resemblance, do NOT falsely direct the student.
    // Return null so it is directly marked as "Company Exclusive / No Match Found in LeetCode".
    if (bestMatch && highestScore >= 0.78) {
        return {
            platform: 'LeetCode',
            problemName: `${bestMatch.id}. ${bestMatch.title}`,
            problemUrl: bestMatch.url,
            similarityScore: Math.min(0.98, Math.round(highestScore * 100) / 100),
            slug: bestMatch.slug,
            isPremium: Boolean(bestMatch.paidOnly)
        };
    }

    // Genuinely novel question - do NOT force a blind match!
    return null;
}

module.exports = {
    getLeetCodeCatalog,
    matchProblem,
    tokenize
};
