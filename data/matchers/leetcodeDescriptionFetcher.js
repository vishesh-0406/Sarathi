const fs = require('fs');
const path = require('path');

const CACHE_FILE = path.join(__dirname, '..', 'leetcode_descriptions_cache.json');
const GRAPHQL_URL = 'https://leetcode.com/graphql';

let memoryCache = null;

function loadCache() {
    if (memoryCache) return memoryCache;
    if (fs.existsSync(CACHE_FILE)) {
        try {
            memoryCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
            return memoryCache;
        } catch (e) {
            console.warn('Error reading description cache:', e.message);
        }
    }
    memoryCache = {};
    return memoryCache;
}

function saveCache() {
    if (!memoryCache) return;
    try {
        fs.writeFileSync(CACHE_FILE, JSON.stringify(memoryCache, null, 2));
    } catch (e) {
        console.warn('Error saving description cache:', e.message);
    }
}

function htmlToCleanText(html) {
    if (!html) return '';
    // Split out the core description before Example 1 if present
    const parts = html.split(/<p[^>]*><strong[^>]*>Example\s*1:?<\/strong>|<strong[^>]*>Example\s*1:?<\/strong>/i);
    let statement = (parts[0] && parts[0].trim().length > 30) ? parts[0] : html;

    return statement
        .replace(/<pre>[\s\S]*?<\/pre>/gi, '')
        .replace(/<strong>(.*?)<\/strong>/gi, '$1')
        .replace(/<em>(.*?)<\/em>/gi, '$1')
        .replace(/<code>(.*?)<\/code>/gi, '`$1`')
        .replace(/<p>/gi, '')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<ul>/gi, '\n')
        .replace(/<\/ul>/gi, '\n')
        .replace(/<li>/gi, '• ')
        .replace(/<\/li>/gi, '\n')
        .replace(/&nbsp;/gi, ' ')
        .replace(/&lt;/gi, '<')
        .replace(/&gt;/gi, '>')
        .replace(/&quot;/gi, '"')
        .replace(/&#39;/gi, "'")
        .replace(/&amp;/gi, '&')
        .replace(/<[^>]+>/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

async function fetchDescriptionFromGraphQL(slug) {
    if (!slug) return null;
    try {
        const res = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            body: JSON.stringify({
                query: 'query getQuestionDetail($titleSlug: String!) { question(titleSlug: $titleSlug) { questionId title content } }',
                variables: { titleSlug: slug }
            })
        });

        if (!res.ok) return null;
        const json = await res.json();
        const content = json.data?.question?.content;
        if (!content) return null;

        const clean = htmlToCleanText(content);
        return clean || null;
    } catch (err) {
        return null;
    }
}

async function getOrFetchDescription(slug) {
    if (!slug) return null;
    const cache = loadCache();
    if (cache[slug]) {
        return cache[slug];
    }

    const fetched = await fetchDescriptionFromGraphQL(slug);
    if (fetched) {
        cache[slug] = fetched;
        saveCache();
        return fetched;
    }
    return null;
}

/**
 * Prefetches descriptions in parallel batches with rate-limiting.
 */
async function prefetchDescriptions(slugList, batchSize = 6) {
    const cache = loadCache();
    const needed = slugList.filter(slug => !cache[slug]);
    if (needed.length === 0) {
        console.log(`All ${slugList.length} problem descriptions are already cached.`);
        return cache;
    }

    console.log(`Prefetching ${needed.length} descriptions from LeetCode GraphQL (${batchSize} parallel)...`);
    for (let i = 0; i < needed.length; i += batchSize) {
        const batch = needed.slice(i, i + batchSize);
        await Promise.all(batch.map(async (slug) => {
            const desc = await fetchDescriptionFromGraphQL(slug);
            if (desc) {
                cache[slug] = desc;
            }
        }));
        saveCache();
        process.stdout.write(`  [${Math.min(i + batchSize, needed.length)}/${needed.length}] cached...\r`);
        await new Promise(r => setTimeout(r, 200)); // Be respectful with 200ms delay between batches
    }
    console.log(`\nSuccessfully cached ${Object.keys(cache).length} LeetCode problem descriptions!`);
    return cache;
}

const EXAMPLES_CACHE_FILE = path.join(__dirname, '..', 'leetcode_examples_cache.json');
let examplesCache = null;

function loadExamplesCache() {
    if (examplesCache) return examplesCache;
    if (fs.existsSync(EXAMPLES_CACHE_FILE)) {
        try {
            examplesCache = JSON.parse(fs.readFileSync(EXAMPLES_CACHE_FILE, 'utf-8'));
            return examplesCache;
        } catch (e) {
            console.warn('Error reading examples cache:', e.message);
        }
    }
    examplesCache = {};
    return examplesCache;
}

function getCachedExamples(slug) {
    if (!slug) return null;
    const cache = loadExamplesCache();
    return cache[slug] || null;
}

module.exports = {
    getOrFetchDescription,
    getCachedExamples,
    prefetchDescriptions,
    htmlToCleanText,
    loadCache,
    loadExamplesCache
};
