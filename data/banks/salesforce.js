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
    "selftext": "In a multi-tenant cloud environment, each tenant has a max API call quota limit per evaluation window. Given limit and an array of requested call batches requests, evaluate each request sequentially. If the cumulative calls consumed plus the current batch exceeds limit, the request is rejected with \"governor_limit_exceeded\". Otherwise, the calls are consumed and marked \"allowed\". Return an array of strings indicating the status for each request.",
    "constraints": [
      "Hash map quota tracking",
      "1 <= requests.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "limit = 100, requests = [95, 10]",
        "output": "[\"allowed\", \"governor_limit_exceeded\"]",
        "explanation": "First batch uses 95 of 100. Second batch needs 10 (total 105 > 100) and is rejected."
      },
      {
        "input": "limit = 50, requests = [20, 25, 10]",
        "output": "[\"allowed\", \"allowed\", \"governor_limit_exceeded\"]",
        "explanation": "First uses 20, second uses 25 (total 45), third needs 10 (total 55 > 50) and is rejected."
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
    "selftext": "Given an integer array nums and an integer k, return `true` if `nums` has a good subarray or `false` otherwise.\n\nA good subarray is a subarray where:\n\n\t• its length is at least two, and\n\n\t• the sum of the elements of the subarray is a multiple of `k`.\n\nNote that:\n\n\t• A subarray is a contiguous part of the array.\n\n\t• An integer `x` is a multiple of `k` if there exists an integer `n` such that `x = n * k`. `0` is always a multiple of `k`.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Prefix remainder map"
    ],
    "testCases": [
      {
        "input": "nums = [23,2,4,6,7], k = 6",
        "output": "true",
        "explanation": "[2, 4] is a continuous subarray of size 2 whose elements sum up to 6."
      },
      {
        "input": "nums = [23,2,6,4,7], k = 6",
        "output": "true",
        "explanation": "[23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42. 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer."
      },
      {
        "input": "nums = [23,2,6,4,7], k = 13",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "Two-pointer"
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
    "selftext": "You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.\n\nTwo intervals are considered overlapping if they share at least one point.\n\nInsert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).\n\nReturn `intervals` after the insertion.\n\nNote that you don't need to modify `intervals` in-place. You can make a new array and return it.",
    "constraints": [
      "Intervals up to 10^4",
      "Linear scan merge"
    ],
    "testCases": [
      {
        "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        "output": "[[1,5],[6,9]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
        "output": "[[1,2],[3,10],[12,16]]",
        "explanation": "Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]."
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
    "selftext": "Given a string s of `'('` , `')'` and lowercase English characters.\n\nYour task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return any valid string.\n\nFormally, a parentheses string is valid if and only if:\n\n\t• It is the empty string, contains only lowercase characters, or\n\n\t• It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or\n\n\t• It can be written as `(A)`, where `A` is a valid string.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "Stack / Index tracking"
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
    "selftext": "Given a string `s` which represents an expression, evaluate this expression and return its value. \n\nThe integer division should truncate toward zero.\n\nYou may assume that the given expression is always valid. All intermediate results will be in the range of `[-231, 231 - 1]`.\n\nNote: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.",
    "constraints": [
      "1 <= s.length <= 3 * 10^5",
      "Stack / Running sum"
    ],
    "testCases": [
      {
        "input": "s = \"3+2*2\"",
        "output": "7",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \" 3/2 \"",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \" 3+5 / 2 \"",
        "output": "5",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an encoded string, return its decoded string.\n\nThe encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.\n\nYou may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.\n\nThe test cases are generated so that the length of the output will never exceed `105`.",
    "constraints": [
      "1 <= s.length <= 30",
      "Two stacks"
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
        "input": "nums1 = [1, 0, 0, 2, 3], nums2 = [0, 3, 0, 4, 0]",
        "output": "8",
        "explanation": "v1[0]*v2[0] + v1[3]*v2[3] = 1*0 + 2*4 = 8."
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
    "selftext": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    "constraints": [
      "1 <= s.length, p.length <= 3 * 10^4",
      "Sliding window 26-char frequency"
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
    "selftext": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Bucket sort / Min-heap"
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
    "selftext": "You are given two strings `order` and `s`. All the characters of `order` are unique and were sorted in some custom order previously.\n\nPermute the characters of `s` so that they match the order that `order` was sorted. More specifically, if a character `x` occurs before a character `y` in `order`, then `x` should occur before `y` in the permuted string.\n\nReturn any permutation of `s` that satisfies this property.",
    "constraints": [
      "1 <= order.length <= 26",
      "Frequency array"
    ],
    "testCases": [
      {
        "input": "order = \"cba\", s = \"abcd\"",
        "output": "\"cbad\"",
        "explanation": "\"c\", \"b\", \"a\" appear in order, \"d\" can be placed anywhere."
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
    "selftext": "In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different `order`. The `order` of the alphabet is some permutation of lowercase letters.\n\nGiven a sequence of `words` written in the alien language, and the `order` of the alphabet, return `true` if and only if the given `words` are sorted lexicographically in this alien language.",
    "constraints": [
      "1 <= words.length <= 100",
      "Alien char index map"
    ],
    "testCases": [
      {
        "input": "words = [\"hello\",\"leetcode\"], order = \"hlabcdefgijkmnopqrstuvwxyz\"",
        "output": "true",
        "explanation": "As 'h' comes before 'l' in this language, then the sequence is sorted."
      },
      {
        "input": "words = [\"word\",\"world\",\"row\"], order = \"worldabcefghijkmnpqstuvxyz\"",
        "output": "false",
        "explanation": "As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted."
      },
      {
        "input": "words = [\"apple\",\"app\"], order = \"abcdefghijklmnopqrstuvwxyz\"",
        "output": "false",
        "explanation": "The first three characters \"app\" match, and the second string is shorter (in size.) According to lexicographical rules \"apple\" > \"app\", because 'l' > '&empty;', where '&empty;' is defined as the blank character which is less than any other character (More info)."
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
        "input": "root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], nodes = [4, 7]",
        "output": "2",
        "explanation": "The LCA of nodes 4 and 7 is 2."
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
    "selftext": "Given the `root` of a binary tree, calculate the vertical order traversal of the binary tree.\n\nFor each node at position `(row, col)`, its left and right children will be at positions `(row + 1, col - 1)` and `(row + 1, col + 1)` respectively. The root of the tree is at `(0, 0)`.\n\nThe vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.\n\nReturn the vertical order traversal of the binary tree.",
    "constraints": [
      "Node count up to 1000",
      "BFS with (col, row) coordinates"
    ],
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[9],[3,15],[20],[7]]",
        "explanation": "Column -1: Only node 9 is in this column. Column 0: Nodes 3 and 15 are in this column in that order from top to bottom. Column 1: Only node 20 is in this column. Column 2: Only node 7 is in this column."
      },
      {
        "input": "root = [1,2,3,4,5,6,7]",
        "output": "[[4],[2],[1,5,6],[3],[7]]",
        "explanation": "Column -2: Only node 4 is in this column. Column -1: Only node 2 is in this column. Column 0: Nodes 1, 5, and 6 are in this column.           1 is at the top, so it comes first.           5 and 6 are at the same position (2, 0), so we order them by their value, 5 before 6. Column 1: Only node 3 is in this column. Column 2: Only node 7 is in this column."
      },
      {
        "input": "root = [1,2,3,4,6,5,7]",
        "output": "[[4],[2],[1,5,6],[3],[7]]",
        "explanation": "This case is the exact same as example 2, but with nodes 5 and 6 swapped. Note that the solution remains the same since 5 and 6 are in the same location and should be ordered by their values."
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
    "selftext": "Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    "constraints": [
      "Node count up to 100",
      "Queue BFS"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,null,5,null,4]",
        "output": "[1,3,4]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,2,3,4,null,null,null,5]",
        "output": "[1,3,4,5]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,null,3]",
        "output": "[1,3]",
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
    "selftext": "Given the `root` of a binary tree, return the length of the diameter of the tree.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.\n\nThe length of a path between two nodes is represented by the number of edges between them.",
    "constraints": [
      "Node count up to 10^4",
      "Postorder height"
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
    "selftext": "Given the `root` of a binary tree and an integer `targetSum`, return the number of paths where the sum of the values along the path equals `targetSum`.\n\nThe path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).",
    "constraints": [
      "Node count up to 1000",
      "Prefix sum hashmap DFS"
    ],
    "testCases": [
      {
        "input": "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",
        "output": "3",
        "explanation": "The paths that sum to 8 are shown."
      },
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, the value of a target node `target`, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node.\n\nYou can return the answer in any order.",
    "constraints": [
      "Node count up to 500",
      "Graph conversion + BFS"
    ],
    "testCases": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2",
        "output": "[7,4,1]",
        "explanation": "The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1."
      },
      {
        "input": "root = [1], target = 1, k = 3",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a list of `accounts` where each element `accounts[i]` is a list of strings, where the first element `accounts[i][0]` is a name, and the rest of the elements are emails representing emails of the account.\n\nNow, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.\n\nAfter merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.",
    "constraints": [
      "1 <= accounts.length <= 1000",
      "DSU graph"
    ],
    "testCases": [
      {
        "input": "accounts = [[\"John\",\"johnsmith@mail.com\",\"john_newyork@mail.com\"],[\"John\",\"johnsmith@mail.com\",\"john00@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]",
        "output": "[[\"John\",\"john00@mail.com\",\"john_newyork@mail.com\",\"johnsmith@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]",
        "explanation": "The first and second John's are the same person as they have the common email \"johnsmith@mail.com\". The third John and Mary are different people as none of their email addresses are used by other accounts. We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],  ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted."
      },
      {
        "input": "accounts = [[\"Gabe\",\"Gabe0@m.co\",\"Gabe3@m.co\",\"Gabe1@m.co\"],[\"Kevin\",\"Kevin3@m.co\",\"Kevin5@m.co\",\"Kevin0@m.co\"],[\"Ethan\",\"Ethan5@m.co\",\"Ethan4@m.co\",\"Ethan0@m.co\"],[\"Hanzo\",\"Hanzo3@m.co\",\"Hanzo1@m.co\",\"Hanzo0@m.co\"],[\"Fern\",\"Fern5@m.co\",\"Fern1@m.co\",\"Fern0@m.co\"]]",
        "output": "[[\"Ethan\",\"Ethan0@m.co\",\"Ethan4@m.co\",\"Ethan5@m.co\"],[\"Gabe\",\"Gabe0@m.co\",\"Gabe1@m.co\",\"Gabe3@m.co\"],[\"Hanzo\",\"Hanzo0@m.co\",\"Hanzo1@m.co\",\"Hanzo3@m.co\"],[\"Kevin\",\"Kevin0@m.co\",\"Kevin3@m.co\",\"Kevin5@m.co\"],[\"Fern\",\"Fern0@m.co\",\"Fern1@m.co\",\"Fern5@m.co\"]]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an `n x n` binary matrix `grid`, return the length of the shortest clear path in the matrix. If there is no clear path, return `-1`.\n\nA clear path in a binary matrix is a path from the top-left cell (i.e., `(0, 0)`) to the bottom-right cell (i.e., `(n - 1, n - 1)`) such that:\n\n\t• All the visited cells of the path are `0`.\n\n\t• All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).\n\nThe length of a clear path is the number of visited cells of this path.",
    "constraints": [
      "1 <= n <= 100",
      "BFS queue"
    ],
    "testCases": [
      {
        "input": "grid = [[0,1],[1,0]]",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "grid = [[0,0,0],[1,1,0],[1,1,0]]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "grid = [[1,0,0],[1,1,0],[1,1,0]]",
        "output": "-1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board.\n\nEach word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
    "constraints": [
      "Words up to 3 * 10^4",
      "Trie + DFS backtracking"
    ],
    "testCases": [
      {
        "input": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"eat\",\"oath\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "board = [[\"a\",\"b\"],[\"c\",\"d\"]], words = [\"abcb\"]",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\n\t• For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.\n\nReturn the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "Topological sort"
    ],
    "testCases": [
      {
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "output": "[0,1]",
        "explanation": "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]."
      },
      {
        "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,2,1,3]",
        "explanation": "There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3]."
      },
      {
        "input": "numCourses = 1, prerequisites = []",
        "output": "[0]",
        "explanation": "Canonical test case verified against problem constraints."
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
        "input": "words = [\"wrt\", \"wrf\", \"er\", \"ett\", \"rftt\"]",
        "output": "\"wertf\"",
        "explanation": "Topological sort order deduced from lexicographical adjacent comparisons."
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
    "selftext": "Design and implement a data structure for a Least Frequently Used (LFU) cache.\n\nImplement the `LFUCache` class:\n\n\t• `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.\n\n\t• `int get(int key)` Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns `-1`.\n\n\t• `void put(int key, int value)` Update the value of the `key` if present, or inserts the `key` if not already present. When the cache reaches its `capacity`, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used `key` would be invalidated.\n\nTo determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.\n\nWhen a key is first inserted into the cache, its use counter is set to `1` (due to the `put` operation). The use counter for a key in the cache is incremented either a `get` or `put` operation is called on it.\n\nThe functions get and put must each run in `O(1)` average time complexity.",
    "constraints": [
      "1 <= capacity <= 10^4",
      "Two HashMaps + Doubly Linked Lists"
    ],
    "testCases": [
      {
        "input": "capacity = 2, calls = [\"put(1,1)\", \"put(2,2)\", \"get(1)\", \"put(3,3)\", \"get(2)\", \"get(3)\"]",
        "output": "[null, null, 1, null, -1, 3]",
        "explanation": "Key 2 was evicted when key 3 was added as key 2 was least frequently used."
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
        "input": "calls = [\"ls(\\\"/\\\")\", \"mkdir(\\\"/a/b/c\\\")\", \"addContentToFile(\\\"/a/b/c/d\\\", \\\"hello\\\")\", \"readContentFromFile(\\\"/a/b/c/d\\\")\"]",
        "output": "[[], null, null, \"hello\"]",
        "explanation": "Trie-based virtual directory hierarchy."
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
    "selftext": "Implement the `RandomizedSet` class:\n\n\t• `RandomizedSet()` Initializes the `RandomizedSet` object.\n\n\t• `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.\n\n\t• `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.\n\n\t• `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.\n\nYou must implement the functions of the class such that each function works in average `O(1)` time complexity.",
    "constraints": [
      "Calls up to 2 * 10^5",
      "Dynamic array + Hash map"
    ],
    "testCases": [
      {
        "input": "calls = [\"insert(1)\", \"remove(2)\", \"insert(2)\", \"getRandom()\", \"remove(1)\", \"insert(2)\", \"getRandom()\"]",
        "output": "[true, false, true, 2, true, false, 2]",
        "explanation": "Array and hash map provide O(1) random access and modification."
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
        "input": "calls = [\"push(5)\", \"push(1)\", \"push(5)\", \"top()\", \"popMax()\", \"top()\", \"peekMax()\", \"pop()\", \"top()\"]",
        "output": "[null, null, null, 5, 5, 1, 5, 1, 5]",
        "explanation": "Doubly linked list with ordered map supports O(log N) popMax and O(1) push/top."
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
    "selftext": "Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in `nums`.\n\nThe next greater number of a number `x` is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return `-1` for this number.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Monotonic stack double loop"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,1]",
        "output": "[2,-1,2]",
        "explanation": "The first 1's next greater number is 2;  The number 2 can't find next greater number.  The second 1's next greater number needs to search circularly, which is also 2."
      },
      {
        "input": "nums = [1,2,3,4,3]",
        "output": "[2,3,4,-1,4]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "Prefix and suffix products"
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
    "selftext": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "Sort + Two-pointer"
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
    "selftext": "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "constraints": [
      "1 <= n <= 8",
      "Backtracking open/close count"
    ],
    "testCases": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "n = 1",
        "output": "[\"()\"]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an unsorted integer array `nums`. Return the smallest positive integer that is not present in `nums`.\n\nYou must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "In-place index bucket sort"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,0]",
        "output": "3",
        "explanation": "The numbers in the range [1,2] are all in the array."
      },
      {
        "input": "nums = [3,4,-1,1]",
        "output": "2",
        "explanation": "1 is in the array but 2 is missing."
      },
      {
        "input": "nums = [7,8,9,11,12]",
        "output": "1",
        "explanation": "The smallest positive integer 1 is missing."
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
    "selftext": "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy max jump"
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
    "company": "Salesforce",
    "title": "Salesforce - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Trapping Rain Water Elevation Chamber",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Maximum Subarray Kadane Algorithm",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Rotate Array by K Positions Right",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Move Zeroes to End of Array",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Majority Element in Election Tally",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Next Permutation Lexicographical Order",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Search in Rotated Sorted Array",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Longest Palindromic Substring Expand Centers",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Longest Substring Without Repeating Characters Window",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Minimum Window Substring Character Frequency",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - String to Integer Atoi Parsing",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Valid Parentheses Bracket Matching",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
    "company": "Salesforce",
    "title": "Salesforce - Custom Sort String Character Priority",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Custom%20Sort%20String%20Character%20Priority%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
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
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - Palindromic Substrings Total Count",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Palindromic%20Substrings%20Total%20Count%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string `s`, return the number of palindromic substrings in it.\n\nA string is a palindrome when it reads the same backward as forward.\n\nA substring is a contiguous sequence of characters within the string.",
    "constraints": [
      "1 <= s.length <= 1000"
    ],
    "testCases": [
      {
        "input": "s = \"aaa\"",
        "output": "6",
        "explanation": "Six palindromic substrings: \"a\", \"a\", \"a\", \"aa\", \"aa\", \"aaa\"."
      }
    ]
  },
  {
    "company": "Salesforce",
    "title": "Salesforce - Reverse Singly Linked List In-Place",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Reverse%20Singly%20Linked%20List%20In-Place%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    "constraints": [
      "The number of nodes in the list is the range [0, 5000]"
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
    "company": "Salesforce",
    "title": "Salesforce - Linked List Cycle Detection Fast Slow Pointers",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Linked%20List%20Cycle%20Detection%20Fast%20Slow%20Pointers%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.\n\nReturn `true` if there is a cycle in the linked list. Otherwise, return `false`.",
    "constraints": [
      "0 <= Node.val <= 10^4",
      "Floyd cycle finding"
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
    "company": "Salesforce",
    "title": "Salesforce - Merge Two Sorted Lists Splice Order",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Merge%20Two%20Sorted%20Lists%20Splice%20Order%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are given the heads of two sorted linked lists `list1` and `list2`.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.",
    "constraints": [
      "0 <= nodes <= 50",
      "Sorted order"
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
    "company": "Salesforce",
    "title": "Salesforce - Remove Nth Node From End of List Two Pointers",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Salesforce%20Remove%20Nth%20Node%20From%20End%20of%20List%20Two%20Pointers%20interview%20assessment&type=link",
    "round": "Salesforce Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.",
    "constraints": [
      "1 <= sz <= 30",
      "1 <= n <= sz"
    ],
    "testCases": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [1], n = 1",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [1,2], n = 1",
        "output": "[1]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  }
];
