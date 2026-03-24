// ================================================================
// DATAVIKA — app.js  |  Complete render + interaction logic
// ================================================================


/* ── NAV ── */
function initNav(){
  const nav=document.getElementById('nav');
  const ham=document.getElementById('hamburger');
  const mob=document.getElementById('mob-menu');
  const cls=document.getElementById('mob-close');
  window.addEventListener('scroll',()=>{if(nav)nav.classList.toggle('scrolled',window.scrollY>60);},{passive:true});
  if(ham) ham.onclick=()=>{if(mob)mob.classList.add('open');};
  if(cls) cls.onclick=()=>{if(mob)mob.classList.remove('open');};
  if(mob) mob.querySelectorAll('a').forEach(a=>a.onclick=()=>mob.classList.remove('open'));
}

/* ── HERO TYPEWRITER ── */
function initHero(){
  const el=document.getElementById('typer');
  if(!el) return;
  const lines=['model.fit(X_train, y_train)','print(model.score(X_test, y_test))','# Accuracy: 0.94'];
  let li=0,ci=0,del=false;
  setInterval(()=>{
    const line=lines[li%lines.length];
    if(!del){el.textContent=line.slice(0,++ci);if(ci>=line.length)del=true;}
    else{el.textContent=line.slice(0,--ci);if(ci<=0){del=false;li++;}}
  },80);
}

/* ── MINI BARS ── */
function initBars(){
  const heights=[40,55,70,50,90,65,80,45,75,100];
  document.querySelectorAll('.mbar').forEach((b,i)=>{
    b.style.height=(heights[i%heights.length]||60)+'%';
    b.style.animationDelay=(i*0.1)+'s';
  });
}

/* ── MARQUEE ── */
function initMarquee(){
  const el=document.getElementById('marquee-track');
  if(!el||typeof DV==='undefined') return;
  const _MI={"python":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.5 2 8 3.5 8 5v2h4v1H6C4.3 8 3 9.3 3 11v3c0 1.7 1.3 3 3 3h1V15c0-1.7 1.3-3 3-3h4c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z"/><path d="M12 22c3.5 0 4-1.5 4-3v-2h-4v-1h6c1.7 0 3-1.3 3-3v-3c0-1.7-1.3-3-3-3h-1v2c0 1.7-1.3 3-3 3H10c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3z"/></svg>`,"sql":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v5c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 10v5c0 1.66 4.03 3 9 3s9-1.34 9-3v-5"/><path d="M3 15v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/></svg>`,"excel":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>`,"powerbi":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4M7 7v7M12 5v9M17 9v5"/></svg>`,"stats":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20M6 20V10M10 20V4M14 20V14M18 20V8"/></svg>`,"da":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v3l2 2"/></svg>`,"ml":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>`,"dl":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-5 6M12 11l5 6"/><circle cx="12" cy="13" r="1" fill="currentColor"/></svg>`,"nlp":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8M8 14h5"/></svg>`,"ip":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,"aitools":String.raw`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7H1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>`};el.innerHTML=[...DV.modules,...DV.modules].map(m=>`<span class="marquee-item" style="display:inline-flex;align-items:center;gap:6px">${_MI[m.icon]||m.icon} ${m.name}</span>`).join('');
}

/* ── ROTATING SUBS ── */
function initRotatingSub(){
  const el=document.getElementById('rotating-sub');
  if(!el) return;
  const subs=['For freshers wanting their first data job','For working professionals upskilling','For self-learners needing direction','For anyone stuck — skills but no placement','Taught in English and Malayalam'];
  let i=0;
  function rotate(){el.style.opacity='0';setTimeout(()=>{el.textContent=subs[i%subs.length];el.style.opacity='1';i++;},500);}
  rotate();setInterval(rotate,3500);
}

/* ── HERO STATS ── */
function renderHeroStats(){
  const el=document.getElementById('hero-stats');
  if(!el||typeof DV==='undefined') return;
  el.innerHTML=DV.hero.stats.map(s=>`<div><div class="s-val counter" data-t="${s.val}" data-s="${s.suf}">0</div><div class="s-lbl">${s.label}</div></div>`).join('');
}

/* ── STATS STRIP ── */
function renderStats(){
  const el=document.getElementById('stats-row');
  if(!el) return;
  const items=[{icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,val:'10+',lbl:'Students Trained'},{icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="9" y="3" width="6" height="6" rx="1"/><rect x="2" y="15" width="6" height="6" rx="1"/><rect x="16" y="15" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/></svg>`,val:'100+',lbl:'Real Projects'},{icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,val:'11',lbl:'Tools Covered'},{icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20"/><path d="M2 12h20"/></svg>`,val:'EN+ML',lbl:'Bilingual Sessions'},{icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,val:'1:1',lbl:'Personal Sessions'},{icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,val:'Kerala',lbl:'India · Online'}];
  el.innerHTML=items.map(s=>`<div class="stat-card reveal"><div class="stat-icon" style="display:flex;align-items:center;justify-content:center;margin-bottom:8px;color:var(--green)">${hicon(s.icon,28,"#39D353")}</div><div class="stat-val">${s.val}</div><div class="stat-lbl">${s.lbl}</div></div>`).join('');
}

/* ── PROBLEMS ── */
function renderProblems(){
  const el=document.getElementById('prob-list');
  if(!el) return;
  const probs=[{i:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,t:'Taught theory — never built a real end-to-end project'},{i:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,t:'No exposure to messy real-world datasets'},{i:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,t:'Syllabus not aligned with what companies actually want'},{i:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>`,t:'Zero interview practice before facing real recruiters'},{i:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,t:'No portfolio, no GitHub, no proof of skills'}];
  el.innerHTML=probs.map(p=>`<div class="prob-item reveal"><span class="prob-ico" style="display:inline-flex;align-items:flex-start;flex-shrink:0;padding-top:2px">${hicon(p.i,20,"#FF6050")}</span><span class="prob-txt">${p.t}</span></div>`).join('');
}

/* ── HOW IT WORKS ── */
function renderHowItWorks(){
  const el=document.getElementById('how-steps');
  if(!el) return;
  const steps=[{icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.845v6.31a1 1 0 0 1-1.447.894L15 14"/><rect x="3" y="7" width="12" height="10" rx="2"/></svg>`,n:'01',t:'Free Demo',d:'30-min call with Devika. She understands your goals and recommends the right path. No selling.'},{icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,n:'02',t:'Your Plan',d:'Custom syllabus and schedule built around you. Morning, evening or weekend.'},{icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,n:'03',t:'Real Projects',d:'Every concept taught through a portfolio-level project. Work recruiters notice.'},{icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,n:'04',t:'Get Hired',d:'Mock interviews, resume, portfolio included in all bundles. Leave job-ready.'}];
  el.innerHTML=steps.map((s,i)=>`
    <div class="card reveal d${i+1}" style="text-align:center;padding:28px 18px;position:relative">
      ${i<3?'<div style="position:absolute;top:50%;right:-10px;z-index:2;font-size:.9rem;color:var(--border)">→</div>':''}
      <div style="display:flex;align-items:center;justify-content:center;margin-bottom:12px;color:var(--green)">${s.icon}</div>
      <div style="font-family:var(--font-d);font-size:.6rem;font-weight:700;color:var(--green);letter-spacing:.12em;margin-bottom:6px">STEP ${s.n}</div>
      <div style="font-family:var(--font-d);font-size:.95rem;font-weight:700;color:var(--t1);margin-bottom:8px">${s.t}</div>
      <p style="font-size:.8rem;color:var(--t2);line-height:1.6">${s.d}</p>
    </div>`).join('');
}

/* ── INDIVIDUAL TOOLS ── */
function renderSingles(){
  const el=document.getElementById('fee-singles');
  if(!el||typeof DV==='undefined') return;
  el.innerHTML=DV.modules.map(s=>`
    <div class="card card-action" style="padding:18px;position:relative;overflow:hidden">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <span style="display:inline-flex;align-items:center;color:var(--green)">${hicon(s.icon,24,"#39D353")}</span>
        <span style="font-size:.58rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--green);background:var(--gdim);padding:2px 8px;border-radius:50px;border:1px solid rgba(57,211,83,.18)">${s.tag}</span>
      </div>
      <div style="font-family:var(--font-d);font-size:.92rem;font-weight:700;color:var(--t1);margin-bottom:4px">${s.name}</div>
      <div style="font-size:.72rem;color:var(--t3);margin-bottom:12px">${s.weeks} weeks</div>
      <div style="font-family:var(--font-d);font-size:1.3rem;font-weight:800;font-style:normal;color:var(--green);margin-bottom:10px;letter-spacing:-.02em">Rs.${s.fee.toLocaleString('en-IN')}</div>
      <div style="font-size:.68rem;color:var(--t3);padding:5px 8px;background:rgba(57,211,83,.04);border-radius:6px;border:1px solid rgba(57,211,83,.1)">Bundle 3 tools → get placement prep free</div>
    </div>`).join('');
}

/* ── PLACEMENT RULE ── */
function renderPlacementRule(){
  const el=document.getElementById('placement-prep-rule');
  if(!el) return;
  el.innerHTML=`
    <div style="background:linear-gradient(135deg,rgba(57,211,83,.09),rgba(57,211,83,.02));border:1px solid rgba(57,211,83,.25);border-radius:var(--r-xl);padding:22px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px">
      <div>
        <div style="font-family:var(--font-d);font-size:.9rem;font-weight:700;color:var(--t1);margin-bottom:6px">Choose Any 3-Course Bundle → Placement Prep Included FREE</div>
        <p style="font-size:.82rem;color:var(--t2);margin-bottom:8px;max-width:500px">Every bundle includes <strong style="color:var(--green)">Mock Interview + Resume Building + Portfolio Website</strong> at no extra charge.</p>
        <div style="display:flex;gap:5px;flex-wrap:wrap">${['Power Pack','Data Analyst Track','ML+DL+NLP Bundle','Data Scientist Track'].map(t=>`<span style="font-size:.66rem;color:var(--green);background:var(--gdim);padding:2px 8px;border-radius:50px;border:1px solid rgba(57,211,83,.18)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#39D353" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> ${t}</span>`).join('')}</div>
      </div>
      <a href="#contact" class="btn btn-p" style="flex-shrink:0;white-space:nowrap;font-size:.82rem">Build My Bundle →</a>
    </div>`;
}

/* ── BUNDLES ── */
function renderBundles(){
  const el=document.getElementById('fee-tracks');
  if(!el) return;
  const tracks=[
    {name:"Power Pack",subtitle:"SQL + Excel + Power BI",duration:"10 weeks",fee:"Rs.25,000",emi:"2 x Rs.12,750",badge:"Job-Ready Fast Track",modules:"SQL · Excel · Power BI",saving:"Rs.1,000 vs individual",featured:false},
    {name:"Data Analyst Track",subtitle:"Complete analyst journey",duration:"5.5 months",fee:"Rs.49,999",emi:"3 x Rs.16,999",badge:"Most Popular",modules:"Python · SQL · Excel · Power BI · Stats · DA",saving:"Rs.6,001 vs individual",featured:true},
    {name:"ML + DL + NLP Bundle",subtitle:"Advanced AI specialisation",duration:"13 weeks",fee:"Rs.31,999",emi:"2 x Rs.16,199",badge:"Advanced",modules:"Machine Learning · Deep Learning · NLP",saving:"Rs.2,501 vs individual",featured:false},
    {name:"Data Scientist Track",subtitle:"Complete data science program",duration:"9-10 months",fee:"Rs.65,000",emi:"5 x Rs.13,000",badge:"Complete Program",modules:"All 11 modules · End-to-end",saving:"Best value — all tools",featured:false},
  ];
  el.innerHTML=tracks.map(t=>`
    <div class="card" style="padding:24px;position:relative;overflow:hidden;${t.featured?'border-color:rgba(57,211,83,.4)':''}">
      ${t.featured?'<div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--green),rgba(57,211,83,.2))"></div>':''}
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px;gap:6px;flex-wrap:wrap">
        <span style="font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:2px 8px;border-radius:50px;${t.featured?'background:var(--gdim);color:var(--green);border:1px solid rgba(57,211,83,.25)':'background:rgba(245,166,35,.1);color:var(--amber);border:1px solid rgba(245,166,35,.2)'}">${t.badge}</span>
        <span style="font-size:.58rem;font-weight:700;color:var(--green);background:var(--gdim);padding:2px 7px;border-radius:50px;border:1px solid rgba(57,211,83,.18)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> Placement Included</span>
      </div>
      <h3 style="font-size:.98rem;margin-bottom:2px">${t.name}</h3>
      <div style="font-size:.74rem;color:var(--t3);margin-bottom:3px">${t.subtitle}</div>
      <div style="font-size:.7rem;color:var(--t3);margin-bottom:12px">${t.duration}</div>
      <div style="font-family:var(--font-d);font-size:1.45rem;font-weight:800;font-style:normal;color:var(--green);margin-bottom:2px;letter-spacing:-.02em">${t.fee}</div>
      <div style="font-size:.68rem;color:var(--amber);margin-bottom:2px">or ${t.emi}</div>
      <div style="font-size:.66rem;color:var(--green);margin-bottom:10px">Save ${t.saving}</div>
      <div style="font-size:.7rem;color:var(--t3);margin-bottom:8px;padding:6px 9px;background:rgba(255,255,255,.03);border-radius:6px;line-height:1.5">${t.modules}</div>
      <div style="font-size:.68rem;color:var(--green);margin-bottom:12px;padding:5px 8px;background:var(--gdim);border-radius:6px;border:1px solid rgba(57,211,83,.14)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#39D353" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg> Mock + Resume + Portfolio FREE</div>
      <a href="#contact" class="btn ${t.featured?'btn-p':'btn-g'}" style="width:100%;justify-content:center;font-size:.8rem">Enrol Now →</a>
    </div>`).join('');
}

/* ── 1:1 CARD ── */
function renderOneOnOne(){
  const el=document.getElementById('fee-1on1');
  if(!el) return;
  el.innerHTML=`
    <div style="background:linear-gradient(135deg,rgba(57,211,83,.08),rgba(57,211,83,.02));border:2px solid rgba(57,211,83,.35);border-radius:var(--r-xl);padding:28px 32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px">
      <div style="flex:1;min-width:240px">
        <div style="font-family:var(--font-d);font-size:.66rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--green);margin-bottom:8px"> Premium 1:1 Personalised Sessions</div>
        <h3 style="font-size:1.05rem;margin-bottom:7px">Want sessions fully dedicated to just you?</h3>
        <p style="font-size:.84rem;color:var(--t2);margin-bottom:12px;max-width:460px">Your pace. Your schedule. Custom syllabus. Every session is Devika and you — full attention, no other students.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap">${['Any course','Your schedule','Custom pace','Direct access'].map(f=>`<div style="display:flex;align-items:center;gap:5px;font-size:.76rem;color:var(--t2)"><span style="color:var(--green)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#39D353" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg></span>${f}</div>`).join('')}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:9px">
        <div style="font-size:.78rem;color:var(--t3);text-align:center">Special pricing — contact Devika</div>
        <a href="https://wa.me/919048319556?text=Hi Devika! I am interested in 1:1 personalised sessions. Can you share the pricing?" target="_blank" class="btn btn-p"> WhatsApp for 1:1 Pricing</a>
        <a href="#contact" class="btn btn-g" style="font-size:.78rem">Or fill contact form</a>
      </div>
    </div>`;
}

/* ── PACKS ── */
function renderPacks(){
  const el=document.getElementById('fee-packs');
  if(!el) return;

  const learningPacks=[
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,name:"Self-Study Mentorship",tagline:"You study. Devika guides.",
     fee:"Rs.4,000",period:"/ 4 months",type:"learning",
     inc:["Weekly 45-min 1:1 check-in","Personalised study roadmap","WhatsApp doubt support","Progress tracking","Curated weekly resources"],
     who:"Self-learners · YouTube studiers · Career switchers"},
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,name:"Brush-Up Pack",tagline:"Already know it. Just rusty.",
     fee:"Rs.2,500",period:"1 week · 3 sessions",type:"learning",
     inc:["Gap analysis in Session 1","3 targeted intensive sessions","Practice exercises","Tool cheat sheet","Mini assessment"],
     who:"Working professionals · Interview revisers"},
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,name:"Interview Communication Pack",tagline:"Know your stuff. Now say it clearly.",
     fee:"Rs.3,400",period:"45 days",type:"learning",featured:true,
     inc:[
       "Week 1-2: Technical explanation practice — explain your project in 2 min clearly",
       "Week 3-4: HR round language — tell me about yourself, strengths, salary negotiation",
       "Week 5-6: Case study communication — think out loud, structure answers confidently",
       "10 common data interview Qs — answer in English, get feedback on language + content",
       "WhatsApp practice prompts every 2 days throughout 45 days",
       ],
     who:"Data students who freeze when explaining their work in English · Interview-anxious professionals · Anyone who knows the concepts but struggles to communicate them",
     note:"Communication is what separates candidates who get offers from those who don't."},
  ];

  const placementPacks=[
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,name:"Mock Interview Pack",tagline:"Practice until it feels natural.",
     standalone:"Rs.3,500",dur:"3 rounds",
     inc:["Technical round — tool-specific Qs","HR + behavioural round","Case study round","Detailed written feedback report","Improvement action plan"],
     who:"Job seekers · Pre-placement students"},
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,name:"Resume + LinkedIn Pack",tagline:"Build a profile recruiters notice.",
     standalone:"Rs.2,500",dur:"2 sessions",
     inc:["ATS resume from scratch","LinkedIn complete rewrite","Skills + featured section","Cover letter template","Personal brand checklist"],
     who:"Anyone applying for data roles"},
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="22" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg>`,name:"Portfolio Pack",tagline:"Show your work. Get noticed.",
     standalone:"Rs.2,500",dur:"2 sessions",
     inc:["GitHub profile setup + bio","3 project READMEs","Portfolio on GitHub Pages","LinkedIn Featured updated","Presentation tips"],
     who:"Students with projects but no portfolio"},
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,name:"Industry-Ready Pack",tagline:"Everything to get hired.",
     standalone:"Rs.9,000",dur:"3 weeks",
     inc:["ATS resume + LinkedIn overhaul","GitHub portfolio setup","3 full mock interview rounds","Written feedback + improvement plan","Job application strategy"],
     who:"Freshers · Career switchers · Final-year"},
    {icon:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,name:"Complete Placement Bundle",tagline:"All packs. One price.",
     standalone:"Rs.12,999",dur:"4 weeks",featured:true,
     inc:["Resume + LinkedIn Pack","Portfolio Website Pack","3 Mock Interview Rounds","Industry-Ready Prep","Priority WhatsApp support","30-day follow-up"],
     who:"Serious job seekers — everything in one go"},
  ];

  function learnCard(pk){return `
    <div class="card" style="padding:0;overflow:hidden;${pk.featured?'border-color:rgba(57,211,83,.4)':''}">
      ${pk.featured?'<div style="background:linear-gradient(90deg,var(--green),var(--green2));padding:5px 18px;font-family:var(--font-d);font-size:.64rem;font-weight:700;color:#060D06;text-transform:uppercase;letter-spacing:.09em">️ New Pack — Interview Communication</div>':''}
      <div style="padding:22px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:40px;height:40px;border-radius:10px;background:var(--gdim);border:1px solid rgba(57,211,83,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--green)">${hicon(pk.icon,22,"#39D353")}</div>
          <div>
            <div style="font-family:var(--font-d);font-size:.9rem;font-weight:700;color:var(--t1)">${pk.name}</div>
            <div style="font-size:.72rem;color:var(--t3);font-style:italic">${pk.tagline}</div>
          </div>
        </div>
        <div style="margin-bottom:12px">
          <span style="font-family:var(--font-d);font-size:1.2rem;font-weight:800;font-style:normal;color:var(--green);letter-spacing:-.02em">${pk.fee}</span>
          <span style="font-size:.72rem;color:var(--t3);margin-left:5px">${pk.period}</span>
        </div>
        ${pk.note?`<div style="padding:8px 12px;background:rgba(57,211,83,.06);border-left:2px solid var(--green);border-radius:0 8px 8px 0;font-size:.76rem;color:var(--t2);font-style:italic;margin-bottom:12px">"${pk.note}"</div>`:''}
        <div style="height:1px;background:var(--border);margin-bottom:10px"></div>
        ${pk.inc.map(i=>`<div style="display:flex;gap:6px;margin-bottom:4px;font-size:.76rem;color:var(--t2)"><span style="color:var(--green);flex-shrink:0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#39D353" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg></span>${i}</div>`).join('')}
        <div style="padding:5px 8px;background:rgba(57,211,83,.04);border-radius:6px;font-size:.68rem;color:var(--t3);margin:9px 0;border:1px solid rgba(57,211,83,.08)"><span style="color:var(--green);font-weight:600">For: </span>${pk.who}</div>
        <a href="#contact" class="btn btn-p" style="width:100%;justify-content:center;font-size:.78rem">Book This Pack →</a>
      </div>
    </div>`;}

  function placementCard(pk){return `
    <div class="card" style="padding:0;overflow:hidden;${pk.featured?'border-color:rgba(57,211,83,.4)':''}">
      ${pk.featured?'<div style="background:linear-gradient(90deg,var(--green),var(--green2));padding:5px 16px;font-family:var(--font-d);font-size:.63rem;font-weight:700;color:#060D06;text-transform:uppercase;letter-spacing:.08em"> Best Value — All Placement Packs</div>':''}
      <div style="padding:18px">
        <div style="display:flex;align-items:center;gap:9px;margin-bottom:10px">
          <div style="width:36px;height:36px;border-radius:9px;background:var(--gdim);border:1px solid rgba(57,211,83,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--green)">${hicon(pk.icon,20,"#39D353")}</div>
          <div>
            <div style="font-family:var(--font-d);font-size:.86rem;font-weight:700;color:var(--t1)">${pk.name}</div>
            <div style="font-size:.7rem;color:var(--t3);font-style:italic">${pk.tagline}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:10px">
          <div style="padding:8px;background:var(--gdim);border:1px solid rgba(57,211,83,.22);border-radius:8px;text-align:center">
            <div style="font-size:.58rem;color:var(--t3);margin-bottom:2px;text-transform:uppercase;letter-spacing:.06em">With Bundle</div>
            <div style="font-family:var(--font-d);font-size:1.05rem;font-weight:800;font-style:normal;color:var(--green);letter-spacing:-.02em">FREE</div>
          </div>
          <div style="padding:8px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:8px;text-align:center">
            <div style="font-size:.58rem;color:var(--t3);margin-bottom:2px;text-transform:uppercase;letter-spacing:.06em">Standalone</div>
            <div style="font-family:var(--font-d);font-size:.88rem;font-weight:700;color:var(--t2)">${pk.standalone}</div>
          </div>
        </div>
        <div style="height:1px;background:var(--border);margin-bottom:8px"></div>
        ${pk.inc.map(i=>`<div style="display:flex;gap:6px;margin-bottom:3px;font-size:.73rem;color:var(--t2)"><span style="color:var(--green);flex-shrink:0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#39D353" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg></span>${i}</div>`).join('')}
        <div style="padding:4px 8px;background:rgba(57,211,83,.04);border-radius:5px;font-size:.66rem;color:var(--t3);margin:7px 0;border:1px solid rgba(57,211,83,.08)"><span style="color:var(--green);font-weight:600">For: </span>${pk.who}</div>
        <a href="#contact" class="btn btn-p" style="width:100%;justify-content:center;font-size:.76rem;margin-top:4px">${pk.featured?'Get Everything →':'Book This Pack →'}</a>
      </div>
    </div>`;}

  el.innerHTML=`
    <!-- Learning Support -->
    <div style="margin-bottom:40px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h3 style="font-size:.68rem;color:var(--t3);text-transform:uppercase;letter-spacing:.14em;font-family:var(--font-d);font-weight:700;white-space:nowrap">Learning Support</h3>
        <div style="flex:1;height:1px;background:var(--border)"></div>
        <span style="font-size:.66rem;color:var(--t3);white-space:nowrap">Always available standalone</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px">
        ${learningPacks.map(learnCard).join('')}
      </div>
    </div>

    <!-- Placement Prep -->
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h3 style="font-size:.68rem;color:var(--t3);text-transform:uppercase;letter-spacing:.14em;font-family:var(--font-d);font-weight:700;white-space:nowrap">Placement Prep Packs</h3>
        <div style="flex:1;height:1px;background:var(--border)"></div>
      </div>
      <div style="padding:10px 14px;background:var(--gdim);border:1px solid rgba(57,211,83,.18);border-radius:10px;margin-bottom:16px;display:flex;align-items:center;gap:9px">
        <span style="display:flex;align-items:center;flex-shrink:0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span>
        <p style="font-size:.8rem;color:var(--t2);margin:0">Included <strong style="color:var(--green)">FREE</strong> with any 3-course bundle. Or purchase standalone if you already have technical skills.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">
        ${placementPacks.map(placementCard).join('')}
      </div>
    </div>`;
}

/* ── ADD-ONS ── */
function renderAddons(){
  const el=document.getElementById('fee-addons');
  if(!el) return;
  const a=[{name:"Single Brush-Up Session",dur:"2 hours",fee:"Rs.1,200",desc:"Any tool. Targeted practice on your weak areas."},{name:"Project Practice Session",dur:"Per session",fee:"Rs.1,200",desc:"Guided real-world project with live feedback."},{name:"Career Strategy Call",dur:"1 hour",fee:"Rs.800",desc:"Roadmap, job search plan and honest advice."}];
  el.innerHTML=a.map(x=>`<div class="card card-action" style="padding:16px"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><div style="font-family:var(--font-d);font-size:.86rem;font-weight:700;color:var(--t1)">${x.name}</div><div style="font-family:var(--font-d);font-size:.98rem;font-weight:800;color:var(--green)">${x.fee}</div></div><div style="font-size:.68rem;color:var(--t3);margin-bottom:5px"> ${x.dur}</div><div style="font-size:.76rem;color:var(--t2)">${x.desc}</div></div>`).join('');
}

/* ── UDAY BATCH ── */
function renderUday(){
  if(typeof DV==='undefined'||!DV.uday) return;
  const ur=document.getElementById('uday-rules');
  if(ur) ur.innerHTML=DV.uday.rules.map(r=>`
    <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px">
      <span style="color:var(--amber);flex-shrink:0;margin-top:2px;font-weight:700">→</span>
      <span style="font-size:.82rem;color:var(--t2);line-height:1.5">${r}</span>
    </div>`).join('');
  const ui=document.getElementById('uday-includes');
  if(ui) ui.innerHTML=DV.uday.includes.map(i=>`
    <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:7px">
      <span style="color:var(--amber);flex-shrink:0;margin-top:2px"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#39D353" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg></span>
      <span style="font-size:.8rem;color:var(--t2)">${i}</span>
    </div>`).join('');
}
/* ── CONSULTING ── */
function renderConsulting(){
  if(typeof DV==='undefined') return;
  const el=document.getElementById('consult-grid');
  if(!el) return;
  el.innerHTML=DV.consulting.map(s=>`
    <div class="card card-action" style="padding:20px">
      <div style="display:flex;align-items:center;margin-bottom:9px;color:var(--green)">${s.icon}</div>
      <div style="font-family:var(--font-d);font-size:.9rem;font-weight:700;color:var(--t1);margin-bottom:5px">${s.title}</div>
      <div style="font-size:.8rem;color:var(--t2);margin-bottom:12px">${s.desc}</div>
      <div style="font-family:var(--font-d);font-size:1rem;font-weight:800;color:var(--amber)">${s.fee}</div>
    </div>`).join('');
}

/* ── TESTIMONIALS ── */
function renderTestimonials(){
  const el=document.getElementById('testi-grid');
  if(!el||typeof DV==='undefined') return;
  el.innerHTML=DV.testimonials.map(t=>`
    <div class="card reveal" style="padding:22px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <div style="width:42px;height:42px;border-radius:50%;background:var(--gdim);border:1px solid rgba(57,211,83,.2);display:flex;align-items:center;justify-content:center;font-family:var(--font-d);font-weight:700;color:var(--green);flex-shrink:0">${t.init}</div>
        <div><div style="font-family:var(--font-d);font-size:.86rem;font-weight:700;color:var(--t1)">${t.name}</div><div style="font-size:.7rem;color:var(--t3)">${t.role}</div></div>
        <div style="margin-left:auto;color:var(--amber);font-size:.82rem">${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F5A623" width="13" height="13"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"/></svg>'.repeat(t.stars)}</div>
      </div>
      <p style="font-size:.82rem;color:var(--t2);line-height:1.7;font-style:italic">"${t.text}"</p>
    </div>`).join('');
}

/* ── EVENTS ── */
function renderEvents(){
  const el=document.getElementById('events-list');
  if(!el||typeof DV==='undefined') return;
  el.innerHTML=DV.events.map(ev=>{
    const d=new Date(ev.date);
    return `
    <div class="card reveal" style="padding:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:16px;flex:1;min-width:200px">
        <div style="text-align:center;padding:10px 14px;background:var(--gdim);border:1px solid rgba(57,211,83,.18);border-radius:var(--r-lg);min-width:58px;flex-shrink:0">
          <div style="font-family:var(--font-d);font-size:1.3rem;font-weight:800;color:var(--green);line-height:1">${d.getDate()}</div>
          <div style="font-size:.62rem;color:var(--t3);text-transform:uppercase">${d.toLocaleDateString('en-IN',{month:'short'})}</div>
        </div>
        <div>
          <div style="font-family:var(--font-d);font-size:.92rem;font-weight:700;color:var(--t1);margin-bottom:4px">${ev.title}</div>
          <div style="font-size:.74rem;color:var(--t3)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="13" height="13"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> ${ev.time} · ${ev.mode} · <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="13" height="13"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg> ${ev.spots} spots</div>
          <span style="font-size:.62rem;color:var(--green);background:var(--gdim);padding:2px 7px;border-radius:50px;border:1px solid rgba(57,211,83,.18);display:inline-block;margin-top:4px">${ev.lang}</span>
        </div>
      </div>
      <a href="#contact" class="btn btn-p" style="font-size:.78rem;padding:8px 16px;white-space:nowrap">Register Free →</a>
    </div>`;
  }).join('');
}

/* ── COUNTDOWN ── */
function initCountdown(){
  const el=document.getElementById('countdown');
  if(!el||typeof DV==='undefined'||!DV.events.length) return;
  const target=new Date(DV.events[0].date+'T19:00:00+05:30');
  function update(){
    const diff=target-new Date();
    if(diff<=0){el.innerHTML='<span class="cd-unit"><span class="cd-n">Live Now!</span><span class="cd-l" style="display:inline-flex;align-items:center"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg></span></span>';return;}
    const d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000),m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);
    el.innerHTML=[{n:d,l:'Days'},{n:h,l:'Hours'},{n:m,l:'Mins'},{n:s,l:'Secs'}].map(u=>`<span class="cd-unit"><span class="cd-n">${String(u.n).padStart(2,'0')}</span><span class="cd-l">${u.l}</span></span>`).join('<span class="cd-sep">:</span>');
  }
  update();setInterval(update,1000);
}

/* ── RESOURCES ── */
function initTabs(){
  document.querySelectorAll('.res-tab').forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll('.res-tab').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.res-pane').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const p=document.getElementById('rp-'+btn.dataset.tab);
      if(p)p.classList.add('active');
    };
  });
}

function renderSheets(){
  const el=document.getElementById('sheets-grid');
  if(!el||typeof DV==='undefined') return;
  el.innerHTML=DV.cheatsheets.map(s=>`
    <div class="card card-action" style="padding:20px;text-align:center">
      <div style="display:flex;align-items:center;margin-bottom:9px;color:var(--green)">${s.icon}</div>
      <div style="font-family:var(--font-d);font-size:.92rem;font-weight:700;color:var(--t1);margin-bottom:7px">${s.title} Cheat Sheet</div>
      <div style="font-size:.76rem;color:var(--t3);margin-bottom:14px">${s.topics}</div>
      <a href="https://wa.me/919048319556?text=Hi! I would like the ${encodeURIComponent(s.title)} cheat sheet please." target="_blank" class="btn btn-g" style="width:100%;justify-content:center;font-size:.76rem">Get Free via WhatsApp →</a>
    </div>`).join('');
}

function renderProjects(){
  const el=document.getElementById('proj-grid');
  if(!el||typeof DV==='undefined') return;
  el.innerHTML=DV.projects.map(p=>`
    <div class="card reveal" style="padding:16px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:7px">
        <span style="font-size:.6rem;font-weight:700;color:var(--green);background:var(--gdim);padding:2px 7px;border-radius:50px;border:1px solid rgba(57,211,83,.18)">${p.tool}</span>
        <span style="font-size:.58rem;font-weight:700;color:var(--amber);background:rgba(245,166,35,.08);padding:2px 7px;border-radius:50px;border:1px solid rgba(245,166,35,.18)">${p.level}</span>
      </div>
      <div style="font-family:var(--font-d);font-size:.86rem;font-weight:700;color:var(--t1);margin-bottom:5px">${p.title}</div>
      <div style="font-size:.76rem;color:var(--t2)">${p.desc}</div>
    </div>`).join('');
}

/* ── QUIZ ── */
function initQuiz(){
  if(typeof DV==='undefined') return;
  let tool='sql',score=0,qi=0;
  window.renderQuiz=function(){
    const el=document.getElementById('quiz-wrap');
    if(!el) return;
    const qd=DV.quiz[tool];
    if(!qd) return;
    if(qi>=qd.questions.length){
      const pct=Math.round(score/qd.questions.length*100);
      el.innerHTML=`<div style="text-align:center;padding:24px"><div style="font-size:2.2rem;margin-bottom:9px">${pct>=80?`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/></svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>`}</div><div style="font-family:var(--font-d);font-size:1.1rem;font-weight:700;color:${pct>=80?'var(--green)':'var(--amber)'};margin-bottom:8px">${pct}% — ${pct>=80?'Interview Ready!':pct>=60?'Good effort!':'Needs practice'}</div><p style="font-size:.82rem;color:var(--t2);margin-bottom:16px">${pct>=80?'You are solid on this topic.':'Consider a brush-up session with Devika.'}</p><div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap"><button onclick="score=0;qi=0;renderQuiz()" class="btn btn-g" style="font-size:.78rem">Retry</button>${pct<80?'<a href="#contact" class="btn btn-p" style="font-size:.78rem">Book Brush-Up →</a>':''}</div></div>`;
      return;
    }
    const q=qd.questions[qi];
    el.innerHTML=`<div style="padding:18px"><div style="display:flex;gap:3px;margin-bottom:12px">${qd.questions.map((_,i)=>`<div style="flex:1;height:3px;border-radius:2px;background:${i<qi?'var(--green)':i===qi?'var(--amber)':'rgba(255,255,255,.1)'}"></div>`).join('')}</div><div style="font-size:.66rem;color:var(--t3);margin-bottom:7px">Question ${qi+1} of ${qd.questions.length}</div><div style="font-family:var(--font-d);font-size:.92rem;font-weight:600;color:var(--t1);margin-bottom:14px">${q.q}</div><div style="display:flex;flex-direction:column;gap:7px">${q.options.map((opt,i)=>`<button data-i="${i}" style="padding:10px 14px;border-radius:var(--r);border:1px solid var(--border);background:var(--surface);color:var(--t1);cursor:pointer;text-align:left;font-size:.82rem;transition:all .2s" onmouseover="this.style.borderColor='rgba(57,211,83,.35)'" onmouseout="this.style.borderColor=''"> ${opt}</button>`).join('')}</div></div>`;
    el.querySelectorAll('button[data-i]').forEach(btn=>{
      btn.onclick=()=>{
        const chosen=parseInt(btn.dataset.i);
        if(chosen===q.ans)score++;
        el.querySelectorAll('button[data-i]').forEach(b=>{
          const bi=parseInt(b.dataset.i);
          if(bi===q.ans)b.style.cssText+='background:rgba(57,211,83,.15);border-color:rgba(57,211,83,.5);color:var(--green);cursor:default';
          else if(bi===chosen)b.style.cssText+='background:rgba(255,70,60,.1);border-color:rgba(255,70,60,.4);cursor:default';
          b.disabled=true;
        });
        setTimeout(()=>{qi++;window.renderQuiz();},800);
      };
    });
  };
  document.querySelectorAll('.q-btn').forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll('.q-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      tool=btn.dataset.q;score=0;qi=0;window.renderQuiz();
    };
  });
  window.renderQuiz();
}

/* ── COURSE BUILDER ── */
function initBuilder(){
  if(typeof DV==='undefined') return;
  const grid=document.getElementById('mods-grid');
  if(!grid) return;
  grid.innerHTML=DV.modules.map(m=>`<div class="mod-check" data-id="${m.id}" data-w="${m.weeks}" data-p="${m.fee}" onclick="toggleMod(this)"><span class="mod-ico" style="display:inline-flex;align-items:center;color:var(--green)">${hicon(m.icon,20,"#39D353")}</span><span class="mod-name">${m.name}</span><span class="mod-wk">${m.weeks}w</span><span class="mod-tick"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#39D353" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg></span></div>`).join('');
  updateSum();
}
window.toggleMod=function(el){el.classList.toggle('sel');updateSum();};
function updateSum(){
  const sel=[...document.querySelectorAll('.mod-check.sel')];
  const list=document.getElementById('sum-list'),totD=document.getElementById('sum-dur'),totP=document.getElementById('sum-price'),wa=document.getElementById('wa-sum-btn'),pu=document.getElementById('placement-unlock');
  if(!list)return;
  if(!sel.length){list.innerHTML='<div class="sum-empty">Select 3+ modules to unlock placement prep</div>';if(totD)totD.textContent='—';if(totP)totP.textContent='Rs.0';if(pu)pu.style.display='none';return;}
  let w=0,p=0;
  list.innerHTML=sel.map(l=>{const lw=parseInt(l.dataset.w),lp=parseInt(l.dataset.p);w+=lw;p+=lp;return `<div class="sum-item"><span>${l.querySelector('.mod-name').textContent}</span><span>${lw}w</span></div>`;}).join('');
  if(totD)totD.textContent=`${w} weeks`;
  if(totP)totP.textContent=`Rs.${p.toLocaleString('en-IN')}`;
  if(pu)pu.style.display=sel.length>=3?'block':'none';
  const mods=sel.map(l=>l.querySelector('.mod-name').textContent).join(', ');
  const note=sel.length>=3?' + Placement Prep FREE':'';
  const msg=encodeURIComponent(`Hi Devika! Custom bundle:\nModules: ${mods}\nDuration: ${w} weeks\nEstimated: Rs.${p.toLocaleString('en-IN')}${note}\nCan we discuss?`);
  if(wa&&typeof DV!=='undefined')wa.href=`https://wa.me/${DV.brand.whatsapp}?text=${msg}`;
}

/* ── FULL SYLLABUS ── */
function renderFullSyllabus(){
  if(typeof SYLLABUS_DATA==='undefined')return;
  const el=document.getElementById('full-syllabus-container');
  if(!el)return;
  el.innerHTML=Object.entries(SYLLABUS_DATA).map(([tool,data],ti)=>`
    <div class="syl-tool" id="st-${ti}">
      <div class="syl-tool-hd" onclick="toggleTool(${ti})" style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;cursor:pointer;transition:background .2s">
        <div style="display:flex;align-items:center;gap:12px">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;flex-shrink:0">${data.icon}</span>
          <div><div style="font-family:var(--font-d);font-size:.92rem;font-weight:700;color:var(--t1)">${tool}</div><div style="font-size:.7rem;color:var(--t3)">${data.weeks} weeks · Beginner to Advanced</div></div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:.6rem;font-weight:700;color:var(--green);background:var(--gdim);padding:2px 7px;border-radius:50px;border:1px solid rgba(57,211,83,.18)">${data.modules.length} modules</span>
          <span id="arr-${ti}" style="font-size:.72rem;color:var(--t3);transition:transform .3s">▼</span>
        </div>
      </div>
      <div id="sb-${ti}" style="display:none;border-top:1px solid var(--border)">
        <p style="font-size:.82rem;color:var(--t2);padding:14px 20px;margin:0;background:rgba(57,211,83,.02)">${data.desc}</p>
        ${data.modules.map(mod=>`
          <div style="padding:16px 20px;border-top:1px solid var(--border2)">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
              <span style="background:var(--green3);color:var(--t1);font-family:var(--font-d);font-size:.66rem;font-weight:700;padding:2px 9px;border-radius:50px;white-space:nowrap">Week ${mod.week}</span>
              <span style="font-family:var(--font-d);font-size:.88rem;font-weight:600;color:var(--t1)">${mod.title}</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
              ${mod.topics.map(([tname,subs])=>`<div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:12px"><div style="font-size:.76rem;font-weight:700;color:var(--amber);margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid var(--border)">${tname}</div>${subs.map(s=>`<div style="display:flex;gap:5px;font-size:.72rem;color:var(--t2);margin-bottom:2px;line-height:1.4"><span style="color:var(--green);flex-shrink:0">·</span>${s}</div>`).join('')}</div>`).join('')}
            </div>
            <div style="padding:8px 12px;background:rgba(245,166,35,.06);border:1px solid rgba(245,166,35,.14);border-radius:7px;margin-bottom:7px"><span style="color:var(--amber);font-weight:700;font-size:.72rem">Portfolio Project: </span><span style="font-size:.78rem;color:var(--t2)">${mod.project}</span></div>
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:4px"><span style="color:var(--green);font-weight:700;font-size:.66rem">Resources: </span>${mod.resources.map(r=>`<span style="font-size:.68rem;color:var(--t3);background:var(--surface);border:1px solid var(--border);padding:1px 6px;border-radius:50px">${r}</span>`).join('')}</div>
          </div>`).join('')}
        <div style="padding:14px 20px;background:var(--gdim);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;border-top:1px solid rgba(57,211,83,.12)">
          <div style="font-size:.76rem;color:var(--t2)">Bundle with 2+ tools → Mock + Resume + Portfolio FREE</div>
          <a href="#contact" class="btn btn-p" style="font-size:.74rem;padding:7px 14px">Enrol in ${tool} →</a>
        </div>
      </div>
    </div>`).join('');
}
window.toggleTool=function(ti){
  const b=document.getElementById('sb-'+ti),a=document.getElementById('arr-'+ti);
  if(!b)return;
  const open=b.style.display==='none';
  b.style.display=open?'block':'none';
  if(a)a.style.transform=open?'rotate(180deg)':'rotate(0deg)';
};

/* ── CAREER QUIZ ── */
function renderCareerQuiz(){
  const el=document.getElementById('career-quiz');
  if(!el)return;
  const questions=[
    {q:"What is your current background?",opts:["Complete beginner — no coding","Some Python or SQL knowledge","Working professional — want to upskill","Already have skills — need placement help"]},
    {q:"What is your main goal?",opts:["Get a data analyst job","Switch careers into data science","Freelance or consulting","Build my own data product"]},
    {q:"How much time can you dedicate weekly?",opts:["3-5 hours (casual)","8-10 hours (focused)","15-20 hours (intensive)","Full time — serious"]},
    {q:"What is your biggest challenge?",opts:["Don't know where to start","Know theory but no real projects","Have skills but can't clear interviews","Need portfolio and resume help"]},
  ];
  const recs={"0-0":"Python Basics then Data Analyst Track","0-1":"Python then Full Data Analyst Track","1-0":"Power Pack — SQL + Excel + Power BI","1-3":"Industry-Ready Pack — placement prep now","2-1":"Data Scientist Track — full commitment","3-3":"Complete Placement Bundle","default":"Free Demo Session — Devika will personally guide you"};
  let ans=[],qi=0;
  function draw(){
    if(qi>=questions.length){
      const rec=recs[ans.slice(0,2).join('-')]||recs['default'];
      el.innerHTML=`<div style="text-align:center;padding:24px"><div style="display:flex;align-items:center;justify-content:center;margin-bottom:9px;color:var(--green)"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><div style="font-family:var(--font-d);font-size:.72rem;color:var(--t3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:7px">Recommended</div><div style="font-family:var(--font-d);font-size:1.05rem;font-weight:700;color:var(--green);margin-bottom:10px">${rec}</div><p style="font-size:.82rem;color:var(--t2);margin-bottom:16px">Book a free 30-min demo — Devika will personalise this further.</p><div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap"><a href="#contact" class="btn btn-p" style="font-size:.8rem">Book Free Demo →</a><button class="btn btn-g" style="font-size:.8rem" onclick="ans=[];qi=0;renderCareerQuiz()">Retake</button></div></div>`;
      return;
    }
    const q=questions[qi];
    el.innerHTML=`<div style="padding:20px"><div style="display:flex;gap:3px;margin-bottom:12px">${questions.map((_,i)=>`<div style="flex:1;height:3px;border-radius:2px;background:${i<qi?'var(--green)':i===qi?'var(--amber)':'rgba(255,255,255,.1)'}"></div>`).join('')}</div><div style="font-size:.66rem;color:var(--t3);margin-bottom:7px">Question ${qi+1} of ${questions.length}</div><div style="font-family:var(--font-d);font-size:.92rem;font-weight:600;color:var(--t1);margin-bottom:13px">${q.q}</div><div style="display:flex;flex-direction:column;gap:7px">${q.opts.map((opt,i)=>`<button data-opt="${i}" style="padding:10px 14px;border-radius:var(--r);border:1px solid var(--border);background:var(--surface);color:var(--t1);cursor:pointer;text-align:left;font-size:.82rem;transition:all .2s" onmouseover="this.style.borderColor='rgba(57,211,83,.4)';this.style.background='rgba(57,211,83,.05)'" onmouseout="this.style.borderColor='';this.style.background=''">${opt}</button>`).join('')}</div></div>`;
    el.querySelectorAll('button[data-opt]').forEach(btn=>{
      btn.onclick=()=>{ans.push(btn.dataset.opt);btn.style.background='rgba(57,211,83,.12)';btn.style.borderColor='rgba(57,211,83,.4)';btn.style.color='var(--green)';setTimeout(()=>{qi++;draw();},600);};
    });
  }
  draw();
  window.renderCareerQuiz=function(){ans=[];qi=0;draw();};
}

/* ── WHATSAPP COMMUNITY ── */
function renderCommunity(){
  const el=document.getElementById('whatsapp-community');
  if(!el)return;
  el.innerHTML=`<div style="background:linear-gradient(135deg,rgba(37,211,102,.08),rgba(37,211,102,.02));border:1px solid rgba(37,211,102,.2);border-radius:var(--r-xl);padding:24px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px"><div style="display:flex;align-items:center;gap:14px;flex:1;min-width:220px"><div style="width:48px;height:48px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0"></div><div><div style="font-family:var(--font-d);font-size:.95rem;font-weight:700;color:var(--t1);margin-bottom:4px">Join the DataVika WhatsApp Community</div><div style="font-size:.8rem;color:var(--t2);margin-bottom:6px">Free resources, job alerts, session announcements and peer support</div><div style="display:flex;gap:5px;flex-wrap:wrap">${['Free to join','Weekly tips','Job alerts','Peer support'].map(t=>`<span style="font-size:.66rem;color:#25D366;background:rgba(37,211,102,.1);padding:2px 7px;border-radius:50px;border:1px solid rgba(37,211,102,.2)">${t}</span>`).join('')}</div></div></div><a href="https://chat.whatsapp.com/Jvf40wFUenE70ZaHDH6Gwb" target="_blank" class="btn" style="background:#25D366;color:#060D06;font-weight:700;font-size:.86rem;padding:11px 22px;box-shadow:0 4px 14px rgba(37,211,102,.28);flex-shrink:0;white-space:nowrap">Join Free →</a></div>`;
}

/* ── FOOTER NAV ── */
function renderFooterNav(){
  const el=document.getElementById('footer-nav');
  if(!el)return;
  el.innerHTML=[{h:'#hero',t:'Home'},{h:'#about',t:'About'},{h:'#courses',t:'Courses'},{h:'#syllabus',t:'Syllabus'},{h:'#packs',t:'Special Packs'},{h:'#pricing',t:'Pricing'},{h:'#uday',t:'Uday Batch'},{h:'#resources',t:'Resources'},{h:'#events',t:'Events'},{h:'#consulting',t:'Consulting'},{h:'#uday',t:'Uday Batch'},{h:'#consulting',t:'Consulting'},{h:'#contact',t:'Book Free Demo'}].map(l=>`<li><a href="${l.h}">${l.t}</a></li>`).join('');
}

/* ── REVEAL ── */
function initReveal(){
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');e.target.classList.add('up');}});},{threshold:0.08});
  document.querySelectorAll('.reveal,.reveal-l,.reveal-r,.card').forEach(el=>obs.observe(el));
}

/* ── COUNTERS ── */
function initCounters(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target,target=parseInt(el.dataset.t)||0,suf=el.dataset.s||'';
      let cur=0;const step=Math.ceil(target/50);
      const iv=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=cur+suf;if(cur>=target)clearInterval(iv);},30);
      obs.unobserve(el);
    });
  },{threshold:0.5});
  document.querySelectorAll('.counter').forEach(el=>obs.observe(el));
}

/* ── FORM ── */
function initForm(){
  const form=document.getElementById('contact-form'),succ=document.getElementById('form-success');
  if(!form)return;
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=form.querySelector('button[type=submit]');
    if(btn){btn.textContent='Sending...';btn.disabled=true;}
    try{
      const r=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(r.ok){form.style.display='none';if(succ)succ.style.display='block';}
      else{if(btn){btn.textContent='Book Free Demo';btn.disabled=false;}}
    }catch{if(btn){btn.textContent='Book Free Demo';btn.disabled=false;}}
  });
}

/* ── CHATBOT ── */
function initChatbot(){
  const btn=document.getElementById('chatbot-btn'),panel=document.getElementById('chatbot-panel'),close=document.getElementById('chat-x'),inp=document.getElementById('chat-inp'),send=document.getElementById('chat-send'),msgs=document.getElementById('chat-msgs');
  if(!btn||!panel)return;
  btn.onclick=()=>{panel.classList.toggle('open');if(inp)inp.focus();};
  if(close)close.onclick=()=>panel.classList.remove('open');
  document.querySelectorAll('.chat-sug').forEach(s=>{s.onclick=()=>{if(inp)inp.value=s.textContent;sendMsg();};});
  function addMsg(text,cls){if(!msgs)return;const d=document.createElement('div');d.className='msg '+cls;d.textContent=text;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
  function respond(q){
    const ql=q.toLowerCase();
    if(ql.includes('course')||ql.includes('offer'))return'We offer 11 tools: Python, SQL, Excel, Power BI, Statistics, Data Analysis, ML, Deep Learning, NLP, Image Processing, and AI Tools. Plus full tracks — Data Analyst, Data Scientist, Power Pack, and ML+DL+NLP Bundle.';
    if(ql.includes('fee')||ql.includes('cost')||ql.includes('price'))return'Individual tools start from Rs.4,500. Data Analyst Track is Rs.49,999 (3 x Rs.16,999 instalments). All bundles include Mock Interview + Resume + Portfolio FREE. For 1:1 pricing — WhatsApp Devika directly.';
    if(ql.includes('1:1')||ql.includes('personal'))return'1:1 sessions are fully personalised — your pace, schedule, and custom syllabus. Contact Devika on WhatsApp (+91 90483 19556) for 1:1 pricing.';
    if(ql.includes('uday'))return'The Uday Batch is a scholarship program — 50% fee waiver for eligible passionate students. Not open yet. Join the WhatsApp community to be notified when applications open.';
    if(ql.includes('mock')||ql.includes('interview'))return'Mock Interview Pack is Rs.2,500 — 3 full rounds (Technical, HR, Case Study) with detailed written feedback and improvement plan. Also included FREE in all 3-course bundles.';
    if(ql.includes('malayalam'))return'Yes! All sessions available in English and Malayalam. Devika teaches in whichever language you are comfortable with.';
    if(ql.includes('demo')||ql.includes('free'))return'Book a free 30-minute demo — no commitment. Just scroll to the contact form or WhatsApp Devika at +91 90483 19556.';
    if(ql.includes('placement')||ql.includes('job'))return'Every 3-course bundle includes Mock Interview + Resume + Portfolio FREE. The Complete Placement Bundle (Rs.9,999) has everything — resume, portfolio, 3 mock rounds, and placement strategy.';
    return'Great question! Book a free demo with Devika — she will personally guide you to the right course for your goals.';
  }
  function sendMsg(){if(!inp||!inp.value.trim())return;const q=inp.value.trim();inp.value='';addMsg(q,'user');setTimeout(()=>addMsg(respond(q),'bot'),600);}
  if(send)send.onclick=sendMsg;
  if(inp)inp.addEventListener('keydown',e=>{if(e.key==='Enter')sendMsg();});
}

/* ── PACKS STRATEGY BANNER ── */
function renderPacksStrategyBanner(){
  const el=document.getElementById('packs-strategy-banner');
  if(!el) return;
  el.innerHTML=`
    <div style="display:inline-flex;gap:24px;flex-wrap:wrap;justify-content:center;padding:14px 24px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);font-size:.8rem">
      <div style="display:flex;align-items:center;gap:7px;color:var(--green);font-weight:600">
        <span style="font-size:1.1rem"></span>
        With any 3-course bundle — <strong>ALL placement packs FREE</strong>
      </div>
      <div style="width:1px;background:var(--border)"></div>
      <div style="display:flex;align-items:center;gap:7px;color:var(--t2)">
        <span style="display:inline-flex;align-items:center;color:var(--green)"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"/></svg></span>
        Already skilled? Purchase standalone at listed price
      </div>
    </div>`;
}


/* ── MAIN ── */
document.addEventListener('DOMContentLoaded',()=>{
  initNav();initHero();initBars();initMarquee();initRotatingSub();
  renderAll();
});

function renderAll(){
  if(typeof DV==='undefined'){setTimeout(renderAll,80);return;}
  renderHeroStats();renderStats();renderProblems();renderHowItWorks();
  renderSingles();renderBundles();renderPlacementRule();renderOneOnOne();
  renderPacks();renderAddons();renderPacksStrategyBanner();renderUday();renderConsulting();
  renderTestimonials();renderEvents();renderFooterNav();
  renderSheets();renderProjects();renderCommunity();
  renderFullSyllabus();renderCareerQuiz();
  setTimeout(initReveal,200);setTimeout(initCounters,400);
  setTimeout(initBuilder,150);setTimeout(initQuiz,150);
  setTimeout(initTabs,80);setTimeout(initCountdown,100);
  setTimeout(initForm,50);setTimeout(initChatbot,50);
}
