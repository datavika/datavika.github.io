// ================================================================
// DATAVIKA — CONTENT FILE  |  Edit all text here
// ================================================================
const DV = {
  brand: {
    name: "DataVika",
    email: "datavika2025@gmail.com",
    phone: "+91 90483 19556",
    whatsapp: "919048319556",
    linkedin: "https://linkedin.com/in/devika-m",
    github: "https://github.com/Devikadev626",
    location: "Kerala, India",
    formspree: "https://formspree.io/f/mpqyrvpw",
  },

  hero: {
    headline1: "Don't Just Learn Data.",
    headline2: "Get Hired With It.",
    sub: "Most institutes dump theory on you. DataVika puts you inside real projects from Day 1. Affordable fees, your schedule, your syllabus — in English & Malayalam.",
    stats: [
      { val:100, suf:"+", label:"Real Projects" },
      { val:500, suf:"+", label:"Students Trained" },
      { val:95,  suf:"%", label:"Placement Rate"  },
      { val:2,   suf:"+", label:"Years Training"  },
    ],
  },

  modules: [
    { id:"python",  icon:"🐍", name:"Python",           weeks:5,  price:3500, tag:"Foundation"   },
    { id:"sql",     icon:"🗄️", name:"SQL",              weeks:3,  price:2500, tag:"Must-Have"    },
    { id:"excel",   icon:"📊", name:"Excel",            weeks:3,  price:2000, tag:"Job-Ready"    },
    { id:"powerbi", icon:"📈", name:"Power BI",         weeks:4,  price:3000, tag:"Hot Skill"    },
    { id:"stats",   icon:"📐", name:"Statistics",       weeks:3,  price:2500, tag:"Core"         },
    { id:"da",      icon:"🔍", name:"Data Analysis",    weeks:4,  price:3500, tag:"Essential"    },
    { id:"ml",      icon:"🤖", name:"Machine Learning", weeks:6,  price:5000, tag:"Career Boost" },
    { id:"dl",      icon:"🧠", name:"Deep Learning",    weeks:4,  price:4000, tag:"Advanced"     },
    { id:"nlp",     icon:"💬", name:"NLP",              weeks:3,  price:3500, tag:"Trending"     },
    { id:"ip",      icon:"🖼️", name:"Image Processing", weeks:2,  price:2500, tag:"Specialist"   },
    { id:"aitools", icon:"✨", name:"AI Tools",         weeks:2,  price:2000, tag:"NEW 🔥"       },
  ],

  tracks: [
    { id:"analyst",   name:"Data Analyst Track",   badge:"Most Popular", duration:"5.5 months", modules:["python","sql","excel","powerbi","stats","da"], projects:20, outcome:"Land a Data Analyst role" },
    { id:"scientist", name:"Data Scientist Track",  badge:"Complete",     duration:"9–10 months", modules:["python","sql","excel","powerbi","stats","da","ml","dl","nlp","ip","aitools"], projects:50, outcome:"Land a Data Scientist / ML Engineer role" },
    { id:"powerpack", name:"Power Pack",            badge:"Quick Track",  duration:"3 months",   modules:["sql","excel","powerbi","stats"], projects:10, outcome:"Analyst-ready in 3 months" },
  ],

  syllabus: [
    { module:"Module 1: Python", weeks:5, chapters:[
      { title:"Python Basics", topics:["Variables & Data Types","Operators","Strings","I/O"], project:"Personal Finance Tracker" },
      { title:"Structures & Functions", topics:["Loops","Functions","Lambda","Recursion"], project:"ATM Simulator" },
      { title:"Data Structures", topics:["Lists","Tuples & Sets","Dictionaries","Comprehensions"], project:"Contact Book App" },
      { title:"OOP & Modular Python", topics:["OOP Basics","Inheritance","Error Handling","File Handling"], project:"Student Report Card Generator" },
    ]},
    { module:"Module 2: Data Analysis", weeks:4, chapters:[
      { title:"NumPy & Pandas", topics:["Arrays","DataFrames","Missing Values","GroupBy"], project:"Retail Data Cleaning" },
      { title:"EDA & Merging", topics:["EDA Concepts","Outliers","Correlations","Heatmaps"], project:"Amazon Review EDA" },
      { title:"Visualization", topics:["Matplotlib","Seaborn","Plotly"], project:"Netflix Dashboard" },
      { title:"SQL for Analysis", topics:["Joins","Subqueries","Window Functions"], project:"HR Analytics Dashboard" },
    ]},
    { module:"Module 3: SQL",      weeks:3, chapters:[{ title:"SQL Foundations & Advanced", topics:["SELECT/WHERE","Joins","Subqueries","Window Functions","CTEs"], project:"Sales Analytics Report" }]},
    { module:"Module 4: Excel",    weeks:3, chapters:[{ title:"Excel Essentials & Advanced", topics:["Formulas","VLOOKUP","Pivot Tables","Dashboards"], project:"Business Performance Dashboard" }]},
    { module:"Module 5: Power BI", weeks:4, chapters:[{ title:"Power BI & DAX", topics:["Data Import","Power Query","DAX Formulas","Publishing"], project:"HR Attrition Dashboard" }]},
    { module:"Module 6: Statistics", weeks:3, chapters:[{ title:"Statistics for Data Science", topics:["Distributions","Probability","Hypothesis Testing","A/B Testing"], project:"Marketing A/B Test Analysis" }]},
    { module:"Module 7: Machine Learning", weeks:6, chapters:[{ title:"ML Algorithms & Projects", topics:["Regression","Classification","Random Forest","XGBoost","Model Evaluation"], project:"Customer Churn Prediction" }]},
    { module:"Module 8: Deep Learning", weeks:4, chapters:[{ title:"DL & Neural Networks", topics:["ANN","CNN","RNN","TensorFlow/Keras"], project:"Image Classification App" }]},
    { module:"Module 9: NLP", weeks:3, chapters:[{ title:"NLP & Text Analytics", topics:["Tokenization","TF-IDF","Word Embeddings","BERT Basics"], project:"Sentiment Analysis Engine" }]},
    { module:"Module 10: Image Processing", weeks:2, chapters:[{ title:"OpenCV & Computer Vision", topics:["Image Basics","Filters","Feature Extraction","Object Detection"], project:"Traffic Detection System" }]},
    { module:"Module 11: AI Tools ✨", weeks:2, chapters:[{ title:"AI Tools for Data Science", topics:["ChatGPT/Copilot for data","AI for SQL & Python","Prompt Engineering","AI Ethics"], project:"AI-Assisted Data Report" }]},
  ],

  uday: {
    name: "DataVika Uday Batch",
    tagline: "Rising Together — For the Passionate, Not the Privileged.",
    fee: "Pay What You Can (₹0 – whatever you can afford)",
    rules: [
      "Short interview — we check passion, not marks",
      "Pay What You Can — even ₹0 if needed",
      "60% live attendance mandatory per module",
      "Must complete each module to unlock the next",
      "Batch size: 10–15 students max",
      "English + Malayalam sessions",
    ],
    includes: [
      "Full Data Analyst curriculum",
      "All real-world projects included",
      "Certificate of completion",
      "Mock interview + placement support",
      "DataVika alumni community access",
      "Resume & LinkedIn review session",
    ],
  },

  consulting: [
    { icon:"📊", title:"Power BI Dashboards",    desc:"Custom interactive dashboards for your business data.",     price:"From ₹5,000" },
    { icon:"📋", title:"Excel Reporting Systems", desc:"Automated reports that eliminate manual work.",              price:"From ₹3,500" },
    { icon:"🗺️", title:"Data Strategy Roadmap",  desc:"1-hour consultation + written roadmap for your business.",  price:"From ₹2,500" },
    { icon:"📉", title:"Market & Sales Analysis", desc:"Deep dive into sales data. Actionable insights.",           price:"From ₹5,000" },
    { icon:"🧑‍🤝‍🧑", title:"Data Literacy Training",  desc:"Train your team to read and use data confidently.",       price:"From ₹8,000" },
    { icon:"🎯", title:"Hiring & Assessment",     desc:"Design assessments, shortlist data candidates.",            price:"From ₹4,000" },
  ],

  events: [
    { title:"Free Demo: Python for Data Science", date:"2026-03-22", time:"7:00 PM IST", mode:"Online · Zoom", spots:20, lang:"English + Malayalam" },
    { title:"Power BI Weekend Workshop",          date:"2026-03-29", time:"10:00 AM IST",mode:"Online · Zoom", spots:15, lang:"Malayalam" },
    { title:"New Batch: Data Analyst Track",      date:"2026-04-05", time:"7:30 PM IST", mode:"Online · Evenings", spots:12, lang:"English + Malayalam" },
    { title:"Uday Batch — Applications Open",     date:"2026-04-10", time:"Apply anytime",mode:"Interview-based", spots:15, lang:"English + Malayalam" },
  ],

  testimonials: [
    { name:"Arjun R.",  role:"Data Analyst @ Startup",      text:"Before DataVika I had a degree but zero confidence. After 3 months of real project work, I landed my first data job in 6 weeks.", stars:5, init:"A" },
    { name:"Priya S.",  role:"BI Developer",                 text:"Devika's Power BI sessions are unlike anything I've seen. She teaches you to think like an analyst. My portfolio got me noticed immediately.", stars:5, init:"P" },
    { name:"Mohammed F.",role:"ML Engineer",                 text:"The 1:1 mentoring was a game changer. Flexible schedule, real guidance, and I had 10 solid GitHub projects. Totally worth it.", stars:5, init:"M" },
    { name:"Sneha K.",  role:"Teacher → Data Analyst",      text:"I was a teacher for 6 years. Devika helped me switch to data analytics in 4 months. The custom syllabus made all the difference.", stars:5, init:"S" },
  ],

  quiz: {
    sql: { title:"SQL Quiz", questions:[
      { q:"Which clause filters groups?", options:["WHERE","HAVING","GROUP BY","FILTER"], ans:1 },
      { q:"What does LEFT JOIN return?", options:["Only matching rows","All left + matching right","All rows","Only right rows"], ans:1 },
      { q:"Which function counts rows?", options:["SUM()","COUNT()","TOTAL()","NUM()"], ans:1 },
      { q:"What is a subquery?", options:["A backup query","A query inside another query","A slow query","Only a JOIN"], ans:1 },
      { q:"Which clause orders results?", options:["SORT BY","ARRANGE BY","ORDER BY","RANK BY"], ans:2 },
    ]},
    python: { title:"Python Quiz", questions:[
      { q:"What type is [1, 2, 3]?", options:["Tuple","Set","List","Dictionary"], ans:2 },
      { q:"Which keyword defines a function?", options:["function","def","func","define"], ans:1 },
      { q:"What does len() return?", options:["Last element","Data type","Length","Memory size"], ans:2 },
      { q:"What is a lambda?", options:["A slow function","An anonymous one-line function","A class method","Built-in only"], ans:1 },
      { q:"Which library is used for data manipulation?", options:["NumPy","Pandas","Matplotlib","SciPy"], ans:1 },
    ]},
    powerbi: { title:"Power BI Quiz", questions:[
      { q:"What language is used for calculations in Power BI?", options:["SQL","Python","DAX","MDX"], ans:2 },
      { q:"What is Power Query used for?", options:["Creating visuals","Data transformation","Writing DAX","Publishing"], ans:1 },
      { q:"What is a measure in Power BI?", options:["A fixed column","A dynamic DAX calculation","A chart type","A filter"], ans:1 },
      { q:"What does CALCULATE() do?", options:["Counts rows","Modifies filter context","Creates a table","Joins tables"], ans:1 },
      { q:"What is a slicer?", options:["A chart type","An interactive filter","A data source","A DAX function"], ans:1 },
    ]},
  },

  cheatsheets: [
    { title:"Python Cheat Sheet",    icon:"🐍", topics:"Variables · Functions · Pandas · NumPy · OOP"          },
    { title:"SQL Cheat Sheet",       icon:"🗄️", topics:"Joins · Subqueries · Window Functions · Aggregations"  },
    { title:"Power BI Cheat Sheet",  icon:"📈", topics:"DAX Formulas · Power Query · Visualizations · Tips"    },
    { title:"Excel Cheat Sheet",     icon:"📊", topics:"VLOOKUP · Pivot Tables · Formulas · Shortcuts"         },
    { title:"ML Cheat Sheet",        icon:"🤖", topics:"Algorithms · Model Evaluation · Scikit-learn · Tips"   },
    { title:"Statistics Cheat Sheet",icon:"📐", topics:"Distributions · Hypothesis Testing · A/B Testing"      },
  ],
};
if (typeof module !== "undefined") module.exports = DV;
