(function(global) {
  'use strict';

  const RULES = {
    stageLimits: {
      1: { maxEvents: 3, canContinueTo: 2 },
      2: { maxEvents: 3, canContinueTo: 3 },
      3: { maxEvents: 999, canContinueTo: 4 },
      4: { maxEvents: 999, canContinueTo: null }
    },
    stageLimitsByOrigin: {
      'stage1': { 1: 3, 2: 3 },
      'stage2': { 2: 3 },
      'stage3': {}
    },
    maxStages: {
      'stage1': 3,
      'stage2': 4,
      'stage3': 4
    },
    initialStats: {
      'hanmen': { military: 0, civil: 2, guanxi: 1, rank: '杂佐' },
      'low-shizu': { military: 2, civil: 5, guanxi: 3, rank: '参军' },
      'high-shizu': { military: 5, civil: 8, guanxi: 10, rank: '尚书郎' }
    },
    promotionPaths: {
      'civil': ['州主簿', '县令', '太守', '侍中', '尚书'],
      'military': ['队主', '参军', '明威将军', '镇西将军']
    },
    titleSystems: {
      'song': ['太尉', '司徒', '司空', '尚书令', '中书令', '侍中', '吏部尚书', '中书侍郎'],
      'qi': ['太尉', '司徒', '司空', '尚书令', '中书令', '侍中', '吏部尚书', '中书侍郎'],
      'liang': ['太尉', '司徒', '司空', '尚书令', '中书令', '侍中', '吏部尚书', '中书侍郎', '将军']
    },
    statChangeLimits: {
      'daily': { min: -2, max: 2 },
      'smallBattle': { min: -2, max: 2 },
      'majorBattle': { min: -8, max: 8 },
      'dynasticChange': { min: -10, max: 8 },
      'houjing': { min: -10, max: 10 }
    },
    endingTriggers: {
      ageLimit: 70,
      guanxiWarning: 5,
      guanxiDanger: 0
    },
    openingMonologue: '大宋升明年间，金粉六朝皆在风雨飘摇中。刘宋国祚将尽，苍梧王倒行逆施，萧道成代宋之势已如箭在弦。旧日门阀瑟瑟发抖，草莽豪杰却闻到了改命的腥风。你独立于朱雀航头，看大江东去，袖中那封泛黄遗书上，"浮沉由己"四字已被汗水浸透。身后的长街尽头，铁骑正踏碎长夜，你，该往哪走？'
  };

  class CareerMode {
    constructor() {
      this.state = global.GameState.career;
      this.currentEvent = null;
      this.isAnimating = false;
      this.rules = RULES;
    }

    init() {
      // Utils.load() 可能用存档对象替换了 GameState.career，需刷新引用
      this.state = global.GameState.career;
      if (!this.state) {
        global.GameState.career = {};
        this.state = global.GameState.career;
      }
      // 确保必要字段存在
      if (!this.state.eventHistory) this.state.eventHistory = [];
      if (!this.state.choiceHistory) this.state.choiceHistory = [];
      if (!this.state.npcRelations) this.state.npcRelations = {};

      // 如果主页面选择了出身但职场模式还没有出身，继承过来
      if (global.GameState.origin && !this.state.origin) {
        this.state.origin = global.GameState.origin;
      }

      // 只有真正进行中的游戏（有事件记录且未结束）才自动继续
      const hasActiveGame = this.state.origin &&
                            this.state.eventHistory.length > 0 &&
                            !this.state.ending;
      if (hasActiveGame) {
        this.showStatsPanel();
        this.updateStatsUI();
        this.loadProgress();
      } else {
        this.showOriginSelect();
      }
    }

    showOriginSelect() {
      document.getElementById('origin-select').classList.remove('hidden');
      document.getElementById('stats-panel').classList.add('hidden');
      document.getElementById('game-content').classList.add('hidden');
      document.getElementById('ending-panel').classList.add('hidden');
      document.querySelectorAll('.origin-card').forEach(card => card.classList.remove('selected'));
      const startBtn = document.getElementById('start-btn');
      if (startBtn) startBtn.classList.add('hidden');
      
      // 如果已经选择了出身，高亮显示并显示开始按钮
      if (this.state.origin) {
        const originNames = {
          'hanmen': '寒门子弟',
          'low-shizu': '低级士族',
          'high-shizu': '高门士族'
        };
        const cards = document.querySelectorAll('.origin-card');
        cards.forEach(card => {
          if (card.textContent.includes(originNames[this.state.origin])) {
            card.classList.add('selected');
          }
        });
        if (startBtn) startBtn.classList.remove('hidden');
      }
    }

    startGame() {
      this.state = global.GameState.career;
      const origin = GameData.origins[this.state.origin];
      if (!origin) {
        console.error('出身未选择或无效:', this.state.origin);
        return;
      }

      const initial = origin.careerInitial || this.rules.initialStats[this.state.origin] || { military: 0, civil: 2, guanxi: 1, rank: '杂佐' };
      this.state.military = initial.military;
      this.state.civil = initial.civil;
      this.state.guanxi = initial.guanxi;
      this.state.prestige = origin.prestige || 0;
      this.state.age = origin.age || 20;
      this.state.currentRank = initial.rank;
      this.state.stage = 1;
      this.state.eventCount = { 1: 0, 2: 0, 3: 0, 4: 0 };
      this.state.eventHistory = [];
      this.state.npcRelations = {};
      this.state.choiceHistory = [];
      this.state.ending = null;
      this.state.crisisResolved = false;
      this.state.survivalInHoujing = false;
      this.state.maxReachedStage = 1;
      this.state.qingzhuo = null;
      this.state.officialSystem = 'songqi';
      this.state.emperorFavor = 0;
      this.state.promotionPath = null;

      this.state.socialNetwork = {
        density: 0,
        bloodRelations: [],
        mentorRelations: [],
        hometownRelations: [],
        businessRelations: [],
        patronRelations: []
      };

      this.state.ideology = {
        class: this.getClassIdeology(),
        tags: [],
        influence: {},
        developmentHistory: []
      };

      this.state.relationEvolution = [];
      this.state.bianjiangCount = 0;
      this.state.recklessCount = 0;
      this.state.marriageCount = 0;
      this.state.familyDisaster = false;
      this.state.chooseRetire = false;
      this.state.houjingSurrendered = false;

      this.applyLinkageBonus();

      this.initNpcRelations();
      this.showStatsPanel();
      this.updateStatsUI();

      if (this.state.tutorialMode) {
        this.showTutorialHint();
      }

      this.showOpeningMonologue();
    }

    applyLinkageBonus() {
      if (!GameState.shared.completedModes.entertainment) return;

      const bonus = Utils.checkLinkageBonus('career');
      const bonusText = [];

      if (bonus.guanxi) {
        this.state.guanxi += bonus.guanxi;
        bonusText.push(`人情+${bonus.guanxi}`);
      }
      if (bonus.civil) {
        this.state.civil += bonus.civil;
        bonusText.push(`文治+${bonus.civil}`);
      }
      if (bonus.military) {
        this.state.military += bonus.military;
        bonusText.push(`军功+${bonus.military}`);
      }
      if (bonus.money) {
        bonusText.push(`金钱+${bonus.money}`);
      }

      if (bonusText.length > 0) {
        this.linkageBonusText = `〖从娱乐模式继承：${bonusText.join(' · ')}〗`;
      }

      const resonanceEvents = Utils.handleModeSwitch('entertainment', 'career');
      if (resonanceEvents && resonanceEvents.length > 0) {
        this.resonanceEvents = resonanceEvents;
      }
    }

    getClassIdeology() {
      const origin = this.state.origin;
      if (origin === 'high-shizu' || origin === 'low-shizu') return 'highborn';
      if (origin === 'hanmen') return '寒门';
      return '寒门';
    }

    initSocialNetwork() {
      const origin = this.state.origin;
      const ideologyModel = GameData.classIdeologyModels[origin === 'high-shizu' || origin === 'low-shizu' ? 'highborn' : origin === 'hanmen' ? '寒门' : '寒门'];
      if (ideologyModel) {
        this.state.ideology.baseIdeology = ideologyModel;
        this.state.ideology.tags = [...ideologyModel.traits];
        this.state.ideology.influence = { ...ideologyModel.influence };
      }
    }

    updateSocialNetwork() {
      let density = 0;
      const relations = Object.values(this.state.npcRelations || {});
      density += relations.length * 5;
      
      const socialTypes = ['blood', 'mentor', 'hometown', 'business', 'patron'];
      for (const type of socialTypes) {
        if (this.state.socialNetwork[type + 'Relations']?.length > 0) {
          density += this.state.socialNetwork[type + 'Relations'].length * 10;
        }
      }

      this.state.socialNetwork.density = Math.min(100, density);
    }

    addMentorRelation(mentorId) {
      if (!this.state.socialNetwork.mentorRelations.includes(mentorId)) {
        this.state.socialNetwork.mentorRelations.push(mentorId);
        const cost = 500;
        if ((this.state.money || 0) >= cost) {
          this.state.money -= cost;
          this.state.guanxi += 10;
          this.state.civil += 5;
          this.state.relationEvolution.push({
            type: 'mentor',
            target: mentorId,
            effect: '拜为师门，获得基本庇护'
          });
          this.updateSocialNetwork();
          return true;
        }
        return false;
      }
      return false;
    }

    addPatronRelation(patronId) {
      if (!this.state.socialNetwork.patronRelations.includes(patronId)) {
        this.state.socialNetwork.patronRelations.push(patronId);
        this.state.guanxi += 15;
        this.state.relationEvolution.push({
          type: 'patron',
          target: patronId,
          effect: '依附权贵，获得恩宠'
        });
        this.updateSocialNetwork();
        return true;
      }
      return false;
    }

    addHometownRelation(townId) {
      if (!this.state.socialNetwork.hometownRelations.includes(townId)) {
        this.state.socialNetwork.hometownRelations.push(townId);
        this.state.guanxi += 5;
        this.state.relationEvolution.push({
          type: 'hometown',
          target: townId,
          effect: '加入同乡关系网'
        });
        this.updateSocialNetwork();
        return true;
      }
      return false;
    }

    triggerMarriage(partnerId, isNoble) {
      this.state.marriageCount++;
      this.state.socialNetwork.bloodRelations.push(partnerId);
      
      const origin = this.state.origin;
      const isHighborn = origin === 'high-shizu' || origin === 'low-shizu';
      
      if (isHighborn && isNoble) {
        this.state.prestige += 10;
        this.state.guanxi += 15;
      } else if (isHighborn && !isNoble) {
        this.state.prestige -= 30;
        this.state.guanxi -= 10;
        this.state.relationEvolution.push({
          type: 'blood',
          target: partnerId,
          effect: '婚宦失类，被家族非议'
        });
      } else if (!isHighborn && isNoble) {
        this.state.guanxi += 20;
        this.state.prestige += 5;
      }
      
      this.updateSocialNetwork();
    }

    updateIdeologyFromChoice(choiceText, effects) {
      const ideology = this.state.ideology;
      const changes = [];

      if (effects.civil && effects.civil > 0) {
        if (!ideology.tags.includes('勤学上进')) {
          ideology.tags.push('勤学上进');
          changes.push('勤学上进');
        }
      }

      if (effects.guanxi && effects.guanxi > 0) {
        if (!ideology.tags.includes('善于交际')) {
          ideology.tags.push('善于交际');
          changes.push('善于交际');
        }
      }

      if (effects.guanxi && effects.guanxi < -10) {
        if (!ideology.tags.includes('孤高自守')) {
          ideology.tags.push('孤高自守');
          changes.push('孤高自守');
        }
      }

      if (effects.military && effects.military > 5) {
        if (!ideology.tags.includes('尚武精神')) {
          ideology.tags.push('尚武精神');
          changes.push('尚武精神');
        }
      }

      if (changes.length > 0) {
        ideology.developmentHistory.push({
          age: this.state.age,
          changes: changes,
          choice: choiceText
        });
      }
    }

    getNpcDialogueStyle(npcId) {
      const npc = GameData.npcs.find(n => n.id === npcId);
      if (!npc) return '正常';

      const thoughtTags = GameData.historicalThoughtTags[npcId];
      if (thoughtTags) {
        if (thoughtTags.tags.includes('清廉自守')) return '清廉';
        if (thoughtTags.tags.includes('清高傲骨')) return '高傲';
        if (thoughtTags.tags.includes('孤愤长叹')) return '悲愤';
        if (thoughtTags.tags.includes('务实')) return '务实';
      }

      return '正常';
    }

    applyRelationEvolution(trigger) {
      const rules = GameData.relationshipEvolutionRules || [];
      const rule = rules.find(r => r.trigger === trigger);
      if (rule) {
        this.state.relationEvolution.push({
          trigger: trigger,
          effects: rule.effects,
          source: rule.source
        });
        for (const [key, val] of Object.entries(rule.effects)) {
          if (key.includes('声望')) {
            this.state.prestige += val;
          } else if (key.includes('人缘')) {
            this.state.guanxi += val;
          } else if (key.includes('资财')) {
            this.state.money = (this.state.money || 0) + val;
          }
        }
      }
    }

    async showOpeningMonologue() {
      const bonusDisplay = this.linkageBonusText ? `<div class="linkage-bonus">${this.linkageBonusText}</div>` : '';
      const modal = document.createElement('div');
      modal.className = 'opening-modal';
      modal.innerHTML = `
        <div class="opening-content">
          <p>${this.rules.openingMonologue}</p>
          ${bonusDisplay}
          <button id="opening-enter-btn" class="btn btn-primary">踏入乱世</button>
        </div>
      `;
      document.body.appendChild(modal);

      await new Promise(resolve => {
        document.getElementById('opening-enter-btn').addEventListener('click', () => {
          modal.remove();
          resolve();
        });
      });

      this.loadNextEvent();
    }

    initNpcRelations() {
      for (const npc of GameData.npcs) {
        this.state.npcRelations[npc.id] = {
          affinity: npc.baseAffinity[this.state.origin] || 0,
          events: []
        };
      }
    }

    showStatsPanel() {
      document.getElementById('origin-select').classList.add('hidden');
      document.getElementById('stats-panel').classList.remove('hidden');
    }

    updateStatsUI() {
      document.getElementById('stat-military').textContent = this.state.military;
      document.getElementById('stat-civil').textContent = this.state.civil;
      document.getElementById('stat-guanxi').textContent = this.state.guanxi;
      const newRank = this.calculateRank();
      this.state.currentRank = newRank;
      document.getElementById('stat-rank').textContent = newRank;
      document.getElementById('stat-age').textContent = this.state.age + '岁';

      const stageInfo = GameData.stages.find(s => s.id === this.state.stage);
      if (stageInfo) {
        document.getElementById('stage-badge').textContent = stageInfo.name;
      }

      document.getElementById('bar-military').style.width = Math.min(100, this.state.military) + '%';
      document.getElementById('bar-civil').style.width = Math.min(100, this.state.civil) + '%';
      document.getElementById('bar-guanxi').style.width = Math.min(100, this.state.guanxi) + '%';

      this.updateRelationNetwork();
      this.updateEventHistory();
    }

    updateRelationNetwork() {
      const container = document.getElementById('relation-network');
      container.innerHTML = '';

      const npcs = GameData.npcs.slice(0, 6);
      for (const npc of npcs) {
        const relation = this.state.npcRelations[npc.id];
        const affinity = relation ? relation.affinity : 0;
        const status = this.getRelationStatus(affinity);
        const className = 'relation-tag relation-' + status.toLowerCase().replace(/\s+/g, '-');

        const tag = document.createElement('span');
        tag.className = className;
        tag.textContent = npc.name + ' (' + affinity + ')';
        container.appendChild(tag);
      }
    }

    getRelationStatus(affinity) {
      if (affinity >= 80) return '生死之交';
      if (affinity >= 50) return '亲密';
      if (affinity >= 20) return '友好';
      if (affinity >= -20) return '中立';
      if (affinity >= -50) return '冷淡';
      if (affinity >= -80) return '仇敌';
      return '不共戴天';
    }

    updateEventHistory() {
      const container = document.getElementById('event-history');
      container.innerHTML = '';

      const recent = this.state.eventHistory.slice(-5).reverse();
      for (const event of recent) {
        const item = document.createElement('div');
        item.className = 'event-item';
        item.textContent = event;
        container.appendChild(item);
      }
    }

    async loadNextEvent() {
      const narrativeEl = document.getElementById('narrative-panel');
      const choiceEl = document.getElementById('choice-panel');

      document.getElementById('game-content').classList.remove('hidden');
      document.getElementById('ending-panel').classList.add('hidden');

      narrativeEl.innerHTML = '';
      choiceEl.innerHTML = '';

      const event = this.selectEvent();
      if (!event) {
        this.checkEnding();
        return;
      }

      this.currentEvent = event;
      this.state.eventCount[this.state.stage]++;
      this.state.eventHistory.push(event.id);

      const narrativeText = document.createElement('div');
      narrativeText.className = 'narrative-text';
      narrativeEl.appendChild(narrativeText);

      await Utils.typewriter(narrativeText, event.narrative);

      this.renderChoices(event.choices);
    }

    // RAG 知识库4检索：根据当前阶段和人物关系召回相关事件条目
    retrieveKnowledge() {
      const stage = this.state.stage;
      const stageData = GameData.knowledgeBase4?.['stage' + stage];
      if (!stageData || Object.keys(stageData).length === 0) {
        return [];
      }

      const results = [];

      const npcs = Object.entries(this.state.npcRelations || {});
      npcs.sort((a, b) => (b[1]?.affinity || 0) - (a[1]?.affinity || 0));

      for (const [npcId, relation] of npcs.slice(0, 3)) {
        const npcEvents = stageData[npcId];
        if (npcEvents && npcEvents.length > 0) {
          const event = npcEvents[Utils.rand(0, npcEvents.length - 1)];
          results.push(event);
        }
      }

      const allNpcIds = Object.keys(stageData);
      for (const npcId of allNpcIds) {
        if (results.length >= 2) break;
        if (npcs.find(n => n[0] === npcId)) continue;
        const npcEvents = stageData[npcId];
        if (npcEvents && npcEvents.length > 0) {
          const event = npcEvents[Utils.rand(0, npcEvents.length - 1)];
          results.push(event);
        }
      }

      return results.slice(0, 2);
    }

    async showRetrievingIndicator(narrativeEl) {
      const indicator = document.createElement('div');
      indicator.className = 'kb-retrieving';
      indicator.textContent = '⏳ 正在检索知识库…';
      narrativeEl.appendChild(indicator);
      await new Promise(r => setTimeout(r, 700));
      indicator.remove();
    }

    selectEvent() {
      const stageEvents = GameData.careerEvents['stage' + this.state.stage];
      if (!stageEvents || stageEvents.length === 0) {
        return this.tryAdvanceStage();
      }

      const currentCount = this.state.eventCount[this.state.stage];
      const limitKey = this.getOriginStageKey();
      const stageLimit = this.rules.stageLimitsByOrigin[limitKey]?.[this.state.stage];
      const globalLimit = this.rules.stageLimits[this.state.stage]?.maxEvents;

      const maxEvents = stageLimit || globalLimit || 999;

      if (currentCount >= maxEvents) {
        return this.tryAdvanceStage();
      }

      const available = stageEvents.filter(e => !this.state.eventHistory.includes(e.id));
      if (available.length === 0) {
        return this.tryAdvanceStage();
      }

      const canTriggerChenqie = this.state.origin === 'hanmen' && 
        this.state.stage === 3 && 
        this.state.civil >= 15 && 
        this.state.emperorFavor >= 20 && 
        !this.state.promotionPath &&
        !this.state.eventHistory.includes('s3_006');
      
      if (canTriggerChenqie) {
        const chenqieEvent = stageEvents.find(e => e.id === 's3_006');
        if (chenqieEvent) {
          return chenqieEvent;
        }
      }

      return Utils.weightedSelect(available, () => 1);
    }

    getOriginStageKey() {
      const origin = this.state.origin;
      if (origin === 'hanmen') {
        return 'stage1';
      } else if (origin === 'low-shizu') {
        return 'stage2';
      } else if (origin === 'high-shizu') {
        return 'stage3';
      }
      return 'stage1';
    }

    tryAdvanceStage() {
      const limitKey = this.getOriginStageKey();
      const maxStage = this.rules.maxStages[limitKey] || 4;

      if (this.state.stage >= maxStage) {
        return null;
      }

      if (this.state.stage === 3 && maxStage === 3) {
        return null;
      }

      const oldStage = this.state.stage;
      this.state.stage++;
      this.state.eventCount[this.state.stage] = 0;

      if (oldStage === 2 && this.state.stage === 3) {
        const tianjianEvent = GameData.careerEvents['stage2']?.find(e => e.id === 's2_005');
        if (tianjianEvent) {
          if (!this.state.eventHistory.includes('s2_005')) {
            this.state.eventHistory.push('s2_005');
          }
          if (!this.state.officialSystem) {
            this.state.officialSystem = 'tianjian';
          }
          return tianjianEvent;
        }
      }

      const newStageEvents = GameData.careerEvents['stage' + this.state.stage];
      if (newStageEvents && newStageEvents.length > 0) {
        return newStageEvents[0];
      }

      return null;
    }

    renderChoices(choices) {
      const choiceEl = document.getElementById('choice-panel');

      choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `
          ${choice.text}
          <div class="effect-hint">${this.formatEffects(choice.effects)}</div>
        `;
        btn.onclick = () => this.handleChoice(index);
        choiceEl.appendChild(btn);
      });
    }

    formatEffects(effects) {
      if (!effects) return '';
      const parts = [];
      for (const [key, val] of Object.entries(effects)) {
        if (val > 0) parts.push(key + '+' + val);
        else if (val < 0) parts.push(key + val);
      }
      return parts.join(' · ') || '无明显效果';
    }

    async handleChoice(index) {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const choice = this.currentEvent.choices[index];

      this.applyEffects(choice.effects);
      this.updateIdeologyFromChoice(choice.text, choice.effects);

      if (choice.triggerRelationEvolution) {
        this.applyRelationEvolution(choice.triggerRelationEvolution);
      }

      if (choice.addMentor) {
        this.addMentorRelation(choice.addMentor);
      }

      if (choice.addPatron) {
        this.addPatronRelation(choice.addPatron);
      }

      if (choice.addHometown) {
        this.addHometownRelation(choice.addHometown);
      }

      if (choice.triggerMarriage) {
        this.triggerMarriage(choice.triggerMarriage.partnerId, choice.triggerMarriage.isNoble);
      }

      if (choice.bianjiangCount) {
        this.state.bianjiangCount = (this.state.bianjiangCount || 0) + choice.bianjiangCount;
      }

      if (choice.recklessCount) {
        this.state.recklessCount = (this.state.recklessCount || 0) + choice.recklessCount;
      }

      if (choice.chooseRetire) {
        this.state.chooseRetire = true;
      }

      if (choice.houjingSurrender) {
        this.state.houjingSurrendered = true;
      }

      if (choice.familyDisaster) {
        this.state.familyDisaster = true;
      }

      this.state.choiceHistory.push({
        eventId: this.currentEvent.id,
        choice: index,
        consequence: choice.text
      });

      this.updateStatsUI();
      Utils.save();

      await new Promise(r => setTimeout(r, 800));

      this.isAnimating = false;

      if (choice.nextEvent) {
        const nextEvent = this.findEventById(choice.nextEvent);
        if (nextEvent) {
          this.currentEvent = nextEvent;
          await Utils.typewriter(document.getElementById('narrative-panel'), nextEvent.narrative);
          this.renderChoices(nextEvent.choices);
          return;
        }
      }

      this.checkEndingConditions();
      this.showActionPanel();
    }

    showActionPanel() {
      document.getElementById('choice-panel').innerHTML = '';
      document.getElementById('action-panel').classList.remove('hidden');
      document.getElementById('npc-interact-panel').classList.add('hidden');
      document.getElementById('travel-panel').classList.add('hidden');
    }

    backToActionPanel() {
      document.getElementById('action-panel').classList.remove('hidden');
      document.getElementById('npc-interact-panel').classList.add('hidden');
      document.getElementById('travel-panel').classList.add('hidden');
    }

    async continueStory() {
      document.getElementById('action-panel').classList.add('hidden');
      this.loadNextEvent();
    }

    interactWithNpc() {
      document.getElementById('action-panel').classList.add('hidden');
      document.getElementById('npc-interact-panel').classList.remove('hidden');
      this.renderNpcList();
    }

    renderNpcList() {
      const container = document.getElementById('npc-list');
      container.innerHTML = '';

      const npcs = GameData.npcs || [];
      const displayNpcs = npcs.slice(0, 8);

      for (const npc of displayNpcs) {
        const relation = this.state.npcRelations[npc.id];
        const affinity = relation?.affinity || npc.baseAffinity?.[this.state.origin] || 0;
        const status = this.getRelationStatus(affinity);

        const npcCard = document.createElement('div');
        npcCard.className = 'npc-card';
        npcCard.innerHTML = `
          <div class="npc-card-header">
            <span class="npc-name">${npc.name}</span>
            <span class="npc-title">${npc.title || ''}</span>
          </div>
          <div class="npc-card-info">
            <span class="npc-affinity">好感度: ${affinity}</span>
            <span class="npc-status relation-${status.toLowerCase().replace(/\s+/g, '-')}">${status}</span>
          </div>
          <button class="btn btn-primary btn-sm npc-visit-btn" onclick="CareerMode.visitNpc('${npc.id}')">拜访</button>
        `;
        container.appendChild(npcCard);
      }
    }

    async visitNpc(npcId) {
      const npc = GameData.npcs.find(n => n.id === npcId);
      if (!npc) return;

      const relation = this.state.npcRelations[npcId];
      const affinity = relation?.affinity || npc.baseAffinity?.[this.state.origin] || 0;

      const event = this.generateNpcInteractionEvent(npc, affinity);

      document.getElementById('npc-interact-panel').classList.add('hidden');
      document.getElementById('game-content').classList.remove('hidden');

      const narrativeEl = document.getElementById('narrative-panel');
      const choiceEl = document.getElementById('choice-panel');

      narrativeEl.innerHTML = '';
      choiceEl.innerHTML = '';

      const narrativeText = document.createElement('div');
      narrativeText.className = 'narrative-text';
      narrativeEl.appendChild(narrativeText);

      await Utils.typewriter(narrativeText, event.narrative);

      this.currentEvent = event;
      this.renderNpcInteractionChoices(event.choices, npcId);
    }

    generateNpcInteractionEvent(npc, affinity) {
      const thoughtTags = GameData.historicalThoughtTags[npc.id];
      const dialogueStyle = this.getNpcDialogueStyle(npc.id);
      
      const styleNarratives = {
        '清廉': {
          low: [
            `${npc.name}见你到来，面无表情："你来做什么？我这里可没有什么油水可捞。"`,
            `${npc.name}冷淡地看着你："无事不登三宝殿，说吧，有什么事？"`,
            `你来到${npc.name}府邸，他头也不抬："我公务繁忙，有事快说。"`
          ],
          medium: [
            `${npc.name}放下手中的卷宗，微微一笑："你来的正好，我正要找人商议些公事。"`,
            `${npc.name}引你入座："清茶一杯，不成敬意。不知今日来访有何见教？"`,
            `${npc.name}正在处理文书，见你到来，停下手中笔："难得你来，坐吧。"`
          ],
          high: [
            `${npc.name}亲自出门迎接，握住你的手道："你我相交多年，深知你为人正直，今日务必多坐一会儿。"`,
            `${npc.name}笑道："知我者莫若你也！我正想与你探讨为政之道，清茶已备好了。"`,
            `${npc.name}见你到来，欣喜道："来得好！今日我们不谈俗务，只论学问。"`
          ]
        },
        '高傲': {
          low: [
            `${npc.name}斜睨你一眼："你也配来见我？"`,
            `${npc.name}冷哼一声："不知进退。"`,
            `${npc.name}拂袖而去，只留下一句："我不与俗人交谈。"`
          ],
          medium: [
            `${npc.name}微微点头，算是招呼："你来了。"`,
            `${npc.name}勉强请你坐下，语气疏离："有何事？"`,
            `${npc.name}正在吟诗作赋，见你到来，皱眉道："扰我雅兴。"`
          ],
          high: [
            `${npc.name}露出难得的笑容："你倒是有些见识，比那些俗人强多了。"`,
            `${npc.name}邀你共赏字画："此乃真迹，寻常人我可不轻易示人。"`,
            `${npc.name}抚掌大笑："果然只有你能懂我！"`
          ]
        },
        '悲愤': {
          low: [
            `${npc.name}见你到来，眼中闪过一丝不屑："又是来炫耀的？"`,
            `${npc.name}冷笑："像你这样的人，怎么会懂我的苦衷？"`,
            `${npc.name}叹道："世人皆醉我独醒，你又何必来打扰？"`
          ],
          medium: [
            `${npc.name}沉默良久，开口道："你来了...坐吧。"`,
            `${npc.name}看着窗外，低声道："这世道...唉。"`,
            `${npc.name}给你倒了杯酒："同为天涯沦落人，喝一杯吧。"`
          ],
          high: [
            `${npc.name}眼中泛起泪光："知我者，唯有你啊！"`,
            `${npc.name}紧握你的手："大丈夫生世会几时，安能蹀躞垂羽翼！"`,
            `${npc.name}慷慨激昂："我虽出身寒微，但绝不屈于人下！"`
          ]
        },
        '务实': {
          low: [
            `${npc.name}打量你一番："你能给我带来什么好处？"`,
            `${npc.name}直言："无事不登三宝殿，说吧，什么买卖？"`,
            `${npc.name}不耐烦地挥手："没空和你闲聊，有生意再说。"`
          ],
          medium: [
            `${npc.name}笑着请你入座："来了就好，喝茶。有什么好消息？"`,
            `${npc.name}开门见山："大家都是明白人，有什么事直说。"`,
            `${npc.name}点头道："嗯，你这人还算实在，坐吧。"`
          ],
          high: [
            `${npc.name}热情相迎："我的好兄弟！快进来，有笔好买卖要和你商量！"`,
            `${npc.name}拍着你的肩膀："跟着我干，保证你吃香的喝辣的！"`,
            `${npc.name}压低声音："最近有个机会，利润丰厚，要不要一起干？"`
          ]
        },
        '正常': {
          low: [
            `你来到${npc.name}的府邸，门人通报后，${npc.name}勉强出来相见。他神色冷淡，言语间带着几分疏离，显然对你并无好感。`,
            `${npc.name}见你到来，眉头微蹙，语气不善："什么风把你吹来了？我这里可没什么好招待的。"`,
            `你登门拜访${npc.name}，他虽碍于情面见了你，但态度冷淡，寥寥数语便欲送客。`
          ],
          medium: [
            `你来到${npc.name}府上，他客气地接见了你。两人谈了些公事，气氛还算融洽，但也谈不上亲近。`,
            `${npc.name}正在书房读书，听说你来了，便放下书卷出来相见。寒暄几句后，你觉得与其颇有共同语言。`,
            `你登门拜访${npc.name}，他以礼相待。两人谈了些朝中近况，相谈甚欢。`
          ],
          high: [
            `${npc.name}听说你来了，十分高兴，亲自出门迎接。两人许久未见，相谈甚欢，不知不觉已过了一个时辰。`,
            `你来到${npc.name}府上，他拉着你的手进了内堂，命人备下酒菜。席间两人推杯换盏，无话不谈。`,
            `${npc.name}正在院中散步，见你到来，喜出望外："什么风把你吹来了？快进来坐！"`
          ]
        }
      };

      let narrativeTier;
      if (affinity < -20) narrativeTier = 'low';
      else if (affinity < 20) narrativeTier = 'medium';
      else narrativeTier = 'high';

      const narratives = styleNarratives[dialogueStyle]?.[narrativeTier] || styleNarratives['正常'][narrativeTier];
      let narrative = narratives[Math.floor(Math.random() * narratives.length)];

      if (thoughtTags?.quotes && affinity >= 20 && Math.random() > 0.7) {
        const quote = thoughtTags.quotes[Math.floor(Math.random() * thoughtTags.quotes.length)];
        narrative = narrative.replace(/["""]/g, '').replace(/。$/, '') + ' ' + npc.name + '感慨道："' + quote + '"';
      }

      const choices = this.generateIdeologyBasedChoices(npc, affinity, dialogueStyle);

      return {
        id: 'npc_interact_' + npc.id + '_' + Date.now(),
        npcId: npc.id,
        narrative: narrative,
        choices: choices,
        isNpcInteraction: true
      };
    }

    generateIdeologyBasedChoices(npc, affinity, dialogueStyle) {
      const baseChoices = {
        '清廉': [
          { text: '谈论清廉为官之道', effects: { civil: 3, affinityChange: 8, reputation: 2 } },
          { text: '送上书籍字画', effects: { affinityChange: 5 }, cost: 50 },
          { text: '请教政务处理', effects: { civil: 2, affinityChange: 3 } },
          { text: '提及送礼', effects: { affinityChange: -15, reputation: -5 } }
        ],
        '高傲': [
          { text: '探讨诗词文章', effects: { civil: 3, affinityChange: 8 } },
          { text: '展示才华', effects: { civil: 2, affinityChange: 5 } },
          { text: '虚心请教', effects: { civil: 1, affinityChange: 3 } },
          { text: '阿谀奉承', effects: { affinityChange: -10, reputation: -3 } }
        ],
        '悲愤': [
          { text: '倾诉苦衷', effects: { affinityChange: 8, reputation: -2 } },
          { text: '安慰鼓励', effects: { affinityChange: 5, guanxi: 2 } },
          { text: '慷慨激昂共议时事', effects: { military: 2, affinityChange: 6 } },
          { text: '嘲笑其软弱', effects: { affinityChange: -20, guanxi: -10 } }
        ],
        '务实': [
          { text: '谈论生意机会', effects: { money: 50, affinityChange: 8 } },
          { text: '合作经商', effects: { money: 100, affinityChange: 5 }, cost: 200 },
          { text: '互通消息', effects: { guanxi: 3, affinityChange: 3 } },
          { text: '空谈道义', effects: { affinityChange: -10 } }
        ],
        '正常': [
          { text: '探讨学问，增进了解', effects: { civil: 2, affinityChange: 5 } },
          { text: '谈论朝中局势', effects: { guanxi: 2, affinityChange: 3 } },
          { text: '小坐片刻，告辞离去', effects: { affinityChange: 1 } },
          { text: '送上薄礼', effects: { affinityChange: 6 }, cost: 100 }
        ]
      };

      const choices = baseChoices[dialogueStyle] || baseChoices['正常'];
      
      if (affinity < -20) {
        return choices.slice(2);
      } else if (affinity < 20) {
        return choices.slice(1, 4);
      }
      return choices.slice(0, 3);
    }

    renderNpcInteractionChoices(choices, npcId) {
      const choiceEl = document.getElementById('choice-panel');
      choiceEl.innerHTML = '';

      choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `
          ${choice.text}
          <div class="effect-hint">${this.formatNpcInteractionEffects(choice.effects)}</div>
        `;
        btn.onclick = () => this.handleNpcInteractionChoice(index, npcId);
        choiceEl.appendChild(btn);
      });

      const backBtn = document.createElement('button');
      backBtn.className = 'choice-btn choice-btn-secondary';
      backBtn.textContent = '结束拜访';
      backBtn.onclick = () => this.showActionPanel();
      choiceEl.appendChild(backBtn);
    }

    formatNpcInteractionEffects(effects) {
      if (!effects) return '';
      const parts = [];
      for (const [key, val] of Object.entries(effects)) {
        if (key === 'affinityChange') continue;
        if (key === 'cost') continue;
        if (val > 0) {
          if (key === 'guanxi') parts.push('人情+' + val);
          else if (key === 'civil') parts.push('文治+' + val);
          else if (key === 'military') parts.push('军功+' + val);
          else parts.push(key + '+' + val);
        } else if (val < 0) {
          if (key === 'guanxi') parts.push('人情' + val);
          else parts.push(key + val);
        }
      }
      if (effects.affinityChange > 0) parts.push('好感度+' + effects.affinityChange);
      if (effects.affinityChange < 0) parts.push('好感度' + effects.affinityChange);
      return parts.join(' · ') || '无明显效果';
    }

    async handleNpcInteractionChoice(index, npcId) {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const choice = this.currentEvent.choices[index];
      const effects = choice.effects || {};

      if (effects.cost) {
        this.state.money = (this.state.money || 0) - effects.cost;
      }

      if (effects.affinityChange) {
        if (!this.state.npcRelations[npcId]) {
          this.state.npcRelations[npcId] = { affinity: 0, events: [] };
        }
        this.state.npcRelations[npcId].affinity += effects.affinityChange;
        if (this.state.npcRelations[npcId].affinity > 100) this.state.npcRelations[npcId].affinity = 100;
        if (this.state.npcRelations[npcId].affinity < -100) this.state.npcRelations[npcId].affinity = -100;
      }

      if (effects.guanxi) {
        this.state.guanxi += effects.guanxi;
      }
      if (effects.civil) {
        this.state.civil += effects.civil;
      }
      if (effects.military) {
        this.state.military += effects.military;
      }
      if (effects.prestige) {
        this.state.prestige += effects.prestige;
      }

      this.updateStatsUI();
      Utils.save();

      await new Promise(r => setTimeout(r, 500));

      this.isAnimating = false;
      this.showActionPanel();
    }

    goTravel() {
      document.getElementById('action-panel').classList.add('hidden');
      document.getElementById('travel-panel').classList.remove('hidden');
      this.renderTravelCities();
    }

    renderTravelCities() {
      const container = document.getElementById('travel-cities');
      container.innerHTML = '';

      const cities = [
        { id: 'jiankang', name: '建康', desc: '国都，繁华之地' },
        { id: 'jingkou', name: '京口', desc: '军事重镇，北府兵发源地' },
        { id: 'jiangling', name: '江陵', desc: '荆州治所，兵家必争' },
        { id: 'xiangyang', name: '襄阳', desc: '边境重镇，南北要冲' },
        { id: 'shouyang', name: '寿阳', desc: '淮南重镇，淝水古战场' },
        { id: 'guangling', name: '广陵', desc: '江北重镇，漕运要地' },
        { id: 'kuaiji', name: '会稽', desc: '三吴腹地，鱼米之乡' },
        { id: 'wujun', name: '吴郡', desc: '吴地首府，人文荟萃' }
      ];

      for (const city of cities) {
        const cityBtn = document.createElement('button');
        cityBtn.className = 'travel-city-btn';
        cityBtn.innerHTML = `
          <span class="travel-city-name">${city.name}</span>
          <span class="travel-city-desc">${city.desc}</span>
        `;
        cityBtn.onclick = () => this.travelToCity(city);
        container.appendChild(cityBtn);
      }
    }

    async travelToCity(city) {
      document.getElementById('travel-panel').classList.add('hidden');

      const narrativeEl = document.getElementById('narrative-panel');
      const choiceEl = document.getElementById('choice-panel');

      narrativeEl.innerHTML = '';
      choiceEl.innerHTML = '';

      const travelNarrative = this.generateTravelNarrative(city);

      const narrativeText = document.createElement('div');
      narrativeText.className = 'narrative-text';
      narrativeEl.appendChild(narrativeText);

      await Utils.typewriter(narrativeText, travelNarrative);

      const continueBtn = document.createElement('button');
      continueBtn.className = 'choice-btn';
      continueBtn.textContent = '结束游历，返回';
      continueBtn.onclick = () => this.showActionPanel();
      choiceEl.appendChild(continueBtn);

      this.state.age = (this.state.age || 20) + 1;
      this.updateStatsUI();
      Utils.save();
    }

    generateTravelNarrative(city) {
      const cityNarratives = {
        jiankang: `你收拾行囊，踏上前往建康的旅途。一路行来，只见阡陌纵横，村舍相连。临近建康时，人烟渐稠，街市愈发热闹。

进入建康城，但见朱雀大街上车水马龙，行人如织。秦淮河畔，酒楼茶肆林立，歌楼舞榭相望。城中寺院众多，香火鼎盛，梵音缭绕。你漫步于街市之间，感受着国都的繁华气象，心中不禁生出几分壮志豪情。

此行你不仅增长了见识，还结识了几位城中的名士，听闻了不少朝中的最新动向。`,
        jingkou: `你乘船沿江南下，不数日便抵达京口。京口乃是建康的北方门户，依山傍水，地势险要。

你登上北固山，俯瞰长江，但见江水滔滔，千帆竞渡。江边的军营中，旌旗猎猎，号角声声。你在城中走访，结识了几位北府军的老卒，听他们讲述了许多当年淝水之战的往事，令人心潮澎湃。

京口民风剽悍，人民尚武，你在此地停留数日，也跟着军中士卒操练了几日，自觉膂力有所增进。`,
        jiangling: `你溯江而上，历经十余日，终于抵达江陵。江陵位于长江中游，是荆州的治所，也是南朝的西部重镇。

登上江陵城头，西望可见三峡雄奇，东望则江汉平原一望无际。城中商贾云集，来自益州、雍州的货物在此集散，十分热闹。你听说了不少关于荆州刺史的传闻，也了解到了一些西部边境的情况。

此行虽路途遥远，但你对南朝的地理形胜有了更直观的认识。`,
        xiangyang: `你一路北行，来到了重镇襄阳。襄阳位于汉水之滨，是南北对峙的前沿阵地。

襄阳城高墙厚，守备森严。你在城中看到了许多从北方逃难而来的流民，他们衣衫褴褛，面有菜色，令人恻然。你也听说了不少北魏的近况，以及两国边境上的零星冲突。

在襄阳停留期间，你拜访了几位驻守在此的将领，听他们分析了南北双方的军事形势，获益良多。`,
        shouyang: `你渡过淮河，来到了寿阳城。寿阳是淮南的军事重镇，当年淝水之战就发生在这附近。

你来到淝水之滨，望着悠悠东去的河水，遥想当年谢安谈笑间，苻坚百万大军灰飞烟灭的壮举，心中不禁生出几分景仰。寿阳城头，旌旗飘扬，守军严阵以待。你向当地老者打听，得知了许多当年大战的细节。

此番游历，不仅让你对军事地理有了更深的理解，也让你对历史有了更真切的感受。`,
        guangling: `你渡江来到广陵。广陵位于长江北岸，是漕运的重要枢纽，也是江北的军事重镇。

广陵城依江而建，码头边停满了大大小小的船只，装卸货物的劳工往来如织。你听说广陵的盐业十分发达，许多大盐商在此定居，富甲一方。城中还有不少从北方迁来的侨民，他们带来了北方的风俗文化，与南方本土文化交融在一起。

你在广陵逗留数日，对南朝的经济和社会有了更深入的了解。`,
        kuaiji: `你南下前往会稽。一路上，只见河道纵横，田畴连绵，真是一派鱼米之乡的景象。

会稽山清水秀，人文荟萃。王羲之、谢安等名士都曾在此居住。你游览了兰亭，感受着"曲水流觞"的风雅；你登上了会稽山，俯瞰越中大地，烟岚云树，美不胜收。

会稽的士人崇尚清谈，讲究风度。你与几位当地名士谈诗论文，自觉文思有所增进。`,
        wujun: `你来到吴郡。吴郡是三吴地区的中心，自古以来就是人文荟萃之地。

吴郡城内，小桥流水，粉墙黛瓦，一派江南水乡的温婉气象。你走访了几家著名的士族府邸，见识了南朝士族的风雅生活。城外的庄园里，田连阡陌，奴婢成群，十分气派。

你还参观了当地的织锦作坊，见识了吴地精美的丝织工艺。此行让你对南朝士族的生活和地方经济有了更直观的认识。`
      };

      return cityNarratives[city.id] || `你前往${city.name}游历，一路上见识了不少风土人情，增长了见闻。`;
    }

    findEventById(eventId) {
      for (const stage of ['stage1', 'stage2', 'stage3', 'stage4']) {
        const event = GameData.careerEvents[stage]?.find(e => e.id === eventId);
        if (event) return event;
      }
      return null;
    }

    applyEffects(effects) {
      if (!effects) return;

      const state = this.state;
      for (const [key, val] of Object.entries(effects)) {
        if (state.hasOwnProperty(key)) {
          state[key] += val;
        }
        if (key === 'military') {
          Utils.showFloatingHint('military');
        } else if (key === 'civil') {
          Utils.showFloatingHint('civil');
        } else if (key === 'guanxi') {
          Utils.showFloatingHint('guanxi');
        }
      }

      if (state.guanxi < 0 && !state.crisisResolved) {
        this.triggerCrisis();
      }

      if (state.stage === 4) {
        if (effects.military && effects.military > 0) {
          state.survivalInHoujing = true;
        }
      }

      if (effects.qingzhuo) {
        state.qingzhuo = effects.qingzhuo;
        if (effects.qingzhuo === 'qing') {
          state.prestige += 5;
          state.civil += 2;
        } else if (effects.qingzhuo === 'zhuo') {
          state.military += 3;
          state.civil += 1;
          state.prestige -= 3;
        }
      }

      if (effects.emperorFavor) {
        state.emperorFavor += effects.emperorFavor;
      }

      if (effects.promotionPath) {
        state.promotionPath = effects.promotionPath;
      }

      state.age++;
    }

    calculateRank() {
      const state = this.state;
      const officialSystem = state.officialSystem || 'songqi';
      const origin = state.origin;
      const qingzhuo = state.qingzhuo;
      const stage = state.stage;

      const systems = GameData.officialSystems;
      if (!systems[officialSystem]) return state.currentRank || '杂佐';

      const ranks = systems[officialSystem].ranks;
      const isSongqi = officialSystem === 'songqi';

      const totalScore = state.civil + state.military + state.guanxi;

      let rankIndex = -1;

      if (isSongqi) {
        const thresholds = [
          { min: 80, index: 0 },
          { min: 60, index: 1 },
          { min: 45, index: 2 },
          { min: 35, index: 3 },
          { min: 25, index: 4 },
          { min: 18, index: 5 },
          { min: 10, index: 6 },
          { min: 5, index: 7 },
          { min: 0, index: 8 }
        ];

        for (const t of thresholds) {
          if (totalScore >= t.min) {
            rankIndex = t.index;
            break;
          }
        }
      } else {
        const thresholds = [
          { min: 100, index: 0 },
          { min: 85, index: 1 },
          { min: 70, index: 2 },
          { min: 58, index: 3 },
          { min: 48, index: 4 },
          { min: 40, index: 5 },
          { min: 32, index: 6 },
          { min: 25, index: 7 },
          { min: 18, index: 8 },
          { min: 12, index: 9 },
          { min: 8, index: 10 },
          { min: 5, index: 11 },
          { min: 3, index: 12 },
          { min: 1, index: 13 }
        ];

        for (const t of thresholds) {
          if (totalScore >= t.min) {
            rankIndex = t.index;
            break;
          }
        }
      }

      if (rankIndex === -1) rankIndex = ranks.length - 1;

      const rankData = ranks[rankIndex];
      if (!rankData) return state.currentRank || '杂佐';

      const allowed = rankData.allowed;
      const canAccess = allowed.includes('皇族') ||
        (allowed.includes('高门') && origin === 'high-shizu') ||
        (allowed.includes('低级士族') && (origin === 'low-shizu' || origin === 'high-shizu')) ||
        (allowed.includes('寒人') && origin === 'hanmen');

      if (!canAccess) {
        if (rankIndex < ranks.length - 1) {
          return this.getLowerRank(rankIndex + 1, ranks, origin, qingzhuo);
        }
      }

      const isCivil = state.civil >= state.military;
      let rankName = isCivil ? rankData.civil : rankData.military;

      if (qingzhuo === 'qing' && rankData.qingzhuo !== '清') {
        const higherQing = ranks.find(r => r.qingzhuo === '清' && r.grade <= rankData.grade);
        if (higherQing) {
          rankName = isCivil ? higherQing.civil : higherQing.military;
        }
      } else if (qingzhuo === 'zhuo' && rankData.qingzhuo === '清') {
        const lowerZuo = ranks.find(r => r.qingzhuo === '浊' && r.grade >= rankData.grade);
        if (lowerZuo) {
          rankName = isCivil ? lowerZuo.civil : lowerZuo.military;
        }
      }

      return rankName;
    }

    getLowerRank(startIndex, ranks, origin, qingzhuo) {
      for (let i = startIndex; i < ranks.length; i++) {
        const r = ranks[i];
        const allowed = r.allowed;
        const canAccess = allowed.includes('皇族') ||
          (allowed.includes('高门') && origin === 'high-shizu') ||
          (allowed.includes('低级士族') && (origin === 'low-shizu' || origin === 'high-shizu')) ||
          (allowed.includes('寒人') && origin === 'hanmen');
        if (canAccess) {
          const isCivil = this.state.civil >= this.state.military;
          return isCivil ? r.civil : r.military;
        }
      }
      return '杂佐';
    }

    triggerCrisis() {
      const crisisNarrative = '人情凋敝，谤言日兴。同僚侧目而视，弹劾之章已具草于案。你独坐衙斋，窗外梧桐夜雨，案上烛火将残。此际唯有三途可走：其一，罄囊中之物，遍贿权门，虽可暂息风波，然家资荡尽，日后生计堪忧；其二，免冠请罪，自贬归乡，忍辱负重，待时以再起；其三，铤而走险，借某权贵之势，反劾诬告者，胜负难料，或成或败。生死攸关，君当自决。';

      const crisisEvent = {
        id: 'crisis_' + Date.now(),
        narrative: crisisNarrative,
        choices: [
          { text: '破财免灾，遍贿权门', effects: { guanxi: 12, military: -2, civil: -2 } },
          { text: '忍辱负重，自贬归乡', effects: { guanxi: -3, prestige: 8, military: 0, civil: 5 } },
          { text: '拼死一搏，借势反劾', effects: { guanxi: -5, military: 5, civil: -3 } }
        ]
      };
      this.currentEvent = crisisEvent;
      document.getElementById('narrative-panel').textContent = crisisEvent.narrative;
      this.renderChoices(crisisEvent.choices);
      this.state.crisisResolved = true;
    }

    checkEndingConditions() {
      if (this.state.guanxi < this.rules.endingTriggers.guanxiWarning && !this.state.crisisResolved) {
        this.triggerCrisis();
        return;
      }

      if (this.state.stage === 4 && this.state.eventCount[4] >= 3) {
        this.checkEnding();
        return;
      }

      if (this.state.stage === 3 && this.state.eventCount[3] >= 5 && this.state.maxReachedStage === 3) {
        this.checkEnding();
        return;
      }

      if (this.state.age >= this.rules.endingTriggers.ageLimit) {
        this.checkEnding();
        return;
      }

      if (this.state.guanxi <= this.rules.endingTriggers.guanxiDanger && this.state.crisisResolved) {
        this.checkEnding();
        return;
      }
    }

    checkEnding() {
      const state = this.state;
      const origin = state.origin;
      const military = state.military || 0;
      const civil = state.civil || 0;
      const guanxi = state.guanxi || 0;

      if (state.stage === 4 && !state.survivalInHoujing) {
        this.renderEnding('G');
        return;
      }

      if (state.stage === 4 && state.survivalInHoujing) {
        this.renderEnding('F');
        return;
      }

      if (state.houjingSurrendered) {
        this.renderEnding('L');
        return;
      }

      if (guanxi < 15) {
        this.renderEnding('E');
        return;
      }

      if (military >= 70) {
        this.renderEnding('B');
        return;
      }

      if (civil >= 60 && military <= 40) {
        this.renderEnding('C');
        return;
      }

      if (origin === 'hanmen' && (military >= 40 || civil >= 30) && guanxi < 30) {
        this.renderEnding('D');
        return;
      }

      const highborn = origin === 'high-shizu' || origin === 'low-shizu';

      if (military >= 40 && military <= 60 && state.bianjiangCount && state.bianjiangCount >= 2) {
        this.renderEnding('O');
        return;
      }

      if ((military > 50 || civil > 50) && state.recklessCount && state.recklessCount >= 3) {
        this.renderEnding('P');
        return;
      }

      if (guanxi > 60 && military < 30 && civil < 30) {
        this.renderEnding('K');
        return;
      }

      if (highborn && civil > 40 && military < 15 && guanxi > 25) {
        this.renderEnding('J');
        return;
      }

      if (highborn && guanxi > 50 && state.marriageCount && state.marriageCount >= 1) {
        this.renderEnding('Q');
        return;
      }

      if (highborn && state.familyDisaster) {
        this.renderEnding('M');
        return;
      }

      if (guanxi > 40 && civil > 40 && military < 20 && state.chooseRetire) {
        this.renderEnding('I');
        return;
      }

      if (state.officialRank >= 4 && state.chooseRetire) {
        this.renderEnding('N');
        return;
      }

      if (military < 30 && civil < 30 && guanxi < 25) {
        this.renderEnding('H');
        return;
      }

      if (military >= 60 || civil >= 50) {
        this.renderEnding('A');
        return;
      }

      if (highborn && civil > 40 && military < 20) {
        this.renderEnding('J');
        return;
      }

      if (origin === 'hanmen' && military >= 40 && military <= 60) {
        this.renderEnding('O');
        return;
      }

      this.renderEnding('A');
    }

    async renderEnding(type) {
      const ending = GameData.endings[type];
      if (!ending) return;

      this.state.ending = type;

      document.getElementById('game-content').classList.add('hidden');
      document.getElementById('ending-panel').classList.remove('hidden');

      document.getElementById('ending-title').textContent = ending.name;
      document.getElementById('ending-narrative').textContent = ending.narrative;

      const { shichen, official, scholars, modern } = this.generateEndingEvaluation(type);

      document.getElementById('ending-shichen').textContent = shichen;
      document.getElementById('ending-official').textContent = official;
      document.getElementById('ending-scholars').innerHTML = scholars;
      document.getElementById('ending-modern').textContent = modern;

      if (!global.GameState.shared.unlockedEndings.includes(type)) {
        global.GameState.shared.unlockedEndings.push(type);
      }

      global.GameState.shared.completedModes.career = true;

      if (this.state.tutorialMode) {
        localStorage.setItem('tutorial_completed', 'true');
        if (!global.GameState.shared.achievements.includes('第一桶金')) {
          global.GameState.shared.achievements.push('第一桶金');
        }
      }

      Utils.save();
    }

    generateEndingEvaluation(type) {
      const ending = GameData.endings[type];
      if (!ending) {
        return {
          shichen: '史臣曰："某某一生，功过相抵，留待后人评说。"',
          official: '诏曰："故某某，可赠本官。"',
          scholars: this.generateScholarEvaluation(),
          modern: '**现代社会生活启示：** 你的人生故事结束了，但你的选择会永远留在历史中。'
        };
      }

      return {
        shichen: ending.shichen || '',
        official: ending.official || '',
        scholars: this.generateScholarEvaluation(type),
        modern: ending.modern || ''
      };
    }

    generateScholarEvaluation(type) {
      const scholarQuotes = [
        { author: '钱穆', quote: '南朝本是一个病的时代。此所谓病，乃指文化病。若论文化病，北朝受病较南朝为浅，因此新生的希望亦在北朝，不在南朝。', source: '《国史大纲》' },
        { author: '吕思勉', quote: '南朝的治世，只有宋文帝和梁武帝在位时，历时较久。', source: '《中国政治史》' },
        { author: '陈寅恪', quote: '梁末之乱，为永嘉南渡后的一大结局。南朝士族在经过数百年腐化之后，于梁末被全部消灭。', source: '《魏晋南北朝史讲演录》' },
        { author: '田余庆', quote: '南朝排斥了门阀统治，恢复了皇权政治，但皇权政治的基础和格局并不能以此巩固下来，政权反而失去了稳定的因素。', source: '《东晋门阀政治》' },
        { author: '唐长孺', quote: '士族表面上极盛的时候也正是走向衰亡的开端。作为南朝第一个皇朝刘宋建国时，士族的力量已趋削弱了。', source: '《门阀制度的形成及其衰落》' },
        { author: '王仲荦', quote: '南朝的君主，内省则重用寒人，参掌机要；外藩则托付宗室，由诸王出任刺史。', source: '《魏晋南北朝史》' },
        { author: '阎步克', quote: '江左的"清浊"选例更多地体现了士族的偏好：重清闲而轻吏职，重文翰而轻文法，重文官而轻武号。', source: '《南北朝的散官发展与清浊异同》' },
        { author: '仇鹿鸣', quote: '中古士族与其他时代的官僚家族不同，多少有些能自立于皇权之外的资本。', source: '访谈' },
        { author: '欧阳修', quote: '梁萧氏兴于江左，实有功在民，厥终无大恶。', source: '欧阳修评梁' },
        { author: '王夫之', quote: '梁氏享国五十年，天下且小康焉。', source: '王夫之评梁' }
      ];

      const shuffled = scholarQuotes.sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 3);

      let html = '';
      selected.forEach((item, index) => {
        html += `
          <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px dashed rgba(212, 165, 116, 0.2); ${index === selected.length - 1 ? 'border-bottom: none; margin-bottom: 0; padding-bottom: 0;' : ''}">
            <div style="font-style: italic; color: #e8d5b7; margin-bottom: 4px;">"${item.quote}"</div>
            <div style="font-size: 0.85em; color: #d4a574;">—— ${item.author} ${item.source}</div>
          </div>
        `;
      });

      return html;
    }

    showTutorialHint() {
      const hint = document.createElement('div');
      hint.className = 'floating-hint';
      hint.innerHTML = `
        <span class="floating-hint-close" onclick="this.parentElement.remove()">&times;</span>
        <p>这是引导局，你的选择不会导致负面结局。尝试体验不同的选项吧！</p>
      `;
      document.body.appendChild(hint);

      setTimeout(() => {
        if (hint.parentNode) hint.remove();
      }, 5000);
    }

    loadProgress() {
      this.showStatsPanel();
      this.updateStatsUI();

      if (this.state.ending) {
        this.renderEnding(this.state.ending);
      } else {
        this.loadNextEvent();
      }
    }

    restart() {
      this.state = global.GameState.career;
      this.state.origin = null;
      this.state.stage = 1;
      this.state.eventCount = { 1: 0, 2: 0, 3: 0, 4: 0 };
      this.state.eventHistory = [];
      this.state.npcRelations = {};
      this.state.choiceHistory = [];
      this.state.ending = null;

      this.showOriginSelect();
    }
  }

  global.CareerMode = new CareerMode();
})(window);