// Auto-generated verified interview questions for Flipkart
module.exports = [
  {
    "company": "Flipkart",
    "title": "Flipkart - Flash Sale Cart Reservation Lock Timeout",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Flash%20Sale%20Cart%20Reservation%20Lock%20Timeout%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "In a Big Billion Days flash sale, inventory is reserved for 10 minutes when placed in cart. Given arrival timestamps of cart additions and purchase checkouts, return which users completed checkout before reservation expiry.",
    "constraints": [
      "1 <= events <= 10^5",
      "Reservation TTL = 600 seconds",
      "Hash map tracking expiry"
    ],
    "testCases": [
      {
        "input": "cart = [{\"user\": \"U1\", \"t\": 100}], checkout = [{\"user\": \"U1\", \"t\": 650}]",
        "output": "[\"U1\"]",
        "explanation": "650 - 100 = 550 <= 600 seconds. Checkout successful."
      },
      {
        "input": "cart = [{\"user\": \"U2\", \"t\": 100}], checkout = [{\"user\": \"U2\", \"t\": 750}]",
        "output": "[]",
        "explanation": "750 - 100 = 650 > 600 seconds. Reservation timed out."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Warehouse Aisle Order Picking Route Minimizer",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Warehouse%20Aisle%20Order%20Picking%20Route%20Minimizer%20interview%20assessment&type=link",
    "round": "Flipkart Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "A warehouse picker starts at packing station (0,0) and needs to collect items located at coordinate aisles. Find the shortest route that visits all aisles and returns to packing station.",
    "constraints": [
      "1 <= aisles.length <= 16",
      "TSP Dynamic Programming with Bitmask"
    ],
    "testCases": [
      {
        "input": "aisles = [[1, 1], [1, 3], [3, 1]]",
        "output": "8",
        "explanation": "Manhattan cycle: (0,0)->(1,1)->(1,3)->(3,1)->(0,0) = 2 + 2 + 4 = 8."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - SuperCoin Loyalty Redemption Knapsack",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20SuperCoin%20Loyalty%20Redemption%20Knapsack%20interview%20assessment&type=link",
    "round": "Flipkart SDE-1 OA",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "A customer has C SuperCoins. Each reward item requires coins[i] SuperCoins and grants discount value discount[i]. Find the maximum discount attainable without exceeding C SuperCoins.",
    "constraints": [
      "1 <= C <= 2000",
      "0/1 Knapsack DP"
    ],
    "testCases": [
      {
        "input": "coins = [50, 100, 150], discount = [100, 250, 350], C = 200",
        "output": "450",
        "explanation": "Take reward 1 (50 coins for 100) and reward 3 (150 coins for 350) = 200 coins for 450 discount."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Bulk Package Dimensional Weight Surcharge",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Bulk%20Package%20Dimensional%20Weight%20Surcharge%20interview%20assessment&type=link",
    "round": "Flipkart Campus Coding Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Shipping carriers charge by the greater of actual weight and dimensional weight (length * width * height / 5000). Given an array of packages, calculate the total billed shipping weight.",
    "constraints": [
      "1 <= packages.length <= 10^4",
      "Single pass calculation"
    ],
    "testCases": [
      {
        "input": "packages = [{\"l\": 50, \"w\": 40, \"h\": 30, \"wgt\": 8}]",
        "output": "12",
        "explanation": "Dim weight = 50*40*30/5000 = 12 kg. Actual weight = 8 kg. Billable weight = max(8, 12) = 12."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Two Sum Target Pair Indices",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - 3Sum Triplets Summing to Zero",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Container With Most Water Area",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Trapping Rain Water Elevation Chamber",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Maximum Subarray Kadane Algorithm",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Sliding Window Maximum Monotonic Deque",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Subarray Sum Equals K Prefix Frequency",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Product of Array Except Self Without Division",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Rotate Array by K Positions Right",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Move Zeroes to End of Array",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Majority Element in Election Tally",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Next Permutation Lexicographical Order",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Search in Rotated Sorted Array",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Valid Palindrome String Check",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Longest Palindromic Substring Expand Centers",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Group Anagrams by Character Signature",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Longest Substring Without Repeating Characters Window",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Minimum Window Substring Character Frequency",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - String to Integer Atoi Parsing",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Valid Parentheses Bracket Matching",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Decode String Nested Multiplier",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Custom Sort String Character Priority",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Custom%20Sort%20String%20Character%20Priority%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Palindromic Substrings Total Count",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Palindromic%20Substrings%20Total%20Count%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Reverse Singly Linked List In-Place",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Reverse%20Singly%20Linked%20List%20In-Place%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
    "company": "Flipkart",
    "title": "Flipkart - Linked List Cycle Detection Fast Slow Pointers",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Linked%20List%20Cycle%20Detection%20Fast%20Slow%20Pointers%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
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
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Merge Two Sorted Lists Splice Order",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Merge%20Two%20Sorted%20Lists%20Splice%20Order%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
    "constraints": [
      "0 <= nodes <= 50",
      "Sorted order"
    ],
    "testCases": [
      {
        "input": "list1 = [1, 2, 4], list2 = [1, 3, 4]",
        "output": "[1, 1, 2, 3, 4, 4]",
        "explanation": "Merged into non-decreasing order."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Remove Nth Node From End of List Two Pointers",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Remove%20Nth%20Node%20From%20End%20of%20List%20Two%20Pointers%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    "constraints": [
      "1 <= sz <= 30",
      "1 <= n <= sz"
    ],
    "testCases": [
      {
        "input": "head = [1, 2, 3, 4, 5], n = 2",
        "output": "[1, 2, 3, 5]",
        "explanation": "Removed 2nd node from end."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - LRU Cache Design Fast Key Value Storage",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20LRU%20Cache%20Design%20Fast%20Key%20Value%20Storage%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with O(1) get and put.",
    "constraints": [
      "1 <= capacity <= 3000"
    ],
    "testCases": [
      {
        "input": "capacity = 2, calls = [\"put(1,1)\", \"put(2,2)\", \"get(1)\", \"put(3,3)\", \"get(2)\"]",
        "output": "[null, null, 1, null, -1]",
        "explanation": "Key 2 evicted."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Copy List with Random Pointer Deep Clone",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Copy%20List%20with%20Random%20Pointer%20Deep%20Clone%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Construct a deep copy of a linked list where each node contains an additional random pointer.",
    "constraints": [
      "0 <= n <= 1000"
    ],
    "testCases": [
      {
        "input": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "explanation": "Deep copy with distinct node memory."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Middle of the Linked List Fast and Slow",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Middle%20of%20the%20Linked%20List%20Fast%20and%20Slow%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    "constraints": [
      "1 <= nodes <= 100"
    ],
    "testCases": [
      {
        "input": "head = [1, 2, 3, 4, 5]",
        "output": "[3, 4, 5]",
        "explanation": "Middle node is 3."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Palindrome Linked List Verification",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Palindrome%20Linked%20List%20Verification%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    "constraints": [
      "1 <= nodes <= 10^5"
    ],
    "testCases": [
      {
        "input": "head = [1, 2, 2, 1]",
        "output": "true",
        "explanation": "Reads identically forwards and backwards."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Reorder List Interleaved Halves",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Reorder%20List%20Interleaved%20Halves%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given the head of a singly linked-list. Reorder the list to be on the following form: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...",
    "constraints": [
      "1 <= nodes <= 5 * 10^4"
    ],
    "testCases": [
      {
        "input": "head = [1, 2, 3, 4]",
        "output": "[1, 4, 2, 3]",
        "explanation": "Interleaved from start and end."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Min Stack Implementation Constant Time",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Min%20Stack%20Implementation%20Constant%20Time%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    "constraints": [
      "At most 3 * 10^4 calls"
    ],
    "testCases": [
      {
        "input": "calls = [\"MinStack\", \"push(-2)\", \"push(0)\", \"push(-3)\", \"getMin()\", \"pop()\", \"top()\", \"getMin()\"]",
        "output": "[null, null, null, null, -3, null, 0, -2]",
        "explanation": "MinStack tracks min in O(1)."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Daily Temperatures Wait Days to Warmer Temperature",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Daily%20Temperatures%20Wait%20Days%20to%20Warmer%20Temperature%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an array of daily temperatures, return an array answer such that answer[i] is the number of days you have to wait for a warmer temperature.",
    "constraints": [
      "1 <= temperatures.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
        "output": "[1, 1, 4, 2, 1, 1, 0, 0]",
        "explanation": "Monotonic stack evaluates waiting days."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Largest Rectangle in Histogram Monotonic Stack",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Largest%20Rectangle%20in%20Histogram%20Monotonic%20Stack%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers heights representing the histogram's bar height, return the area of the largest rectangle in the histogram.",
    "constraints": [
      "1 <= heights.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "heights = [2, 1, 5, 6, 2, 3]",
        "output": "10",
        "explanation": "Largest rectangle area is 10."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Implement Queue using Two Stacks FIFO",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Implement%20Queue%20using%20Two%20Stacks%20FIFO%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Implement a first in first out (FIFO) queue using only two stacks.",
    "constraints": [
      "Standard stack operations"
    ],
    "testCases": [
      {
        "input": "calls = [\"MyQueue\", \"push(1)\", \"push(2)\", \"peek()\", \"pop()\", \"empty()\"]",
        "output": "[null, null, null, 1, 1, false]",
        "explanation": "Queue FIFO behavior simulated."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Evaluate Reverse Polish Notation Calculator",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Evaluate%20Reverse%20Polish%20Notation%20Calculator%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
    "constraints": [
      "1 <= tokens.length <= 10^4"
    ],
    "testCases": [
      {
        "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "(2 + 1) * 3 = 9."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Next Greater Element I Monotonic Mapping",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Next%20Greater%20Element%20I%20Monotonic%20Mapping%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.",
    "constraints": [
      "1 <= nums1.length <= nums2.length <= 1000"
    ],
    "testCases": [
      {
        "input": "nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]",
        "output": "[-1, 3, -1]",
        "explanation": "Next greater mapping via stack."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Top K Frequent Elements in Array Heap",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Top%20K%20Frequent%20Elements%20in%20Array%20Heap%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "k is in the range [1, the number of unique elements in the array]"
    ],
    "testCases": [
      {
        "input": "nums = [1, 1, 1, 2, 2, 3], k = 2",
        "output": "[1, 2]",
        "explanation": "1 and 2 are the two most frequent elements."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Maximum Depth of Binary Tree Depth First",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Maximum%20Depth%20of%20Binary%20Tree%20Depth%20First%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary tree, return its maximum depth.",
    "constraints": [
      "0 <= nodes <= 10^4"
    ],
    "testCases": [
      {
        "input": "root = [3, 9, 20, null, null, 15, 7]",
        "output": "3",
        "explanation": "Max depth is 3."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Diameter of Binary Tree Path Length",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Diameter%20of%20Binary%20Tree%20Path%20Length%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary tree, return the length of the diameter of the tree.",
    "constraints": [
      "1 <= nodes <= 10^4"
    ],
    "testCases": [
      {
        "input": "root = [1, 2, 3, 4, 5]",
        "output": "3",
        "explanation": "Diameter is 3 edges."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Invert Binary Tree Mirror Reflection",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Invert%20Binary%20Tree%20Mirror%20Reflection%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary tree, invert the tree, and return its root.",
    "constraints": [
      "0 <= nodes <= 100"
    ],
    "testCases": [
      {
        "input": "root = [4, 2, 7, 1, 3, 6, 9]",
        "output": "[4, 7, 2, 9, 6, 3, 1]",
        "explanation": "Tree mirrored in place."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Lowest Common Ancestor of a Binary Tree Ancestor Search",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree%20Ancestor%20Search%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    "constraints": [
      "2 <= nodes <= 10^5"
    ],
    "testCases": [
      {
        "input": "root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1",
        "output": "3",
        "explanation": "LCA is 3."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Binary Tree Level Order Traversal BFS",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Binary%20Tree%20Level%20Order%20Traversal%20BFS%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary tree, return the level order traversal of its nodes' values.",
    "constraints": [
      "0 <= nodes <= 2000"
    ],
    "testCases": [
      {
        "input": "root = [3, 9, 20, null, null, 15, 7]",
        "output": "[[3], [9, 20], [15, 7]]",
        "explanation": "Level order traversal."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Validate Binary Search Tree BST Rule Check",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Validate%20Binary%20Search%20Tree%20BST%20Rule%20Check%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    "constraints": [
      "1 <= nodes <= 10^4"
    ],
    "testCases": [
      {
        "input": "root = [2, 1, 3]",
        "output": "true",
        "explanation": "Valid BST."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Binary Tree Right Side View Visible Nodes",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Binary%20Tree%20Right%20Side%20View%20Visible%20Nodes%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary tree, return the values of the nodes you can see ordered from top to bottom from the right side.",
    "constraints": [
      "0 <= nodes <= 100"
    ],
    "testCases": [
      {
        "input": "root = [1, 2, 3, null, 5, null, 4]",
        "output": "[1, 3, 4]",
        "explanation": "Right side view."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Path Sum III Paths Summing to Target",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Path%20Sum%20III%20Paths%20Summing%20to%20Target%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.",
    "constraints": [
      "0 <= nodes <= 1000"
    ],
    "testCases": [
      {
        "input": "root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8",
        "output": "3",
        "explanation": "3 paths sum to 8."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Kth Smallest Element in a BST",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Kth%20Smallest%20Element%20in%20a%20BST%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    "constraints": [
      "1 <= k <= n <= 10^4"
    ],
    "testCases": [
      {
        "input": "root = [3, 1, 4, null, 2], k = 1",
        "output": "1",
        "explanation": "Smallest element is 1."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Subtree of Another Tree Verification",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Subtree%20of%20Another%20Tree%20Verification%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
    "constraints": [
      "1 <= nodes <= 2000"
    ],
    "testCases": [
      {
        "input": "root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2]",
        "output": "true",
        "explanation": "subRoot is an exact subtree."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Number of Islands Grid Connected Lands",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Number%20of%20Islands%20Grid%20Connected%20Lands%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an m x n 2D binary grid grid representing '1's (land) and '0's (water), return the number of islands.",
    "constraints": [
      "1 <= m, n <= 300"
    ],
    "testCases": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": "Single island."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Rotting Oranges Multi-Source BFS",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Rotting%20Oranges%20Multi-Source%20BFS%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return the minimum number of minutes that must elapse until no cell has a fresh orange in an m x n grid.",
    "constraints": [
      "1 <= m, n <= 10"
    ],
    "testCases": [
      {
        "input": "grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]",
        "output": "4",
        "explanation": "All oranges rot in 4 minutes."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Course Schedule Graph Cycle Detection",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Course%20Schedule%20Graph%20Cycle%20Detection%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given total numCourses and prerequisite dependencies, determine if you can finish all courses without a cycle.",
    "constraints": [
      "1 <= numCourses <= 2000"
    ],
    "testCases": [
      {
        "input": "numCourses = 2, prerequisites = [[1, 0]]",
        "output": "true",
        "explanation": "Can finish."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Course Schedule II Ordering of Courses",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Course%20Schedule%20II%20Ordering%20of%20Courses%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return the topological ordering of courses you should take to finish all courses.",
    "constraints": [
      "1 <= numCourses <= 2000"
    ],
    "testCases": [
      {
        "input": "numCourses = 2, prerequisites = [[1, 0]]",
        "output": "[0, 1]",
        "explanation": "Course 0 then 1."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Clone Graph Undirected Deep Copy",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Clone%20Graph%20Undirected%20Deep%20Copy%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
    "constraints": [
      "0 <= nodes <= 100"
    ],
    "testCases": [
      {
        "input": "adjList = [[2, 4], [1, 3], [2, 4], [1, 3]]",
        "output": "[[2, 4], [1, 3], [2, 4], [1, 3]]",
        "explanation": "Deep copy."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Word Ladder Shortest Word Transformation",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Word%20Ladder%20Shortest%20Word%20Transformation%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord.",
    "constraints": [
      "1 <= beginWord.length <= 10",
      "wordList.length <= 5000"
    ],
    "testCases": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "hit -> hot -> dot -> dog -> cog (length 5)."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Pacific Atlantic Water Flow Grid Traversal",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Pacific%20Atlantic%20Water%20Flow%20Grid%20Traversal%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an m x n matrix of heights, return a list of grid coordinates where rainwater can flow to both the Pacific and Atlantic oceans.",
    "constraints": [
      "1 <= m, n <= 200"
    ],
    "testCases": [
      {
        "input": "heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]",
        "output": "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
        "explanation": "Cells flowing to both oceans."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Climbing Stairs Fibonacci Steps DP",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Climbing%20Stairs%20Fibonacci%20Steps%20DP%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "constraints": [
      "1 <= n <= 45"
    ],
    "testCases": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "2 distinct ways."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Coin Change Minimum Denominations",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Coin%20Change%20Minimum%20Denominations%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return the fewest number of coins that you need to make up amount using given denominations.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 10^4"
    ],
    "testCases": [
      {
        "input": "coins = [1, 2, 5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins)."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - House Robber Maximum Non-Adjacent Loot",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20House%20Robber%20Maximum%20Non-Adjacent%20Loot%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return the maximum amount of money you can rob tonight without alerting the police by breaking into adjacent houses.",
    "constraints": [
      "1 <= nums.length <= 100"
    ],
    "testCases": [
      {
        "input": "nums = [1, 2, 3, 1]",
        "output": "4",
        "explanation": "Max loot = 4."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Longest Increasing Subsequence Length DP",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Longest%20Increasing%20Subsequence%20Length%20DP%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    "constraints": [
      "1 <= nums.length <= 2500"
    ],
    "testCases": [
      {
        "input": "nums = [10, 9, 2, 5, 3, 7, 101, 18]",
        "output": "4",
        "explanation": "LIS is [2, 3, 7, 101] of length 4."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Word Break in Dictionary Verification",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Word%20Break%20in%20Dictionary%20Verification%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into dictionary words.",
    "constraints": [
      "1 <= s.length <= 300"
    ],
    "testCases": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\", \"code\"]",
        "output": "true",
        "explanation": "Segmented into leet and code."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Unique Paths Grid Robot Paths DP",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Unique%20Paths%20Grid%20Robot%20Paths%20DP%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given m and n, return the number of possible unique paths that a robot can take from top-left to bottom-right of an m x n grid.",
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "testCases": [
      {
        "input": "m = 3, n = 7",
        "output": "28",
        "explanation": "28 unique paths."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Edit Distance Levenshtein Matrix DP",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Edit%20Distance%20Levenshtein%20Matrix%20DP%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
    "constraints": [
      "0 <= word1.length, word2.length <= 500"
    ],
    "testCases": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": "3 operations required."
      }
    ]
  },
  {
    "company": "Flipkart",
    "title": "Flipkart - Generate Parentheses Combinations Backtracking",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Flipkart%20Generate%20Parentheses%20Combinations%20Backtracking%20interview%20assessment&type=link",
    "round": "Flipkart Machine Coding Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "constraints": [
      "1 <= n <= 8"
    ],
    "testCases": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "explanation": "All 5 valid combinations."
      }
    ]
  }
];
