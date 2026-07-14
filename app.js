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

    return bonus;
  }

  function triggerCrossModeEvents(fromMode, toMode) {
    const linkage = GameState.shared.linkage;
    const origin = GameState.origin;
    const strength = origin ? (GameData.origins[origin]?.linkageStrength?.L4 || 100) : 100;

    if (strength < 30) return;

    const crossModeEvents = GameData.crossModeEvents || [];
    const filteredEvents = crossModeEvents.filter(event => 
      event.triggerMode === fromMode && event.resonateMode === toMode
    );

    const applicableEvents = filteredEvents.filter(event => {
      if (fromMode === 'career') {
        if (event.id === 'linkage_rebel_join') {
          return GameState.career.choiceHistory.some(c => c.includes('投奔义师'));
        }
        if (event.id === 'linkage_battle_victory') {
          return GameState.career.eventHistory.includes('battle_victory') && !GameState.career.diedTragic;
        }
        if (event.id === 'linkage_impeachment_crisis') {
          return GameState.career.guanxi < 15;
        }
        if (event.id === 'linkage_bribe_disaster') {
          return GameState.career.choiceHistory.some(c => c.includes('破财免灾'));
        }
        if (event.id === 'linkage_houjing_siege') {
          return GameState.career.survivalInHoujing && GameState.career.choiceHistory.some(c => c.includes('守城'));
        }
        return true;
      } else {
        if (event.id === 'linkage_rural_to_urban') {
          return GameState.entertainment.location === 'urban';
        }
        if (event.id === 'linkage_temple_land_loss') {
          return GameState.entertainment.eventHistory.some(e => e.includes('寺院') && e.includes('田产'));
        }
        if (event.id === 'linkage_business_success') {
          return GameState.entertainment.totalBusinessProfit >= 1000;
        }
        if (event.id === 'linkage_tax_death') {
          return GameState.entertainment.eventHistory.some(e => e.includes('赋税') && e.includes('去世'));
        }
        if (event.id === 'linkage_buddhist_convert') {
          return GameState.entertainment.ideology?.tags?.includes('皈依佛教');
        }
        return true;
      }
    });

    const availableEvents = applicableEvents.filter(e => 
      !linkage.triggeredResonances.includes(e.id)
    );

    const maxResonances = Math.floor(3 * (strength / 100));
    const selectedEvents = Utils.sample(availableEvents, Math.min(maxResonances, availableEvents.length));

    selectedEvents.forEach(event => {
      linkage.triggeredResonances.push(event.id);
      linkage.crossModeEvents.push(event);

      if (toMode === 'career') {
        if (event.effects.guanxi) GameState.career.guanxi += event.effects.guanxi;
        if (event.effects.civil) GameState.career.civil += event.effects.civil;
        if (event.effects.military) GameState.career.military += event.effects.military;
        if (event.effects.emperorFavor) GameState.career.emperorFavor += event.effects.emperorFavor;
      } else {
        if (event.effects.money) GameState.entertainment.money += event.effects.money;
        if (event.effects.food) GameState.entertainment.food += event.effects.food;
        if (event.effects.reputation) GameState.entertainment.reputation += event.effects.reputation;
        if (event.effects.health) GameState.entertainment.health += event.effects.health;
        if (event.effects.land) GameState.entertainment.land += event.effects.land;
      }
    });

    return selectedEvents;
  }

  global.GameState = GameState;
  global.Utils = Utils;
})(window);
