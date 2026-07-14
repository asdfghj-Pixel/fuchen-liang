
  function checkAchievements() {
    const achievements = GameData.achievements || {};
    const completedModes = GameState.shared.completedModes;
    const careerEnding = GameState.career.ending;
    const entertainmentEnding = GameState.entertainment.ending;
    const origin = GameState.origin;
    const careerRank = GameState.career.currentRank;
    const entertainmentMoney = GameState.entertainment.money;

    const checkList = [
      { key: '第一桶金', condition: completedModes.career || completedModes.entertainment },
      { key: '双轨贯通', condition: completedModes.career && completedModes.entertainment },
      { key: '寒门崛起', condition: origin === 'hanmen' && careerRank === '三公' },
      { key: '门阀陨落', condition: origin === 'high-shizu' && entertainmentMoney < 50 },
      { key: '殉节者', condition: GameState.career.choiceHistory.some(c => c.includes('不投降')) },
      { key: '虎口余生', condition: GameState.career.guanxi < 5 && !GameState.career.diedTragic }
    ];

    checkList.forEach(item => {
      if (item.condition && !GameState.shared.achievements.includes(item.key)) {
        GameState.shared.achievements.push(item.key);
      }
    });

    if (completedModes.career && completedModes.entertainment) {
      const lifeEvaluation = calculateCompleteLifeEvaluation();
      if (lifeEvaluation.achievement && !GameState.shared.achievements.includes(lifeEvaluation.achievement)) {
        GameState.shared.achievements.push(lifeEvaluation.achievement);
      }
    }

    Utils.save();
  }

  function calculateCompleteLifeEvaluation() {
    const careerEnding = GameState.career.ending;
    const entertainmentEnding = GameState.entertainment.ending;
    const entertainmentMoney = GameState.entertainment.money;
    const entertainmentReputation = GameState.entertainment.reputation;

    let evaluation = '';
    let achievement = '';

    const isWealthy = entertainmentMoney >= 1000 && entertainmentReputation >= 30;
    const isPoor = entertainmentMoney < 50 && entertainmentReputation < 20;
    const isGoodCareer = ['A', 'B', 'C', 'N'].includes(careerEnding);
    const isBadCareer = ['D', 'E', 'H', 'M'].includes(careerEnding);
    const isHoujingSurvive = GameState.career.survivalInHoujing;
    const isHoujingDead = GameState.career.diedTragic && GameState.career.eventHistory.some(e => e.includes('侯景'));
    const isBuddhist = GameState.entertainment.ideology?.tags?.includes('皈依佛教');
    const isBusinessRich = entertainmentMoney >= 3000;
    const isMarriagePath = ['K', 'P', 'Q'].includes(careerEnding);

    if (isWealthy && isGoodCareer) {
      evaluation = '圆满人生';
      achievement = '生前身后名';
    } else if (isWealthy && isBadCareer) {
      evaluation = '先甜后苦';
      achievement = '金玉其外';
    } else if (isPoor && isGoodCareer) {
      evaluation = '死要面子活受罪';
      achievement = '冷暖自知';
    } else if (isPoor && isBadCareer) {
      evaluation = '人生两苦';
      achievement = '人生两苦';
    } else if (isBuddhist && isHoujingSurvive) {
      evaluation = '劫后皈依';
      achievement = '看破红尘';
    } else if (isBuddhist && isHoujingDead) {
      evaluation = '殉道者';
      achievement = '以身殉道';
    } else if (isPoor && isHoujingDead) {
      evaluation = '满门忠烈';
      achievement = '举家殉国';
    } else if (isWealthy && isHoujingSurvive) {
      evaluation = '乱世幸存者';
      achievement = '活着就是胜利';
    } else if (isBusinessRich && isMarriagePath) {
      evaluation = '富贵险中求';
      achievement = '富贵险中求';
    } else {
      evaluation = '平淡一生';
    }

    return { evaluation, achievement };
  }

  global.GameState = GameState;
  global.Utils = Utils;
  global.checkAchievements = checkAchievements;
  global.calculateCompleteLifeEvaluation = calculateCompleteLifeEvaluation;

  window.debug = {
    getState: () => GameState,
    setState: (s) => Object.assign(GameState, s),
    save: () => Utils.save(),
    load: () => Utils.load(),

    triggerEvent: (id) => {
      if (typeof CareerMode !== 'undefined' && CareerMode.renderEvent) {
        CareerMode.renderEvent(id);
      }
    },

    forceEnding: (type) => {
      if (typeof CareerMode !== 'undefined' && CareerMode.renderEnding) {
        CareerMode.renderEnding(type);
      }
    },

    listEvents: () => Object.keys(GameData.careerEvents),
    setStats: (m, c, g) => {
      GameState.career.military = m;
      GameState.career.civil = c;
      GameState.career.guanxi = g;
    },

    listNpcRelations: () => GameState.career.npcRelations,
    setNpcAffinity: (npcId, val) => {
      GameState.career.npcRelations[npcId] = { affinity: val };
    },

    resetTutorial: () => {
      localStorage.removeItem('tutorial_completed');
      localStorage.removeItem('tutorial_seen');
      localStorage.removeItem('hints_shown');
      alert('引导状态已重置');
    },

    skipTutorial: () => {
      localStorage.setItem('tutorial_completed', 'true');
      alert('已跳过引导局');
    },

    setMoney: (v) => { GameState.entertainment.money = v; },
    nextSeason: () => {
      if (typeof EntertainmentMode !== 'undefined' && EntertainmentMode.nextSeason) {
        EntertainmentMode.nextSeason();
      }
    }
  };
})(window);
