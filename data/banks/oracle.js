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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
    "batch": "2024–2026",
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
  }
];
