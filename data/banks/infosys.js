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
    "selftext": "Given monster health HP and a 2D array spells where spells[i] = [damage, manaCost], find the minimum mana required to defeat the monster (reduce HP <= 0). Each spell can be cast multiple times.",
    "constraints": [
      "Unbounded Knapsack DP",
      "1 <= HP <= 10^4"
    ],
    "testCases": [
      {
        "input": "HP = 100, spells = [[25, 30], [40, 45]]",
        "output": "115",
        "explanation": "Optimal spell combination reduces HP to <= 0 with minimum mana 115."
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
    "selftext": "You are given two strings `s` and `t` of equal length `n`. You can perform the following operation on the string `s`:\n\n\t• Remove a suffix of `s` of length `l` where `0 \n\tFor example, let `s = 'abcd'` then in one operation you can remove the suffix `'cd'` and append it in front of `s` making `s = 'cdab'`.\n\nYou are also given an integer `k`. Return the number of ways in which `s` can be transformed into `t` in exactly `k` operations.\n\nSince the answer can be large, return it modulo `109 + 7`.",
    "constraints": [
      "0 <= word1.length, word2.length <= 500",
      "O(M*N) DP"
    ],
    "testCases": [
      {
        "input": "s = \"abcd\", t = \"cdab\", k = 2",
        "output": "2",
        "explanation": "First way: In first operation, choose suffix from index = 3, so resulting s = \"dabc\". In second operation, choose suffix from index = 3, so resulting s = \"cdab\". Second way: In first operation, choose suffix from index = 1, so resulting s = \"bcda\". In second operation, choose suffix from index = 1, so resulting s = \"cdab\"."
      },
      {
        "input": "s = \"ababab\", t = \"ababab\", k = 1",
        "output": "2",
        "explanation": "First way: Choose suffix from index = 2, so resulting s = \"ababab\". Second way: Choose suffix from index = 4, so resulting s = \"ababab\"."
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
    "selftext": "Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.\n\nNote: You can only move either down or right at any point in time.",
    "constraints": [
      "1 <= m, n <= 200",
      "Grid DP with state"
    ],
    "testCases": [
      {
        "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "explanation": "Because the path 1 &rarr; 3 &rarr; 1 &rarr; 1 &rarr; 1 minimizes the sum."
      },
      {
        "input": "grid = [[1,2,3],[4,5,6]]",
        "output": "12",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "constraints": [
      "1 <= nums.length <= 100",
      "Linear DP"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4",
        "explanation": "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4."
      },
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12",
        "explanation": "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12."
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
    "selftext": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",
    "constraints": [
      "1 <= nums.length <= 2500",
      "O(N log N) patience sorting"
    ],
    "testCases": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "The longest increasing subsequence is [2,3,7,101], therefore the length is 4."
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [7,7,7,7,7,7,7]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    "constraints": [
      "1 <= k <= n <= 5000",
      "O(1) extra space"
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
    "selftext": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n\n\t• Open brackets must be closed by the same type of brackets.\n\n\t• Open brackets must be closed in the correct order.\n\n\t• Every close bracket has a corresponding open bracket of the same type.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack O(N)"
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
    "selftext": "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy reach tracker"
    ],
    "testCases": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "explanation": "Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      {
        "input": "nums = [3,2,1,0,4]",
        "output": "false",
        "explanation": "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
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
    "selftext": "Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,4,4,5,6,7]` might become:\n\n\t• `[4,5,6,7,0,1,4]` if it was rotated `4` times.\n\n\t• `[0,1,4,4,5,6,7]` if it was rotated `7` times.\n\nNotice that rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.\n\nGiven the sorted rotated array `nums` that may contain duplicates, return the minimum element of this array.\n\nYou must decrease the overall operation steps as much as possible.",
    "constraints": [
      "1 <= n <= 5000",
      "O(log N) binary search"
    ],
    "testCases": [
      {
        "input": "nums = [1,3,5]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [2,2,2,0,1]",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.\n\nNotice that you may not slant the container.",
    "constraints": [
      "2 <= height.length <= 10^5",
      "Two-pointer greedy"
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
    "selftext": "You are given an integer array `nums` and an integer `target`.\n\nYou want to build an expression out of nums by adding one of the symbols `'+'` and `'-'` before each integer in nums and then concatenate all the integers.\n\n\t• For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a `'-'` before `1` and concatenate them to build the expression `\"+2-1\"`.\n\nReturn the number of different expressions that you can build, which evaluates to `target`.",
    "constraints": [
      "1 <= nums.length <= 20",
      "Subset sum transformation"
    ],
    "testCases": [
      {
        "input": "nums = [1,1,1,1,1], target = 3",
        "output": "5",
        "explanation": "There are 5 ways to assign symbols to make the sum of nums be target 3. -1 + 1 + 1 + 1 + 1 = 3 +1 - 1 + 1 + 1 + 1 = 3 +1 + 1 - 1 + 1 + 1 = 3 +1 + 1 + 1 - 1 + 1 = 3 +1 + 1 + 1 + 1 - 1 = 3"
      },
      {
        "input": "nums = [1], target = 1",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.",
    "constraints": [
      "1 <= m, n <= 10",
      "Boundary iteration"
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
    "selftext": "Given an integer array `nums` of unique elements, return all possible subsets (the power set).\n\nThe solution set must not contain duplicate subsets. Return the solution in any order.",
    "constraints": [
      "1 <= nums.length <= 10",
      "Backtracking recursion"
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
    "selftext": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\n\t• For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "Topological sort"
    ],
    "testCases": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "true",
        "explanation": "There are a total of 2 courses to take.  To take course 1 you should have finished course 0. So it is possible."
      },
      {
        "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "output": "false",
        "explanation": "There are a total of 2 courses to take.  To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible."
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
    "selftext": "Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    "constraints": [
      "0 <= node count <= 2000",
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
    "selftext": "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.",
    "constraints": [
      "1 <= s.length <= 300",
      "Boolean DP array"
    ],
    "testCases": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "explanation": "Return true because \"leetcode\" can be segmented as \"leet code\"."
      },
      {
        "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
        "output": "true",
        "explanation": "Return true because \"applepenapple\" can be segmented as \"apple pen apple\". Note that you are allowed to reuse a dictionary word."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order.\n\nThe same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.\n\nThe test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.",
    "constraints": [
      "1 <= candidates.length <= 30",
      "Backtracking with reuse"
    ],
    "testCases": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]",
        "explanation": "2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times. 7 is a candidate, and 7 = 7. These are the only two combinations."
      },
      {
        "input": "candidates = [2,3,5], target = 8",
        "output": "[[2,2,2,2],[2,3,3],[3,5]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "candidates = [2], target = 1",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 6",
      "Backtracking swap"
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
    "selftext": "Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.\n\nNote: You can only move either down or right at any point in time.",
    "constraints": [
      "1 <= m, n <= 200",
      "2D Dynamic programming"
    ],
    "testCases": [
      {
        "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "explanation": "Because the path 1 &rarr; 3 &rarr; 1 &rarr; 1 &rarr; 1 minimizes the sum."
      },
      {
        "input": "grid = [[1,2,3],[4,5,6]]",
        "output": "12",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "There is a robot on an `m x n` grid. The robot is initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.\n\nGiven the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.\n\nThe test cases are generated so that the answer will be less than or equal to `2 * 109`.",
    "constraints": [
      "1 <= m, n <= 100",
      "Grid combinatorics / DP"
    ],
    "testCases": [
      {
        "input": "m = 3, n = 7",
        "output": "28",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "m = 3, n = 2",
        "output": "3",
        "explanation": "From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down"
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
    "selftext": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.",
    "constraints": [
      "1 <= coins.length <= 300",
      "Unbounded knapsack DP"
    ],
    "testCases": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "coins = [1], amount = 0",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\n\n\t• For example, `\"ace\"` is a subsequence of `\"abcde\"`.\n\nA common subsequence of two strings is a subsequence that is common to both strings.",
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "2D Dynamic programming"
    ],
    "testCases": [
      {
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "output": "3",
        "explanation": "The longest common subsequence is \"ace\" and its length is 3."
      },
      {
        "input": "text1 = \"abc\", text2 = \"abc\"",
        "output": "3",
        "explanation": "The longest common subsequence is \"abc\" and its length is 3."
      },
      {
        "input": "text1 = \"abc\", text2 = \"def\"",
        "output": "0",
        "explanation": "There is no such common subsequence, so the result is 0."
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
    "selftext": "You are given an `m x n` integer matrix `matrix` with the following two properties:\n\n\t• Each row is sorted in non-decreasing order.\n\n\t• The first integer of each row is greater than the last integer of the previous row.\n\nGiven an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.\n\nYou must write a solution in `O(log(m * n))` time complexity.",
    "constraints": [
      "1 <= m, n <= 100",
      "Binary search 2D mapping"
    ],
    "testCases": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, return the maximum width of the given tree.\n\nThe maximum width of a tree is the maximum width among all levels.\n\nThe width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.\n\nIt is guaranteed that the answer will in the range of a 32-bit signed integer.",
    "constraints": [
      "Node count up to 3000",
      "Level order with 64-bit index"
    ],
    "testCases": [
      {
        "input": "root = [1,3,2,5,3,null,9]",
        "output": "4",
        "explanation": "The maximum width exists in the third level with length 4 (5,3,null,9)."
      },
      {
        "input": "root = [1,3,2,5,null,null,9,6,null,7]",
        "output": "7",
        "explanation": "The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7)."
      },
      {
        "input": "root = [1,3,2,5]",
        "output": "2",
        "explanation": "The maximum width exists in the second level with length 2 (3,2)."
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
    "selftext": "Given the `root` of a binary tree, return the length of the diameter of the tree.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.\n\nThe length of a path between two nodes is represented by the number of edges between them.",
    "constraints": [
      "1 <= node count <= 10^4",
      "Tree DFS postorder"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,4,5]",
        "output": "3",
        "explanation": "3 is the length of the path [4,2,1,3] or [5,2,1,3]."
      },
      {
        "input": "root = [1,2]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.\n\nAccording to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).&rdquo;",
    "constraints": [
      "2 <= node count <= 10^5",
      "BST property traversal"
    ],
    "testCases": [
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        "output": "6",
        "explanation": "The LCA of nodes 2 and 8 is 6."
      },
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        "output": "2",
        "explanation": "The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition."
      },
      {
        "input": "root = [2,1], p = 2, q = 1",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, invert the tree, and return its root.",
    "constraints": [
      "0 <= node count <= 100",
      "Recursive DFS swap"
    ],
    "testCases": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [2,1,3]",
        "output": "[2,3,1]",
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
    "selftext": "Given the `root` of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "constraints": [
      "0 <= node count <= 10^4",
      "DFS height check"
    ],
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,null,2]",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    "constraints": [
      "1 <= node count <= 1000",
      "Two-tree recursive compare"
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
    "selftext": "You are given the `root` of a binary tree.\n\nReturn all root-to-leaf paths in any order.\n\nA leaf is a node with no children.",
    "constraints": [
      "1 <= node count <= 100",
      "Backtracking DFS string"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,null,5]",
        "output": "[\"1->2->5\",\"1->3\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1]",
        "output": "[\"1\"]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.\n\nA leaf is a node with no children.",
    "constraints": [
      "0 <= node count <= 5000",
      "DFS subtract target"
    ],
    "testCases": [
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22",
        "output": "true",
        "explanation": "The root-to-leaf path with the target sum is shown."
      },
      {
        "input": "root = [1,2,3], targetSum = 5",
        "output": "false",
        "explanation": "There are two root-to-leaf paths in the tree: (1 --> 2): The sum is 3. (1 --> 3): The sum is 4. There is no root-to-leaf path with sum = 5."
      },
      {
        "input": "root = [], targetSum = 0",
        "output": "false",
        "explanation": "Since the tree is empty, there are no root-to-leaf paths."
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
    "selftext": "Given the `root` node of a binary tree, your task is to create a string representation of the tree following a specific set of formatting rules. The representation should be based on a preorder traversal of the binary tree and must adhere to the following guidelines:\n\n\t• \n\tNode Representation: Each node in the tree should be represented by its integer value.\n\n\t\n\n\t• \n\tParentheses for Children: If a node has at least one child (either left or right), its children should be represented inside parentheses. Specifically:\n\n\t\n\n\t\t• If a node has a left child, the value of the left child should be enclosed in parentheses immediately following the node's value.\n\n\t\t• If a node has a right child, the value of the right child should also be enclosed in parentheses. The parentheses for the right child should follow those of the left child.\n\n\t\n\n\t\n\n\t• \n\tOmitting Empty Parentheses: Any empty parentheses pairs (i.e., `()`) should be omitted from the final string representation of the tree, with one specific exception: when a node has a right child but no left child. In such cases, you must include an empty pair of parentheses to indicate the absence of the left child. This ensures that the one-to-one mapping between the string representation and the original binary tree structure is maintained.\n\n\tIn summary, empty parentheses pairs should be omitted when a node has only a left child or no children. However, when a node has a right child but no left child, an empty pair of parentheses must precede the representation of the right child to reflect the tree's structure accurately.",
    "constraints": [
      "1 <= preorder.length <= 3000",
      "Recursive index split"
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
    "selftext": "Given the `root` of a binary tree, flatten the tree into a \"linked list\":\n\n\t• The \"linked list\" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.\n\n\t• The \"linked list\" should be in the same order as a pre-order traversal of the binary tree.",
    "constraints": [
      "0 <= node count <= 2000",
      "Morris traversal / reverse preorder"
    ],
    "testCases": [
      {
        "input": "root = [1,2,5,3,4,null,6]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [0]",
        "output": "[0]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\nAccording to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).&rdquo;",
    "constraints": [
      "2 <= node count <= 10^5",
      "Postorder search"
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
    "selftext": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Bucket sort / Min-Heap"
    ],
    "testCases": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1,2,1,2,1,2,3,1,3,2], k = 2",
        "output": "[1,2]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.",
    "constraints": [
      "1 <= temperatures.length <= 10^5",
      "Monotonic stack"
    ],
    "testCases": [
      {
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "temperatures = [30,40,50,60]",
        "output": "[1,1,1,0]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "temperatures = [30,60,90]",
        "output": "[1,1,0]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the `MinStack` class:\n\n\t• `MinStack()` initializes the stack object.\n\n\t• `void push(int value)` pushes the element `value` onto the stack.\n\n\t• `void pop()` removes the element on the top of the stack.\n\n\t• `int top()` gets the top element of the stack.\n\n\t• `int getMin()` retrieves the minimum element in the stack.\n\nYou must implement a solution with `O(1)` time complexity for each function.",
    "constraints": [
      "O(1) time all methods",
      "Auxiliary min stack"
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
    "selftext": "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).\n\nImplement the `MyQueue` class:\n\n\t• `void push(int x)` Pushes element x to the back of the queue.\n\n\t• `int pop()` Removes the element from the front of the queue and returns it.\n\n\t• `int peek()` Returns the element at the front of the queue.\n\n\t• `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.\n\nNotes:\n\n\t• You must use only standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.\n\n\t• Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.",
    "constraints": [
      "Push, pop, peek, empty",
      "Two stacks amortized O(1)"
    ],
    "testCases": [
      {
        "input": "calls = [\"MyQueue\", \"push(1)\", \"push(2)\", \"peek()\", \"pop()\", \"empty()\"]",
        "output": "[null, null, null, 1, 1, false]",
        "explanation": "Queue FIFO behavior simulated using two stacks."
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
    "selftext": "Given an encoded string, return its decoded string.\n\nThe encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.\n\nYou may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.\n\nThe test cases are generated so that the length of the output will never exceed `105`.",
    "constraints": [
      "1 <= s.length <= 30",
      "Stack integer and string"
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
    "selftext": "There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.\n\nA province is a group of directly or indirectly connected cities and no other cities outside of the group.\n\nYou are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `ith` city and the `jth` city are directly connected, and `isConnected[i][j] = 0` otherwise.\n\nReturn the total number of provinces.",
    "constraints": [
      "1 <= n <= 200",
      "Disjoint Set Union (DSU) / DFS"
    ],
    "testCases": [
      {
        "input": "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "isConnected = [[1,0,0],[0,1,0],[0,0,1]]",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "You are given an `m x n` `grid` where each cell can have one of three values:\n\n\t• `0` representing an empty cell,\n\n\t• `1` representing a fresh orange, or\n\n\t• `2` representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.",
    "constraints": [
      "1 <= m, n <= 10",
      "Queue multi-source BFS"
    ],
    "testCases": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "explanation": "The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally."
      },
      {
        "input": "grid = [[0,2]]",
        "output": "0",
        "explanation": "Since there are already no fresh oranges at minute 0, the answer is just 0."
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
    "selftext": "You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (ui, vi, wi)`, where `ui` is the source node, `vi` is the target node, and `wi` is the time it takes for a signal to travel from source to target.\n\nWe will send a signal from a given node `k`. Return the minimum time it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.",
    "constraints": [
      "1 <= n <= 100",
      "Dijkstra Priority Queue"
    ],
    "testCases": [
      {
        "input": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "times = [[1,2,1]], n = 2, k = 1",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "times = [[1,2,1]], n = 2, k = 2",
        "output": "-1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.",
    "constraints": [
      "1 <= s.length <= 16",
      "Backtracking DP"
    ],
    "testCases": [
      {
        "input": "s = \"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"a\"",
        "output": "[[\"a\"]]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.\n\nA mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.",
    "constraints": [
      "0 <= digits.length <= 4",
      "Recursive combination"
    ],
    "testCases": [
      {
        "input": "digits = \"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "digits = \"2\"",
        "output": "[\"a\",\"b\",\"c\"]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.\n\nA subarray is a contiguous non-empty sequence of elements within an array.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "Prefix sum hashmap"
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
    "selftext": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "O(N) Kadane"
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
    "company": "Infosys",
    "title": "Infosys - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Trapping Rain Water Elevation Chamber",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Maximum Subarray Kadane Algorithm",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
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
    "company": "Infosys",
    "title": "Infosys - Sliding Window Maximum Monotonic Deque",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Product of Array Except Self Without Division",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Rotate Array by K Positions Right",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Move Zeroes to End of Array",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Majority Element in Election Tally",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Next Permutation Lexicographical Order",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Search in Rotated Sorted Array",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Valid Palindrome String Check",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Longest Palindromic Substring Expand Centers",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string `s`, return the longest palindromic substring in `s`.",
    "constraints": [
      "1 <= s.length <= 1000"
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
    "company": "Infosys",
    "title": "Infosys - Group Anagrams by Character Signature",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Longest Substring Without Repeating Characters Window",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string `s`, find the length of the longest substring without duplicate characters.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4"
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
    "company": "Infosys",
    "title": "Infosys - Minimum Window Substring Character Frequency",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - String to Integer Atoi Parsing",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
    "company": "Infosys",
    "title": "Infosys - Valid Parentheses Bracket Matching",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n\n\t• Open brackets must be closed by the same type of brackets.\n\n\t• Open brackets must be closed in the correct order.\n\n\t• Every close bracket has a corresponding open bracket of the same type.",
    "constraints": [
      "1 <= s.length <= 10^4"
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
    "company": "Infosys",
    "title": "Infosys - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Infosys%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "Infosys DSE Technical Round",
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
  }
];
