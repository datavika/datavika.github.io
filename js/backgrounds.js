// ================================================================
// DATAVIKA v5 — 6 Animated Section Backgrounds
// Each background matches its section's psychological purpose
// ================================================================

window.initBackgrounds = function() {

  // ── BG1: Hero — DataCamp-style animated diagonal grid ────────
  (function(){
    const c = document.getElementById('bg-hero');
    if (!c) return;
    const ctx = c.getContext('2d');
    let t = 0;
    function resize() {
      c.width = c.parentElement.offsetWidth;
      c.height = c.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize, {passive:true});

    function draw() {
      const W = c.width, H = c.height;
      ctx.clearRect(0, 0, W, H);

      const spacing = 52;
      const offset = (t * 0.35) % spacing;

      // Diagonal lines — going top-right like DataCamp
      ctx.lineWidth = 0.55;
      for (let x = -H + offset; x < W + H; x += spacing) {
        const alpha = 0.022 + 0.012 * Math.sin(x * 0.007 + t * 0.012);
        ctx.strokeStyle = `rgba(57,211,83,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + H, H);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offset * 0.7; y < H; y += spacing * 0.9) {
        const alpha = 0.012 + 0.006 * Math.sin(y * 0.018 + t * 0.009);
        ctx.strokeStyle = `rgba(57,211,83,${alpha})`;
        ctx.lineWidth = 0.45;
        ctx.beginPath();
        ctx.moveTo(0, y); ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Glowing nodes at intersections
      for (let gx = offset; gx < W + spacing; gx += spacing) {
        for (let gy = (offset * 0.7) % (spacing * 0.9); gy < H; gy += spacing * 0.9) {
          const pulse = 0.5 + 0.5 * Math.sin(gx * 0.05 + gy * 0.04 + t * 0.018);
          if (pulse > 0.78) {
            ctx.beginPath();
            ctx.arc(gx, gy, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(57,211,83,${0.08*pulse})`;
            ctx.fill();
          }
        }
      }

      // Moving accent line sweep
      const ax = (t * 0.55) % (W + H) - H;
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(57,211,83,0.06)';
      ctx.beginPath();
      ctx.moveTo(ax, 0); ctx.lineTo(ax + H, H);
      ctx.stroke();

      // Radial vignette — darker edges, focus center
      const vg = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.7);
      vg.addColorStop(0, 'rgba(13,31,15,0)');
      vg.addColorStop(1, 'rgba(13,31,15,0.5)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      t++;
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── BG2: Problem — Flowing data streams (tension) ────────────
  (function(){
    const c = document.getElementById('bg-problem');
    if (!c) return;
    const ctx = c.getContext('2d');
    function resize() { c.width=c.parentElement.offsetWidth; c.height=c.parentElement.offsetHeight; }
    resize(); window.addEventListener('resize', resize, {passive:true});

    const streams = Array.from({length:14}, () => ({
      x: Math.random() * 1400,
      y: Math.random() * 500,
      speed: 0.3 + Math.random() * 0.5,
      len: 40 + Math.random() * 90,
      alpha: 0.04 + Math.random() * 0.05,
      isRed: Math.random() > 0.65,
    }));

    function draw() {
      const W=c.width, H=c.height;
      ctx.clearRect(0, 0, W, H);

      // Subtle scanlines
      for (let y=0; y<H; y+=20) {
        ctx.fillStyle='rgba(255,255,255,0.006)';
        ctx.fillRect(0, y, W, 1);
      }

      streams.forEach(s => {
        s.x += s.speed;
        if (s.x > W + s.len) { s.x = -s.len; s.y = Math.random() * H; }
        const color = s.isRed ? '255,70,55' : '160,160,160';
        const g = ctx.createLinearGradient(s.x-s.len, s.y, s.x, s.y);
        g.addColorStop(0, `rgba(${color},0)`);
        g.addColorStop(1, `rgba(${color},${s.alpha})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(s.x-s.len, s.y); ctx.lineTo(s.x, s.y);
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── BG3: Stats — Particle field ──────────────────────────────
  (function(){
    const c = document.getElementById('bg-stats');
    if (!c) return;
    const ctx = c.getContext('2d');
    function resize() { c.width=c.parentElement.offsetWidth; c.height=c.parentElement.offsetHeight; }
    resize(); window.addEventListener('resize', resize, {passive:true});

    const pts = Array.from({length:40}, () => ({
      x: Math.random()*1200, y: Math.random()*300,
      vx: (Math.random()-.5)*.2, vy: (Math.random()-.5)*.2,
      r: Math.random()*1.2+.3, a: Math.random()*.2+.06,
    }));

    function draw() {
      const W=c.width, H=c.height;
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W) p.vx*=-1; if(p.y<0||p.y>H) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(57,211,83,${p.a})`; ctx.fill();
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<100){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle=`rgba(57,211,83,${.035*(1-d/100)})`; ctx.lineWidth=.6; ctx.stroke(); }
      }
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── BG4: Courses — Hexagonal grid ────────────────────────────
  (function(){
    const c = document.getElementById('bg-courses');
    if (!c) return;
    const ctx = c.getContext('2d');
    function resize() { c.width=c.parentElement.offsetWidth; c.height=c.parentElement.offsetHeight; }
    resize(); window.addEventListener('resize', resize, {passive:true});

    let t=0;
    function hex(cx,cy,r) {
      ctx.beginPath();
      for(let i=0;i<6;i++){
        const a=Math.PI/180*(60*i-30);
        i===0?ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a)):ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
      }
      ctx.closePath();
    }

    function draw() {
      const W=c.width, H=c.height;
      ctx.clearRect(0,0,W,H);
      const r=34, w=r*Math.sqrt(3), h=r*1.5;
      let row=0;
      for(let y=-r; y<H+r; y+=h){
        const xOff=(row%2===0)?0:w/2;
        for(let x=-w+xOff; x<W+w; x+=w){
          const pulse=0.3+0.7*Math.sin(x*0.018+y*0.016+t*0.016);
          const alpha=0.022+0.018*pulse;
          ctx.strokeStyle=`rgba(57,211,83,${alpha})`;
          ctx.lineWidth=0.55;
          hex(x,y,r-1); ctx.stroke();
          if(pulse>0.92&&Math.sin(x*0.045+t*0.035)>0.94){
            ctx.fillStyle=`rgba(57,211,83,0.025)`;
            hex(x,y,r-1); ctx.fill();
          }
        }
        row++;
      }
      t++; requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── BG5: Uday — Warm amber radial glow ───────────────────────
  (function(){
    const c = document.getElementById('bg-uday');
    if (!c) return;
    const ctx = c.getContext('2d');
    function resize() { c.width=c.parentElement.offsetWidth; c.height=c.parentElement.offsetHeight; }
    resize(); window.addEventListener('resize', resize, {passive:true});

    let t=0;
    function draw(){
      const W=c.width, H=c.height;
      ctx.clearRect(0,0,W,H);
      const pulse=0.7+0.3*Math.sin(t*0.018);

      // Main radial glow
      const g=ctx.createRadialGradient(W*0.18,H*0.5,0,W*0.18,H*0.5,W*0.55);
      g.addColorStop(0,`rgba(245,166,35,${0.09*pulse})`);
      g.addColorStop(0.5,`rgba(245,166,35,${0.03*pulse})`);
      g.addColorStop(1,'rgba(245,166,35,0)');
      ctx.fillStyle=g; ctx.fillRect(0,0,W,H);

      // Second glow right side
      const g2=ctx.createRadialGradient(W*0.85,H*0.3,0,W*0.85,H*0.3,W*0.3);
      g2.addColorStop(0,`rgba(245,166,35,${0.05*pulse})`);
      g2.addColorStop(1,'rgba(245,166,35,0)');
      ctx.fillStyle=g2; ctx.fillRect(0,0,W,H);

      // Concentric rings
      for(let r=50;r<W;r+=60){
        const a=0.022*(1-r/W)*pulse;
        ctx.beginPath(); ctx.arc(W*0.18,H*0.5,r,0,Math.PI*2);
        ctx.strokeStyle=`rgba(245,166,35,${a})`; ctx.lineWidth=0.7; ctx.stroke();
      }

      // Floating particles
      for(let i=0;i<10;i++){
        const px=W*0.05+(W*0.7)*(Math.sin(t*0.01+i*1.05)*0.5+0.5);
        const py=H*(Math.cos(t*0.008+i*0.88)*0.38+0.5);
        const pr=1+Math.sin(t*0.028+i)*0.6;
        ctx.beginPath(); ctx.arc(px,py,pr,0,Math.PI*2);
        ctx.fillStyle=`rgba(245,166,35,${0.18+0.1*Math.sin(t*0.02+i)})`; ctx.fill();
      }

      t++; requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── BG6: Contact — Minimal scan-line grid (focus) ────────────
  (function(){
    const c = document.getElementById('bg-contact');
    if (!c) return;
    const ctx = c.getContext('2d');
    function resize() { c.width=c.parentElement.offsetWidth; c.height=c.parentElement.offsetHeight; }
    resize(); window.addEventListener('resize', resize, {passive:true});

    let t=0;
    function draw(){
      const W=c.width, H=c.height;
      ctx.clearRect(0,0,W,H);

      // Calm grid — very subtle
      ctx.lineWidth=0.45;
      for(let x=0;x<W;x+=80){
        ctx.strokeStyle='rgba(57,211,83,0.015)';
        ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke();
      }
      for(let y=0;y<H;y+=80){
        ctx.strokeStyle='rgba(57,211,83,0.015)';
        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
      }

      // Moving scan line — draws eye downward to the form
      const scanY=(t*0.6)%(H+80)-40;
      const sg=ctx.createLinearGradient(0,scanY-18,0,scanY+18);
      sg.addColorStop(0,'rgba(57,211,83,0)');
      sg.addColorStop(0.5,'rgba(57,211,83,0.022)');
      sg.addColorStop(1,'rgba(57,211,83,0)');
      ctx.fillStyle=sg; ctx.fillRect(0,scanY-18,W,36);

      // Subtle corner accents
      const ca=0.04+0.02*Math.sin(t*0.02);
      ctx.strokeStyle=`rgba(57,211,83,${ca})`; ctx.lineWidth=0.8;
      // Top-left
      ctx.beginPath(); ctx.moveTo(0,40); ctx.lineTo(0,0); ctx.lineTo(40,0); ctx.stroke();
      // Bottom-right
      ctx.beginPath(); ctx.moveTo(W,H-40); ctx.lineTo(W,H); ctx.lineTo(W-40,H); ctx.stroke();

      t++; requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── BG-Events: Network constellation ─────────────────────────
  (function(){
    const c = document.getElementById('bg-events');
    if (!c) return;
    const ctx = c.getContext('2d');
    function resize() { c.width=c.parentElement.offsetWidth; c.height=c.parentElement.offsetHeight; }
    resize(); window.addEventListener('resize', resize, {passive:true});

    const nodes = Array.from({length:30}, () => ({
      x: Math.random()*1400, y: Math.random()*500,
      vx: (Math.random()-.5)*.22, vy: (Math.random()-.5)*.22,
      r: 1.2+Math.random()*1.8, a: 0.07+Math.random()*0.15,
    }));

    function draw(){
      const W=c.width, H=c.height;
      ctx.clearRect(0,0,W,H);
      nodes.forEach(n=>{
        n.x+=n.vx; n.y+=n.vy;
        if(n.x<0||n.x>W) n.vx*=-1; if(n.y<0||n.y>H) n.vy*=-1;
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(57,211,83,${n.a})`; ctx.fill();
      });
      for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++){
        const dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){ ctx.beginPath(); ctx.moveTo(nodes[i].x,nodes[i].y); ctx.lineTo(nodes[j].x,nodes[j].y);
          ctx.strokeStyle=`rgba(57,211,83,${0.02*(1-d/110)})`; ctx.lineWidth=0.6; ctx.stroke(); }
      }
      requestAnimationFrame(draw);
    }
    draw();
  })();

};
