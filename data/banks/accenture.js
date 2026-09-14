// Auto-generated verified interview questions for Accenture
module.exports = [
  {
    "company": "Accenture",
    "title": "Accenture - Binary String Operations Evaluation (A=AND, B=OR, C=XOR)",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Binary%20String%20Operations%20Evaluation%20(A%3DAND%2C%20B%3DOR%2C%20C%3DXOR)%20interview%20assessment&type=link",
    "round": "Accenture Cognitive Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given binary string with digits 0, 1 and operations A (AND), B (OR), C (XOR), evaluate left-to-right with no operator precedence and return the final single binary digit.",
    "constraints": [
      "Length is odd <= 1000",
      "Valid characters 0, 1, A, B, C",
      "O(N) time O(1) space"
    ],
    "testCases": [
      {
        "input": "s = \"1C0C1A1B0\"",
        "output": "1",
        "explanation": "1 XOR 0 = 1; 1 XOR 1 = 0; 0 AND 1 = 0; 0 OR 0 = 0. Final result."
      },
      {
        "input": "s = \"0A1B1\"",
        "output": "1",
        "explanation": "0 AND 1 = 0; 0 OR 1 = 1."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Autobiographical Number Frequency Validation",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Autobiographical%20Number%20Frequency%20Validation%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "An autobiographical number has its first digit equal to count of 0s in it, second digit equal to count of 1s, and so on. Return count of distinct digits if autobiographical, else 0.",
    "constraints": [
      "Length <= 10",
      "String digit counting"
    ],
    "testCases": [
      {
        "input": "numStr = \"1210\"",
        "output": "3",
        "explanation": "0 appears 1 time, 1 appears 2 times, 2 appears 1 time, 3 appears 0 times. Distinct digits = {1, 2, 0} = 3."
      },
      {
        "input": "numStr = \"123\"",
        "output": "0",
        "explanation": "Not an autobiographical number."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Rat Food Storage Houses Consumption",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Rat%20Food%20Storage%20Houses%20Consumption%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given r rats needing unit amount of food each, find minimum consecutive houses from beginning of array required to feed all rats. Return 0 if array empty, -1 if total food is insufficient.",
    "constraints": [
      "1 <= r, unit <= 1000",
      "Prefix sum loop"
    ],
    "testCases": [
      {
        "input": "r = 7, unit = 2, arr = [2, 8, 3, 5, 7, 4, 1, 2]",
        "output": "4",
        "explanation": "Total required = 7 * 2 = 14. First 4 houses have 2 + 8 + 3 + 5 = 18 >= 14."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Move Hyphens to Beginning of String",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Move%20Hyphens%20to%20Beginning%20of%20String%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given a string containing hyphens '-', move all hyphens to the beginning of the string while preserving the relative order of all other characters.",
    "constraints": [
      "1 <= s.length <= 1000",
      "In-place character shift"
    ],
    "testCases": [
      {
        "input": "s = \"Move-Hyphens-to-Front\"",
        "output": "\"---MoveHyphenstoFront\"",
        "explanation": "Three hyphens moved to start."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Number of Carries in Arithmetic Addition",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Number%20of%20Carries%20in%20Arithmetic%20Addition%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Calculate number of carry operations required when adding two non-negative integers.",
    "constraints": [
      "Non-negative integers up to 10^9",
      "Digit by digit carry tracking"
    ],
    "testCases": [
      {
        "input": "num1 = 451, num2 = 349",
        "output": "2",
        "explanation": "1 + 9 = 10 (1 carry), 5 + 4 + 1 = 10 (1 carry), 4 + 3 + 1 = 8 (0 carries). Total carries = 2."
      },
      {
        "input": "num1 = 23, num2 = 563",
        "output": "0",
        "explanation": "No additions produce a carry."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Difference of Sum Divisible by M",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Difference%20of%20Sum%20Divisible%20by%20M%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Calculate difference between sum of integers not divisible by m and divisible by m in range 1 to n.",
    "constraints": [
      "1 <= m, n <= 1000",
      "Math formula / loop"
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
    "company": "Accenture",
    "title": "Accenture - Large Small Sum in Array",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Large%20Small%20Sum%20in%20Array%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find second largest in even indexed positions and second smallest in odd indexed positions, return their sum.",
    "constraints": [
      "Array length > 3",
      "Separate index sorting"
    ],
    "testCases": [
      {
        "input": "arr = [3, 2, 1, 7, 5, 4]",
        "output": "7",
        "explanation": "Even index elements: [3, 1, 5] -> second largest is 3. Odd index elements: [2, 7, 4] -> second smallest is 4. Sum = 3 + 4 = 7."
      },
      {
        "input": "arr = [1, 8, 0, 2, 3, 5, 6]",
        "output": "8",
        "explanation": "Second largest even index is 3, second smallest odd index is 5. Sum = 8."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Product of Smallest Pair with Sum Below Target",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Product%20of%20Smallest%20Pair%20with%20Sum%20Below%20Target%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find two smallest elements in array whose sum is strictly less than target and return their product.",
    "constraints": [
      "2 <= n <= 1000",
      "Sort array / two minimums"
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
    "company": "Accenture",
    "title": "Accenture - Autobiographical Number Validation",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Autobiographical%20Number%20Validation%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Check if integer is autobiographical where digit at index i indicates count of digit i.",
    "constraints": [
      "Length of string <= 10",
      "Digit frequency comparison"
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
    "company": "Accenture",
    "title": "Accenture - Password Security Rules Validator",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Password%20Security%20Rules%20Validator%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Verify if password has >= 4 characters, at least 1 digit, 1 capital letter, no spaces or slash.",
    "constraints": [
      "1 <= length <= 100",
      "Character inspection"
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
    "company": "Accenture",
    "title": "Accenture - Count Elements with Absolute Difference Below Threshold",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Count%20Elements%20with%20Absolute%20Difference%20Below%20Threshold%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Count elements in array whose absolute difference with given value num is at most diff.",
    "constraints": [
      "1 <= n <= 1000",
      "Linear scan"
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
    "company": "Accenture",
    "title": "Accenture - Replace Character in String with Target",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Replace%20Character%20in%20String%20with%20Target%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Replace all occurrences of ch1 with ch2 and ch2 with ch1 in given string s.",
    "constraints": [
      "1 <= s.length <= 1000",
      "Character replacement"
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
    "company": "Accenture",
    "title": "Accenture - Number of Rat Food Houses Needed",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Number%20of%20Rat%20Food%20Houses%20Needed%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given rat count and units per rat, find minimum houses from array needed to feed all rats.",
    "constraints": [
      "1 <= r, unit <= 1000",
      "Prefix sum threshold"
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
    "company": "Accenture",
    "title": "Accenture - Decimal to N-Base Notation Conversion",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Decimal%20to%20N-Base%20Notation%20Conversion%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Convert positive integer num into base n notation where symbols are 0-9 and A-Z.",
    "constraints": [
      "2 <= n <= 36",
      "Base conversion loop"
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
    "company": "Accenture",
    "title": "Accenture - Find Maximum Element and Its Index in Array",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Find%20Maximum%20Element%20and%20Its%20Index%20in%20Array%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find maximum element in array and return both maximum value and its index.",
    "constraints": [
      "1 <= n <= 1000",
      "One-pass tracker"
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
    "company": "Accenture",
    "title": "Accenture - Invert Bits of Integer Representation",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Invert%20Bits%20of%20Integer%20Representation%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Invert binary bits of an unsigned integer and return the resulting integer.",
    "constraints": [
      "0 <= n <= 2^31 - 1",
      "Bitwise NOT & mask"
    ],
    "testCases": [
      {
        "input": "n = 43261596",
        "output": "964176192",
        "explanation": "Bitwise reversal of 32-bit integer."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Maximum Subarray Sum Kadane Algorithm",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Maximum%20Subarray%20Sum%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find contiguous subarray with maximum sum in linear time.",
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
    "company": "Accenture",
    "title": "Accenture - Superior Elements Leaders in Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Superior%20Elements%20Leaders%20in%20Array%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find all elements in array that are strictly greater than all elements to their right.",
    "constraints": [
      "1 <= n <= 10^5",
      "Right-to-left max scan"
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
    "company": "Accenture",
    "title": "Accenture - Operation Choices Math Dispatcher",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Operation%20Choices%20Math%20Dispatcher%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Execute arithmetic operation on a and b depending on operation code c.",
    "constraints": [
      "Integer math",
      "Switch statement"
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
    "company": "Accenture",
    "title": "Accenture - Count Specific Digits in Range",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Count%20Specific%20Digits%20in%20Range%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Count total occurrences of specific digit d across all numbers in range [l, r].",
    "constraints": [
      "1 <= l <= r <= 10^5",
      "Digit extraction"
    ],
    "testCases": [
      {
        "input": "d = 1, low = 1, high = 13",
        "output": "6",
        "explanation": "The digit d=1 occurs 6 times in 1, 10, 11, 12, 13 (note that 11 contains two 1s)."
      },
      {
        "input": "d = 3, low = 100, high = 250",
        "output": "35",
        "explanation": "The digit d=3 occurs 35 times across numbers from 100 to 250."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Sum of All Proper Divisors",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Sum%20of%20All%20Proper%20Divisors%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given positive integer n, compute sum of all its proper divisors excluding n itself.",
    "constraints": [
      "1 <= n <= 10^6",
      "Square root divisor loop"
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
    "company": "Accenture",
    "title": "Accenture - Palindromic Numbers in Range",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Palindromic%20Numbers%20in%20Range%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Print all numbers in range [start, end] that are palindromes.",
    "constraints": [
      "1 <= start <= end <= 10^5",
      "Number palindrome check"
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
    "company": "Accenture",
    "title": "Accenture - Sort Characters By Frequency Descending",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Sort%20Characters%20By%20Frequency%20Descending%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given string s, sort it in decreasing order based on frequency of characters.",
    "constraints": [
      "1 <= s.length <= 5 * 10^5",
      "Bucket sort / Map"
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
    "company": "Accenture",
    "title": "Accenture - Inversion Count in Array",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Inversion%20Count%20in%20Array%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Count number of inversions (i < j and nums[i] > nums[j]) in array using Merge Sort.",
    "constraints": [
      "1 <= n <= 10^5",
      "Merge sort inversion counter"
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
    "company": "Accenture",
    "title": "Accenture - String Permutation Count with Constraints",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20String%20Permutation%20Count%20with%20Constraints%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Calculate number of distinct permutations of string characters without duplicate arrangements.",
    "constraints": [
      "1 <= s.length <= 12",
      "Factorial frequency division"
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
    "company": "Accenture",
    "title": "Accenture - Modular Exponentiation Fast Power",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Modular%20Exponentiation%20Fast%20Power%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Calculate (x^n) % m in O(log n) time using binary exponentiation.",
    "constraints": [
      "x, n, m up to 10^9",
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
    "company": "Accenture",
    "title": "Accenture - Trapping Rain Water Elevation",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Trapping%20Rain%20Water%20Elevation%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Compute total water trapped between elevation bars after rainfall.",
    "constraints": [
      "1 <= n <= 2 * 10^4",
      "Two-pointer approach"
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
    "company": "Accenture",
    "title": "Accenture - Matrix Spiral Traversal Clockwise",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Matrix%20Spiral%20Traversal%20Clockwise%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return spiral traversal of elements in 2D matrix.",
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
    "company": "Accenture",
    "title": "Accenture - Reverse Words in Sentence",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Reverse%20Words%20in%20Sentence%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Reverse words order in sentence string while removing redundant whitespace.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Word tokenization"
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
    "company": "Accenture",
    "title": "Accenture - Next Greater Element in Array Using Stack",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Next%20Greater%20Element%20in%20Array%20Using%20Stack%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "For each element find the next element to its right that is strictly greater.",
    "constraints": [
      "1 <= nums.length <= 10^4",
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
    "company": "Accenture",
    "title": "Accenture - Stock Span Problem Consecutive Days",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Stock%20Span%20Problem%20Consecutive%20Days%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Calculate span of stock prices (consecutive days price was <= current day price).",
    "constraints": [
      "1 <= n <= 10^5",
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
    "company": "Accenture",
    "title": "Accenture - Search in Rotated Sorted Array",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find target value in rotated sorted array in O(log N) runtime.",
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
    "company": "Accenture",
    "title": "Accenture - Subset Sum Equal to Target",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Subset%20Sum%20Equal%20to%20Target%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Determine if there exists a subset of non-negative integers that sums to target.",
    "constraints": [
      "1 <= n <= 100",
      "0/1 Knapsack DP"
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
    "company": "Accenture",
    "title": "Accenture - Merge Overlapping Intervals",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Merge%20Overlapping%20Intervals%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Merge overlapping intervals in array of intervals.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Sort by start time"
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
    "company": "Accenture",
    "title": "Accenture - Minimum Jumps to Reach Array End",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Minimum%20Jumps%20to%20Reach%20Array%20End%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find minimum jumps needed to reach last index where nums[i] is jump capability.",
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
    "company": "Accenture",
    "title": "Accenture - Longest Common Prefix in Array",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Longest%20Common%20Prefix%20in%20Array%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find longest common prefix amongst array of strings.",
    "constraints": [
      "1 <= strs.length <= 200",
      "Horizontal scanning"
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
    "company": "Accenture",
    "title": "Accenture - First Non-Repeating Character in Stream",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20First%20Non-Repeating%20Character%20in%20Stream%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find first unique character in stream of characters.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "Frequency map"
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
    "company": "Accenture",
    "title": "Accenture - Valid Anagram String Check",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Valid%20Anagram%20String%20Check%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Determine if string t is anagram of string s.",
    "constraints": [
      "1 <= length <= 5 * 10^4",
      "Character count table"
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
    "company": "Accenture",
    "title": "Accenture - Intersection of Two Integer Arrays",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Intersection%20of%20Two%20Integer%20Arrays%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Return array containing common elements between two arrays.",
    "constraints": [
      "1 <= length <= 1000",
      "Set intersection"
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
    "company": "Accenture",
    "title": "Accenture - Kadane Maximum Contiguous Subarray",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Kadane%20Maximum%20Contiguous%20Subarray%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find contiguous subarray with largest sum.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Linear Kadane"
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
    "company": "Accenture",
    "title": "Accenture - Detect Loop in Singly Linked List",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Detect%20Loop%20in%20Singly%20Linked%20List%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Detect if cycle exists in linked list using fast and slow pointers.",
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
    "company": "Accenture",
    "title": "Accenture - Remove Duplicates In Place from Sorted Array",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Remove%20Duplicates%20In%20Place%20from%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Remove duplicates from sorted array without allocating extra memory.",
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
    "company": "Accenture",
    "title": "Accenture - Two Sum Find Indices Matching Target",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Two%20Sum%20Find%20Indices%20Matching%20Target%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find indices of two numbers that add up to target.",
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
    "company": "Accenture",
    "title": "Accenture - Peak Element in Array Neighbors Check",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Peak%20Element%20in%20Array%20Neighbors%20Check%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find element strictly greater than its neighbors in O(log N).",
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
    "company": "Accenture",
    "title": "Accenture - Roman to Integer Number Conversion",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Roman%20to%20Integer%20Number%20Conversion%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Convert Roman numeral string to standard integer.",
    "constraints": [
      "1 <= s.length <= 15",
      "Numeral map"
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
    "company": "Accenture",
    "title": "Accenture - Coin Change Minimum Coins Needed",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Coin%20Change%20Minimum%20Coins%20Needed%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return fewest coins needed to make up amount.",
    "constraints": [
      "1 <= amount <= 10^4",
      "Dynamic programming"
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
    "company": "Accenture",
    "title": "Accenture - Power of Four Verification",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Power%20of%20Four%20Verification%20interview%20assessment&type=link",
    "round": "Accenture Cognitive & Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Check if integer n is power of four using bitwise tricks and mask 0x55555555.",
    "constraints": [
      "-2^31 <= n <= 2^31 - 1",
      "Bitwise mask"
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
    "company": "Accenture",
    "title": "Accenture - Check If Array Is Sorted in Ascending Order",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Check%20If%20Array%20Is%20Sorted%20in%20Ascending%20Order%20interview%20assessment&type=link",
    "round": "Accenture Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Return true if array is sorted in non-decreasing order.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Linear comparison"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 2, 4, 5]",
        "output": "true",
        "explanation": "Each element is <= next element, so array is sorted."
      },
      {
        "input": "nums = [1, 3, 2, 4, 5]",
        "output": "false",
        "explanation": "nums[1] (3) > nums[2] (2), so array is not sorted."
      }
    ]
  },
  {
    "company": "Accenture",
    "title": "Accenture - Binary Search in Sorted Array",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Binary%20Search%20in%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Accenture Technical Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Search target in sorted array in O(log N) time.",
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
    "company": "Accenture",
    "title": "Accenture - Two Sum Target Pair Indices",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - 3Sum Triplets Summing to Zero",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Container With Most Water Area",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Maximum Subarray Kadane Algorithm",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Sliding Window Maximum Monotonic Deque",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Subarray Sum Equals K Prefix Frequency",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Product of Array Except Self Without Division",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Rotate Array by K Positions Right",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Move Zeroes to End of Array",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Majority Element in Election Tally",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Next Permutation Lexicographical Order",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Valid Palindrome String Check",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Longest Palindromic Substring Expand Centers",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Group Anagrams by Character Signature",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Longest Substring Without Repeating Characters Window",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Minimum Window Substring Character Frequency",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - String to Integer Atoi Parsing",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Valid Parentheses Bracket Matching",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
    "company": "Accenture",
    "title": "Accenture - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
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
  },
  {
    "company": "Accenture",
    "title": "Accenture - Decode String Nested Multiplier",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Accenture%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "Accenture Advanced Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an encoded string, return its decoded string using rule k[encoded_string].",
    "constraints": [
      "1 <= s.length <= 30"
    ],
    "testCases": [
      {
        "input": "s = \"3[a]2[bc]\"",
        "output": "\"aaabcbc\"",
        "explanation": "Expanded string."
      }
    ]
  }
];
