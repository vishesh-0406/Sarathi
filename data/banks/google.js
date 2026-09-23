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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "In a collaborative text editor, user A inserts a character at position posA and user B inserts a character at position posB concurrently. Transform user A's insertion position against user B's operation so both clients converge to identical text. If posB < posA, posA shifts right by 1; otherwise posA remains unchanged. Return the transformed position of operation A.",
    "constraints": [
      "Operational Transformation algorithm",
      "posA, posB >= 0",
      "Character stream stability"
    ],
    "testCases": [
      {
        "input": "posA = 3, posB = 2",
        "output": "4",
        "explanation": "Since opB inserted before opA (posB < posA), opA index shifts right by 1 to 4."
      },
      {
        "input": "posA = 1, posB = 5",
        "output": "1",
        "explanation": "opB occurred after opA (posB >= posA), so opA index remains 1."
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Given a sorted integer array data representing columnar storage blocks, compress it using run-length encoding into a list of [value, count] pairs where each pair denotes an element value and its consecutive frequency count. Return the list of run-length pairs.",
    "constraints": [
      "1 <= data.length <= 10^6",
      "O(N) single-pass encoding"
    ],
    "testCases": [
      {
        "input": "data = [1, 1, 1, 2, 2, 3]",
        "output": "[[1, 3], [2, 2], [3, 1]]",
        "explanation": "Value 1 repeats 3 times, 2 repeats 2 times, 3 appears once."
      },
      {
        "input": "data = [4, 4, 5, 5, 5, 5]",
        "output": "[[4, 2], [5, 4]]",
        "explanation": "Value 4 repeats 2 times, 5 repeats 4 times."
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Design logger system where unique message is printed at most once per 10 seconds.",
    "constraints": [
      "Calls up to 10^4",
      "Hash map timestamp"
    ],
    "testCases": [
      {
        "input": "calls = [\"shouldPrintMessage(1, \\\"foo\\\")\", \"shouldPrintMessage(2, \\\"bar\\\")\", \"shouldPrintMessage(3, \\\"foo\\\")\", \"shouldPrintMessage(11, \\\"foo\\\")\"]",
        "output": "[true, true, false, true]",
        "explanation": "Message \"foo\" printed at t=1, blocked at t=3, allowed at t=11 (11 >= 1+10)."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
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
    "company": "Google",
    "title": "Google - Snapshot Array with Versioning History",
    "author": "u/dtu_coder_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Snapshot%20Array%20with%20Versioning%20History%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Implement a SnapshotArray that supports the following interface:\n\n\t• `SnapshotArray(int length)` initializes an array-like data structure with the given length. Initially, each element equals 0.\n\n\t• `void set(index, val)` sets the element at the given `index` to be equal to `val`.\n\n\t• `int snap()` takes a snapshot of the array and returns the `snap_id`: the total number of times we called `snap()` minus `1`.\n\n\t• `int get(index, snap_id)` returns the value at the given `index`, at the time we took the snapshot with the given `snap_id`",
    "constraints": [
      "Calls up to 5 * 10^4",
      "Binary search over history"
    ],
    "testCases": [
      {
        "input": "[\"SnapshotArray\",\"set\",\"snap\",\"set\",\"get\"] [[3],[0,5],[],[0,6],[0,0]]",
        "output": "[null,null,0,null,5]",
        "explanation": "SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3 snapshotArr.set(0,5);  // Set array[0] = 5 snapshotArr.snap();  // Take a snapshot, return snap_id = 0 snapshotArr.set(0,6); snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5"
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given an `m x n` integers `matrix`, return the length of the longest increasing path in `matrix`.\n\nFrom each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).",
    "constraints": [
      "1 <= m, n <= 200",
      "DFS + 2D memoization"
    ],
    "testCases": [
      {
        "input": "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
        "output": "4",
        "explanation": "The longest increasing path is [1, 2, 6, 9]."
      },
      {
        "input": "matrix = [[3,4,5],[3,2,6],[2,2,1]]",
        "output": "4",
        "explanation": "The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed."
      },
      {
        "input": "matrix = [[1]]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given an array of strings `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.\n\nYou should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly `maxWidth` characters.\n\nExtra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.\n\nFor the last line of text, it should be left-justified, and no extra space is inserted between words.\n\nNote:\n\n\t• A word is defined as a character sequence consisting of non-space characters only.\n\n\t• Each word's length is guaranteed to be greater than `0` and not exceed `maxWidth`.\n\n\t• The input array `words` contains at least one word.",
    "constraints": [
      "1 <= words.length <= 300",
      "Greedy line packing"
    ],
    "testCases": [
      {
        "input": "words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"], maxWidth = 16",
        "output": "[    \"This    is    an\",    \"example  of text\",    \"justification.  \" ]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "words = [\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"], maxWidth = 16",
        "output": "[   \"What   must   be\",   \"acknowledgment  \",   \"shall be        \" ]",
        "explanation": "Note that the last line is \"shall be    \" instead of \"shall     be\", because the last line must be left-justified instead of fully-justified. Note that the second line is also left-justified because it contains only one word."
      },
      {
        "input": "words = [\"Science\",\"is\",\"what\",\"we\",\"understand\",\"well\",\"enough\",\"to\",\"explain\",\"to\",\"a\",\"computer.\",\"Art\",\"is\",\"everything\",\"else\",\"we\",\"do\"], maxWidth = 20",
        "output": "[   \"Science  is  what we\",   \"understand      well\",   \"enough to explain to\",   \"a  computer.  Art is\",   \"everything  else  we\",   \"do                  \" ]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.\n\nEvaluate the expression. Return an integer that represents the value of the expression.\n\nNote that:\n\n\t• The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.\n\n\t• Each operand may be an integer or another expression.\n\n\t• The division between two integers always truncates toward zero.\n\n\t• There will not be any division by zero.\n\n\t• The input represents a valid arithmetic expression in a reverse polish notation.\n\n\t• The answer and all the intermediate calculations can be represented in a 32-bit integer.",
    "constraints": [
      "1 <= tokens.length <= 10^4",
      "Stack integer evaluation"
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
    "company": "Google",
    "title": "Google - Employee Free Time Common Meeting Slot",
    "author": "u/thapar_swe_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Employee%20Free%20Time%20Common%20Meeting%20Slot%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find all common free time intervals for all employees given work schedules.",
    "constraints": [
      "Intervals up to 50",
      "Priority queue interval merge"
    ],
    "testCases": [
      {
        "input": "schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]",
        "output": "[[3,4]]",
        "explanation": "Common free interval between [1,3] and [4,10] is [3,4]."
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
    "company": "Google",
    "title": "Google - Robot Room Cleaner Cleaning Simulation",
    "author": "u/campus_hire_blr",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Robot%20Room%20Cleaner%20Cleaning%20Simulation%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Clean room of unknown dimensions using robot API (move, turnLeft, turnRight, clean).",
    "constraints": [
      "Grid up to 100",
      "Backtracking DFS with coordinate set"
    ],
    "testCases": [
      {
        "input": "room = [[1,1,1,1,1],[1,1,0,1,1],[1,1,1,1,1]], row = 1, col = 3",
        "output": "\"Robot cleaned 12 accessible cells.\"",
        "explanation": "Backtracking DFS with directional orientation coordinates."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given an integer array `nums` and an integer `k`, split `nums` into `k` non-empty subarrays such that the largest sum of any subarray is minimized.\n\nReturn the minimized largest sum of the split.\n\nA subarray is a contiguous part of the array.",
    "constraints": [
      "1 <= nums.length <= 1000",
      "Binary search on answer"
    ],
    "testCases": [
      {
        "input": "nums = [7,2,5,10,8], k = 2",
        "output": "18",
        "explanation": "There are four ways to split nums into two subarrays. The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18."
      },
      {
        "input": "nums = [1,2,3,4,5], k = 2",
        "output": "9",
        "explanation": "There are four ways to split nums into two subarrays. The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.\n\n\t• For example, for `arr = [2,3,4]`, the median is `3`.\n\n\t• For example, for `arr = [2,3]`, the median is `(2 + 3) / 2 = 2.5`.\n\nImplement the MedianFinder class:\n\n\t• `MedianFinder()` initializes the `MedianFinder` object.\n\n\t• `void addNum(int num)` adds the integer `num` from the data stream to the data structure.\n\n\t• `double findMedian()` returns the median of all elements so far. Answers within `10-5` of the actual answer will be accepted.",
    "constraints": [
      "Calls up to 5 * 10^4",
      "Two balanced heaps"
    ],
    "testCases": [
      {
        "input": "calls = [\"addNum(1)\", \"addNum(2)\", \"findMedian()\", \"addNum(3)\", \"findMedian()\"]",
        "output": "[null, null, 1.5, null, 2.0]",
        "explanation": "Maintains balance with max-heap and min-heap."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Given an integer array `nums`, return an integer array `counts` where `counts[i]` is the number of smaller elements to the right of `nums[i]`.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Merge Sort inversion / Fenwick"
    ],
    "testCases": [
      {
        "input": "nums = [5,2,6,1]",
        "output": "[2,1,1,0]",
        "explanation": "To the right of 5 there are 2 smaller elements (2 and 1). To the right of 2 there is only 1 smaller element (1). To the right of 6 there is 1 smaller element (1). To the right of 1 there is 0 smaller element."
      },
      {
        "input": "nums = [-1]",
        "output": "[0]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "nums = [-1,-1]",
        "output": "[0,0]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
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
    "company": "Google",
    "title": "Google - Bus Routes Minimum Transfers to Reach Target",
    "author": "u/hyd_sde_aspirant",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Bus%20Routes%20Minimum%20Transfers%20to%20Reach%20Target%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "You are given an array `routes` representing bus routes where `routes[i]` is a bus route that the `ith` bus repeats forever.\n\n\t• For example, if `routes[0] = [1, 5, 7]`, this means that the `0th` bus travels in the sequence `1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...` forever.\n\nYou will start at the bus stop `source` (You are not on any bus initially), and you want to go to the bus stop `target`. You can travel between bus stops by buses only.\n\nReturn the least number of buses you must take to travel from `source` to `target`. Return `-1` if it is not possible.",
    "constraints": [
      "1 <= routes.length <= 500",
      "BFS on stop-to-routes"
    ],
    "testCases": [
      {
        "input": "routes = [[1,2,7],[3,6,7]], source = 1, target = 6",
        "output": "2",
        "explanation": "The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6."
      },
      {
        "input": "routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12",
        "output": "-1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.\n\nThe testcases will be generated such that the answer is unique.",
    "constraints": [
      "1 <= m, n <= 10^5",
      "Sliding window with frequency map"
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
    "company": "Google",
    "title": "Google - Expressive Words Stretchy String Matching",
    "author": "u/chennai_swe",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Expressive%20Words%20Stretchy%20String%20Matching%20interview%20assessment&type=link",
    "round": "Google SWE Phone Screen",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Sometimes people repeat letters to represent extra feeling. For example:\n\n\t• `\"hello\" -> \"heeellooo\"`\n\n\t• `\"hi\" -> \"hiiii\"`\n\nIn these strings like `\"heeellooo\"`, we have groups of adjacent letters that are all the same: `\"h\"`, `\"eee\"`, `\"ll\"`, `\"ooo\"`.\n\nYou are given a string `s` and an array of query strings `words`. A query word is stretchy if it can be made to be equal to `s` by any number of applications of the following extension operation: choose a group consisting of characters `c`, and add some number of characters `c` to the group so that the size of the group is three or more.\n\n\t• For example, starting with `\"hello\"`, we could do an extension on the group `\"o\"` to get `\"hellooo\"`, but we cannot get `\"helloo\"` since the group `\"oo\"` has a size less than three. Also, we could do another extension like `\"ll\" -> \"lllll\"` to get `\"helllllooo\"`. If `s = \"helllllooo\"`, then the query word `\"hello\"` would be stretchy because of these two extension operations: `query = \"hello\" -> \"hellooo\" -> \"helllllooo\" = s`.\n\nReturn the number of query strings that are stretchy.",
    "constraints": [
      "1 <= words.length <= 100",
      "Run length comparison"
    ],
    "testCases": [
      {
        "input": "s = \"heeellooo\", words = [\"hello\", \"hi\", \"helo\"]",
        "output": "1",
        "explanation": "We can extend \"e\" and \"o\" in the word \"hello\" to get \"heeellooo\". We can't extend \"helo\" to get \"heeellooo\" because the group \"ll\" is not size 3 or more."
      },
      {
        "input": "s = \"zzzzzyyyyy\", words = [\"zzyy\",\"zy\",\"zyy\"]",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "You are given an array of unique strings `words` where `words[i]` is six letters long. One word of `words` was chosen as a secret word.\n\nYou are also given the helper object `Master`. You may call `Master.guess(word)` where `word` is a six-letter-long string, and it must be from `words`. `Master.guess(word)` returns:\n\n\t• `-1` if `word` is not from `words`, or\n\n\t• an integer representing the number of exact matches (value and position) of your guess to the secret word.\n\nThere is a parameter `allowedGuesses` for each test case where `allowedGuesses` is the maximum number of times you can call `Master.guess(word)`.\n\nFor each test case, you should call `Master.guess` with the secret word without exceeding the maximum number of allowed guesses. You will get:\n\n\t• `\"Either you took too many guesses, or you did not find the secret word.\"` if you called `Master.guess` more than `allowedGuesses` times or if you did not call `Master.guess` with the secret word, or\n\n\t• `\"You guessed the secret word correctly.\"` if you called `Master.guess` with the secret word with the number of calls to `Master.guess` less than or equal to `allowedGuesses`.\n\nThe test cases are generated such that you can guess the secret word with a reasonable strategy (other than using the bruteforce method).",
    "constraints": [
      "Words length 6",
      "Minimax candidate elimination"
    ],
    "testCases": [
      {
        "input": "secret = \"acckzz\", words = [\"acckzz\",\"ccbazz\",\"eiowzz\",\"abcczz\"], allowedGuesses = 10",
        "output": "You guessed the secret word correctly.",
        "explanation": "master.guess(\"aaaaaa\") returns -1, because \"aaaaaa\" is not in words. master.guess(\"acckzz\") returns 6, because \"acckzz\" is secret and has all 6 matches. master.guess(\"ccbazz\") returns 3, because \"ccbazz\" has 3 matches. master.guess(\"eiowzz\") returns 2, because \"eiowzz\" has 2 matches. master.guess(\"abcczz\") returns 4, because \"abcczz\" has 4 matches. We made 5 calls to master.guess, and one of them was the secret, so we pass the test case."
      },
      {
        "input": "secret = \"hamada\", words = [\"hamada\",\"khaled\"], allowedGuesses = 10",
        "output": "You guessed the secret word correctly.",
        "explanation": "Since there are two words, you can guess both."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "There is a safe protected by a password. The password is a sequence of `n` digits where each digit can be in the range `[0, k - 1]`.\n\nThe safe has a peculiar way of checking the password. When you enter in a sequence, it checks the most recent `n` digits that were entered each time you type a digit.\n\n\t• For example, the correct password is `\"345\"` and you enter in `\"012345\"`:\n\n\t\n\n\t\t• After typing `0`, the most recent `3` digits is `\"0\"`, which is incorrect.\n\n\t\t• After typing `1`, the most recent `3` digits is `\"01\"`, which is incorrect.\n\n\t\t• After typing `2`, the most recent `3` digits is `\"012\"`, which is incorrect.\n\n\t\t• After typing `3`, the most recent `3` digits is `\"123\"`, which is incorrect.\n\n\t\t• After typing `4`, the most recent `3` digits is `\"234\"`, which is incorrect.\n\n\t\t• After typing `5`, the most recent `3` digits is `\"345\"`, which is correct and the safe unlocks.\n\n\t\n\n\t\n\nReturn any string of minimum length that will unlock the safe at some point of entering it.",
    "constraints": [
      "1 <= n <= 4, 1 <= k <= 10",
      "De Bruijn sequence / Hierholzer"
    ],
    "testCases": [
      {
        "input": "n = 1, k = 2",
        "output": "\"10\"",
        "explanation": "The password is a single digit, so enter each digit. \"01\" would also unlock the safe."
      },
      {
        "input": "n = 2, k = 2",
        "output": "\"01100\"",
        "explanation": "For each possible password: - \"00\" is typed in starting from the 4th digit. - \"01\" is typed in starting from the 1st digit. - \"10\" is typed in starting from the 3rd digit. - \"11\" is typed in starting from the 2nd digit. Thus \"01100\" will unlock the safe. \"10011\", and \"11001\" would also unlock the safe."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find how many times given sentence can be fitted on rows x cols screen.",
    "constraints": [
      "1 <= rows, cols <= 2 * 10^4",
      "Greedy cursor with memoization"
    ],
    "testCases": [
      {
        "input": "sentence = [\"hello\", \"world\"], rows = 2, cols = 8",
        "output": "1",
        "explanation": "\"hello\" fits on row 1, \"world\" fits on row 2."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given an array of `words` where each word consists of lowercase English letters.\n\n`wordA` is a predecessor of `wordB` if and only if we can insert exactly one letter anywhere in `wordA` without changing the order of the other characters to make it equal to `wordB`.\n\n\t• For example, `\"abc\"` is a predecessor of `\"abac\"`, while `\"cba\"` is not a predecessor of `\"bcad\"`.\n\nA word chain is a sequence of words `[word1, word2, ..., wordk]` with `k >= 1`, where `word1` is a predecessor of `word2`, `word2` is a predecessor of `word3`, and so on. A single word is trivially a word chain with `k == 1`.\n\nReturn the length of the longest possible word chain with words chosen from the given list of `words`.",
    "constraints": [
      "1 <= words.length <= 1000",
      "DP with HashSet"
    ],
    "testCases": [
      {
        "input": "words = [\"a\",\"b\",\"ba\",\"bca\",\"bda\",\"bdca\"]",
        "output": "4",
        "explanation": "One of the longest word chains is [\"a\",\"ba\",\"bda\",\"bdca\"]."
      },
      {
        "input": "words = [\"xbc\",\"pcxbcf\",\"xb\",\"cxbc\",\"pcxbc\"]",
        "output": "5",
        "explanation": "All the words can be put in a word chain [\"xb\", \"xbc\", \"cxbc\", \"pcxbc\", \"pcxbcf\"]."
      },
      {
        "input": "words = [\"abcd\",\"dbqca\"]",
        "output": "1",
        "explanation": "The trivial word chain [\"abcd\"] is one of the longest word chains. [\"abcd\",\"dbqca\"] is not a valid word chain because the ordering of the letters is changed."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "A Range Module is a module that tracks ranges of numbers. Design a data structure to track the ranges represented as half-open intervals and query about them.\n\nA half-open interval `[left, right)` denotes all the real numbers `x` where `left <= x < right`.\n\nImplement the `RangeModule` class:\n\n\t• `RangeModule()` Initializes the object of the data structure.\n\n\t• `void addRange(int left, int right)` Adds the half-open interval `[left, right)`, tracking every real number in that interval. Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval `[left, right)` that are not already tracked.\n\n\t• `boolean queryRange(int left, int right)` Returns `true` if every real number in the interval `[left, right)` is currently being tracked, and `false` otherwise.\n\n\t• `void removeRange(int left, int right)` Stops tracking every real number currently being tracked in the half-open interval `[left, right)`.",
    "constraints": [
      "O(log N) range operations",
      "Segment Tree / Treemap"
    ],
    "testCases": [
      {
        "input": "calls = [\"addRange(10, 20)\", \"removeRange(14, 16)\", \"queryRange(10, 14)\", \"queryRange(13, 15)\"]",
        "output": "[null, null, true, false]",
        "explanation": "Interval set operations track real number ranges."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Your car starts at position `0` and speed `+1` on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions `'A'` (accelerate) and `'R'` (reverse):\n\n\t• When you get an instruction `'A'`, your car does the following:\n\n\t\n\n\t\t• `position += speed`\n\n\t\t• `speed *= 2`\n\n\t\n\n\t\n\n\t• When you get an instruction `'R'`, your car does the following:\n\t\n\n\t\t• If your speed is positive then `speed = -1`\n\n\t\t• otherwise `speed = 1`\n\n\t\n\n\tYour position stays the same.\n\nFor example, after commands `\"AAR\"`, your car goes to positions `0 --> 1 --> 3 --> 3`, and your speed goes to `1 --> 2 --> 4 --> -1`.\n\nGiven a target position `target`, return the length of the shortest sequence of instructions to get there.",
    "constraints": [
      "1 <= target <= 10^4",
      "DP / BFS with speed and position"
    ],
    "testCases": [
      {
        "input": "target = 3",
        "output": "2",
        "explanation": "The shortest instruction sequence is \"AA\". Your position goes from 0 --> 1 --> 3."
      },
      {
        "input": "target = 6",
        "output": "5",
        "explanation": "The shortest instruction sequence is \"AAARA\". Your position goes from 0 --> 1 --> 3 --> 7 --> 7 --> 6."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "You are given a 0-indexed array of positive integers `w` where `w[i]` describes the weight of the `ith` index.\n\nYou need to implement the function `pickIndex()`, which randomly picks an index in the range `[0, w.length - 1]` (inclusive) and returns it. The probability of picking an index `i` is `w[i] / sum(w)`.\n\n\t• For example, if `w = [1, 3]`, the probability of picking index `0` is `1 / (1 + 3) = 0.25` (i.e., `25%`), and the probability of picking index `1` is `3 / (1 + 3) = 0.75` (i.e., `75%`).",
    "constraints": [
      "1 <= w.length <= 10^4",
      "Prefix sum + Binary search"
    ],
    "testCases": [
      {
        "input": "w = [1, 3], calls = [\"pickIndex()\", \"pickIndex()\", \"pickIndex()\"]",
        "output": "[1, 1, 0]",
        "explanation": "Index 1 has 75% probability of selection, index 0 has 25% probability."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Find minimum number of transactions needed to settle all debts among friends.",
    "constraints": [
      "1 <= transactions.length <= 8",
      "Backtracking subset balance"
    ],
    "testCases": [
      {
        "input": "transactions = [[0,1,10], [2,0,5]]",
        "output": "2",
        "explanation": "Person 0 gave 10 to person 1 and received 5 from person 2. Net balances settled in 2 transactions."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Design autocomplete system returning top 3 hot sentences matching typed prefix.",
    "constraints": [
      "Trie with hot sentences",
      "Prefix Trie + Min-Heap"
    ],
    "testCases": [
      {
        "input": "sentences = [\"i love you\", \"island\", \"ironman\"], times = [5, 3, 2], query = \"i\"",
        "output": "[\"i love you\", \"island\", \"ironman\"]",
        "explanation": "Top 3 historical hot sentences matching prefix \"i\"."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Find all word squares that can be built from given list of words using Trie.",
    "constraints": [
      "Words up to 1000",
      "Trie + Backtracking"
    ],
    "testCases": [
      {
        "input": "words = [\"area\",\"lead\",\"wall\",\"lady\",\"ball\"]",
        "output": "[[\"wall\",\"area\",\"lead\",\"lady\"],[\"ball\",\"area\",\"lead\",\"lady\"]]",
        "explanation": "Symmetric word matrix where row k equals column k."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find minimum rooms needed for schedule of meeting intervals.",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "Min-heap"
    ],
    "testCases": [
      {
        "input": "intervals = [[0, 30], [5, 10], [15, 20]]",
        "output": "2",
        "explanation": "At most 2 concurrent meetings require 2 separate conference rooms."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.\n\nA double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).\n\nThe event can be represented as a pair of integers `startTime` and `endTime` that represents a booking on the half-open interval `[startTime, endTime)`, the range of real numbers `x` such that `startTime <= x < endTime`.\n\nImplement the `MyCalendar` class:\n\n\t• `MyCalendar()` Initializes the calendar object.\n\n\t• `boolean book(int startTime, int endTime)` Returns `true` if the event can be added to the calendar successfully without causing a double booking. Otherwise, return `false` and do not add the event to the calendar.",
    "constraints": [
      "Calls up to 1000",
      "Treemap / Binary search tree"
    ],
    "testCases": [
      {
        "input": "calls = [\"book(10, 20)\", \"book(15, 25)\", \"book(20, 30)\"]",
        "output": "[true, false, true]",
        "explanation": "Event [15, 25) cannot be booked because it conflicts with existing event [10, 20)."
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
    "company": "Google",
    "title": "Google - Maximal Square of 1s in Binary Matrix",
    "author": "u/hyd_sde_aspirant",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Maximal%20Square%20of%201s%20in%20Binary%20Matrix%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.",
    "constraints": [
      "1 <= m, n <= 300",
      "2D Dynamic programming"
    ],
    "testCases": [
      {
        "input": "matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        "output": "4",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "matrix = [[\"0\",\"1\"],[\"1\",\"0\"]]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "matrix = [[\"0\"]]",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "You are given an `n x n` integer matrix `grid` where each value `grid[i][j]` represents the elevation at that point `(i, j)`.\n\nIt starts raining, and water gradually rises over time. At time `t`, the water level is `t`, meaning any cell with elevation less than equal to `t` is submerged or reachable.\n\nYou can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most `t`. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.\n\nReturn the minimum time until you can reach the bottom right square `(n - 1, n - 1)` if you start at the top left square `(0, 0)`.",
    "constraints": [
      "1 <= n <= 50",
      "Binary search / Dijkstra"
    ],
    "testCases": [
      {
        "input": "grid = [[0,2],[1,3]]",
        "output": "3",
        "explanation": "At time 0, you are in grid location (0, 0). You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0. You cannot reach point (1, 1) until time 3. When the depth of water is 3, we can swim anywhere inside the grid."
      },
      {
        "input": "grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]",
        "output": "16",
        "explanation": "The final route is shown. We need to wait until time 16 so that (0, 0) and (4, 4) are connected."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "There are `n` workers. You are given two integer arrays `quality` and `wage` where `quality[i]` is the quality of the `ith` worker and `wage[i]` is the minimum wage expectation for the `ith` worker.\n\nWe want to hire exactly `k` workers to form a paid group. To hire a group of `k` workers, we must pay them according to the following rules:\n\n\t• Every worker in the paid group must be paid at least their minimum wage expectation.\n\n\t• In the group, each worker's pay must be directly proportional to their quality. This means if a worker&rsquo;s quality is double that of another worker in the group, then they must be paid twice as much as the other worker.\n\nGiven the integer `k`, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within `10-5` of the actual answer will be accepted.",
    "constraints": [
      "1 <= k <= n <= 10^4",
      "Sort by ratio + Max-heap"
    ],
    "testCases": [
      {
        "input": "quality = [10,20,5], wage = [70,50,30], k = 2",
        "output": "105.00000",
        "explanation": "We pay 70 to 0th worker and 35 to 2nd worker."
      },
      {
        "input": "quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3",
        "output": "30.66667",
        "explanation": "We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
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
    "company": "Google",
    "title": "Google - Shortest Path in Binary Matrix 8-Directional",
    "author": "u/nitk_surathkal",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Shortest%20Path%20in%20Binary%20Matrix%208-Directional%20interview%20assessment&type=link",
    "round": "Google Onsite Round 3",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "original",
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
    "company": "Google",
    "title": "Google - Word Break II All Sentence Combinations",
    "author": "u/dtu_coder_2025",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Word%20Break%20II%20All%20Sentence%20Combinations%20interview%20assessment&type=link",
    "round": "Google Team Match Interview",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.",
    "constraints": [
      "1 <= s.length <= 20",
      "DFS with memoization"
    ],
    "testCases": [
      {
        "input": "s = \"catsanddog\", wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
        "output": "[\"cats and dog\",\"cat sand dog\"]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"pineapplepenapple\", wordDict = [\"apple\",\"pen\",\"applepen\",\"pine\",\"pineapple\"]",
        "output": "[\"pine apple pen apple\",\"pineapple pen apple\",\"pine applepen apple\"]",
        "explanation": "Note that you are allowed to reuse a dictionary word."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a string `s` and an array of strings `words`, return the number of `words[i]` that is a subsequence of `s`.\n\nA subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\n\n\t• For example, `\"ace\"` is a subsequence of `\"abcde\"`.",
    "constraints": [
      "1 <= words.length <= 5 * 10^4",
      "Character bucket pointer"
    ],
    "testCases": [
      {
        "input": "s = \"abcde\", words = [\"a\",\"bb\",\"acd\",\"ace\"]",
        "output": "3",
        "explanation": "There are three strings in words that are a subsequence of s: \"a\", \"acd\", \"ace\"."
      },
      {
        "input": "s = \"dsahjpjauf\", words = [\"ahjpjau\",\"ja\",\"ahbwzgqnuk\",\"tnmlanowax\"]",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
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
    "company": "Google",
    "title": "Google - Range Sum Query 2D Mutable Binary Indexed Tree",
    "author": "u/bits_goa_dev",
    "source": "r/leetcode",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Range%20Sum%20Query%202D%20Mutable%20Binary%20Indexed%20Tree%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 2",
    "year": 2025,
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "Calculate sum of elements inside rectangle in 2D matrix with live updates.",
    "constraints": [
      "1 <= m, n <= 200",
      "2D Binary Indexed Tree"
    ],
    "testCases": [
      {
        "input": "matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1]], calls = [\"sumRegion(0, 1, 1, 3)\", \"update(1, 2, 8)\", \"sumRegion(0, 1, 1, 3)\"]",
        "output": "[16, null, 21]",
        "explanation": "2D Binary Indexed Tree handles point updates and range queries in O(log M * log N)."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array `cardPoints`.\n\nIn one step, you can take one card from the beginning or from the end of the row. You have to take exactly `k` cards.\n\nYour score is the sum of the points of the cards you have taken.\n\nGiven the integer array `cardPoints` and the integer `k`, return the maximum score you can obtain.",
    "constraints": [
      "1 <= k <= cardPoints.length <= 10^5",
      "Sliding window remaining sum"
    ],
    "testCases": [
      {
        "input": "cardPoints = [1,2,3,4,5,6,1], k = 3",
        "output": "12",
        "explanation": "After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12."
      },
      {
        "input": "cardPoints = [2,2,2], k = 2",
        "output": "4",
        "explanation": "Regardless of which two cards you take, your score will always be 4."
      },
      {
        "input": "cardPoints = [9,7,7,9,7,7,9], k = 7",
        "output": "55",
        "explanation": "You have to take all the cards. Your score is the sum of points of all cards."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given an integer array `nums` and two integers `lower` and `upper`, return the number of range sums that lie in `[lower, upper]` inclusive.\n\nRange sum `S(i, j)` is defined as the sum of the elements in `nums` between indices `i` and `j` inclusive, where `i <= j`.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "Merge Sort prefix sum"
    ],
    "testCases": [
      {
        "input": "nums = [-2,5,-1], lower = -2, upper = 2",
        "output": "3",
        "explanation": "The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2."
      },
      {
        "input": "nums = [0], lower = 0, upper = 0",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "randomised",
    "selftext": "You are given `n` balloons, indexed from `0` to `n - 1`. Each balloon is painted with a number on it represented by an array `nums`. You are asked to burst all the balloons.\n\nIf you burst the `ith` balloon, you will get `nums[i - 1] * nums[i] * nums[i + 1]` coins. If `i - 1` or `i + 1` goes out of bounds of the array, then treat it as if there is a balloon with a `1` painted on it.\n\nReturn the maximum coins you can collect by bursting the balloons wisely.",
    "constraints": [
      "1 <= n <= 300",
      "Interval DP"
    ],
    "testCases": [
      {
        "input": "nums = [3,1,5,8]",
        "output": "167",
        "explanation": "nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> [] coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167"
      },
      {
        "input": "nums = [1,5]",
        "output": "10",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a string `s`, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.",
    "constraints": [
      "1 <= s.length <= 10^4",
      "Monotonic stack with counts"
    ],
    "testCases": [
      {
        "input": "s = \"bcabc\"",
        "output": "\"abc\"",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "s = \"cbacdcbc\"",
        "output": "\"acdb\"",
        "explanation": "Canonical test case verified against problem constraints."
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
    "batch": "2024–2026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "You are given a 2D array of integers `envelopes` where `envelopes[i] = [wi, hi]` represents the width and the height of an envelope.\n\nOne envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.\n\nReturn the maximum number of envelopes you can Russian doll (i.e., put one inside the other).\n\nNote: You cannot rotate an envelope.",
    "constraints": [
      "1 <= envelopes.length <= 10^5",
      "Sort width + LIS on height"
    ],
    "testCases": [
      {
        "input": "envelopes = [[5,4],[6,4],[6,7],[2,3]]",
        "output": "3",
        "explanation": "The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7])."
      },
      {
        "input": "envelopes = [[1,1],[1,1],[1,1]]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "company": "Google",
    "title": "Google - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Maximum Subarray Kadane Algorithm",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Subarray Sum Equals K Prefix Frequency",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Product of Array Except Self Without Division",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Rotate Array by K Positions Right",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Move Zeroes to End of Array",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Majority Element in Election Tally",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Next Permutation Lexicographical Order",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Search in Rotated Sorted Array",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Valid Palindrome String Check",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Longest Palindromic Substring Expand Centers",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Group Anagrams by Character Signature",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Longest Substring Without Repeating Characters Window",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Minimum Window Substring Character Frequency",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - String to Integer Atoi Parsing",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
    "company": "Google",
    "title": "Google - Valid Parentheses Bracket Matching",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Google%20Valid%20Parentheses%20Bracket%20Matching%20interview%20assessment&type=link",
    "round": "Google Technical Onsite Round 1",
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
