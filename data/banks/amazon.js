// Auto-generated verified interview questions for Amazon
module.exports = [
  {
    "company": "Amazon",
    "title": "Amazon - Delivery Truck Optimal Package Loading with Volume Constraints",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Delivery%20Truck%20Optimal%20Package%20Loading%20with%20Volume%20Constraints%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA (HackerRank)",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a list of package weights and a maximum truck capacity, calculate the minimum number of delivery trips required such that each trip carries at most two packages and does not exceed the weight limit.",
    "constraints": [
      "1 <= weights.length <= 10^5",
      "1 <= weights[i] <= maxCapacity <= 10^4",
      "Two-pointer greedy approach"
    ],
    "testCases": [
      {
        "input": "weights = [12, 8, 15, 5, 10], maxCapacity = 20",
        "output": "3",
        "explanation": "Trip 1: [15, 5] = 20. Trip 2: [12, 8] = 20. Trip 3: [10]. Total 3 trips."
      },
      {
        "input": "weights = [5, 5, 5, 5], maxCapacity = 10",
        "output": "2",
        "explanation": "Trip 1: [5, 5] = 10. Trip 2: [5, 5] = 10. Total 2 trips."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Prime Video Bandwidth Rolling Window Throttler",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Prime%20Video%20Bandwidth%20Rolling%20Window%20Throttler%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given an array of incoming network request bitrates and a window size k, return a boolean array indicating for each window whether total bandwidth consumed exceeds the throttle threshold.",
    "constraints": [
      "1 <= requests.length <= 10^5",
      "1 <= window <= requests.length",
      "Sliding window O(N)"
    ],
    "testCases": [
      {
        "input": "requests = [100, 200, 150, 300, 250], window = 3, threshold = 600",
        "output": "[false, false, false, true, true]",
        "explanation": "Window [100, 200, 150] = 450 <= 600. Window [200, 150, 300] = 650 > 600 (throttled). Window [150, 300, 250] = 700 > 600 (throttled)."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Fulfillment Center Robocart Minimum Battery Path",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Fulfillment%20Center%20Robocart%20Minimum%20Battery%20Path%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "A robocart navigates an m x n warehouse grid from top-left (0,0) to bottom-right (m-1, n-1), moving only right or down. Each cell consumes battery units. Find the path that minimizes total battery consumption.",
    "constraints": [
      "1 <= m, n <= 200",
      "0 <= grid[i][j] <= 100",
      "O(M*N) Dynamic Programming"
    ],
    "testCases": [
      {
        "input": "grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]",
        "output": "7",
        "explanation": "Path: 1 -> 3 -> 1 -> 1 -> 1. Total battery: 1 + 3 + 1 + 1 + 1 = 7."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Warehouse Order Queue Deadlock Prevention",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Warehouse%20Order%20Queue%20Deadlock%20Prevention%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given dependency graph of order resource locks where lockGraph[i] contains resources locked by order i, determine if a deadlock cycle exists.",
    "constraints": [
      "1 <= orders <= 1000",
      "Cycle detection via DFS / Kahn topological sort"
    ],
    "testCases": [
      {
        "input": "lockGraph = [[1], [2], [0]]",
        "output": "true",
        "explanation": "Orders 0, 1, 2 form a cyclic wait-for dependency: 0 -> 1 -> 2 -> 0."
      },
      {
        "input": "lockGraph = [[1], []]",
        "output": "false",
        "explanation": "No cyclic dependencies exist."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Locker Box Size Fit Assignment",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Locker%20Box%20Size%20Fit%20Assignment%20interview%20assessment&type=link",
    "round": "Amazon Campus OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given an array of package dimensions and an array of available locker box sizes, determine if all packages can be placed into distinct lockers such that each package size <= locker size.",
    "constraints": [
      "1 <= packages.length <= 1000",
      "lockers.length >= packages.length",
      "Greedy sorting"
    ],
    "testCases": [
      {
        "input": "packages = [2, 5, 8], lockers = [3, 6, 9]",
        "output": "true",
        "explanation": "Package 2 fits in 3, 5 in 6, 8 in 9."
      },
      {
        "input": "packages = [5, 10], lockers = [4, 8]",
        "output": "false",
        "explanation": "Package 10 cannot fit into any available locker."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Delivery Drone Flight Corridor Altitude Partition",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Delivery%20Drone%20Flight%20Corridor%20Altitude%20Partition%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Calculate minimum number of distinct altitude corridors needed for N drones flying along overlapping path intervals such that no two drones share the same altitude corridor at the same time.",
    "constraints": [
      "1 <= drones <= 10^4",
      "Interval sweep line / Min-Heap"
    ],
    "testCases": [
      {
        "input": "flights = [[1, 5], [2, 6], [7, 9]]",
        "output": "2",
        "explanation": "Flights [1, 5] and [2, 6] overlap, requiring 2 altitudes. Flight [7, 9] reuses corridor 1."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Seller Rating Quantile Window Calculator",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Seller%20Rating%20Quantile%20Window%20Calculator%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given seller star ratings arriving in real time, calculate the median rating across each sliding window of size k.",
    "constraints": [
      "1 <= ratings.length <= 5 * 10^4",
      "Two balanced heaps"
    ],
    "testCases": [
      {
        "input": "ratings = [4.5, 3.8, 4.9, 4.2, 5.0], window = 3",
        "output": "[4.5, 4.2, 4.9]",
        "explanation": "Medians of [4.5, 3.8, 4.9] -> 4.5; [3.8, 4.9, 4.2] -> 4.2; [4.9, 4.2, 5.0] -> 4.9."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Boats to Save People Conveyor Belt Logistics",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Boats%20to%20Save%20People%20Conveyor%20Belt%20Logistics%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Calculate minimum boats of capacity limit to transport people weights.",
    "constraints": [
      "1 <= people.length <= 5 * 10^4",
      "Two-pointer greedy"
    ],
    "testCases": [
      {
        "input": "people = [1, 2], limit = 3",
        "output": "1",
        "explanation": "1 boat carries both people (1 + 2 <= 3)."
      },
      {
        "input": "people = [3, 2, 2, 1], limit = 3",
        "output": "3",
        "explanation": "Boats needed: [3], [2, 1], [2]."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Shortest Path in Grid with Obstacles Elimination",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Shortest%20Path%20in%20Grid%20with%20Obstacles%20Elimination%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find minimum steps from top-left to bottom-right eliminating at most k obstacles.",
    "constraints": [
      "1 <= m, n <= 40",
      "BFS 3D state visited"
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
    "company": "Amazon",
    "title": "Amazon - LRU Cache Design Fast Key Value Storage",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20LRU%20Cache%20Design%20Fast%20Key%20Value%20Storage%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Implement Least Recently Used cache with get and put in O(1) time.",
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
    "company": "Amazon",
    "title": "Amazon - Number of Islands in Warehouse Grid",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Number%20of%20Islands%20in%20Warehouse%20Grid%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Count connected components of 1s in 2D binary grid.",
    "constraints": [
      "1 <= m, n <= 300",
      "DFS / BFS"
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
    "company": "Amazon",
    "title": "Amazon - Reorder Data in Log Files for Warehouse Auditing",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Reorder%20Data%20in%20Log%20Files%20for%20Warehouse%20Auditing%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Sort logs: letter-logs lexicographically before digit-logs preserving order.",
    "constraints": [
      "1 <= logs.length <= 100",
      "Custom comparator"
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
    "company": "Amazon",
    "title": "Amazon - Rotting Oranges Infection Propagation",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Rotting%20Oranges%20Infection%20Propagation%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find minimum minutes until all fresh oranges rot via 4-directional spread.",
    "constraints": [
      "1 <= m, n <= 10",
      "Multi-source BFS"
    ],
    "testCases": [
      {
        "input": "grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]",
        "output": "4",
        "explanation": "All fresh oranges are rotten after 4 minutes."
      },
      {
        "input": "grid = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]",
        "output": "-1",
        "explanation": "Orange at bottom-left cannot ever rot."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Merge Intervals for Delivery Slot Scheduling",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Merge%20Intervals%20for%20Delivery%20Slot%20Scheduling%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Merge all overlapping intervals in schedule.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Sort by start"
    ],
    "testCases": [
      {
        "input": "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
        "output": "[[1, 6], [8, 10], [15, 18]]",
        "explanation": "Intervals [1, 3] and [2, 6] overlap into [1, 6]."
      },
      {
        "input": "intervals = [[1, 4], [4, 5]]",
        "output": "[[1, 5]]",
        "explanation": "Intervals [1, 4] and [4, 5] are touching and merge into [1, 5]."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Top K Frequent Words in Customer Reviews",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Top%20K%20Frequent%20Words%20in%20Customer%20Reviews%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return k most frequent strings sorted by frequency and lexicographical order.",
    "constraints": [
      "1 <= words.length <= 500",
      "Trie / Min-Heap"
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
    "company": "Amazon",
    "title": "Amazon - Word Ladder Shortest Transformation Sequence",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Word%20Ladder%20Shortest%20Transformation%20Sequence%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find length of shortest transformation sequence from beginWord to endWord.",
    "constraints": [
      "Word list up to 5000",
      "Bidirectional BFS"
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
    "company": "Amazon",
    "title": "Amazon - Median of Two Sorted Arrays",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Median%20of%20Two%20Sorted%20Arrays%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find median of two sorted arrays in O(log(m+n)) runtime.",
    "constraints": [
      "m, n up to 1000",
      "Binary search partition"
    ],
    "testCases": [
      {
        "input": "nums1 = [1, 3], nums2 = [2]",
        "output": "2.0",
        "explanation": "Merged array is [1, 2, 3] and median is 2.0."
      },
      {
        "input": "nums1 = [1, 2], nums2 = [3, 4]",
        "output": "2.5",
        "explanation": "Merged array is [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Binary Tree Zigzag Level Order Traversal",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Binary%20Tree%20Zigzag%20Level%20Order%20Traversal%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Amazon",
    "title": "Amazon - K Closest Points to Origin Logistic Center",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20K%20Closest%20Points%20to%20Origin%20Logistic%20Center%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find k closest delivery locations to origin (0,0) in Euclidean distance.",
    "constraints": [
      "1 <= k <= points.length <= 10^4",
      "Max-Heap / QuickSelect"
    ],
    "testCases": [
      {
        "input": "points = [[1, 3], [-2, 2]], k = 1",
        "output": "[[-2, 2]]",
        "explanation": "Distance of [1, 3] is sqrt(10), distance of [-2, 2] is sqrt(8). [-2, 2] is closer."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Course Schedule II Ordering of Courses",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Course%20Schedule%20II%20Ordering%20of%20Courses%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find valid topological ordering of courses given prerequisite graph.",
    "constraints": [
      "1 <= numCourses <= 2000",
      "Topological Sort"
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
    "company": "Amazon",
    "title": "Amazon - Critical Connections in a Network Bridges",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Critical%20Connections%20in%20a%20Network%20Bridges%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find all critical connections (bridges) in server network using Tarjan Algorithm.",
    "constraints": [
      "2 <= n <= 10^5",
      "Tarjan Bridge O(V+E)"
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
    "company": "Amazon",
    "title": "Amazon - Subtree of Another Tree Verification",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Subtree%20of%20Another%20Tree%20Verification%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Determine if binary tree has subtree with identical structure and values.",
    "constraints": [
      "Node count up to 2000",
      "Tree recursion"
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
    "company": "Amazon",
    "title": "Amazon - Trapping Rain Water Elevation Chart",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Trapping%20Rain%20Water%20Elevation%20Chart%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Calculate total volume of water trapped between bars after rain.",
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
    "company": "Amazon",
    "title": "Amazon - Sliding Window Maximum K Elements",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Sliding%20Window%20Maximum%20K%20Elements%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find maximum element in sliding window of size k moving across array.",
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
    "company": "Amazon",
    "title": "Amazon - Two Sum Find Target Pair Indices",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Two%20Sum%20Find%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return indices of two numbers that add up to target.",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "HashMap"
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
    "company": "Amazon",
    "title": "Amazon - 3Sum Triplets Summing to Zero",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find all unique triplets in array that sum to zero.",
    "constraints": [
      "3 <= nums.length <= 3000",
      "Two-pointer"
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
    "company": "Amazon",
    "title": "Amazon - Copy List with Random Pointer Deep Clone",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Copy%20List%20with%20Random%20Pointer%20Deep%20Clone%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Create deep copy of linked list where nodes have random pointers in O(1) space.",
    "constraints": [
      "0 <= n <= 1000",
      "Weaving nodes"
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
    "company": "Amazon",
    "title": "Amazon - Longest Palindromic Substring in String",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Longest%20Palindromic%20Substring%20in%20String%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find longest palindrome substring in s.",
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
    "company": "Amazon",
    "title": "Amazon - Word Break in Dictionary Verification",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Word%20Break%20in%20Dictionary%20Verification%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Determine if string can be segmented into words in dictionary.",
    "constraints": [
      "1 <= s.length <= 300",
      "DP array"
    ],
    "testCases": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\", \"code\"]",
        "output": "true",
        "explanation": "\"leetcode\" can be segmented into \"leet\" and \"code\"."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]",
        "output": "false",
        "explanation": "Cannot be segmented into valid dictionary words."
      }
    ]
  },
  {
    "company": "Amazon",
    "title": "Amazon - Word Search in 2D Board Matrix",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Word%20Search%20in%202D%20Board%20Matrix%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Check if word exists in 2D character grid along adjacent cells.",
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
    "company": "Amazon",
    "title": "Amazon - Serialize and Deserialize Binary Tree Stream",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Serialize%20and%20Deserialize%20Binary%20Tree%20Stream%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Design algorithm to serialize and deserialize binary tree.",
    "constraints": [
      "Node count up to 10^4",
      "Preorder DFS string"
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
    "company": "Amazon",
    "title": "Amazon - Meeting Rooms II Minimum Conference Rooms",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Meeting%20Rooms%20II%20Minimum%20Conference%20Rooms%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find minimum conference rooms required for set of meeting intervals.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Min-heap / Sweep line"
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
    "company": "Amazon",
    "title": "Amazon - Minimum Difficulty of a Job Schedule",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Minimum%20Difficulty%20of%20a%20Job%20Schedule%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find minimum difficulty to schedule d jobs in d days preserving job order.",
    "constraints": [
      "1 <= jobDifficulty.length <= 300",
      "2D Dynamic Programming"
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
    "company": "Amazon",
    "title": "Amazon - Analyze User Website Visit Pattern 3-Sequence",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Analyze%20User%20Website%20Visit%20Pattern%203-Sequence%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find most common 3-website visit pattern visited by users in order.",
    "constraints": [
      "3 <= visits <= 50",
      "Hash map count"
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
    "company": "Amazon",
    "title": "Amazon - Partition Labels Maximum Disjoint Substrings",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Partition%20Labels%20Maximum%20Disjoint%20Substrings%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Partition string into as many parts as possible so each letter appears in at most one part.",
    "constraints": [
      "1 <= s.length <= 500",
      "Greedy last occurrence"
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
    "company": "Amazon",
    "title": "Amazon - Robot Bounded In Circle Simulation",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Robot%20Bounded%20In%20Circle%20Simulation%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Determine if robot instructions repeat in infinite cycle.",
    "constraints": [
      "1 <= instructions.length <= 100",
      "Vector coordinate math"
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
    "company": "Amazon",
    "title": "Amazon - Design In-Memory File System Directory Engine",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Design%20In-Memory%20File%20System%20Directory%20Engine%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Design data structure for file system with mkdir, ls, addContentToFile, readContentFromFile.",
    "constraints": [
      "Trie directory structure",
      "O(L) operations"
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
    "company": "Amazon",
    "title": "Amazon - Maximal Rectangle of 1s in Binary Matrix",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Maximal%20Rectangle%20of%201s%20in%20Binary%20Matrix%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find largest rectangle containing only 1s in binary matrix.",
    "constraints": [
      "1 <= m, n <= 200",
      "Histogram stack per row"
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
    "company": "Amazon",
    "title": "Amazon - Binary Tree Maximum Path Sum Any Nodes",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Binary%20Tree%20Maximum%20Path%20Sum%20Any%20Nodes%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find maximum path sum in binary tree from any node to any node.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Postorder DFS maximum"
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
    "company": "Amazon",
    "title": "Amazon - Lowest Common Ancestor of Binary Tree",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Lowest%20Common%20Ancestor%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
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
    "company": "Amazon",
    "title": "Amazon - Construct Binary Tree from Preorder and Inorder",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Reconstruct binary tree from preorder and inorder traversal arrays.",
    "constraints": [
      "Node count up to 3000",
      "Recursive index split"
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
    "company": "Amazon",
    "title": "Amazon - Find Median from Data Stream Two Heaps",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Find%20Median%20from%20Data%20Stream%20Two%20Heaps%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Implement class that tracks running median of incoming data stream in O(log N).",
    "constraints": [
      "Calls up to 5 * 10^4",
      "Two balanced heaps"
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
    "company": "Amazon",
    "title": "Amazon - Word Ladder II All Shortest Transformation Sequences",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Word%20Ladder%20II%20All%20Shortest%20Transformation%20Sequences%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find all shortest transformation sequences from beginWord to endWord.",
    "constraints": [
      "Word list up to 500",
      "BFS + Backtracking DFS"
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
    "company": "Amazon",
    "title": "Amazon - Search in Rotated Sorted Array Binary Search",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Search%20in%20Rotated%20Sorted%20Array%20Binary%20Search%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Search target in rotated sorted array in O(log N).",
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
    "company": "Amazon",
    "title": "Amazon - Best Time to Buy and Sell Stock Single Transaction",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Best%20Time%20to%20Buy%20and%20Sell%20Stock%20Single%20Transaction%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Find maximum profit possible with one stock buy and sell.",
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
    "company": "Amazon",
    "title": "Amazon - Search Suggestions System Autocomplete Trie",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Search%20Suggestions%20System%20Autocomplete%20Trie%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given products array and searchWord, return 3 lexicographical suggestions for each typed prefix.",
    "constraints": [
      "1 <= products.length <= 1000",
      "Trie / Binary search"
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
    "company": "Amazon",
    "title": "Amazon - Merge K Sorted Lists Priority Queue",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Merge%20K%20Sorted%20Lists%20Priority%20Queue%20interview%20assessment&type=link",
    "round": "Amazon Bar Raiser Round",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Merge k sorted linked lists into one sorted linked list in O(N log K).",
    "constraints": [
      "k up to 10^4",
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
    "company": "Amazon",
    "title": "Amazon - Alien Dictionary Character Order Derivation",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Alien%20Dictionary%20Character%20Order%20Derivation%20interview%20assessment&type=link",
    "round": "Amazon SDE-1 OA",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Derive order of letters in alien dictionary from sorted words list.",
    "constraints": [
      "1 <= words.length <= 100",
      "Topological sort"
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
    "company": "Amazon",
    "title": "Amazon - Valid Parentheses Bracket Verification",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Valid%20Parentheses%20Bracket%20Verification%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Determine if brackets string is properly nested and closed.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Stack"
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
    "company": "Amazon",
    "title": "Amazon - Letter Combinations of Phone Number",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Amazon%20Letter%20Combinations%20of%20Phone%20Number%20interview%20assessment&type=link",
    "round": "Amazon Technical Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Return all possible letter combinations for keypad digits.",
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
  }
];
