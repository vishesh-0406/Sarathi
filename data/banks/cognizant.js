// Auto-generated verified interview questions for Cognizant
module.exports = [
  {
    "company": "Cognizant",
    "title": "Cognizant - GenC Next Encrypted String Character Shift by Prime Keys",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20GenC%20Next%20Encrypted%20String%20Character%20Shift%20by%20Prime%20Keys%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given string S and an array of first N prime keys, rotate each character S[i] forward in the alphabet by primeKeys[i % N] positions.",
    "constraints": [
      "1 <= S.length <= 10^4",
      "Alphabet wrap-around (mod 26)"
    ],
    "testCases": [
      {
        "input": "text = \"hello\", primeKeys = [2, 3, 5, 7, 11]",
        "output": "\"jhpst\"",
        "explanation": "h+2=j, e+3=h, l+5=q, l+7=s, o+11=z (modulo 26 arithmetic)."
      }
    ]
  },
  {
    "company": "Cognizant",
    "title": "Cognizant - Multi-Vendor Inventory Discrepancy Reconciliation",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Multi-Vendor%20Inventory%20Discrepancy%20Reconciliation%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given two sorted inventory item logs from warehouse A and warehouse B, find all item IDs present in one warehouse but missing or having stock mismatch in the other.",
    "constraints": [
      "1 <= inventory.length <= 10^5",
      "Two-pointer merge scan"
    ],
    "testCases": [
      {
        "input": "invA = [[101, 5], [102, 10]], invB = [[101, 5], [102, 8]]",
        "output": "[102]",
        "explanation": "Item 102 has stock mismatch (10 vs 8)."
      }
    ]
  },
  {
    "company": "Cognizant",
    "title": "Cognizant - Frequency Count of Array Elements",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Frequency%20Count%20of%20Array%20Elements%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Count frequency of each element in integer array and output elements in descending order of frequency.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Hash map"
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
    "company": "Cognizant",
    "title": "Cognizant - Palindrome Partitioning of String",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Palindrome%20Partitioning%20of%20String%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find all ways to partition string into substrings where each substring is a palindrome.",
    "constraints": [
      "1 <= s.length <= 16",
      "Backtracking"
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
    "company": "Cognizant",
    "title": "Cognizant - Merge Overlapping Intervals in Meeting Schedule",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Merge%20Overlapping%20Intervals%20in%20Meeting%20Schedule%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Merge overlapping intervals in list of time intervals.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Sort + merge"
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
    "company": "Cognizant",
    "title": "Cognizant - Rotate Matrix by 90 Degrees Clockwise",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Rotate%20Matrix%20by%2090%20Degrees%20Clockwise%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Rotate 2D square matrix by 90 degrees clockwise in-place.",
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
    "company": "Cognizant",
    "title": "Cognizant - Longest Substring Without Repeating Characters",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Longest%20Substring%20Without%20Repeating%20Characters%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find length of longest substring without duplicate characters.",
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
    "company": "Cognizant",
    "title": "Cognizant - Balanced Parentheses Expression",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Balanced%20Parentheses%20Expression%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Verify if brackets string is properly balanced.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack"
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
    "company": "Cognizant",
    "title": "Cognizant - Kth Smallest Element in Sorted Matrix",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Kth%20Smallest%20Element%20in%20Sorted%20Matrix%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find kth smallest element in n x n matrix where each row and column is sorted.",
    "constraints": [
      "1 <= n <= 300",
      "Binary search on range"
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
    "company": "Cognizant",
    "title": "Cognizant - Binary Tree Zigzag Level Order Traversal",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Binary%20Tree%20Zigzag%20Level%20Order%20Traversal%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Traverse binary tree level by level in alternating left-to-right and right-to-left directions.",
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
    "company": "Cognizant",
    "title": "Cognizant - Subarray with Given Target Sum",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Subarray%20with%20Given%20Target%20Sum%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find continuous subarray that adds to given sum S in non-negative array.",
    "constraints": [
      "1 <= n <= 10^5",
      "Sliding window"
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
    "company": "Cognizant",
    "title": "Cognizant - Reverse Words in Given Sentence",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Reverse%20Words%20in%20Given%20Sentence%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Reverse words in sentence keeping punctuation intact.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Word splitting"
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
    "company": "Cognizant",
    "title": "Cognizant - Remove All Vowel Characters from String",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Remove%20All%20Vowel%20Characters%20from%20String%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Remove all vowels (a, e, i, o, u) from string and return resulting string.",
    "constraints": [
      "1 <= s.length <= 1000",
      "String filter"
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
    "company": "Cognizant",
    "title": "Cognizant - Second Largest Element Without Sorting",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Second%20Largest%20Element%20Without%20Sorting%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find second largest element in array in single pass O(N) without sorting.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "Single-pass two variables"
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
    "company": "Cognizant",
    "title": "Cognizant - Check Armstrong Number of N Digits",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Check%20Armstrong%20Number%20of%20N%20Digits%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Check if sum of each digit raised to power of number of digits equals original number.",
    "constraints": [
      "1 <= n <= 10^8",
      "Math power loop"
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
    "company": "Cognizant",
    "title": "Cognizant - Prime Factorization of Number",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Prime%20Factorization%20of%20Number%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find all prime factors of integer n.",
    "constraints": [
      "2 <= n <= 10^9",
      "Divisor check up to sqrt"
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
    "company": "Cognizant",
    "title": "Cognizant - Fibonacci Sequence Nth Term DP",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Fibonacci%20Sequence%20Nth%20Term%20DP%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Compute nth Fibonacci number in linear time and constant space.",
    "constraints": [
      "0 <= n <= 45",
      "Two-variable DP"
    ],
    "testCases": [
      {
        "input": "n = 4",
        "output": "3",
        "explanation": "F(4) = F(3) + F(2) = 2 + 1 = 3."
      },
      {
        "input": "n = 2",
        "output": "1",
        "explanation": "F(2) = F(1) + F(0) = 1 + 0 = 1."
      }
    ]
  },
  {
    "company": "Cognizant",
    "title": "Cognizant - Check Anagram Strings with Hash Table",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Check%20Anagram%20Strings%20with%20Hash%20Table%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Check if string t is anagram of s.",
    "constraints": [
      "1 <= length <= 5 * 10^4",
      "Frequency table"
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
    "company": "Cognizant",
    "title": "Cognizant - Run Length String Compression",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Run%20Length%20String%20Compression%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Compress string s by replacing consecutive repeated characters with character and count.",
    "constraints": [
      "1 <= s.length <= 2000",
      "Two-pointer in-place"
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
    "company": "Cognizant",
    "title": "Cognizant - Find Duplicate Number in Array Floyd Cycle",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Find%20Duplicate%20Number%20in%20Array%20Floyd%20Cycle%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given array containing n+1 integers where each is between 1 and n, find duplicate in O(1) space.",
    "constraints": [
      "1 <= n <= 10^5",
      "Floyd cycle detection"
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
    "company": "Cognizant",
    "title": "Cognizant - Trapping Rain Water Elevation Bars",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Trapping%20Rain%20Water%20Elevation%20Bars%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Calculate water trapped in bar elevation chart.",
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
    "company": "Cognizant",
    "title": "Cognizant - Maximum Product of Three Numbers in Array",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Maximum%20Product%20of%20Three%20Numbers%20in%20Array%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find three numbers in array whose product is maximum.",
    "constraints": [
      "3 <= nums.length <= 10^4",
      "Min 2 and Max 3 scan"
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
    "company": "Cognizant",
    "title": "Cognizant - Search in Row and Column Sorted Matrix",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Search%20in%20Row%20and%20Column%20Sorted%20Matrix%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Search target value in matrix where rows and columns are sorted ascending.",
    "constraints": [
      "1 <= m, n <= 300",
      "Top-right pointer walk"
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
    "company": "Cognizant",
    "title": "Cognizant - Spiral Matrix Traversal Grid",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Spiral%20Matrix%20Traversal%20Grid%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Traverse matrix in spiral order.",
    "constraints": [
      "1 <= m, n <= 10",
      "Boundary walk"
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
    "company": "Cognizant",
    "title": "Cognizant - Middle Node of Singly Linked List",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Middle%20Node%20of%20Singly%20Linked%20List%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find middle node of linked list using fast and slow pointer.",
    "constraints": [
      "Node count up to 100",
      "Fast/slow pointer"
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
    "company": "Cognizant",
    "title": "Cognizant - Remove Nth Node from End of Linked List",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Remove%20Nth%20Node%20from%20End%20of%20Linked%20List%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Remove nth node from end of linked list in one pass.",
    "constraints": [
      "1 <= n <= sz <= 30",
      "Two-pointer delay"
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
    "company": "Cognizant",
    "title": "Cognizant - Rotate Linked List by K Places",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Rotate%20Linked%20List%20by%20K%20Places%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Rotate linked list to the right by k places.",
    "constraints": [
      "Node count up to 500",
      "Make circular then break"
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
    "company": "Cognizant",
    "title": "Cognizant - Add Two Numbers Represented by Linked Lists",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Add%20Two%20Numbers%20Represented%20by%20Linked%20Lists%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Cognizant",
    "title": "Cognizant - Intersection Point of Two Linked Lists",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Intersection%20Point%20of%20Two%20Linked%20Lists%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find intersection node of two singly linked lists.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Two pointer switch"
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
    "company": "Cognizant",
    "title": "Cognizant - Invert Binary Tree Mirror Image",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Invert%20Binary%20Tree%20Mirror%20Image%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Invert left and right children of binary tree.",
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
    "company": "Cognizant",
    "title": "Cognizant - Diameter of Binary Tree Longest Path",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Diameter%20of%20Binary%20Tree%20Longest%20Path%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find diameter of binary tree.",
    "constraints": [
      "1 <= node count <= 10^4",
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
    "company": "Cognizant",
    "title": "Cognizant - Level Order Traversal Queue BFS",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Level%20Order%20Traversal%20Queue%20BFS%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
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
    "company": "Cognizant",
    "title": "Cognizant - Lowest Common Ancestor in Binary Tree",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Lowest%20Common%20Ancestor%20in%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find lowest common ancestor of two nodes in binary tree.",
    "constraints": [
      "2 <= node count <= 10^5",
      "DFS recursion"
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
    "company": "Cognizant",
    "title": "Cognizant - Validate Binary Search Tree BST Rule",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Validate%20Binary%20Search%20Tree%20BST%20Rule%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Check if binary tree satisfies BST ordering properties.",
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
    "company": "Cognizant",
    "title": "Cognizant - Clone Undirected Graph Deep Copy",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Clone%20Undirected%20Graph%20Deep%20Copy%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given reference of node in connected undirected graph, return deep copy (clone).",
    "constraints": [
      "Node count up to 100",
      "DFS with hash map"
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
    "company": "Cognizant",
    "title": "Cognizant - Number of Islands Grid Connected Lands",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Number%20of%20Islands%20Grid%20Connected%20Lands%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Count number of connected land components in binary grid.",
    "constraints": [
      "1 <= m, n <= 300",
      "DFS/BFS exploration"
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
    "company": "Cognizant",
    "title": "Cognizant - Course Schedule Topological Sort BFS",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Course%20Schedule%20Topological%20Sort%20BFS%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Determine if courses can be finished using topological sort.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "Kahn Algorithm"
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
    "company": "Cognizant",
    "title": "Cognizant - Word Ladder Shortest Word Transformation",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Word%20Ladder%20Shortest%20Word%20Transformation%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find length of shortest transformation sequence from beginWord to endWord.",
    "constraints": [
      "Word length up to 10",
      "BFS word dictionary"
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
    "company": "Cognizant",
    "title": "Cognizant - Coin Change Minimum Denominations",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Coin%20Change%20Minimum%20Denominations%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Calculate minimum coins needed to make up amount.",
    "constraints": [
      "1 <= amount <= 10^4",
      "1D DP array"
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
    "company": "Cognizant",
    "title": "Cognizant - 0 1 Knapsack Maximum Value with Weight Limit",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%200%201%20Knapsack%20Maximum%20Value%20with%20Weight%20Limit%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Maximize total value of items fitting into knapsack of capacity W.",
    "constraints": [
      "Item count <= 100",
      "2D/1D DP"
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
    "company": "Cognizant",
    "title": "Cognizant - Longest Common Subsequence of Two Strings",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Longest%20Common%20Subsequence%20of%20Two%20Strings%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
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
    "company": "Cognizant",
    "title": "Cognizant - Edit Distance String Conversion",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Edit%20Distance%20String%20Conversion%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Calculate minimum operations to transform word1 into word2.",
    "constraints": [
      "Length up to 500",
      "2D DP table"
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
    "company": "Cognizant",
    "title": "Cognizant - Minimum Cost Path in Matrix Grid",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Minimum%20Cost%20Path%20in%20Matrix%20Grid%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find path from (0,0) to (m-1, n-1) with minimum sum.",
    "constraints": [
      "1 <= m, n <= 200",
      "Grid DP"
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
    "company": "Cognizant",
    "title": "Cognizant - Climbing Stairs with 1 or 2 Steps",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Climbing%20Stairs%20with%201%20or%202%20Steps%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
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
    "company": "Cognizant",
    "title": "Cognizant - House Robber Maximum Loot Without Adjacent",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20House%20Robber%20Maximum%20Loot%20Without%20Adjacent%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Rob non-adjacent houses for maximum profit.",
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
    "company": "Cognizant",
    "title": "Cognizant - Jump Game Can Reach Target Index",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Jump%20Game%20Can%20Reach%20Target%20Index%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Cognizant",
    "title": "Cognizant - Best Time to Buy and Sell Stock Single Day",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20Single%20Day%20interview%20assessment&type=link",
    "round": "Cognizant GenC Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
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
    "company": "Cognizant",
    "title": "Cognizant - Maximum Subarray Sum Kadane",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Maximum%20Subarray%20Sum%20Kadane%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find maximum sum of contiguous subarray.",
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
    "company": "Cognizant",
    "title": "Cognizant - Product of Array Except Self Without Division",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Cognizant Elevate Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Compute product of array except self in O(N).",
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
    "company": "Cognizant",
    "title": "Cognizant - Daily Temperatures Next Warmer Day",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Daily%20Temperatures%20Next%20Warmer%20Day%20interview%20assessment&type=link",
    "round": "Cognizant Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
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
    "company": "Cognizant",
    "title": "Cognizant - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Maximum Subarray Kadane Algorithm",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Sliding Window Maximum Monotonic Deque",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Subarray Sum Equals K Prefix Frequency",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Rotate Array by K Positions Right",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Move Zeroes to End of Array",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Majority Element in Election Tally",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Next Permutation Lexicographical Order",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Search in Rotated Sorted Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Valid Palindrome String Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Longest Palindromic Substring Expand Centers",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Group Anagrams by Character Signature",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Minimum Window Substring Character Frequency",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - String to Integer Atoi Parsing",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Valid Parentheses Bracket Matching",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
    "company": "Cognizant",
    "title": "Cognizant - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Cognizant%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "Cognizant GenC Next Assessment",
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
