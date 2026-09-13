// Auto-generated verified interview questions for Infosys
module.exports = [
  {
    "company": "Infosys",
    "title": "Infosys - Special Matrix Energy Path with Blocked Cells & Powerups",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Special%20Matrix%20Energy%20Path%20with%20Blocked%20Cells%20%26%20Powerups%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "A robot traverses an m x n grid from top-left to bottom-right moving only right or down. Cells contain positive energy bonuses or negative obstacle costs. Find path maximizing final energy.",
    "constraints": [
      "1 <= m, n <= 200",
      "DP with boundary checks"
    ],
    "testCases": [
      {
        "input": "grid = [[5, -2, 3], [-1, 4, 2], [2, 1, 6]]",
        "output": "16",
        "explanation": "Optimal path: 5 -> -1 -> 4 -> 2 -> 6 = 16 collected energy."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - HackWithInfy Monster Turn-Based Combat Strategy",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20HackWithInfy%20Monster%20Turn-Based%20Combat%20Strategy%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given monster HP and list of spells with damage and mana cost, find minimum mana required to defeat monster (reduce HP <= 0).",
    "constraints": [
      "Unbounded Knapsack DP",
      "1 <= HP <= 10^4"
    ],
    "testCases": [
      {
        "input": "HP = 100, spells = [{ dmg: 25, mana: 30 }, { dmg: 40, mana: 45 }]",
        "output": "115",
        "explanation": "Two spells of 40 (mana 90) + one spell of 25 (mana 30) = 105 dmg with 120 mana, or optimal combination."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Smart City Traffic Light Cycle Sync",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Smart%20City%20Traffic%20Light%20Cycle%20Sync%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given cycle durations in seconds for 3 adjacent intersections, calculate the time in seconds when all three lights switch to Green simultaneously.",
    "constraints": [
      "LCM of 3 integers",
      "1 <= durations <= 300"
    ],
    "testCases": [
      {
        "input": "durations = [30, 45, 60]",
        "output": "180",
        "explanation": "LCM(30, 45, 60) = 180 seconds."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Cloud Server Microservice Request Load Balancer",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Cloud%20Server%20Microservice%20Request%20Load%20Balancer%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given N microservice instances and incoming request weights, allocate each request to the instance with current lowest accumulated load.",
    "constraints": [
      "Min-Heap / Array tracker",
      "1 <= instances <= 50"
    ],
    "testCases": [
      {
        "input": "instances = 3, requests = [10, 20, 15, 5]",
        "output": "[0, 1, 2, 0]",
        "explanation": "Request 1 to server 0, 2 to 1, 3 to 2. Server 0 has lowest load (10) so request 4 assigned to server 0."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Minimum Cost String Transformation Edit Distance",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Minimum%20Cost%20String%20Transformation%20Edit%20Distance%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Calculate minimum edit distance operations (insert, delete, replace) to convert word1 to word2.",
    "constraints": [
      "0 <= word1.length, word2.length <= 500",
      "O(M*N) DP"
    ],
    "testCases": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": "horse -> rorse (replace h with r) -> rose (remove r) -> ros (remove e)."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Maximum Energy Path in Grid with Obstacles",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Maximum%20Energy%20Path%20in%20Grid%20with%20Obstacles%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find path from (0,0) to (m-1, n-1) with maximum collected energy.",
    "constraints": [
      "1 <= m, n <= 200",
      "Grid DP with state"
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
    "company": "Infosys",
    "title": "Infosys - House Robber Maximum Stash",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20House%20Robber%20Maximum%20Stash%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Determine maximum amount of money you can rob tonight without robbing adjacent houses.",
    "constraints": [
      "1 <= nums.length <= 100",
      "Linear DP"
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
    "company": "Infosys",
    "title": "Infosys - Longest Increasing Subsequence Length",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Longest%20Increasing%20Subsequence%20Length%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find length of longest strictly increasing subsequence in integer array.",
    "constraints": [
      "1 <= nums.length <= 2500",
      "O(N log N) patience sorting"
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
    "company": "Infosys",
    "title": "Infosys - Reverse a Linked List in Groups of Size K",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Reverse%20a%20Linked%20List%20in%20Groups%20of%20Size%20K%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Reverse nodes of linked list k at a time, preserving remaining nodes if less than k.",
    "constraints": [
      "1 <= k <= n <= 5000",
      "O(1) extra space"
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
    "company": "Infosys",
    "title": "Infosys - Valid Parentheses Bracket Pairs",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Valid%20Parentheses%20Bracket%20Pairs%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Validate matching brackets in string using stack data structure.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack O(N)"
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
    "company": "Infosys",
    "title": "Infosys - Jump Game Can Reach Final Index",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Jump%20Game%20Can%20Reach%20Final%20Index%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Check if last index is reachable given array of maximum jump lengths.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy reach tracker"
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
    "company": "Infosys",
    "title": "Infosys - Find Minimum in Rotated Sorted Array",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Find%20Minimum%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find minimum element in sorted array rotated at unknown pivot in O(log N).",
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
    "company": "Infosys",
    "title": "Infosys - Container with Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Container%20with%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find two lines that together with x-axis store the most water.",
    "constraints": [
      "2 <= height.length <= 10^5",
      "Two-pointer greedy"
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
    "company": "Infosys",
    "title": "Infosys - Target Sum Using Plus and Minus Signs",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Target%20Sum%20Using%20Plus%20and%20Minus%20Signs%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Count expressions evaluating to target by adding + or - before each integer.",
    "constraints": [
      "1 <= nums.length <= 20",
      "Subset sum transformation"
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
    "company": "Infosys",
    "title": "Infosys - Spiral Matrix Traversal Order",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Spiral%20Matrix%20Traversal%20Order%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return all elements of m x n matrix in clockwise spiral order.",
    "constraints": [
      "1 <= m, n <= 10",
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
    "company": "Infosys",
    "title": "Infosys - Subsets Power Set Generation",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Subsets%20Power%20Set%20Generation%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Return all possible unique subsets (power set) of an integer array.",
    "constraints": [
      "1 <= nums.length <= 10",
      "Backtracking recursion"
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
    "company": "Infosys",
    "title": "Infosys - Course Schedule Dependency Cycle Detection",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Course%20Schedule%20Dependency%20Cycle%20Detection%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Determine if you can finish all courses given prerequisite graph dependencies.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "Topological sort"
    ],
    "testCases": [
      {
        "input": "numCourses = 2, prerequisites = [[1, 0]]",
        "output": "true",
        "explanation": "To take course 1 you must have taken course 0. No cycle."
      },
      {
        "input": "numCourses = 2, prerequisites = [[1, 0], [0, 1]]",
        "output": "false",
        "explanation": "Mutual dependency creates a cycle."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Binary Tree Level Order Traversal",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Binary%20Tree%20Level%20Order%20Traversal%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return level order traversal of binary tree nodes level by level.",
    "constraints": [
      "0 <= node count <= 2000",
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
    "company": "Infosys",
    "title": "Infosys - Word Break in Dictionary",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Word%20Break%20in%20Dictionary%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Check if string s can be segmented into space-separated sequence of dictionary words.",
    "constraints": [
      "1 <= s.length <= 300",
      "Boolean DP array"
    ],
    "testCases": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\", \"code\"]",
        "output": "true",
        "explanation": "\"leetcode\" can be segmented into \"leet\" and \"code\"."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]",
        "output": "false",
        "explanation": "Cannot be segmented into valid dictionary words."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Combination Sum Unique Combinations",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Combination%20Sum%20Unique%20Combinations%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find all unique combinations in candidates where chosen numbers sum to target.",
    "constraints": [
      "1 <= candidates.length <= 30",
      "Backtracking with reuse"
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
    "company": "Infosys",
    "title": "Infosys - Permutations of Distinct Integers",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Permutations%20of%20Distinct%20Integers%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given array nums of distinct integers, return all possible permutations.",
    "constraints": [
      "1 <= nums.length <= 6",
      "Backtracking swap"
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
    "company": "Infosys",
    "title": "Infosys - Minimum Path Sum in Grid",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Minimum%20Path%20Sum%20in%20Grid%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find path from top-left to bottom-right of grid which minimizes sum of all numbers along its path.",
    "constraints": [
      "1 <= m, n <= 200",
      "2D Dynamic programming"
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
    "company": "Infosys",
    "title": "Infosys - Unique Paths Grid Obstacle Free",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Unique%20Paths%20Grid%20Obstacle%20Free%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Calculate number of unique paths a robot can take to reach bottom-right corner moving only right/down.",
    "constraints": [
      "1 <= m, n <= 100",
      "Grid combinatorics / DP"
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
    "company": "Infosys",
    "title": "Infosys - Coin Change 2 Number of Ways",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Coin%20Change%202%20Number%20of%20Ways%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Calculate number of combinations that make up target amount from given coin denominations.",
    "constraints": [
      "1 <= coins.length <= 300",
      "Unbounded knapsack DP"
    ],
    "testCases": [
      {
        "input": "coins = [1, 2, 5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins total)."
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1",
        "explanation": "Cannot form amount 3 using coin of 2."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Longest Common Subsequence of Two Strings",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Longest%20Common%20Subsequence%20of%20Two%20Strings%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given two strings text1 and text2, return length of their longest common subsequence.",
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "2D Dynamic programming"
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
    "company": "Infosys",
    "title": "Infosys - Search a 2D Matrix Row and Column Sorted",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Search%20a%202D%20Matrix%20Row%20and%20Column%20Sorted%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Write efficient algorithm that searches for target in m x n integer matrix with sorted rows.",
    "constraints": [
      "1 <= m, n <= 100",
      "Binary search 2D mapping"
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
    "company": "Infosys",
    "title": "Infosys - Maximum Width of Binary Tree",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Maximum%20Width%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given root of binary tree, return maximum width of given tree at any level.",
    "constraints": [
      "Node count up to 3000",
      "Level order with 64-bit index"
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
    "company": "Infosys",
    "title": "Infosys - Diameter of Binary Tree Path Length",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Diameter%20of%20Binary%20Tree%20Path%20Length%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given root of binary tree, return length of diameter (longest path between any two nodes).",
    "constraints": [
      "1 <= node count <= 10^4",
      "Tree DFS postorder"
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
    "company": "Infosys",
    "title": "Infosys - Lowest Common Ancestor of a BST",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Lowest%20Common%20Ancestor%20of%20a%20BST%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find lowest common ancestor node of two given nodes in Binary Search Tree.",
    "constraints": [
      "2 <= node count <= 10^5",
      "BST property traversal"
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
    "company": "Infosys",
    "title": "Infosys - Invert Binary Tree Mirror",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Invert%20Binary%20Tree%20Mirror%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given root of binary tree, invert the tree and return its root.",
    "constraints": [
      "0 <= node count <= 100",
      "Recursive DFS swap"
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
    "company": "Infosys",
    "title": "Infosys - Maximum Depth of Binary Tree",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Maximum%20Depth%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return maximum depth of binary tree from root down to farthest leaf node.",
    "constraints": [
      "0 <= node count <= 10^4",
      "DFS height check"
    ],
    "testCases": [
      {
        "input": "root = [3, 9, 20, null, null, 15, 7]",
        "output": "3",
        "explanation": "Max depth along root to leaf path 3 -> 20 -> 15 is 3."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Symmetric Tree Mirror Check",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Symmetric%20Tree%20Mirror%20Check%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Check whether binary tree is mirror of itself (symmetric around its center).",
    "constraints": [
      "1 <= node count <= 1000",
      "Two-tree recursive compare"
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
    "company": "Infosys",
    "title": "Infosys - Binary Tree Root to Leaf Paths",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Binary%20Tree%20Root%20to%20Leaf%20Paths%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given root of binary tree, return all root-to-leaf paths in any order.",
    "constraints": [
      "1 <= node count <= 100",
      "Backtracking DFS string"
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
    "company": "Infosys",
    "title": "Infosys - Path Sum Target Verification",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Path%20Sum%20Target%20Verification%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given root of binary tree and integer targetSum, return true if tree has root-to-leaf path with target sum.",
    "constraints": [
      "0 <= node count <= 5000",
      "DFS subtract target"
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
    "company": "Infosys",
    "title": "Infosys - Construct Binary Tree from Preorder and Inorder",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given preorder and inorder traversal arrays, construct and return binary tree.",
    "constraints": [
      "1 <= preorder.length <= 3000",
      "Recursive index split"
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
    "company": "Infosys",
    "title": "Infosys - Flatten Binary Tree to Linked List",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Flatten%20Binary%20Tree%20to%20Linked%20List%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Flatten binary tree into singly linked list in-place following preorder traversal.",
    "constraints": [
      "0 <= node count <= 2000",
      "Morris traversal / reverse preorder"
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
    "company": "Infosys",
    "title": "Infosys - Lowest Common Ancestor of a Binary Tree",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find lowest common ancestor of two nodes in generic binary tree.",
    "constraints": [
      "2 <= node count <= 10^5",
      "Postorder search"
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
    "company": "Infosys",
    "title": "Infosys - Top K Frequent Elements in Array",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Top%20K%20Frequent%20Elements%20in%20Array%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given integer array nums and integer k, return the k most frequent elements using bucket sort.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Bucket sort / Min-Heap"
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
    "company": "Infosys",
    "title": "Infosys - Daily Temperatures Wait Days",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Daily%20Temperatures%20Wait%20Days%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given array of daily temperatures, return array answer where answer[i] is days until warmer temperature.",
    "constraints": [
      "1 <= temperatures.length <= 10^5",
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
    "company": "Infosys",
    "title": "Infosys - Min Stack Constant Time Retrieval",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Min%20Stack%20Constant%20Time%20Retrieval%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Design stack that supports push, pop, top, and retrieving minimum element in O(1) time.",
    "constraints": [
      "O(1) time all methods",
      "Auxiliary min stack"
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
    "company": "Infosys",
    "title": "Infosys - Implement Queue using Two Stacks",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Implement%20Queue%20using%20Two%20Stacks%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Implement FIFO queue using only two standard stacks.",
    "constraints": [
      "Push, pop, peek, empty",
      "Two stacks amortized O(1)"
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
    "company": "Infosys",
    "title": "Infosys - Decode String Nested Multiplier",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Decode string in format k[encoded_string] with nested brackets.",
    "constraints": [
      "1 <= s.length <= 30",
      "Stack integer and string"
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
    "company": "Infosys",
    "title": "Infosys - Number of Provinces Connected Components",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Number%20of%20Provinces%20Connected%20Components%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given n cities connected by direct roads, return total number of provinces.",
    "constraints": [
      "1 <= n <= 200",
      "Disjoint Set Union (DSU) / DFS"
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
    "company": "Infosys",
    "title": "Infosys - Rotting Oranges Multi-source BFS",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Rotting%20Oranges%20Multi-source%20BFS%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Calculate minutes until all fresh oranges turn rotten via 4-directional spread.",
    "constraints": [
      "1 <= m, n <= 10",
      "Queue multi-source BFS"
    ],
    "testCases": [
      {
        "input": "grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]",
        "output": "4",
        "explanation": "All fresh oranges are rotten after 4 minutes."
      },
      {
        "input": "grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]",
        "output": "-1",
        "explanation": "Orange at bottom-left cannot ever rot."
      }
    ]
  },
  {
    "company": "Infosys",
    "title": "Infosys - Network Delay Time Dijkstra Shortest Path",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Network%20Delay%20Time%20Dijkstra%20Shortest%20Path%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Calculate time for all n nodes to receive signal from source k in directed graph.",
    "constraints": [
      "1 <= n <= 100",
      "Dijkstra Priority Queue"
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
    "company": "Infosys",
    "title": "Infosys - Word Search in Matrix Grid",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Word%20Search%20in%20Matrix%20Grid%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Determine if word exists in 2D character grid along adjacent cells.",
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
    "company": "Infosys",
    "title": "Infosys - Palindrome Partitioning All Decompositions",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Palindrome%20Partitioning%20All%20Decompositions%20interview%20assessment&type=link",
    "round": "Infosys InfyTQ Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Partition string s such that every substring of partition is palindrome.",
    "constraints": [
      "1 <= s.length <= 16",
      "Backtracking DP"
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
    "company": "Infosys",
    "title": "Infosys - Letter Combinations of a Phone Number",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Letter%20Combinations%20of%20a%20Phone%20Number%20interview%20assessment&type=link",
    "round": "Infosys Specialist Programmer Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given digit string 2-9, return all possible letter combinations.",
    "constraints": [
      "0 <= digits.length <= 4",
      "Recursive combination"
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
    "company": "Infosys",
    "title": "Infosys - Subarray Sum Equals K Prefix Frequency",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Infosys SP Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find total number of subarrays whose sum equals k using prefix sum hashmap.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "Prefix sum hashmap"
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
    "company": "Infosys",
    "title": "Infosys - Maximum Subarray Sum Kadane Algorithm",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Maximum%20Subarray%20Sum%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find contiguous subarray with maximum sum in linear time.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "O(N) Kadane"
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
  }
];
