(function(global) {
  'use strict';

  class EntertainmentMode {
    constructor() {
      this.state = global.GameState.entertainment;
      this.currentEvent = null;
      this.isAnimating = false;
    }

    init() {
      this.state = global.GameState.entertainment;
      if (!this.state) {
        global.GameState.entertainment = {};
        this.state = global.GameState.entertainment;
      }
      if (!this.state.eventHistory) this.state.eventHistory = [];

      // 如果主页面选择了出身但娱乐模式还没有身份，继承过来
      if (global.GameState.origin && !this.state.identity) {
        const originData = GameData.origins[global.GameState.origin];
        if (originData && originData.entertainmentIdentity) {
          this.state.identity = originData.entertainmentIdentity;
        }
      }

      const hasActiveGame = this.state.identity && this.state.location &&
                            this.state.eventHistory && this.state.eventHistory.length > 0;
      if (hasActiveGame) {
        this.showStatsPanel();
        this.updateStatsUI();
        this.loadProgress();
      } else {
        // 如果已有身份（从出身继承来的），直接开始游戏
        if (this.state.identity && GameData.identities && GameData.identities[this.state.identity]) {
          this.startGame();
        } else {
          this.showIndustrySelect();
        }
      }
    }

    showIndustrySelect() {
      document.getElementById('industry-select').classList.remove('hidden');
      document.getElementById('sub-select').classList.add('hidden');
      document.getElementById('stats-panel').classList.add('hidden');
      document.getElementById('game-content').classList.add('hidden');
      document.getElementById('ending-panel').classList.add('hidden');
      document.querySelectorAll('.industry-card').forEach(card => card.classList.remove('selected'));
      document.querySelectorAll('.sub-card').forEach(card => card.classList.remove('selected'));
      
      // 如果已经选择了出身/身份，高亮显示对应行业
      if (this.state.identity) {
        const identityToIndustry = {
          'farmer': 'agriculture',
          'artisan': 'handicraft',
          'merchant': 'commerce'
        };
        const industry = identityToIndustry[this.state.identity];
        if (industry) {
          const cards = document.querySelectorAll('.industry-card');
          cards.forEach(card => {
            if (card.getAttribute('data-industry') === industry) {
              card.classList.add('selected');
            }
          });
          // 显示子选择和开始按钮
          this.showSubSelect(industry);
        }
      }
    }

    startGame() {
      this.state = global.GameState.entertainment;
      
      const origin = GameState.origin;
      if (origin) {
        const originData = GameData.origins[origin];
        if (originData) {
          this.state.identity = originData.entertainmentIdentity || this.state.identity;
          const initial = originData.entertainmentInitial || {};
          if (initial.money) this.state.money = initial.money;
          if (initial.food) this.state.food = initial.food;
          if (initial.land) this.state.land = initial.land;
        }
      }

      const identity = GameData.identities[this.state.identity];
      if (!identity) {
        console.error('身份未选择或无效:', this.state.identity);
        return;
      }

      if (!this.state.money) this.state.money = identity.initialMoney;
      if (!this.state.food) this.state.food = identity.initialFood;
      this.state.year = 502;
      this.state.month = 1;
      this.state.reputation = 0;
      this.state.socialPoints = {};
      this.state.eventHistory = [];
      this.state.taxHistory = [];
      this.state.totalIncome = 0;
      this.state.totalTaxes = 0;

      this.applyCareerFeedback();

      this.state.socialNetwork = {
        density: 0,
        bloodRelations: [],
        mentorRelations: [],
        hometownRelations: [],
        businessRelations: [],
        patronRelations: []
      };

      this.state.religion = {
        merit: 50,
        faith: null,
        buddhismLevel: 0,
        taoismLevel: 0,
        templeRelations: {},
        taoistRelations: {}
      };

      this.state.life = {
        satiety: 80,
        hungerDays: 0,
        clothingLevel: 0,
        residenceLevel: 0,
        teaSkill: 0,
        wineSkill: 0,
        health: 100
      };

      this.state.family = {
        married: false,
        spouse: null,
        children: 0,
        parentsAlive: true,
        ancestorWorship: 0
      };

      this.state.beliefs = {
        jiangShenWorship: 0,
        folkActivities: [],
        philosopherView: null
      };

      this.state.ideology = {
        class: this.getClassIdeology(),
        tags: [],
        influence: {},
        developmentHistory: []
      };

      if (identity.dependency !== undefined) {
        this.state.dependency = identity.dependency;
      }
      if (identity.trust !== undefined) {
        this.state.trust = identity.trust;
      }
      if (identity.militaryExp !== undefined) {
        this.state.militaryExp = identity.militaryExp;
        this.state.militaryRank = identity.militaryRank;
      }
      if (identity.connections !== undefined) {
        this.state.connections = identity.connections;
      }
      if (identity.land !== undefined) {
        this.state.land = identity.land;
      }
      if (identity.landlordDebt !== undefined) {
        this.state.landlordDebt = identity.landlordDebt;
      }
      if (identity.position !== undefined) {
        this.state.position = identity.position;
      }
      if (this.state.identity === 'merchant') {
        this.state.marketLevel = 'caoshi';
        this.state.guildMembership = [];
      }

      this.state.location = ['farmer', 'tenant', 'slave', 'soldier', 'clerk'].includes(this.state.identity) ? 'rural' : 'urban';

      this.initIdeology();
      this.showStatsPanel();
      this.updateStatsUI();
      this.renderCalendar();

      this.showIdentityOpening(identity);
      this.showNetworkPanel();
    }

    showNetworkPanel() {
      const location = this.state.location;
      const networkPanel = document.getElementById('network-panel');
      const networkIframe = document.getElementById('network-iframe');
      const networkSubtitle = document.getElementById('network-subtitle');

      if (!networkPanel || !networkIframe) return;

      if (location === 'urban') {
        networkIframe.src = '城市居民社会关系网络Demo (1).html';
        networkSubtitle.textContent = '建康城秦淮河畔的社会关系';
        networkPanel.classList.remove('hidden');
      } else if (location === 'rural') {
        networkIframe.src = '社会关系网络-娱乐模式.html';
        networkSubtitle.textContent = '建康城郊农村的社会关系';
        networkPanel.classList.remove('hidden');
      } else {
        networkPanel.classList.add('hidden');
      }
    }

    getClassIdeology() {
      const identity = this.state.identity;
      if (identity === 'clerk' || identity === 'soldier') return '寒门';
      if (identity === 'merchant') return 'merchant';
      if (identity === 'artisan') return 'artisan';
      return '寒门';
    }

    applyCareerFeedback() {
      if (!GameState.shared.completedModes.career) return;

      const bonus = Utils.checkLinkageBonus('entertainment');
      const bonusText = [];

      if (bonus.money) {
        this.state.money += bonus.money;
        bonusText.push(`金钱+${bonus.money}`);
      }
      if (bonus.reputation) {
        this.state.reputation += bonus.reputation;
        bonusText.push(`声望+${bonus.reputation}`);
      }
      if (bonus.connections) {
        this.state.connections = (this.state.connections || 0) + bonus.connections;
        bonusText.push(`人脉+${bonus.connections}`);
      }

      if (bonusText.length > 0) {
        this.feedbackText = `〖从职场模式继承：${bonusText.join(' · ')}〗`;
      }

      const resonanceEvents = Utils.handleModeSwitch('career', 'entertainment');
      if (resonanceEvents && resonanceEvents.length > 0) {
        this.resonanceEvents = resonanceEvents;
      }
    }

    initIdeology() {
      const ideologyClass = this.getClassIdeology();
      const ideologyModel = GameData.classIdeologyModels[ideologyClass];
      if (ideologyModel) {
        this.state.ideology.baseIdeology = ideologyModel;
        this.state.ideology.tags = [...ideologyModel.traits];
        this.state.ideology.influence = { ...ideologyModel.influence };
      }
    }

    joinGuild(guildName) {
      if (!this.state.guildMembership) {
        this.state.guildMembership = [];
      }
      if (!this.state.guildMembership.includes(guildName)) {
        this.state.guildMembership.push(guildName);
        this.state.reputation += 5;
        this.state.socialNetwork.businessRelations.push(guildName);
        this.updateSocialNetwork();
        return true;
      }
      return false;
    }

    addHometownRelation(townId) {
      if (!this.state.socialNetwork.hometownRelations.includes(townId)) {
        this.state.socialNetwork.hometownRelations.push(townId);
        this.state.reputation += 3;
        this.updateSocialNetwork();
        return true;
      }
      return false;
    }

    addPatronRelation(patronId) {
      if (!this.state.socialNetwork.patronRelations.includes(patronId)) {
        this.state.socialNetwork.patronRelations.push(patronId);
        this.state.reputation += 10;
        this.updateSocialNetwork();
        return true;
      }
      return false;
    }

    updateSocialNetwork() {
      let density = 0;
      
      const socialTypes = ['blood', 'mentor', 'hometown', 'business', 'patron'];
      for (const type of socialTypes) {
        if (this.state.socialNetwork[type + 'Relations']?.length > 0) {
          density += this.state.socialNetwork[type + 'Relations'].length * 15;
        }
      }

      this.state.socialNetwork.density = Math.min(100, density);
    }

    updateIdeologyFromChoice(choiceText, effects) {
      const ideology = this.state.ideology;
      const changes = [];

      if (effects.reputation && effects.reputation > 5) {
        if (!ideology.tags.includes('乐于助人')) {
          ideology.tags.push('乐于助人');
          changes.push('乐于助人');
        }
      }

      if (effects.money && effects.money > 50) {
        if (!ideology.tags.includes('精明务实')) {
          ideology.tags.push('精明务实');
          changes.push('精明务实');
        }
      }

      if (effects.socialPoints && effects.socialPoints > 10) {
        if (!ideology.tags.includes('善于交际')) {
          ideology.tags.push('善于交际');
          changes.push('善于交际');
        }
      }

      if (effects.craftSkill && effects.craftSkill > 5) {
        if (!ideology.tags.includes('精益求精')) {
          ideology.tags.push('精益求精');
          changes.push('精益求精');
        }
      }

      if (changes.length > 0) {
        ideology.developmentHistory.push({
          year: this.state.year,
          month: this.state.month,
          changes: changes,
          choice: choiceText
        });
      }
    }

    async showIdentityOpening(identity) {
      if (!identity.uniqueOpening) {
        this.loadNextEvent();
        return;
      }

      document.getElementById('game-content').classList.remove('hidden');
      document.getElementById('ending-panel').classList.add('hidden');

      const narrativeEl = document.getElementById('narrative-panel');
      const choiceEl = document.getElementById('choice-panel');

      narrativeEl.innerHTML = '';
      choiceEl.innerHTML = '';

      const titleEl = document.createElement('div');
      titleEl.style.fontSize = '18px';
      titleEl.style.marginBottom = '16px';
      titleEl.style.color = 'var(--accent-gold-light)';
      titleEl.textContent = `【${identity.name}】· ${identity.class}`;
      narrativeEl.appendChild(titleEl);

      await Utils.typewriter(narrativeEl, identity.uniqueOpening);

      if (this.feedbackText) {
        const bonusEl = document.createElement('div');
        bonusEl.style.fontSize = '14px';
        bonusEl.style.color = '#c9a66b';
        bonusEl.style.marginTop = '12px';
        bonusEl.style.fontStyle = 'italic';
        bonusEl.textContent = this.feedbackText;
        narrativeEl.appendChild(bonusEl);
      }

      const startBtn = document.createElement('button');
      startBtn.className = 'choice-btn';
      startBtn.textContent = '开始你的故事';
      startBtn.onclick = () => {
        this.loadNextEvent();
      };
      choiceEl.appendChild(startBtn);
    }

    showStatsPanel() {
      document.getElementById('industry-select').classList.add('hidden');
      document.getElementById('sub-select').classList.add('hidden');
      document.getElementById('stats-panel').classList.remove('hidden');
    }

    updateStatsUI() {
      document.getElementById('stat-money').textContent = this.state.money + '文';
      document.getElementById('stat-food').textContent = this.state.food + '斤';
      document.getElementById('stat-reputation').textContent = this.state.reputation;
      document.getElementById('stat-identity').textContent = GameData.identities[this.state.identity]?.name || '自耕农';
      document.getElementById('stat-location').textContent = this.state.location === 'rural' ? '农村' : '城市';

      const monthNames = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
      document.getElementById('stage-badge').textContent = monthNames[this.state.month - 1] + ' · 天监元年';

      document.getElementById('bar-money').style.width = Math.min(100, this.state.money / 5) + '%';
      document.getElementById('bar-food').style.width = Math.min(100, this.state.food) + '%';
      document.getElementById('bar-reputation').style.width = Math.min(100, this.state.reputation) + '%';

      const identity = GameData.identities[this.state.identity];
      if (identity && identity.class === '半自由' && this.state.identity === 'tenant') {
        document.getElementById('stat-dependency').style.display = 'block';
        document.getElementById('value-dependency').textContent = this.state.dependency;
        document.getElementById('bar-dependency').style.width = this.state.dependency + '%';
      } else {
        document.getElementById('stat-dependency').style.display = 'none';
      }

      if (identity && identity.class === '不自由') {
        document.getElementById('stat-trust').style.display = 'block';
        document.getElementById('value-trust').textContent = this.state.trust;
        document.getElementById('bar-trust').style.width = this.state.trust + '%';
      } else {
        document.getElementById('stat-trust').style.display = 'none';
      }

      if (identity && identity.class === '官户') {
        document.getElementById('stat-exp').style.display = 'block';
        document.getElementById('value-exp').textContent = this.state.militaryExp;
        const maxExp = 500;
        document.getElementById('bar-exp').style.width = Math.min(100, (this.state.militaryExp / maxExp) * 100) + '%';
      } else {
        document.getElementById('stat-exp').style.display = 'none';
      }

      if (identity && this.state.identity === 'clerk') {
        document.getElementById('stat-connections').style.display = 'block';
        document.getElementById('value-connections').textContent = this.state.connections;
        document.getElementById('bar-connections').style.width = Math.min(100, this.state.connections) + '%';
      } else {
        document.getElementById('stat-connections').style.display = 'none';
      }

      if (this.state.religion) {
        document.getElementById('stat-merit').textContent = this.state.religion.merit;
        document.getElementById('bar-merit').style.width = this.state.religion.merit + '%';
      }
      if (this.state.life) {
        document.getElementById('stat-satiety').textContent = this.state.life.satiety;
        document.getElementById('bar-satiety').style.width = this.state.life.satiety + '%';
        document.getElementById('stat-health').textContent = this.state.life.health;
        document.getElementById('bar-health').style.width = this.state.life.health + '%';
        
        const clothingLevels = ['粗布', '布衣', '绸衫', '锦袍'];
        const clothingIndex = Math.min(this.state.life.clothingLevel, clothingLevels.length - 1);
        document.getElementById('stat-clothing').textContent = clothingLevels[clothingIndex];
      }

      this.updateEventHistory();
    }

    renderCalendar() {
      const container = document.getElementById('festival-calendar');
      container.innerHTML = '';

      const monthNames = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
      const festivals = GameData.festivals;

      for (let month = 1; month <= 12; month++) {
        const day = document.createElement('div');
        day.style.display = 'flex';
        day.style.justifyContent = 'space-between';
        day.style.alignItems = 'center';
        day.style.padding = '4px 8px';
        day.style.borderBottom = '1px solid var(--border-secondary)';

        const monthLabel = document.createElement('span');
        monthLabel.style.fontSize = '12px';
        monthLabel.style.color = this.state.month === month ? 'var(--accent-gold)' : 'var(--text-secondary)';
        monthLabel.style.fontWeight = this.state.month === month ? 'bold' : 'normal';
        monthLabel.textContent = monthNames[month - 1] + '月';

        const festival = festivals.find(f => f.month === month);
        if (festival) {
          const festLabel = document.createElement('span');
          festLabel.style.fontSize = '10px';
          festLabel.style.color = 'var(--accent-gold-light)';
          festLabel.textContent = festival.name;
          day.appendChild(festLabel);
        }

        day.appendChild(monthLabel);
        container.appendChild(day);
      }
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
      const event = this.selectEvent();
      if (!event) {
        this.checkEnding();
        return;
      }

      this.currentEvent = event;
      this.state.eventHistory.push(event.id);

      document.getElementById('game-content').classList.remove('hidden');
      document.getElementById('ending-panel').classList.add('hidden');

      const narrativeEl = document.getElementById('narrative-panel');
      const choiceEl = document.getElementById('choice-panel');

      narrativeEl.innerHTML = '';
      choiceEl.innerHTML = '';

      await Utils.typewriter(narrativeEl, event.narrative);

      this.renderChoices(event.choices);
    }

    selectEvent() {
      const location = this.state.location;
      const currentMonth = this.state.month;
      const identity = this.state.identity;
      const craftType = this.state.craftType;
      
      let baseEvents = [];
      let identityEvents = [];

      if (location === 'rural') {
        baseEvents = GameData.ruralEvents || [];
        if (identity === 'farmer') identityEvents = GameData.farmerEvents || [];
        else if (identity === 'tenant') identityEvents = GameData.tenantEvents || [];
        else if (identity === 'slave') identityEvents = GameData.slaveEvents || [];
        else if (identity === 'soldier') identityEvents = GameData.soldierEvents || [];
        else if (identity === 'clerk') identityEvents = GameData.clerkEvents || [];
      } else if (location === 'urban') {
        baseEvents = GameData.urbanEvents || [];
        if (identity === 'merchant') identityEvents = GameData.merchantEvents || [];
        else if (identity === 'artisan') {
          if (craftType === 'textile') identityEvents = GameData.textileEvents || [];
          else if (craftType === 'metallurgy') identityEvents = GameData.metallurgyEvents || [];
          else if (craftType === 'shipbuilding') identityEvents = GameData.shipbuildingEvents || [];
          else if (craftType === 'porcelain') identityEvents = GameData.porcelainEvents || [];
          else if (craftType === 'papermaking') identityEvents = GameData.papermakingEvents || [];
        }
      }

      const allEvents = [...baseEvents, ...identityEvents, ...(GameData.religionEvents || [])];
      const available = allEvents.filter(e => !this.state.eventHistory.includes(e.id));
      if (available.length === 0) {
        return null;
      }

      const timeTrack = GameData.timeTracks[location];
      const currentStage = this.getCurrentStage(location, currentMonth);

      const sharedFestivals = GameData.timeTracks.sharedFestivals;
      const sharedFestivalEvent = available.find(e => e.festival && sharedFestivals.includes(e.festival) && e.month === currentMonth);
      if (sharedFestivalEvent) {
        return sharedFestivalEvent;
      }

      const trackSpecificFestivals = timeTrack.coreFestivals;
      const trackFestivalEvent = available.find(e => e.festival && trackSpecificFestivals.includes(e.festival) && e.month === currentMonth);
      if (trackFestivalEvent) {
        return trackFestivalEvent;
      }

      const identityStageEvents = identityEvents.filter(e => 
        !this.state.eventHistory.includes(e.id) && e.stage && e.stage === currentStage
      );
      if (identityStageEvents.length > 0 && Math.random() < 0.7) {
        return Utils.weightedSelect(identityStageEvents, () => 1);
      }

      const stageEvents = available.filter(e => e.stage && e.stage === currentStage);
      if (stageEvents.length > 0) {
        return Utils.weightedSelect(stageEvents, () => 1);
      }

      const identityMonthEvents = identityEvents.filter(e => 
        !this.state.eventHistory.includes(e.id) && e.month === currentMonth
      );
      if (identityMonthEvents.length > 0 && Math.random() < 0.6) {
        return Utils.weightedSelect(identityMonthEvents, () => 1);
      }

      const monthEvents = available.filter(e => e.month === currentMonth);
      if (monthEvents.length > 0) {
        return Utils.weightedSelect(monthEvents, () => 1);
      }

      return Utils.weightedSelect(available, () => 1);
    }

    getCurrentStage(location, month) {
      const timeTrack = GameData.timeTracks[location];
      if (!timeTrack) return '';

      for (const [stage, months] of Object.entries(timeTrack.stageMonths)) {
        if (months.includes(month)) {
          return stage;
        }
      }
      return '';
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
        if (val > 0) {
          if (key === 'money') parts.push('银钱+' + val + '文');
          else if (key === 'food') parts.push('粮食+' + val + '斤');
          else if (key === 'reputation') parts.push('声望+' + val);
          else if (key === 'socialPoints') parts.push('人脉+' + val);
          else if (key === 'dependency') parts.push('依附度+' + val);
          else if (key === 'trust') parts.push('信任度+' + val);
          else if (key === 'militaryExp') parts.push('军功+' + val);
          else if (key === 'connections') parts.push('人脉+' + val);
          else parts.push(key + '+' + val);
        } else if (val < 0) {
          if (key === 'money') parts.push('银钱' + val + '文');
          else if (key === 'food') parts.push('粮食' + val + '斤');
          else if (key === 'reputation') parts.push('声望' + val);
          else if (key === 'dependency') parts.push('依附度' + val);
          else if (key === 'trust') parts.push('信任度' + val);
          else parts.push(key + val);
        }
      }
      return parts.join(' · ') || '无明显效果';
    }

    async handleChoice(index) {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const choice = this.currentEvent.choices[index];
      this.applyEffects(choice.effects);
      this.updateIdeologyFromChoice(choice.text, choice.effects);

      if (choice.joinGuild) {
        this.joinGuild(choice.joinGuild);
      }

      if (choice.addHometown) {
        this.addHometownRelation(choice.addHometown);
      }

      if (choice.addPatron) {
        this.addPatronRelation(choice.addPatron);
      }

      if (choice.triggerRelationEvolution) {
        this.applyRelationEvolution(choice.triggerRelationEvolution);
      }

      this.checkSpecialConditions();

      this.updateStatsUI();
      Utils.save();

      await new Promise(r => setTimeout(r, 800));

      this.isAnimating = false;
      const ended = this.advanceTime();
      if (!ended) {
        this.loadNextEvent();
      }
    }

    applyRelationEvolution(trigger) {
      const rules = GameData.relationshipEvolutionRules || [];
      const rule = rules.find(r => r.trigger === trigger);
      if (rule) {
        for (const [key, val] of Object.entries(rule.effects)) {
          if (key.includes('声望')) {
            this.state.reputation = (this.state.reputation || 0) + val;
          } else if (key.includes('资财')) {
            this.state.money = (this.state.money || 0) + val;
          }
        }
      }
    }

    applyEffects(effects) {
      if (!effects) return;

      const state = this.state;
      for (const [key, val] of Object.entries(effects)) {
        if (state.hasOwnProperty(key)) {
          state[key] += val;
          if (key === 'money') {
            this.state.totalIncome += Math.max(0, val);
          }
        } else if (key === 'merit' && state.religion) {
          state.religion.merit = (state.religion.merit || 0) + val;
        } else if (key === 'taoismLevel' && state.religion) {
          state.religion.taoismLevel = (state.religion.taoismLevel || 0) + val;
        } else if (key === 'buddhismLevel' && state.religion) {
          state.religion.buddhismLevel = (state.religion.buddhismLevel || 0) + val;
        } else if (key === 'satiety' && state.life) {
          state.life.satiety = (state.life.satiety || 0) + val;
        } else if (key === 'health' && state.life) {
          state.life.health = (state.life.health || 0) + val;
        } else if (key === 'clothingLevel' && state.life) {
          state.life.clothingLevel = (state.life.clothingLevel || 0) + val;
        } else if (key === 'residenceLevel' && state.life) {
          state.life.residenceLevel = (state.life.residenceLevel || 0) + val;
        } else if (key === 'teaSkill' && state.life) {
          state.life.teaSkill = (state.life.teaSkill || 0) + val;
        } else if (key === 'wineSkill' && state.life) {
          state.life.wineSkill = (state.life.wineSkill || 0) + val;
        } else if (key === 'married' && state.family) {
          state.family.married = val;
        } else if (key === 'jiangShenWorship' && state.beliefs) {
          state.beliefs.jiangShenWorship = (state.beliefs.jiangShenWorship || 0) + val;
        } else if (key === 'tags' && Array.isArray(val)) {
          val.forEach(tag => {
            if (!state.ideology.tags.includes(tag)) {
              state.ideology.tags.push(tag);
            }
          });
        }
      }

      if (state.religion) {
        if (state.religion.merit < 0) state.religion.merit = 0;
        if (state.religion.merit > 100) state.religion.merit = 100;
      }
      if (state.life) {
        if (state.life.satiety < 0) state.life.satiety = 0;
        if (state.life.satiety > 100) state.life.satiety = 100;
        if (state.life.health < 0) state.life.health = 0;
        if (state.life.health > 100) state.life.health = 100;
      }
      if (this.state.dependency !== undefined && this.state.dependency < 0) this.state.dependency = 0;
      if (this.state.dependency !== undefined && this.state.dependency > 100) this.state.dependency = 100;
      if (this.state.trust !== undefined && this.state.trust < 0) this.state.trust = 0;
      if (this.state.trust !== undefined && this.state.trust > 100) this.state.trust = 100;
    }

    checkSpecialConditions() {
      const identity = this.state.identity;

      if (identity === 'tenant') {
        if (this.state.money >= 500 && this.state.dependency < 50) {
          alert('恭喜！你攒够了赎身钱，可以向地主提出赎身了！');
          this.state.identity = 'farmer';
          this.state.dependency = undefined;
          this.state.money -= 500;
        }
      }

      if (identity === 'slave') {
        if (this.state.trust >= 100) {
          alert('恭喜！主人决定放免你，你获得了自由身！');
          this.state.identity = 'farmer';
          this.state.trust = undefined;
          this.state.money = 100;
          this.state.food = 50;
        }
      }

      if (identity === 'soldier') {
        const ranks = GameData.militaryRanks;
        const currentRank = this.state.militaryRank;
        for (const [rank, requirements] of Object.entries(ranks)) {
          if (this.state.militaryExp >= requirements.expRequired && 
              (currentRank === '普通兵' || 
               Object.keys(ranks).indexOf(rank) > Object.keys(ranks).indexOf(currentRank))) {
            this.state.militaryRank = rank;
            alert(`恭喜！你晋升为${rank}！`);
          }
        }
      }

      if (identity === 'clerk') {
        if (this.state.connections >= 100) {
          alert('恭喜！你被长官举荐，获得入仕资格！');
          this.state.position = '主簿';
        }
      }

      if (identity === 'merchant') {
        if (this.state.money >= 1000 && this.state.marketLevel === 'caoshi') {
          this.state.marketLevel = 'dashi';
          alert('恭喜！你获得了市籍，可以进入正规大市经营了！');
        }
        if (this.state.money >= 3000 && this.state.marketLevel === 'dashi') {
          this.state.marketLevel = 'hubi';
          alert('恭喜！你获得了过所，可以进行边境贸易了！');
        }
      }

      if (this.state.month === 12 && (identity === 'farmer' || identity === 'tenant')) {
        this.showYearEndTaxSummary();
      }

      this.checkUrbanRuralMobility();
    }

    checkUrbanRuralMobility() {
      const identity = this.state.identity;
      const location = this.state.location;
      const money = this.state.money || 0;
      const reputation = this.state.reputation || 0;
      const year = this.state.year || 1;

      if (location === 'rural') {
        if (identity === 'farmer') {
          if (money >= 800 && reputation >= 30 && Math.random() < 0.15) {
            this.triggerMobilityEvent('mobility_001');
          }
          if (money <= 50 && year >= 2 && Math.random() < 0.2) {
            this.triggerMobilityEvent('mobility_002');
          }
        }
        if (identity === 'tenant' && money >= 600 && reputation >= 20 && Math.random() < 0.1) {
          this.triggerMobilityEvent('mobility_003');
        }
        if (identity === 'slave' && this.state.trust >= 80 && Math.random() < 0.08) {
          this.triggerMobilityEvent('mobility_004');
        }
        if (identity === 'soldier' && this.state.militaryExp >= 100 && Math.random() < 0.1) {
          this.triggerMobilityEvent('mobility_005');
        }
        if (identity === 'clerk' && this.state.connections >= 60 && Math.random() < 0.12) {
          this.triggerMobilityEvent('mobility_006');
        }
      }

      if (location === 'urban') {
        if (identity === 'merchant' && money <= 100 && year >= 2 && Math.random() < 0.15) {
          this.triggerMobilityEvent('mobility_008');
        }
      }
    }

    triggerMobilityEvent(eventId) {
      const event = GameData.urbanRuralMobility?.find(e => e.id === eventId);
      if (!event || this.state.eventHistory.includes(eventId)) return;

      this.currentEvent = event;
      this.state.eventHistory.push(eventId);

      const narrativeEl = document.getElementById('narrative-panel');
      const choiceEl = document.getElementById('choice-panel');

      narrativeEl.innerHTML = '';
      choiceEl.innerHTML = '';

      this.isAnimating = true;
      Utils.typewriter(narrativeEl, event.narrative).then(() => {
        this.renderMobilityChoices(event.choices);
        this.isAnimating = false;
      });
    }

    renderMobilityChoices(choices) {
      const choiceEl = document.getElementById('choice-panel');

      choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `
          ${choice.text}
          <div class="effect-hint">${this.formatEffects(choice.effects)}</div>
        `;
        btn.onclick = () => this.handleMobilityChoice(index);
        choiceEl.appendChild(btn);
      });
    }

    async handleMobilityChoice(index) {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const choice = this.currentEvent.choices[index];
      this.applyEffects(choice.effects);

      if (choice.effects?.location === 'urban') {
        this.state.location = 'urban';
        document.getElementById('stat-location').textContent = '城市';
      } else if (choice.effects?.location === 'rural') {
        this.state.location = 'rural';
        document.getElementById('stat-location').textContent = '农村';
      }

      if (choice.effects?.newIdentity) {
        this.state.identity = choice.effects.newIdentity;
        document.getElementById('stat-identity').textContent = 
          GameData.identities[choice.effects.newIdentity]?.name || choice.effects.newIdentity;
      }

      this.updateStatsUI();
      this.showNetworkPanel();
      Utils.save();

      await new Promise(r => setTimeout(r, 800));

      this.isAnimating = false;
      const ended = this.advanceTime();
      if (!ended) {
        this.loadNextEvent();
      }
    }

    showYearEndTaxSummary() {
      const identity = GameData.identities[this.state.identity];
      const land = this.state.land || 30;
      
      const taxes = {
        tianzu: Math.floor(40 + land * 2),
        hudiao: 60,
        kouqian: Math.floor(Math.random() * 30) + 10,
        zawudiao: Math.floor(Math.random() * 20) + 10,
        tangdingshui: 20
      };

      let totalTax = 0;
      let taxSummary = '【年度赋税结算】\n\n';
      for (const [key, amount] of Object.entries(taxes)) {
        const taxInfo = GameData.taxSystem[key];
        if (taxInfo) {
          taxSummary += `${taxInfo.name}：${amount}文\n`;
          totalTax += amount;
        }
      }

      this.state.totalTaxes += totalTax;
      this.state.money -= totalTax;
      if (this.state.money < 0) this.state.money = 0;

      const taxRate = this.state.totalIncome > 0 
        ? Math.round((this.state.totalTaxes / this.state.totalIncome) * 100) 
        : 0;

      taxSummary += `\n全年总收入：${this.state.totalIncome}文`;
      taxSummary += `\n全年总税负：${this.state.totalTaxes}文`;
      taxSummary += `\n税负占比：${taxRate}%`;

      if (taxRate >= 50) {
        taxSummary += '\n\n【警示】税负过重，恐难以为继！';
      }

      alert(taxSummary);
    }

    advanceTime() {
      this.state.month++;
      if (this.state.month > 12) {
        this.state.month = 1;
        this.state.year++;
        this.checkEnding();
        return true;
      }

      if (this.state.life) {
        this.state.life.satiety -= 15;
        if (this.state.life.satiety < 0) this.state.life.satiety = 0;
        
        if (this.state.life.satiety < 10) {
          this.state.life.health -= 10;
          if (this.state.life.health < 0) this.state.life.health = 0;
        } else if (this.state.life.satiety < 30) {
          this.state.life.health -= 5;
        }
      }

      this.applyTaxes();
      this.renderCalendar();
      this.updateStatsUI();
      return false;
    }

    applyTaxes() {
      const identity = GameData.identities[this.state.identity];
      if (!identity) return;

      const taxRate = identity.taxRate || 0;
      const taxAmount = Math.floor(this.state.money * taxRate);
      this.state.money -= taxAmount;
      this.state.totalTaxes += taxAmount;

      if (this.state.money < 0) this.state.money = 0;

      if (this.state.identity === 'tenant') {
        const rent = Math.floor(this.state.food * 0.5);
        this.state.food -= rent;
        this.state.dependency += 5;
      }

      if (this.state.identity === 'slave') {
        this.state.food = 10;
      }

      if (this.state.identity === 'soldier') {
        this.state.food = 20;
        if (Math.random() < 0.3) {
          this.state.militaryExp += Math.floor(Math.random() * 10) + 5;
        }
      }

      if (this.state.identity === 'clerk') {
        this.state.money += 30;
      }
    }

    checkEnding() {
      const state = this.state;
      let endingType = 'good';
      let endingText = '';

      if (state.money >= 1000 && state.reputation >= 30) {
        endingType = 'wealthy';
        endingText = '你凭借勤劳和智慧，积累了丰厚的财富，成为了当地的富户。';
      } else if (state.money < 50 && state.food < 20) {
        endingType = 'poor';
        endingText = '一年下来，你入不敷出，生活日渐困顿。';
      } else if (state.reputation >= 50) {
        endingType = 'respected';
        endingText = '你乐于助人，深受邻里爱戴，成为了乡中德高望重的人物。';
      } else if (state.identity === 'slave' && state.trust >= 50) {
        endingType = 'freed';
        endingText = '你获得了主人的信任，虽然仍未被放免，但生活已有改善。';
      } else if (state.identity === 'soldier' && state.militaryRank !== '普通兵') {
        endingType = 'promoted';
        endingText = `你凭借军功晋升为${state.militaryRank}，前途可期。`;
      } else {
        endingType = 'normal';
        endingText = '一年的生活平淡而充实，你继续着自己的日子。';
      }

      this.renderEnding(endingType, endingText);
    }

    renderEnding(type, text) {
      document.getElementById('game-content').classList.add('hidden');
      document.getElementById('ending-panel').classList.remove('hidden');

      const titles = {
        good: '善终',
        wealthy: '经商暴富',
        poor: '惨淡收场',
        respected: '德高望重',
        normal: '平淡一生',
        freed: '重获新生',
        promoted: '军功荣耀'
      };

      document.getElementById('ending-title').textContent = titles[type] || '善终';
      document.getElementById('ending-narrative').textContent = text;

      document.getElementById('ending-summary').textContent = `
        身份：${GameData.identities[this.state.identity]?.name || '自耕农'}
        地点：${this.state.location === 'rural' ? '农村' : '城市'}
        年份：天监元年至天监二年
        经历事件：${this.state.eventHistory.length}个
      `;

      document.getElementById('ending-economy').textContent = `
        最终银钱：${this.state.money}文
        最终粮食：${this.state.food}斤
        最终声望：${this.state.reputation}
        全年税负：${this.state.totalTaxes}文
      `;

      this.state.ending = type;
      global.GameState.shared.completedModes.entertainment = true;

      Utils.save();
    }

    loadProgress() {
      this.showStatsPanel();
      this.updateStatsUI();
      this.renderCalendar();
      this.loadNextEvent();
    }

    restart() {
      this.state.industry = null;
      this.state.subIdentity = null;
      this.state.identity = null;
      this.state.craftType = null;
      this.state.location = null;
      this.state.money = 0;
      this.state.food = 0;
      this.state.reputation = 0;
      this.state.year = 502;
      this.state.month = 1;
      this.state.eventHistory = [];
      this.state.socialPoints = {};
      this.state.taxHistory = [];
      this.state.totalIncome = 0;
      this.state.totalTaxes = 0;

      this.showIndustrySelect();
    }
  }

  global.EntertainmentMode = new EntertainmentMode();
})(window);