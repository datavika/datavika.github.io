// ================================================================
// DATAVIKA — app.js  |  Complete render + interaction logic
// ================================================================

/* ── THEME ── */
function initTheme(){
  const btn=document.getElementById('theme-btn');
  const saved=localStorage.getItem('dv-theme')||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  if(btn) btn.textContent=saved==='dark'?'☀️':'🌙';
  if(btn) btn.onclick=()=>{
    const t=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',t);
    localStorage.setItem('dv-theme',t);
    btn.textContent=t==='dark'?'☀️':'🌙';
  };
}

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
  el.innerHTML=[...DV.modules,...DV.modules].map(m=>`<span class="marquee-item">${m.icon} ${m.name}</span>`).join('');
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
  const items=[{icon:'🎓',val:'50+',lbl:'Students Trained'},{icon:'🗂️',val:'100+',lbl:'Real Projects'},{icon:'🛠️',val:'11',lbl:'Tools Covered'},{icon:'🌐',val:'EN+ML',lbl:'Bilingual Sessions'},{icon:'⭐',val:'1:1',lbl:'Personal Sessions'},{icon:'📍',val:'Kerala',lbl:'India · Online'}];
  el.innerHTML=items.map(s=>`<div class="stat-card reveal"><div class="stat-icon">${s.icon}</div><div class="stat-val">${s.val}</div><div class="stat-lbl">${s.lbl}</div></div>`).join('');
}

/* ── PROBLEMS ── */
function renderProblems(){
  const el=document.getElementById('prob-list');
  if(!el) return;
  const probs=[{i:'📚',t:'Taught theory — never built a real end-to-end project'},{i:'🔍',t:'No exposure to messy real-world datasets'},{i:'🧩',t:'Syllabus not aligned with what companies actually want'},{i:'🎤',t:'Zero interview practice before facing real recruiters'},{i:'📄',t:'No portfolio, no GitHub, no proof of skills'}];
  el.innerHTML=probs.map(p=>`<div class="prob-item reveal"><span class="prob-ico">${p.i}</span><span class="prob-txt">${p.t}</span></div>`).join('');
}

/* ── HOW IT WORKS ── */
function renderHowItWorks(){
  const el=document.getElementById('how-steps');
  if(!el) return;
  const steps=[{icon:'☕',n:'01',t:'Free Demo',d:'30-min call with Devika. She understands your goals and recommends the right path. No selling.'},{icon:'🗺️',n:'02',t:'Your Plan',d:'Custom syllabus and schedule built around you. Morning, evening or weekend.'},{icon:'💻',n:'03',t:'Real Projects',d:'Every concept taught through a portfolio-level project. Work recruiters notice.'},{icon:'🎯',n:'04',t:'Get Hired',d:'Mock interviews, resume, portfolio included in all bundles. Leave job-ready.'}];
  el.innerHTML=steps.map((s,i)=>`
    <div class="card reveal d${i+1}" style="text-align:center;padding:28px 18px;position:relative">
      ${i<3?'<div style="position:absolute;top:50%;right:-10px;z-index:2;font-size:.9rem;color:var(--border)">→</div>':''}
      <div style="font-size:2rem;margin-bottom:12px">${s.icon}</div>
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
        <span style="font-size:1.3rem">${s.icon}</span>
        <span style="font-size:.58rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--green);background:var(--gdim);padding:2px 8px;border-radius:50px;border:1px solid rgba(57,211,83,.18)">${s.tag}</span>
      </div>
      <div style="font-family:var(--font-d);font-size:.92rem;font-weight:700;color:var(--t1);margin-bottom:4px">${s.name}</div>
      <div style="font-size:.72rem;color:var(--t3);margin-bottom:12px">⏱ ${s.weeks} weeks</div>
      <div style="font-family:var(--font-d);font-size:1.3rem;font-weight:800;color:var(--green);margin-bottom:10px">Rs.${s.fee.toLocaleString('en-IN')}</div>
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
        <div style="font-family:var(--font-d);font-size:.9rem;font-weight:700;color:var(--t1);margin-bottom:6px">🎯 Choose Any 3-Course Bundle → Placement Prep Included FREE</div>
        <p style="font-size:.82rem;color:var(--t2);margin-bottom:8px;max-width:500px">Every bundle includes <strong style="color:var(--green)">Mock Interview + Resume Building + Portfolio Website</strong> at no extra charge.</p>
        <div style="display:flex;gap:5px;flex-wrap:wrap">${['Power Pack','Data Analyst Track','ML+DL+NLP Bundle','Data Scientist Track'].map(t=>`<span style="font-size:.66rem;color:var(--green);background:var(--gdim);padding:2px 8px;border-radius:50px;border:1px solid rgba(57,211,83,.18)">✓ ${t}</span>`).join('')}</div>
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
        <span style="font-size:.58rem;font-weight:700;color:var(--green);background:var(--gdim);padding:2px 7px;border-radius:50px;border:1px solid rgba(57,211,83,.18)">🎯 Placement Included</span>
      </div>
      <h3 style="font-size:.98rem;margin-bottom:2px">${t.name}</h3>
      <div style="font-size:.74rem;color:var(--t3);margin-bottom:3px">${t.subtitle}</div>
      <div style="font-size:.7rem;color:var(--t3);margin-bottom:12px">⏱ ${t.duration}</div>
      <div style="font-family:var(--font-d);font-size:1.45rem;font-weight:800;color:var(--green);margin-bottom:2px">${t.fee}</div>
      <div style="font-size:.68rem;color:var(--amber);margin-bottom:2px">or ${t.emi}</div>
      <div style="font-size:.66rem;color:var(--green);margin-bottom:10px">💰 Save ${t.saving}</div>
      <div style="font-size:.7rem;color:var(--t3);margin-bottom:8px;padding:6px 9px;background:rgba(255,255,255,.03);border-radius:6px;line-height:1.5">${t.modules}</div>
      <div style="font-size:.68rem;color:var(--green);margin-bottom:12px;padding:5px 8px;background:var(--gdim);border-radius:6px;border:1px solid rgba(57,211,83,.14)">✓ Mock + Resume + Portfolio FREE</div>
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
        <div style="font-family:var(--font-d);font-size:.66rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--green);margin-bottom:8px">⭐ Premium 1:1 Personalised Sessions</div>
        <h3 style="font-size:1.05rem;margin-bottom:7px">Want sessions fully dedicated to just you?</h3>
        <p style="font-size:.84rem;color:var(--t2);margin-bottom:12px;max-width:460px">Your pace. Your schedule. Custom syllabus. Every session is Devika and you — full attention, no other students.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap">${['Any course','Your schedule','Custom pace','Direct access'].map(f=>`<div style="display:flex;align-items:center;gap:5px;font-size:.76rem;color:var(--t2)"><span style="color:var(--green)">✓</span>${f}</div>`).join('')}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:9px">
        <div style="font-size:.78rem;color:var(--t3);text-align:center">Special pricing — contact Devika</div>
        <a href="https://wa.me/919048319556?text=Hi Devika! I am interested in 1:1 personalised sessions. Can you share the pricing?" target="_blank" class="btn btn-p">💬 WhatsApp for 1:1 Pricing</a>
        <a href="#contact" class="btn btn-g" style="font-size:.78rem">Or fill contact form</a>
      </div>
    </div>`;
}

/* ── PACKS ── */
function renderPacks(){
  const el=document.getElementById('fee-packs');
  if(!el) return;

  const learningPacks=[
    {icon:"🎓",name:"Self-Study Mentorship",tagline:"You study. Devika guides.",
     fee:"Rs.4,000",period:"/ 4 months",type:"learning",
     inc:["Weekly 45-min 1:1 check-in","Personalised study roadmap","WhatsApp doubt support","Progress tracking","Curated weekly resources"],
     who:"Self-learners · YouTube studiers · Career switchers"},
    {icon:"⚡",name:"Brush-Up Pack",tagline:"Already know it. Just rusty.",
     fee:"Rs.2,500",period:"1 week · 3 sessions",type:"learning",
     inc:["Gap analysis in Session 1","3 targeted intensive sessions","Practice exercises","Tool cheat sheet","Mini assessment"],
     who:"Working professionals · Interview revisers"},
  ];

  const placementPacks=[
    {icon:"🎤",name:"Mock Interview Pack",tagline:"Practice until it feels natural.",
     standalone:"Rs.3,500",dur:"3 rounds",
     inc:["Technical round — tool-specific Qs","HR + behavioural round","Case study round","Full recording provided","Written feedback report"],
     who:"Job seekers · Pre-placement students"},
    {icon:"📄",name:"Resume + LinkedIn Pack",tagline:"Build a profile recruiters notice.",
     standalone:"Rs.2,500",dur:"2 sessions",
     inc:["ATS resume from scratch","LinkedIn complete rewrite","Skills + featured section","Cover letter template","Personal brand checklist"],
     who:"Anyone applying for data roles"},
    {icon:"💼",name:"Portfolio Pack",tagline:"Show your work. Get noticed.",
     standalone:"Rs.2,500",dur:"2 sessions",
     inc:["GitHub profile setup + bio","3 project READMEs","Portfolio on GitHub Pages","LinkedIn Featured updated","Presentation tips"],
     who:"Students with projects but no portfolio"},
    {icon:"🚀",name:"Industry-Ready Pack",tagline:"Everything to get hired.",
     standalone:"Rs.9,000",dur:"3 weeks",
     inc:["ATS resume + LinkedIn overhaul","GitHub portfolio setup","3 full mock interview rounds","Recorded feedback + plan","Job application strategy"],
     who:"Freshers · Career switchers · Final-year"},
    {icon:"🏆",name:"Complete Placement Bundle",tagline:"All packs. One price.",
     standalone:"Rs.12,999",dur:"4 weeks",featured:true,
     inc:["Resume + LinkedIn Pack","Portfolio Website Pack","3 Mock Interview Rounds","Industry-Ready Prep","Priority WhatsApp support","30-day follow-up"],
     who:"Serious job seekers — everything in one go"},
  ];

  function learnCard(pk){return `
    <div class="card" style="padding:22px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <div style="width:40px;height:40px;border-radius:10px;background:var(--gdim);border:1px solid rgba(57,211,83,.2);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0">${pk.icon}</div>
        <div>
          <div style="font-family:var(--font-d);font-size:.9rem;font-weight:700;color:var(--t1)">${pk.name}</div>
          <div style="font-size:.72rem;color:var(--t3);font-style:italic">${pk.tagline}</div>
        </div>
      </div>
      <div style="margin-bottom:12px">
        <span style="font-family:var(--font-d);font-size:1.2rem;font-weight:800;color:var(--green)">${pk.fee}</span>
        <span style="font-size:.72rem;color:var(--t3);margin-left:5px">${pk.period}</span>
      </div>
      <div style="height:1px;background:var(--border);margin-bottom:10px"></div>
      ${pk.inc.map(i=>`<div style="display:flex;gap:6px;margin-bottom:4px;font-size:.76rem;color:var(--t2)"><span style="color:var(--green);flex-shrink:0">✓</span>${i}</div>`).join('')}
      <div style="padding:5px 8px;background:rgba(57,211,83,.04);border-radius:6px;font-size:.68rem;color:var(--t3);margin:9px 0;border:1px solid rgba(57,211,83,.08)"><span style="color:var(--green);font-weight:600">For: </span>${pk.who}</div>
      <a href="#contact" class="btn btn-p" style="width:100%;justify-content:center;font-size:.78rem">Book This Pack →</a>
    </div>`;}

  function placementCard(pk){return `
    <div class="card" style="padding:0;overflow:hidden;${pk.featured?'border-color:rgba(57,211,83,.4)':''}">
      ${pk.featured?'<div style="background:linear-gradient(90deg,var(--green),var(--green2));padding:5px 16px;font-family:var(--font-d);font-size:.63rem;font-weight:700;color:#060D06;text-transform:uppercase;letter-spacing:.08em">⭐ Best Value — All Placement Packs</div>':''}
      <div style="padding:18px">
        <div style="display:flex;align-items:center;gap:9px;margin-bottom:10px">
          <div style="width:36px;height:36px;border-radius:9px;background:var(--gdim);border:1px solid rgba(57,211,83,.2);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">${pk.icon}</div>
          <div>
            <div style="font-family:var(--font-d);font-size:.86rem;font-weight:700;color:var(--t1)">${pk.name}</div>
            <div style="font-size:.7rem;color:var(--t3);font-style:italic">${pk.tagline}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:10px">
          <div style="padding:8px;background:var(--gdim);border:1px solid rgba(57,211,83,.22);border-radius:8px;text-align:center">
            <div style="font-size:.58rem;color:var(--t3);margin-bottom:2px;text-transform:uppercase;letter-spacing:.06em">With Bundle</div>
            <div style="font-family:var(--font-d);font-size:1.05rem;font-weight:800;color:var(--green)">FREE</div>
          </div>
          <div style="padding:8px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:8px;text-align:center">
            <div style="font-size:.58rem;color:var(--t3);margin-bottom:2px;text-transform:uppercase;letter-spacing:.06em">Standalone</div>
            <div style="font-family:var(--font-d);font-size:.88rem;font-weight:700;color:var(--t2)">${pk.standalone}</div>
          </div>
        </div>
        <div style="height:1px;background:var(--border);margin-bottom:8px"></div>
        ${pk.inc.map(i=>`<div style="display:flex;gap:6px;margin-bottom:3px;font-size:.73rem;color:var(--t2)"><span style="color:var(--green);flex-shrink:0">✓</span>${i}</div>`).join('')}
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
        <span style="font-size:1rem;flex-shrink:0">🎯</span>
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
  el.innerHTML=a.map(x=>`<div class="card card-action" style="padding:16px"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><div style="font-family:var(--font-d);font-size:.86rem;font-weight:700;color:var(--t1)">${x.name}</div><div style="font-family:var(--font-d);font-size:.98rem;font-weight:800;color:var(--green)">${x.fee}</div></div><div style="font-size:.68rem;color:var(--t3);margin-bottom:5px">⏱ ${x.dur}</div><div style="font-size:.76rem;color:var(--t2)">${x.desc}</div></div>`).join('');
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
      <span style="color:var(--amber);flex-shrink:0;margin-top:2px">✓</span>
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
      <div style="font-size:1.4rem;margin-bottom:9px">${s.icon}</div>
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
        <div style="margin-left:auto;color:var(--amber);font-size:.82rem">${'★'.repeat(t.stars)}</div>
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
          <div style="font-size:.74rem;color:var(--t3)">🕐 ${ev.time} · ${ev.mode} · 👥 ${ev.spots} spots</div>
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
    if(diff<=0){el.innerHTML='<span class="cd-unit"><span class="cd-n">Live Now!</span><span class="cd-l">🎉</span></span>';return;}
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
      <div style="font-size:1.8rem;margin-bottom:9px">${s.icon}</div>
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
      el.innerHTML=`<div style="text-align:center;padding:24px"><div style="font-size:2.2rem;margin-bottom:9px">${pct>=80?'🎉':'📚'}</div><div style="font-family:var(--font-d);font-size:1.1rem;font-weight:700;color:${pct>=80?'var(--green)':'var(--amber)'};margin-bottom:8px">${pct}% — ${pct>=80?'Interview Ready!':pct>=60?'Good effort!':'Needs practice'}</div><p style="font-size:.82rem;color:var(--t2);margin-bottom:16px">${pct>=80?'You are solid on this topic.':'Consider a brush-up session with Devika.'}</p><div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap"><button onclick="score=0;qi=0;renderQuiz()" class="btn btn-g" style="font-size:.78rem">Retry</button>${pct<80?'<a href="#contact" class="btn btn-p" style="font-size:.78rem">Book Brush-Up →</a>':''}</div></div>`;
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
  grid.innerHTML=DV.modules.map(m=>`<div class="mod-check" data-id="${m.id}" data-w="${m.weeks}" data-p="${m.fee}" onclick="toggleMod(this)"><span class="mod-ico">${m.icon}</span><span class="mod-name">${m.name}</span><span class="mod-wk">${m.weeks}w</span><span class="mod-tick">✓</span></div>`).join('');
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
          <span style="font-size:1.3rem">${data.icon}</span>
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
      el.innerHTML=`<div style="text-align:center;padding:24px"><div style="font-size:1.8rem;margin-bottom:9px">🎯</div><div style="font-family:var(--font-d);font-size:.72rem;color:var(--t3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:7px">Recommended</div><div style="font-family:var(--font-d);font-size:1.05rem;font-weight:700;color:var(--green);margin-bottom:10px">${rec}</div><p style="font-size:.82rem;color:var(--t2);margin-bottom:16px">Book a free 30-min demo — Devika will personalise this further.</p><div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap"><a href="#contact" class="btn btn-p" style="font-size:.8rem">Book Free Demo →</a><button class="btn btn-g" style="font-size:.8rem" onclick="ans=[];qi=0;renderCareerQuiz()">Retake</button></div></div>`;
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
  el.innerHTML=`<div style="background:linear-gradient(135deg,rgba(37,211,102,.08),rgba(37,211,102,.02));border:1px solid rgba(37,211,102,.2);border-radius:var(--r-xl);padding:24px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px"><div style="display:flex;align-items:center;gap:14px;flex:1;min-width:220px"><div style="width:48px;height:48px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0">💬</div><div><div style="font-family:var(--font-d);font-size:.95rem;font-weight:700;color:var(--t1);margin-bottom:4px">Join the DataVika WhatsApp Community</div><div style="font-size:.8rem;color:var(--t2);margin-bottom:6px">Free resources, job alerts, session announcements and peer support</div><div style="display:flex;gap:5px;flex-wrap:wrap">${['Free to join','Weekly tips','Job alerts','Peer support'].map(t=>`<span style="font-size:.66rem;color:#25D366;background:rgba(37,211,102,.1);padding:2px 7px;border-radius:50px;border:1px solid rgba(37,211,102,.2)">${t}</span>`).join('')}</div></div></div><a href="https://chat.whatsapp.com/Jvf40wFUenE70ZaHDH6Gwb" target="_blank" class="btn" style="background:#25D366;color:#060D06;font-weight:700;font-size:.86rem;padding:11px 22px;box-shadow:0 4px 14px rgba(37,211,102,.28);flex-shrink:0;white-space:nowrap">Join Free →</a></div>`;
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
    if(ql.includes('mock')||ql.includes('interview'))return'Mock Interview Pack is Rs.2,500 — 3 full rounds (Technical, HR, Case Study) with recording and written feedback. Also included FREE in all 3-course bundles.';
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
        <span style="font-size:1.1rem">🎯</span>
        With any 3-course bundle — <strong>ALL placement packs FREE</strong>
      </div>
      <div style="width:1px;background:var(--border)"></div>
      <div style="display:flex;align-items:center;gap:7px;color:var(--t2)">
        <span style="font-size:1.1rem">💼</span>
        Already skilled? Purchase standalone at listed price
      </div>
    </div>`;
}


/* ── MAIN ── */
document.addEventListener('DOMContentLoaded',()=>{
  initTheme();initNav();initHero();initBars();initMarquee();initRotatingSub();
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
