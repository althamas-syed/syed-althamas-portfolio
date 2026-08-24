export const PROFILE = {
  name: 'Syed Althamas',
  role: 'Data Analyst | Analytics & Insights Associate',
  location: 'Banaganapalle, Andhra Pradesh, India',
  phone: '+91 7207040700',
  email: 'althamassyed@gmail.com',
  linkedin: 'https://www.linkedin.com/in/syed-althamas',
  linkedinLabel: 'in/syed-althamas',
  github: 'https://github.com/althamas-syed',
  githubLabel: 'althamas-syed',
  website: 'https://syedalthamas.me',
  resumePdf: 'https://www.genspark.ai/api/files/s/Ciiiro7W',
  summary: [
    'Detail-oriented Data Analyst with hands-on experience in SQL, Python and Power BI — delivering data cleaning, exploratory analysis and dashboards across 180,000+ records for retail, marketing and business-process initiatives.',
    'I translate business questions into clear, actionable insight — including identifying ₹3.94M in recoverable discount leakage through end-to-end analysis. An MBA in Finance with hands-on exposure to enterprise-scale data warehousing (Microsoft Fabric) and ETL pipelines.',
    'Experienced in quality assurance, test-case execution and dashboard validation across Agile & Waterfall delivery — now seeking a growth-oriented Analytics & Insights team.',
  ],
  languages: ['English', 'Telugu', 'Hindi'],
}

export const STATS = [
  { count: 184, suffix: 'K+', decimals: 0, label: 'Records analyzed' },
  { count: 3.94, prefix: '₹', suffix: 'M', decimals: 2, label: 'Discount leakage identified' },
  { count: 197, suffix: 'K', decimals: 0, label: 'Orders processed' },
  { count: 5, decimals: 0, label: 'Dashboard pages delivered' },
]

export const COMPETENCIES = [
  'Data Analysis & Insights',
  'SQL Querying & Data Wrangling',
  'EDA & Data Cleaning',
  'Enterprise Warehousing & ETL',
  'BI & Data Visualization',
  'Data Storytelling & KPI Reporting',
  'QA & Test Case Execution',
  'Requirement Gathering',
  'Financial Analysis',
  'Agile & Waterfall Delivery',
]

export const WHAT_I_DO = [
  {
    n: '01',
    title: 'Data Cleaning & EDA',
    desc: 'Wrangling 180K+ record datasets with Python & SQL — missing values, outliers, feature sanity — before a single chart is drawn.',
  },
  {
    n: '02',
    title: 'Dashboard Development',
    desc: '5-page Power BI & Tableau reports with DAX, Power Query and data modeling that answer stakeholder questions at a glance.',
  },
  {
    n: '03',
    title: 'Warehousing & ETL',
    desc: 'Enterprise pipelines on Microsoft Fabric — Lakehouse → Data Warehouse → Semantic Model → DirectLake reports.',
  },
  {
    n: '04',
    title: 'Insights & Storytelling',
    desc: 'KPI narratives for non-technical audiences — ₹3.94M of recoverable discount leakage found, packaged, and presented.',
  },
]

export const EXPERIENCE = [
  {
    role: 'Data Analyst Intern',
    org: 'Intellectra AI Solutions Pvt. Ltd.',
    period: 'May 11 – May 30, 2026',
    points: [
      'Delivered the Retail Chain Profit Leakage & Demand Optimization initiative end-to-end with SQL, Python and Power BI — writing queries and wrangling data for reporting and business decisions.',
      'Designed a relational SQL schema across 6 business tables; used CTE- and window-function-based queries to surface profitability, returns and vendor-delay KPIs.',
      'Built and validated a 5-page Power BI dashboard (Sales, Customer Behaviour, Profitability, Product, Returns) with data-quality checks and stakeholder reviews.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Analytics Space',
    period: 'Apr 13 – May 2, 2026',
    points: [
      'Analyzed client & sales performance for an End-to-End Retail Performance and Behavioral Analytics project — translating stakeholder questions into SQL queries and Power BI visuals.',
      'Performed data cleaning, cohort retention and revenue-trend analysis across 20+ SQL queries; presented findings as actionable business insights.',
    ],
  },
  {
    role: 'Digital Marketing Intern',
    org: 'Braino Vision',
    period: 'Internship',
    points: [
      'Boosted site traffic 30% and social engagement 20% through data-driven SEO & content strategy — direct experience in marketing performance analytics.',
    ],
  },
  {
    role: 'Assistant Supervisor',
    org: 'Bajaj Motors',
    period: 'May 2024 – Jun 2024',
    points: [
      'Coordinated cross-functional teams on daily operations, resolved process bottlenecks and reported operational KPIs to management.',
    ],
  },
]

export const SKILL_CATS = [
  {
    title: 'Programming & Querying',
    icon: '⌘',
    items: ['SQL — T-SQL, MySQL, SSMS', 'Python — Pandas, NumPy, Matplotlib', 'Seaborn, Scikit-learn', 'Jupyter Notebook'],
  },
  {
    title: 'Visualization & BI',
    icon: '◧',
    items: ['Power BI — DAX, Power Query, Data Modeling', 'Tableau Desktop', 'KPI Reporting & Dashboards'],
  },
  {
    title: 'Warehousing & ETL',
    icon: '≋',
    items: ['SQL Server — CTEs, Window Functions, Stored Procedures', 'Microsoft Fabric — Lakehouse, DWH, Pipelines', 'Semantic Model & DirectLake'],
  },
  {
    title: 'Statistics & Insights',
    icon: 'σ',
    items: ['Hypothesis Testing & Probability', 'Correlation & Regression Analysis', 'Descriptive Statistics', 'Business & Financial Analysis'],
  },
]

export const SKILL_BARS = [
  { name: 'SQL', w: 96, level: 'Advanced' },
  { name: 'Python', w: 92, level: 'Advanced' },
  { name: 'Power BI', w: 94, level: 'Advanced' },
  { name: 'Excel / VBA', w: 92, level: 'Advanced' },
  { name: 'Tableau', w: 86, level: 'Proficient' },
  { name: 'Statistics', w: 84, level: 'Proficient' },
  { name: 'Microsoft Fabric', w: 84, level: 'Proficient' },
  { name: 'Data Wrangling / EDA', w: 90, level: 'Advanced' },
]

export const PROJECTS = [
  {
    title: 'Retail Chain Profit Leakage & Demand Optimization',
    tools: ['Python', 'SQL Server', 'Power BI', 'Tableau'],
    desc: 'End-to-end analytics pipeline on a 184K-row, 7-sheet retail dataset that surfaced recoverable revenue across discount, return and stockout losses — plus K-Means customer cohorts for retention targeting.',
    metrics: [
      { value: '₹3.94M', label: 'Discount leakage' },
      { value: '₹1.54M', label: 'Return losses' },
      { value: '₹0.61M', label: 'Stockout losses' },
    ],
    bars: [92, 61, 38, 71, 88, 54, 66, 97],
    tag: 'Headline metrics',
  },
  {
    title: 'Swiggy Food Delivery Analytics',
    tools: ['SQL', 'Microsoft Fabric', 'Power BI'],
    desc: 'Architected a complete Fabric data-warehouse pipeline — Lakehouse → Data Warehouse → Semantic Model → DirectLake Power BI report — analyzing ₹53M sales across 197K orders and 15 states.',
    metrics: [
      { value: '₹53M', label: 'Sales analyzed' },
      { value: '197K', label: 'Orders' },
      { value: '15', label: 'States' },
    ],
    bars: [78, 64, 90, 45, 82, 70, 58, 85],
    tag: 'Data warehousing',
  },
  {
    title: 'Retail Performance & Customer Analytics — RetailNova',
    tools: ['Python', 'SQL Server', 'Power BI'],
    desc: 'Delivered an interactive 5-page Power BI report with RFM customer segmentation and store-level KPIs — scored 8.3/10 in structured project evaluation.',
    metrics: [
      { value: '8.3/10', label: 'Evaluation score' },
      { value: '5-page', label: 'Power BI report' },
      { value: 'RFM', label: 'Segmentation' },
    ],
    bars: [64, 82, 55, 74, 91, 62, 79, 88],
    tag: 'Retail analytics',
  },
]

export const EDU = [
  {
    degree: 'MBA — Finance',
    school: 'Santhiram Engineering College, Nandyal',
    period: '2023 – 2025',
  },
  {
    degree: 'B.Com — Computer Applications',
    school: 'Rayalaseema University, Kurnool',
    period: '2020 – 2023',
  },
]

export const CERTS = [
  {
    group: 'Data Analytics',
    badge: '01',
    items: [
      'Diploma in Data Analytics with Generative AI — ExcellenC × Texas Tech University (Jun 2026)',
      'Power BI Data Analyst — Microsoft Learn (2026)',
      'Data Analyst Skill Certification — OneRoadmap (Jun 2026)',
      'Complete Data Analyst Bootcamp — Udemy (2026)',
      'SQL (Intermediate) — HackerRank (Mar 2026)',
      'Intermediate Python — DataCamp (Jun 2026)',
      'Intro to SQL & Pandas — Kaggle (2026)',
    ],
  },
  {
    group: 'Internship Certificates',
    badge: '02',
    items: [
      'Retail Chain Profit Leakage & Demand Optimization — Intellectra AI Solutions (Jun 2026)',
      'End-to-End Retail Performance & Behavioral Analytics — Analytics Space (May 2026)',
    ],
  },
  {
    group: 'Microsoft Office',
    badge: '03',
    items: [
      'MS Office Automation MasterClass: Word, Excel & PowerPoint — Udemy (Jul 2026)',
      'Microsoft Office Complete Course — All-in-One MS Office — Udemy (Jul 2026)',
    ],
  },
  {
    group: 'Generative AI',
    badge: '04',
    items: [
      'Claude 101 — Anthropic (2026)',
      'AI Tools & ChatGPT Workshop — be10x (May 2026)',
      'What Is Generative AI? — LinkedIn Learning (Jun 2026)',
    ],
  },
]

export const CONTACT_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-althamas', sub: 'in/syed-althamas' },
  { label: 'GitHub', href: 'https://github.com/althamas-syed', sub: 'althamas-syed' },
  { label: 'Website', href: 'https://syedalthamas.me', sub: 'syedalthamas.me' },
]
