// ================================================================
// DATAVIKA — CONTENT FILE  |  Edit all text here
// ================================================================
const DV = {
  brand: {
    name:      "DataVika",
    tagline:   "Find Your Direction in Data.",
    email:     "datavika2025@gmail.com",
    phone:     "+91 90483 19556",
    whatsapp:  "919048319556",
    community: "https://chat.whatsapp.com/Jvf40wFUenE70ZaHDH6Gwb",
    linkedin:  "https://linkedin.com/in/devika-m",
    github:    "https://github.com/Devikadev626",
    location:  "Kerala, India",
    formspree: "https://formspree.io/f/mpqyrvpw",
  },

  hero: {
    stats: [
      { val:50,  suf:"+", label:"Students Trained"  },
      { val:100, suf:"+", label:"Real Projects Built"},
      { val:10,  suf:"+", label:"Tools Covered"     },
      { val:2,   suf:"+", label:"Years Training"    },
    ],
  },

  modules: [
    { id:"python",  icon:"🐍", name:"Python",           weeks:5,  fee:12000, tag:"Foundation"   },
    { id:"sql",     icon:"🗄️", name:"SQL",              weeks:3,  fee:8000,  tag:"Must-Have"    },
    { id:"excel",   icon:"📊", name:"Excel",            weeks:3,  fee:7500,  tag:"Job-Ready"    },
    { id:"powerbi", icon:"📈", name:"Power BI",         weeks:4,  fee:10500, tag:"Hot Skill"    },
    { id:"stats",   icon:"📐", name:"Statistics",       weeks:3,  fee:7500,  tag:"Core"         },
    { id:"da",      icon:"🔍", name:"Data Analysis",    weeks:4,  fee:10500, tag:"Essential"    },
    { id:"ml",      icon:"🤖", name:"Machine Learning", weeks:6,  fee:14000, tag:"Career Boost" },
    { id:"dl",      icon:"🧠", name:"Deep Learning",    weeks:4,  fee:11500, tag:"Advanced"     },
    { id:"nlp",     icon:"💬", name:"NLP",              weeks:3,  fee:9000,  tag:"Trending"     },
    { id:"ip",      icon:"🖼️", name:"Image Processing", weeks:2,  fee:4500,  tag:"Specialist"   },
    { id:"aitools", icon:"✨", name:"AI Tools",         weeks:2,  fee:4500,  tag:"NEW 🔥"       },
  ],

  uday: {
    rules: [
      "Submit a short written application — why you want to learn data science",
      "15-minute interview with Devika — passion and commitment assessed",
      "Selection based on attitude and dedication — not marks or background",
      "Limited to 10 students per Uday Batch",
      "70% attendance mandatory — 3 missed sessions without notice = exit",
    ],
    includes: [
      "Full course curriculum — same as regular students",
      "All course materials, resources and cheat sheets",
      "Real-world portfolio-level project guidance",
      "WhatsApp doubt support throughout",
      "Course completion certificate",
      "50% off placement prep packs",
    ],
  },

  consulting: [
    { icon:"📊", title:"Power BI Dashboard",   desc:"Custom interactive dashboards for your business data.",     fee:"From Rs.8,000"  },
    { icon:"📋", title:"Excel Automation",      desc:"Automated reports, formulas and intelligent data systems.", fee:"From Rs.5,000"  },
    { icon:"🗺️", title:"Data Strategy",        desc:"1-hr consultation + written data roadmap for your team.",  fee:"From Rs.4,000"  },
    { icon:"📉", title:"Market Analysis",       desc:"Deep analysis of your sales, customers and market trends.", fee:"From Rs.8,000"  },
    { icon:"🧑‍🤝‍🧑", title:"Team Training",    desc:"Data literacy workshops for up to 15 staff members.",      fee:"From Rs.12,000" },
    { icon:"🎯", title:"Hiring Support",        desc:"Design assessments and shortlist data talent for your org.", fee:"From Rs.6,000" },
  ],

  events: [
    { title:"Free Demo: Python for Data Science", date:"2026-03-29", time:"7:00 PM IST",  mode:"Online · Zoom",     spots:20, lang:"English + Malayalam" },
    { title:"Power BI Weekend Workshop",          date:"2026-04-05", time:"10:00 AM IST", mode:"Online · Zoom",     spots:15, lang:"Malayalam"            },
    { title:"New Batch: Data Analyst Track",      date:"2026-04-12", time:"7:30 PM IST",  mode:"Online · Evenings", spots:12, lang:"English + Malayalam" },
    { title:"ML Intensive: 1-Day Workshop",       date:"2026-04-19", time:"9:00 AM IST",  mode:"Online · Zoom",     spots:10, lang:"English + Malayalam" },
  ],

  testimonials: [
    { name:"Arjun R.",     role:"Data Analyst @ Startup",    text:"Before DataVika I had a degree but zero confidence. After 3 months of real project work I landed my first data job in 6 weeks.", stars:5, init:"A" },
    { name:"Priya S.",     role:"BI Developer",               text:"Devika's Power BI sessions are unlike anything. She teaches you to think like an analyst. My portfolio got me noticed immediately.", stars:5, init:"P" },
    { name:"Mohammed F.",  role:"ML Engineer",                text:"The 1:1 mentoring was a game changer. Flexible schedule, real guidance, and 10 solid GitHub projects. Totally worth it.", stars:5, init:"M" },
    { name:"Sneha K.",     role:"Teacher turned Data Analyst",text:"I was a teacher for 6 years. Devika helped me switch to data analytics in 4 months. The custom syllabus made all the difference.", stars:5, init:"S" },
  ],

  quiz: {
    sql: { title:"SQL", questions:[
      { q:"Which clause filters groups?",       options:["WHERE","HAVING","GROUP BY","FILTER"],               ans:1 },
      { q:"What does LEFT JOIN return?",        options:["Only matching","All left + matching right","All rows","Only right"], ans:1 },
      { q:"Which function counts rows?",        options:["SUM()","COUNT()","TOTAL()","NUM()"],                ans:1 },
      { q:"What is a subquery?",                options:["A backup","A query inside a query","A slow query","Only JOINs"], ans:1 },
      { q:"Which clause orders results?",       options:["SORT BY","ARRANGE BY","ORDER BY","RANK BY"],        ans:2 },
    ]},
    python: { title:"Python", questions:[
      { q:"What type is [1, 2, 3]?",            options:["Tuple","Set","List","Dictionary"],                  ans:2 },
      { q:"Which keyword defines a function?",  options:["function","def","func","define"],                   ans:1 },
      { q:"What does len() return?",            options:["Last element","Data type","Length","Memory size"],   ans:2 },
      { q:"What is a lambda?",                  options:["A slow function","An anonymous function","A class method","Built-in only"], ans:1 },
      { q:"Which library for data wrangling?",  options:["NumPy","Pandas","Matplotlib","SciPy"],              ans:1 },
    ]},
    powerbi: { title:"Power BI", questions:[
      { q:"What language for calculations?",    options:["SQL","Python","DAX","MDX"],                         ans:2 },
      { q:"What is Power Query for?",           options:["Creating visuals","Data transformation","Writing DAX","Publishing"], ans:1 },
      { q:"What is a measure?",                 options:["A fixed column","A dynamic DAX calc","A chart type","A filter"], ans:1 },
      { q:"What does CALCULATE() do?",          options:["Counts rows","Modifies filter context","Creates table","Joins tables"], ans:1 },
      { q:"What is a slicer?",                  options:["A chart type","An interactive filter","A data source","A DAX function"], ans:1 },
    ]},
  },

  cheatsheets: [
    { title:"Python",     icon:"🐍", topics:"Variables · Loops · Functions · Pandas · NumPy · OOP"        },
    { title:"SQL",        icon:"🗄️", topics:"Joins · Subqueries · Window Functions · CTEs · Aggregations" },
    { title:"Power BI",   icon:"📈", topics:"DAX · Power Query · Relationships · Visuals · RLS"           },
    { title:"Excel",      icon:"📊", topics:"XLOOKUP · Pivot Tables · Power Query · Dynamic Arrays"       },
    { title:"ML",         icon:"🤖", topics:"Algorithms · Evaluation · Scikit-learn · XGBoost · SHAP"     },
    { title:"Statistics", icon:"📐", topics:"Distributions · Hypothesis Testing · A/B Testing · Bayesian" },
  ],

  projects: [
    { tool:"Python",    title:"KeralaRent Intelligence System",         level:"Capstone", desc:"Scrape rentals, clean, analyse by district, auto-generate PDF report" },
    { tool:"SQL",       title:"RetailIQ Analytics Engine",              level:"Capstone", desc:"15 business KPIs from multi-table retail DB with window functions" },
    { tool:"Excel",     title:"SME Financial Health Dashboard",         level:"Capstone", desc:"Dynamic KPI dashboard with scenarios for Kerala small businesses" },
    { tool:"Power BI",  title:"360 Kerala Retail Chain Dashboard",      level:"Capstone", desc:"RLS, drill-through, what-if, published to Power BI Service" },
    { tool:"DA",        title:"IPL Business Intelligence Platform",     level:"Capstone", desc:"50+ charts, win patterns, player stats, Plotly interactive dashboard" },
    { tool:"ML",        title:"LoanGuard Credit Risk App",              level:"Capstone", desc:"XGBoost + SHAP + MLflow + Streamlit deployed live" },
    { tool:"DL",        title:"VisionGuard Retail Vision System",       level:"Capstone", desc:"Multi-task CNN — shelf detection + emotion + queue on Hugging Face" },
    { tool:"NLP",       title:"SentimentScope — English + Malayalam",   level:"Capstone", desc:"Bilingual BERT sentiment — unique in India, deployed on HuggingFace" },
    { tool:"IP",        title:"SmartAttend Face Recognition System",    level:"Capstone", desc:"Face recognition attendance with anti-spoofing and Streamlit dashboard" },
    { tool:"AI Tools",  title:"DataPilot Business Analyst AI",          level:"Capstone", desc:"Ask questions in English, AI executes Pandas + returns chart + answer" },
  ],
};
if (typeof module !== "undefined") module.exports = DV;
