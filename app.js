(function(global) {
  'use strict';

  const GameState = {
    currentMode: null,
    origin: null,

    entertainment: {
      identity: null,
      location: null,
      year: 502,
      month: 1,
      festival: null,
      money: 0,
      food: 0,
      socialPoints: {},
      inventory: [],
      eventHistory: [],
      relationships: null,
      reputation: 0,
      merit: 0,
      visitOfficialCount: 0,
      totalBusinessProfit: 0,
      educationEventCount: 0,
      oppressedEventCount: 0,
      health: 100,
      land: 0,
      connections: 0
    },

    career: {
      origin: null,
      stage: 1,
      eventCount: { 1: 0, 2: 0, 3: 0, 4: 0 },
      military: 0,
      civil: 0,
      guanxi: 0,
      prestige: 0,
      age: 20,
      currentRank: '',
      promotionPath: '',
      qingzhuo: null,
      officialSystem: 'songqi',
      emperorFavor: 0,
      eventHistory: [],
      npcRelations: {},
      choiceHistory: [],
      faction: null,
      factionEnemy: null,
      survivalInHoujing: false,
      crisisResolved: false,
      diedTragic: false,
      ending: null,
      tutorialMode: false,
      reputation: 0
    },

    shared: {
      playerName: '',
      unlockedEndings: [],
      totalPlayCount: 0,
      achievements: [],
      linkage: {
        entertainmentSaveId: null,
        careerSaveId: null,
        crossModeEvents: [],
        triggeredResonances: []
      },
      completedModes: {
        entertainment: false,
        career: false
      }
    }
  };

  const Utils = {
    rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    sample: (arr, n) => {
      const shuffled = [...arr];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, n);
    },

    typewriter: (element, text, speed = 30) => {
      return new Promise(resolve => {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
          element.textContent += text[i];
          i++;
          if (i >= text.length) {
            clearInterval(timer);
            resolve();
          }
        }, speed);
      });
    },

    animateNumber: (element, from, to, duration = 800) => {
      const startTime = performance.now();
      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from + (to - from) * eased);
        element.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    },

    save: () => {
      const saveData = {
        version: '2.0',
        timestamp: Date.now(),
        state: GameState,
        settings: {
          textSpeed: 30,
          soundEnabled: true,
          musicVolume: 0.5,
          showFloatingHints: true,
          showTermHints: true,
          showStageIntro: true,
          tipFrequency: 'normal'
        }
      };
      localStorage.setItem('fuchenliang_save', JSON.stringify(saveData));
    },

    load: () => {
      const data = localStorage.getItem('fuchenliang_save');
      if (data) {
        try {
          const saveData = JSON.parse(data);
          const saved = saveData.state || {};
          const deepMerge = (target, source) => {
            for (const key in source) {
              if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                if (!target[key] || typeof target[key] !== 'object') {
                  target[key] = {};
                }
                deepMerge(target[key], source[key]);
              } else {
                target[key] = source[key];
              }
            }
          };
          deepMerge(GameState, saved);
        } catch (e) {
          console.error('加载存档失败:', e);
        }
      }
      if (!GameState.shared) GameState.shared = {};
      if (!GameState.shared.linkage) GameState.shared.linkage = { entertainmentSaveId: null, careerSaveId: null, crossModeEvents: [], triggeredResonances: [] };
      if (!GameState.shared.completedModes) GameState.shared.completedModes = { entertainment: false, career: false };
      if (!GameState.shared.unlockedEndings) GameState.shared.unlockedEndings = [];
      if (!GameState.shared.achievements) GameState.shared.achievements = [];
    },

    weightedSelect: (items, weightFn) => {
      const total = items.reduce((sum, item) => sum + weightFn(item), 0);
      let r = Math.random() * total;
      for (const item of items) {
        r -= weightFn(item);
        if (r <= 0) return item;
      }
      return items[items.length - 1];
    },

    handleModeSwitch: (fromMode, toMode) => {
      if (fromMode === 'entertainment' && toMode === 'career') {
        GameState.shared.linkage.entertainmentSaveId = Date.now();
      }
      if (fromMode === 'career' && toMode === 'entertainment') {
        GameState.shared.linkage.careerSaveId = Date.now();
      }
      try {
        triggerCrossModeEvents(fromMode, toMode);
      } catch (e) {
        console.error('触发共振事件出错:', e);
      }
    },

    checkLinkageBonus: (mode) => {
      const linkage = GameState.shared.linkage;
      if (!GameState.entertainment || !GameState.career) return {};

      if (mode === 'career') {
        if (!linkage.entertainmentSaveId) return {};
        return calculateEntertainmentBonus(GameState.entertainment);
      }
      if (mode === 'entertainment') {
        if (!linkage.careerSaveId) return {};
        return applyCareerFeedback(GameState.career, GameState.entertainment, true);
      }
      return {};
    },

    showFloatingHint: (key) => {
      const hintsShown = JSON.parse(localStorage.getItem('hints_shown') || '{}');
      if (hintsShown[key] && hintsShown[key] >= 3) return;
      if (!GameData.TutorialData.floatingHints[key]) return;

      const hint = document.createElement('div');
      hint.className = 'floating-hint';
      hint.innerHTML = `
        <span class="floating-hint-close" onclick="this.parentElement.remove()">&times;</span>
        <p>${GameData.TutorialData.floatingHints[key]}</p>
      `;
      document.body.appendChild(hint);

      hintsShown[key] = (hintsShown[key] || 0) + 1;
      localStorage.setItem('hints_shown', JSON.stringify(hintsShown));

      setTimeout(() => {
        if (hint.parentNode) hint.remove();
      }, 5000);
    },

    formatNumber: (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };
  function calculateEntertainmentBonus(entertainment) {
    const bonus = {};
    const origin = GameState.origin;
    const strength = origin ? (GameData.origins[origin]?.linkageStrength?.L2 || 100) : 100;
    const multiplier = strength / 100;

    let guanxiBonus = 0;
    let civilBonus = 0;
    let militaryBonus = 0;
    let moneyBonus = 0;

    if (entertainment.reputation >= 50) {
      const repBonus = Math.floor(entertainment.reputation / 25);
      guanxiBonus += Math.min(5, repBonus);
    }

    if (entertainment.merit >= 40) {
      const meritTier = Math.floor((entertainment.merit - 40) / 20) + 1;
      guanxiBonus += Math.min(3, meritTier);
      civilBonus += Math.min(3, meritTier);
    }

    if (entertainment.visitOfficialCount >= 3) {
      const visitBonus = Math.floor(entertainment.visitOfficialCount / 3) * 2;
      guanxiBonus += Math.min(5, visitBonus);
    }

    if (entertainment.totalBusinessProfit >= 1000) {
      const profitBonus = Math.floor(entertainment.totalBusinessProfit / 1000);
      militaryBonus += Math.min(5, profitBonus);
    }

    if (entertainment.educationEventCount >= 2) {
      const eduBonus = entertainment.educationEventCount * 1;
      civilBonus += Math.min(5, eduBonus);
    }

    if (entertainment.oppressedEventCount >= 3) {
      moneyBonus += 200;
    }

    bonus.guanxi = Math.floor(guanxiBonus * multiplier);
    bonus.civil = Math.floor(civilBonus * multiplier);
    bonus.military = Math.floor(militaryBonus * multiplier);
    bonus.money = moneyBonus;

    return bonus;
  }

  function applyCareerFeedback(career, entertainment, preview = false) {
    const origin = GameState.origin;
    const strength = origin ? (GameData.origins[origin]?.linkageStrength?.L3 || 100) : 100;
    const multiplier = strength / 100;

    const rankBonus = {
      '杂佐': 0,
      '队主': 0,
      '参军': 50,
      '州主簿': 50,
      '县令': 200,
      '明威将军': 200,
      '太守': 500,
      '镇西将军': 500,
      '侍中': 1000,
      '尚书': 1000,
      '三公': 2000
    };

    const socialRankBonus = {
      '参军': { reputation: 10, area: '家中' },
      '州主簿': { reputation: 10, area: '家中' },
      '县令': { reputation: 20, area: '城中', status: '官户' },
      '明威将军': { reputation: 20, area: '城中', status: '官户' },
      '太守': { reputation: 30, area: '乡中', status: '望族' },
      '镇西将军': { reputation: 30, area: '乡中', status: '望族' },
      '侍中': { reputation: 40, area: '全城', status: '勋贵' },
      '尚书': { reputation: 40, area: '全城', status: '勋贵' },
      '三公': { reputation: 50, area: '全城', status: '勋贵' }
    };

    const bonus = {};
    bonus.money = Math.floor((rankBonus[career.currentRank] || 0) * multiplier);

    const socialBonus = socialRankBonus[career.currentRank];
    if (socialBonus) {
      bonus.reputation = Math.floor(socialBonus.reputation * multiplier);
      bonus.socialArea = socialBonus.area;
      bonus.socialStatus = socialBonus.status;
    }

    if (career.guanxi >= 10) {
      bonus.connections = Math.floor(Math.min(20, career.guanxi) * multiplier);
    }

    if (!preview) {
      entertainment.money += bonus.money;
      if (bonus.reputation) entertainment.reputation = (entertainment.reputation || 0) + bonus.reputation;
      if (bonus.connections) entertainment.connections = (entertainment.connections || 0) + bonus.connections;
      if (bonus.socialStatus) entertainment.socialStatus = bonus.socialStatus;
    }

    return bonus;
  }
