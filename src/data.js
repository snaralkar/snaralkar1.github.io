export const NAV = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export const SKILLS = [
  {
    cat: 'Languages & Data', icon: '🐍', color: '#7c6af7',
    items: [
      { name: 'Python (Pandas, Automation, ETL)', pct: 90 },
      { name: 'SQL (Advanced Queries & Reporting)', pct: 92 },
      { name: 'R (Statistical Analysis)', pct: 65 },
      { name: 'Flask / HTML', pct: 60 },
    ]
  },
  {
    cat: 'Visualization & BI', icon: '📊', color: '#00cfa8',
    items: [
      { name: 'Tableau', pct: 88 },
      { name: 'Power BI', pct: 85 },
      { name: 'Dash (Plotly)', pct: 80 },
      { name: 'Excel / Data Storytelling', pct: 88 },
    ]
  },
  {
    cat: 'Cloud & Databases', icon: '☁️', color: '#f5a623',
    items: [
      { name: 'Snowflake', pct: 80 },
      { name: 'MySQL', pct: 85 },
      { name: 'Azure', pct: 70 },
      { name: 'AWS', pct: 65 },
    ]
  },
  {
    cat: 'Tools & Frameworks', icon: '🛠️', color: '#4f9ef8',
    items: [
      { name: 'Databricks', pct: 75 },
      { name: 'Pandas / NumPy', pct: 90 },
      { name: 'Jupyter Notebook / VS Code', pct: 92 },
      { name: 'Git / Jira', pct: 82 },
    ]
  },
];

export const PROJECTS = [
  {
    id: 1, num: '01', tag: 'ETL Pipeline',
    title: 'Automated Mortgage Data ETL Pipeline',
    company: 'ICE Mortgage Technology',
    desc: 'Built an automated ETL pipeline to extract mortgage reports from Outlook ZIP files, process and standardize data, load into Snowflake, and visualize via Tableau dashboards.',
    bullets: [
      'Extracted mortgage reports from Outlook ZIP files using Python automation',
      'Processed and standardized 37 key business columns mapped to 388-column enterprise schema',
      'Cleaned and transformed datasets using Python Pandas and SQL queries',
      'Loaded processed data into Snowflake cloud data warehouse for analytics',
      'Integrated Tableau dashboards with Snowflake for operational performance tracking',
    ],
    stack: ['Python', 'Pandas', 'Snowflake', 'MySQL', 'Tableau', 'SQL'],
    color: '#7c6af7',
    metrics: [
      { label: 'Manual Effort Saved', val: '30%' },
      { label: 'Columns Mapped', val: '37' },
      { label: 'Schema Size', val: '388-col' },
    ]
  },
  {
    id: 2, num: '02', tag: 'BI Dashboard',
    title: 'Annotation Quality Performance Dashboard',
    company: 'ICE Mortgage Technology',
    desc: 'Developed a Power BI dashboard to monitor annotation team performance in real time, automating log extraction and enabling faster quality reviews.',
    bullets: [
      'Automated annotation log extraction and preprocessing using Python scripts',
      'Stored processed datasets in MySQL database for analytics and reporting',
      'Built Power BI dashboards tracking productivity, reviewer accuracy, and error trends',
      'Improved quality monitoring visibility by 40% for operations teams',
    ],
    stack: ['Power BI', 'Python', 'Excel', 'MySQL'],
    color: '#00cfa8',
    metrics: [
      { label: 'Visibility Improved', val: '40%' },
      { label: 'Reporting', val: 'Real-time' },
      { label: 'Teams Served', val: '2' },
    ]
  },
];

export const EXPERIENCE = [
  {
    year: 'Feb 2022 – Present',
    role: 'Data Analyst',
    company: 'ICE Mortgage Technology Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    bullets: [
      'Developed Python-based ETL pipelines to automate mortgage reporting workflows, reducing manual processing time by 30%',
      'Extracted, cleaned, and transformed 50K+ records using Python (Pandas) and SQL joins/aggregations for operational reporting',
      'Built interactive dashboards in Power BI and Tableau to monitor operational KPIs and productivity metrics',
      'Implemented automated data validation checks and quality audits, improving reporting accuracy by 20%',
      'Designed automated workflows to process Excel, XML, and JSON datasets used in reporting and analytics pipelines',
      'Delivered 5+ daily operational reports to 2 business teams, supporting performance monitoring and data-driven decision making',
    ]
  },
];

export const CONTACT_INFO = [
  { icon: '✉️', label: 'Email',    val: 'naralkarshubham04@gmail.com', href: 'mailto:naralkarshubham04@gmail.com' },
  { icon: '📞', label: 'Phone',    val: '+91-8605413803',               href: 'tel:+918605413803' },
  { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/shubhambhausaheb-naralkar', href: 'https://linkedin.com/in/shubhambhausaheb-naralkar' },
  { icon: '📍', label: 'Location', val: 'Hadapsar, Pune, Maharashtra',  href: '#' },
];
