/**
 * MUHAMMED ASLAM | PORTFOLIO INTERACTIVITY ENGINE
 * Production Architecture: Lazy Web Audio, 3D Tilt, Battery-Safe Canvas,
 * System Architecture Highlights, Mobile Navigation, Command Palette, CLI Terminal,
 * Interactive Recruiter Role Matcher.
 */

// ==========================================
// 1. LAZY WEB AUDIO SYNTHESIZER (ZERO STARTUP WARNINGS)
// ==========================================
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = localStorage.getItem('aslam_sound_enabled') === 'true';
  }

  ensureContext() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('aslam_sound_enabled', this.enabled);
    if (this.enabled) {
      this.ensureContext();
      this.playChime();
    }
    return this.enabled;
  }

  playPop(freq = 600, duration = 0.05) {
    if (!this.enabled) return;
    try {
      this.ensureContext();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.audioCtx.currentTime + duration);
      gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  playClick() {
    this.playPop(850, 0.04);
  }

  playHover() {
    if (!this.enabled || !this.audioCtx) return;
    this.playPop(1200, 0.02);
  }

  playChime() {
    if (!this.enabled) return;
    try {
      this.ensureContext();
      if (!this.audioCtx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const startTime = this.audioCtx.currentTime + (idx * 0.06);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.05, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    } catch (e) {}
  }
}

const sounds = new SoundEngine();

// ==========================================
// 2. BATTERY-AWARE CYBER CONSTELLATION CANVAS
// ==========================================
function initCyberCanvas() {
  const canvas = document.getElementById('cyberCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 20 : 55;
  const mouse = { x: null, y: null, maxDist: 110 };
  let isTabActive = true;
  let animFrameId = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });
  }

  document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive && !animFrameId) {
      animate();
    }
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.7;
      this.color = Math.random() > 0.6 ? 'rgba(0, 245, 255, ' : 'rgba(168, 85, 247, ';
      this.alpha = Math.random() * 0.4 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.maxDist) {
          const force = (mouse.maxDist - dist) / mouse.maxDist;
          this.x -= (dx / dist) * force * 1.1;
          this.y -= (dy / dist) * force * 1.1;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    if (!isTabActive) {
      animFrameId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 95) {
          const alpha = (1 - dist / 95) * 0.1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
          ctx.lineWidth = 0.65;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animFrameId = requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================
// 3. 3D TILT EFFECT (DESKTOP ONLY)
// ==========================================
function initSpotlightAndTilt() {
  if (window.innerWidth < 768) return;

  const cards = document.querySelectorAll('.tilt-element');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });

    card.addEventListener('mouseenter', () => {
      sounds.playHover();
    });
  });
}

// ==========================================
// 4. DYNAMIC ROTATING TEXT (TYPING EFFECT)
// ==========================================
function initDynamicTyping() {
  const target = document.getElementById('typingRole');
  if (!target) return;

  const roles = [
    ".NET Full Stack Developer",
    "Angular & TypeScript Engineer",
    "ASP.NET Core Web API Specialist",
    "Real-Time SignalR Architect",
    "SQL Server & Database Optimizer"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 65;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 30;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 65;
    }

    if (!isDeleting && charIdx === current.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ==========================================
// 5. LOOK SWITCHER (BLAZER <-> TURTLENECK)
// ==========================================
function initLookSwitcher() {
  const switchBtn = document.getElementById('lookSwitchBtn');
  const cardInner = document.getElementById('heroCardInner');
  const lookBadge = document.getElementById('currentLookBadge');
  if (!switchBtn || !cardInner) return;

  let isFlipped = false;

  switchBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    cardInner.classList.toggle('is-flipped', isFlipped);
    sounds.playPop(isFlipped ? 950 : 700, 0.08);

    if (lookBadge) {
      lookBadge.textContent = isFlipped ? "Turtleneck Portrait" : "Studio Blazer Portrait";
    }

    showToast(isFlipped ? "Switched to Turtleneck Portrait" : "Switched to Studio Blazer Portrait");
  });
}

// ==========================================
// 6. INTERACTIVE RECRUITER TERMINAL CLI (FOCUSED ON ENGINEERING)
// ==========================================
function initRecruiterTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalToggleBtn = document.getElementById('terminalToggleBtn');
  const terminalDrawer = document.getElementById('terminalDrawer');
  const terminalCloseBtn = document.getElementById('terminalCloseBtn');

  if (!terminalInput) return;

  const commands = {
    help: `Available commands:
  * <span class="text-cyan-400">help</span>         : Display this command index
  * <span class="text-cyan-400">notice</span>       : Check official notice period & availability
  * <span class="text-cyan-400">match</span>        : Verify candidate match against requirements
  * <span class="text-cyan-400">vitalq</span>       : Deep dive into VitalQ (.NET + Angular + SignalR)
  * <span class="text-cyan-400">jobnest</span>      : JobNest ATS Architecture & Azure deployment
  * <span class="text-cyan-400">cozastore</span>    : CozaStore E-Commerce ERP & CI/CD summary
  * <span class="text-cyan-400">skills</span>       : Full-Stack technical competencies breakdown
  * <span class="text-cyan-400">experience</span>   : Professional roles and company history
  * <span class="text-cyan-400">resume</span>       : Download official ATS-optimized PDF resume
  * <span class="text-cyan-400">contact</span>      : Phone, email, WhatsApp, and social channels
  * <span class="text-cyan-400">clear</span>        : Clear terminal display`,

    notice: `<span class="text-emerald-400 font-bold">Candidate Availability Status:</span>
  * Current Notice Period : 30 Days (Serving / Negotiable for early release)
  * Work Authorization   : Authorized for immediate employment
  * Preferred Locations   : Remote, Hybrid, or On-Site Relocation`,

    match: `<span class="text-cyan-400 font-bold">Candidate Compatibility Check:</span>
  * .NET / C# Web APIs   : 100% Match (VitalQ Symmetrical Service-Controller Architecture)
  * Angular & Signals    : 100% Match (60fps OnPush change detection)
  * Real-Time SignalR    : 100% Match (10,000+ concurrent WebSockets with JWT auto-rotation)
  * SQL Server Indexing  : 100% Match (23 Filtered B-Trees, <0.5ms seeks)
  * Azure & GitHub CI/CD : 100% Match (Automated MSBuild release pipelines)`,

    vitalq: `<span class="text-emerald-400 font-bold">VitalQ Architecture:</span>
  * Stack: Angular (Signals & OnPush), ASP.NET Core Web API, SignalR, Entity Framework Core, SQL Server
  * Concurrency: 10,000+ simultaneous real-time users
  * Database: Sub-millisecond (<0.5ms) seeks via 23 Filtered B-Trees
  * Engine: Dynamic CTAS 1-5 triage scoring & RxJS token concurrency mutex
  * Repo: <a href="https://github.com/muxdaslam-sys/VitalQ" target="_blank" class="text-cyan-400 underline">github.com/muxdaslam-sys/VitalQ</a>`,

    jobnest: `<span class="text-blue-400 font-bold">JobNest Recruitment Platform:</span>
  * Stack: ASP.NET MVC 5, C#, Entity Framework 6, SQL Server, Razor, Bootstrap, AJAX
  * Features: Split-role authentication, instant AJAX ATS pipeline, hardened 5MB resume pipeline
  * CI/CD: Automated GitHub Actions MSBuild pipeline
  * Live Demo: <a href="https://jobnest-e8gwccfzgmgbdthe.southindia-01.azurewebsites.net/" target="_blank" class="text-cyan-400 underline">Visit Azure Live Demo</a>
  * Repo: <a href="https://github.com/muxdaslam-sys/JobNest" target="_blank" class="text-cyan-400 underline">github.com/muxdaslam-sys/JobNest</a>`,

    cozastore: `<span class="text-purple-400 font-bold">CozaStore E-Commerce:</span>
  * Stack: ASP.NET Web Forms, C#, ADO.NET, Microsoft SQL Server, Bootstrap
  * Features: Storefront catalog, dynamic cart & checkout, live Admin analytics & low-stock triggers (&le;10 pcs)
  * CI: GitHub Actions Windows compilation checks
  * Repo: <a href="https://github.com/muxdaslam-sys/CozaStore" target="_blank" class="text-cyan-400 underline">github.com/muxdaslam-sys/CozaStore</a>`,

    skills: `<span class="text-cyan-400 font-bold">Technical Skills:</span>
  * Backend: C#, ASP.NET Core Web API, ASP.NET MVC 5, Entity Framework Core, ADO.NET, RESTful APIs, Swagger
  * Frontend: Angular, TypeScript, RxJS, HTML5, CSS3, Tailwind CSS, Bootstrap 5
  * Real-Time: SignalR WebSockets, Event-Driven Architecture, RxJS Concurrency Mutex
  * Database: SQL Server, Filtered B-Tree Indexes, Stored Procedures, Views, Query Optimization
  * DevOps: Git, GitHub Actions, Microsoft Azure App Service, Visual Studio, Postman, SSMS`,

    experience: `<span class="text-amber-400 font-bold">Experience History:</span>
  1. .NET Full Stack Developer Intern at Luminar Technolab (Jan 2026 - Jun 2026)
     - Engineered enterprise RESTful APIs, Angular OnPush components, and SQL optimization.
  2. Digital Marketer & Web Developer at Deccorlook & National Hospital (May 2025 - Present)
     - Responsive web architecture, warranty registration portals, inventory CRM, technical SEO, and ad campaigns.
  3. BCA (Bachelor of Computer Applications) at Ilahia College of Arts & Science (2022 - 2025)`,

    resume: `<span class="text-green-400">Triggering resume download...</span> Check your browser downloads.`,

    contact: `Muhammed Aslam:
  * Email    : <a href="mailto:muxd.aslam@gmail.com" class="text-cyan-400">muxd.aslam@gmail.com</a>
  * Phone    : <a href="tel:+919061651957" class="text-cyan-400">+91 9061651957</a>
  * WhatsApp : <a href="https://wa.me/919061651957" target="_blank" class="text-cyan-400">+91 9061651957</a>
  * LinkedIn : <a href="https://linkedin.com/in/muxd-aslam" target="_blank" class="text-cyan-400">linkedin.com/in/muxd-aslam</a>
  * GitHub   : <a href="https://github.com/muxdaslam-sys" target="_blank" class="text-cyan-400">github.com/muxdaslam-sys</a>`
  };

  function appendOutput(cmd, res) {
    const entry = document.createElement('div');
    entry.className = "mb-3";
    entry.innerHTML = `
      <div class="flex items-center gap-2 text-slate-400 text-xs mb-1">
        <span class="text-cyan-400 font-mono">aslam@portfolio:~$</span> 
        <span class="text-white font-medium">${cmd}</span>
      </div>
      <div class="text-slate-300 text-xs leading-relaxed pl-3 border-l border-slate-700/60">${res}</div>
    `;
    terminalOutput.appendChild(entry);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = terminalInput.value.trim();
      const cmd = rawCmd.toLowerCase();
      terminalInput.value = '';

      if (!cmd) return;
      sounds.playClick();

      if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
        return;
      }

      if (cmd === 'resume') {
        downloadResume();
      }

      if (commands[cmd]) {
        appendOutput(rawCmd, commands[cmd]);
      } else {
        appendOutput(rawCmd, `<span class="text-red-400">Command not recognized: '${rawCmd}'. Type <span class="text-cyan-400">'help'</span> for the command index.</span>`);
      }
    }
  });

  if (terminalToggleBtn && terminalDrawer) {
    terminalToggleBtn.addEventListener('click', () => {
      terminalDrawer.classList.toggle('hidden');
      sounds.playPop(700, 0.05);
      if (!terminalDrawer.classList.contains('hidden')) {
        terminalInput.focus();
      }
    });
  }

  if (terminalCloseBtn && terminalDrawer) {
    terminalCloseBtn.addEventListener('click', () => {
      terminalDrawer.classList.add('hidden');
      sounds.playPop(400, 0.05);
    });
  }
}

// ==========================================
// 9. COMMAND PALETTE (CTRL+K / CMD+K)
// ==========================================
function initCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  const input = document.getElementById('cmdPaletteInput');
  const list = document.getElementById('cmdPaletteList');
  const triggerBtn = document.getElementById('cmdPaletteTrigger');

  if (!modal || !input) return;

  const actions = [
    { title: "VitalQ Hospital Platform", cat: "Project", action: () => scrollToSection('vitalq') },
    { title: "JobNest Recruitment ATS", cat: "Project", action: () => scrollToSection('jobnest') },
    { title: "CozaStore E-Commerce ERP", cat: "Project", action: () => scrollToSection('cozastore') },
    { title: "View Technical Skills", cat: "Skills", action: () => scrollToSection('skills') },
    { title: "Work Experience & History", cat: "Experience", action: () => scrollToSection('experience') },
    { title: "Download PDF Resume", cat: "Resume", action: () => downloadResume() },
    { title: "Why Hire Me (30d Notice)", cat: "Recruiter", action: () => openRecruiterPitchModal() },
    { title: "Send Email (muxd.aslam@gmail.com)", cat: "Contact", action: () => window.location.href = 'mailto:muxd.aslam@gmail.com' },
    { title: "Open Terminal CLI", cat: "Tools", action: () => toggleTerminal() },
    { title: "GitHub Profile (muxdaslam-sys)", cat: "Link", action: () => window.open('https://github.com/muxdaslam-sys', '_blank') },
    { title: "LinkedIn Profile (muxd-aslam)", cat: "Link", action: () => window.open('https://linkedin.com/in/muxd-aslam', '_blank') }
  ];

  function renderList(query = '') {
    const filtered = actions.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.cat.toLowerCase().includes(query.toLowerCase()));
    list.innerHTML = '';

    if (filtered.length === 0) {
      list.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">No matching commands found.</div>`;
      return;
    }

    filtered.forEach((item) => {
      const btn = document.createElement('button');
      btn.className = "w-full text-left flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/80 transition-all text-sm group";
      btn.innerHTML = `
        <span class="text-slate-200 group-hover:text-cyan-400 font-medium">${item.title}</span>
        <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 border border-slate-700/50">${item.cat}</span>
      `;
      btn.addEventListener('click', () => {
        item.action();
        closeModal();
      });
      list.appendChild(btn);
    });
  }

  function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    input.value = '';
    renderList();
    input.focus();
    sounds.playPop(800, 0.05);
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  input.addEventListener('input', (e) => {
    renderList(e.target.value);
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('hidden')) {
        openModal();
      } else {
        closeModal();
      }
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// ==========================================
// 10. WHY HIRE ME PROFILE & ROLE MATCHER
// ==========================================
function initRecruiterPitch() {
  const triggerBtn = document.getElementById('recruiterPitchTrigger');
  const modal = document.getElementById('recruiterPitchModal');
  const closeBtn = document.getElementById('recruiterPitchClose');

  if (!modal) return;

  function open() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    sounds.playChime();
  }

  function close() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    sounds.playPop(400, 0.05);
  }

  if (triggerBtn) triggerBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  // Interactive Match Score Calculation
  const matcherCheckboxes = document.querySelectorAll('.role-match-check');
  const matchScoreEl = document.getElementById('matchScoreDisplay');
  const matchBadgeEl = document.getElementById('matchStatusBadge');

  function updateMatch() {
    if (!matchScoreEl) return;
    let checkedCount = 0;
    matcherCheckboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / matcherCheckboxes.length) * 100);
    matchScoreEl.textContent = `${percent}% Match`;

    if (matchBadgeEl) {
      if (percent === 100) {
        matchBadgeEl.textContent = "Verified Direct Fit";
        matchBadgeEl.className = "text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold";
      } else {
        matchBadgeEl.textContent = `${checkedCount} / ${matcherCheckboxes.length} Requirements Verified`;
        matchBadgeEl.className = "text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-semibold";
      }
    }
  }

  matcherCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      sounds.playClick();
      updateMatch();
    });
  });

  updateMatch();
  window.openRecruiterPitchModal = open;
}

// ==========================================
// 11. MOBILE NAVIGATION DRAWER
// ==========================================
function initMobileNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileMenuDrawer) return;

  function openMenu() {
    mobileMenuDrawer.classList.remove('menu-closed', 'hidden');
    mobileMenuDrawer.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    sounds.playPop(750, 0.05);
  }

  function closeMenu() {
    mobileMenuDrawer.classList.remove('menu-open');
    mobileMenuDrawer.classList.add('menu-closed');
    document.body.style.overflow = '';
    setTimeout(() => {
      mobileMenuDrawer.classList.add('hidden');
    }, 250);
  }

  mobileMenuBtn.addEventListener('click', openMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  mobileMenuDrawer.addEventListener('click', (e) => {
    if (e.target === mobileMenuDrawer) closeMenu();
  });
}

// ==========================================
// 12. UTILITY HELPERS (CLIPBOARD & TOAST)
// ==========================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = "toast-item";
  toast.innerHTML = `
    <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function copyEmail() {
  const email = "muxd.aslam@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    sounds.playChime();
    showToast("Email copied to clipboard: muxd.aslam@gmail.com");
  }).catch(() => {
    showToast("Email: muxd.aslam@gmail.com");
  });
}

function copyPhone() {
  const phone = "+91 9061651957";
  navigator.clipboard.writeText(phone).then(() => {
    sounds.playChime();
    showToast("Phone copied to clipboard: +91 9061651957");
  }).catch(() => {
    showToast("Phone: +91 9061651957");
  });
}

function downloadResume() {
  sounds.playChime();
  showToast("Downloading Muhammed Aslam Resume...");
  const link = document.createElement('a');
  link.href = "assets/docs/Muhammed_Aslam_Resume.pdf";
  link.download = "Muhammed_Aslam_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    sounds.playClick();
  }
}

function toggleTerminal() {
  const terminalDrawer = document.getElementById('terminalDrawer');
  if (terminalDrawer) {
    terminalDrawer.classList.toggle('hidden');
    sounds.playPop(750, 0.05);
  }
}

// ==========================================
// 13. SOUND TOGGLE BUTTON INITIALIZATION
// ==========================================
function initSoundToggleButton() {
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const soundLabel = document.getElementById('soundLabel');
  if (!soundBtn) return;

  function updateVisuals(enabled) {
    if (enabled) {
      soundBtn.classList.add('border-cyan-500/40', 'bg-cyan-500/10', 'text-cyan-400');
      soundBtn.classList.remove('border-slate-800', 'text-slate-400');
      if (soundLabel) soundLabel.textContent = "Audio ON";
      if (soundIcon) soundIcon.innerHTML = `<span class="sound-bar"></span><span class="sound-bar"></span><span class="sound-bar"></span>`;
    } else {
      soundBtn.classList.remove('border-cyan-500/40', 'bg-cyan-500/10', 'text-cyan-400');
      soundBtn.classList.add('border-slate-800', 'text-slate-400');
      if (soundLabel) soundLabel.textContent = "Audio OFF";
      if (soundIcon) soundIcon.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>`;
    }
  }

  updateVisuals(sounds.enabled);

  soundBtn.addEventListener('click', () => {
    const isNowOn = sounds.toggle();
    updateVisuals(isNowOn);
    showToast(isNowOn ? "Interactive audio effects activated" : "Audio effects muted");
  });
}

// ==========================================
// 14. SKILLS FILTERING TABS
// ==========================================
function initSkillsFilter() {
  const tabs = document.querySelectorAll('.skill-tab');
  const cards = document.querySelectorAll('.skill-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sounds.playClick();
      const filter = tab.dataset.filter;

      tabs.forEach(t => {
        t.classList.remove('active-tab', 'bg-cyan-500', 'text-black', 'border-cyan-400');
        t.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
      });

      tab.classList.add('active-tab', 'bg-cyan-500', 'text-black', 'border-cyan-400');
      tab.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');

      cards.forEach(card => {
        if (filter === 'all' || (card.dataset.category && card.dataset.category.includes(filter))) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// BOOTSTRAP ON DOM LOADED
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCyberCanvas();
  initSpotlightAndTilt();
  initDynamicTyping();
  initLookSwitcher();
  initRecruiterTerminal();
  initCommandPalette();
  initRecruiterPitch();
  initMobileNavigation();
  initSoundToggleButton();
  initSkillsFilter();

  window.copyEmail = copyEmail;
  window.copyPhone = copyPhone;
  window.downloadResume = downloadResume;
  window.scrollToSection = scrollToSection;
  window.toggleTerminal = toggleTerminal;
});
