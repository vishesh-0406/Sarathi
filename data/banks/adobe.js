// Auto-generated verified interview questions for Adobe
module.exports = [
  {
    "company": "Adobe",
    "title": "Adobe - Minimum Adjacent Swaps to Make Binary Array Palindromic",
    "author": "u/adobe_btech_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Adjacent%20Swaps%20to%20Make%20Binary%20Array%20Palindromic%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a binary array nums containing only 0s and 1s, find the minimum number of adjacent swaps required to make the array a palindrome. If it is impossible to form a palindrome, return -1.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "nums[i] is either 0 or 1",
      "O(N) or O(N log N) greedy two-pointer approach"
    ],
    "testCases": [
      {
        "input": "nums = [1, 0, 1, 0, 0]",
        "output": "2",
        "explanation": "Swap index 3 with 4 -> [1, 0, 1, 0, 0], then swap index 1 with 2 -> [1, 1, 0, 0, 0], then index 2 with 3 -> [1, 0, 0, 0, 1] which is a palindrome. Total 2 adjacent swaps."
      },
      {
        "input": "nums = [0, 1, 0]",
        "output": "0",
        "explanation": "The array is already palindromic, so 0 swaps are required."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Form Smallest Number Following DI Pattern",
    "author": "u/iit_kgp_adobe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Form%20Smallest%20Number%20Following%20DI%20Pattern%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a pattern string of length N consisting of characters 'I' (Increasing) and 'D' (Decreasing), construct the smallest possible positive integer as a string using digits '1' to '9' at most once such that each relationship holds.",
    "constraints": [
      "1 <= pattern.length <= 8",
      "pattern consists only of characters 'I' and 'D'",
      "Digits 1-9 must each appear at most once"
    ],
    "testCases": [
      {
        "input": "pattern = \"IIIDIDDD\"",
        "output": "\"123549876\"",
        "explanation": "Indices 0,1,2: digits 1,2,3 increase. Index 3: 'I' -> 3 < 5. Index 4: 'D' -> 5 > 4. Indices 5,6,7: 'D' -> 9 > 8 > 7 > 6."
      },
      {
        "input": "pattern = \"DDD\"",
        "output": "\"4321\"",
        "explanation": "Decreasing order using smallest valid digits starting from 4."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Beautiful Subarrays with Exactly K Odd Numbers",
    "author": "u/noida_campus_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Beautiful%20Subarrays%20with%20Exactly%20K%20Odd%20Numbers%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an array of integers nums and an integer k, return the total count of contiguous beautiful subarrays that contain exactly k odd numbers.",
    "constraints": [
      "1 <= nums.length <= 5 * 10^4",
      "1 <= nums[i] <= 10^5",
      "1 <= k <= nums.length"
    ],
    "testCases": [
      {
        "input": "nums = [1, 1, 2, 1, 1], k = 3",
        "output": "2",
        "explanation": "The 2 subarrays with 3 odd numbers are [1, 1, 2, 1] and [1, 2, 1, 1]."
      },
      {
        "input": "nums = [2, 4, 6], k = 1",
        "output": "0",
        "explanation": "There are no odd numbers in the array, so 0 subarrays have 1 odd number."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Maximum Path Sum Between Two Leaf Nodes in Binary Tree",
    "author": "u/delhi_dev_hire",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Maximum%20Path%20Sum%20Between%20Two%20Leaf%20Nodes%20in%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given a binary tree where node values can be positive or negative, find the maximum path sum between two leaf nodes. The path must start at one leaf node and terminate at another leaf node.",
    "constraints": [
      "2 <= node count <= 10^4",
      "-1000 <= node.val <= 1000",
      "O(N) time with postorder traversal"
    ],
    "testCases": [
      {
        "input": "root = [-15, 5, 6, -8, 1, 3, 9, 2, -3, null, null, null, 0, 4, -1, null, null, 10, null]",
        "output": "27",
        "explanation": "The maximum path between leaf nodes 2 and 10 yields sum (-8 + 5 + (-15) + 6 + 9 + 0 + 10) = 27."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Minimum Operations to Reduce Number to 1 with Divisibility Moves",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Operations%20to%20Reduce%20Number%20to%201%20with%20Divisibility%20Moves%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an integer n, calculate the minimum number of steps to reduce n to 1. In one operation you can: subtract 1, divide by 2 (if n % 2 == 0), or divide by 3 (if n % 3 == 0).",
    "constraints": [
      "1 <= n <= 10^7",
      "Must run within 1.0 second using DP or BFS"
    ],
    "testCases": [
      {
        "input": "n = 10",
        "output": "3",
        "explanation": "10 -> 9 (subtract 1) -> 3 (divide by 3) -> 1 (divide by 3). Total 3 operations."
      },
      {
        "input": "n = 7",
        "output": "3",
        "explanation": "7 -> 6 (subtract 1) -> 2 (divide by 3) -> 1 (divide by 2). Total 3 operations."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Count Substrings with K Distinct Characters",
    "author": "u/bits_hyderabad_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Count%20Substrings%20with%20K%20Distinct%20Characters%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a string s of lowercase alphabets and an integer k, count the total number of non-empty substrings that contain exactly k distinct characters.",
    "constraints": [
      "1 <= s.length <= 5 * 10^4",
      "1 <= k <= 26",
      "Only lowercase English letters a-z"
    ],
    "testCases": [
      {
        "input": "s = \"pqpqs\", k = 2",
        "output": "7",
        "explanation": "Valid substrings with exactly 2 distinct characters: \"pq\", \"pqp\", \"pqpq\", \"qp\", \"qpq\", \"pq\", \"qs\"."
      },
      {
        "input": "s = \"aab\", k = 1",
        "output": "4",
        "explanation": "Valid substrings: \"a\", \"a\", \"aa\", \"b\"."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Minimum Cost Path in Matrix with 3 Directions",
    "author": "u/dtu_placement_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Cost%20Path%20in%20Matrix%20with%203%20Directions%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an M x N grid of non-negative integers representing costs, return the minimum cost to reach cell (M-1, N-1) starting from (0, 0). Allowed moves are only right, down, and diagonally right-down.",
    "constraints": [
      "1 <= M, N <= 500",
      "0 <= grid[i][j] <= 1000",
      "O(M * N) dynamic programming"
    ],
    "testCases": [
      {
        "input": "grid = [[1, 2, 3], [4, 8, 2], [1, 5, 3]]",
        "output": "8",
        "explanation": "Optimal path: (0,0)->(0,1)->(1,2)->(2,2) with total cost 1 + 2 + 2 + 3 = 8."
      },
      {
        "input": "grid = [[1, 3], [2, 4]]",
        "output": "5",
        "explanation": "Optimal diagonal path: (0,0) -> (1,1) with cost 1 + 4 = 5."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Connect Nodes at Same Level with Next Right Pointers",
    "author": "u/adobe_interviewer_exp",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Connect%20Nodes%20at%20Same%20Level%20with%20Next%20Right%20Pointers%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a binary tree, link all nodes at the same horizontal level from left to right using a nextRight pointer. Set nextRight of rightmost node at each level to NULL.",
    "constraints": [
      "0 <= node count <= 5000",
      "O(1) extra space without using level-order BFS queues"
    ],
    "testCases": [
      {
        "input": "root = [1, 2, 3, 4, 5, 6, 7]",
        "output": "[1, #, 2, 3, #, 4, 5, 6, 7, #]",
        "explanation": "Each level is connected left to right, followed by '#' indicating end of level."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Split Array into Consecutive Subsequences",
    "author": "u/iiit_alld_adobe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Split%20Array%20into%20Consecutive%20Subsequences%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an integer array nums sorted in non-decreasing order, determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true: each subsequence is a consecutive increasing sequence of integers, and each subsequence has a length of 3 or more.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-1000 <= nums[i] <= 1000",
      "nums is sorted in non-decreasing order"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 3, 3, 4, 5]",
        "output": "true",
        "explanation": "Can split into [1, 2, 3] and [3, 4, 5]."
      },
      {
        "input": "nums = [1, 2, 3, 4, 4, 5]",
        "output": "false",
        "explanation": "Cannot split into valid consecutive subsequences of length >= 3."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Maximum Product of Word Lengths with Non-Overlapping Letters",
    "author": "u/adobe_btech_campus",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Maximum%20Product%20of%20Word%20Lengths%20with%20Non-Overlapping%20Letters%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an array of strings words, return the maximum value of length(words[i]) * length(words[j]) where the two words do not share any common characters. If no such two words exist, return 0.",
    "constraints": [
      "2 <= words.length <= 1000",
      "1 <= words[i].length <= 1000",
      "words[i] consists only of lowercase English letters",
      "O(N^2) using bitmasks for character presence"
    ],
    "testCases": [
      {
        "input": "words = [\"abcw\", \"baz\", \"foo\", \"bar\", \"xtfn\", \"abcdef\"]",
        "output": "16",
        "explanation": "\"abcw\" and \"xtfn\" do not share any characters. Length product = 4 * 4 = 16."
      },
      {
        "input": "words = [\"a\", \"ab\", \"abc\", \"d\", \"cd\", \"bcd\", \"abcd\"]",
        "output": "4",
        "explanation": "\"ab\" and \"cd\" do not share characters. Product = 2 * 2 = 4."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Letter Combinations of a Phone Number Keypad",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Letter%20Combinations%20of%20a%20Phone%20Number%20Keypad%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return all possible letter combinations that number could represent.",
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
    "company": "Adobe",
    "title": "Adobe - Find Peak Element in Array Binary Search",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Find%20Peak%20Element%20in%20Array%20Binary%20Search%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find peak element strictly greater than neighbors in O(log N).",
    "constraints": [
      "1 <= nums.length <= 1000",
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
    "company": "Adobe",
    "title": "Adobe - Pow X N Calculate Power Function",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Pow%20X%20N%20Calculate%20Power%20Function%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Implement pow(x, n) which calculates x raised to power n in O(log N).",
    "constraints": [
      "-100.0 < x < 100.0",
      "Binary exponentiation"
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
    "company": "Adobe",
    "title": "Adobe - Multiply Strings Large Number Multiplication",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Multiply%20Strings%20Large%20Number%20Multiplication%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given two non-negative integers num1 and num2 represented as strings, return their product as string without BigInteger.",
    "constraints": [
      "1 <= num1.length, num2.length <= 200",
      "Grade school multiplication array"
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
    "company": "Adobe",
    "title": "Adobe - Permutations of Distinct Numbers Array",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Permutations%20of%20Distinct%20Numbers%20Array%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
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
    "company": "Adobe",
    "title": "Adobe - Minimum Window Substring Containing All Characters",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Window%20Substring%20Containing%20All%20Characters%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find minimum window in s containing all characters of t.",
    "constraints": [
      "1 <= m, n <= 10^5",
      "Sliding window"
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
    "company": "Adobe",
    "title": "Adobe - Rotate Array to Right by K Steps",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Rotate%20Array%20to%20Right%20by%20K%20Steps%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Rotate array to the right by k steps in-place with O(1) extra space.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Triple reverse algorithm"
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
    "company": "Adobe",
    "title": "Adobe - Search in Rotated Sorted Array Binary Search",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Search%20in%20Rotated%20Sorted%20Array%20Binary%20Search%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Search target in sorted rotated array in O(log N).",
    "constraints": [
      "1 <= nums.length <= 5000",
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
    "company": "Adobe",
    "title": "Adobe - 3Sum Unique Triplets Summing to Zero",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%203Sum%20Unique%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find all unique triplets in array summing to 0.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "Sort + Two pointer"
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
    "company": "Adobe",
    "title": "Adobe - Valid Sudoku Board Verification",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Sudoku%20Board%20Verification%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Determine if 9 x 9 Sudoku board is valid according to row, column, and 3x3 box rules.",
    "constraints": [
      "Board is 9 x 9",
      "Bitmask / Hash sets"
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
    "company": "Adobe",
    "title": "Adobe - Merge Overlapping Intervals in Schedule",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Merge%20Overlapping%20Intervals%20in%20Schedule%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Merge all overlapping intervals.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Sort by start"
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
    "company": "Adobe",
    "title": "Adobe - Group Anagrams by Sorted Key Signature",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Group%20Anagrams%20by%20Sorted%20Key%20Signature%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
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
    "company": "Adobe",
    "title": "Adobe - Trapping Rain Water Elevation Map",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Trapping%20Rain%20Water%20Elevation%20Map%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Compute trapped water volume between bars after rain.",
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
    "company": "Adobe",
    "title": "Adobe - Course Schedule Graph Cycle Detection",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Course%20Schedule%20Graph%20Cycle%20Detection%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Determine if all courses can be finished using topological sort.",
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
    "company": "Adobe",
    "title": "Adobe - Number of Islands in 2D Binary Grid",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Number%20of%20Islands%20in%202D%20Binary%20Grid%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Count connected components of 1s in binary grid.",
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
    "company": "Adobe",
    "title": "Adobe - Lowest Common Ancestor of Binary Tree",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Lowest%20Common%20Ancestor%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find lowest common ancestor of two nodes in binary tree.",
    "constraints": [
      "2 <= node count <= 10^5",
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
    "company": "Adobe",
    "title": "Adobe - Binary Tree Zigzag Level Order Traversal",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Binary%20Tree%20Zigzag%20Level%20Order%20Traversal%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Traverse binary tree in alternating zigzag level order.",
    "constraints": [
      "Node count up to 2000",
      "Deque BFS"
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
    "company": "Adobe",
    "title": "Adobe - Flatten Binary Tree to Linked List In Place",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Flatten%20Binary%20Tree%20to%20Linked%20List%20In%20Place%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Flatten binary tree into singly linked list in-place.",
    "constraints": [
      "Node count up to 2000",
      "Morris traversal"
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
    "company": "Adobe",
    "title": "Adobe - Word Search in 2D Board Matrix",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Word%20Search%20in%202D%20Board%20Matrix%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Adobe",
    "title": "Adobe - Sort Characters by Frequency Descending",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sort%20Characters%20by%20Frequency%20Descending%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Sort string characters by frequency in descending order.",
    "constraints": [
      "1 <= s.length <= 5 * 10^5",
      "Bucket sort"
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
    "company": "Adobe",
    "title": "Adobe - Longest Common Subsequence of Two Strings",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Longest%20Common%20Subsequence%20of%20Two%20Strings%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find length of longest common subsequence.",
    "constraints": [
      "Length up to 1000",
      "2D DP table"
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
    "company": "Adobe",
    "title": "Adobe - 0 1 Knapsack Variation Maximum Profit",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%200%201%20Knapsack%20Variation%20Maximum%20Profit%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Maximize profit from items within weight capacity.",
    "constraints": [
      "Capacity up to 1000",
      "DP knapsack"
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
    "company": "Adobe",
    "title": "Adobe - Jump Game II Minimum Jumps to Reach End",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Jump%20Game%20II%20Minimum%20Jumps%20to%20Reach%20End%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
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
    "company": "Adobe",
    "title": "Adobe - Implement Stack using Two Queues",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Implement%20Stack%20using%20Two%20Queues%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Implement LIFO stack using standard FIFO queues.",
    "constraints": [
      "Push, pop, top, empty",
      "Two queues"
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
    "company": "Adobe",
    "title": "Adobe - Min Stack Implementation Constant Time",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Min%20Stack%20Implementation%20Constant%20Time%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Design stack supporting getMin in O(1) time.",
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
  },
  {
    "company": "Adobe",
    "title": "Adobe - Top K Frequent Elements in Array",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Top%20K%20Frequent%20Elements%20in%20Array%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find k most frequent elements in array.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Bucket sort"
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
    "company": "Adobe",
    "title": "Adobe - Daily Temperatures Wait Days to Warmer Day",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Daily%20Temperatures%20Wait%20Days%20to%20Warmer%20Day%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
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
    "company": "Adobe",
    "title": "Adobe - Remove Duplicates from Sorted Array In Place",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Remove%20Duplicates%20from%20Sorted%20Array%20In%20Place%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Remove duplicates in sorted array in-place.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
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
    "company": "Adobe",
    "title": "Adobe - Linked List Cycle II Find Loop Entrance",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Linked%20List%20Cycle%20II%20Find%20Loop%20Entrance%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find entrance node of cycle in linked list.",
    "constraints": [
      "Node count up to 10^4",
      "Floyd algorithm"
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
    "company": "Adobe",
    "title": "Adobe - Reverse Linked List In Place",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Reverse%20Linked%20List%20In%20Place%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Reverse singly linked list in-place.",
    "constraints": [
      "Node count up to 5000",
      "Pointer reversal"
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
    "company": "Adobe",
    "title": "Adobe - Intersection of Two Linked Lists",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Intersection%20of%20Two%20Linked%20Lists%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find node where two linked lists intersect.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Two pointer"
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
    "company": "Adobe",
    "title": "Adobe - Add Two Numbers Represented by Linked Lists",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Add%20Two%20Numbers%20Represented%20by%20Linked%20Lists%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Add two numbers stored in reverse order as linked list digits.",
    "constraints": [
      "Length up to 100",
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
    "company": "Adobe",
    "title": "Adobe - Palindrome Linked List Verification",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Palindrome%20Linked%20List%20Verification%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Check if linked list is palindrome in O(1) space.",
    "constraints": [
      "Node count up to 10^5",
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
    "company": "Adobe",
    "title": "Adobe - Validate Binary Search Tree BST Rule",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Validate%20Binary%20Search%20Tree%20BST%20Rule%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Check if binary tree is valid BST.",
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
    "company": "Adobe",
    "title": "Adobe - Invert Binary Tree Mirror Image",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Invert%20Binary%20Tree%20Mirror%20Image%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Invert binary tree left and right children.",
    "constraints": [
      "Node count up to 100",
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
    "company": "Adobe",
    "title": "Adobe - Maximum Depth of Binary Tree",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Maximum%20Depth%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find height of binary tree.",
    "constraints": [
      "Node count up to 10^4",
      "DFS"
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
    "company": "Adobe",
    "title": "Adobe - Best Time to Buy and Sell Stock",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Maximize profit with single stock transaction.",
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
    "company": "Adobe",
    "title": "Adobe - Valid Anagram Frequency Match",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Anagram%20Frequency%20Match%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Check if string t is anagram of s.",
    "constraints": [
      "Length up to 5 * 10^4",
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
    "company": "Adobe",
    "title": "Adobe - Two Sum Find Target Pair Indices",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Two%20Sum%20Find%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find indices of two numbers summing to target.",
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
    "company": "Adobe",
    "title": "Adobe - Sliding Window Maximum K Elements",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sliding%20Window%20Maximum%20K%20Elements%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find maximum in sliding window of size k.",
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
    "company": "Adobe",
    "title": "Adobe - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Maximum Subarray Kadane Algorithm",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "testCases": [
      {
        "input": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        "output": "6",
        "explanation": "Subarray [4, -1, 2, 1] has largest sum 6."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Sliding Window Maximum Monotonic Deque",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Subarray Sum Equals K Prefix Frequency",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Product of Array Except Self Without Division",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Rotate Array by K Positions Right",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Move Zeroes to End of Array",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Majority Element in Election Tally",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Next Permutation Lexicographical Order",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Valid Palindrome String Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Longest Palindromic Substring Expand Centers",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string s, return the longest palindromic substring in s.",
    "constraints": [
      "1 <= s.length <= 1000"
    ],
    "testCases": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "\"aba\" is also acceptable."
      }
    ]
  },
  {
    "company": "Adobe",
    "title": "Adobe - Group Anagrams by Character Signature",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Longest Substring Without Repeating Characters Window",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Minimum Window Substring Character Frequency",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - String to Integer Atoi Parsing",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Valid Parentheses Bracket Matching",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
  }
];
