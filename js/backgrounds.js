// ================================================================
// DATAVIKA — backgrounds.js  |  Section animated backgrounds
// Mobile (<768px): all animations disabled for performance
// ================================================================
(function(){
  if(window.innerWidth<768) return; // No animations on mobile

  // ── HERO: Diagonal animated grid (DataCamp-inspired) ──────────
  (function(){
    const cv=document.getElementById('bg-hero');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||window.innerHeight;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    function draw(){
      const W=cv.width,H=cv.height;
      ctx.clearRect(0,0,W,H);
      ctx.save();
      ctx.translate(W/2,H/2);
      ctx.rotate(Math.PI/6);
      const D=Math.sqrt(W*W+H*H),S=44;
      const cols=Math.ceil(D/S)+4,rows=Math.ceil(D/S)+4;
      const ox=-(cols/2)*S,oy=-(rows/2)*S;
      for(let i=0;i<cols;i++){
        const x=ox+i*S;
        const a=0.04+0.05*Math.sin(t*0.018+i*0.3)*0.5+0.025;
        ctx.beginPath();ctx.moveTo(x,-D);ctx.lineTo(x,D);
        ctx.strokeStyle=`rgba(57,211,83,${a})`;ctx.lineWidth=0.8;ctx.stroke();
      }
      for(let j=0;j<rows;j++){
        const y=oy+j*S;
        const a=0.025+0.03*Math.sin(t*0.014+j*0.25)*0.5+0.015;
        ctx.beginPath();ctx.moveTo(-D,y);ctx.lineTo(D,y);
        ctx.strokeStyle=`rgba(57,211,83,${a})`;ctx.lineWidth=0.5;ctx.stroke();
      }
      for(let i=0;i<cols;i+=2){
        for(let j=0;j<rows;j+=2){
          const p=Math.sin(t*0.022+i*0.4+j*0.35)*0.5+0.5;
          if(p>0.78){
            ctx.beginPath();
            ctx.arc(ox+i*S,oy+j*S,1.3,0,Math.PI*2);
            ctx.fillStyle=`rgba(57,211,83,${0.28*p})`;
            ctx.fill();
          }
        }
      }
      ctx.restore();
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── STATS: Particle network ────────────────────────────────────
  (function(){
    const cv=document.getElementById('bg-stats');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||120;}
    resize();window.addEventListener('resize',resize,{passive:true});
    const pts=Array.from({length:35},()=>({x:Math.random()*1400,y:Math.random()*120,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.3}));
    function draw(){
      const W=cv.width,H=cv.height;
      ctx.clearRect(0,0,W,H);
      pts.forEach(p=>{
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
        ctx.beginPath();ctx.arc(p.x,p.y,1.4,0,Math.PI*2);
        ctx.fillStyle='rgba(57,211,83,.3)';ctx.fill();
      });
      pts.forEach((a,i)=>pts.slice(i+1).forEach(b=>{
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<110){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(57,211,83,${0.1*(1-d/110)})`;ctx.lineWidth=0.5;ctx.stroke();}
      }));
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── PROBLEM: Flowing red tension streams ───────────────────────
  (function(){
    const cv=document.getElementById('bg-problem');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||500;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    const streams=Array.from({length:9},(_,i)=>({x:Math.random()*1400,y:50+i*55,len:70+Math.random()*110,speed:.5+Math.random()*.5,alpha:.05+Math.random()*.07}));
    function draw(){
      const W=cv.width,H=cv.height;
      ctx.clearRect(0,0,W,H);
      streams.forEach(s=>{
        s.x+=s.speed;if(s.x>W+s.len)s.x=-s.len;
        const wave=Math.sin(t*.02+s.x*.008)*10;
        const g=ctx.createLinearGradient(s.x-s.len,0,s.x,0);
        g.addColorStop(0,'rgba(255,70,60,0)');g.addColorStop(1,`rgba(255,70,60,${s.alpha})`);
        ctx.beginPath();ctx.moveTo(s.x-s.len,s.y+wave);ctx.lineTo(s.x,s.y+wave);
        ctx.strokeStyle=g;ctx.lineWidth=1.5;ctx.stroke();
      });
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── COURSES: Hexagonal grid ────────────────────────────────────
  (function(){
    const cv=document.getElementById('bg-courses');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||900;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    function hex(cx,cy,r){ctx.beginPath();for(let i=0;i<6;i++){const a=Math.PI/180*(60*i-30);i===0?ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a)):ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));}ctx.closePath();}
    function draw(){
      const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
      const r=32,w=r*Math.sqrt(3),h=r*1.5;let row=0;
      for(let y=-r;y<H+r;y+=h){
        const xOff=(row%2===0)?0:w/2;
        for(let x=-w+xOff;x<W+w;x+=w){
          const p=.3+.7*Math.sin(x*.012+y*.01+t*.012);
          ctx.strokeStyle=`rgba(57,211,83,${.012+.022*p})`;ctx.lineWidth=.6;
          hex(x,y,r-1);ctx.stroke();
        }
        row++;
      }
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── UDAY: Warm amber radial pulse ─────────────────────────────
  (function(){
    const cv=document.getElementById('bg-uday');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||500;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    function draw(){
      const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
      const cx=W*.28,cy=H*.5;
      for(let i=0;i<5;i++){
        const r=90+i*85+Math.sin(t*.015+i)*.25*30;
        ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
        ctx.strokeStyle=`rgba(245,166,35,${.055-i*.008})`;ctx.lineWidth=1;ctx.stroke();
      }
      for(let i=0;i<14;i++){
        const px=cx+Math.cos(t*.008+i*.45)*220,py=cy+Math.sin(t*.006+i*.45)*130;
        ctx.beginPath();ctx.arc(px,py,1.1,0,Math.PI*2);
        ctx.fillStyle='rgba(245,166,35,.18)';ctx.fill();
      }
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── PRICING: Dot wave matrix ───────────────────────────────────
  (function(){
    const cv=document.getElementById('bg-pricing');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||400;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    function draw(){
      const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
      const G=28;
      for(let x=G/2;x<W;x+=G)for(let y=G/2;y<H;y+=G){
        const w=Math.sin(x*.04+t*.016)*Math.cos(y*.04+t*.012);
        if(w>.28){ctx.beginPath();ctx.arc(x,y,1,0,Math.PI*2);ctx.fillStyle=`rgba(57,211,83,${.07*(w-.28)/.72})`;ctx.fill();}
      }
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── PACKS: Subtle pulse dots ───────────────────────────────────
  (function(){
    const cv=document.getElementById('bg-packs');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||900;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    function draw(){
      const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
      const G=34;
      for(let x=G/2;x<W;x+=G)for(let y=G/2;y<H;y+=G){
        const w=Math.sin(x*.033+t*.013)*Math.cos(y*.033+t*.01);
        const a=Math.max(0,.05*w);
        if(a>.004){ctx.beginPath();ctx.arc(x,y,.9,0,Math.PI*2);ctx.fillStyle=`rgba(57,211,83,${a})`;ctx.fill();}
      }
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── EVENTS: Constellation ──────────────────────────────────────
  (function(){
    const cv=document.getElementById('bg-events');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||500;}
    resize();window.addEventListener('resize',resize,{passive:true});
    const stars=Array.from({length:30},()=>({x:Math.random()*1400,y:Math.random()*500,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.18,r:Math.random()*1.4+.4}));
    function draw(){
      const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
      stars.forEach(s=>{
        s.x+=s.vx;s.y+=s.vy;
        if(s.x<0)s.x=W;if(s.x>W)s.x=0;if(s.y<0)s.y=H;if(s.y>H)s.y=0;
        ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle='rgba(57,211,83,.28)';ctx.fill();
      });
      stars.forEach((a,i)=>stars.slice(i+1).forEach(b=>{
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<95){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(57,211,83,${.09*(1-d/95)})`;ctx.lineWidth=.5;ctx.stroke();}
      }));
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── CONSULTING: Moving scan lines ─────────────────────────────
  (function(){
    const cv=document.getElementById('bg-consulting');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||500;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    function draw(){
      const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
      const sY=(t*1.1)%(H+40)-20;
      const g=ctx.createLinearGradient(0,sY-18,0,sY+18);
      g.addColorStop(0,'rgba(57,211,83,0)');g.addColorStop(.5,'rgba(57,211,83,.04)');g.addColorStop(1,'rgba(57,211,83,0)');
      ctx.fillStyle=g;ctx.fillRect(0,sY-18,W,36);
      for(let y=0;y<H;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.strokeStyle='rgba(57,211,83,.02)';ctx.lineWidth=.4;ctx.stroke();}
      for(let x=0;x<W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.strokeStyle='rgba(57,211,83,.014)';ctx.lineWidth=.4;ctx.stroke();}
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── CONTACT: Minimal focus grid ───────────────────────────────
  (function(){
    const cv=document.getElementById('bg-contact');
    if(!cv)return;
    const ctx=cv.getContext('2d');
    function resize(){cv.width=cv.parentElement.offsetWidth||window.innerWidth;cv.height=cv.parentElement.offsetHeight||600;}
    resize();window.addEventListener('resize',resize,{passive:true});
    let t=0;
    function draw(){
      const W=cv.width,H=cv.height;ctx.clearRect(0,0,W,H);
      const sY=(t*.75)%(H+30)-15;
      const g=ctx.createLinearGradient(0,sY-14,0,sY+14);
      g.addColorStop(0,'rgba(57,211,83,0)');g.addColorStop(.5,'rgba(57,211,83,.045)');g.addColorStop(1,'rgba(57,211,83,0)');
      ctx.fillStyle=g;ctx.fillRect(0,sY-14,W,28);
      for(let y=0;y<H;y+=34){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.strokeStyle='rgba(57,211,83,.02)';ctx.lineWidth=.4;ctx.stroke();}
      t++;requestAnimationFrame(draw);
    }
    draw();
  })();

})();
