/* ============================================
   SOLARIS — Intelligent Task Engine
   Firebase + Features 1-12
   ============================================ */
(function () {
  'use strict';

  /* ============ FIREBASE CONFIG ============ */
  // ⚠️  Replace with your own Firebase config from https://console.firebase.google.com
  const firebaseConfig = {
    apiKey: "AIzaSyCd6ka0pLd6sAXUCWWjzonP7_kf0kVWlmg",
    authDomain: "to-do-app-17d8c.firebaseapp.com",
    projectId: "to-do-app-17d8c",
    storageBucket: "to-do-app-17d8c.firebasestorage.app",
    messagingSenderId: "159153671883",
    appId: "1:159153671883:web:377c05ab76b2459f0a154e"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  /* ============ DOM CACHE ============ */
  const DOM = {
    sidebar: document.getElementById('sidebar'),
    hamburger: document.getElementById('hamburger'),
    greeting: document.getElementById('greeting'),
    fbDot: document.getElementById('fbDot'),
    fbLabel: document.getElementById('fbLabel'),
    progressPct: document.getElementById('progressPct'),
    sidebarBarFill: document.getElementById('sidebarBarFill'),
    energyLabel: document.getElementById('energyLabel'),
    energyBarFill: document.getElementById('energyBarFill'),
    energySuggestion: document.getElementById('energySuggestion'),
    envChips: document.getElementById('envChips'),
    navBtns: document.querySelectorAll('.sb-nav-btn'),
    catBtns: document.querySelectorAll('.sb-cat-btn'),
    autoCount: document.getElementById('autoCount'),
    autoStatus: document.getElementById('autoStatus'),
    searchInput: document.getElementById('searchInput'),
    viewBtns: document.querySelectorAll('.vs-btn'),
    sortSelect: document.getElementById('sortSelect'),
    themeToggle: document.getElementById('themeToggle'),
    pageTitle: document.getElementById('pageTitle'),
    pageDate: document.getElementById('pageDate'),
    statTotal: document.getElementById('statTotal'),
    statDone: document.getElementById('statDone'),
    statPending: document.getElementById('statPending'),
    statOverdue: document.getElementById('statOverdue'),
    statGhosted: document.getElementById('statGhosted'),
    statBlocked: document.getElementById('statBlocked'),
    statBurner: document.getElementById('statBurner'),
    statWins: document.getElementById('statWins'),
    dwLabel: document.getElementById('dwLabel'),
    dwFill: document.getElementById('dwFill'),
    deepWorkBar: document.getElementById('deepWorkBar'),
    pomoTime: document.getElementById('pomoTime'),
    pomoStart: document.getElementById('pomoStart'),
    pomoReset: document.getElementById('pomoReset'),
    pomoModeBtns: document.querySelectorAll('.pomo-mode-btn'),
    burndownPanel: document.getElementById('burndownPanel'),
    bdEst: document.getElementById('bdEst'),
    bdActual: document.getElementById('bdActual'),
    bdDistractions: document.getElementById('bdDistractions'),
    bdClose: document.getElementById('bdClose'),
    burndownChart: document.getElementById('burndownChart'),
    bdTasks: document.getElementById('bdTasks'),
    dedupBanner: document.getElementById('dedupBanner'),
    dedupMsg: document.getElementById('dedupMsg'),
    dedupMerge: document.getElementById('dedupMerge'),
    dedupIgnore: document.getElementById('dedupIgnore'),
    addForm: document.getElementById('addForm'),
    taskInput: document.getElementById('taskInput'),
    taskPriority: document.getElementById('taskPriority'),
    taskEnergy: document.getElementById('taskEnergy'),
    taskCategory: document.getElementById('taskCategory'),
    taskDue: document.getElementById('taskDue'),
    taskEstimate: document.getElementById('taskEstimate'),
    taskTags: document.getElementById('taskTags'),
    taskGithub: document.getElementById('taskGithub'),
    taskDoD: document.getElementById('taskDoD'),
    frictionFields: document.getElementById('frictionFields'),
    addBurnerBtn: document.getElementById('addBurnerBtn'),
    winForm: document.getElementById('winForm'),
    addWinForm: document.getElementById('addWinForm'),
    winInput: document.getElementById('winInput'),
    winMinutes: document.getElementById('winMinutes'),
    taskList: document.getElementById('taskList'),
    boardView: document.getElementById('boardView'),
    boardPending: document.getElementById('boardPending'),
    boardProgress: document.getElementById('boardProgress'),
    boardDone: document.getElementById('boardDone'),
    dagView: document.getElementById('dagView'),
    dagCanvas: document.getElementById('dagCanvas'),
    winsView: document.getElementById('winsView'),
    winsTimeline: document.getElementById('winsTimeline'),
    generateReport: document.getElementById('generateReport'),
    reportOverlay: document.getElementById('reportOverlay'),
    reportBody: document.getElementById('reportBody'),
    reportClose: document.getElementById('reportClose'),
    emptyState: document.getElementById('emptyState'),
    modalOverlay: document.getElementById('modalOverlay'),
    editModal: document.getElementById('editModal'),
    modalClose: document.getElementById('modalClose'),
    editTitle: document.getElementById('editTitle'),
    editPriority: document.getElementById('editPriority'),
    editEnergy: document.getElementById('editEnergy'),
    editCategory: document.getElementById('editCategory'),
    editDue: document.getElementById('editDue'),
    editEstimate: document.getElementById('editEstimate'),
    editDoD: document.getElementById('editDoD'),
    editTags: document.getElementById('editTags'),
    editGithub: document.getElementById('editGithub'),
    depSelector: document.getElementById('depSelector'),
    editSubtasks: document.getElementById('editSubtasks'),
    subtaskInput: document.getElementById('subtaskInput'),
    subtaskWeight: document.getElementById('subtaskWeight'),
    subtaskAdd: document.getElementById('subtaskAdd'),
    editNotes: document.getElementById('editNotes'),
    modalSave: document.getElementById('modalSave'),
    iftttOverlay: document.getElementById('iftttOverlay'),
    iftttModal: document.getElementById('iftttModal'),
    iftttClose: document.getElementById('iftttClose'),
    iftttRules: document.getElementById('iftttRules'),
    iftttTrigger: document.getElementById('iftttTrigger'),
    iftttTriggerVal: document.getElementById('iftttTriggerVal'),
    iftttAction: document.getElementById('iftttAction'),
    iftttActionVal: document.getElementById('iftttActionVal'),
    iftttAddRule: document.getElementById('iftttAddRule'),
    iftttFab: document.getElementById('iftttFab'),
    swapOverlay: document.getElementById('swapOverlay'),
    swapClose: document.getElementById('swapClose'),
    swapMsg: document.getElementById('swapMsg'),
    swapTasks: document.getElementById('swapTasks'),
    swapTomorrow: document.getElementById('swapTomorrow'),
    undoBar: document.getElementById('undoBar'),
    undoBtn: document.getElementById('undoBtn'),
    toastContainer: document.getElementById('toastContainer'),
    confettiCanvas: document.getElementById('confettiCanvas'),
    // Auth
    authScreen: document.getElementById('authScreen'),
    appContainer: document.getElementById('appContainer'),
    authTabs: document.querySelector('.auth-tabs'),
    loginForm: document.getElementById('loginForm'),
    signupForm: document.getElementById('signupForm'),
    loginEmail: document.getElementById('loginEmail'),
    loginPassword: document.getElementById('loginPassword'),
    loginError: document.getElementById('loginError'),
    forgotPassword: document.getElementById('forgotPassword'),
    signupName: document.getElementById('signupName'),
    signupEmail: document.getElementById('signupEmail'),
    signupPassword: document.getElementById('signupPassword'),
    signupConfirm: document.getElementById('signupConfirm'),
    signupError: document.getElementById('signupError'),
    googleSignIn: document.getElementById('googleSignIn'),
    anonSignIn: document.getElementById('anonSignIn'),
    // User section
    userProfileBtn: document.getElementById('userProfileBtn'),
    userAvatar: document.getElementById('userAvatar'),
    userInitials: document.getElementById('userInitials'),
    userName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail'),
    userDropdown: document.getElementById('userDropdown'),
    editProfileBtn: document.getElementById('editProfileBtn'),
    logoutBtn: document.getElementById('logoutBtn'),
    // Profile modal
    profileOverlay: document.getElementById('profileOverlay'),
    profileClose: document.getElementById('profileClose'),
    profileAvatar: document.getElementById('profileAvatar'),
    profileInitials: document.getElementById('profileInitials'),
    avatarUpload: document.getElementById('avatarUpload'),
    removeAvatar: document.getElementById('removeAvatar'),
    profileName: document.getElementById('profileName'),
    profileEmail: document.getElementById('profileEmail'),
    profileBio: document.getElementById('profileBio'),
    profileJob: document.getElementById('profileJob'),
    profileLocation: document.getElementById('profileLocation'),
    profileWorkGoal: document.getElementById('profileWorkGoal'),
    profileJoined: document.getElementById('profileJoined'),
    profileCompleted: document.getElementById('profileCompleted'),
    profileStreak: document.getElementById('profileStreak'),
    profileWins: document.getElementById('profileWins'),
    newPassword: document.getElementById('newPassword'),
    confirmNewPassword: document.getElementById('confirmNewPassword'),
    changePasswordBtn: document.getElementById('changePasswordBtn'),
    profileError: document.getElementById('profileError'),
    deleteAccountBtn: document.getElementById('deleteAccountBtn'),
    profileSave: document.getElementById('profileSave')
  };

  /* ============ STATE ============ */
  let tasks = [];
  let rules = [];
  let wins = [];
  let currentFilter = 'all';
  let currentCat = 'all';
  let currentView = 'list';
  let currentSort = 'newest';
  let editingId = null;
  let undoStack = [];
  let completionStreak = 0;
  let userId = null;
  let firebaseReady = false;
  let pendingDuplicate = null;
  let pendingTask = null;
  let userProfile = { name: '', bio: '', job: '', location: '', workGoal: 480, avatarUrl: '' };
  let isAnonymous = false;

  // Pomodoro
  let pomoMode = 'pomo';
  const POMO_DURATIONS = { pomo: 25 * 60, short: 5 * 60, long: 15 * 60, burndown: 0 };
  let pomoSeconds = POMO_DURATIONS.pomo;
  let pomoInterval = null;
  let pomoRunning = false;

  // Burn-down
  let burndownActive = false;
  let burndownStartTime = 0;
  let burndownTasks = [];
  let burndownDistractions = 0;
  let burndownHistory = [];

  // Energy
  let energyLevel = 'high';

  // Environment
  let envState = { battery: null, charging: false, online: navigator.onLine, timeOfDay: '' };

  // Deep Work Budget (minutes per day)
  const DEEP_WORK_BUDGET = 480;

  // Hidden tags (IFTTT)
  const hiddenTags = new Set();

  /* ============ HELPERS ============ */
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function today() { return new Date().toISOString().split('T')[0]; }
  function daysBetween(a, b) { return Math.floor((new Date(b) - new Date(a)) / 864e5); }

  function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ============ FIREBASE PERSISTENCE ============ */
  function getCollection(name) {
    return db.collection('users').doc(userId).collection(name);
  }

  async function saveTasksToFirebase() {
    if (!firebaseReady) { saveLocal(); return; }
    try {
      const batch = db.batch();
      const col = getCollection('tasks');
      // Get all existing docs
      const snap = await col.get();
      const existingIds = new Set();
      snap.forEach(d => existingIds.add(d.id));
      // Delete removed tasks
      for (const id of existingIds) {
        if (!tasks.find(t => t.id === id)) {
          batch.delete(col.doc(id));
        }
      }
      // Set all current tasks
      for (const t of tasks) {
        batch.set(col.doc(t.id), t);
      }
      await batch.commit();
    } catch (e) {
      console.warn('Firebase save failed, falling back to localStorage', e);
      saveLocal();
    }
  }

  async function saveRulesToFirebase() {
    if (!firebaseReady) { saveLocal(); return; }
    try {
      await getCollection('meta').doc('rules').set({ data: rules });
    } catch (e) {
      saveLocal();
    }
  }

  async function saveWinsToFirebase() {
    if (!firebaseReady) { saveLocal(); return; }
    try {
      await getCollection('meta').doc('wins').set({ data: wins });
    } catch (e) {
      saveLocal();
    }
  }

  async function loadFromFirebase() {
    try {
      // Load tasks
      const taskSnap = await getCollection('tasks').get();
      tasks = [];
      taskSnap.forEach(doc => tasks.push(doc.data()));

      // Load rules
      const rulesDoc = await getCollection('meta').doc('rules').get();
      if (rulesDoc.exists) rules = rulesDoc.data().data || [];

      // Load wins
      const winsDoc = await getCollection('meta').doc('wins').get();
      if (winsDoc.exists) wins = winsDoc.data().data || [];

      // Load preferences
      const prefsDoc = await getCollection('meta').doc('prefs').get();
      if (prefsDoc.exists) {
        const p = prefsDoc.data();
        currentView = p.view || 'list';
        currentSort = p.sort || 'newest';
        completionStreak = p.streak || 0;
        if (p.theme) document.documentElement.setAttribute('data-theme', p.theme);
      }
    } catch (e) {
      console.warn('Firebase load failed, using localStorage', e);
      loadLocal();
    }
  }

  async function savePrefs() {
    if (!firebaseReady) { saveLocal(); return; }
    try {
      await getCollection('meta').doc('prefs').set({
        view: currentView, sort: currentSort, streak: completionStreak,
        theme: document.documentElement.getAttribute('data-theme')
      });
    } catch (e) { /* silent */ }
  }

  function saveLocal() {
    try {
      localStorage.setItem('sol_tasks', JSON.stringify(tasks));
      localStorage.setItem('sol_rules', JSON.stringify(rules));
      localStorage.setItem('sol_wins', JSON.stringify(wins));
      localStorage.setItem('sol_view', currentView);
      localStorage.setItem('sol_sort', currentSort);
      localStorage.setItem('sol_streak', completionStreak);
      localStorage.setItem('sol_theme', document.documentElement.getAttribute('data-theme'));
    } catch (e) { /* silent */ }
  }

  function loadLocal() {
    try {
      tasks = JSON.parse(localStorage.getItem('sol_tasks')) || [];
      rules = JSON.parse(localStorage.getItem('sol_rules')) || [];
      wins = JSON.parse(localStorage.getItem('sol_wins')) || [];
      currentView = localStorage.getItem('sol_view') || 'list';
      currentSort = localStorage.getItem('sol_sort') || 'newest';
      completionStreak = parseInt(localStorage.getItem('sol_streak')) || 0;
      const t = localStorage.getItem('sol_theme');
      if (t) document.documentElement.setAttribute('data-theme', t);
    } catch (e) { /* silent */ }
  }

  function save() {
    saveTasksToFirebase();
    saveLocal(); // Always keep localStorage as backup
  }

  function saveRules() {
    saveRulesToFirebase();
    saveLocal();
  }

  function saveWins() {
    saveWinsToFirebase();
    saveLocal();
  }

  /* ============ TOAST / CONFETTI ============ */
  function toast(msg, duration = 3000) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    DOM.toastContainer.appendChild(el);
    setTimeout(() => { el.classList.add('leaving'); setTimeout(() => el.remove(), 300); }, duration);
  }

  function confetti() {
    const canvas = DOM.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width, y: -20,
      vx: (Math.random() - 0.5) * 6, vy: Math.random() * 4 + 3,
      size: Math.random() * 6 + 3, color: ['#E8553A', '#10B981', '#F59E0B', '#3B82F6', '#8B5CF6'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 360, spin: (Math.random() - 0.5) * 10
    }));
    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        if (p.y < canvas.height + 20) alive = true;
        p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.rotation += p.spin;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color; ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      frame++;
      if (alive && frame < 180) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
  }

  /* ============ THEME ============ */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    savePrefs();
    saveLocal();
  }

  /* ============ GREETING ============ */
  function updateGreeting() {
    const h = new Date().getHours();
    const g = h < 12 ? 'Good morning ☀️' : h < 17 ? 'Good afternoon 🌤️' : h < 21 ? 'Good evening 🌅' : 'Good night 🌙';
    const name = userProfile.name ? ', ' + userProfile.name.split(' ')[0] : '';
    DOM.greeting.textContent = g + name;
    const opts = { weekday: 'long', month: 'long', day: 'numeric' };
    DOM.pageDate.textContent = new Date().toLocaleDateString('en-US', opts);
  }

  /* ============ FEATURE 1: ENERGY SCORING ============ */
  function computeEnergyLevel() {
    const h = new Date().getHours();
    const day = new Date().getDay();
    let score = 70;
    // Time-of-day curve
    if (h >= 9 && h <= 11) score = 95;
    else if (h >= 14 && h <= 15) score = 55;
    else if (h >= 21 || h <= 5) score = 30;
    else if (h >= 6 && h <= 8) score = 75;
    // Friday fatigue
    if (day === 5 && h >= 14) score -= 15;
    // Task burnout heuristic
    const doneToday = tasks.filter(t => t.done && t.completedAt && t.completedAt.startsWith(today())).length;
    if (doneToday > 6) score -= 20;
    // Battery factor
    if (envState.battery !== null && envState.battery < 20) score -= 10;
    score = Math.max(10, Math.min(100, score));
    if (score >= 70) energyLevel = 'high';
    else if (score >= 40) energyLevel = 'medium';
    else energyLevel = 'low';
    return score;
  }

  function updateEnergyUI() {
    const score = computeEnergyLevel();
    DOM.energyBarFill.style.width = score + '%';
    const colors = { high: 'var(--green)', medium: 'var(--yellow)', low: 'var(--red)' };
    DOM.energyBarFill.style.background = colors[energyLevel];
    DOM.energyLabel.textContent = energyLevel.charAt(0).toUpperCase() + energyLevel.slice(1);
    DOM.energySuggestion.textContent = getSuggestion();
  }

  function getSuggestion() {
    if (energyLevel === 'high') return 'Great time for complex tasks!';
    if (energyLevel === 'medium') return 'Good for moderate work.';
    return 'Stick to simple tasks or take a break.';
  }

  /* ============ FEATURE 2: GHOST / DECAY ============ */
  const GHOST_START_DAYS = 7;
  const GHOST_GRAVEYARD_DAYS = 14;

  function getTaskAge(task) {
    const ref = task.lastTouched || task.created;
    return daysBetween(ref, new Date().toISOString());
  }

  function isGhosted(task) { return !task.done && !task.graveyard && getTaskAge(task) >= GHOST_START_DAYS && getTaskAge(task) < GHOST_GRAVEYARD_DAYS; }
  function isGraveyarded(task) { return !task.done && (task.graveyard || getTaskAge(task) >= GHOST_GRAVEYARD_DAYS); }

  function processGhostDecay() {
    let changed = false;
    tasks.forEach(t => {
      if (!t.done && !t.graveyard && getTaskAge(t) >= GHOST_GRAVEYARD_DAYS) {
        t.graveyard = true; changed = true;
      }
    });
    if (changed) save();
  }

  function touchTask(id) {
    const t = tasks.find(x => x.id === id);
    if (t) { t.lastTouched = new Date().toISOString(); save(); }
  }

  /* ============ FEATURE 3: GITHUB DEEP LINKS ============ */
  function parseGithubRef(str) {
    if (!str) return null;
    // Full URL
    const urlMatch = str.match(/github\.com\/([^/]+)\/([^/]+)\/(issues|pull)\/(\d+)/);
    if (urlMatch) return { owner: urlMatch[1], repo: urlMatch[2], type: urlMatch[3], num: urlMatch[4], url: str };
    // owner/repo#123
    const repoMatch = str.match(/^([a-zA-Z0-9_.-]+)\/([a-zA-Z0-9_.-]+)#(\d+)$/);
    if (repoMatch) return { owner: repoMatch[1], repo: repoMatch[2], type: 'issues', num: repoMatch[3], url: `https://github.com/${repoMatch[1]}/${repoMatch[2]}/issues/${repoMatch[3]}` };
    // #123
    const simpleMatch = str.match(/^#(\d+)$/);
    if (simpleMatch) return { num: simpleMatch[1], type: 'issues', url: null };
    return null;
  }

  function renderGithubBadge(github) {
    const ref = parseGithubRef(github);
    if (!ref) return '';
    if (ref.url) return `<a href="${sanitize(ref.url)}" target="_blank" rel="noopener noreferrer" class="task-badge badge-github">${ref.owner ? ref.owner + '/' + ref.repo : ''}#${ref.num}</a>`;
    return `<span class="task-badge badge-github">#${ref.num}</span>`;
  }

  /* ============ FEATURE 4: BURN-DOWN MODE ============ */
  function startBurndown() {
    const todayTasks = filteredTasks().filter(t => !t.done && t.estimate);
    if (todayTasks.length === 0) { toast('No tasks with time estimates!'); return; }
    burndownActive = true;
    burndownStartTime = Date.now();
    burndownTasks = todayTasks.map(t => t.id);
    burndownDistractions = 0;
    burndownHistory = [{ time: 0, remaining: totalEstimate() }];
    DOM.burndownPanel.style.display = '';
    renderBurndownTasks();
    drawBurndownChart();
    toast('🔥 Burn-Down mode started!');
  }

  function totalEstimate() {
    return burndownTasks.reduce((sum, id) => {
      const t = tasks.find(x => x.id === id);
      return sum + (t && !t.done ? (t.estimate || 0) : 0);
    }, 0);
  }

  function handleVisibilityChange() {
    if (burndownActive && document.hidden) {
      burndownDistractions++;
      DOM.bdDistractions.textContent = burndownDistractions;
      burndownHistory.push({ time: (Date.now() - burndownStartTime) / 60000, remaining: totalEstimate(), distraction: true });
      drawBurndownChart();
    }
  }
  document.addEventListener('visibilitychange', handleVisibilityChange);

  function completeBurndownTask(id) {
    const elapsed = (Date.now() - burndownStartTime) / 60000;
    burndownHistory.push({ time: elapsed, remaining: totalEstimate() });
    renderBurndownTasks();
    drawBurndownChart();
    DOM.bdActual.textContent = Math.round(elapsed) + 'm';
    if (totalEstimate() === 0) endBurndown();
  }

  function endBurndown() {
    burndownActive = false;
    toast('✅ Burn-Down complete! Great focus!');
    confetti();
  }

  function renderBurndownTasks() {
    DOM.bdTasks.innerHTML = burndownTasks.map(id => {
      const t = tasks.find(x => x.id === id);
      if (!t) return '';
      return `<div style="display:flex;gap:8px;align-items:center;padding:6px 10px;background:var(--surface-hover);border-radius:8px;opacity:${t.done ? '.5' : '1'}">
        <span style="font-size:.85rem;${t.done ? 'text-decoration:line-through' : ''}">${sanitize(t.title)}</span>
        <span style="margin-left:auto;font-size:.75rem;color:var(--text-muted);font-family:'JetBrains Mono',monospace">${t.estimate || 0}m</span>
      </div>`;
    }).join('');
    const est = burndownTasks.reduce((s, id) => { const t = tasks.find(x => x.id === id); return s + (t ? (t.estimate || 0) : 0); }, 0);
    DOM.bdEst.textContent = est + 'm';
  }

  function drawBurndownChart() {
    const canvas = DOM.burndownChart;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = 200 * dpr;
    ctx.scale(dpr, dpr);
    const W = canvas.offsetWidth, H = 200;
    ctx.clearRect(0, 0, W, H);
    if (burndownHistory.length < 1) return;
    const maxT = Math.max(burndownHistory[burndownHistory.length - 1].time, 1);
    const maxR = burndownHistory[0].remaining || 1;
    const pad = { l: 40, r: 10, t: 10, b: 30 };
    const gW = W - pad.l - pad.r, gH = H - pad.t - pad.b;
    // Grid
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border').trim();
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 4; i++) { const y = pad.t + gH * i / 4; ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + gW, y); ctx.stroke(); }
    // Ideal line
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim();
    ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l + gW, pad.t + gH); ctx.stroke();
    ctx.setLineDash([]);
    // Actual line
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    ctx.lineWidth = 2;
    ctx.beginPath();
    burndownHistory.forEach((p, i) => {
      const x = pad.l + (p.time / maxT) * gW;
      const y = pad.t + (1 - p.remaining / maxR) * gH;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
    // Dots + distraction markers
    burndownHistory.forEach(p => {
      const x = pad.l + (p.time / maxT) * gW;
      const y = pad.t + (1 - p.remaining / maxR) * gH;
      ctx.fillStyle = p.distraction ? getComputedStyle(document.documentElement).getPropertyValue('--red').trim() : getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      ctx.beginPath(); ctx.arc(x, y, p.distraction ? 5 : 3, 0, Math.PI * 2); ctx.fill();
    });
  }

  /* ============ FEATURE 5: DAG DEPENDENCIES ============ */
  function isBlocked(task) {
    if (!task.blockedBy || task.blockedBy.length === 0) return false;
    return task.blockedBy.some(bId => {
      const blocker = tasks.find(x => x.id === bId);
      return blocker && !blocker.done;
    });
  }

  function getBlockers(task) {
    if (!task.blockedBy) return [];
    return task.blockedBy.map(id => tasks.find(x => x.id === id)).filter(Boolean);
  }

  function wouldCreateCycle(fromId, toId) {
    const visited = new Set();
    const queue = [toId];
    while (queue.length) {
      const cur = queue.shift();
      if (cur === fromId) return true;
      if (visited.has(cur)) continue;
      visited.add(cur);
      const t = tasks.find(x => x.id === cur);
      if (t && t.blockedBy) t.blockedBy.forEach(b => queue.push(b));
    }
    return false;
  }

  function topologicalLevels() {
    const levels = {};
    const inDeg = {};
    const adj = {};
    tasks.forEach(t => { inDeg[t.id] = 0; adj[t.id] = []; });
    tasks.forEach(t => {
      if (t.blockedBy) t.blockedBy.forEach(b => {
        if (adj[b]) { adj[b].push(t.id); inDeg[t.id]++; }
      });
    });
    let queue = tasks.filter(t => inDeg[t.id] === 0).map(t => t.id);
    let level = 0;
    while (queue.length) {
      queue.forEach(id => levels[id] = level);
      const next = [];
      queue.forEach(id => {
        adj[id].forEach(n => { inDeg[n]--; if (inDeg[n] === 0) next.push(n); });
      });
      queue = next; level++;
    }
    // Orphans
    tasks.forEach(t => { if (!(t.id in levels)) levels[t.id] = level; });
    return levels;
  }

  function renderDAG() {
    const canvas = DOM.dagCanvas;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = 500 * dpr;
    ctx.scale(dpr, dpr);
    const W = canvas.offsetWidth, H = 500;
    ctx.clearRect(0, 0, W, H);
    const levels = topologicalLevels();
    const maxLvl = Math.max(...Object.values(levels), 0);
    const grouped = {};
    tasks.forEach(t => {
      const l = levels[t.id] || 0;
      if (!grouped[l]) grouped[l] = [];
      grouped[l].push(t);
    });
    const positions = {};
    for (let l = 0; l <= maxLvl; l++) {
      const grp = grouped[l] || [];
      const colW = W / (maxLvl + 1);
      const x = colW * l + colW / 2;
      grp.forEach((t, i) => {
        const rowH = H / (grp.length + 1);
        positions[t.id] = { x, y: rowH * (i + 1) };
      });
    }
    // Edges
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    const muted = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim();
    tasks.forEach(t => {
      if (t.blockedBy) t.blockedBy.forEach(bId => {
        const from = positions[bId];
        const to = positions[t.id];
        if (from && to) {
          ctx.strokeStyle = muted;
          ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.lineTo(to.x, to.y); ctx.stroke();
          // Arrow
          const angle = Math.atan2(to.y - from.y, to.x - from.x);
          const aLen = 8;
          ctx.fillStyle = muted;
          ctx.beginPath();
          ctx.moveTo(to.x - 15 * Math.cos(angle), to.y - 15 * Math.sin(angle));
          ctx.lineTo(to.x - 15 * Math.cos(angle) - aLen * Math.cos(angle - 0.4), to.y - 15 * Math.sin(angle) - aLen * Math.sin(angle - 0.4));
          ctx.lineTo(to.x - 15 * Math.cos(angle) - aLen * Math.cos(angle + 0.4), to.y - 15 * Math.sin(angle) - aLen * Math.sin(angle + 0.4));
          ctx.fill();
        }
      });
    });
    // Nodes
    tasks.forEach(t => {
      const pos = positions[t.id];
      if (!pos) return;
      const r = 14;
      ctx.beginPath(); ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.fillStyle = t.done ? getComputedStyle(document.documentElement).getPropertyValue('--green').trim()
        : isBlocked(t) ? getComputedStyle(document.documentElement).getPropertyValue('--red').trim()
        : accent;
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '500 10px Inter';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const label = t.title.length > 8 ? t.title.slice(0, 8) + '…' : t.title;
      ctx.fillText(label, pos.x, pos.y);
    });
  }

  /* ============ FEATURE 6: IFTTT AUTOMATIONS ============ */
  function initIFTTT() {
    updateAutoUI();
    renderRules();
    setInterval(executeRules, 30000);
  }

  function addRule() {
    const trigger = DOM.iftttTrigger.value;
    const triggerVal = DOM.iftttTriggerVal.value.trim();
    const action = DOM.iftttAction.value;
    const actionVal = DOM.iftttActionVal.value.trim();
    rules.push({ id: uid(), trigger, triggerVal, action, actionVal, enabled: true });
    saveRules();
    renderRules();
    updateAutoUI();
    DOM.iftttTriggerVal.value = '';
    DOM.iftttActionVal.value = '';
    toast('Automation rule added!');
  }

  function deleteRule(id) {
    rules = rules.filter(r => r.id !== id);
    saveRules(); renderRules(); updateAutoUI();
  }

  function toggleRule(id) {
    const r = rules.find(x => x.id === id);
    if (r) r.enabled = !r.enabled;
    saveRules(); renderRules(); updateAutoUI();
  }

  function updateAutoUI() {
    const active = rules.filter(r => r.enabled).length;
    DOM.autoCount.textContent = active;
    DOM.autoStatus.textContent = active ? `${active} rule${active > 1 ? 's' : ''} active` : 'No rules active';
  }

  function renderRules() {
    DOM.iftttRules.innerHTML = rules.map(r => `
      <div class="ifttt-rule">
        <span class="rule-text"><strong>IF</strong> ${sanitize(describeTrigger(r))} <strong>THEN</strong> ${sanitize(describeAction(r))}</span>
        <button class="rule-toggle ${r.enabled ? 'on' : 'off'}" data-rid="${r.id}"></button>
        <button class="rule-delete" data-rid="${r.id}">✕</button>
      </div>
    `).join('');
    DOM.iftttRules.querySelectorAll('.rule-toggle').forEach(b => b.addEventListener('click', () => toggleRule(b.dataset.rid)));
    DOM.iftttRules.querySelectorAll('.rule-delete').forEach(b => b.addEventListener('click', () => deleteRule(b.dataset.rid)));
  }

  function describeTrigger(r) {
    const map = {
      time_past: `Time past ${r.triggerVal}`, tasks_completed_streak: `${r.triggerVal} tasks in a row`,
      task_overdue: 'Task becomes overdue', tag_match: `Tag = "${r.triggerVal}"`,
      energy_low: 'Energy is Low', idle_days: `Idle for ${r.triggerVal} days`,
      battery_low: 'Battery below 20%', offline: 'Device goes offline'
    };
    return map[r.trigger] || r.trigger;
  }

  function describeAction(r) {
    const map = {
      notify: `Notify "${r.actionVal || 'Hey!'}"`, start_break: 'Start break timer',
      hide_tag: `Hide "${r.actionVal}" tasks`, move_graveyard: 'Move to Graveyard',
      highlight: 'Highlight task', auto_snooze: 'Snooze 1 day',
      show_low_energy: 'Show Low Energy tasks only'
    };
    return map[r.action] || r.action;
  }

  function executeRules() {
    const now = new Date();
    const hhmm = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    let dirty = false;
    rules.forEach(r => {
      if (!r.enabled) return;
      let triggered = false;
      switch (r.trigger) {
        case 'time_past': triggered = r.triggerVal && hhmm >= r.triggerVal; break;
        case 'tasks_completed_streak': triggered = completionStreak >= parseInt(r.triggerVal || 0); break;
        case 'task_overdue': triggered = tasks.some(t => !t.done && t.due && t.due < today()); break;
        case 'tag_match': triggered = true; break;
        case 'energy_low': triggered = energyLevel === 'low'; break;
        case 'idle_days': triggered = tasks.some(t => !t.done && !t.graveyard && getTaskAge(t) >= parseInt(r.triggerVal || 7)); break;
        case 'battery_low': triggered = envState.battery !== null && envState.battery < 20; break;
        case 'offline': triggered = !envState.online; break;
      }
      if (!triggered) return;
      switch (r.action) {
        case 'notify':
          if (Notification.permission === 'granted') new Notification(r.actionVal || 'Solaris Reminder');
          else toast(r.actionVal || 'Solaris Reminder');
          break;
        case 'start_break':
          pomoMode = 'short'; pomoSeconds = POMO_DURATIONS.short;
          updatePomoDisplay(); toast('Break time!');
          break;
        case 'hide_tag':
          if (r.actionVal) hiddenTags.add(r.actionVal.toLowerCase());
          break;
        case 'move_graveyard':
          tasks.filter(t => !t.done && !t.graveyard && getTaskAge(t) >= parseInt(r.triggerVal || 14))
            .forEach(t => { t.graveyard = true; dirty = true; });
          break;
        case 'highlight': break; // visual only
        case 'auto_snooze':
          tasks.filter(t => !t.done && t.due && t.due < today())
            .forEach(t => { const d = new Date(t.due); d.setDate(d.getDate() + 1); t.due = d.toISOString().split('T')[0]; dirty = true; });
          break;
        case 'show_low_energy':
          // Handled in filter
          break;
      }
    });
    if (dirty) save();
    render();
  }

  /* ============ FEATURE 7: ANTI-TO-DO LOG ============ */
  function addWin(text, minutes) {
    wins.push({
      id: uid(),
      text: sanitize(text),
      minutes: minutes || 0,
      timestamp: new Date().toISOString(),
      date: today()
    });
    saveWins();
    toast('✨ Win logged!');
  }

  function renderWins() {
    if (wins.length === 0) {
      DOM.winsTimeline.innerHTML = '<div class="wins-empty">No wins logged yet. Celebrate your unplanned accomplishments!</div>';
      return;
    }
    const sorted = [...wins].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    DOM.winsTimeline.innerHTML = sorted.map(w => {
      const date = new Date(w.timestamp);
      const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      const day = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      return `<div class="win-item">
        <span class="win-emoji">✨</span>
        <span class="win-text">${w.text}</span>
        ${w.minutes ? `<span class="win-mins">${w.minutes}m</span>` : ''}
        <span class="win-time">${day} ${time}</span>
      </div>`;
    }).join('');
  }

  function generateWeeklyReport() {
    const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
    const weekWins = wins.filter(w => new Date(w.timestamp) >= weekAgo);
    const weekCompleted = tasks.filter(t => t.done && t.completedAt && new Date(t.completedAt) >= weekAgo);
    const totalWinMins = weekWins.reduce((s, w) => s + (w.minutes || 0), 0);
    const totalTaskMins = weekCompleted.reduce((s, t) => s + (t.estimate || 0), 0);

    DOM.reportBody.innerHTML = `
      <div class="report-section">
        <h4>📋 Tasks Completed</h4>
        <div class="report-stat"><span>Tasks completed</span><span class="report-stat-value">${weekCompleted.length}</span></div>
        <div class="report-stat"><span>Estimated time spent</span><span class="report-stat-value">${totalTaskMins}m</span></div>
      </div>
      <div class="report-section">
        <h4>✨ Unplanned Wins</h4>
        <div class="report-stat"><span>Wins logged</span><span class="report-stat-value">${weekWins.length}</span></div>
        <div class="report-stat"><span>Time on unplanned work</span><span class="report-stat-value">${totalWinMins}m</span></div>
        ${weekWins.length ? `<ul class="report-list">${weekWins.map(w => `<li>${w.text}${w.minutes ? ` (${w.minutes}m)` : ''}</li>`).join('')}</ul>` : ''}
      </div>
      <div class="report-section">
        <h4>📊 Insights</h4>
        <div class="report-stat"><span>Planned vs Unplanned ratio</span><span class="report-stat-value">${totalTaskMins}m : ${totalWinMins}m</span></div>
        <div class="report-stat"><span>Active tasks remaining</span><span class="report-stat-value">${tasks.filter(t => !t.done && !t.graveyard).length}</span></div>
        <div class="report-stat"><span>Completion streak</span><span class="report-stat-value">${completionStreak}</span></div>
      </div>
    `;
    DOM.reportOverlay.classList.add('open');
  }

  /* ============ FEATURE 8: FRICTION-BASED COMMITMENT ============ */
  function getDeepWorkUsed() {
    return tasks
      .filter(t => t.due === today() && !t.burner && (t.priority === 'high' || t.estimate))
      .reduce((s, t) => s + (t.estimate || 0), 0);
  }

  function updateDeepWorkBar() {
    const used = getDeepWorkUsed();
    const pct = Math.min(100, (used / DEEP_WORK_BUDGET) * 100);
    DOM.dwFill.style.width = pct + '%';
    DOM.dwFill.className = 'dw-fill' + (pct >= 90 ? ' danger' : pct >= 70 ? ' warn' : '');
    DOM.dwLabel.textContent = `${used} / ${DEEP_WORK_BUDGET} min used`;
  }

  function checkFrictionCommitment(task) {
    // High priority requires Definition of Done
    if (task.priority === 'high' && !task.dod) {
      toast('⚠️ High-priority tasks require a Definition of Done!');
      return false;
    }
    // Check deep work budget
    if (task.estimate && task.due === today()) {
      const used = getDeepWorkUsed();
      if (used + task.estimate > DEEP_WORK_BUDGET) {
        showSwapDialog(task);
        return false;
      }
    }
    return true;
  }

  function showSwapDialog(task) {
    pendingTask = task;
    const todayTasks = tasks.filter(t => t.due === today() && !t.done && !t.burner && t.estimate);
    DOM.swapTasks.innerHTML = todayTasks.map(t => `
      <div class="swap-item" data-swap-id="${t.id}">
        <span class="swap-title">${sanitize(t.title)}</span>
        <span class="swap-est">${t.estimate}m</span>
      </div>
    `).join('');
    DOM.swapTasks.querySelectorAll('.swap-item').forEach(el => {
      el.addEventListener('click', () => {
        const swapId = el.dataset.swapId;
        const swapTask = tasks.find(t => t.id === swapId);
        if (swapTask) {
          const tmrw = new Date(); tmrw.setDate(tmrw.getDate() + 1);
          swapTask.due = tmrw.toISOString().split('T')[0];
        }
        finalizePendingTask();
        DOM.swapOverlay.classList.remove('open');
      });
    });
    DOM.swapOverlay.classList.add('open');
  }

  function finalizePendingTask() {
    if (!pendingTask) return;
    tasks.push(pendingTask);
    save();
    render();
    toast('Task added!');
    pendingTask = null;
  }

  /* ============ FEATURE 9: SEMANTIC DE-DUPLICATION ============ */
  function tokenize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 1);
  }

  function buildTFIDF(docs) {
    const df = {};
    const tfs = docs.map(doc => {
      const tokens = tokenize(doc);
      const tf = {};
      tokens.forEach(t => { tf[t] = (tf[t] || 0) + 1; });
      Object.keys(tf).forEach(t => { df[t] = (df[t] || 0) + 1; });
      return { tf, len: tokens.length };
    });
    const N = docs.length;
    return tfs.map(({ tf, len }) => {
      const vec = {};
      Object.entries(tf).forEach(([t, c]) => {
        vec[t] = (c / Math.max(len, 1)) * Math.log((N + 1) / (df[t] + 1));
      });
      return vec;
    });
  }

  function cosineSim(a, b) {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    let dot = 0, magA = 0, magB = 0;
    keys.forEach(k => {
      const va = a[k] || 0, vb = b[k] || 0;
      dot += va * vb; magA += va * va; magB += vb * vb;
    });
    return magA && magB ? dot / (Math.sqrt(magA) * Math.sqrt(magB)) : 0;
  }

  function findDuplicates(newTitle) {
    const activeTasks = tasks.filter(t => !t.done && !t.graveyard);
    if (activeTasks.length === 0) return null;
    const docs = [...activeTasks.map(t => t.title), newTitle];
    const vectors = buildTFIDF(docs);
    const newVec = vectors[vectors.length - 1];
    let bestSim = 0, bestTask = null;
    activeTasks.forEach((t, i) => {
      const sim = cosineSim(vectors[i], newVec);
      if (sim > bestSim) { bestSim = sim; bestTask = t; }
    });
    if (bestSim >= 0.6 && bestTask) return { task: bestTask, similarity: bestSim };
    return null;
  }

  function showDedupBanner(existingTask, newTitle) {
    pendingDuplicate = { existingTask, newTitle };
    DOM.dedupMsg.textContent = `🔍 Similar task found: "${existingTask.title}" (${Math.round(pendingDuplicate.similarity || 0.6) * 100}% match). Merge?`;
    DOM.dedupBanner.style.display = '';
  }

  function hideDedupBanner() {
    DOM.dedupBanner.style.display = 'none';
    pendingDuplicate = null;
  }

  /* ============ FEATURE 10: BURNER / SELF-DESTRUCTING TASKS ============ */
  const BURNER_LIFETIME_MS = 4 * 60 * 60 * 1000; // 4 hours

  function cleanupBurnerTasks() {
    const now = Date.now();
    const before = tasks.length;
    tasks = tasks.filter(t => {
      if (!t.burner || t.done) return true;
      return now < t.burnerExpiry;
    });
    if (tasks.length < before) {
      save();
      toast('🔥 Expired burner tasks removed');
    }
  }

  function getBurnerTimeLeft(task) {
    if (!task.burner || !task.burnerExpiry) return '';
    const ms = task.burnerExpiry - Date.now();
    if (ms <= 0) return 'Expired';
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    return `${h}h ${m}m left`;
  }

  function promoteBurner(id) {
    const t = tasks.find(x => x.id === id);
    if (t) {
      t.burner = false;
      delete t.burnerExpiry;
      save();
      render();
      toast('Task promoted to permanent!');
    }
  }

  /* ============ FEATURE 11: ENVIRONMENT TRIGGERS ============ */
  function initEnvironment() {
    // Battery
    if (navigator.getBattery) {
      navigator.getBattery().then(battery => {
        updateBattery(battery);
        battery.addEventListener('levelchange', () => updateBattery(battery));
        battery.addEventListener('chargingchange', () => updateBattery(battery));
      });
    }
    // Online/Offline
    window.addEventListener('online', () => { envState.online = true; updateEnvUI(); });
    window.addEventListener('offline', () => { envState.online = false; updateEnvUI(); });
    // Time of day
    updateTimeOfDay();
    setInterval(updateTimeOfDay, 60000);
    updateEnvUI();
  }

  function updateBattery(battery) {
    envState.battery = Math.round(battery.level * 100);
    envState.charging = battery.charging;
    updateEnvUI();
  }

  function updateTimeOfDay() {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) envState.timeOfDay = 'morning';
    else if (h >= 12 && h < 17) envState.timeOfDay = 'afternoon';
    else if (h >= 17 && h < 21) envState.timeOfDay = 'evening';
    else envState.timeOfDay = 'night';
  }

  function updateEnvUI() {
    let html = '';
    // Battery
    if (envState.battery !== null) {
      const cls = envState.battery < 20 ? 'danger' : envState.battery < 50 ? 'warn' : 'ok';
      html += `<span class="env-chip ${cls}">🔋 ${envState.battery}%${envState.charging ? ' ⚡' : ''}</span>`;
    }
    // Network
    html += `<span class="env-chip ${envState.online ? 'ok' : 'danger'}">${envState.online ? '🌐 Online' : '📵 Offline'}</span>`;
    // Time
    const timeIcons = { morning: '🌅', afternoon: '☀️', evening: '🌇', night: '🌙' };
    html += `<span class="env-chip ok">${timeIcons[envState.timeOfDay] || '🕐'} ${envState.timeOfDay}</span>`;
    DOM.envChips.innerHTML = html;
  }

  /* ============ FEATURE 12: RECURSIVE SUB-TASK ROLL-UP ============ */
  function computeWeightedProgress(subtasks) {
    if (!subtasks || subtasks.length === 0) return { pct: 0, total: 0, done: 0 };
    const totalWeight = subtasks.reduce((s, st) => s + (st.weight || 1), 0);
    const doneWeight = subtasks.filter(st => st.done).reduce((s, st) => s + (st.weight || 1), 0);
    return {
      pct: totalWeight ? Math.round((doneWeight / totalWeight) * 100) : 0,
      total: totalWeight,
      done: doneWeight
    };
  }

  /* ============ TASK CRUD ============ */
  function createTask(title, opts = {}) {
    return {
      id: uid(),
      title,
      priority: opts.priority || 'medium',
      energy: parseInt(opts.energy) || 2,
      category: opts.category || 'work',
      due: opts.due || '',
      estimate: parseInt(opts.estimate) || 0,
      tags: opts.tags || [],
      github: opts.github || '',
      dod: opts.dod || '',
      done: false,
      created: new Date().toISOString(),
      lastTouched: new Date().toISOString(),
      completedAt: null,
      subtasks: [],
      notes: '',
      blockedBy: [],
      graveyard: false,
      burner: opts.burner || false,
      burnerExpiry: opts.burner ? Date.now() + BURNER_LIFETIME_MS : null
    };
  }

  function addTask(asBurner = false) {
    const title = DOM.taskInput.value.trim();
    if (!title) return;

    const tags = DOM.taskTags.value.split(',').map(s => s.trim()).filter(Boolean);
    const priority = asBurner ? 'low' : DOM.taskPriority.value;
    const task = createTask(title, {
      priority,
      energy: DOM.taskEnergy.value,
      category: DOM.taskCategory.value,
      due: DOM.taskDue.value,
      estimate: DOM.taskEstimate.value,
      tags,
      github: DOM.taskGithub.value.trim(),
      dod: DOM.taskDoD.value.trim(),
      burner: asBurner
    });

    // Feature 9: De-duplication check
    const dup = findDuplicates(title);
    if (dup) {
      pendingDuplicate = { ...dup, newTask: task };
      DOM.dedupMsg.textContent = `🔍 Similar to: "${dup.task.title}" (${Math.round(dup.similarity * 100)}% match)`;
      DOM.dedupBanner.style.display = '';
      return; // Wait for user action
    }

    // Feature 8: Friction check (skip for burners)
    if (!asBurner && !checkFrictionCommitment(task)) return;

    tasks.push(task);
    save();
    resetForm();
    render();
    toast(asBurner ? '🔥 Burner task added (4h self-destruct)' : 'Task added!');
  }

  function resetForm() {
    DOM.taskInput.value = '';
    DOM.taskPriority.value = 'medium';
    DOM.taskEnergy.value = '2';
    DOM.taskDue.value = '';
    DOM.taskEstimate.value = '';
    DOM.taskTags.value = '';
    DOM.taskGithub.value = '';
    DOM.taskDoD.value = '';
    DOM.frictionFields.style.display = 'none';
  }

  function toggleDone(id) {
    const t = tasks.find(x => x.id === id);
    if (!t) return;
    if (!t.done && isBlocked(t)) { toast('🔒 This task is blocked!'); return; }
    t.done = !t.done;
    t.completedAt = t.done ? new Date().toISOString() : null;
    t.lastTouched = new Date().toISOString();
    if (t.done) {
      completionStreak++;
      if (burndownActive && burndownTasks.includes(t.id)) completeBurndownTask(t.id);
      if (completionStreak % 5 === 0) confetti();
    } else {
      completionStreak = Math.max(0, completionStreak - 1);
    }
    save();
    savePrefs();
    render();
  }

  function deleteTask(id) {
    const idx = tasks.findIndex(x => x.id === id);
    if (idx === -1) return;
    const removed = tasks.splice(idx, 1)[0];
    undoStack.push(removed);
    // Clean up deps
    tasks.forEach(t => { if (t.blockedBy) t.blockedBy = t.blockedBy.filter(b => b !== id); });
    save();
    render();
    showUndo();
  }

  function showUndo() {
    DOM.undoBar.classList.add('show');
    setTimeout(() => { DOM.undoBar.classList.remove('show'); }, 5000);
  }

  function undoDelete() {
    const t = undoStack.pop();
    if (t) { tasks.push(t); save(); render(); }
    DOM.undoBar.classList.remove('show');
  }

  /* ============ FILTERING / SORTING ============ */
  function filteredTasks() {
    let list = [...tasks];

    // Remove burner from non-scratchpad views
    if (currentFilter !== 'scratchpad') {
      list = list.filter(t => !t.burner);
    }

    // Hidden tags (IFTTT)
    if (hiddenTags.size) {
      list = list.filter(t => !t.tags.some(tag => hiddenTags.has(tag.toLowerCase())));
    }

    // Show low energy only rule
    const lowEnergyRule = rules.find(r => r.enabled && r.action === 'show_low_energy');
    if (lowEnergyRule && energyLevel === 'low') {
      list = list.filter(t => t.energy <= 1 || t.done);
    }

    // Nav filter
    switch (currentFilter) {
      case 'today': list = list.filter(t => t.due === today()); break;
      case 'upcoming': list = list.filter(t => t.due && t.due > today() && !t.done); break;
      case 'important': list = list.filter(t => t.priority === 'high'); break;
      case 'completed': list = list.filter(t => t.done); break;
      case 'overdue': list = list.filter(t => !t.done && t.due && t.due < today()); break;
      case 'ghosted': list = list.filter(t => isGhosted(t) || isGraveyarded(t)); break;
      case 'blocked': list = list.filter(t => !t.done && isBlocked(t)); break;
      case 'scratchpad': list = list.filter(t => t.burner && !t.done); break;
      case 'wins': break; // Handled separately
    }

    // Category filter
    if (currentCat !== 'all') list = list.filter(t => t.category === currentCat);

    // Search
    const q = DOM.searchInput.value.toLowerCase().trim();
    if (q) list = list.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q)) ||
      t.category.includes(q)
    );

    // Sort
    list.sort((a, b) => {
      switch (currentSort) {
        case 'newest': return new Date(b.created) - new Date(a.created);
        case 'oldest': return new Date(a.created) - new Date(b.created);
        case 'priority': { const m = { high: 0, medium: 1, low: 2 }; return m[a.priority] - m[b.priority]; }
        case 'due': return (a.due || '9999') < (b.due || '9999') ? -1 : 1;
        case 'energy': return a.energy - b.energy;
        case 'alpha': return a.title.localeCompare(b.title);
        default: return 0;
      }
    });

    return list;
  }

  /* ============ RENDER ============ */
  function render() {
    processGhostDecay();
    cleanupBurnerTasks();
    updateEnergyUI();
    updateDeepWorkBar();
    updateEnvUI();

    const titles = { all: 'All Tasks', today: 'Today', upcoming: 'Upcoming', important: 'Important',
      completed: 'Completed', overdue: 'Overdue', ghosted: 'Graveyard', blocked: 'Blocked',
      scratchpad: 'Scratchpad 🔥', wins: 'Anti-To-Do ✨' };
    DOM.pageTitle.textContent = titles[currentFilter] || 'All Tasks';

    // Show/hide appropriate views
    const isWins = currentFilter === 'wins';
    DOM.addForm.style.display = isWins ? 'none' : '';
    DOM.winForm.style.display = isWins ? '' : 'none';
    DOM.winsView.style.display = isWins ? '' : 'none';

    if (isWins) {
      DOM.taskList.style.display = 'none';
      DOM.boardView.style.display = 'none';
      DOM.dagView.style.display = 'none';
      renderWins();
      updateStats();
      updateProgress();
      return;
    }

    const list = filteredTasks();

    // Views
    DOM.taskList.style.display = currentView === 'list' ? '' : 'none';
    DOM.boardView.style.display = currentView === 'board' ? '' : 'none';
    DOM.dagView.style.display = currentView === 'dag' ? '' : 'none';
    DOM.emptyState.style.display = list.length === 0 && currentView === 'list' ? '' : 'none';

    if (currentView === 'list') renderList(list);
    else if (currentView === 'board') renderBoard(list);
    else if (currentView === 'dag') renderDAG();

    updateStats();
    updateProgress();
  }

  function renderTaskHTML(t) {
    let classes = 'task-item';
    if (t.done) classes += ' done';
    if (isGhosted(t)) classes += ' ghost';
    if (isGraveyarded(t)) classes += ' graveyard';
    if (!t.done && isBlocked(t)) classes += ' blocked';
    if (t.burner) classes += ' burner';

    let meta = '';
    // Priority
    meta += `<span class="task-badge badge-${t.priority}">${t.priority}</span>`;
    // Energy
    meta += `<span class="task-badge badge-energy">${'⚡'.repeat(t.energy)}</span>`;
    // Category
    meta += `<span class="task-badge badge-cat">${t.category}</span>`;
    // Due
    if (t.due) {
      const overdue = !t.done && t.due < today();
      meta += `<span class="task-badge ${overdue ? 'badge-overdue' : 'badge-due'}">${overdue ? '⚠ ' : ''}${t.due}</span>`;
    }
    // Tags
    t.tags.forEach(tag => { meta += `<span class="task-badge badge-tag">#${sanitize(tag)}</span>`; });
    // GitHub
    if (t.github) meta += renderGithubBadge(t.github);
    // DoD
    if (t.dod) meta += `<span class="task-badge badge-dod" title="${sanitize(t.dod)}">✅ DoD</span>`;
    // Dependencies
    if (t.blockedBy && t.blockedBy.length) {
      const blockerNames = getBlockers(t).map(b => b.title).join(', ');
      meta += `<span class="task-badge badge-dep" title="Blocked by: ${sanitize(blockerNames)}">🔗 ${t.blockedBy.length} dep${t.blockedBy.length > 1 ? 's' : ''}</span>`;
    }
    // Ghost decay age
    if (isGhosted(t)) {
      const age = getTaskAge(t);
      meta += `<span class="task-badge badge-decay">👻 ${age}d idle</span>`;
    }
    if (isGraveyarded(t)) meta += `<span class="task-badge badge-ghost">💀 Graveyarded</span>`;
    // Burner countdown
    if (t.burner && !t.done) meta += `<span class="task-badge badge-burner">🔥 ${getBurnerTimeLeft(t)}</span>`;
    // Weighted roll-up
    if (t.subtasks && t.subtasks.length) {
      const rollup = computeWeightedProgress(t.subtasks);
      meta += `<span class="task-badge badge-rollup">${rollup.pct}% (${rollup.done}/${rollup.total}w)</span>`;
    }

    // Subtask progress bar
    let subtaskBar = '';
    if (t.subtasks && t.subtasks.length) {
      const rollup = computeWeightedProgress(t.subtasks);
      const cls = rollup.pct >= 70 ? 'rollup-high' : rollup.pct >= 30 ? 'rollup-mid' : 'rollup-low';
      subtaskBar = `<div class="task-subtask-bar ${cls}"><div class="task-subtask-fill" style="width:${rollup.pct}%"></div></div>`;
    }

    // Actions
    let actions = `<button class="task-act-btn edit-btn" data-id="${t.id}" title="Edit">✏️</button>`;
    actions += `<button class="task-act-btn delete-btn" data-id="${t.id}" title="Delete">🗑️</button>`;
    if (t.burner) actions += `<button class="task-act-btn promote promote-btn" data-id="${t.id}" title="Promote to permanent">📌</button>`;

    return `<div class="${classes}" data-id="${t.id}" draggable="true">
      <div class="task-check" data-id="${t.id}"></div>
      <div class="task-body">
        <div class="task-title">${sanitize(t.title)}</div>
        <div class="task-meta">${meta}</div>
        ${subtaskBar}
      </div>
      <div class="task-actions">${actions}</div>
    </div>`;
  }

  function renderList(list) {
    DOM.taskList.innerHTML = list.map(renderTaskHTML).join('');
    attachTaskEvents();
  }

  function renderBoard(list) {
    const pending = list.filter(t => !t.done && !isBlocked(t));
    const blocked = list.filter(t => !t.done && isBlocked(t));
    const done = list.filter(t => t.done);
    DOM.boardPending.innerHTML = [...pending, ...blocked].map(renderTaskHTML).join('');
    DOM.boardDone.innerHTML = done.map(renderTaskHTML).join('');
    DOM.boardProgress.innerHTML = ''; // Could add in-progress state later
    attachTaskEvents();
  }

  function attachTaskEvents() {
    document.querySelectorAll('.task-check').forEach(el => {
      el.addEventListener('click', () => toggleDone(el.dataset.id));
    });
    document.querySelectorAll('.edit-btn').forEach(el => {
      el.addEventListener('click', () => openEdit(el.dataset.id));
    });
    document.querySelectorAll('.delete-btn').forEach(el => {
      el.addEventListener('click', () => deleteTask(el.dataset.id));
    });
    document.querySelectorAll('.promote-btn').forEach(el => {
      el.addEventListener('click', () => promoteBurner(el.dataset.id));
    });
    // Drag and drop for list
    document.querySelectorAll('.task-item[draggable="true"]').forEach(el => {
      el.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', el.dataset.id);
        el.style.opacity = '0.4';
      });
      el.addEventListener('dragend', () => { el.style.opacity = '1'; });
      el.addEventListener('dragover', e => { e.preventDefault(); el.style.borderTop = '2px solid var(--accent)'; });
      el.addEventListener('dragleave', () => { el.style.borderTop = ''; });
      el.addEventListener('drop', e => {
        e.preventDefault();
        el.style.borderTop = '';
        const fromId = e.dataTransfer.getData('text/plain');
        const toId = el.dataset.id;
        if (fromId === toId) return;
        const fi = tasks.findIndex(t => t.id === fromId);
        const ti = tasks.findIndex(t => t.id === toId);
        if (fi === -1 || ti === -1) return;
        const [moved] = tasks.splice(fi, 1);
        tasks.splice(ti, 0, moved);
        save();
        render();
      });
    });
  }

  /* ============ STATS ============ */
  function updateStats() {
    const total = tasks.filter(t => !t.burner).length;
    const done = tasks.filter(t => t.done && !t.burner).length;
    const pending = tasks.filter(t => !t.done && !t.graveyard && !t.burner).length;
    const overdue = tasks.filter(t => !t.done && t.due && t.due < today() && !t.burner).length;
    const ghosted = tasks.filter(t => isGhosted(t) || isGraveyarded(t)).length;
    const blocked = tasks.filter(t => !t.done && isBlocked(t)).length;
    const burners = tasks.filter(t => t.burner && !t.done).length;

    animateNum(DOM.statTotal, total);
    animateNum(DOM.statDone, done);
    animateNum(DOM.statPending, pending);
    animateNum(DOM.statOverdue, overdue);
    animateNum(DOM.statGhosted, ghosted);
    animateNum(DOM.statBlocked, blocked);
    animateNum(DOM.statBurner, burners);
    animateNum(DOM.statWins, wins.length);
  }

  function animateNum(el, target) {
    const current = parseInt(el.textContent) || 0;
    if (current === target) return;
    el.textContent = target;
    el.style.transform = 'scale(1.3)';
    setTimeout(() => { el.style.transform = 'scale(1)'; }, 200);
  }

  function updateProgress() {
    const todayAll = tasks.filter(t => t.due === today() && !t.burner);
    const todayDone = todayAll.filter(t => t.done).length;
    const pct = todayAll.length ? Math.round((todayDone / todayAll.length) * 100) : 0;
    DOM.progressPct.textContent = pct + '%';
    DOM.sidebarBarFill.style.width = pct + '%';
  }

  /* ============ EDIT MODAL ============ */
  function openEdit(id) {
    editingId = id;
    const t = tasks.find(x => x.id === id);
    if (!t) return;
    DOM.editTitle.value = t.title;
    DOM.editPriority.value = t.priority;
    DOM.editEnergy.value = t.energy;
    DOM.editCategory.value = t.category;
    DOM.editDue.value = t.due;
    DOM.editEstimate.value = t.estimate || '';
    DOM.editDoD.value = t.dod || '';
    DOM.editTags.value = t.tags.join(', ');
    DOM.editGithub.value = t.github;
    DOM.editNotes.value = t.notes || '';
    renderEditSubtasks(t);
    renderDepSelector(t);
    DOM.modalOverlay.classList.add('open');
  }

  function renderEditSubtasks(t) {
    DOM.editSubtasks.innerHTML = (t.subtasks || []).map((st, i) => `
      <div class="subtask-item">
        <input type="checkbox" ${st.done ? 'checked' : ''} data-sti="${i}" />
        <span class="st-text">${sanitize(st.text)}</span>
        <span class="st-weight">w:${st.weight || 1}</span>
        <button class="st-delete" data-sti="${i}">✕</button>
      </div>
    `).join('');
    // Events
    DOM.editSubtasks.querySelectorAll('input[type="checkbox"]').forEach(el => {
      el.addEventListener('change', () => {
        const tt = tasks.find(x => x.id === editingId);
        if (tt && tt.subtasks[el.dataset.sti]) tt.subtasks[el.dataset.sti].done = el.checked;
      });
    });
    DOM.editSubtasks.querySelectorAll('.st-delete').forEach(el => {
      el.addEventListener('click', () => {
        const tt = tasks.find(x => x.id === editingId);
        if (tt) { tt.subtasks.splice(parseInt(el.dataset.sti), 1); renderEditSubtasks(tt); }
      });
    });
  }

  function renderDepSelector(t) {
    const others = tasks.filter(x => x.id !== t.id && !x.done);
    DOM.depSelector.innerHTML = others.map(o => {
      const checked = (t.blockedBy || []).includes(o.id);
      const cycle = wouldCreateCycle(t.id, o.id);
      return `<label class="dep-item${cycle ? ' cycle' : ''}">
        <input type="checkbox" value="${o.id}" ${checked ? 'checked' : ''} ${cycle && !checked ? 'disabled' : ''} />
        ${sanitize(o.title)} ${cycle ? '(⚠ cycle)' : ''}
      </label>`;
    }).join('');
  }

  function saveEdit() {
    const t = tasks.find(x => x.id === editingId);
    if (!t) return;
    t.title = DOM.editTitle.value.trim() || t.title;
    t.priority = DOM.editPriority.value;
    t.energy = parseInt(DOM.editEnergy.value);
    t.category = DOM.editCategory.value;
    t.due = DOM.editDue.value;
    t.estimate = parseInt(DOM.editEstimate.value) || 0;
    t.dod = DOM.editDoD.value.trim();
    t.tags = DOM.editTags.value.split(',').map(s => s.trim()).filter(Boolean);
    t.github = DOM.editGithub.value.trim();
    t.notes = DOM.editNotes.value;
    t.lastTouched = new Date().toISOString();
    // Dependencies
    t.blockedBy = Array.from(DOM.depSelector.querySelectorAll('input:checked')).map(el => el.value);
    save();
    DOM.modalOverlay.classList.remove('open');
    editingId = null;
    render();
    toast('Task updated!');
  }

  /* ============ POMODORO ============ */
  function updatePomoDisplay() {
    const m = Math.floor(pomoSeconds / 60).toString().padStart(2, '0');
    const s = (pomoSeconds % 60).toString().padStart(2, '0');
    DOM.pomoTime.textContent = `${m}:${s}`;
  }

  function startPomo() {
    if (pomoRunning) { clearInterval(pomoInterval); pomoRunning = false; DOM.pomoStart.textContent = 'Start'; return; }
    if (pomoMode === 'burndown') { startBurndown(); return; }
    pomoRunning = true;
    DOM.pomoStart.textContent = 'Pause';
    pomoInterval = setInterval(() => {
      pomoSeconds--;
      updatePomoDisplay();
      if (pomoSeconds <= 0) {
        clearInterval(pomoInterval);
        pomoRunning = false;
        DOM.pomoStart.textContent = 'Start';
        toast('⏰ Timer done!');
        if (Notification.permission === 'granted') new Notification('Solaris: Timer Complete');
      }
    }, 1000);
  }

  function resetPomo() {
    clearInterval(pomoInterval);
    pomoRunning = false;
    pomoSeconds = POMO_DURATIONS[pomoMode] || POMO_DURATIONS.pomo;
    updatePomoDisplay();
    DOM.pomoStart.textContent = 'Start';
  }

  /* ============ AUTH & PROFILE EVENT LISTENERS ============ */
  // Auth tabs
  DOM.authTabs.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.authTabs.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.dataset.tab === 'login';
      DOM.loginForm.style.display = isLogin ? '' : 'none';
      DOM.signupForm.style.display = isLogin ? 'none' : '';
    });
  });

  // Auth forms
  DOM.loginForm.addEventListener('submit', handleLogin);
  DOM.signupForm.addEventListener('submit', handleSignup);
  DOM.googleSignIn.addEventListener('click', handleGoogleSignIn);
  DOM.anonSignIn.addEventListener('click', handleAnonSignIn);
  DOM.forgotPassword.addEventListener('click', e => { e.preventDefault(); handleForgotPassword(); });

  // User dropdown
  DOM.userProfileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dd = DOM.userDropdown;
    dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
  });
  document.addEventListener('click', () => { DOM.userDropdown.style.display = 'none'; });
  DOM.editProfileBtn.addEventListener('click', openProfileModal);
  DOM.logoutBtn.addEventListener('click', handleLogout);

  // Profile modal
  DOM.profileClose.addEventListener('click', () => DOM.profileOverlay.classList.remove('open'));
  DOM.profileOverlay.addEventListener('click', e => { if (e.target === DOM.profileOverlay) DOM.profileOverlay.classList.remove('open'); });
  DOM.profileSave.addEventListener('click', saveProfile);
  DOM.avatarUpload.addEventListener('change', handleAvatarUpload);
  DOM.removeAvatar.addEventListener('click', removeAvatarPhoto);
  DOM.changePasswordBtn.addEventListener('click', handleChangePassword);
  DOM.deleteAccountBtn.addEventListener('click', handleDeleteAccount);

  /* ============ EVENT LISTENERS ============ */
  // Submit form
  DOM.addForm.addEventListener('submit', e => { e.preventDefault(); addTask(false); });
  DOM.addBurnerBtn.addEventListener('click', () => addTask(true));

  // Win form
  DOM.addWinForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = DOM.winInput.value.trim();
    if (!text) return;
    addWin(text, parseInt(DOM.winMinutes.value) || 0);
    DOM.winInput.value = '';
    DOM.winMinutes.value = '';
    renderWins();
    updateStats();
  });

  // Friction: show DoD field for high priority
  DOM.taskPriority.addEventListener('change', () => {
    DOM.frictionFields.style.display = DOM.taskPriority.value === 'high' ? '' : 'none';
  });

  // Dedup actions
  DOM.dedupMerge.addEventListener('click', () => {
    if (pendingDuplicate) {
      touchTask(pendingDuplicate.task ? pendingDuplicate.task.id : (pendingDuplicate.existingTask ? pendingDuplicate.existingTask.id : ''));
      toast('Merged — existing task updated');
    }
    hideDedupBanner();
    resetForm();
  });
  DOM.dedupIgnore.addEventListener('click', () => {
    if (pendingDuplicate && pendingDuplicate.newTask) {
      tasks.push(pendingDuplicate.newTask);
      save();
      render();
      toast('Task added (duplicate ignored)');
    }
    hideDedupBanner();
    resetForm();
  });

  // Nav
  DOM.navBtns.forEach(btn => btn.addEventListener('click', () => {
    DOM.navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    render();
  }));

  // Category
  DOM.catBtns.forEach(btn => btn.addEventListener('click', () => {
    DOM.catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    render();
  }));

  // Views
  DOM.viewBtns.forEach(btn => btn.addEventListener('click', () => {
    DOM.viewBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    savePrefs(); saveLocal();
    render();
  }));

  // Sort
  DOM.sortSelect.addEventListener('change', () => {
    currentSort = DOM.sortSelect.value;
    savePrefs(); saveLocal();
    render();
  });

  // Search
  DOM.searchInput.addEventListener('input', () => render());

  // Theme
  DOM.themeToggle.addEventListener('click', toggleTheme);

  // Hamburger
  DOM.hamburger.addEventListener('click', (e) => { e.stopPropagation(); DOM.sidebar.classList.toggle('open'); });
  document.addEventListener('click', (e) => {
    if (DOM.sidebar.classList.contains('open') && !DOM.sidebar.contains(e.target) && e.target !== DOM.hamburger) {
      DOM.sidebar.classList.remove('open');
    }
  });

  // Modals
  DOM.modalClose.addEventListener('click', () => { DOM.modalOverlay.classList.remove('open'); editingId = null; });
  DOM.modalOverlay.addEventListener('click', e => { if (e.target === DOM.modalOverlay) { DOM.modalOverlay.classList.remove('open'); editingId = null; } });
  DOM.modalSave.addEventListener('click', saveEdit);

  // Subtask add
  DOM.subtaskAdd.addEventListener('click', () => {
    const t = tasks.find(x => x.id === editingId);
    if (!t) return;
    const text = DOM.subtaskInput.value.trim();
    if (!text) return;
    const weight = parseInt(DOM.subtaskWeight.value) || 1;
    t.subtasks.push({ text, done: false, weight });
    DOM.subtaskInput.value = '';
    DOM.subtaskWeight.value = '1';
    renderEditSubtasks(t);
  });

  // IFTTT
  DOM.iftttFab.addEventListener('click', () => DOM.iftttOverlay.classList.add('open'));
  DOM.iftttClose.addEventListener('click', () => DOM.iftttOverlay.classList.remove('open'));
  DOM.iftttOverlay.addEventListener('click', e => { if (e.target === DOM.iftttOverlay) DOM.iftttOverlay.classList.remove('open'); });
  DOM.iftttAddRule.addEventListener('click', addRule);

  // Report
  DOM.generateReport.addEventListener('click', generateWeeklyReport);
  DOM.reportClose.addEventListener('click', () => DOM.reportOverlay.classList.remove('open'));
  DOM.reportOverlay.addEventListener('click', e => { if (e.target === DOM.reportOverlay) DOM.reportOverlay.classList.remove('open'); });

  // Swap modal
  DOM.swapClose.addEventListener('click', () => { DOM.swapOverlay.classList.remove('open'); pendingTask = null; });
  DOM.swapOverlay.addEventListener('click', e => { if (e.target === DOM.swapOverlay) { DOM.swapOverlay.classList.remove('open'); pendingTask = null; } });
  DOM.swapTomorrow.addEventListener('click', () => {
    if (pendingTask) {
      const tmrw = new Date(); tmrw.setDate(tmrw.getDate() + 1);
      pendingTask.due = tmrw.toISOString().split('T')[0];
      tasks.push(pendingTask);
      save();
      render();
      toast('Task moved to tomorrow');
      pendingTask = null;
    }
    DOM.swapOverlay.classList.remove('open');
  });

  // Undo
  DOM.undoBtn.addEventListener('click', undoDelete);

  // Pomodoro
  DOM.pomoStart.addEventListener('click', startPomo);
  DOM.pomoReset.addEventListener('click', resetPomo);
  DOM.pomoModeBtns.forEach(btn => btn.addEventListener('click', () => {
    DOM.pomoModeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pomoMode = btn.dataset.pmode;
    if (pomoMode !== 'burndown') {
      pomoSeconds = POMO_DURATIONS[pomoMode];
      clearInterval(pomoInterval);
      pomoRunning = false;
      DOM.pomoStart.textContent = 'Start';
      updatePomoDisplay();
    }
  }));
  DOM.bdClose.addEventListener('click', () => { DOM.burndownPanel.style.display = 'none'; burndownActive = false; });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'n' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault(); DOM.taskInput.focus();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); DOM.searchInput.focus(); }
    if (e.key === 'Escape') {
      DOM.modalOverlay.classList.remove('open');
      DOM.iftttOverlay.classList.remove('open');
      DOM.reportOverlay.classList.remove('open');
      DOM.swapOverlay.classList.remove('open');
      editingId = null;
    }
  });

  /* ============ AUTH SCREEN ============ */
  function showAuthScreen() {
    DOM.authScreen.style.display = '';
    DOM.appContainer.style.display = 'none';
  }

  function showApp() {
    DOM.authScreen.style.display = 'none';
    DOM.appContainer.style.display = '';
  }

  function setAuthError(el, msg) {
    el.textContent = msg;
    setTimeout(() => { el.textContent = ''; }, 5000);
  }

  function disableBtn(btn) { btn.disabled = true; btn.textContent = 'Please wait…'; }
  function enableBtn(btn, text) { btn.disabled = false; btn.textContent = text; }

  async function handleLogin(e) {
    e.preventDefault();
    const email = DOM.loginEmail.value.trim();
    const password = DOM.loginPassword.value;
    if (!email || !password) return;
    const btn = DOM.loginForm.querySelector('.auth-submit');
    disableBtn(btn);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // onAuthStateChanged will handle the rest
    } catch (err) {
      const msgs = {
        'auth/user-not-found': 'No account with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/invalid-email': 'Invalid email address.',
        'auth/too-many-requests': 'Too many attempts. Try later.',
        'auth/invalid-credential': 'Invalid email or password.'
      };
      setAuthError(DOM.loginError, msgs[err.code] || err.message);
    }
    enableBtn(btn, 'Log In');
  }

  async function handleSignup(e) {
    e.preventDefault();
    const name = DOM.signupName.value.trim();
    const email = DOM.signupEmail.value.trim();
    const password = DOM.signupPassword.value;
    const confirm = DOM.signupConfirm.value;
    if (!name || !email || !password) return;
    if (password !== confirm) { setAuthError(DOM.signupError, 'Passwords do not match.'); return; }
    if (password.length < 6) { setAuthError(DOM.signupError, 'Password must be at least 6 characters.'); return; }
    const btn = DOM.signupForm.querySelector('.auth-submit');
    disableBtn(btn);
    try {
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      // Save display name
      await cred.user.updateProfile({ displayName: name });
      // Create initial profile in Firestore
      userProfile.name = name;
      await db.collection('users').doc(cred.user.uid).set({
        name, email, bio: '', job: '', location: '', workGoal: 480, avatarUrl: '',
        createdAt: new Date().toISOString()
      }, { merge: true });
    } catch (err) {
      const msgs = {
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/invalid-email': 'Invalid email address.',
        'auth/weak-password': 'Password is too weak (min 6 characters).'
      };
      setAuthError(DOM.signupError, msgs[err.code] || err.message);
    }
    enableBtn(btn, 'Create Account');
  }

  async function handleGoogleSignIn() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      // Save profile if new user
      const userDoc = await db.collection('users').doc(result.user.uid).get();
      if (!userDoc.exists) {
        await db.collection('users').doc(result.user.uid).set({
          name: result.user.displayName || '',
          email: result.user.email || '',
          bio: '', job: '', location: '', workGoal: 480,
          avatarUrl: result.user.photoURL || '',
          createdAt: new Date().toISOString()
        });
      }
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setAuthError(DOM.loginError, err.message);
      }
    }
  }

  async function handleAnonSignIn() {
    try {
      await auth.signInAnonymously();
    } catch (err) {
      setAuthError(DOM.loginError, err.message);
    }
  }

  async function handleForgotPassword() {
    const email = DOM.loginEmail.value.trim();
    if (!email) { setAuthError(DOM.loginError, 'Enter your email first.'); return; }
    try {
      await auth.sendPasswordResetEmail(email);
      toast('Password reset email sent! Check your inbox.');
    } catch (err) {
      setAuthError(DOM.loginError, err.code === 'auth/user-not-found' ? 'No account with this email.' : err.message);
    }
  }

  async function handleLogout() {
    try {
      await auth.signOut();
    } catch (err) {
      toast('Error signing out: ' + err.message);
    }
  }

  /* ============ USER PROFILE ============ */
  async function loadProfile() {
    if (!userId || isAnonymous) return;
    try {
      const doc = await db.collection('users').doc(userId).get();
      if (doc.exists) {
        const d = doc.data();
        userProfile = {
          name: d.name || '',
          bio: d.bio || '',
          job: d.job || '',
          location: d.location || '',
          workGoal: d.workGoal || 480,
          avatarUrl: d.avatarUrl || '',
          createdAt: d.createdAt || ''
        };
      }
    } catch (e) { /* silent */ }
    updateUserUI();
  }

  function updateUserUI() {
    const user = auth.currentUser;
    if (!user) return;
    const name = userProfile.name || user.displayName || (isAnonymous ? 'Guest' : 'User');
    const email = user.email || (isAnonymous ? 'Anonymous' : '');
    DOM.userName.textContent = name;
    DOM.userEmail.textContent = email;
    DOM.greeting.textContent = getGreetingText() + (userProfile.name ? ', ' + userProfile.name.split(' ')[0] : '');
    // Avatar
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?';
    if (userProfile.avatarUrl) {
      DOM.userAvatar.innerHTML = `<img src="${userProfile.avatarUrl}" alt="avatar" />`;
    } else {
      DOM.userInitials.textContent = initials;
      DOM.userAvatar.innerHTML = `<span>${initials}</span>`;
    }
  }

  function getGreetingText() {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    if (h < 21) return 'Good evening';
    return 'Good night';
  }

  function openProfileModal() {
    DOM.userDropdown.style.display = 'none';
    const user = auth.currentUser;
    if (!user) return;

    DOM.profileName.value = userProfile.name || user.displayName || '';
    DOM.profileEmail.value = user.email || (isAnonymous ? 'Anonymous (no email)' : '');
    DOM.profileBio.value = userProfile.bio || '';
    DOM.profileJob.value = userProfile.job || '';
    DOM.profileLocation.value = userProfile.location || '';
    DOM.profileWorkGoal.value = userProfile.workGoal || 480;
    DOM.profileError.textContent = '';

    // Stats
    const joinDate = userProfile.createdAt || user.metadata.creationTime;
    DOM.profileJoined.textContent = joinDate ? new Date(joinDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';
    DOM.profileCompleted.textContent = tasks.filter(t => t.done).length;
    DOM.profileStreak.textContent = completionStreak;
    DOM.profileWins.textContent = wins.length;

    // Avatar in modal
    const initials = (userProfile.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    if (userProfile.avatarUrl) {
      DOM.profileAvatar.innerHTML = `<img src="${userProfile.avatarUrl}" alt="avatar" />`;
    } else {
      DOM.profileInitials.textContent = initials;
      DOM.profileAvatar.innerHTML = `<span>${initials}</span>`;
    }

    // Hide password change for anonymous
    const pwSection = document.querySelector('.profile-password-section');
    if (pwSection) pwSection.style.display = isAnonymous ? 'none' : '';

    DOM.profileOverlay.classList.add('open');
  }

  async function saveProfile() {
    const user = auth.currentUser;
    if (!user || isAnonymous) { toast('Create an account to save your profile.'); return; }

    userProfile.name = DOM.profileName.value.trim();
    userProfile.bio = DOM.profileBio.value.trim();
    userProfile.job = DOM.profileJob.value.trim();
    userProfile.location = DOM.profileLocation.value.trim();
    userProfile.workGoal = parseInt(DOM.profileWorkGoal.value) || 480;

    try {
      // Update Firebase Auth displayName
      await user.updateProfile({ displayName: userProfile.name });
      // Save to Firestore
      await db.collection('users').doc(userId).set({
        name: userProfile.name,
        email: user.email || '',
        bio: userProfile.bio,
        job: userProfile.job,
        location: userProfile.location,
        workGoal: userProfile.workGoal,
        avatarUrl: userProfile.avatarUrl
      }, { merge: true });

      updateUserUI();
      DOM.profileOverlay.classList.remove('open');
      toast('Profile saved!');
    } catch (e) {
      setAuthError(DOM.profileError, 'Failed to save: ' + e.message);
    }
  }

  async function handleChangePassword() {
    const newPw = DOM.newPassword.value;
    const confirmPw = DOM.confirmNewPassword.value;
    if (!newPw || newPw.length < 6) { setAuthError(DOM.profileError, 'Password must be at least 6 characters.'); return; }
    if (newPw !== confirmPw) { setAuthError(DOM.profileError, 'Passwords do not match.'); return; }
    try {
      await auth.currentUser.updatePassword(newPw);
      DOM.newPassword.value = '';
      DOM.confirmNewPassword.value = '';
      toast('Password updated!');
    } catch (e) {
      if (e.code === 'auth/requires-recent-login') {
        setAuthError(DOM.profileError, 'Please log out and log in again before changing your password.');
      } else {
        setAuthError(DOM.profileError, e.message);
      }
    }
  }

  async function handleDeleteAccount() {
    if (!confirm('Are you sure you want to delete your account? All your data will be permanently lost.')) return;
    const user = auth.currentUser;
    if (!user) return;
    try {
      // Delete Firestore user data
      const userDoc = db.collection('users').doc(userId);
      const collections = ['tasks', 'meta'];
      for (const col of collections) {
        const snap = await userDoc.collection(col).get();
        const batch = db.batch();
        snap.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
      }
      await userDoc.delete();
      // Delete auth user
      await user.delete();
      toast('Account deleted.');
    } catch (e) {
      if (e.code === 'auth/requires-recent-login') {
        setAuthError(DOM.profileError, 'Please log out and log in again before deleting your account.');
      } else {
        setAuthError(DOM.profileError, 'Failed: ' + e.message);
      }
    }
  }

  function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { toast('Please select an image file.'); return; }
    if (file.size > 500 * 1024) { toast('Image must be under 500KB.'); return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      userProfile.avatarUrl = ev.target.result;
      DOM.profileAvatar.innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
    };
    reader.readAsDataURL(file);
  }

  function removeAvatarPhoto() {
    userProfile.avatarUrl = '';
    const initials = (userProfile.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    DOM.profileAvatar.innerHTML = `<span>${initials}</span>`;
  }

  /* ============ FIREBASE AUTH + INIT ============ */
  async function onUserReady(user) {
    userId = user.uid;
    isAnonymous = user.isAnonymous;
    firebaseReady = true;
    DOM.fbDot.className = 'fb-dot online';
    DOM.fbLabel.textContent = 'Synced';

    await loadFromFirebase();
    await loadProfile();
    showApp();

    // Apply saved view/sort
    DOM.viewBtns.forEach(b => b.classList.toggle('active', b.dataset.view === currentView));
    DOM.sortSelect.value = currentSort;

    initIFTTT();
    initEnvironment();

    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    render();
  }

  function init() {
    updateGreeting();
    loadLocal(); // Load from localStorage first for instant UI

    // Listen for auth state changes
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await onUserReady(user);
      } else {
        // No user — show auth screen
        firebaseReady = false;
        userId = null;
        showAuthScreen();
      }
    });

    // Periodic updates
    setInterval(() => { updateGreeting(); updateEnergyUI(); cleanupBurnerTasks(); if (userId) render(); }, 60000);
  }

  init();
})();
