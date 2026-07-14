(function(global) {
  'use strict';
  const GameState = {
    currentMode: null,
    origin: null,
    entertainment: {
      identity: null, location: null, year: 502, month: 1, festival: null,
      money: 0, food: 0, socialPoints: {}, inventory: [], eventHistory: [],
      relationships: null, reputation: 0, merit: 0, visitOfficialCount: 0,
      totalBusinessProfit: 0, educationEventCount: 0, oppressedEventCount: 0,
      health: 100, land: 0, connections: 0
    },
    career: {
      origin: null, stage: 1, eventCount: { 1: 0, 2: 0, 3: 0, 4: 0 },
      military: 0, civil: 0, guanxi: 0, prestige: 0, age: 20, currentRank: '',
      promotionPath: '', qingzhuo: null, officialSystem: 'songqi', emperorFavor: 0,
      eventHistory: [], npcRelations: {}, choiceHistory: [], faction: null,
      factionEnemy: null, survivalInHoujing: false, crisisResolved: false,
      diedTragic: false, ending: null, tutorialMode: false, reputation: 0
    },
    shared: {
      playerName: '', unlockedEndings: [], totalPlayCount: 0, achievements: [],
      linkage: { entertainmentSaveId: null, careerSaveId: null, crossModeEvents: [], triggeredResonances: [] },
      completedModes: { entertainment: false, career: false }
    }
  };
  const Utils = {
    rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    sample: (arr, n) => {
      const s = [...arr];
      for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [s[i],s[j]]=[s[j],s[i]]; }
      return s.slice(0, n);
    },
    typewriter: (element, text, speed = 30) => {
      return new Promise(resolve => {
        element.textContent = ''; let i = 0;
        const t = setInterval(() => { element.textContent += text[i]; i++; if (i >= text.length) { clearInterval(t); resolve(); } }, speed);
      });
    },
    animateNumber: (el, from, to, dur = 800) => {
      const st = performance.now();
      const u = (ct) => { const e = Math.min((ct-st)/dur,1); const a = 1-Math.pow(1-e,3); el.textContent = Math.round(from+(to-from)*a); if(e<1) requestAnimationFrame(u); };
      requestAnimationFrame(u);
    },
    save: () => {
      localStorage.setItem('fuchenliang_save', JSON.stringify({ version: '2.0', timestamp: Date.now(), state: GameState, settings: { textSpeed: 30, soundEnabled: true, musicVolume: 0.5, showFloatingHints: true, showTermHints: true, showStageIntro: true, tipFrequency: 'normal' } }));
    },
    load: () => {
      const d = localStorage.getItem('fuchenliang_save');
      if (d) { try { const s = JSON.parse(d).state||{}; const dm = (t,s) => { for (const k in s) { if (s[k]&&typeof s[k]==='object'&&!Array.isArray(s[k])) { if(!t[k]||typeof t[k]!=='object') t[k]={}; dm(t[k],s[k]); } else t[k]=s[k]; } }; dm(GameState,s); } catch(e) { console.error(e); } }
      if (!GameState.shared) GameState.shared = {};
      if (!GameState.shared.linkage) GameState.shared.linkage = { entertainmentSaveId: null, careerSaveId: null, crossModeEvents: [], triggeredResonances: [] };
      if (!GameState.shared.completedModes) GameState.shared.completedModes = { entertainment: false, career: false };
      if (!GameState.shared.unlockedEndings) GameState.shared.unlockedEndings = [];
      if (!GameState.shared.achievements) GameState.shared.achievements = [];
    },
    weightedSelect: (items, wf) => { const t = items.reduce((s,i)=>s+wf(i),0); let r = Math.random()*t; for (const i of items) { r-=wf(i); if(r<=0) return i; } return items[items.length-1]; },
    handleModeSwitch: (f, t) => {
      if (f==='entertainment'&&t==='career') GameState.shared.linkage.entertainmentSaveId = Date.now();
      if (f==='career'&&t==='entertainment') GameState.shared.linkage.careerSaveId = Date.now();
      try { triggerCrossModeEvents(f, t); } catch(e) { console.error(e); }
    },
    checkLinkageBonus: (mode) => {
      const l = GameState.shared.linkage;
      if (!GameState.entertainment || !GameState.career) return {};
      if (mode==='career') { if(!l.entertainmentSaveId) return {}; return calcEntBonus(GameState.entertainment); }
      if (mode==='entertainment') { if(!l.careerSaveId) return {}; return applyCareerFB(GameState.career, GameState.entertainment, true); }
      return {};
    },
    showFloatingHint: (key) => {
      const h = JSON.parse(localStorage.getItem('hints_shown')||'{}');
      if (h[key] && h[key] >= 3) return;
      if (!GameData.TutorialData.floatingHints[key]) return;
      const el = document.createElement('div'); el.className = 'floating-hint';
      el.innerHTML = '<span class="floating-hint-close" onclick="this.parentElement.remove()">&times;</span><p>'+GameData.TutorialData.floatingHints[key]+'</p>';
      document.body.appendChild(el); h[key] = (h[key]||0)+1; localStorage.setItem('hints_shown', JSON.stringify(h));
      setTimeout(() => { if(el.parentNode) el.remove(); }, 5000);
    },
    formatNumber: (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  };
  function calcEntBonus(ent) {
    const o = GameState.origin; const st = o?(GameData.origins[o]?.linkageStrength?.L2||100):100; const m = st/100;
    let g=0,c=0,mil=0,money=0;
    if(ent.reputation>=50) g+=Math.min(5,Math.floor(ent.reputation/25));
    if(ent.merit>=40) { const t=Math.floor((ent.merit-40)/20)+1; g+=Math.min(3,t); c+=Math.min(3,t); }
    if(ent.visitOfficialCount>=3) g+=Math.min(5,Math.floor(ent.visitOfficialCount/3)*2);
    if(ent.totalBusinessProfit>=1000) mil+=Math.min(5,Math.floor(ent.totalBusinessProfit/1000));
    if(ent.educationEventCount>=2) c+=Math.min(5,ent.educationEventCount);
    if(ent.oppressedEventCount>=3) money+=200;
    return { guanxi:Math.floor(g*m), civil:Math.floor(c*m), military:Math.floor(mil*m), money };
  }
  function applyCareerFB(car, ent, preview=false) {
    const o = GameState.origin; const st = o?(GameData.origins[o]?.linkageStrength?.L3||100):100; const m = st/100;
    const rb = {'杂佐':0,'队主':0,'参军':50,'州主簿':50,'县令':200,'明威将军':200,'太守':500,'镇西将军':500,'侍中':1000,'尚书':1000,'三公':2000};
    const sb = {'参军':{reputation:10,area:'家中'},'州主簿':{reputation:10,area:'家中'},'县令':{reputation:20,area:'城中',status:'官户'},'明威将军':{reputation:20,area:'城中',status:'官户'},'太守':{reputation:30,area:'乡中',status:'望族'},'镇西将军':{reputation:30,area:'乡中',status:'望族'},'侍中':{reputation:40,area:'全城',status:'勋贵'},'尚书':{reputation:40,area:'全城',status:'勋贵'},'三公':{reputation:50,area:'全城',status:'勋贵'}};
    const b = {}; b.money = Math.floor((rb[car.currentRank]||0)*m);
    const s = sb[car.currentRank];
    if(s) { b.reputation=Math.floor(s.reputation*m); b.socialArea=s.area; b.socialStatus=s.status; }
    if(car.guanxi>=10) b.connections=Math.floor(Math.min(20,car.guanxi)*m);
    if(!preview) { ent.money+=b.money; if(b.reputation) ent.reputation=(ent.reputation||0)+b.reputation; if(b.connections) ent.connections=(ent.connections||0)+b.connections; if(b.socialStatus) ent.socialStatus=b.socialStatus; }
    return b;
  }
  function triggerCrossModeEvents(f, t) {
    const l = GameState.shared.linkage; const o = GameState.origin;
    const st = o?(GameData.origins[o]?.linkageStrength?.L4||100):100;
    if(st<30) return;
    const evts = (GameData.crossModeEvents||[]).filter(e => e.triggerMode===f && e.resonateMode===t);
    const avail = evts.filter(e => !l.triggeredResonances.includes(e.id));
    const max = Math.floor(3*(st/100));
    const sel = Utils.sample(avail, Math.min(max, avail.length));
    sel.forEach(e => {
      l.triggeredResonances.push(e.id); l.crossModeEvents.push(e);
      if(t==='career') { if(e.effects.guanxi) GameState.career.guanxi+=e.effects.guanxi; if(e.effects.civil) GameState.career.civil+=e.effects.civil; if(e.effects.military) GameState.career.military+=e.effects.military; if(e.effects.emperorFavor) GameState.career.emperorFavor+=e.effects.emperorFavor; }
      else { if(e.effects.money) GameState.entertainment.money+=e.effects.money; if(e.effects.food) GameState.entertainment.food+=e.effects.food; if(e.effects.reputation) GameState.entertainment.reputation+=e.effects.reputation; if(e.effects.health) GameState.entertainment.health+=e.effects.health; if(e.effects.land) GameState.entertainment.land+=e.effects.land; }
    });
    return sel;
  }
  global.GameState = GameState;
  global.Utils = Utils;
})(window);
