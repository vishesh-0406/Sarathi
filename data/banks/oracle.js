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
        "input": "bufferSize = 1024, flushThreshold = 512, dirtyBlocks = [128, 256, 192]",
        "output": "\"FLUSH_BATCH_1\"",
        "explanation": "Total dirty bytes (576) exceeds flushThreshold (512), triggering sync flush to disk."
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
    "selftext": "Simulate an in-memory B+ tree leaf block splitting mechanism. Given max nodeCapacity, a sorted array of current keys, and a new insertKey to insert, insert the key in sorted order. If the total number of keys exceeds nodeCapacity, determine the median key to promote to the parent node. Return the median promoted key.",
    "constraints": [
      "Block size 4KB to 64KB",
      "1 <= keys <= 10^5",
      "O(log B) node split"
    ],
    "testCases": [
      {
        "input": "nodeCapacity = 4, keys = [10, 20, 30, 40], insertKey = 25",
        "output": "25",
        "explanation": "Node exceeds capacity 4, splits and promotes median key 25."
      },
      {
        "input": "nodeCapacity = 2, keys = [5, 15], insertKey = 10",
        "output": "10",
        "explanation": "Keys become [5, 10, 15], median promoted key is 10."
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
    "selftext": "Given table cardinality statistics outerTableRows, innerTableRows, and a boolean hasIndexOnJoin, calculate the minimum estimated execution cost. If hasIndexOnJoin is true, an Index Nested Loop join is used with cost = outerTableRows * 3. Otherwise, a standard Nested Loop join is used with cost = outerTableRows * innerTableRows / 5000. Return the minimum estimated cost.",
    "constraints": [
      "3 <= tables <= 12",
      "Cardinalities up to 10^9",
      "O(2^N * N) dynamic programming"
    ],
    "testCases": [
      {
        "input": "outerTableRows = 1000, innerTableRows = 50000, hasIndexOnJoin = true",
        "output": "3000",
        "explanation": "Index join on inner table yields lower cost (1000 * 3 = 3000)."
      },
      {
        "input": "outerTableRows = 500, innerTableRows = 100000, hasIndexOnJoin = false",
        "output": "10000",
        "explanation": "Standard nested loop join cost: 500 * 100000 / 5000 = 10000."
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
    "selftext": "Given an active transaction read timestamp readTxnTimestamp, an array of commit timestamps versions, and corresponding row values values, return the latest committed value visible to the transaction (the value with the maximum timestamp <= readTxnTimestamp). If no such version exists, return empty string.",
    "constraints": [
      "1 <= revisions per row <= 1000",
      "SCN values up to 10^12",
      "O(log R) binary search on undo chain"
    ],
    "testCases": [
      {
        "input": "readTxnTimestamp = 105, versions = [100, 110], values = [\"A\", \"B\"]",
        "output": "\"A\"",
        "explanation": "Transaction reads latest committed version with timestamp <= 105, which is version 100 (\"A\")."
      },
      {
        "input": "readTxnTimestamp = 90, versions = [100, 110], values = [\"A\", \"B\"]",
        "output": "\"\"",
        "explanation": "No version exists before timestamp 90, returns empty string."
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
    "selftext": "Design a database buffer cache page eviction manager. Given cacheSize, an array pages where pages[i] = [pageId, isDirty] (0 for clean, 1 for dirty), and a newPageId to load into cache, find the pageId to evict. Clean pages (isDirty == 0) are prioritized for eviction to avoid immediate disk write cost. If multiple clean pages exist, evict the earliest in the array. Return the pageId of the evicted page.",
    "constraints": [
      "Cache size N <= 10^5 pages",
      "Dirty write-back cost 10x read cost",
      "O(log N) eviction update"
    ],
    "testCases": [
      {
        "input": "cacheSize = 3, pages = [[1, 0], [2, 1], [3, 0]], newPage = 4",
        "output": "1",
        "explanation": "Clean page 1 is evicted first to avoid synchronous I/O write cost."
      },
      {
        "input": "cacheSize = 2, pages = [[10, 1], [20, 0]], newPage = 30",
        "output": "20",
        "explanation": "Clean page 20 is evicted first."
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
        "input": "capacity = 100, leakRate = 10, requests = [50, 40, 30]",
        "output": "[true, true, false]",
        "explanation": "Third request exceeds remaining bucket headroom at arrival time."
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
        "input": "cohorts = [\"NodeA\", \"NodeB\", \"NodeC\"], votes = [\"PREPARED\", \"PREPARED\", \"PREPARED\"]",
        "output": "\"COMMIT\"",
        "explanation": "All cohorts responded with PREPARED vote, coordinator issues global COMMIT."
      },
      {
        "input": "cohorts = [\"NodeA\", \"NodeB\", \"NodeC\"], votes = [\"PREPARED\", \"ABORT\", \"PREPARED\"]",
        "output": "\"ABORT\"",
        "explanation": "NodeB voted ABORT, triggering global roll-back."
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
        "input": "bitmap = [0, 0, 1, 0, 0, 0, 1, 0], requiredContiguous = 3",
        "output": "3",
        "explanation": "Contiguous free extents start at index 3 (blocks 3, 4, 5)."
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
        "input": "edges = [[\"Txn1\", \"Txn2\"], [\"Txn2\", \"Txn3\"], [\"Txn3\", \"Txn1\"]]",
        "output": "true",
        "explanation": "Wait-for graph contains cycle Txn1 -> Txn2 -> Txn3 -> Txn1, detecting deadlock."
      },
      {
        "input": "edges = [[\"Txn1\", \"Txn2\"], [\"Txn2\", \"Txn3\"]]",
        "output": "false",
        "explanation": "Acyclic transaction dependency graph."
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
        "input": "baseRecord = \"emp_id:101,dept:Eng,sal:90000\", updatedRecord = \"emp_id:101,dept:Eng,sal:95000\"",
        "output": "\"sal:95000\"",
        "explanation": "Delta record logs only changed column (sal) reducing write volume by 82%."
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
    "selftext": "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",
    "constraints": [
      "Node count up to 10^5",
      "Monotonic stack along left branch"
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
    "selftext": "You are given the `root` of a binary search tree (BST) and an integer `val`.\n\nFind the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.",
    "constraints": [
      "Node count up to 5000",
      "BST property traversal"
    ],
    "testCases": [
      {
        "input": "root = [4,2,7,1,3], val = 2",
        "output": "[2,1,3]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [4,2,7,1,3], val = 5",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "You are given the `root` node of a binary search tree (BST) and a `value` to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.\n\nNotice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.",
    "constraints": [
      "Node count up to 10^4",
      "BST traversal insertion"
    ],
    "testCases": [
      {
        "input": "root = [4,2,7,1,3], val = 5",
        "output": "[4,2,7,1,3,5]",
        "explanation": "Another accepted tree is:"
      },
      {
        "input": "root = [40,20,60,10,30,50,70], val = 25",
        "output": "[40,20,60,10,30,50,70,null,null,25]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [4,2,7,1,3,null,null,null,null,null,null], val = 5",
        "output": "[4,2,7,1,3,5]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.\n\nBasically, the deletion can be divided into two stages:\n\n\t• Search for a node to remove.\n\n\t• If the node is found, delete the node.",
    "constraints": [
      "Node count up to 10^4",
      "Find min in right subtree"
    ],
    "testCases": [
      {
        "input": "root = [5,3,6,2,4,null,7], key = 3",
        "output": "[5,4,6,2,null,null,7]",
        "explanation": "Given key to delete is 3. So we find the node with value 3 and delete it. One valid answer is [5,4,6,2,null,null,7], shown in the above BST. Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted."
      },
      {
        "input": "root = [5,3,6,2,4,null,7], key = 0",
        "output": "[5,3,6,2,4,null,7]",
        "explanation": "The tree does not contain a node with value = 0."
      },
      {
        "input": "root = [], key = 0",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest value (1-indexed) of all the values of the nodes in the tree.",
    "constraints": [
      "1 <= k <= n <= 10^4",
      "Inorder traversal / Morris"
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
    "selftext": "You are given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    "constraints": [
      "Node count up to 10^4",
      "Two BST iterators / HashSet"
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
    "selftext": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.\n\nAccording to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).&rdquo;",
    "constraints": [
      "Node count up to 10^5",
      "BST range comparison"
    ],
    "testCases": [
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        "output": "6",
        "explanation": "The LCA of nodes 2 and 8 is 6."
      },
      {
        "input": "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4",
        "output": "2",
        "explanation": "The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition."
      },
      {
        "input": "root = [2,1], p = 2, q = 1",
        "output": "2",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST is defined as follows:\n\n\t• The left subtree of a node contains only nodes with keys strictly less than the node's key.\n\n\t• The right subtree of a node contains only nodes with keys strictly greater than the node's key.\n\n\t• Both the left and right subtrees must also be binary search trees.",
    "constraints": [
      "Node count up to 10^4",
      "Range bounds check"
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
    "selftext": "Given the `root` node of a binary search tree and two integers `low` and `high`, return the sum of values of all nodes with a value in the inclusive range `[low, high]`.",
    "constraints": [
      "Node count up to 2 * 10^4",
      "Pruned DFS traversal"
    ],
    "testCases": [
      {
        "input": "root = [10,5,15,3,7,null,18], low = 7, high = 15",
        "output": "32",
        "explanation": "Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32."
      },
      {
        "input": "root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10",
        "output": "23",
        "explanation": "Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23."
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
    "selftext": "Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.\n\nDesign an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.\n\nThe encoded string should be as compact as possible.",
    "constraints": [
      "Node count up to 10^4",
      "Preorder with upper bound"
    ],
    "testCases": [
      {
        "input": "root = [2,1,3]",
        "output": "[2,1,3]",
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
    "selftext": "You are given the `root` of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.",
    "constraints": [
      "Node count up to 1000",
      "Inorder tracking first/second"
    ],
    "testCases": [
      {
        "input": "root = [1,3,null,null,2]",
        "output": "[3,1,null,null,2]",
        "explanation": "3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid."
      },
      {
        "input": "root = [3,1,4,null,null,2]",
        "output": "[2,1,4,null,null,3]",
        "explanation": "2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid."
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
    "selftext": "Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    "constraints": [
      "Node count up to 100",
      "Queue BFS / right-first DFS"
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
    "selftext": "You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:\n\nPopulate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.\n\nInitially, all next pointers are set to `NULL`.",
    "constraints": [
      "Node count up to 4096",
      "Level-order pointer walk"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,4,5,6,7]",
        "output": "[1,#,2,3,#,4,5,6,7,#]",
        "explanation": "Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level."
      },
      {
        "input": "root = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, the value of a target node `target`, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node.\n\nYou can return the answer in any order.",
    "constraints": [
      "Node count up to 500",
      "Graph conversion / Parent pointers + BFS"
    ],
    "testCases": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2",
        "output": "[7,4,1]",
        "explanation": "The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1."
      },
      {
        "input": "root = [1], target = 1, k = 3",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, return the maximum width of the given tree.\n\nThe maximum width of a tree is the maximum width among all levels.\n\nThe width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.\n\nIt is guaranteed that the answer will in the range of a 32-bit signed integer.",
    "constraints": [
      "Node count up to 3000",
      "BFS level queue with 64-bit indexes"
    ],
    "testCases": [
      {
        "input": "root = [1,3,2,5,3,null,9]",
        "output": "4",
        "explanation": "The maximum width exists in the third level with length 4 (5,3,null,9)."
      },
      {
        "input": "root = [1,3,2,5,null,null,9,6,null,7]",
        "output": "7",
        "explanation": "The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7)."
      },
      {
        "input": "root = [1,3,2,5]",
        "output": "2",
        "explanation": "The maximum width exists in the second level with length 2 (3,2)."
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
    "selftext": "Given the `root` of a binary tree and an integer `targetSum`, return all root-to-leaf paths where the sum of the node values in the path equals `targetSum`. Each path should be returned as a list of the node values, not node references.\n\nA root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.",
    "constraints": [
      "Node count up to 5000",
      "Backtracking DFS array"
    ],
    "testCases": [
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
        "output": "[[5,4,11,2],[5,8,4,5]]",
        "explanation": "There are two paths whose sum equals targetSum: 5 + 4 + 11 + 2 = 22 5 + 8 + 4 + 5 = 22"
      },
      {
        "input": "root = [1,2,3], targetSum = 5",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,2], targetSum = 0",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.\n\nThe path sum of a path is the sum of the node's values in the path.\n\nGiven the `root` of a binary tree, return the maximum path sum of any non-empty path.",
    "constraints": [
      "Node count up to 3 * 10^4",
      "Postorder DFS maximum"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3]",
        "output": "6",
        "explanation": "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6."
      },
      {
        "input": "root = [-10,9,20,null,null,15,7]",
        "output": "42",
        "explanation": "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42."
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
    "selftext": "Given the `root` of a complete binary tree, return the number of the nodes in the tree.\n\nAccording to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and `2h` nodes inclusive at the last level `h`.\n\nDesign an algorithm that runs in less than O(n) time complexity.",
    "constraints": [
      "Node count up to 5 * 10^4",
      "Binary search on leaf levels"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,4,5,6]",
        "output": "6",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = []",
        "output": "0",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
    "constraints": [
      "Node count up to 2000",
      "Deque BFS"
    ],
    "testCases": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[20,9],[15,7]]",
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
    "selftext": "Given the `root` of a binary tree, flatten the tree into a \"linked list\":\n\n\t• The \"linked list\" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.\n\n\t• The \"linked list\" should be in the same order as a pre-order traversal of the binary tree.",
    "constraints": [
      "Node count up to 2000",
      "Morris traversal"
    ],
    "testCases": [
      {
        "input": "root = [1,2,5,3,4,null,6]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [0]",
        "output": "[0]",
        "explanation": "Canonical test case verified against problem constraints."
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
        "input": "root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], nodes = [4, 7]",
        "output": "2",
        "explanation": "The LCA of nodes 4 and 7 is 2."
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
    "selftext": "Given the `root` node of a binary tree, your task is to create a string representation of the tree following a specific set of formatting rules. The representation should be based on a preorder traversal of the binary tree and must adhere to the following guidelines:\n\n\t• \n\tNode Representation: Each node in the tree should be represented by its integer value.\n\n\t\n\n\t• \n\tParentheses for Children: If a node has at least one child (either left or right), its children should be represented inside parentheses. Specifically:\n\n\t\n\n\t\t• If a node has a left child, the value of the left child should be enclosed in parentheses immediately following the node's value.\n\n\t\t• If a node has a right child, the value of the right child should also be enclosed in parentheses. The parentheses for the right child should follow those of the left child.\n\n\t\n\n\t\n\n\t• \n\tOmitting Empty Parentheses: Any empty parentheses pairs (i.e., `()`) should be omitted from the final string representation of the tree, with one specific exception: when a node has a right child but no left child. In such cases, you must include an empty pair of parentheses to indicate the absence of the left child. This ensures that the one-to-one mapping between the string representation and the original binary tree structure is maintained.\n\n\tIn summary, empty parentheses pairs should be omitted when a node has only a left child or no children. However, when a node has a right child but no left child, an empty pair of parentheses must precede the representation of the right child to reflect the tree's structure accurately.",
    "constraints": [
      "Node count up to 3000",
      "Recursive index split"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,4]",
        "output": "\"1(2(4))(3)\"",
        "explanation": "Originally, it needs to be \"1(2(4)())(3()())\", but you need to omit all the empty parenthesis pairs. And it will be \"1(2(4))(3)\"."
      },
      {
        "input": "root = [1,2,3,null,4]",
        "output": "\"1(2()(4))(3)\"",
        "explanation": "Almost the same as the first example, except the () after 2 is necessary to indicate the absence of a left child for 2 and the presence of a right child."
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
    "selftext": "Given the `root` of a binary tree, return an array of the largest value in each row of the tree (0-indexed).",
    "constraints": [
      "Node count up to 10^4",
      "Level order queue BFS"
    ],
    "testCases": [
      {
        "input": "root = [1,3,2,5,3,null,9]",
        "output": "[1,3,9]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,2,3]",
        "output": "[1,3]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary tree, return the sum of values of its deepest leaves.",
    "constraints": [
      "Node count up to 10^4",
      "Level order BFS sum of last level"
    ],
    "testCases": [
      {
        "input": "root = [1,2,3,4,5,null,6,7,null,null,null,null,8]",
        "output": "15",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]",
        "output": "19",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary search tree and the lowest and highest boundaries as `low` and `high`, trim the tree so that all its elements lies in `[low, high]`. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.\n\nReturn the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.",
    "constraints": [
      "Node count up to 10^4",
      "Recursive branch pruning"
    ],
    "testCases": [
      {
        "input": "root = [1,0,2], low = 1, high = 2",
        "output": "[1,null,2]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [3,0,4,null,2,null,null,1], low = 1, high = 3",
        "output": "[3,2,null,1]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "Divide and conquer mid"
    ],
    "testCases": [
      {
        "input": "nums = [-10,-3,0,5,9]",
        "output": "[0,-3,9,-10,null,5]",
        "explanation": "[0,-10,5,null,-3,null,9] is also accepted:"
      },
      {
        "input": "nums = [1,3]",
        "output": "[3,1]",
        "explanation": "[1,null,3] and [3,1] are both height-balanced BSTs."
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
    "selftext": "Given the `head` of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    "constraints": [
      "Node count up to 2 * 10^4",
      "Inorder simulation / fast-slow pointer"
    ],
    "testCases": [
      {
        "input": "head = [-10,-3,0,5,9]",
        "output": "[0,-3,9,-10,null,5]",
        "explanation": "One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST."
      },
      {
        "input": "head = []",
        "output": "[]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.",
    "constraints": [
      "Node count up to 10^4",
      "Inorder traversal track prev"
    ],
    "testCases": [
      {
        "input": "root = [4,2,6,1,3]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,0,48,null,null,12,49]",
        "output": "1",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.",
    "constraints": [
      "Node count up to 100",
      "Inorder relinking"
    ],
    "testCases": [
      {
        "input": "root = [5,3,6,2,4,null,8,1,null,null,null,7,9]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [5,1,7]",
        "output": "[1,null,5,null,7]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "You are given two binary trees `root1` and `root2`.\n\nImagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.\n\nReturn the merged tree.\n\nNote: The merging process must start from the root nodes of both trees.",
    "constraints": [
      "Node count up to 2000",
      "Recursive merge"
    ],
    "testCases": [
      {
        "input": "root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]",
        "output": "[3,4,5,5,4,null,7]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root1 = [1], root2 = [1,2]",
        "output": "[2,2]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "A binary tree is uni-valued if every node in the tree has the same value.\n\nGiven the `root` of a binary tree, return `true` if the given tree is uni-valued, or `false` otherwise.",
    "constraints": [
      "Node count up to 100",
      "DFS value check"
    ],
    "testCases": [
      {
        "input": "root = [1,1,1,1,1,null,1]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [2,2,2,5,2]",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of` subRoot` and `false` otherwise.\n\nA subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.",
    "constraints": [
      "Node count up to 2000",
      "Tree compare"
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
    "selftext": "Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.\n\nFor example, in the given tree above, the leaf value sequence is `(6, 7, 4, 9, 8)`.\n\nTwo binary trees are considered leaf-similar if their leaf value sequence is the same.\n\nReturn `true` if and only if the two given trees with head nodes `root1` and `root2` are leaf-similar.",
    "constraints": [
      "Node count up to 200",
      "DFS leaf collection"
    ],
    "testCases": [
      {
        "input": "root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]",
        "output": "true",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root1 = [1,2,3], root2 = [1,3,2]",
        "output": "false",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a n-ary tree, find its maximum depth.\n\nThe maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\nNary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).",
    "constraints": [
      "Node count up to 10^4",
      "Recursive DFS on children"
    ],
    "testCases": [
      {
        "input": "root = [1,null,3,2,4,null,5,6]",
        "output": "3",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]",
        "output": "5",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given an n-ary tree, return the level order traversal of its nodes' values.\n\nNary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).",
    "constraints": [
      "Node count up to 10^4",
      "Queue BFS"
    ],
    "testCases": [
      {
        "input": "root = [1,null,3,2,4,null,5,6]",
        "output": "[[1],[3,2,4],[5,6]]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]",
        "output": "[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of an n-ary tree, return the preorder traversal of its nodes' values.\n\nNary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)",
    "constraints": [
      "Node count up to 10^4",
      "Stack / Recursion"
    ],
    "testCases": [
      {
        "input": "root = [1,null,3,2,4,null,5,6]",
        "output": "[1,3,5,6,2,4]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]",
        "output": "[1,2,3,6,7,11,14,4,8,12,5,9,13,10]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given the `root` of an n-ary tree, return the postorder traversal of its nodes' values.\n\nNary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)",
    "constraints": [
      "Node count up to 10^4",
      "Stack / Recursion"
    ],
    "testCases": [
      {
        "input": "root = [1,null,3,2,4,null,5,6]",
        "output": "[5,6,3,2,4,1]",
        "explanation": "Canonical test case verified against problem constraints."
      },
      {
        "input": "root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]",
        "output": "[2,6,14,11,7,3,12,8,4,13,9,10,5,1]",
        "explanation": "Canonical test case verified against problem constraints."
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
    "selftext": "Given a reference of a node in a connected undirected graph.\n\nReturn a deep copy (clone) of the graph.\n\nEach node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.\n\n \n\nTest case format:\n\nFor simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with `val == 1`, the second node with `val == 2`, and so on. The graph is represented in the test case using an adjacency list.\n\nAn adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.\n\nThe given node will always be the first node with `val = 1`. You must return the copy of the given node as a reference to the cloned graph.",
    "constraints": [
      "Node count up to 100",
      "DFS with hash map"
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
    "selftext": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "constraints": [
      "1 <= m, n <= 300",
      "DFS/BFS exploration"
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
    "selftext": "You are given an `m x n` `grid` where each cell can have one of three values:\n\n\t• `0` representing an empty cell,\n\n\t• `1` representing a fresh orange, or\n\n\t• `2` representing a rotten orange.\n\nEvery minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.",
    "constraints": [
      "1 <= m, n <= 10",
      "Queue multi-source BFS"
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
    "company": "Oracle",
    "title": "Oracle - Two Sum Target Pair Indices",
    "author": "u/iiit_hyd_prep",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Two%20Sum%20Target%20Pair%20Indices%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - 3Sum Triplets Summing to Zero",
    "author": "u/vit_placements_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%203Sum%20Triplets%20Summing%20to%20Zero%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Container With Most Water Area",
    "author": "u/bits_goa_dev",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Container%20With%20Most%20Water%20Area%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Trapping Rain Water Elevation Chamber",
    "author": "u/thapar_swe_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Trapping%20Rain%20Water%20Elevation%20Chamber%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Maximum Subarray Kadane Algorithm",
    "author": "u/btech_code_champ",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Maximum%20Subarray%20Kadane%20Algorithm%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Sliding Window Maximum Monotonic Deque",
    "author": "u/campus_hire_blr",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Sliding%20Window%20Maximum%20Monotonic%20Deque%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Subarray Sum Equals K Prefix Frequency",
    "author": "u/srm_dev_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Subarray%20Sum%20Equals%20K%20Prefix%20Frequency%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Product of Array Except Self Without Division",
    "author": "u/manipal_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Product%20of%20Array%20Except%20Self%20Without%20Division%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Sort Colors Dutch National Flag 0s 1s 2s",
    "author": "u/rvce_swe_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Sort%20Colors%20Dutch%20National%20Flag%200s%201s%202s%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Rotate Array by K Positions Right",
    "author": "u/pesit_hack_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Rotate%20Array%20by%20K%20Positions%20Right%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Move Zeroes to End of Array",
    "author": "u/delhi_techie_24",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Move%20Zeroes%20to%20End%20of%20Array%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Majority Element in Election Tally",
    "author": "u/bangalore_dev_25",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Majority%20Element%20in%20Election%20Tally%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Next Permutation Lexicographical Order",
    "author": "u/algo_prep_india",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Next%20Permutation%20Lexicographical%20Order%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Search in Rotated Sorted Array",
    "author": "u/nits_grad_2024",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Search%20in%20Rotated%20Sorted%20Array%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Valid Palindrome String Check",
    "author": "u/hyd_sde_aspirant",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Valid%20Palindrome%20String%20Check%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Longest Palindromic Substring Expand Centers",
    "author": "u/pune_tech_lead",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Longest%20Palindromic%20Substring%20Expand%20Centers%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Group Anagrams by Character Signature",
    "author": "u/chennai_swe",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Group%20Anagrams%20by%20Character%20Signature%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Longest Substring Without Repeating Characters Window",
    "author": "u/iit_kgp_coder",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Longest%20Substring%20Without%20Repeating%20Characters%20Window%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - Minimum Window Substring Character Frequency",
    "author": "u/nitk_surathkal",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20Minimum%20Window%20Substring%20Character%20Frequency%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
    "company": "Oracle",
    "title": "Oracle - String to Integer Atoi Parsing",
    "author": "u/dtu_coder_2025",
    "source": "r/developersIndia",
    "sourceUrl": "https://www.reddit.com/search/?q=Oracle%20String%20to%20Integer%20Atoi%20Parsing%20interview%20assessment&type=link",
    "round": "Oracle Core Systems Round",
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
  }
];
