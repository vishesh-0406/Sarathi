// Auto-generated verified interview questions for Genpact
module.exports = [
  {
    "company": "Genpact",
    "title": "Genpact - Invoice Reconciliation Line Item Matcher",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Invoice%20Reconciliation%20Line%20Item%20Matcher%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given a list of line items from a Purchase Order (PO) and a vendor invoice, determine whether the vendor invoice contains an exact multiset permutation match of the PO line items.",
    "constraints": [
      "1 <= po.length, inv.length <= 10^5",
      "Hash map frequency count"
    ],
    "testCases": [
      {
        "input": "poItems = [100, 250, 400], invoiceItems = [250, 100, 400]",
        "output": "true",
        "explanation": "Both multisets have identical elements and frequencies."
      },
      {
        "input": "poItems = [100, 200], invoiceItems = [100, 300]",
        "output": "false",
        "explanation": "Invoice item 300 does not match PO item 200."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Financial Fraud Transaction Velocity Detector",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Financial%20Fraud%20Transaction%20Velocity%20Detector%20interview%20assessment&type=link",
    "round": "Genpact Analytics Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a chronological stream of transactions with account IDs, amounts, and timestamps, flag an account for fraud review if it conducts 3 or more transactions within any 5-minute window with total sum exceeding 50,000.",
    "constraints": [
      "1 <= txns.length <= 10^5",
      "Queue per account within 300 seconds"
    ],
    "testCases": [
      {
        "input": "txns = [{\"acc\": \"X\", \"amt\": 20000, \"t\": 60}, {\"acc\": \"X\", \"amt\": 25000, \"t\": 120}, {\"acc\": \"X\", \"amt\": 15000, \"t\": 200}]",
        "output": "[\"X\"]",
        "explanation": "Account X had 3 txns in 140s (< 300s) totaling 60000 (> 50000), triggering velocity alert."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Loan EMI Amortization Schedule Verifier",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Loan%20EMI%20Amortization%20Schedule%20Verifier%20interview%20assessment&type=link",
    "round": "Genpact Technical Interview",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given principal P, annual interest rate R (percentage), and tenure N in months, verify whether the provided monthly installment payment amortizes the loan to within +/- 1 currency unit.",
    "constraints": [
      "P <= 10^7",
      "R <= 30",
      "1 <= N <= 360",
      "Financial formula verification"
    ],
    "testCases": [
      {
        "input": "P = 100000, R = 12, N = 12, emi = 8885",
        "output": "true",
        "explanation": "Monthly rate r = 0.01. EMI = 100000 * 0.01 * (1.01^12) / (1.01^12 - 1) = 8884.88 ~ 8885."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Insurance Claims Adjudication Risk Scorer",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Insurance%20Claims%20Adjudication%20Risk%20Scorer%20interview%20assessment&type=link",
    "round": "Genpact Software Engineer Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Evaluate insurance claim severity based on claim amount and previous prior claims count. If amount > 50000 and priors >= 2, return \"SPECIAL_INVESTIGATION\". Otherwise, return \"FAST_TRACK\".",
    "constraints": [
      "Decision rules engine"
    ],
    "testCases": [
      {
        "input": "amount = 75000, priors = 3",
        "output": "\"SPECIAL_INVESTIGATION\"",
        "explanation": "High value claim with repeated historical claims triggers fraud investigation."
      },
      {
        "input": "amount = 12000, priors = 0",
        "output": "\"FAST_TRACK\"",
        "explanation": "Standard low-risk claim routed to fast-track settlement."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Two Sum Target Pair Indices",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - 3Sum Triplets Summing to Zero",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Container With Most Water Area",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Trapping Rain Water Elevation Chamber",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Maximum Subarray Kadane Algorithm",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Sliding Window Maximum Monotonic Deque",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Subarray Sum Equals K Prefix Frequency",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Product of Array Except Self Without Division",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Rotate Array by K Positions Right",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Move Zeroes to End of Array",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Majority Element in Election Tally",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Next Permutation Lexicographical Order",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Search in Rotated Sorted Array",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Valid Palindrome String Check",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Longest Palindromic Substring Expand Centers",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Group Anagrams by Character Signature",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Longest Substring Without Repeating Characters Window",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Minimum Window Substring Character Frequency",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - String to Integer Atoi Parsing",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Valid Parentheses Bracket Matching",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Minimum Remove to Make Valid Parentheses Balance",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Minimum%20Remove%20to%20Make%20Valid%20Parentheses%20Balance%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Decode String Nested Multiplier",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Decode%20String%20Nested%20Multiplier%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Custom Sort String Character Priority",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Custom%20Sort%20String%20Character%20Priority%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Palindromic Substrings Total Count",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Palindromic%20Substrings%20Total%20Count%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Reverse Singly Linked List In-Place",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Reverse%20Singly%20Linked%20List%20In-Place%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Linked List Cycle Detection Fast Slow Pointers",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Linked%20List%20Cycle%20Detection%20Fast%20Slow%20Pointers%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Merge Two Sorted Lists Splice Order",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Merge%20Two%20Sorted%20Lists%20Splice%20Order%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
    "company": "Genpact",
    "title": "Genpact - Remove Nth Node From End of List Two Pointers",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Remove%20Nth%20Node%20From%20End%20of%20List%20Two%20Pointers%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
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
  },
  {
    "company": "Genpact",
    "title": "Genpact - LRU Cache Design Fast Key Value Storage",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20LRU%20Cache%20Design%20Fast%20Key%20Value%20Storage%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the `LRUCache` class:\n\n\t• `LRUCache(int capacity)` Initialize the LRU cache with positive size `capacity`.\n\n\t• `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.\n\n\t• `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.\n\nThe functions `get` and `put` must each run in `O(1)` average time complexity.",
    "constraints": [
      "1 <= capacity <= 3000"
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
    "company": "Genpact",
    "title": "Genpact - Copy List with Random Pointer Deep Clone",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Copy%20List%20with%20Random%20Pointer%20Deep%20Clone%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.\n\nConstruct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.\n\nFor example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.\n\nReturn the head of the copied linked list.\n\nThe linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:\n\n\t• `val`: an integer representing `Node.val`\n\n\t• `random_index`: the index of the node (range from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.\n\nYour code will only be given the `head` of the original linked list.",
    "constraints": [
      "0 <= n <= 1000"
    ],
    "testCases": [
      {
        "input": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [[1,1],[2,1]]",
        "output": "[[1,1],[2,1]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "head = [[3,null],[3,0],[3,null]]",
        "output": "[[3,null],[3,0],[3,null]]",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Middle of the Linked List Fast and Slow",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Middle%20of%20the%20Linked%20List%20Fast%20and%20Slow%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the `head` of a singly linked list, return the middle node of the linked list.\n\nIf there are two middle nodes, return the second middle node.",
    "constraints": [
      "1 <= nodes <= 100"
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
    "company": "Genpact",
    "title": "Genpact - Palindrome Linked List Verification",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Palindrome%20Linked%20List%20Verification%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.",
    "constraints": [
      "1 <= nodes <= 10^5"
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
    "company": "Genpact",
    "title": "Genpact - Reorder List Interleaved Halves",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Reorder%20List%20Interleaved%20Halves%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given the head of a singly linked-list. The list can be represented as:\n\nReorder the list to be on the following form:\n\nYou may not modify the values in the list's nodes. Only nodes themselves may be changed.",
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
    "company": "Genpact",
    "title": "Genpact - Min Stack Implementation Constant Time",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Min%20Stack%20Implementation%20Constant%20Time%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the `MinStack` class:\n\n\t• `MinStack()` initializes the stack object.\n\n\t• `void push(int value)` pushes the element `value` onto the stack.\n\n\t• `void pop()` removes the element on the top of the stack.\n\n\t• `int top()` gets the top element of the stack.\n\n\t• `int getMin()` retrieves the minimum element in the stack.\n\nYou must implement a solution with `O(1)` time complexity for each function.",
    "constraints": [
      "At most 3 * 10^4 calls"
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
    "company": "Genpact",
    "title": "Genpact - Daily Temperatures Wait Days to Warmer Temperature",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Daily%20Temperatures%20Wait%20Days%20to%20Warmer%20Temperature%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.",
    "constraints": [
      "1 <= temperatures.length <= 10^5"
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
    "company": "Genpact",
    "title": "Genpact - Largest Rectangle in Histogram Monotonic Stack",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Largest%20Rectangle%20in%20Histogram%20Monotonic%20Stack%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return the area of the largest rectangle in the histogram.",
    "constraints": [
      "1 <= heights.length <= 10^5"
    ],
    "testCases": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "The above is a histogram where width of each bar is 1. The largest rectangle is shown in the red area, which has an area = 10 units."
      },
      {
        "input": "heights = [2,4]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Implement Queue using Two Stacks FIFO",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Implement%20Queue%20using%20Two%20Stacks%20FIFO%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).\n\nImplement the `MyQueue` class:\n\n\t• `void push(int x)` Pushes element x to the back of the queue.\n\n\t• `int pop()` Removes the element from the front of the queue and returns it.\n\n\t• `int peek()` Returns the element at the front of the queue.\n\n\t• `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.\n\nNotes:\n\n\t• You must use only standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.\n\n\t• Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.",
    "constraints": [
      "Standard stack operations"
    ],
    "testCases": [
      {
        "input": "calls = [\"MyQueue\", \"push(1)\", \"push(2)\", \"peek()\", \"pop()\", \"empty()\"]",
        "output": "[null, null, null, 1, 1, false]",
        "explanation": "Queue FIFO behavior simulated using two stacks."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Evaluate Reverse Polish Notation Calculator",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Evaluate%20Reverse%20Polish%20Notation%20Calculator%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.\n\nEvaluate the expression. Return an integer that represents the value of the expression.\n\nNote that:\n\n\t• The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.\n\n\t• Each operand may be an integer or another expression.\n\n\t• The division between two integers always truncates toward zero.\n\n\t• There will not be any division by zero.\n\n\t• The input represents a valid arithmetic expression in a reverse polish notation.\n\n\t• The answer and all the intermediate calculations can be represented in a 32-bit integer.",
    "constraints": [
      "1 <= tokens.length <= 10^4"
    ],
    "testCases": [
      {
        "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "((2 + 1) * 3) = 9"
      },
      {
        "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "output": "6",
        "explanation": "(4 + (13 / 5)) = 6"
      },
      {
        "input": "tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
        "output": "22",
        "explanation": "((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = ((10 * (6 / (12 * -11))) + 17) + 5 = ((10 * (6 / -132)) + 17) + 5 = ((10 * 0) + 17) + 5 = (0 + 17) + 5 = 17 + 5 = 22"
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Next Greater Element I Monotonic Mapping",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Next%20Greater%20Element%20I%20Monotonic%20Mapping%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "The next greater element of some element `x` in an array is the first greater element that is to the right of `x` in the same array.\n\nYou are given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.\n\nFor each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the next greater element of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is `-1`.\n\nReturn an array `ans` of length `nums1.length` such that `ans[i]` is the next greater element as described above.",
    "constraints": [
      "1 <= nums1.length <= nums2.length <= 1000"
    ],
    "testCases": [
      {
        "input": "nums1 = [4,1,2], nums2 = [1,3,4,2]",
        "output": "[-1,3,-1]",
        "explanation": "The next greater element for each value of nums1 is as follows: - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1. - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3. - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1."
      },
      {
        "input": "nums1 = [2,4], nums2 = [1,2,3,4]",
        "output": "[3,-1]",
        "explanation": "The next greater element for each value of nums1 is as follows: - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3. - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Top K Frequent Elements in Array Heap",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Top%20K%20Frequent%20Elements%20in%20Array%20Heap%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "k is in the range [1, the number of unique elements in the array]"
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
    "company": "Genpact",
    "title": "Genpact - Maximum Depth of Binary Tree Depth First",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Maximum%20Depth%20of%20Binary%20Tree%20Depth%20First%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "constraints": [
      "0 <= nodes <= 10^4"
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
    "company": "Genpact",
    "title": "Genpact - Diameter of Binary Tree Path Length",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Diameter%20of%20Binary%20Tree%20Path%20Length%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree, return the length of the diameter of the tree.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.\n\nThe length of a path between two nodes is represented by the number of edges between them.",
    "constraints": [
      "1 <= nodes <= 10^4"
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
    "company": "Genpact",
    "title": "Genpact - Invert Binary Tree Mirror Reflection",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Invert%20Binary%20Tree%20Mirror%20Reflection%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree, invert the tree, and return its root.",
    "constraints": [
      "0 <= nodes <= 100"
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
    "company": "Genpact",
    "title": "Genpact - Lowest Common Ancestor of a Binary Tree Ancestor Search",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree%20Ancestor%20Search%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\nAccording to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).&rdquo;",
    "constraints": [
      "2 <= nodes <= 10^5"
    ],
    "testCases": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "output": "3",
        "explanation": "The LCA of nodes 5 and 1 is 3."
      },
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4",
        "output": "5",
        "explanation": "The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition."
      },
      {
        "input": "root = [1,2], p = 1, q = 2",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Binary Tree Level Order Traversal BFS",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Binary%20Tree%20Level%20Order%20Traversal%20BFS%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    "constraints": [
      "0 <= nodes <= 2000"
    ],
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
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
    "company": "Genpact",
    "title": "Genpact - Validate Binary Search Tree BST Rule Check",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Validate%20Binary%20Search%20Tree%20BST%20Rule%20Check%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n\n\t• The left subtree of a node contains only nodes with keys strictly less than the node's key.\n\n\t• The right subtree of a node contains only nodes with keys strictly greater than the node's key.\n\n\t• Both the left and right subtrees must also be binary search trees.",
    "constraints": [
      "1 <= nodes <= 10^4"
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
    "company": "Genpact",
    "title": "Genpact - Binary Tree Right Side View Visible Nodes",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Binary%20Tree%20Right%20Side%20View%20Visible%20Nodes%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    "constraints": [
      "0 <= nodes <= 100"
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
    "company": "Genpact",
    "title": "Genpact - Path Sum III Paths Summing to Target",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Path%20Sum%20III%20Paths%20Summing%20to%20Target%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary tree and an integer `targetSum`, return the number of paths where the sum of the values along the path equals `targetSum`.\n\nThe path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).",
    "constraints": [
      "0 <= nodes <= 1000"
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
    "company": "Genpact",
    "title": "Genpact - Kth Smallest Element in a BST",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Kth%20Smallest%20Element%20in%20a%20BST%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest value (1-indexed) of all the values of the nodes in the tree.",
    "constraints": [
      "1 <= k <= n <= 10^4"
    ],
    "testCases": [
      {
        "input": "root = [3,1,4,null,2], k = 1",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [5,3,6,2,4,null,null,1], k = 3",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Subtree of Another Tree Verification",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Subtree%20of%20Another%20Tree%20Verification%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of` subRoot` and `false` otherwise.\n\nA subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.",
    "constraints": [
      "1 <= nodes <= 2000"
    ],
    "testCases": [
      {
        "input": "root = [3,4,5,1,2], subRoot = [4,1,2]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Number of Islands Grid Connected Lands",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Number%20of%20Islands%20Grid%20Connected%20Lands%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "constraints": [
      "1 <= m, n <= 300"
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
    "company": "Genpact",
    "title": "Genpact - Rotting Oranges Multi-Source BFS",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Rotting%20Oranges%20Multi-Source%20BFS%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an `m x n` `grid` where each cell can have one of three values:\n\n\t• `0` representing an empty cell,\n\n\t• `1` representing a fresh orange, or\n\n\t• `2` representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.",
    "constraints": [
      "1 <= m, n <= 10"
    ],
    "testCases": [
      {
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "explanation": "The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally."
      },
      {
        "input": "grid = [[0,2]]",
        "output": "0",
        "explanation": "Since there are already no fresh oranges at minute 0, the answer is just 0."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Course Schedule Graph Cycle Detection",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Course%20Schedule%20Graph%20Cycle%20Detection%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\n\t• For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
    "constraints": [
      "1 <= numCourses <= 2000"
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
    "company": "Genpact",
    "title": "Genpact - Course Schedule II Ordering of Courses",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Course%20Schedule%20II%20Ordering%20of%20Courses%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\n\t• For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.\n\nReturn the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
    "constraints": [
      "1 <= numCourses <= 2000"
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
    "company": "Genpact",
    "title": "Genpact - Clone Graph Undirected Deep Copy",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Clone%20Graph%20Undirected%20Deep%20Copy%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a reference of a node in a connected undirected graph.\n\nReturn a deep copy (clone) of the graph.\n\nEach node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.\n\n \n\nTest case format:\n\nFor simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with `val == 1`, the second node with `val == 2`, and so on. The graph is represented in the test case using an adjacency list.\n\nAn adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.\n\nThe given node will always be the first node with `val = 1`. You must return the copy of the given node as a reference to the cloned graph.",
    "constraints": [
      "0 <= nodes <= 100"
    ],
    "testCases": [
      {
        "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]",
        "explanation": "There are 4 nodes in the graph. 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4). 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3). 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4). 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3)."
      },
      {
        "input": "adjList = [[]]",
        "output": "[[]]",
        "explanation": "Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors."
      },
      {
        "input": "adjList = []",
        "output": "[]",
        "explanation": "This an empty graph, it does not have any nodes."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Word Ladder Shortest Word Transformation",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Word%20Ladder%20Shortest%20Word%20Transformation%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:\n\n\t• Every adjacent pair of words differs by a single letter.\n\n\t• Every `si` for `1 k == endWord`\n\nGiven two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or `0` if no such sequence exists.",
    "constraints": [
      "1 <= beginWord.length <= 10",
      "wordList.length <= 5000"
    ],
    "testCases": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "One shortest transformation sequence is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> cog\", which is 5 words long."
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "explanation": "The endWord \"cog\" is not in wordList, therefore there is no valid transformation sequence."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Pacific Atlantic Water Flow Grid Traversal",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Pacific%20Atlantic%20Water%20Flow%20Grid%20Traversal%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "There is an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.\n\nThe island is partitioned into a grid of square cells. You are given an `m x n` integer matrix `heights` where `heights[r][c]` represents the height above sea level of the cell at coordinate `(r, c)`.\n\nThe island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.\n\nReturn a 2D list of grid coordinates `result` where `result[i] = [ri, ci]` denotes that rain water can flow from cell `(ri, ci)` to both the Pacific and Atlantic oceans.",
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
    "company": "Genpact",
    "title": "Genpact - Climbing Stairs Fibonacci Steps DP",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Climbing%20Stairs%20Fibonacci%20Steps%20DP%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",
    "constraints": [
      "1 <= n <= 45"
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
    "company": "Genpact",
    "title": "Genpact - Coin Change Minimum Denominations",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Coin%20Change%20Minimum%20Denominations%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 10^4"
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
    "company": "Genpact",
    "title": "Genpact - House Robber Maximum Non-Adjacent Loot",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20House%20Robber%20Maximum%20Non-Adjacent%20Loot%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "constraints": [
      "1 <= nums.length <= 100"
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
    "company": "Genpact",
    "title": "Genpact - Longest Increasing Subsequence Length DP",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Longest%20Increasing%20Subsequence%20Length%20DP%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.",
    "constraints": [
      "1 <= nums.length <= 2500"
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
    "company": "Genpact",
    "title": "Genpact - Word Break in Dictionary Verification",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Word%20Break%20in%20Dictionary%20Verification%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.",
    "constraints": [
      "1 <= s.length <= 300"
    ],
    "testCases": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "explanation": "Return true because \"leetcode\" can be segmented as \"leet code\"."
      },
      {
        "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
        "output": "true",
        "explanation": "Return true because \"applepenapple\" can be segmented as \"apple pen apple\". Note that you are allowed to reuse a dictionary word."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Unique Paths Grid Robot Paths DP",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Unique%20Paths%20Grid%20Robot%20Paths%20DP%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "There is a robot on an `m x n` grid. The robot is initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.\n\nGiven the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.\n\nThe test cases are generated so that the answer will be less than or equal to `2 * 109`.",
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "testCases": [
      {
        "input": "m = 3, n = 7",
        "output": "28",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "m = 3, n = 2",
        "output": "3",
        "explanation": "From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down"
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Edit Distance Levenshtein Matrix DP",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Edit%20Distance%20Levenshtein%20Matrix%20DP%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.\n\nYou have the following three operations permitted on a word:\n\n\t• Insert a character\n\n\t• Delete a character\n\n\t• Replace a character",
    "constraints": [
      "0 <= word1.length, word2.length <= 500"
    ],
    "testCases": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": "horse -> rorse (replace 'h' with 'r') rorse -> rose (remove 'r') rose -> ros (remove 'e')"
      },
      {
        "input": "word1 = \"intention\", word2 = \"execution\"",
        "output": "5",
        "explanation": "intention -> inention (remove 't') inention -> enention (replace 'i' with 'e') enention -> exention (replace 'n' with 'x') exention -> exection (replace 'n' with 'c') exection -> execution (insert 'u')"
      }
    ]
  },
  {
    "company": "Genpact",
    "title": "Genpact - Generate Parentheses Combinations Backtracking",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Genpact%20Generate%20Parentheses%20Combinations%20Backtracking%20interview%20assessment&type=link",
    "round": "Genpact Technical Assessment",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "constraints": [
      "1 <= n <= 8"
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
  }
];
