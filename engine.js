const LEVELS = [
  { level: 0, name: 'GUEST',       xp: 0    },
  { level: 1, name: 'SCRIPT_KID',  xp: 50   },
  { level: 2, name: 'INFILTRATOR', xp: 150  },
  { level: 3, name: 'ANALYST',     xp: 350  },
  { level: 4, name: 'CRACKER',     xp: 650  },
  { level: 5, name: 'HACKER',      xp: 1100 },
  { level: 6, name: 'GHOST',       xp: 1700 },
  { level: 7, name: 'PHANTOM',     xp: 2500 },
  { level: 8, name: 'CIPHER',      xp: 3500 },
  { level: 9, name: 'ROOT',        xp: 5000 },
];

const ACHIEVEMENTS = [
  // ── ONBOARDING ──────────────────────────────────────────────────
  {
    id: 'ACH_FIRST', name: 'FIRST_BREACH', secret: false,
    flavor: 'Přístup povolen. Systém kompromitován.',
    condition: 'Správně vyřeš svůj první firewall.',
    color: '#00d2ff',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <rect x="8" y="20" width="24" height="16" rx="3"/>
      <path d="M14 20v-5a6 6 0 0 1 12 0v1"/>
      <circle cx="20" cy="28" r="2" fill="currentColor" stroke="none"/>
      <line x1="20" y1="30" x2="20" y2="33"/>
    </svg>`,
  },
  {
    id: 'ACH_TRAINING', name: 'SIMULATION_COMPLETE', secret: false,
    flavor: 'Virtuální prostředí překonáno.',
    condition: 'Správně dokonči svůj první trénink.',
    color: '#00d2ff',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <rect x="5" y="8" width="30" height="22" rx="2"/>
      <line x1="5" y1="26" x2="35" y2="26"/>
      <line x1="15" y1="34" x2="25" y2="34"/>
      <line x1="20" y1="30" x2="20" y2="34"/>
      <text x="9" y="22" font-family="monospace" font-size="9" fill="currentColor" stroke="none">&gt;_</text>
    </svg>`,
  },
  {
    id: 'ACH_BUY_LIFE', name: 'RESOURCE_ALLOCATION', secret: false,
    flavor: 'Přesměrování zdrojů schváleno.',
    condition: 'Nakup si nový pokus za XP.',
    color: '#00d2ff',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="20,4 33,11 33,25 20,32 7,25 7,11"/>
      <text x="20" y="22" font-family="monospace" font-size="11" fill="currentColor" stroke="none" text-anchor="middle">¤</text>
      <line x1="7" y1="18" x2="2" y2="18"/>
      <line x1="33" y1="18" x2="38" y2="18"/>
    </svg>`,
  },
  // ── SKILL ────────────────────────────────────────────────────────
  {
    id: 'ACH_NOHINT', name: 'GHOST_MODE', secret: false,
    flavor: 'Žádná stopa. Čistý průnik.',
    condition: 'Vyřeš firewall bez otevření nápovědy.',
    color: '#7c5cfc',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M5 20 Q20 8 35 20 Q20 32 5 20"/>
      <circle cx="20" cy="20" r="4"/>
      <line x1="6" y1="6" x2="34" y2="34" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'ACH_STREAK', name: 'ZERO_RESISTANCE', secret: false,
    flavor: 'Firewall se vzdal. Odpor = 0.',
    condition: 'Vyřeš 10 příkladů za sebou správně bez jediné chyby.',
    color: '#f7b84f',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22,4 14,20 20,20 18,36 26,20 20,20 22,4"/>
    </svg>`,
  },
  {
    id: 'ACH_PERSISTENCE', name: 'PERSISTENCE', secret: false,
    flavor: 'Systém testoval tvou vůli. Prošels.',
    condition: 'Správně vyřeš příklad, na kterém jsi předtím dvakrát selhal.',
    color: '#f7b84f',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M32 12 A13 13 0 1 0 35 22"/>
      <polyline points="35,12 35,22 25,22"/>
      <line x1="14" y1="17" x2="18" y2="21"/>
      <line x1="18" y1="17" x2="14" y2="21"/>
      <line x1="23" y1="17" x2="27" y2="21"/>
      <polyline points="22,23 25,27 31,21" stroke="#2ecc8a" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'ACH_LAST_STAND', name: 'LAST_STAND', secret: false,
    flavor: 'Jeden pokus. Jeden průnik. Stačilo.',
    condition: 'Správně odpověz, když ti zbývá právě 1 pokus.',
    color: '#ff3b6a',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 4 L34 10 L34 22 Q34 32 20 37 Q6 32 6 22 L6 10 Z"/>
      <text x="20" y="27" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor" stroke="none" text-anchor="middle">1</text>
    </svg>`,
  },
  // ── PROGRESS ─────────────────────────────────────────────────────
  {
    id: 'ACH_SECTOR', name: 'SECTOR_CLEAR', secret: false,
    flavor: 'Sektor pod kontrolou.',
    condition: 'Vyřeš všechny firewally v jednom modulu.',
    color: '#00d2ff',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <rect x="4" y="4" width="14" height="14" rx="1"/>
      <rect x="22" y="4" width="14" height="14" rx="1"/>
      <rect x="4" y="22" width="14" height="14" rx="1"/>
      <rect x="22" y="22" width="14" height="14" rx="1"/>
      <polyline points="25,29 28,32 34,26" stroke="#2ecc8a" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'ACH_CLEAN', name: 'CLEAN_SWEEP', secret: false,
    flavor: 'Nulová chybovost. Systém respektuje.',
    condition: 'Vyřeš 3 různé moduly bez jediné chyby.',
    color: '#2ecc8a',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 4 L33 10 L33 22 Q33 32 20 37 Q7 32 7 22 L7 10 Z"/>
      <polyline points="13,20 18,26 28,14"/>
    </svg>`,
  },
  {
    id: 'ACH_TRAINING_OFFICER', name: 'TRAINING_OFFICER', secret: false,
    flavor: 'Simulace absolvovány. Přístup ke všem protokolům.',
    condition: 'Dokonči všechny tréninky v jednom modulu.',
    color: '#7c5cfc',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <rect x="5" y="8" width="30" height="20" rx="2"/>
      <line x1="5" y1="22" x2="35" y2="22"/>
      <line x1="18" y1="32" x2="22" y2="32"/>
      <line x1="20" y1="28" x2="20" y2="32"/>
      <text x="10" y="20" font-family="monospace" font-size="7" fill="currentColor" stroke="none">SIM</text>
      <polyline points="22,12 25,16 31,10" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'ACH_NO_WHEELS', name: 'NO_TRAINING_WHEELS', secret: false,
    flavor: 'Podpůrné systémy odpojeny. Operuješ solo.',
    condition: 'Projdi celý modul bez spuštění jediného tréninku.',
    color: '#f7b84f',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <rect x="4" y="9" width="26" height="18" rx="2"/>
      <line x1="4" y1="22" x2="30" y2="22"/>
      <text x="9" y="20" font-family="monospace" font-size="7" fill="currentColor" stroke="none">&gt;_</text>
      <line x1="28" y1="7" x2="38" y2="33" stroke="#ff3b6a" stroke-width="2.5"/>
      <line x1="38" y1="7" x2="28" y2="33" stroke="#ff3b6a" stroke-width="2.5"/>
    </svg>`,
  },
  {
    id: 'ACH_VETERAN', name: 'VETERAN', secret: false,
    flavor: 'Bojový záznam ověřen. Přístup: SENIOR.',
    condition: 'Správně vyřeš celkem 30 firewallů.',
    color: '#f7b84f',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="20,4 24,15 36,15 27,23 30,34 20,27 10,34 13,23 4,15 16,15"/>
    </svg>`,
  },
  {
    id: 'ACH_HALF', name: 'HALFWAY_THROUGH', secret: false,
    flavor: 'Polovina sítě kompromitována.',
    condition: 'Vyřeš 50 % všech firewallů v aplikaci.',
    color: '#f7b84f',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="20" cy="20" r="14"/>
      <path d="M20 6 A14 14 0 0 1 34 20 L20 20 Z" fill="currentColor" stroke="none" opacity="0.6"/>
      <path d="M20 6 A14 14 0 0 1 34 20" stroke-width="2.5"/>
      <circle cx="20" cy="20" r="3" fill="currentColor" stroke="none"/>
    </svg>`,
  },
  {
    id: 'ACH_ALL', name: 'SYSTEM_OVERRIDE', secret: false,
    flavor: 'Absolutní přístup. Systém = váš.',
    condition: 'Vyřeš všechny firewally v celé aplikaci.',
    color: '#ff3b6a',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="20" cy="15" r="7"/>
      <path d="M13 15 Q12 22 8 28 L32 28 Q28 22 27 15"/>
      <line x1="14" y1="28" x2="12" y2="34"/>
      <line x1="26" y1="28" x2="28" y2="34"/>
      <line x1="10" y1="34" x2="30" y2="34"/>
      <line x1="4" y1="10" x2="8" y2="13"/>
      <line x1="36" y1="10" x2="32" y2="13"/>
      <line x1="20" y1="4" x2="20" y2="8"/>
    </svg>`,
  },
  // ── TAJNÉ ────────────────────────────────────────────────────────
  {
    id: 'ACH_ROOT', name: 'ROOT_ACCESS', secret: true,
    flavor: 'Jsi systém. Systém jsi ty.',
    condition: 'Podmínky utajeny.',
    color: '#ffd700',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="20" cy="20" r="16"/>
      <text x="20" y="26" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor" stroke="none" text-anchor="middle">#</text>
    </svg>`,
  },
  {
    id: 'ACH_LOOP', name: 'ERROR_LOOP', secret: true,
    flavor: 'Chyba přetrvává. Systém tě zná.',
    condition: 'Podmínky utajeny.',
    color: '#ff3b6a',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <path d="M5 20 C5 12 12 8 20 8 C28 8 35 12 35 20 C35 28 28 32 20 32 C12 32 5 28 5 20"/>
      <text x="20" y="24" font-family="monospace" font-size="9" fill="currentColor" stroke="none" text-anchor="middle">ERR</text>
    </svg>`,
  },
  {
    id: 'ACH_COLD', name: 'COLD_BOOT', secret: true,
    flavor: 'Systém restartován po dlouhé době.',
    condition: 'Podmínky utajeny.',
    color: '#00d2ff',
    icon: `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="20" cy="20" r="13"/>
      <line x1="20" y1="7" x2="20" y2="33"/>
      <line x1="7" y1="20" x2="33" y2="20"/>
      <line x1="11" y1="11" x2="29" y2="29"/>
      <line x1="29" y1="11" x2="11" y2="29"/>
      <line x1="20" y1="7" x2="17" y2="11"/>
      <line x1="20" y1="7" x2="23" y2="11"/>
      <polyline points="20,20 20,14 24,14" stroke-width="2"/>
    </svg>`,
  },
];

function renderMath() {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise().catch((err) => console.error('MathJax error:', err));
  } else { setTimeout(renderMath, 100); }
}

const Engine = {
  state: { xp: 0, clearedNodes: [], hp: 5, maxHp: 5, achievements: [], streak: 0, deathsPerQuestion: {}, errorsInRegion: {}, lastPlayed: {}, completedTrainings: [], trainingLaunchedInRegion: {}, cleanRegionCount: 0 },
  currentRegionId: null,

  init: function() {
    // Načti e-mail z URL parametru (předán Thinkificem přes {{email}})
    const urlEmail = new URLSearchParams(window.location.search).get('email') || '';
    this.saveKey = urlEmail ? 'axioma_save_' + urlEmail.toLowerCase().trim() : 'axioma_save';
    this.loadState();
    this.updateUI();
    this.switchView('view-map');
  },

  switchView: function(viewId) {
    // Detekce: přechod na základnu z dokončeného (a dosud neslazeného) modulu
    let pendingCelebration = null;
    if (viewId === 'view-map' && this.currentRegionId && this.currentRegionId !== 'maturita') {
      const rid = this.currentRegionId;
      if (this.isRegionCleared(rid) && !this.state.celebratedModules.includes(rid)) {
        pendingCelebration = rid;
        this.state.celebratedModules.push(rid);
        this.saveState();
      }
    }
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    if(viewId === 'view-map') this.generateBlueprint();
    if(viewId === 'view-arena') renderMath();
    if (pendingCelebration) this.showModuleClearedPanel(pendingCelebration);
  },

  updateUI: function() {
    const hpContainer = document.getElementById('res-hp');
    let attempts = '';
    for (let i = 0; i < this.state.maxHp; i++) {
      attempts += `<span class="attempt-box${i < this.state.hp ? '' : ' lost'}"></span>`;
    }
    hpContainer.innerHTML = `ENERGY: ${attempts}`;
    document.getElementById('res-xp').innerText = this.state.xp;
    const levelEl = document.getElementById('res-level');
    if (levelEl) {
      const { current } = this.getLevelInfo(this.state.xp);
      levelEl.textContent = `LVL ${current.level} // ${current.name}`;
    }
  },

  getLevelInfo: function(xp) {
    let idx = 0;
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (xp >= LEVELS[i].xp) { idx = i; break; }
    }
    return { current: LEVELS[idx], next: LEVELS[idx + 1] || null };
  },

  renderXPBar: function() {
    const container = document.getElementById('map-xp-bar');
    if (!container) return;
    const xp = this.state.xp;
    const { current, next } = this.getLevelInfo(xp);

    // Bar 1 — XP level progress
    let xpBarHTML;
    if (!next) {
      xpBarHTML = `
        <div class="xp-bar-top">
          <span class="xp-lvl-badge" style="border-color:#ffd700;color:#ffd700">LVL ${current.level}</span>
          <span class="xp-lvl-name" style="color:#ffd700">${current.name}</span>
          <span class="xp-lvl-next" style="color:#ffd700">// PŘÍSTUP: MAXIMÁLNÍ</span>
        </div>
        <div class="xp-bar-track">
          <div class="xp-bar-fill" style="width:100%;background:#ffd700;box-shadow:0 0 12px #ffd700"></div>
          <span class="xp-bar-label">${xp} XP</span>
        </div>`;
    } else {
      const fromXp = xp - current.xp;
      const totalXp = next.xp - current.xp;
      const pct = Math.min(100, Math.round((fromXp / totalXp) * 100));
      xpBarHTML = `
        <div class="xp-bar-top">
          <span class="xp-lvl-badge">LVL ${current.level}</span>
          <span class="xp-lvl-name">${current.name}</span>
          <span class="xp-lvl-next">→ ${next.name} (LVL ${next.level}) &nbsp;|&nbsp; ${next.xp - xp} XP</span>
        </div>
        <div class="xp-bar-track">
          <div class="xp-bar-fill" style="width:${pct}%"></div>
          <span class="xp-bar-label">${fromXp} / ${totalXp} XP</span>
        </div>`;
    }

    // Bar 2 — XP potenciál s barevnými segmenty úrovní
    const totalPossibleXP = GameData.questions
      .filter(q => !q.isTraining && q.reward && q.reward.xp)
      .reduce((sum, q) => sum + q.reward.xp, 0);
    const potPct = totalPossibleXP > 0 ? Math.min(100, Math.round((xp / totalPossibleXP) * 100)) : 0;
    const remaining = Math.max(0, totalPossibleXP - xp);
    const levelsLeft = next ? (LEVELS.length - 1 - current.level) : 0;

    // Barva každé úrovně — postupná progrese od modré k zlaté
    const LEVEL_COLORS = [
      '#3a3a6a', // 0 GUEST
      '#0077bb', // 1 SCRIPT_KID
      '#00b4a8', // 2 INFILTRATOR
      '#2ecc8a', // 3 ANALYST
      '#8bc34a', // 4 CRACKER
      '#f7b84f', // 5 HACKER
      '#e67e22', // 6 GHOST
      '#ff6b8a', // 7 PHANTOM
      '#c462f5', // 8 CIPHER
      '#ffd700', // 9 ROOT
    ];

    // Segmenty = barevné pruhy pro každou úroveň
    const potSegments = LEVELS.map((lvl, i) => {
      if (lvl.xp >= totalPossibleXP) return '';
      const segEnd = LEVELS[i + 1] ? LEVELS[i + 1].xp : totalPossibleXP;
      const clampedEnd = Math.min(segEnd, totalPossibleXP);
      const l = ((lvl.xp / totalPossibleXP) * 100).toFixed(2);
      const w = (((clampedEnd - lvl.xp) / totalPossibleXP) * 100).toFixed(2);
      return `<div style="position:absolute;top:0;left:${l}%;width:${w}%;height:100%;background:${LEVEL_COLORS[i] || '#888'}"></div>`;
    }).join('');

    // Tenké oddělovací čáry na hranicích úrovní
    const potTicks = LEVELS.slice(1).map(lvl => {
      if (lvl.xp <= 0 || lvl.xp >= totalPossibleXP) return '';
      const l = ((lvl.xp / totalPossibleXP) * 100).toFixed(2);
      return `<div style="position:absolute;top:0;left:${l}%;width:1px;height:100%;background:rgba(0,0,0,0.55);z-index:2"></div>`;
    }).join('');

    // Tmavý přesah přes nevydělané XP
    const potOverlay = potPct < 100
      ? `<div style="position:absolute;top:0;left:${potPct}%;width:${100 - potPct}%;height:100%;background:rgba(4,7,18,0.78);z-index:3"></div>`
      : '';

    const compBarHTML = `
      <div class="xp-bar-top" style="margin-top:10px">
        <span class="xp-lvl-badge" style="border-color:#f7b84f;color:#f7b84f">POTENCIÁL</span>
        <span class="xp-lvl-name" style="color:#f7b84f;font-size:0.8rem;text-shadow:0 0 8px rgba(247,184,79,0.5)">LEVELOVÝ POTENCIÁL</span>
        <span class="xp-lvl-next">${levelsLeft > 0 ? `ještě ${levelsLeft} levelů · ` : '// MAX LEVEL · '}zbývá ${remaining} XP</span>
      </div>
      <div class="xp-bar-track">
        ${potSegments}${potTicks}${potOverlay}
        <span class="xp-bar-label" style="z-index:4;mix-blend-mode:normal;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,0.9)">${xp} / ${totalPossibleXP} XP</span>
      </div>`;

    container.innerHTML = `<div class="xp-bar-wrap">${xpBarHTML}${compBarHTML}</div>`;
  },

  showLevelUp: function(levelData) {
    const toast = document.getElementById('level-up-toast');
    if (!toast) return;
    toast.innerHTML = `<span class="toast-tag">[ LEVEL UP ]</span><span class="toast-lvlname">${levelData.name}</span><span class="toast-lvlnum">LVL ${levelData.level}</span>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
    this.renderXPBar();
  },

  unlockAchievement: function(id) {
    if (this.state.achievements.includes(id)) return;
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (!ach) return;
    this.state.achievements.push(id);
    this.saveState();

    const toast = document.getElementById('ach-toast');
    if (!toast) return;
    toast.style.borderColor = ach.color;
    toast.style.boxShadow = `0 0 20px ${ach.color}44`;
    toast.innerHTML = `
      <span class="ach-toast-icon" style="color:${ach.color}">${ach.icon}</span>
      <div>
        <div class="ach-toast-tag">[ ACHIEVEMENT UNLOCKED ]</div>
        <div class="ach-toast-name" id="ach-scramble-target" style="color:${ach.color}"></div>
        <div class="ach-toast-flavor">${ach.flavor}</div>
      </div>`;
    toast.classList.add('show');

    // Scramble animace: náhodné znaky → finální název
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@%';
    const target = document.getElementById('ach-scramble-target');
    const finalText = ach.name;
    let iteration = 0;
    const interval = setInterval(() => {
      if (!target) { clearInterval(interval); return; }
      target.textContent = finalText.split('').map((char, i) => {
        if (char === '_') return '_';
        if (i < iteration) return finalText[i];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      if (iteration >= finalText.length) clearInterval(interval);
      iteration += 0.5;
    }, 40);

    setTimeout(() => toast.classList.remove('show'), 4500);
  },

  checkAchievements: function(context) {
    const s = this.state;
    const u = (id) => !s.achievements.includes(id);

    if (context === 'correct') {
      if (u('ACH_FIRST')) this.unlockAchievement('ACH_FIRST');
      if (u('ACH_STREAK') && s.streak >= 10) this.unlockAchievement('ACH_STREAK');
      if (u('ACH_LAST_STAND') && s.hp === 1) this.unlockAchievement('ACH_LAST_STAND');
      // GHOST_MODE: correct firewall answer without opening hints this encounter
      if (u('ACH_NOHINT') && !Arena.hintUsedThisEncounter) this.unlockAchievement('ACH_NOHINT');
      // PERSISTENCE: correct after 2+ prior failures on same question
      const qid = Arena.currentQuestion?.id;
      if (qid && u('ACH_PERSISTENCE') && (s.deathsPerQuestion[qid] || 0) >= 2) this.unlockAchievement('ACH_PERSISTENCE');
    }
    if (context === 'training_correct') {
      const tq = Arena.currentQuestion;
      if (u('ACH_TRAINING')) this.unlockAchievement('ACH_TRAINING');
      // Track completed trainings per region
      if (tq && !s.completedTrainings.includes(tq.id)) {
        s.completedTrainings.push(tq.id);
        this.saveState();
      }
      // TRAINING_OFFICER: all trainings in one region done
      if (u('ACH_TRAINING_OFFICER') && tq) {
        const regionTrainings = GameData.questions.filter(q => q.regionId === tq.regionId && q.isTraining);
        if (regionTrainings.length > 0 && regionTrainings.every(t => s.completedTrainings.includes(t.id))) {
          this.unlockAchievement('ACH_TRAINING_OFFICER');
        }
      }
    }
    if (context === 'buy_life') {
      if (u('ACH_BUY_LIFE')) this.unlockAchievement('ACH_BUY_LIFE');
    }
    if (context === 'region_clear') {
      if (u('ACH_SECTOR')) this.unlockAchievement('ACH_SECTOR');
      // NO_TRAINING_WHEELS: region cleared without launching any training
      if (u('ACH_NO_WHEELS') && !s.trainingLaunchedInRegion[this.currentRegionId]) this.unlockAchievement('ACH_NO_WHEELS');
      // CLEAN_SWEEP: track how many regions cleared without error
      if (!s.errorsInRegion[this.currentRegionId]) {
        s.cleanRegionCount = (s.cleanRegionCount || 0) + 1;
        this.saveState();
        if (u('ACH_CLEAN') && s.cleanRegionCount >= 3) this.unlockAchievement('ACH_CLEAN');
      }
    }
    if (context === 'xp_change') {
      const total = GameData.questions.filter(q => !q.isTraining).length;
      const solved = s.clearedNodes.length;
      if (u('ACH_VETERAN') && solved >= 30) this.unlockAchievement('ACH_VETERAN');
      if (u('ACH_HALF') && total > 0 && solved >= Math.floor(total / 2)) this.unlockAchievement('ACH_HALF');
      if (u('ACH_ALL') && solved >= total) this.unlockAchievement('ACH_ALL');
      if (u('ACH_ROOT') && this.getLevelInfo(s.xp).current.level >= 9) this.unlockAchievement('ACH_ROOT');
    }
    if (context === 'wrong') {
      const qid = Arena.currentQuestion?.id;
      if (qid) {
        s.deathsPerQuestion[qid] = (s.deathsPerQuestion[qid] || 0) + 1;
        if (u('ACH_LOOP') && s.deathsPerQuestion[qid] >= 3) this.unlockAchievement('ACH_LOOP');
      }
      if (this.currentRegionId) s.errorsInRegion[this.currentRegionId] = true;
      this.saveState();
    }
    if (context === 'review') {
      const qid = Arena.currentQuestion?.id;
      if (qid && s.lastPlayed[qid]) {
        const daysDiff = (Date.now() - s.lastPlayed[qid]) / (1000 * 60 * 60 * 24);
        if (u('ACH_COLD') && daysDiff >= 7) this.unlockAchievement('ACH_COLD');
      }
    }
  },

  showAchievements: function() {
    const container = document.getElementById('ach-grid');
    if (!container) return;
    const unlocked = this.state.achievements;
    container.innerHTML = ACHIEVEMENTS.map(ach => {
      const isUnlocked = unlocked.includes(ach.id);
      const isSecret = ach.secret && !isUnlocked;
      const conditionText = isSecret ? 'Podmínky utajeny.' : ach.condition;
      return `
        <div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}" style="${isUnlocked ? `--ach-color:${ach.color}` : ''}">
          <div class="ach-icon">${isSecret ? `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2"><text x="20" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">?</text></svg>` : ach.icon}</div>
          <div class="ach-info">
            <div class="ach-name">${isSecret ? '???????????' : ach.name}</div>
            <div class="ach-flavor">${isSecret ? '???' : ach.flavor}</div>
            <div class="ach-condition">${conditionText}</div>
          </div>
          ${isUnlocked ? '<div class="ach-check">✓</div>' : ''}
        </div>`;
    }).join('');
    this.switchView('view-achievements');
  },

  getClearedModulesCount: function() {
    let count = 0;
    GameData.regions.forEach(r => {
      if (r.id !== "maturita" && this.isRegionCleared(r.id)) count++;
    });
    return count;
  },

  isRegionCleared: function(regionId) {
    const regionQs = GameData.questions.filter(q => q.regionId === regionId && !q.isTraining);
    if (regionQs.length === 0) return false;
    return regionQs.every(q => this.state.clearedNodes.includes(q.id));
  },

  getRegionProgress: function(regionId) {
    const regionQs = GameData.questions.filter(q => q.regionId === regionId && !q.isTraining);
    const total = regionQs.length;
    const solved = regionQs.filter(q => this.state.clearedNodes.includes(q.id)).length;
    return { solved, total };
  },

  isRegionUnlocked: function(region) {
    if (region.id === "maturita") {
      return this.getClearedModulesCount() >= GameData.config.modulesRequiredForCore;
    }
    return true; // Všechny moduly jsou dostupné od začátku
  },

  buyBypass: function() {
    if (this.state.hp >= this.state.maxHp) {
      alert("Náboje jsou plné. Dobíjení není třeba.");
      return;
    }
    if (this.state.xp >= GameData.config.bypassCost) {
      this.state.xp -= GameData.config.bypassCost;
      this.state.hp += 1;
      this.saveState();
      this.updateUI();
      this.checkAchievements('buy_life');
      alert(`Náboj dobít. Energie: ${this.state.hp}/${this.state.maxHp}.`);
    } else {
      alert("Nedostatek XP. Vyřešte další úlohy v Síti.");
    }
  },

  generateBlueprint: function() {
    const svg = document.getElementById('blueprint-svg');

    // ── Geometrie prstenu ──────────────────────────────────────────
    const modules = GameData.regions.filter(r => r.id !== 'maturita');
    const N  = modules.length;   // dynamicky podle počtu regionů
    const cx = 375, cy = 350, R = 210;   // střed prstenu a poloměr
    const clearedCount  = this.getClearedModulesCount();
    const required      = GameData.config.modulesRequiredForCore;
    const isMaturitaCleared = this.isRegionCleared('maturita');
    const unlocked      = clearedCount >= required;

    // Polohy uzlů rovnoměrně na kružnici (od 12 hodin po směru hodinových ručiček)
    const nodes = modules.map((_, i) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / N;
      return { x: Math.round(cx + R * Math.cos(a)), y: Math.round(cy + R * Math.sin(a)) };
    });

    // ── SVG obsah ─────────────────────────────────────────────────
    let h = `
      <defs>
        <filter id="gg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="gr" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="gb" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="gc" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
      </defs>

      <!-- Ambientní záře prstenu -->
      <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#002f4a" stroke-width="44" filter="url(#gb)"/>

      <!-- Otáčející se přerušovaný prsten (CERN styl) -->
      <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#00d2ff" stroke-width="1.5"
              stroke-dasharray="7,12" class="spin-ring" opacity="0.7"/>

      <!-- Vnitřní tmavý kruh (oblast MATURITA) -->
      <circle cx="${cx}" cy="${cy}" r="135" fill="#060913" stroke="#0d1e38" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="135" fill="none" stroke="#00d2ff" stroke-width="0.8"
              stroke-dasharray="2,16" opacity="0.18"/>
    `;

    // ── Obloukové spoje mezi sousedními uzly ──────────────────────
    for (let i = 0; i < N; i++) {
      const j  = (i + 1) % N;
      const ni = nodes[i], nj = nodes[j];
      const cA = this.isRegionCleared(modules[i].id);
      const cB = this.isRegionCleared(modules[j].id);
      const lit = cA && cB;
      h += `<path d="M ${ni.x} ${ni.y} A ${R} ${R} 0 0 1 ${nj.x} ${nj.y}"
              fill="none" stroke="${lit ? '#2ecc8a' : '#0b1e2e'}"
              stroke-width="${lit ? 5 : 4}"
              ${lit ? 'filter="url(#gg)"' : ''}/>`;
    }

    // ── Střed: MATURITA display ────────────────────────────────────
    const barW  = 182, barH = 15;
    const barX  = cx - barW / 2;
    const barY  = cy + 24;
    const fillW = Math.round(barW * Math.min(clearedCount / required, 1));
    const mCol  = isMaturitaCleared ? '#7c5cfc' : (unlocked ? '#ff3b6a' : '#e2e8f0');
    const mFilt = unlocked ? 'filter="url(#gr)"' : '';

    h += `
      <text x="${cx}" y="${cy - 62}" fill="#64748b" font-family="DM Mono"
            font-size="9" text-anchor="middle" letter-spacing="3">CÍLOVÝ SYSTÉM</text>
      <text x="${cx}" y="${cy - 34}" fill="${mCol}" font-family="Inter"
            font-size="22" font-weight="800" text-anchor="middle" letter-spacing="4" ${mFilt}>
        ${isMaturitaCleared ? 'DOKONČENO' : 'MATURITA'}
      </text>
      <line x1="${cx-68}" y1="${cy-18}" x2="${cx+68}" y2="${cy-18}" stroke="#1a2544" stroke-width="1"/>
      <text x="${cx}" y="${cy+12}" fill="#64748b" font-family="DM Mono"
            font-size="10" text-anchor="middle">${clearedCount} / ${required} přístupových kódů</text>

      <!-- Progress bar -->
      <rect x="${barX}" y="${barY}" width="${barW}" height="${barH}" rx="4"
            fill="#0c1222" stroke="#1a2544" stroke-width="1"/>
      ${fillW > 0 ? `<rect x="${barX}" y="${barY}" width="${Math.max(fillW, 8)}" height="${barH}" rx="4"
            fill="#2ecc8a" filter="url(#gg)"/>` : ''}
      <text x="${cx}" y="${barY + barH/2 + 1}" fill="${fillW > barW/2 ? '#001a0f' : '#2ecc8a'}"
            font-family="DM Mono" font-size="10" font-weight="bold"
            text-anchor="middle" dominant-baseline="middle">
        ${Math.round((clearedCount / required) * 100)} %
      </text>
    `;

    if (unlocked && !isMaturitaCleared) {
      h += `
        <g onclick="Engine.showRegion('maturita')" style="cursor:pointer">
          <rect x="${cx-100}" y="${barY+24}" width="200" height="34" rx="3"
                fill="rgba(255,59,106,0.12)" stroke="#ff3b6a" stroke-width="1.5" filter="url(#gr)"/>
          <text x="${cx}" y="${barY+41}" fill="#ff3b6a" font-family="Inter"
                font-size="12" font-weight="800" text-anchor="middle" dominant-baseline="middle"
                letter-spacing="2">▶ SPUSTIT MATURITU</text>
        </g>`;
    } else if (isMaturitaCleared) {
      h += `
        <text x="${cx}" y="${barY+44}" fill="#7c5cfc" font-family="DM Mono"
              font-size="11" text-anchor="middle" filter="url(#gc)">SYSTÉM ODEMČEN ✓</text>`;
    }

    // ── Uzly modulů na prstenu ────────────────────────────────────
    const NODE_R = 20;
    const NODE_CIRC = +(2 * Math.PI * NODE_R).toFixed(3); // ~125.664

    modules.forEach((region, idx) => {
      const pos      = nodes[idx];
      const cleared  = this.isRegionCleared(region.id);
      const progress = this.getRegionProgress(region.id);
      const num      = String(region.moduleNum).padStart(2, '0');

      if (cleared) {
        h += `
          <g class="lock-group" data-region="${region.id}" onclick="Engine.showRegion('${region.id}')">
            <circle cx="${pos.x}" cy="${pos.y}" r="${NODE_R}" fill="#051a0c" stroke="#2ecc8a"
                    stroke-width="2.5" filter="url(#gg)"/>
            <text x="${pos.x}" y="${pos.y}" fill="#2ecc8a" font-family="DM Mono"
                  font-size="11" font-weight="bold"
                  text-anchor="middle" dominant-baseline="middle" style="pointer-events:none"
                  filter="url(#gg)">${num}</text>
            <circle id="hl-ring-${region.id}" cx="${pos.x}" cy="${pos.y}" r="${NODE_R+8}"
                    fill="none" stroke="#00d2ff" stroke-width="2" stroke-dasharray="5,3" opacity="0"
                    style="pointer-events:none; transition: opacity 0.2s" filter="url(#gc)"/>
          </g>`;
      } else {
        // Červený základ + zelený oblouk podle progresu
        const arcLength = progress.total > 0
          ? +((progress.solved / progress.total) * NODE_CIRC).toFixed(3)
          : 0;
        const hasProgress = arcLength > 0;

        h += `
          <g class="lock-group" data-region="${region.id}" onclick="Engine.showRegion('${region.id}')">
            <title>${region.name} (${progress.solved}/${progress.total})</title>
            <!-- Červený základ -->
            <circle cx="${pos.x}" cy="${pos.y}" r="${NODE_R}" fill="#160510" stroke="#ff3b6a"
                    stroke-width="2.5" filter="url(#gr)" class="pulse-node"/>
            ${hasProgress ? `
            <!-- Zelený progress oblouk, začíná od 12 hodin -->
            <circle cx="${pos.x}" cy="${pos.y}" r="${NODE_R}" fill="none" stroke="#2ecc8a"
                    stroke-width="2.5" filter="url(#gg)"
                    stroke-dasharray="${arcLength} ${NODE_CIRC}"
                    transform="rotate(-90 ${pos.x} ${pos.y})"/>
            ` : ''}
            <text x="${pos.x}" y="${pos.y}" fill="#ff3b6a" font-family="DM Mono"
                  font-size="11" font-weight="bold"
                  text-anchor="middle" dominant-baseline="middle" style="pointer-events:none"
                  filter="url(#gr)">${num}</text>
            <circle id="hl-ring-${region.id}" cx="${pos.x}" cy="${pos.y}" r="${NODE_R+8}"
                    fill="none" stroke="#00d2ff" stroke-width="2" stroke-dasharray="5,3" opacity="0"
                    style="pointer-events:none; transition: opacity 0.2s" filter="url(#gc)"/>
          </g>`;
      }
    });

    // ── Legenda vpravo ────────────────────────────────────────────
    const lx = 652, ly = 28, lw = 258, eH = 56;
    const lH  = 42 + modules.length * eH + 28;

    h += `
      <rect x="${lx}" y="${ly}" width="${lw}" height="${lH}" rx="3"
            fill="#0c1222" stroke="#1a2544"/>
      <text x="${lx + lw/2}" y="${ly+23}" fill="#00d2ff" font-family="Inter"
            font-size="12" font-weight="800" text-anchor="middle" letter-spacing="1">PŘÍSTUPOVÉ KÓDY</text>
      <line x1="${lx+8}" y1="${ly+31}" x2="${lx+lw-8}" y2="${ly+31}" stroke="#1a2544"/>`;

    modules.forEach((region, idx) => {
      const cleared   = this.isRegionCleared(region.id);
      const progress  = this.getRegionProgress(region.id);
      const col       = cleared ? '#2ecc8a' : '#ff3b6a';
      const status    = cleared
        ? '✓ HACKNUTO'
        : (progress.solved > 0 ? `${progress.solved}/${progress.total} vyřešeno` : '▶ FIREWALL AKTIVNÍ');
      const num    = String(region.moduleNum !== undefined ? region.moduleNum : idx).padStart(2, '0');
      const sName  = region.name.replace(/^\d+: /, '');
      const ey     = ly + 36 + idx * eH;

      // Mini progress oblouk v legendě (r=12, obvod ~75.398)
      const LEGEND_R    = 12;
      const LEGEND_CIRC = +(2 * Math.PI * LEGEND_R).toFixed(3);
      const legendArc   = progress.total > 0
        ? +((progress.solved / progress.total) * LEGEND_CIRC).toFixed(3)
        : 0;

      h += `
        <g data-legend-item="${region.id}" onclick="Engine.showRegion('${region.id}')" style="cursor:pointer">
          <!-- Hitbox: pokrývá celý řádek; fill musí být nenulový, aby SVG registrovalo pointer events -->
          <rect x="${lx+4}" y="${ey+1}" width="${lw-8}" height="51" rx="2" fill="rgba(0,0,0,0.001)"/>
          <!-- Highlight: menší, zarovnaný na obsah řádku (texty jsou na ey+9 a ey+23) -->
          <rect id="hl-legend-${region.id}" x="${lx+5}" y="${ey-6}" width="${lw-10}" height="38" rx="2"
                fill="rgba(0,210,255,0.07)" stroke="#00d2ff" stroke-width="1.2" opacity="0"
                style="pointer-events:none; transition: opacity 0.2s"/>
          <circle cx="${lx+16}" cy="${ey+14}" r="${LEGEND_R}" fill="${col}"
                  ${cleared ? 'filter="url(#gg)"' : ''}/>
          ${(!cleared && legendArc > 0) ? `
          <circle cx="${lx+16}" cy="${ey+14}" r="${LEGEND_R}" fill="none" stroke="#2ecc8a"
                  stroke-width="2.5" filter="url(#gg)"
                  stroke-dasharray="${legendArc} ${LEGEND_CIRC}"
                  transform="rotate(-90 ${lx+16} ${ey+14})"/>
          ` : ''}
          <text x="${lx+16}" y="${ey+14}" fill="white" font-family="DM Mono" font-size="10"
                font-weight="bold" text-anchor="middle" dominant-baseline="middle"
                style="pointer-events:none">${num}</text>
          <text x="${lx+36}" y="${ey+9}"  fill="${col}" font-family="DM Mono" font-size="12"
                font-weight="bold" style="pointer-events:none">${sName}</text>
          <text x="${lx+36}" y="${ey+23}" fill="${col}" font-family="DM Mono" font-size="10"
                opacity="0.7" style="pointer-events:none">${status}</text>
        </g>`;
      if (idx < modules.length - 1) {
        h += `<line x1="${lx+8}" y1="${ey+38}" x2="${lx+lw-8}" y2="${ey+38}"
                    stroke="#1a2544" stroke-width="0.5" opacity="0.4"/>`;
      }
    });

    h += `<text x="${lx+lw/2}" y="${ly+lH-10}" fill="#64748b" font-family="DM Mono"
                font-size="9" text-anchor="middle">${clearedCount}/${required} pro přístup k MATURITĚ</text>`;

    svg.innerHTML = h;
    this.renderXPBar();

    // ── Hover: propojení uzlů ↔ legenda ──────────────────────────────
    modules.forEach(region => {
      const ringEl   = svg.querySelector(`[data-region="${region.id}"]`);
      const legendEl = svg.querySelector(`[data-legend-item="${region.id}"]`);
      const hlRing   = svg.querySelector(`#hl-ring-${region.id}`);
      const hlLgnd   = svg.querySelector(`#hl-legend-${region.id}`);
      const show = () => {
        if (hlRing) hlRing.style.opacity = '1';
        if (hlLgnd) hlLgnd.style.opacity = '1';
      };
      const hide = () => {
        if (hlRing) hlRing.style.opacity = '0';
        if (hlLgnd) hlLgnd.style.opacity = '0';
      };
      if (ringEl)   { ringEl.addEventListener('mouseenter',   show); ringEl.addEventListener('mouseleave',   hide); }
      if (legendEl) { legendEl.addEventListener('mouseenter', show); legendEl.addEventListener('mouseleave', hide); }
    });
  },

  showRegion: function(regionId) {
    this.currentRegionId = regionId;
    const region = GameData.regions.find(r => r.id === regionId);
    const questions = GameData.questions.filter(q => q.regionId === regionId && !q.isTraining);

    document.getElementById('region-detail-name').innerText = region.name;
    const list = document.getElementById('region-encounters');
    list.innerHTML = '';

    if(questions.length === 0) {
      list.innerHTML = '<p class="text-muted">Systém nenašel žádné hrozby v tomto sektoru.</p>';
    } else {
      questions.forEach((q, i) => {
        const isCleared = this.state.clearedNodes.includes(q.id);
        const card = document.createElement('div');
        card.className = 'encounter-card' + (isCleared ? ' cleared' : '');
        if (!isCleared) {
          card.onclick = () => Arena.startEncounter(q.id);
        } else {
          card.onclick = () => Arena.startReview(q.id);
          card.style.cursor = 'pointer';
        }

        card.innerHTML = `
          <div class="enc-info">
            <h3>${isCleared ? '[HACKED ✓] ' : ''}${q.monsterName}</h3>
            <span class="enc-reward">Auth: ${q.reward.xp || 0}</span>
          </div>
          <div class="enc-action">${isCleared ? '> OPAKOVAT' : '> HACKNOUT'}</div>
        `;
        list.appendChild(card);
      });
    }
    this.switchView('view-region');
  },

  returnToRegion: function() {
    Arena.reviewMode = false;
    if(this.currentRegionId) this.showRegion(this.currentRegionId);
    else this.switchView('view-map');
  },

  addResources: function(xpEarned) {
    if(!xpEarned) return;
    const oldLevel = this.getLevelInfo(this.state.xp).current.level;
    this.state.xp += xpEarned;
    const newLevel = this.getLevelInfo(this.state.xp).current.level;
    this.saveState();
    setTimeout(() => {
      this.updateUI();
      if (newLevel > oldLevel) this.showLevelUp(LEVELS[newLevel]);
    }, 400);
  },

  saveState: function() { localStorage.setItem(this.saveKey || 'axioma_save', JSON.stringify(this.state)); },
  loadState: function() {
    const saved = localStorage.getItem(this.saveKey || 'axioma_save');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migrace starých uložení — doplnit chybějící pole
      this.state = Object.assign({ achievements: [], streak: 0, deathsPerQuestion: {}, errorsInRegion: {}, lastPlayed: {}, completedTrainings: [], trainingLaunchedInRegion: {}, cleanRegionCount: 0, hintedQuestions: [], celebratedModules: [] }, parsed);
      // Migrace: cap maxHp na 5 (starší uložení mohla mít 6)
      if (this.state.maxHp > 5) { this.state.maxHp = 5; this.state.hp = Math.min(this.state.hp, 5); }
    } else {
      this.state.xp = GameData.config.startingXP || 0;
    }
  },

  resetGame: function() {
    if(confirm("Opravdu chcete iniciovat System Wipe? Všechna data budou smazána.")) {
      localStorage.removeItem(this.saveKey || 'axioma_save');
      this.state = { xp: 0, clearedNodes: [], hp: 5, maxHp: 5, achievements: [], streak: 0, deathsPerQuestion: {}, errorsInRegion: {}, lastPlayed: {}, completedTrainings: [], trainingLaunchedInRegion: {}, cleanRegionCount: 0, hintedQuestions: [], celebratedModules: [] };
      this.updateUI();
      this.generateBlueprint();
    }
  },

  // ── MODULE CLEARED CELEBRATION ───────────────────────────────────
  showModuleClearedPanel: function(regionId) {
    const region = GameData.regions.find(r => r.id === regionId);
    const moduleName = region ? region.name : regionId.toUpperCase();
    const moduleIdx = (GameData.regions.findIndex(r => r.id === regionId) + 1).toString().padStart(2, '0');
    const totalModuleXP = GameData.questions
      .filter(q => q.regionId === regionId && !q.isTraining)
      .reduce((sum, q) => sum + (q.reward.xp || 0), 0);
    const { current, next } = this.getLevelInfo(this.state.xp);
    const levelPct = next
      ? Math.round(((this.state.xp - current.xp) / (next.xp - current.xp)) * 100)
      : 100;

    // CSS inject (jednorázový)
    if (!document.getElementById('mcp-style')) {
      const style = document.createElement('style');
      style.id = 'mcp-style';
      style.textContent = `
        #mcp-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.88);
          display: flex; align-items: center; justify-content: center;
          animation: mcpFadeIn 0.25s ease forwards;
          cursor: pointer;
        }
        @keyframes mcpFadeIn { from { opacity:0 } to { opacity:1 } }
        #mcp-panel {
          background: #060d06;
          border: 2px solid #2ecc8a;
          box-shadow: 0 0 40px rgba(46,204,138,0.25), inset 0 0 60px rgba(0,0,0,0.6);
          width: min(520px, 90vw);
          font-family: 'Courier New', monospace;
          font-size: 0.88rem;
          color: #2ecc8a;
          animation: mcpDrop 0.35s cubic-bezier(0.22,1,0.36,1) forwards;
          cursor: default;
        }
        @keyframes mcpDrop {
          from { opacity:0; transform: translateY(-36px) }
          to   { opacity:1; transform: translateY(0) }
        }
        .mcp-header {
          padding: 14px 20px 10px;
          border-bottom: 1px solid #1a4a2e;
          display: flex; align-items: center; justify-content: space-between;
        }
        .mcp-header-title {
          font-size: 1.05rem; font-weight: bold; letter-spacing: 0.1em;
          animation: mcpBlink 0.55s step-end 6;
        }
        @keyframes mcpBlink {
          0%,100% { color:#2ecc8a } 50% { color:#00ff41 }
        }
        .mcp-header-ok {
          font-size: 0.72rem; color: #1a7a4a;
          border: 1px solid #1a4a2e; padding: 2px 8px;
        }
        .mcp-body { padding: 18px 20px; }
        .mcp-row {
          display: flex; align-items: baseline;
          margin-bottom: 6px; line-height: 1.6;
        }
        .mcp-label { color: #1a7a4a; min-width: 120px; flex-shrink: 0; }
        .mcp-value { color: #2ecc8a; }
        .mcp-value.highlight { color: #f7b84f; font-weight: bold; }
        .mcp-value.accent { color: #00ff41; }
        .mcp-divider {
          border: none; border-top: 1px solid #1a4a2e;
          margin: 12px 0;
        }
        .mcp-bar-track {
          flex: 1; height: 10px;
          background: #0d1f0d;
          border: 1px solid #1a4a2e;
          position: relative; overflow: hidden;
        }
        .mcp-bar-fill {
          height: 100%; background: #2ecc8a;
          box-shadow: 0 0 8px rgba(46,204,138,0.6);
          transition: width 0.8s ease;
          width: 0%;
        }
        .mcp-bar-pct {
          min-width: 38px; text-align: right; margin-left: 10px;
          color: #1a7a4a; font-size: 0.82rem;
        }
        .mcp-cursor {
          display: inline-block;
          animation: mcpCursorBlink 0.5s step-end infinite;
        }
        @keyframes mcpCursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        .mcp-footer { padding: 10px 20px 16px; }
        .mcp-btn {
          display: block; width: 100%;
          background: transparent; border: 1px solid #2ecc8a;
          color: #2ecc8a; font-family: 'Courier New', monospace;
          font-size: 0.88rem; letter-spacing: 0.08em;
          padding: 9px 0; cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .mcp-btn:hover { background: #1a4a2e; color: #00ff41; }
        .mcp-typewriter { min-height: 1.4em; }
      `;
      document.head.appendChild(style);
    }

    // Sestavit panel HTML
    const overlay = document.createElement('div');
    overlay.id = 'mcp-overlay';
    overlay.innerHTML = `
      <div id="mcp-panel" onclick="event.stopPropagation()">
        <div class="mcp-header">
          <span class="mcp-header-title">FIREWALL NEUTRALIZOVÁN</span>
          <span class="mcp-header-ok">[ OK ]</span>
        </div>
        <div class="mcp-body">
          <div class="mcp-row">
            <span class="mcp-label">MODUL</span>
            <span class="mcp-value accent">_${moduleIdx} // ${moduleName}</span>
          </div>
          <div class="mcp-row">
            <span class="mcp-label">STATUS</span>
            <span class="mcp-value accent">██ PROLOMENO ██</span>
          </div>
          <hr class="mcp-divider">
          <div class="mcp-row">
            <span class="mcp-label">XP V MODULU</span>
            <span class="mcp-value highlight" id="mcp-xp-counter">0</span>
          </div>
          <div class="mcp-row">
            <span class="mcp-label">ÚROVEŇ</span>
            <span class="mcp-value">${current.name}</span>
          </div>
          <div class="mcp-row" style="align-items:center">
            <span class="mcp-label">POTENCIÁL</span>
            <div class="mcp-bar-track">
              <div class="mcp-bar-fill" id="mcp-lvl-bar"></div>
            </div>
            <span class="mcp-bar-pct" id="mcp-lvl-pct">0 %</span>
          </div>
          <hr class="mcp-divider">
          <div class="mcp-typewriter" id="mcp-typewriter">&gt; <span class="mcp-cursor">█</span></div>
        </div>
        <div class="mcp-footer">
          <button class="mcp-btn" id="mcp-continue-btn">&gt; POKRAČOVAT →</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Dismiss
    const dismiss = () => {
      overlay.style.animation = 'mcpFadeIn 0.2s ease reverse forwards';
      setTimeout(() => { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 200);
    };
    overlay.addEventListener('click', dismiss);
    document.getElementById('mcp-continue-btn').addEventListener('click', (e) => { e.stopPropagation(); dismiss(); });

    // XP counter animace
    const xpEl = document.getElementById('mcp-xp-counter');
    let xpAnim = 0;
    const xpStep = Math.max(1, Math.ceil(totalModuleXP / 40));
    const xpTimer = setInterval(() => {
      xpAnim = Math.min(xpAnim + xpStep, totalModuleXP);
      xpEl.textContent = '+' + xpAnim + ' XP';
      if (xpAnim >= totalModuleXP) clearInterval(xpTimer);
    }, 30);

    // Progress bar animace (spustit po 600ms)
    setTimeout(() => {
      const bar = document.getElementById('mcp-lvl-bar');
      const pct = document.getElementById('mcp-lvl-pct');
      if (bar) bar.style.width = levelPct + '%';
      if (pct) pct.textContent = levelPct + ' %';
    }, 600);

    // Typewriter
    const tw = document.getElementById('mcp-typewriter');
    const msg = '> čekám na potvrzení...';
    let twIdx = 0;
    setTimeout(() => {
      const twTimer = setInterval(() => {
        if (!document.getElementById('mcp-typewriter')) { clearInterval(twTimer); return; }
        tw.innerHTML = msg.slice(0, twIdx) + '<span class="mcp-cursor">█</span>';
        twIdx++;
        if (twIdx > msg.length) clearInterval(twTimer);
      }, 45);
    }, 800);
  },

  // DEV OVERRIDES
  devUnlockAll: function() {
    if(confirm("DEV MODE: Chcete odemknout všechny uzly na mapě?")) {
      GameData.questions.forEach(q => {
        if (!q.isTraining && !this.state.clearedNodes.includes(q.id)) {
          this.state.clearedNodes.push(q.id);
        }
      });
      this.state.xp += 1000;
      this.saveState();
      this.updateUI();
      this.generateBlueprint();
    }
  }
};

const Arena = {
  currentQuestion: null,
  reviewMode: false,
  hintUsedThisEncounter: false,
  lockdownMode: false,

  startEncounter: function(questionId) {
    this.reviewMode = false;
    this.hintUsedThisEncounter = Engine.state.hintedQuestions.includes(questionId);
    this.currentQuestion = GameData.questions.find(q => q.id === questionId);
    // Pokud jde o trénink spuštěný z firewallu, zaznamenej do regionu
    if (this.currentQuestion && this.currentQuestion.isTraining && Engine.currentRegionId) {
      Engine.state.trainingLaunchedInRegion[Engine.currentRegionId] = true;
      Engine.saveState();
    }
    if (!this.currentQuestion) return;
    Engine.switchView('view-arena');
    this.resetUI();
    this.renderQuestion();
  },

  startReview: function(questionId) {
    this.reviewMode = true;
    this.currentQuestion = GameData.questions.find(q => q.id === questionId);
    if (!this.currentQuestion) return;
    Engine.checkAchievements('review');
    Engine.switchView('view-arena');
    this.resetUI();
    this.renderQuestion();
  },

  resetUI: function() {
    document.getElementById('arena-feedback').style.display = 'none';
    document.getElementById('arena-feedback').className = 'sys-alert';
    document.getElementById('btn-next-fight').style.display = 'none';
    document.getElementById('arena-training-controls').innerHTML = '';
    document.getElementById('monster-hp-fill').style.width = '100%';
  },

  renderQuestion: function() {
    const q = this.currentQuestion;
    document.getElementById('monster-name').innerText = q.monsterName;
    document.getElementById('monster-region').innerText =
      this.reviewMode ? "OPAKOVÁNÍ" : (q.isTraining ? "SIMULACE" : "OSTRÝ PROVOZ");
    document.getElementById('monster-hp-fill').style.backgroundColor = q.visual_color;

    if (q.trainingTasks && q.trainingTasks.length > 0) {
      document.getElementById('arena-training-controls').innerHTML = `
        <button onclick="Arena.startEncounter('${q.trainingTasks[0]}')" class="btn-secondary w-full">
          > SPUSTIT BEZPEČNOU SIMULACI NANEČISTO
        </button>
      `;
    }

    let stepsHTML = '';
    if (q.steps && q.steps.length > 0) {
      stepsHTML = '<div class="training-steps">';
      q.steps.forEach(step => {
        stepsHTML += `<details class="step-detail"><summary class="step-summary">${step.trigger}</summary><div class="step-content">${step.content}</div></details>`;
      });
      stepsHTML += '</div>';
    }

    let hintsHTML = '';
    if (!q.isTraining && q.hints && q.hints.length > 0) {
      const bonusXP = Math.max(2, Math.round((q.reward?.xp || 10) * 0.25));
      const hintItems = q.hints.map((h, i) =>
        `<p style="margin:5px 0"><span style="color:var(--neon-cyan);font-weight:bold;">${i+1}.</span> ${h}</p>`
      ).join('');
      hintsHTML = `
        <div id="hint-wrapper" style="margin-top:8px;">
          <div id="hint-warning" style="display:none;background:rgba(247,184,79,0.08);border-left:3px solid #f7b84f;padding:10px 12px;border-radius:4px;margin-bottom:6px;">
            <div style="color:#f7b84f;font-size:0.82em;font-weight:bold;margin-bottom:8px;letter-spacing:.03em;">[VAROVÁNÍ] Otevřením nápovědy přijdeš o bonus <strong>+${bonusXP} XP</strong> za čistý průchod.</div>
            <div style="display:flex;gap:8px;">
              <button onclick="Arena.confirmHint()" class="btn-secondary" style="font-size:0.78em;padding:4px 12px;">Zobrazit nápovědu</button>
              <button onclick="Arena.dismissHintWarning()" class="btn-secondary" style="font-size:0.78em;padding:4px 12px;">Zkusím sám</button>
            </div>
          </div>
          <details class="step-detail" id="hint-details" style="border-left-color:var(--neon-purple)">
            <summary class="step-summary" style="color:var(--neon-purple)" id="hint-summary">> NÁPOVĚDA &nbsp;<span style="font-size:0.75em;opacity:0.7;">(použití = −${bonusXP} XP bonus)</span></summary>
            <div class="step-content">${hintItems}</div>
          </details>
        </div>`;
    }

    let answerHTML = `<div class="choices" id="arena-choices">` +
      q.choices.map((c, i) =>
        `<button class="choice-btn" onclick="Arena.submitClosed('${c.value}', this)">
          <span class="choice-letter">[${String.fromCharCode(65+i)}]</span>
          <span class="choice-math">${c.label}</span>
        </button>`
      ).join('') + `</div>`;

    const reviewBanner = this.reviewMode
      ? `<div style="margin-bottom:12px;padding:6px 12px;border-left:3px solid #7c5cfc;background:rgba(124,92,252,0.08);font-family:'DM Mono',monospace;font-size:11px;color:#7c5cfc;letter-spacing:0.05em;">
           ⟳ OPAKOVÁNÍ — bez zisku XP, bez ztráty pokusů
         </div>`
      : '';

    // Diagram: u tréninkových otázek s kroky schovat za klik (výjimka: showDiagramImmediately)
    const hideDiagram = q.isTraining && q.diagram && q.steps && q.steps.length > 0 && !q.showDiagramImmediately;
    const diagramHTML = q.diagram && !hideDiagram
      ? `<div class="card-diagram" style="margin: 20px 0;">${q.diagram}</div>`
      : '';
    const diagramStepHTML = hideDiagram
      ? `<details class="step-detail" style="margin-top:6px"><summary class="step-summary">> Grafické znázornění</summary><div class="step-content" style="padding-top:8px">${q.diagram}</div></details>`
      : '';

    document.getElementById('arena-question-container').innerHTML = `
      ${reviewBanner}
      ${q.question ? `<div class="card-question">${q.question}</div>` : ''}
      ${diagramHTML}
      ${q.formula ? `<div class="card-formula">${q.formula}</div>` : ''}
      ${stepsHTML}
      ${diagramStepHTML}
      ${hintsHTML}
      ${q.instruction ? `<div class="text-muted mb-4">${q.instruction}</div>` : ''}
      ${answerHTML}
    `;
    renderMath();

    // Intercept kliknutí na nápovědu — zobraz varování místo přímého otevření
    const hintDetails = document.getElementById('hint-details');
    if (hintDetails) {
      const summary = hintDetails.querySelector('summary');
      summary.addEventListener('click', function(e) {
        if (!hintDetails.open) {
          e.preventDefault();
          document.getElementById('hint-warning').style.display = 'block';
        }
      });
    }
  },

  submitClosed: function(value, btnElement) {
    if (btnElement.disabled) return;
    const q = this.currentQuestion;
    const isCorrect = (value === q.correctAnswer);
    const customFeedback = q.choices.find(c => c.value === value)?.feedback || "Chybná odpověď.";

    if (isCorrect) {
      // Správná odpověď: zablokuj vše, označ zeleně, vyřeš
      document.querySelectorAll('#arena-choices .choice-btn').forEach(btn => btn.disabled = true);
      btnElement.classList.add('correct');
      this.resolveFight(true, customFeedback);

    } else if (q.isTraining) {
      // Špatná odpověď v tréninku: jen toto tlačítko zamkni červeně, ostatní zůstanou aktivní
      btnElement.disabled = true;
      btnElement.classList.add('wrong');
      const fb = document.getElementById('arena-feedback');
      fb.style.display = 'block';
      fb.className = 'sys-alert wrong-fb';
      fb.innerHTML = `<strong>[SIMULACE: CHYBNÁ VOLBA]</strong><br><em>Log:</em> ${customFeedback.replace(/^(Přístup odepřen\.|Chyba syntaxe\.)\s*/i, '')}`;
      const nextBtn = document.getElementById('btn-next-fight');
      nextBtn.innerText = '> RESTART SIMULACE';
      nextBtn.onclick = () => { Arena.resetUI(); Arena.renderQuestion(); };
      nextBtn.style.display = 'inline-block';
      renderMath();

    } else {
      // Špatná odpověď v ostrém provozu: zablokuj vše, standardní průběh
      document.querySelectorAll('#arena-choices .choice-btn').forEach(btn => btn.disabled = true);
      btnElement.classList.add('wrong');
      this.resolveFight(false, customFeedback);
    }
  },

  resolveFight: function(isCorrect, feedbackMessage) {
    const fb = document.getElementById('arena-feedback');
    fb.style.display = 'block';
    const nextBtn = document.getElementById('btn-next-fight');
    document.getElementById('arena-training-controls').innerHTML = '';

    if (isCorrect) {
      document.getElementById('monster-hp-fill').style.width = '0%';
      fb.className = 'sys-alert correct-fb';

      if (this.currentQuestion.isTraining) {
        Engine.checkAchievements('training_correct');
        if (this.lockdownMode) {
          // Povinný trénink dokončen — teprve teď resetuj HP (částečně: 3/5)
          this.lockdownMode = false;
          Engine.state.hp = 3;
          Engine.saveState();
          Engine.updateUI();
          Arena.setEndConnectionVisible(true);
          fb.innerHTML = `<strong>[SIMULACE DOKONČENA — PŘÍSTUP ČÁSTEČNĚ OBNOVEN]</strong><br>Energie doplněna na 3 náboje. Příště dobij náboj včas.<br><em>${feedbackMessage}</em>`;
          nextBtn.innerText = "> ZKUSIT FIREWALL ZNOVU";
          nextBtn.onclick = () => Arena.startEncounter(this.currentQuestion.firewallId);
        } else {
          fb.innerHTML = `<strong>[SIMULACE ÚSPĚŠNÁ]</strong><br>${feedbackMessage}`;
          nextBtn.innerText = "> NÁVRAT K HLAVNÍMU FIREWALLU";
          nextBtn.onclick = () => Arena.startEncounter(this.currentQuestion.firewallId);
        }
      } else if (this.reviewMode) {
        fb.innerHTML = `<strong>[OPAKOVÁNÍ ÚSPĚŠNÉ]</strong><br>${feedbackMessage}`;
        nextBtn.innerText = "> ZPĚT NA PŘEHLED";
        nextBtn.onclick = () => Engine.returnToRegion();
      } else {
        const baseXP = this.currentQuestion.reward.xp;
        const bonusXP = !this.hintUsedThisEncounter ? Math.max(2, Math.round(baseXP * 0.25)) : 0;
        const bonusText = bonusXP > 0
          ? `<br><span style="color:var(--neon-cyan);font-size:0.88em;">+${bonusXP} XP bonus — čistý průchod bez nápovědy.</span>`
          : '';
        fb.innerHTML = `<strong>[FIREWALL PROLOMEN]</strong><br>${feedbackMessage}${bonusText}`;
        if(!Engine.state.clearedNodes.includes(this.currentQuestion.id)) {
          Engine.state.clearedNodes.push(this.currentQuestion.id);
          Engine.state.lastPlayed[this.currentQuestion.id] = Date.now();
        }
        Engine.state.streak = (Engine.state.streak || 0) + 1;
        Engine.addResources(baseXP + bonusXP);
        Engine.checkAchievements('correct');
        Engine.checkAchievements('xp_change');
        if (Engine.isRegionCleared(Engine.currentRegionId)) Engine.checkAchievements('region_clear');
        nextBtn.innerText = "> POKRAČOVAT";
        nextBtn.onclick = () => Engine.returnToRegion();
      }
      nextBtn.style.display = 'inline-block';

    } else {
      fb.className = 'sys-alert wrong-fb';

      if (this.currentQuestion.isTraining) {
        fb.innerHTML = `<strong>[SIMULACE SELHALA - POKUSY NEODEČTENY]</strong><br><em>Log:</em> ${feedbackMessage.replace(/^(Přístup odepřen\.|Chyba syntaxe\.)\s*/i, '')}`;
        nextBtn.innerText = "> RESTART SIMULACE";
        nextBtn.onclick = () => { Arena.resetUI(); Arena.renderQuestion(); };
        nextBtn.style.display = 'inline-block';
      } else if (this.reviewMode) {
        fb.innerHTML = `<strong>[CHYBA V OPAKOVÁNÍ]</strong><br><em>Log:</em> ${feedbackMessage.replace(/^(Přístup odepřen\.|Chyba syntaxe\.)\s*/i, '')}`;
        nextBtn.innerText = "> ZKUSIT ZNOVU";
        nextBtn.onclick = () => { Arena.resetUI(); Arena.renderQuestion(); };
        nextBtn.style.display = 'inline-block';
      } else {
        Engine.state.hp -= 1;
        Engine.state.streak = 0;
        Engine.checkAchievements('wrong');
        Engine.updateUI();

        if (Engine.state.hp <= 0) {
          // SYSTEM LOCKDOWN — dramatická obrazovka, -50 XP, přesměrování na trénink
          this.showLockdown(this.currentQuestion, feedbackMessage);
          return;
        } else {
          let trainingHtml = '';
          if (this.currentQuestion.trainingTasks && this.currentQuestion.trainingTasks.length > 0) {
            trainingHtml = `<br><br><button onclick="Arena.startEncounter('${this.currentQuestion.trainingTasks[0]}')" class="btn-secondary w-full">> SPUSTIT BEZPEČNOU SIMULACI</button>`;
          }
          const logFeedback = feedbackMessage.replace(/^(Přístup odepřen\.|Chyba syntaxe\.)\s*/i, '');
          fb.innerHTML = `<strong>[PŘÍSTUP ODEPŘEN]</strong><br><em>Log:</em> ${logFeedback}${trainingHtml}`;
          nextBtn.innerText = "> ZKUSIT ZNOVU";
          nextBtn.onclick = () => { Arena.resetUI(); Arena.renderQuestion(); };
          nextBtn.style.display = 'inline-block';
        }
      }
    }

    // Renderuj LaTeX ve feedback textu
    renderMath();
  },

  devInstaWin: function() {
    if(document.getElementById('btn-next-fight').style.display === 'inline-block') return;
    document.querySelectorAll('#arena-choices .choice-btn').forEach(btn => btn.disabled = true);
    this.resolveFight(true, "[DEV OVERRIDE] Ochrana úspěšně obejita bez výpočtu.");
  },

  // ── SYSTEM LOCKDOWN ──────────────────────────────────────────────
  showLockdown: function(question, feedbackMessage) {
    const PENALTY = 50;
    Engine.state.xp = Math.max(0, Engine.state.xp - PENALTY);
    Engine.saveState();
    Engine.updateUI();

    Arena.setEndConnectionVisible(false);
    document.getElementById('arena-feedback').style.display = 'none';
    document.getElementById('btn-next-fight').style.display = 'none';
    document.getElementById('arena-training-controls').innerHTML = '';

    const hasTraining = question.trainingTasks && question.trainingTasks.length > 0;
    const container = document.getElementById('arena-question-container');
    container.innerHTML = `
      <div class="lockdown-screen">
        <div class="lockdown-header">
          <div class="lockdown-tag">[ CRITICAL FAILURE ]</div>
          <div class="lockdown-title">SYSTEM LOCKDOWN</div>
        </div>
        <div class="lockdown-codes" id="lockdown-codes"></div>
        <div class="lockdown-penalty">
          <span class="lockdown-penalty-label">XP DEDUCTED</span>
          <span class="lockdown-penalty-value">−${PENALTY} XP</span>
        </div>
        <div class="lockdown-reason"><em>Kritická chyba:</em> ${feedbackMessage}</div>
        <div class="lockdown-actions" id="lockdown-actions" style="opacity:0;pointer-events:none;transition:opacity 0.5s">
          ${hasTraining
            ? `<button class="btn-primary w-full" onclick="Arena.lockdownToTraining('${question.trainingTasks[0]}')">
                 > SPUSTIT POVINNOU SIMULACI
               </button>
               <div class="lockdown-hint">Po dokončení simulace bude přístup obnoven.</div>`
            : `<button class="btn-primary w-full" onclick="Arena.lockdownRetry()">
                 > OBNOVIT PŘÍSTUP A ZKUSIT ZNOVU
               </button>`
          }
        </div>
      </div>`;

    this.animateLockdownCodes(() => {
      const actions = document.getElementById('lockdown-actions');
      if (actions) { actions.style.opacity = '1'; actions.style.pointerEvents = 'auto'; }
    });
  },

  animateLockdownCodes: function(onComplete) {
    const errorLines = [
      'ERR_0x4A2F: FIREWALL_BREACH_DETECTED',
      'STACK_TRACE: auth_module.js:' + (Math.floor(Math.random() * 900) + 100),
      'EXCEPTION_CODE: 0xC000' + Math.random().toString(16).slice(2,6).toUpperCase(),
      'ACCESS_DENIED: insufficient_auth_level',
      'KERNEL_FAULT: invalid_memory_reference',
      'ERR_0x7FFF: BYPASS_SEQUENCE_FAILED',
      'ROLLBACK_INITIATED: reverting_session_state',
      'SECURITY_PROTOCOL: lockdown_v2_engaged',
      'AUTH_TOKENS: invalidated_and_purged',
      'SESSION_0x' + Math.random().toString(16).slice(2,10).toUpperCase() + ': TERMINATED',
    ];
    const el = document.getElementById('lockdown-codes');
    if (!el) { onComplete(); return; }
    let i = 0;
    const interval = setInterval(() => {
      if (!el || i >= errorLines.length) { clearInterval(interval); onComplete(); return; }
      const line = document.createElement('div');
      line.className = 'lockdown-code-line';
      line.textContent = errorLines[i];
      el.appendChild(line);
      el.scrollTop = el.scrollHeight;
      i++;
    }, 110);
  },

  confirmHint: function() {
    this.hintUsedThisEncounter = true;
    if (this.currentQuestion && !Engine.state.hintedQuestions.includes(this.currentQuestion.id)) {
      Engine.state.hintedQuestions.push(this.currentQuestion.id);
      Engine.saveState();
    }
    document.getElementById('hint-warning').style.display = 'none';
    document.getElementById('hint-details').open = true;
  },

  dismissHintWarning: function() {
    document.getElementById('hint-warning').style.display = 'none';
  },

  setEndConnectionVisible: function(visible) {
    const btn = document.getElementById('btn-end-connection');
    if (btn) btn.style.display = visible ? '' : 'none';
  },

  lockdownToTraining: function(trainingId) {
    Arena.lockdownMode = true;
    Arena.setEndConnectionVisible(false);
    Arena.startEncounter(trainingId);
  },

  lockdownRetry: function() {
    Engine.state.hp = 3;
    Engine.saveState();
    Engine.updateUI();
    Arena.setEndConnectionVisible(true);
    Arena.resetUI();
    Arena.renderQuestion();
  },
};

window.onload = () => Engine.init();
