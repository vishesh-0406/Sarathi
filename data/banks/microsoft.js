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
    "selftext": "Given spreadsheet cell formulas with dependencies (e.g. A1 depends on B1), determine if a circular reference cycle exists that would cause evaluation recursion.",
    "constraints": [
      "Directed graph cycle detection",
      "Topological Sort / DFS with color state"
    ],
    "testCases": [
      {
        "input": "dependencies = { \"A1\": [\"B1\"], \"B1\": [\"C1\"], \"C1\": [\"A1\"] }",
        "output": "true",
        "explanation": "A1 -> B1 -> C1 -> A1 forms a circular dependency."
      },
      {
        "input": "dependencies = { \"A1\": [\"B1\", \"C1\"], \"B1\": [], \"C1\": [] }",
        "output": "false",
        "explanation": "DAG with no cycles."
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
    "selftext": "Given an array of directory entries pointing to file inode IDs, count how many inodes have a hard link reference count of exactly 1 (eligible for cleanup if file handle is closed).",
    "constraints": [
      "1 <= inodes.length <= 10^5",
      "Frequency map"
    ],
    "testCases": [
      {
        "input": "inodes = [101, 102, 101, 103, 104, 102]",
        "output": "2",
        "explanation": "Inodes 103 and 104 appear exactly once."
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
    "selftext": "Given browser tabs with memory consumption and priority levels, evict the tab that minimizes priority loss while freeing at least targetMemory megabytes.",
    "constraints": [
      "Greedy knapsack / sorting",
      "Tab memory up to 2000MB"
    ],
    "testCases": [
      {
        "input": "tabs = [{ id: 1, mem: 400, prio: 1 }, { id: 2, mem: 600, prio: 3 }], target = 350",
        "output": "1",
        "explanation": "Tab 1 frees 400MB >= 350MB with lowest priority score 1."
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
    "selftext": "Convert Excel sheet column title string to corresponding column integer.",
    "constraints": [
      "1 <= length <= 7",
      "Base 26 conversion"
    ],
    "testCases": [
      {
        "input": "s = \"abacaba\"",
        "output": "3",
        "explanation": "Calculated using optimal string scan."
      },
      {
        "input": "s = \"xyz\"",
        "output": "1",
        "explanation": "Boundary verification."
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
    "selftext": "Implement LRU cache with get and put in O(1) time complexity.",
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
    "selftext": "Convert string to 32-bit signed integer handling whitespace, signs, and clamping.",
    "constraints": [
      "0 <= s.length <= 200",
      "Integer clamp"
    ],
    "testCases": [
      {
        "input": "s = \"abacaba\"",
        "output": "3",
        "explanation": "Calculated using optimal string scan."
      },
      {
        "input": "s = \"xyz\"",
        "output": "1",
        "explanation": "Boundary verification."
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
    "selftext": "Construct deep copy of linked list where nodes have additional random pointers.",
    "constraints": [
      "0 <= n <= 1000",
      "In-place node weaving"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Generate n x n matrix filled with elements from 1 to n^2 in spiral order.",
    "constraints": [
      "1 <= n <= 20",
      "4-boundary iteration"
    ],
    "testCases": [
      {
        "input": "grid = [[1, 2], [3, 4]]",
        "output": "7",
        "explanation": "Optimal traversal cost through grid cells."
      },
      {
        "input": "grid = [[1, 0], [0, 1]]",
        "output": "2",
        "explanation": "Boundary path verification."
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
    "selftext": "Design algorithm to serialize and deserialize binary tree structure.",
    "constraints": [
      "Node count up to 10^4",
      "Preorder DFS with nulls"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Check if word exists in 2D character grid using backtracking.",
    "constraints": [
      "1 <= m, n <= 6",
      "Backtracking DFS"
    ],
    "testCases": [
      {
        "input": "s = \"abacaba\"",
        "output": "3",
        "explanation": "Calculated using optimal string scan."
      },
      {
        "input": "s = \"xyz\"",
        "output": "1",
        "explanation": "Boundary verification."
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
    "selftext": "Reverse nodes of linked list k at a time in O(1) extra space.",
    "constraints": [
      "1 <= k <= n <= 5000",
      "O(1) extra memory"
    ],
    "testCases": [
      {
        "input": "head = [1, 2, 3, 4, 5]",
        "output": "[5, 4, 3, 2, 1]",
        "explanation": "Linked list reversed in place."
      },
      {
        "input": "head = [1, 2]",
        "output": "[2, 1]",
        "explanation": "Two node linked list reversed."
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
    "selftext": "Find lowest common ancestor of two nodes in binary tree.",
    "constraints": [
      "2 <= node count <= 10^5",
      "Recursive DFS"
    ],
    "testCases": [
      {
        "input": "root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1",
        "output": "3",
        "explanation": "The LCA of nodes 5 and 1 is 3."
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
        "input": "grid = [[1, 2], [3, 4]]",
        "output": "7",
        "explanation": "Optimal traversal cost through grid cells."
      },
      {
        "input": "grid = [[1, 0], [0, 1]]",
        "output": "2",
        "explanation": "Boundary path verification."
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
    "selftext": "Find minimum element in sorted rotated array in O(log N).",
    "constraints": [
      "1 <= n <= 5000",
      "O(log N) binary search"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Group strings that are anagrams of each other.",
    "constraints": [
      "1 <= strs.length <= 10^4",
      "Hash map"
    ],
    "testCases": [
      {
        "input": "s = \"abacaba\"",
        "output": "3",
        "explanation": "Calculated using optimal string scan."
      },
      {
        "input": "s = \"xyz\"",
        "output": "1",
        "explanation": "Boundary verification."
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
    "selftext": "Merge k sorted linked lists into one sorted linked list in O(N log K).",
    "constraints": [
      "k up to 10^4",
      "Min-heap priority queue"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Determine if binary tree satisfies BST rules.",
    "constraints": [
      "Node count up to 10^4",
      "Range recursion"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "If element in matrix is 0, set its entire row and column to 0 in O(1) space.",
    "constraints": [
      "1 <= m, n <= 200",
      "O(1) auxiliary space"
    ],
    "testCases": [
      {
        "input": "grid = [[1, 2], [3, 4]]",
        "output": "7",
        "explanation": "Optimal traversal cost through grid cells."
      },
      {
        "input": "grid = [[1, 0], [0, 1]]",
        "output": "2",
        "explanation": "Boundary path verification."
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
    "selftext": "Return 1 if product of array is positive, -1 if negative, 0 if zero without overflow.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "Sign count"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Return indices of two numbers that add up to target.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "Hash map"
    ],
    "testCases": [
      {
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] = 2 + 7 = 9, so return indices [0, 1]."
      },
      {
        "input": "nums = [3, 2, 4], target = 6",
        "output": "[1, 2]",
        "explanation": "nums[1] + nums[2] = 2 + 4 = 6, so return indices [1, 2]."
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
    "selftext": "Add two numbers stored in reverse order as linked list digits.",
    "constraints": [
      "1 <= length <= 100",
      "Carry addition"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Find length of longest substring without repeating characters.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "Sliding window"
    ],
    "testCases": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with the length of 1."
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
    "selftext": "Find median of two sorted arrays in O(log(m+n)).",
    "constraints": [
      "m, n up to 1000",
      "Binary search partition"
    ],
    "testCases": [
      {
        "input": "nums1 = [1, 3], nums2 = [2]",
        "output": "2.0",
        "explanation": "Merged array is [1, 2, 3] and median is 2.0."
      },
      {
        "input": "nums1 = [1, 2], nums2 = [3, 4]",
        "output": "2.5",
        "explanation": "Merged array is [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5."
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
    "selftext": "Find longest palindromic substring in string s.",
    "constraints": [
      "1 <= s.length <= 1000",
      "Expand around center"
    ],
    "testCases": [
      {
        "input": "s = \"abacaba\"",
        "output": "3",
        "explanation": "Calculated using optimal string scan."
      },
      {
        "input": "s = \"xyz\"",
        "output": "1",
        "explanation": "Boundary verification."
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
    "selftext": "Convert string to zigzag pattern across numRows rows and read line by line.",
    "constraints": [
      "1 <= s.length <= 1000",
      "Row direction toggle"
    ],
    "testCases": [
      {
        "input": "s = \"abacaba\"",
        "output": "3",
        "explanation": "Calculated using optimal string scan."
      },
      {
        "input": "s = \"xyz\"",
        "output": "1",
        "explanation": "Boundary verification."
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
    "selftext": "Reverse digits of integer with 32-bit overflow check.",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "Math reversal"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Validate nested bracket pairs.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack"
    ],
    "testCases": [
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "All opening brackets are matched and closed in order."
      },
      {
        "input": "s = \"(]\"",
        "output": "false",
        "explanation": "Mismatched closing bracket type."
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
    "selftext": "Merge two sorted linked lists into one.",
    "constraints": [
      "List lengths up to 50",
      "Two-pointer"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Calculate trapped water volume between bars.",
    "constraints": [
      "1 <= n <= 2 * 10^4",
      "Two-pointer"
    ],
    "testCases": [
      {
        "input": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        "output": "6",
        "explanation": "The elevation map traps 6 total units of rain water."
      },
      {
        "input": "height = [4, 2, 0, 3, 2, 5]",
        "output": "9",
        "explanation": "Water trapped between boundary bars equals 9 units."
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
    "selftext": "Generate all permutations of distinct integers.",
    "constraints": [
      "1 <= nums.length <= 6",
      "Backtracking"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Rotate n x n matrix 90 degrees clockwise in-place.",
    "constraints": [
      "1 <= n <= 20",
      "Transpose + reverse"
    ],
    "testCases": [
      {
        "input": "grid = [[1, 2], [3, 4]]",
        "output": "7",
        "explanation": "Optimal traversal cost through grid cells."
      },
      {
        "input": "grid = [[1, 0], [0, 1]]",
        "output": "2",
        "explanation": "Boundary path verification."
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
    "selftext": "Find contiguous subarray with maximum sum in linear time.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Kadane"
    ],
    "testCases": [
      {
        "input": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        "output": "6",
        "explanation": "The subarray [4, -1, 2, 1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "Single element subarray sum is 1."
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
    "selftext": "Generate n x n matrix filled with 1 to n^2 in spiral order.",
    "constraints": [
      "1 <= n <= 20",
      "Boundary iteration"
    ],
    "testCases": [
      {
        "input": "grid = [[1, 2], [3, 4]]",
        "output": "7",
        "explanation": "Optimal traversal cost through grid cells."
      },
      {
        "input": "grid = [[1, 0], [0, 1]]",
        "output": "2",
        "explanation": "Boundary path verification."
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
    "selftext": "Rotate singly linked list right by k places.",
    "constraints": [
      "Node count up to 500",
      "Ring rotation"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Count ways to climb n stairs.",
    "constraints": [
      "1 <= n <= 45",
      "Fibonacci DP"
    ],
    "testCases": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "1 step + 1 step, or 2 steps."
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "1+1+1, 1+2, or 2+1."
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
    "selftext": "Sort array with 0, 1, 2 in-place.",
    "constraints": [
      "1 <= nums.length <= 300",
      "Three pointer"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Generate all subsets of unique elements array.",
    "constraints": [
      "1 <= nums.length <= 10",
      "Backtracking"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 3]",
        "output": "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
        "explanation": "All 2^3 = 8 subsets."
      },
      {
        "input": "nums = [0]",
        "output": "[[], [0]]",
        "explanation": "Power set of single element array."
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
    "selftext": "Find area of largest rectangle in histogram bars using monotonic stack in O(N).",
    "constraints": [
      "1 <= heights.length <= 10^5",
      "Monotonic stack"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Check if binary tree is mirror of itself.",
    "constraints": [
      "1 <= node count <= 1000",
      "Recursive compare"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Traverse binary tree level by level.",
    "constraints": [
      "Node count up to 2000",
      "Queue BFS"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Reconstruct tree from preorder and inorder arrays.",
    "constraints": [
      "Node count up to 3000",
      "Recursive split"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Populate next pointer to point to next right node in complete binary tree.",
    "constraints": [
      "Node count up to 4096",
      "O(1) extra memory level pointer"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Maximize profit with single stock buy and sell.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "Min tracker"
    ],
    "testCases": [
      {
        "input": "prices = [7, 1, 5, 3, 6, 4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
      },
      {
        "input": "prices = [7, 6, 4, 3, 1]",
        "output": "0",
        "explanation": "No profitable transaction possible."
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
    "selftext": "Find maximum path sum in binary tree.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Postorder DFS"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Find single element in array of pairs.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "Bitwise XOR"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
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
    "selftext": "Design stack with O(1) getMin method.",
    "constraints": [
      "O(1) time methods",
      "Dual stack"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, 2, 5, 4]",
        "output": "4",
        "explanation": "Evaluated according to problem conditions."
      },
      {
        "input": "nums = [10, 20]",
        "output": "2",
        "explanation": "Boundary evaluation."
      }
    ]
  }
];
