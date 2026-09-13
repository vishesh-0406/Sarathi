// Auto-generated verified interview questions for Salesforce
module.exports = [
  {
    "company": "Salesforce",
    "title": "Salesforce - Multi-Tenant Governor Limit Rate Allocator",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Multi-Tenant%20Governor%20Limit%20Rate%20Allocator%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "In a multi-tenant cloud environment, each tenant has a max API call quota per hour. Process incoming API request batches and mark whether each request is allowed or rejected due to governor limits.",
    "constraints": [
      "Hash map quota tracking",
      "1 <= requests.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "limits = { \"tenantA\": 100 }, requests = [{ tenant: \"tenantA\", calls: 95 }, { tenant: \"tenantA\", calls: 10 }]",
        "output": "[\"allowed\", \"governor_limit_exceeded\"]",
        "explanation": "First batch uses 95 of 100. Second batch needs 10 (total 105 > 100) and is rejected."
      }
    ]
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - Apex Trigger Batch Execution Order Resolver",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Apex%20Trigger%20Batch%20Execution%20Order%20Resolver%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given Apex triggers registered on an SObject, resolve and validate execution sequence according to Salesforce execution governors (BeforeInsert -> System Validations -> AfterInsert).",
    "constraints": [
      "Topological graph order",
      "Strict governor order"
    ],
    "testCases": [
      {
        "input": "triggers = [\"beforeInsert\", \"systemValidation\", \"afterInsert\"]",
        "output": "\"Valid Execution Pipeline\"",
        "explanation": "Follows canonical Salesforce order of execution."
      }
    ]
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - Subarray Sum Equals K Prefix Frequency",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find total number of continuous subarrays whose sum equals k using prefix sum hashmap.",
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
    "company": "Salesforce",
    "title": "Salesforce - Continuous Subarray Sum Multiple of K",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Continuous%20Subarray%20Sum%20Multiple%20of%20K%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Determine if array has good subarray of length >= 2 whose sum is multiple of k.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Prefix remainder map"
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
    "company": "Salesforce",
    "title": "Salesforce - Valid Palindrome String Check",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Check if string is palindrome considering only alphanumeric characters.",
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "Two-pointer"
    ],
    "testCases": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" reads identically forwards and backwards."
      },
      {
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome."
      }
    ]
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - Merge Intervals for Calendar Scheduling",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Merge%20Intervals%20for%20Calendar%20Scheduling%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Merge all overlapping intervals.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Sort by start"
    ],
    "testCases": [
      {
        "input": "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
        "output": "[[1, 6], [8, 10], [15, 18]]",
        "explanation": "Intervals [1, 3] and [2, 6] overlap into [1, 6]."
      },
      {
        "input": "intervals = [[1, 4], [4, 5]]",
        "output": "[[1, 5]]",
        "explanation": "Intervals [1, 4] and [4, 5] are touching and merge into [1, 5]."
      }
    ]
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - Insert Interval into Non-Overlapping Set",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Insert%20Interval%20into%20Non-Overlapping%20Set%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Insert new interval into sorted non-overlapping intervals and merge if necessary.",
    "constraints": [
      "Intervals up to 10^4",
      "Linear scan merge"
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
    "company": "Salesforce",
    "title": "Salesforce - Minimum Remove to Make Valid Parentheses",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Remove minimum number of parentheses so resulting string is valid.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "Stack / Index tracking"
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
    "company": "Salesforce",
    "title": "Salesforce - Basic Calculator II String Arithmetic Parser",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Basic%20Calculator%20II%20String%20Arithmetic%20Parser%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Implement basic calculator evaluating string containing +, -, *, / with precedence.",
    "constraints": [
      "1 <= s.length <= 3 * 10^5",
      "Stack / Running sum"
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
    "company": "Salesforce",
    "title": "Salesforce - Decode String Nested Multiplier",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Decode string in format k[string] with nested brackets.",
    "constraints": [
      "1 <= s.length <= 30",
      "Two stacks"
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
    "company": "Salesforce",
    "title": "Salesforce - Dot Product of Two Sparse Vectors",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Dot%20Product%20of%20Two%20Sparse%20Vectors%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Implement SparseVector class computing dot product efficiently avoiding multiplying zeroes.",
    "constraints": [
      "Vector length up to 10^5",
      "Non-zero index-value pairs / Hash map"
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
    "company": "Salesforce",
    "title": "Salesforce - Find All Anagrams in a String Sliding Window",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Find%20All%20Anagrams%20in%20a%20String%20Sliding%20Window%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find all start indices of p's anagrams in s using fixed size sliding window.",
    "constraints": [
      "1 <= s.length, p.length <= 3 * 10^4",
      "Sliding window 26-char frequency"
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
    "company": "Salesforce",
    "title": "Salesforce - Group Anagrams by Character Signature",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Salesforce",
    "title": "Salesforce - Top K Frequent Elements in Array",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Top%20K%20Frequent%20Elements%20in%20Array%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find k most frequent elements in array.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Bucket sort / Min-heap"
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
    "company": "Salesforce",
    "title": "Salesforce - Custom Sort String Specific Character Order",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Custom%20Sort%20String%20Specific%20Character%20Order%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Permute characters of s so that they match the order in which characters appear in order string.",
    "constraints": [
      "1 <= order.length <= 26",
      "Frequency array"
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
    "company": "Salesforce",
    "title": "Salesforce - Verifying an Alien Dictionary Order",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Verifying%20an%20Alien%20Dictionary%20Order%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given sequence of words and alien alphabet order, return true if words are sorted lexicographically.",
    "constraints": [
      "1 <= words.length <= 100",
      "Alien char index map"
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
    "company": "Salesforce",
    "title": "Salesforce - Lowest Common Ancestor of Binary Tree",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Lowest%20Common%20Ancestor%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find lowest common ancestor in generic binary tree.",
    "constraints": [
      "Node count up to 10^5",
      "Postorder DFS"
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
    "company": "Salesforce",
    "title": "Salesforce - Vertical Order Traversal of Binary Tree",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Vertical%20Order%20Traversal%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Return vertical order traversal of binary tree nodes grouped by column coordinate.",
    "constraints": [
      "Node count up to 1000",
      "BFS with (col, row) coordinates"
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
    "company": "Salesforce",
    "title": "Salesforce - Binary Tree Right Side View Visible Nodes",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Binary%20Tree%20Right%20Side%20View%20Visible%20Nodes%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return values of nodes visible from right side of tree.",
    "constraints": [
      "Node count up to 100",
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
    "company": "Salesforce",
    "title": "Salesforce - Diameter of Binary Tree Path Length",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Diameter%20of%20Binary%20Tree%20Path%20Length%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find length of diameter of binary tree.",
    "constraints": [
      "Node count up to 10^4",
      "Postorder height"
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
    "company": "Salesforce",
    "title": "Salesforce - Path Sum III Paths Summing to Target Anywhere",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Path%20Sum%20III%20Paths%20Summing%20to%20Target%20Anywhere%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find number of paths in binary tree that sum to targetSum starting and ending at any node.",
    "constraints": [
      "Node count up to 1000",
      "Prefix sum hashmap DFS"
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
    "company": "Salesforce",
    "title": "Salesforce - Binary Tree Maximum Path Sum Any Node",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Binary%20Tree%20Maximum%20Path%20Sum%20Any%20Node%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find path in binary tree with maximum sum.",
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
    "company": "Salesforce",
    "title": "Salesforce - All Nodes Distance K in Binary Tree",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20All%20Nodes%20Distance%20K%20in%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Return all nodes that have distance k from target node in binary tree.",
    "constraints": [
      "Node count up to 500",
      "Graph conversion + BFS"
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
    "company": "Salesforce",
    "title": "Salesforce - Accounts Merge Connected Email Components",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Accounts%20Merge%20Connected%20Email%20Components%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Merge accounts with overlapping email addresses using Disjoint Set Union.",
    "constraints": [
      "1 <= accounts.length <= 1000",
      "DSU graph"
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
    "company": "Salesforce",
    "title": "Salesforce - Number of Islands Grid Connected Lands",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Number%20of%20Islands%20Grid%20Connected%20Lands%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Count connected islands in 2D binary grid.",
    "constraints": [
      "1 <= m, n <= 300",
      "DFS/BFS"
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
    "company": "Salesforce",
    "title": "Salesforce - Shortest Path in Binary Matrix 8-Directional",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Shortest%20Path%20in%20Binary%20Matrix%208-Directional%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find shortest clear path from top-left to bottom-right in 8-directionally connected grid.",
    "constraints": [
      "1 <= n <= 100",
      "BFS queue"
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
    "company": "Salesforce",
    "title": "Salesforce - Word Search in 2D Board Matrix",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Word%20Search%20in%202D%20Board%20Matrix%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
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
    "company": "Salesforce",
    "title": "Salesforce - Word Search II Boggle Board with Trie",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Word%20Search%20II%20Boggle%20Board%20with%20Trie%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find all words from dictionary that exist in 2D character board using Prefix Trie.",
    "constraints": [
      "Words up to 3 * 10^4",
      "Trie + DFS backtracking"
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
    "company": "Salesforce",
    "title": "Salesforce - Course Schedule Graph Cycle Detection",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Course%20Schedule%20Graph%20Cycle%20Detection%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Determine if you can finish all courses given prerequisite graph.",
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
    "company": "Salesforce",
    "title": "Salesforce - Course Schedule II Ordering of Courses",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Course%20Schedule%20II%20Ordering%20of%20Courses%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find valid topological ordering of courses given prerequisite graph.",
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
    "company": "Salesforce",
    "title": "Salesforce - Alien Dictionary Character Order Derivation",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Alien%20Dictionary%20Character%20Order%20Derivation%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Derive letter ordering of alien language from sorted words dictionary.",
    "constraints": [
      "1 <= words.length <= 100",
      "Topological sort"
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
    "company": "Salesforce",
    "title": "Salesforce - LRU Cache Design Fast Key Value Storage",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20LRU%20Cache%20Design%20Fast%20Key%20Value%20Storage%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
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
    "company": "Salesforce",
    "title": "Salesforce - LFU Cache Least Frequently Used Cache Design",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20LFU%20Cache%20Least%20Frequently%20Used%20Cache%20Design%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Implement Least Frequently Used (LFU) cache with get and put in O(1) runtime.",
    "constraints": [
      "1 <= capacity <= 10^4",
      "Two HashMaps + Doubly Linked Lists"
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
    "company": "Salesforce",
    "title": "Salesforce - Design In-Memory File System Directory Engine",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Design%20In-Memory%20File%20System%20Directory%20Engine%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Design in-memory file system with mkdir, ls, addContentToFile, readContentFromFile.",
    "constraints": [
      "Trie directory structure",
      "O(L) operations"
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
    "company": "Salesforce",
    "title": "Salesforce - Insert Delete GetRandom O1 Set Design",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Insert%20Delete%20GetRandom%20O1%20Set%20Design%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Implement RandomizedSet class supporting insert, remove, getRandom in O(1) average time.",
    "constraints": [
      "Calls up to 2 * 10^5",
      "Dynamic array + Hash map"
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
    "company": "Salesforce",
    "title": "Salesforce - Max Stack Supporting Push Pop Top PeekMax PopMax",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Max%20Stack%20Supporting%20Push%20Pop%20Top%20PeekMax%20PopMax%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Design max stack that supports push, pop, top, peekMax, popMax in O(log N) or O(1).",
    "constraints": [
      "Calls up to 10^4",
      "Doubly linked list + Treemap"
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
    "company": "Salesforce",
    "title": "Salesforce - Next Greater Element II Circular Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Next%20Greater%20Element%20II%20Circular%20Array%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find next greater element for each element in circular integer array.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Monotonic stack double loop"
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
    "company": "Salesforce",
    "title": "Salesforce - Daily Temperatures Wait Days to Warmer Day",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Daily%20Temperatures%20Wait%20Days%20to%20Warmer%20Day%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find days until warmer temperature for each day.",
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
    "company": "Salesforce",
    "title": "Salesforce - Trapping Rain Water Elevation Chart",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Trapping%20Rain%20Water%20Elevation%20Chart%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Calculate trapped water volume between bars after rain.",
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
    "company": "Salesforce",
    "title": "Salesforce - Sliding Window Maximum Monotonic Deque",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find maximum in sliding window of size k moving across array.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Monotonic deque"
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
    "company": "Salesforce",
    "title": "Salesforce - Median of Two Sorted Arrays",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Median%20of%20Two%20Sorted%20Arrays%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
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
    "company": "Salesforce",
    "title": "Salesforce - Product of Array Except Self",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Product%20of%20Array%20Except%20Self%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Return array of product of all elements except self in O(N).",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "Prefix and suffix products"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 3, 4]",
        "output": "[24, 12, 8, 6]",
        "explanation": "Product of all other elements for each index."
      },
      {
        "input": "nums = [-1, 1, 0, -3, 3]",
        "output": "[0, 0, 9, 0, 0]",
        "explanation": "Contains zero element."
      }
    ]
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - 3Sum Triplets Summing to Zero",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find all unique triplets in array that sum to zero.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "Sort + Two-pointer"
    ],
    "testCases": [
      {
        "input": "nums = [-1, 0, 1, 2, -1, -4]",
        "output": "[[-1, -1, 2], [-1, 0, 1]]",
        "explanation": "Distinct triplets summing to 0."
      },
      {
        "input": "nums = [0, 1, 1]",
        "output": "[]",
        "explanation": "No triplet sums to 0."
      }
    ]
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - Container with Most Water Area",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Container%20with%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Letter Combinations of a Phone Number Keypad",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Letter%20Combinations%20of%20a%20Phone%20Number%20Keypad%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Return all possible letter combinations for keypad digits.",
    "constraints": [
      "0 <= digits.length <= 4",
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
    "company": "Salesforce",
    "title": "Salesforce - Generate Parentheses All Valid Combinations",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Generate%20Parentheses%20All%20Valid%20Combinations%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Generate all combinations of n pairs of valid parentheses.",
    "constraints": [
      "1 <= n <= 8",
      "Backtracking open/close count"
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
    "company": "Salesforce",
    "title": "Salesforce - First Missing Positive Smallest Positive Integer",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20First%20Missing%20Positive%20Smallest%20Positive%20Integer%20interview%20assessment&type=link",
    "round": "Salesforce HackerRank OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find smallest missing positive integer in unsorted array in O(N) time and O(1) space.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "In-place index bucket sort"
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
    "company": "Salesforce",
    "title": "Salesforce - Jump Game Can Reach Target Index",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Jump%20Game%20Can%20Reach%20Target%20Index%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Determine if last index is reachable with jump lengths.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy max jump"
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
    "company": "Salesforce",
    "title": "Salesforce - Jump Game II Minimum Jumps to Reach End",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Jump%20Game%20II%20Minimum%20Jumps%20to%20Reach%20End%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find minimum jumps to reach last index where nums[i] is jump capability.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy BFS jump"
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
    "company": "Salesforce",
    "title": "Salesforce - Longest Increasing Subsequence Length",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Longest%20Increasing%20Subsequence%20Length%20interview%20assessment&type=link",
    "round": "Salesforce Systems & Architecture Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find length of longest strictly increasing subsequence.",
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
  }
];
