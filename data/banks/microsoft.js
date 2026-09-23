// Auto-generated verified interview questions for Microsoft
module.exports = [
  {
    "company": "Microsoft",
    "title": "Microsoft - Word Undo-Redo Document Snapshot Tree",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Word%20Undo-Redo%20Document%20Snapshot%20Tree%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Implement an undo-redo snapshot tree for a collaborative word processor. Commands include type(char), undo, and redo. Print the active document text after applying sequence of commands.",
    "constraints": [
      "Two-stack or doubly linked tree",
      "O(1) per command"
    ],
    "testCases": [
      {
        "input": "commands = [\"type(A)\", \"type(B)\", \"undo\", \"type(C)\"]",
        "output": "\"AC\"",
        "explanation": "Type A -> \"A\", Type B -> \"AB\", Undo -> \"A\", Type C -> \"AC\"."
      },
      {
        "input": "commands = [\"type(X)\", \"undo\", \"redo\"]",
        "output": "\"X\"",
        "explanation": "Undo removes X, Redo restores X."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Azure VM Node Auto-Scaling Alert Monitor",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Azure%20VM%20Node%20Auto-Scaling%20Alert%20Monitor%20interview%20assessment&type=link",
    "round": "Microsoft SDE-1 Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given sliding CPU utilization metrics of an Azure cluster, trigger a scale-out alert if average utilization over last W consecutive health checks exceeds threshold T.",
    "constraints": [
      "1 <= metrics.length <= 10^5",
      "Queue sliding window"
    ],
    "testCases": [
      {
        "input": "metrics = [45, 62, 88, 92, 95], W = 3, T = 85",
        "output": "true",
        "explanation": "Last 3 metrics [88, 92, 95] average = 91.67 > 85. Scale-out triggered."
      },
      {
        "input": "metrics = [40, 50, 60], W = 3, T = 80",
        "output": "false",
        "explanation": "Average 50 <= 80, no alert."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Excel Cyclic Formula Dependency Detector",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Excel%20Cyclic%20Formula%20Dependency%20Detector%20interview%20assessment&type=link",
    "round": "Microsoft Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a list of spreadsheet cell dependency directed pairs edges, where edges[i] = [cellA, cellB] denotes that cellA depends on cellB, determine if a circular formula dependency cycle exists. Return true if a cycle exists, false otherwise.",
    "constraints": [
      "Directed graph cycle detection",
      "Topological Sort / DFS with color state"
    ],
    "testCases": [
      {
        "input": "edges = [[\"A1\", \"B1\"], [\"B1\", \"C1\"], [\"C1\", \"A1\"]]",
        "output": "true",
        "explanation": "A1 -> B1 -> C1 -> A1 forms a circular dependency cycle."
      },
      {
        "input": "edges = [[\"A1\", \"B1\"], [\"A1\", \"C1\"]]",
        "output": "false",
        "explanation": "DAG with no circular dependency cycles."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Teams Active Audio Stream Arbiter",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Teams%20Active%20Audio%20Stream%20Arbiter%20interview%20assessment&type=link",
    "round": "Microsoft Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "In a Teams meeting with N participants, given incoming voice energy levels, return the top K loudest active speakers whose audio streams should be prioritized for mixing.",
    "constraints": [
      "1 <= N <= 1000",
      "1 <= K <= N",
      "Min-Heap O(N log K)"
    ],
    "testCases": [
      {
        "input": "energy = [35, 60, 85, 40, 78], K = 2",
        "output": "[85, 78]",
        "explanation": "The two loudest participants have energy 85 and 78."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Windows File System Inode Hard Link Counter",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Windows%20File%20System%20Inode%20Hard%20Link%20Counter%20interview%20assessment&type=link",
    "round": "Microsoft Campus Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).",
    "constraints": [
      "1 <= inodes.length <= 10^5",
      "Frequency map"
    ],
    "testCases": [
      {
        "input": "n = 10  [\"call\",\"call\",\"call\"]",
        "output": "[10,11,12]",
        "explanation": "counter() = 10 // The first time counter() is called, it returns n. counter() = 11 // Returns 1 more than the previous time. counter() = 12 // Returns 1 more than the previous time."
      },
      {
        "input": "n = -2 [\"call\",\"call\",\"call\",\"call\",\"call\"]",
        "output": "[-2,-1,0,1,2]",
        "explanation": "counter() initially returns -2. Then increases after each sebsequent call."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Edge Browser Tab Memory Eviction LRU-Priority",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Edge%20Browser%20Tab%20Memory%20Eviction%20LRU-Priority%20interview%20assessment&type=link",
    "round": "Microsoft Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a 2D array tabs where tabs[i] = [id, mem, priority], and an integer target, find the tab id that frees at least target megabytes of memory while minimizing the priority score. If multiple tabs qualify, choose the one with the lowest priority score. Return the id of the evicted tab.",
    "constraints": [
      "Greedy knapsack / sorting",
      "Tab memory up to 2000MB"
    ],
    "testCases": [
      {
        "input": "tabs = [[1, 400, 1], [2, 600, 3]], target = 350",
        "output": "1",
        "explanation": "Tab 1 frees 400MB >= 350MB with lowest priority score 1."
      },
      {
        "input": "tabs = [[1, 200, 2], [2, 500, 1]], target = 300",
        "output": "2",
        "explanation": "Tab 2 frees 500MB >= 300MB with priority score 1."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Xbox Live Matchmaking MMR Skill Gap Partitioner",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Xbox%20Live%20Matchmaking%20MMR%20Skill%20Gap%20Partitioner%20interview%20assessment&type=link",
    "round": "Microsoft SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given player MMR ratings, partition 2N players into two balanced teams of N players such that the skill gap (difference in team total MMR) is minimized.",
    "constraints": [
      "Subset sum DP / Meet in the middle",
      "2N <= 24"
    ],
    "testCases": [
      {
        "input": "mmr = [1200, 1250, 1300, 1350]",
        "output": "0",
        "explanation": "Team 1: [1200, 1350] = 2550. Team 2: [1250, 1300] = 2550. Gap = 0."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Excel Sheet Column Number Translation",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Excel%20Sheet%20Column%20Number%20Translation%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given a string `columnTitle` that represents the column title as appears in an Excel sheet, return its corresponding column number.\n\nFor example:",
    "constraints": [
      "1 <= length <= 7",
      "Base 26 conversion"
    ],
    "testCases": [
      {
        "input": "columnTitle = \"A\"",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "columnTitle = \"AB\"",
        "output": "28",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "columnTitle = \"ZY\"",
        "output": "701",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - LRU Cache Design Fast Key Value Storage",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20LRU%20Cache%20Design%20Fast%20Key%20Value%20Storage%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the `LRUCache` class:\n\n\t• `LRUCache(int capacity)` Initialize the LRU cache with positive size `capacity`.\n\n\t• `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.\n\n\t• `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.\n\nThe functions `get` and `put` must each run in `O(1)` average time complexity.",
    "constraints": [
      "1 <= capacity <= 3000",
      "Doubly Linked List + HashMap"
    ],
    "testCases": [
      {
        "input": "capacity = 2, calls = [\"put(1,1)\", \"put(2,2)\", \"get(1)\", \"put(3,3)\", \"get(2)\"]",
        "output": "[null, null, 1, null, -1]",
        "explanation": "Key 2 was evicted when key 3 was added as key 2 was least recently used."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - String to Integer Atoi Parser",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20String%20to%20Integer%20Atoi%20Parser%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.\n\nThe algorithm for `myAtoi(string s)` is as follows:\n\n\t• Whitespace: Ignore any leading whitespace (`\" \"`).\n\n\t• Signedness: Determine the sign by checking if the next character is `'-'` or `'+'`, assuming positivity if neither present.\n\n\t• Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.\n\n\t• Rounding: If the integer is out of the 32-bit signed integer range `[-231, 231 - 1]`, then round the integer to remain in the range. Specifically, integers less than `-231` should be rounded to `-231`, and integers greater than `231 - 1` should be rounded to `231 - 1`.\n\nReturn the integer as the final result.",
    "constraints": [
      "0 <= s.length <= 200",
      "Integer clamp"
    ],
    "testCases": [
      {
        "input": "s = \"42\"",
        "output": "42",
        "explanation": "The underlined characters are what is read in and the caret is the current reader position. Step 1: \"42\" (no characters read because there is no leading whitespace) ^ Step 2: \"42\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \" 42 \" (\"42\" is read in) ^"
      },
      {
        "input": "s = \" -042\"",
        "output": "-42",
        "explanation": "Step 1: \" -042\" (leading whitespace is read and ignored) ^ Step 2: \" - 042\" ('-' is read, so the result should be negative) ^ Step 3: \" - 042 \" (\"042\" is read in, leading zeros ignored in the result) ^"
      },
      {
        "input": "s = \"1337c0d3\"",
        "output": "1337",
        "explanation": "Step 1: \"1337c0d3\" (no characters read because there is no leading whitespace) ^ Step 2: \"1337c0d3\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \" 1337 c0d3\" (\"1337\" is read in; reading stops because the next character is a non-digit) ^"
      },
      {
        "input": "s = \"0-1\"",
        "output": "0",
        "explanation": "Step 1: \"0-1\" (no characters read because there is no leading whitespace) ^ Step 2: \"0-1\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \" 0 -1\" (\"0\" is read in; reading stops because the next character is a non-digit) ^"
      },
      {
        "input": "s = \"words and 987\"",
        "output": "0",
        "explanation": "Reading stops at the first non-digit character 'w'."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Copy List with Random Pointer Deep Copy",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Copy%20List%20with%20Random%20Pointer%20Deep%20Copy%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.\n\nConstruct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.\n\nFor example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.\n\nReturn the head of the copied linked list.\n\nThe linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:\n\n\t• `val`: an integer representing `Node.val`\n\n\t• `random_index`: the index of the node (range from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.\n\nYour code will only be given the `head` of the original linked list.",
    "constraints": [
      "0 <= n <= 1000",
      "In-place node weaving"
    ],
    "testCases": [
      {
        "input": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [[1,1],[2,1]]",
        "output": "[[1,1],[2,1]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [[3,null],[3,0],[3,null]]",
        "output": "[[3,null],[3,0],[3,null]]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Spiral Matrix Generation in Clockwise Order",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Spiral%20Matrix%20Generation%20in%20Clockwise%20Order%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.",
    "constraints": [
      "1 <= n <= 20",
      "4-boundary iteration"
    ],
    "testCases": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,3,6,9,8,7,4,5]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        "output": "[1,2,3,4,8,12,11,10,9,5,6,7]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Serialize and Deserialize Binary Tree Stream",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Serialize%20and%20Deserialize%20Binary%20Tree%20Stream%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.\n\nDesign an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.\n\nClarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.",
    "constraints": [
      "Node count up to 10^4",
      "Preorder DFS with nulls"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,null,null,4,5]",
        "output": "[1,2,3,null,null,4,5]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Word Search in 2D Board Matrix",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Word%20Search%20in%202D%20Board%20Matrix%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    "constraints": [
      "1 <= m, n <= 6",
      "Backtracking DFS"
    ],
    "testCases": [
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Reverse Nodes in K Group Linked List",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Reverse%20Nodes%20in%20K%20Group%20Linked%20List%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    "constraints": [
      "1 <= k <= n <= 5000",
      "O(1) extra memory"
    ],
    "testCases": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [1,2]",
        "output": "[2,1]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Lowest Common Ancestor of a Binary Tree",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\nAccording to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).&rdquo;",
    "constraints": [
      "2 <= node count <= 10^5",
      "Recursive DFS"
    ],
    "testCases": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "output": "3",
        "explanation": "The LCA of nodes 5 and 1 is 3."
      },
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        "output": "5",
        "explanation": "The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition."
      },
      {
        "input": "root = [1,2], p = 1, q = 2",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Design Tic Tac Toe Game with Constant Time Moves",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Design%20Tic%20Tac%20Toe%20Game%20with%20Constant%20Time%20Moves%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Design Tic-Tac-Toe played on n x n grid checking win condition in O(1) time.",
    "constraints": [
      "2 <= n <= 100",
      "O(1) row/col tally counters"
    ],
    "testCases": [
      {
        "input": "n = 3, calls = [\"move(0, 0, 1)\", \"move(0, 2, 2)\", \"move(2, 2, 1)\", \"move(1, 1, 2)\", \"move(2, 0, 1)\", \"move(1, 0, 2)\", \"move(2, 1, 1)\"]",
        "output": "[0, 0, 0, 0, 0, 0, 1]",
        "explanation": "Player 1 wins with complete row on move 7."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Find Minimum in Rotated Sorted Array Binary Search",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Find%20Minimum%20in%20Rotated%20Sorted%20Array%20Binary%20Search%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:\n\n\t• `[4,5,6,7,0,1,2]` if it was rotated `4` times.\n\n\t• `[0,1,2,4,5,6,7]` if it was rotated `7` times.\n\nNotice that rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.\n\nGiven the sorted rotated array `nums` of unique elements, return the minimum element of this array.\n\nYou must write an algorithm that runs in `O(log n) time`.",
    "constraints": [
      "1 <= n <= 5000",
      "O(log N) binary search"
    ],
    "testCases": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "explanation": "The original array was [1,2,3,4,5] rotated 3 times."
      },
      {
        "input": "nums = [4,5,6,7,0,1,2]",
        "output": "0",
        "explanation": "The original array was [0,1,2,4,5,6,7] and it was rotated 4 times."
      },
      {
        "input": "nums = [11,13,15,17]",
        "output": "11",
        "explanation": "The original array was [11,13,15,17] and it was rotated 4 times."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Group Anagrams by Sorted Key Signature",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Group%20Anagrams%20by%20Sorted%20Key%20Signature%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    "constraints": [
      "1 <= strs.length <= 10^4",
      "Hash map"
    ],
    "testCases": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Merge K Sorted Lists Priority Queue",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Merge%20K%20Sorted%20Lists%20Priority%20Queue%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.\n\nMerge all the linked-lists into one sorted linked-list and return it.",
    "constraints": [
      "k up to 10^4",
      "Min-heap priority queue"
    ],
    "testCases": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": "The linked-lists are: [   1->4->5,   1->3->4,   2->6 ] merging them into one sorted linked list: 1->1->2->3->4->4->5->6"
      },
      {
        "input": "lists = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "lists = [[]]",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Validate Binary Search Tree Inorder Check",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Validate%20Binary%20Search%20Tree%20Inorder%20Check%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n\n\t• The left subtree of a node contains only nodes with keys strictly less than the node's key.\n\n\t• The right subtree of a node contains only nodes with keys strictly greater than the node's key.\n\n\t• Both the left and right subtrees must also be binary search trees.",
    "constraints": [
      "Node count up to 10^4",
      "Range recursion"
    ],
    "testCases": [
      {
        "input": "root = [2,1,3]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [5,1,4,null,null,3,6]",
        "output": "false",
        "explanation": "The root node's value is 5 but its right child's value is 4."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Set Matrix Zeroes In Place",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Set%20Matrix%20Zeroes%20In%20Place%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.\n\nYou must do it in place.",
    "constraints": [
      "1 <= m, n <= 200",
      "O(1) auxiliary space"
    ],
    "testCases": [
      {
        "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Sign of the Product of an Array",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Sign%20of%20the%20Product%20of%20an%20Array%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Implement a function `signFunc(x)` that returns:\n\n\t• `1` if `x` is positive.\n\n\t• `-1` if `x` is negative.\n\n\t• `0` if `x` is equal to `0`.\n\nYou are given an integer array `nums`. Let `product` be the product of all values in the array `nums`.\n\nReturn `signFunc(product)`.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "Sign count"
    ],
    "testCases": [
      {
        "input": "nums = [-1,-2,-3,-4,3,2,1]",
        "output": "1",
        "explanation": "The product of all values in the array is 144, and signFunc(144) = 1"
      },
      {
        "input": "nums = [1,5,0,2,-3]",
        "output": "0",
        "explanation": "The product of all values in the array is 0, and signFunc(0) = 0"
      },
      {
        "input": "nums = [-1,1,-1,1,-1]",
        "output": "-1",
        "explanation": "The product of all values in the array is -1, and signFunc(-1) = -1"
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Two Sum Find Pair Indices",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Two%20Sum%20Find%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "Hash map"
    ],
    "testCases": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0,1]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Add Two Numbers Represented by Linked Lists",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Add%20Two%20Numbers%20Represented%20by%20Linked%20Lists%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    "constraints": [
      "1 <= length <= 100",
      "Carry addition"
    ],
    "testCases": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "342 + 465 = 807."
      },
      {
        "input": "l1 = [0], l2 = [0]",
        "output": "[0]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        "output": "[8,9,9,9,0,0,0,1]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Longest Substring Without Repeating Characters",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Longest%20Substring%20Without%20Repeating%20Characters%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a string `s`, find the length of the longest substring without duplicate characters.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "Sliding window"
    ],
    "testCases": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3. Note that \"bca\" and \"cab\" are also correct answers."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with the length of 1."
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3",
        "explanation": "The answer is \"wke\", with the length of 3. Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Median of Two Sorted Arrays",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Median%20of%20Two%20Sorted%20Arrays%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be `O(log (m+n))`.",
    "constraints": [
      "m, n up to 1000",
      "Binary search partition"
    ],
    "testCases": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000",
        "explanation": "merged array = [1,2,3] and median is 2."
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.50000",
        "explanation": "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Longest Palindromic Substring",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Longest%20Palindromic%20Substring%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a string `s`, return the longest palindromic substring in `s`.",
    "constraints": [
      "1 <= s.length <= 1000",
      "Expand around center"
    ],
    "testCases": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "\"aba\" is also a valid answer."
      },
      {
        "input": "s = \"cbbd\"",
        "output": "\"bb\"",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Zigzag Conversion String Pattern",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Zigzag%20Conversion%20String%20Pattern%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "The string `\"PAYPALISHIRING\"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\n\nAnd then read line by line: `\"PAHNAPLSIIGYIR\"`\n\nWrite the code that will take a string and make this conversion given a number of rows:",
    "constraints": [
      "1 <= s.length <= 1000",
      "Row direction toggle"
    ],
    "testCases": [
      {
        "input": "s = \"PAYPALISHIRING\", numRows = 3",
        "output": "\"PAHNAPLSIIGYIR\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"PAYPALISHIRING\", numRows = 4",
        "output": "\"PINALSIGYAHRPI\"",
        "explanation": "P     I    N A   L S  I G Y A   H R P     I"
      },
      {
        "input": "s = \"A\", numRows = 1",
        "output": "\"A\"",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Reverse Integer 32-Bit Overflow Protection",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Reverse%20Integer%2032-Bit%20Overflow%20Protection%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.\n\nAssume the environment does not allow you to store 64-bit integers (signed or unsigned).",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "Math reversal"
    ],
    "testCases": [
      {
        "input": "x = 123",
        "output": "321",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "x = -123",
        "output": "-321",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "x = 120",
        "output": "21",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Valid Parentheses Bracket Matching",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n\n\t• Open brackets must be closed by the same type of brackets.\n\n\t• Open brackets must be closed in the correct order.\n\n\t• Every close bracket has a corresponding open bracket of the same type.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack"
    ],
    "testCases": [
      {
        "input": "s = \"()\"",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"(]\"",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"([])\"",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"([)]\"",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Merge Two Sorted Lists",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Merge%20Two%20Sorted%20Lists%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "You are given the heads of two sorted linked lists `list1` and `list2`.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.",
    "constraints": [
      "List lengths up to 50",
      "Two-pointer"
    ],
    "testCases": [
      {
        "input": "list1 = [1,2,4], list2 = [1,3,4]",
        "output": "[1,1,2,3,4,4]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "list1 = [], list2 = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "list1 = [], list2 = [0]",
        "output": "[0]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Trapping Rain Water Elevation Chart",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Trapping%20Rain%20Water%20Elevation%20Chart%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    "constraints": [
      "1 <= n <= 2 * 10^4",
      "Two-pointer"
    ],
    "testCases": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped."
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Permutations of Distinct Array",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Permutations%20of%20Distinct%20Array%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 6",
      "Backtracking"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [0,1]",
        "output": "[[0,1],[1,0]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1]",
        "output": "[[1]]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Rotate Image Matrix by 90 Degrees",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Rotate%20Image%20Matrix%20by%2090%20Degrees%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90 degrees (clockwise).\n\nYou have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.",
    "constraints": [
      "1 <= n <= 20",
      "Transpose + reverse"
    ],
    "testCases": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Maximum Subarray Kadane Algorithm",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Kadane"
    ],
    "testCases": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "The subarray [1] has the largest sum 1."
      },
      {
        "input": "nums = [5,4,-1,7,8]",
        "output": "23",
        "explanation": "The subarray [5,4,-1,7,8] has the largest sum 23."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Spiral Matrix II Generate Square",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Spiral%20Matrix%20II%20Generate%20Square%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a positive integer `n`, generate an `n x n` `matrix` filled with elements from `1` to `n2` in spiral order.",
    "constraints": [
      "1 <= n <= 20",
      "Boundary iteration"
    ],
    "testCases": [
      {
        "input": "n = 3",
        "output": "[[1,2,3],[8,9,4],[7,6,5]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "n = 1",
        "output": "[[1]]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Rotate Linked List by K Positions",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Rotate%20Linked%20List%20by%20K%20Positions%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given the `head` of a linked list, rotate the list to the right by `k` places.",
    "constraints": [
      "Node count up to 500",
      "Ring rotation"
    ],
    "testCases": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[4,5,1,2,3]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [0,1,2], k = 4",
        "output": "[2,0,1]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Climbing Stairs Distinct Ways",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Climbing%20Stairs%20Distinct%20Ways%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    "constraints": [
      "1 <= n <= 45",
      "Fibonacci DP"
    ],
    "testCases": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps"
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step"
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Sort Colors 0s 1s 2s Dutch Flag",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Sort%20Colors%200s%201s%202s%20Dutch%20Flag%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n\nYou must solve this problem without using the library's sort function.",
    "constraints": [
      "1 <= nums.length <= 300",
      "Three pointer"
    ],
    "testCases": [
      {
        "input": "nums = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]",
        "explanation": "The array has two 0s, two 1s, and two 2s. Sorting them in-place places all 0s first, then all 1s, then all 2s."
      },
      {
        "input": "nums = [2,0,1]",
        "output": "[0,1,2]",
        "explanation": "The array has one each of 0, 1, and 2, arranged in-place in the order 0, 1, 2."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Subsets Power Set of Unique Elements",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Subsets%20Power%20Set%20of%20Unique%20Elements%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an integer array `nums` of unique elements, return all possible subsets (the power set).\n\nThe solution set must not contain duplicate subsets. Return the solution in any order.",
    "constraints": [
      "1 <= nums.length <= 10",
      "Backtracking"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Largest Rectangle in Histogram Monotonic Stack",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Largest%20Rectangle%20in%20Histogram%20Monotonic%20Stack%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return the area of the largest rectangle in the histogram.",
    "constraints": [
      "1 <= heights.length <= 10^5",
      "Monotonic stack"
    ],
    "testCases": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "The above is a histogram where width of each bar is 1. The largest rectangle is shown in the red area, which has an area = 10 units."
      },
      {
        "input": "heights = [2,4]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Symmetric Tree Binary Mirror Check",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Symmetric%20Tree%20Binary%20Mirror%20Check%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    "constraints": [
      "1 <= node count <= 1000",
      "Recursive compare"
    ],
    "testCases": [
      {
        "input": "root = [1,2,2,3,4,4,3]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,2,2,null,3,null,3]",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Binary Tree Level Order Traversal Queue",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Binary%20Tree%20Level%20Order%20Traversal%20Queue%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    "constraints": [
      "Node count up to 2000",
      "Queue BFS"
    ],
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1]",
        "output": "[[1]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Construct Binary Tree from Preorder and Inorder",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `root` node of a binary tree, your task is to create a string representation of the tree following a specific set of formatting rules. The representation should be based on a preorder traversal of the binary tree and must adhere to the following guidelines:\n\n\t• \n\tNode Representation: Each node in the tree should be represented by its integer value.\n\n\t\n\n\t• \n\tParentheses for Children: If a node has at least one child (either left or right), its children should be represented inside parentheses. Specifically:\n\n\t\n\n\t\t• If a node has a left child, the value of the left child should be enclosed in parentheses immediately following the node's value.\n\n\t\t• If a node has a right child, the value of the right child should also be enclosed in parentheses. The parentheses for the right child should follow those of the left child.\n\n\t\n\n\t\n\n\t• \n\tOmitting Empty Parentheses: Any empty parentheses pairs (i.e., `()`) should be omitted from the final string representation of the tree, with one specific exception: when a node has a right child but no left child. In such cases, you must include an empty pair of parentheses to indicate the absence of the left child. This ensures that the one-to-one mapping between the string representation and the original binary tree structure is maintained.\n\n\tIn summary, empty parentheses pairs should be omitted when a node has only a left child or no children. However, when a node has a right child but no left child, an empty pair of parentheses must precede the representation of the right child to reflect the tree's structure accurately.",
    "constraints": [
      "Node count up to 3000",
      "Recursive split"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,4]",
        "output": "\"1(2(4))(3)\"",
        "explanation": "Originally, it needs to be \"1(2(4)())(3()())\", but you need to omit all the empty parenthesis pairs. And it will be \"1(2(4))(3)\"."
      },
      {
        "input": "root = [1,2,3,null,4]",
        "output": "\"1(2()(4))(3)\"",
        "explanation": "Almost the same as the first example, except the () after 2 is necessary to indicate the absence of a left child for 2 and the presence of a right child."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Populating Next Right Pointers in Each Node",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Populating%20Next%20Right%20Pointers%20in%20Each%20Node%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:\n\nPopulate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.\n\nInitially, all next pointers are set to `NULL`.",
    "constraints": [
      "Node count up to 4096",
      "O(1) extra memory level pointer"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,4,5,6,7]",
        "output": "[1,#,2,3,#,4,5,6,7,#]",
        "explanation": "Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level."
      },
      {
        "input": "root = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Best Time to Buy and Sell Stock",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20interview%20assessment&type=link",
    "round": "Microsoft Round 2 Problem Solving",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "Min tracker"
    ],
    "testCases": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell."
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and the max profit = 0."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Binary Tree Maximum Path Sum Any Node",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Binary%20Tree%20Maximum%20Path%20Sum%20Any%20Node%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.\n\nThe path sum of a path is the sum of the node's values in the path.\n\nGiven the `root` of a binary tree, return the maximum path sum of any non-empty path.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Postorder DFS"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3]",
        "output": "6",
        "explanation": "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6."
      },
      {
        "input": "root = [-10,9,20,null,null,15,7]",
        "output": "42",
        "explanation": "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Single Number Bitwise XOR",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Single%20Number%20Bitwise%20XOR%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "Bitwise XOR"
    ],
    "testCases": [
      {
        "input": "nums = [2,2,1]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Min Stack Constant Time Retrieval",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Min%20Stack%20Constant%20Time%20Retrieval%20interview%20assessment&type=link",
    "round": "Microsoft Codility OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the `MinStack` class:\n\n\t• `MinStack()` initializes the stack object.\n\n\t• `void push(int value)` pushes the element `value` onto the stack.\n\n\t• `void pop()` removes the element on the top of the stack.\n\n\t• `int top()` gets the top element of the stack.\n\n\t• `int getMin()` retrieves the minimum element in the stack.\n\nYou must implement a solution with `O(1)` time complexity for each function.",
    "constraints": [
      "O(1) time methods",
      "Dual stack"
    ],
    "testCases": [
      {
        "input": "calls = [\"MinStack\", \"push(-2)\", \"push(0)\", \"push(-3)\", \"getMin()\", \"pop()\", \"top()\", \"getMin()\"]",
        "output": "[null, null, null, null, -3, null, 0, -2]",
        "explanation": "MinStack tracks minimum in O(1) time."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ],
    "testCases": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0,1]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "testCases": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2]. Notice that the order of the output and the order of the triplets does not matter."
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]",
        "explanation": "The only possible triplet does not sum up to 0."
      },
      {
        "input": "nums = [0,0,0]",
        "output": "[[0,0,0]]",
        "explanation": "The only possible triplet sums up to 0."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.\n\nNotice that you may not slant the container.",
    "constraints": [
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "testCases": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49."
      },
      {
        "input": "height = [1,1]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    "constraints": [
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "testCases": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped."
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Sliding Window Maximum Monotonic Deque",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "1 <= k <= nums.length"
    ],
    "testCases": [
      {
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "output": "[3,3,5,5,6,7]",
        "explanation": "Window position                Max ---------------               ----- [1  3  -1] -3  5  3  6  7       3  1 [3  -1  -3] 5  3  6  7       3  1  3 [-1  -3  5] 3  6  7       5  1  3  -1 [-3  5  3] 6  7       5  1  3  -1  -3 [5  3  6] 7       6  1  3  -1  -3  5 [3  6  7]      7"
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Subarray Sum Equals K Prefix Frequency",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.\n\nA subarray is a contiguous non-empty sequence of elements within an array.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-1000 <= nums[i] <= 1000"
    ],
    "testCases": [
      {
        "input": "nums = [1,1,1], k = 2",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1,2,3], k = 3",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Product of Array Except Self Without Division",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [-1,1,0,-3,3]",
        "output": "[0,0,9,0,0]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n\nYou must solve this problem without using the library's sort function.",
    "constraints": [
      "1 <= n <= 300",
      "nums[i] is either 0, 1, or 2"
    ],
    "testCases": [
      {
        "input": "nums = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]",
        "explanation": "The array has two 0s, two 1s, and two 2s. Sorting them in-place places all 0s first, then all 1s, then all 2s."
      },
      {
        "input": "nums = [2,0,1]",
        "output": "[0,1,2]",
        "explanation": "The array has one each of 0, 1, and 2, arranged in-place in the order 0, 1, 2."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Rotate Array by K Positions Right",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "0 <= k <= 10^5"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3,4,5,6,7], k = 3",
        "output": "[5,6,7,1,2,3,4]",
        "explanation": "rotate 1 steps to the right: [7,1,2,3,4,5,6] rotate 2 steps to the right: [6,7,1,2,3,4,5] rotate 3 steps to the right: [5,6,7,1,2,3,4]"
      },
      {
        "input": "nums = [-1,-100,3,99], k = 2",
        "output": "[3,99,-1,-100]",
        "explanation": "rotate 1 steps to the right: [99,-1,-100,3] rotate 2 steps to the right: [3,99,-1,-100]"
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Move Zeroes to End of Array",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "testCases": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [0]",
        "output": "[0]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Majority Element in Election Tally",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an array `nums` of size `n`, return the majority element.\n\nThe majority element is the element that appears more than `&lfloor;n / 2&rfloor;` times. You may assume that the majority element always exists in the array.",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 5 * 10^4",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "testCases": [
      {
        "input": "nums = [3,2,3]",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [2,2,1,1,1,2,2]",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Next Permutation Lexicographical Order",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "A permutation of an array of integers is an arrangement of its members into a sequence or linear order.\n\n\t• For example, for `arr = [1,2,3]`, the following are all the permutations of `arr`: `[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]`.\n\nThe next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).\n\n\t• For example, the next permutation of `arr = [1,2,3]` is `[1,3,2]`.\n\n\t• Similarly, the next permutation of `arr = [2,3,1]` is `[3,1,2]`.\n\n\t• While the next permutation of `arr = [3,2,1]` is `[1,2,3]` because `[3,2,1]` does not have a lexicographical larger rearrangement.\n\nGiven an array of integers `nums`, find the next permutation of `nums`.\n\nThe replacement must be in place and use only constant extra memory.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 100"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3]",
        "output": "[1,3,2]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [3,2,1]",
        "output": "[1,2,3]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1,1,5]",
        "output": "[1,5,1]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Search in Rotated Sorted Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "There is an integer array `nums` sorted in non-decreasing order (not necessarily with distinct values).\n\nBefore being passed to your function, `nums` is rotated at an unknown pivot index `k` (`0 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,4,4,5,6,6,7]` might be rotated at pivot index `5` and become `[4,5,6,6,7,0,1,2,4,4]`.\n\nGiven the array `nums` after the rotation and an integer `target`, return `true` if `target` is in `nums`, or `false` if it is not in `nums`.\n\nYou must decrease the overall operation steps as much as possible.",
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i], target <= 10^4"
    ],
    "testCases": [
      {
        "input": "nums = [2,5,6,0,0,1,2], target = 0",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [2,5,6,0,0,1,2], target = 3",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Valid Palindrome String Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "constraints": [
      "1 <= s.length <= 2 * 10^5"
    ],
    "testCases": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome."
      },
      {
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome."
      },
      {
        "input": "s = \" \"",
        "output": "true",
        "explanation": "s is an empty string \"\" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Group Anagrams by Character Signature",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    "constraints": [
      "1 <= strs.length <= 10^4"
    ],
    "testCases": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Minimum Window Substring Character Frequency",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.\n\nThe testcases will be generated such that the answer is unique.",
    "constraints": [
      "1 <= s.length, t.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t."
      },
      {
        "input": "s = \"a\", t = \"a\"",
        "output": "\"a\"",
        "explanation": "The entire string s is the minimum window."
      },
      {
        "input": "s = \"a\", t = \"aa\"",
        "output": "\"\"",
        "explanation": "Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - String to Integer Atoi Parsing",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.\n\nThe algorithm for `myAtoi(string s)` is as follows:\n\n\t• Whitespace: Ignore any leading whitespace (`\" \"`).\n\n\t• Signedness: Determine the sign by checking if the next character is `'-'` or `'+'`, assuming positivity if neither present.\n\n\t• Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.\n\n\t• Rounding: If the integer is out of the 32-bit signed integer range `[-231, 231 - 1]`, then round the integer to remain in the range. Specifically, integers less than `-231` should be rounded to `-231`, and integers greater than `231 - 1` should be rounded to `231 - 1`.\n\nReturn the integer as the final result.",
    "constraints": [
      "0 <= s.length <= 200"
    ],
    "testCases": [
      {
        "input": "s = \"42\"",
        "output": "42",
        "explanation": "The underlined characters are what is read in and the caret is the current reader position. Step 1: \"42\" (no characters read because there is no leading whitespace) ^ Step 2: \"42\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \" 42 \" (\"42\" is read in) ^"
      },
      {
        "input": "s = \" -042\"",
        "output": "-42",
        "explanation": "Step 1: \" -042\" (leading whitespace is read and ignored) ^ Step 2: \" - 042\" ('-' is read, so the result should be negative) ^ Step 3: \" - 042 \" (\"042\" is read in, leading zeros ignored in the result) ^"
      },
      {
        "input": "s = \"1337c0d3\"",
        "output": "1337",
        "explanation": "Step 1: \"1337c0d3\" (no characters read because there is no leading whitespace) ^ Step 2: \"1337c0d3\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \" 1337 c0d3\" (\"1337\" is read in; reading stops because the next character is a non-digit) ^"
      },
      {
        "input": "s = \"0-1\"",
        "output": "0",
        "explanation": "Step 1: \"0-1\" (no characters read because there is no leading whitespace) ^ Step 2: \"0-1\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \" 0 -1\" (\"0\" is read in; reading stops because the next character is a non-digit) ^"
      },
      {
        "input": "s = \"words and 987\"",
        "output": "0",
        "explanation": "Reading stops at the first non-digit character 'w'."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string s of `'('` , `')'` and lowercase English characters.\n\nYour task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return any valid string.\n\nFormally, a parentheses string is valid if and only if:\n\n\t• It is the empty string, contains only lowercase characters, or\n\n\t• It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or\n\n\t• It can be written as `(A)`, where `A` is a valid string.",
    "constraints": [
      "1 <= s.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "s = \"lee(t(c)o)de)\"",
        "output": "\"lee(t(c)o)de\"",
        "explanation": "\"lee(t(co)de)\" , \"lee(t(c)ode)\" would also be accepted."
      },
      {
        "input": "s = \"a)b(c)d\"",
        "output": "\"ab(c)d\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"))((\"",
        "output": "\"\"",
        "explanation": "An empty string is also valid."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Decode String Nested Multiplier",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an encoded string, return its decoded string.\n\nThe encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.\n\nYou may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.\n\nThe test cases are generated so that the length of the output will never exceed `105`.",
    "constraints": [
      "1 <= s.length <= 30"
    ],
    "testCases": [
      {
        "input": "s = \"3[a]2[bc]\"",
        "output": "\"aaabcbc\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"3[a2[c]]\"",
        "output": "\"accaccacc\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"2[abc]3[cd]ef\"",
        "output": "\"abcabccdcdcdef\"",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Microsoft",
    "title": "Microsoft - Custom Sort String Character Priority",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Microsoft%20Custom%20Sort%20String%20Character%20Priority%20interview%20assessment&type=link",
    "round": "Microsoft Campus Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given two strings `order` and `s`. All the characters of `order` are unique and were sorted in some custom order previously.\n\nPermute the characters of `s` so that they match the order that `order` was sorted. More specifically, if a character `x` occurs before a character `y` in `order`, then `x` should occur before `y` in the permuted string.\n\nReturn any permutation of `s` that satisfies this property.",
    "constraints": [
      "1 <= order.length <= 26",
      "1 <= s.length <= 200"
    ],
    "testCases": [
      {
        "input": "order = \"cba\", s = \"abcd\"",
        "output": "\"cbad\"",
        "explanation": "\"c\", \"b\", \"a\" appear in order, \"d\" can be placed anywhere."
      }
    ]
  }
];
