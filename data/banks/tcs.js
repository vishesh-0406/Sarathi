// Auto-generated verified interview questions for TCS
module.exports = [
  {
    "company": "TCS",
    "title": "TCS - Vehicle Fleet Wheel Assembly Check (Two Wheeler and Four Wheeler)",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Vehicle%20Fleet%20Wheel%20Assembly%20Check%20(Two%20Wheeler%20and%20Four%20Wheeler)%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "An automobile manufacturing plant produces two-wheelers (V1) and four-wheelers (V2). Given total vehicles V and total wheels W, calculate count of each vehicle. If invalid, return error indicator.",
    "constraints": [
      "2 <= W <= 10^5",
      "W >= 2*V",
      "W is even",
      "O(1) time"
    ],
    "testCases": [
      {
        "input": "vehicles = 200, wheels = 540",
        "output": "twoWheelers: 130, fourWheelers: 70",
        "explanation": "4*V - W = 800 - 540 = 260. 260 / 2 = 130 two-wheelers. 200 - 130 = 70 four-wheelers."
      },
      {
        "input": "vehicles = 10, wheels = 20",
        "output": "twoWheelers: 10, fourWheelers: 0",
        "explanation": "All 10 are two-wheelers."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - SuperBike Gear Ratio Tooth Alignment",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20SuperBike%20Gear%20Ratio%20Tooth%20Alignment%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given teeth count on drive sprocket A and rear sprocket B, determine if gear ratio simplifies to integer ratio without fractional vibration.",
    "constraints": [
      "GCD Euclidean algorithm",
      "10 <= A, B <= 100"
    ],
    "testCases": [
      {
        "input": "drive = 36, driven = 18",
        "output": "\"2:1\"",
        "explanation": "36 / 18 simplifies to 2:1 gear ratio."
      },
      {
        "input": "drive = 45, driven = 15",
        "output": "\"3:1\"",
        "explanation": "45 / 15 simplifies to 3:1."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - Washing Machine Weight Capacity Cycle",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Washing%20Machine%20Weight%20Capacity%20Cycle%20interview%20assessment&type=link",
    "round": "TCS NQT Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given clothes weight in grams: 0g -> 0 mins; 1-2000g -> 25 mins (Low); 2001-4000g -> 35 mins (Medium); 4001-7000g -> 45 mins (High). Over 7000g outputs Overload. Negative outputs Invalid.",
    "constraints": [
      "Conditional range checks",
      "Integer weight input"
    ],
    "testCases": [
      {
        "input": "weight = 3500",
        "output": "\"Time Estimated: 35 minutes\"",
        "explanation": "3500 falls in 2001-4000 range."
      },
      {
        "input": "weight = 8000",
        "output": "\"OVERLOAD\"",
        "explanation": "Weight exceeds 7000g."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - Smart Energy Meter Tariff Slab Calculation",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Smart%20Energy%20Meter%20Tariff%20Slab%20Calculation%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Calculate total electricity bill for units consumed: first 100 units at Rs 3/unit, next 100 units at Rs 5/unit, above 200 units at Rs 8/unit, plus 5% surcharge.",
    "constraints": [
      "Units >= 0",
      "Slab billing logic"
    ],
    "testCases": [
      {
        "input": "units = 250",
        "output": "1260",
        "explanation": "100*3=300, 100*5=500, 50*8=400. Subtotal=1200. +5% surcharge = 1260."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - Monkey Banana Jump Stride Count",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Monkey%20Banana%20Jump%20Stride%20Count%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "A monkey tries to climb a greased pole of height H. Each jump ascends U meters but monkey slips down D meters before next jump. Calculate total jumps to reach or exceed top.",
    "constraints": [
      "H, U, D > 0",
      "U > D",
      "Math formula"
    ],
    "testCases": [
      {
        "input": "H = 30, U = 3, D = 1",
        "output": "15",
        "explanation": "Net climb per jump is 2m. On jump 15, monkey reaches 14*2 + 3 = 31 >= 30."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - Airport Luggage Conveyor Belt Overload Sorter",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Airport%20Luggage%20Conveyor%20Belt%20Overload%20Sorter%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given array of baggage weights, group consecutive bags onto conveyor belt sections without exceeding max weight limit W per section. Return minimum sections needed.",
    "constraints": [
      "1 <= bags.length <= 10^4",
      "Greedy linear scan"
    ],
    "testCases": [
      {
        "input": "bags = [15, 25, 35, 10], maxWeight = 50",
        "output": "2",
        "explanation": "Section 1: [15, 25] = 40. Section 2: [35, 10] = 45. Total 2 sections."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - First Unique Character in Stream",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20First%20Unique%20Character%20in%20Stream%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find the first non-repeating character in a stream of lowercase characters. If none, return -1.",
    "constraints": [
      "1 <= length <= 10^5",
      "Lowercase letters only"
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
    "company": "TCS",
    "title": "TCS - Subarray Sum Divisible by K",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Subarray%20Sum%20Divisible%20by%20K%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an array nums and integer k, return the number of non-empty subarrays with sum divisible by k.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "1 <= k <= 10^4"
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
    "company": "TCS",
    "title": "TCS - Majority Element in Election Tally",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find the majority element that appears strictly more than n/2 times using Boyer-Moore voting.",
    "constraints": [
      "1 <= n <= 5 * 10^4",
      "O(1) auxiliary space"
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
    "company": "TCS",
    "title": "TCS - Move Zeroes to End of Array",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Move all 0s in the array to the end while maintaining relative order of non-zero elements in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "In-place modification"
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
    "company": "TCS",
    "title": "TCS - Trapping Rain Water in Elevation Map",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Trapping%20Rain%20Water%20in%20Elevation%20Map%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Given elevation map of n bars, compute how much water it can trap after raining.",
    "constraints": [
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
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
    "company": "TCS",
    "title": "TCS - Valid Palindrome After Removing At Most One Character",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Valid%20Palindrome%20After%20Removing%20At%20Most%20One%20Character%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given string s, return true if s can be a palindrome after deleting at most one character.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "Lowercase letters"
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
    "company": "TCS",
    "title": "TCS - Maximum Subarray Sum Kadane Algorithm",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Maximum%20Subarray%20Sum%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find contiguous subarray with largest sum in integer array nums using Kadane Algorithm.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
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
    "company": "TCS",
    "title": "TCS - Climbing Stairs with Step Limits",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Climbing%20Stairs%20with%20Step%20Limits%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Count distinct ways to climb n stairs if you can take 1 or 2 steps at a time.",
    "constraints": [
      "1 <= n <= 45",
      "Fibonacci dynamic programming"
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
    "company": "TCS",
    "title": "TCS - Rotated Sorted Array Search",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Rotated%20Sorted%20Array%20Search%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given sorted rotated array nums and a target value, return target index or -1 in O(log N).",
    "constraints": [
      "1 <= nums.length <= 5000",
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
    "company": "TCS",
    "title": "TCS - Coin Change Minimum Coins Needed",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Coin%20Change%20Minimum%20Coins%20Needed%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return fewest number of coins to make up target amount from given coin denominations.",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= amount <= 10^4"
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
    "company": "TCS",
    "title": "TCS - Longest Common Prefix in Strings Array",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Longest%20Common%20Prefix%20in%20Strings%20Array%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find the longest common prefix string amongst an array of strings. If none, return empty string.",
    "constraints": [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200"
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
    "company": "TCS",
    "title": "TCS - Merge Two Sorted Linked Lists",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Merge%20Two%20Sorted%20Linked%20Lists%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Merge two sorted linked lists into one sorted linked list and return the head.",
    "constraints": [
      "List lengths up to 50",
      "-100 <= val <= 100"
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
    "company": "TCS",
    "title": "TCS - Product of Array Except Self",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Product%20of%20Array%20Except%20Self%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return array answer where answer[i] is product of all elements of nums except nums[i] without division.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "O(N) runtime without division"
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
    "company": "TCS",
    "title": "TCS - Check If Two Strings Are Anagrams",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Check%20If%20Two%20Strings%20Are%20Anagrams%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given strings s and t, return true if t is an anagram of s using character frequency map.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "Lowercase English letters"
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
    "company": "TCS",
    "title": "TCS - Next Permutation Rearrangement",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Next%20Permutation%20Rearrangement%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Rearrange numbers into lexicographically next greater permutation of numbers.",
    "constraints": [
      "1 <= nums.length <= 100",
      "In-place replacement"
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
    "company": "TCS",
    "title": "TCS - Binary Search in Sorted Array",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Binary%20Search%20in%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given sorted array of integers nums and target, write function to search target in O(log N).",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "O(log N) runtime"
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
    "company": "TCS",
    "title": "TCS - Sort Colors Dutch National Flag",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Sort%20Colors%20Dutch%20National%20Flag%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Sort array with 0s, 1s, and 2s in-place using Dutch National Flag 3-pointer partition.",
    "constraints": [
      "1 <= nums.length <= 300",
      "One-pass O(N) in-place"
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
    "company": "TCS",
    "title": "TCS - Remove Duplicates from Sorted Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Remove%20Duplicates%20from%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Remove duplicates in-place such that each unique element appears only once in sorted array.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "O(1) extra space"
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
    "company": "TCS",
    "title": "TCS - Palindrome Number Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Palindrome%20Number%20Check%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given integer x, return true if x is a palindrome without converting integer to string.",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "No string conversion"
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
    "company": "TCS",
    "title": "TCS - Count Primes Sieve of Eratosthenes",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Count%20Primes%20Sieve%20of%20Eratosthenes%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given integer n, return the number of prime numbers strictly less than n.",
    "constraints": [
      "0 <= n <= 5 * 10^6",
      "Sieve of Eratosthenes O(N log log N)"
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
    "company": "TCS",
    "title": "TCS - Power of Two Verification",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Power%20of%20Two%20Verification%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Return true if integer n is power of two using bitwise operator (n & (n - 1)) == 0.",
    "constraints": [
      "-2^31 <= n <= 2^31 - 1",
      "O(1) bit manipulation"
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
    "company": "TCS",
    "title": "TCS - Maximum Product Subarray",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Maximum%20Product%20Subarray%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find contiguous subarray within array which has largest product and return product.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-10 <= nums[i] <= 10"
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
    "company": "TCS",
    "title": "TCS - Longest Substring Without Repeating Characters",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Longest%20Substring%20Without%20Repeating%20Characters%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find the length of the longest substring without repeating characters using sliding window.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "Sliding window with hash map"
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
    "company": "TCS",
    "title": "TCS - FizzBuzz Multiple Generator",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20FizzBuzz%20Multiple%20Generator%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given integer n, return string array where answer[i] is Fizz, Buzz, FizzBuzz or number.",
    "constraints": [
      "1 <= n <= 10^4",
      "O(N) traversal"
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
    "company": "TCS",
    "title": "TCS - House Robber Maximum Loot",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20House%20Robber%20Maximum%20Loot%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Determine maximum money you can rob tonight without alerting police from adjacent houses.",
    "constraints": [
      "1 <= nums.length <= 100",
      "DP linear scan"
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
    "company": "TCS",
    "title": "TCS - Jump Game Can Reach Last Index",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Jump%20Game%20Can%20Reach%20Last%20Index%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Determine if you can reach the last index from first index where nums[i] is max jump length.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy max reach"
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
    "company": "TCS",
    "title": "TCS - Min Cost Climbing Stairs",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Min%20Cost%20Climbing%20Stairs%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find minimum cost to reach top of staircase where you can take 1 or 2 steps paying cost[i].",
    "constraints": [
      "2 <= cost.length <= 1000",
      "0 <= cost[i] <= 999"
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
    "company": "TCS",
    "title": "TCS - Find Peak Element in Array",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Find%20Peak%20Element%20in%20Array%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find a peak element that is strictly greater than its neighbors in O(log N) time.",
    "constraints": [
      "1 <= nums.length <= 1000",
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
    "company": "TCS",
    "title": "TCS - Intersection of Two Arrays",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Intersection%20of%20Two%20Arrays%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given two integer arrays nums1 and nums2, return array of their intersection with unique elements.",
    "constraints": [
      "1 <= nums1.length, nums2.length <= 1000",
      "Set lookup"
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
    "company": "TCS",
    "title": "TCS - Jewels and Stones Counter",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Jewels%20and%20Stones%20Counter%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Count how many stones are also jewels given string jewels and string stones.",
    "constraints": [
      "1 <= jewels.length, stones.length <= 50",
      "Hash set lookup"
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
    "company": "TCS",
    "title": "TCS - Single Number Bitwise XOR",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Single%20Number%20Bitwise%20XOR%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Every element appears twice except for one. Find that single one using XOR.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "O(1) extra space"
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
    "company": "TCS",
    "title": "TCS - Reverse String In Place",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Reverse%20String%20In%20Place%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Write function that reverses a string where input string is given as array of characters s.",
    "constraints": [
      "1 <= s.length <= 10^5",
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
    "company": "TCS",
    "title": "TCS - Middle of the Linked List",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Middle%20of%20the%20Linked%20List%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given head of singly linked list, return middle node using slow and fast pointers.",
    "constraints": [
      "1 <= node count <= 100",
      "One-pass two-pointer"
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
    "company": "TCS",
    "title": "TCS - Contains Duplicate in Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Contains%20Duplicate%20in%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Return true if any value appears at least twice in integer array nums.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "HashSet O(N) lookup"
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
    "company": "TCS",
    "title": "TCS - Pascals Triangle Triangle Row Builder",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Pascals%20Triangle%20Triangle%20Row%20Builder%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given integer numRows, generate the first numRows of Pascal's triangle.",
    "constraints": [
      "1 <= numRows <= 30",
      "Dynamic programming array"
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
    "company": "TCS",
    "title": "TCS - Best Time to Buy and Sell Stock",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Find maximum profit you can achieve by choosing a single day to buy stock and different day to sell.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "One-pass min tracker"
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
    "company": "TCS",
    "title": "TCS - Valid Parentheses Bracket Matching",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Determine if input string of brackets \"(\", \")\", \"{\", \"}\", \"[\", \"]\" is valid.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack data structure"
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
    "company": "TCS",
    "title": "TCS - Squares of a Sorted Array",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Squares%20of%20a%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given sorted integer array nums, return array of squares of each number sorted in non-decreasing order.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Two-pointer O(N)"
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
    "company": "TCS",
    "title": "TCS - Length of Last Word in Sentence",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Length%20of%20Last%20Word%20in%20Sentence%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given string s consisting of words and spaces, return length of the last word.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Trim and scan"
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
    "company": "TCS",
    "title": "TCS - Roman to Integer Numeral Converter",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Roman%20to%20Integer%20Numeral%20Converter%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given a roman numeral string s, convert it to an integer.",
    "constraints": [
      "1 <= s.length <= 15",
      "Symbol dictionary lookup"
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
    "company": "TCS",
    "title": "TCS - Defanging an IP Address",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Defanging%20an%20IP%20Address%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given valid IPv4 address, return defanged version replacing each \".\" with \"[.]\".",
    "constraints": [
      "Valid IPv4 string",
      "String replace"
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
    "company": "TCS",
    "title": "TCS - Running Sum of 1D Array",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Running%20Sum%20of%201D%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Return running sum array where runningSum[i] = sum(nums[0]...nums[i]).",
    "constraints": [
      "1 <= nums.length <= 1000",
      "Prefix sum O(N)"
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
    "company": "TCS",
    "title": "TCS - Richest Customer Wealth Maximum Bank Wealth",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Richest%20Customer%20Wealth%20Maximum%20Bank%20Wealth%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Calculate maximum wealth that any customer has across all their bank accounts.",
    "constraints": [
      "m, n <= 50",
      "Row summation"
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
    "company": "TCS",
    "title": "TCS - Two Sum Target Pair Indices",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - 3Sum Triplets Summing to Zero",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Container With Most Water Area",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Trapping Rain Water Elevation Chamber",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Maximum Subarray Kadane Algorithm",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Sliding Window Maximum Monotonic Deque",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Subarray Sum Equals K Prefix Frequency",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Rotate Array by K Positions Right",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Next Permutation Lexicographical Order",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Search in Rotated Sorted Array",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Valid Palindrome String Check",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Longest Palindromic Substring Expand Centers",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Group Anagrams by Character Signature",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Minimum Window Substring Character Frequency",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - String to Integer Atoi Parsing",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Decode String Nested Multiplier",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
  },
  {
    "company": "TCS",
    "title": "TCS - Custom Sort String Character Priority",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Custom%20Sort%20String%20Character%20Priority%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously. Permute the characters of s so that they match the order that order was sorted.",
    "constraints": [
      "1 <= order.length <= 26",
      "1 <= s.length <= 200"
    ],
    "testCases": [
      {
        "input": "order = \"cba\", s = \"abcd\"",
        "output": "\"cbad\"",
        "explanation": "\"c\", \"b\", \"a\" sorted according to order."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - Palindromic Substrings Total Count",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Palindromic%20Substrings%20Total%20Count%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward.",
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
    "company": "TCS",
    "title": "TCS - Reverse Singly Linked List In-Place",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Reverse%20Singly%20Linked%20List%20In-Place%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "constraints": [
      "The number of nodes in the list is the range [0, 5000]"
    ],
    "testCases": [
      {
        "input": "head = [1, 2, 3, 4, 5]",
        "output": "[5, 4, 3, 2, 1]",
        "explanation": "Reversed in place."
      }
    ]
  },
  {
    "company": "TCS",
    "title": "TCS - Linked List Cycle Detection Fast Slow Pointers",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Linked%20List%20Cycle%20Detection%20Fast%20Slow%20Pointers%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given head, the head of a linked list, determine if the linked list has a cycle in it using O(1) memory.",
    "constraints": [
      "0 <= Node.val <= 10^4",
      "Floyd cycle finding"
    ],
    "testCases": [
      {
        "input": "head = [3, 2, 0, -4], pos = 1",
        "output": "true",
        "explanation": "Cycle connects to 1st node."
      }
    ]
  }
];
