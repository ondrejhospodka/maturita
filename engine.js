function renderMath() {
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise().catch((err) => console.error('MathJax error:', err));
  } else { setTimeout(renderMath, 100); }
}

const Engine = {
  state: { xp: 0, clearedNodes: [], hp: 5, maxHp: 5 },
  currentRegionId: null,

  init: function() {
    this.loadState();
    this.updateUI();
    this.switchView('view-map');
  },

  switchView: function(viewId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    if(viewId === 'view-map') this.generateBlueprint();
    if(viewId === 'view-arena') renderMath();
  },

  updateUI: function() {
    const hpContainer = document.getElementById('res-hp');
    let attempts = '';
    for (let i = 0; i < this.state.maxHp; i++) {
      attempts += `<span class="attempt-box${i < this.state.hp ? '' : ' lost'}"></span>`;
    }
    hpContainer.innerHTML = `BYPASS: ${attempts}`;
    document.getElementById('res-xp').innerText = this.state.xp;
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
    if (this.state.xp >= GameData.config.bypassCost) {
      this.state.xp -= GameData.config.bypassCost;
      this.state.maxHp += 1;
      this.state.hp = this.state.maxHp;
      this.saveState();
      this.updateUI();
      alert(`Nákup potvrzen. Maximální počet pokusů zvýšen na ${this.state.maxHp}.`);
    } else {
      alert("Nedostatek AUTH. Vyřešte další bezpečnostní hrozby v Síti.");
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
        // Plně zelený uzel – beze změny
        h += `
          <circle cx="${pos.x}" cy="${pos.y}" r="${NODE_R}" fill="#051a0c" stroke="#2ecc8a"
                  stroke-width="2.5" filter="url(#gg)"/>
          <text x="${pos.x}" y="${pos.y}" fill="#2ecc8a" font-family="DM Mono"
                font-size="11" font-weight="bold"
                text-anchor="middle" dominant-baseline="middle">${num}</text>`;
      } else {
        // Červený základ + zelený oblouk podle progresu
        const arcLength = progress.total > 0
          ? +((progress.solved / progress.total) * NODE_CIRC).toFixed(3)
          : 0;
        const hasProgress = arcLength > 0;

        h += `
          <g class="lock-group" onclick="Engine.showRegion('${region.id}')">
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
                  text-anchor="middle" dominant-baseline="middle" style="pointer-events:none">${num}</text>
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
        ? '✓ SPLNĚNO'
        : (progress.solved > 0 ? `${progress.solved}/${progress.total} vyřešeno` : '▶ DOSTUPNÝ');
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
        <circle cx="${lx+16}" cy="${ey+14}" r="${LEGEND_R}" fill="${col}"
                ${cleared ? 'filter="url(#gg)"' : ''}/>
        ${(!cleared && legendArc > 0) ? `
        <circle cx="${lx+16}" cy="${ey+14}" r="${LEGEND_R}" fill="none" stroke="#2ecc8a"
                stroke-width="2.5" filter="url(#gg)"
                stroke-dasharray="${legendArc} ${LEGEND_CIRC}"
                transform="rotate(-90 ${lx+16} ${ey+14})"/>
        ` : ''}
        <text x="${lx+16}" y="${ey+14}" fill="white" font-family="DM Mono" font-size="10"
              font-weight="bold" text-anchor="middle" dominant-baseline="middle">${num}</text>
        <text x="${lx+36}" y="${ey+9}"  fill="${col}" font-family="DM Mono" font-size="12" font-weight="bold">${sName}</text>
        <text x="${lx+36}" y="${ey+23}" fill="${col}" font-family="DM Mono" font-size="10" opacity="0.7">${status}</text>`;
      if (idx < modules.length - 1) {
        h += `<line x1="${lx+8}" y1="${ey+38}" x2="${lx+lw-8}" y2="${ey+38}"
                    stroke="#1a2544" stroke-width="0.5" opacity="0.4"/>`;
      }
    });

    h += `<text x="${lx+lw/2}" y="${ly+lH-10}" fill="#64748b" font-family="DM Mono"
                font-size="9" text-anchor="middle">${clearedCount}/${required} pro přístup k MATURITĚ</text>`;

    svg.innerHTML = h;
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
        if(!isCleared) card.onclick = () => Arena.startEncounter(q.id);

        card.innerHTML = `
          <div class="enc-info">
            <h3>${isCleared ? '[BYPASSED]' : `Protokol 0${i+1}:`} ${q.monsterName}</h3>
            <span class="enc-reward">Auth: ${q.reward.xp || 0}</span>
          </div>
          <div class="enc-action">${isCleared ? 'PŘÍSTUP POVOLEN' : '> HACKNOUT'}</div>
        `;
        list.appendChild(card);
      });
    }
    this.switchView('view-region');
  },

  returnToRegion: function() {
    if(this.currentRegionId) this.showRegion(this.currentRegionId);
    else this.switchView('view-map');
  },

  addResources: function(xpEarned) {
    if(!xpEarned) return;
    this.state.xp += xpEarned;
    this.saveState();
    setTimeout(() => this.updateUI(), 400);
  },

  saveState: function() { localStorage.setItem('axioma_save', JSON.stringify(this.state)); },
  loadState: function() {
    const saved = localStorage.getItem('axioma_save');
    if (saved) { this.state = JSON.parse(saved); }
    else { this.state.xp = GameData.config.startingXP || 0; }
  },

  resetGame: function() {
    if(confirm("Opravdu chcete iniciovat System Wipe? Všechna data budou smazána.")) {
      localStorage.removeItem('axioma_save');
      this.state = { xp: 0, clearedNodes: [], hp: 5, maxHp: 5 };
      this.updateUI();
      this.generateBlueprint();
    }
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

  startEncounter: function(questionId) {
    this.currentQuestion = GameData.questions.find(q => q.id === questionId);
    if (!this.currentQuestion) return;
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
    document.getElementById('monster-region').innerText = q.isTraining ? "SIMULACE" : "OSTRÝ PROVOZ";
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

    let answerHTML = `<div class="choices" id="arena-choices">` +
      q.choices.map((c, i) =>
        `<button class="choice-btn" onclick="Arena.submitClosed('${c.value}', this)">
          <span class="choice-letter">[${String.fromCharCode(65+i)}]</span>
          <span class="choice-math">${c.label}</span>
        </button>`
      ).join('') + `</div>`;

    document.getElementById('arena-question-container').innerHTML = `
      ${q.question ? `<div class="card-question">${q.question}</div>` : ''}
      ${q.diagram ? `<div class="card-diagram" style="margin: 20px 0;">${q.diagram}</div>` : ''}
      ${q.formula ? `<div class="card-formula">${q.formula}</div>` : ''}
      ${stepsHTML}
      ${q.instruction ? `<div class="text-muted mb-4">${q.instruction}</div>` : ''}
      ${answerHTML}
    `;
    renderMath();
  },

  submitClosed: function(value, btnElement) {
    if(document.querySelectorAll('#arena-choices .choice-btn')[0].disabled) return;
    const q = this.currentQuestion;
    const isCorrect = (value === q.correctAnswer);
    const customFeedback = q.choices.find(c => c.value === value)?.feedback || "Chybná odpověď.";

    document.querySelectorAll('#arena-choices .choice-btn').forEach(btn => btn.disabled = true);
    if (isCorrect) btnElement.classList.add('correct');
    else btnElement.classList.add('wrong');

    this.resolveFight(isCorrect, customFeedback);
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
        fb.innerHTML = `<strong>[SIMULACE ÚSPĚŠNÁ]</strong><br>${feedbackMessage}`;
        nextBtn.innerText = "> NÁVRAT K HLAVNÍMU FIREWALLU";
        nextBtn.onclick = () => Arena.startEncounter(this.currentQuestion.bossId);
      } else {
        fb.innerHTML = `<strong>[FIREWALL PROLOMEN]</strong><br>${feedbackMessage}`;
        if(!Engine.state.clearedNodes.includes(this.currentQuestion.id)) { Engine.state.clearedNodes.push(this.currentQuestion.id); }
        Engine.addResources(this.currentQuestion.reward.xp);
        nextBtn.innerText = "> POKRAČOVAT";
        nextBtn.onclick = () => Engine.returnToRegion();
      }
      nextBtn.style.display = 'inline-block';

    } else {
      fb.className = 'sys-alert wrong-fb';

      if (this.currentQuestion.isTraining) {
        fb.innerHTML = `<strong>[SIMULACE SELHALA - POKUSY NEODEČTENY]</strong><br><em>Log:</em> ${feedbackMessage}`;
        nextBtn.innerText = "> RESTART SIMULACE";
        nextBtn.onclick = () => Arena.resetUI();
        nextBtn.style.display = 'inline-block';
      } else {
        Engine.state.hp -= 1;
        Engine.updateUI();

        let trainingHtml = '';
        if (this.currentQuestion.trainingTasks && this.currentQuestion.trainingTasks.length > 0) {
           trainingHtml = `<br><br><button onclick="Arena.startEncounter('${this.currentQuestion.trainingTasks[0]}')" class="btn-secondary w-full">> SPUSTIT BEZPEČNOU SIMULACI</button>`;
        }

        if (Engine.state.hp <= 0) {
          fb.innerHTML = `<strong>[SYSTEM LOCKDOWN] Došly pokusy bypassu.</strong><br><em>Kritická chyba:</em> ${feedbackMessage}${trainingHtml}`;
          nextBtn.innerText = "> VYNUCENÝ NÁVRAT";
          nextBtn.onclick = () => Engine.returnToRegion();
          Engine.state.hp = Engine.state.maxHp;
          Engine.saveState();
        } else {
          fb.innerHTML = `<strong>[PŘÍSTUP ODEPŘEN] Pokusy sníženy.</strong><br><em>Log:</em> ${feedbackMessage}${trainingHtml}`;
          nextBtn.innerText = "> ZRUŠIT HACKOVÁNÍ";
          nextBtn.onclick = () => Engine.returnToRegion();
        }
        nextBtn.style.display = 'inline-block';
      }
    }

    // Renderuj LaTeX ve feedback textu
    renderMath();
  },

  devInstaWin: function() {
    if(document.getElementById('btn-next-fight').style.display === 'inline-block') return;
    document.querySelectorAll('#arena-choices .choice-btn').forEach(btn => btn.disabled = true);
    this.resolveFight(true, "[DEV OVERRIDE] Ochrana úspěšně obejita bez výpočtu.");
  }
};

window.onload = () => Engine.init();
