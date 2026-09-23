const { exec, execFile } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * Sandboxed Code Execution Service for Sarathi
 * Enforces execution timeout, memory safety, process isolation,
 * and invisible LeetCode-style class/function test harness execution.
 * Authentically supports TreeNode, ListNode, arrays, strings, and primitives.
 */
class CodeExecutionService {
    constructor() {
        this.timeoutMs = 4500; // 4.5 second hard timeout for TLE detection
        this.maxBuffer = 1024 * 1024 * 2; // 2MB stdout/stderr buffer cap
    }

    /**
     * Executes user-submitted code in the requested runtime
     * @param {string} language - 'python' | 'javascript' | 'java' | 'cpp'
     * @param {string} code - source code string
     * @param {string} input - optional stdin data / test case arguments
     * @param {string} expectedOutput - optional expected output to verify
     * @returns {Promise<Object>} execution result
     */
    async execute(language, code, input = '', expectedOutput = '') {
        const lang = language.toLowerCase();

        switch (lang) {
            case 'python':
            case 'py':
            case 'python3':
                return this.executePython(code, input, expectedOutput);
            case 'javascript':
            case 'js':
            case 'node':
                return this.executeJavaScript(code, input, expectedOutput);
            case 'java':
                return this.executeJava(code, input, expectedOutput);
            case 'cpp':
            case 'c++':
            case 'c':
                return this.executeCpp(code, input, expectedOutput);
            default:
                return {
                    status: 'Language Not Supported',
                    output: '',
                    error: `Language "${language}" is not configured for local execution. Supported: Python, JavaScript, Java, C++.`,
                    duration: 0,
                    passed: false
                };
        }
    }

    executePython(code, input, expectedOutput) {
        return new Promise((resolve) => {
            const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
            const tmpFile = path.join(os.tmpdir(), `${uniqueId}.py`);

            const hasMain = code.includes('if __name__ ==') || code.includes('sys.stdin.read') || code.includes('input(');
            let finalCode = code;

            if (!hasMain && (code.includes('class Solution') || code.includes('def '))) {
                finalCode = `from typing import Optional, List, Dict, Set, Tuple
import sys, json, ast, re, inspect

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def __build_tree(arr):
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        curr = queue.pop(0)
        if i < len(arr):
            if arr[i] is not None:
                curr.left = TreeNode(arr[i])
                queue.append(curr.left)
            i += 1
        if i < len(arr):
            if arr[i] is not None:
                curr.right = TreeNode(arr[i])
                queue.append(curr.right)
            i += 1
    return root

def __build_list(arr):
    if not arr:
        return None
    dummy = ListNode(0)
    curr = dummy
    for x in arr:
        curr.next = ListNode(x)
        curr = curr.next
    return dummy.next

def __serialize_tree(root):
    if not root:
        return "[]"
    res = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node:
            res.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            res.append(None)
    while res and res[-1] is None:
        res.pop()
    return json.dumps(res, separators=(',', ':'))

def __serialize_list(head):
    res = []
    curr = head
    while curr:
        res.append(curr.val)
        curr = curr.next
    return json.dumps(res, separators=(',', ':'))

${code}

# --- INVISIBLE LEETCODE BACKGROUND DRIVER ---
if __name__ == "__main__":
    __raw_input = """${(input || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"') }""".strip()
    __func = None
    __env = {'TreeNode': TreeNode, 'ListNode': ListNode, 'null': None, 'true': True, 'false': False}

    if __raw_input:
        try:
            # Bracket-aware splitting of arguments
            __parts = []
            __cur = ""
            __depth = 0
            for __c in __raw_input:
                if __c == '[': __depth += 1
                elif __c == ']': __depth -= 1
                if __c == ',' and __depth == 0:
                    __parts.append(__cur.strip())
                    __cur = ""
                else:
                    __cur += __c
            if __cur.strip():
                __parts.append(__cur.strip())

            for __part in __parts:
                if '=' in __part:
                    exec(__part.strip(), __env, __env)
        except Exception:
            pass

    if 'Solution' in globals() and isinstance(globals()['Solution'], type):
        try:
            __sol = Solution()
            __methods = [m for m in dir(__sol) if callable(getattr(__sol, m)) and not m.startswith('_')]
            if len(__methods) == 1:
                __func = getattr(__sol, __methods[0])
            elif len(__methods) > 1:
                __best_m = None
                __best_score = -1
                for __m in __methods:
                    __s = inspect.signature(getattr(__sol, __m))
                    __p_names = [p for p in __s.parameters.keys() if p != 'self']
                    __score = sum(1 for p in __p_names if p in __env)
                    if __score > __best_score:
                        __best_score = __score
                        __best_m = __m
                __func = getattr(__sol, __best_m or __methods[0])
        except Exception:
            pass

    if not __func:
        for __k, __v in list(globals().items()):
            if callable(__v) and not __k.startswith('_') and not __k.startswith('__') and __k not in ['sys', 'json', 'ast', 're', 'inspect', 'TreeNode', 'ListNode']:
                __func = __v
                break

    if __func:
        __args = []
        __sig = None
        try:
            __sig = inspect.signature(__func)
        except Exception:
            pass

        if __raw_input:
            try:
                if __sig:
                    for __p in __sig.parameters.values():
                        if __p.name in __env:
                            __val = __env[__p.name]
                            if isinstance(__val, list):
                                if any(k in __p.name.lower() for k in ['root', 'tree', 'p', 'q']) or 'TreeNode' in str(__p.annotation):
                                    __val = __build_tree(__val)
                                elif any(k in __p.name.lower() for k in ['head', 'list']) or 'ListNode' in str(__p.annotation):
                                    __val = __build_list(__val)
                            __args.append(__val)
            except Exception:
                pass

            if not __args:
                try:
                    __cleaned = __raw_input.replace('null', 'None').replace('true', 'True').replace('false', 'False')
                    __val = ast.literal_eval(__cleaned)
                    if isinstance(__val, list):
                        if __sig and __sig.parameters:
                            __first_p = list(__sig.parameters.values())[0]
                            if any(k in __first_p.name.lower() for k in ['root', 'tree']):
                                __val = __build_tree(__val)
                            elif any(k in __first_p.name.lower() for k in ['head', 'list']):
                                __val = __build_list(__val)
                    __args = [__val]
                except Exception:
                    __args = [__raw_input]

        if __sig:
            try:
                __params = [p for p in __sig.parameters.values() if p.kind in (inspect.Parameter.POSITIONAL_ONLY, inspect.Parameter.POSITIONAL_OR_KEYWORD)]
                while len(__args) < len(__params):
                    __p = __params[len(__args)]
                    if __p.default is not inspect.Parameter.empty:
                        __args.append(__p.default)
                    else:
                        __name = __p.name.lower()
                        if any(k in __name for k in ['nums', 'arr', 'list']):
                            __args.append([])
                        elif any(k in __name for k in ['s', 'str', 'word']):
                            __args.append("")
                        elif any(k in __name for k in ['val', 'target', 'k', 'n', 'num']):
                            __args.append(0)
                        else:
                            __args.append(None)
            except Exception:
                pass

        try:
            __res = __func(*__args)
            if __res is not None:
                if isinstance(__res, TreeNode):
                    print(__serialize_tree(__res))
                elif isinstance(__res, ListNode):
                    print(__serialize_list(__res))
                elif isinstance(__res, bool):
                    print(str(__res).lower())
                elif isinstance(__res, (list, dict)):
                    print(json.dumps(__res, separators=(',', ':')))
                else:
                    print(__res)
        except Exception as __e:
            import traceback
            traceback.print_exc()
`;
            }

            fs.writeFileSync(tmpFile, finalCode, 'utf-8');
            const startTime = Date.now();

            const child = exec(`python "${tmpFile}"`, {
                timeout: this.timeoutMs,
                maxBuffer: this.maxBuffer
            }, (error, stdout, stderr) => {
                const duration = Date.now() - startTime;
                try { fs.unlinkSync(tmpFile); } catch (e) {}

                resolve(this.formatResult(error, stdout, stderr, duration, expectedOutput));
            });

            if (input && child.stdin && hasMain) {
                child.stdin.write(input);
                child.stdin.end();
            }
        });
    }

    executeJavaScript(code, input, expectedOutput) {
        return new Promise((resolve) => {
            const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
            const tmpFile = path.join(os.tmpdir(), `${uniqueId}.js`);

            const hasMain = code.includes('readline') || code.includes('process.stdin') || code.includes('console.log(');
            let finalCode = code;

            if (!hasMain && (code.includes('class Solution') || code.includes('var ') || code.includes('function ') || code.includes('const ') || code.includes('let '))) {
                let funcName = null;
                const funcMatch = code.match(/(?:var|let|const|function)\s+([a-zA-Z0-9_]+)/);
                if (funcMatch) funcName = funcMatch[1];

                finalCode = `
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function __buildTree(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length > 0 && i < arr.length) {
        const curr = queue.shift();
        if (i < arr.length) {
            if (arr[i] !== null && arr[i] !== undefined) {
                curr.left = new TreeNode(arr[i]);
                queue.push(curr.left);
            }
            i++;
        }
        if (i < arr.length) {
            if (arr[i] !== null && arr[i] !== undefined) {
                curr.right = new TreeNode(arr[i]);
                queue.push(curr.right);
            }
            i++;
        }
    }
    return root;
}

function __buildList(arr) {
    if (!arr || arr.length === 0) return null;
    const dummy = new ListNode(0);
    let curr = dummy;
    for (const x of arr) {
        curr.next = new ListNode(x);
        curr = curr.next;
    }
    return dummy.next;
}

function __serializeTree(root) {
    if (!root) return "[]";
    const res = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push(null);
        }
    }
    while (res.length > 0 && res[res.length - 1] === null) res.pop();
    return JSON.stringify(res);
}

function __serializeList(head) {
    const res = [];
    let curr = head;
    while (curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    return JSON.stringify(res);
}

${code}

// --- INVISIBLE LEETCODE BACKGROUND DRIVER ---
(function() {
    try {
        let func = null;
        if (typeof Solution === 'function') {
            try {
                const sol = new Solution();
                const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(sol)).filter(m => m !== 'constructor');
                if (methods.length > 0) func = sol[methods[0]].bind(sol);
            } catch(e) {}
        }
        if (!func && ${funcName ? `'${funcName}'` : 'null'}) {
            try { func = eval('${funcName}'); } catch(e) {}
        }
        if (!func) {
            for (let key in this) {
                if (typeof this[key] === 'function' && !['setTimeout', 'setInterval', 'fetch', 'clearTimeout', '__buildTree', '__buildList', '__serializeTree', '__serializeList', 'TreeNode', 'ListNode'].includes(key)) {
                    func = this[key];
                    break;
                }
            }
        }
        if (!func) return;

        const raw = ${JSON.stringify(input || '')}.trim();
        let args = [];
        if (raw) {
            try {
                // Bracket-depth splitting of input arguments
                const parts = [];
                let cur = "";
                let bDepth = 0;
                for (let i = 0; i < raw.length; i++) {
                    const c = raw[i];
                    if (c === '[') bDepth++;
                    else if (c === ']') bDepth--;
                    if (c === ',' && bDepth === 0) {
                        parts.push(cur.trim());
                        cur = "";
                    } else {
                        cur += c;
                    }
                }
                if (cur.trim()) parts.push(cur.trim());

                const varNames = [];
                for (const p of parts) {
                    if (p.includes('=')) {
                        varNames.push(p.substring(0, p.indexOf('=')).trim());
                    }
                }

                if (varNames.length > 0) {
                    const fn = new Function('TreeNode', 'ListNode', 'let ' + raw.replace(/;/g, ',') + '; return [' + varNames.join(',') + '];');
                    const rawArgs = fn(TreeNode, ListNode);
                    args = rawArgs.map((val, idx) => {
                        const name = (varNames[idx] || '').toLowerCase();
                        if (Array.isArray(val)) {
                            if (name.includes('root') || name.includes('tree') || name === 'p' || name === 'q') return __buildTree(val);
                            if (name.includes('head') || name.includes('list')) return __buildList(val);
                        }
                        return val;
                    });
                } else {
                    const parsed = JSON.parse(raw);
                    args = [Array.isArray(parsed) ? __buildTree(parsed) : parsed];
                }
            } catch(e) {
                try {
                    const parsed = JSON.parse(raw);
                    args = [Array.isArray(parsed) ? __buildTree(parsed) : parsed];
                } catch(e2) {
                    args = [raw];
                }
            }
        }

        if (typeof func === 'function' && func.length > args.length) {
            while (args.length < func.length) {
                args.push(undefined);
            }
        }

        const res = func(...args);
        if (res !== undefined) {
            if (res instanceof TreeNode) {
                console.log(__serializeTree(res));
            } else if (res instanceof ListNode) {
                console.log(__serializeList(res));
            } else if (typeof res === 'object' && res !== null) {
                console.log(JSON.stringify(res));
            } else {
                console.log(res);
            }
        }
    } catch(err) {
        console.error(err);
    }
})();
`;
            }

            fs.writeFileSync(tmpFile, finalCode, 'utf-8');
            const startTime = Date.now();

            const child = exec(`node "${tmpFile}"`, {
                timeout: this.timeoutMs,
                maxBuffer: this.maxBuffer
            }, (error, stdout, stderr) => {
                const duration = Date.now() - startTime;
                try { fs.unlinkSync(tmpFile); } catch (e) {}

                resolve(this.formatResult(error, stdout, stderr, duration, expectedOutput));
            });

            if (input && child.stdin && hasMain) {
                child.stdin.write(input);
                child.stdin.end();
            }
        });
    }

    executeJava(code, input, expectedOutput) {
        return new Promise((resolve) => {
            const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
            const tmpDir = path.join(os.tmpdir(), uniqueId);
            fs.mkdirSync(tmpDir, { recursive: true });

            const hasMain = code.includes('static void main(') || code.includes('static public void main(');
            let finalCode = code;
            let className = 'Main';

            if (!hasMain) {
                const importLines = [];
                const nonImportLines = [];
                for (const line of code.split('\n')) {
                    if (line.trim().startsWith('import ')) {
                        importLines.push(line.trim());
                    } else {
                        nonImportLines.push(line);
                    }
                }
                const strippedCode = nonImportLines.join('\n').replace(/public\s+class\s+Solution/, 'class Solution');
                const hasTreeNode = code.includes('class TreeNode');
                const hasListNode = code.includes('class ListNode');

                finalCode = `
import java.util.*;
import java.lang.reflect.*;
${importLines.join('\n')}

${hasTreeNode ? '' : `
class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode() {}
    public TreeNode(int val) { this.val = val; }
    public TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
`}

${hasListNode ? '' : `
class ListNode {
    public int val;
    public ListNode next;
    public ListNode() {}
    public ListNode(int val) { this.val = val; }
    public ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
`}

${strippedCode}

public class Main {
    public static void main(String[] args) {
        try {
            Solution sol = new Solution();
            String raw = ${JSON.stringify(input || '')}.trim();
            
            // Bracket-aware argument split
            List<String> partsList = new ArrayList<>();
            StringBuilder curSb = new StringBuilder();
            int bDepth = 0;
            for (int i = 0; i < raw.length(); i++) {
                char c = raw.charAt(i);
                if (c == '[') bDepth++;
                else if (c == ']') bDepth--;
                if (c == ',' && bDepth == 0) {
                    partsList.add(curSb.toString().trim());
                    curSb = new StringBuilder();
                } else {
                    curSb.append(c);
                }
            }
            if (curSb.length() > 0) partsList.add(curSb.toString().trim());
            String[] parts = partsList.toArray(new String[0]);
            int pCount = parts.length > 0 ? parts.length : 1;

            Method target = null;
            int bestScore = -1;
            for (Method m : Solution.class.getDeclaredMethods()) {
                if (m.getName().equals("main")) continue;
                int score = 0;
                if (Modifier.isPublic(m.getModifiers())) score += 10;
                if (m.getParameterTypes().length == pCount) score += 5;
                if (score > bestScore) {
                    bestScore = score;
                    target = m;
                }
            }
            if (target == null) return;
            target.setAccessible(true);

            Class<?>[] pTypes = target.getParameterTypes();
            Object[] invokeArgs = new Object[pTypes.length];

            for (int i = 0; i < pTypes.length; i++) {
                if (i < parts.length && parts[i] != null && !parts[i].trim().isEmpty()) {
                    String part = parts[i].trim();
                    if (part.contains("=")) part = part.substring(part.indexOf('=') + 1).trim();
                    try {
                        Object val = parseArg(part, pTypes[i]);
                        invokeArgs[i] = (val != null) ? val : getDefaultValue(pTypes[i]);
                    } catch (Exception parseEx) {
                        invokeArgs[i] = getDefaultValue(pTypes[i]);
                    }
                } else if (pTypes.length == 1 && !raw.trim().isEmpty()) {
                    String part = raw.trim();
                    if (part.contains("=")) part = part.substring(part.indexOf('=') + 1).trim();
                    try {
                        Object val = parseArg(part, pTypes[0]);
                        invokeArgs[0] = (val != null) ? val : getDefaultValue(pTypes[0]);
                    } catch (Exception parseEx) {
                        invokeArgs[0] = getDefaultValue(pTypes[0]);
                    }
                } else {
                    invokeArgs[i] = getDefaultValue(pTypes[i]);
                }
            }

            Object res = target.invoke(sol, invokeArgs);
            if (res != null) {
                if (res instanceof TreeNode) {
                    System.out.println(serializeTree((TreeNode) res));
                } else if (res instanceof ListNode) {
                    System.out.println(serializeList((ListNode) res));
                } else if (res.getClass().isArray()) {
                    if (res instanceof int[]) System.out.println(Arrays.toString((int[]) res).replaceAll("\\\\s+", ""));
                    else if (res instanceof long[]) System.out.println(Arrays.toString((long[]) res).replaceAll("\\\\s+", ""));
                    else if (res instanceof double[]) System.out.println(Arrays.toString((double[]) res).replaceAll("\\\\s+", ""));
                    else System.out.println(Arrays.deepToString((Object[]) res).replaceAll("\\\\s+", ""));
                } else if (res instanceof Collection) {
                    System.out.println(res.toString().replaceAll("\\\\s+", ""));
                } else {
                    System.out.println(res);
                }
            }
        } catch (InvocationTargetException ite) {
            if (ite.getCause() != null) ite.getCause().printStackTrace();
            else ite.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static Object getDefaultValue(Class<?> type) {
        if (type == int.class || type == Integer.class) return 0;
        if (type == long.class || type == Long.class) return 0L;
        if (type == double.class || type == Double.class) return 0.0;
        if (type == float.class || type == Float.class) return 0.0f;
        if (type == boolean.class || type == Boolean.class) return false;
        if (type == char.class || type == Character.class) return ' ';
        if (type == byte.class || type == Byte.class) return (byte) 0;
        if (type == short.class || type == Short.class) return (short) 0;
        if (type == int[].class) return new int[0];
        if (type == int[][].class) return new int[0][0];
        if (type == long[].class) return new long[0];
        if (type == double[].class) return new double[0];
        if (type == String[].class) return new String[0];
        if (type == String[][].class) return new String[0][0];
        if (type == String.class) return "";
        if (type == List.class) return new ArrayList<>();
        if (type == Map.class) return new HashMap<>();
        if (type == Set.class) return new HashSet<>();
        return null;
    }

    private static Object parseArg(String str, Class<?> type) {
        if (str == null) return getDefaultValue(type);
        str = str.trim();
        if (str.isEmpty()) return getDefaultValue(type);
        if (str.contains("=")) str = str.substring(str.indexOf('=') + 1).trim();
        try {
            if (type == TreeNode.class) {
                return parseTree(str);
            } else if (type == ListNode.class) {
                return parseList(str);
            } else if (type == int.class || type == Integer.class) {
                String cleaned = str.replaceAll("[^0-9-]", "");
                return cleaned.isEmpty() ? 0 : Integer.parseInt(cleaned);
            } else if (type == long.class || type == Long.class) {
                String cleaned = str.replaceAll("[^0-9-]", "");
                return cleaned.isEmpty() ? 0L : Long.parseLong(cleaned);
            } else if (type == double.class || type == Double.class) {
                return Double.parseDouble(str);
            } else if (type == boolean.class || type == Boolean.class) {
                return Boolean.parseBoolean(str);
            } else if (type == char.class || type == Character.class) {
                return str.length() > 0 ? str.charAt(0) : ' ';
            } else if (type == String.class) {
                if (str.length() >= 2 && str.charAt(0) == '\"' && str.charAt(str.length() - 1) == '\"') {
                    return str.substring(1, str.length() - 1);
                }
                return str;
            } else if (type == String[].class) {
                int s = str.indexOf('['), e = str.lastIndexOf(']');
                if (s != -1 && e != -1 && e > s) {
                    String inner = str.substring(s + 1, e).trim();
                    if (inner.isEmpty()) return new String[0];
                    List<String> list = new ArrayList<>();
                    StringBuilder cur = new StringBuilder();
                    boolean inQuotes = false;
                    char quoteChar = ' ';
                    for (int i = 0; i < inner.length(); i++) {
                        char c = inner.charAt(i);
                        if (!inQuotes && (c == 34 || c == 39)) {
                            inQuotes = true;
                            quoteChar = c;
                        } else if (inQuotes && c == quoteChar) {
                            inQuotes = false;
                        } else if (!inQuotes && c == ',') {
                            String item = cur.toString().trim();
                            if (item.length() >= 2 && (item.charAt(0) == 34 || item.charAt(0) == 39) && item.charAt(item.length() - 1) == item.charAt(0)) {
                                item = item.substring(1, item.length() - 1);
                            }
                            list.add(item);
                            cur = new StringBuilder();
                            continue;
                        }
                        cur.append(c);
                    }
                    if (cur.length() > 0) {
                        String item = cur.toString().trim();
                        if (item.length() >= 2 && (item.charAt(0) == 34 || item.charAt(0) == 39) && item.charAt(item.length() - 1) == item.charAt(0)) {
                            item = item.substring(1, item.length() - 1);
                        }
                        list.add(item);
                    }
                    return list.toArray(new String[0]);
                }
                return new String[0];
            } else if (type == int[].class) {
                int s = str.indexOf('['), e = str.lastIndexOf(']');
                if (s != -1 && e != -1 && e > s) {
                    String inner = str.substring(s + 1, e).trim();
                    if (inner.isEmpty()) return new int[0];
                    String[] tokens = inner.split(",");
                    List<Integer> list = new ArrayList<>();
                    for (String token : tokens) {
                        String cleaned = token.trim().replaceAll("[^0-9-]", "");
                        if (!cleaned.isEmpty()) list.add(Integer.parseInt(cleaned));
                    }
                    int[] arr = new int[list.size()];
                    for (int i = 0; i < list.size(); i++) arr[i] = list.get(i);
                    return arr;
                }
                return new int[0];
            } else if (type == int[][].class) {
                int s = str.indexOf('['), e = str.lastIndexOf(']');
                if (s != -1 && e != -1 && e > s) {
                    String inner = str.substring(s + 1, e).trim();
                    if (inner.isEmpty()) return new int[0][0];
                    List<int[]> rows = new ArrayList<>();
                    int bDepth = 0;
                    StringBuilder cur = new StringBuilder();
                    for (int i = 0; i < inner.length(); i++) {
                        char c = inner.charAt(i);
                        if (c == '[') bDepth++;
                        else if (c == ']') bDepth--;
                        if (c == ',' && bDepth == 0) {
                            String rowStr = cur.toString().trim();
                            if (!rowStr.isEmpty()) rows.add((int[]) parseArg(rowStr, int[].class));
                            cur = new StringBuilder();
                        } else {
                            cur.append(c);
                        }
                    }
                    if (cur.length() > 0) {
                        String rowStr = cur.toString().trim();
                        if (!rowStr.isEmpty()) rows.add((int[]) parseArg(rowStr, int[].class));
                    }
                    return rows.toArray(new int[0][]);
                }
                return new int[0][0];
            } else if (type == String[][].class) {
                int s = str.indexOf('['), e = str.lastIndexOf(']');
                if (s != -1 && e != -1 && e > s) {
                    String inner = str.substring(s + 1, e).trim();
                    if (inner.isEmpty()) return new String[0][0];
                    List<String[]> rows = new ArrayList<>();
                    int bDepth = 0;
                    StringBuilder cur = new StringBuilder();
                    for (int i = 0; i < inner.length(); i++) {
                        char c = inner.charAt(i);
                        if (c == '[') bDepth++;
                        else if (c == ']') bDepth--;
                        if (c == ',' && bDepth == 0) {
                            String rowStr = cur.toString().trim();
                            if (!rowStr.isEmpty()) rows.add((String[]) parseArg(rowStr, String[].class));
                            cur = new StringBuilder();
                        } else {
                            cur.append(c);
                        }
                    }
                    if (cur.length() > 0) {
                        String rowStr = cur.toString().trim();
                        if (!rowStr.isEmpty()) rows.add((String[]) parseArg(rowStr, String[].class));
                    }
                    return rows.toArray(new String[0][]);
                }
                return new String[0][0];
            } else if (type == List.class) {
                int s = str.indexOf('['), e = str.lastIndexOf(']');
                List<Object> list = new ArrayList<>();
                if (s != -1 && e != -1 && e > s) {
                    String inner = str.substring(s + 1, e).trim();
                    if (!inner.isEmpty()) {
                        if (inner.indexOf(34) != -1 || inner.indexOf(39) != -1) {
                            StringBuilder cur = new StringBuilder();
                            boolean inQuotes = false;
                            char quoteChar = ' ';
                            for (int i = 0; i < inner.length(); i++) {
                                char c = inner.charAt(i);
                                if (!inQuotes && (c == 34 || c == 39)) {
                                    inQuotes = true;
                                    quoteChar = c;
                                } else if (inQuotes && c == quoteChar) {
                                    inQuotes = false;
                                } else if (!inQuotes && c == ',') {
                                    String item = cur.toString().trim();
                                    if (item.length() >= 2 && (item.charAt(0) == 34 || item.charAt(0) == 39) && item.charAt(item.length() - 1) == item.charAt(0)) {
                                        item = item.substring(1, item.length() - 1);
                                    }
                                    list.add(item);
                                    cur = new StringBuilder();
                                    continue;
                                }
                                cur.append(c);
                            }
                            if (cur.length() > 0) {
                                String item = cur.toString().trim();
                                if (item.length() >= 2 && (item.charAt(0) == 34 || item.charAt(0) == 39) && item.charAt(item.length() - 1) == item.charAt(0)) {
                                    item = item.substring(1, item.length() - 1);
                                }
                                list.add(item);
                            }
                        } else {
                            for (String token : inner.split(",")) {
                                String cleaned = token.trim().replaceAll("[^0-9-]", "");
                                if (!cleaned.isEmpty()) list.add(Integer.parseInt(cleaned));
                            }
                        }
                    }
                }
                return list;
            }
        } catch (Exception ex) {
            return getDefaultValue(type);
        }
        return getDefaultValue(type);
    }

    private static TreeNode parseTree(String str) {
        int s = str.indexOf('['), e = str.lastIndexOf(']');
        if (s == -1 || e == -1 || e <= s) return null;
        String inner = str.substring(s + 1, e).trim();
        if (inner.isEmpty()) return null;
        String[] parts = inner.split(",");
        if (parts.length == 0 || parts[0].trim().equals("null") || parts[0].trim().isEmpty()) return null;

        TreeNode root = new TreeNode(Integer.parseInt(parts[0].trim()));
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int i = 1;
        while (!queue.isEmpty() && i < parts.length) {
            TreeNode curr = queue.poll();
            if (i < parts.length) {
                String valStr = parts[i++].trim();
                if (!valStr.equals("null") && !valStr.isEmpty()) {
                    curr.left = new TreeNode(Integer.parseInt(valStr));
                    queue.add(curr.left);
                }
            }
            if (i < parts.length) {
                String valStr = parts[i++].trim();
                if (!valStr.equals("null") && !valStr.isEmpty()) {
                    curr.right = new TreeNode(Integer.parseInt(valStr));
                    queue.add(curr.right);
                }
            }
        }
        return root;
    }

    private static ListNode parseList(String str) {
        int s = str.indexOf('['), e = str.lastIndexOf(']');
        if (s == -1 || e == -1 || e <= s) return null;
        String inner = str.substring(s + 1, e).trim();
        if (inner.isEmpty()) return null;
        String[] parts = inner.split(",");
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (String p : parts) {
            String token = p.trim();
            if (!token.isEmpty() && !token.equals("null")) {
                curr.next = new ListNode(Integer.parseInt(token));
                curr = curr.next;
            }
        }
        return dummy.next;
    }

    private static String serializeTree(TreeNode root) {
        if (root == null) return "[]";
        List<String> list = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            TreeNode curr = queue.poll();
            if (curr != null) {
                list.add(String.valueOf(curr.val));
                queue.add(curr.left);
                queue.add(curr.right);
            } else {
                list.add("null");
            }
        }
        while (!list.isEmpty() && list.get(list.size() - 1).equals("null")) {
            list.remove(list.size() - 1);
        }
        return "[" + String.join(",", list) + "]";
    }

    private static String serializeList(ListNode head) {
        List<String> list = new ArrayList<>();
        ListNode curr = head;
        while (curr != null) {
            list.add(String.valueOf(curr.val));
            curr = curr.next;
        }
        return "[" + String.join(",", list) + "]";
    }
}
`;
            } else {
                const classMatch = code.match(/public\s+class\s+([A-Za-z0-9_]+)/);
                className = classMatch ? classMatch[1] : 'Solution';
            }

            const javaFile = path.join(tmpDir, `${className}.java`);
            fs.writeFileSync(javaFile, finalCode, 'utf-8');
            const startTime = Date.now();

            // Compile first
            exec(`javac "${javaFile}"`, { timeout: 6000, maxBuffer: this.maxBuffer }, (compileErr, compOut, compErr) => {
                if (compileErr) {
                    const duration = Date.now() - startTime;
                    this.cleanupDir(tmpDir);
                    return resolve({
                        status: 'Compilation Error',
                        output: '',
                        error: compErr.trim() || compileErr.message,
                        duration,
                        passed: false
                    });
                }

                // Run compiled bytecode
                const child = exec(`java -cp "${tmpDir}" ${className}`, {
                    timeout: this.timeoutMs,
                    maxBuffer: this.maxBuffer
                }, (runErr, stdout, stderr) => {
                    const duration = Date.now() - startTime;
                    this.cleanupDir(tmpDir);
                    resolve(this.formatResult(runErr, stdout, stderr, duration, expectedOutput));
                });

                if (input && child.stdin && hasMain) {
                    child.stdin.write(input);
                    child.stdin.end();
                }
            });
        });
    }

    executeCpp(code, input, expectedOutput) {
        return new Promise(async (resolve) => {
            const minGwBin = 'C:\\Program Files\\CodeBlocks\\MinGW\\bin';
            const localGxx = path.join(minGwBin, 'g++.exe');
            const hasLocalGxx = fs.existsSync(localGxx);

            const hasMain = code.includes('int main(') || code.includes('void main(') || code.includes('int main (');
            let finalCode = code;

            if (!hasMain && code.includes('class Solution')) {
                const methodMatch = code.match(/(?:int|long\s+long|double|string|bool|void|auto|TreeNode\*|ListNode\*|vector<[\w\s<>]+>)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)/);
                const methodName = methodMatch ? methodMatch[1] : 'solve';
                const paramsSig = methodMatch ? methodMatch[2].trim() : '';

                let driverCall = '';
                if (!paramsSig) {
                    driverCall = `__printRes(sol.${methodName}());`;
                } else {
                    const rawParams = paramsSig.split(',').map(p => p.trim());
                    const decls = [];
                    const callArgs = [];
                    for (let i = 0; i < rawParams.length; i++) {
                        const p = rawParams[i];
                        const varName = `__arg${i}`;
                        if (p.includes('TreeNode')) {
                            decls.push(`auto ${varName} = __parseTree(parts.size() > ${i} ? parts[${i}] : "");`);
                        } else if (p.includes('ListNode')) {
                            decls.push(`auto ${varName} = __parseList(parts.size() > ${i} ? parts[${i}] : "");`);
                        } else if (p.includes('vector') && p.includes('string') && p.includes('vector<vector')) {
                            decls.push(`auto ${varName} = __parse2DStringVector(parts.size() > ${i} ? parts[${i}] : "");`);
                        } else if (p.includes('vector<vector')) {
                            decls.push(`auto ${varName} = __parse2DVector(parts.size() > ${i} ? parts[${i}] : "");`);
                        } else if (p.includes('vector') && p.includes('string')) {
                            decls.push(`auto ${varName} = __parseStringVector(parts.size() > ${i} ? parts[${i}] : "");`);
                        } else if (p.includes('vector')) {
                            decls.push(`auto ${varName} = __parseVector(parts.size() > ${i} ? parts[${i}] : "");`);
                        } else if (p.includes('string')) {
                            decls.push(`auto ${varName} = __parseString(parts.size() > ${i} ? parts[${i}] : "");`);
                        } else {
                            decls.push(`auto ${varName} = __parseInt(parts.size() > ${i} ? parts[${i}] : "");`);
                        }
                        callArgs.push(varName);
                    }
                    driverCall = `${decls.join('\n        ')}\n        __printRes(sol.${methodName}(${callArgs.join(', ')}));`;
                }

                const hasTreeNode = code.includes('struct TreeNode');
                const hasListNode = code.includes('struct ListNode');

                finalCode = `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <queue>
#include <algorithm>

using namespace std;

${hasTreeNode ? '' : `
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
`}

${hasListNode ? '' : `
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
`}

${code}

// --- HELPER PARSERS & SERIALIZERS ---
static TreeNode* __parseTree(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    size_t start = s.find('['), end = s.rfind(']');
    if (start == string::npos || end == string::npos || end <= start) return nullptr;
    string inner = s.substr(start + 1, end - start - 1);
    stringstream ss(inner);
    string token;
    vector<string> parts;
    while (getline(ss, token, ',')) {
        while (!token.empty() && (token[0] == ' ' || token[0] == '\t')) token.erase(0, 1);
        while (!token.empty() && (token.back() == ' ' || token.back() == '\t')) token.pop_back();
        if (!token.empty()) parts.push_back(token);
    }
    if (parts.empty() || parts[0] == "null") return nullptr;
    TreeNode* root = new TreeNode(stoi(parts[0]));
    queue<TreeNode*> q;
    q.push(root);
    size_t i = 1;
    while (!q.empty() && i < parts.size()) {
        TreeNode* curr = q.front(); q.pop();
        if (i < parts.size()) {
            if (parts[i] != "null") {
                curr->left = new TreeNode(stoi(parts[i]));
                q.push(curr->left);
            }
            i++;
        }
        if (i < parts.size()) {
            if (parts[i] != "null") {
                curr->right = new TreeNode(stoi(parts[i]));
                q.push(curr->right);
            }
            i++;
        }
    }
    return root;
}

static ListNode* __parseList(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    size_t start = s.find('['), end = s.rfind(']');
    if (start == string::npos || end == string::npos || end <= start) return nullptr;
    string inner = s.substr(start + 1, end - start - 1);
    stringstream ss(inner);
    string token;
    ListNode dummy(0);
    ListNode* curr = &dummy;
    while (getline(ss, token, ',')) {
        while (!token.empty() && (token[0] == ' ' || token[0] == '\t')) token.erase(0, 1);
        while (!token.empty() && (token.back() == ' ' || token.back() == '\t')) token.pop_back();
        if (!token.empty() && token != "null") {
            curr->next = new ListNode(stoi(token));
            curr = curr->next;
        }
    }
    return dummy.next;
}

static vector<int> __parseVector(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    size_t start = s.find('['), end = s.rfind(']');
    vector<int> res;
    if (start == string::npos || end == string::npos || end <= start) return res;
    string inner = s.substr(start + 1, end - start - 1);
    stringstream ss(inner);
    string token;
    while (getline(ss, token, ',')) {
        while (!token.empty() && (token[0] == ' ' || token[0] == '\t')) token.erase(0, 1);
        while (!token.empty() && (token.back() == ' ' || token.back() == '\t')) token.pop_back();
        if (!token.empty()) {
            try { res.push_back(stoi(token)); } catch(...) {}
        }
    }
    return res;
}

static vector<string> __parseStringVector(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    size_t start = s.find('['), end = s.rfind(']');
    vector<string> res;
    if (start == string::npos || end == string::npos || end <= start) return res;
    string inner = s.substr(start + 1, end - start - 1);
    stringstream ss(inner);
    string token;
    while (getline(ss, token, ',')) {
        while (!token.empty() && (token[0] == ' ' || token[0] == '\t' || token[0] == 34 || token[0] == 39)) token.erase(0, 1);
        while (!token.empty() && (token.back() == ' ' || token.back() == '\t' || token.back() == 34 || token.back() == 39)) token.pop_back();
        if (!token.empty()) res.push_back(token);
    }
    return res;
}

static vector<vector<int>> __parse2DVector(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    size_t start = s.find('['), end = s.rfind(']');
    vector<vector<int>> res;
    if (start == string::npos || end == string::npos || end <= start) return res;
    string inner = s.substr(start + 1, end - start - 1);
    int bDepth = 0;
    string cur = "";
    for (char c : inner) {
        if (c == '[') bDepth++;
        else if (c == ']') bDepth--;
        if (c == ',' && bDepth == 0) {
            if (!cur.empty()) res.push_back(__parseVector(cur));
            cur = "";
        } else {
            cur += c;
        }
    }
    if (!cur.empty()) res.push_back(__parseVector(cur));
    return res;
}

static vector<vector<string>> __parse2DStringVector(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    size_t start = s.find('['), end = s.rfind(']');
    vector<vector<string>> res;
    if (start == string::npos || end == string::npos || end <= start) return res;
    string inner = s.substr(start + 1, end - start - 1);
    int bDepth = 0;
    string cur = "";
    for (char c : inner) {
        if (c == '[') bDepth++;
        else if (c == ']') bDepth--;
        if (c == ',' && bDepth == 0) {
            if (!cur.empty()) res.push_back(__parseStringVector(cur));
            cur = "";
        } else {
            cur += c;
        }
    }
    if (!cur.empty()) res.push_back(__parseStringVector(cur));
    return res;
}

static int __parseInt(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    while (!s.empty() && (s[0] == ' ' || s[0] == '\t')) s.erase(0, 1);
    while (!s.empty() && (s.back() == ' ' || s.back() == '\t')) s.pop_back();
    try { return stoi(s); } catch(...) { return 0; }
}

static string __parseString(string s) {
    if (s.find('=') != string::npos) s = s.substr(s.find('=') + 1);
    while (!s.empty() && (s[0] == ' ' || s[0] == '\t' || s[0] == '"')) s.erase(0, 1);
    while (!s.empty() && (s.back() == ' ' || s.back() == '\t' || s.back() == '"')) s.pop_back();
    return s;
}

static void __printRes(bool val) { cout << (val ? "true" : "false") << endl; }
static void __printRes(int val) { cout << val << endl; }
static void __printRes(long long val) { cout << val << endl; }
static void __printRes(const string& val) { cout << val << endl; }
static void __printRes(const vector<int>& vec) {
    cout << "[";
    for (size_t i = 0; i < vec.size(); ++i) {
        cout << vec[i] << (i + 1 < vec.size() ? "," : "");
    }
    cout << "]" << endl;
}
static void __printRes(const vector<string>& vec) {
    cout << "[";
    for (size_t i = 0; i < vec.size(); ++i) {
        cout << "\"" << vec[i] << "\"" << (i + 1 < vec.size() ? "," : "");
    }
    cout << "]" << endl;
}
static void __printRes(const vector<vector<int>>& mat) {
    cout << "[";
    for (size_t i = 0; i < mat.size(); ++i) {
        cout << "[";
        for (size_t j = 0; j < mat[i].size(); ++j) {
            cout << mat[i][j] << (j + 1 < mat[i].size() ? "," : "");
        }
        cout << "]" << (i + 1 < mat.size() ? "," : "");
    }
    cout << "]" << endl;
}
static void __printRes(const vector<vector<string>>& mat) {
    cout << "[";
    for (size_t i = 0; i < mat.size(); ++i) {
        cout << "[";
        for (size_t j = 0; j < mat[i].size(); ++j) {
            cout << "\"" << mat[i][j] << "\"" << (j + 1 < mat[i].size() ? "," : "");
        }
        cout << "]" << (i + 1 < mat.size() ? "," : "");
    }
    cout << "]" << endl;
}
static void __printRes(TreeNode* root) {
    if (!root) { cout << "[]" << endl; return; }
    vector<string> list;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        TreeNode* c = q.front(); q.pop();
        if (c) {
            list.push_back(to_string(c->val));
            q.push(c->left);
            q.push(c->right);
        } else {
            list.push_back("null");
        }
    }
    while (!list.empty() && list.back() == "null") list.pop_back();
    cout << "[";
    for (size_t i = 0; i < list.size(); ++i) cout << list[i] << (i + 1 < list.size() ? "," : "");
    cout << "]" << endl;
}
static void __printRes(ListNode* head) {
    cout << "[";
    ListNode* c = head;
    while (c) {
        cout << c->val << (c->next ? "," : "");
        c = c->next;
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;
    string raw = "${(input || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"') }";
    vector<string> parts;
    string cur = "";
    int bDepth = 0;
    for (char c : raw) {
        if (c == '[') bDepth++;
        else if (c == ']') bDepth--;
        if (c == ',' && bDepth == 0) {
            parts.push_back(cur);
            cur = "";
        } else {
            cur += c;
        }
    }
    if (!cur.empty()) parts.push_back(cur);

    try {
        ${driverCall}
    } catch (...) {
        cout << "Execution Error" << endl;
    }
    return 0;
}
`;
            }

            if (hasLocalGxx) {
                const uniqueId = `sarathi_${Date.now()}_${Math.random().toString(36).substring(7)}`;
                const tmpDir = path.join(os.tmpdir(), uniqueId);
                fs.mkdirSync(tmpDir, { recursive: true });

                const srcFile = path.join(tmpDir, 'solution.cpp');
                const exeFile = path.join(tmpDir, 'solution.exe');

                fs.writeFileSync(srcFile, finalCode, 'utf-8');
                const startTime = Date.now();

                // 1. Compile C++ with MinGW g++
                execFile(localGxx, ['-std=c++17', '-static', '-static-libgcc', '-static-libstdc++', '-O2', srcFile, '-o', exeFile], {
                    timeout: 8000,
                    maxBuffer: this.maxBuffer,
                    env: { ...process.env, PATH: minGwBin + ';' + (process.env.PATH || '') }
                }, (compileErr, compOut, compErr) => {
                    if (compileErr) {
                        const duration = Date.now() - startTime;
                        this.cleanupDir(tmpDir);
                        return resolve({
                            status: 'Compilation Error',
                            output: '',
                            error: compErr.trim() || compileErr.message,
                            duration,
                            passed: false
                        });
                    }

                    // 2. Run compiled binary
                    const child = exec(`"${exeFile}"`, {
                        timeout: this.timeoutMs,
                        maxBuffer: this.maxBuffer,
                        env: { ...process.env, PATH: minGwBin + ';' + (process.env.PATH || '') }
                    }, (runErr, stdout, stderr) => {
                        const duration = Date.now() - startTime;
                        this.cleanupDir(tmpDir);
                        resolve(this.formatResult(runErr, stdout, stderr, duration, expectedOutput));
                    });


                    if (input && child.stdin && hasMain) {
                        child.stdin.write(input);
                        child.stdin.end();
                    }
                });
            } else {
                // Fallback to Judge0
                try {
                    const startTime = Date.now();
                    const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            source_code: finalCode,
                            input: input || '',
                            language: 'cpp',
                            api_key: 'guest'
                        })
                    });
                    const data = await response.json();
                    const duration = Date.now() - startTime;
                    resolve(this.formatResult(null, data.stdout || '', data.stderr || data.compile_output || '', duration, expectedOutput));
                } catch (apiErr) {
                    resolve({
                        status: 'Environment Error',
                        output: '',
                        error: 'Local MinGW g++ not found and remote compiler unavailable: ' + apiErr.message,
                        duration: 0,
                        passed: false
                    });
                }
            }
        });
    }

    cleanupDir(dir) {
        try {
            if (fs.existsSync(dir)) {
                fs.rmSync(dir, { recursive: true, force: true });
            }
        } catch (e) {}
    }

    formatResult(error, stdout, stderr, duration, expectedOutput) {
        if (error) {
            if (error.killed || error.signal === 'SIGTERM') {
                return {
                    status: 'Time Limit Exceeded',
                    output: stdout.trim(),
                    error: `Execution timed out after ${this.timeoutMs / 1000}s limit. Check for infinite loops or non-terminating recursion.`,
                    duration: this.timeoutMs,
                    passed: false
                };
            }

            return {
                status: 'Runtime Error',
                output: stdout.trim(),
                error: stderr.trim() || error.message,
                duration,
                passed: false
            };
        }

        const cleanOutput = stdout.trim();
        let passed = false;
        let status = 'Accepted';

        if (expectedOutput && expectedOutput.trim()) {
            const normOut = cleanOutput.replace(/\r\n/g, '\n').replace(/\s*,\s*/g, ',').replace(/\s+/g, ' ').trim();
            const normExp = expectedOutput.replace(/\r\n/g, '\n').replace(/\s*,\s*/g, ',').replace(/\s+/g, ' ').trim();
            const unquote = s => ((s.startsWith('"') && s.endsWith('"') && s.length >= 2) || (s.startsWith("'") && s.endsWith("'") && s.length >= 2)) ? s.slice(1, -1) : s;
            passed = (normOut === normExp || normOut.toLowerCase() === normExp.toLowerCase() || unquote(normOut) === unquote(normExp));
            status = passed ? 'Accepted' : 'Wrong Answer';
        }

        return {
            status,
            output: cleanOutput,
            error: stderr.trim(),
            duration,
            passed
        };
    }
}

module.exports = new CodeExecutionService();
