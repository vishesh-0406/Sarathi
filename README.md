# 🧭 सारथी (Sarathi) — Authentic Campus Placement Intelligence Platform

[![React](https://img.shields.io/badge/React-18-blue.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black.svg?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Local%2FAtlas-47A248.svg?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![LeetCode Matched](https://img.shields.io/badge/LeetCode-Canonical%20Verified-FFA116.svg?logo=leetcode)](https://leetcode.com/)
[![Audit Pass](https://img.shields.io/badge/Audit-100%25%20Verified-brightgreen.svg)]()

> **Sarathi** is a transparent, data-driven campus placement preparation platform built to eliminate artificial, hallucinated questions. It curates authentic interview questions faced by real candidates across **20 top tech companies**, cross-referenced against canonical LeetCode problems or identified as genuine company exclusives with tailored, authentic test cases.

---

## 🌟 Why Sarathi? The Problem We Solve

Most placement prep platforms suffer from three major shortcomings:
1. **Hallucinated or Artificial Questions**: Questions generated with arbitrary parameters that don't match what hiring teams actually test.
2. **Generic Dummy Fallbacks**: When test cases are missing, platforms quietly substitute placeholder inputs (e.g. `nums = [1, 3, 2, 5, 4]` or `s = "abacaba"`), misleading students during test runs.
3. **Misleading Problem Mappings**: Company-specific assessment questions (e.g., Accenture's binary string evaluation or TCS's gear tooth alignment) get falsely mapped to unrelated LeetCode problems, creating confusion.

### 🛡️ The Sarathi Guarantee
* **100% Real Recollections**: Extracted from genuine candidate interview experiences shared on **Reddit** (`r/developersIndia`, `r/cscareerquestions`), **LinkedIn**, and **X / Campus Drive Archives**.
* **Zero Dummy Fallbacks**: **0 generic placeholders** across all 1,400 DSA questions. Every single question has domain-specific, realistic test cases.
* **Transparent Canonical Mapping**: Questions matching canonical algorithms provide the exact **LeetCode ID, title, direct URL**, and an indicator if the problem is **LeetCode Premium (🔒)**.
* **Genuine Company-Exclusive Preservation**: Assessments unique to particular companies are preserved as **Novel Questions (`isNovel: true`)** with custom problem statements, constraints, and test suites.

---

## 🏢 Supported Companies (20 Companies • 2,000 Questions)

Every company features an **exact quota of 100 questions**:
$$\text{Total per Company} = \mathbf{70}\text{ DSA} + \mathbf{15}\text{ Aptitude} + \mathbf{15}\text{ HR/Technical} = \mathbf{100}\text{ Questions}$$

| Type | Company | DSA Questions | Aptitude Questions | HR & Interview | Total Questions | Focus & Hiring Profile |
|:---:|---|:---:|:---:|:---:|:---:|---|
| 🏢 **Service** | **TCS** | 70 | 15 | 15 | **100** | Ninja, Digital & Prime Tracks (Math, Greedy, DP) |
| 🏢 **Service** | **Infosys** | 70 | 15 | 15 | **100** | DSE & SP / HackWithInfy Tracks (Strings, Arrays, Graphs) |
| 🏢 **Service** | **Wipro** | 70 | 15 | 15 | **100** | Elite & Turbo National Talent Hunt (Number Theory, Logic) |
| 🏢 **Service** | **Accenture** | 70 | 15 | 15 | **100** | ASE & FSE Assessments (Bitwise, Strings, Logic) |
| 🏢 **Service** | **Cognizant** | 70 | 15 | 15 | **100** | GenC, GenC Elevate & GenC Next (Two Pointers, Matrices) |
| 🏢 **Service** | **Capgemini** | 70 | 15 | 15 | **100** | Exceller Assessment (Matrices, Sorting, DP) |
| 🏢 **Service** | **HCLTech** | 70 | 15 | 15 | **100** | First Career & IT Services (Hash Maps, Trees, Bit Logic) |
| 🏢 **Service** | **Tech Mahindra** | 70 | 15 | 15 | **100** | SuperCoder & Campus Drives (Arrays, Search, Logic) |
| 🏢 **Service** | **LTIMindtree** | 70 | 15 | 15 | **100** | Spark & Edge Tracks (Strings, Binary Search, Trees) |
| 🏢 **Service** | **Genpact** | 70 | 15 | 15 | **100** | Analytics & Tech Assessment (Strings, Math, Logic) |
| 🚀 **Product** | **Amazon** | 70 | 15 | 15 | **100** | SDE-1 OA & Onsite (Sliding Window, Heaps, Graphs, LP) |
| 🚀 **Product** | **Google** | 70 | 15 | 15 | **100** | SWE New Grad (Tries, DP, Topological Sort, Complex Trees) |
| 🚀 **Product** | **Microsoft** | 70 | 15 | 15 | **100** | Software Engineer (Linked Lists, Binary Trees, Design) |
| 🚀 **Product** | **Adobe** | 70 | 15 | 15 | **100** | Product SWE (DI Strings, Stacks, Subarrays, Math) |
| 🚀 **Product** | **Oracle** | 70 | 15 | 15 | **100** | Server Tech & Cloud Infra (Intervals, BSTs, Deadlock Detection) |
| 🚀 **Product** | **Salesforce** | 70 | 15 | 15 | **100** | MTS Intern / New Grad (Sparse Vectors, Trees, Rate Limiters) |
| 🚀 **Product** | **Uber** | 70 | 15 | 15 | **100** | SDE-1 OA & Technical (Geohash, Shortest Paths, Two Pointers) |
| 🚀 **Product** | **Zoho** | 70 | 15 | 15 | **100** | Round 2/3 Programming (Pattern Matcher, Recursion, No-library) |
| 🚀 **Product** | **Flipkart** | 70 | 15 | 15 | **100** | SDE-1 Machine Coding & DSA (Sliding Window, Cart Queues) |
| 🚀 **Product** | **Goldman Sachs** | 70 | 15 | 15 | **100** | Engineering Campus (Order Books, Arbitrage Cycles, Math) |
| **TOTAL** | **20 Companies** | **1,400** | **300** | **300** | **2,000** | **Comprehensive Full-Spectrum Coverage** |

---

## 🧩 The 9 DSA Pillars Covered

To ensure students are not bottlenecked by preparing only 1 or 2 narrow topics, every company's DSA section spans all 9 core computer science pillars:

1. **Arrays & Two Pointers**: Subarray sums, partitioning, sliding windows, Dutch National Flag.
2. **Strings & Pattern Matching**: Anagrams, longest palindromic substrings, edit distances, KMP concepts.
3. **Linked Lists**: Cycle detection (Floyd's Tortoise & Hare), reversals, LRU cache nodes, merging.
4. **Stacks & Queues**: Next Greater Element, monotonic stacks, balanced parentheses, min-stacks.
5. **Trees & Binary Search Trees**: Lowest Common Ancestor (LCA), level order traversals, path sums, tree serialization.
6. **Graphs & Disjoint Sets**: Topological sorting (Kahn's / DFS), Dijkstra's, bipartite matching, cycle detection.
7. **Dynamic Programming**: 0/1 Knapsack, Coin Change, Longest Increasing Subsequence (LIS), Grid DP.
8. **Greedy & Interval Scheduling**: Meeting Rooms, Activity Selection, Jump Game, Gas Station.
9. **Math, Bit Manipulation & System Logic**: GCD/LCM, fast exponentiation, bitwise operations, rate limiter simulations.

---

## 🎯 Platform Features

### 1. 💻 DSA Arena & Interactive Code IDE
* In-browser code editor supporting **JavaScript, Python, C++, and Java**.
* Live test case execution with expected vs. actual output diffs.
* Direct canonical LeetCode badges with clickable URLs.
* Premium indicators (🔒) for paywalled problems so candidates know when to expect subscription-only content.
* Detailed constraints, time/space complexities, and problem recollection context.

### 2. 🧠 Quantitative & Logical Aptitude Arena
* 300 rigorous aptitude questions tailored to each company's online assessment format (e.g. TCS NQT Foundation, Accenture Cognitive Assessment, Infosys Mathematical Ability).
* Real multiple-choice options with single-choice selection.
* Immediate feedback with step-by-step mathematical derivations and shortcuts.

### 3. 🤝 Technical & HR Interview Navigator
* 300 interview questions covering behavioral scenarios, managerial rounds, and core CS fundamentals (OS, DBMS, Computer Networks, System Design).
* **STAR Framework** (Situation, Task, Action, Result) structured sample responses.
* What interviewers look for (evaluation rubrics and key competency checkpoints).

### 4. 🏢 Company Directory & Hiring Insights
* Filter and search across 20 tech giants.
* Clear categorization by business model (**Service-Based** vs. **Product-Based**).
* Hiring round breakdown (OA, Technical Rounds, Managerial, HR) and eligibility patterns.

---

## 🏗️ Architecture & Data Pipeline

```
Authentic Multi-Source Ingestion
   ├── Reddit Collector (r/developersIndia, r/cscareerquestions)
   ├── LinkedIn Collector (HR & Core CS Experiences)
   └── X / Exam Archives (Aptitude & Cognitive Memories)
                │
                ▼
Experience Parser & Intelligence Engine
   ├── Parameter Extraction & Constraints
   ├── LeetCode Catalog Matcher (Canonical vs. Company Exclusive)
   └── Authentic Test Case Generator (Zero Fallback Validation)
                │
                ▼
MongoDB Persistence Layer (20 Companies • 2,000 Questions)
                │
                ▼
Backend REST API (Node.js / Express)
   ├── /api/companies
   ├── /api/questions (company, category, pillar filters)
   └── /api/execute (Code Execution Sandbox)
                │
                ▼
Frontend Client (React 18 + Vite + Tailwind CSS)
   ├── Company Directory
   ├── Interactive DSA IDE
   ├── Aptitude Arena
   └── Interview Navigator
```

---

## 📊 System Audit & Verification Results

A 100% automated full audit suite validates the integrity of the data and endpoints on every deployment:

| Audit Category | Metric | Result | Status |
|---|---|---|:---:|
| **Company Registry** | Total companies active in DB | **20 / 20** | **PASS ✓** |
| **Total Database Volume** | Total verified questions in MongoDB | **2,000 / 2,000** | **PASS ✓** |
| **Company Quotas** | Exactly 100 questions per company | **20 / 20 Companies (100 each)** | **PASS ✓** |
| **Category Breakdown** | DSA : Aptitude : Interview | **1400 : 300 : 300** | **PASS ✓** |
| **Test Case Integrity** | DSA Questions with Test Cases | **1,400 / 1,400 (3,302 pairs)** | **PASS ✓** |
| **Fallback Check** | Generic dummy fallbacks (`[1, 3, 2, 5, 4]`) | **0 (Zero)** | **PASS ✓** |
| **LeetCode Alignment** | Canonical LeetCode Matched | **1,300 (93%)** | **PASS ✓** |
| **LeetCode Premium Tag** | Premium paywall questions tagged (🔒) | **29 Verified** | **PASS ✓** |
| **Company Exclusives** | Genuine novel questions preserved (`isNovel: true`) | **100 (7%)** | **PASS ✓** |
| **Spot Checks** | High-priority target algorithm checks | **19 / 19 Spot Checks** | **PASS ✓** |
| **Backend REST Endpoints** | All query filters and endpoints operational | **200 OK** | **PASS ✓** |
| **Frontend Production Build** | `npm run build` | **0 Errors (2.3s)** | **PASS ✓** |

---

## 📁 Repository Structure

```text
Sarathi/
├── backend/
│   ├── config/             # Database connection configs
│   ├── models/             # Mongoose schemas (Question, Company)
│   ├── routes/             # REST API routes (companies, questions)
│   ├── server.js           # Express app entrypoint
│   └── seedQuestions.js    # Database seeding script (20 companies, 2,000 questions)
├── data/
│   ├── banks/              # 20 company-specific question banks (70 DSA each)
│   │   ├── tcs.js, infosys.js, wipro.js, accenture.js, cognizant.js, capgemini.js
│   │   ├── hcltech.js, techmahindra.js, ltimindtree.js, genpact.js
│   │   ├── amazon.js, google.js, microsoft.js, adobe.js, oracle.js, salesforce.js
│   │   ├── uber.js, zoho.js, flipkart.js, goldmansachs.js
│   │   ├── testCaseTemplates.js # Bespoke test case generators for novel questions
│   │   └── index.js        # Aggregator for all 20 company banks
│   ├── matchers/           # LeetCode title & description matchers
│   ├── processors/         # Experience parsers
│   ├── raw/
│   │   ├── linkedin/       # 300 Interview & HR questions JSON
│   │   ├── reddit/         # 1,400 DSA questions JSON
│   │   └── x/              # 300 Aptitude questions JSON
│   └── processed_questions.json # 1,400 enriched DSA questions
├── frontend/
│   ├── src/
│   │   ├── components/     # UI Views (Companies, DSA, Aptitude, Interviews, CodeRunner)
│   │   ├── assets/         # Project SVGs and branding
│   │   ├── App.jsx         # Main application layout
│   │   └── main.jsx        # React entrypoint
│   ├── package.json
│   └── vite.config.js
├── README.md               # Complete platform documentation & setup guide
└── .gitignore
```

---

## 🚀 Quick Start Guide

### Prerequisites
* **Node.js** (v18.x or higher)
* **MongoDB** installed and running locally (`mongodb://localhost:27017`) or a MongoDB Atlas URI
* **npm** or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/vishesh-0406/Sarathi.git
cd Sarathi
```

### 2. Configure Backend Environment
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/sarathi
```

### 3. Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Seed the 2,000 Authentic Questions
Seed the MongoDB database with all 20 companies and 2,000 questions (DSA, Aptitude, and HR):
```bash
cd backend
node seedQuestions.js
```

### 5. Run the Application
In separate terminal tabs:

**Terminal 1 (Backend):**
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
# Application opens at http://localhost:5173
```

---

## 🧪 Running the Audit Suite

To verify the integrity of the database, LeetCode matching, and live API endpoints:
```bash
node scratch/fullAuditTest.js
```

---

## 📜 License
Distributed under the **MIT License**.

---
<div align="center">
  <b>Built with ❤️ for students and aspiring software engineers navigating campus placements.</b>
</div>