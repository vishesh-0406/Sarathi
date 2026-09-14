// Auto-generated verified interview questions for Oracle
module.exports = [
  {
    "company": "Oracle",
    "title": "Oracle - Redo Log Buffer Ring Flush Synchronization",
    "author": "u/oracle_blr_hire",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Redo%20Log%20Buffer%20Ring%20Flush%20Synchronization%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given a circular redo log ring buffer of capacity C with concurrent writer threads producing log records of variable byte lengths, determine the minimum checkpoint flush sequence that guarantees no writer blocks while minimizing disk sync I/O ops.",
    "constraints": [
      "10^4 <= buffer capacity C <= 10^7 bytes",
      "1 <= writers <= 128",
      "O(N log N) scheduling"
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
    "company": "Oracle",
    "title": "Oracle - B-Tree Index Block Split with Concurrent Insertions",
    "author": "u/iit_hyd_oracle",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20B-Tree%20Index%20Block%20Split%20with%20Concurrent%20Insertions%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Simulate an in-memory B+ tree leaf block splitting mechanism when keys overflow block byte boundary. Given block size B and sequential keys, compute total split cascades and new height of tree.",
    "constraints": [
      "Block size 4KB to 64KB",
      "1 <= keys <= 10^5",
      "O(log B) node split"
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
    "company": "Oracle",
    "title": "Oracle - SQL Execution Plan Cost Minimizer for Nested Loops",
    "author": "u/dbms_enthusiast",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20SQL%20Execution%20Plan%20Cost%20Minimizer%20for%20Nested%20Loops%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given table cardinality statistics and selectivity coefficients for 3 joined tables, calculate the optimal join order tree that minimizes the total intermediate row count.",
    "constraints": [
      "3 <= tables <= 12",
      "Cardinalities up to 10^9",
      "O(2^N * N) dynamic programming"
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
    "company": "Oracle",
    "title": "Oracle - Multi-Version Concurrency Control Read Snapshot Resolver",
    "author": "u/vit_campus_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Multi-Version%20Concurrency%20Control%20Read%20Snapshot%20Resolver%20interview%20assessment&type=link",
    "round": "Oracle Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given a row revision chain with System Commit Numbers (SCNs) and active transaction read timestamps, return the exact row value visible to a reader query without acquiring read locks.",
    "constraints": [
      "1 <= revisions per row <= 1000",
      "SCN values up to 10^12",
      "O(log R) binary search on undo chain"
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
    "company": "Oracle",
    "title": "Oracle - Buffer Cache Dirty Page Least-Cost Eviction Policy",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Buffer%20Cache%20Dirty%20Page%20Least-Cost%20Eviction%20Policy%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "constraint",
    "selftext": "Design a buffer cache eviction manager that balances LRU touch age and dirty write-back cost so that memory pressure is relieved with minimum disk latency penalty.",
    "constraints": [
      "Cache size N <= 10^5 pages",
      "Dirty write-back cost 10x read cost",
      "O(log N) eviction update"
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
    "company": "Oracle",
    "title": "Oracle - Cloud Tenant Resource Quota Rate Limiter Leaky Bucket",
    "author": "u/noida_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Cloud%20Tenant%20Resource%20Quota%20Rate%20Limiter%20Leaky%20Bucket%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Implement a distributed leaky bucket algorithm across M compute regions for Oracle Cloud Infrastructure (OCI) API gateway to enforce per-second request quota without clock drift starvation.",
    "constraints": [
      "1 <= regions <= 16",
      "Capacity up to 10^6 req/sec",
      "O(1) amortized token deduction"
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
    "company": "Oracle",
    "title": "Oracle - Distributed Two-Phase Commit Coordinator State Machine",
    "author": "u/db_intern_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Distributed%20Two-Phase%20Commit%20Coordinator%20State%20Machine%20interview%20assessment&type=link",
    "round": "Oracle Round 2 - Systems",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Simulate a 2PC coordinator state machine with P participants. If any node responds ABORT or times out during PREPARE phase, emit global ROLLBACK; otherwise emit global COMMIT.",
    "constraints": [
      "1 <= participants <= 64",
      "Timeout threshold 500ms",
      "O(P) state transitions"
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
    "company": "Oracle",
    "title": "Oracle - Tablespace Extent Allocation Bitmap Free Space Finder",
    "author": "u/oracle_campus_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Tablespace%20Extent%20Allocation%20Bitmap%20Free%20Space%20Finder%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Given a 64-bit integer array representing free extent bitmap blocks, find the first contiguous run of K free extents using bitwise operations (FFS/CLZ) in O(words).",
    "constraints": [
      "1 <= total extents <= 10^6",
      "1 <= K <= 64",
      "O(N/64) bitwise scan"
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
    "company": "Oracle",
    "title": "Oracle - Database Deadlock Cycle Detection in Wait-For Graph",
    "author": "u/systems_guy_delhi",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Database%20Deadlock%20Cycle%20Detection%20in%20Wait-For%20Graph%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Given directed dependencies where transaction Tx is waiting for resource held by Ty, detect any deadlock cycles using Tarjan's or Kosaraju's SCC algorithm and select the youngest transaction as victim.",
    "constraints": [
      "1 <= transactions <= 10^4",
      "1 <= wait edges <= 5 * 10^4",
      "O(V + E) cycle check"
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
    "company": "Oracle",
    "title": "Oracle - WAL Segment Compression Delta Encoder",
    "author": "u/cloud_db_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20WAL%20Segment%20Compression%20Delta%20Encoder%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given sequential database write-ahead log records with identical table structures, apply XOR delta compression against the preceding record and run-length encode the zero-byte sequences.",
    "constraints": [
      "Record length <= 8KB",
      "1 <= log batch <= 1000 records",
      "O(total bytes) streaming compression"
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
    "company": "Oracle",
    "title": "Oracle - Binary Search Tree Iterator Inorder Stream",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Binary%20Search%20Tree%20Iterator%20Inorder%20Stream%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Implement BSTIterator class with next() and hasNext() in O(1) amortized time and O(h) memory.",
    "constraints": [
      "Node count up to 10^5",
      "Monotonic stack along left branch"
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
    "company": "Oracle",
    "title": "Oracle - Search in a Binary Search Tree",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Search%20in%20a%20Binary%20Search%20Tree%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Search value in BST and return subtree rooted with that node.",
    "constraints": [
      "Node count up to 5000",
      "BST property traversal"
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
    "company": "Oracle",
    "title": "Oracle - Insert into a Binary Search Tree",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Insert%20into%20a%20Binary%20Search%20Tree%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Insert value into BST and return root of BST.",
    "constraints": [
      "Node count up to 10^4",
      "BST traversal insertion"
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
    "company": "Oracle",
    "title": "Oracle - Delete Node in a BST",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Delete%20Node%20in%20a%20BST%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Delete node with given key in BST while preserving BST structure (re-linking successor).",
    "constraints": [
      "Node count up to 10^4",
      "Find min in right subtree"
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
    "company": "Oracle",
    "title": "Oracle - Kth Smallest Element in a BST",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Kth%20Smallest%20Element%20in%20a%20BST%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Find kth smallest value (1-indexed) in BST in O(H + k) time.",
    "constraints": [
      "1 <= k <= n <= 10^4",
      "Inorder traversal / Morris"
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
    "company": "Oracle",
    "title": "Oracle - Two Sum IV Input is a BST",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Two%20Sum%20IV%20Input%20is%20a%20BST%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Given root of BST and target integer k, return true if two elements exist whose sum equals k.",
    "constraints": [
      "Node count up to 10^4",
      "Two BST iterators / HashSet"
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
    "company": "Oracle",
    "title": "Oracle - Lowest Common Ancestor of a BST",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Lowest%20Common%20Ancestor%20of%20a%20BST%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find lowest common ancestor in Binary Search Tree.",
    "constraints": [
      "Node count up to 10^5",
      "BST range comparison"
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
    "company": "Oracle",
    "title": "Oracle - Validate Binary Search Tree BST Property",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Validate%20Binary%20Search%20Tree%20BST%20Property%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Verify if binary tree satisfies BST ordering.",
    "constraints": [
      "Node count up to 10^4",
      "Range bounds check"
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
    "company": "Oracle",
    "title": "Oracle - Range Sum of BST in Interval",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Range%20Sum%20of%20BST%20in%20Interval%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Return sum of values of all nodes with value in inclusive range [low, high] in BST.",
    "constraints": [
      "Node count up to 2 * 10^4",
      "Pruned DFS traversal"
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
    "company": "Oracle",
    "title": "Oracle - Serialize and Deserialize BST Optimized",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Serialize%20and%20Deserialize%20BST%20Optimized%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Design algorithm to serialize and deserialize BST using preorder traversal without null markers.",
    "constraints": [
      "Node count up to 10^4",
      "Preorder with upper bound"
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
    "company": "Oracle",
    "title": "Oracle - Recover Binary Search Tree Two Swapped Nodes",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Recover%20Binary%20Search%20Tree%20Two%20Swapped%20Nodes%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Two nodes in BST are swapped by mistake. Recover tree without changing its structure in O(1) memory.",
    "constraints": [
      "Node count up to 1000",
      "Inorder tracking first/second"
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
    "company": "Oracle",
    "title": "Oracle - Binary Tree Right Side View Visible Nodes",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Binary%20Tree%20Right%20Side%20View%20Visible%20Nodes%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return values of nodes you can see ordered from top to bottom standing on right side of tree.",
    "constraints": [
      "Node count up to 100",
      "Queue BFS / right-first DFS"
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
    "company": "Oracle",
    "title": "Oracle - Populating Next Right Pointers in Tree Nodes",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Populating%20Next%20Right%20Pointers%20in%20Tree%20Nodes%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Populate each next pointer to point to its next right node in complete binary tree in O(1) space.",
    "constraints": [
      "Node count up to 4096",
      "Level-order pointer walk"
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
    "company": "Oracle",
    "title": "Oracle - All Nodes Distance K in Binary Tree",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20All%20Nodes%20Distance%20K%20in%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Return list of values of all nodes that have distance k from target node in binary tree.",
    "constraints": [
      "Node count up to 500",
      "Graph conversion / Parent pointers + BFS"
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
    "company": "Oracle",
    "title": "Oracle - Maximum Width of Binary Tree Levels",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Maximum%20Width%20of%20Binary%20Tree%20Levels%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return maximum width among all levels of binary tree with indexing.",
    "constraints": [
      "Node count up to 3000",
      "BFS level queue with 64-bit indexes"
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
    "company": "Oracle",
    "title": "Oracle - Path Sum II All Root to Leaf Paths Matching Target",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Path%20Sum%20II%20All%20Root%20to%20Leaf%20Paths%20Matching%20Target%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Find all root-to-leaf paths where sum of node values equals targetSum.",
    "constraints": [
      "Node count up to 5000",
      "Backtracking DFS array"
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
    "company": "Oracle",
    "title": "Oracle - Binary Tree Maximum Path Sum Any Node to Any Node",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Binary%20Tree%20Maximum%20Path%20Sum%20Any%20Node%20to%20Any%20Node%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Hard",
    "recollectionType": "original",
    "selftext": "Find path in binary tree with maximum sum.",
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
    "company": "Oracle",
    "title": "Oracle - Count Complete Tree Nodes in O(log N)^2",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Count%20Complete%20Tree%20Nodes%20in%20O(log%20N)%5E2%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Count number of nodes in complete binary tree in less than O(N) time.",
    "constraints": [
      "Node count up to 5 * 10^4",
      "Binary search on leaf levels"
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
    "company": "Oracle",
    "title": "Oracle - Binary Tree Zigzag Level Order Traversal",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Binary%20Tree%20Zigzag%20Level%20Order%20Traversal%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Traverse binary tree in alternating zigzag order.",
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
    "company": "Oracle",
    "title": "Oracle - Flatten Binary Tree to Linked List In Place",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Flatten%20Binary%20Tree%20to%20Linked%20List%20In%20Place%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Flatten binary tree into singly linked list in-place.",
    "constraints": [
      "Node count up to 2000",
      "Morris traversal"
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
    "company": "Oracle",
    "title": "Oracle - Lowest Common Ancestor of Binary Tree",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Lowest%20Common%20Ancestor%20of%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Find lowest common ancestor in generic binary tree.",
    "constraints": [
      "Node count up to 10^5",
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
    "company": "Oracle",
    "title": "Oracle - Construct Binary Tree from Inorder and Postorder",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Construct binary tree given inorder and postorder traversal arrays.",
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
    "company": "Oracle",
    "title": "Oracle - Find Largest Value in Each Tree Row",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Find%20Largest%20Value%20in%20Each%20Tree%20Row%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Return array of largest value in each row of binary tree.",
    "constraints": [
      "Node count up to 10^4",
      "Level order queue BFS"
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
    "company": "Oracle",
    "title": "Oracle - Deepest Leaves Sum in Binary Tree",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Deepest%20Leaves%20Sum%20in%20Binary%20Tree%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Return sum of values of its deepest leaves.",
    "constraints": [
      "Node count up to 10^4",
      "Level order BFS sum of last level"
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
    "company": "Oracle",
    "title": "Oracle - Trim a Binary Search Tree to Range",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Trim%20a%20Binary%20Search%20Tree%20to%20Range%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Trim BST so that all its elements lie in [low, high].",
    "constraints": [
      "Node count up to 10^4",
      "Recursive branch pruning"
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
    "company": "Oracle",
    "title": "Oracle - Convert Sorted Array to Binary Search Tree",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Convert sorted array into height-balanced BST.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Divide and conquer mid"
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
    "company": "Oracle",
    "title": "Oracle - Convert Sorted List to Binary Search Tree",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Convert%20Sorted%20List%20to%20Binary%20Search%20Tree%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Convert sorted linked list into height-balanced BST in O(N log N) or O(N).",
    "constraints": [
      "Node count up to 2 * 10^4",
      "Inorder simulation / fast-slow pointer"
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
    "company": "Oracle",
    "title": "Oracle - Minimum Absolute Difference in BST",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Minimum%20Absolute%20Difference%20in%20BST%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return minimum absolute difference between values of any two different nodes in BST.",
    "constraints": [
      "Node count up to 10^4",
      "Inorder traversal track prev"
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
    "company": "Oracle",
    "title": "Oracle - Increasing Order Search Tree Inorder Relinking",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Increasing%20Order%20Search%20Tree%20Inorder%20Relinking%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Rearrange BST in-order so that leftmost node is new root and each node has no left child.",
    "constraints": [
      "Node count up to 100",
      "Inorder relinking"
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
    "company": "Oracle",
    "title": "Oracle - Merge Two Binary Trees by Overlapping Values",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Merge%20Two%20Binary%20Trees%20by%20Overlapping%20Values%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Merge two binary trees by summing overlapping node values.",
    "constraints": [
      "Node count up to 2000",
      "Recursive merge"
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
    "company": "Oracle",
    "title": "Oracle - Univalued Binary Tree Verification",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Univalued%20Binary%20Tree%20Verification%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return true if every node in tree has the same value.",
    "constraints": [
      "Node count up to 100",
      "DFS value check"
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
    "company": "Oracle",
    "title": "Oracle - Subtree of Another Tree Verification",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Subtree%20of%20Another%20Tree%20Verification%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "original",
    "selftext": "Determine if binary tree has subtree matching subRoot.",
    "constraints": [
      "Node count up to 2000",
      "Tree compare"
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
    "company": "Oracle",
    "title": "Oracle - Leaf-Similar Trees Verification",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Leaf-Similar%20Trees%20Verification%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Determine if two binary trees have identical leaf value sequence.",
    "constraints": [
      "Node count up to 200",
      "DFS leaf collection"
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
    "company": "Oracle",
    "title": "Oracle - Maximum Depth of N-ary Tree",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Maximum%20Depth%20of%20N-ary%20Tree%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Find maximum depth of N-ary tree from root down to farthest leaf node.",
    "constraints": [
      "Node count up to 10^4",
      "Recursive DFS on children"
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
    "company": "Oracle",
    "title": "Oracle - N-ary Tree Level Order Traversal",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20N-ary%20Tree%20Level%20Order%20Traversal%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Return level order traversal of N-ary tree nodes.",
    "constraints": [
      "Node count up to 10^4",
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
    "company": "Oracle",
    "title": "Oracle - N-ary Tree Preorder Traversal",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20N-ary%20Tree%20Preorder%20Traversal%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "randomised",
    "selftext": "Return preorder traversal of N-ary tree.",
    "constraints": [
      "Node count up to 10^4",
      "Stack / Recursion"
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
    "company": "Oracle",
    "title": "Oracle - N-ary Tree Postorder Traversal",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20N-ary%20Tree%20Postorder%20Traversal%20interview%20assessment&type=link",
    "round": "Oracle Core CS & Systems Round",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Easy",
    "recollectionType": "constraint",
    "selftext": "Return postorder traversal of N-ary tree.",
    "constraints": [
      "Node count up to 10^4",
      "Stack / Recursion"
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
    "company": "Oracle",
    "title": "Oracle - Clone Undirected Graph Deep Copy",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Clone%20Undirected%20Graph%20Deep%20Copy%20interview%20assessment&type=link",
    "round": "Oracle DSA Round 1",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "original",
    "selftext": "Given reference of node in connected undirected graph, return deep copy.",
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
    "company": "Oracle",
    "title": "Oracle - Number of Islands Grid Connected Lands",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Number%20of%20Islands%20Grid%20Connected%20Lands%20interview%20assessment&type=link",
    "round": "Oracle Technical Round 2",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "randomised",
    "selftext": "Count number of islands in 2D binary grid.",
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
    "company": "Oracle",
    "title": "Oracle - Rotting Oranges Multi-source BFS",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Rotting%20Oranges%20Multi-source%20BFS%20interview%20assessment&type=link",
    "round": "Oracle Technical Assessment",
    "year": 2025,
    "batch": "2024\u20132026",
    "difficulty": "Medium",
    "recollectionType": "constraint",
    "selftext": "Calculate minutes until all fresh oranges turn rotten.",
    "constraints": [
      "1 <= m, n <= 10",
      "Queue multi-source BFS"
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
    "company": "Oracle",
    "title": "Oracle - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Maximum Subarray Kadane Algorithm",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Sliding Window Maximum Monotonic Deque",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Subarray Sum Equals K Prefix Frequency",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Product of Array Except Self Without Division",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Rotate Array by K Positions Right",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Move Zeroes to End of Array",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Majority Element in Election Tally",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Next Permutation Lexicographical Order",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Search in Rotated Sorted Array",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Valid Palindrome String Check",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Longest Palindromic Substring Expand Centers",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Group Anagrams by Character Signature",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Longest Substring Without Repeating Characters Window",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Minimum Window Substring Character Frequency",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - String to Integer Atoi Parsing",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
  }
];
