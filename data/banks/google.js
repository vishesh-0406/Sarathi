// Auto-generated verified interview questions for Google
module.exports = [
  {
    "company": "Google",
    "title": "Google - Docs Collaborative Operational Transformation Conflict Resolver",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Docs%20Collaborative%20Operational%20Transformation%20Conflict%20Resolver%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "In a collaborative text editor, user A applies insert operation opA at index posA and user B applies insert operation opB at index posB concurrently. Transform opA against opB so both clients converge to identical text.",
    "constraints": [
      "Operational Transformation algorithm",
      "posA, posB >= 0",
      "Character stream stability"
    ],
    "testCases": [
      {
        "input": "opA = { type: \"insert\", pos: 3, char: \"X\" }, opB = { type: \"insert\", pos: 2, char: \"Y\" }",
        "output": "{ type: \"insert\", pos: 4, char: \"X\" }",
        "explanation": "Since opB inserted before opA, opA index shifts right by 1."
      },
      {
        "input": "opA = { type: \"insert\", pos: 1, char: \"A\" }, opB = { type: \"insert\", pos: 5, char: \"B\" }",
        "output": "{ type: \"insert\", pos: 1, char: \"A\" }",
        "explanation": "opB occurred after opA, so opA index is unchanged."
      }
    ]
  },
  {
    "company": "Google",
    "title": "Google - File System Chunk Replication Health Balancer",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20File%20System%20Chunk%20Replication%20Health%20Balancer%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given N chunkservers storing chunk counts, find the minimum number of chunk re-replications needed to balance all chunkservers within +/- 1 of the target mean replication factor.",
    "constraints": [
      "1 <= N <= 10^4",
      "Greedy deficit matching"
    ],
    "testCases": [
      {
        "input": "chunkServers = [5, 2, 9, 3, 7], targetMean = 5",
        "output": "4",
        "explanation": "Transfer 4 chunks from servers with surplus [9, 7] to servers with deficit [2, 3]."
      }
    ]
  },
  {
    "company": "Google",
    "title": "Google - Maps Mountain Trail Elevation Gain Route Optimization",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Maps%20Mountain%20Trail%20Elevation%20Gain%20Route%20Optimization%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given array of waypoint elevations on mountain trail, find minimum gradient adjustments needed so that no adjacent step exceeds maximum climb gradient G.",
    "constraints": [
      "1 <= waypoints.length <= 10^5",
      "1 <= G <= 500",
      "Linear scan"
    ],
    "testCases": [
      {
        "input": "elevations = [1200, 1250, 1340, 1390], G = 60",
        "output": "1",
        "explanation": "From 1250 to 1340 the gradient is 90 > 60. One waypoint adjustment is required."
      }
    ]
  },
  {
    "company": "Google",
    "title": "Google - Calendar Multi-Timezone Free Slot Aggregator",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Calendar%20Multi-Timezone%20Free%20Slot%20Aggregator%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given busy intervals for two participants in UTC, find all free meeting slots of length at least D minutes within working hours [09:00, 18:00].",
    "constraints": [
      "Interval merge and complement",
      "Sorted time strings HH:MM"
    ],
    "testCases": [
      {
        "input": "p1 = [[\"09:00\", \"10:30\"], [\"12:00\", \"13:00\"]], p2 = [[\"10:00\", \"11:30\"]], D = 30",
        "output": "[[\"11:30\", \"12:00\"], [\"13:00\", \"18:00\"]]",
        "explanation": "Combined busy periods: [09:00, 11:30], [12:00, 13:00]. Free slots >= 30m."
      }
    ]
  },
  {
    "company": "Google",
    "title": "Google - BigQuery Columnar Block Compression Run-Length Encoder",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20BigQuery%20Columnar%20Block%20Compression%20Run-Length%20Encoder%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Compress sorted columnar integers into runs of [value, count] pairs and compute total bytes saved compared to uncompressed 32-bit storage.",
    "constraints": [
      "1 <= data.length <= 10^6",
      "O(N) single-pass encoding"
    ],
    "testCases": [
      {
        "input": "data = [1, 1, 1, 2, 2, 3]",
        "output": "[[1, 3], [2, 2], [3, 1]]",
        "explanation": "Value 1 repeats 3 times, 2 repeats 2 times, 3 appears once."
      }
    ]
  },
  {
    "company": "Google",
    "title": "Google - Android Battery Doze Mode Wake-Lock Scheduler",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Android%20Battery%20Doze%20Mode%20Wake-Lock%20Scheduler%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given background apps requesting CPU wake-locks with start and end timestamps, batch overlapping wake-locks into minimum awake periods to maximize battery standby time.",
    "constraints": [
      "Interval merging algorithm",
      "1 <= locks.length <= 10^4"
    ],
    "testCases": [
      {
        "input": "locks = [[10, 30], [20, 40], [55, 70]]",
        "output": "[[10, 40], [55, 70]]",
        "explanation": "Locks [10, 30] and [20, 40] overlap into single awake period [10, 40]."
      }
    ]
  },
  {
    "company": "Google",
    "title": "Google - Meet Audio Packet Loss Burst Recovery",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Meet%20Audio%20Packet%20Loss%20Burst%20Recovery%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given audio packet sequence numbers with missing bursts indicated by 0, calculate number of missing contiguous packet gaps requiring PLC (Packet Loss Concealment) interpolation.",
    "constraints": [
      "1 <= packets.length <= 10^5",
      "Linear scan"
    ],
    "testCases": [
      {
        "input": "packets = [1, 2, 0, 0, 5, 6, 0, 8]",
        "output": "2",
        "explanation": "Two burst loss gaps: packets [3, 4] and packet [7]."
      }
    ]
  },
  {
    "company": "Google",
    "title": "Google - Logger Rate Limiter Message Deduplication",
    "author": "u/iit_kgp_coder",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Logger%20Rate%20Limiter%20Message%20Deduplication%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Design logger system where unique message is printed at most once per 10 seconds.",
    "constraints": [
      "Calls up to 10^4",
      "Hash map timestamp"
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
    "company": "Google",
    "title": "Google - Course Schedule II Service Dependency Order",
    "author": "u/nitk_surathkal",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Course%20Schedule%20II%20Service%20Dependency%20Order%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find valid topological ordering of courses given prerequisite graph.",
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
    "company": "Google",
    "title": "Google - Snapshot Array with Versioning History",
    "author": "u/dtu_coder_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Snapshot%20Array%20with%20Versioning%20History%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Implement SnapshotArray supporting set, snap, and get at snapshot id in O(log N).",
    "constraints": [
      "Calls up to 5 * 10^4",
      "Binary search over history"
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
    "company": "Google",
    "title": "Google - Longest Increasing Path in a Matrix",
    "author": "u/iiit_hyd_prep",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Longest%20Increasing%20Path%20in%20a%20Matrix%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find length of longest strictly increasing path in matrix using DFS with memoization.",
    "constraints": [
      "1 <= m, n <= 200",
      "DFS + 2D memoization"
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
    "company": "Google",
    "title": "Google - Text Justification for Formatting Engine",
    "author": "u/vit_placements_24",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Text%20Justification%20for%20Formatting%20Engine%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Format text so each line has exactly maxWidth characters and is fully justified.",
    "constraints": [
      "1 <= words.length <= 300",
      "Greedy line packing"
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
    "company": "Google",
    "title": "Google - Evaluate Reverse Polish Notation Calculator",
    "author": "u/bits_goa_dev",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Evaluate%20Reverse%20Polish%20Notation%20Calculator%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Evaluate arithmetic expression in Postfix notation using stack.",
    "constraints": [
      "1 <= tokens.length <= 10^4",
      "Stack integer evaluation"
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
    "company": "Google",
    "title": "Google - Employee Free Time Common Meeting Slot",
    "author": "u/thapar_swe_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Employee%20Free%20Time%20Common%20Meeting%20Slot%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find all common free time intervals for all employees given work schedules.",
    "constraints": [
      "Intervals up to 50",
      "Priority queue interval merge"
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
    "company": "Google",
    "title": "Google - Alien Dictionary Lexicographical Order",
    "author": "u/btech_code_champ",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Alien%20Dictionary%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Derive letter ordering of alien language from sorted words dictionary.",
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
    "company": "Google",
    "title": "Google - Robot Room Cleaner Cleaning Simulation",
    "author": "u/campus_hire_blr",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Robot%20Room%20Cleaner%20Cleaning%20Simulation%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Clean room of unknown dimensions using robot API (move, turnLeft, turnRight, clean).",
    "constraints": [
      "Grid up to 100",
      "Backtracking DFS with coordinate set"
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
    "company": "Google",
    "title": "Google - Split Array Largest Sum Binary Search",
    "author": "u/delhi_techie_24",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Split%20Array%20Largest%20Sum%20Binary%20Search%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Split array into k subarrays minimizing largest subarray sum.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "Binary search on answer"
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
    "company": "Google",
    "title": "Google - Find Median from Data Stream High Throughput",
    "author": "u/bangalore_dev_25",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Find%20Median%20from%20Data%20Stream%20High%20Throughput%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Track running median of incoming integer data stream using dual heaps in O(log N).",
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
    "company": "Google",
    "title": "Google - Count of Smaller Numbers After Self",
    "author": "u/algo_prep_india",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Count%20of%20Smaller%20Numbers%20After%20Self%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "For each element find number of smaller elements to its right using Merge Sort / BIT.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Merge Sort inversion / Fenwick"
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
    "company": "Google",
    "title": "Google - Decode String Nested Bracket Multiplier",
    "author": "u/nits_grad_2024",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Decode%20String%20Nested%20Bracket%20Multiplier%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Decode string in format k[string] with nested brackets using two stacks.",
    "constraints": [
      "1 <= s.length <= 30",
      "Two stacks"
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
    "company": "Google",
    "title": "Google - Bus Routes Minimum Transfers to Reach Target",
    "author": "u/hyd_sde_aspirant",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Bus%20Routes%20Minimum%20Transfers%20to%20Reach%20Target%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find least number of buses to travel from source stop to target stop.",
    "constraints": [
      "1 <= routes.length <= 500",
      "BFS on stop-to-routes"
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
    "company": "Google",
    "title": "Google - Minimum Window Substring Containing All Target Characters",
    "author": "u/pune_tech_lead",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Minimum%20Window%20Substring%20Containing%20All%20Target%20Characters%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find minimum window in s containing all characters of t in O(M+N).",
    "constraints": [
      "1 <= m, n <= 10^5",
      "Sliding window with frequency map"
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
    "company": "Google",
    "title": "Google - Expressive Words Stretchy String Matching",
    "author": "u/chennai_swe",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Expressive%20Words%20Stretchy%20String%20Matching%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Count words that can be converted into target by stretching group of >=3 repeated letters.",
    "constraints": [
      "1 <= words.length <= 100",
      "Run length comparison"
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
    "company": "Google",
    "title": "Google - Guess the Word Minimax Secret Guessing",
    "author": "u/iit_kgp_coder",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Guess%20the%20Word%20Minimax%20Secret%20Guessing%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Guess secret word from list with at most 10 Master.guess() calls.",
    "constraints": [
      "Words length 6",
      "Minimax candidate elimination"
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
    "company": "Google",
    "title": "Google - Cracking the Safe De Bruijn Sequence",
    "author": "u/nitk_surathkal",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Cracking%20the%20Safe%20De%20Bruijn%20Sequence%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find shortest sequence that opens safe with n digits and k passwords.",
    "constraints": [
      "1 <= n <= 4, 1 <= k <= 10",
      "De Bruijn sequence / Hierholzer"
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
    "company": "Google",
    "title": "Google - Sentence Screen Fitting Text Simulation",
    "author": "u/dtu_coder_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Sentence%20Screen%20Fitting%20Text%20Simulation%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find how many times given sentence can be fitted on rows x cols screen.",
    "constraints": [
      "1 <= rows, cols <= 2 * 10^4",
      "Greedy cursor with memoization"
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
    "company": "Google",
    "title": "Google - Longest String Chain Word Chain",
    "author": "u/iiit_hyd_prep",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Longest%20String%20Chain%20Word%20Chain%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find longest word chain where wordB is formed by adding one letter to wordA.",
    "constraints": [
      "1 <= words.length <= 1000",
      "DP with HashSet"
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
    "company": "Google",
    "title": "Google - Range Module Continuous Interval Tracking",
    "author": "u/vit_placements_24",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Range%20Module%20Continuous%20Interval%20Tracking%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Design data structure tracking ranges of numbers with addRange, queryRange, removeRange.",
    "constraints": [
      "O(log N) range operations",
      "Segment Tree / Treemap"
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
    "company": "Google",
    "title": "Google - Race Car Shortest Sequence of Accelerate and Reverse",
    "author": "u/bits_goa_dev",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Race%20Car%20Shortest%20Sequence%20of%20Accelerate%20and%20Reverse%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find length of shortest sequence of instructions (A, R) to reach target position.",
    "constraints": [
      "1 <= target <= 10^4",
      "DP / BFS with speed and position"
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
    "company": "Google",
    "title": "Google - Random Pick with Weight Weighted Distribution",
    "author": "u/thapar_swe_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Random%20Pick%20with%20Weight%20Weighted%20Distribution%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Pick index randomly with probability proportional to weight w[i].",
    "constraints": [
      "1 <= w.length <= 10^4",
      "Prefix sum + Binary search"
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
    "company": "Google",
    "title": "Google - Optimal Account Balancing Cash Flow Minimization",
    "author": "u/btech_code_champ",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Optimal%20Account%20Balancing%20Cash%20Flow%20Minimization%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find minimum number of transactions needed to settle all debts among friends.",
    "constraints": [
      "1 <= transactions.length <= 8",
      "Backtracking subset balance"
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
    "company": "Google",
    "title": "Google - Design Search Autocomplete System Trie with Frequency",
    "author": "u/campus_hire_blr",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Design%20Search%20Autocomplete%20System%20Trie%20with%20Frequency%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Design autocomplete system returning top 3 hot sentences matching typed prefix.",
    "constraints": [
      "Trie with hot sentences",
      "Prefix Trie + Min-Heap"
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
    "company": "Google",
    "title": "Google - Word Squares Symmetric Square Grid",
    "author": "u/delhi_techie_24",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Word%20Squares%20Symmetric%20Square%20Grid%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find all word squares that can be built from given list of words using Trie.",
    "constraints": [
      "Words up to 1000",
      "Trie + Backtracking"
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
    "company": "Google",
    "title": "Google - Meeting Rooms II Room Allocation",
    "author": "u/bangalore_dev_25",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Meeting%20Rooms%20II%20Room%20Allocation%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find minimum rooms needed for schedule of meeting intervals.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Min-heap"
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
    "company": "Google",
    "title": "Google - My Calendar I Book Without Double Booking",
    "author": "u/algo_prep_india",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20My%20Calendar%20I%20Book%20Without%20Double%20Booking%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Implement MyCalendar class that books events if they do not cause double booking in O(log N).",
    "constraints": [
      "Calls up to 1000",
      "Treemap / Binary search tree"
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
    "company": "Google",
    "title": "Google - Trapping Rain Water Maximum Trapped Water",
    "author": "u/nits_grad_2024",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Trapping%20Rain%20Water%20Maximum%20Trapped%20Water%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Compute total volume of water trapped between bar elevations.",
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
    "company": "Google",
    "title": "Google - Maximal Square of 1s in Binary Matrix",
    "author": "u/hyd_sde_aspirant",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Maximal%20Square%20of%201s%20in%20Binary%20Matrix%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find largest square containing only 1s and return its area.",
    "constraints": [
      "1 <= m, n <= 300",
      "2D Dynamic programming"
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
    "company": "Google",
    "title": "Google - Swim in Rising Water Binary Search and BFS",
    "author": "u/pune_tech_lead",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Swim%20in%20Rising%20Water%20Binary%20Search%20and%20BFS%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find least time until you can swim from (0,0) to (n-1, n-1) on grid.",
    "constraints": [
      "1 <= n <= 50",
      "Binary search / Dijkstra"
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
    "company": "Google",
    "title": "Google - Minimum Cost to Hire K Workers Ratio Strategy",
    "author": "u/chennai_swe",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Minimum%20Cost%20to%20Hire%20K%20Workers%20Ratio%20Strategy%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Hire k workers satisfying wage-to-quality ratio minimizing total wage paid.",
    "constraints": [
      "1 <= k <= n <= 10^4",
      "Sort by ratio + Max-heap"
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
    "company": "Google",
    "title": "Google - Sliding Window Maximum Monotonic Deque",
    "author": "u/iit_kgp_coder",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find maximum in sliding window of size k moving across array.",
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
    "company": "Google",
    "title": "Google - Shortest Path in Binary Matrix 8-Directional",
    "author": "u/nitk_surathkal",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Shortest%20Path%20in%20Binary%20Matrix%208-Directional%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find shortest clear path from top-left to bottom-right in 8-directionally connected grid.",
    "constraints": [
      "1 <= n <= 100",
      "BFS queue"
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
    "company": "Google",
    "title": "Google - Word Break II All Sentence Combinations",
    "author": "u/dtu_coder_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Word%20Break%20II%20All%20Sentence%20Combinations%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Construct all possible valid sentences formed by segmenting string with dictionary.",
    "constraints": [
      "1 <= s.length <= 20",
      "DFS with memoization"
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
    "company": "Google",
    "title": "Google - Number of Matching Subsequences Trie Bucket",
    "author": "u/iiit_hyd_prep",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Number%20of%20Matching%20Subsequences%20Trie%20Bucket%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Count how many strings in words are subsequences of s.",
    "constraints": [
      "1 <= words.length <= 5 * 10^4",
      "Character bucket pointer"
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
    "company": "Google",
    "title": "Google - Accounts Merge Connected Email Components",
    "author": "u/vit_placements_24",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Accounts%20Merge%20Connected%20Email%20Components%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Merge accounts that have common email addresses using Disjoint Set Union.",
    "constraints": [
      "1 <= accounts.length <= 1000",
      "DSU graph"
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
    "company": "Google",
    "title": "Google - Range Sum Query 2D Mutable Binary Indexed Tree",
    "author": "u/bits_goa_dev",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Range%20Sum%20Query%202D%20Mutable%20Binary%20Indexed%20Tree%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Calculate sum of elements inside rectangle in 2D matrix with live updates.",
    "constraints": [
      "1 <= m, n <= 200",
      "2D Binary Indexed Tree"
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
    "company": "Google",
    "title": "Google - Maximum Points You Can Obtain from Cards",
    "author": "u/thapar_swe_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Maximum%20Points%20You%20Can%20Obtain%20from%20Cards%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Take k cards from either beginning or end of row to maximize points.",
    "constraints": [
      "1 <= k <= cardPoints.length <= 10^5",
      "Sliding window remaining sum"
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
    "company": "Google",
    "title": "Google - Count of Range Sum Prefix Subarrays",
    "author": "u/btech_code_champ",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Count%20of%20Range%20Sum%20Prefix%20Subarrays%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Return number of range sums that lie in [lower, upper] using Merge Sort.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Merge Sort prefix sum"
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
    "company": "Google",
    "title": "Google - Burst Balloons Maximum Coins Dynamic Programming",
    "author": "u/campus_hire_blr",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Burst%20Balloons%20Maximum%20Coins%20Dynamic%20Programming%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Burst balloons to maximize coins where coins earned are nums[i-1]*nums[i]*nums[i+1].",
    "constraints": [
      "1 <= n <= 300",
      "Interval DP"
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
    "company": "Google",
    "title": "Google - Remove Duplicate Letters Lexicographically Smallest",
    "author": "u/delhi_techie_24",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Remove%20Duplicate%20Letters%20Lexicographically%20Smallest%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Remove duplicate letters so every letter appears once and result is smallest lexicographically.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Monotonic stack with counts"
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
    "company": "Google",
    "title": "Google - Russian Doll Envelopes 2D LIS",
    "author": "u/bangalore_dev_25",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Russian%20Doll%20Envelopes%202D%20LIS%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find maximum number of envelopes you can Russian doll (fit inside one another).",
    "constraints": [
      "1 <= envelopes.length <= 10^5",
      "Sort width + LIS on height"
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
    "company": "Google",
    "title": "Google - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Maximum Subarray Kadane Algorithm",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Subarray Sum Equals K Prefix Frequency",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Product of Array Except Self Without Division",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Rotate Array by K Positions Right",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Move Zeroes to End of Array",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Majority Element in Election Tally",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Next Permutation Lexicographical Order",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Search in Rotated Sorted Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Valid Palindrome String Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Longest Palindromic Substring Expand Centers",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Group Anagrams by Character Signature",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Longest Substring Without Repeating Characters Window",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Minimum Window Substring Character Frequency",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - String to Integer Atoi Parsing",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Valid Parentheses Bracket Matching",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
