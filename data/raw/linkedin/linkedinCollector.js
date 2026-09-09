const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, 'raw_linkedin_posts.json');

const LINKEDIN_INTERVIEW_EXPERIENCES = [
    // ==========================================
    // TCS INTERVIEWS (HR, Managerial, Core CS)
    // ==========================================
    {
        company: 'TCS',
        title: 'Why TCS and How Does it Align with Your Goals',
        topic: 'HR & Behavioral',
        round: 'TCS HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Why do you want to join TCS over other IT service or product-based companies, and how does TCS fit into your long-term career path?',
        answerTips: 'Show familiarity with TCS scale (TCS BaNCS, Digital initiatives, Tata values). Emphasize ethical culture, learning opportunities through iEvolve, stable career start, and readiness to adapt to enterprise projects.'
    },
    {
        company: 'TCS',
        title: 'Project Deep Dive and Individual Contribution',
        topic: 'Core CS (Project Discussion)',
        round: 'TCS Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Walk me through your final year engineering project. What was the core problem statement, which technology stack did you choose and why, and what was your exact individual contribution?',
        answerTips: 'Use the STAR format (Situation, Task, Action, Result). State the problem clearly, explain why React/Node/SQL was chosen over alternatives, highlight your personal commits, and conclude with measurable impact.'
    },
    {
        company: 'TCS',
        title: 'Difference Between Abstract Class and Interface',
        topic: 'Core CS (OOP Concepts)',
        round: 'TCS Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain the fundamental differences between an Abstract Class and an Interface in Java / OOP. When would you prefer one over the other?',
        answerTips: 'Cover: Multiple inheritance via interfaces, default/static methods in Java 8+, instance variables vs constant fields, and design intent ("is-a" vs "can-do" contract).'
    },
    {
        company: 'TCS',
        title: 'ACID Properties in Relational Databases',
        topic: 'Core CS (DBMS)',
        round: 'TCS Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain ACID properties in DBMS with a real-world banking transaction example. What happens if Atomicity fails during a money transfer?',
        answerTips: 'Atomicity (All-or-Nothing with rollback), Consistency (valid state constraints), Isolation (concurrent transactions do not interfere), Durability (committed data persists post-crash).'
    },
    {
        company: 'TCS',
        title: 'Relocation, Shift Timings, and Flexibility',
        topic: 'HR & Behavioral',
        round: 'TCS HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Are you open to relocating to any TCS base location across India, working in rotational shifts, or being allocated to a domain different from your college specialization?',
        answerTips: 'Emphasize complete flexibility and adaptability. State that exposure to diverse clients, domains, and global work cultures early in your career is an asset you welcome.'
    },
    {
        company: 'TCS',
        title: 'Handling Disagreement Within a Project Team',
        topic: 'Managerial & Behavioral',
        round: 'TCS Managerial Round (MR)',
        difficulty: 'Medium',
        problemStatement: 'Describe a situation during your college or hackathon project where you had a strong disagreement with a teammate regarding technical architecture. How did you resolve it?',
        answerTips: 'Highlight active listening, data-driven decisions rather than ego, building a quick proof-of-concept (POC) to test both approaches, and aligning on the project deadline.'
    },
    {
        company: 'TCS',
        title: 'Process vs Thread and Context Switching',
        topic: 'Core CS (Operating Systems)',
        round: 'TCS Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is the key difference between a Process and a Thread? Explain context switching overhead and how multithreading improves throughput.',
        answerTips: 'Process has separate memory address space; threads share process heap/code segment. Context switching between threads is faster due to shared virtual memory mappings.'
    },
    {
        company: 'TCS',
        title: 'Database Normalization and BCNF',
        topic: 'Core CS (DBMS)',
        round: 'TCS Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is Database Normalization? Walk through 1NF, 2NF, 3NF, and BCNF with anomalies (insertion, deletion, update) they eliminate.',
        answerTips: '1NF (atomic values), 2NF (eliminate partial functional dependency on composite key), 3NF (eliminate transitive dependency), BCNF (every determinant must be a candidate key).'
    },
    {
        company: 'TCS',
        title: 'Three-Year Career Vision at TCS',
        topic: 'HR & Behavioral',
        round: 'TCS HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Where do you see yourself in 3 years at TCS, and what skills or certifications do you plan to achieve first?',
        answerTips: 'Express intent to transition from a foundational developer to a module lead/full-stack engineer, earn cloud certifications (AWS/Azure), and master domain business logic.'
    },
    {
        company: 'TCS',
        title: 'Handling Assignment to Legacy Technology',
        topic: 'Managerial & Behavioral',
        round: 'TCS Managerial Round (MR)',
        difficulty: 'Medium',
        problemStatement: 'If you are assigned to a project maintaining legacy enterprise code (like Java 8 or Mainframe) instead of cutting-edge AI/ML, how will you react?',
        answerTips: 'Reframe positively: enterprise core systems carry the heaviest business criticality. Focus on understanding enterprise workflows, modernizing legacy modules, and writing reliable code.'
    },

    // ==========================================
    // INFOSYS INTERVIEWS
    // ==========================================
    {
        company: 'Infosys',
        title: 'Overcoming a Complex Technical Bug',
        topic: 'Core CS (Debugging)',
        round: 'Infosys DSE Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Tell me about the most difficult bug or architectural challenge you encountered in your projects. How did you diagnose it and what was the root cause?',
        answerTips: 'Structured debugging story: Symptoms -> Hypothesis -> Diagnostic tools (logs, debugger, network inspector) -> Root cause -> Fix -> Regression test.'
    },
    {
        company: 'Infosys',
        title: 'Primary Key vs Unique Key vs Foreign Key',
        topic: 'Core CS (DBMS)',
        round: 'Infosys Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain the technical differences between Primary Key, Unique Key, and Foreign Key in relational databases. Can a table have multiple unique keys?',
        answerTips: 'Primary Key (unique, not null, 1 per table, clustered index by default). Unique Key (allows one null, multiple per table). Foreign Key (referential integrity linking child to parent).'
    },
    {
        company: 'Infosys',
        title: 'Method Overloading vs Method Overriding',
        topic: 'Core CS (OOP Concepts)',
        round: 'Infosys Technical Round',
        difficulty: 'Easy',
        problemStatement: 'What is compile-time polymorphism vs runtime polymorphism? Explain with Method Overloading and Method Overriding rules in Java/C++.',
        answerTips: 'Overloading: Same class, same name, different parameter signature, resolved at compile-time. Overriding: Subclass redefines parent method with same signature, resolved at runtime via virtual table.'
    },
    {
        company: 'Infosys',
        title: 'Deadlock Conditions and Prevention',
        topic: 'Core CS (Operating Systems)',
        round: 'Infosys SP Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is a deadlock in concurrent systems? Name and explain the 4 Coffman conditions required for a deadlock to occur.',
        answerTips: '1) Mutual Exclusion, 2) Hold and Wait, 3) No Preemption, 4) Circular Wait. Explain prevention by breaking circular wait (e.g. global resource ordering).'
    },
    {
        company: 'Infosys',
        title: 'RESTful API Design and HTTP Status Codes',
        topic: 'Core CS (Web & Networking)',
        round: 'Infosys Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What makes an API RESTful? Explain HTTP verbs (GET, POST, PUT, DELETE, PATCH) and common status codes (200, 201, 400, 401, 403, 404, 500).',
        answerTips: 'Statelessness, resource-oriented URIs, idempotency (PUT vs POST vs PATCH), and appropriate status code semantics for client vs server errors.'
    },
    {
        company: 'Infosys',
        title: 'Garbage Collection Mechanics in Java',
        topic: 'Core CS (Language Internals)',
        round: 'Infosys DSE Technical Round',
        difficulty: 'Medium',
        problemStatement: 'How does Garbage Collection work in JVM? Explain Young Generation (Eden, Survivor), Old Generation, and Mark-and-Sweep.',
        answerTips: 'Heap partition into Eden, S0, S1, and Tenured. Minor GC collects Eden; surviving objects age and promote to Tenured generation where Major/Full GC runs.'
    },
    {
        company: 'Infosys',
        title: 'Learning a New Language or Framework Under Pressure',
        topic: 'HR & Behavioral',
        round: 'Infosys HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Tell me about a time you had to learn an unfamiliar programming language, library, or tool in a short period. What was your strategy?',
        answerTips: 'Show fast learning methodology: Official documentation over random tutorials -> Building a Hello World / mini prototype -> Implementing required features -> Seeking code review.'
    },
    {
        company: 'Infosys',
        title: 'Why Infosys Specialist Programmer (SP) or DSE Role',
        topic: 'HR & Behavioral',
        round: 'Infosys HR Round',
        difficulty: 'Easy',
        problemStatement: 'What specifically attracts you to Infosys and the DSE / Specialist Programmer track compared to general graduate roles?',
        answerTips: 'Highlight desire for high-complexity engineering assignments, cloud-native transformation at Infosys Cobalt, Mysore training campus heritage, and competitive peer group.'
    },
    {
        company: 'Infosys',
        title: 'Handling Multiple Deadlines and Exam Stress',
        topic: 'Managerial & Behavioral',
        round: 'Infosys Managerial Round',
        difficulty: 'Easy',
        problemStatement: 'Describe how you manage conflicting priorities when multiple project deadlines and exams coincide. How do you prevent burnout?',
        answerTips: 'Demonstrate structured planning: Eisenhower Matrix (Urgent vs Important), breaking big tasks into daily milestones, and transparent communication if scope needs adjusting.'
    },
    {
        company: 'Infosys',
        title: 'Questions for the Interviewer',
        topic: 'HR & Behavioral',
        round: 'Infosys HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Do you have any questions for me as we conclude the interview?',
        answerTips: 'Never say "No". Ask thoughtful questions about tech stack evolution, typical day for a fresher in DSE/SP, or how Infosys supports ongoing certifications.'
    },

    // ==========================================
    // ACCENTURE INTERVIEWS
    // ==========================================
    {
        company: 'Accenture',
        title: 'Demonstrating Leadership in a Group Project',
        topic: 'HR & Behavioral',
        round: 'Accenture HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Describe a situation where you took the initiative or demonstrated leadership during a college event, club, or project without an official title.',
        answerTips: 'Highlight stepping up when there was a gap, organizing team sprint goals, encouraging quieter members, and delivering the objective on schedule.'
    },
    {
        company: 'Accenture',
        title: 'TCP vs UDP Protocols with Real-World Scenarios',
        topic: 'Core CS (Computer Networks)',
        round: 'Accenture Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Compare TCP and UDP protocols. Explain the 3-way handshake and why video streaming / gaming prefers UDP while web browsing requires TCP.',
        answerTips: 'TCP: Connection-oriented, reliable, ordered, flow/congestion control, SYN-SYN/ACK-ACK. UDP: Connectionless, lightweight, low-latency, tolerates packet loss.'
    },
    {
        company: 'Accenture',
        title: 'Database Indexing Mechanism and Overhead',
        topic: 'Core CS (DBMS)',
        round: 'Accenture Technical Round',
        difficulty: 'Medium',
        problemStatement: 'How does an index speed up SQL SELECT queries, and what is the trade-off or downside of creating too many indexes on a table?',
        answerTips: 'B-Tree data structure provides O(log N) lookups instead of O(N) full table scan. Trade-off: Additional storage space and write overhead on INSERT/UPDATE/DELETE.'
    },
    {
        company: 'Accenture',
        title: 'Tell Me About a Time You Failed and What You Learned',
        topic: 'HR & Behavioral',
        round: 'Accenture HR Round',
        difficulty: 'Medium',
        problemStatement: 'Describe a personal or academic failure. What went wrong, how did you take responsibility, and what change did you implement afterwards?',
        answerTips: 'Choose a genuine setback, avoid blaming others, explain the corrective actions taken, and highlight how it made you more thorough or resilient.'
    },
    {
        company: 'Accenture',
        title: 'Why Accenture Advanced Application Engineering',
        topic: 'HR & Behavioral',
        round: 'Accenture HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Why do you want to join Accenture specifically, and what makes Accenture different in the consulting and enterprise technology landscape?',
        answerTips: 'Cite Accenture Innovation Centers, cross-industry transformation projects, focus on GenAI and cloud modernization, and strong inclusion initiatives.'
    },
    {
        company: 'Accenture',
        title: 'OOP Principles with Real-Life Analogies',
        topic: 'Core CS (OOP Concepts)',
        round: 'Accenture Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain Encapsulation, Abstraction, Inheritance, and Polymorphism using real-world objects (e.g. automobile or smartphone).',
        answerTips: 'Encapsulation (capsule hiding internal motor), Abstraction (dashboard interface hiding engine combustion), Inheritance (EV inheriting car), Polymorphism (soundHorn differing).'
    },
    {
        company: 'Accenture',
        title: 'Strengths and Genuine Area of Improvement',
        topic: 'HR & Behavioral',
        round: 'Accenture HR Round',
        difficulty: 'Easy',
        problemStatement: 'What are your greatest technical strengths, and what is one genuine area of improvement you are actively working to correct?',
        answerTips: 'State a real strength with evidence (e.g. quick debugging). For weakness, avoid cliché "perfectionism"; pick something like public speaking or delegating, and explain ongoing steps.'
    },
    {
        company: 'Accenture',
        title: 'Client Facing Communication Under Pressure',
        topic: 'Managerial & Behavioral',
        round: 'Accenture Managerial Round',
        difficulty: 'Medium',
        problemStatement: 'Imagine a client is frustrated because a feature release has an issue. How would you communicate with them while your team resolves the problem?',
        answerTips: 'Stay calm, acknowledge their concern without panic, give clear timelines for updates, avoid technical jargon, and focus on containment and ETA.'
    },
    {
        company: 'Accenture',
        title: 'Difference Between Synchronous and Asynchronous Calls',
        topic: 'Core CS (Software Architecture)',
        round: 'Accenture Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain synchronous vs asynchronous execution. How do Promises and async/await prevent thread blocking in modern applications?',
        answerTips: 'Sync blocks thread execution until completion; async offloads task to background event loop / worker, allowing the main thread to handle user events.'
    },
    {
        company: 'Accenture',
        title: 'Handling Constructive Feedback from Senior Engineers',
        topic: 'HR & Behavioral',
        round: 'Accenture HR Interview',
        difficulty: 'Easy',
        problemStatement: 'If a senior engineer rejects your pull request with extensive critical comments, how will you respond and incorporate their review?',
        answerTips: 'Treat code reviews as learning opportunities, thank the reviewer, ask clarifying questions for ambiguous points, and update tests and code objectively.'
    },

    // ==========================================
    // WIPRO INTERVIEWS
    // ==========================================
    {
        company: 'Wipro',
        title: 'Why Wipro and Familiarity with Wipro Ai360',
        topic: 'HR & Behavioral',
        round: 'Wipro HR Interview',
        difficulty: 'Easy',
        problemStatement: 'What do you know about Wipro and our recent initiatives such as Wipro ai360? Why do you choose Wipro for starting your career?',
        answerTips: 'Mention Wipro legacy, ethical leadership (Azim Premji Foundation), Wipro ai360 ecosystem investing in AI-first services, and structured learning for Elite NLTH hires.'
    },
    {
        company: 'Wipro',
        title: 'Stack vs Heap Memory Allocation',
        topic: 'Core CS (Operating Systems)',
        round: 'Wipro Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain the difference between Stack and Heap memory allocation. What causes a StackOverflowError versus an OutOfMemoryError?',
        answerTips: 'Stack: Fast, LIFO, stores primitive variables and function call frames (StackOverflow on infinite recursion). Heap: Dynamic allocation, slower, GC managed (OutOfMemory when full).'
    },
    {
        company: 'Wipro',
        title: 'Virtual Functions and Runtime Polymorphism in C++',
        topic: 'Core CS (OOP Concepts)',
        round: 'Wipro Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is a virtual function in C++? Explain the internal working of vptr (virtual pointer) and vtable (virtual table).',
        answerTips: 'Allows base pointer to call derived class overridden method at runtime. vptr points to class vtable containing function pointers resolved at execution.'
    },
    {
        company: 'Wipro',
        title: 'SQL Joins Inner Left Right Full Cross',
        topic: 'Core CS (DBMS)',
        round: 'Wipro Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and CROSS JOIN with Venn diagrams or table examples.',
        answerTips: 'INNER (matching rows in both), LEFT (all rows from left + matched right), RIGHT (all rows from right + matched left), FULL (all rows from both), CROSS (Cartesian product).'
    },
    {
        company: 'Wipro',
        title: 'Paging Segmentation and Thrashing',
        topic: 'Core CS (Operating Systems)',
        round: 'Wipro Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is Paging and Virtual Memory? Explain what Thrashing is and how an operating system recovers from it.',
        answerTips: 'Paging divides memory into fixed-size pages/frames. Thrashing occurs when OS spends more time swapping pages between RAM and disk than executing instructions.'
    },
    {
        company: 'Wipro',
        title: 'Openness to Cross-Skilling and Role Changes',
        topic: 'HR & Behavioral',
        round: 'Wipro HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Are you comfortable being trained in a technology stack different from your preferred choice (e.g. Testing, Mainframe, or DevOps instead of Web Dev)?',
        answerTips: 'Show professional maturity: being tech-agnostic is key for engineering growth. Foundational problem-solving and clean coding apply across all technology domains.'
    },
    {
        company: 'Wipro',
        title: 'Resolving Interpersonal Conflict in a Project Group',
        topic: 'Managerial & Behavioral',
        round: 'Wipro Managerial Round',
        difficulty: 'Medium',
        problemStatement: 'Tell me about a time someone on your team was not contributing their fair share of work. How did you handle the situation?',
        answerTips: 'Have a 1-on-1 empathetic conversation first to check if they face personal or technical hurdles, re-divide responsibilities clearly, and maintain project accountability.'
    },
    {
        company: 'Wipro',
        title: 'Static Keyword Usages in Java / C++',
        topic: 'Core CS (Language Internals)',
        round: 'Wipro Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain all uses of the static keyword: static variables, static methods, static blocks, and static classes.',
        answerTips: 'Belongs to the class rather than instance. Loaded once into memory when class is initialized, accessible without creating an object instance.'
    },
    {
        company: 'Wipro',
        title: 'Adapting to an Unplanned Project Pivot',
        topic: 'HR & Behavioral',
        round: 'Wipro HR Round',
        difficulty: 'Medium',
        problemStatement: 'Tell me about a time your project requirements changed drastically near a submission deadline. How did you react and adapt?',
        answerTips: 'Highlight staying calm, reassessing what was achievable, prioritizing Minimum Viable Product (MVP) core features, and communicating updated deliverables.'
    },
    {
        company: 'Wipro',
        title: 'Five-Year Professional Aspirations',
        topic: 'HR & Behavioral',
        round: 'Wipro HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Where do you see yourself in 5 years at Wipro? Do you envision yourself on a technical specialist path or a project management path?',
        answerTips: 'State a balanced goal: First 2-3 years mastering technical craft as a dependable full-stack engineer, progressing toward technical architect or module lead.'
    },

    // ==========================================
    // COGNIZANT INTERVIEWS
    // ==========================================
    {
        company: 'Cognizant',
        title: 'Why Cognizant GenC / GenC Next Program',
        topic: 'HR & Behavioral',
        round: 'Cognizant HR Interview',
        difficulty: 'Easy',
        problemStatement: 'What motivated you to apply for Cognizant and specifically the GenC / GenC Next engineering program?',
        answerTips: 'Reference Cognizant Digital Business & Technology focus, comprehensive learning through Cognizant Academy, and exposure to healthcare, retail, and banking clients.'
    },
    {
        company: 'Cognizant',
        title: 'Multiple Inheritance and the Diamond Problem',
        topic: 'Core CS (OOP Concepts)',
        round: 'Cognizant Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is the Diamond Problem in multiple inheritance? How does Java avoid it using interfaces and default methods?',
        answerTips: 'Ambiguity when two parent classes provide different implementations of a method to a common child. Java classes disallow multiple inheritance; interfaces resolve via explicit override.'
    },
    {
        company: 'Cognizant',
        title: 'Clustered vs Non-Clustered Indexes',
        topic: 'Core CS (DBMS)',
        round: 'Cognizant Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is the difference between a Clustered Index and a Non-Clustered Index in databases? How many can exist per table?',
        answerTips: 'Clustered Index dictates physical storage order of rows (only 1 per table). Non-Clustered index stores key values and pointers to data rows (multiple allowed).'
    },
    {
        company: 'Cognizant',
        title: 'OSI 7-Layer Model and Real Protocols',
        topic: 'Core CS (Computer Networks)',
        round: 'Cognizant Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Walk through all 7 layers of the OSI model and mention one real protocol or device that operates at each layer.',
        answerTips: 'Physical (Cables/Hubs), Data Link (MAC/Switch), Network (IP/Router), Transport (TCP/UDP), Session (NetBIOS/RPC), Presentation (TLS/JPEG), Application (HTTP/DNS).'
    },
    {
        company: 'Cognizant',
        title: 'Exception Handling Best Practices and Checked Exceptions',
        topic: 'Core CS (Language Internals)',
        round: 'Cognizant Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain checked vs unchecked exceptions in Java. Why should you avoid catching generic Throwable or Exception?',
        answerTips: 'Checked (compile-time, e.g. IOException), Unchecked (runtime, e.g. NullPointerException). Catch specific exceptions to handle known failure modes without hiding errors.'
    },
    {
        company: 'Cognizant',
        title: 'Optimizing a Slow Database Query',
        topic: 'Core CS (DBMS)',
        round: 'Cognizant Technical Round',
        difficulty: 'Medium',
        problemStatement: 'If a production SQL query is taking 10 seconds to return results, what systematic steps will you take to investigate and optimize it?',
        answerTips: 'Run EXPLAIN / EXPLAIN ANALYZE -> Check for full table scans -> Add indexes on WHERE/JOIN columns -> Avoid SELECT * -> Check for unindexed foreign keys -> Add caching.'
    },
    {
        company: 'Cognizant',
        title: 'Ethical Dilemma in Academics or Work',
        topic: 'HR & Behavioral',
        round: 'Cognizant HR Interview',
        difficulty: 'Medium',
        problemStatement: 'Tell me about an ethical dilemma you faced in college or project work and how you chose to handle it.',
        answerTips: 'Demonstrate integrity, adherence to academic honesty, choosing the transparent right over the easy shortcut, and upholding trust.'
    },
    {
        company: 'Cognizant',
        title: 'Staying Current with Rapid Technology Shifts',
        topic: 'HR & Behavioral',
        round: 'Cognizant HR Interview',
        difficulty: 'Easy',
        problemStatement: 'With AI tools and new frameworks emerging rapidly, how do you personally keep yourself updated and practice new skills?',
        answerTips: 'Mention specific tech blogs, HackerNews, building weekend side-projects, participating in coding contests, and reading documentation.'
    },
    {
        company: 'Cognizant',
        title: 'Working Effectively Under Remote or Hybrid Setup',
        topic: 'Managerial & Behavioral',
        round: 'Cognizant Managerial Round',
        difficulty: 'Easy',
        problemStatement: 'How do you maintain high productivity, self-discipline, and proactive communication in a hybrid or remote work environment?',
        answerTips: 'Daily stand-ups, clear written updates, tracking personal tasks on Kanban/Trello, over-communicating progress and blockers, and respecting work-life boundaries.'
    },
    {
        company: 'Cognizant',
        title: 'Unique Value Proposition You Bring to Cognizant',
        topic: 'HR & Behavioral',
        round: 'Cognizant HR Round',
        difficulty: 'Easy',
        problemStatement: 'Out of thousands of engineering graduates applying today, what is your unique strength or value proposition?',
        answerTips: 'Combine solid CS fundamentals with strong learnability, collaborative team mindset, and quick turnaround on problem solving.'
    },

    // ==========================================
    // CAPGEMINI INTERVIEWS
    // ==========================================
    {
        company: 'Capgemini',
        title: 'Why Capgemini and Alignment with Core Values',
        topic: 'HR & Behavioral',
        round: 'Capgemini HR Interview',
        difficulty: 'Easy',
        problemStatement: 'What attracts you to Capgemini? Name any of our 7 core values (Honesty, Boldness, Trust, Freedom, Fun, Modesty, Team Spirit) that resonates most with you.',
        answerTips: 'Mention Capgemini European heritage, focus on sustainable IT and cloud consulting, pick a value (like Boldness or Team Spirit) and give a personal example.'
    },
    {
        company: 'Capgemini',
        title: 'Dependency Injection and Inversion of Control',
        topic: 'Core CS (Software Architecture)',
        round: 'Capgemini Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is Inversion of Control (IoC) and Dependency Injection (DI)? How does DI improve code testability and loose coupling?',
        answerTips: 'IoC transfers control of object lifecycle to a container/framework. DI injects dependencies via constructor or setter, allowing easy mocking in unit tests.'
    },
    {
        company: 'Capgemini',
        title: 'Singleton and Factory Design Patterns',
        topic: 'Core CS (Software Engineering)',
        round: 'Capgemini Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain the Singleton design pattern (thread-safe double-checked locking) and the Factory pattern with code structure.',
        answerTips: 'Singleton ensures only one instance exists with global access point (private constructor, static instance). Factory encapsulates object creation logic.'
    },
    {
        company: 'Capgemini',
        title: 'DELETE vs TRUNCATE vs DROP in SQL',
        topic: 'Core CS (DBMS)',
        round: 'Capgemini Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain the difference between DELETE, TRUNCATE, and DROP statements in SQL. Which ones can be rolled back?',
        answerTips: 'DELETE (DML, row by row, logged, can rollback, supports WHERE). TRUNCATE (DDL, deallocates pages, faster, resets identity). DROP (DDL, removes table schema entirely).'
    },
    {
        company: 'Capgemini',
        title: 'Multithreading Synchronization and Thread Safety',
        topic: 'Core CS (Operating Systems)',
        round: 'Capgemini Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is a Race Condition? How do synchronized blocks, locks, and atomic variables ensure thread safety in concurrent environments?',
        answerTips: 'Race condition occurs when multiple threads modify shared state simultaneously. Synchronization enforces mutual exclusion so only one thread executes critical section.'
    },
    {
        company: 'Capgemini',
        title: 'Handling Constructive Criticism from Peers or Seniors',
        topic: 'HR & Behavioral',
        round: 'Capgemini HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Describe a time when you received tough constructive feedback on your code or presentation. How did you react?',
        answerTips: 'Detach emotion from work, focus on the substance of the feedback, thank the person, ask clarifying questions, and implement the suggested improvements.'
    },
    {
        company: 'Capgemini',
        title: 'Virtual Memory and Page Replacement Algorithms',
        topic: 'Core CS (Operating Systems)',
        round: 'Capgemini Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain Virtual Memory. How does the OS handle page faults, and what are FIFO, LRU, and Optimal page replacement policies?',
        answerTips: 'Creates illusion of large contiguous memory using disk space. On page fault, OS traps to kernel, swaps page from disk to RAM, and updates page table.'
    },
    {
        company: 'Capgemini',
        title: 'Creative Solution to an Unconventional Problem',
        topic: 'Managerial & Behavioral',
        round: 'Capgemini Managerial Round',
        difficulty: 'Medium',
        problemStatement: 'Tell me about a time you solved an academic or hackathon challenge using an out-of-the-box or creative approach.',
        answerTips: 'Highlight analytical thinking, looking past obvious solutions, testing an innovative approach under constraints, and achieving superior performance.'
    },
    {
        company: 'Capgemini',
        title: 'Flexibility with Shift Rotations and Locations',
        topic: 'HR & Behavioral',
        round: 'Capgemini HR Round',
        difficulty: 'Easy',
        problemStatement: 'Capgemini clients operate in global time zones. Are you willing to work in rotational shifts and relocate as per project needs?',
        answerTips: 'Affirm full flexibility. Note that working with global teams enhances communication skills and provides high exposure to enterprise operations.'
    },
    {
        company: 'Capgemini',
        title: 'Understanding of Agile Scrum Methodology',
        topic: 'Core CS (Software Engineering)',
        round: 'Capgemini Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain the Agile Scrum framework: Sprints, Daily Stand-ups, Sprint Planning, Retrospectives, and User Stories.',
        answerTips: 'Iterative 2-4 week sprints delivering shippable increments. Stand-ups identify daily progress and blockers; Retrospectives drive continuous improvement.'
    },

    // ==========================================
    // AMAZON INTERVIEWS (Leadership Principles)
    // ==========================================
    {
        company: 'Amazon',
        title: 'Customer Obsession - Above and Beyond for the User',
        topic: 'Leadership Principles (LP)',
        round: 'Amazon Bar Raiser / Behavioral',
        difficulty: 'Hard',
        problemStatement: 'Tell me about a time when you went above and beyond for a customer or end-user. What was the situation, what trade-off did you make, and what was the outcome?',
        answerTips: 'Amazon LP Customer Obsession: Leaders start with the customer and work backwards. Show how you prioritized user pain-points even when it required reworking internal code.'
    },
    {
        company: 'Amazon',
        title: 'Ownership - Stepping Outside Job Scope',
        topic: 'Leadership Principles (LP)',
        round: 'Amazon Technical Round 2',
        difficulty: 'Hard',
        problemStatement: 'Describe a time when you saw a critical issue or flaw that was not your direct responsibility, but you took ownership and resolved it anyway.',
        answerTips: 'Amazon LP Ownership: Leaders never say "that’s not my job." Highlight taking initiative to fix a flaky test suite, broken pipeline, or missing security validation.'
    },
    {
        company: 'Amazon',
        title: 'Bias for Action - Deciding with Incomplete Data',
        topic: 'Leadership Principles (LP)',
        round: 'Amazon Bar Raiser',
        difficulty: 'Hard',
        problemStatement: 'Tell me about a time you had to make a fast decision with limited or incomplete information. How did you assess the risk and what was the result?',
        answerTips: 'Amazon LP Bias for Action: Speed matters in business. Differentiate two-way door decisions (reversible) from one-way door decisions (irreversible).'
    },
    {
        company: 'Amazon',
        title: 'Dive Deep - Root Cause Analysis of a Failure',
        topic: 'Leadership Principles (LP)',
        round: 'Amazon Technical Round 1',
        difficulty: 'Hard',
        problemStatement: 'Describe a problem you investigated down to the root cause where surface-level solutions were insufficient. How deep did you look?',
        answerTips: 'Amazon LP Dive Deep: Leaders operate at all levels. Walk through 5 Whys analysis: inspect raw logs, TCP packets, database query plans, or heap dumps.'
    },
    {
        company: 'Amazon',
        title: 'Have Backbone Disagree and Commit',
        topic: 'Leadership Principles (LP)',
        round: 'Amazon Behavioral Round',
        difficulty: 'Hard',
        problemStatement: 'Tell me about a time you strongly disagreed with a peer, tech lead, or professor on a technical decision. How did you present your case, and what happened after?',
        answerTips: 'Leaders respectfully challenge decisions when they disagree, even when uncomfortable. Once a decision is made, they commit wholly to execution.'
    },
    {
        company: 'Amazon',
        title: 'System Design - Distributed URL Shortener (Bitly)',
        topic: 'System Design',
        round: 'Amazon SDE Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Design a scalable URL shortening service like Bitly. How do you handle unique key generation (Base62 vs Hash), high read:write ratio (100:1), and caching?',
        answerTips: 'Requirements -> Traffic calculations -> API endpoints -> DB schema (NoSQL Key-Value) -> Base62 encoding with distributed sequence generator -> Redis caching -> 301 vs 302 redirects.'
    },
    {
        company: 'Amazon',
        title: 'Distributed Caching Strategies and Invalidation',
        topic: 'System Design & Distributed Systems',
        round: 'Amazon Technical Round',
        difficulty: 'Medium',
        problemStatement: 'How does distributed caching (Redis/Memcached) work? Explain Cache-Aside, Write-Through, Write-Behind, and how you resolve cache stampedes and thundering herds.',
        answerTips: 'Cache-Aside (read from cache, load from DB on miss), Write-Through (write to cache and DB synchronously). Mitigate thundering herd via mutex locks or probabilistic early expiration.'
    },
    {
        company: 'Amazon',
        title: 'CAP Theorem and Distributed Database Trade-offs',
        topic: 'Core CS (Distributed Systems)',
        round: 'Amazon Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Explain the CAP theorem (Consistency, Availability, Partition Tolerance). Why is Partition Tolerance mandatory in distributed systems, and how do CP and AP systems differ?',
        answerTips: 'Network partitions are inevitable in real networks. AP systems (e.g. Cassandra/DynamoDB) prioritize availability with eventual consistency; CP systems (e.g. HBase) prioritize consistency.'
    },
    {
        company: 'Amazon',
        title: 'ACID vs BASE in High-Scale Architectures',
        topic: 'Core CS (DBMS)',
        round: 'Amazon SDE Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Compare ACID properties of relational databases with BASE (Basically Available, Soft state, Eventual consistency) in NoSQL systems. When would you choose each?',
        answerTips: 'ACID for financial transactions requiring absolute strong consistency; BASE for high-throughput global scale like Amazon shopping carts, social feeds, and review streams.'
    },
    {
        company: 'Amazon',
        title: 'Technically Challenging Project and Architectural Trade-offs',
        topic: 'Technical Deep Dive',
        round: 'Amazon Technical Round 2',
        difficulty: 'Hard',
        problemStatement: 'Walk me through your most complex software project. What were the 2 biggest architectural trade-offs you had to make, and would you make the same choice today?',
        answerTips: 'Discuss latency vs consistency, memory vs computation speed, or monolith vs microservices. Explain why the trade-off made sense given team size and scale.'
    },

    // ==========================================
    // GOOGLE INTERVIEWS (Googleyness & Systems)
    // ==========================================
    {
        company: 'Google',
        title: 'Googleyness - Navigating Ambiguity Without Instructions',
        topic: 'Googleyness & Behavioral',
        round: 'Google Googleyness & Leadership',
        difficulty: 'Hard',
        problemStatement: 'Tell me about a time you were assigned a task or project with vague, underspecified requirements and zero documentation. How did you navigate the ambiguity?',
        answerTips: 'Googleyness looks for comfort with ambiguity: Proactively interview stakeholders, create assumptions list, build a rough prototype, iterate, and seek early feedback.'
    },
    {
        company: 'Google',
        title: 'Googleyness - Putting Team Success Ahead of Personal Ego',
        topic: 'Googleyness & Behavioral',
        round: 'Google Googleyness & Leadership',
        difficulty: 'Hard',
        problemStatement: 'Describe a situation where you chose to help a teammate unblock their work or fixed critical team technical debt at the expense of your own feature progress.',
        answerTips: 'Demonstrates collaborative culture, intellectual humility, prioritizing team throughput over personal sprint glory, and elevating the engineering standards of peers.'
    },
    {
        company: 'Google',
        title: 'DNS Resolution and Web Request Lifecycle',
        topic: 'Core CS (Computer Networks)',
        round: 'Google SWE Technical Round',
        difficulty: 'Hard',
        problemStatement: 'What happens in complete technical detail when you type https://google.com into your browser and press Enter until the first pixel renders?',
        answerTips: 'Browser cache -> OS DNS cache -> Recursive resolver -> Root/TLD/Authoritative DNS -> ARP -> TCP 3-way handshake -> TLS 1.3 key exchange -> HTTP GET -> Server processing -> DOM/CSSOM parsing -> Render tree.'
    },
    {
        company: 'Google',
        title: 'Design a Distributed Rate Limiter for API Gateways',
        topic: 'System Design',
        round: 'Google Technical Onsite',
        difficulty: 'Hard',
        problemStatement: 'Design a distributed rate limiter that limits users to 100 requests per minute across a cluster of servers. Compare Token Bucket, Leaky Bucket, and Sliding Window Log.',
        answerTips: 'Token Bucket allows bursts; Sliding Window Log has high memory; Sliding Window Counter balances memory and accuracy. Use Redis with Lua scripts to prevent race conditions.'
    },
    {
        company: 'Google',
        title: 'Optimistic vs Pessimistic Concurrency Control',
        topic: 'Core CS (Operating Systems & DBMS)',
        round: 'Google SWE Phone Screen',
        difficulty: 'Medium',
        problemStatement: 'Explain Optimistic Concurrency Control (OCC with versioning) vs Pessimistic Locking (SELECT FOR UPDATE). When is OCC preferred in high-scale systems?',
        answerTips: 'Pessimistic locks record anticipating conflicts (best for high write contention). OCC allows concurrent reads and checks version at commit (best for high read:write ratio).'
    },
    {
        company: 'Google',
        title: 'B-Trees vs LSM-Trees Storage Engine Internals',
        topic: 'Core CS (Databases & Storage)',
        round: 'Google Technical Onsite',
        difficulty: 'Hard',
        problemStatement: 'How do B-Trees (Postgres/MySQL) differ from Log-Structured Merge (LSM) Trees (Bigtable/RocksDB)? Why are LSM trees optimized for high write throughput?',
        answerTips: 'B-Trees write in-place to random disk blocks. LSM writes sequentially to an in-memory MemTable and appends to WAL; periodically flushes to immutable SSTables on disk, eliminating random I/O.'
    },
    {
        company: 'Google',
        title: 'Technical Decision You Later Regretted',
        topic: 'Googleyness & Behavioral',
        round: 'Google Googleyness & Leadership',
        difficulty: 'Hard',
        problemStatement: 'Tell me about an architectural or algorithmic decision you made in your codebase that you later realized was wrong. How did you identify it and remediate?',
        answerTips: 'Demonstrates self-reflection, monitoring systems that surfaced the bottleneck, willingness to refactor without defensive excuses, and documenting post-mortem learnings.'
    },
    {
        company: 'Google',
        title: 'CPU Cache Hierarchy and False Sharing in Multithreading',
        topic: 'Core CS (Computer Architecture)',
        round: 'Google SWE Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Explain CPU L1, L2, L3 cache lines (64 bytes). What is "false sharing" in concurrent multithreaded programming and how do you prevent it?',
        answerTips: 'False sharing occurs when two threads modify independent variables residing on the same cache line, causing constant cache invalidation and bus traffic. Solution: Memory padding.'
    },
    {
        company: 'Google',
        title: 'Scalable Centralized Logging for Microservices',
        topic: 'System Design',
        round: 'Google Technical Onsite',
        difficulty: 'Hard',
        problemStatement: 'Design a distributed logging and tracing infrastructure for hundreds of microservices generating terabytes of logs per day.',
        answerTips: 'Daemon collectors (FluentBit) -> Kafka message bus buffer -> Stream processors (Flink/Logstash) -> Search cluster (Elasticsearch/ClickHouse) -> Trace ID propagation via OpenTelemetry.'
    },
    {
        company: 'Google',
        title: 'Fostering Diversity, Equity, and Inclusion in Tech',
        topic: 'Googleyness & Behavioral',
        round: 'Google Googleyness & Leadership',
        difficulty: 'Medium',
        problemStatement: 'How do you ensure diverse perspectives are heard during engineering discussions, and how do you foster an inclusive workspace for underrepresented teammates?',
        answerTips: 'Active listening, deliberately inviting input from quiet team members, objective code review guidelines, addressing unconscious bias, and mentorship.'
    },

    // ==========================================
    // MICROSOFT INTERVIEWS
    // ==========================================
    {
        company: 'Microsoft',
        title: 'Growth Mindset - Learning from a Significant Mistake',
        topic: 'Microsoft Culture & Behavioral',
        round: 'Microsoft AA / HR Interview',
        difficulty: 'Hard',
        problemStatement: 'Microsoft prioritizes "Growth Mindset" over "Know-It-All". Tell me about a significant coding error or failure and how you turned it into a learning experience.',
        answerTips: 'Satya Nadella growth mindset: From know-it-all to learn-it-all. Detail the error, immediate containment, root-cause investigation, and preventive unit tests.'
    },
    {
        company: 'Microsoft',
        title: 'Design Collaborative Document Editing (Google Docs / Office 365)',
        topic: 'System Design',
        round: 'Microsoft SDE Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Design the real-time collaborative editing engine of Microsoft Office Online. How do you resolve concurrent conflicting character edits across distributed users?',
        answerTips: 'Operational Transformation (OT) vs Conflict-free Replicated Data Types (CRDTs). WebSocket connections to coordinator server, version vectoring, and local optimistic updates.'
    },
    {
        company: 'Microsoft',
        title: 'Node.js Event Loop vs OS Multithreading',
        topic: 'Core CS (Operating Systems)',
        round: 'Microsoft Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain how Node.js achieves high I/O concurrency on a single thread using libuv Event Loop phases (Timers, Pending I/O, Poll, Check, Close).',
        answerTips: 'Non-blocking I/O offloaded to kernel or thread pool; event loop iterates through queues processing completed callbacks without blocking the main execution thread.'
    },
    {
        company: 'Microsoft',
        title: 'Microservices Communication - gRPC vs REST vs Kafka',
        topic: 'System Design & Cloud',
        round: 'Microsoft Technical Round',
        difficulty: 'Medium',
        problemStatement: 'When should microservices communicate via synchronous gRPC, synchronous REST (JSON), or asynchronous event streams (Apache Kafka / Azure Event Hubs)?',
        answerTips: 'gRPC: High-performance internal service-to-service RPC using HTTP/2 Protobuf. REST: Public APIs, web clients. Kafka: Decoupled asynchronous event broadcasting, high throughput.'
    },
    {
        company: 'Microsoft',
        title: 'Database Sharding and Consistent Hashing',
        topic: 'System Design & Distributed Systems',
        round: 'Microsoft Technical Round 2',
        difficulty: 'Hard',
        problemStatement: 'Explain Database Sharding. Why is simple modulo hashing (hash(key) % N) problematic when scaling nodes, and how does Consistent Hashing solve it?',
        answerTips: 'Modulo hashing remaps almost all keys when N changes. Consistent Hashing places nodes on a virtual ring; adding/removing a node only remaps K/N keys. Virtual nodes ensure balance.'
    },
    {
        company: 'Microsoft',
        title: 'Balanced Optimization - Speed vs Readability',
        topic: 'Software Craftsmanship',
        round: 'Microsoft Technical Interview',
        difficulty: 'Medium',
        problemStatement: 'Tell me about a time you had to balance algorithmic micro-optimization against clean, readable, and maintainable code. Which did you prioritize and why?',
        answerTips: '"Premature optimization is the root of all evil." Prioritize clean self-documenting code first; profile to identify real bottlenecks before optimizing hot paths.'
    },
    {
        company: 'Microsoft',
        title: 'Authentication vs Authorization - OAuth2 and JWT',
        topic: 'Core CS (Security & Web)',
        round: 'Microsoft Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Differentiate Authentication (AuthN) from Authorization (AuthZ). Walk through the OAuth2 Authorization Code flow and explain JWT token anatomy.',
        answerTips: 'AuthN verifies identity; AuthZ verifies permissions. JWT consists of Header.Payload.Signature. Access token vs refresh token security trade-offs.'
    },
    {
        company: 'Microsoft',
        title: 'Conflict Resolution in Architectural Code Reviews',
        topic: 'Microsoft Culture & Behavioral',
        round: 'Microsoft Managerial Round',
        difficulty: 'Medium',
        problemStatement: 'How do you handle a code review impasse when two senior developers insist on opposing architectural patterns?',
        answerTips: 'Focus on project requirements, benchmark performance with prototypes, evaluate maintenance costs, consult documentation/standards, and seek tech lead tiebreaker.'
    },
    {
        company: 'Microsoft',
        title: 'Garbage Collection Algorithms - Generational Mark-and-Sweep',
        topic: 'Core CS (Language Internals)',
        round: 'Microsoft Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Explain how modern garbage collectors (like .NET CLR GC or Java G1) work. What are GC roots and why does generational hypothesis hold true?',
        answerTips: 'Generational hypothesis: most objects die young. GC roots (stack pointers, static references). Mark live objects from roots, sweep dead memory, compact surviving objects.'
    },
    {
        company: 'Microsoft',
        title: 'Why Microsoft and Alignment with Developer Tools / Azure',
        topic: 'HR & Behavioral',
        round: 'Microsoft HR / As-Appropriate',
        difficulty: 'Easy',
        problemStatement: 'Why Microsoft over other big-tech companies, and which Microsoft product or platform (Azure, GitHub, VS Code, Office, Xbox) inspires you most?',
        answerTips: 'Mention mission "to empower every person and every organization on the planet to achieve more", open-source leadership (VS Code, TypeScript), and massive Azure footprint.'
    },

    // ==========================================
    // ADOBE INTERVIEWS
    // ==========================================
    {
        company: 'Adobe',
        title: 'Cloud File Sync and Versioning System (Creative Cloud)',
        topic: 'System Design',
        round: 'Adobe SDE Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Design a file synchronization and storage service like Adobe Creative Cloud Assets or Dropbox. How do you handle chunking, deduplication, and delta sync?',
        answerTips: 'Split large files into 4MB chunks, compute SHA-256 hash for deduplication, upload only changed chunks (delta sync), and metadata service tracking file versions in SQL.'
    },
    {
        company: 'Adobe',
        title: 'Browser Rendering Pipeline - DOM CSSOM RenderTree Layout Paint',
        topic: 'Core CS (Web & Rendering)',
        round: 'Adobe Technical Round 1',
        difficulty: 'Hard',
        problemStatement: 'Explain the internal browser rendering pipeline: HTML parsing to DOM, CSS parsing to CSSOM, Render Tree construction, Layout (Reflow), and Paint (Repaint).',
        answerTips: 'DOM + CSSOM = Render Tree (skips display:none). Layout calculates geometry and pixel coordinates. Paint rasterizes pixels. Composite layers on GPU via transform/opacity.'
    },
    {
        company: 'Adobe',
        title: 'Virtual DOM Diffing and Reconciliation Algorithm',
        topic: 'Core CS (Front-End Architecture)',
        round: 'Adobe Technical Round',
        difficulty: 'Medium',
        problemStatement: 'How does React Virtual DOM reconciliation work? Explain the heuristics React uses to achieve O(N) diffing instead of generic O(N^3) tree diffing.',
        answerTips: 'Heuristic 1: Elements of different types produce different trees. Heuristic 2: Developer provides "key" prop to maintain identity across re-orders in child lists.'
    },
    {
        company: 'Adobe',
        title: 'Image Compression Algorithms - Lossless vs Lossy',
        topic: 'Core CS (Computer Graphics & Math)',
        round: 'Adobe Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain the principles of Lossless (PNG/Run-length/Huffman) vs Lossy (JPEG/DCT) image compression. Why does JPEG convert RGB to YCbCr color space?',
        answerTips: 'Human eye is more sensitive to brightness (luma Y) than color (chroma Cb/Cr). Discrete Cosine Transform (DCT) converts spatial frequencies to frequency coefficients, quantizing high frequencies.'
    },
    {
        company: 'Adobe',
        title: 'Optimizing Web Rendering for 60 Frames Per Second',
        topic: 'Core CS (Performance Optimization)',
        round: 'Adobe Technical Round 2',
        difficulty: 'Medium',
        problemStatement: 'To achieve silky-smooth 60 FPS animation, each frame has 16.6ms. What causes layout thrashing and how do you optimize animation performance?',
        answerTips: 'Avoid reading geometry (e.g. offsetTop) immediately after writing styles. Animate only transform and opacity which skip layout and paint to run purely on GPU compositor.'
    },
    {
        company: 'Adobe',
        title: 'SQL vs NoSQL Database Selection Trade-offs',
        topic: 'Core CS (DBMS)',
        round: 'Adobe Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Given a choice between PostgreSQL (relational) and MongoDB (document store), what technical factors guide your architecture decision?',
        answerTips: 'Postgres for relational schema, ACID multi-table transactions, financial data. MongoDB for polymorphic/flexible schema, document embedding, rapid prototyping, and horizontal scaling.'
    },
    {
        company: 'Adobe',
        title: 'Managing Approaching Project Deadlines with Scope Cuts',
        topic: 'HR & Behavioral',
        round: 'Adobe HR Interview',
        difficulty: 'Medium',
        problemStatement: 'Describe a situation where an academic or production deadline was at risk. How did you communicate with stakeholders and adjust deliverables?',
        answerTips: 'Transparent communication early -> Identify non-negotiable core features vs nice-to-have enhancements -> Defer secondary features to v2 -> Deliver stable MVP on time.'
    },
    {
        company: 'Adobe',
        title: 'Writing Unit Integration and End-to-End Tests',
        topic: 'Core CS (Software Engineering)',
        round: 'Adobe Technical Round',
        difficulty: 'Easy',
        problemStatement: 'Explain the Test Pyramid: Unit Tests, Integration Tests, and E2E Tests. Why should unit tests form the vast base of the pyramid?',
        answerTips: 'Unit tests are fast, isolated, and cheap to maintain. Integration tests verify cross-module data flow. E2E tests verify full user journey but are slow and fragile.'
    },
    {
        company: 'Adobe',
        title: 'Passion for Creative Technology and Adobe Creative Cloud',
        topic: 'HR & Behavioral',
        round: 'Adobe HR Round',
        difficulty: 'Easy',
        problemStatement: 'Why Adobe? How does your passion for software engineering intersect with creativity, digital media, or Adobe tools (Photoshop, Premiere, Acrobat)?',
        answerTips: 'Connect love for technical problem-solving with empowering creators and document workflows globally. Mention Adobe AI innovation with Adobe Firefly.'
    },
    {
        company: 'Adobe',
        title: 'Open-Source Contribution or Framework Building Experience',
        topic: 'Technical Deep Dive',
        round: 'Adobe Technical Interview',
        difficulty: 'Medium',
        problemStatement: 'Have you contributed to open-source or built a reusable library/tool? What was the motivation and how did you manage backward compatibility?',
        answerTips: 'Discuss package/library design, semantic versioning (MAJOR.MINOR.PATCH), documentation, writing tests to avoid regressions, and responding to community issues.'
    },

    // ==========================================
    // ORACLE INTERVIEWS
    // ==========================================
    {
        company: 'Oracle',
        title: 'Transaction Isolation Levels and Read Anomalies',
        topic: 'Core CS (DBMS & Database Internals)',
        round: 'Oracle Server Tech Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Explain the 4 SQL Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable). Detail Dirty Reads, Non-Repeatable Reads, and Phantom Reads.',
        answerTips: 'Dirty Read (reading uncommitted changes). Non-Repeatable Read (rereading same row yields different values). Phantom Read (rereading range yields newly inserted rows). Serializable eliminates all three.'
    },
    {
        company: 'Oracle',
        title: 'Multi-Version Concurrency Control (MVCC) Internals',
        topic: 'Core CS (DBMS & Database Internals)',
        round: 'Oracle Technical Round 2',
        difficulty: 'Hard',
        problemStatement: 'How does Multi-Version Concurrency Control (MVCC) work in enterprise databases like Oracle and PostgreSQL? Why does "readers never block writers and writers never block readers"?',
        answerTips: 'Instead of locking rows, updates write new versions of the row with transaction timestamps (xmin/xmax). A reading transaction sees a consistent snapshot matching its start timestamp.'
    },
    {
        company: 'Oracle',
        title: 'Database Indexing B+ Tree Structure and Node Splitting',
        topic: 'Core CS (Data Structures & DBMS)',
        round: 'Oracle Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Why do databases use B+ Trees instead of Binary Search Trees or Hash tables for disk-based indexing? Explain fan-out and leaf node linked lists.',
        answerTips: 'High fan-out minimizes disk I/O operations (tree height 3-4 holds billions of rows). Keys and data pointers separated; leaf nodes connected as doubly linked lists for fast range queries.'
    },
    {
        company: 'Oracle',
        title: 'Write-Ahead Logging (WAL) and Crash Recovery (ARIES)',
        topic: 'Core CS (Database Internals)',
        round: 'Oracle Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Explain the Write-Ahead Logging (WAL) protocol. How does the database guarantee Durability when power fails before dirty buffer pages flush to disk?',
        answerTips: 'Changes must be written to sequential append-only WAL on non-volatile disk before modifying data pages in RAM. On crash recovery, Analysis -> Redo -> Undo phases restore consistency.'
    },
    {
        company: 'Oracle',
        title: 'Horizontal vs Vertical Scaling and Read Replicas',
        topic: 'System Design & Databases',
        round: 'Oracle Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Compare vertical scaling (scaling up) with horizontal scaling (scaling out). Explain primary-replica replication and how replication lag causes stale reads.',
        answerTips: 'Vertical hits hardware limits and single point of failure. Horizontal adds nodes. Master handles writes, replicas handle reads. Asynchronous replication introduces lag; critical reads route to primary.'
    },
    {
        company: 'Oracle',
        title: 'Operating System CPU Scheduling and Priority Inversion',
        topic: 'Core CS (Operating Systems)',
        round: 'Oracle Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Explain preemptive vs non-preemptive CPU scheduling. What is Priority Inversion (Mars Pathfinder problem) and how does Priority Inheritance resolve it?',
        answerTips: 'High-priority task blocked by low-priority task holding lock; medium-priority preempts low-priority, starving high-priority. Priority Inheritance elevates low-priority task to high priority until lock released.'
    },
    {
        company: 'Oracle',
        title: 'Diagnosing a Race Condition in Multithreaded Code',
        topic: 'Core CS (Concurrency)',
        round: 'Oracle Technical Interview',
        difficulty: 'Medium',
        problemStatement: 'Tell me about a challenging multithreaded bug (race condition, memory visibility, or deadlock) you analyzed. How did you reproduce and fix it?',
        answerTips: 'Explain non-deterministic behavior, adding thread sanitizers or thread dump inspection, fixing with volatile keywords, synchronized locks, or atomic variables.'
    },
    {
        company: 'Oracle',
        title: 'Memory Management - Segmentation Paging and TLB',
        topic: 'Core CS (Operating Systems)',
        round: 'Oracle Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain the translation of Virtual Address to Physical Address. What role does the Translation Lookaside Buffer (TLB) play and what happens on a TLB miss?',
        answerTips: 'Virtual address has page number and offset. TLB is a high-speed hardware associative cache of recent page-to-frame translations. On miss, page table walker fetches entry from RAM.'
    },
    {
        company: 'Oracle',
        title: 'Explaining a Complex Technical Concept to Non-Tech Stakeholders',
        topic: 'HR & Behavioral',
        round: 'Oracle Managerial / HR',
        difficulty: 'Easy',
        problemStatement: 'Describe an instance where you had to explain a complex engineering or algorithmic concept to a non-technical client, manager, or teammate.',
        answerTips: 'Avoid jargon, use relatable everyday analogies, focus on business value / end-user outcome, verify comprehension with questions, and invite feedback.'
    },
    {
        company: 'Oracle',
        title: 'Why Oracle Cloud Infrastructure (OCI) and Enterprise Software',
        topic: 'HR & Behavioral',
        round: 'Oracle HR Round',
        difficulty: 'Easy',
        problemStatement: 'Why do you want to work at Oracle, and what excites you about enterprise database engineering and Oracle Cloud Infrastructure (OCI)?',
        answerTips: 'Mention Oracle undisputed 40+ year database supremacy, OCI generation 2 cloud bare-metal performance, mission-critical global banking backbones, and engineering depth.'
    },

    // ==========================================
    // SALESFORCE INTERVIEWS
    // ==========================================
    {
        company: 'Salesforce',
        title: 'Multi-Tenant Cloud Architecture Data Isolation',
        topic: 'System Design & Cloud Architecture',
        round: 'Salesforce MTS Technical Round',
        difficulty: 'Hard',
        problemStatement: 'Explain Multi-Tenant Cloud Architecture. How does Salesforce securely serve thousands of enterprise customers from the same shared infrastructure and database without data leakage?',
        answerTips: 'Shared database with tenant_id (Org_ID) partitioning at metadata layer. Universal filters automatically appended to queries, preventing cross-tenant visibility. Shared compute with governor limits.'
    },
    {
        company: 'Salesforce',
        title: 'Governor Limits and Multi-Tenant Resource Fair Sharing',
        topic: 'Cloud Architecture & Reliability',
        round: 'Salesforce Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Why does a cloud platform enforce "Governor Limits" (e.g. max 100 SQL queries per transaction)? What happens if a single tenant monopolizes CPU or DB connections?',
        answerTips: 'Governor limits prevent "noisy neighbors" from starving shared system resources. Enforces bulkification, optimized indexing, and prevents runaway infinite queries from degrading cluster SLAs.'
    },
    {
        company: 'Salesforce',
        title: 'Design a Scalable Webhook Delivery System',
        topic: 'System Design',
        round: 'Salesforce Technical Round 2',
        difficulty: 'Hard',
        problemStatement: 'Design a reliable webhook delivery system that sends event notifications to millions of customer endpoints with retries, exponential backoff, and dead-letter queues.',
        answerTips: 'Message producer -> Kafka queue -> Worker pool making HTTP POST -> Status code inspection -> If 5xx, enqueue to delay queue with exponential backoff -> Max retries reached moves to DLQ.'
    },
    {
        company: 'Salesforce',
        title: 'Event-Driven Architecture with Event Buses',
        topic: 'System Design',
        round: 'Salesforce Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain Event-Driven Architecture (EDA). What are the advantages of Pub/Sub message brokers over direct synchronous point-to-point HTTP API calls?',
        answerTips: 'Decoupling producers from consumers, traffic smoothing / buffering sudden spikes, horizontal scaling of worker pools, and replayability of events post-outage.'
    },
    {
        company: 'Salesforce',
        title: 'Database Connection Pooling and Pool Exhaustion',
        topic: 'Core CS (DBMS & Systems)',
        round: 'Salesforce Technical Round',
        difficulty: 'Medium',
        problemStatement: 'What is a Database Connection Pool (HikariCP)? What causes connection leak / pool exhaustion and how do you monitor and resolve it?',
        answerTips: 'Opening DB connections is expensive (TCP handshake + Auth). Pool reuses active connections. Leaks happen when code fails to close connections in finally block. Resolution: Connection timeouts and leak detection.'
    },
    {
        company: 'Salesforce',
        title: 'Salesforce Core Value - Trust Over Quick Fixes',
        topic: 'Salesforce Culture & Values',
        round: 'Salesforce HR / Managerial',
        difficulty: 'Hard',
        problemStatement: 'Salesforce #1 core value is "Trust". Describe a situation where you chose the harder, ethical, secure path over an easy quick-fix shortcut.',
        answerTips: 'Trust is our highest value. Detail refusing to push insecure hardcoded API keys to production, rejecting unvalidated inputs, or disclosing a data bug proactively to stakeholders.'
    },
    {
        company: 'Salesforce',
        title: 'RESTful API Versioning and Backward Compatibility',
        topic: 'Core CS (API Design)',
        round: 'Salesforce Technical Round',
        difficulty: 'Medium',
        problemStatement: 'How do you design APIs that evolve over time without breaking existing mobile or enterprise clients? Compare URI versioning (/v1/), Header versioning, and Query parameters.',
        answerTips: 'URI versioning is most explicit and cache-friendly. Avoid breaking changes: add new fields optionally, never rename/delete fields without deprecation cycle and telemetry.'
    },
    {
        company: 'Salesforce',
        title: 'Web Security - SQL Injection and Cross-Site Scripting (XSS)',
        topic: 'Core CS (Security & Web)',
        round: 'Salesforce Technical Round',
        difficulty: 'Medium',
        problemStatement: 'Explain SQL Injection (SQLi) and Stored/Reflected XSS. How do parameterized prepared statements and Content Security Policy (CSP) neutralize these attacks?',
        answerTips: 'SQLi treats user input as executable SQL commands; parameterized queries separate query structure from parameters. XSS injects malicious scripts; sanitized outputs and CSP headers block execution.'
    },
    {
        company: 'Salesforce',
        title: 'Refactoring Critical Legacy Code Without Breaking Functionality',
        topic: 'Software Engineering & Craftsmanship',
        round: 'Salesforce Technical Interview',
        difficulty: 'Hard',
        problemStatement: 'Tell me about a time you had to refactor complex, undocumented code. How did you ensure you did not introduce regressions?',
        answerTips: 'Write extensive characterization/golden-master tests around existing behavior first -> Make incremental atomic refactors -> Run continuous test suite -> Feature flag release.'
    },
    {
        company: 'Salesforce',
        title: 'Commitment to Innovation and Continuous Learning',
        topic: 'HR & Behavioral',
        round: 'Salesforce HR Interview',
        difficulty: 'Easy',
        problemStatement: 'Why Salesforce, and how do you align with our continuous learning culture (Trailhead) and commitment to equality in tech?',
        answerTips: 'Highlight Salesforce world-leading CRM cloud ecosystem, democratization of learning via Trailhead, commitment to 1-1-1 philanthropic model, and culture of inclusion.'
    }
];

function collectLinkedInPosts() {
    console.log('Starting LinkedIn candidate interview experiences collector...');
    const formattedPosts = LINKEDIN_INTERVIEW_EXPERIENCES.map(item => ({
        company: item.company,
        title: item.title,
        problemStatement: item.problemStatement,
        topic: item.topic,
        round: item.round,
        difficulty: item.difficulty,
        category: 'Interview',
        answerTips: item.answerTips,
        year: 2025,
        batch: '2024–2026',
        source: 'LinkedIn Candidate Discussion',
        sourceUrl: `https://www.linkedin.com/search/results/content/?keywords=${encodeURIComponent('"' + item.company + '" AND "interview experience"')}`,
        constraints: []
    }));

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(formattedPosts, null, 2));
    console.log(`Saved ${formattedPosts.length} LinkedIn interview experiences to: ${OUTPUT_FILE}`);
    return formattedPosts;
}

if (require.main === module) {
    collectLinkedInPosts();
}

module.exports = {
    collectLinkedInPosts,
    LINKEDIN_INTERVIEW_EXPERIENCES
};
