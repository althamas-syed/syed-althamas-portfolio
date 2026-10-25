export const PROFILE = {
  name: 'Syed Althamas',
  role: 'Data Analyst | SQL · Power BI · Python',
  location: 'Hyderabad, Telangana, India',
  phone: '+91 7207040700',
  email: 'althamassyed@gmail.com',
  linkedin: 'https://www.linkedin.com/in/syed-althamas',
  linkedinLabel: 'in/syed-althamas',
  github: 'https://github.com/althamas-syed',
  githubLabel: 'althamas-syed',
  website: 'https://syedalthamas.me',
  resumePdf: '/syed-althamas-resume.pdf',
  summary: [
    'Data Analyst with 1 year of hands-on experience in SQL, Python and Power BI — from cleaning and validating 182,081 records across seven retail datasets to shipping five-page Power BI dashboards that put revenue, margin and return-rate KPIs on one screen.',
    'An MBA in Finance (8.11 CGPA) with a B.Com in Computer Applications. Cut manual MIS reporting time by 30% through SQL and Power BI automation, reconciled 16/16 analytical metrics between Python and SQL, and quantified ₹13.94 lakh in approved, matched refunds.',
    'Open to Data Analyst roles in Hyderabad, Bengaluru and pan-India — available within 15 days.',
  ],
  languages: ['English (Professional)', 'Telugu (Native)', 'Hindi (Fluent)'],
}

export const STATS = [
  { count: 182, suffix: 'K', decimals: 0, label: 'Records analyzed' },
  { count: 13.94, prefix: '₹', suffix: 'L', decimals: 2, label: 'Refunds quantified' },
  { count: 16, suffix: '/16', decimals: 0, label: 'Metrics reconciled' },
  { count: 30, suffix: '%', decimals: 0, label: 'MIS reporting time cut' },
]

export const COMPETENCIES = [
  'Data Analysis & Insights',
  'SQL Querying & Reporting',
  'EDA & Data Cleaning',
  'Data Validation & Reconciliation',
  'Power BI Dashboards & DAX',
  'MIS Reporting & Automation',
  'RFM & Cohort Analysis',
  'Profitability Analysis',
  'Financial Analysis',
  'Stakeholder Reporting',
]

export const WHAT_I_DO = [
  {
    n: '01',
    title: 'Data Cleaning & Validation',
    desc: 'Profiling 182K+ records with Python and SQL — duplicate keys, unmatched products, date anomalies — with 16/16 analytical metrics reconciled between the two stacks.',
  },
  {
    n: '02',
    title: 'Dashboard Development',
    desc: 'Five-page Power BI reports with DAX, Power Query and star-schema modeling — $817K revenue, 29.81% margin and 6.68% return rate readable at a glance.',
  },
  {
    n: '03',
    title: 'SQL Reporting & Automation',
    desc: '20+ SQL analyses and Power BI automation that cut manual MIS reporting time by 30% — CTEs, window functions and T-SQL doing the repetitive work.',
  },
  {
    n: '04',
    title: 'Segmentation & Insights',
    desc: 'RFM reports sorting customers into Champions, Loyal and At-Risk groups, plus cohort retention analysis that turns trends into decisions.',
  },
]

export const EXPERIENCE = [
  {
    role: 'Data Analyst Intern',
    org: 'Analytics Space LLP, Hyderabad (Remote)',
    period: 'Oct 2025 – Sep 2026',
    points: [
      'Automated retail performance reporting using SQL queries and Power BI dashboards, reducing manual MIS reporting time by 30%.',
      'Completed 20+ SQL analyses covering revenue trends, customer behavior and cohort retention to surface trends and insights.',
      'Developed RFM reports segmenting customers into Champions, Loyal and At-Risk groups.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Intellectra AI Solutions Pvt. Ltd. (Remote)',
    period: 'May 2026',
    points: [
      'Developed Python (Pandas) and SQL data-cleaning and validation workflows for multi-table retail datasets, checking duplicate keys, inconsistent identifiers, unmatched product records and date anomalies.',
      'Reconciled 16/16 analytical metrics between Python and SQL and documented data-quality exceptions to improve KPI reporting reliability.',
    ],
  },
]

export const SKILL_CATS = [
  {
    title: 'SQL & Databases',
    icon: '⌘',
    items: ['SQL Server, MySQL, T-SQL', 'Joins, CTEs, Window Functions', 'Subqueries, Aggregations', 'CASE WHEN logic'],
  },
  {
    title: 'Python & Analysis',
    icon: '◧',
    items: ['Python — Pandas, NumPy', 'Jupyter Notebook', 'Data Cleaning, Validation, EDA', 'Reconciliation & Root-Cause Analysis'],
  },
  {
    title: 'BI & Visualization',
    icon: '≋',
    items: ['Power BI — DAX, Power Query', 'Tableau', 'Data Modeling, Star Schema', 'KPI Reporting & Dashboards'],
  },
  {
    title: 'Excel & Reporting',
    icon: 'σ',
    items: ['Advanced Excel — PivotTables', 'XLOOKUP, VLOOKUP, SUMIFS', 'Conditional Formatting & Charts', 'MIS Reporting & Automation'],
  },
]

export const SKILL_BARS = [
  { name: 'SQL', w: 96, level: 'Advanced' },
  { name: 'Python', w: 92, level: 'Advanced' },
  { name: 'Power BI', w: 94, level: 'Advanced' },
  { name: 'Advanced Excel', w: 92, level: 'Advanced' },
  { name: 'Tableau', w: 84, level: 'Proficient' },
  { name: 'DAX & Data Modeling', w: 88, level: 'Advanced' },
  { name: 'Statistics', w: 84, level: 'Proficient' },
  { name: 'Data Wrangling / EDA', w: 90, level: 'Advanced' },
]

export const PROJECTS = [
  {
    title: 'Retail Chain Profit Leakage & Demand Optimization',
    tools: ['Python', 'SQL Server', 'T-SQL', 'Validation Gates'],
    desc: 'A 50-store retail chain was losing profit in places its reports never showed. I profiled 182,081 records across seven datasets, built validation gates for duplicate keys, inconsistent store IDs, unmatched products and vendor-delay errors, and quantified ₹13.94 lakh in approved, matched refunds across 3,899 events. All 16 analytical metrics reconciled between Python and SQL. The findings: monthly margins held stable at 13.5–13.9% (Jan–Jun 2025), with ₹6.47 lakh in deep-discount exposure and a 30.1% vendor SLA breach rate flagged for follow-up.',
    metrics: [
      { value: '₹13.94L', label: 'Refunds quantified' },
      { value: '182,081', label: 'Records profiled' },
      { value: '16/16', label: 'Metrics reconciled' },
    ],
    bars: [88, 62, 74, 91, 57, 83, 69, 95],
    tag: 'Profit leakage audit · 50 stores · 7 datasets',
  },
  {
    title: 'RetailNova — Retail Performance & Behavioral Analytics',
    tools: ['Python', 'SQL Server', 'Power BI'],
    desc: 'Five raw retail tables became a five-page Power BI dashboard. I cleaned sales, customer, product, store and returns data in pandas, loaded it into SQL Server, and answered ten business questions in T-SQL with joins, CTEs and window functions. The dashboard tracks $817K in revenue at a 29.81% gross margin and a 6.68% return rate, with defective and wrong-item returns named as the top drivers. I also caught a data bug — 59 in-store orders mislabeled with an ONLINE store ID — documented it, and kept those rows out of store-level conclusions.',
    metrics: [
      { value: '$817K', label: 'Revenue tracked' },
      { value: '29.81%', label: 'Gross margin' },
      { value: '6.68%', label: 'Return rate' },
    ],
    bars: [72, 85, 60, 92, 68, 78, 88, 64],
    tag: 'Capstone · 5 tables · 10 business questions',
  },
]

export const EDU = [
  {
    degree: 'MBA — Finance · CGPA 8.11',
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
    group: 'Certifications',
    badge: '01',
    items: [
      'SQL (Intermediate) — HackerRank',
      'Intermediate Python — DataCamp',
      'Power BI Data Analyst Learning Path — Microsoft Learn',
      'Data Analytics with Generative AI — Texas Tech University × ExcellenC',
      'Data Analyst Skill Certification — OneRoadmap',
      'Deloitte Data Analytics Job Simulation — Forage',
    ],
  },
  {
    group: 'Core Stack',
    badge: '02',
    items: [
      'SQL — SQL Server, MySQL, T-SQL',
      'Power BI — DAX, Power Query, Data Modeling',
      'Python — Pandas, NumPy, Jupyter',
      'Tableau & Advanced Excel',
    ],
  },
]

export const CONTACT_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-althamas', sub: 'in/syed-althamas' },
  { label: 'GitHub', href: 'https://github.com/althamas-syed', sub: 'althamas-syed' },
  { label: 'Website', href: 'https://syedalthamas.me', sub: 'syedalthamas.me' },
]
