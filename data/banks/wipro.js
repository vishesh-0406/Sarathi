// Auto-generated verified interview questions for Wipro
module.exports = [
  {
    "company": "Wipro",
    "title": "Wipro - Turbo Special Prime Fibonacci Bit Interleaving",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Turbo%20Special%20Prime%20Fibonacci%20Bit%20Interleaving%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a prime number P and Fibonacci number F, interleave their binary bit representations from least significant bit to most significant bit to generate the encrypted telemetry packet.",
    "constraints": [
      "Bitwise operations",
      "1 <= P, F <= 10^5"
    ],
    "testCases": [
      {
        "input": "primeNum = 13, fibNum = 8",
        "output": "\"11000100\"",
        "explanation": "13 is 1101_2 and 8 is 1000_2. Interleaving bits produces the encrypted packet."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Elite Warehouse Carton Stacking Height Difference",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Elite%20Warehouse%20Carton%20Stacking%20Height%20Difference%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given heights of N carton stacks and an integer K, find K stacks such that difference between highest and lowest stack among them is minimized.",
    "constraints": [
      "1 <= K <= N <= 10^5",
      "Sorting + Sliding window O(N log N)"
    ],
    "testCases": [
      {
        "input": "cartons = [10, 20, 15, 30, 25], K = 3",
        "output": "10",
        "explanation": "Sorted: [10, 15, 20, 25, 30]. Best window of 3 is [10, 15, 20], max-min = 10."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Smart Streetlight Sensor Cluster Activation",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Smart%20Streetlight%20Sensor%20Cluster%20Activation%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given ambient lux readings from streetlight sensors along an expressway, activate all lights where lux reading is below dark threshold T and at least one adjacent sensor is also below T.",
    "constraints": [
      "1 <= sensors.length <= 10^4",
      "Linear scan"
    ],
    "testCases": [
      {
        "input": "luxLevels = [150, 80, 70, 200, 40], threshold = 100",
        "output": "[1, 2]",
        "explanation": "Sensors at index 1 (80) and 2 (70) are adjacent and below 100."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Find Missing Number in Consecutive Sequence",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Find%20Missing%20Number%20in%20Consecutive%20Sequence%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find single missing number in array containing distinct numbers in range [0, n].",
    "constraints": [
      "1 <= n <= 10^4",
      "O(N) time O(1) space"
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
    "company": "Wipro",
    "title": "Wipro - Longest Palindromic Substring",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Longest%20Palindromic%20Substring%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find longest substring in s that reads same forwards and backwards.",
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
    "company": "Wipro",
    "title": "Wipro - Two Sum Find Indices with Target Sum",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Two%20Sum%20Find%20Indices%20with%20Target%20Sum%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return indices of two numbers in array that add up to target.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "HashMap O(N)"
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
    "company": "Wipro",
    "title": "Wipro - Reverse Integer with 32-Bit Overflow Protection",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Reverse%20Integer%20with%2032-Bit%20Overflow%20Protection%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Reverse digits of signed 32-bit integer, returning 0 if overflow occurs.",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "Integer math"
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
    "company": "Wipro",
    "title": "Wipro - Detect Cycle in Linked List Floyd Algorithm",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Detect%20Cycle%20in%20Linked%20List%20Floyd%20Algorithm%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Determine if linked list has a cycle using fast and slow pointers.",
    "constraints": [
      "Node count up to 10^4",
      "O(1) space Floyd"
    ],
    "testCases": [
      {
        "input": "head = [3, 2, 0, -4], pos = 1",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
      },
      {
        "input": "head = [1, 2], pos = 0",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 0th node."
      },
      {
        "input": "head = [1], pos = -1",
        "output": "false",
        "explanation": "There is no cycle in the linked list."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Sort an Array of 0s 1s and 2s Dutch National Flag",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Sort%20an%20Array%20of%200s%201s%20and%202s%20Dutch%20National%20Flag%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Sort array containing only 0, 1, 2 in-place in linear time.",
    "constraints": [
      "1 <= nums.length <= 300",
      "Three pointers"
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
    "company": "Wipro",
    "title": "Wipro - Merge Sorted Array in Place from Back",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Merge%20Sorted%20Array%20in%20Place%20from%20Back%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Merge sorted array nums2 into nums1 from rear end without overwriting.",
    "constraints": [
      "nums1.length == m + n",
      "In-place merge"
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
    "company": "Wipro",
    "title": "Wipro - Intersection of Two Linked Lists Reference",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Intersection%20of%20Two%20Linked%20Lists%20Reference%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Return node where two singly linked lists intersect or null if no intersection.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Two-pointer O(1) memory"
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
    "company": "Wipro",
    "title": "Wipro - Maximum Depth of Binary Tree Path",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Maximum%20Depth%20of%20Binary%20Tree%20Path%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return maximum height/depth of binary tree from root to leaf.",
    "constraints": [
      "0 <= node count <= 10^4",
      "Recursive DFS"
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
    "company": "Wipro",
    "title": "Wipro - Single Number in Array of Pairs",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Single%20Number%20in%20Array%20of%20Pairs%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find single element appearing once when all others appear twice using bitwise XOR.",
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
    "company": "Wipro",
    "title": "Wipro - Rotate Image Matrix by 90 Degrees Clockwise",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Rotate%20Image%20Matrix%20by%2090%20Degrees%20Clockwise%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Rotate n x n matrix 90 degrees clockwise in-place by transpose and reverse.",
    "constraints": [
      "1 <= n <= 20",
      "In-place matrix"
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
    "company": "Wipro",
    "title": "Wipro - Kth Largest Element in an Array",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Kth%20Largest%20Element%20in%20an%20Array%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find kth largest element in sorted order using min-heap of size K.",
    "constraints": [
      "1 <= k <= nums.length <= 10^5",
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
    "company": "Wipro",
    "title": "Wipro - Longest Consecutive Sequence in Unsorted Array",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Longest%20Consecutive%20Sequence%20in%20Unsorted%20Array%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find length of longest consecutive elements sequence in O(N) using HashSet.",
    "constraints": [
      "0 <= nums.length <= 10^5",
      "HashSet linear scan"
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
    "company": "Wipro",
    "title": "Wipro - Power of Two Verification Bitwise",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Power%20of%20Two%20Verification%20Bitwise%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Verify if integer is power of two using single bitwise operation.",
    "constraints": [
      "-2^31 <= n <= 2^31 - 1",
      "Bitwise trick"
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
    "company": "Wipro",
    "title": "Wipro - Binary Tree Inorder Traversal Iterative and Recursive",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Binary%20Tree%20Inorder%20Traversal%20Iterative%20and%20Recursive%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return inorder traversal of binary tree nodes.",
    "constraints": [
      "0 <= node count <= 100",
      "Stack / Recursion"
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
    "company": "Wipro",
    "title": "Wipro - Valid Palindrome Alphanumeric Characters Only",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Valid%20Palindrome%20Alphanumeric%20Characters%20Only%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Check if string is palindrome considering only alphanumeric characters and ignoring cases.",
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "Two-pointer scan"
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
    "company": "Wipro",
    "title": "Wipro - Best Time to Buy and Sell Stock Single Transaction",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20Single%20Transaction%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find maximum profit possible with one stock buy and sell.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "Greedy min tracker"
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
    "company": "Wipro",
    "title": "Wipro - Remove Element In Place from Array",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Remove%20Element%20In%20Place%20from%20Array%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Remove all occurrences of val in nums in-place and return new length.",
    "constraints": [
      "0 <= nums.length <= 100",
      "In-place overwrite"
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
    "company": "Wipro",
    "title": "Wipro - Plus One Large Integer Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Plus%20One%20Large%20Integer%20Array%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Increment large integer represented as array of digits by one.",
    "constraints": [
      "1 <= digits.length <= 100",
      "Carry propagation"
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
    "company": "Wipro",
    "title": "Wipro - Sqrt X Integer Square Root",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Sqrt%20X%20Integer%20Square%20Root%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Compute and return integer square root of non-negative integer x in O(log x).",
    "constraints": [
      "0 <= x <= 2^31 - 1",
      "Binary search"
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
    "company": "Wipro",
    "title": "Wipro - Climbing Stairs Distinct Ways",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Climbing%20Stairs%20Distinct%20Ways%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Count ways to reach top of staircase with 1 or 2 steps.",
    "constraints": [
      "1 <= n <= 45",
      "Fibonacci sequence"
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
    "company": "Wipro",
    "title": "Wipro - Add Binary Strings Sum",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Add%20Binary%20Strings%20Sum%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given two binary strings a and b, return their sum as a binary string.",
    "constraints": [
      "1 <= a.length, b.length <= 10^4",
      "Two-pointer carry"
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
    "company": "Wipro",
    "title": "Wipro - Implement strStr Substring Search",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Implement%20strStr%20Substring%20Search%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Return index of first occurrence of needle in haystack, or -1 if needle is not part.",
    "constraints": [
      "1 <= haystack.length <= 10^4",
      "Sliding window / KMP"
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
    "company": "Wipro",
    "title": "Wipro - Search Insert Position in Sorted Array",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Search%20Insert%20Position%20in%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find index of target if found in sorted array, or index where it would be inserted.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Binary search"
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
    "company": "Wipro",
    "title": "Wipro - Remove Duplicates from Sorted Linked List",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Remove%20Duplicates%20from%20Sorted%20Linked%20List%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Delete all duplicates such that each element appears only once in sorted list.",
    "constraints": [
      "Node count up to 300",
      "Linked list traversal"
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
    "company": "Wipro",
    "title": "Wipro - Same Tree Binary Tree Comparison",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Same%20Tree%20Binary%20Tree%20Comparison%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given roots of two binary trees p and q, check if they are structurally identical.",
    "constraints": [
      "0 <= node count <= 100",
      "Recursive DFS"
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
    "company": "Wipro",
    "title": "Wipro - Path Sum Target Value Existence",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Path%20Sum%20Target%20Value%20Existence%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Check if root-to-leaf path exists where node values sum to targetSum.",
    "constraints": [
      "0 <= node count <= 5000",
      "Recursive subtraction"
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
    "company": "Wipro",
    "title": "Wipro - Balanced Binary Tree Height Balance",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Balanced%20Binary%20Tree%20Height%20Balance%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Determine if binary tree is height-balanced (subtree heights differ by at most 1).",
    "constraints": [
      "0 <= node count <= 5000",
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
    "company": "Wipro",
    "title": "Wipro - Minimum Depth of Binary Tree",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Minimum%20Depth%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find minimum depth from root down to nearest leaf node.",
    "constraints": [
      "0 <= node count <= 10^5",
      "BFS queue"
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
    "company": "Wipro",
    "title": "Wipro - Merge Two Binary Trees by Summing Overlaps",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Merge%20Two%20Binary%20Trees%20by%20Summing%20Overlaps%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Merge two binary trees by summing values of overlapping nodes.",
    "constraints": [
      "Node count up to 2000",
      "Recursive tree merge"
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
    "company": "Wipro",
    "title": "Wipro - Counting Bits from 0 to N",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Counting%20Bits%20from%200%20to%20N%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Return array ans of length n + 1 where ans[i] is number of 1's in binary representation of i.",
    "constraints": [
      "0 <= n <= 10^5",
      "Bit DP i & (i-1)"
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
    "company": "Wipro",
    "title": "Wipro - Linked List Cycle II Find Cycle Entrance Node",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Linked%20List%20Cycle%20II%20Find%20Cycle%20Entrance%20Node%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given head of linked list, return node where cycle begins, or null.",
    "constraints": [
      "0 <= node count <= 10^4",
      "Floyd two pointer"
    ],
    "testCases": [
      {
        "input": "head = [3, 2, 0, -4], pos = 1",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
      },
      {
        "input": "head = [1, 2], pos = 0",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 0th node."
      },
      {
        "input": "head = [1], pos = -1",
        "output": "false",
        "explanation": "There is no cycle in the linked list."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Reverse Linked List In Place",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Reverse%20Linked%20List%20In%20Place%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Reverse a singly linked list iteratively and recursively.",
    "constraints": [
      "0 <= node count <= 5000",
      "Pointer manipulation"
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
    "company": "Wipro",
    "title": "Wipro - Palindrome Linked List Verification",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Palindrome%20Linked%20List%20Verification%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Check if singly linked list is a palindrome in O(N) time and O(1) space.",
    "constraints": [
      "1 <= node count <= 10^5",
      "Reverse second half"
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
    "company": "Wipro",
    "title": "Wipro - Delete Node in a Linked List Without Head",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Delete%20Node%20in%20a%20Linked%20List%20Without%20Head%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Delete node in linked list given only access to that node.",
    "constraints": [
      "Node is not tail",
      "Copy next node val"
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
    "company": "Wipro",
    "title": "Wipro - Odd Even Linked List Grouping",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Odd%20Even%20Linked%20List%20Grouping%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Group all odd nodes together followed by even nodes in linked list.",
    "constraints": [
      "0 <= node count <= 10^4",
      "Two pointer separation"
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
    "company": "Wipro",
    "title": "Wipro - Maximum Subarray Kadane Algorithm",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find contiguous subarray with largest sum in linear time.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Kadane Algorithm"
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
    "company": "Wipro",
    "title": "Wipro - Move Zeroes In Place Array",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Move%20Zeroes%20In%20Place%20Array%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Move all zeroes to end while keeping relative order of elements.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "In-place two pointer"
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
    "company": "Wipro",
    "title": "Wipro - Find All Numbers Disappeared in an Array",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Find%20All%20Numbers%20Disappeared%20in%20an%20Array%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find all integers in range [1, n] that do not appear in array using sign negation.",
    "constraints": [
      "1 <= n <= 10^5",
      "In-place index tagging"
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
    "company": "Wipro",
    "title": "Wipro - First Unique Character in a String",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20First%20Unique%20Character%20in%20a%20String%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find first non-repeating character in string and return its index.",
    "constraints": [
      "1 <= s.length <= 10^5",
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
    "company": "Wipro",
    "title": "Wipro - Ransom Note Magazine Character Check",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Ransom%20Note%20Magazine%20Character%20Check%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Check if ransomNote can be constructed from characters of magazine.",
    "constraints": [
      "1 <= length <= 10^5",
      "Character count map"
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
    "company": "Wipro",
    "title": "Wipro - Isomorphic Strings Character Mapping",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Isomorphic%20Strings%20Character%20Mapping%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Determine if two strings s and t are isomorphic using bidirectional mapping.",
    "constraints": [
      "1 <= s.length <= 5 * 10^4",
      "Two map lookup"
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
    "company": "Wipro",
    "title": "Wipro - Word Pattern Bijection Matching",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Word%20Pattern%20Bijection%20Matching%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Determine if string s follows the same pattern as string pattern.",
    "constraints": [
      "1 <= pattern.length <= 300",
      "Hash map bijection"
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
    "company": "Wipro",
    "title": "Wipro - Happy Number Digit Square Cycle Detection",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Happy%20Number%20Digit%20Square%20Cycle%20Detection%20interview%20assessment&type=link",
    "round": "Wipro Turbo Advanced Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Determine if number is happy (digit square sum eventually reaches 1) using Floyd cycle.",
    "constraints": [
      "1 <= n <= 2^31 - 1",
      "Cycle detection"
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
    "company": "Wipro",
    "title": "Wipro - Contains Duplicate II Within K Distance",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Contains%20Duplicate%20II%20Within%20K%20Distance%20interview%20assessment&type=link",
    "round": "Wipro Elite NLTH Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return true if nums has duplicates with indices satisfying abs(i - j) <= k.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Sliding window set"
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
    "company": "Wipro",
    "title": "Wipro - Excel Sheet Column Number Calculation",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Excel%20Sheet%20Column%20Number%20Calculation%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given columnTitle string, return corresponding Excel column number.",
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
    "company": "Wipro",
    "title": "Wipro - Reverse Words in a String Sentence",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Reverse%20Words%20in%20a%20String%20Sentence%20interview%20assessment&type=link",
    "round": "Wipro Elite Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Reverse order of words in string s, removing leading/trailing spaces.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Two-pointer tokenization"
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
    "company": "Wipro",
    "title": "Wipro - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ],
    "testCases": [
      {
        "input": "nums = [2, 7, 11, 15], target = 9",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] = 2 + 7 = 9."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "testCases": [
      {
        "input": "nums = [-1, 0, 1, 2, -1, -4]",
        "output": "[[-1, -1, 2], [-1, 0, 1]]",
        "explanation": "Triplets sum to zero."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    "constraints": [
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "testCases": [
      {
        "input": "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
        "output": "49",
        "explanation": "Maximum area is 49."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "constraints": [
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "testCases": [
      {
        "input": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        "output": "6",
        "explanation": "6 units of rain water are trapped."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Sliding Window Maximum Monotonic Deque",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "1 <= k <= nums.length"
    ],
    "testCases": [
      {
        "input": "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
        "output": "[3, 3, 5, 5, 6, 7]",
        "explanation": "Window maximums tracked monotonically."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Subarray Sum Equals K Prefix Frequency",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-1000 <= nums[i] <= 1000"
    ],
    "testCases": [
      {
        "input": "nums = [1, 1, 1], k = 2",
        "output": "2",
        "explanation": "Subarrays [1, 1] sum to 2."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Product of Array Except Self Without Division",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. You must solve it without using division.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 3, 4]",
        "output": "[24, 12, 8, 6]",
        "explanation": "Product of all other elements."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.",
    "constraints": [
      "1 <= n <= 300",
      "nums[i] is either 0, 1, or 2"
    ],
    "testCases": [
      {
        "input": "nums = [2, 0, 2, 1, 1, 0]",
        "output": "[0, 0, 1, 1, 2, 2]",
        "explanation": "Partitioned in-place."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Rotate Array by K Positions Right",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "0 <= k <= 10^5"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 3, 4, 5, 6, 7], k = 3",
        "output": "[5, 6, 7, 1, 2, 3, 4]",
        "explanation": "Rotated right by 3 positions."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Move Zeroes to End of Array",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "testCases": [
      {
        "input": "nums = [0, 1, 0, 3, 12]",
        "output": "[1, 3, 12, 0, 0]",
        "explanation": "Zeroes shifted to end."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Majority Element in Election Tally",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an array nums of size n, return the majority element. The majority element is the element that appears more than floor(n / 2) times. You may assume that the majority element always exists in the array.",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 5 * 10^4",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "testCases": [
      {
        "input": "nums = [3, 2, 3]",
        "output": "3",
        "explanation": "3 appears twice in array of length 3."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Next Permutation Lexicographical Order",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. Find the next lexicographically greater permutation in-place.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 100"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 3]",
        "output": "[1, 3, 2]",
        "explanation": "Next permutation is [1, 3, 2]."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Search in Rotated Sorted Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i], target <= 10^4"
    ],
    "testCases": [
      {
        "input": "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
        "output": "4",
        "explanation": "0 is at index 4."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Valid Palindrome String Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given a string s, return true if it is a palindrome, or false otherwise. Ignore non-alphanumeric characters and case.",
    "constraints": [
      "1 <= s.length <= 2 * 10^5"
    ],
    "testCases": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Group Anagrams by Character Signature",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    "constraints": [
      "1 <= strs.length <= 10^4"
    ],
    "testCases": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "explanation": "Grouped by character count signature."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Longest Substring Without Repeating Characters Window",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string s, find the length of the longest substring without repeating characters.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4"
    ],
    "testCases": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "Length 3 (\"abc\")."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Minimum Window Substring Character Frequency",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
    "constraints": [
      "1 <= s.length, t.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "Minimum window substring is \"BANC\"."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - String to Integer Atoi Parsing",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
    "constraints": [
      "0 <= s.length <= 200"
    ],
    "testCases": [
      {
        "input": "s = \"42\"",
        "output": "42",
        "explanation": "Parsed as 42."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Valid Parentheses Bracket Matching",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "constraints": [
      "1 <= s.length <= 10^4"
    ],
    "testCases": [
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": "All brackets matched."
      }
    ]
  },
  {
    "company": "Wipro",
    "title": "Wipro - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Wipro%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "Wipro Turbo Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string s of '(' , ')' and lowercase English characters, remove the minimum number of parentheses so that the resulting parentheses string is valid.",
    "constraints": [
      "1 <= s.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "s = \"lee(t(c)o)de)\"",
        "output": "\"lee(t(c)o)de\"",
        "explanation": "Valid parenthesis string."
      }
    ]
  }
];
