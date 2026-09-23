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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "An automobile manufacturing plant produces two-wheelers (V1) and four-wheelers (V2). Given total vehicles V and total wheels W, calculate count of each vehicle as an array [twoWheelers, fourWheelers]. If invalid, return [-1, -1].",
    "constraints": [
      "2 <= W <= 10^5",
      "W >= 2*V",
      "W is even",
      "O(1) time"
    ],
    "testCases": [
      {
        "input": "vehicles = 200, wheels = 540",
        "output": "[130, 70]",
        "explanation": "4*V - W = 800 - 540 = 260. 260 / 2 = 130 two-wheelers. 200 - 130 = 70 four-wheelers. Returns [130, 70]."
      },
      {
        "input": "vehicles = 10, wheels = 20",
        "output": "[10, 0]",
        "explanation": "All 10 are two-wheelers. Returns [10, 0]."
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.",
    "constraints": [
      "1 <= length <= 10^5",
      "Lowercase letters only"
    ],
    "testCases": [
      {
        "input": "s = \"leetcode\"",
        "output": "0",
        "explanation": "The character 'l' at index 0 is the first character that does not occur at any other index."
      },
      {
        "input": "s = \"loveleetcode\"",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"aabb\"",
        "output": "-1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an integer array `nums` and an integer `k`, return the number of non-empty subarrays that have a sum divisible by `k`.\n\nA subarray is a contiguous part of an array.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "1 <= k <= 10^4"
    ],
    "testCases": [
      {
        "input": "nums = [4,5,0,-2,-3,1], k = 5",
        "output": "7",
        "explanation": "There are 7 subarrays with a sum divisible by k = 5: [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]"
      },
      {
        "input": "nums = [5], k = 9",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given an array `nums` of size `n`, return the majority element.\n\nThe majority element is the element that appears more than `&lfloor;n / 2&rfloor;` times. You may assume that the majority element always exists in the array.",
    "constraints": [
      "1 <= n <= 5 * 10^4",
      "O(1) auxiliary space"
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
    "company": "TCS",
    "title": "TCS - Move Zeroes to End of Array",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "In-place modification"
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
    "company": "TCS",
    "title": "TCS - Trapping Rain Water in Elevation Map",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Trapping%20Rain%20Water%20in%20Elevation%20Map%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
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
    "company": "TCS",
    "title": "TCS - Valid Palindrome After Removing At Most One Character",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Valid%20Palindrome%20After%20Removing%20At%20Most%20One%20Character%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "Lowercase letters"
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
    "company": "TCS",
    "title": "TCS - Maximum Subarray Sum Kadane Algorithm",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Maximum%20Subarray%20Sum%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
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
    "company": "TCS",
    "title": "TCS - Climbing Stairs with Step Limits",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Climbing%20Stairs%20with%20Step%20Limits%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    "constraints": [
      "1 <= n <= 45",
      "Fibonacci dynamic programming"
    ],
    "testCases": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps"
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step"
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "There is an integer array `nums` sorted in non-decreasing order (not necessarily with distinct values).\n\nBefore being passed to your function, `nums` is rotated at an unknown pivot index `k` (`0 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,4,4,5,6,6,7]` might be rotated at pivot index `5` and become `[4,5,6,6,7,0,1,2,4,4]`.\n\nGiven the array `nums` after the rotation and an integer `target`, return `true` if `target` is in `nums`, or `false` if it is not in `nums`.\n\nYou must decrease the overall operation steps as much as possible.",
    "constraints": [
      "1 <= nums.length <= 5000",
      "O(log N) binary search"
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
    "company": "TCS",
    "title": "TCS - Coin Change Minimum Coins Needed",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Coin%20Change%20Minimum%20Coins%20Needed%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= amount <= 10^4"
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
    "company": "TCS",
    "title": "TCS - Longest Common Prefix in Strings Array",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Longest%20Common%20Prefix%20in%20Strings%20Array%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string `\"\"`.",
    "constraints": [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200"
    ],
    "testCases": [
      {
        "input": "strs = [\"flower\",\"flow\",\"flight\"]",
        "output": "\"fl\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "strs = [\"dog\",\"racecar\",\"car\"]",
        "output": "\"\"",
        "explanation": "There is no common prefix among the input strings."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "You are given the heads of two sorted linked lists `list1` and `list2`.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.",
    "constraints": [
      "List lengths up to 50",
      "-100 <= val <= 100"
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
    "company": "TCS",
    "title": "TCS - Product of Array Except Self",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Product%20of%20Array%20Except%20Self%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "O(N) runtime without division"
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
    "company": "TCS",
    "title": "TCS - Check If Two Strings Are Anagrams",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Check%20If%20Two%20Strings%20Are%20Anagrams%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "Lowercase English letters"
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
    "company": "TCS",
    "title": "TCS - Next Permutation Rearrangement",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Next%20Permutation%20Rearrangement%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "A permutation of an array of integers is an arrangement of its members into a sequence or linear order.\n\n\t• For example, for `arr = [1,2,3]`, the following are all the permutations of `arr`: `[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]`.\n\nThe next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).\n\n\t• For example, the next permutation of `arr = [1,2,3]` is `[1,3,2]`.\n\n\t• Similarly, the next permutation of `arr = [2,3,1]` is `[3,1,2]`.\n\n\t• While the next permutation of `arr = [3,2,1]` is `[1,2,3]` because `[3,2,1]` does not have a lexicographical larger rearrangement.\n\nGiven an array of integers `nums`, find the next permutation of `nums`.\n\nThe replacement must be in place and use only constant extra memory.",
    "constraints": [
      "1 <= nums.length <= 100",
      "In-place replacement"
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
    "company": "TCS",
    "title": "TCS - Binary Search in Sorted Array",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Binary%20Search%20in%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "O(log N) runtime"
    ],
    "testCases": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4",
        "explanation": "9 exists in nums and its index is 4"
      },
      {
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "output": "-1",
        "explanation": "2 does not exist in nums so return -1"
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.\n\nYou must solve this problem without using the library's sort function.",
    "constraints": [
      "1 <= nums.length <= 300",
      "One-pass O(N) in-place"
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
    "company": "TCS",
    "title": "TCS - Remove Duplicates from Sorted Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Remove%20Duplicates%20from%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.\n\nConsider the number of unique elements in `nums` to be `k​​​​​​​`​​​​​​​. After removing duplicates, return the number of unique elements `k`.\n\nThe first `k` elements of `nums` should contain the unique numbers in sorted order. The remaining elements beyond index `k - 1` can be ignored.\n\nCustom Judge:\n\nThe judge will test your solution with the following code:\n\nIf all assertions pass, then your solution will be accepted.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "O(1) extra space"
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
    "company": "TCS",
    "title": "TCS - Palindrome Number Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Palindrome%20Number%20Check%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "No string conversion"
    ],
    "testCases": [
      {
        "input": "x = 121",
        "output": "true",
        "explanation": "121 reads as 121 from left to right and from right to left."
      },
      {
        "input": "x = -121",
        "output": "false",
        "explanation": "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
      },
      {
        "input": "x = 10",
        "output": "false",
        "explanation": "Reads 01 from right to left. Therefore it is not a palindrome."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an integer `n`, return the number of prime numbers that are strictly less than `n`.",
    "constraints": [
      "0 <= n <= 5 * 10^6",
      "Sieve of Eratosthenes O(N log log N)"
    ],
    "testCases": [
      {
        "input": "n = 10",
        "output": "4",
        "explanation": "There are 4 prime numbers less than 10, they are 2, 3, 5, 7."
      },
      {
        "input": "n = 0",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "n = 1",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.\n\nAn integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.",
    "constraints": [
      "-2^31 <= n <= 2^31 - 1",
      "O(1) bit manipulation"
    ],
    "testCases": [
      {
        "input": "n = 1",
        "output": "true",
        "explanation": "20 = 1"
      },
      {
        "input": "n = 16",
        "output": "true",
        "explanation": "24 = 16"
      },
      {
        "input": "n = 3",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, find a subarray that has the largest product, and return the product.\n\nThe test cases are generated so that the answer will fit in a 32-bit integer.\n\nNote that the product of an array with a single element is the value of that element.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-10 <= nums[i] <= 10"
    ],
    "testCases": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6",
        "explanation": "[2,3] has the largest product 6."
      },
      {
        "input": "nums = [-2,0,-1]",
        "output": "0",
        "explanation": "The result cannot be 2, because [-2,-1] is not a subarray."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a string `s`, find the length of the longest substring without duplicate characters.",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "Sliding window with hash map"
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
    "company": "TCS",
    "title": "TCS - FizzBuzz Multiple Generator",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20FizzBuzz%20Multiple%20Generator%20interview%20assessment&type=link",
    "round": "TCS NQT Advanced Coding",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given an integer `n`, return a string array `answer` (1-indexed) where:\n\n\t• `answer[i] == \"FizzBuzz\"` if `i` is divisible by `3` and `5`.\n\n\t• `answer[i] == \"Fizz\"` if `i` is divisible by `3`.\n\n\t• `answer[i] == \"Buzz\"` if `i` is divisible by `5`.\n\n\t• `answer[i] == i` (as a string) if none of the above conditions are true.",
    "constraints": [
      "1 <= n <= 10^4",
      "O(N) traversal"
    ],
    "testCases": [
      {
        "input": "n = 3",
        "output": "[\"1\",\"2\",\"Fizz\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "n = 5",
        "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "n = 15",
        "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "constraints": [
      "1 <= nums.length <= 100",
      "DP linear scan"
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
    "company": "TCS",
    "title": "TCS - Jump Game Can Reach Last Index",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Jump%20Game%20Can%20Reach%20Last%20Index%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Greedy max reach"
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
    "company": "TCS",
    "title": "TCS - Min Cost Climbing Stairs",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Min%20Cost%20Climbing%20Stairs%20interview%20assessment&type=link",
    "round": "TCS Ninja Coding Section",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "You are given an integer array `cost` where `cost[i]` is the cost of `ith` step on a staircase.\n\nOnce you pay the cost, you can either climb one or two steps.\n\nYou can either start from the step with index 0, or the step with index 1.\n\nReturn the minimum cost to reach the top of the staircase, which is the position just past the last step (index `cost.length`).",
    "constraints": [
      "2 <= cost.length <= 1000",
      "0 <= cost[i] <= 999"
    ],
    "testCases": [
      {
        "input": "cost = [10,15,20]",
        "output": "15",
        "explanation": "You will start at index 1. - Pay 15 and climb two steps to reach the top. The total cost is 15."
      },
      {
        "input": "cost = [1,100,1,1,1,100,1,1,100,1]",
        "output": "6",
        "explanation": "You will start at index 0. - Pay 1 and climb two steps to reach index 2. - Pay 1 and climb two steps to reach index 4. - Pay 1 and climb two steps to reach index 6. - Pay 1 and climb one step to reach index 7. - Pay 1 and climb two steps to reach index 9. - Pay 1 and climb one step to reach the top. The total cost is 6."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "A peak element is an element that is strictly greater than its neighbors.\n\nGiven a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.\n\nYou may imagine that `nums[-1] = nums[n] = -&infin;`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.\n\nYou must write an algorithm that runs in `O(log n)` time.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "O(log N) binary search"
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
    "company": "TCS",
    "title": "TCS - Intersection of Two Arrays",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Intersection%20of%20Two%20Arrays%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",
    "constraints": [
      "1 <= nums1.length, nums2.length <= 1000",
      "Set lookup"
    ],
    "testCases": [
      {
        "input": "nums1 = [1,2,2,1], nums2 = [2,2]",
        "output": "[2,2]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
        "output": "[4,9]",
        "explanation": "[9,4] is also accepted."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. You want to know how many of the stones you have are also jewels.\n\nLetters are case sensitive, so `\"a\"` is considered a different type of stone from `\"A\"`.",
    "constraints": [
      "1 <= jewels.length, stones.length <= 50",
      "Hash set lookup"
    ],
    "testCases": [
      {
        "input": "jewels = \"aA\", stones = \"aAAbbbb\"",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "jewels = \"z\", stones = \"ZZ\"",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "O(1) extra space"
    ],
    "testCases": [
      {
        "input": "nums = [2,2,1]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with `O(1)` extra memory.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "Two-pointer in-place"
    ],
    "testCases": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
        "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given the `head` of a singly linked list, return the middle node of the linked list.\n\nIf there are two middle nodes, return the second middle node.",
    "constraints": [
      "1 <= node count <= 100",
      "One-pass two-pointer"
    ],
    "testCases": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[3,4,5]",
        "explanation": "The middle node of the list is node 3."
      },
      {
        "input": "head = [1,2,3,4,5,6]",
        "output": "[4,5,6]",
        "explanation": "Since the list has two middle nodes with values 3 and 4, we return the second one."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "HashSet O(N) lookup"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true",
        "explanation": "The element 1 occurs at the indices 0 and 3."
      },
      {
        "input": "nums = [1,2,3,4]",
        "output": "false",
        "explanation": "All elements are distinct."
      },
      {
        "input": "nums = [1,1,1,3,3,4,3,2,4,2]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given a `triangle` array, return the minimum path sum from top to bottom.\n\nFor each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.",
    "constraints": [
      "1 <= numRows <= 30",
      "Dynamic programming array"
    ],
    "testCases": [
      {
        "input": "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]",
        "output": "11",
        "explanation": "The triangle looks like:    2   3 4  6 5 7 4 1 8 3 The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above)."
      },
      {
        "input": "triangle = [[-10]]",
        "output": "-10",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "One-pass min tracker"
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
    "company": "TCS",
    "title": "TCS - Valid Parentheses Bracket Matching",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "TCS Digital Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n\n\t• Open brackets must be closed by the same type of brackets.\n\n\t• Open brackets must be closed in the correct order.\n\n\t• Every close bracket has a corresponding open bracket of the same type.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack data structure"
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
    "company": "TCS",
    "title": "TCS - Squares of a Sorted Array",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Squares%20of%20a%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Coding Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Two-pointer O(N)"
    ],
    "testCases": [
      {
        "input": "nums = [-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]",
        "explanation": "After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100]."
      },
      {
        "input": "nums = [-7,-3,2,3,11]",
        "output": "[4,9,9,49,121]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given a string `s` consisting of words and spaces, return the length of the last word in the string.\n\nA word is a maximal substring consisting of non-space characters only.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Trim and scan"
    ],
    "testCases": [
      {
        "input": "s = \"Hello World\"",
        "output": "5",
        "explanation": "The last word is \"World\" with length 5."
      },
      {
        "input": "s = \"   fly me   to   the moon  \"",
        "output": "4",
        "explanation": "The last word is \"moon\" with length 4."
      },
      {
        "input": "s = \"luffy is still joyboy\"",
        "output": "6",
        "explanation": "The last word is \"joyboy\" with length 6."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.\n\nFor example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.\n\nRoman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:\n\n\t• `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. \n\n\t• `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. \n\n\t• `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.\n\nGiven a roman numeral, convert it to an integer.",
    "constraints": [
      "1 <= s.length <= 15",
      "Symbol dictionary lookup"
    ],
    "testCases": [
      {
        "input": "s = \"III\"",
        "output": "3",
        "explanation": "III = 3."
      },
      {
        "input": "s = \"LVIII\"",
        "output": "58",
        "explanation": "L = 50, V= 5, III = 3."
      },
      {
        "input": "s = \"MCMXCIV\"",
        "output": "1994",
        "explanation": "M = 1000, CM = 900, XC = 90 and IV = 4."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Given a valid (IPv4) IP `address`, return a defanged version of that IP address.\n\n\r\n\r\nA defanged IP address replaces every period `\".\"` with `\"[.]\"`.",
    "constraints": [
      "Valid IPv4 string",
      "String replace"
    ],
    "testCases": [
      {
        "input": "address = \"1.1.1.1\"",
        "output": "\"1[.]1[.]1[.]1\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "address = \"255.100.50.0\"",
        "output": "\"255[.]100[.]50[.]0\"",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]&hellip;nums[i])`.\n\nReturn the running sum of `nums`.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "Prefix sum O(N)"
    ],
    "testCases": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[1,3,6,10]",
        "explanation": "Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]."
      },
      {
        "input": "nums = [1,1,1,1,1]",
        "output": "[1,2,3,4,5]",
        "explanation": "Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]."
      },
      {
        "input": "nums = [3,1,2,10,1]",
        "output": "[3,4,6,16,17]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i​​​​​​​​​​​th​​​​` customer has in the `j​​​​​​​​​​​th`​​​​ bank. Return the wealth that the richest customer has.\n\nA customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.",
    "constraints": [
      "m, n <= 50",
      "Row summation"
    ],
    "testCases": [
      {
        "input": "accounts = [[1,2,3],[3,2,1]]",
        "output": "6",
        "explanation": "1st customer has wealth = 1 + 2 + 3 = 6 2nd customer has wealth = 3 + 2 + 1 = 6 Both customers are considered the richest with a wealth of 6 each, so return 6."
      },
      {
        "input": "accounts = [[1,5],[7,3],[3,5]]",
        "output": "10",
        "explanation": "1st customer has wealth = 6 2nd customer has wealth = 10  3rd customer has wealth = 8 The 2nd customer is the richest with a wealth of 10."
      },
      {
        "input": "accounts = [[2,8,7],[7,1,3],[1,9,5]]",
        "output": "17",
        "explanation": "Canonical test case verified against problem constraints."
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
    "company": "TCS",
    "title": "TCS - 3Sum Triplets Summing to Zero",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Container With Most Water Area",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Trapping Rain Water Elevation Chamber",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Maximum Subarray Kadane Algorithm",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Sliding Window Maximum Monotonic Deque",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Subarray Sum Equals K Prefix Frequency",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Rotate Array by K Positions Right",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Next Permutation Lexicographical Order",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Search in Rotated Sorted Array",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Valid Palindrome String Check",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Longest Palindromic Substring Expand Centers",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Group Anagrams by Character Signature",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Minimum Window Substring Character Frequency",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - String to Integer Atoi Parsing",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
  },
  {
    "company": "TCS",
    "title": "TCS - Decode String Nested Multiplier",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an encoded string, return its decoded string.\n\nThe encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.\n\nYou may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.\n\nThe test cases are generated so that the length of the output will never exceed `105`.",
    "constraints": [
      "1 <= s.length <= 30"
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
    "company": "TCS",
    "title": "TCS - Custom Sort String Character Priority",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Custom%20Sort%20String%20Character%20Priority%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Palindromic Substrings Total Count",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Palindromic%20Substrings%20Total%20Count%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Reverse Singly Linked List In-Place",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Reverse%20Singly%20Linked%20List%20In-Place%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
    "company": "TCS",
    "title": "TCS - Linked List Cycle Detection Fast Slow Pointers",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=TCS%20Linked%20List%20Cycle%20Detection%20Fast%20Slow%20Pointers%20interview%20assessment&type=link",
    "round": "TCS Prime Technical Round",
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
  }
];
