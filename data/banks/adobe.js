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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "You are given a 0-indexed string `pattern` of length `n` consisting of the characters `'I'` meaning increasing and `'D'` meaning decreasing.\n\nA 0-indexed string `num` of length `n + 1` is created using the following conditions:\n\n\t• `num` consists of the digits `'1'` to `'9'`, where each digit is used at most once.\n\n\t• If `pattern[i] == 'I'`, then `num[i]  num[i + 1]`.\n\nReturn the lexicographically smallest possible string `num` that meets the conditions.",
    "constraints": [
      "1 <= pattern.length <= 8",
      "pattern consists only of characters 'I' and 'D'",
      "Digits 1-9 must each appear at most once"
    ],
    "testCases": [
      {
        "input": "pattern = \"IIIDIDDD\"",
        "output": "\"123549876\"",
        "explanation": "At indices 0, 1, 2, and 4 we must have that num[i] < num[i+1]. At indices 3, 5, 6, and 7 we must have that num[i] > num[i+1]. Some possible values of num are \"245639871\", \"135749862\", and \"123849765\". It can be proven that \"123549876\" is the smallest possible num that meets the conditions. Note that \"123414321\" is not possible because the digit '1' is used more than once."
      },
      {
        "input": "pattern = \"DDD\"",
        "output": "\"4321\"",
        "explanation": "Some possible values of num are \"9876\", \"7321\", and \"8742\". It can be proven that \"4321\" is the smallest possible num that meets the conditions."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an array of integers `nums` and an integer `k`. A continuous subarray is called nice if there are `k` odd numbers on it.\n\nReturn the number of nice sub-arrays.",
    "constraints": [
      "1 <= nums.length <= 5 * 10^4",
      "1 <= nums[i] <= 10^5",
      "1 <= k <= nums.length"
    ],
    "testCases": [
      {
        "input": "nums = [1,1,2,1,1], k = 3",
        "output": "2",
        "explanation": "The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1]."
      },
      {
        "input": "nums = [2,4,6], k = 1",
        "output": "0",
        "explanation": "There are no odd numbers in the array."
      },
      {
        "input": "nums = [2,2,2,1,2,2,1,2,2,2], k = 2",
        "output": "16",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.\n\nA leaf is a node with no children.",
    "constraints": [
      "2 <= node count <= 10^4",
      "-1000 <= node.val <= 1000",
      "O(N) time with postorder traversal"
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
    "company": "Adobe",
    "title": "Adobe - Minimum Operations to Reduce Number to 1 with Divisibility Moves",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Operations%20to%20Reduce%20Number%20to%201%20with%20Divisibility%20Moves%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a positive integer `n`, you can apply one of the following operations:\n\n\t• If `n` is even, replace `n` with `n / 2`.\n\n\t• If `n` is odd, replace `n` with either `n + 1` or `n - 1`.\n\nReturn the minimum number of operations needed for `n` to become `1`.",
    "constraints": [
      "1 <= n <= 10^7",
      "Must run within 1.0 second using DP or BFS"
    ],
    "testCases": [
      {
        "input": "n = 8",
        "output": "3",
        "explanation": "8 -> 4 -> 2 -> 1"
      },
      {
        "input": "n = 7",
        "output": "4",
        "explanation": "7 -> 8 -> 4 -> 2 -> 1 or 7 -> 6 -> 3 -> 2 -> 1"
      },
      {
        "input": "n = 4",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
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
        "input": "s = \"aabbaba\"",
        "output": "21",
        "explanation": "Total 21 unique substrings in string \"aabbaba\"."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.\n\nNote: You can only move either down or right at any point in time.",
    "constraints": [
      "1 <= M, N <= 500",
      "0 <= grid[i][j] <= 1000",
      "O(M * N) dynamic programming"
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
    "company": "Adobe",
    "title": "Adobe - Connect Nodes at Same Level with Next Right Pointers",
    "author": "u/adobe_interviewer_exp",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Connect%20Nodes%20at%20Same%20Level%20with%20Next%20Right%20Pointers%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:\n\nPopulate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.\n\nInitially, all next pointers are set to `NULL`.",
    "constraints": [
      "0 <= node count <= 5000",
      "O(1) extra space without using level-order BFS queues"
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
    "company": "Adobe",
    "title": "Adobe - Split Array into Consecutive Subsequences",
    "author": "u/iiit_alld_adobe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Split%20Array%20into%20Consecutive%20Subsequences%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "You are given an integer array `nums` that is sorted in non-decreasing order.\n\nDetermine if it is possible to split `nums` into one or more subsequences such that both of the following conditions are true:\n\n\t• Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).\n\n\t• All subsequences have a length of `3` or more.\n\nReturn `true` if you can split `nums` according to the above conditions, or `false` otherwise.\n\nA subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., `[1,3,5]` is a subsequence of `[1,2,3,4,5]` while `[1,3,2]` is not).",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-1000 <= nums[i] <= 1000",
      "nums is sorted in non-decreasing order"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3,3,4,5]",
        "output": "true",
        "explanation": "nums can be split into the following subsequences: [1,2,3,3,4,5] --> 1, 2, 3 [1,2,3,3,4,5] --> 3, 4, 5"
      },
      {
        "input": "nums = [1,2,3,3,4,4,5,5]",
        "output": "true",
        "explanation": "nums can be split into the following subsequences: [1,2,3,3,4,4,5,5] --> 1, 2, 3, 4, 5 [1,2,3,3,4,4,5,5] --> 3, 4, 5"
      },
      {
        "input": "nums = [1,2,3,4,4,5]",
        "output": "false",
        "explanation": "It is impossible to split nums into consecutive increasing subsequences of length 3 or more."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a string array `words`, return the maximum value of `length(word[i]) * length(word[j])` where the two words do not share common letters. If no such two words exist, return `0`.",
    "constraints": [
      "2 <= words.length <= 1000",
      "1 <= words[i].length <= 1000",
      "words[i] consists only of lowercase English letters",
      "O(N^2) using bitmasks for character presence"
    ],
    "testCases": [
      {
        "input": "words = [\"abcw\",\"baz\",\"foo\",\"bar\",\"xtfn\",\"abcdef\"]",
        "output": "16",
        "explanation": "The two words can be \"abcw\", \"xtfn\"."
      },
      {
        "input": "words = [\"a\",\"ab\",\"abc\",\"d\",\"cd\",\"bcd\",\"abcd\"]",
        "output": "4",
        "explanation": "The two words can be \"ab\", \"cd\"."
      },
      {
        "input": "words = [\"a\",\"aa\",\"aaa\",\"aaaa\"]",
        "output": "0",
        "explanation": "No such pair of words."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.\n\nA mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.",
    "constraints": [
      "0 <= digits.length <= 4",
      "Backtracking"
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
    "company": "Adobe",
    "title": "Adobe - Find Peak Element in Array Binary Search",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Find%20Peak%20Element%20in%20Array%20Binary%20Search%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "A peak element is an element that is strictly greater than its neighbors.\n\nGiven a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.\n\nYou may imagine that `nums[-1] = nums[n] = -&infin;`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.\n\nYou must write an algorithm that runs in `O(log n)` time.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "Binary search"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "2",
        "explanation": "3 is a peak element and your function should return the index number 2."
      },
      {
        "input": "nums = [1,2,1,3,5,6,4]",
        "output": "5",
        "explanation": "Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Implement pow(x, n), which calculates `x` raised to the power `n` (i.e., `xn`).",
    "constraints": [
      "-100.0 < x < 100.0",
      "Binary exponentiation"
    ],
    "testCases": [
      {
        "input": "x = 2.00000, n = 10",
        "output": "1024.00000",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "x = 2.10000, n = 3",
        "output": "9.26100",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "x = 2.00000, n = -2",
        "output": "0.25000",
        "explanation": "2-2 = 1/22 = 1/4 = 0.25"
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.\n\nNote: You must not use any built-in BigInteger library or convert the inputs to integer directly.",
    "constraints": [
      "1 <= num1.length, num2.length <= 200",
      "Grade school multiplication array"
    ],
    "testCases": [
      {
        "input": "num1 = \"2\", num2 = \"3\"",
        "output": "\"6\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "num1 = \"123\", num2 = \"456\"",
        "output": "\"56088\"",
        "explanation": "Canonical test case verified against problem constraints."
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
    "company": "Adobe",
    "title": "Adobe - Minimum Window Substring Containing All Characters",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Window%20Substring%20Containing%20All%20Characters%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.\n\nThe testcases will be generated such that the answer is unique.",
    "constraints": [
      "1 <= m, n <= 10^5",
      "Sliding window"
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
    "company": "Adobe",
    "title": "Adobe - Rotate Array to Right by K Steps",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Rotate%20Array%20to%20Right%20by%20K%20Steps%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Triple reverse algorithm"
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
    "company": "Adobe",
    "title": "Adobe - Search in Rotated Sorted Array Binary Search",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Search%20in%20Rotated%20Sorted%20Array%20Binary%20Search%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "There is an integer array `nums` sorted in ascending order (with distinct values).\n\nPrior to being passed to your function, `nums` is possibly left rotated at an unknown index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be left rotated by `3` indices and become `[4,5,6,7,0,1,2]`.\n\nGiven the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
    "constraints": [
      "1 <= nums.length <= 5000",
      "Binary search"
    ],
    "testCases": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1], target = 0",
        "output": "-1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "Sort + Two pointer"
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
    "company": "Adobe",
    "title": "Adobe - Valid Sudoku Board Verification",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Sudoku%20Board%20Verification%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:\n\n\t• Each row must contain the digits `1-9` without repetition.\n\n\t• Each column must contain the digits `1-9` without repetition.\n\n\t• Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.\n\nNote:\n\n\t• A Sudoku board (partially filled) could be valid but is not necessarily solvable.\n\n\t• Only the filled cells need to be validated according to the mentioned rules.",
    "constraints": [
      "Board is 9 x 9",
      "Bitmask / Hash sets"
    ],
    "testCases": [
      {
        "input": "board =  [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"] ,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"] ,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"] ,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"] ,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"] ,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"] ,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"] ,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"] ,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "board =  [[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"] ,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"] ,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"] ,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"] ,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"] ,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"] ,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"] ,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"] ,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "false",
        "explanation": "Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Sort by start"
    ],
    "testCases": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
      },
      {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]",
        "explanation": "Intervals [1,4] and [4,5] are considered overlapping."
      },
      {
        "input": "intervals = [[4,7],[1,4]]",
        "output": "[[1,7]]",
        "explanation": "Intervals [1,4] and [4,7] are considered overlapping."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
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
    "company": "Adobe",
    "title": "Adobe - Trapping Rain Water Elevation Map",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Trapping%20Rain%20Water%20Elevation%20Map%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
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
    "company": "Adobe",
    "title": "Adobe - Course Schedule Graph Cycle Detection",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Course%20Schedule%20Graph%20Cycle%20Detection%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
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
    "company": "Adobe",
    "title": "Adobe - Number of Islands in 2D Binary Grid",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Number%20of%20Islands%20in%202D%20Binary%20Grid%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "constraints": [
      "1 <= m, n <= 300",
      "DFS/BFS"
    ],
    "testCases": [
      {
        "input": "grid = [   [\"1\",\"1\",\"1\",\"1\",\"0\"],   [\"1\",\"1\",\"0\",\"1\",\"0\"],   [\"1\",\"1\",\"0\",\"0\",\"0\"],   [\"0\",\"0\",\"0\",\"0\",\"0\"] ]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "grid = [   [\"1\",\"1\",\"0\",\"0\",\"0\"],   [\"1\",\"1\",\"0\",\"0\",\"0\"],   [\"0\",\"0\",\"1\",\"0\",\"0\"],   [\"0\",\"0\",\"0\",\"1\",\"1\"] ]",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find lowest common ancestor of two nodes in binary tree.",
    "constraints": [
      "2 <= node count <= 10^5",
      "Postorder DFS"
    ],
    "testCases": [
      {
        "input": "root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], nodes = [4, 7]",
        "output": "2",
        "explanation": "The LCA of nodes 4 and 7 is 2."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
    "constraints": [
      "Node count up to 2000",
      "Deque BFS"
    ],
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[20,9],[15,7]]",
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
    "company": "Adobe",
    "title": "Adobe - Flatten Binary Tree to Linked List In Place",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Flatten%20Binary%20Tree%20to%20Linked%20List%20In%20Place%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given the `root` of a binary tree, flatten the tree into a \"linked list\":\n\n\t• The \"linked list\" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.\n\n\t• The \"linked list\" should be in the same order as a pre-order traversal of the binary tree.",
    "constraints": [
      "Node count up to 2000",
      "Morris traversal"
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
    "company": "Adobe",
    "title": "Adobe - Word Search in 2D Board Matrix",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Word%20Search%20in%202D%20Board%20Matrix%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Adobe",
    "title": "Adobe - Sort Characters by Frequency Descending",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sort%20Characters%20by%20Frequency%20Descending%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a string `s`, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.\n\nReturn the sorted string. If there are multiple answers, return any of them.",
    "constraints": [
      "1 <= s.length <= 5 * 10^5",
      "Bucket sort"
    ],
    "testCases": [
      {
        "input": "s = \"tree\"",
        "output": "\"eert\"",
        "explanation": "'e' appears twice while 'r' and 't' both appear once. So 'e' must appear before both 'r' and 't'. Therefore \"eetr\" is also a valid answer."
      },
      {
        "input": "s = \"cccaaa\"",
        "output": "\"aaaccc\"",
        "explanation": "Both 'c' and 'a' appear three times, so both \"cccaaa\" and \"aaaccc\" are valid answers. Note that \"cacaca\" is incorrect, as the same characters must be together."
      },
      {
        "input": "s = \"Aabb\"",
        "output": "\"bbAa\"",
        "explanation": "\"bbaA\" is also a valid answer, but \"Aabb\" is incorrect. Note that 'A' and 'a' are treated as two different characters."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\n\n\t• For example, `\"ace\"` is a subsequence of `\"abcde\"`.\n\nA common subsequence of two strings is a subsequence that is common to both strings.",
    "constraints": [
      "Length up to 1000",
      "2D DP table"
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
    "company": "Adobe",
    "title": "Adobe - 0 1 Knapsack Variation Maximum Profit",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%200%201%20Knapsack%20Variation%20Maximum%20Profit%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy BFS jump"
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
    "company": "Adobe",
    "title": "Adobe - Implement Stack using Two Queues",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Implement%20Stack%20using%20Two%20Queues%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).\n\nImplement the `MyStack` class:\n\n\t• `void push(int x)` Pushes element x to the top of the stack.\n\n\t• `int pop()` Removes the element on the top of the stack and returns it.\n\n\t• `int top()` Returns the element on the top of the stack.\n\n\t• `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.\n\nNotes:\n\n\t• You must use only standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and `is empty` operations are valid.\n\n\t• Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.",
    "constraints": [
      "Push, pop, top, empty",
      "Two queues"
    ],
    "testCases": [
      {
        "input": "calls = [\"MyStack\", \"push(1)\", \"push(2)\", \"top()\", \"pop()\", \"empty()\"]",
        "output": "[null, null, null, 2, 2, false]",
        "explanation": "Stack LIFO behavior simulated using queues."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Adobe",
    "title": "Adobe - Top K Frequent Elements in Array",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Top%20K%20Frequent%20Elements%20in%20Array%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Bucket sort"
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
    "company": "Adobe",
    "title": "Adobe - Daily Temperatures Wait Days to Warmer Day",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Daily%20Temperatures%20Wait%20Days%20to%20Warmer%20Day%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
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
    "company": "Adobe",
    "title": "Adobe - Remove Duplicates from Sorted Array In Place",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Remove%20Duplicates%20from%20Sorted%20Array%20In%20Place%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.\n\nConsider the number of unique elements in `nums` to be `k​​​​​​​`​​​​​​​. After removing duplicates, return the number of unique elements `k`.\n\nThe first `k` elements of `nums` should contain the unique numbers in sorted order. The remaining elements beyond index `k - 1` can be ignored.\n\nCustom Judge:\n\nThe judge will test your solution with the following code:\n\nIf all assertions pass, then your solution will be accepted.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "Two-pointer"
    ],
    "testCases": [
      {
        "input": "nums = [1,1,2]",
        "output": "2, nums = [1,2,_]",
        "explanation": "Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores)."
      },
      {
        "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
        "output": "5, nums = [0,1,2,3,4,_,_,_,_,_]",
        "explanation": "Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores)."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.\n\nReturn `true` if there is a cycle in the linked list. Otherwise, return `false`.",
    "constraints": [
      "Node count up to 10^4",
      "Floyd algorithm"
    ],
    "testCases": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
      },
      {
        "input": "head = [1,2], pos = 0",
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    "constraints": [
      "Node count up to 5000",
      "Pointer reversal"
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
    "company": "Adobe",
    "title": "Adobe - Intersection of Two Linked Lists",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Intersection%20of%20Two%20Linked%20Lists%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.\n\nFor example, the following two linked lists begin to intersect at node `c1`:\n\nThe test cases are generated such that there are no cycles anywhere in the entire linked structure.\n\nNote that the linked lists must retain their original structure after the function returns.\n\nCustom Judge:\n\nThe inputs to the judge are given as follows (your program is not given these inputs):\n\n\t• `intersectVal` - The value of the node where the intersection occurs. This is `0` if there is no intersected node.\n\n\t• `listA` - The first linked list.\n\n\t• `listB` - The second linked list.\n\n\t• `skipA` - The number of nodes to skip ahead in `listA` (starting from the head) to get to the intersected node.\n\n\t• `skipB` - The number of nodes to skip ahead in `listB` (starting from the head) to get to the intersected node.\n\nThe judge will then create the linked structure based on these inputs and pass the two heads, `headA` and `headB` to your program. If you correctly return the intersected node, then your solution will be accepted.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Two pointer"
    ],
    "testCases": [
      {
        "input": "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3",
        "output": "Intersected at '8'",
        "explanation": "The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B. - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory."
      },
      {
        "input": "intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1",
        "output": "Intersected at '2'",
        "explanation": "The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B."
      },
      {
        "input": "intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2",
        "output": "No intersection",
        "explanation": "From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values. Explanation: The two lists do not intersect, so return null."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    "constraints": [
      "Length up to 100",
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
    "company": "Adobe",
    "title": "Adobe - Palindrome Linked List Verification",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Palindrome%20Linked%20List%20Verification%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.",
    "constraints": [
      "Node count up to 10^5",
      "Reverse second half"
    ],
    "testCases": [
      {
        "input": "head = [1,2,2,1]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [1,2]",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
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
    "company": "Adobe",
    "title": "Adobe - Invert Binary Tree Mirror Image",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Invert%20Binary%20Tree%20Mirror%20Image%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given the `root` of a binary tree, invert the tree, and return its root.",
    "constraints": [
      "Node count up to 100",
      "Recursive DFS"
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
    "company": "Adobe",
    "title": "Adobe - Maximum Depth of Binary Tree",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Maximum%20Depth%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given the `root` of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "constraints": [
      "Node count up to 10^4",
      "DFS"
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
    "company": "Adobe",
    "title": "Adobe - Best Time to Buy and Sell Stock",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
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
    "company": "Adobe",
    "title": "Adobe - Valid Anagram Frequency Match",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Anagram%20Frequency%20Match%20interview%20assessment&type=link",
    "round": "Adobe System & Coding Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    "constraints": [
      "Length up to 5 * 10^4",
      "Frequency array"
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
    "company": "Adobe",
    "title": "Adobe - Two Sum Find Target Pair Indices",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Two%20Sum%20Find%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Adobe Campus Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
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
    "company": "Adobe",
    "title": "Adobe - Sliding Window Maximum K Elements",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sliding%20Window%20Maximum%20K%20Elements%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Monotonic deque"
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
    "company": "Adobe",
    "title": "Adobe - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Maximum Subarray Kadane Algorithm",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Sliding Window Maximum Monotonic Deque",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Subarray Sum Equals K Prefix Frequency",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Product of Array Except Self Without Division",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Rotate Array by K Positions Right",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Move Zeroes to End of Array",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Majority Element in Election Tally",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Next Permutation Lexicographical Order",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Valid Palindrome String Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Longest Palindromic Substring Expand Centers",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Group Anagrams by Character Signature",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Longest Substring Without Repeating Characters Window",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Minimum Window Substring Character Frequency",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - String to Integer Atoi Parsing",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
    "company": "Adobe",
    "title": "Adobe - Valid Parentheses Bracket Matching",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Adobe%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Adobe Technical Round 1",
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
  }
];
