/**
 * Sarathi LeetCode Signature & Template Registry
 * Generates 1:1 authentic LeetCode starter templates across Python, Java, C++, and JavaScript.
 * Strictly avoids generic 'Object' or 'auto' types.
 */

// Official LeetCode Header Comments
export const TREE_NODE_COMMENTS = {
    java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
`,
    python: `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
`,
    cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
`,
    javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
`
};

export const LIST_NODE_COMMENTS = {
    java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
`,
    python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
`,
    cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
`,
    javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
`
};

// Canonical LeetCode problem signatures dictionary
export const CANONICAL_SIGNATURES = {
    'subtree-of-another-tree': {
        method: 'isSubtree',
        isTree: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
            { name: 'subRoot', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'maximum-depth-of-binary-tree': {
        method: 'maxDepth',
        isTree: true,
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'invert-binary-tree': {
        method: 'invertTree',
        isTree: true,
        ret: { python: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'same-tree': {
        method: 'isSameTree',
        isTree: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'p', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
            { name: 'q', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'symmetric-tree': {
        method: 'isSymmetric',
        isTree: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'diameter-of-binary-tree': {
        method: 'diameterOfBinaryTree',
        isTree: true,
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'balanced-binary-tree': {
        method: 'isBalanced',
        isTree: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'binary-tree-level-order-traversal': {
        method: 'levelOrder',
        isTree: true,
        ret: { python: 'List[List[int]]', java: 'List<List<Integer>>', cpp: 'vector<vector<int>>', js: 'number[][]' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'lowest-common-ancestor-of-a-binary-tree': {
        method: 'lowestCommonAncestor',
        isTree: true,
        ret: { python: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
            { name: 'p', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
            { name: 'q', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'lowest-common-ancestor-of-a-binary-search-tree': {
        method: 'lowestCommonAncestor',
        isTree: true,
        ret: { python: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
            { name: 'p', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
            { name: 'q', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'validate-binary-search-tree': {
        method: 'isValidBST',
        isTree: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' }
        ]
    },
    'path-sum': {
        method: 'hasPathSum',
        isTree: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'root', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' },
            { name: 'targetSum', py: 'int', java: 'int', cpp: 'int', js: 'number' }
        ]
    },
    'reverse-linked-list': {
        method: 'reverseList',
        isList: true,
        ret: { python: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' },
        params: [
            { name: 'head', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' }
        ]
    },
    'merge-two-sorted-lists': {
        method: 'mergeTwoLists',
        isList: true,
        ret: { python: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' },
        params: [
            { name: 'list1', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' },
            { name: 'list2', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' }
        ]
    },
    'middle-of-the-linked-list': {
        method: 'middleNode',
        isList: true,
        ret: { python: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' },
        params: [
            { name: 'head', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' }
        ]
    },
    'linked-list-cycle': {
        method: 'hasCycle',
        isList: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'head', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' }
        ]
    },
    'palindrome-linked-list': {
        method: 'isPalindrome',
        isList: true,
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'head', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' }
        ]
    },
    'remove-nth-node-from-end-of-list': {
        method: 'removeNthFromEnd',
        isList: true,
        ret: { python: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' },
        params: [
            { name: 'head', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' },
            { name: 'n', py: 'int', java: 'int', cpp: 'int', js: 'number' }
        ]
    },
    'reorder-list': {
        method: 'reorderList',
        isList: true,
        ret: { python: 'None', java: 'void', cpp: 'void', js: 'void' },
        params: [
            { name: 'head', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' }
        ]
    },
    'two-sum': {
        method: 'twoSum',
        ret: { python: 'List[int]', java: 'int[]', cpp: 'vector<int>', js: 'number[]' },
        params: [
            { name: 'nums', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' },
            { name: 'target', py: 'int', java: 'int', cpp: 'int', js: 'number' }
        ]
    },
    'maximum-subarray': {
        method: 'maxSubArray',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'nums', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' }
        ]
    },
    'best-time-to-buy-and-sell-stock': {
        method: 'maxProfit',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'prices', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' }
        ]
    },
    'contains-duplicate': {
        method: 'containsDuplicate',
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 'nums', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' }
        ]
    },
    'product-of-array-except-self': {
        method: 'productExceptSelf',
        ret: { python: 'List[int]', java: 'int[]', cpp: 'vector<int>', js: 'number[]' },
        params: [
            { name: 'nums', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' }
        ]
    },
    '3sum': {
        method: 'threeSum',
        ret: { python: 'List[List[int]]', java: 'List<List<Integer>>', cpp: 'vector<vector<int>>', js: 'number[][]' },
        params: [
            { name: 'nums', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' }
        ]
    },
    'container-with-most-water': {
        method: 'maxArea',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'height', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' }
        ]
    },
    'trapping-rain-water': {
        method: 'trap',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'height', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' }
        ]
    },
    'valid-parentheses': {
        method: 'isValid',
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 's', py: 'str', java: 'String', cpp: 'string', js: 'string' }
        ]
    },
    'valid-anagram': {
        method: 'isAnagram',
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 's', py: 'str', java: 'String', cpp: 'string', js: 'string' },
            { name: 't', py: 'str', java: 'String', cpp: 'string', js: 'string' }
        ]
    },
    'valid-palindrome': {
        method: 'isPalindrome',
        ret: { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' },
        params: [
            { name: 's', py: 'str', java: 'String', cpp: 'string', js: 'string' }
        ]
    },
    'longest-substring-without-repeating-characters': {
        method: 'lengthOfLongestSubstring',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 's', py: 'str', java: 'String', cpp: 'string', js: 'string' }
        ]
    },
    'binary-search': {
        method: 'search',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'nums', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' },
            { name: 'target', py: 'int', java: 'int', cpp: 'int', js: 'number' }
        ]
    },
    'climbing-stairs': {
        method: 'climbStairs',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'n', py: 'int', java: 'int', cpp: 'int', js: 'number' }
        ]
    },
    'coin-change': {
        method: 'coinChange',
        ret: { python: 'int', java: 'int', cpp: 'int', js: 'number' },
        params: [
            { name: 'coins', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' },
            { name: 'amount', py: 'int', java: 'int', cpp: 'int', js: 'number' }
        ]
    }
};

/**
 * Normalizes question title / problemName to identify canonical slug
 */
function findCanonicalKey(question) {
    const matchedSlug = question?.matchedProblems?.[0]?.slug;
    if (matchedSlug && CANONICAL_SIGNATURES[matchedSlug]) return matchedSlug;

    const rawName = (question?.matchedProblems?.[0]?.problemName || question?.title || '')
        .toLowerCase()
        .replace(/^[0-9]+[\.\s]*/, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim();

    // Direct slug lookup
    const slugified = rawName.replace(/\s+/g, '-');
    if (CANONICAL_SIGNATURES[slugified]) return slugified;

    // Partial slug matching
    for (const key of Object.keys(CANONICAL_SIGNATURES)) {
        const words = key.split('-');
        if (words.length >= 2 && words.every(w => rawName.includes(w))) {
            return key;
        }
    }

    return null;
}

/**
 * Infers typed parameters and return type for any problem without ever using Object or auto
 */
export function inferSignature(question) {
    const canonicalKey = findCanonicalKey(question);
    if (canonicalKey) {
        return CANONICAL_SIGNATURES[canonicalKey];
    }

    // Heuristic inference
    const title = (question?.title || '').toLowerCase();
    const statement = (question?.problemStatement || '').toLowerCase();
    const inputStr = question?.testCases?.[0]?.input || '';
    const outputStr = (question?.testCases?.[0]?.output || '').trim();

    const isTree = title.includes('binary tree') || statement.includes('binary tree') || statement.includes('treenode') || inputStr.includes('root') || (title.includes('tree') && !title.includes('snapshot') && !title.includes('trie') && !title.includes('undo'));
    const isList = title.includes('linked list') || statement.includes('linked list') || statement.includes('listnode') || inputStr.includes('head');

    // Method Name deduction
    let rawTitle = question?.matchedProblems?.[0]?.problemName || question?.title || 'solve';
    rawTitle = rawTitle.replace(/\b0\s*[-_]?\s*1\b/gi, 'zero one')
        .replace(/^\d+[\.\s]+/, '')
        .replace(/^(amazon|google|microsoft|flipkart|hcltech|tcs|infosys|oracle|uber|zoho)\s*[-:]\s*/i, '')
        .replace(/\b(verification|assessment|challenge|problem|solution)\b/gi, '')
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .trim();

    const words = rawTitle.split(/\s+/).filter(Boolean);
    let methodName = 'solve';
    if (words.length > 0) {
        if (/^\d/.test(words[0])) {
            words.unshift('solve');
        }
        methodName = words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    }
    if (/^\d/.test(methodName)) {
        methodName = 'solve' + methodName;
    }

    // Parameter extraction
    const paramMatches = [...inputStr.matchAll(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g)];
    let paramNames = paramMatches.map(m => m[1]);

    if (paramNames.length === 0) {
        if (isTree) paramNames = inputStr.includes('subRoot') ? ['root', 'subRoot'] : ['root'];
        else if (isList) paramNames = inputStr.includes('list2') ? ['list1', 'list2'] : ['head'];
        else if (inputStr.includes('[')) paramNames = ['nums'];
        else if (inputStr.includes('"')) paramNames = ['s'];
        else paramNames = ['nums'];
    }

    // Parameter Types
    const params = paramNames.map(p => {
        const lp = p.toLowerCase();
        if (isTree && (lp.includes('root') || lp === 'p' || lp === 'q' || lp.includes('tree'))) {
            return { name: p, py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' };
        }
        if (isList && (lp.includes('head') || lp.includes('list') || lp === 'node')) {
            return { name: p, py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' };
        }

        // Extract value assigned to this parameter in inputStr, e.g. "r = 7", "arr = [2, 8, ...]"
        let pVal = '';
        try {
            const regex = new RegExp('(?:^|[,\\s])' + p + '\\s*=\\s*([\\s\\S]+?)(?:(?=,\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*=)|$)');
            const match = inputStr.match(regex);
            if (match) {
                pVal = match[1].trim();
            }
        } catch (e) {}

        const is2DArray = pVal.startsWith('[[') || (pVal === '' && (lp.includes('matrix') || lp.includes('grid')));
        if (is2DArray) {
            const is2DStringArray = pVal.includes('"') || pVal.includes("'") || lp.includes('words') || lp.includes('strings') || lp.includes('edges');
            if (is2DStringArray) {
                return { name: p, py: 'List[List[str]]', java: 'String[][]', cpp: 'vector<vector<string>>&', js: 'string[][]' };
            }
            return { name: p, py: 'List[List[int]]', java: 'int[][]', cpp: 'vector<vector<int>>&', js: 'number[][]' };
        }

        const is1DArray = (pVal.startsWith('[') && !pVal.startsWith('[[')) || (pVal === '' && (lp.includes('nums') || lp.includes('arr') || lp.includes('prices') || lp.includes('intervals') || lp.includes('commands') || lp.includes('words')));
        if (is1DArray) {
            const isStringArray = pVal.includes('"') || pVal.includes("'") || lp.includes('commands') || lp.includes('words') || lp.includes('strings');
            if (isStringArray) {
                return { name: p, py: 'List[str]', java: 'String[]', cpp: 'vector<string>&', js: 'string[]' };
            }
            return { name: p, py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', js: 'number[]' };
        }

        const isString = pVal.startsWith('"') || pVal.startsWith("'") || (pVal === '' && (lp === 's' || lp === 't' || lp.includes('str') || lp.includes('word')));
        if (isString) {
            return { name: p, py: 'str', java: 'String', cpp: 'string', js: 'string' };
        }

        const isBool = pVal === 'true' || pVal === 'false' || (pVal === '' && (lp.startsWith('is') || lp.startsWith('has')));
        if (isBool) {
            return { name: p, py: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' };
        }

        return { name: p, py: 'int', java: 'int', cpp: 'int', js: 'number' };
    });

    // Return Type
    let ret = { python: 'int', java: 'int', cpp: 'int', js: 'number' };
    if (outputStr.toLowerCase() === 'true' || outputStr.toLowerCase() === 'false') {
        ret = { python: 'bool', java: 'boolean', cpp: 'bool', js: 'boolean' };
    } else if (outputStr.startsWith('[[') && outputStr.endsWith(']]')) {
        const is2DStringRet = outputStr.includes('"') || outputStr.includes("'");
        if (is2DStringRet) {
            ret = { python: 'List[List[str]]', java: 'List<List<String>>', cpp: 'vector<vector<string>>', js: 'string[][]' };
        } else {
            ret = { python: 'List[List[int]]', java: 'List<List<Integer>>', cpp: 'vector<vector<int>>', js: 'number[][]' };
        }
    } else if (outputStr.startsWith('[') && outputStr.endsWith(']')) {
        const isStringList = outputStr.includes('"') || outputStr.includes("'");
        if (isTree && (title.includes('invert') || title.includes('merge') || title.includes('trim'))) {
            ret = { python: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', js: 'TreeNode' };
        } else if (isList && (title.includes('reverse') || title.includes('merge') || title.includes('sort') || title.includes('remove'))) {
            ret = { python: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', js: 'ListNode' };
        } else if (isStringList) {
            ret = { python: 'List[str]', java: 'String[]', cpp: 'vector<string>', js: 'string[]' };
        } else {
            ret = { python: 'List[int]', java: 'int[]', cpp: 'vector<int>', js: 'number[]' };
        }
    } else if (outputStr.startsWith('"') || isNaN(Number(outputStr))) {
        ret = { python: 'str', java: 'String', cpp: 'string', js: 'string' };
    }

    return { method: methodName, isTree, isList, ret, params };
}

/**
 * Generates the clean LeetCode starter template for the chosen language
 */
export function generateLeetCodeTemplate(language, question) {
    const sig = inferSignature(question);

    switch (language) {
        case 'python': {
            const header = sig.isTree ? TREE_NODE_COMMENTS.python : (sig.isList ? LIST_NODE_COMMENTS.python : '');
            const params = sig.params.map(p => `${p.name}: ${p.py}`).join(', ');
            return `${header}class Solution:
    def ${sig.method}(self, ${params}) -> ${sig.ret.python}:
        # Write your code here
        pass
`;
        }
        case 'java': {
            const header = sig.isTree ? TREE_NODE_COMMENTS.java : (sig.isList ? LIST_NODE_COMMENTS.java : '');
            const params = sig.params.map(p => `${p.java} ${p.name}`).join(', ');
            let defaultReturn = 'return 0;';
            if (sig.ret.java === 'boolean') defaultReturn = 'return false;';
            else if (sig.ret.java === 'int[]') defaultReturn = 'return new int[]{};';
            else if (sig.ret.java === 'int[][]') defaultReturn = 'return new int[][]{};';
            else if (sig.ret.java === 'String[]') defaultReturn = 'return new String[]{};';
            else if (sig.ret.java === 'String[][]') defaultReturn = 'return new String[][]{};';
            else if (sig.ret.java === 'TreeNode' || sig.ret.java === 'ListNode') defaultReturn = 'return null;';
            else if (sig.ret.java === 'String') defaultReturn = 'return "";';
            else if (sig.ret.java.includes('List')) defaultReturn = 'return new ArrayList<>();';
            else if (sig.ret.java === 'void') defaultReturn = '';

            return `${header}class Solution {
    public ${sig.ret.java} ${sig.method}(${params}) {
        // Write your code here
        ${defaultReturn}
    }
}
`;
        }
        case 'cpp': {
            const header = sig.isTree ? TREE_NODE_COMMENTS.cpp : (sig.isList ? LIST_NODE_COMMENTS.cpp : '');
            const params = sig.params.map(p => `${p.cpp} ${p.name}`).join(', ');
            let defaultReturn = 'return 0;';
            if (sig.ret.cpp === 'bool') defaultReturn = 'return false;';
            else if (sig.ret.cpp.includes('vector')) defaultReturn = 'return {};';
            else if (sig.ret.cpp === 'TreeNode*' || sig.ret.cpp === 'ListNode*') defaultReturn = 'return nullptr;';
            else if (sig.ret.cpp === 'string') defaultReturn = 'return "";';
            else if (sig.ret.cpp === 'void') defaultReturn = '';

            return `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

${header}class Solution {
public:
    ${sig.ret.cpp} ${sig.method}(${params}) {
        // Write your code here
        ${defaultReturn}
    }
};
`;
        }
        case 'javascript':
        default: {
            const header = sig.isTree ? TREE_NODE_COMMENTS.javascript : (sig.isList ? LIST_NODE_COMMENTS.javascript : '');
            const jsDocParams = sig.params.map(p => ` * @param {${p.js}} ${p.name}`).join('\n');
            const paramNames = sig.params.map(p => p.name).join(', ');
            let defaultReturn = 'return 0;';
            if (sig.ret.js === 'boolean') defaultReturn = 'return false;';
            else if (sig.ret.js.includes('[]')) defaultReturn = 'return [];';
            else if (sig.ret.js === 'TreeNode' || sig.ret.js === 'ListNode') defaultReturn = 'return null;';
            else if (sig.ret.js === 'string') defaultReturn = 'return "";';
            else if (sig.ret.js === 'void') defaultReturn = '';

            return `${header}/**
${jsDocParams}
 * @return {${sig.ret.js}}
 */
var ${sig.method} = function(${paramNames}) {
    // Write your code here
    ${defaultReturn}
};
`;
        }
    }
}
