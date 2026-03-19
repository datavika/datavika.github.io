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


// DATAVIKA v5 — All-in-one
function dvInit(){
  initTheme(); initNav(); initParticles(); initBars(); initTyper();
  initMarquee(); renderAll(); initReveal(); initCounters();
  initBuilder(); initSyllabus(); initQuiz(); initTabs();
  initCountdown(); initChatbot(); initForm();
  document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.lang-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  }));
}
// DV is defined above in this same file — safe to call directly
document.addEventListener('DOMContentLoaded', dvInit);

// ── THEME ─────────────────────────────────────────────
function initTheme(){
  const btn=document.getElementById('theme-btn');
  if(localStorage.getItem('dv-theme')==='light') document.body.classList.add('light');
  updateThemeIcon();
  btn?.addEventListener('click',()=>{ document.body.classList.toggle('light'); localStorage.setItem('dv-theme',document.body.classList.contains('light')?'light':'dark'); updateThemeIcon(); });
}
function updateThemeIcon(){ const b=document.getElementById('theme-btn'); if(b) b.textContent=document.body.classList.contains('light')?'🌙':'☀️'; }

// ── NAV ───────────────────────────────────────────────
function initNav(){
  const nav=document.getElementById('nav');
  window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>40),{passive:true});
  document.getElementById('hamburger')?.addEventListener('click',()=>document.getElementById('mobile-menu')?.classList.add('open'));
  document.getElementById('mob-close')?.addEventListener('click',()=>document.getElementById('mobile-menu')?.classList.remove('open'));
  document.getElementById('mobile-menu')?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobile-menu')?.classList.remove('open')));
}

// ── PARTICLES ─────────────────────────────────────────
function initParticles(){
  const c=document.getElementById('particles-canvas'); if(!c) return;
  const ctx=c.getContext('2d'); let W,H,pts=[];
  const resize=()=>{ W=c.width=c.offsetWidth; H=c.height=c.offsetHeight; };
  resize(); window.addEventListener('resize',resize,{passive:true});
  for(let i=0;i<55;i++) pts.push({x:Math.random()*1200,y:Math.random()*800,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1+.3,a:Math.random()*.28+.06});
  const draw=()=>{
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1; if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(57,211,83,${p.a})`; ctx.fill();
    });
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<80){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle=`rgba(57,211,83,${.032*(1-d/80)})`; ctx.lineWidth=.6; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  };
  draw();
}

// ── HERO BARS ─────────────────────────────────────────
function initBars(){
  const h=[30,55,42,78,50,68,88,60,75,92];
  const maxH=Math.max(...h);
  document.querySelectorAll('.mbar').forEach((b,i)=>{
    const bh=h[i%h.length];
    if(bh===maxH) b.classList.add('peak');
    setTimeout(()=>b.style.height=bh+'%',500+i*90);
  });
}

// ── TYPEWRITER ────────────────────────────────────────
function initTyper(){
  const el=document.getElementById('typer'); if(!el) return;
  const lines=['df.groupby("segment").agg({"revenue":"sum"})','model=XGBClassifier(n_estimators=200)','score=cross_val_score(model,X,y,cv=5).mean()','fig=px.bar(df,x="month",y="sales",color="region")'];
  let li=0,ci=0,del=false;
  const tick=()=>{ const ln=lines[li]; if(!del){ci++;el.textContent=ln.slice(0,ci);if(ci===ln.length){del=true;setTimeout(tick,1800);return;}}else{ci--;el.textContent=ln.slice(0,ci);if(ci===0){del=false;li=(li+1)%lines.length;}} setTimeout(tick,del?28:55); };
  tick();
}

// ── MARQUEE ───────────────────────────────────────────
function initMarquee(){
  const t=document.getElementById('marquee-track'); if(!t) return;
  const items=['Python','SQL','Excel','Power BI','Statistics','Machine Learning','Deep Learning','NLP','Image Processing','AI Tools','Real Projects','Mock Interviews','Consulting'];
  t.innerHTML=[...items,...items].map(i=>`<span class="m-item"><span class="m-sep"></span>${i}</span>`).join('');
}

// ── RENDER ────────────────────────────────────────────
function renderAll(){
  if(typeof DV==='undefined'){ setTimeout(renderAll,60); return; }
  renderStats(); renderProblems(); renderTracks(); renderSyllabus();
  renderConsulting(); renderSheets(); renderProjects(); renderEvents();
  renderTestimonials(); renderFooterNav();
  setTimeout(initReveal,200); setTimeout(initCounters,400);
  setTimeout(initBuilder,100); setTimeout(initSyllabus,150);
  setTimeout(initQuiz,100); setTimeout(initTabs,50); setTimeout(initCountdown,100);
}

function renderStats(){
  const el=document.getElementById('stats-row');
  if(!el) return;
  el.innerHTML=DV.hero.stats.map(s=>`
    <div class="reveal">
      <div class="big-stat-val counter" data-t="${s.val}" data-s="${s.suf}">0</div>
      <div class="big-stat-lbl">${s.label}</div>
    </div>`).join('');
}

function renderProblems(){
  const el=document.getElementById('prob-list'); if(!el) return;
  const probs=[
    {i:'📚',t:'Taught theory — never built a real end-to-end project'},
    {i:'🔍',t:'No exposure to messy, real-world datasets'},
    {i:'🧩',t:'Syllabus not aligned with what companies actually hire for'},
    {i:'💸',t:'Expensive bootcamps with rigid, inflexible schedules'},
    {i:'🤝',t:'Zero mentorship or portfolio guidance after the course'},
  ];
  el.innerHTML=probs.map((p,i)=>`<div class="prob-item reveal d${i+1}"><span class="prob-icon">${p.i}</span><span>${p.t}</span></div>`).join('');
}

function renderTracks(){
  const mm={}; DV.modules.forEach(m=>mm[m.id]=m);
  const el=document.getElementById('tracks-grid'); if(!el) return;
  el.innerHTML=DV.tracks.map((t,i)=>`
    <div class="track-card ${i===0?'featured':''} reveal d${i+1}">
      <div class="${i===0?'track-badge':i===1?'track-badge-a':'track-badge-r'}">
        ${i===0?'⭐ Most Popular':i===1?'🚀 Complete Program':'⚡ Quick Track'}
      </div>
      <h3 style="margin-bottom:6px">${t.name}</h3>
      <div class="track-dur">⏱ ${t.duration} · ${t.projects}+ projects</div>
      <div class="track-tags">${t.modules.map(id=>mm[id]?`<span class="track-tag">${mm[id].icon} ${mm[id].name}</span>`:'').join('')}</div>
      <div class="track-out">✅ ${t.outcome}</div>
      <a href="#contact" class="btn btn-ghost" style="margin-top:18px;width:100%;justify-content:center;font-size:.8rem">Enroll Now →</a>
    </div>`).join('');
}

function renderSyllabus(){
  const el=document.getElementById('syl-list'); if(!el) return;
  el.innerHTML=DV.syllabus.map((mod,mi)=>`
    <div class="syl-mod" id="sm-${mi}">
      <div class="syl-hd" onclick="toggleMod(${mi})">
        <span class="syl-n">M${mi+1}</span>
        <span class="syl-t">${mod.module}</span>
        <span class="syl-w">${mod.weeks}w</span>
        <span class="syl-arr">▼</span>
      </div>
      <div class="syl-bd">${mod.chapters.map(ch=>`
        <div class="syl-ch">
          <div class="syl-ch-t">${ch.title}</div>
          <div class="syl-topics">${ch.topics.map(t=>`<span class="syl-topic">${t}</span>`).join('')}</div>
          ${ch.project?`<div class="syl-proj">${ch.project}</div>`:''}
        </div>`).join('')}
      </div>
    </div>`).join('');
}
window.toggleMod=mi=>document.getElementById(`sm-${mi}`)?.classList.toggle('open');

function renderConsulting(){
  const el=document.getElementById('consult-grid'); if(!el) return;
  el.innerHTML=DV.consulting.map((c,i)=>`
    <div class="card card-action consult-card reveal d${i%3+1}">
      <div class="consult-icon">${c.icon}</div>
      <h3>${c.title}</h3><p>${c.desc}</p>
      <div class="consult-price">${c.price}</div>
    </div>`).join('');
}

function renderSheets(){
  const el=document.getElementById('sheets-grid'); if(!el) return;
  el.innerHTML=DV.cheatsheets.map(s=>`
    <div class="sheet-card reveal">
      <div class="sheet-icon">${s.icon}</div>
      <div class="sheet-title">${s.title}</div>
      <div class="sheet-topics">${s.topics}</div>
      <div class="sheet-dl" onclick="reqSheet('${s.title}')">⬇ Download Free →</div>
    </div>`).join('');
}
window.reqSheet=t=>alert(`To get the "${t}", mention it in the contact form below. We'll email it free!`);

function renderProjects(){
  const el=document.getElementById('proj-grid'); if(!el) return;
  const ideas=[
    {tool:'Python',t:'Personal Finance Tracker',l:'Beginner'},{tool:'SQL',t:'Hospital Patient Database',l:'Beginner'},
    {tool:'Excel',t:'Monthly Budget Dashboard',l:'Beginner'},{tool:'Power BI',t:'Sales Performance Report',l:'Intermediate'},
    {tool:'ML',t:'Customer Churn Model',l:'Advanced'},{tool:'NLP',t:'Movie Review Sentiment',l:'Intermediate'},
    {tool:'Power BI',t:'HR Attrition Dashboard',l:'Intermediate'},{tool:'Python',t:'Weather Data Scraper',l:'Beginner'},
    {tool:'DL',t:'Handwritten Digit Recognition',l:'Advanced'},{tool:'SQL',t:'E-Commerce Order Analysis',l:'Intermediate'},
    {tool:'ML',t:'House Price Predictor',l:'Intermediate'},{tool:'AI Tools',t:'AI-Assisted Data Report',l:'All Levels'},
  ];
  el.innerHTML=ideas.map(p=>`<div class="proj-card reveal"><div class="proj-tool">${p.tool}</div><div class="proj-title">${p.t}</div><div class="proj-lvl">${p.l}</div></div>`).join('');
}

function renderEvents(){
  const el=document.getElementById('events-list'); if(!el) return;
  el.innerHTML=DV.events.map(e=>{
    const d=new Date(e.date);
    return `<div class="event-card reveal">
      <div class="ev-date"><div class="ev-day">${d.getDate()}</div><div class="ev-mon">${d.toLocaleDateString('en',{month:'short'})}</div></div>
      <div class="ev-info"><h3>${e.title}</h3><div class="ev-meta"><span>🕐 ${e.time}</span><span>📍 ${e.mode}</span><span>👥 ${e.spots} spots</span><span class="ev-lang">${e.lang}</span></div></div>
      <a href="#contact" class="btn btn-primary" style="font-size:.76rem;padding:9px 16px">Register</a>
    </div>`;
  }).join('');
}

function renderTestimonials(){
  const el=document.getElementById('testi-grid'); if(!el) return;
  el.innerHTML=DV.testimonials.map((t,i)=>`
    <div class="card testi-card reveal d${i%2+1}">
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-av">${t.init}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
      </div>
    </div>`).join('');
}

function renderFooterNav(){
  const el=document.getElementById('footer-nav'); if(!el) return;
  [['Home','#hero'],['About','#about'],['Courses','#courses'],['Syllabus','#syllabus'],
   ['Uday Batch','#uday'],['Consulting','#consulting'],['Resources','#resources'],
   ['Events','#events'],['Contact','#contact']
  ].forEach(([n,h])=>{ const li=document.createElement('li'); li.innerHTML=`<a href="${h}">${n}</a>`; el.appendChild(li); });
}

// ── SCROLL REVEAL ─────────────────────────────────────
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('up'); obs.unobserve(e.target); }});
  },{threshold:.1});
  document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el=>obs.observe(el));
}

// ── COUNTERS ──────────────────────────────────────────
function initCounters(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ animCount(e.target); obs.unobserve(e.target); }});
  },{threshold:.5});
  document.querySelectorAll('.counter').forEach(el=>obs.observe(el));
}
function animCount(el){
  const target=parseInt(el.dataset.t),suf=el.dataset.s||'',dur=1800,start=performance.now();
  (function step(ts){ const p=Math.min((ts-start)/dur,1),e=1-Math.pow(1-p,3); el.textContent=Math.round(e*target)+suf; if(p<1) requestAnimationFrame(step); })(start);
}

// ── BUILDER ───────────────────────────────────────────
function initBuilder(){
  if(typeof DV==='undefined') return;
  const grid=document.getElementById('mods-grid'); if(!grid) return;
  grid.innerHTML=DV.modules.map(m=>`
    <label class="mod-check" data-id="${m.id}" data-w="${m.weeks}" data-p="${m.price}">
      <input type="checkbox" value="${m.id}">
      <span style="font-size:1rem;flex-shrink:0">${m.icon}</span>
      <div style="flex:1"><div class="mod-name">${m.name}</div><div class="mod-dur">${m.weeks} weeks</div></div>
      <span class="mod-tag">${m.tag}</span>
    </label>`).join('');
  grid.querySelectorAll('.mod-check').forEach(l=>l.addEventListener('click',()=>{
    const cb=l.querySelector('input'); cb.checked=!cb.checked; l.classList.toggle('sel',cb.checked); updateSum();
  }));
}
function updateSum(){
  const sel=[...document.querySelectorAll('.mod-check.sel')];
  const list=document.getElementById('sum-list'),totD=document.getElementById('sum-dur'),totP=document.getElementById('sum-price'),wa=document.getElementById('wa-sum-btn');
  if(!list) return;
  if(!sel.length){ list.innerHTML='<div class="sum-empty">Select modules above →</div>'; if(totD) totD.textContent='—'; if(totP) totP.textContent='₹0'; return; }
  let w=0,p=0;
  list.innerHTML=sel.map(l=>{ const lw=parseInt(l.dataset.w),lp=parseInt(l.dataset.p); w+=lw; p+=lp; return `<div class="sum-item"><span>${l.querySelector('.mod-name').textContent}</span><span>${lw}w · ₹${lp.toLocaleString('en-IN')}</span></div>`; }).join('');
  if(totD) totD.textContent=`${w} weeks (~${Math.ceil(w/4)} months)`;
  if(totP) totP.textContent=`₹${p.toLocaleString('en-IN')}`;
  const mods=sel.map(l=>l.querySelector('.mod-name').textContent).join(', ');
  const msg=encodeURIComponent(`Hi Devika! I want to build a custom DataVika course.\n\nModules: ${mods}\nDuration: ${w} weeks\nEstimated: ₹${p.toLocaleString('en-IN')}\n\nCan we discuss?`);
  if(wa) wa.href=`https://wa.me/${DV.brand.whatsapp}?text=${msg}`;
}

// ── SYLLABUS ──────────────────────────────────────────
function initSyllabus(){ setTimeout(()=>document.getElementById('sm-0')?.classList.add('open'),600); }

// ── QUIZ ──────────────────────────────────────────────
let QZ={topic:'sql',q:0,score:0};
function initQuiz(){
  document.querySelectorAll('.q-sel-btn').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.q-sel-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    QZ={topic:b.dataset.q,q:0,score:0}; renderQuiz();
  }));
  renderQuiz();
}
function renderQuiz(){
  if(typeof DV==='undefined') return;
  const quiz=DV.quiz[QZ.topic],box=document.getElementById('quiz-wrap'); if(!box||!quiz) return;
  const qs=quiz.questions,qi=QZ.q;
  if(qi>=qs.length){
    const pct=Math.round(QZ.score/qs.length*100);
    const msg=pct>=80?'🎉 You are interview-ready for this topic!':pct>=50?'👍 Good! A quick brush-up would sharpen you.':'💡 Book a session with Devika to fix these gaps.';
    box.innerHTML=`<div class="q-result"><div class="q-score">${QZ.score}/${qs.length}</div><p style="color:var(--text2);margin:10px 0 20px">${msg}</p>${pct<80?`<a href="#contact" class="btn btn-primary" style="margin:0 auto">Book Brush-Up Session</a>`:''}<br><button class="btn btn-ghost" style="margin-top:12px" onclick="resetQ()">Try Again</button></div>`;
    return;
  }
  const q=qs[qi];
  box.innerHTML=`<div class="q-prog">${qs.map((_,i)=>`<div class="q-pip ${i<qi?'done':i===qi?'cur':''}"></div>`).join('')}</div><div style="font-size:.72rem;color:var(--text3);margin-bottom:10px;font-family:var(--font-d)">${qi+1} / ${qs.length}</div><div class="q-text">${q.q}</div><div class="q-opts">${q.options.map((o,i)=>`<button class="q-opt" onclick="ansQ(${i})">${o}</button>`).join('')}</div>`;
}
window.ansQ=chosen=>{
  if(typeof DV==='undefined') return;
  const q=DV.quiz[QZ.topic].questions[QZ.q],opts=document.querySelectorAll('.q-opt');
  opts.forEach(o=>o.disabled=true); opts[q.ans].classList.add('correct');
  if(chosen!==q.ans) opts[chosen].classList.add('wrong'); else QZ.score++;
  setTimeout(()=>{ QZ.q++; renderQuiz(); },850);
};
window.resetQ=()=>{ QZ.q=0; QZ.score=0; renderQuiz(); };

// ── RESOURCE TABS ─────────────────────────────────────
function initTabs(){
  document.querySelectorAll('.res-tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.res-tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.res-pane').forEach(p=>p.classList.remove('active'));
    t.classList.add('active'); document.getElementById('rp-'+t.dataset.tab)?.classList.add('active');
  }));
}

// ── COUNTDOWN ─────────────────────────────────────────
function initCountdown(){
  const el=document.getElementById('countdown'); if(!el||typeof DV==='undefined') return;
  const next=DV.events.find(e=>new Date(e.date)>new Date()); if(!next) return;
  const target=new Date(next.date+'T19:00:00');
  const tick=()=>{
    const diff=target-new Date(); if(diff<=0){ el.innerHTML='<span style="color:var(--green);font-family:var(--font-d);font-weight:700">🔴 Session is LIVE!</span>'; return; }
    const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
    el.innerHTML=`<div class="cd-box"><div class="cd-num">${String(d).padStart(2,'0')}</div><div class="cd-lbl">Days</div></div><div class="cd-colon">:</div><div class="cd-box"><div class="cd-num">${String(h).padStart(2,'0')}</div><div class="cd-lbl">Hours</div></div><div class="cd-colon">:</div><div class="cd-box"><div class="cd-num">${String(m).padStart(2,'0')}</div><div class="cd-lbl">Mins</div></div><div class="cd-colon">:</div><div class="cd-box"><div class="cd-num">${String(s).padStart(2,'0')}</div><div class="cd-lbl">Secs</div></div>`;
    setTimeout(tick,1000);
  };
  tick();
}

// ── CHATBOT ───────────────────────────────────────────
const BOT={
  fee:"Very affordable! Single tool sessions from ~₹2,000. Full tracks have flexible payment. Uday Batch is pay-what-you-can — even ₹0. 💚",
  course:"Python, SQL, Excel, Power BI, Statistics, ML, Deep Learning, NLP, Image Processing, AI Tools. Book a single tool, custom combo, or full track!",
  duration:"SQL & Excel = 3 weeks. Power BI = 4 weeks. Python = 5 weeks. ML = 6 weeks. Full Analyst Track = 5.5 months. Full DS Track = 9–10 months.",
  demo:"Yes! Free demo sessions regularly. Check Events section or WhatsApp Devika directly.",
  uday:"Uday Batch: pay what you can, short interview, 60% attendance mandatory. For passionate students regardless of financial background. ❤️",
  mock:"Yes! Technical mock interviews, HR round prep, resume + LinkedIn review, full simulations with recorded feedback.",
  language:"All courses in English and Malayalam. Choose when booking.",
  project:"100+ real-world projects across all tracks. Full GitHub portfolio included.",
  consult:"Power BI dashboards, Excel systems, data strategy, market analysis, team training, hiring support — SME-friendly prices.",
  default:"Great question! Fill the contact form or WhatsApp Devika. Response within 24 hours. 😊",
};
function getBotReply(m){
  m=m.toLowerCase();
  if(m.includes('fee')||m.includes('price')||m.includes('cost')||m.includes('afford')) return BOT.fee;
  if(m.includes('course')||m.includes('offer')||m.includes('teach')) return BOT.course;
  if(m.includes('duration')||m.includes('long')||m.includes('week')||m.includes('month')) return BOT.duration;
  if(m.includes('demo')||m.includes('free')) return BOT.demo;
  if(m.includes('uday')||m.includes('financial')||m.includes('scholarship')) return BOT.uday;
  if(m.includes('mock')||m.includes('interview')) return BOT.mock;
  if(m.includes('language')||m.includes('malayalam')) return BOT.language;
  if(m.includes('project')) return BOT.project;
  if(m.includes('consult')||m.includes('business')) return BOT.consult;
  return BOT.default;
}
function initChatbot(){
  const btn=document.getElementById('chatbot-btn'),panel=document.getElementById('chatbot-panel'),msgs=document.getElementById('chat-msgs'),inp=document.getElementById('chat-inp');
  btn?.addEventListener('click',()=>panel?.classList.toggle('open'));
  document.getElementById('chat-x')?.addEventListener('click',()=>panel?.classList.remove('open'));
  const addMsg=(text,who)=>{ const m=document.createElement('div'); m.className=`msg ${who}`; m.textContent=text; msgs?.appendChild(m); msgs?.scrollTo(0,msgs.scrollHeight); };
  const sendMsg=text=>{ if(!text.trim()) return; addMsg(text,'usr'); if(inp) inp.value=''; setTimeout(()=>addMsg(getBotReply(text),'bot'),550); };
  document.getElementById('chat-send')?.addEventListener('click',()=>sendMsg(inp?.value||''));
  inp?.addEventListener('keydown',e=>{ if(e.key==='Enter') sendMsg(inp.value); });
  document.querySelectorAll('.chat-sug').forEach(s=>s.addEventListener('click',()=>sendMsg(s.textContent)));
}

// ── FORM ──────────────────────────────────────────────
function initForm(){
  const form=document.getElementById('contact-form'); if(!form) return;
  form.addEventListener('submit',()=>{ const btn=form.querySelector('.btn-submit'); btn.textContent='Sending...'; btn.disabled=true; setTimeout(()=>{ document.getElementById('form-success').style.display='block'; },1500); });
}
