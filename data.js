window.GameData = {
  origins: {
    'hanmen': {
      name: '寒门',
      description: '耕读传家，虽清贫但有气节',
      entertainmentIdentity: 'farmer',
      entertainmentInitial: { money: 200, food: 100, land: 30 },
      careerInitial: { military: 0, civil: 2, guanxi: 1, rank: '杂佐' },
      linkageStrength: { L1: 100, L2: 100, L3: 50, L4: 30, L5: 80 }
    },
    'low-shizu': {
      name: '低级士族',
      description: '地方望族，有家学渊源',
      entertainmentIdentity: 'artisan',
      entertainmentInitial: { money: 500, food: 80, land: 50 },
      careerInitial: { military: 2, civil: 5, guanxi: 3, rank: '参军' },
      linkageStrength: { L1: 100, L2: 80, L3: 80, L4: 60, L5: 100 }
    },
    'high-shizu': {
      name: '高门士族',
      description: '名门望族，世代为官',
      entertainmentIdentity: 'merchant',
      entertainmentInitial: { money: 2000, food: 150, land: 100 },
      careerInitial: { military: 5, civil: 8, guanxi: 10, rank: '尚书郎' },
      linkageStrength: { L1: 100, L2: 40, L3: 100, L4: 100, L5: 100 }
    }
  },

  crossModeEvents: [
    {
      id: 'linkage_rebel_join',
      triggerMode: 'career',
      triggerCondition: '萧衍起兵时选择"投奔义师"',
      resonateMode: 'entertainment',
      narrative: '家乡传来消息，朝廷正在征调民夫修筑战壕。你的家人被派去服役，三天不能回家。',
      effects: { food: -30 },
      description: '因职场模式选择投奔萧衍，家乡征调民夫修战壕'
    },
    {
      id: 'linkage_battle_victory',
      triggerMode: 'career',
      triggerCondition: '钟离之战中出战后幸存',
      resonateMode: 'entertainment',
      narrative: '建康城有使者前来报捷！你在前线立下战功的消息传到了家乡，邻人纷纷送来贺礼。',
      effects: { reputation: 5, money: 100 },
      description: '因职场模式钟离之战胜利，家中声望提升'
    },
    {
      id: 'linkage_impeachment_crisis',
      triggerMode: 'career',
      triggerCondition: '人情<15触发弹劾危机',
      resonateMode: 'entertainment',
      narrative: '家人听说你在朝中遭遇弹劾，急忙到城中打点关系。母亲为此急得病倒了。',
      effects: { money: -500, health: -20 },
      description: '因职场模式弹劾危机，家人到城中打点'
    },
    {
      id: 'linkage_bribe_disaster',
      triggerMode: 'career',
      triggerCondition: '选择"破财免灾"度过危机',
      resonateMode: 'entertainment',
      narrative: '为了帮你度过难关，家族不得不变卖了十亩田产。粮价也因此上涨了一成。',
      effects: { land: -10 },
      description: '因职场模式破财免灾，家族田产被变卖'
    },
    {
      id: 'linkage_rural_to_urban',
      triggerMode: 'entertainment',
      triggerCondition: '从农村流转到城市',
      resonateMode: 'career',
      narrative: '你在城市生活期间积累了不少人脉，这些社会关系在官场也派上了用场。',
      effects: { guanxi: 1 },
      description: '因娱乐模式流转城市，获得城市人际关系网'
    },
    {
      id: 'linkage_temple_land_loss',
      triggerMode: 'entertainment',
      triggerCondition: '被寺院吞并田产',
      resonateMode: 'career',
      narrative: '你对佛教寺院的土地兼并深有体会，处理僧祇户相关事件时格外得心应手。',
      effects: { civil: 2 },
      description: '因娱乐模式被寺院吞并田产，处理僧祇户事件时文治提升'
    },
    {
      id: 'linkage_business_success',
      triggerMode: 'entertainment',
      triggerCondition: '经商成功积累大量财富',
      resonateMode: 'career',
      narrative: '你凭借经商积累的财富，捐资获得了官职，得以跳过队主直接担任参军。',
      effects: { military: 2, guanxi: 2 },
      description: '因娱乐模式经商成功，购买官位直接参军'
    },
    {
      id: 'linkage_tax_death',
      triggerMode: 'entertainment',
      triggerCondition: '家人因赋税过重去世',
      resonateMode: 'career',
      narrative: '你深知百姓疾苦，上任后大幅减税。虽然得罪了地方势力，但赢得了民心。',
      effects: { guanxi: -3, reputation: 10 },
      description: '因娱乐模式家人赋税去世，职场减税获得民望'
    },
    {
      id: 'linkage_buddhist_convert',
      triggerMode: 'entertainment',
      triggerCondition: '参加佛教法会并选择"皈依"',
      resonateMode: 'career',
      narrative: '因你的佛教信仰，梁武帝召你入瓦官寺论佛，对你颇为赏识。',
      effects: { civil: 3, emperorFavor: 5 },
      description: '因娱乐模式皈依佛教，受梁武帝赏识'
    },
    {
      id: 'linkage_houjing_siege',
      triggerMode: 'career',
      triggerCondition: '侯景之乱中选择守城',
      resonateMode: 'entertainment',
      narrative: '侯景之乱爆发，城门关闭，你的家人被困在城外。你必须放下公务，先去寻找家人。',
      effects: { timeLost: 5 },
      description: '因职场模式侯景守城，家人被困城外'
    }
  ],

  achievements: {
    '生前身后名': { desc: '娱乐富足终老 + 职场高位善终', icon: '🏆' },
    '金玉其外': { desc: '娱乐富足 + 职场悲惨', icon: '🏆' },
    '冷暖自知': { desc: '娱乐穷困 + 职场风光', icon: '🏆' },
    '人生两苦': { desc: '娱乐穷困 + 职场悲剧', icon: '🏆' },
    '看破红尘': { desc: '娱乐出家 + 职场经侯景之乱后存活', icon: '🏆' },
    '以身殉道': { desc: '娱乐出家/入道 + 职场侯景遇难', icon: '🏆' },
    '举家殉国': { desc: '娱乐战乱死 + 职场侯景遇难', icon: '🏆' },
    '活着就是胜利': { desc: '娱乐善终 + 职场侯景存活', icon: '🏆' },
    '富贵险中求': { desc: '娱乐暴富 + 职场攀附/联姻', icon: '🏆' },
    '第一桶金': { desc: '任意模式游玩通过引导局', icon: '🎖️' },
    '殉节者': { desc: '职场模式中选择不投降', icon: '🎖️' },
    '三七二十四': { desc: '在决策中连续三次选择情理而非法理', icon: '🎖️' },
    '虎口余生': { desc: '人情<5时通过"拼死一搏"逆转', icon: '🎖️' },
    '寒门崛起': { desc: '出身寒门最终位居三公', icon: '🏆' },
    '门阀陨落': { desc: '出身高门最终沦为庶人', icon: '🏆' },
    '双轨贯通': { desc: '完成娱乐模式和职场模式各一局', icon: '🏆' }
  },

  festivals: [
    { id: 'yuandan', name: '元正', month: 1, desc: '正月一日，岁之朝', type: 'shared' },
    { id: 'renri', name: '人日', month: 1, desc: '正月七日，剪彩为人', type: 'rural' },
    { id: 'lichun', name: '立春', month: 1, desc: '立春日，剪彩燕迎春', type: 'rural' },
    { id: 'dengjie', name: '灯节', month: 1, desc: '正月十五，迎紫姑卜蚕桑', type: 'shared' },
    { id: 'songqiong', name: '送穷', month: 1, desc: '正月晦日，送穷鬼', type: 'urban' },
    { id: 'fobirth', name: '佛诞', month: 2, desc: '二月八日，八关斋戒', type: 'shared' },
    { id: 'chunfen', name: '春分', month: 2, desc: '昼夜平分，种戒火草', type: 'rural' },
    { id: 'sheri', name: '社日', month: 2, desc: '结宗会社，宰牲祭神', type: 'rural' },
    { id: 'hanshi', name: '寒食', month: 3, desc: '禁火三日，造饧粥', type: 'shared' },
    { id: 'shangsi', name: '上巳', month: 3, desc: '三月三日，流杯曲水', type: 'shared' },
    { id: 'huogu', name: '获谷鸟', month: 4, desc: '四月，候获谷鸟耕锄', type: 'rural' },
    { id: 'yufo', name: '浴佛节', month: 4, desc: '四月八日，五色香水浴佛', type: 'shared' },
    { id: 'jiexia', name: '结夏', month: 4, desc: '四月十五，僧尼安居', type: 'urban' },
    { id: 'ewuyue', name: '恶月', month: 5, desc: '五月恶月，多禁忌', type: 'rural' },
    { id: 'duanwu', name: '端午', month: 5, desc: '五月五日，竞渡悬艾', type: 'shared' },
    { id: 'fuji', name: '伏日', month: 6, desc: '六月伏日，嗜汤饼', type: 'urban' },
    { id: 'qiqi', name: '七夕', month: 7, desc: '七月七日，穿针乞巧', type: 'shared' },
    { id: 'zhongyuan', name: '中元', month: 7, desc: '七月十五，盂兰盆会', type: 'shared' },
    { id: 'tianjiu', name: '天灸', month: 8, desc: '八月十四，天灸习俗', type: 'urban' },
    { id: 'chongyang', name: '重阳', month: 9, desc: '九月九日，登高佩茱萸', type: 'shared' },
    { id: 'qinsuishou', name: '秦岁首', month: 10, desc: '十月朔日，小春出游', type: 'urban' },
    { id: 'dongzhi', name: '冬至', month: 11, desc: '冬至量影，作赤豆粥', type: 'shared' },
    { id: 'laji', name: '腊日', month: 12, desc: '十二月八日，逐疫祭灶', type: 'shared' },
    { id: 'chuxi', name: '除夕', month: 12, desc: '岁暮守岁，辞旧迎新', type: 'shared' }
  ],

  timeTracks: {
    rural: {
      name: '农历节令轨',
      stages: ['春耕', '夏耘', '秋收', '冬藏'],
      stageMonths: {
        '春耕': [1, 2, 3],
        '夏耘': [4, 5, 6],
        '秋收': [7, 8, 9],
        '冬藏': [10, 11, 12]
      },
      coreFestivals: ['yuandan', 'lichun', 'chunfen', 'sheri', 'hanshi', 'shangsi', 'huogu', 'yufo', 'ewuyue', 'duanwu', 'qiqi', 'zhongyuan', 'chongyang', 'dongzhi', 'laji', 'chuxi']
    },
    urban: {
      name: '月份周期轨',
      stages: ['正月开业', '春季交易', '夏季经营', '秋季备货', '年终结算'],
      stageMonths: {
        '正月开业': [1],
        '春季交易': [2, 3, 4],
        '夏季经营': [5, 6, 7],
        '秋季备货': [8, 9, 10],
        '年终结算': [11, 12]
      },
      coreFestivals: ['yuandan', 'dengjie', 'songqiong', 'fobirth', 'jiexia', 'duanwu', 'fuji', 'qiqi', 'zhongyuan', 'tianjiu', 'chongyang', 'qinsuishou', 'dongzhi', 'laji', 'chuxi'],
      monthlyEvents: {
        1: ['market_open', 'guild_plan', 'official_inspection'],
        2: ['fulfill_orders', 'guild_meeting'],
        3: ['quarterly_check', 'spring_fair'],
        4: ['summer_stock', 'quarterly_inspection'],
        5: ['season_change', 'guild_meeting'],
        6: ['inventory_check', 'repair_workshop'],
        7: ['autumn_stock', 'quarterly_check'],
        8: ['autumn_arrival', 'autumn_demand'],
        9: ['guild_meeting', 'autumn_fair'],
        10: ['year_prep', 'debt_collection'],
        11: ['winter_arrival', 'year_summary'],
        12: ['final_account', 'tax_payment', 'guild_evaluation']
      }
    },
    sharedFestivals: ['yuandan', 'dengjie', 'fobirth', 'hanshi', 'shangsi', 'yufo', 'duanwu', 'qiqi', 'zhongyuan', 'chongyang', 'dongzhi', 'laji', 'chuxi']
  },

  identities: {
    farmer: { 
      name: '自耕农', 
      class: '自由民',
      initialMoney: 200, 
      initialFood: 100, 
      land: 30, 
      taxRate: 0.37,
      description: '三十亩薄田，一头借来的牛，日子清贫但自由',
      freedom: 80,
      pressure: 60,
      mobility: 50,
      social: 40,
      historicalSource: '《宋书·食货志》记载，宋齐时期自耕农占户口多数',
      uniqueOpening: '天监元年春，你站在自家田埂上，望着那三十亩薄田。这是祖上传下来的家业，虽不富裕，但终究是自己的。去年收成尚可，留下的余粮勉强够吃到秋收。田边那棵老桑树已经发了新芽，你盘算着今年要多种两亩稻子，再养几只鸡补贴家用。远处传来里正的吆喝声，说是朝廷要清丈田亩，重新核定税额。你心里一紧——去年的田税已经让你喘不过气来，若是再加税……'
    },
    tenant: { 
      name: '佃户（部曲/佃客）', 
      class: '半自由',
      initialMoney: 50, 
      initialFood: 60, 
      land: 20,
      landlordDebt: 100,
      dependency: 60,
      taxRate: 0.5,
      description: '租种地主二十亩，收成五成归主家，身不由己',
      freedom: 30,
      pressure: 80,
      mobility: 20,
      social: 30,
      historicalSource: '《南齐书》记载，佃客依附于地主，无独立户籍',
      uniqueOpening: '你是王姓地主的佃客，已经在这片土地上劳作了五年。租种着二十亩地，收成五成归主家，剩下的勉强够一家人糊口。去年秋旱，收成锐减，欠下的租子至今还没还清。地主家的管家昨天又来了，催着要债，说若是再还不上，就要收回两亩地。你望着那片干裂的田地，心中一片茫然。春耕在即，可种子和农具都还没着落……'
    },
    slave: { 
      name: '奴隶（奴婢）', 
      class: '不自由',
      initialMoney: 0, 
      initialFood: 0, 
      trust: 0,
      description: '无自由、无财产，生死由主，唯有等待放免',
      freedom: 5,
      pressure: 95,
      mobility: 10,
      social: 20,
      historicalSource: '《南史》记载，南朝奴隶主要来源于战争俘虏和债务',
      uniqueOpening: '你是张大户人家的奴仆，没有名字，只被叫做"阿奴"。三年前，父亲因为还不上官府的苛捐杂税，把你卖入张家抵债。从此，你失去了自由，失去了财产，甚至失去了做人的尊严。每天天不亮就要起床干活，挑水、劈柴、种地、喂牲口，稍有懈怠便是一顿打骂。主人家的少爷比你还小两岁，却对你呼来喝去。你常常在夜里偷偷哭泣，盼望着有一天能被放免……'
    },
    soldier: { 
      name: '兵户', 
      class: '官户',
      initialMoney: 100, 
      initialFood: 80, 
      militaryRank: '普通兵',
      militaryExp: 0,
      taxRate: 0,
      description: '世袭从军，平时屯田，战时出征，户籍锁死',
      freedom: 20,
      pressure: 75,
      mobility: 15,
      social: 35,
      historicalSource: '《宋书·百官志》记载，兵户为世袭军籍，不得脱籍',
      uniqueOpening: '你出身兵户，这是世代相传的命运。从你祖父那一辈起，你们家就被编入军籍，不得脱籍。平时屯田种地，战时出征打仗。去年钟离之战，你侥幸存活，却也目睹了太多的杀戮。如今你驻守在建康城外的军营，每天操练、巡逻、种地。军饷微薄，口粮时常短缺。听说北方的魏人又在边境集结，你心里清楚，一场大战在所难免……'
    },
    clerk: { 
      name: '吏户', 
      class: '半自由',
      initialMoney: 150, 
      initialFood: 70, 
      position: '里正',
      connections: 30,
      taxRate: 0.15,
      description: '县衙小吏，微薄俸禄，掌握信息，夹缝求生',
      freedom: 50,
      pressure: 55,
      mobility: 40,
      social: 70,
      historicalSource: '《通典》记载，吏户为官府服务，无正式编制',
      uniqueOpening: '你是建康县的里正，虽然只是个芝麻绿豆大的小吏，但手中握着一乡的户籍和田亩册。这份差事说起来体面，实则辛苦——既要帮官府催缴赋税、维持治安，又要应付乡绅豪强的各种要求。上个月，县太爷点名要你严查隐匿田亩，可那些大户人家哪个不是有关系有背景？你夹在中间，左右为难。不过，这也让你比普通人多了一些信息渠道，或许……能从中找到一些机会？'
    },
    artisan: { 
      name: '手工业者', 
      class: '自由民',
      initialMoney: 300, 
      initialFood: 50, 
      workshop: true, 
      craftType: null,
      taxRate: 0.2,
      description: '有手艺在身，靠技艺谋生，收入较稳定',
      freedom: 70,
      pressure: 45,
      mobility: 60,
      social: 45,
      historicalSource: '《南齐书》记载，南朝手工业发达，工匠多有专门技艺'
    },
    merchant: { 
      name: '小商贩', 
      class: '自由民',
      initialMoney: 500, 
      initialFood: 30, 
      stall: true,
      marketLevel: '草市',
      taxRate: 0.25,
      description: '有本钱但需付市税，风险与机遇并存',
      freedom: 75,
      pressure: 50,
      mobility: 80,
      social: 55,
      historicalSource: '《通典》记载，南朝草市、大市并行，商业繁荣'
    }
  },

  taxSystem: {
    tianzu: { name: '田租', rate: '丁男禄米二担 + 亩税米二升/亩', source: '《宋书》《南齐书》', trigger: '秋收后' },
    hudiao: { name: '户调', rate: '绢二匹 + 绵三斤（或折纳）', source: '《晋书·食货志》', trigger: '年末' },
    kouqian: { name: '口钱', rate: '按人头征收', source: '《通典》', trigger: '随机事件' },
    zawudiao: { name: '杂物调', rate: '官府临时征派（木材、柴草、麻等）', source: '《南齐书》', trigger: '随机事件' },
    tangdingshui: { name: '塘丁税', rate: '水利维护徭役或折纳', source: '《宋书》', trigger: '春耕前' },
    guanjinshui: { name: '关津税', rate: '过路费', source: '《通典》', trigger: '进城交易时' }
  },

  craftTypes: {
    textile: { 
      name: '纺织', 
      description: '养蚕缫丝，织绢织布，绢布可纳税可售卖',
      baseIncome: 80,
      seasonalBonus: { spring: 1.2, autumn: 1.1 },
      historicalSource: '豫章一年蚕四五熟，永嘉一年八熟'
    },
    metallurgy: { 
      name: '冶铸', 
      description: '水排鼓风，灌钢炼钢，打造农具兵器',
      baseIncome: 120,
      seasonalBonus: { summer: 1.3 },
      historicalSource: '陶弘景《本草经集注》记载灌钢法'
    },
    shipbuilding: { 
      name: '造船', 
      description: '建造运输船、战船、渔船',
      baseIncome: 150,
      seasonalBonus: { spring: 1.2, winter: 1.1 },
      historicalSource: '建康朱雀航是重要造船基地'
    },
    porcelain: { 
      name: '制瓷（青瓷）', 
      description: '采土制坯，上釉烧制，越窑青瓷名闻天下',
      baseIncome: 100,
      seasonalBonus: { autumn: 1.2 },
      historicalSource: '魏晋南北朝新兴手工业，南方以青瓷为代表'
    },
    papermaking: { 
      name: '造纸', 
      description: '压光染色，制作银光纸，文化传承之载体',
      baseIncome: 90,
      seasonalBonus: { winter: 1.2 },
      historicalSource: '建康"银光纸"是著名产品'
    }
  },

  militaryRanks: {
    '普通兵': { command: 0, expRequired: 0 },
    '队主': { command: 50, expRequired: 30 },
    '军主': { command: 1000, expRequired: 100 },
    '太守': { command: 5000, expRequired: 300 },
    '刺史': { command: 10000, expRequired: 500 }
  },

  marketLevels: {
    caoshi: { name: '草市', taxRate: 0.1, requirement: '无', description: '临时集市，税收较轻，价格波动大' },
    dashi: { name: '正规大市', taxRate: 0.2, requirement: '市籍', description: '固定摊位，需要交纳摊位费，有营业时间限制' },
    hubi: { name: '互市/边贸', taxRate: 0.3, requirement: '过所（通行证）', description: '风险极高，利润极大，需要官方许可' }
  },

  currencySystem: {
    coins: { name: '铜钱', status: '稀少', usage: '城市小额交易', problem: '钱荒' },
    grain: { name: '粮/布', status: '实际主导', usage: '缴税、大宗交易、农村交易', problem: '不易分割、不易储存' },
    silk: { name: '绢/丝', status: '高档', usage: '官方俸禄、贵族间交易', problem: '普通人难以获得' }
  },

  eventTemplates: {
    disaster: {
      name: '自然灾害',
      baseProbability: 0.15,
      modifiers: {
        season: { spring: 0.8, summer: 1.2, autumn: 1.0, winter: 0.6 },
        location: { rural: 1.3, urban: 0.8 }
      },
      templates: [
        { id: 'disaster_drought', name: '旱灾', severity: 'medium', desc: '数月无雨，田地龟裂', effects: { food: -30, money: -20 } },
        { id: 'disaster_flood', name: '水灾', severity: 'high', desc: '暴雨倾盆，河水泛滥', effects: { food: -40, money: -50 } },
        { id: 'disaster_plague', name: '瘟疫', severity: 'high', desc: '疫病横行，人心惶惶', effects: { health: -30, food: -20 } },
        { id: 'disaster_hail', name: '冰雹', severity: 'low', desc: '冰雹突降，庄稼受损', effects: { food: -15, money: -10 } },
        { id: 'disaster_pest', name: '蝗灾', severity: 'medium', desc: '蝗灾来袭，颗粒无收', effects: { food: -35, money: -25 } }
      ]
    },
    tax: {
      name: '赋税征派',
      baseProbability: 0.2,
      modifiers: {
        season: { spring: 0.5, summer: 0.5, autumn: 1.0, winter: 1.5 },
        location: { rural: 1.2, urban: 1.0 }
      },
      templates: [
        { id: 'tax_tianzu', name: '田租', desc: '官府征收田租', effects: { money: -50, food: -30 } },
        { id: 'tax_hudiao', name: '户调', desc: '征收绢布绵麻', effects: { money: -40 } },
        { id: 'tax_kouqian', name: '口钱', desc: '按人头征钱', effects: { money: -30 } },
        { id: 'tax_zawudiao', name: '杂物调', desc: '临时征派物资', effects: { money: -25, food: -10 } },
        { id: 'tax_tangding', name: '塘丁税', desc: '水利维护税', effects: { money: -20 } }
      ]
    },
    social: {
      name: '社会事件',
      baseProbability: 0.18,
      modifiers: {
        season: { spring: 1.2, summer: 1.0, autumn: 1.0, winter: 0.8 },
        location: { rural: 0.9, urban: 1.3 }
      },
      templates: [
        { id: 'social_wedding', name: '婚礼邀请', desc: '邻里结婚请你赴宴', effects: { money: -20, socialPoints: 15 } },
        { id: 'social_funeral', name: '丧事', desc: '亲友去世需吊唁', effects: { money: -15, socialPoints: 10 } },
        { id: 'social_dispute', name: '邻里纠纷', desc: '邻居发生争执请你调解', effects: { socialPoints: 20, reputation: 5 } },
        { id: 'social_birth', name: '添丁', desc: '亲友生子道喜', effects: { money: -10, socialPoints: 8 } },
        { id: 'social_festival', name: '节令聚会', desc: '同乡组织聚会', effects: { money: -25, socialPoints: 25 } }
      ]
    },
    opportunity: {
      name: '机遇事件',
      baseProbability: 0.12,
      modifiers: {
        season: { spring: 1.0, summer: 0.8, autumn: 1.3, winter: 0.9 },
        location: { rural: 0.8, urban: 1.3 }
      },
      templates: [
        { id: 'opp_business', name: '商机', desc: '发现赚钱机会', effects: { money: 100, reputation: 5 } },
        { id: 'opp_help', name: '助人得报', desc: '帮助他人获得回报', effects: { money: 50, socialPoints: 15 } },
        { id: 'opp_gift', name: '意外之财', desc: '获得意外礼物', effects: { money: 80 } },
        { id: 'opp_skill', name: '学艺机会', desc: '学习新技能', effects: { craftSkill: 10, money: -30 } },
        { id: 'opp_connection', name: '结识贵人', desc: '结识重要人物', effects: { socialPoints: 30, reputation: 10 } }
      ]
    },
    political: {
      name: '政治事件',
      baseProbability: 0.08,
      modifiers: {
        season: { spring: 1.0, summer: 1.0, autumn: 1.0, winter: 1.0 },
        location: { rural: 0.5, urban: 1.5 }
      },
      templates: [
        { id: 'police_inspection', name: '官府巡查', desc: '官员巡视地方', effects: { reputation: 10 } },
        { id: 'police_recruit', name: '征兵', desc: '官府征召士兵', effects: { militaryExp: 10, health: -5 } },
        { id: 'police_taxaudit', name: '税赋核查', desc: '核查田亩户籍', effects: { money: -30 } },
        { id: 'police_border', name: '边境警报', desc: '边境战事警报', effects: { safety: -10 } },
        { id: 'police_amnesty', name: '大赦天下', desc: '皇帝大赦', effects: { luck: 20 } }
      ]
    },
    religious: {
      name: '宗教事件',
      baseProbability: 0.1,
      modifiers: {
        season: { spring: 1.2, summer: 1.0, autumn: 1.0, winter: 0.8 },
        location: { rural: 0.9, urban: 1.1 }
      },
      templates: [
        { id: 'rel_pray', name: '祈福', desc: '寺庙举行祈福仪式', effects: { merit: 15, health: 10 } },
        { id: 'rel_festival', name: '宗教节日', desc: '参与宗教节日', effects: { merit: 20, socialPoints: 10 } },
        { id: 'rel_temple', name: '寺庙募捐', desc: '向寺庙捐赠', effects: { money: -40, merit: 30 } },
        { id: 'rel_pilgrimage', name: '朝圣', desc: '前往寺庙朝圣', effects: { money: -80, merit: 50 } },
        { id: 'rel_blessing', name: '法师加持', desc: '获得法师祝福', effects: { luck: 15, health: 5 } }
      ]
    },
    daily: {
      name: '日常事件',
      baseProbability: 0.17,
      modifiers: {
        season: { spring: 1.0, summer: 1.1, autumn: 1.0, winter: 0.9 },
        location: { rural: 1.1, urban: 1.0 }
      },
      templates: [
        { id: 'daily_work', name: '辛勤劳作', desc: '努力工作获得回报', effects: { money: 30, food: 15, health: -5 } },
        { id: 'daily_rest', name: '休息调养', desc: '休息恢复健康', effects: { health: 20, money: -10 } },
        { id: 'daily_visit', name: '探亲访友', desc: '拜访亲友', effects: { socialPoints: 10, money: -15 } },
        { id: 'daily_learn', name: '学习知识', desc: '读书学习', effects: { knowledge: 10, reputation: 5 } },
        { id: 'daily_health', name: '生病', desc: '身体不适', effects: { health: -15, money: -20 } }
      ]
    }
  },

  npcRelationEvents: {
    meeting: {
      probability: 0.3,
      effects: { relationChange: 10, socialPoints: 5 }
    },
    help: {
      probability: 0.2,
      effects: { relationChange: 20, money: -30 }
    },
    conflict: {
      probability: 0.15,
      effects: { relationChange: -15, reputation: -5 }
    },
    cooperation: {
      probability: 0.25,
      effects: { relationChange: 15, money: 50 }
    },
    gift: {
      probability: 0.1,
      effects: { relationChange: 25, money: -50 }
    }
  },

  npcRelationMilestones: {
    0: { level: '陌生人', desc: '素不相识', color: '#95a5a6' },
    20: { level: '相识', desc: '点头之交', color: '#3498db' },
    40: { level: '朋友', desc: '交情不错', color: '#27ae60' },
    60: { level: '好友', desc: '亲密无间', color: '#f1c40f' },
    80: { level: '知己', desc: '莫逆之交', color: '#e74c3c' },
    100: { level: '挚友', desc: '生死之交', color: '#9b59b6' }
  },

  relationshipTypes: {
    blood: { 
      name: '血缘', 
      color: '#e74c3c', 
      desc: '亲属关系，天然亲近',
      effect: '信任度高，互助意愿强',
      decay: 0.02
    },
    mentor: { 
      name: '门生故吏', 
      color: '#3498db', 
      desc: '师生或上下级关系',
      effect: '政治资源共享，仕途助力',
      decay: 0.05
    },
    hometown: { 
      name: '同乡', 
      color: '#f1c40f', 
      desc: '同籍之人，乡音乡情',
      effect: '商业合作优先，信息互通',
      decay: 0.03
    },
    business: { 
      name: '商业同盟', 
      color: '#27ae60', 
      desc: '利益共同体',
      effect: '商业信息共享，利益捆绑',
      decay: 0.04
    },
    patron: { 
      name: '恩主恩客', 
      color: '#9b59b6', 
      desc: '施恩与报恩关系',
      effect: '庇护与效忠，风险共担',
      decay: 0.06
    }
  },

  npcCharacters: {
    wangLandlord: {
      name: '王员外',
      title: '建康县富户',
      identity: 'landlord',
      relationship: 'patron',
      initialRelation: 40,
      personality: '精明务实，看重利益',
      description: '建康城外有名的地主，家中良田千亩，奴仆数十。虽非士族出身，但凭借财富结交了不少官场中人。',
      thoughts: ['此人可利用', '商人重利轻别离', '有恩必偿'],
      background: '原本是自耕农，因善于经营兼并了不少土地'
    },
    liZheng: {
      name: '李里正',
      title: '建康县里正',
      identity: 'clerk',
      relationship: 'mentor',
      initialRelation: 30,
      personality: '圆滑世故，左右逢源',
      description: '建康县的里正，掌管一乡的户籍和田亩册。手中有些许权力，但也时刻担心上头的问责。',
      thoughts: ['多一事不如少一事', '官字两张口', '识时务者为俊杰'],
      background: '出身寒门，靠多年熬资历当上里正'
    },
    zhangFarmer: {
      name: '张阿福',
      title: '邻村农户',
      identity: 'farmer',
      relationship: 'hometown',
      initialRelation: 50,
      personality: '憨厚老实，乐于助人',
      description: '你隔壁村的农户，为人忠厚，种田是把好手。家中有年迈的父母和年幼的孩子。',
      thoughts: ['种田人靠天吃饭', '邻里互助是本分', '知足常乐'],
      background: '三代务农，老实本分'
    },
    liuArtisan: {
      name: '刘匠人',
      title: '铁匠',
      identity: 'artisan',
      relationship: 'business',
      initialRelation: 25,
      personality: '技艺精湛，性格耿直',
      description: '建康城中有名的铁匠，打造的农具锋利耐用。虽然脾气有些古怪，但手艺确实没话说。',
      thoughts: ['手艺是吃饭的本钱', '酒香不怕巷子深', '商人奸诈'],
      background: '祖传铁匠手艺，三代打铁'
    },
    chenMerchant: {
      name: '陈掌柜',
      title: '杂货铺老板',
      identity: 'merchant',
      relationship: 'business',
      initialRelation: 35,
      personality: '精明干练，消息灵通',
      description: '建康城南杂货铺的老板，人脉广，消息灵通。常常能弄到一些稀罕东西。',
      thoughts: ['信息就是财富', '多个朋友多条路', '无商不奸'],
      background: '从挑担小贩做起，慢慢积累了本钱'
    },
    zhaoMonk: {
      name: '智远法师',
      title: '同泰寺僧人',
      identity: 'monk',
      relationship: 'mentor',
      initialRelation: 20,
      personality: '慈悲为怀，学识渊博',
      description: '建康同泰寺的僧人，学识渊博，精通佛法。与朝中权贵多有往来。',
      thoughts: ['众生皆苦', '因果循环', '慈悲为本'],
      background: '出身士族，年轻时出家'
    },
    wangOfficer: {
      name: '王参军',
      title: '县衙参军',
      identity: 'official',
      relationship: 'mentor',
      initialRelation: 15,
      personality: '严谨刻板，看重门第',
      description: '建康县衙的参军，负责军事事务。出身二流士族，对寒门颇有偏见。',
      thoughts: ['士族门第高于一切', '寒门难成大器', '规矩不可破'],
      background: '琅琊王氏旁支，靠门第入仕'
    },
    sunSlave: {
      name: '孙阿奴',
      title: '奴仆',
      identity: 'slave',
      relationship: 'blood',
      initialRelation: 60,
      personality: '胆小怕事，忠心耿耿',
      description: '你家的奴仆，从小被卖入你家。虽然身份卑微，但对你忠心耿耿。',
      thoughts: ['主人就是天', '安分守己', '只求平安'],
      background: '父亲欠债将他卖入你家抵债'
    }
  },

  socialNetwork: {
    nodes: [
      { id: 'player', name: '玩家', type: 'player', x: 400, y: 300 },
      { id: 'wangLandlord', name: '王员外', type: 'landlord', x: 550, y: 180 },
      { id: 'liZheng', name: '李里正', type: 'clerk', x: 550, y: 420 },
      { id: 'zhangFarmer', name: '张阿福', type: 'farmer', x: 250, y: 200 },
      { id: 'liuArtisan', name: '刘匠人', type: 'artisan', x: 250, y: 400 },
      { id: 'chenMerchant', name: '陈掌柜', type: 'merchant', x: 650, y: 300 },
      { id: 'zhaoMonk', name: '智远法师', type: 'monk', x: 400, y: 120 },
      { id: 'wangOfficer', name: '王参军', type: 'official', x: 650, y: 450 }
    ],
    links: [
      { source: 'player', target: 'wangLandlord', type: 'patron', strength: 40 },
      { source: 'player', target: 'liZheng', type: 'mentor', strength: 30 },
      { source: 'player', target: 'zhangFarmer', type: 'hometown', strength: 50 },
      { source: 'player', target: 'liuArtisan', type: 'business', strength: 25 },
      { source: 'player', target: 'chenMerchant', type: 'business', strength: 35 },
      { source: 'wangLandlord', target: 'liZheng', type: 'patron', strength: 70 },
      { source: 'wangLandlord', target: 'chenMerchant', type: 'business', strength: 60 },
      { source: 'liZheng', target: 'wangOfficer', type: 'mentor', strength: 45 },
      { source: 'zhaoMonk', target: 'wangLandlord', type: 'mentor', strength: 55 },
      { source: 'chenMerchant', target: 'liuArtisan', type: 'business', strength: 40 }
    ]
  },

  ideologyTemplates: {
    farmer: {
      name: '农家思想',
      base: ['知足常乐', '勤能致富', '听天由命', '邻里互助'],
      tags: ['务实', '保守', '勤劳', '质朴'],
      influence: { money: 0.8, food: 1.2, socialPoints: 0.9 }
    },
    landlord: {
      name: '地主思想',
      base: ['土地为本', '利益至上', '维持秩序', '等级分明'],
      tags: ['精明', '保守', '势利', '谨慎'],
      influence: { money: 1.3, food: 1.1, socialPoints: 0.7 }
    },
    merchant: {
      name: '商家思想',
      base: ['唯利是图', '信息至上', '灵活变通', '风险与机遇'],
      tags: ['精明', '开放', '务实', '投机'],
      influence: { money: 1.5, food: 0.8, socialPoints: 1.1 }
    },
    artisan: {
      name: '匠人思想',
      base: ['手艺为本', '精益求精', '诚信为本', '保守秘密'],
      tags: ['专注', '保守', '正直', '固执'],
      influence: { money: 1.0, craftSkill: 1.3, socialPoints: 0.8 }
    },
    scholar: {
      name: '士人思想',
      base: ['修身齐家', '治国平天下', '学而优则仕', '重义轻利'],
      tags: ['理想主义', '清高', '博学', '迂腐'],
      influence: { knowledge: 1.5, reputation: 1.2, money: 0.7 }
    },
    official: {
      name: '官僚思想',
      base: ['明哲保身', '权术至上', '等级森严', '政绩为本'],
      tags: ['圆滑', '功利', '谨慎', '虚伪'],
      influence: { reputation: 1.3, socialPoints: 1.2, money: 1.1 }
    },
    monk: {
      name: '佛家思想',
      base: ['众生皆苦', '因果报应', '慈悲为怀', '无欲无求'],
      tags: ['超脱', '慈悲', '虔诚', '消极'],
      influence: { merit: 1.5, health: 1.0, money: 0.5 }
    },
    taoist: {
      name: '道家思想',
      base: ['道法自然', '无为而治', '长生不老', '避世隐居'],
      tags: ['超脱', '自然', '神秘', '消极'],
      influence: { health: 1.3, luck: 1.2, money: 0.6 }
    },
    soldier: {
      name: '兵家思想',
      base: ['军令如山', '胜者为王', '知己知彼', '先发制人'],
      tags: ['勇猛', '果断', '残忍', '忠诚'],
      influence: { strength: 1.3, militaryExp: 1.2, health: 1.1 }
    }
  },

  historicalThoughtTags: {
    wangXianzhi: {
      name: '王献之',
      tags: ['书法圣手', '名士风流', '清谈玄理', '门第意识'],
      description: '王羲之之子，书法大家，东晋名士代表人物'
    },
    xieAn: {
      name: '谢安',
      tags: ['镇定自若', '东山再起', '士族领袖', '风流宰相'],
      description: '东晋名相，淝水之战的决策者'
    },
    songYu: {
      name: '宋武帝刘裕',
      tags: ['寒门崛起', '铁血手腕', '务实改革', '军功起家'],
      description: '南朝宋开国皇帝，出身寒门，以军功夺天下'
    },
    xiaoYan: {
      name: '梁武帝萧衍',
      tags: ['崇佛虔诚', '博学多才', '晚年昏庸', '菩萨皇帝'],
      description: '南朝梁开国皇帝，在位四十八年，晚年笃信佛教'
    },
    fanYe: {
      name: '范晔',
      tags: ['史学家', '才高八斗', '性情狂傲', '《后汉书》'],
      description: '南朝宋史学家，《后汉书》的作者'
    },
    taoHongjing: {
      name: '陶弘景',
      tags: ['山中宰相', '道家宗师', '医药学家', '博物学家'],
      description: '南朝齐梁时期的道教思想家、医药学家'
    },
    zhangSanfeng: {
      name: '张三丰',
      tags: ['道教真人', '太极宗师', '隐世高人', '长生传说'],
      description: '道教传说中的仙人，武当派创始人'
    },
    guoPu: {
      name: '郭璞',
      tags: ['训诂学家', '风水学鼻祖', '阴阳术数', '博学多才'],
      description: '东晋学者，训诂学和风水学的重要人物'
    },
    xuMian: {
      name: '徐勉',
      tags: ['清廉自守', '重名轻利', '家族责任', '清白传世'],
      description: '梁代名臣，"人遗子孙以财，我遗之以清白"',
      quotes: ['人遗子孙以财，我遗之以清白。子孙才也，则自致辎軿；如不才，终为徒有。', '虽居显位，不营产业，家无蓄积，俸禄分赡亲族之穷乏者'],
      influence: { money: -0.2, reputation: 0.3, guanxi: 0.1 }
    },
    peiZiye: {
      name: '裴子野',
      tags: ['清高傲骨', '不屑钻营', '以德自守'],
      description: '梁代学者，"不因讼以受服"',
      quotes: ['虽惭柳季之道，岂因讼以受服。'],
      influence: { reputation: 0.2, guanxi: -0.1 }
    },
    kongZiQu: {
      name: '孔子袪',
      tags: ['贫贱不移', '勤苦自励', '学以致用'],
      description: '梁代儒林学者，"耕耘樵采，常怀书自随"',
      quotes: ['少孤贫好学，耕耘樵采，常怀书自随，投闲则诵读。勤苦自励，遂通经术。'],
      influence: { civil: 0.2, knowledge: 0.3 }
    },
    baoZhao: {
      name: '鲍照',
      tags: ['孤愤长叹', '不甘沉沦', '怀才不遇'],
      description: '南朝寒门诗人代表',
      quotes: ['对案不能食，拔剑击柱长叹息。丈夫生世会几时，安能蹀躞垂羽翼', '泻水置平地，各自东西南北流。人生亦有命，安能行叹复坐愁'],
      influence: { reputation: 0.2, civil: 0.1 }
    },
    jiangYan: {
      name: '江淹',
      tags: ['叩心飞霜', '报恩忠诚', '文名远播'],
      description: '南朝寒门出身高官',
      quotes: ['昔者贱臣叩心，飞霜击于燕地；庶女告天，振风袭于齐台', '少孤贫好学，沉静少交游'],
      influence: { civil: 0.2, guanxi: 0.1 }
    },
    heXun: {
      name: '何逊',
      tags: ['婉约抗争', '含蓄内敛', '以诗明志'],
      description: '南朝寒素诗人代表',
      quotes: ['寒素诗人何逊对齐梁士族文风既接受又创变'],
      influence: { civil: 0.2, reputation: 0.1 }
    }
  },

  socialRelationshipRules: {
    blood: {
      name: '血缘关系',
      color: '#e74c3c',
      rules: [
        { condition: '士族内部通婚', effect: '声望+10，关系网密度+5', note: '仅限王、谢、袁、萧等高门之间' },
        { condition: '士族与寒门通婚', effect: '声望-30，关系网密度-10', note: '触发"婚宦失类"事件，可能被家族除名' },
        { condition: '寒门婚姻', effect: '关系网密度+3', note: '相对自由，但难以通过婚姻跻身士族' },
        { condition: '商人以财换婚', effect: '声望+5，关系网密度+2', note: '成功率极低，会被士族鄙视' }
      ],
      decay: 0.02
    },
    mentor: {
      name: '门生故吏',
      color: '#3498db',
      levels: [
        { name: '初入门生', cost: 500, effect: '获得基本庇护，可旁听雅集', benefits: { guanxi: 10 } },
        { name: '得意门生', cost: 2000, effect: '师傅写推荐信，出仕关键', benefits: { guanxi: 30, civil: 10 } },
        { name: '衣钵传人', cost: 5000, effect: '师傅退休后资源全部移交', benefits: { guanxi: 50, reputation: 20 } }
      ],
      rules: [
        { condition: '寒门拜士族为师', effect: '门生人缘+20，师傅声望-5', note: '士族收寒门弟子过多会被同阶层嘲笑' },
        { condition: '门生背叛师傅', effect: '人缘归零，被士林唾弃', note: '投靠政敌视为背叛' },
        { condition: '师傅推荐出仕', effect: '官职等级+1', note: '得意门生以上等级' }
      ],
      decay: 0.05
    },
    hometown: {
      name: '同乡同党',
      color: '#f1c40f',
      regions: ['吴郡', '会稽', '丹阳', '徐州', '荆州', '扬州', '益州', '湘州'],
      rules: [
        { condition: '参加同乡聚会', effect: '人缘+5，获得本地情报', note: '定期触发' },
        { condition: '乡党推举出仕', effect: '初始官职加成', note: '同乡关系转化' },
        { condition: '同乡危难相助', effect: '人缘+15', note: '危难时帮助同乡' },
        { condition: '地域冲突', effect: '人缘-10', note: '南人vs北人侨姓' }
      ],
      decay: 0.03
    },
    business: {
      name: '商业同盟',
      color: '#27ae60',
      guilds: [
        { name: '纱行', members: [], bonus: '纺织收入+15%' },
        { name: '谷行', members: [], bonus: '粮食交易+10%' },
        { name: '盐行', members: [], bonus: '盐业利润+20%' },
        { name: '瓷行', members: [], bonus: '制瓷收入+15%' },
        { name: '纸行', members: [], bonus: '造纸收入+10%' }
      ],
      rules: [
        { condition: '联合压价/抬价', effect: '市场价格操控', note: '行会成员联合行动' },
        { condition: '商业担保', effect: '获得更大额度贷款', note: '商人之间互相担保' },
        { condition: '商业欺诈', effect: '被行会除名，所有商人不再交易', note: '严重后果' }
      ],
      decay: 0.04
    },
    patron: {
      name: '恩主恩客',
      color: '#9b59b6',
      types: ['皇帝', '王侯', '宰相', '州刺史'],
      rules: [
        { condition: '选择依附权贵', effect: '获得恩宠值', note: '影响官职晋升速度' },
        { condition: '恩主失势', effect: '资财-30%，人缘-20', note: '依附者一同遭殃' },
        { condition: '直接获得皇帝赏识', effect: '跳过士族推荐环节', note: '会被士族集体敌视' },
        { condition: '恩宠值提升', effect: '晋升速度+50%', note: '每提升20点' }
      ],
      decay: 0.06
    }
  },

  classIdeologyModels: {
    highborn: {
      name: '高门士族子弟',
      core: ['门第自负与文化焦虑'],
      traits: ['深信士庶天隔', '以玄学文学诗歌为身份标识', '重视风流清谈风度', '对皇权既依附又轻视'],
      quotes: [
        '渊既世族，俭亦国华；不赖舅氏，遑恤国家',
        '非我始愿，故不受也'
      ],
      dialogueStyle: '频繁引用老庄玄言，面对寒门时傲慢',
      decisionWeights: {
        attendGathering: 0.7,
        showOffStatus: 0.6,
        avoidCommoners: 0.5
      },
      influence: { reputation: 0.2, guanxi: 0.1, civil: 0.1 }
    },
   寒门: {
      name: '寒门书生',
      core: ['孤愤与逆袭渴望'],
      traits: ['强烈的身份焦虑与命运不公感', '深信才学是唯一上升通道', '对门阀制度既憎恨又向往', '孤独敏感自尊心极强'],
      quotes: [
        '对案不能食，拔剑击柱长叹息。丈夫生世会几时，安能蹀躞垂羽翼',
        '泻水置平地，各自东西南北流。人生亦有命，安能行叹复坐愁',
        '昔者贱臣叩心，飞霜击于燕地；庶女告天，振风袭于齐台',
        '少孤贫好学，沉静少交游'
      ],
      dialogueStyle: '面对士族时语气复杂，诗作中充满孤贫贱等自怜意象',
      decisionWeights: {
        seekRecognition: 0.5,
        maintainPride: 0.4,
        feelInferior: 0.3
      },
      influence: { civil: 0.2, reputation: 0.1 }
    },
    merchant: {
      name: '市井商人',
      core: ['务实与身份渴望'],
      traits: ['极度务实，相信金钱万能', '对士族文化既羡慕又实用主义', '重视家族传承，希望子孙读书出仕', '风险意识强，善于在乱世中保全财产'],
      quotes: [
        '积财千万，不如薄技在身'
      ],
      dialogueStyle: '多谈利算本值，面对士族时姿态谦卑但内心精明',
      decisionWeights: {
        seekOpportunity: 0.6,
        calculateReturn: 0.5,
        investInEducation: 0.4
      },
      influence: { money: 0.2, guanxi: 0.1 }
    },
    artisan: {
      name: '手工业者',
      core: ['技艺自尊与匠人精神'],
      traits: ['以技艺精湛为荣，相信技近乎道', '对士族文化保持距离', '重视师徒传承，视技艺为家族命脉', '生活朴素，追求物尽其用'],
      quotes: [
        '技艺是吃饭的本钱'
      ],
      dialogueStyle: '多谈工艺质材，对士族的玄谈清议持保留态度',
      decisionWeights: {
        perfectCraft: 0.7,
        avoidNobles: 0.5,
        passSkill: 0.4
      },
      influence: { craftSkill: 0.2, reputation: 0.1 }
    }
  },

  relationshipEvolutionRules: [
    { trigger: '士族与寒门同桌吃饭', effects: { 士族声望: -10, 士族人缘: -5 }, source: '士庶不共坐' },
    { trigger: '寒门拜士族为师', effects: { 师傅声望: -5, 门生人缘: +20 }, source: '王铿研究：寒人付高额学费成为门生' },
    { trigger: '士族收寒门为门生', effects: { 声望: -5 }, source: '士族文化资本垄断' },
    { trigger: '商人资助士族雅集', effects: { 商人声望: +5, 士族人缘: +3 }, source: '以财换名' },
    { trigger: '同乡危难相助', effects: { 人缘: +15 }, source: '乡党互助传统' },
    { trigger: '恩主失势', effects: { 资财: -30, 人缘: -20 }, source: '南朝政治斗争频繁' },
    { trigger: '婚姻关系缔结', effects: { '双方家族关系节点打通': 10 }, source: '婚姻是社会关系的总枢纽' }
  ],

  eventDecisionWeights: {
    nobleGathering: {
      highborn: { attendAndCompete: 0.7, observe: 0.2, refuse: 0.1 },
      寒门: { attendAndPerform: 0.5, hesitate: 0.3, refuse: 0.2 },
      merchant: { attendAndSponsor: 0.6, sendSon: 0.3, refuse: 0.1 },
      artisan: { refuse: 0.7, observe: 0.2, forced: 0.1 }
    },
    mentorApprentice: {
      highborn: { accept: 0.4, refuse: 0.6 },
      寒门: { seekMentor: 0.7, hesitate: 0.2, giveUp: 0.1 },
      merchant: { sponsorSon: 0.5, seekBusinessMentor: 0.4, refuse: 0.1 },
      artisan: { seekCraftMentor: 0.6, selfStudy: 0.3, refuse: 0.1 }
    },
    politicalAlliance: {
      highborn: { alignWithNoble: 0.6, remainNeutral: 0.3, alignWithCrown: 0.1 },
      寒门: { seekPatron: 0.5, remainNeutral: 0.3, directToCrown: 0.2 },
      merchant: { alignWithPowerful: 0.6, remainNeutral: 0.3, stayOut: 0.1 },
      artisan: { remainNeutral: 0.7, alignWithLocal: 0.2, avoid: 0.1 }
    }
  },

  playerIdeology: {
    baseIdeology: null,
    tags: [],
    alignment: {
      confucian: 50,
      legalist: 30,
      taoist: 40,
      buddhist: 20,
      military: 25
    },
    developmentHistory: []
  },

  religiousSystem: {
    buddhism: {
      name: '佛教',
      merit: 0,
      meritActions: {
        pray: { cost: 0, merit: 5, desc: '每日诵经祈福' },
        donate: { cost: 50, merit: 20, desc: '向寺庙捐赠' },
        fast: { cost: 10, merit: 15, desc: '斋戒一日' },
        pilgrimage: { cost: 200, merit: 50, desc: '前往寺庙朝圣' }
      },
      temples: {
        tongtai: { name: '同泰寺', location: '建康', level: 3, bonus: { merit: 1.5 } },
        baolin: { name: '宝林寺', location: '会稽', level: 2, bonus: { merit: 1.2 } },
        guanyin: { name: '观音寺', location: '江陵', level: 2, bonus: { merit: 1.2 } }
      },
      rituals: ['八关斋戒', '盂兰盆会', '浴佛节', '腊八供佛'],
      effects: {
        health: 0.1,
        luck: 0.1,
        socialPoints: 0.05
      }
    },
    taoism: {
      name: '道教',
      longevity: 0,
      longevityActions: {
        cultivate: { cost: 0, longevity: 5, desc: '每日修炼' },
        alchemy: { cost: 100, longevity: 15, desc: '炼制丹药' },
        meditation: { cost: 10, longevity: 10, desc: '打坐冥想' },
        herbCollect: { cost: 30, longevity: 8, desc: '采集草药' }
      },
      temples: {
        maoshan: { name: '茅山', location: '建康附近', level: 3, bonus: { longevity: 1.5 } },
        wudang: { name: '武当山', location: '荆襄', level: 2, bonus: { longevity: 1.2 } }
      },
      rituals: ['辟谷', '服气', '符咒', '斋醮'],
      effects: {
        health: 0.15,
        luck: 0.08
      }
    }
  },

  dailyLife: {
    clothing: {
      farmer: { name: '短褐', material: '粗麻布', style: '简朴', warm: 50 },
      landlord: { name: '绫罗', material: '丝绸', style: '华丽', warm: 90 },
      merchant: { name: '绢布', material: '细棉布', style: '体面', warm: 75 },
      artisan: { name: '工服', material: '耐磨棉布', style: '实用', warm: 60 },
      official: { name: '官服', material: '丝绸锦缎', style: '威严', warm: 95 },
      monk: { name: '僧袍', material: '麻布', style: '朴素', warm: 60 }
    },
    food: {
      breakfast: ['粥', '饼', '咸菜'],
      lunch: ['饭', '菜', '汤'],
      dinner: ['饭', '羹', '酒'],
      seasonal: {
        spring: ['春笋', '荠菜', '香椿'],
        summer: ['西瓜', '莲藕', '绿豆'],
        autumn: ['柿子', '板栗', '螃蟹'],
        winter: ['羊肉', '萝卜', '腌菜']
      }
    },
    housing: {
      farmer: { type: '茅屋', rooms: 2, comfort: 30 },
      landlord: { type: '庄园', rooms: 10, comfort: 90 },
      merchant: { type: '商铺', rooms: 4, comfort: 65 },
      artisan: { type: '作坊', rooms: 3, comfort: 50 },
      official: { type: '官邸', rooms: 8, comfort: 85 },
      monk: { type: '僧房', rooms: 1, comfort: 40 }
    },
    entertainment: {
      rural: ['投壶', '下棋', '蹴鞠', '垂钓', '斗鸡'],
      urban: ['看戏', '听曲', '逛庙会', '品茶', '书法'],
      festivals: ['元宵观灯', '端午竞渡', '重阳登高', '除夕守岁']
    }
  },

  religionEvents: [
    {
      id: 'buddhism_001',
      narrative: '你路过建康城的一座寺院，香火鼎盛。门口的僧人正在向香客募捐，说是要扩建佛殿。周围的人纷纷解囊，你听到有人说："施舍功德，来世福报。"你心中犹豫——近来生意不太好，但功德值太低也会被邻里议论。',
      choices: [
        { text: '慷慨施舍：捐出十文钱', effects: { money: -10, merit: 15, reputation: 5 } },
        { text: '量力而行：捐出三文钱', effects: { money: -3, merit: 5 } },
        { text: '参与法会：去寺院参加斋会', effects: { money: -5, merit: 10, health: 5 } },
        { text: '转身离开：现在不是施舍的时候', effects: { merit: -5 } }
      ]
    },
    {
      id: 'buddhism_002',
      narrative: '城里传来消息：皇帝又到同泰寺"舍身"了。这意味着朝廷又要向各地加派"赎佛钱"——实际上就是变相加税。你今年的负担又要加重了。',
      choices: [
        { text: '默默承受：按时缴纳赎佛钱', effects: { money: -30, merit: 10 } },
        { text: '抱怨几句：跟邻里发发牢骚', effects: { money: -30, reputation: -5 } },
        { text: '寻求庇护：去寺院祈求保佑', effects: { money: -35, merit: 15, health: 5 } },
        { text: '拖延缴纳：能拖一天是一天', effects: { money: -30, risk: 20 } }
      ]
    },
    {
      id: 'buddhism_003',
      narrative: '你听说了一个叫范缜的人，他写了一篇文章叫《神灭论》，说人死后灵魂就消散了，没有什么来世。这与你从小听到的"因果报应、轮回转世"完全不同。你身边有人骂他是"胡说八道"，也有人说他说得有道理。',
      choices: [
        { text: '我信佛，不相信他', effects: { merit: 20, reputation: -5 } },
        { text: '他说得有道理', effects: { merit: -15, knowledge: 15, reputation: 10 } },
        { text: '这事跟我无关，先活命要紧', effects: { tags: ['实用主义'] } }
      ]
    },
    {
      id: 'taoism_001',
      narrative: '你听说茅山上住着一位叫陶弘景的道士，据说皇帝遇到大事都要派人去问他。有人偷偷告诉你，陶弘景精通医药，许多达官贵人都找他求药问方。',
      choices: [
        { text: '上山求药：去茅山拜访陶弘景', effects: { money: -20, health: 20, taoismLevel: 5 } },
        { text: '打听消息：向去过茅山的人打听', effects: { knowledge: 10, taoismLevel: 3 } },
        { text: '不屑一顾：道士都是骗人的', effects: { merit: 5, taoismLevel: -5 } },
        { text: '观望等待：看看再说', effects: {} }
      ]
    },
    {
      id: 'taoism_002',
      narrative: '滨海地区传来消息，天师道在当地活动频繁。信众们定期举行斋会，互称"治民"，形成互助网络。官府对天师道保持警惕，因为他们曾发动过叛乱。',
      choices: [
        { text: '参加斋会：去看看天师道的活动', effects: { taoismLevel: 10, reputation: -5 } },
        { text: '保持距离：听说官府在监视', effects: { safety: 10 } },
        { text: '从中牟利：在斋会上摆摊卖货', effects: { money: 15, reputation: 5 } },
        { text: '举报官府：向衙门告发', effects: { money: 20, reputation: -10 } }
      ]
    },
    {
      id: 'food_001',
      narrative: '今日劳作完毕，你感到饥肠辘辘。家中还有些粗粮，可以做一碗杂粮粥。隔壁邻居送来一些咸菜，算是改善伙食。',
      choices: [
        { text: '粗粮粥配咸菜：吃饱就行', effects: { satiety: 25, food: -5 } },
        { text: '省点粮食：喝点稀粥', effects: { satiety: 15, food: -2 } },
        { text: '去市集买肉：今天想吃点好的', effects: { satiety: 40, money: -15, food: -3 } },
        { text: '找些野菜：去郊外采点野菜', effects: { satiety: 20, health: 5 } }
      ]
    },
    {
      id: 'food_002',
      narrative: '上午劳作间隙，你准备泡茶喝。茶饼是去年存的，捣碎后放入铫中，加入葱姜煎煮。虽然不如好茶，但聊胜于无。',
      choices: [
        { text: '精心煎煮：按古法加葱姜煎煮', effects: { satiety: 5, health: 5, teaSkill: 2 } },
        { text: '简单冲泡：直接用开水冲泡', effects: { satiety: 3 } },
        { text: '以茶待客：正好有邻居来访', effects: { reputation: 5, satiety: 3 } },
        { text: '不喝茶了：省点茶饼', effects: {} }
      ]
    },
    {
      id: 'food_003',
      narrative: '晚上无事，你想喝点酒解解乏。家中还有些浊酒，是去年酿的。酒虽不醇，但能暖身。',
      choices: [
        { text: '小酌一杯：喝一杯暖暖身', effects: { satiety: 8, health: 5 } },
        { text: '多喝几杯：难得清闲', effects: { satiety: 15, health: -5, wineSkill: 3 } },
        { text: '邀请邻居共饮：增进邻里关系', effects: { reputation: 10, money: -5 } },
        { text: '不喝了：留着过节喝', effects: {} }
      ]
    },
    {
      id: 'clothing_001',
      narrative: '你现在手头有了些余钱。去市集买一身好点的衣裳，进城的街道上就不会被人指指点点了。可好衣裳不便宜，够你一家人吃半个月。',
      choices: [
        { text: '购买布衣（中等）', effects: { money: -8, clothingLevel: 1, reputation: 3 } },
        { text: '购买绸衫（上等）', effects: { money: -20, clothingLevel: 2, reputation: 5 } },
        { text: '买草鞋/布鞋替代芒鞋', effects: { money: -2, reputation: 1 } },
        { text: '不买，将就穿着', effects: {} }
      ]
    },
    {
      id: 'clothing_002',
      narrative: '你在市集上看到一双漆木屐，齿高而轻便，走起路来咔嗒作响。卖屐的小贩说："这可是建康城里最时髦的样式，谢太傅当年穿的就是这种。"',
      choices: [
        { text: '买下木屐', effects: { money: -5, reputation: 3, tags: ['名士风范'] } },
        { text: '太贵了，不买', effects: {} },
        { text: '讨价还价', effects: { money: -3, reputation: 2 } }
      ]
    },
    {
      id: 'residence_001',
      narrative: '你的住所有些破旧了，屋顶漏雨，墙壁也裂了缝。邻居劝你修一修，说下雨天住着不安全。',
      choices: [
        { text: '大修一番：请工匠来修', effects: { money: -50, residenceLevel: 2, safety: 15 } },
        { text: '简单修补：自己动手修修', effects: { money: -15, residenceLevel: 1, safety: 5 } },
        { text: '等有钱了再修', effects: { risk: 10 } },
        { text: '搬到别处：换个好点的地方', effects: { money: -80, residenceLevel: 3, reputation: 10 } }
      ]
    },
    {
      id: 'residence_002',
      narrative: '你被邀请到城东的一处私家园林参加雅集。园中假山嶙峋，流水潺潺，竹林掩映着一座精巧的亭台。主人说："今日曲水流觞，诸位尽兴。"',
      choices: [
        { text: '参与曲水流觞：即兴赋诗', effects: { reputation: 15, knowledge: 10 } },
        { text: '园中散步：随机遇到其他宾客', effects: { reputation: 5, socialPoints: 10 } },
        { text: '品茗赏景：获得风雅标签', effects: { reputation: 10, teaSkill: 5 } },
        { text: '早早告辞：不太习惯这种场合', effects: {} }
      ]
    },
    {
      id: 'marriage_001',
      narrative: '你十五岁了（南朝男子普遍十五岁即可成婚），家中开始张罗婚事。邻居老王家有个女儿，年方十四，勤劳能干。媒人已经来说过一次了。',
      choices: [
        { text: '同意成婚', effects: { married: true, reputation: 5, satiety: 10 } },
        { text: '婚后再议，先攒钱', effects: {} },
        { text: '拒绝，想娶个条件更好的', effects: { risk: 15 } }
      ]
    },
    {
      id: 'marriage_002',
      narrative: '你家中长辈替你定下了一门亲事——陈郡谢氏的女儿。这是"门当户对"的好姻缘，但听说这位谢家小姐性情高傲，并不情愿。',
      choices: [
        { text: '接受（门当户对）', effects: { married: true, reputation: 15 } },
        { text: '拒绝，另择寒门女子', effects: { reputation: -20 } }
      ]
    },
    {
      id: 'funeral_001',
      narrative: '家中老人过世了。按照传统，应该厚葬以尽孝道。但你听说如今有不少人主张薄葬——王导、谢安等名人都留下遗言要求薄葬。',
      choices: [
        { text: '厚葬', effects: { money: -30, reputation: 10, risk: 10 } },
        { text: '薄葬', effects: { money: -5, reputation: 5, socialPoints: -3 } },
        { text: '依礼而行', effects: { money: -15 } }
      ]
    },
    {
      id: 'folk_001',
      narrative: '春耕前，村里要举行社祭（土地神祭祀）。家家户户都要出钱买祭品，祈求今年收成好。',
      choices: [
        { text: '积极参与：多捐点钱', effects: { money: -5, reputation: 10, food: 10 } },
        { text: '按规矩来：出一份就行', effects: { money: -3, reputation: 3 } },
        { text: '不参与：不信这些', effects: { reputation: -5 } }
      ]
    },
    {
      id: 'folk_002',
      narrative: '城东有一座蒋神庙，香火鼎盛。传说蒋神原是汉代秣陵的守卫，死后屡屡显灵，能治病、预测吉凶、保佑一方平安。',
      choices: [
        { text: '前往祭祀：捐钱上香', effects: { money: -2, reputation: 3, jiangShenWorship: 5 } },
        { text: '路过看看：不烧香', effects: {} },
        { text: '改拜佛寺：去附近的寺院', effects: { merit: 5, reputation: -3 } }
      ]
    },
    {
      id: 'folk_003',
      narrative: '长官下令全军前往蒋神庙祭祀。据说蒋神能保佑作战顺利——上次北伐时，有人亲眼看到蒋神"显灵"帮助我军。',
      choices: [
        { text: '虔诚祭拜', effects: { reputation: 10, jiangShenWorship: 10, health: 5 } },
        { text: '敷衍了事', effects: {} },
        { text: '心中不信但跟着拜', effects: { tags: ['实用主义'] } }
      ]
    },
    {
      id: 'monk_001',
      narrative: '最近日子实在艰难，赋税沉重，收成又不好。寺院的僧人来村里宣传，说"出家可免赋税"，许多穷人都动了心。',
      choices: [
        { text: '出家为僧：寻求寺院庇护', effects: { money: 0, merit: 50, reputation: -10, tags: ['出家人'] } },
        { text: '继续坚持：再苦也要撑下去', effects: { reputation: 5, health: -5 } },
        { text: '先去寺院帮忙：看看再说', effects: { money: 5, merit: 10 } }
      ]
    }
  ],

  ruralEvents: [
    {
      id: 'rural_001',
      festival: 'yuandan',
      month: 1,
      stage: '春耕',
      narrative: '正月一日，是谓元正，鸡鸣而起。庭前爆竹声此起彼伏，竹子投入火中噼啪作响，据说可以惊走山臊恶鬼。邻人皆帖画鸡于户上，悬桃板绘神荼郁垒二神。长幼悉正衣冠，以次拜贺。你家中虽不甚宽裕，然新春佳节，亦需有所表示。',
      choices: [
        { text: '循礼而行：爆竹、帖鸡、悬桃板、进椒柏酒', effects: { money: -50, food: -10, reputation: 20, socialPoints: 10 } },
        { text: '俭省为度：仅完成爆竹与拜贺', effects: { money: -10, food: 0, reputation: 5 } },
        { text: '投杖求如愿：以钱贯系杖投入粪扫之上', effects: { money: -15, food: 0, reputation: 3, luck: 10 } },
        { text: '闭门不出，省下钱粮备春耕', effects: { money: 0, food: 0, reputation: -5 } }
      ]
    },
    {
      id: 'rural_002',
      festival: 'lichun',
      month: 1,
      stage: '春耕',
      narrative: '立春之日，东风解冻，蛰虫始振。邻人皆剪彩为燕戴之，帖"宜春"二字于门楣。远处传来鼓声，原来是乡人在玩施钩之戏——以篾缆相罥，绵亘数里，鸣鼓牵之，如同拔河一般。春日已至，农事不远矣。',
      choices: [
        { text: '剪彩燕迎春：参与剪彩燕、帖宜春活动', effects: { money: -10, reputation: 15, socialPoints: 10 } },
        { text: '施钩竞力：加入施钩之戏', effects: { money: 0, reputation: 10, strength: 5 } },
        { text: '秋千打毬：参与春日游乐', effects: { money: -5, health: 10, socialPoints: 5 } },
        { text: '准备农具：趁春日检修犁耙', effects: { money: -20, food: 5 } }
      ]
    },
    {
      id: 'rural_003',
      festival: 'renri',
      month: 1,
      stage: '春耕',
      narrative: '正月七日，是人日。按董勋《问礼俗》，正月一日为鸡，二日为狗，三日为羊，四日为猪，五日为牛，六日为马，七日为人。邻里皆以七种菜为羹，剪彩为人贴于屏风，亦戴之头鬓。',
      choices: [
        { text: '七种菜羹宴：邀请邻里共食', effects: { money: -20, socialPoints: 25, reputation: 5 } },
        { text: '登高赋诗：前往城外登高', effects: { money: -5, reputation: 20, socialPoints: 5 } },
        { text: '呼畜招马：向门前呼牛马鸡畜', effects: { money: 0, livestock: 5 } },
        { text: '在家休息：不参与人日活动', effects: { health: 10 } }
      ]
    },
    {
      id: 'rural_004',
      festival: 'chunfen',
      month: 2,
      stage: '春耕',
      narrative: '春分日，民并种戒火草于屋上。有鸟如乌，先鸡而鸣，架架格格——那是获谷鸟，民候此鸟则入田。田埂上青草初生，麦苗青青，正是播种的好时节。',
      choices: [
        { text: '候鸟春耕：等待获谷鸟鸣后入田', effects: { food: 25, money: -5 } },
        { text: '先时抢种：提前入田抢种', effects: { food: 30, risk: 20 } },
        { text: '种戒火草：种植戒火草防火灾', effects: { money: -10, safety: 15 } },
        { text: '外出务工：赚取现钱买种子', effects: { money: 80, food: -5 } }
      ]
    },
    {
      id: 'rural_005',
      festival: 'sheri',
      month: 2,
      stage: '春耕',
      narrative: '社日，四邻并结宗会社，宰牲牢，为屋于树下，先祭神，然后飨其胙。远处传来鼓声，村民们正在搭建社坛。小儿以葱系竹竿于窗中擉之，曰"开聪明"。',
      choices: [
        { text: '主祭之家：出牲牢主持社祭', effects: { money: -40, reputation: 30, socialPoints: 25 } },
        { text: '随祭分胙：参与社祭分食胙肉', effects: { money: -10, socialPoints: 15, reputation: 5 } },
        { text: '旁观不入：不参与社祭', effects: { money: 0, socialPoints: -10 } },
        { text: '开聪明：为小儿系葱蒜于窗', effects: { money: -5, childWisdom: 5 } }
      ]
    },
    {
      id: 'rural_006',
      festival: 'hanshi',
      month: 3,
      stage: '春耕',
      narrative: '去冬节一百五日，寒食至。禁火三日，造饧、大麦粥。邻人皆准备冷食，不举烟火。有人说这是为了纪念介子推，也有人说这是周之旧制。',
      choices: [
        { text: '严守古制：三日禁火食冷食', effects: { money: -5, reputation: 15, health: -10 } },
        { text: '周举新制：仅禁火一日', effects: { money: 0, reputation: 5 } },
        { text: '士人雅集：参与斗鸡蹴鞠', effects: { money: -20, socialPoints: 20, reputation: 10 } },
        { text: '制作雕卵：彩绘鸡子相饷', effects: { money: -15, socialPoints: 15 } }
      ]
    },
    {
      id: 'rural_007',
      festival: 'shangsi',
      month: 3,
      stage: '春耕',
      narrative: '三月三日，上巳佳节。四民并出江渚池沼间，临清流，为流杯曲水之饮。青年男女相会于桃树下，执兰草以祓除不祥。春风拂面，桃花盛开，正是踏青的好时节。',
      choices: [
        { text: '流杯曲水：参与曲水雅集', effects: { money: -25, reputation: 30, socialPoints: 20 } },
        { text: '临水祓禊：水边洗涤除秽', effects: { money: 0, health: 10, luck: 5 } },
        { text: '斗百草：参与蹋百草之戏', effects: { money: 0, socialPoints: 15, herbSkill: 5 } },
        { text: '在家务农：不误农事', effects: { food: 10, money: 5 } }
      ]
    },
    {
      id: 'rural_008',
      festival: 'ewuyue',
      month: 5,
      stage: '夏耘',
      narrative: '五月俗称恶月，多禁忌。忌曝床荐席，忌盖屋。人问其故，云：五月盖屋，令人头秃。然而农事不等人，田间的秧苗正需照料。',
      choices: [
        { text: '严守禁忌：停工修整', effects: { money: -10, health: 10 } },
        { text: '不畏禁忌：照常农事', effects: { food: 20, risk: 15 } },
        { text: '蓄药治恶：采艾悬门户', effects: { money: -5, health: 15, safety: 10 } },
        { text: '竞渡禳灾：参与龙舟竞渡', effects: { money: -20, reputation: 20, safety: 15 } }
      ]
    },
    {
      id: 'rural_009',
      festival: 'duanwu',
      month: 5,
      stage: '夏耘',
      narrative: '五月五日，竞渡采杂药。以五彩丝系臂，名曰"辟兵"；还食粽子、饮菖蒲酒。竞渡之戏，采菱拾翠，鼓声震天。',
      choices: [
        { text: '竞渡夺标：参与龙舟竞渡', effects: { money: -10, reputation: 25, strength: 10 } },
        { text: '五彩系臂：系五彩丝辟兵', effects: { money: -5, safety: 20, luck: 5 } },
        { text: '采杂药：采药治百病', effects: { money: -15, health: 20, herbSkill: 10 } },
        { text: '包粽相饷：制作粽子送邻里', effects: { money: -20, food: 15, socialPoints: 20 } }
      ]
    },
    {
      id: 'rural_010',
      festival: 'qiqi',
      month: 7,
      stage: '秋收',
      narrative: '七月七日，为牵牛织女聚会之夜。女子结彩穿针，陈瓜果于庭中乞巧。有喜子网于瓜上，则以为符应。',
      choices: [
        { text: '穿针乞巧：结彩穿针比赛', effects: { money: -10, craftSkill: 15, socialPoints: 15 } },
        { text: '陈瓜乞巧：陈瓜果于庭', effects: { money: -15, luck: 20, craftSkill: 5 } },
        { text: '曝衣藏书：晾晒衣物书籍', effects: { money: 0, health: 5, knowledge: 5 } },
        { text: '夜观天象：观看牛女相会', effects: { money: 0, luck: 10, knowledge: 10 } }
      ]
    },
    {
      id: 'rural_011',
      festival: 'zhongyuan',
      month: 7,
      stage: '秋收',
      narrative: '七月十五日，僧尼道俗悉营盆供诸佛。民间亦祭祀祖先，放河灯超度亡魂。',
      choices: [
        { text: '营盆供佛：设盂兰盆供', effects: { money: -30, merit: 30, reputation: 15 } },
        { text: '祭祀祖先：祭祖烧纸', effects: { money: -15, socialPoints: 20, reputation: 10 } },
        { text: '放河灯：放灯超度亡魂', effects: { money: -10, merit: 15, luck: 10 } },
        { text: '如常度日：不参与中元活动', effects: { money: 0, reputation: -5 } }
      ]
    },
    {
      id: 'rural_012',
      festival: 'chongyang',
      month: 9,
      stage: '秋收',
      narrative: '九月九日，佩茱萸，食蓬饵，饮菊花酒，云令人长寿。登高赋诗，遍插茱萸。',
      choices: [
        { text: '登高饮酒：登高赋诗饮酒', effects: { money: -25, reputation: 25, health: 20 } },
        { text: '佩萸延寿：佩戴茱萸', effects: { money: -5, health: 15, safety: 10 } },
        { text: '采菊酿酒：采摘菊花酿酒', effects: { money: -20, health: 25, money: 30 } },
        { text: '农事收尾：抓紧秋收', effects: { food: 30, money: 20 } }
      ]
    },
    {
      id: 'rural_016',
      festival: null,
      month: 10,
      stage: '冬藏',
      narrative: '十月小春，天气和暖，正是秋收收尾和冬耕准备的时节。田里的稻谷已经收割完毕，你正在晾晒谷物，准备入仓。远处传来邻居的吆喝声，说是县里要核查田亩，重新核定税额。',
      choices: [
        { text: '认真晾晒谷物', effects: { food: 25, money: 10 } },
        { text: '整理田亩账目', effects: { money: -10, reputation: 5 } },
        { text: '外出打工赚钱', effects: { money: 60, food: -5 } },
        { text: '储备过冬物资', effects: { money: -30, food: 30, health: 10 } }
      ]
    },
    {
      id: 'rural_017',
      festival: null,
      month: 10,
      stage: '冬藏',
      narrative: '十月，小春回暖。乡间集市热闹起来，农民们纷纷带着自家的农产品来交易。你也挑着一担粮食来到集市，希望能卖个好价钱。集市上人来人往，叫卖声此起彼伏。',
      choices: [
        { text: '高价出售粮食', effects: { money: 80, reputation: -5 } },
        { text: '平价出售，薄利多销', effects: { money: 50, reputation: 10 } },
        { text: '以粮换物', effects: { money: -10, food: 15 } },
        { text: '观望行情', effects: { money: 0, reputation: 5 } }
      ]
    },
    {
      id: 'rural_013',
      festival: 'dongzhi',
      month: 11,
      stage: '冬藏',
      narrative: '冬至日，量日影，作赤豆粥，以避瘟病。长者称贺，一如元正之礼。',
      choices: [
        { text: '赤豆粥贺：作赤豆粥相饷', effects: { money: -20, reputation: 20, health: 15 } },
        { text: '量日影：测量日影长短', effects: { money: 0, knowledge: 20, reputation: 10 } },
        { text: '拜贺长者：向长辈贺节', effects: { money: -10, socialPoints: 25, reputation: 5 } },
        { text: '休整度日：在家休息', effects: { money: 0, health: 20 } }
      ]
    },
    {
      id: 'rural_014',
      festival: 'laji',
      month: 12,
      stage: '冬藏',
      narrative: '十二月八日，腊日。村人击细腰鼓，戴胡头，及作金刚力士以逐疫。作腊酒、脯腊，祭灶神。',
      choices: [
        { text: '击鼓逐疫：参与逐疫仪式', effects: { money: -15, reputation: 25, safety: 20 } },
        { text: '作腊祭祀：作腊酒脯腊', effects: { money: -30, food: 30, reputation: 15 } },
        { text: '祭灶祈福：祭祀灶神', effects: { money: -10, luck: 20, reputation: 10 } },
        { text: '杀猪备年货：杀猪过年', effects: { money: -50, food: 50, reputation: 20 } }
      ]
    },
    {
      id: 'rural_015',
      festival: 'chuxi',
      month: 12,
      stage: '冬藏',
      narrative: '岁暮，家家具肴蔌，谓宿岁之储。迎新岁，聚饮守岁。燃爆竹，放烟火，辞旧迎新。',
      choices: [
        { text: '守岁聚饮：与家人守岁', effects: { money: -40, socialPoints: 30, health: 10 } },
        { text: '爆竹辞岁：燃放爆竹', effects: { money: -20, reputation: 15, luck: 15 } },
        { text: '备肴蔌：准备年夜饭', effects: { money: -30, food: 40, socialPoints: 20 } },
        { text: '俭省过年：简单度过', effects: { money: 0, food: 10, reputation: -5 } }
      ]
    },
    {
      id: 'rural_daily_001',
      festival: null,
      month: 4,
      narrative: '四月农忙时节，田地里一片繁忙，你正忙着插秧播种。忽然乌云密布，狂风大作，片刻间暴雨倾盆而下，眼看就要冲垮田埂，淹没秧苗。这可是一家人一年的生计，你心急如焚。',
      choices: [
        { text: '冒雨抢修田埂', effects: { food: 10, health: -5, reputation: 3 } },
        { text: '寻求邻里帮助', effects: { food: 5, socialPoints: -3, reputation: 1 } },
        { text: '放弃这片田，保护其他田地', effects: { food: -15, reputation: -2 } }
      ]
    }
  ],

  urbanEvents: [
    {
      id: 'urban_001',
      festival: 'yuandan',
      month: 1,
      narrative: '正月一日，建康城内张灯结彩，爆竹声此起彼伏。朱雀大街上游人如织，商贩们吆喝着新年货物，琳琅满目。各家店铺都装饰一新，一派繁华景象。你看着街上的人流，心中盘算着今年的生意该如何做起。',
      choices: [
        { text: '去集市摆摊卖货', effects: { money: 80, reputation: 2 } },
        { text: '拜访主顾，送上新年礼物', effects: { money: -60, socialPoints: 8 } },
        { text: '在家休息，养精蓄锐', effects: { health: 5 } }
      ]
    },
    {
      id: 'urban_002',
      festival: null,
      month: 2,
      narrative: '二月春风送暖，江南草长，杂花生树。作坊里生意渐好，订单日增。一日，一位外地客商前来洽谈生意，言称要大量订购你的货物，若合作愉快，可成长期主顾。此事关乎生计，你需谨慎应对。',
      choices: [
        { text: '热情接待，争取长期合作', effects: { money: 100, socialPoints: 5 } },
        { text: '提高价格，谋取厚利', effects: { money: 150, reputation: -3 } },
        { text: '婉言谢绝，专注本地生意', effects: { money: 30, reputation: 1 } }
      ]
    },
    {
      id: 'urban_003',
      festival: 'duanwu',
      month: 5,
      narrative: '端午佳节，秦淮河上龙舟竞渡，鼓声震天，呐喊声此起彼伏。城里的达官贵人都乘轿前来观看，两岸人山人海，场面热闹非凡。你看着这繁华景象，心中盘算着如何利用这个机会做点生意。',
      choices: [
        { text: '去河边观看龙舟', effects: { reputation: 3, socialPoints: 3 } },
        { text: '趁机售卖特产', effects: { money: 120, reputation: 2 } },
        { text: '在家制作应节物品', effects: { money: 50, reputation: 1 } }
      ]
    },
    {
      id: 'urban_004',
      festival: null,
      month: 6,
      narrative: '六月酷暑，烈日炎炎，街市上行人稀少，生意清淡。你百无聊赖地坐在店铺里，听着蝉鸣阵阵。忽然有同乡来报，说城外新辟了一处集市，人流量很大，商机无限。你心动了。',
      choices: [
        { text: '外出考察新商机', effects: { money: -30, reputation: 2 } },
        { text: '整修店铺，提升品质', effects: { money: -80, reputation: 5 } },
        { text: '趁淡季学习新技艺', effects: { money: -20, reputation: 3 } }
      ]
    },
    {
      id: 'urban_005',
      festival: 'qiqi',
      month: 7,
      narrative: '七夕之夜，城里的女子们纷纷来到街市购买乞巧用品，街市上灯火辉煌，人声鼎沸。香囊、针线、瓜果等应节物品琳琅满目，买卖兴隆。你看着这热闹景象，心中盘算着该如何抓住这个商机。',
      choices: [
        { text: '售卖精美饰品', effects: { money: 100, reputation: 2 } },
        { text: '参加乞巧聚会', effects: { socialPoints: 8, reputation: 2 } },
        { text: '在家读书习字', effects: { reputation: 3 } }
      ]
    },
    {
      id: 'urban_006',
      festival: null,
      month: 8,
      narrative: '八月秋高气爽，金风送爽，正是经商的好时节。你店铺的生意蒸蒸日上，心中正暗自高兴。忽闻官府告示，因军费开支浩大，决定增加商税三成。此令一出，商户们议论纷纷，你也陷入了两难之中。',
      choices: [
        { text: '依法纳税，诚信经营', effects: { money: -100, reputation: 5 } },
        { text: '寻找避税途径', effects: { money: -30, reputation: -3 } },
        { text: '上书官府，请求减税', effects: { money: -20, reputation: 2 } }
      ]
    },
    {
      id: 'urban_007',
      festival: 'chongyang',
      month: 9,
      narrative: '重阳佳节，城内文人雅士齐聚城南赏菊饮酒，吟诗作赋。你因平日待人诚恳，也收到了一位名士的邀请。若是前往，可结识城中名流，对生意大有裨益；然你出身市井，恐遭人轻视。',
      choices: [
        { text: '参加文人聚会', effects: { socialPoints: 10, reputation: 3 } },
        { text: '赠送菊花给主顾', effects: { money: -50, socialPoints: 5 } },
        { text: '照常经营生意', effects: { money: 60 } }
      ]
    },
    {
      id: 'urban_009',
      festival: null,
      month: 10,
      stage: '秋季备货',
      narrative: '十月小春，天气转暖，城内集市愈发热闹。西域商人带来了一批新奇的货物，香料、珠宝、琉璃器皿琳琅满目。你看着这些稀罕物件，心中盘算着是否要购入一些来吸引顾客。',
      choices: [
        { text: '购入新奇货物', effects: { money: -150, reputation: 10 } },
        { text: '观望市场反应', effects: { money: 0, reputation: 5 } },
        { text: '专注传统商品', effects: { money: 40, reputation: 2 } },
        { text: '趁机清仓甩卖', effects: { money: 80, reputation: -3 } }
      ]
    },
    {
      id: 'urban_010',
      festival: null,
      month: 10,
      stage: '秋季备货',
      narrative: '十月，官府颁布新令，要求商户登记市籍，缴纳摊位费。这对小商户来说是一笔不小的开支。你正在犹豫是否要花钱办理市籍，还是继续在草市摆摊。',
      choices: [
        { text: '办理市籍，获得正式摊位', effects: { money: -200, reputation: 15 } },
        { text: '继续在草市摆摊', effects: { money: 0, reputation: -5 } },
        { text: '转行做其他生意', effects: { money: 50, reputation: 0 } },
        { text: '联名上书反对', effects: { money: -50, socialPoints: 20 } }
      ]
    },
    {
      id: 'urban_011',
      festival: null,
      month: 11,
      stage: '年终结算',
      narrative: '十一月寒冬将至，城内燃料价格上涨，各种取暖用品需求大增。你的店铺也适时调整了商品结构，增加了木炭、棉衣、暖炉等冬季用品。生意不错，但也引来了同行的嫉妒。',
      choices: [
        { text: '扩大经营规模', effects: { money: -100, reputation: 10 } },
        { text: '与同行合作', effects: { money: 50, socialPoints: 15 } },
        { text: '保持现状', effects: { money: 30, reputation: 5 } },
        { text: '压低价格竞争', effects: { money: 100, reputation: -10 } }
      ]
    },
    {
      id: 'urban_012',
      festival: null,
      month: 11,
      stage: '年终结算',
      narrative: '冬至将至，家家户户都在准备过冬。一位老主顾来找你，说是要订购一批货物作为年礼送给亲友。这笔订单数额不小，但若按时交货，利润可观。然时间紧迫，你需要加班加点才能完成。',
      choices: [
        { text: '接下订单，加班完成', effects: { money: 200, health: -10 } },
        { text: '推荐其他商户', effects: { money: 50, socialPoints: 10 } },
        { text: '婉言谢绝', effects: { money: 0, socialPoints: -5 } },
        { text: '提高价格接单', effects: { money: 250, reputation: -5 } }
      ]
    },
    {
      id: 'urban_008',
      festival: 'laji',
      month: 12,
      narrative: '腊月将至，寒气逼人，家家户户都在置办年货。你的店铺生意兴隆，顾客盈门，应接不暇。年终岁末，正是赚钱的好时机，然连日忙碌，身体已有些吃不消。家中亲人也盼着你早日回家团聚。',
      choices: [
        { text: '延长营业时间', effects: { money: 200, health: -5 } },
        { text: '限量供应，保持品质', effects: { money: 100, reputation: 5 } },
        { text: '提前关门，回家团聚', effects: { socialPoints: 8, health: 5 } }
      ]
    }
  ],

  farmerEvents: [
    {
      id: 'farmer_001',
      month: 1,
      stage: '春耕',
      narrative: '正月里，里正带着差役来到村中，说是朝廷要清丈田亩，重新核定税额。你望着自家那三十亩薄田，心中忐忑不安。若是田亩数被多报，赋税便要加重；若是少报，又怕被查出治罪。里正似笑非笑地看着你，意味深长地说："张阿福，你是个老实人，这田亩数……可得仔细算清楚啊。"',
      choices: [
        { text: '如实申报，绝不隐瞒', effects: { reputation: 10, pressure: 5 } },
        { text: '偷偷少报几亩，减轻赋税', effects: { money: 30, risk: 20, reputation: -5 } },
        { text: '给里正塞些钱，请他通融', effects: { money: -50, reputation: -10, pressure: -10 } },
        { text: '去找乡绅说情，请他关照', effects: { money: -80, socialPoints: 10, pressure: -15 } }
      ]
    },
    {
      id: 'farmer_002',
      month: 2,
      stage: '春耕',
      narrative: '春耕在即，可你家的种子却不够了。去年收成不好，留下的稻种本就不多，再加上鼠耗虫蛀，所剩无几。邻居张阿福家倒是有余粮，可他去年借给你的钱还没还呢。村东头的王员外家也放高利贷，不过利息高得吓人。你站在田埂上，望着光秃秃的田地，心中焦急万分。',
      choices: [
        { text: '硬着头皮再向张阿福借种子', effects: { food: 30, socialPoints: -10, pressure: 10 } },
        { text: '向王员外借高利贷买种子', effects: { money: 50, food: 20, pressure: 25 } },
        { text: '去城里打短工赚钱买种子', effects: { money: 60, food: -10, health: -10 } },
        { text: '省吃俭用，减少播种面积', effects: { food: -20, money: 0, pressure: 5 } }
      ]
    },
    {
      id: 'farmer_003',
      month: 2,
      stage: '春耕',
      narrative: '塘丁税的告示贴在了村口。说是要维修水利，每户需出丁一名，若不愿出丁，可折钱缴纳。你望着告示，心中盘算着：春耕正是忙的时候，若是去修水利，自家的田谁来种？可若是折钱，又是一笔不小的开支。村正已经在挨家挨户登记了，很快就轮到你家。',
      choices: [
        { text: '亲自去服塘丁役', effects: { money: 0, food: -15, health: -10 } },
        { text: '折钱缴纳，专心务农', effects: { money: -40, food: 20 } },
        { text: '雇人代役', effects: { money: -60, food: 15 } },
        { text: '找里正说情，请求减免', effects: { money: -30, socialPoints: 5, pressure: -5 } }
      ]
    },
    {
      id: 'farmer_004',
      month: 3,
      stage: '春耕',
      narrative: '你家的老牛病了，这可是耕田的主力军。没有牛，三十亩地靠人力怎么耕得完？兽医来看过，说是要花不少钱才能治好。邻村有户人家愿意卖牛，可价钱不低。你看着卧在牛栏里的老牛，又看看那片等着耕种的田地，心中一筹莫展。',
      choices: [
        { text: '花钱请兽医治好老牛', effects: { money: -80, food: 10 } },
        { text: '卖掉老牛，再买一头年轻的', effects: { money: -150, food: 20 } },
        { text: '向邻居借牛耕地', effects: { food: 5, socialPoints: -15, pressure: 10 } },
        { text: '咬牙靠人力耕田', effects: { food: -10, health: -25, reputation: 5 } }
      ]
    },
    {
      id: 'farmer_005',
      month: 4,
      stage: '夏耘',
      narrative: '四月里，天气逐渐炎热，田里的秧苗长势喜人。可就在这时，县衙的差役来了，说是要征收口钱——按人头征收的税。你上有老下有小，一家五口，这口钱可不是小数目。差役凶神恶煞地说："限期三日，交不上钱的，拿人抵税！"',
      choices: [
        { text: '如数缴纳口钱', effects: { money: -100, pressure: -10 } },
        { text: '变卖家中物件凑钱', effects: { money: -60, reputation: -10, pressure: 5 } },
        { text: '躲出去避避风头', effects: { pressure: 15, reputation: -5, risk: 10 } },
        { text: '找族里长辈出面求情', effects: { money: -50, socialPoints: 10, pressure: -5 } }
      ]
    },
    {
      id: 'farmer_006',
      month: 5,
      stage: '夏耘',
      narrative: '五月恶月，果然不太平。一场突如其来的冰雹砸坏了不少庄稼，你家的田也未能幸免。望着被砸得七零八落的秧苗，你欲哭无泪。这可是一家人一年的指望啊。更糟的是，里正来通知，说是今年的田租不减，灾情要自己承担。',
      choices: [
        { text: '赶紧补种，尽量减少损失', effects: { food: -20, money: -30, health: -15 } },
        { text: '去城里打零工补贴家用', effects: { money: 80, food: -10, health: -10 } },
        { text: '向地主借粮度荒', effects: { food: 50, pressure: 20, money: -20 } },
        { text: '求神拜佛，祈求来年丰收', effects: { money: -20, luck: 10, merit: 10 } }
      ]
    },
    {
      id: 'farmer_007',
      month: 5,
      stage: '夏耘',
      narrative: '王员外的管家来找你，说是王员外看上了你家那块临河的良田，愿意出高价购买。那可是你家最好的一块地，祖上传下来的，怎么能卖？可管家皮笑肉不笑地说："张阿福，你可要想清楚了，王员外的脾气……你是知道的。"你隐隐感觉到，这不是买卖，更像是威逼。',
      choices: [
        { text: '坚决不卖，那是祖宗留下的田', effects: { reputation: 20, pressure: 20, risk: 15 } },
        { text: '忍痛卖掉，免得惹麻烦', effects: { money: 200, land: -5, reputation: -15 } },
        { text: '找乡绅说和，希望能保住地', effects: { money: -50, socialPoints: 15, pressure: -10 } },
        { text: '假装答应，拖延时间想办法', effects: { money: 20, pressure: 25, risk: 20 } }
      ]
    },
    {
      id: 'farmer_008',
      month: 6,
      stage: '夏耘',
      narrative: '六月天，孩儿面，说变就变。连日暴雨，河水猛涨，眼看就要漫过堤岸，淹没你家的田地。村里人都在忙着加固堤坝，可你家只有你一个壮劳力，哪里忙得过来？更让人心急的是，王员外表家的佃户都在帮他护田，没人顾得上你这小户人家。',
      choices: [
        { text: '拼尽全力守护自家田地', effects: { food: 10, health: -20, risk: 15 } },
        { text: '请乡亲们帮忙，事后答谢', effects: { food: 5, money: -40, socialPoints: 15 } },
        { text: '放弃低洼田，保住高处的地', effects: { food: -25, money: 0 } },
        { text: '也去帮王员外护田，求他照应', effects: { money: -10, socialPoints: 5, reputation: -10 } }
      ]
    },
    {
      id: 'farmer_009',
      month: 7,
      stage: '秋收',
      narrative: '七月里，稻谷开始泛黄，眼看就要丰收了。可就在这时，县衙的差役又来了，说是要征收杂物调——官府临时征派的物资，有木材、柴草、麻等等。你望着田里快要成熟的稻谷，又看看差役手中的告示，心中愤愤不平：这还没到手的收成，怎么就要先交出去？',
      choices: [
        { text: '如数缴纳杂物调', effects: { money: -50, food: -10, pressure: -5 } },
        { text: '少交一些，能混就混', effects: { money: -20, risk: 15, pressure: 10 } },
        { text: '找人说情，请求减免', effects: { money: -30, socialPoints: 10, pressure: -10 } },
        { text: '偷偷把东西藏起来', effects: { money: 30, risk: 25, reputation: -10 } }
      ]
    },
    {
      id: 'farmer_010',
      month: 8,
      stage: '秋收',
      narrative: '八月秋收，你看着田里沉甸甸的稻穗，心中充满了喜悦。一年的辛苦总算没有白费。可就在这时，里正来通知，说是今年的田租要提高，因为朝廷要增加军费。你算了算，交完田租、户调，剩下的粮食 barely 够一家人吃到明年。这日子，何时是个头啊？',
      choices: [
        { text: '老老实实交租纳税', effects: { food: -40, money: -60, reputation: 10 } },
        { text: '偷偷藏些粮食，以备不时之需', effects: { food: 20, risk: 20, reputation: -5 } },
        { text: '去县城打听打听，看看有没有办法', effects: { money: -20, knowledge: 10, socialPoints: 5 } },
        { text: '多开垦几亩荒地，增加收入', effects: { food: 15, money: -20, health: -15 } }
      ]
    },
    {
      id: 'farmer_011',
      month: 8,
      stage: '秋收',
      narrative: '收粮的时候到了，你一个人忙不过来。邻居张阿福来找你，提议两家互相帮忙收稻。可你听说张阿福手脚不太干净，上次帮人收粮，据说偷偷藏了不少。但转念一想，不找他帮忙，自己一个人要收到什么时候？万一遇上阴雨天气，粮食烂在地里，损失更大。',
      choices: [
        { text: '答应张阿福，互相帮忙', effects: { food: 30, money: -10, risk: 10 } },
        { text: '婉言谢绝，自己慢慢收', effects: { food: 15, health: -20 } },
        { text: '雇几个短工帮忙收', effects: { money: -80, food: 35 } },
        { text: '找族里的晚辈帮忙', effects: { money: -30, food: 25, socialPoints: 10 } }
      ]
    },
    {
      id: 'farmer_012',
      month: 9,
      stage: '秋收',
      narrative: '重阳佳节，本是登高饮酒的好日子。可你却在为交户调发愁——绢二匹、绵三斤，这可不是小数目。你家虽然养蚕，但收成不好，织的绢不够交户调的。城里的布庄倒是有绢卖，可价钱贵得离谱。你坐在织机前，看着那半匹没织完的绢，心中愁绪万千。',
      choices: [
        { text: '熬夜织布，争取够数', effects: { money: 20, health: -20, craftSkill: 5 } },
        { text: '去城里买绢交调', effects: { money: -120, pressure: -10 } },
        { text: '找里正说情，能不能折成米交', effects: { money: -40, food: -30, pressure: -5 } },
        { text: '向亲戚借绢，来年再还', effects: { money: 0, socialPoints: -20, pressure: 15 } }
      ]
    },
    {
      id: 'farmer_013',
      month: 10,
      stage: '冬藏',
      narrative: '十月小春，农活暂时告一段落。你坐在自家门槛上，盘算着今年的收成。除去各种赋税，剩下的粮食勉强够吃，钱倒是没剩下几个。这时，隔壁村的王二来找你，说是城里有活干，工钱不少，问你愿不愿意一起去。你心动了——趁冬闲赚点钱，明年的日子也好过些。',
      choices: [
        { text: '跟王二去城里打工', effects: { money: 100, health: -15, socialPoints: 5 } },
        { text: '留在家里，做点副业', effects: { money: 40, food: 10, craftSkill: 5 } },
        { text: '休整身心，为明年做准备', effects: { health: 20, money: 0 } },
        { text: '去集市做点小买卖', effects: { money: 60, risk: 15, socialPoints: 10 } }
      ]
    },
    {
      id: 'farmer_014',
      month: 11,
      stage: '冬藏',
      narrative: '冬至过后，天气越来越冷。县里传来消息，说是朝廷要清查户籍，防止有人逃税避役。你心里咯噔一下——你家老二前年为了避役，跑到外地去了，至今未归。若是被查出来，可是大罪。里正已经在挨家挨户核对户籍了，眼看就要到你家。',
      choices: [
        { text: '主动说明情况，请求宽大处理', effects: { reputation: 10, pressure: 20, risk: 15 } },
        { text: '花钱请里正帮忙遮掩', effects: { money: -100, pressure: -10, reputation: -10 } },
        { text: '赶紧找人把老二叫回来', effects: { money: -30, pressure: 10 } },
        { text: '就说老二病死了，销户', effects: { reputation: -20, risk: 25, pressure: -5 } }
      ]
    },
    {
      id: 'farmer_015',
      month: 11,
      stage: '冬藏',
      narrative: '年终了，你把一年的账目算了又算。除去各种开销，几乎没什么结余。这时，你听说城里的陈掌柜在找人合作做生意，说是利润丰厚。可你也知道，做生意有风险，万一赔了，这日子可就没法过了。你站在村口，望着通往县城的路，心中犹豫不决。',
      choices: [
        { text: '拿出积蓄，试试做生意', effects: { money: -80, risk: 30, socialPoints: 10 } },
        { text: '还是老老实实种田，稳当', effects: { money: 0, pressure: -10 } },
        { text: '先去城里打听打听行情', effects: { money: -20, knowledge: 15 } },
        { text: '找个可靠的人合伙，降低风险', effects: { money: -50, risk: 15, socialPoints: 15 } }
      ]
    },
    {
      id: 'farmer_016',
      month: 12,
      stage: '冬藏',
      narrative: '腊月里，家家户户都在准备过年。你家也不例外，虽然不富裕，但年总得过。可就在这时，里正来通知，说是县里要修城墙，每户要出一个民夫，去县里干活。你望着一家老小，又看看那没办完的年货，心中苦笑：这年，怕是过不消停了。',
      choices: [
        { text: '去县里服徭役', effects: { money: 0, health: -20, reputation: 5 } },
        { text: '花钱雇人代役', effects: { money: -80, health: 0 } },
        { text: '找里正说情，能不能过完年再去', effects: { money: -40, socialPoints: 5, pressure: 10 } },
        { text: '装病不去', effects: { reputation: -15, risk: 20, pressure: -5 } }
      ]
    },
    {
      id: 'farmer_017',
      month: 12,
      stage: '冬藏',
      narrative: '除夕之夜，你一家人围坐在火堆旁，看着桌上简单的年夜饭，心中感慨万千。这一年，虽然辛苦，但总算平平安安地过来了。你望着窗外的雪花，心中盘算着明年的计划：是继续守着这三十亩地过日子，还是去城里闯一闯？这个问题，你已经想了很久了。',
      choices: [
        { text: '明年好好种田，争取有个好收成', effects: { food: 10, money: 5, luck: 10 } },
        { text: '明年去城里试试，说不定能闯出点名堂', effects: { money: 0, mobility: 10, pressure: 10 } },
        { text: '多种些经济作物，增加收入', effects: { money: 30, risk: 15, food: -10 } },
        { text: '跟村里的人学学手艺', effects: { craftSkill: 15, money: -20 } }
      ]
    }
  ],

  tenantEvents: [
    {
      id: 'tenant_001',
      month: 1,
      stage: '春耕',
      narrative: '正月里，地主家的管家赵大来了。他拿着账簿，皮笑肉不笑地对你说："李二，去年的租子还差两石，加上利息，一共是三石五斗。这年也过了，该清账了吧？"你望着空空如也的粮缸，又看看赵大身后那两个凶神恶煞的家丁，心中一阵发紧。',
      choices: [
        { text: '苦苦哀求，请管家再宽限些时日', effects: { pressure: 15, dependency: 5 } },
        { text: '把家里仅有的粮食都拿出来抵债', effects: { food: -30, pressure: -10, dependency: 10 } },
        { text: '让老婆去地主家做针线活抵债', effects: { dependency: 20, socialPoints: -10 } },
        { text: '硬着头皮说没钱，看他能怎样', effects: { pressure: 25, risk: 20, dependency: 15 } }
      ]
    },
    {
      id: 'tenant_002',
      month: 2,
      stage: '春耕',
      narrative: '春耕要开始了，可种子、农具都还没着落。按规矩，这些都该由地主提供，可管家赵大却说，今年地主家也困难，种子要佃户自己想办法，或者从地主家借，秋后加倍偿还。你站在田埂上，望着那二十亩荒地，心中一片茫然。',
      choices: [
        { text: '从地主家借种子，秋后加倍还', effects: { food: 30, pressure: 20, dependency: 15 } },
        { text: '偷偷去别的地方打短工赚钱买种子', effects: { money: 40, risk: 15, dependency: -5 } },
        { text: '找其他佃户凑一凑', effects: { food: 15, socialPoints: 10 } },
        { text: '少种几亩，量力而行', effects: { food: -10, pressure: 10, dependency: 5 } }
      ]
    },
    {
      id: 'tenant_003',
      month: 2,
      stage: '春耕',
      narrative: '管家赵大来通知，说是地主家要修花园，每户佃户要出一个人去干活，干满十天才能回来。你算了算，这十天正是春耕最忙的时候，若是去了，自家的田谁来种？可赵大说了，不去也行，每天折钱五文。你摸着口袋里那少得可怜的几文钱，心中左右为难。',
      choices: [
        { text: '去地主家服杂役', effects: { food: -15, health: -10, dependency: 10 } },
        { text: '花钱免役，专心种自己的田', effects: { money: -50, food: 10 } },
        { text: '让你爹去，你留下来种田', effects: { health: -5, socialPoints: -10, dependency: 5 } },
        { text: '找其他佃户换工', effects: { food: 5, socialPoints: 15 } }
      ]
    },
    {
      id: 'tenant_004',
      month: 3,
      stage: '春耕',
      narrative: '地主王员外来巡田了。他骑着高头大马，身后跟着一群家丁，耀武扬威。走到你家的田边，他勒住马，皱着眉头说："这田整得不行啊，地垄都不直。李二，你是不是偷懒了？"你吓得赶紧跪下，连声说不敢。王员外哼了一声，说："今年若是收成不好，看我怎么罚你！"',
      choices: [
        { text: '连连赔罪，保证一定好好干', effects: { dependency: 15, pressure: 10 } },
        { text: '解释说是因为种子不好', effects: { dependency: 5, risk: 15 } },
        { text: '默默忍受，不敢多言', effects: { pressure: 20, dependency: 10 } },
        { text: '壮着胆子请地主提供好种子', effects: { risk: 20, dependency: 5, food: 10 } }
      ]
    },
    {
      id: 'tenant_005',
      month: 4,
      stage: '夏耘',
      narrative: '四月里，秧苗刚插下去，管家赵大又来了。他说地主家要办喜事，每户佃户要出五百文贺礼钱。你一听就急了——五百文，你家一年也攒不下这么多钱啊！可赵大说，这是规矩，哪家不出，就收回哪家的田。你望着那刚插好的秧苗，欲哭无泪。',
      choices: [
        { text: '东拼西凑，把钱交上', effects: { money: -500, pressure: 25, dependency: 10 } },
        { text: '去找其他佃户商量，一起求情', effects: { money: -200, socialPoints: 20, pressure: 15 } },
        { text: '拿粮食抵账', effects: { food: -40, dependency: 15 } },
        { text: '硬顶着不交，大不了不种了', effects: { pressure: 30, risk: 25, dependency: -10 } }
      ]
    },
    {
      id: 'tenant_006',
      month: 5,
      stage: '夏耘',
      narrative: '五月里，天气炎热，你正在田里除草，忽然听到有人喊："地主家的少爷来了！"你抬头一看，只见王员外的儿子王少爷带着几个家丁，正朝着这边走来。王少爷一眼就看到了你，笑嘻嘻地说："这不是李二吗？听说你家媳妇长得不错，叫出来给少爷我看看？"',
      choices: [
        { text: '忍气吞声，赔笑说媳妇回娘家了', effects: { dependency: 10, pressure: 20, reputation: -5 } },
        { text: '壮着胆子拒绝，说不方便', effects: { risk: 25, pressure: 15, reputation: 10 } },
        { text: '赶紧叫媳妇出来见礼', effects: { socialPoints: -20, dependency: 15, pressure: 25 } },
        { text: '低头不语，装没听见', effects: { pressure: 15, dependency: 5 } }
      ]
    },
    {
      id: 'tenant_007',
      month: 5,
      stage: '夏耘',
      narrative: '大旱。连续一个月没下雨，田里的秧苗都快枯死了。你天天挑水浇地，可杯水车薪，根本无济于事。更让人心急的是，管家赵大说了，不管年成好不好，地租一粒都不能少。你望着干裂的田地，又看看身后嗷嗷待哺的孩子，心中一片绝望。',
      choices: [
        { text: '拼命挑水浇地，能救多少是多少', effects: { food: -20, health: -25, pressure: 10 } },
        { text: '求地主减租，就说年成不好', effects: { dependency: 15, pressure: 20, risk: 10 } },
        { text: '出去逃荒，等旱情过了再回来', effects: { food: -10, risk: 20, dependency: -10 } },
        { text: '去地主家借粮度日', effects: { food: 30, dependency: 25, pressure: 15 } }
      ]
    },
    {
      id: 'tenant_008',
      month: 6,
      stage: '夏耘',
      narrative: '你儿子病了，烧得很厉害。村里的郎中来看过，说是要花不少钱才能治好。可你家哪有什么钱？你想去求地主借钱，可你知道，地主的钱是那么好借的吗？利滚利，只怕这辈子都还不清。可看着儿子烧得通红的小脸，你又怎能忍心？',
      choices: [
        { text: '去求地主借钱给儿子治病', effects: { money: 100, dependency: 30, pressure: 20 } },
        { text: '自己上山采草药试试', effects: { money: 0, health: -10, risk: 20 } },
        { text: '把家里能卖的都卖了', effects: { money: 80, food: -20, reputation: -5 } },
        { text: '去庙里烧香拜佛，求菩萨保佑', effects: { money: -10, merit: 15, luck: 10 } }
      ]
    },
    {
      id: 'tenant_009',
      month: 7,
      stage: '秋收',
      narrative: '七月里，稻谷开始泛黄，眼看就要收成了。你心中既高兴又发愁——高兴的是，今年虽然遭遇了旱灾，但收成还算过得去；发愁的是，交完五成地租，再还上欠地主的债，剩下的粮食根本不够一家人吃到明年。你站在田埂上，望着那片金黄的稻田，心中五味杂陈。',
      choices: [
        { text: '老老实实交租还债', effects: { food: -50, money: -30, dependency: 5 } },
        { text: '偷偷藏些粮食，不能全交了', effects: { food: 20, risk: 25, dependency: 10 } },
        { text: '去求管家，能不能少交一点', effects: { money: -20, dependency: 15, pressure: 10 } },
        { text: '多干点活，争取让地主满意', effects: { health: -15, dependency: 5, reputation: 5 } }
      ]
    },
    {
      id: 'tenant_010',
      month: 8,
      stage: '秋收',
      narrative: '收粮的时候到了，地主家的粮仓就在田边。管家赵大带着家丁，亲自监督收租。你看着一担担粮食被挑进地主家的粮仓，心都在滴血——那可是你一年的血汗啊！更可气的是，赵大还故意用大斗量，说是要扣掉损耗。你敢怒不敢言，只能在心里默默算账。',
      choices: [
        { text: '忍气吞声，任他克扣', effects: { food: -10, pressure: 20, dependency: 10 } },
        { text: '壮着胆子提一句，斗是不是太大了', effects: { risk: 20, pressure: 15, reputation: 10 } },
        { text: '提前偷偷把最好的粮食藏起来', effects: { food: 15, risk: 30, dependency: 15 } },
        { text: '去找其他佃户一起理论', effects: { socialPoints: 20, risk: 25, pressure: -5 } }
      ]
    },
    {
      id: 'tenant_011',
      month: 8,
      stage: '秋收',
      narrative: '交完租，你算了算，剩下的粮食果然不够吃。这时，你听说邻村有个张大户，愿意招佃户，地租只要四成，比王员外家低一成。你心动了——若是能去张大户家种地，日子会不会好过些？可你也知道，佃户不能随便跳槽，王员外肯定不会轻易放你走。',
      choices: [
        { text: '偷偷去联系张大户，看看能不能成', effects: { risk: 25, dependency: -10, pressure: 15 } },
        { text: '还是算了，老老实实待着吧', effects: { pressure: -5, dependency: 5 } },
        { text: '跟其他佃户商量商量', effects: { socialPoints: 15, risk: 10 } },
        { text: '去跟王员外提涨工钱，不然就走', effects: { risk: 30, dependency: -15, pressure: 20 } }
      ]
    },
    {
      id: 'tenant_012',
      month: 9,
      stage: '秋收',
      narrative: '重阳这天，王员外家请客，佃户们都得去帮忙。你在厨房忙活了一天，端菜倒水，累得腰都直不起来。席间，王员外喝多了，当众宣布：谁要是能在三年内存够十吊钱，就可以赎身，成为自由民。你听到这话，心中猛地一跳——十吊钱，那可是天文数字，但……好歹有个盼头了。',
      choices: [
        { text: '把这个消息藏在心里，暗暗发誓要赎身', effects: { freedom: 10, pressure: -5, mobility: 5 } },
        { text: '当场跪下谢恩，表示一定努力', effects: { dependency: 10, reputation: 5, freedom: 5 } },
        { text: '跟其他佃户讨论这个消息', effects: { socialPoints: 15, freedom: 5 } },
        { text: '不以为然，觉得地主在骗人', effects: { pressure: 5, dependency: 5 } }
      ]
    },
    {
      id: 'tenant_013',
      month: 10,
      stage: '冬藏',
      narrative: '十月里，农活闲了下来。你开始盘算着怎么攒钱赎身。靠种田肯定是不行的，那点收成交完租就没剩多少了。你听说城里有活干，工钱还不错，可地主家肯定不会轻易让你去。你望着县城的方向，心中默默盘算着。',
      choices: [
        { text: '偷偷去城里打零工，赚点外快', effects: { money: 60, risk: 20, dependency: -5 } },
        { text: '在家做点手工活，慢慢攒钱', effects: { money: 20, craftSkill: 10, freedom: 5 } },
        { text: '去求地主，能不能让你去城里干活', effects: { money: 40, dependency: 15, risk: 10 } },
        { text: '省吃俭用，从牙缝里攒钱', effects: { food: -15, money: 15, health: -10 } }
      ]
    },
    {
      id: 'tenant_014',
      month: 11,
      stage: '冬藏',
      narrative: '管家赵大来找你，说是地主家的小姐要出嫁，需要有人陪嫁去男方家，问你愿不愿意去。说是去了之后，若是能得到新主家的赏识，说不定能提拔你。可你心里清楚，这一去，就更没机会赎身了。而且，背井离乡，你的家人怎么办？',
      choices: [
        { text: '答应去陪嫁，说不定是个机会', effects: { mobility: 10, dependency: 15, freedom: -10 } },
        { text: '婉言谢绝，说家里离不开', effects: { dependency: 10, pressure: 15 } },
        { text: '推荐别人去', effects: { socialPoints: -10, dependency: 5 } },
        { text: '装病不去', effects: { risk: 15, dependency: 5, pressure: 10 } }
      ]
    },
    {
      id: 'tenant_015',
      month: 11,
      stage: '冬藏',
      narrative: '你攒了半年的钱，加上变卖了一些东西，终于凑够了两吊钱。你拿着这沉甸甸的两吊钱，心中既激动又忐忑——这是你赎身的第一笔钱。你想了想，决定把钱藏在一个安全的地方，不能让地主家的人知道。可藏在哪里好呢？',
      choices: [
        { text: '埋在自家院子里的老槐树下', effects: { money: 0, security: 10, freedom: 5 } },
        { text: '交给信任的亲戚保管', effects: { money: 0, socialPoints: 5, freedom: 5 } },
        { text: '拿去做点小生意，钱生钱', effects: { money: 0, risk: 20, freedom: 10 } },
        { text: '先交给管家，让他帮忙记账', effects: { money: 0, dependency: 10, reputation: 5 } }
      ]
    },
    {
      id: 'tenant_016',
      month: 12,
      stage: '冬藏',
      narrative: '腊月里，天寒地冻。地主家要过年了，佃户们都得去帮忙。你在地主家忙活了一天，晚上回家时，发现自家的烟囱在冒烟——你媳妇正在做饭。推开门，一股饭香扑面而来。虽然只是粗茶淡饭，但一家人围坐在一起，你心里还是暖暖的。你望着妻子和孩子，心中暗暗发誓：一定要攒够钱，让他们过上好日子。',
      choices: [
        { text: '跟家人商量赎身的计划', effects: { socialPoints: 15, freedom: 10, pressure: -5 } },
        { text: '什么也不说，默默努力', effects: { freedom: 5, pressure: 10 } },
        { text: '多干点活，争取多赚点钱', effects: { money: 20, health: -10, dependency: 5 } },
        { text: '教孩子认字，让他将来有出息', effects: { knowledge: 10, socialPoints: 10, freedom: 5 } }
      ]
    },
    {
      id: 'tenant_017',
      month: 12,
      stage: '冬藏',
      narrative: '除夕夜，你站在自家的茅屋前，望着远处地主家灯火辉煌，听着那边传来的欢声笑语，心中百感交集。你也是人，为什么他们过着锦衣玉食的生活，而你却要受尽剥削？一阵寒风吹来，你裹紧了身上的破棉袄。新的一年就要到了，你的赎身之路，还很漫长。',
      choices: [
        { text: '在心中立下誓言，一定要赎身', effects: { freedom: 15, pressure: -10, luck: 10 } },
        { text: '认命吧，佃户的命就是这样', effects: { freedom: -10, pressure: -5 } },
        { text: '跟家人好好过个年，明年继续努力', effects: { socialPoints: 20, health: 10, freedom: 5 } },
        { text: '思考有没有别的出路', effects: { knowledge: 10, mobility: 10, freedom: 5 } }
      ]
    }
  ],

  slaveEvents: [
    {
      id: 'slave_001',
      month: 1,
      stage: '春耕',
      narrative: '正月初一，主子家过年，奴仆们也能吃一顿好的。你端着一碗带肉的饭，蹲在墙角，小心翼翼地吃着。这时，主母身边的丫鬟走过来，踢了踢你的碗，说："阿奴，快点吃，吃完了去劈柴，今天客人多，柴不够用。"你赶紧扒拉了两口饭，放下碗就去干活了。',
      choices: [
        { text: '乖乖去劈柴，不敢有二话', effects: { trust: 5, pressure: 10, health: -5 } },
        { text: '壮着胆子说还没吃饱', effects: { risk: 15, trust: -5, health: 5 } },
        { text: '默默吃饭，假装没听见', effects: { risk: 20, trust: -10 } },
        { text: '赶紧吃完，多干点活表现表现', effects: { trust: 10, health: -10 } }
      ]
    },
    {
      id: 'slave_002',
      month: 1,
      stage: '春耕',
      narrative: '这天，你正在院子里扫地，忽然听到前厅传来吵闹声。原来是有人牙子来，说是要带来几个新的奴婢给主子挑选。你心里咯噔一下——你就是三年前被牙子卖到这里的。你偷偷抬眼望去，只见那几个新奴婢面黄肌瘦，眼神里满是恐惧，像极了当年的你。',
      choices: [
        { text: '赶紧低下头，装作没看见', effects: { trust: 5, pressure: 5 } },
        { text: '偷偷打量，看看有没有认识的人', effects: { risk: 10, socialPoints: 5 } },
        { text: '趁人不注意，过去跟他们说两句话', effects: { risk: 20, trust: -10, socialPoints: 10 } },
        { text: '心里不好受，但也无能为力', effects: { pressure: 10, trust: 5 } }
      ]
    },
    {
      id: 'slave_003',
      month: 2,
      stage: '春耕',
      narrative: '春耕了，你被派到田里干活。每天天不亮就起床，一直干到天黑，稍有懈怠就要挨鞭子。监工的是个叫王三的家奴，心狠手辣，打起人来毫不留情。这天，你实在太累了，直起腰想歇一会儿，刚巧被王三看到。他提着鞭子朝你走了过来。',
      choices: [
        { text: '赶紧继续干活，装作一直在忙', effects: { trust: 5, health: -5 } },
        { text: '跪下求饶，说以后不敢了', effects: { trust: 10, pressure: 15 } },
        { text: '硬着头皮说实在太累了', effects: { health: -20, trust: -15, risk: 10 } },
        { text: '默默忍受，等他发落', effects: { health: -15, pressure: 20 } }
      ]
    },
    {
      id: 'slave_004',
      month: 3,
      stage: '春耕',
      narrative: '这天，主子家的少爷把你叫去，说是他的一只风筝挂在了树上，让你爬上去拿。那棵树很高，树干很滑，爬上去很危险。可你不敢不去——少爷的话，就是命令。你望着那棵高高的树，咽了口唾沫。',
      choices: [
        { text: '小心翼翼地爬上去拿', effects: { trust: 10, health: -10, risk: 15 } },
        { text: '跪下请罪，说自己爬不上去', effects: { trust: -5, pressure: 10 } },
        { text: '想办法用棍子把风筝捅下来', effects: { trust: 15, health: -5 } },
        { text: '硬着头皮爬，摔下来就摔下来吧', effects: { trust: 5, health: -25, risk: 20 } }
      ]
    },
    {
      id: 'slave_005',
      month: 4,
      stage: '夏耘',
      narrative: '四月里，天气渐渐热了起来。你在田里干活，汗流浃背。这时，你忽然听到有人在喊："阿奴，你爹来看你了！"你猛地一抬头，只见远处站着一个熟悉的身影——真的是你爹！他比三年前更老了，背也驼了。你鼻子一酸，眼泪差点掉下来。可你知道，奴仆不能随便见亲人，除非主子同意。',
      choices: [
        { text: '赶紧跑过去，跟爹说两句话', effects: { socialPoints: 20, trust: -10, risk: 15 } },
        { text: '远远地看一眼，不敢过去', effects: { pressure: 15, socialPoints: 5 } },
        { text: '先去请示主子，看能不能见一面', effects: { trust: 10, socialPoints: 10, pressure: 10 } },
        { text: '假装没看见，继续干活', effects: { trust: 5, pressure: 20 } }
      ]
    },
    {
      id: 'slave_006',
      month: 5,
      stage: '夏耘',
      narrative: '这天，你得了风寒，头晕眼花，浑身无力。可监工王三说，这点小病不算什么，照样得干活。你硬撑着来到田里，干了没一会儿就觉得天旋地转。你想歇一会儿，可王三的鞭子就在旁边晃着。你咬着牙，继续干着，眼前的景象越来越模糊……',
      choices: [
        { text: '硬撑着继续干，不能倒下', effects: { health: -20, trust: 10, risk: 15 } },
        { text: '假装晕倒，看能不能休息几天', effects: { health: -10, trust: -5, risk: 20 } },
        { text: '跪下求王三让你歇一会儿', effects: { health: -5, trust: -5, pressure: 15 } },
        { text: '真的倒下了——实在撑不住了', effects: { health: -30, pressure: 10 } }
      ]
    },
    {
      id: 'slave_007',
      month: 5,
      stage: '夏耘',
      narrative: '你病了几天，多亏了同住的老奴孙伯偷偷给你送药送水，才算挺了过来。这天，你稍微好点了，就被叫去干活。路上，你遇到了主母身边的丫鬟，她恶狠狠地说："阿奴，你这几天偷懒，看我不告诉夫人，扣你的饭！"你心里明白，这个丫鬟一直看你不顺眼，总想找机会整你。',
      choices: [
        { text: '赶紧赔罪，说以后不敢了', effects: { trust: 5, pressure: 10 } },
        { text: '解释说是真的病了', effects: { trust: -5, risk: 10, pressure: 15 } },
        { text: '低头不语，随她怎么说', effects: { pressure: 15, trust: 0 } },
        { text: '去找老奴孙伯帮你作证', effects: { socialPoints: 10, trust: 5, risk: 15 } }
      ]
    },
    {
      id: 'slave_008',
      month: 6,
      stage: '夏耘',
      narrative: '六月天，孩子脸，说变就变。刚才还晴空万里，忽然就下起了暴雨。你正在田里干活，赶紧往回跑。路过柴房时，你听到里面传来微弱的哭泣声。你推开门一看，原来是个刚买来的小奴婢，因为打碎了一个碗，被关在这里，还不给饭吃。她看起来才七八岁，哭得像个泪人。',
      choices: [
        { text: '偷偷给她拿点吃的', effects: { trust: -15, risk: 20, socialPoints: 15 } },
        { text: '假装没看见，关上门走了', effects: { trust: 5, pressure: 10 } },
        { text: '安慰她几句，但是不敢给她吃的', effects: { socialPoints: 10, risk: 10 } },
        { text: '去报告管家，说她在哭', effects: { trust: 10, socialPoints: -20, reputation: -10 } }
      ]
    },
    {
      id: 'slave_009',
      month: 7,
      stage: '秋收',
      narrative: '七月里，稻谷熟了，是一年中最忙的时候。你每天天不亮就起床，一直干到深夜，累得像条狗。这天晚上，你拖着疲惫的身体回到柴房，倒头就睡。迷迷糊糊中，你听到有人在说话。仔细一听，原来是两个老奴在聊天，说是以前有个奴婢逃了出去，后来在城里过上了好日子。',
      choices: [
        { text: '假装睡着，悄悄偷听', effects: { freedom: 10, pressure: 5, risk: 5 } },
        { text: '凑过去问个清楚', effects: { freedom: 15, risk: 20, socialPoints: 10 } },
        { text: '不感兴趣，继续睡觉', effects: { trust: 5, freedom: 0 } },
        { text: '心里盘算着逃跑的可能性', effects: { freedom: 20, pressure: 15, risk: 10 } }
      ]
    },
    {
      id: 'slave_010',
      month: 8,
      stage: '秋收',
      narrative: '这天，你正在仓库里帮忙收粮，忽然发现角落里有一个小布包，打开一看，里面竟是一块碎银子！你心跳加速，赶紧把银子攥在手里。这可是一大笔钱啊，有了它，说不定就能……你环顾四周，没人注意到你。你握着那块银子，手心里全是汗。',
      choices: [
        { text: '偷偷把银子藏起来，作为逃跑的本钱', effects: { money: 100, freedom: 15, risk: 25, trust: -20 } },
        { text: '赶紧交给管家，就说捡到的', effects: { trust: 20, reputation: 10, money: 10 } },
        { text: '左右为难，先藏起来再说', effects: { pressure: 20, freedom: 10 } },
        { text: '装作没看见，继续干活', effects: { trust: 5, freedom: -5 } }
      ]
    },
    {
      id: 'slave_011',
      month: 8,
      stage: '秋收',
      narrative: '你把银子藏在了一个只有你知道的地方。这些天，你心里一直惴惴不安，既兴奋又害怕。这天，管家忽然把所有奴仆都召集起来，说是仓库里少了东西，要挨个搜查。你吓得魂飞魄散——要是被搜出来，非被打死不可。你强装镇定，站在人群里，手心全是汗。',
      choices: [
        { text: '趁乱把银子扔掉，死无对证', effects: { money: -100, risk: 15, pressure: -10 } },
        { text: '硬着头皮等着搜查', effects: { risk: 30, pressure: 25, trust: -20 } },
        { text: '主动站出来，说是自己捡的，本来想交公', effects: { trust: 5, risk: 10, reputation: 5 } },
        { text: '假装肚子疼，趁乱跑掉', effects: { risk: 25, freedom: 5, pressure: -5 } }
      ]
    },
    {
      id: 'slave_012',
      month: 9,
      stage: '秋收',
      narrative: '重阳节，主子家设宴庆祝。奴仆们忙前忙后，到了晚上，总算能歇口气了。老奴孙伯偷偷把你叫到一边，给你倒了一小杯酒，说："阿奴，今天过节，喝点酒暖暖身子。"你接过酒杯，看着孙伯慈祥的脸，鼻子一酸——在这个冰冷的地方，只有孙伯还能给你一点温暖。',
      choices: [
        { text: '谢过孙伯，把酒喝了', effects: { health: 5, socialPoints: 15, pressure: -10 } },
        { text: '把酒省下来，明天再喝', effects: { health: 0, socialPoints: 10 } },
        { text: '跟孙伯聊聊心里话', effects: { socialPoints: 20, pressure: -15, freedom: 5 } },
        { text: '谢过孙伯，早点回去休息', effects: { health: 10, trust: 5 } }
      ]
    },
    {
      id: 'slave_013',
      month: 10,
      stage: '冬藏',
      narrative: '十月里，农活少了些。这天，你听说主子家要放免一批老弱奴婢，给他们自由。你心里既期待又失落——期待的是，终于有人能获得自由了；失落的是，你年轻力壮，肯定不在放免之列。你看着那些老奴，他们脸上既有解脱，也有迷茫——自由了，又能去哪里呢？',
      choices: [
        { text: '真心为那些被放免的人高兴', effects: { socialPoints: 10, freedom: 10, trust: 5 } },
        { text: '心里很羡慕，什么时候轮到自己', effects: { freedom: 15, pressure: 15 } },
        { text: '去找被放免的人问问外面的情况', effects: { freedom: 20, risk: 15, socialPoints: 10 } },
        { text: '不抱希望，继续过一天算一天', effects: { freedom: -5, pressure: -5 } }
      ]
    },
    {
      id: 'slave_014',
      month: 11,
      stage: '冬藏',
      narrative: '这天，你被派去城里采买东西。这是你三年来第一次出门！走在繁华的街道上，你看着来来往往的行人，看着街边的店铺，心中感慨万千——外面的世界，原来是这个样子的。你多想就这样一直走下去，再也不回去了。可你知道，逃跑被抓回来是什么下场。',
      choices: [
        { text: '老老实实采买，按时回去', effects: { trust: 15, freedom: -5 } },
        { text: '趁机逃跑，再也不回去了', effects: { freedom: 50, risk: 40, pressure: -20 } },
        { text: '多逛逛，看看情况，暂时不跑', effects: { freedom: 15, knowledge: 10, risk: 10 } },
        { text: '偷偷买点东西带回去给孙伯', effects: { socialPoints: 15, risk: 10, trust: 5 } }
      ]
    },
    {
      id: 'slave_015',
      month: 11,
      stage: '冬藏',
      narrative: '你从城里回来了，虽然没有逃跑，但你记住了城里的路，也知道了外面的世界是什么样子。这些天，你一直在想逃跑的事。老奴孙伯似乎看出了你的心思，这天晚上，他偷偷找到你，说："阿奴，你年轻，还有机会。若是想跑，我帮你。"',
      choices: [
        { text: '跪下谢孙伯，请他帮你逃跑', effects: { freedom: 30, socialPoints: 20, risk: 30 } },
        { text: '摇摇头，说不敢，被抓回来就死定了', effects: { freedom: -10, trust: 10, pressure: -5 } },
        { text: '犹豫不决，再想想', effects: { freedom: 15, pressure: 20 } },
        { text: '问孙伯为什么要帮你', effects: { socialPoints: 15, knowledge: 10, freedom: 5 } }
      ]
    },
    {
      id: 'slave_016',
      month: 12,
      stage: '冬藏',
      narrative: '腊月里，天寒地冻。主子家忙着准备过年，奴仆们也更忙了。这天，你在柴房劈柴，忽然听到外面有人喊："不好了，阿福跑了！"你心里咯噔一下——阿福也是个奴婢，平时跟你关系还不错。你赶紧放下斧头，走出去看。只见家丁们点着火把，正在四处搜寻。你站在人群里，心跳得很快。',
      choices: [
        { text: '也跟着去搜，装作很积极的样子', effects: { trust: 10, socialPoints: -10, freedom: -5 } },
        { text: '心里暗暗为阿福祈祷，希望他能逃出去', effects: { freedom: 20, pressure: 10, socialPoints: 5 } },
        { text: '趁乱去给阿福留点吃的和钱', effects: { risk: 30, freedom: 25, socialPoints: 20 } },
        { text: '事不关己，继续劈柴', effects: { trust: 5, freedom: 0 } }
      ]
    },
    {
      id: 'slave_017',
      month: 12,
      stage: '冬藏',
      narrative: '除夕夜，主子家灯火通明，欢声笑语。你和其他奴仆们蹲在柴房里，啃着冷馒头，听着前面传来的丝竹之声。老奴孙伯叹了口气，说："唉，这日子，什么时候是个头啊。"你望着窗外的雪花，握紧了藏在怀里的那点碎银子——这是你攒了大半年的私房钱。新的一年就要到了，你的自由之路，在哪里呢？',
      choices: [
        { text: '下定决心，开春就逃跑', effects: { freedom: 30, pressure: 20, risk: 25 } },
        { text: '还是算了，好好干活，争取被放免', effects: { trust: 15, freedom: 5, pressure: -10 } },
        { text: '再攒点钱，准备得充分些再跑', effects: { freedom: 20, money: 20, pressure: 15 } },
        { text: '听天由命吧，想那么多也没用', effects: { freedom: -5, pressure: -10 } }
      ]
    }
  ],

  soldierEvents: [
    {
      id: 'soldier_001',
      month: 1,
      stage: '春耕',
      narrative: '正月里，军营里也算是过了个年。虽然伙食比平时好点，但也就那样。你端着碗，蹲在营房门口，看着远处建康城的方向。你是兵户出身，这辈子注定要当兵，打仗、屯田，日复一日，年复一年。听说北方的魏人又在边境集结了，说不定哪天就要上战场。你叹了口气，把碗里的粥一饮而尽。',
      choices: [
        { text: '吃完了去操练，当兵就要有当兵的样子', effects: { militaryExp: 5, strength: 5, health: -5 } },
        { text: '去找老兵聊聊，听听以前打仗的事', effects: { militaryExp: 10, socialPoints: 5 } },
        { text: '偷偷懒，找个地方晒晒太阳', effects: { health: 5, militaryExp: -5, reputation: -5 } },
        { text: '去帮伙夫做饭，混口吃好的', effects: { food: 10, reputation: 0, militaryExp: -3 } }
      ]
    },
    {
      id: 'soldier_002',
      month: 1,
      stage: '春耕',
      narrative: '这天，校尉大人来检阅。他骑着高头大马，身后跟着一群亲兵，耀武扬威。你站在队列里，大气都不敢出。校尉走了一圈，忽然在你面前停下，上下打量了你一番，说："这小子看起来挺结实，多大了？"你赶紧回答，声音都在发抖。校尉点点头，说："不错，是个当兵的好料子。"',
      choices: [
        { text: '大声谢校尉赏识', effects: { reputation: 10, militaryExp: 5, pressure: 5 } },
        { text: '紧张得说不出话，只是行礼', effects: { reputation: 5, pressure: 10 } },
        { text: '趁机请求调到前锋营', effects: { militaryExp: 10, risk: 15, reputation: 5 } },
        { text: '面无表情，站好军姿', effects: { reputation: 5, militaryExp: 3 } }
      ]
    },
    {
      id: 'soldier_003',
      month: 2,
      stage: '春耕',
      narrative: '开春了，军营附近的田地该种了。按规矩，兵户平时屯田，战时出征。你扛着锄头，来到田里，开始一天的劳作。身边的战友们边干活边聊天，有人说屯田辛苦，还不如去打仗；也有人说，能平安种地就不错了，打仗可是要死人的。你听着他们的议论，默默地挥着锄头。',
      choices: [
        { text: '认真种地，多打粮食也是功劳', effects: { food: 20, reputation: 5, health: -10 } },
        { text: '跟战友们一起发牢骚', effects: { socialPoints: 10, reputation: -5 } },
        { text: '偷懒耍滑，能少干就少干', effects: { health: 5, reputation: -10, militaryExp: -5 } },
        { text: '主动多干点，给校尉留个好印象', effects: { reputation: 10, health: -15, militaryExp: 3 } }
      ]
    },
    {
      id: 'soldier_004',
      month: 3,
      stage: '春耕',
      narrative: '这天，军营里忽然传来消息：钟离那边打起来了！魏人围攻钟离城，朝廷急令各地军队增援。你心里咯噔一下——终于还是要打仗了。营房里顿时乱成一团，有人兴奋，有人害怕，也有人面无表情。你摸了摸手中的刀，手心全是汗。去年钟离之战的惨状，你至今记忆犹新。',
      choices: [
        { text: '主动请战，大丈夫当建功立业', effects: { militaryExp: 15, reputation: 15, risk: 20 } },
        { text: '心里害怕，但军令如山，不得不去', effects: { militaryExp: 5, pressure: 20, health: -5 } },
        { text: '装病不去，躲过这一仗', effects: { risk: 25, militaryExp: -10, reputation: -15 } },
        { text: '去找长官求情，能不能留下来屯田', effects: { socialPoints: -5, risk: 15, pressure: 10 } }
      ]
    },
    {
      id: 'soldier_005',
      month: 4,
      stage: '夏耘',
      narrative: '援军出发了。你背着干粮和武器，跟着大部队往北走。一路上，你看到了很多逃难的百姓，他们扶老携幼，面黄肌瘦，眼神里满是恐惧。你心里很不是滋味——这就是战争，受苦的永远是老百姓。旁边的老兵拍了拍你的肩膀，说："小子，别多想了，到了战场上，能活着回来就算不错了。"',
      choices: [
        { text: '握紧手中的刀，下定决心要活着回来', effects: { militaryExp: 10, strength: 5, pressure: 10 } },
        { text: '心里很难受，但也无可奈何', effects: { pressure: 15, health: -5 } },
        { text: '问老兵以前打仗的经验', effects: { militaryExp: 15, socialPoints: 10 } },
        { text: '默默赶路，什么也不想', effects: { militaryExp: 5, health: -10 } }
      ]
    },
    {
      id: 'soldier_006',
      month: 5,
      stage: '夏耘',
      narrative: '钟离城终于到了。你站在城墙上，望着城外密密麻麻的魏军大营，头皮发麻。魏军人多势众，旌旗遮天蔽日。守城的士兵们个个面有菜色，但眼神都很坚定。主将昌义之将军亲自在城墙上巡视，他大声喊道："弟兄们，钟离城绝不能丢！身后就是建康，就是我们的家！"',
      choices: [
        { text: '被将军的话激励了，决心死守到底', effects: { militaryExp: 15, reputation: 10, risk: 15 } },
        { text: '心里很害怕，但不敢表现出来', effects: { militaryExp: 5, pressure: 25, health: -10 } },
        { text: '主动要求去最危险的地方', effects: { militaryExp: 20, reputation: 20, risk: 25 } },
        { text: '找个相对安全的位置，尽量保存自己', effects: { militaryExp: 5, risk: 10, reputation: -5 } }
      ]
    },
    {
      id: 'soldier_007',
      month: 5,
      stage: '夏耘',
      narrative: '魏军开始攻城了。箭如雨下，石块纷飞。你躲在城垛后面，听着身边的惨叫声，吓得浑身发抖。这是你第一次上战场，原来战争这么可怕。忽然，一块石头砸在你身边的城垛上，碎石崩了一脸。你抹了把脸上的血污，看着身边倒下的战友，心中忽然涌起一股怒火——你要活下去，还要为兄弟们报仇！',
      choices: [
        { text: '鼓起勇气，拿起武器反击', effects: { militaryExp: 20, strength: 10, health: -15, risk: 20 } },
        { text: '继续躲着，等这波攻击过去再说', effects: { militaryExp: 5, health: -5, risk: 10, reputation: -10 } },
        { text: '去救受伤的战友', effects: { socialPoints: 20, reputation: 15, health: -10, risk: 20 } },
        { text: '吓得不知所措，愣在原地', effects: { militaryExp: 3, pressure: 30, health: -5 } }
      ]
    },
    {
      id: 'soldier_008',
      month: 6,
      stage: '夏耘',
      narrative: '战斗持续了一个多月，钟离城依然屹立不倒。你也从一个新兵蛋子，变成了一个见过血的老兵。这天，忽然传来消息：曹景宗将军和韦睿将军率领的援军到了！而且已经攻破了魏军的几座营寨！城里的守军士气大振。你站在城墙上，望着远处援军的旗帜，心中充满了希望——这场仗，我们要赢了！',
      choices: [
        { text: '主动请缨，出城夹击魏军', effects: { militaryExp: 25, reputation: 20, risk: 20 } },
        { text: '继续守城，等待援军破敌', effects: { militaryExp: 10, reputation: 5, risk: 10 } },
        { text: '抓紧时间休整，恢复体力', effects: { health: 20, militaryExp: 5 } },
        { text: '跟战友们一起欢呼庆祝', effects: { socialPoints: 15, health: 5, reputation: 5 } }
      ]
    },
    {
      id: 'soldier_009',
      month: 7,
      stage: '秋收',
      narrative: '钟离之战，我们赢了！魏军大败，死伤无数。你站在战场上，看着尸横遍野，心中没有胜利的喜悦，只有说不出的沉重。太多的兄弟死在了这里。不过，你活下来了，而且因为作战勇敢，还被提拔为队主，手下管着五十个兵。你望着北方，心中默默发誓：一定要让更多的兄弟活着回家。',
      choices: [
        { text: '接受提拔，以后要更努力', effects: { militaryExp: 30, reputation: 20, pressure: 15 } },
        { text: '不想当官，只想平安回家', effects: { militaryExp: 10, reputation: -5, pressure: -10 } },
        { text: '先把牺牲的兄弟们安葬好', effects: { socialPoints: 25, reputation: 15, health: -10 } },
        { text: '趁机搜刮点战利品', effects: { money: 100, reputation: -15, risk: 10 } }
      ]
    },
    {
      id: 'soldier_010',
      month: 7,
      stage: '秋收',
      narrative: '大军班师回朝。走在回建康的路上，你心里五味杂陈。你升职了，可你一点也高兴不起来。你想起了那些死在战场上的兄弟，他们再也回不来了。你摸了摸身上的伤疤，这是战争留给你的印记。快到建康了，远处的城墙越来越清晰。你深吸一口气——生活，还要继续。',
      choices: [
        { text: '把这次的经历记在心里，以后要更珍惜生命', effects: { militaryExp: 10, wisdom: 10, health: 10 } },
        { text: '赶紧回家看看家人', effects: { socialPoints: 20, health: 10 } },
        { text: '去找以前的战友聚聚', effects: { socialPoints: 25, money: -30 } },
        { text: '继续操练，准备迎接下一场战斗', effects: { militaryExp: 15, strength: 10, health: -10 } }
      ]
    },
    {
      id: 'soldier_011',
      month: 8,
      stage: '秋收',
      narrative: '回到建康，朝廷论功行赏。你因为钟离之战的功劳，得到了一些赏赐，还升了队主。可是，军饷依然少得可怜，家里的日子还是过得紧巴巴的。这天，你走在街上，看到有人在招兵买马，说是去边境戍边，军饷是这里的两倍。你心动了——虽然危险，但钱多啊。可是，你刚刚经历了生死，真的还要再去冒险吗？',
      choices: [
        { text: '报名去戍边，多赚点钱养家', effects: { money: 100, militaryExp: 15, risk: 20, pressure: 10 } },
        { text: '算了，还是留在建康，平安最重要', effects: { money: 0, health: 5, pressure: -10 } },
        { text: '先打听打听情况再说', effects: { money: -10, knowledge: 10 } },
        { text: '去找以前的长官，问问有没有别的出路', effects: { socialPoints: 10, knowledge: 15 } }
      ]
    },
    {
      id: 'soldier_012',
      month: 9,
      stage: '秋收',
      narrative: '重阳节这天，你请了假，去看望一位牺牲战友的家人。他的老母亲听说儿子死了，哭得死去活来。你看着老人家悲痛欲绝的样子，心里像刀割一样。你把自己得到的赏赐拿出一部分，塞给了老人家，说："大娘，以后我就是您的儿子。"老人家握着你的手，泣不成声。',
      choices: [
        { text: '经常来看望老人家，为战友尽孝', effects: { socialPoints: 25, reputation: 20, money: -50 } },
        { text: '心里很难受，但也只能帮这么多了', effects: { socialPoints: 10, reputation: 10, money: -30 } },
        { text: '以后多关照战友的家人', effects: { socialPoints: 15, reputation: 15, money: -20 } },
        { text: '赶紧离开，不想再面对这种场面', effects: { socialPoints: -5, pressure: 10 } }
      ]
    },
    {
      id: 'soldier_013',
      month: 10,
      stage: '冬藏',
      narrative: '十月里，没有战事，军营里的日子又回到了从前的样子：操练、巡逻、屯田。你现在是队主了，管着五十个兵，比以前忙了不少。这天，你正在教新兵们操练，忽然看到一个熟悉的身影——那不是你小时候的玩伴吗？他也来当兵了。你又惊又喜，赶紧走过去打招呼。',
      choices: [
        { text: '热情地跟他打招呼，叙叙旧', effects: { socialPoints: 20, reputation: 5 } },
        { text: '假装不认识，免得被人说徇私', effects: { socialPoints: -5, reputation: 5 } },
        { text: '把他调到自己手下，也好有个照应', effects: { socialPoints: 15, reputation: -5, militaryExp: 5 } },
        { text: '私下里跟他聊聊，问问家里的情况', effects: { socialPoints: 15, money: -10 } }
      ]
    },
    {
      id: 'soldier_014',
      month: 11,
      stage: '冬藏',
      narrative: '这天，军营里忽然传出一个消息：有几个士兵昨晚逃跑了！将军大怒，下令全城搜捕，还说逃兵一旦被抓回来，一律处斩。你心里咯噔一下——你那个小时候的玩伴，昨晚好像没在营房里。你赶紧去他的铺位看了看，果然，他的东西都不见了。你心里又急又怕——他怎么这么傻，逃跑被抓住可是要死的啊！',
      choices: [
        { text: '赶紧去报告将军，就说你不知情', effects: { reputation: 5, risk: 10, socialPoints: -20 } },
        { text: '假装不知道，希望他能逃出去', effects: { risk: 15, socialPoints: 10, pressure: 15 } },
        { text: '偷偷去找他，劝他回来', effects: { risk: 25, socialPoints: 20, reputation: -10 } },
        { text: '心里很矛盾，不知道该怎么办', effects: { pressure: 20, socialPoints: 5 } }
      ]
    },
    {
      id: 'soldier_015',
      month: 11,
      stage: '冬藏',
      narrative: '逃兵被抓回来了。一共三个人，其中就有你的那个玩伴。将军下令，在军营前公开处斩，以儆效尤。你站在人群里，看着那个被五花大绑、面如死灰的玩伴，心里像刀割一样。他看到了你，嘴唇动了动，似乎想说什么，但最终什么也没说出来。刽子手举起了刀……你闭上了眼睛。',
      choices: [
        { text: '不忍心看，但也无可奈何', effects: { pressure: 20, health: -5, socialPoints: -10 } },
        { text: '跪下求将军饶他一命', effects: { risk: 20, reputation: -10, socialPoints: 15 } },
        { text: '默默记住这一天，以后要更加谨慎', effects: { wisdom: 15, pressure: 10, militaryExp: 5 } },
        { text: '转身离开，不想看这血腥的场面', effects: { health: -5, pressure: 15 } }
      ]
    },
    {
      id: 'soldier_016',
      month: 12,
      stage: '冬藏',
      narrative: '腊月里，天寒地冻。军营里也开始准备过年了。虽然没有家里的热闹，但好歹也能吃顿好的。你坐在营房里，看着窗外飘落的雪花，想起了钟离之战，想起了那些死去的兄弟，想起了被处斩的玩伴。你端起酒碗，一饮而尽。这兵户的日子，什么时候是个头啊？',
      choices: [
        { text: '既来之则安之，好好当兵，争取再升几级', effects: { militaryExp: 10, reputation: 5, pressure: -5 } },
        { text: '再想想别的出路，总不能一辈子当兵', effects: { mobility: 10, knowledge: 10, pressure: 10 } },
        { text: '跟兄弟们一起喝个痛快，不想那些烦心事', effects: { socialPoints: 20, health: -10, money: -20 } },
        { text: '早点休息，明天还要操练', effects: { health: 10, militaryExp: 3 } }
      ]
    },
    {
      id: 'soldier_017',
      month: 12,
      stage: '冬藏',
      narrative: '除夕夜，军营里张灯结彩，还放了爆竹。士兵们聚在一起喝酒聊天，倒也热闹。你一个人走到营房外，望着建康城的方向。你想起了家人，想起了小时候的事。你是兵户出身，这是你的命。但你不甘心——难道这辈子就只能这样了吗？你握紧了拳头，新的一年，也许会有新的机会。',
      choices: [
        { text: '立下志向，要凭军功出人头地', effects: { militaryExp: 15, reputation: 10, freedom: 10 } },
        { text: '平平安安就好，别想那么多', effects: { health: 10, pressure: -10 } },
        { text: '继续寻找脱离军籍的办法', effects: { mobility: 15, knowledge: 10, pressure: 10 } },
        { text: '回去跟兄弟们一起过年', effects: { socialPoints: 15, health: 5, money: -10 } }
      ]
    }
  ],

  clerkEvents: [
    {
      id: 'clerk_001',
      month: 1,
      stage: '春耕',
      narrative: '正月里，县里要清查户口，重新核定赋税。你作为里正，负责这一片的户籍登记。这可是个肥差——谁家田多田少，户口几何，还不是你笔下一句话？当然，风险也不小，若是被上面查出问题，吃不了兜着走。这天，王员外的管家悄悄来找你，塞给你一个红包，说是"一点小意思"。',
      choices: [
        { text: '收下红包，给王员外家少报点田亩', effects: { money: 200, connections: 10, risk: 20, reputation: -10 } },
        { text: '义正言辞地拒绝，按实际情况登记', effects: { reputation: 20, connections: -15, risk: 5 } },
        { text: '不收红包，但也不多事，按规矩来', effects: { reputation: 10, connections: -5 } },
        { text: '先把红包收下，回头再说', effects: { money: 200, pressure: 10, risk: 15 } }
      ]
    },
    {
      id: 'clerk_002',
      month: 2,
      stage: '春耕',
      narrative: '二月里，春耕大忙。县衙来了公文，说是要征发民夫修水利。你负责分配征调名额。这事说难不难，说简单也不简单——谁家出人，谁家不出人，这里面学问大着呢。得罪了大户人家，以后不好混；太偏袒大户，又怕上面查下来，还怕老百姓戳脊梁骨。你拿着花名册，左右为难。',
      choices: [
        { text: '按户等分配，大户多出，小户少出', effects: { connections: -10, reputation: 15, pressure: 5 } },
        { text: '大户人家少出点，他们关系硬，得罪不起', effects: { connections: 15, reputation: -15, risk: 10 } },
        { text: '平均分配，谁也不得罪', effects: { reputation: 5, connections: 0 } },
        { text: '先看看别人怎么分，跟着学', effects: { knowledge: 5, connections: 5 } }
      ]
    },
    {
      id: 'clerk_003',
      month: 2,
      stage: '春耕',
      narrative: '这天，你正在县衙里当差，忽然听说县太爷要提拔一个人当县丞，负责全县的赋税征收。这可是个肥缺啊，多少人盯着呢。你心里也动了——你在这个位置上已经待了好几年了，也该往上爬爬了。可是，竞争的人不少，而且个个都有后台。你该怎么办呢？',
      choices: [
        { text: '赶紧送礼，争取得到县太爷的赏识', effects: { money: -300, connections: 20, risk: 15, reputation: -5 } },
        { text: '好好干活，靠政绩说话', effects: { reputation: 10, connections: 5, pressure: 10 } },
        { text: '找上面的关系，请人帮忙说情', effects: { money: -200, connections: 15, socialPoints: 10 } },
        { text: '算了，竞争太激烈，还是安分点好', effects: { pressure: -10, connections: -5 } }
      ]
    },
    {
      id: 'clerk_004',
      month: 3,
      stage: '春耕',
      narrative: '三月上巳节，县里的士绅名流都去踏青游春。你也收到了邀请——当然，不是因为你有名，而是因为你手里有点权力，他们想结交你。这种宴会，去了能拓展人脉，不去又怕得罪人。而且，这种场合花销不小，你那点俸禄，怕是不够。你站在镜子前，整理着官服，心中盘算着。',
      choices: [
        { text: '盛装出席，多认识些人总没错', effects: { money: -100, connections: 25, socialPoints: 15 } },
        { text: '借口有事，不去了', effects: { connections: -10, money: 0 } },
        { text: '去露个脸，然后就走', effects: { money: -30, connections: 10 } },
        { text: '去，但不多花钱，意思意思就行', effects: { money: -50, connections: 15, reputation: -5 } }
      ]
    },
    {
      id: 'clerk_005',
      month: 4,
      stage: '夏耘',
      narrative: '四月里，县衙接到举报，说是有几户人家隐匿户口，逃避赋税。县太爷把这事交给你去查。你拿着举报信，一看就知道是谁——那几户都是当地的小户人家，没什么背景。可你也知道，比他们隐匿户口更严重的大户有的是，只是没人敢查罢了。你该怎么办呢？',
      choices: [
        { text: '秉公执法，该怎么查就怎么查', effects: { reputation: 15, connections: -10, risk: 5 } },
        { text: '只查小户，大户不敢碰', effects: { reputation: -5, connections: 5, risk: 0 } },
        { text: '拿这几户开刀，杀鸡儆猴', effects: { reputation: 10, connections: 5, risk: 5 } },
        { text: '先去敲敲大户的竹杠，看他们识不识相', effects: { money: 300, connections: 10, risk: 20, reputation: -15 } }
      ]
    },
    {
      id: 'clerk_006',
      month: 5,
      stage: '夏耘',
      narrative: '端午佳节，按惯例，下面的人要给上面的人送礼。你作为里正，也收到了不少孝敬——有送粽子的，有送布匹的，还有直接送钱的。当然，你也得给县太爷送礼，不然以后的日子不好过。你看着收到的礼物，又看看准备送出的礼单，心中苦笑：这官场，就是人情世故啊。',
      choices: [
        { text: '把收到的礼整理一下，挑好的给县太爷送去', effects: { connections: 15, reputation: -5, money: 50 } },
        { text: '自己再添点钱，送份厚礼', effects: { money: -200, connections: 25, reputation: -10 } },
        { text: '意思意思就行，别搞那么夸张', effects: { money: -50, connections: 5 } },
        { text: '不送了，靠能力吃饭', effects: { connections: -15, reputation: 10 } }
      ]
    },
    {
      id: 'clerk_007',
      month: 5,
      stage: '夏耘',
      narrative: '这天，你正在县衙里办公，忽然来了两个陌生人，说是从州里来的，要查你们县的账目。你心里咯噔一下——你们县的账目，那可是本糊涂账，真要查起来，从上到下都脱不了干系。县太爷赶紧把你叫过去，低声说："你去应付一下，千万别露馅了。"你擦了擦头上的汗，硬着头皮走了出去。',
      choices: [
        { text: '尽心尽力地应付，绝不能出事', effects: { connections: 20, reputation: -10, risk: 20, pressure: 15 } },
        { text: '实话实说，跟上面坦白', effects: { risk: 30, connections: -30, reputation: 20 } },
        { text: '把事情推给下面的人，就说自己不知情', effects: { risk: 15, reputation: -5, connections: 10 } },
        { text: '偷偷给来人塞点好处，请他们高抬贵手', effects: { money: -300, risk: 25, connections: 15 } }
      ]
    },
    {
      id: 'clerk_008',
      month: 6,
      stage: '夏耘',
      narrative: '六月天，酷暑难耐。县太爷的公子要过生日，邀请了全县有头有脸的人物。你也在被邀之列。这可是个巴结县太爷的好机会，但送礼也不能太寒酸——别人都送贵重礼物，你送轻了，反而会被看不起。你看着自己那点微薄的积蓄，心中盘算着该送什么礼。',
      choices: [
        { text: '咬咬牙，送份厚礼，舍不得孩子套不着狼', effects: { money: -250, connections: 20, reputation: -5 } },
        { text: '送个别致的礼物，钱不多但有心意', effects: { money: -80, connections: 10, reputation: 5 } },
        { text: '跟别人一样就行，不突出也不落后', effects: { money: -150, connections: 10 } },
        { text: '不去了，就说身体不舒服', effects: { connections: -10, money: 0 } }
      ]
    },
    {
      id: 'clerk_009',
      month: 7,
      stage: '秋收',
      narrative: '七月里，秋收快要开始了。县太爷把你叫去，说是今年的赋税要提前征收，而且还要加征两成，说是上面的意思。你心里清楚，这哪是上面的意思，明明是县太爷想捞钱。可是，你一个小小的里正，又能怎么样？真要加征两成，老百姓的日子可就更苦了。你站在县太爷面前，左右为难。',
      choices: [
        { text: '照办就是了，官大一级压死人', effects: { connections: 15, reputation: -20, pressure: 10 } },
        { text: '壮着胆子劝县太爷，说老百姓太苦了', effects: { connections: -10, reputation: 15, risk: 15 } },
        { text: '表面答应，暗地里少收点', effects: { connections: 5, reputation: 5, risk: 20, pressure: 15 } },
        { text: '把责任推给下面，看具体办事的人怎么收', effects: { connections: 5, reputation: -5, risk: 10 } }
      ]
    },
    {
      id: 'clerk_010',
      month: 8,
      stage: '秋收',
      narrative: '秋收开始了，你负责催缴赋税。每天带着差役下乡，挨家挨户地催。看着老百姓们面黄肌瘦的样子，你心里也不是滋味。可是，县里给的任务很重，完不成的话，你这个里正也就做到头了。这天，你来到一户人家，家里只有一个老太太和一个小孙子，穷得叮当响，根本交不起税。差役们就要动手拿人了。',
      choices: [
        { text: '网开一面，缓几天再说', effects: { reputation: 15, connections: -5, pressure: 10 } },
        { text: '依法办事，拿人抵税', effects: { reputation: -10, connections: 10, pressure: -5 } },
        { text: '自己掏腰包帮他们垫上', effects: { money: -100, reputation: 20, socialPoints: 15 } },
        { text: '不管了，让差役们看着办', effects: { reputation: -5, connections: 5, pressure: 5 } }
      ]
    },
    {
      id: 'clerk_011',
      month: 8,
      stage: '秋收',
      narrative: '你催税催得很顺利，县太爷很满意，当众表扬了你，还说要提拔你。可你心里却很不是滋味——你知道，那些交不上税的人家，日子有多难过。这天晚上，你一个人喝着闷酒，想起了小时候家里穷，交不起税，官府来拿人的情景。你苦笑了一声，没想到自己如今也变成了这样的人。',
      choices: [
        { text: '继续这样吧，在其位谋其政', effects: { connections: 10, pressure: -5, reputation: -5 } },
        { text: '以后尽量对老百姓好点，能通融就通融', effects: { reputation: 10, connections: 5, pressure: 5 } },
        { text: '不想干了，这官当着心里难受', effects: { connections: -20, freedom: 15, pressure: -10 } },
        { text: '多捞点钱，以后不干了也有本钱', effects: { money: 200, risk: 15, reputation: -10 } }
      ]
    },
    {
      id: 'clerk_012',
      month: 9,
      stage: '秋收',
      narrative: '重阳节，县里的乡绅们设宴招待县太爷，你也作陪。席间，张乡绅忽然提起，说是想买一块地，但那户人家不肯卖，请县太爷帮帮忙。县太爷看了你一眼，说："这事好办，让李里正去处理一下。"你心里咯噔一下——张乡绅说的那户人家，你认识，是老实巴交的农民，那块地是他们家的命根子。',
      choices: [
        { text: '想办法帮张乡绅把地弄到手', effects: { connections: 20, money: 150, reputation: -20, risk: 10 } },
        { text: '劝张乡绅算了，那户人家太可怜了', effects: { connections: -15, reputation: 10, risk: 10 } },
        { text: '表面答应，暗地里给那户人家报信', effects: { reputation: 15, connections: 5, risk: 25 } },
        { text: '把事情推给别人，自己不沾这个锅', effects: { connections: -5, reputation: 0, risk: 5 } }
      ]
    },
    {
      id: 'clerk_013',
      month: 10,
      stage: '冬藏',
      narrative: '十月里，秋收结束，赋税也收得差不多了。县太爷很满意，论功行赏，你得到了一笔赏钱，还被提拔为县丞，负责全县的户籍和赋税。你终于升官了，可你心里却没有想象中的高兴。你坐在新的办公室里，看着窗外的县衙大院，心中百感交集——这条路，是你想要的吗？',
      choices: [
        { text: '既来之则安之，好好干，争取再升', effects: { connections: 20, reputation: 10, pressure: 15 } },
        { text: '有了权力，多为老百姓做点好事', effects: { reputation: 20, connections: 10, pressure: 20 } },
        { text: '利用这个位置，多捞点钱', effects: { money: 300, risk: 20, reputation: -15 } },
        { text: '先看看情况，站稳脚跟再说', effects: { connections: 15, knowledge: 10, pressure: 5 } }
      ]
    },
    {
      id: 'clerk_014',
      month: 11,
      stage: '冬藏',
      narrative: '你升了县丞，巴结你的人更多了。每天都有人请客送礼，门庭若市。你有些飘飘然了——这种前呼后拥的感觉，真好。可你也知道，树大招风，你升得这么快，肯定有人眼红。这天，你收到了一封匿名信，信上说要告发你贪赃枉法。你心里咯噔一下，冷汗都下来了。',
      choices: [
        { text: '赶紧收敛一点，别太招摇了', effects: { money: -100, connections: -5, pressure: 15 } },
        { text: '查出来是谁写的，给他点颜色看看', effects: { connections: 10, risk: 20, pressure: 10 } },
        { text: '去找县太爷，请他撑腰', effects: { money: -200, connections: 15, pressure: -10 } },
        { text: '身正不怕影子斜，没做亏心事不怕鬼敲门', effects: { reputation: 10, pressure: -5 } }
      ]
    },
    {
      id: 'clerk_015',
      month: 11,
      stage: '冬藏',
      narrative: '虚惊一场，那封匿名信不过是个恶作剧。但也给你提了个醒——官场险恶，还是小心点好。这天，你去州里开会，遇到了一位以前的上司，他现在在州里任职，混得不错。他私下里跟你说，州里最近缺人，问你想不想去州里发展。你心动了——州里的平台，可比县里大多了。',
      choices: [
        { text: '抓住这个机会，去州里发展', effects: { connections: 25, mobility: 20, pressure: 15, reputation: 10 } },
        { text: '算了，县里挺好的，知足常乐', effects: { connections: -5, pressure: -10 } },
        { text: '先打听打听情况再说', effects: { knowledge: 15, connections: 10 } },
        { text: '请老上司多关照，慢慢运作', effects: { money: -200, connections: 20, mobility: 10 } }
      ]
    },
    {
      id: 'clerk_016',
      month: 12,
      stage: '冬藏',
      narrative: '腊月里，天寒地冻。县衙里忙着年终结算，你也忙得脚不沾地。这天，县太爷把你叫去，说是今年的账目有点问题，让你"处理一下"。你心里清楚，县太爷又要捞钱了。可是，你现在已经是县丞了，真要出事，你也脱不了干系。你看着县太爷意味深长的眼神，心中左右为难。',
      choices: [
        { text: '照县太爷的意思办，跟他一条船', effects: { money: 200, connections: 20, risk: 25, reputation: -10 } },
        { text: '劝县太爷适可而止，别太过分', effects: { connections: -10, reputation: 5, risk: 15 } },
        { text: '表面答应，暗地里留一手', effects: { connections: 10, risk: 15, pressure: 20 } },
        { text: '拒绝合作，大不了不干了', effects: { connections: -20, reputation: 15, freedom: 10 } }
      ]
    },
    {
      id: 'clerk_017',
      month: 12,
      stage: '冬藏',
      narrative: '除夕夜，你站在县衙的院子里，望着远处百姓家的灯火，听着零星的爆竹声，心中百感交集。这一年，你从里正升到了县丞，权力大了，钱也多了，可你却觉得越来越不认识自己了。你想起了刚当上里正的时候，那时候的你，还想着要做个好官。如今呢？你叹了口气，新的一年，又会怎样呢？',
      choices: [
        { text: '新的一年，要做个好官，多为百姓着想', effects: { reputation: 20, pressure: 15, connections: -10 } },
        { text: '继续往上爬，权力才是最重要的', effects: { connections: 15, mobility: 10, reputation: -5, pressure: 10 } },
        { text: '适可而止，别贪得太多，平平安安就好', effects: { money: 100, health: 10, pressure: -10 } },
        { text: '不想那么多，好好过个年', effects: { health: 15, socialPoints: 10, money: -50 } }
      ]
    }
  ],

  origins: {
    hanmen: { name: '寒门子弟', military: 0, civil: 2, guanxi: 1, prestige: 10, age: 20, rank: '杂佐', allowedQingzhuo: false, allowedChenqie: true },
    'low-shizu': { name: '低级士族', military: 2, civil: 5, guanxi: 3, prestige: 50, age: 22, rank: '参军', allowedQingzhuo: true },
    'high-shizu': { name: '高门士族', military: 5, civil: 8, guanxi: 10, prestige: 80, age: 20, rank: '尚书郎', allowedQingzhuo: true }
  },

  stages: [
    { id: 1, name: '宋末齐初', yearRange: '479-502', officialSystem: 'songqi', maxEvents: 2, keyEvents: ['s1_001', 's1_002'] },
    { id: 2, name: '齐末梁初', yearRange: '502-527', officialSystem: 'songqi', maxEvents: 2, keyEvents: ['s2_001', 's2_002'] },
    { id: 3, name: '梁朝盛世', yearRange: '527-548', officialSystem: 'tianjian', maxEvents: 999 },
    { id: 4, name: '侯景之乱', yearRange: '548-555', officialSystem: 'tianjian', maxEvents: 999 }
  ],

  officialSystems: {
    songqi: {
      name: '宋齐九品官制',
      ranks: [
        { grade: 1, civil: '无（虚设）', military: '大将军', qingzhuo: '—', allowed: '皇族' },
        { grade: 2, civil: '中书监、门下侍中', military: '骠骑将军、车骑将军', qingzhuo: '清', allowed: '高门' },
        { grade: 3, civil: '尚书令、中书令', military: '卫将军、镇军将军', qingzhuo: '清', allowed: '高门、皇族' },
        { grade: 4, civil: '尚书仆射、侍中', military: '中军将军、镇西将军', qingzhuo: '清', allowed: '高门、皇族' },
        { grade: 5, civil: '尚书左丞、御史中丞', military: '征虏将军、辅国将军', qingzhuo: '半', allowed: '高门、低级士族' },
        { grade: 6, civil: '秘书丞、著作郎', military: '宁朔将军、明威将军', qingzhuo: '浊', allowed: '低级士族' },
        { grade: 7, civil: '尚书郎、县令', military: '参军、队主', qingzhuo: '浊', allowed: '低级士族、寒人' },
        { grade: 8, civil: '县丞、主簿', military: '幢主、军主', qingzhuo: '浊', allowed: '寒人' },
        { grade: 9, civil: '乡官、里正', military: '无', qingzhuo: '浊', allowed: '寒人' }
      ]
    },
    tianjian: {
      name: '天监十八班官制',
      ranks: [
        { grade: 18, civil: '丞相', military: '大将军', qingzhuo: '清', allowed: '皇族' },
        { grade: 17, civil: '中书监', military: '骠骑将军', qingzhuo: '清', allowed: '高门' },
        { grade: 16, civil: '尚书令', military: '车骑将军', qingzhuo: '清', allowed: '高门' },
        { grade: 15, civil: '尚书仆射', military: '卫将军', qingzhuo: '清', allowed: '高门' },
        { grade: 14, civil: '侍中', military: '镇军将军', qingzhuo: '清', allowed: '高门' },
        { grade: 13, civil: '中书令', military: '中军将军', qingzhuo: '清', allowed: '高门' },
        { grade: 12, civil: '御史中丞', military: '征虏将军', qingzhuo: '半', allowed: '高门、低级士族' },
        { grade: 11, civil: '尚书左丞', military: '辅国将军', qingzhuo: '半', allowed: '高门、低级士族' },
        { grade: 10, civil: '秘书丞', military: '宁朔将军', qingzhuo: '浊', allowed: '低级士族' },
        { grade: 9, civil: '著作郎', military: '明威将军', qingzhuo: '浊', allowed: '低级士族' },
        { grade: 8, civil: '尚书郎', military: '参军', qingzhuo: '浊', allowed: '低级士族、寒人' },
        { grade: 7, civil: '县令', military: '队主', qingzhuo: '浊', allowed: '低级士族、寒人' },
        { grade: 6, civil: '县丞', military: '幢主', qingzhuo: '浊', allowed: '寒人' },
        { grade: 5, civil: '主簿', military: '军主', qingzhuo: '浊', allowed: '寒人' },
        { grade: 4, civil: '乡官', military: '无', qingzhuo: '浊', allowed: '寒人' },
        { grade: 3, civil: '里正', military: '无', qingzhuo: '浊', allowed: '寒人' },
        { grade: 2, civil: '亭长', military: '无', qingzhuo: '浊', allowed: '寒人' },
        { grade: 1, civil: '保长', military: '无', qingzhuo: '浊', allowed: '寒人' }
      ],
      liuwai: [
        { grade: 1, name: '流外一等', desc: '低级文书' },
        { grade: 2, name: '流外二等', desc: '杂役' },
        { grade: 3, name: '流外三等', desc: '胥吏' },
        { grade: 4, name: '流外四等', desc: '差役' },
        { grade: 5, name: '流外五等', desc: '杂务' },
        { grade: 6, name: '流外六等', desc: '皂隶' },
        { grade: 7, name: '流外七等', desc: '奴婢' }
      ]
    }
  },

  promotionPaths: {
    military: { name: '武职路线', ranks: ['队主', '参军', '明威将军', '镇西将军', '车骑将军'], type: 'zhuo', threshold: { military: [0, 10, 40, 60, 70] } },
    civilQing: { name: '文职清官路线', ranks: ['秘书丞', '侍中', '中书监', '尚书令'], type: 'qing', threshold: { civil: [0, 15, 40, 60], prestige: [0, 30, 50, 60] } },
    civilZhuo: { name: '文职浊官路线', ranks: ['州主簿', '县令', '太守', '尚书郎', '尚书左丞'], type: 'zhuo', threshold: { civil: [0, 10, 30, 50, 60], guanxi: [0, 5, 10, 15, 20] } },
    chenqie: { name: '近臣路线', ranks: ['通事舍人', '中书通事舍人', '给事中'], type: 'special', requireOrigin: 'hanmen', threshold: { guanxi: [0, 20, 35], emperorFavor: [0, 20, 50] } }
  },

  qingzhuoConfig: {
    qing: { prestigeDelta: 5, guanxiDelta: 2, powerDelta: -1, label: '清官' },
    zhuo: { prestigeDelta: -3, guanxiDelta: 0, powerDelta: 2, label: '浊官', hanmenPrestigeDelta: 5 }
  },

  npcs: [
    {
      id: 'xiaoyan', name: '萧衍', title: '梁武帝',
      baseAffinity: { hanmen: 5, 'low-shizu': 10, 'high-shizu': 15 },
      faction: '皇族派', allies: ['xiaoyingda'], enemies: [],
      personality: { traits: ['雄才', '多疑', '佞佛'], speechStyle: '深沉庄重' },
      historicalDeath: { stage: 4, event: 'houjing_siege' }
    },
    {
      id: 'caojingzong', name: '曹景宗', title: '散骑常侍',
      baseAffinity: { hanmen: 5, 'low-shizu': 10, 'high-shizu': 5 },
      faction: '军功派', allies: ['fengdaogen'], enemies: ['xiaoyingda'],
      personality: { traits: ['骁勇', '急躁', '嗜酒'], speechStyle: '豪爽直白，常用军事比喻' },
      historicalDeath: { stage: 3, year: 507 }
    },
    {
      id: 'lvsengzhen', name: '吕僧珍', title: '领军将军',
      baseAffinity: { hanmen: 15, 'low-shizu': 10, 'high-shizu': -10 },
      faction: '寒门派', allies: ['dengyuanqi'], enemies: [],
      personality: { traits: ['恭慎', '守节', '不私亲戚'], speechStyle: '谨慎克制' }
    },
    {
      id: 'wangmao', name: '王茂', title: '尚书右仆射',
      baseAffinity: { hanmen: 10, 'low-shizu': 15, 'high-shizu': 20 },
      faction: '军功派', allies: ['caojingzong'], enemies: [],
      personality: { traits: ['刚毅', '正直', '善用兵'], speechStyle: '沉稳有力' }
    },
    {
      id: 'fengdaogen', name: '冯道根', title: '左卫将军',
      baseAffinity: { hanmen: 10, 'low-shizu': 12, 'high-shizu': 8 },
      faction: '军功派', allies: ['caojingzong'], enemies: [],
      personality: { traits: ['谨慎', '勇敢', '善抚士卒'], speechStyle: '朴实无华' }
    },
    {
      id: 'xiaoyingda', name: '萧颖达', title: '江州刺史',
      baseAffinity: { hanmen: -20, 'low-shizu': -15, 'high-shizu': -10 },
      faction: '皇族派', allies: ['xiaoyan'], enemies: ['caojingzong'],
      personality: { traits: ['骄矜', '跋扈', '皇族优越感'], speechStyle: '傲慢' }
    },
    {
      id: 'dengyuanqi', name: '邓元起', title: '益州刺史',
      baseAffinity: { hanmen: 20, 'low-shizu': 15, 'high-shizu': -5 },
      faction: '寒门派', allies: ['lvsengzhen'], enemies: [],
      personality: { traits: ['果敢', '清廉', '出身寒微'], speechStyle: '直率' },
      historicalDeath: { stage: 2, event: 'political_purge' }
    },
    {
      id: 'zhanghongce', name: '张弘策', title: '散骑常侍',
      baseAffinity: { hanmen: 30, 'low-shizu': 25, 'high-shizu': 20 },
      faction: '皇族派', allies: ['xiaoyan'], enemies: [],
      personality: { traits: ['忠直', '有才略', '萧衍心腹'], speechStyle: '恳切' },
      historicalDeath: { stage: 1, event: 'assassination' }
    },
    {
      id: 'renfang', name: '任昉', title: '吏部郎中',
      baseAffinity: { hanmen: 5, 'low-shizu': 10, 'high-shizu': 20 },
      faction: '文治派', allies: ['xu mian'], enemies: [],
      personality: { traits: ['博学', '清高', '文名卓著'], speechStyle: '文雅' }
    },
    {
      id: 'xumian', name: '徐勉', title: '尚书仆射',
      baseAffinity: { hanmen: 8, 'low-shizu': 12, 'high-shizu': 18 },
      faction: '文治派', allies: ['renfang'], enemies: [],
      personality: { traits: ['勤奋', '清廉', '善于理财'], speechStyle: '严谨' }
    }
  ],

  npcPersonality: {
    caojingzong: { consistentActions: ['提议用武力', '嘲笑文官迂腐', '提议喝酒'] },
    lvsengzhen: { consistentActions: ['提醒守规矩', '拒绝徇私', '默默做事'] }
  },

  careerEvents: {
    stage1: [
      {
        id: 's1_001',
        narrative: '大宋升明年间，金粉六朝皆在风雨飘摇中。苍梧王刘昱倒行逆施，萧道成代宋之势已如箭在弦。你独立于朱雀航头，看大江东去，心中盘算前程。旧日门阀瑟瑟发抖，草莽豪杰却闻到了改命的腥风。此时萧道成派人送来书信，邀你入幕。你将如何抉择？',
        choices: [
          { text: '投奔萧道成幕府，赌一场改朝换代', effects: { military: 6, guanxi: 5 }, nextEvent: 's1_002' },
          { text: '留在旧朝，静观其变，以不变应万变', effects: { civil: 2, guanxi: -5 }, nextEvent: 's1_003' },
          { text: '辞官归乡，避祸为上', effects: { military: -2, civil: 2, guanxi: -8 }, nextEvent: 's1_004' }
        ]
      },
      {
        id: 's1_002',
        narrative: '你选择投奔萧道成。某日，萧道成召你入内殿，屏退左右，问你对时局的看法。殿内烛火摇曳，气氛凝重。萧道成捋须而坐，目光深邃，似在试探你的心意。你深知此番答话关乎前程，不可不慎。',
        choices: [
          { text: '直言进谏，力陈利弊', effects: { civil: 2, guanxi: 2 } },
          { text: '附和上官，顺从其意', effects: { guanxi: 3, prestige: -2 } },
          { text: '沉默不语，静观其变', effects: { military: 1, guanxi: 1 } }
        ]
      },
      {
        id: 's1_003',
        narrative: '你选择留在旧朝。然朝廷日渐腐败，同僚之间互相倾轧，党争日烈。一日，有御史密告你与萧道成有旧交，称你暗通逆臣。圣旨已下，命你明日入宫对质。此事关乎身家性命，你将如何应对？',
        choices: [
          { text: '如实相告，请求辞官', effects: { civil: 1, guanxi: -5 } },
          { text: '矢口否认，反咬一口', effects: { guanxi: 2, prestige: -5 } },
          { text: '贿赂使者，消弭此事', effects: { money: -200, guanxi: 5 } }
        ]
      },
      {
        id: 's1_004',
        narrative: '你辞官归乡，欲过平静生活。然乱世之中，何处是净土？某日，一队士兵来到村中，强征民夫赴前线。里正手持文书，催促甚急。你虽已卸职，然朝廷法令犹在。此时，你将如何自处？',
        choices: [
          { text: '应征入伍，为国效力', effects: { military: 5, civil: -1 } },
          { text: '花钱雇人代役', effects: { money: -200, military: -2 } },
          { text: '躲藏起来，逃避征役', effects: { military: -2, prestige: -3 } }
        ]
      }
    ],
    stage2: [
      {
        id: 's2_001',
        narrative: '天监元年，萧衍代齐建梁，改元天监。新朝初立，百废待兴，诏令天下求贤。你因旧日功绩，被任命为某郡太守，即日赴任。郡中父老听闻新官将至，皆翘首以盼。然赴任之路多艰，豪强横行，民生凋敝，你将如何治理？',
        choices: [
          { text: '励精图治，造福一方', effects: { civil: 5, reputation: 5 } },
          { text: '结交权贵，谋取高位', effects: { guanxi: 5, prestige: -3 } },
          { text: '中规中矩，不求有功', effects: { civil: 2, guanxi: 1 } }
        ]
      },
      {
        id: 's2_002',
        narrative: '钟离之战爆发，梁魏两军相持于淮水之上，战事胶着。朝廷急令各地官员增援前线，你所在郡县亦在征召之列。兵书云："兵者，国之大事，死生之地，存亡之道。"此去前线，胜负难料，你将如何抉择？',
        choices: [
          { text: '亲自率军增援', effects: { military: 8, civil: -2 } },
          { text: '筹集粮草支援', effects: { civil: 5, money: -300 } },
          { text: '拖延观望，保存实力', effects: { guanxi: -5, military: -3 } }
        ]
      },
      {
        id: 's2_003',
        narrative: '梁武帝萧衍崇信佛教，下诏全国广建寺院，度僧尼数十万。你所在郡县亦接到修建寺庙的命令，需征调民夫，耗费巨资。郡中百姓本就困苦，若再大兴土木，恐生民怨。此事关乎民心向背，你将如何处理？',
        choices: [
          { text: '积极响应，大兴土木', effects: { guanxi: 6, money: -500 } },
          { text: '量力而行，适度修建', effects: { civil: 2, guanxi: 2 } },
          { text: '阳奉阴违，拖延施工', effects: { civil: -1, guanxi: -5 } }
        ]
      },
      {
        id: 's2_004',
        narrative: '朝廷推行察举制，选拔天下人才。你奉令负责举荐郡内贤才，吏部催报甚急。郡中有寒门子弟，才华横溢，然门第低微；亦有世族子弟，庸碌无能，然家世显赫。取舍之间，关乎吏治清浊，你将如何定夺？',
        choices: [
          { text: '唯才是举，不拘门第', effects: { civil: 5, reputation: 5 } },
          { text: '照顾亲友，任人唯亲', effects: { guanxi: 5, reputation: -3 } },
          { text: '按照门第，依次举荐', effects: { prestige: 3, guanxi: 2 } }
        ]
      },
      {
        id: 's2_005',
        narrative: '天监七年，梁武帝推行官制改革，将九品改为十八班。你接到调任通知，需重新选择清官或浊官路线。清官声望高但无实权，浊官有权但声望低。此选择将影响你今后的仕途走向。',
        choices: [
          { text: '选择清官路线', effects: { qingzhuo: 'qing', prestige: 5, guanxi: 2, civil: 2 } },
          { text: '选择浊官路线', effects: { qingzhuo: 'zhuo', civil: 3, military: 3, prestige: -3 } },
          { text: '观望等待，暂不表态', effects: { civil: 1, guanxi: -2 } }
        ]
      }
    ],
    stage3: [
      {
        id: 's3_001',
        narrative: '梁朝盛世，天下承平，四境晏然。然朝堂之上，暗流涌动，党争日烈。你因政绩卓著，被调入京城任职，官拜尚书郎。京城之中，权贵云集，派系林立，你初入其中，如临深渊。某日，两位权臣皆派人来拉拢你，你将如何自处？',
        choices: [
          { text: '依附权臣，寻求庇护', effects: { guanxi: 6, prestige: -3 } },
          { text: '保持中立，明哲保身', effects: { civil: 2, guanxi: -2 } },
          { text: '直言敢谏，不畏权贵', effects: { reputation: 8, guanxi: -6 } }
        ]
      },
      {
        id: 's3_002',
        narrative: '梁武帝年逾八旬，精力日衰，储位之争渐起。太子萧统贤名远播，然其他皇子亦各有党羽。你身为朝中重臣，自然成为各方拉拢的对象。某日，一皇子密遣使者送来重金，欲结为同盟。此事败露则满门抄斩，你将如何抉择？',
        choices: [
          { text: '支持太子萧统', effects: { guanxi: 6, reputation: 3 } },
          { text: '支持其他皇子', effects: { guanxi: 8, prestige: -5 } },
          { text: '置身事外，不参与党争', effects: { civil: 2, guanxi: -3 } }
        ]
      },
      {
        id: 's3_003',
        narrative: '朝廷发生财政危机，府库空虚。梁武帝下诏削减开支，裁撤冗员。你被任命为裁撤使，负责核查百官，去留之间，关乎无数人家计。昔日同僚纷纷前来求情，有的是真心为国，有的则是尸位素餐。秉公执法则得罪权贵，徇私舞弊则辜负皇恩，你将如何处置？',
        choices: [
          { text: '秉公办事，依法裁撤', effects: { civil: 5, guanxi: -6 } },
          { text: '徇私舞弊，保护亲友', effects: { guanxi: 5, civil: -3 } },
          { text: '折中处理，减少矛盾', effects: { civil: 2, guanxi: 1 } }
        ]
      },
      {
        id: 's3_004',
        narrative: '边境传来警报，北魏大军压境，连破数城，朝野震动。朝廷紧急召开廷议，商议应对之策。主战派力主出兵迎敌，主和派则主张割地求和。你身为兵部侍郎，深知两国兵力悬殊，然士气可鼓不可泄。和战之间，关乎国家存亡，你将如何进言？',
        choices: [
          { text: '力主出兵，主动迎战', effects: { military: 8, guanxi: -3 } },
          { text: '建议求和，避免战争', effects: { civil: 5, reputation: -3 } },
          { text: '加强防御，静观其变', effects: { military: 3, civil: 3 } }
        ]
      },
      {
        id: 's3_005',
        narrative: '你因政绩突出，获得晋升机会，需在清官与浊官之间做出选择。清官声望高但无实权，浊官有权但声望低，且不同出身选择会有不同影响。',
        choices: [
          { text: '晋升清官', effects: { prestige: 5, guanxi: 2, civil: 2 } },
          { text: '晋升浊官', effects: { civil: 3, military: 3, prestige: -3 } },
          { text: '婉拒晋升', effects: { civil: 1, guanxi: 1 } }
        ]
      },
      {
        id: 's3_006',
        narrative: '梁武帝召你入宫，有意让你担任近臣之职，参与机密决策。此机会可快速晋升，但风险极大，一旦失宠将万劫不复。',
        choices: [
          { text: '欣然接受，成为近臣', effects: { promotionPath: 'chenqie', guanxi: 8, prestige: -3, civil: 3, emperorFavor: 10 } },
          { text: '婉言谢绝，明哲保身', effects: { civil: 2, guanxi: -2 } },
          { text: '请求外放，远离京城', effects: { military: 2, guanxi: -1 } }
        ]
      }
    ],
    stage4: [
      {
        id: 's4_001',
        narrative: '太清二年，侯景之乱爆发！叛军一路势如破竹，直逼建康。台城被围，内外隔绝，城中人心惶惶。你身为守城将领，目睹城外烽火连天，城内粮草将尽。昔日繁华之都，如今沦为人间炼狱。生死之间，你将如何抉择？',
        choices: [
          { text: '死守城门，誓与城池共存亡', effects: { military: 10, reputation: 10, guanxi: -5 } },
          { text: '出城投降，保全性命', effects: { military: -10, prestige: -20, guanxi: -15 } },
          { text: '趁乱突围，寻找援军', effects: { military: 5, reputation: 5, guanxi: -3 } }
        ]
      },
      {
        id: 's4_002',
        narrative: '台城陷落，梁武帝被困净居殿，饮膳被裁，忧愤成疾。侯景自称丞相，挟天子以令诸侯。一日，侯景派人持书来劝你投降，许以高官厚禄。你望着宫中残阳如血，想起昔日君臣之恩，心中百感交集。降则负国，死则全家受累，你将如何定夺？',
        choices: [
          { text: '宁死不屈，拒绝投降', effects: { military: 10, reputation: 10, guanxi: -10 } },
          { text: '假意投降，暗中谋划', effects: { guanxi: 5, military: 5, reputation: -5 } },
          { text: '献城投降，换取富贵', effects: { money: 500, reputation: -20, guanxi: 10 } }
        ]
      },
      {
        id: 's4_003',
        narrative: '侯景在城内大肆屠杀，公卿士族，惨遭屠戮，百姓流离失所，白骨露于野。你侥幸逃出宫城，却见昔日繁华街巷，如今血流成河。家人不知生死，敌军四处搜捕。此时，你身边尚有数十随从，该如何自保？',
        choices: [
          { text: '组织百姓抵抗', effects: { military: 8, reputation: 8, guanxi: -5 } },
          { text: '藏匿于寺庙中', effects: { civil: 3, money: -200, guanxi: -3 } },
          { text: '逃离建康，前往南方', effects: { military: -5, civil: 3, guanxi: -8 } }
        ]
      },
      {
        id: 's4_004',
        narrative: '援军终于到来，王僧辩、陈霸先率军收复建康，侯景之乱被平定。然梁朝元气大伤，山河破碎，百废待兴。你历经劫难，侥幸存活。昔日同僚，或死或逃，城中废墟一片。你站在断壁残垣之上，望着重建中的都城，心中感慨万千。今后之路，将如何抉择？',
        choices: [
          { text: '投身重建，造福百姓', effects: { civil: 10, reputation: 10, guanxi: 5 } },
          { text: '趁机敛财，中饱私囊', effects: { money: 500, reputation: -10, guanxi: -5 } },
          { text: '辞官归隐，远离纷争', effects: { civil: 5, reputation: 5, guanxi: -3 } }
        ]
      }
    ]
  },

  eventTemplates: [
    {
      id: 'template_daily_001',
      type: 'daily',
      stage: [1, 2, 3],
      weight: 10,
      tags: ['政务', '同僚'],
      narrative: '某月某日，你奉命处理一桩民间纠纷。两大家族因田产争执不下，各执一词。同僚亦在场，冷眼旁观，似欲看你如何处置。此案若处理不当，恐引发民怨，你将如何决断？',
      choices: [
        { text: '秉公处理，不偏不倚', effects: { civil: 2, guanxi: 1 } },
        { text: '与人情往来，从中斡旋', effects: { guanxi: 2, prestige: -1 } },
        { text: '上报上官，请定夺', effects: { guanxi: 1, civil: -1 } }
      ]
    },
    {
      id: 'template_daily_002',
      type: 'daily',
      stage: [2, 3],
      weight: 8,
      tags: ['民生', '经济'],
      narrative: '辖区内忽遭灾荒，暴雨连绵，洪水泛滥，田舍尽毁，百姓流离失所，饿殍遍野。你身为地方长官，目睹此景，心如刀割。然府库空虚，救灾物资有限，你将如何赈济灾民？',
      choices: [
        { text: '开仓放粮，赈济灾民', effects: { civil: 2, money: -100, reputation: 2 } },
        { text: '请求朝廷支援', effects: { guanxi: 2, civil: 1 } },
        { text: '强制遣散，维持秩序', effects: { military: 2, reputation: -2 } }
      ]
    },
    {
      id: 'template_daily_003',
      type: 'daily',
      stage: [1, 2, 3],
      weight: 12,
      tags: ['政务', '日常'],
      narrative: '今日例行公事，处理一县赋税事宜。账目繁杂，稍有不慎便可能出错。县丞在旁等候批示，你需审慎处理。',
      choices: [
        { text: '细心核对，确保无误', effects: { civil: 2 } },
        { text: '交由县丞处理', effects: { guanxi: 1, civil: -1 } },
        { text: '简化流程，快速完成', effects: { civil: 1, reputation: -1 } }
      ]
    },
    {
      id: 'template_daily_004',
      type: 'daily',
      stage: [1, 2],
      weight: 8,
      tags: ['军事', '巡逻'],
      narrative: '你带队巡逻边境，偶遇小股盗匪骚扰乡民。虽非大敌，但若处置不当，恐影响民心。',
      choices: [
        { text: '全力围剿', effects: { military: 2, guanxi: 1 } },
        { text: '驱逐出境', effects: { military: 1, guanxi: 1 } },
        { text: '招安收编', effects: { military: 1, guanxi: 2 } }
      ]
    },
    {
      id: 'template_crisis_001',
      type: 'crisis',
      stage: [2, 3, 4],
      weight: 15,
      tags: ['危机', '弹劾'],
      narrative: '有人弹劾你滥用职权，中饱私囊，奏章已达御前，惊动朝廷。皇帝震怒，下令彻查。一时间，风声鹤唳，同僚避之不及。此事关乎身家性命，你将如何应对？',
      choices: [
        { text: '上书辩解，澄清事实', effects: { civil: 2, guanxi: -3 } },
        { text: '贿赂御史，平息此事', effects: { money: -500, guanxi: 5 } },
        { text: '请好友帮忙说情', effects: { guanxi: -3, reputation: 2 } }
      ]
    }
  ],

  randomPools: {
    affairType: ['赋税清丈', '水利工程', '邻里纠纷', '盗匪缉拿', '科举筹备', '军需调度'],
    countyName: ['建康', '京口', '江陵', '襄阳', '寿阳', '广陵', '会稽', '吴郡'],
    localFaction: ['豪强', '寺院', '商会', '宗族', '流民', '北来侨民'],
    factionAction: ['暗中阻挠', '积极配合', '袖手旁观', '趁机要挟', '联名上告'],
    factionDemand: ['要求减免赋税', '要求独占水源', '要求安置流民', '要求追查仇家'],
    bribeType: ['绢帛', '金银', '田产契约', '奴婢', '古玩'],
    weather: ['晴', '雨', '雪', '大风', '雾霾'],
    npcAttitude: ['冷眼旁观', '似笑非笑', '眉头紧锁', '兴致勃勃', '心不在焉']
  },

  endings: {
    A: {
      name: '高位善终型',
      trigger: '军功≥60或文治≥50，人情≥30，自然老死',
      type: '基础结局',
      narrative: '卿以微末之身，历事数朝，最终官至某某尚书令、侍中，封爵食邑。晚年荣归故里，乡人称颂。卿一生谨守臣节，虽无惊天动地之功绩，然持身以正，亦不失为良臣。年七十一，无病而终。',
      shichen: '史臣曰："公一生谨守臣节，虽无惊世之才，然持身以正，亦不失为良臣。古人云"太上有立德，其次有立功，其次有立言"，公虽未臻于至善，然亦不失为君子矣。"',
      official: '梁诏曰："故侍中、尚书令、某某县开国侯某某，奄至薨逝，恻怛于怀。公器宇凝素，志诚贞方，端朝燮理，嘉猷载缉。追荣表德，寔惟令典。可赠本官，鼓吹一部，给东园秘器，朝服一具，衣一袭，钱二十万，绢布一百匹。即日举哀。"',
      modern: '**现代社会生活启示：** 你不是天才，但你足够可靠。在动荡的时代里，稳定本身就是一种稀缺的能力。真正的成功，不在于你达到了多高的位置，而在于你是否守住了自己的底线。能在高位善终，本身就是一种胜利。'
    },
    B: {
      name: '军功显赫型',
      trigger: '军功≥70，有大战功绩，善终',
      type: '基础结局',
      narrative: '卿以骁勇闻名，钟离一战，大破北魏，功冠诸将。及梁兴，卿屡立战功，官至某某将军、都督某某诸军事。天监年间，卿又率军北伐，所向披靡。晚年拜车骑将军，封某某郡公。年六十二，卒于任上。',
      shichen: '史臣曰："公勇冠三军，威震敌胆，南朝安危系于一身。钟离之战，公身先士卒，大破魏军数十万，此功足以彪炳史册。古人云"猛将必发于卒伍"，公之谓也。"',
      official: '梁诏曰："故车骑将军、某某郡开国公某某，奄致殒丧，恻怆于怀。卿奉上能忠，有功不伐。可赠太尉、都督、刺史、公如故，鼓吹一部，给东园秘器，朝服一具，衣一袭。赙钱三十万，布三百匹。"',
      modern: '**现代社会生活启示：** 真正的实力永远不会被埋没。在关键时刻挺身而出的人，终将被历史铭记。你的人生证明了一个道理：不管出身如何，只要你有真本事，就能在这个世界上找到属于自己的位置。'
    },
    C: {
      name: '文治清明型',
      trigger: '文治≥60，军功≤40，善终',
      type: '基础结局',
      narrative: '卿以文治见长，在任期间兴修水利、发展教育、整顿吏治，深受百姓爱戴。天监年间，卿任某某太守，政绩卓著，百姓为之立碑颂德。后迁尚书左丞，典掌机要，匡正时弊。年六十九，卒于官。',
      shichen: '史臣曰："公以文治国，泽被苍生，有古循吏之风。在某某太守任上，兴修水利，灌溉良田数千顷；设立学校，教化百姓。古人云"为官一任，造福一方"，公之谓也。"',
      official: '梁诏曰："故尚书左丞、某某太守某某，奄至薨逝，朕甚悼焉。公清贞自居，政绩卓著，宜加褒赠。可赠吏部尚书、某某县侯，鼓吹一部，给东园秘器，朝服一具。"',
      modern: '**现代社会生活启示：** 治理国家需要的不仅仅是武力，更需要智慧和耐心。你用实力证明了文官的价值——有时候，笔比剑更有力量。在一个崇尚武力的时代，你选择了用智慧和善良去改变世界。'
    },
    D: {
      name: '寒门逆袭悲剧型',
      trigger: '寒门出身，中期崛起，后期因谗言/政治失败而亡',
      type: '基础结局',
      narrative: '卿出身寒微，凭借才华和机遇，一度位至某某侍郎。然南朝门阀制度森严，卿虽有才，终为高门所忌。天监某年，卿因直言触怒权贵，被诬以"交通外藩"之罪，下狱论死。临刑前，卿叹曰："吾本寒门，得此已逾素望。然恨不能为国家尽忠矣。"年四十三。',
      shichen: '史臣曰："公出身寒微，虽有才华，终为门阀所忌，可悲可叹。南朝之制，上品无寒门，下品无势族。公之悲剧，非个人之罪，乃时代之限也。"',
      official: '无。',
      modern: '**现代社会生活启示：** 出身决定不了一切，但在那个时代，它确实给了你太多限制。你的努力值得尊重——不是因为你成功了，而是因为你在不可能的环境中坚持了自己的理想。你证明了寒门子弟也能发光，哪怕只是短暂的一瞬。'
    },
    E: {
      name: '人情崩溃/斗争失败型',
      trigger: '人情<15或卷入政治斗争，被劾/贬/自杀',
      type: '基础结局',
      narrative: '卿不善交际，在官场上孤立无援。当危机来临时，没有一个人愿意伸出援手。天监某年，卿因小事被同僚弹劾，无人为卿辩白。朝廷遂贬卿为某某县尉。卿愤而辞官，归乡后抑郁而终。年四十八。',
      shichen: '史臣曰："公虽有才，然不谙人情世故，终难立于官场。古人云"水能载舟，亦能覆舟"，公之败，非败于才，乃败于人也。"',
      official: '无。',
      modern: '**现代社会生活启示：** 职场不仅仅是能力的比拼，人际关系同样重要。学会与人相处，不是虚伪，是生存智慧。你可能觉得自己不需要别人，但在关键时刻，一个朋友的一句话，可能就能改变你的命运。'
    },
    F: {
      name: '侯景之乱存活型',
      trigger: '度过侯景之乱，但身心受创',
      type: '基础结局',
      narrative: '侯景之乱中，卿侥幸存活。经历了这场浩劫，你看透了世间的无常。城破之日，卿率家人逃入山中，隐姓埋名。乱平后，卿不愿再入官场，选择归隐山林，度过余生。年六十九。',
      shichen: '史臣曰："公历经劫难而不死，大难之后，幡然醒悟，善哉。侯景之乱，南朝元气大伤，公能全身而退，亦不幸中之大幸也。"',
      official: '无。',
      modern: '**现代社会生活启示：** 活着本身就是一种胜利。经历过生死考验的人，更懂得珍惜平凡的生活。你的人生证明了一个道理：在灾难面前，保全自己和家人，比什么都重要。'
    },
    G: {
      name: '侯景之乱遇难型',
      trigger: '侯景之乱中战死/被害/殉节',
      type: '基础结局',
      narrative: '侯景之乱中，卿坚守城池，最终壮烈殉国。城破之日，卿率部力战，杀敌无数。及城陷，卿不屈而死。卿之忠勇事迹被后人传颂，史官赞曰："忠烈可嘉，千古流芳。"年五十一。',
      shichen: '史臣曰："公忠烈可嘉，以身殉国，千古流芳。侯景之乱，南朝忠义之士多死于是，公其一也。古人云"人生自古谁无死，留取丹心照汗青"，公之谓也。"',
      official: '梁诏曰："故某某将军、某某太守某某，器干详审，才志通烈。受任边垂，效彰所莅。寇贼凭陵，竭诚守御。不幸抱疾，奄至殒丧。可赠镇西将军、使持节、都督、刺史、伯如故。"',
      modern: '**现代社会生活启示：** 在关键时刻，你选择了坚守信念。你的勇气和担当，将永远激励后人。不是所有人都能在生死面前做出正确的选择，但你做到了。你的名字，将永远被刻在历史的丰碑上。'
    },
    H: {
      name: '外放沉沦型',
      trigger: '军功<30，文治<30，人情<25，被贬边远',
      type: '随机结局',
      narrative: '卿以微末之身，历事数朝，本望有所建树。然朝中无人，政敌环伺，一纸诏书，贬为某某郡丞。郡在交广之南，瘴疠横行，蛮獠杂处。卿到任后，欲整饬吏治，然州府掣肘，土人难治，加之瘴气侵体，日渐羸弱。数年后，朝廷换相，旧恩已去，新贵不念卿名。卿遂沉沦于南疆，终年与鳄鱼大象为伴，再无北归之日。薨于任上，年五十二。家无余财，子孙流落岭南。',
      shichen: '史臣曰："昔贾谊谪长沙，作《吊屈原赋》以自伤；今某某贬交广，无赋可作，唯有瘴气与蛮音相伴。古人云"不遇者众，遇者寡"，其斯之谓欤？南朝之制，边远州郡多为贬谪之所，士人一旦被放，如投珠于泥，虽有光而不得见。某某之沉沦，非无才也，乃无势也；非不勤也，乃不遇也。悲夫！"',
      official: '诏曰："某某郡丞某某，顷因事被劾，远放南疆。朕念其旧劳，不欲深责。可量移某某县，以观后效。其家口俸禄，减半给之。"',
      modern: '**现代社会生活启示：** 你被"流放"到了职场的边缘地带——不是因为你不够好，而是因为你不属于那个圈子。在南朝，外放是一场缓慢的职业死亡。贬谪令一下，你的京中人脉迅速冻结，你的信息渠道逐渐闭塞。但很多外放，其实是"假性死亡"。关键是你在外放期间有没有保持你的核心竞争力。被贬不是你的错，但从此沉沦就是你的选择了。'
    },
    I: {
      name: '隐退自全型',
      trigger: '人情>40，文治>40，军功<20，主动选择隐退',
      type: '随机结局',
      narrative: '齐建武之世，卿见朝政日非，遂拂衣止足，辞官归隐于会稽山中。永元多难，卿确然独善，不入漩涡。及萧衍龙兴，旁求物色，卿角巾来仕，首陟台司——然此次入世，不过三载，又求去。高祖问其故，卿曰："臣非不愿报国，实不愿再历永元之祸。"遂再归隐。晚年居山阴，与王羲之故宅为邻，弹琴读书，不问世事。年七十八，无病而终。',
      shichen: '史臣曰："谢朏之于宋代，盖忠义者欤。当齐建武之世，拂衣止足，永元多难，确然独善，其疏、蒋之流乎。洎高祖龙兴，旁求物色，角巾来仕，首陟台司，极出处之致矣。古人云"达则兼济天下，穷则独善其身"，朏之出处，可谓知进退、识时务者。然亦赖其家世殷实，田产丰厚，方能两度归隐而不忧衣食。非高门之士，安能如此？"',
      official: '诏曰："故侍中、特进、左光禄大夫、司空某某，奄至薨逝，恻怛于怀。公器宇凝素，志诚贞方，端朝燮理，嘉猷载缉。追荣表德，寔惟令典。可赠本官，鼓吹一部，给东园秘器，朝服一具，衣一袭，钱二十万，绢布一百匹，蜡二百斤。即日举哀。"',
      modern: '**现代社会生活启示：** 你的一生证明了"退出"也可以是一种胜利——但前提是，你有资格退出。谢朏能够"拂衣止足"，不是因为他境界高，而是因为他家有庄园、有田产。没有这些物质基础，"归隐"就是"饿死"。但"隐退"不等于"逃避"。谢朏在萧衍龙兴时"角巾来仕"，说明他的隐退是策略性的，不是永久性的。能在乱世中全身而退，本身就是一种智慧。'
    },
    J: {
      name: '门阀清谈型',
      trigger: '高门士族出身，文治>40，军功<15，人情>25',
      type: '随机结局',
      narrative: '卿出身高门，祖上累世公卿，自不需为五斗米折腰。年少时放浪形骸，晚乃折节，然于实务终无兴趣。天监年间，卿以"方雅""多艺"闻名于梁室，位列名士。朝堂之上，卿不谈钱谷、不问兵马，唯以玄言诗赋、琴棋书画周旋于权贵之间。高祖每设宴，必召卿作陪，卿之清谈，能使满座风生。然卿之官职，终不过某某侍郎、某某侍中，未尝独当一面。年六十二，病卒。谥曰某子。',
      shichen: '史臣曰："王氏自姬姓已降，及乎秦汉，继有英哲。洎东晋王茂弘经纶江左，时人方之管仲。其后蝉冕交映，台衮相袭，勒名帝籍，庆流子孙，斯为盛族矣。张充少不持操，晚乃折节，在于典选，寔号廉平。柳恽以多艺称，蔡撙以方雅著，江蒨以风格显，俱为梁室名士焉。然观其一生，清谈有余而实绩不足，此高门之常态也。古人云"肉食者鄙"，今观某某，可谓"肉食者逸"矣。"',
      official: '诏曰："故散骑常侍、某某侍郎某某，器范贞正，思怀经远，爰初立志，素履有闻。清谈玄远，名动公卿。虽无开疆拓土之功，然有润色鸿业之力。可赠本官，鼓吹一部。谥曰某子。"',
      modern: '**现代社会生活启示：** 你是一个"社交货币充足但硬通货不足"的人——圈子混得开，但真本事有限。你出身好、人脉广、谈吐优雅，是各种高端局上的常客。但你心里清楚：如果拿掉你的出身，你可能什么都不是。"清谈"本身不是罪，但问题在于，你是否把社交当成了全部。你的起点是很多人终其一生都到不了的终点，但请记住，出身只能决定你从哪里出发，不能决定你走到哪里。'
    },
    K: {
      name: '攀附权臣型',
      trigger: '人情>60，军功/文治一般，长期依附上位者',
      type: '随机结局',
      narrative: '卿本无赫赫之功，亦无经天纬地之才。然卿善于察言观色，能识人主之喜怒。高祖即位后，卿以门生故吏之身，投某权臣门下，日进美言，夜献珍玩。权臣喜之，屡于高祖前称卿之能。不数年，卿由杂佐而参军，由参军而侍郎，扶摇直上。然卿之所为，朝野侧目，同僚鄙之。及权臣失势，卿惶惶不可终日，幸而早备后手，转投新贵门下，又得保全。终以某某大夫致仕，年六十五。虽得善终，然史笔如刀，卿之名，终与"佞幸"二字相连。',
      shichen: '史臣曰："古人云"君子喻于义，小人喻于利"。某某之为人也，无义而唯利是图，无才而唯势是依。其起也，不以功；其进也，不以德。日进美言于权臣之门，夜献珍玩于贵人之第。虽得一时之荣，然朝野侧目，同僚鄙之。及权臣失势，又转投新贵，反复无常，如墙头之草。古人云"多行不义必自毙"，某某之得善终，岂非天幸欤？后之君子，当以此为戒。"',
      official: '诏曰："故某某大夫某某，侍奉有年，颇称勤慎。可赠本官，赙钱若干，布若干匹。即日举哀。"',
      modern: '**现代社会生活启示：** 你走的是一条"捷径"——但所有捷径，都标好了价格。你不需要能力很强，不需要很努力，只需要找对"大腿"、说对话、送对礼。这条路能走通，但走不远。你今天依附的权臣，明天可能就倒台了。如果你已经在走这条路，至少要培养一项真正属于自己的能力。"大腿"会倒，但你的本事不会。'
    },
    L: {
      name: '叛降敌国型',
      trigger: '侯景之乱时选择投降，或前期投降北魏',
      type: '随机结局',
      narrative: '卿本梁朝大将，封爵食邑，恩遇隆厚。然性本反复，好利而轻义。天监年间，卿以江州刺史之尊，举兵反叛。朝廷遣王茂南讨，卿不敌，遂奔于魏。魏人待之甚厚，封卿为某某将军。然卿在南朝有家室，有田产，有故旧。每登高北望，未尝不泣下。后虽多次请归，然南朝已无卿之位置。卿终老于洛阳，年六十。魏人谥曰某，然南朝史官书卿之名，必加一"叛"字。',
      shichen: '史臣曰："陈伯之小人而乘君子之器，群盗又诬而夺之，安能长久矣。今观某某，其才胜于伯之，其罪亦重于伯之。伯之叛于内，犹有可说；某某叛于外，不可言也。古人云"非我族类，其心必异"，卿既投魏，即为异类。虽魏人待之甚厚，然其心终不安——北望泣下，岂非思乡之证？然卿自绝于南朝，虽有悔意，已无归路。悲夫！"',
      official: '诏曰："故叛将某某，背恩负义，投敌卖国，罪不容诛。其家口没为官奴，田产充公，爵位削除，名字从宗谱中剔除。天下共讨之，万民共弃之。"',
      modern: '**现代社会生活启示：** 你选择了"背叛"——但背叛的代价，往往比你想象的要大得多。陈伯之降魏后，"每登高北望，未尝不泣下"。这就是背叛者的宿命：你得到了新的位置，但失去了根的认同。在新东家眼里，你永远是"那个叛过来的"；在老东家眼里，你是"那个叛徒"。在决定"背叛"之前，问自己三个问题：是为了钱？为了安全？还是为了原则？只有最后一个理由值得你背负骂名。'
    },
    M: {
      name: '家族连坐型',
      trigger: '高门出身，家族政治站队错误',
      type: '随机结局',
      narrative: '卿出身簪缨世家，父祖皆为公卿，自幼不忧衣食。及长，以门荫入仕，官至某某侍郎。然卿之叔父，与萧颖胄善，齐末义师起，叔父为西台谋主。及高祖受禅，叔父虽得封侯，然与新贵不睦。天监十年，叔父以"交通外藩"被劾，全家下狱。卿虽未尝参与，然以"同宗连坐"之律，免官归第，禁锢终身。卿之家产，十去其九；奴婢散尽，唯有老仆二人。晚年独居旧宅，门可罗雀。年五十五，忧愤而卒。',
      shichen: '史臣曰："昔周勃以功臣而遭诬，晁错以忠谏而被诛，此皆帝王之术，非臣子之罪也。今观某某之祸，虽曰"连坐"，实则党争之牺牲品耳。南朝门阀之制，一荣俱荣，一损俱损。某某之叔父，西台功臣也，及高祖即位，功高震主，新贵忌惮，遂以"交通外藩"之罪加之。某某虽无辜，然以同宗之故，不得免焉。古人云"伴君如伴虎"，今观某某，岂非"生于门阀，死于门阀"欤？"',
      official: '诏曰："故某某侍郎某某之叔父某某，交通外藩，图谋不轨，罪大恶极。依律，某某连坐，免官归第，禁锢终身。其家口没为官奴者，可赦为庶人。田产充公，以儆效尤。"',
      modern: '**现代社会生活启示：** 你什么都没做错，但你是"某某的侄子/侄女"——这就够了。在南朝，血缘不是祝福，是枷锁。你的叔父站错了队，你就要跟着买单。但"连坐"不仅仅是风险，它也曾是你的红利。你以门荫入仕，不就是因为你的姓氏吗？享受了家族的红利，就要承担家族的风险。如果你已经遭遇了连坐，不要自怨自艾。站起来，走你自己的路。'
    },
    N: {
      name: '急流勇退型',
      trigger: '官职≥太守/将军级，主动辞官致仕',
      type: '随机结局',
      narrative: '卿以军功起家，历侍中、尚书右仆射、车骑将军，封宁都县侯。天监二年，卿抗表致仕，言辞恳切。高祖再三挽留，卿固辞曰："臣年老体衰，不堪驱策。且臣本无大才，蒙陛下拔擢，位极人臣，已逾素望。若贪恋权位，恐有尸素之讥。愿陛下许臣归老林下，以全晚节。"高祖叹曰："卿之知止，古之贤者不过如此。"遂解侍中，进特进。卿归丰城故里，治田园，教子孙，每日与乡老饮酒弈棋。年七十四，无病而终。',
      shichen: '史臣曰："夏侯详年十六遭父艰，居丧哀毁，三年庐于墓。及长，历事八将，州部称之。天监二年，抗表致仕，言辞恳切。高祖再三挽留，详固辞。古人云"知足不辱，知止不殆"，详之知止，可谓贤矣。且详非无才而辞，乃有才而知其限也。非高门之衣食无忧，寒门之不敢退也。详之退，退得其所；今人之退，或退无所归。此时代之局限，非个人之罪也。"',
      official: '诏曰："故侍中、车骑将军、宁都县开国侯某某，奄至薨逝，恻怛于怀。卿立身清正，奉上忠恪，历掌机密，清贞自居。抗表致仕，知止不殆，古之贤者不过如此。可赠本官，鼓吹一部，给东园秘器，朝服一具，衣一袭。赙钱二十万，布二百匹。"',
      modern: '**现代社会生活启示：** 你在巅峰时刻选择了退出——这不是退缩，这是清醒。夏侯详不是不能干了，而是知道"再干下去就要出事"。在权力巅峰时主动放手，需要的勇气比攀登时更大。因为放手意味着你要面对"没有权力我是谁"的身份危机。能在掌声最响的时候转身离开，这是一种稀缺的品质。但请不要把"退"当成"终点"。你的下半场，才刚刚开始。'
    },
    O: {
      name: '边疆守将型',
      trigger: '军功40-60，长期在边疆任职，死于任上',
      type: '随机结局',
      narrative: '卿以寒门之身，从萧衍起兵，每战必先登陷阵。及梁兴，卿不以功高自傲，自请镇守边陲。朝廷授卿为某某将军、某某太守，带某某戍主。卿到任后，修城隍，远斥候，勤抚恤，蛮獠畏服。魏军屡寇，卿皆率部击退。天监某年，魏大举入侵，卿以数千人抗数万之众，坚守百余日。城中粮尽，卿犹亲冒矢石，与士卒同甘苦。及城陷，卿力战被俘，不屈而死。年五十三。',
      shichen: '史臣曰："蔡道恭以五千人抗魏军百余日，道恭随方抗御，皆应手摧却。及城陷，道恭力战被俘，不屈而死。今观某某，其勇不亚于道恭，其忠亦不减于公则。古人云"边将之苦，非京官所能知"，某某之戍边，寒门之常路也。南朝之制，高门居中枢，寒门守边疆。某某之死，非无才之罪，乃阶级之限也。悲夫！"',
      official: '诏曰："故持节、都督某某诸军事、某某将军、某某太守某某，器干详审，才志通烈。受任边垂，效彰所莅。寇贼凭陵，竭诚守御，奇谋间出，捷书日至。不幸抱疾，奄至殒丧，遗略所固，得移气朔。自非徇国忘已，忠果并至，何能身没守存，穷而后屈。可赠镇西将军、使持节、都督、刺史、伯如故。"',
      modern: '**现代社会生活启示：** 你是那个"在最艰苦的地方做最重要的事"的人——但你的付出，很少有人看见。边疆守将是南朝最苦的差事：远离京城，远离权力中心，远离一切社会资源。你的战功传回朝廷时，可能只剩下一行冰冷的文字。但被看见不是唯一的价值标准。你的坚守本身就是一种英雄主义——不需要掌声的英雄主义。谢谢你。'
    },
    P: {
      name: '酒色伤身型',
      trigger: '军功或文治>50，但人情波动大，后期放纵',
      type: '随机结局',
      narrative: '卿以骁勇闻名，钟离一战，大破北魏，功冠诸将。及进爵为公，卿益自骄纵。府中妓妾至数百人，穷极锦绣；酒池肉林，日夜不休。高祖数讌见功臣，卿每醉后谬忘，或误称下官，高祖故纵之以笑乐。然卿之身体，实已亏空。天监七年，卿迁江州刺史，赴任途中，忽感风疾，半身不遂。延医诊治，皆云"酒色过度，元气大伤"。卿卧榻三月，自知不起，召诸子于床前，泣曰："吾昔乡里骑快马如龙，今来扬州作贵人，如三日新妇。此乐使人忘死，亦使人速死。汝等戒之。"遂卒，年五十二。',
      shichen: '史臣曰："曹景宗为人自恃尚胜，每作书字有不解，不以问人，皆以意造焉。景宗好内，妓妾至数百，穷极锦绣。性躁动，不能沉默，出行常欲褰车帷幔。景宗谓所亲曰："我昔乡里，骑快马如龙……此乐使人忘死，不知老之将至。今来扬州作贵人，动转不得，路行开车幔，小人辄言不可。闭置车中，如三日新妇。遭此邑邑，使人无气。"今观某某，其才不减景宗，其纵亦不减景宗。古人云"酒是穿肠毒药，色是刮骨钢刀"，某某之死，岂非自取欤？"',
      official: '诏曰："故侍中、中卫将军、某某刺史某某，奉上能忠，有功不伐。奄致殒丧，恻怆于怀。可赠征北将军、某某刺史、开府仪同三司，谥曰壮。"',
      modern: '**现代社会生活启示：** 你是一个"高能消耗型"的人——你的才华让你到达高处，但你的放纵让你提前离场。曹景宗五十二岁就死了。他有大房子、有数百美女、有喝不完的酒——但他没有时间了。放纵不是自由，节制才是。真正的自由不是"想做什么就做什么"，而是"不想做什么就可以不做"。学会在奔跑中调整呼吸，在狂欢中保持清醒。你已经证明了自己能赢，现在试着证明自己能一直赢下去。'
    },
    Q: {
      name: '婚姻联姻型',
      trigger: '高门士族出身，人情>50，通过联姻巩固地位',
      type: '随机结局',
      narrative: '卿出身琅琊王氏/陈郡谢氏，年未弱冠，已有名家淑女来议婚。卿之父曰："吾家世为公卿，岂可与寒门为婚？"遂为卿聘某某氏女，其父时任尚书令，门第相若。及成婚，卿之仕途大开——岳父屡于高祖前称卿之"年少有才"，不数年，卿由尚书郎而侍郎，由侍郎而侍中。及岳父致仕，卿又娶其弟之女，两家互为婚姻，盘根错节。卿之官职，虽不显赫，然稳如泰山。天监末年，卿以某某大夫致仕，年六十八。子孙满堂，皆联姻高门。卿之家，遂为南朝百年望族之一。',
      shichen: '史臣曰："王氏自姬姓已降，及乎秦汉，继有英哲。洎东晋王茂弘经纶江左，时人方之管仲。其后蝉冕交映，台衮相袭，勒名帝籍，庆流子孙，斯为盛族矣。今观某某，其才未必出众，其功未必显赫，然以婚姻之故，历仕三朝而不倒。古人云"婚姻者，合二姓之好"，在南朝，婚姻者，合二姓之权也。此门阀政治之常态，非某某个人之罪也。然亦可见，南朝之阶级固化，已到"非婚不得进"之地步。悲夫！"',
      official: '诏曰："故某某大夫、某某氏之婿某某，侍奉有年，颇称勤慎。可赠本官，鼓吹一部。其妻某某氏，封某某夫人，享俸如故。"',
      modern: '**现代社会生活启示：** 你通过婚姻实现了阶层的跃迁——但这条路，远比看起来复杂。在南朝，婚姻不是爱情，是政治。你娶了尚书令的女儿，你的仕途就开了挂。这不是浪漫，这是交易。但交易也有代价：你的婚姻里住着第三个人——叫"家族利益"。无论你通过什么方式到达今天，你都有权利为自己的努力感到骄傲。但请记住，真正的贵族不是出生在贵族家庭的人，而是能让家族因自己而骄傲的人。'
    }
  },

  achievements: {
    '生前身后名': { desc: '娱乐善终+职场高位善终' },
    '金玉其外': { desc: '娱乐善终+职场上悲惨' },
    '冷暖自知': { desc: '娱乐穷困+职场上风光' },
    '人生两苦': { desc: '娱乐穷困+职场悲剧' },
    '看破红尘': { desc: '娱乐出家+侯景存活' },
    '以身殉道': { desc: '娱乐出家+侯景遇难' },
    '举家殉国': { desc: '娱乐战乱死+侯景遇难' },
    '活着就是胜利': { desc: '娱乐善终+侯景存活' },
    '富贵险中求': { desc: '娱乐暴富+职场攀附' },
    '第一桶金': { desc: '完成引导局' },
    '殉节者': { desc: '职场不投降' },
    '三七二十四': { desc: '连续三次选情理而非法理' },
    '虎口余生': { desc: '人情<5时逆转' }
  },

  TutorialData: {
    floatingHints: {
      military: '军功代表你的军事才能和战场表现。数值越高，越容易走武职路线。',
      civil: '文治代表你的政务能力和学识。数值越高，越容易走文职路线。',
      guanxi: '人情代表你在官场上的人际关系。太低的话，容易被弹劾甚至杀身。',
      money: '银钱是经济实力的体现，可用于交易和缴税。',
      food: '粮食是生存的基础，缺乏粮食会影响健康。',
      reputation: '声望决定了你的社会地位，影响他人对你的态度。',
      festival: '节令是南朝社会的重要组成部分，不同节令有不同的习俗和活动。',
      tax: '赋税是南朝百姓的沉重负担，需按时缴纳。'
    },
    termHints: {
      '参军': '三国始置，南朝为军府属官，品级不高',
      '钟离之战': '天监六年（507年），梁将韦睿、曹景宗大破北魏于钟离',
      '田租': '按田亩征收的税，丁男需额外负担禄米二担',
      '户调': '按户征收的绢、绵等实物税',
      '九品中正': '魏晋南北朝时期的选官制度',
      '清浊官': '南朝官制分为清官和浊官，清官多为士族担任',
      '兵户': '世袭军籍，不得脱籍的特殊户籍',
      '吏户': '为官府服务的特殊户籍',
      '节令': '农历中的节气和节日，影响农事和生活'
    },
    tutorialPhases: {
      phase1: {
        title: '规则速览',
        content: [
          { icon: '📜', title: '双轨模式', desc: '职场模式：体验仕途沉浮，从寒门到公卿\n娱乐模式：体验南朝市井生活，岁时节令与赋税' },
          { icon: '⚔️', title: '职场关键数值', desc: '军功：军事才能\n文治：政务能力\n人情：人际关系' },
          { icon: '🏡', title: '娱乐关键数值', desc: '银钱：经济实力\n粮食：生存保障\n声望：社会地位' },
          { icon: '🔄', title: '模式联动', desc: '两种模式可相互影响，出身共享，数值渗透' }
        ],
        duration: 30
      },
      phase2: {
        title: '引导局',
        content: [
          { icon: '🎯', title: '新手提示', desc: '初次游戏时，系统会提供额外提示帮助你理解规则' },
          { icon: '💡', title: '渐进提示', desc: '随着游戏进行，提示会逐渐减少，让你自主探索' },
          { icon: '📖', title: '事件引导', desc: '重要事件会有额外说明，帮助你理解历史背景' }
        ],
        duration: 15
      },
      phase3: {
        title: '自由探索',
        content: [
          { icon: '🌐', title: '社会关系', desc: '与NPC建立关系，影响剧情发展' },
          { icon: '📅', title: '时间推进', desc: '农村节令轨与城市月份轨并行' },
          { icon: '🏆', title: '成就系统', desc: '完成特殊条件解锁成就' },
          { icon: '🔮', title: '多结局', desc: '不同选择导向不同结局' }
        ],
        duration: 10
      }
    },
    hintDensity: {
      low: { name: '低调', frequency: 0.3, desc: '适合有经验的玩家' },
      normal: { name: '适中', frequency: 0.5, desc: '推荐大多数玩家' },
      high: { name: '详细', frequency: 0.8, desc: '适合新手玩家' }
    },
    achievements: {
      '初出茅庐': { desc: '完成第一次选择', type: 'progress' },
      '熟读史书': { desc: '阅读5条历史知识', type: 'knowledge' },
      '人脉达人': { desc: '与5个NPC建立关系', type: 'social' },
      '富甲一方': { desc: '娱乐模式金钱达到1000', type: 'economy' },
      '战功赫赫': { desc: '职场模式军功达到50', type: 'career' },
      '文名远播': { desc: '职场模式文治达到50', type: 'career' },
      '人情练达': { desc: '职场模式人情达到50', type: 'career' },
      '节令大师': { desc: '体验10个不同节令', type: 'festival' },
      '双轨行者': { desc: '完成一次模式切换', type: 'linkage' },
      '全解锁': { desc: '解锁所有结局', type: 'collection' }
    }
  },

  // 知识库3：史臣评价和官方评价（完整原文）
  knowledgeBase3: {
    shichenEvaluations: {
      '列传三': '陈吏部尚书姚察（史臣）曰：王茂、曹景宗、柳庆远虽世为将家，然未显奇节。梁兴，因日月末光以成所志，配迹方、邵，勒勋钟鼎，伟哉！昔汉光武全爱功臣，不过朝请特进，寇、邓、耿、贾咸不尽其器力。茂等迭据方岳，位终上将，君臣之际，迈于前代矣。',
      '列传四': '陈吏部尚书姚察（史臣）曰：永元之末，荆州方未有衅，萧颖胄悉全楚之兵首应义举，岂天之所启，人惎之谋？不然，何其响附之决也。颖达叔侄庆流后嗣，夏侯、杨、邓咸享隆名，盛矣！详之谨厚，杨、蔡廉节，君子有取焉。',
      '列传五': '陈吏部尚书姚察（史臣）曰：张弘策敦厚慎密，吕僧珍恪勤匪懈，郑绍叔忠诚亮尽，缔构王业，三子皆有力焉。僧珍之肃恭禁省，绍叔之造膝诡辞，盖识为臣之节矣。',
      '列传六': '陈吏部尚书姚察（史臣）曰：昔窦融以河右归汉，终为盛族；柳惔举南郑响从，而家声弗𫕥，时哉！忱之谋画，亦用有成，智矣。韦睿起上庸以附义，其地比惔则薄，及合肥、邵阳之役，其功甚盛，推而弗有，君子哉。',
      '列传七': '陈吏部尚书姚察（史臣）曰：昔木德将谢，昏嗣流虐，惵惵黔黎，命悬晷漏。高祖义拯横溃，志宁区夏，谋谟帷幄，寔寄良、平。至于范云、沈约，参预缔构，赞成帝业。加云以机警明赡，济务益时，约高才博洽，名亚迁、董，俱属兴运，盖一代之英伟焉。',
      '列传八': '陈吏部尚书姚察（史臣）曰：观夫二汉求贤，率先经术，近世取人，多由文史。二子之作，辞藻壮丽，允值其时。淹能沈静，昉持内行，并以名位终始，宜哉！江非先觉，任无旧恩，则上秩显赠，亦末由也已。',
      '列传九': '陈吏部尚书姚察（史臣）曰：谢朏之于宋代，盖忠义者欤。当齐建武之世，拂衣止足，永元多难，确然独善，其疏、蒋之流乎。洎高祖龙兴，旁求物色，角巾来仕，首陟台司，极出处之致矣。览终能善政，君子韪之。',
      '列传十': '陈吏部尚书姚察（史臣）曰：孔子称"敖有三仁，微子去之，箕子为之奴，比干谏而死。"王亮之居乱世，势位见矣，其于取舍，何与三仁之异欤？及奉兴王，蒙宽政，为佐命，固将愧于心，其自取废故，非不幸也。易曰："非所据而据之，身必危。"亮之进退失所据矣，惜哉！张稷因机制变，亦其时也。王莹印章六毁，岂神之害盈乎？',
      '列传十一': '陈吏部尚书姚察（史臣）曰：王珍国、申胄、徐元瑜、李居士，齐末咸为列将，拥强兵，或面缚请罪，或斩关献捷，其能后服，马仙琕而已。仁义何常，蹈之则为君子，信哉。及其临边抚众，虽李牧无以加矣。张齐之政绩，亦有异焉。胄元瑜居士入梁事迹鲜，故不为之传。',
      '列传十二': '陈吏部尚书姚察（史臣）曰：张惠绍、冯道根、康绚，昌义之初起从上，其功则轻。及群盗焚门，而惠绍以力战显；合肥、邵阳之逼，而道根义之功多；浮山之役起，而康绚典其事，牙有厥劳，宠进宜矣。先是镇星守天江而堰兴，及退舍而堰决，非徒人事，有天道矣。',
      '列传十三': '陈吏部尚书姚察（史臣）曰：萧颖胄起大州之众以会义，当其时，人心未之能悟。此三人者，楚之镇也。经营缔构，盖有力焉。方面之功，坦为多矣。当官任事，蔼则兼之。咸登宠秩，宜乎。',
      '列传十四': '史臣曰：刘季连之文吏小节，而不能以自保全，习乱然也。陈伯之小人而乘君子之器，群盗又诬而夺之，安能长久矣。',
      '列传十五': '史臣曰：王氏自姬姓已降，及乎秦汉，继有英哲。洎东晋王茂弘经纶江左，时人方之管仲。其后蝉冕交映，台衮相袭，勒名帝籍，庆流子孙，斯为盛族矣。王瞻等承藉兹基，国华是贵，子有才行，可得而称。张充少不持操，晚乃折节，在于典选，寔号廉平。柳恽以多艺称，蔡撙以方雅著，江蒨以风格显，俱为梁室名士焉。',
      '列传十九': '陈吏部尚书姚察（史臣）曰：徐勉少而厉志忘食，发愤修身，慎言行，择交游。加运属兴王，依光日月，故能明经术以绾青紫，出闾阎而取卿相。及居重任，竭诚事主，动师古始，依则先王，提衡端执，物无异议，为梁宗臣，盛矣！',
      '列传三十三': '史臣曰：高祖革命受终，光期宝运，威德所渐，莫不怀来，其皆徇难投身，前后相属。元法僧之徒入国，并降恩遇，位重任隆，击钟鼎食，美矣。而羊侃、鸦仁值太清之难，并竭忠奉国，侃则临危不挠，鸦仁守义殒命，可谓志等松筠，心均铁石，古之殉节，斯其谓乎。',
      '列传三十九': '史臣曰：自侯景寇逆，世祖据有上游，以全楚之兵委僧辩将率之任。及克平祸乱，功亦著焉，在乎策勋当上台之赏。敬帝以高祖贻厥之重，世祖继体之尊，洎渚宫沦覆，理膺宝祚。僧辩位当将相，义存伊、霍，乃受胁齐师，傍立支庶，苟欲行夫忠义，何忠义之远矣。树国之道既亏，谋身之计不足，自致歼灭，悲矣！',
      '列传四十': '史臣曰：胡僧祐勇干有闻，搴旗破敌者数矣。及捐躯徇节，殒身王事，虽古之忠烈，何以加焉。徐文盛始立功绩，不能终其成名，为不义也。杜崱识机变之理，知向背之宜，加以身屡典军，频殄寇逆，勋庸显著，卒为中兴功臣，义哉！'
    },
    officialEvaluations: {
      '王茂': '诏曰："旌德纪勋，哲王令轨；念终追远，前典明诰。故使持节、散骑常侍、骠骑将军、开府仪同三司、江州刺史茂，识度淹广，器宇凝正。爰初草昧，尽诚宣力，绸缪休戚，契阔屯夷。方赖谋猷，永隆朝寄，奄至薨殒，朕用恸于厥心。宜增礼数，式昭盛烈。可赠侍中、太尉，加班剑二十人，鼓吹一部。谥曰忠烈。"',
      '柳庆远': '诏曰："念往笃终，前王令则；式隆宠数，列代恒规。使持节、都督雍梁南北秦四州郢州之竟陵司州之随郡诸军事、安北将军、宁蛮校尉、雍州刺史、云杜县开国侯柳庆远，器识淹旷，思怀通雅。爰初草昧，预属经纶。远自升平，契阔禁旅，重牧西藩，方弘治道，奄至殒丧，伤恸于怀。宜追荣命，以彰茂动。可赠侍中、中军将军、开府仪同三司，鼓吹、侯如故。谥曰忠惠。赙钱二十万，布二百匹。"',
      '张弘策': '诏曰："亡从舅卫尉，虑发所忽，殒身祅竖。其情理清贞，器识淹济，自藩升朝，契阔夷阻。加外氏凋衰，飨尝屡绝，兴感渭阳，情寄斯在。方赖忠勋，翼宣寡薄，报效无征，永言增恸。可赠散骑常侍、车骑将军，给鼓吹一部。谥曰愍。"',
      '郑绍叔': '诏曰："追往念功，前王所笃；在诚惟旧，异代同规。通直散骑常侍、右卫将军、东兴县开国侯绍叔，立身清正，奉上忠恪，契阔藩朝，情绩显著。爰及义始，寔立茂勋，作牧疆境，效彰所莅。方申任寄，协赞心膂，奄至殒丧，伤痛于怀。宜加优典，隆兹宠命。可赠散骑常侍、护军将军，给鼓吹一部，东园秘器，朝服一具，衣一袭。凶事所须，随由资给。谥曰忠。"',
      '吕僧珍': '诏曰："思旧笃终，前王令典；追荣加等，列代通规。散骑常侍、领军将军、平固县开国侯僧珍，器思淹通，识宇详济，竭忠尽礼，知无不为。与朕契阔，情兼屯泰。大业初构，茂勋克举；及居禁卫，朝夕尽诚。方参任台槐，式隆朝寄，奄致丧逝，伤恸于怀。宜加优典，以隆宠命。可赠骠骑将军、开府仪同三司，常侍、鼓吹、侯如故。给东园秘器，朝服一具，衣一袭，丧事所须，随由备办。谥曰忠敬侯。"',
      '范云': '诏曰："追远兴悼，常情所笃，况问望斯在，事深朝寄者乎！故散骑常侍、尚书右仆射、霄城侯云，器范贞正，思怀经远，爰初立志，素履有闻，脱巾来仕，清绩仍著。燮务登朝，具瞻惟允，绸缪翊赞，义简朕心。虽勤非负靮，而旧同论讲。方骋远涂，永毗庶政，奄致丧殒，伤悼于怀。宜加命秩，式备徽典。可追赠侍中、卫将军，仆射、侯如故。并给鼓吹一部。"',
      '张惠绍': '诏曰："张惠绍志略开济，干用贞果，诚懃义始，绩闻累任。爰居禁旅，尽心朝夕，奄至殒丧，恻怆于怀。宜追宠命，以彰勋烈。可赠护军将军，给鼓吹一部，布百匹，蜡二百斤。谥曰忠。"',
      '冯道根': '诏曰："豫宁县开国伯、新除散骑常侍、领左军将军冯道根，奉上能忠，有功不伐，抚人留爱，守边难犯，祭遵、冯异、郭伋、李牧不能过也。奄致殒丧，恻怆于怀。可赠信威将军、左卫将军，给鼓吹一部，赙钱十万，布百匹。谥曰威。"',
      '昌义之': '诏曰："护军将军营道县开国侯昌义之，干略沈济，志怀宽隐，诚著运始，效彰边服。方申爪牙，寄以禁旅，奄至殒丧，恻怆于怀。可赠散骑常侍、车骑将军，并鼓吹一部，给东园秘器、朝服一具，赙钱贰万，布二百匹、蜡二百斤。谥曰烈。"',
      '周舍': '诏曰："太子詹事、豫州大中正舍，奄至殒丧，恻怆于怀。其学思坚明，志行开敏，劬劳机要，多历岁年，才用未穷，弥可嗟恸。宜隆追远，以旌善人。可赠侍中、护军将军，鼓吹一部，给东园秘器，朝服一具，衣一袭，丧事随由资给。谥曰简子。"明年，又诏曰："故侍中、护军将军简子舍，义该玄儒，博穷文史，奉亲能孝，事君尽忠，历掌机密，清贞自居，食不重味，身靡兼衣。终亡之日，内无妻妾，外无田宅，两儿单贫，有过古烈。往者南司白涡之劾，恐外议谓朕有私，致此黜免，追愧若人一介之善，外可量加褒异，以旌善人。"',
      '到洽': '昭明太子与晋安王讳令曰："明北兖、到长史遂相系凋落，伤怛悲惋，不能已已。去岁陆太常殂殁，今兹二贤长谢。陆生资忠履贞，冰清玉洁，文该四始，学遍九流，高情胜气，贞然直上。明公儒学稽古，淳厚笃诚，立身行道，始终如一，傥值夫子，必升孔堂。到子风神开爽，文义可观，当官莅事，介然无私。皆海内之俊乂，东序之秘宝。此之嗟惜，更复何论。但游处周旋，并淹岁序，造膝忠规，岂可胜说。幸免祇悔，实二三子之力也。谈对如昨，音言在耳，零落相仍，皆成异物，每一念至，何时可言。天下之宝，理当恻怆。近张新安又致故，其人文笔弘雅，亦足嗟惜。随弟府朝，东西日久，尤当伤怀也。比人物零落，特可伤惋，属有今信，乃复及之。"',
      '明山宾': '又与前司徒左长史殷芸令曰："北兖信至，明常侍遂至殒逝，闻之伤怛。此贤儒术该通，志用稽古，温厚淳和，伦雅弘笃。授经以来，迄今二纪。若其上交不谄，造膝忠规，非显外迹，得之胸怀者，盖亦积矣。摄官连率，行当言归，不谓长往，眇成畴日。追忆谈绪，皆为悲端。往矣如何！昔经联事，理当酸怆也。"',
      '裴子野': '诏曰："鸿胪卿、领步兵校尉、知著作郎、兼中书通事舍人裴子野，文史足用，廉白自居，劬劳通事，多历年所，奄致丧逝，恻怆空怀。可赠散骑常侍，赙钱五万，布五十匹。即日举哀，谥曰贞子。"',
      '顾协': '高祖悼惜之，手诏曰："员外散骑常侍、鸿胪卿，兼中书通事舍人顾协，廉洁自居，白首不衰，久在省闼，内外称善。奄然殒丧，恻怛之怀，不能已已。傍无近亲，弥足哀者。大殓既毕，即送其丧柩还乡，并营冢椁，并皆资给，悉使周办。可赠散骑常侍，令便举哀。谥曰温子。"',
      '袁昂': '诏曰："侍中、特进、左光禄大夫、司空昂，奄至薨逝，恻怛于怀。公器宇凝素，志诚贞方，端朝燮理，嘉猷载缉，追荣表德，寔惟令典。可赠本官，鼓吹一部，给东园秘器，朝服一具，衣一袭，钱二十万，绢布一百匹，蜡二百斤。即日举哀。"',
      '张率': '昭明太子遣使赠赙，与晋安王讳令曰："近张新安又致故，其人才笔弘雅，亦足嗟惜。随弟府朝，东西日久，尤当伤怀也。比人物零落，特可潸慨，属有今信，乃复及之。"',
      '张缅': '高祖举哀，昭明太子亦往临哭，与缅弟缵书曰："贤兄学业该通，莅事明敏，虽倚相之读坟典，郄縠之敦诗书，惟今望古，蔑以斯过。自列宫朝，二纪将及，义惟僚属，情实亲友。文筵讲席，朝游夕宴，何曾不同兹胜赏，共此言寄，如何长谢，奄然不追。且年甫强仕，方申才力，摧苗落颖，弥可伤惋。念天伦素睦，一旦相失，如何可言！言及增哽，㧛笔无次。"',
      '孔休源': '高祖为之流涕，顾谓谢举曰："孔休源奉职清忠，当官忠直，方欲共康治道，以隆王化，奄至殒殁，朕甚痛之。"诏曰："慎终追远，历代通规；褒德畴庸，先王令典。宣惠将军、金紫光禄大夫、监扬州孔休源，风业贞正，雅量冲邈。升荣建礼，誉重搢绅。理务神州，化覃哥咏。方兴仁寿，穆是彝伦，奄然永逝，倍用悲恻。可赠散骑常侍、金紫光禄大夫，赙第一材一具、布五十匹、钱五万、蜡二百斤。克日举哀，丧事所须，随便资给。谥曰贞子。"皇太子手令曰："金紫光禄大夫孔休源，立身中正，行己清恪。昔岁西浮渚宫，东泊枌壤，毗佐蕃政，实尽厥诚。安国之详审，公仪之廉白，无以过之。奄至殒丧，情用恻怛。今须举哀，外可备礼。"',
      '到溉': '故世祖赠诗曰："魏世重双丁，晋朝称二陆。何如今两到，复似凌寒竹。"'
    }
  },

  // 知识库4：人物四阶段事件库
  knowledgeBase4: {
    stage1: {
      wangmao: [
        { id: 'kb4_s1_wm_01', content: '宋昇明末，起家奉朝請，歷後行軍參軍、司空騎兵、太尉中兵參軍。' },
        { id: 'kb4_s1_wm_02', content: '魏將李烏奴宼漢中，茂受詔西討，魏軍退，還爲鎭南司馬，帶臨湘令，入爲越騎校尉。' },
        { id: 'kb4_s1_wm_03', content: '魏㓂兖州，茂時以寧朔將軍長史鎭援北境，入爲前軍將軍江夏王司馬，又遷寧朔將軍、江夏内史。' },
        { id: 'kb4_s1_wm_04', content: '建武初，魏圍司州，茂以郢州之師救焉。髙祖率衆先登賢首山，魏將王肅、劉昶來戰，茂從髙祖拒之，大破肅等。魏軍退，茂還郢。' }
      ],
      caojingzong: [
        { id: 'kb4_s1_cjz_01', content: '宋元徽中，隨父出京師，爲奉朝請貟外，遷尚書左民郎。' },
        { id: 'kb4_s1_cjz_02', content: '尋以父憂去職，還郷里。服闋，刺史蕭赤斧板爲冠軍中兵參軍，領天水太守。時建元初，蠻宼羣動，景宗東西討擊，多所擒破。' },
        { id: 'kb4_s1_cjz_03', content: '齊鄱陽王鏘為雍州，復以爲征虜中兵參軍，帶馮翊太守，督峴南諸軍事，除屯騎校尉。' },
        { id: 'kb4_s1_cjz_04', content: '建武二年，魏主托跋宏宍赭陽，景宗爲偏將，每衝堅陷陣，輒有斬獲，以勲除游擊將軍。' },
        { id: 'kb4_s1_cjz_05', content: '四年，太尉陳顯達督衆軍北圍馬圈，景宗從之，以甲士二千設伏，破魏援托跋英四萬人。' },
        { id: 'kb4_s1_cjz_06', content: '五年，髙祖爲雍州刺史，景宗深自結附，數請髙祖臨其宅。時天下方亂，髙祖亦厚加意焉。' }
      ],
      liuqingyuan: [
        { id: 'kb4_s1_lqy_01', content: '慶遠起家郢州主簿。齊初爲尙書都官郎、大司馬中兵參軍、建武將軍、魏興太守。郡遭暴水，流漂居民，吏請徙民杞城。慶遠曰："天降雨水，豈城之所知？吾聞江河長不過三日，斯亦何慮。"命築土而已。俄而水過，百姓服之。入爲長水校尉，出爲平北録事參軍、襄陽令。' }
      ],
      xiaoyingda: [
        { id: 'kb4_s1_xyd_01', content: '齊光祿大夫赤斧第五子也。少好勇使氣，起家冠軍。兄頴胄，齊建武末亦爲西中郎外兵參軍，俱在西府。齊季多難，頗不自安。' }
      ],
      xiahouxian: [
        { id: 'kb4_s1_xhx_01', content: '年十六，遭父艰，居丧哀毁，三年庐于墓。尝有雀三足飞来集其庐户，众咸异焉。服阕，刺史殷琰召补主簿。' },
        { id: 'kb4_s1_xhx_02', content: '宋太始初，琰举豫州叛，宋明帝遣辅国将军刘勔讨之，攻守连月，人情危惧，将请救于魏。详说琰曰："今日之举，本效忠节，若社稷有奉，便归身朝廷，何可屈身北面异域。且今魏氏之卒，近在淮次，一军未测去就，惧有异图。今若遣使归款，必厚相慰纳，岂止免罪而已。若谓不然，请充一介。"琰许之。详见勔曰："将军严围峭垒，矢刃如霜，城内愚徒，实同困兽，士庶惧诛，咸欲投魏。仆所以逾城归德，敢布腹心，愿将军弘旷荡之恩，垂霈然之惠，解围退舍，则皆相率而至矣。"勔许之。详曰："审尔，当如君言，而详请反命。"勔遣到城下，详呼城中人，语以勔辞，即日琰及众俱出，一州以全。勔为刺史，又补主簿。' },
        { id: 'kb4_s1_xhx_03', content: '顷之，为新汲令，治有异绩，刺史段佛荣班下境内，为属城表。转治中从事史，仍迁别驾。历事八将，州部称之。' },
        { id: 'kb4_s1_xhx_04', content: '齐明帝为刺史，雅相器遇，及辅政，招令出都，将大用之。每引详及乡人裴叔业日夜与语，详辄末略不酬。帝以问叔业，叔业告详，详曰："不为福始，不为祸先。"由此微有忤。出为征虏长史、义阳太守。' },
        { id: 'kb4_s1_xhx_05', content: '顷之，建安戍为魏所围，仍以详为建安戍主，带边城、新蔡二郡太守，并督光成、弋阳、汝邓五郡众赴之。详至建安，魏军引退。' },
        { id: 'kb4_s1_xhx_06', content: '先是，魏又于淮上置荆亭戍，常为寇掠，累攻不能御。详率锐卒攻之，贼众大溃，皆弃城奔走。' },
        { id: 'kb4_s1_xhx_07', content: '建武，征为游击将军，出为南中郎司马、南新蔡太守。' },
        { id: 'kb4_s1_xhx_08', content: '齐南康王为荆州，迁西中郎司马、新兴太守，便道先到江阳。时始安王遥光称兵京邑，南康王长史萧颖胄并未至，中兵参军刘山阳先在州，山阳副潘绍欲谋作乱，详伪呼绍议事，即于城门斩之，州府乃安。' },
        { id: 'kb4_s1_xhx_09', content: '迁司州刺史，辞不之职。' }
      ],
      caidaogong: [
        { id: 'kb4_s1_cdg_01', content: '齐文帝为雍州，召补主簿，仍除员外散骑常侍。后累有战功，迁越骑校尉、后军将军。建武末，出为辅国司马、汝南令。' }
      ],
      yanggongze: [
        { id: 'kb4_s1_ygz_01', content: '公则随父在军，年未弱冠，冒阵抱尸号哭，气绝良久，勔命还仲怀首。公则殓毕，徒步负丧归乡里，由此著名。历官员外散骑侍郎。梁州刺史范柏年板为宋熙太守，领白马戍主。氐贼李乌奴作乱，攻白马，公则固守经时，矢尽粮竭，陷于寇，抗声骂贼。乌奴壮之，更厚待焉，要与同事。公则伪许而图之，谋泄，单马逃归。梁州刺史王玄邈以事表闻，齐高帝下诏褒美。除晋寿太守，在任清洁自守。永明中，为镇北长流参军，迁扶风太守，母忧去官。雍州刺史陈显达起为宁朔将军，复领太守。' }
      ],
      dengyuanqi: [
        { id: 'kb4_s1_dyq_01', content: '少有胆干，膂力过人，性任侠，好赈施，乡里年少多附之。起家州辟议曹从事史，转奉朝请。雍州刺史萧缅板为槐里令，迁弘农太守、平西军事。' },
        { id: 'kb4_s1_dyq_02', content: '时西阳马荣率众缘江寇抄，商旅断绝，刺史萧遥欣使元起率众讨平之。迁武宁太守。' },
        { id: 'kb4_s1_dyq_03', content: '永元末，魏军逼义阳，元起自郡援焉。蛮帅田孔明附于魏，自号郢州刺史，寇掠三关，规袭夏口。元起率锐卒攻之，旬月之间，频陷六城，斩获万计，余党悉皆散走。仍戍三关。郢州刺史张冲督河北军事，元起累与冲书，求旋军。冲报书曰："足下在彼，吾在此，表里之势，所谓金城汤池，一旦舍去，则荆棘生焉。"乃表元起为平南中兵参军事。自是每战必捷，勇冠当时，敢死之士乐为用命者万有余人。' },
        { id: 'kb4_s1_dyq_04', content: '初，元起在荆州，刺史随王板元起为从事别驾庾荜坚执不可，元起恨之。' },
        { id: 'kb4_s1_dyq_05', content: '少时又尝至其西沮田舍，有沙门造之乞，元起问田人曰："有稻几何？"对曰："二十斛。"元起悉以施之，时人称其有大度。' }
      ],
      zhanghongce: [
        { id: 'kb4_s1_zhc_01', content: '幼以孝闻，母尝有疾，五日不食，弘策亦不食，母强为进粥，乃食母所余。遭母忧，三年不食盐菜，几至灭性。兄弟友爱，不忍暂离，虽各有室，常同卧起，世比之姜肱兄弟。起家齐邵陵王国常侍，迁奉朝请，西中郎江夏王行参军。' },
        { id: 'kb4_s1_zhc_02', content: '弘策与高祖年相辈，幼见亲狎，恒随高祖游处，每入室，常觉有云烟气，体辄肃然，弘策由此特敬高祖。' },
        { id: 'kb4_s1_zhc_03', content: '建武末，弘策从高祖宿，酒酣，徙席星下，语及时事，弘策因问高祖曰："纬象云何？国家故当无恙。"高祖曰："其可言乎？"弘策因曰："请言其兆。"高祖曰："汉北有失地气，浙东有急兵祥。今冬初，魏必动，若动则亡汉北。帝今久疾，多异议，万一伺衅，稽部且乘机而作，是亦无成，徒自驱除耳。明年都邑有乱，死人过于乱麻，齐之历数，自兹亡矣。梁、楚、汉当有英雄兴。"弘策曰："英雄今何在？为已富贵？为在草茅？"高祖笑曰："光武有云，安知非仆。"弘策起曰："今夜之言，是天意也，请定君臣之分。"高祖曰："舅欲效邓晨乎？"' },
        { id: 'kb4_s1_zhc_04', content: '是冬，魏军寇新野，高祖将兵为援，且受密旨，仍代曹武为雍州。弘策闻之心喜，谓高祖曰："夜中之言，独当验矣。"高祖笑曰："且勿多言。"弘策从高祖西行，仍叁帷幄，身亲劳役，不惮辛苦。' },
        { id: 'kb4_s1_zhc_05', content: '五年秋，明帝崩，遗诏以高祖为雍州刺史，乃表弘策为录事参军，带襄阳令。高祖睹海内方乱，有匡济之心，密为储备，谋猷所及，惟弘策而已。时长沙宣武王罢益州还，仍为西中郎长史，行郢州事。高祖使弘策到，陈计于宣武王，语在高祖纪。弘策因说王曰："昔周室既衰，诸侯力争，齐桓盖中人耳，遂能一匡九合，民到于今称之。齐德告微，四海方乱，苍生之命，会应有主。以郢州居中流之要，雍部有戎马之饶，卿兄弟英武，当今无敌，虎据两州，参分天下，纠合义兵，为百姓请命，废昏立明，易于反掌。如此则桓、文之业可成，不世之功可建，无为竖子所欺，取笑身后。雍州揣之已熟，愿善图之。"王颇不怿而无以拒也。' }
      ],
      zhengshaoshu: [
        { id: 'kb4_s1_zss_01', content: '郑绍叔。字仲明，荥阳开封人也。世居寿阳。祖琨，宋高平太守。绍叔少孤贫，年二十余，为安丰令，居县有能名。本州召补主簿，转治中从事史。时刺史萧诞以弟谌诛，台遣收兵卒至，左右莫不惊散，绍叔闻难，独驰赴焉。诞死，侍送丧柩，众咸称之。到京师，司空徐孝嗣见而异之，曰："祖逖之流也。"' },
        { id: 'kb4_s1_zss_02', content: '高祖临司州，命为中兵参军，领长流，因是厚自结附。高祖罢州还京师，谢遣宾客，绍叔独固请愿留。高祖谓曰："卿才幸自有用，我今未能相益，宜更思他涂。"绍叔曰："委质有在，义无二心。"高祖固不许，于是乃还寿阳。刺史萧遥昌苦引绍叔，终不受命，遥昌怒，将囚之，救解得免。' },
        { id: 'kb4_s1_zss_03', content: '及高祖为雍州刺史，绍叔间道西归，补宁蛮长史、校风太守。' },
        { id: 'kb4_s1_zss_04', content: '东昏既害朝宰，颇疑高祖。绍叔兄植为东昏直后，东昏遣至雍州，托以候绍叔，实潜使为刺客。绍叔知之，密以白高祖。植既至，高祖于绍叔处置酒宴之，戏植曰："朝廷遣卿见图，今日闲宴，是见取良会也。"宾主大笑。令植登临城隍，周观府署，士卒器械，舟舻战马，莫不富实。植退谓绍叔曰："雍州实力，未易图也。"绍叔曰："兄还，具为天子言之，兄若取雍州，绍叔请以此众一战。"送兄于南岘，相持恸哭而别。' }
      ],
      lvsengzhen: [
        { id: 'kb4_s1_lsz_01', content: '吕僧珍，字元瑜，东平范人也。世居广陵，起自寒贱。始童儿时，从师学，有相工历观诸生，指僧珍谓博士曰："此有奇声，封侯相也。"' },
        { id: 'kb4_s1_lsz_02', content: '年二十余，依宋丹阳尹刘秉。秉诛后，事太祖文皇为门下书佐。身长七尺五寸，容貌甚伟，在同类中少所亵狎，曹辈皆敬之。' },
        { id: 'kb4_s1_lsz_03', content: '太祖为豫州刺史，以为典签，带蒙令，居官称职。太祖领军，补主簿。妖贼唐瑀寇东阳，太守率众东讨，使僧珍知行军众局事。僧珍宅在建阳门东，自受命当行，每日由建阳门道，不过私室，太祖益以此知之。为丹阳尹，复命为郡督邮。' },
        { id: 'kb4_s1_lsz_04', content: '齐随王子隆出为荆州刺史，齐武以僧珍为子隆防阁，从之镇。' },
        { id: 'kb4_s1_lsz_05', content: '永明九年，雍州刺史王奂反，敕遣僧珍隶平北将军曹武西为典签，带新城令。' },
        { id: 'kb4_s1_lsz_06', content: '魏军寇沔北，司空陈显达出讨，一见异之，因屏人呼上座，谓曰："卿有贵相，后当不见减，努力为之。"' },
        { id: 'kb4_s1_lsz_07', content: '建武二年，魏大举南侵，五道，高祖率师援义阳，僧珍从在军中。长沙宣武王时为梁州刺史，魏围守连月，閒谍所在不通，义阳与雍州路断。高祖欲遣使至襄阳求梁州问，众皆惮莫敢行，僧珍固请充使，即日单舸上道，既至襄阳，督遣援军，且获宣武王书而反，高祖甚嘉之。事宁，补羽林监。' },
        { id: 'kb4_s1_lsz_08', content: '东昏即位，司空徐孝嗣管朝政，欲与共事，僧珍揣不久安，竟弗往。时高祖已临雍州，僧珍固求西归，得补邛令。既至，高祖命为中兵参军，委以心膂。僧珍阴养死士，归之者甚众。高祖颇招武猛，士庶响从，会者万余人。因命按行城西空地，将起数千閒屋，以为止舍，多伐林竹，沈于檀溪，积茅盖若山阜，皆不乏用。僧珍独悟其旨，亦私具橹数百张。' }
      ],
      zhangqi: [
        { id: 'kb4_s1_zq_01', content: '张齐。字子响，冯翊郡人，世居横桑，或云横桑人也。少有胆气，初事荆府司马垣历生，历生酗酒，遇下严酷，不甚礼之。历生罢官归吴郡张稷为荆府司马，齐复从之。稷甚相知重，以为心腹，虽家居细事皆以任焉。齐尽心事稷，无所辞惮。随稷归京师，稷为南兖州，又擢为府中兵参军，始委以军旅。' }
      ],
      fengdaogen: [
        { id: 'kb4_s1_fd_01', content: '冯道根，字巨基，广平酂人也。少失父，家贫，佣赁以养母。行得甘肥，不敢先食，必遽还以进母。年十三，以孝闻于乡里。郡召为主簿，辞不就。年十六，乡人蔡道斑为湖阳戍主，道斑攻蛮锡城，反为蛮所困。道根救之，匹马转战，杀伤甚多，道斑以免，由是知名。' },
        { id: 'kb4_s1_fd_02', content: '齐建武末，魏主托跋宏寇没南阳等五郡，明帝遣太尉陈显达率众复争之。师入汋均口，道根与乡里人士以牛酒候军，因说显达曰："汋均水迅急，难进易退，魏若守隘，则首尾俱急。不如悉弃船舰于酂城，方道步进，建营相次，鼓行而前，如是则立破之矣。"显达不听，道根犹以私属从军。及显达败，军人夜走，多不知山路，道根每及险要，辄停马指示之，众赖以全。寻为汋均口戍副。' },
        { id: 'kb4_s1_fd_03', content: '永元中，以母丧还家。' }
      ],
      xuchi: [
        { id: 'kb4_s1_xc_01', content: '摛幼而好学，及长，遍览经史，属文好为新变，不拘旧体。起家太学博士，迁左卫司马。' }
      ]
    },
    stage2: {
      wangmao: [
        { id: 'kb4_s2_wm_01', content: '髙祖義師起，茂私於張弘策，勸高祖迎和帝，高祖以爲不然，語在髙祖紀。' },
        { id: 'kb4_s2_wm_02', content: '髙祖發雍部，每遣茂爲前驅。師次郢城，茂進平加湖，破光子衿、吳子陽等，斬馘萬計，還獻捷于漢川。郢、魯旣平，從髙祖東下，復爲軍鋒。師次秣陵，東昬遣大將王珍國盛兵朱雀門，衆號二十萬，度航請戰。茂與曹景宗等會擊，大破之，縱兵追奔，積屍與航欄等，其赴淮死者不可勝筭。長驅至宣陽門。建康城平，以茂爲護軍將軍，俄遷侍中、領軍將軍。' }
      ],
      caojingzong: [
        { id: 'kb4_s2_cjz_01', content: '永元初，表爲冠軍將軍、竟陵太守。' },
        { id: 'kb4_s2_cjz_02', content: '及義師起，景宗聚衆，遣親人杜思沖勸先迎南康王於襄陽即帝位，然後出師，爲萬全計，高祖不從，語在高祖紀。' },
        { id: 'kb4_s2_cjz_03', content: '高祖至竟陵，以景宗與冠軍將軍王茂濟江圍郢城，自二月至于七月，城乃降。復帥衆前驅至南州，領馬步軍取建康，道次江寧，東昬將李居士以重兵屯新亭，是日選精騎一千至江寧行頓。景宗始至，安營未立，且師行日久，器甲穿弊，居士望而輕之，因鼓噪前薄景宗。景宗被甲馳戰，短兵裁接，居士棄甲奔走，景宗皆獲之。因鼓而前，徑至皁莢橋築壘。景宗又與王茂、吕僧珍掎角，破王珍國於大航。茂衝其中堅，應時而陷，景宗縱兵乗之。景宗軍士皆桀黠無賴，御道左右，莫非富室，抄掠財物，略奪子女，景宗不能禁。及髙祖入頓新城，嚴申號令，然後稍息。復與衆軍長圍六門。城平，拜散騎常侍、右衛將軍，封湘西縣侯，食邑一千六百户。仍遷持節、都督郢司二州諸軍事、左將軍、郢州刺史。' }
      ],
      liuqingyuan: [
        { id: 'kb4_s2_lqy_01', content: '髙祖之臨雍州，問京兆人杜惲求州綱，惲舉慶遠。髙祖曰："文和吾已知之，所問未知者耳。"因辟别駕從事史。齊方多難，慶遠謂所親曰："方今天下將亂，英雄必起，庇民定霸，其吾君乎。"因盡誠恊賛。及義兵起，慶遠常居帷幄爲謀主。中興元年，西臺選爲黃門郎，遷冠軍將軍、征東長史，從軍東下，身先士卒。髙祖行營壘，見慶遠頓舍嚴整，每歎曰："人人若是，吾又何憂。"建康城平，入爲侍中，領前軍將軍，帶淮陵、齊昌二郡太守。' }
      ],
      xiaoyingda: [
        { id: 'kb4_s2_xyd_01', content: '會東昬遣輔國將軍劉山陽爲巴西太守，道過荆州，密敕穎胄襲雍州。時髙祖已爲備矣，仍遣穎胄親人王天獸以書疑之。山陽至，果不敢入城。穎胄計無所出，夜遣錢塘人朱景思呼西中郎城局參軍席闡文、諮議參軍柳忱閉齋定議。闡文曰："蕭雍州蓄飬士馬，非復一日。江陵素畏襄陽人，人衆又不敵，取之必不可，制之，歳寒復不爲朝廷所容。今若殺山陽，與雍州舉事，立天子以令諸矦，則霸業成矣。山陽持疑不進，是不信我。今斬送天獸，則彼疑可釋。至而圖之，罔不濟矣。"忱亦勸焉。穎逹曰："善。"及天明，頴胄謂天獸曰："卿與劉輔國相識，今不得不借卿頭。"乃斬天獸以示山陽。山陽大喜，輕將步騎數百到州。闡文勒兵待於門，山陽車踰限而門闔，因執斬之，傳首髙祖。且以奉南康王之議來告，髙祖許焉。和帝即位，以穎胄爲假節、侍中、尚書令，領吏部尚書、都督行留諸軍事、鎭軍將軍、荆州刺史，留衛西朝。以穎逹爲冠軍將軍。及楊公則等率師隨髙祖，髙祖圍郢城，穎達會軍於漢口，與王茂、曹景宗等攻郢城，䧟之。隨髙祖平江州。髙祖進漂州，使與曹景宗先率馬步進趨江寧，破東昬將李居士，又下東城。' }
      ],
      xiahouxian: [
        { id: 'kb4_s2_xhx_01', content: '高祖义兵起，详与颖胄同创大举。' },
        { id: 'kb4_s2_xhx_02', content: '西台建，以详为中领军，加散骑常侍、南郡太守。凡军国大事，颖胄多决于详。' },
        { id: 'kb4_s2_xhx_03', content: '及高祖围郢城未下，颖胄遣卫尉席阐文如高祖军，详献议曰："穷壁易守，攻取埶难，顿甲坚城，兵家所忌。诚宜大弘经略，询纳群言。军主以下至于匹夫，皆令献其所见，尽其所怀，择善而从，选能而用，不以人废言，不以多罔寡。又须量我众力，度贼樵粮，窥彼人情，权其形势。若使贼人众而食少，故宜计日而守之；食多而力寡，故宜悉众而攻之；若使粮力俱足，非攻守所屈，便宜散金宝，纵反间，使彼智者不用，愚者怀猜，此魏武之所以定大业也。若三事未可，宜思变通，观于人情，计我粮谷。若德之所感，万里同符，仁之所怀，远迩归义，金帛素积，粮运又充，乃可以列围宽守，引以岁月，此王翦之所以克楚也。若围之不卒降，攻之未可下，间道不能行，金粟无人积，天下非一家，人情难可豫，此则宜更思变计矣。变计之道，实资英断，此之深要，难以纸宣。辄布言于席卫尉，特愿垂采。"高祖嘉纳焉。' },
        { id: 'kb4_s2_xhx_04', content: '顷之，颖胄卒。时高祖弟始兴王憺留守襄阳，详乃遣使迎憺，共参军国。' },
        { id: 'kb4_s2_xhx_05', content: '和帝加详禁兵，出入殿省，固辞不受。' },
        { id: 'kb4_s2_xhx_06', content: '迁侍中、尚书右仆射。' },
        { id: 'kb4_s2_xhx_07', content: '寻授使持节、抚军将军、荆州刺史，详又固让于憺。' }
      ],
      caidaogong: [
        { id: 'kb4_s2_cdg_01', content: '齐南康王为荆州，荐为西中郎中兵参军，加辅国将军。义兵起，萧颖以道恭旧将，素著威略，专相委任，迁冠军将军、西中郎咨议参军，仍转司马。中兴元年，和帝即位，迁右卫将军、巴西太守鲁休烈等自巴蜀连兵寇上明，以道恭持节督西讨诸军事。次土台，与贼合战，道恭潜以奇兵出其后，一战大破之，休烈等降于军门。' }
      ],
      yanggongze: [
        { id: 'kb4_s2_ygz_01', content: '顷之，荆州刺史巴东王子响构乱，公则率师进讨。事平，迁武宁太守。在郡七年，资无檐石，百姓便之。入为前军将军。南康王为荆州，复为西中郎中兵参军。领军将军萧颖胄恊同义举，以公则为辅国将军，领西中郎咨议参军，中兵如故，率众东下。时湘州行事张宝积发兵自守，未知所附。公则军及巴陵，仍回师南讨，军次白沙，宝积惧，释甲以俟焉。公则到，抚纳之，湘境遂定。和帝即位，授持节、都督湘州诸军事、湘州刺史。高祖勒众军次于沔口，曾山城主孙乐祖、郢州刺史张冲各据城未下，公则率湘府之众会于夏口。时荆州诸军受公则节度，虽萧颖达宗室之贵亦隶焉。累进征虏将军、左卫将军，持节、刺史如故。郢城平，高祖命众军即日俱下，公则受命先驱，径掩柴桑。江州既定，连旌东下，直造京邑。公则号令严明，秋毫不犯，所在莫不赖焉。大军至新林，公则自越城移屯领军府垒北楼与南掖门相对。尝登楼望战，城中遥见麾盖，纵神锋弩射之，矢贯胡床，左右皆失色。公则曰："几中吾脚。"谈笑如初。东昏夜选勇士攻公则栅，军中惊扰，公则坚卧不起，徐命击之，东昏军乃退。公则所领是湘溪人，性怯懦，城内轻之，以为易与。每出荡，辄先犯公则垒。公则奖厉军士，克获更多。及平，城内出者或被剥夺，公则亲率麾下，列阵东掖门，卫送公卿士庶，故出者多由公则营焉。进号左将军，持节、刺史如故，还镇南蕃。初，公则东下，湘部诸郡多未宾从，及公则还州，然后诸屯聚并散。' }
      ],
      dengyuanqi: [
        { id: 'kb4_s2_dyq_01', content: '义师起，萧颖胄与书招之。张冲待元起素厚，众皆惧冲，及书至，元起部曲多劝其还郢。元起大言于众曰："朝廷暴虐，诛戮宰臣，群小用命，衣冠道尽，荆、雍二州同举大事，何患不克。且我老母在西，岂容背本。若事不成，政受戮昏朝，幸免不孝之罪。"即日治严上道。' },
        { id: 'kb4_s2_dyq_02', content: '至江陵，为西中郎中兵参军，加冠军将军，率众与高祖会于夏口。高祖命王茂、曹景宗及元起等围城，结垒九里。张冲屡战辄大败，乃婴城固守。' },
        { id: 'kb4_s2_dyq_03', content: '和帝即位，授假节、冠军将军、平越中郎将、广州刺史，迁给事黄门侍郎，移镇南堂西渚。' },
        { id: 'kb4_s2_dyq_04', content: '中兴元年七月，郢城降，以本号为益州刺史，仍为前军，先定寻阳。及大军进至京邑，元起筑垒于建阳门，与王茂、曹景宗等合长围，身当锋镝。' },
        { id: 'kb4_s2_dyq_05', content: '建康城平，进号征虏将军。' },
        { id: 'kb4_s2_dyq_06', content: '大军既至京师，荜在城内甚惧。及城平，元起先遣迎荜，语人曰："庾别驾若为乱兵所杀，我无以自明。"因厚遗之。' }
      ],
      zhanghongce: [
        { id: 'kb4_s2_zhc_01', content: '义师将起，高祖夜召弘策、吕僧珍入宅定议，旦乃发兵。以弘策为辅国将军、军主，领万人督后部军事。西台建，为步兵校尉，迁车骑咨议参军。' },
        { id: 'kb4_s2_zhc_02', content: '及郢城平，萧颖达、杨公则诸将皆欲顿军夏口，高祖以为宜乘势长驱，直指京邑，以计语弘策，弘策与高祖意合。又访宁远将军庾域，域又同。乃命众军即日上道，缘江至建康，凡矶浦、村落，军行宿次，之顿处所，弘策逆为图测，皆在目中。' },
        { id: 'kb4_s2_zhc_03', content: '义师至新林，王茂、曹景宗等于大航方战，高祖遣弘策持节劳勉，众咸奋厉。是日仍破朱雀军。高祖入顿石头城，弘策屯门禁卫，引接士类，多全免。城平，高祖遣弘策与吕僧珍先入清宫，封检府库。于时城内珍宝委积，弘策申勒部曲，秋毫无犯。迁卫尉卿，加给事中。' }
      ],
      zhengshaoshu: [
        { id: 'kb4_s2_zss_01', content: '义师起，为冠军将军，改骁骑将军，侍从东下江州，留绍叔监州事，督江、湘二州粮运，事无阙乏。' }
      ],
      lvsengzhen: [
        { id: 'kb4_s2_lsz_01', content: '义兵起，高祖夜召僧珍及张弘策定议，明旦乃会众发兵，悉取檀溪材竹，装为艛舰，葺之以茅，并立办。众军将发，诸将果争橹，僧珍乃出先所具者，每船付二张，争者乃息。' },
        { id: 'kb4_s2_lsz_02', content: '高祖以僧珍为辅国将军、步兵校尉，出入卧内，宣通意旨。师及郢城，僧珍率所领顿偃月垒，俄又进据骑城。' },
        { id: 'kb4_s2_lsz_03', content: '郢州平，高祖进僧珍为前锋大将军。大军次江宁，高祖令僧珍与王茂率精兵先登赤鼻逻。其日，东昏将李居士与众来战，僧珍等要击大破之。乃与茂进军于白板桥筑垒，垒立，茂移顿越城，僧珍犹守白板。李居士密觇知众少，率锐卒万人直来薄城。僧珍谓将士曰："今力既不敌，不可与战，可勿遥射，须至堑里，当并力破之。"俄而皆越堑拔栅，僧珍分人上城，矢石俱发，自率马步三百人出其后，守隅者复逾城而下，内外齐击，居士应时奔散，获其器甲不可胜计。僧珍又进据越城，东昏大将王珍国列车为营，背淮而阵，王茂等众军击之，僧珍纵火车焚其营，即日瓦解。' },
        { id: 'kb4_s2_lsz_04', content: '建康城平，高祖命僧珍率所领先入清宫，与张弘策封检府库，即日以本官带南彭城太守，迁给事黄门侍郎，领武贵中郎将。' }
      ],
      zhangqi: [
        { id: 'kb4_s2_zq_01', content: '齐永元中，义师起，东昏徵稷归，都督宫城诸军事，居尚书省。义兵至，外围渐急，齐日造王珍国，阴与定计。计定，夜引珍国就稷造膝，齐自执烛以成谋。明，稷、珍国即东昏于内殿，齐手刃焉。' }
      ],
      fengdaogen: [
        { id: 'kb4_s2_fd_01', content: '闻高祖起义师，乃谓所亲曰："金革夺礼，古人不避，扬名后世，岂非孝乎？时不可失，吾其行矣。"率乡人子弟胜兵者，悉归高祖。时有蔡道福为将从军，高祖使道根副之，皆隶于王茂。茂伐沔，攻郢城，克加湖，道根常为前锋陷陈。会道福卒于军，高祖令道根并领其众。大军次新林，随王茂于朱雀航大战，斩获尤多。' }
      ]
    },
    stage3: {
      wangmao: [
        { id: 'kb4_s3_wm_01', content: '羣盜之燒神獸門也，茂率所領到東掖門應赴，爲盜所射，茂躍馬而進，羣盜反走。茂以不能式遏姦盜，自表解職，優詔不許。加鎭軍將軍，封望蔡縣公，邑二千三百户。' },
        { id: 'kb4_s3_wm_02', content: '是歳，江州刺史陳伯之舉兵叛，茂出爲使持節、散騎常侍、都督江州諸軍事、征南將軍、江州刺史，給鼓吹一部，南討伯之。伯之奔于魏。時九江新離軍宼，民思反業，茂務農省役，百姓安之。' },
        { id: 'kb4_s3_wm_03', content: '四年，魏侵漢中，茂受詔西討，魏乃班師。' },
        { id: 'kb4_s3_wm_04', content: '六年，遷尚書右僕射，常侍如故，固辤不拜，改授侍中、中衛將軍，領太子詹事。' },
        { id: 'kb4_s3_wm_05', content: '七年，拜車騎將軍，太子詹事如故。' },
        { id: 'kb4_s3_wm_06', content: '八年，以本號開府儀同三司、丹陽尹，侍中如故。時天下無事，髙祖方信仗文雅，茂心頗怏怏，侍宴醉後，每見言色，髙祖常宥而不之責也。' },
        { id: 'kb4_s3_wm_07', content: '十一年，進位司空，侍中、尹如故。茂辤京尹，改領中權將軍。' },
        { id: 'kb4_s3_wm_08', content: '明年，出爲使持節、散騎常侍、驃騎將軍、開府儀同三司之儀、都督江州諸軍事、江州刺史。視事三年，薨于州，時年六十。' },
        { id: 'kb4_s3_wm_09', content: '髙祖甚悼惜之，賻錢三十萬，布三百匹。詔曰："旌德紀勲，哲王令軌；念終追遠，前典明誥。故使持節、散騎常侍、驃騎將軍、開府儀同三司、江州刺史茂，識度淹廣，器宇凝正。爰初草昧，盡誠宣力，綢繆休戚，契闊屯夷。方賴謀猷，永隆朝寄，奄至薨殞，朕用慟于厥心。冝增禮數，式昭盛烈。可贈侍中、太尉，加班劎二十人，鼓吹一部。諡曰忠烈。"' },
        { id: 'kb4_s3_wm_10', content: '初，茂以元勳，髙祖賜以鍾磬之樂。茂在江州，夢鍾磬在格，無故自墮，心惡之。及覺，命奏樂，既成列，鍾磬在格，果無故編皆絶墮地。茂謂長史江詮曰："此樂天子所以惠勞臣也。樂旣極矣，能無憂乎？"俄而病，少日卒。' }
      ],
      caojingzong: [
        { id: 'kb4_s3_cjz_01', content: '天監元年，進號平西將軍，改封竟陵縣矦。景宗在州，鬻貨聚斂，於城南起宅，長堤以東，夏口以北，開街列門，東西數里，而部曲殘撗，民頗厭之。' },
        { id: 'kb4_s3_cjz_02', content: '二年十月，魏宼司州，圍刺史蔡道恭。時魏攻日苦，城中負板而汲，景宗望門不出，但耀軍遊獵而已。及司州城陷，爲御史中丞任昉所奏，髙祖以功臣寢而不治，徵爲䕶軍。既至，復拜散騎常侍、右衛將軍。' },
        { id: 'kb4_s3_cjz_03', content: '五年，魏托跋英宍鍾離，圍徐州刺史昌義之。髙祖詔景宗督衆軍援義之，豫州刺史韋叡亦預焉，而受景宗節度。詔景宗頓道人洲，待衆軍齊集俱進。景宗固啓，求先據邵陽洲尾，髙祖不聽。景宗欲專其功，乃違詔而進，值暴風卒起，頗有渰溺，復還守先頓。高祖聞之曰："此所以破賊也。景宗不進，蓋天意乎？若孤軍獨往，城不時立，必見狼狽。今得待衆軍同進，始大捷矣。"及韋叡至，與景宗進頓邵陽洲，立壘去魏城百餘步，魏連戰不能却，殺傷者十二三，自是魏軍不敢逼。景宗等器甲精新，軍儀甚盛，魏人望之奪氣。魏大將楊大眼對橋北岸立城，以通糧運，每牧人過岸伐芻藁，皆爲大眼所略。景宗乃募勇敢士千餘人，徑渡大眼城南數里築壘，親自舉築。大眼率衆來攻，景宗與戰破之，因得壘成。使別將趙草守之，因謂爲趙草城，是後恣芻牧焉。大眼時遣抄掠，輒反爲趙草所獲。先是，髙祖詔景宗等逆裝髙艦，使與魏橋等，爲火攻計。令景宗與叡各攻一橋，叡攻其南，景宗攻其北。六年三月，春水生，淮水暴長六七尺，叡遣所督將馮道根、李文釗、裴邃、韋寂等乗艦登岸，擊魏洲上軍盡殪。景宗因使衆軍皆鼓噪亂登諸城，呼聲震天地。大眼於西岸燒營，英自東岸棄城走，諸壘相次土崩，悉棄其器甲，争投水死，淮水爲之不流。景宗令軍主馬廣躡大眼至濊水上，四十餘里伏屍相枕。義之出逐英至洛口，英以匹馬入梁城。緣淮百餘里，屍骸枕藉，生擒五萬餘人，收其軍糧器械，積如山岳，牛馬驢騾不可勝計。景宗乃搜軍所得生口萬餘人，馬千匹，遣獻捷。髙祖詔還本軍。景宗振旅凱入，增封四百，并前爲二千户，進爵爲公。詔拜侍中、領軍將軍，給鼓吹一部。' },
        { id: 'kb4_s3_cjz_04', content: '景宗爲人自恃尚勝，每作書字有不觧，不以問人，皆以意造焉，雖公卿無所推揖。惟韋叡年長，且州里勝流，特相敬重，同讌御筵，亦曲躬謙遜，髙祖以此嘉之。景宗好内，妓妾至數百，窮極錦繡。性躁動，不能沈默，出行常欲褰車帷幔，左右輙諫以位望隆重，人所具瞻，不冝然。景宗謂所親曰："我昔郷里，騎快馬如龍，與年少輩數十騎，拓弓弦作霹靂聲，箭如餓鴟呌。平澤中逐麞數肋射之，渴飲其血，饑食其肉，甜如甘露漿，覺耳後風生，鼻頭出火，此樂使人忘死，不知老之將至。今來揚州作貴人，動轉不得，路行開車幔，小人輙言不可。閉置車中，如三日新婦。遭此邑邑，使人無氣。"爲人嗜酒好樂，臘月於宅中使作野虖逐除，遍往人家乞酒食。本以爲戲，而部下多剽輕，因弄人婦女，奪人財貨。髙祖頗知之，景宗乃止。髙祖數讌見功臣，共道故舊。景宗醉後謬忘，或誤稱下官，髙祖故縱之以爲笑樂。' },
        { id: 'kb4_s3_cjz_05', content: '七年，遷侍中、中衛將軍、江州刺史。赴任卒於道，時年五十二。詔賻錢二十萬，布三百匹，追贈征北將軍、雍州刺史、開府儀同三司，謚曰壯。' }
      ],
      liuqingyuan: [
        { id: 'kb4_s3_lqy_01', content: '城内嘗夜失火，禁中驚懼，髙祖時居宫中，悉斂諸鑰，問"柳侍中何在？"慶遠至，悉付之，其見任如此。霸府建，以爲太尉從事中郎。高祖受禪，遷散騎常侍、右衛將軍，加征虜將軍，封重安侯，食邑千户。母憂去職，以本官起之，固辭不拜。天監二年，遷中領軍，改封雲杜矦。四年，出爲使持節、都督雍梁南北秦四州諸軍事、征虜將軍、寧蠻校尉、雍州刺史。髙祖餞於新亭，謂曰："卿衣錦還郷，朕無西顧之憂矣。"七年，徴爲護軍將軍，領太子庶子，未赴職，仍遷通直散騎常侍、右衛將軍，領右驍騎將軍。至京都，值魏宿預城請降，受詔爲援，於是假節守淮隂，魏軍退。八年，還京師，遷散騎常侍、太子詹事、雍州大中正。十年，遷侍中、領軍將軍，給扶并鼓吹一部。十二年，遷安北將軍、寧蠻校尉、雍州刺史。慶遠重爲本州，頗厲淸節，士庶懷之。明年春，卒，時年五十七。詔曰："念徃篤終，前王令則；式隆寵數，列代恒規。使持節、都督雍梁南北秦四州郢州之竟陵司州之隨郡諸軍事、安北將軍、寧蠻校尉、雍州刺史、雲杜縣開國矦柳慶遠，器識淹曠，思懷通雅。爰初草昧，預屬經綸。遠自升平，契闊禁旅，重牧西藩，方弘治道，奄至殞喪，傷慟于懷。冝追榮命，以彰茂動。可贈侍中、中軍將軍、開府儀同三司，鼓吹、矦如故。謚曰忠惠。賻錢二十萬，布二百匹。"及喪還京師，髙祖出臨哭。' }
      ],
      xiaoyingda: [
        { id: 'kb4_s3_xyd_01', content: '建康城平，高祖以穎達爲前將軍、丹陽尹。上受禪，詔曰："念功惟德，列代所同；追遠懷人，彌與事篤。齊故侍中、丞相、尚書令穎胄，風格峻遠，器㝢深邵，淸猷盛業，問望斯歸。締構義始，肈基王迹，契闊屯夷，載形心事。朕膺大改物，光宅區宇，望岱觀河，永言號慟。可封巴東郡開國公，食邑三千户，本官如故。"贈穎孚右衛將軍，加穎達散騎常侍，以公事免。及大論功賞，封頴逹吳昌縣矦，邑千五百户。尋爲侍中，改封作唐矦，縣邑如故。遷征虜將軍、太子左衛率。御史中丞任昉奏曰：臣聞貧觀所取，窮視不爲。在於布衣窮居介然之行，尚可以激貪厲俗，惇此薄夫，況乎伐冰之家，争雞豚之利；衣繡之士，受賈人之服。風聞征虜將軍臣蕭頴逹啓乞魚軍稅，輒攝穎達宅督彭難當到臺辨問，列稱"尋生魚典稅，先本是鄧僧琰啓乞，限訖今年五月十四日。主人穎達于時謂非新立，仍啓乞接代僧琰，即蒙降許登稅，與史法論一年收直五十萬。"知其列狀，則與風聞符同，穎達即主。臣謹案：征虜將軍、太子左衛率、作唐縣開國矦臣穎達，備位大臣，預聞執憲，私謁亟陳，至公寂寞。屠中之志，異乎鮑肆之求；魚飱之資，不俟潛有之數。遂復申兹文二，追彼十一，風體若兹，凖繩斯在。陛下弘惜勲良，每爲曲法，臣當官執憲，敢不直繩。臣等參議，請以見事免穎達所居官，以矦還第。有詔原之。轉散騎常侍、左衛將軍。俄復爲侍中、衛尉卿。出爲信威將軍、豫章內史，加秩中二千石。治任威猛，郡人畏之。遷使持節、都督江州諸軍事、江州刺史，將軍如故。頃之，徴爲通直散騎常侍、右驍騎將軍。既處優閑，尤恣聲色，飲酒過度，頗以此傷生。九年，遷信威將軍、右衛將軍。是歳卒，年三十四。車駕臨哭，給東園祕器，朝服一具，衣一襲，錢二十萬，布二百匹，追贈侍中、中衛將軍，鼓吹一部，諡曰康。' }
      ],
      xiahouxian: [
        { id: 'kb4_s3_xhx_01', content: '天监元年，徵为侍中、车骑将军，论功封宁都县侯，邑二千户。详累辞让，至于恳切，乃更授右光禄大夫，侍中如故，给亲信二十人，改封丰城县公，邑如故。' },
        { id: 'kb4_s3_xhx_02', content: '二年，抗表致仕，诏解侍中，进特进。' },
        { id: 'kb4_s3_xhx_03', content: '三年，迁使持节、散骑常侍、车骑将军、湘州刺史。详善吏事，在州四载，为百姓所称。州城南流水有峻峰，旧老相传云"刺史登此山辄被代"因是历政莫敢至。详于其地起台榭，延僚属，以表损挹之志。' },
        { id: 'kb4_s3_xhx_04', content: '六年，征为侍中、右光禄大夫，给亲信二十人。未至，授尚书右仆射、金紫光禄大夫，侍中如故。道病卒，时年七十四。上为素服举哀，赠右光禄。' },
        { id: 'kb4_s3_xhx_05', content: '先是，荆府城局参军吉士瞻役万人浚仗库防火池，得金革带钩，隐起雕镂甚精巧，篆文曰"钖尔金钩，既公且侯。"士瞻，详兄女壻也。女窃以与详，详喜佩之，期岁而贵矣。' }
      ],
      caidaogong: [
        { id: 'kb4_s3_cdg_01', content: '天监初，论功封汉寿县伯，邑七百户，进号平北将军。三年，魏围司州，时城中众不满五千人，食裁支半岁，魏军攻之，昼夜不息，道恭随方抗御，皆应手摧却。魏乃作大车载土，四面俱前，欲以填堑，道恭辄于堑内列艨冲斗舰以待之，魏人不得进。又潜作伏道以决堑水，道恭载土豚塞之。相持百余日，前后斩获不可胜计。魏大造梯冲，攻围日急。道恭于城内作土山，厚二十余丈，多作大槊，长二丈五尺，施长刃，使壮士刺魏人登城者。魏军甚惮之，将退。会道恭疾笃，乃呼兄子僧勰、从弟灵恩及诸将帅谓曰："吾受国厚恩，不能破灭寇贼，今所苦转笃，势不支久。汝等当以死固节，无令吾没有遗恨。"又令取所持节谓僧勰曰："禀命出疆，凭此而已。即不得奉以还朝，方欲携之同逝，可与棺柩相随。"众皆流涕。其年五月卒。魏知道恭死，攻之转急。先是，朝廷遣郢州刺史曹景宗率众赴援，景宗到凿岘，顿兵不前。至八月，城内粮尽，乃陷。诏曰："持节、都督司州诸军事、平北将军、司州刺史、汉寿县开国伯道恭，器干详审，才志通烈。王业肇构，致力陜西，受任边垂，效彰所莅。寇贼凭陵，竭诚守御，奇谋间出，捷书日至。不幸抱疾，奄至殒丧，遗略所固，得移气朔。自非徇国忘已，忠果并至，何能身没守存，穷而后屈。言念伤悼，特兼常怀，追荣加等，抑有恒数。可赠镇西将军、使持节、都督、刺史、伯如故。并寻购丧榇，随宜资给。"八年，魏许还道恭丧，其家以女乐易之，葬襄阳。' }
      ],
      yanggongze: [
        { id: 'kb4_s3_ygz_01', content: '天监元年，进号平南将军，封宁都县侯，邑一千五百户。湘州寇乱累年，民多流散，公则轻刑薄敛，顷之，户口克复。为政虽无威严，然保己廉慎，为吏民所悦。湘俗单家以赂求州职，公则至，悉断之，所辟引皆州郡著姓，高祖班下诸州以为法。四年，征中护军。代至，乘二舸便发，賮送一无所取。仍迁卫尉卿，加散骑常侍。时朝廷始议北伐，以公则威名素著，至京师，诏假节先屯洛口。公则受命遘疾，谓亲人曰："昔廉颇、马援以年老见遗，犹自力请用。今国家不以吾朽懦，任以前驱，方于古人，见知重矣。虽临途疾苦，岂可僶俯辞事，马革还葬，此吾志也。"遂强起登舟，至洛口，寿春士女归降者数千户。魏豫州刺史薛恭度遣长史石荣等前锋接战，即斩石荣，逐北至寿春，去城数十里乃反。疾卒于师，时年六十一。高祖深痛惜之，即日举哀，赠车骑将军，给鼓吹一部，谥曰烈。' }
      ],
      dengyuanqi: [
        { id: 'kb4_s3_dyq_01', content: '天监初，封当阳县侯，邑一千二百户。又进号左将军，刺史如故，始述职焉。' },
        { id: 'kb4_s3_dyq_02', content: '初，义师之起，益州刺史刘季连持两端，及闻元起将至，遂发兵拒守，语在季连传。元起至巴西，巴西太守朱士略开门以待。先时蜀人多逃亡，至是出投元起，皆称起义应朝廷，师人新故三万余。元起在道久，军粮乏绝。或说之曰："蜀土政慢，民多诈疾，若捡巴西一部籍注，因而罚之，所获必厚。"元起然之。涪令李膺谏曰："使君前有严敌，后无继援，山民始附，于我观德，纠以刻薄，民必不堪，众心一离，虽悔无及，何必起疾可以济师。膺请出图之，不患资粮不足也。"元起曰："善，一以委卿。"膺退，率富民上军资米，俄得三万斛。' },
        { id: 'kb4_s3_dyq_03', content: '元起先遣将王元宗等破季连将李奉伯于新巴，齐晚盛于赤水，众进屯西平，季连始婴城自守。晚盛又破元起将鲁方达于斛石，士卒死者千余人，师众咸惧。元起乃自率兵稍进至蒋桥，去成都二十里，留辎重于郫。季连复遣奉伯、晚盛二千人间道袭郫，陷之，军备尽没。元起遣鲁方达之众救之，败而反，遂不能克。元起舍郫，迳围州城，栅其三面而堑焉。元起出巡视围栅，季连使精勇掩之，将至麾下，元起下舆持楯叱之，众辟易不敢进。时益部兵乱日久，民废耕农，内外苦饥，人多相食，道路断绝，季连计穷。会明年，高祖使赦季连罪，许之降，季连即日开城纳元起，元起送季连于京师。城开，郫乃降，斩奉伯、晚盛。' },
        { id: 'kb4_s3_dyq_04', content: '高祖论平蜀勋，复元起号平西将军，增封八百户，并前二千户。' },
        { id: 'kb4_s3_dyq_05', content: '元起以乡人庾黔娄为录事参军，又得荆州刺史萧遥欣故客蒋光济，并厚待之，任以州事。黔娄甚清洁，光济多计谋，并劝为善政。元起之克季连也，城内财宝无所私，勤恤民事，口不论财色。性本能饮酒，至一斛不乱，及是绝之，蜀土翕然称之。元起舅子梁矜孙性轻脱，与黔娄志行不同，乃言于元起曰："城中称有三刺史，节下何以堪之。"元起由此疏黔娄、光济，而治迹稍损。' },
        { id: 'kb4_s3_dyq_06', content: '在州二年，以母老乞归供养，诏许焉。征为右卫将军，以西昌侯萧深藻代之。' }
      ],
      zhanghongce: [
        { id: 'kb4_s3_zhc_01', content: '天监初，加散骑常侍，洮阳县侯，邑二千二百户。弘策尽忠奉上，知无不为，交友故旧，随才荐拔，搢绅皆趋焉。' },
        { id: 'kb4_s3_zhc_02', content: '时东昏余党初逢赦令，多未自安，数百人因运荻炬束仗，得入南北掖作乱，烧神兽门、总章观。前军司马吕僧珍直殿内，以宿卫兵拒破之。盗分入卫尉府，弘策方救火，盗潜后害之，时年四十七。高祖深恸惜焉。给第一区，衣一袭，钱十万，布百匹，蜡二百斤。诏曰："亡从舅卫尉，虑发所忽，殒身祅竖。其情理清贞，器识淹济，自藩升朝，契阔夷阻。加外氏凋衰，飨尝屡绝，兴感渭阳，情寄斯在。方赖忠勋，翼宣寡薄，报效无征，永言增恸。可赠散骑常侍、车骑将军，给鼓吹一部。谥曰愍。"弘策为人实厚通率，笃旧故。及居隆重，不以贵埶自高，故人宾客，礼接如布衣时。禄赐皆散之亲友。及其遇害，莫不痛惜焉。' }
      ],
      zhengshaoshu: [
        { id: 'kb4_s3_zss_01', content: '天监初，入为卫尉卿。绍叔忠于事上，外所闻知，纤毫无隐。每为高祖言事，善则曰"臣愚不及，此皆圣主之策。"其不善则曰"臣虑出浅短，以为其事当如是，殆以此误朝廷，臣之罪深矣。"高祖甚亲信之。' },
        { id: 'kb4_s3_zss_02', content: '母忧去职。绍叔有至性，高祖常使人节其哭。顷之，起为冠军将军、右军司马，封营道县侯，邑千户。俄复为卫尉卿，加冠军将军。以营道县户凋弊，改封东兴县侯，邑如故。初，绍叔少失父，事母及祖母以孝闻，奉兄恭谨。及居显要，禄赐所得及四方贡遗，悉归之兄室。' },
        { id: 'kb4_s3_zss_03', content: '三年，魏军围合肥，绍叔以本号督众军镇东关。事平，复为卫尉。既而义阳为魏所陷，司州移镇关南。四年，以绍叔为使持节、征虏将军、司州刺史。绍叔创立城隍，缮修兵器，广田积谷，招纳流民，百姓安之。性颇矜躁，以权埶自居，然能倾心接物，多所荐举，士类亦以此归之。' },
        { id: 'kb4_s3_zss_04', content: '六年，征为左将军，加通直散骑常侍，领司豫二州大中正。绍叔至家疾笃，诏于宅拜授，舆载还府，中医药，一日数至。七年，卒于府舍，时年四十五。高祖将临其殡，绍叔宅巷狭陋，不容舆驾，乃止。诏曰："追往念功，前王所笃；在诚惟旧，异代同规。通直散骑常侍、右卫将军、东兴县开国侯绍叔，立身清正，奉上忠恪，契阔藩朝，情绩显著。爰及义始，寔立茂勋，作牧疆境，效彰所莅。方申任寄，协赞心膂，奄至殒丧，伤痛于怀。宜加优典，隆兹宠命。可赠散骑常侍、护军将军，给鼓吹一部，东园秘器，朝服一具，衣一袭。凶事所须，随由资给。谥曰忠。"绍叔卒后，高祖尝潸然谓朝臣曰："郑绍叔立志忠烈，善则称君，过则归己，当今殆无其比。"其见赏惜如此。子贞嗣。' }
      ],
      lvsengzhen: [
        { id: 'kb4_s3_lsz_01', content: '高祖受禅，以为冠军将军、前军司马，封平固县侯，邑一千二百户。寻迁给事中、右卫将军。顷之，转左卫将军，加散骑常侍，入直秘书省，总知宿卫。' },
        { id: 'kb4_s3_lsz_02', content: '天监四年冬，大举北伐，自是军机多事，僧珍昼直中书省，夜还秘书。五年夏，又命僧珍率羽林劲勇出梁城。其年冬旋军，以本官领太子中庶子。' },
        { id: 'kb4_s3_lsz_03', content: '僧珍去家久，表求拜墓，高祖欲荣之，使为本州，乃授使持节、平北将军、南兖州刺史。僧珍在任，平心率下，不私亲戚。从父兄子先以贩葱为业，僧珍既至，乃弃业欲求州官。僧珍曰："吾荷国重恩，无以报效，汝等自有常分，岂可妄求叨越，但当速反葱肆耳。"僧珍旧宅在市北，前有督邮廨，乡人咸劝徙廨以益其宅。僧珍怒曰："督邮官廨也，置立以来，便在此地，岂可徙之益吾私宅。"姊适于氏，住在市西，小屋临路，与列肆杂处，僧珍常导从卤簿到其宅，不以为耻。' },
        { id: 'kb4_s3_lsz_04', content: '在州百日，征为领军将军，寻加散骑常侍，给鼓吹一部，直秘书省如先。僧珍有大勋，任总心膂，恩遇隆密，莫与为比。性甚恭慎，当直禁中，盛暑不敢解衣。每侍御座，屏气鞠躬，果食未尝举箸。尝因醉后取一柑食之，高祖笑谓曰："便是大有所进。"禄俸之外，又月给钱十万，其余赐赉不绝于时。' },
        { id: 'kb4_s3_lsz_05', content: '十年，疾病，车驾临幸，中使医药，日有数四。僧珍语亲旧曰："吾昔在蒙县，热病发黄，当时必谓不济。主上见语，卿有富贵相，必当不死，寻应自差。俄而果愈。今已富贵而复发黄，所苦与昔正同，必不复起矣。"竟如其言，卒于领军府舍，时年五十八。高祖即日临殡，诏曰："思旧笃终，前王令典；追荣加等，列代通规。散骑常侍、领军将军、平固县开国侯僧珍，器思淹通，识宇详济，竭忠尽礼，知无不为。与朕契阔，情兼屯泰。大业初构，茂勋克举；及居禁卫，朝夕尽诚。方参任台槐，式隆朝寄，奄致丧逝，伤恸于怀。宜加优典，以隆宠命。可赠骠骑将军、开府仪同三司，常侍、鼓吹、侯如故。给东园秘器，朝服一具，衣一袭，丧事所须，随由备办。谥曰忠敬侯。"高祖痛惜之，言为流涕。长子峻早卒，峻子淡嗣。' }
      ],
      zhangqi: [
        { id: 'kb4_s3_zq_01', content: '明年，高祖受禅，封齐安昌县侯，邑五百户。仍为宁朔将军、历阳太守。齐手不知书，目不识字，而在郡有清政，吏事甚修。' },
        { id: 'kb4_s3_zq_02', content: '天监二年，还为虎贲中郎将，未拜，迁天门太守，宁朔将军如故。' },
        { id: 'kb4_s3_zq_03', content: '四年，魏将王足寇巴、蜀，高祖以齐为辅国将军救蜀，未至，足退走，齐进戍南安。' },
        { id: 'kb4_s3_zq_04', content: '七年秋，使齐置大剑、寒冢二戍，军还益州。其年，迁武旅将军、巴西太守，寻加征远将军。' },
        { id: 'kb4_s3_zq_05', content: '十年，郡人姚景和聚合蛮蜒，抄断江路，攻破金井，齐讨景和于平昌，破之。初，南郑没于魏，乃于益州西置南梁州，州镇草创，皆仰益州取足。齐上夷獠义租，得米二十万斛。又立台传，兴冶铸，以应赡南梁。' },
        { id: 'kb4_s3_zq_06', content: '十一年，进假节、督益州外水诸军。' },
        { id: 'kb4_s3_zq_07', content: '十二年，魏将傅竖眼寇南安，齐率众距之，竖眼退走。' },
        { id: 'kb4_s3_zq_08', content: '十四年，迁信武将军、巴西梓潼二郡太守。是岁，葭萌人任令宗因众之患魏也，杀魏晋寿太守，以城归款。益州刺史鄱阳王遣齐帅众三万，督南梁州长史席宗范诸军迎令宗。' },
        { id: 'kb4_s3_zq_09', content: '十五年，魏东益州刺史元法僧遣子景隆来拒齐师，南安太守皇甫谌及宗范逆击之，大破魏军于葭萌，屠余城，魏将丘突、王穆等皆降。而魏更增傅竖眼兵，复来拒战，齐兵少不利，军引还，于是葭萌复没于魏。' },
        { id: 'kb4_s3_zq_10', content: '齐在益部累年，讨击蛮獠，身无宁岁。其居军中，能身亲劳辱，与士卒同其勤苦，自画顿舍城垒，皆委曲得其便，调给衣粮资用，人人无所困乏。既为物情所附，蛮獠亦不敢犯，是以威名行于庸、蜀。巴西郡居益州之半，又当东道冲要，刺史经过，军府远涉，多所穷匮。齐缘路聚粮食，种蔬菜，行者皆取给焉。其能济办，多此类也。' },
        { id: 'kb4_s3_zq_11', content: '十七年，迁持节、都督南梁州诸军事、智武将军、南梁州刺史。' },
        { id: 'kb4_s3_zq_12', content: '普通四年，迁信武将军、征西鄱阳王司马、新兴永宁二郡太守。未发而卒，时年六十七。追赠散骑常侍、右卫将军，赙钱十万，布百匹，谥曰壮。' }
      ],
      fengdaogen: [
        { id: 'kb4_s3_fd_01', content: '高祖即位，以为骁骑将军，封增城县男，邑二百户，领文德帅，迁游击将军。是岁，江州刺史陈伯之反，道根随王茂讨平之。' },
        { id: 'kb4_s3_fd_02', content: '天监二年，为宁朔将军、南梁太守，领阜陵城戍。初到阜陵，修城隍，远厈候，有如敌将至者，众颇笑之。道根曰："怯防勇战，此之谓也。"修城未毕，会魏将党法宗、傅竖眼率众二万奄至城下，道根堑垒未固，城中众少，皆失色。道根命广开门，缓服登城，选精锐二百人出与魏军战，败之。魏人见意闲，且战又不利，因退走。是时魏分兵于大小岘、东桑等连城相持，魏将高祖珍以三千骑军其间，道根率百骑横击破之，获其鼓角军仪。于是粮运既绝，诸军乃退。迁道根辅国将军、豫州刺史韦睿围合肥，克之。道根与诸军同进，所在有功。' },
        { id: 'kb4_s3_fd_03', content: '六年，魏攻钟离，高祖复诏睿救之。道根率众三千为睿前驱。至徐州，建计据邵阳洲筑垒掘堑，以逼魏城。道根能走马步地，计足以赋功，城隍立办。及淮水长，道根乘战舰攻断魏连桥数百丈，魏军败绩。益封三百户，进爵为伯。还迁云骑将军，领直阁将军，改封豫宁县，户邑如前。累迁中权中司马、右游击将军、武旅将军、历阳太守。' },
        { id: 'kb4_s3_fd_04', content: '八年，迁贞毅将军、假节、督豫州诸军事、豫州刺史，领汝阴太守。为政清简，境内安定。' },
        { id: 'kb4_s3_fd_05', content: '十一年，徵为太子右卫率。' },
        { id: 'kb4_s3_fd_06', content: '十三年，出为信武将军、宣惠司马、新兴永宁二郡太守。' },
        { id: 'kb4_s3_fd_07', content: '十四年，徵为员外散骑常侍、右游击将军，领朱衣直阁。' },
        { id: 'kb4_s3_fd_08', content: '十五年，为右卫将军。道根性谨厚，木讷少言，为将能检御部曲，所过村陌，将士不敢虏掠。每所征伐，终不言功，诸将𬤰哗争竞，道根默然而已。其部曲或怨非之，道根喻曰："明主自鉴功之多少，吾将何事。"高祖尝指道根示尚书令沈约曰："此人口不论勋。"约曰："此陛下之大树将军也。"处州郡，和理清静，为部下所怀。在朝廷虽贵显而性俭约，所居宅不营墙屋，无器服侍卫，入室则萧然如素士之贫贱者。当时服其清退，高祖亦雅重之。微时不学，既贵，粗读书，自谓少文，常慕周勃之器重。' },
        { id: 'kb4_s3_fd_09', content: '十六年，复假节、都督豫州诸军事、信武将军、豫州刺史。将行，高祖引朝臣宴别道根于武德殿，召工视道根，使图其形像。道根踧踖谢曰："臣所可报国家，惟余一死。但天下太平，臣恨无可死之地。"豫部重得道根，人皆喜悦。高祖每称曰："冯道根所在，能使朝廷不复忆有一州。"居州少时，遇疾，自表乞还朝，徵为散骑常侍、左军将军。既至疾甚，中使累加存问。' },
        { id: 'kb4_s3_fd_10', content: '普通元年正月卒，时年五十八。是日舆驾春祠二庙，既出宫，有司以闻。高祖问中书舍人朱异曰："吉凶同日，今行乎？"异对曰："昔柳庄寝疾，卫献公当祭，请于尸曰：有臣柳庄，非寡人之臣，是社稷之臣也。闻其死，请往。不释祭服而往，遂以襚之。道根未为社稷之臣，亦有劳王室，临之礼也。"高祖即幸其宅，哭之甚恸。诏曰："豫宁县开国伯、新除散骑常侍、领左军将军冯道根，奉上能忠，有功不伐，抚人留爱，守边难犯，祭遵、冯异、郭伋、李牧不能过也。奄致殒丧，恻怆于怀。可赠信威将军、左卫将军，给鼓吹一部，赙钱十万，布百匹。谥曰威。"子怀嗣。' }
      ],
      xuchi: [
        { id: 'kb4_s3_xc_01', content: '会晋安王讳出戍石头，高祖谓周舍曰："为我求一人文学俱长兼有行者，欲令与晋安游处。"舍曰："臣外弟徐摛，形质陋小，若不胜衣，而堪此选。"高祖曰："必有仲宣之才，亦不简其容貌。"以摛为侍读。后王出镇，仍补云麾府记室参军，又转平西府中记室。王移镇京口，复随府转为安北中录事参军，带郯令，以母忧去职。王为丹阳尹，起摛为秣陵令。' },
        { id: 'kb4_s3_xc_02', content: '普通四年，王出镇襄阳，摛固求随府西上，迁晋安王咨议参军。大通初，王总戎北伐，以摛兼宁蛮府长史，参赞戎政，教命军书，多自摛出。' },
        { id: 'kb4_s3_xc_03', content: '王入为皇太子，转家令，兼掌管记，寻带领直。摛文体既别，春坊尽学之，"宫体"之号，自斯而起。高祖闻之怒，召摛加让。及见，应对明敏，辞义可观，高祖意释。因问五经大义，次问历代史及百家杂说，末论释教。摛商较纵横，应答如响，高祖甚加叹异，更被亲狎，宠遇日隆。领军朱异不说，谓所亲曰："徐叟出入两宫，渐来逼我，须早为之所。"遂承閒白高祖曰："摛年老，又爱泉石，意在一郡，以自怡养。"高祖谓摛欲之，乃召摛曰："新安大好山水，任昉等并经为之，卿为我卧治此郡。"中大通三年，遂出为新安太守。至郡，为治清静，教民礼义，劝课农桑，期月之中，风俗便改。秩满，还为中庶子，加戎昭将军。' },
        { id: 'kb4_s3_xc_04', content: '是时临城公纳夫人王氏，即太宗妃之侄女也。晋宋已来，初婚三日，妇见舅姑，众宾皆列观。引春秋义云"丁丑，夫人姜氏至。戊寅，公使大夫宗妇觌用币。"戊寅，丁丑之明日，故礼官据此，皆云宜依旧贯。太宗以问摛，摛曰："仪礼云"质明赞见妇于舅姑。"杂记又云"妇见舅姑，兄弟姊妹皆立于堂下。"政言妇是外宗，未审娴令。所以停坐三朝，观其七德。舅延外客，姑率内宾，堂下之仪，以备盛礼。近代妇于舅姑，本有戚属，不相瞻看。夫人乃妃侄女，有异他姻，觌见之仪，谓应可略。"太宗从其议。除太子左卫率。' }
      ],
      wangsengbian: [
        { id: 'kb4_s3_wsb_01', content: '以天监中随父来奔，起家为湘东王国左常侍。王为丹阳尹，转府行参军。王出守会稽，兼中兵参军事。王为荆州，仍除中兵，在限内。' },
        { id: 'kb4_s3_wsb_02', content: '时武宁郡反，王命僧辩讨平之。迁贞威将军、武宁太守。寻迁振远将军、广平太守。秩满，还为王府中录事参军如故。王被徵为护军，僧辩兼府司马。王为江州，仍除云旗将军司马，守湓城。俄监安陆郡，无几而还。寻为新蔡太守，犹带司马，将军如故。王除荆州，为贞毅将军府咨议参军事，赐食千人。代柳仲礼为竟陵太守，改号雄信将军。' }
      ]
    },
    stage4: {
      houjing: [
        { id: 'kb4_s4_hj_01', content: '景遣董绍先率兵袭广陵，南兖州刺史南康嗣王会理以城降之。景以绍先为南兖州刺史。初，北兖州刺史定襄侯祗与湘潭侯退及前潼州刺史郭凤同起兵，将赴援。至是，凤谋以淮阴应景，祗等力不能制，并奔于魏。景以萧弄璋为北兖州刺史，州民发兵拒之。景遣厢公丘子英、直阁将军羊海率众赴援，海斩子英，率其军降于魏，魏遂据其淮阴。景又遣仪同于子悦、张大黑率兵入吴，吴郡太守袁君正迎降。子悦等既至，破掠吴中，多所调发，逼掠子女，毒虐百姓，吴人莫不怨愤，于是各立城栅拒守。是月，景移屯西洲，遣仪同任约为南道行台，镇姑熟。' },
        { id: 'kb4_s4_hj_02', content: '五月，高祖崩于文德殿。初，台城既陷，景先遣王伟、陈庆入谒高祖。高祖曰："景今安在？卿可召来。"时高祖坐文德殿，景乃入朝，以甲士五百人自卫，带剑升殿。拜讫，高祖问曰："卿在戎日久，无乃为劳？"景默然。又问："卿何州人，而敢至此乎？"景又不能对，从者代对。及出，谓厢公王僧贵曰："吾常据鞍对敌，矢刃交下，而意气安缓，了无怖心。今日见萧公，使人自慴，岂非天威难犯。吾不可再见之。"高祖虽外迹已屈，而意犹忿愤，时有事奏闻，多所谴却，景深敬惮，亦不敢逼。景遣军人直殿省内，高祖问制局监周石珍曰："是何物人？"对曰："丞相。"高祖乃谬曰："何物丞相？"对曰："是侯丞相。"高祖怒曰："是名景，何谓丞相！"是后每所徵求，多不称旨，至于御膳亦被裁抑，遂忧愤感疾而崩。景乃密不发丧，权殡于昭阳殿，自外文武咸莫知之。二十余日，升梓宫于太极前殿，迎皇太子即皇帝位。于是矫诏赦北人为奴婢者，冀收其力用焉。' },
        { id: 'kb4_s4_hj_03', content: '又遣仪同来亮率兵攻宣城，宣城内史杨华诱亮斩之。景复遣其将李贤明讨华，华以郡降。景遣仪同宋子仙等率众东次钱塘，新城戍戴僧易据县拒之。是月，景遣中军侯子鉴入吴军，收于子悦、张大黑还京诛之。时东扬州刺史临成公大连据州，吴兴太守张嵊据郡，自南陵以上皆各据守。景制命所行，惟吴南以西，南陵以北而已。六月，景以仪同郭元建为尚书仆射、北道行台，总江北诸军事，镇新秦。郡人陆缉、戴文举等起兵万余人，杀景太守苏单于，推前淮南太守文成侯宁为主以拒景。宋子仙闻而击之，缉等弃城走。景乃分吴郡海盐、胥浦二县为武原郡。至是，景杀萧正德于永福省。封元罗为西秦王，元景龙为陈留王，诸元子弟封王者十余人。以柳敬礼为使持节、大都督，隶大丞相，参戎事。景遣其中军侯子鉴、监行台刘神茂等军东讨，破吴兴，执太守张嵊父子送京师，景并杀之。景以宋子仙为司徒，任约为领军将军，尔朱季伯、叱罗子通、彭隽、董绍先、张化仁、于庆、鲁伯和、纥奚斤、史安和、时灵护、刘归义并为开府仪同三司。是月，鄱阳嗣王范率兵次栅口，江州刺史寻阳王大心要之西上。景出顿姑熟，范将裴之悌、夏侯威生以众降景。十一月，宋子仙攻钱塘，戴僧易降。景以钱塘为临江郡，富阳为富春郡。以王伟、元罗并为仪同三司。十二月，宋子仙、赵伯超、刘神茂进攻会稽，东扬州刺史临成公大连弃城走，遣刘神茂追擒之。景以裴之悌为使持节、平西将军、合州刺史，以夏侯威生为使持节、平北将军、南豫州刺史。是月，百济使至，见城邑丘墟，于端门外号泣，行路见者莫不洒泪。景闻之大怒，送小庄严寺禁止不听出入。' },
        { id: 'kb4_s4_hj_04', content: '大宝元年正月，景矫诏自加班剑四十人，给前后部羽葆鼓吹，置左右长史、长史从事中郎四人。前江都令祖皓起兵于广陵，斩景刺史董绍先，推前太子舍人萧勔为刺史，又结魏人为援，驰檄远近，将以讨景。景闻之大惧，即日率侯子鉴等出自京口，水陆并集。皓婴城拒守，景攻城，陷之。景车裂皓以徇，城中无少长皆斩之。以侯子鉴监南兖州事。是月，景召宋子仙还京口。四月，景以元思虔为东道行台，镇钱塘。以侯子鉴为南兖州刺史。文成侯宁于吴西乡起兵，旬日之间，众至一万，率以西上。景厢公孟振、侯子荣击破之，斩宁，传首于景。七月，景以秦郡为西兖州，阳平郡为北兖州。任约、卢晖略攻晋熙郡，杀鄱阳世子嗣。景以王伟为中书监。' },
        { id: 'kb4_s4_hj_05', content: '任约进军袭江州，江州刺史寻阳王大心降之。世祖时闻江州失守，遣卫军将军徐文盛率众军下武昌拒约。景又矫诏自进位为相国，封太山等二十郡为汉王，入朝不趋，赞拜不名，剑履上殿，如萧何故事。景以柳敬礼为护军将军，姜询义为相国左长史，徐洪为左司马，陆约为右长史，沈众为右司马。是月，景率舟师上皖口。十月，盗杀武林侯咨于广莫门。咨常出入太宗卧内，景党不能平，故害之。景又矫诏曰……以诏文呈太宗，太宗惊曰："将军乃有宇宙之号乎？"齐遣其将辛术围阳平，景行台郭元建率兵赴援，术退。徐文盛入资矶，任约率水军逆战，文盛大破之，仍进军大举口。时景屯于皖口，京师虚弱，南康王会理及北兖州司马成钦等将袭之。建安侯贲知其谋，以告景，景遣收会理与其弟祈阳侯通理、柳敬礼、成钦等，并害之。十二月，景矫诏封贲为竟陵王，赏发南康之谋也。是月，张彪起义于会稽，攻破上虞，景太守蔡台乐讨之，不能禁。至是，彪又破诸暨、永兴等诸县。景遣仪同田迁、赵伯超、谢答仁等东伐彪。' },
        { id: 'kb4_s4_hj_06', content: '二年正月，彪遣别将寇钱塘、富春，田迁进军与战，破之。景以王克为太师，宋子仙为太保，元罗为太，郭元建为太尉，张化仁为司徒，任约为司空，于庆为太子太师，时灵护为太子太保，纥奚斤为太子太傅，王伟为尚书左仆射，索超世为尚书右仆射。北兖州刺史萧邕谋降魏，事泄，景诛之。是月，世祖遣巴州刺史王珣等率众下武昌助徐文盛。任约以西台益兵告急于景。三月，景自率众二万西上援约。四月，景次西阳，徐文盛率水军邀战，大破之。景访知郢州无备，兵少，又遣宋子仙率轻骑三百袭陷之，执刺史方诸、行事鲍泉，尽获武昌军人家口。徐文盛等闻之大溃，奔归江陵。景乘胜西上。初，世祖遣领军王僧辩率众东下代徐文盛，军次巴陵，会景至，僧辩因坚壁拒之。景设长围，筑土山，昼夜攻击，不克，军中疾疫，死伤太半。世祖遣平北将军胡僧祐率兵二千人救巴陵。景闻，遣任约以精卒数千逆击僧祐，僧祐与居士陆法和退据赤亭以待之。约至与战，大破之，生擒约。景闻之，夜遁。以丁和为郢州刺史，留宋子仙、时灵护等助和守，以张化仁、阎洪庆守鲁山城。景还京师。王僧辩乃率众东下，次汉口，攻鲁山及郢城，皆陷之。自是众军所至皆捷。' },
        { id: 'kb4_s4_hj_07', content: '景乃废太宗，幽于永福省。作诏草成，逼太宗写之，至"先皇念神器之重，思社稷之固"，歔欷呜咽，不能自止。是日，景迎豫章王栋即皇帝位，升太极前殿，大赦天下，改元为天正元年。有回风自永福省，吹其文物皆倒折，见者莫不惊骇。初，景既平京邑，便有篡夺之志，以四方须定，且未自立。既巴陵失律，江、郢丧师，猛将外歼，雄心内沮，便欲伪僭大号，遂其奸心。其谋臣王伟云"自古移鼎，必须废立。"故景从之。其太尉郭元建闻之，自秦郡驰还，谏景曰："四方之师所以不至者，政为二宫万福。若遂行弑逆，结怨海内，事几一去，虽悔无及。"王伟固执不从。景乃矫栋诏，追尊昭明太子为昭明皇帝，豫章安王为安皇帝，金华敬妃为敬皇后，豫章国太妃王氏为皇太后，妃张氏为皇后。以刘神茂为司空，徐洪为平南将军，秦晃之、王晔、李贤明、徐永、徐珍国、宋长宝、尹思合并为仪同三司。景以哀太子妃赐郭元建，元建曰："岂有皇太子妃而降为人妾！"竟不与相见。' },
        { id: 'kb4_s4_hj_08', content: '十月壬寅夜，景遣其卫尉彭隽、王修纂奉酒于太宗曰："丞相以陛下处忧既久，故令臣等奉进一觞。"太宗知其将弑，乃大酣饮酒，既醉还寝，修纂以帊盛土加于腹，因崩焉。敛用法服，以薄棺密瘗于城北酒库。初，太宗久见幽絷，朝士莫得接觐，虑祸将及，常不自安。惟舍人殷不害后稍得入，太宗指所居殿谓之曰："庞涓当死此下。"又曰："吾昨夜梦吞土，卿试为思之。"不害曰："昔重耳馈块，卒反晋国，陛下所梦，将符是乎？"太宗曰："傥幽冥有徵，冀斯言不妄耳。"至是见弑，实以土焉。是月，景司空东道行台刘神茂、仪同尹思合、刘归义、王晔、云麾将军桑乾王元𫖳等据东阳归顺，仍遣元𫖳及别将李占、赵惠朗下据建德江口。尹思合收景新安太守元义，夺其兵。张彪攻永嘉，永嘉太守秦远降彪。十一月，景以赵伯超为东道行台，镇钱塘。遣仪同田迁、谢答仁等将兵东征神茂。' },
        { id: 'kb4_s4_hj_09', content: '景矫萧栋诏，自加九钖之礼，置丞相以下百官。陈备物于庭。忽有野鸟翔于景上，赤足丹觜，形似山鹊，贼徒悉骇，竞射之不能中。景以刘劝、戚霸、朱安王为开府仪同三司，索九升为护军将军。南兖州刺史侯子鉴献白獐。建康获白鼠以献，萧栋归之于景。景以郭元建为南兖州刺史，太尉、北行台如故。景又矫萧栋诏，追崇其祖为大将军，考为丞相。自加冕十有二旒，建天子旌旗，出警入跸，乘金根车，驾六马，备五时副车，置旄头云罕，乐舞八佾，钟虡宫悬之乐，一如旧仪。景又矫萧栋诏，禅位于己。于是南郊，柴燎于天，升坛受禅文物并依旧仪。以𮝵车床载鼓吹，橐驼负牺牲，辇上置筌蹄，垂脚坐。景所带剑水精标无故堕落，手自拾之。将登坛，有兔自前而走，俄失所在。又白虹贯日。景还升太极前殿，大赦，改元为太始元年。封萧栋为淮阴王，幽于监省。伪有司奏改"警跸"为"永吉"，避景名也。改梁律为汉律，改左民尚书为殿中尚书，五兵尚书为七兵尚书，直殿主帅为直寝。景三公之官动置十数，仪同尤多，或匹马孤行，自执羁绊。其左仆射王伟请立七庙，景曰："何谓为七庙？"伟曰："天子祭七世祖考，故置七庙。"并请七世之讳，敕太常具祭祀之礼。景曰："前世吾不复忆，惟阿爷名标。"众闻咸窃笑之。景党有知景祖名周者，自外悉是王伟制其名位，以汉司徒侯霸为始祖，晋徵士侯瑾为七世祖。于是追尊其祖周为大丞相，父标为元皇帝。' },
        { id: 'kb4_s4_hj_10', content: '十二月，谢答仁、李庆等至建德，攻元𫖳、李占栅，大破之，执𫖳、占送景，景截其手足徇之，经日乃死。景二年正月朔，临轩朝会。景自巴丘挫衄，军兵略尽，恐齐人乘衅与西师掎角，乃遣郭元建率步军趣小岘，侯子鉴率舟师向濡须，曜兵肥水，以示武威。子鉴至合肥，攻罗城，克之。郭元建、侯子鉴俄闻王师既近，烧合肥百姓邑居，引军退。子鉴保姑熟，元建还广陵。时谢答仁攻刘神茂，神茂别将王华、丽通并据外营降答仁。刘归义、尹思合等惧，各弃城走。神茂孤危，复降答仁。王僧辩军至芜湖，芜湖城主宵遁。景遣史安和、宋长贵等率兵二千助子鉴守姑熟，追田迁等还京师。是月，景党郭长献马驹生角。' },
        { id: 'kb4_s4_hj_11', content: '三月，景往姑熟巡视垒栅，又诫子鉴曰："西人善水战，不可与争锋。往年任约败绩，良为此也。若得马步一交，必当可破。汝但坚壁以观其变。"子鉴乃舍舟登岸，闭营不出。僧辩等遂停军十余日，贼党大喜，告景曰："西师惧吾之强，必欲遁逸，不击将失之。"景复命子鉴为水战之备。子鉴乃率步骑万余人渡洲，并引水军俱进。僧辩逆击，大破之，子鉴仅以身免。景闻子鉴败，大惧涕下，覆面引衾卧，良久方起，叹曰："误杀乃公！"僧辩进军次张公洲。景以卢晖略守石头，纥奚斤守捍国城，悉逼百姓及军士家累入台城内。僧辩焚景水栅入淮，至禅灵寺渚。景大惊，乃缘淮立栅，自石头至朱雀航。僧辩及诸将遂于石头城西步上连营立栅，至于落星墩。景大恐，自率侯子鉴、于庆、史安和、王僧贵等于石头东北立栅拒守，使王伟、索超世、吕季略守台城，宋长贵守延祚寺。遣掘王僧辩父墓，剖棺焚尸。王僧辩等进营于石头城北，景列阵挑战，僧辩率众军奋击，大破之。侯子鉴、史安和、王僧贵各弃栅走，卢晖略、纥奚斤并以城降。景既退败，不入宫，敛其散兵，屯于阙下，遂将逃窜。王伟揽辔谏曰："自古岂有叛天子。今宫中卫士尚足一战，宁可便走，弃此欲何所之？"景曰："我在北打贺拔胜，破葛荣，扬名河朔，与高王一种人。今来南渡大江，取台城如返掌。打邵陵王于北山，破柳仲礼于南岸，皆乃所亲见。今日之事，恐是天亡。乃好守城，我当复一决耳。"仰观石阙，逡巡叹息久之。乃以皮囊盛二子挂马鞍，与其仪同田迁、泛希荣等百余骑东奔。王伟委台城窜逸，侯子鉴等奔广陵。王僧辩遣侯瑱率军追景。' },
        { id: 'kb4_s4_hj_12', content: '景至晋陵，劫太守徐永东奔吴郡，进次嘉兴，赵伯超据钱塘拒之。景退还吴郡，达松江，而侯瑱军掩至，景众未阵，皆举幡乞降，景不能制，乃与腹心数十人单舸走，推堕二子于水，自沪渎入海。至壶豆洲，前太子舍人羊鲲杀之，送尸于王僧辩，传首西台。曝尸于建康巿，百姓争取屠脍噉食，焚骨扬灰，曾罹其祸者，乃以灰和酒饮之。及景首至江陵，世祖命枭之于巿，然后煮而漆之，付武库。景长不满七尺，而眉目疏秀。性猜忍，好杀戮，刑人或先斩手足，割舌劓，鼻经日方死。曾于石头立大舂碓，有犯法者，皆捣杀之，其惨虐如此。自篡立后，时著白纱帽，而尚披青袍，或以牙梳插髻。床上常设胡床及筌蹄，著靴垂脚坐。或匹马游戏于宫内及华林园弹射乌鸟。谋臣王伟不许轻出，于是郁怏，更成失志。所居殿常有鸺鹠鸟鸣，景恶之，每使人穷山野讨捕焉。普通中，童谣曰："青丝白马寿阳来。"后景果乘白马，兵皆青衣。所乘马每战将胜，辄踯躅嘶鸣，意气骏逸，其奔衄必低头不前。' },
        { id: 'kb4_s4_hj_13', content: '先是，丹阳陶弘景隐于华阳山，博学多识，尝为诗曰："夷甫任散诞，平叔坐谈空。不意昭阳殿，化作单于宫。"大同末，人士竞谈玄理，不习武事，至是景果居昭阳殿。天监中，有释宝志曰："掘尾狗子自发狂，当死未死啮人伤，须臾之间自灭亡，起自汝际死三湘。"又曰："山家小儿果攘臂，太极殿前作兽视。"掘尾狗子、山家小儿皆猴状。景遂覆陷都邑，毒害皇室。大同，太医令朱躭尝直禁省，无何，夜梦犬羊各一在御坐，觉而恶之，告人曰："犬羊者，非佳物也。今据御坐，将有变乎？"既而天子蒙尘，景登正殿焉。及景将败，有僧通道人者，意性若狂，饮酒噉肉，不异凡等。世间游行已数十载，姓名乡里，人莫能知。初言隐伏，久乃方验，人并呼为阇梨，景甚信敬之。景尝于后堂与其徒共射，时僧通在坐，夺景弓射景阳山，大呼云"得奴已。"景后又宴集其党，又召僧通。僧通取肉揾盐以进景。问曰："好不？"景答："所恨太咸。"僧通曰："不咸则烂臭。"果以盐封其尸。王伟，陈留人，少有才学，景之表启书檄，皆其所制。景既得志，规摹篡夺，皆伟之谋。及囚送江陵，烹于市，百姓有遭其毒者，并割炙食之。' }
      ],
      xuchi: [
        { id: 'kb4_s4_xc_01', content: '太清三年，侯景攻陷台城，时太宗居永福省，贼众奔入，举兵上殿，侍卫奔散，莫有存者。摛独嶷然侍立不动，徐谓景曰："侯公当以礼见，何得如此！"凶威遂折。侯景乃拜。由是常惮摛。' },
        { id: 'kb4_s4_xc_02', content: '太宗嗣位，进授左卫将军，固辞不拜。太宗后被幽闭，摛不获朝谒，因感气疾而卒，年七十八。' }
      ],
      wangsengbian: [
        { id: 'kb4_s4_wsb_01', content: '属侯景反，王命僧辩假节，总督舟师一万，兼粮馈赴援。才至京都，宫城陷没，天子蒙尘。僧辩与柳仲礼兄弟及赵伯超等先屈膝于景，然后入朝。景悉收其军实，而厚加绥抚。未几，遣僧辩归于竟陵，于是倍道兼行，西就世祖。世祖承制以僧辩为领军将军。' },
        { id: 'kb4_s4_wsb_02', content: '及荆、湘疑贰，军师失律，世祖又命僧辩及鲍泉统军讨之，分给兵粮，克日就道。时僧辩以竟陵部下犹未尽来，意欲待集，然后上顿。谓鲍泉曰："我与君俱受命南讨，而军容若此，计将安之？"泉曰："既禀庙筭，驱率骁勇，事等沃雪，何所多虑。"僧辩曰："不然，君之所言，故是文士之常谈耳。河东少有武干，兵刃又强，新破军师，养锐待敌，自非精兵一万，不足以制之。我竟陵甲士，数经行阵，已遣召之，不久当及。虽期日有限，犹可重申。欲与卿共入言之，望相佐也。"泉曰："成败之举，系此一行，迟速之宜，终当仰听。"世祖性严忌，微闻其言，以为迁延不肯去，稍已含怒。及僧辩将入，谓泉曰："我先发言，君可见系。"泉又许之。及见世祖，世祖迎问曰："卿已办乎？何日当发？"僧辩具对如向所言。世祖大怒，按剑厉声曰："卿惮行邪！"因起入内，泉震怖失色，竟不敢言。须臾，遣左右数十人收僧辩，既至，谓曰："卿拒命不行，是欲同贼，今唯有死耳。"僧辩对曰："僧辨食禄既深，忧责实重，今日就戮，岂敢怀恨，但恨不见老母。"世祖因斫之，中其左髀，流血至地。僧辨闷绝，久之方苏，即送付廷尉，并收其子侄，并皆系之。' },
        { id: 'kb4_s4_wsb_03', content: '会岳阳王军袭江陵，人情搔扰，未知其备，世祖遣左右往狱问计于僧辨，僧辨具陈方略，登即赦为城内都督。俄而岳阳奔退，而鲍泉力不能克长沙，世祖乃命僧辨代之。数泉以十罪，遣舍人罗重欢领齐仗三百人与僧辨俱发。既至，遣通泉云："罗舍人被令送王竟陵来。"泉甚愕然，顾左右曰："得王竟陵助我经略，贼不足平。"俄而重欢赍令书先入，僧辨从齐仗继进，泉方拂席坐而待之。僧辨既入，背泉而坐曰："鲍郎，卿有罪，令旨使我𬭲卿，勿以故意见待。"因语重欢出令，泉即下地，𬭲于床侧。僧辨仍部分将帅，并力攻围，遂平湘土。还复领军将军。' },
        { id: 'kb4_s4_wsb_04', content: '侯景浮江西寇，军次夏首，僧辨为大都督，率巴州刺史淳于量、定州刺史杜龛、宜州刺史王琳、郴州刺史裴之横等俱赴西阳。军次巴陵，闻郢州已没，僧辨因据巴陵城。世祖乃命罗州刺史徐嗣徽、武州刺史杜崱并会僧辨于巴陵。景既陷郢城，兵众益广，徒党甚锐，将进寇荆州。乃使伪仪同丁和统兵五千守江夏，大将宋子仙前驱一万造巴陵，景悉凶徒水步继进，于是缘江戍逻，望风请服，贼拓逻至于隐矶。僧辨悉上江渚米粮，并沈公私船于水。及贼前锋次江口，僧辨乃分命众军乘城固守，偃旗卧鼓，安若无人。翌日，贼众济江，轻骑至城下，问："城内是谁？"答曰："是王领军。"贼曰："语王领军，事势如此，何不早降。"僧辨使人答曰："大军但向荆州，此城自当非碍。僧辨百口在人掌握，岂得便降。"贼骑既去，俄尔又来，曰："我王已至，王领军何为不出与王相见邪？"僧辨不答。顷之，又执王珣等至于城下，珣为书诱说城内。景帅船舰并集北寺，又分入港中，登岸治道，广设毡屋，耀军城东陇上，芟除草芿，开八道向城，遣五十免头肉薄苦攻，城内同时鼓噪，矢石雨下，杀贼既多，贼乃引退。世祖又命平北将军胡僧祐率兵下援僧辩。是日，贼复攻巴陵，水步十处，鸣鼓吹唇，肉薄斫上，城中放木掷火爨礧石，杀伤甚多。午后贼退，乃更起长栅绕城，大列舸舰，以楼船攻水城西南角，又遣人渡洲岸，引牂柯推虾蟆车填堑，引障车临城，二日方止。贼又于舰上竖木桔槔，聚茅置火，以烧水栅，风势不利，自焚而退。既频战挫衄，贼帅任约又为陆法和所擒，景乃烧营夜遁，旋军夏首。世祖策勋行赏，以僧辩为征东将军、开府仪同三司、江州刺史，封长宁县公。' },
        { id: 'kb4_s4_wsb_05', content: '于是世祖命僧辩即率巴陵诸军，沿流讨景。师次郢城，步攻鲁山。鲁山城主支化仁，景之骑将也，率其党力战，众军大破之，化仁乃降。僧辩仍督诸军渡兵攻郢，即入罗城。宋子仙蚁聚金城拒守，攻之未克。子仙使其党时灵护率众三千，开门出战，僧辩又大破之，生擒灵护，斩首千级。子仙众退据仓门，带江阻险，众军攻之，频战不克。景既闻鲁山已没，郢镇复失罗城，乃率余众倍道归建业。子仙等困蹙，计无所之，乞输郢城，身还就景。僧辩伪许之，命给船百艘，以老其意。子仙谓为信然，浮舟将发，僧辩命杜龛率精勇千人，攀堞而上，同时鼓噪，掩至仓门。水军主宋遥率楼船暗江四面云合，子仙行战行走，至于白杨浦，乃大破之，生擒子仙送江陵。即率诸军进师九水。贼伪仪同范希荣、卢晖略尚据湓城，及僧辩军至，希荣等因挟江州刺史临城公弃城奔走。世祖加僧辩侍中、尚书令、征东大将军，给鼓吹一部。仍令僧辩且顿江州，须众军齐集，得时更进。顷之，世祖命江州众军悉同大举，僧辩乃表皇帝凶问，告于江陵，仍率大将百余人连名劝世祖即位。将欲进军，又重奉表，虽未见从，并蒙优答。事见本纪。' },
        { id: 'kb4_s4_wsb_06', content: '僧辩于是发自江州，直指建业。乃先命南兖州刺史侯瑱率锐卒轻舸袭南陵、鹊头等戍，至即克之。先是，陈霸先率众五万出自南江，前军五千，行至湓口。霸先倜傥多谋策，名盖僧辩，僧辩畏之。既至湓口，与僧辩会于白茅洲，登坛盟誓，霸先为其文曰："贼臣侯景，凶羯小胡，逆天无状，构造奸恶，违背我恩义，破掠我国家，毒害我生民，移毁我社庙。我高祖武皇帝灵圣聪明，光宅天下，劬劳兆庶，亭育万民，如我考妣，五十所载。哀景以穷见归，全景将戮之首，置景要害之地，崇景非次之荣。我高祖于景何薄？我百姓于景何怨？而景长戟强弩，陵蹙朝廷，锯牙郊甸，残食含灵，刳肝斮趾，不恹其快，曝骨焚尸，不谓为酷。高祖菲食卑宫，春秋九十，屈志凝威，愤终贼手。大行皇帝温严恭默，丕守鸿名，于景何有，复加忍毒。皇枝襁抱已上，缌功以还，穷刀极俎，既屠且鲙。岂有率土之滨，谓为王臣，食人之禾，饮人之水，忍闻此痛，而不悼心！况臣僧辩、臣霸先等荷称国藩湘东王臣讳泣血衔哀之寄，摩顶至足之恩，世受先朝之德，身当将帅之任，而不能沥胆抽肠，共诛奸逆，雪天地之痛，报君父之仇，则不可以禀灵含识，戴天履地。今日相国至孝玄感，灵武斯发，已破贼徒，获其元帅，正余景身，尚在京邑。臣僧辩与臣霸先协和将帅，同心共契，必诛凶竖，尊奉相国，嗣膺鸿业，以主郊祭。前途若有一功，获一赏。臣僧辩等不推己让物，先身帅众，则天地宗庙百神之灵，共诛共责。臣僧辩、臣霸先同心共事，不相欺负。若有违戾，明神殛之。"于是升坛歃血，共读盟文，皆泪下沾襟，辞色慷慨。' },
        { id: 'kb4_s4_wsb_07', content: '及王师次于南洲，贼帅侯子鉴等率步骑万余人于岸挑战，又以鸼䑠千艘并载土，两边悉八十棹，棹手皆越人，去来趣袭，捷过风电。僧辩乃麾细船，皆令退缩，悉使大舰夹泊两岸。贼谓水军欲退，争出趋之。众军乃棹大舰截其归路，鼓噪大呼，合战中江，贼悉赴水。僧辩即督诸军沿流而下，进军于石头之斗城，作连营以逼贼。贼乃横岭上筑五城拒守。侯景自出与王师大战于石头城北。霸先谓僧辩曰："丑虏游魂，贯盈已稔，逋诛送死，欲为一决。我众贼寡，宜分其势。"即遣强弩二千张攻贼西面两城，仍使结阵以当贼。僧辩在后麾军而进，复大破之。卢晖略闻景战败，以石头城降，僧辩引军入据之。景之退也，北走朱方，于是景散兵走告僧辩，僧辩令众将入据台城。其夜，军人采梠失火，烧太极殿及东西堂等。时军人卤掠京邑，剥剔士庶，民为其执缚者，袒衣不免。尽驱逼居民以求购赎，自石头至于东城，绿淮号叫之声，震响京邑，于是百姓失望。僧辩命侯瑱、裴之横率精甲五千东入讨景。僧辩收贼党王伟等二十余人，送于江陵。伪行台赵伯超自吴松江降于侯瑱，瑱时送至僧辩。僧辩谓伯超曰："赵公卿荷国重恩，遂复同逆。今日之事，将欲何如？"因命送江陵。伯超既出，僧辩顾坐客曰："朝廷昔唯知有赵伯超耳，岂识王僧辩。社稷既倾，为我所复，人之兴废，亦复何常。"宾客皆前称叹功德，僧辩瞿然，乃谬答曰："此乃圣上之威德，群帅之用命，老夫虽滥居戎首，何力之有焉。"于是逆寇悉平，京都克定。' }
      ]
    }
  },

  merchantEvents: [
    {
      id: 'merchant_001',
      month: 1,
      stage: '正月开业',
      narrative: '正月开市之日，你在草市的摊位前挂上了新的招牌。草市尉带着几个差役正在巡查，说是要核实各商贩的身份。旁边卖布的张老板偷偷告诉你，今年草市的税可能要涨。你看着面前空空的摊位，盘算着今年的生意该如何做起。',
      choices: [
        { text: '主动上前给草市尉送礼，求个方便', effects: { money: -80, reputation: 5, socialPoints: 10 } },
        { text: '老老实实等巡查，按规矩办事', effects: { money: -30, reputation: 10 } },
        { text: '暂时收摊，等巡查过了再来', effects: { money: -10, reputation: -5 } },
        { text: '打听消息，看看税会不会真的涨', effects: { money: -20, socialPoints: 5 } }
      ]
    },
    {
      id: 'merchant_002',
      month: 1,
      stage: '正月开业',
      narrative: '新年刚过，城里的行会就派人来通知，说是今年的行会会费要涨两成。来人还说，入了行会的商户能得到市令的庇护，遇到麻烦行会出面解决。你看着手里那点微薄的本钱，心里盘算着这笔钱花得值不值。',
      choices: [
        { text: '咬牙交会费，加入行会', effects: { money: -150, reputation: 15, socialPoints: 20 } },
        { text: '先交一半，余下的慢慢补', effects: { money: -80, reputation: 5, socialPoints: 10 } },
        { text: '婉言谢绝，做散商', effects: { money: 0, reputation: -5, risk: 15 } },
        { text: '找其他商户商量，一起砍价', effects: { money: -50, socialPoints: 15 } }
      ]
    },
    {
      id: 'merchant_003',
      month: 2,
      stage: '春季交易',
      narrative: '二月春暖，草市上的农副产品渐渐多了起来。你从乡下收了一批粮食，正打算运进城去卖。走到城门口，守关的差役拦住了你，说是要收关津税，而且比往常多了三成。差役还说，最近查得严，偷税漏税可是重罪。',
      choices: [
        { text: '按数交税，图个平安', effects: { money: -100, reputation: 5 } },
        { text: '偷偷塞点好处给差役', effects: { money: -50, reputation: -10, risk: 20 } },
        { text: '找小路绕过去，躲过这关', effects: { money: -20, reputation: -15, risk: 25 } },
        { text: '与差役讨价还价', effects: { money: -70, socialPoints: 5 } }
      ]
    },
    {
      id: 'merchant_004',
      month: 2,
      stage: '春季交易',
      narrative: '你在大市的摊位刚开张，就来了个衣着华贵的仆人，说是王姓士族府上的，要采买一批货物。仆人说话趾高气扬，还说他们家买东西从来不用交税，而且价格要比市价低两成。你心里清楚，士族确实有免税特权，但这价格压得也太低了。',
      choices: [
        { text: '忍痛答应，攀上士族这棵大树', effects: { money: -60, socialPoints: 25, reputation: 10 } },
        { text: '只答应免税，价格不能让', effects: { money: 40, socialPoints: 10 } },
        { text: '婉言谢绝，做普通人生意更省心', effects: { money: 0, socialPoints: -10 } },
        { text: '提出合作，帮他们家做生意', effects: { money: 20, socialPoints: 30, risk: 15 } }
      ]
    },
    {
      id: 'merchant_005',
      month: 3,
      stage: '春季交易',
      narrative: '三月上巳，江边举行流杯曲水之宴，城里的达官贵人都去凑热闹。你看准了这个商机，带着一批货物去江边卖。刚摆好摊，就有几个市令手下的差役过来，说这里不准摆摊，要收你的货。旁边的小贩告诉你，得给市令丞送点好处才行。',
      choices: [
        { text: '赶紧给差役塞钱，求个方便', effects: { money: 60, reputation: -5, risk: 10 } },
        { text: '收起货物，去别的地方卖', effects: { money: -20, reputation: 5 } },
        { text: '据理力争，说官府没规定这里不能摆摊', effects: { reputation: 10, risk: 20, money: 80 } },
        { text: '找个士族主顾撑腰', effects: { socialPoints: -10, money: 100 } }
      ]
    },
    {
      id: 'merchant_006',
      month: 3,
      stage: '春季交易',
      narrative: '最近城里闹钱荒，铜钱越来越少，很多交易都开始用粮食和布匹来折算。你收了一批绢丝，想换成铜钱进货，可跑了好几家钱庄都换不到。有人告诉你，有个地下的钱商能换到，但利息很高，而且风险不小。',
      choices: [
        { text: '去找地下钱商，高利换钱', effects: { money: 150, risk: 25, reputation: -10 } },
        { text: '干脆用绢丝直接进货', effects: { money: -50, reputation: 5 } },
        { text: '把绢丝存起来，等钱荒过去再说', effects: { money: -30, reputation: 3 } },
        { text: '找行会帮忙，看看有没有办法', effects: { socialPoints: -10, money: 80 } }
      ]
    },
    {
      id: 'merchant_007',
      month: 4,
      stage: '夏季经营',
      narrative: '四月天气渐热，你进了一批新鲜瓜果准备卖个好价钱。谁知道今年瓜果大丰收，价格跌得厉害。你看着堆得像小山一样的瓜果，心里急得团团转——再卖不出去就要烂掉了。旁边的摊主建议你降价促销，或者拉到乡下去换粮食。',
      choices: [
        { text: '降价促销，保本就行', effects: { money: -40, reputation: 10 } },
        { text: '拉到乡下去换粮食', effects: { money: -20, food: 80 } },
        { text: '做成蜜饯果脯，慢慢卖', effects: { money: 30, reputation: 15 } },
        { text: '硬扛着不降价，赌行情会涨', effects: { money: -80, risk: 30 } }
      ]
    },
    {
      id: 'merchant_008',
      month: 4,
      stage: '夏季经营',
      narrative: '市令带着一队差役突然来大市巡查，说是要查偷税漏税和无市籍经营。你心里咯噔一下——你的摊位虽然有市籍，但上个月有几笔大生意你没如实报税。市令已经走到你隔壁的摊位了，眼看就要到你这边。',
      choices: [
        { text: '主动上前承认少报了，补交税款', effects: { money: -120, reputation: 10 } },
        { text: '赶紧偷偷塞钱给差役，求他们通融', effects: { money: -80, reputation: -10, risk: 15 } },
        { text: '装作没事人一样，希望蒙混过关', effects: { risk: 35, reputation: -5 } },
        { text: '找行会的人来帮忙说情', effects: { socialPoints: -15, money: -50 } }
      ]
    },
    {
      id: 'merchant_009',
      month: 5,
      stage: '夏季经营',
      narrative: '端午将至，你进了一批粽子、菖蒲、五彩丝等应节货物，准备大赚一笔。谁知道谢家士族也开了个铺子卖同样的东西，而且价格比你还低。你打听了一下，人家不用交税，成本自然比你低。旁边的商户都叹气，说士族垄断生意，我们这些小商贩没法活。',
      choices: [
        { text: '也降价，赔本跟他们竞争', effects: { money: -100, reputation: 5, risk: 20 } },
        { text: '换个地方卖，避开他们的铺子', effects: { money: -30, reputation: -5 } },
        { text: '改卖别的货物，不跟他们正面竞争', effects: { money: -50, reputation: 3 } },
        { text: '联合其他商户，一起找行会反映', effects: { socialPoints: 20, money: -20, risk: 15 } }
      ]
    },
    {
      id: 'merchant_010',
      month: 5,
      stage: '夏季经营',
      narrative: '五月恶月，城里瘟疫传闻渐多，很多人都不敢出门做生意。你店里的生意也清淡了许多。这时有个药商来找你，说有一批避瘟的草药可以低价批给你，转手就能赚大钱。但你看着那草药，总觉得不太对劲，像是普通的野草。',
      choices: [
        { text: '低价买进，高价卖出，赚一笔再说', effects: { money: 200, reputation: -25, risk: 20 } },
        { text: '谨慎些，先找人看看药是不是真的', effects: { money: -30, reputation: 5 } },
        { text: '不做这笔生意，太缺德', effects: { reputation: 15, money: -10 } },
        { text: '告诉药商你要举报他卖假药', effects: { reputation: 20, risk: 15 } }
      ]
    },
    {
      id: 'merchant_011',
      month: 6,
      stage: '夏季经营',
      narrative: '六月酷暑，生意本就清淡，偏偏行会又通知要收什么"夏月冰炭钱"，说是给市令和官员们买冰消暑的。你心里暗骂，这苛捐杂税也太多了。可转念一想，若是不交，以后在这大市里恐怕就难混了。',
      choices: [
        { text: '忍气吞声交了', effects: { money: -60, reputation: 3 } },
        { text: '联合几个相熟的商户一起抗交', effects: { money: 0, socialPoints: 15, risk: 25 } },
        { text: '只交一半，看看情况再说', effects: { money: -30, reputation: -3, risk: 10 } },
        { text: '找个士族靠山，让他帮你免了', effects: { socialPoints: -20, money: -100 } }
      ]
    },
    {
      id: 'merchant_012',
      month: 6,
      stage: '夏季经营',
      narrative: '你听说北边的互市最近有一批海外香料到货，利润极高，但需要过所（通行证）才能去，而且路上不太平，常有盗匪出没。你看着手里攒了几年的本钱，心里痒痒的——这一趟要是做成了，顶你在大市干三年。但风险也确实不小。',
      choices: [
        { text: '想办法办过所，去互市碰碰运气', effects: { money: -200, risk: 35, reputation: 10 } },
        { text: '找个合伙人一起去，分摊风险', effects: { money: -100, socialPoints: 10, risk: 20 } },
        { text: '还是安心做大市的生意，稳当', effects: { money: 30, reputation: 5 } },
        { text: '托去互市的商人代买，抽成给他们', effects: { money: 40, risk: 15 } },
      ]
    },
    {
      id: 'merchant_013',
      month: 7,
      stage: '秋季备货',
      narrative: '七月初七乞巧节，城里的女子们纷纷出来买针线、香料、瓜果，街市上热闹非凡。你也准备了不少应节货物，准备大干一场。谁知道天公不作美，一大早就下起了大雨，街上行人顿时少了一大半。你看着满店的货物，心里直发愁。',
      choices: [
        { text: '冒雨摆摊，能卖多少是多少', effects: { money: 40, health: -10 } },
        { text: '降价甩卖，回笼资金要紧', effects: { money: 20, reputation: 5 } },
        { text: '干脆收摊，等天晴了再说', effects: { money: -20, health: 5 } },
        { text: '派小伙计送货上门，做熟客生意', effects: { money: 60, socialPoints: 10 } }
      ]
    },
    {
      id: 'merchant_014',
      month: 7,
      stage: '秋季备货',
      narrative: '你从一个外地商人那里进了一批便宜的丝绸，准备秋季大卖。谁知道货到了才发现，丝绸的质量比样品差远了，很多地方都有瑕疵。你去找那个商人理论，人家已经离开了建康，不知去向。你看着这批劣质丝绸，心里盘算着该怎么办。',
      choices: [
        { text: '如实告诉顾客，降价处理', effects: { money: -80, reputation: 15 } },
        { text: '混在好丝绸里卖，能蒙一个是一个', effects: { money: 60, reputation: -20, risk: 15 } },
        { text: '染个颜色掩盖瑕疵，再拿出去卖', effects: { money: 10, reputation: -5 } },
        { text: '改成香囊、帕子之类的小物件卖', effects: { money: 40, reputation: 10 } }
      ]
    },
    {
      id: 'merchant_015',
      month: 8,
      stage: '秋季备货',
      narrative: '八月秋高气爽，正是进货的好时节。你打算去乡下收一批粮食和布匹存起来，等冬天涨价了再卖。可走到半路，遇到了一伙劫道的盗匪。盗匪头目说，只要你交出一半的货物，就放你过去。你看着周围虎视眈眈的盗匪，心里盘算着该怎么办。',
      choices: [
        { text: '交出一半货物，保命要紧', effects: { money: -150, health: 5 } },
        { text: '跟他们拼了，拼死也要保住货物', effects: { health: -30, risk: 40, money: 100 } },
        { text: '谎称自己是某士族府上的，吓退他们', effects: { risk: 30, reputation: -10, money: 50 } },
        { text: '跟盗匪头目谈判，少交点行不行', effects: { money: -100, socialPoints: 5 } }
      ]
    },
    {
      id: 'merchant_016',
      month: 8,
      stage: '秋季备货',
      narrative: '今年的行会大会上，大伙推举你当行首，说是你为人公道，又会做生意。你心里清楚，当行首虽然风光，但要应付官府、协调商户、处理各种纠纷，麻烦事少不了。而且要是干得不好，还会惹人非议。',
      choices: [
        { text: '答应下来，好好干一番', effects: { reputation: 30, socialPoints: 25, money: -50 } },
        { text: '推荐别人，自己没那个本事', effects: { reputation: 5, socialPoints: -5 } },
        { text: '先答应试试，不行再辞', effects: { reputation: 15, socialPoints: 10, risk: 10 } },
        { text: '提出条件，要行会给补贴才干', effects: { money: 80, reputation: -5, socialPoints: 5 } }
      ]
    },
    {
      id: 'merchant_017',
      month: 9,
      stage: '秋季备货',
      narrative: '重阳佳节，城里的士族们都在举办登高宴会。你托了好多关系，终于拿到了一张宴会的入场帖子——据说宴会上有不少达官贵人，要是能攀上关系，以后做生意就方便多了。不过去参加宴会得备一份厚礼，还得做身像样的衣服，花费不小。',
      choices: [
        { text: '破费置装送礼，去宴会上结识贵人', effects: { money: -200, socialPoints: 30, reputation: 15 } },
        { text: '就穿平时的衣服去，礼轻情意重', effects: { money: -50, socialPoints: 10, reputation: -5 } },
        { text: '不去了，花这冤枉钱不值', effects: { money: 0, socialPoints: -10 } },
        { text: '找个借口把帖子转卖给别人', effects: { money: 80, reputation: -10 } }
      ]
    },
    {
      id: 'merchant_018',
      month: 9,
      stage: '秋季备货',
      narrative: '你做生意积攒了些本钱，有人劝你干脆花钱买个市籍，以后就在大市摆固定摊位，比在草市风吹日晒强多了。但办市籍花费不菲，而且大市的税也比草市高。不过话说回来，大市的客源好，生意也好做。你心里拿不定主意。',
      choices: [
        { text: '花钱办市籍，搬进大市', effects: { money: -200, reputation: 20 } },
        { text: '再等等，攒够了钱再说', effects: { money: 50, reputation: 3 } },
        { text: '草市挺好的，自由自在', effects: { money: 30, risk: 10 } },
        { text: '跟别人合用一个市籍，省钱', effects: { money: -100, reputation: -5, risk: 20 } }
      ]
    },
    {
      id: 'merchant_019',
      month: 10,
      stage: '年终结算',
      narrative: '十月小春，天气回暖，互市那边又来了一批北方的皮毛和药材，还有些海外来的香料琉璃。你看着这些稀罕货物，心里痒痒的——这些东西运回建康，能卖好几倍的价钱。但互市那边最近查得严，没有过所根本进不去，而且路上也不太平。',
      choices: [
        { text: '托关系办过所，亲自去互市进货', effects: { money: 150, risk: 30, reputation: 10 } },
        { text: '找有过所的商人代买，给他们抽成', effects: { money: 100, risk: 15 } },
        { text: '走小路偷渡过去，风险大但赚得多', effects: { money: 450, risk: 45, reputation: -15 } },
        { text: '不冒这个险，做稳妥生意', effects: { money: 40, reputation: 5 } }
      ]
    },
    {
      id: 'merchant_020',
      month: 10,
      stage: '年终结算',
      narrative: '最近城里铜钱越来越紧缺，很多店铺都开始只收粮食和布匹了。你手里还有不少铜钱，想趁现在还能用的时候赶紧花出去。可买什么好呢？有人说粮食会涨价，有人说绢丝保值，还有人说应该置地买房。你一时拿不定主意。',
      choices: [
        { text: '全买成粮食，囤起来等涨价', effects: { money: -200, food: 300, risk: 15 } },
        { text: '买成绢丝，既保值又方便携带', effects: { money: -200, reputation: 10 } },
        { text: '买间铺子，以后收租子', effects: { money: -250, reputation: 20 } },
        { text: '留着铜钱，说不定钱荒很快就过去了', effects: { risk: 25, reputation: 5 } }
      ]
    },
    {
      id: 'merchant_021',
      month: 11,
      stage: '年终结算',
      narrative: '十一月寒冬将至，城里的木炭、棉衣、暖炉等过冬物资价格飞涨。你早有准备，囤了不少货。可这天突然来了几个差役，说是官府要征调过冬物资给军队，价钱比市价低了一半还多。差役还说，这是公事，谁敢不从就是抗命。',
      choices: [
        { text: '忍痛交给官府，民不与官斗', effects: { money: -150, reputation: 10 } },
        { text: '偷偷藏起一部分，只交少量', effects: { money: -50, reputation: -10, risk: 25 } },
        { text: '找士族关系，让他们帮忙说情', effects: { socialPoints: -15, money: -80 } },
        { text: '据理力争，说价钱太低了', effects: { money: -100, reputation: 15, risk: 10 } }
      ]
    },
    {
      id: 'merchant_022',
      month: 11,
      stage: '年终结算',
      narrative: '你跟一个外地商人做了一笔大生意，对方说货到付款。可货到了之后，对方却推三阻四不肯给钱，还说你货物质量有问题。你打听到，那商人在当地有些势力，硬要的话恐怕要吃亏。可那笔钱可不是小数目，是你大半年的利润。',
      choices: [
        { text: '告到官府去，让官府做主', effects: { money: -50, reputation: 10, risk: 15 } },
        { text: '找行会帮忙出面调解', effects: { socialPoints: -10, money: 80 } },
        { text: '找些人去他店里闹，看他给不给', effects: { money: 120, reputation: -20, risk: 25 } },
        { text: '自认倒霉，以后不跟他做生意了', effects: { money: -180, reputation: 5 } }
      ]
    },
    {
      id: 'merchant_023',
      month: 12,
      stage: '年终结算',
      narrative: '腊月到了，该清账了。你翻着账本，发现有好几笔账要不回来。有的是老主顾欠的，有的是同乡借的，还有的是官员赊的。你心里清楚，这些账有些能要回来，有些怕是要成死账了。年关将近，你得想办法把这些账收回来。',
      choices: [
        { text: '挨家挨户去要，能要回多少是多少', effects: { money: 150, reputation: -5, socialPoints: -10 } },
        { text: '请人吃饭，在饭桌上提还钱的事', effects: { money: 90, socialPoints: 5 } },
        { text: '旧账先记着，来年再要', effects: { money: 0, socialPoints: 10, reputation: 5 } },
        { text: '打折收账，少要点也行', effects: { money: 80, socialPoints: 15 } }
      ]
    },
    {
      id: 'merchant_024',
      month: 12,
      stage: '年终结算',
      narrative: '年关将近，市令派人来通知，今年年底要评比"良商"，评上的可以减免明年的市税，还能优先选好摊位。你心里盘算着，自己这一年规规矩矩做生意，应该有希望。但听说评选要给市令送点礼，不然再规矩也评不上。',
      choices: [
        { text: '备一份厚礼送去，争取评上', effects: { money: -50, reputation: 20 } },
        { text: '就靠真本事，不搞歪门邪道', effects: { reputation: 15, risk: 20 } },
        { text: '送点薄礼，意思意思就行', effects: { money: -50, reputation: 5 } },
        { text: '评不评得上无所谓，顺其自然', effects: { reputation: 3, money: 0 } }
      ]
    }
  ],

  urbanRuralMobility: [
    {
      id: 'mobility_001',
      month: 2,
      stage: '春季交易',
      narrative: '这几年田里的收成越来越差，苛捐杂税却一年比一年重。你作为自耕农，守着那三十亩薄田，日子过得一天比一天艰难。听说城里的作坊和商铺都在招人，虽然辛苦，但好歹能挣现钱。你站在村口，望着通往建康城的大路，心里盘算着要不要去城里闯一闯。',
      choices: [
        { text: '变卖田产，举家迁进城去', effects: { money: 200, food: -100, reputation: -10, mobility: 30, location: 'urban', newIdentity: 'artisan', craftType: 'textile' } },
        { text: '先进城打几年工，攒够钱再回来', effects: { money: 80, food: -30, mobility: 20, location: 'urban', newIdentity: 'artisan', craftType: 'textile' } },
        { text: '还是守着田地吧，城里人生地不熟的', effects: { mobility: -10, food: 20 } },
        { text: '把田租给别人种，自己进城碰碰运气', effects: { money: 50, mobility: 25, risk: 15, location: 'urban', newIdentity: 'merchant' } }
      ]
    },
    {
      id: 'mobility_002',
      month: 5,
      stage: '夏季经营',
      narrative: '去年大旱，收成锐减，你欠地主的租子越积越多。地主家的管家说了，再还不上租子，就要收回土地，还要把你拉去做奴仆。你心里清楚，继续这样下去，迟早要变成地主的私产。听说城里机会多，只要肯吃苦就能活下去。你萌生了逃进城去的念头。',
      choices: [
        { text: '连夜逃走，进城去讨生活', effects: { money: -20, mobility: 35, risk: 25, dependency: -40, location: 'urban', newIdentity: 'artisan', craftType: 'textile' } },
        { text: '找亲戚借钱，先把租子还上', effects: { money: -100, socialPoints: -15, dependency: 10 } },
        { text: '跟地主求情，宽限些日子', effects: { dependency: 20, pressure: 15 } },
        { text: '干脆去地主家做工抵债', effects: { dependency: 30, freedom: -20, food: 20, newIdentity: 'slave' } }
      ]
    },
    {
      id: 'mobility_003',
      month: 3,
      stage: '春季交易',
      narrative: '你是地主家的佃户，已经在这里种了十年地。这些年你省吃俭用，终于攒了一点钱。你听说城里比乡下自由，只要有手艺肯吃苦，就能过上好日子。你想用这些钱赎身，然后去城里谋个出路。但你也知道，地主未必肯放你走。',
      choices: [
        { text: '拿出全部积蓄，跟地主谈赎身', effects: { money: -200, freedom: 30, mobility: 25, dependency: -50, location: 'urban', newIdentity: 'artisan', craftType: 'textile' } },
        { text: '趁地主不注意，偷偷逃进城去', effects: { money: -30, freedom: 20, mobility: 30, risk: 35, location: 'urban', newIdentity: 'artisan', craftType: 'metallurgy' } },
        { text: '再攒几年钱，等攒够了再说', effects: { money: 30, dependency: 5, mobility: -5 } },
        { text: '托人跟地主说情，少要点赎身钱', effects: { money: -80, socialPoints: -10, freedom: 15 } }
      ]
    },
    {
      id: 'mobility_004',
      month: 7,
      stage: '秋季备货',
      narrative: '你是张大户家的奴隶，每天天不亮就要干活，稍有懈怠就是一顿打骂。这样的日子你过够了，只想逃出去重新做人。听说城里有不少逃出来的奴隶，只要混进城里找份活干，主人家未必能找到你。但你也知道，被抓回来的下场会很惨。',
      choices: [
        { text: '趁夜色逃跑，混进城去', effects: { freedom: 40, mobility: 30, risk: 45, trust: -30, location: 'urban', newIdentity: 'artisan', craftType: 'porcelain' } },
        { text: '好好干活，求主人哪天开恩放免你', effects: { trust: 15, freedom: 5, pressure: 10 } },
        { text: '找机会偷点主人家的钱再跑', effects: { money: 100, freedom: 35, risk: 50, reputation: -20, location: 'urban', newIdentity: 'merchant' } },
        { text: '跟其他奴隶商量，一起逃跑', effects: { freedom: 30, mobility: 25, risk: 35, socialPoints: 10, location: 'urban', newIdentity: 'artisan', craftType: 'shipbuilding' } }
      ]
    },
    {
      id: 'mobility_005',
      month: 4,
      stage: '夏季经营',
      narrative: '你出身兵户，世代从军，本以为这辈子就只能在军营里混了。可这些年打仗越来越频繁，身边的弟兄死的死伤的伤，你心里也越来越怕。听说北方边境又要开战了，你不想去送死。有人告诉你，只要逃进城去，改个名字做点小生意，说不定能躲过这一劫。',
      choices: [
        { text: '趁夜逃离军营，进城隐姓埋名', effects: { freedom: 25, mobility: 30, risk: 40, militaryExp: -20, location: 'urban', newIdentity: 'artisan', craftType: 'metallurgy' } },
        { text: '花钱请人帮忙，看看能不能转成民籍', effects: { money: -300, freedom: 20, mobility: 15, risk: 20, location: 'urban', newIdentity: 'farmer' } },
        { text: '老实在军营待着，这是命', effects: { militaryExp: 10, freedom: -10, pressure: 15 } },
        { text: '找借口装病，争取留在后方', effects: { health: -10, risk: 15, militaryExp: 5 } }
      ]
    },
    {
      id: 'mobility_006',
      month: 9,
      stage: '秋季备货',
      narrative: '你在县衙里当差，虽然是个小吏，但好歹也算是吃公家饭的。可这些年官场越来越腐败，你夹在中间左右受气，钱没挣多少，气倒是受了不少。你做生意的朋友说，不如辞了吏职跟他一起经商，虽然辛苦点，但挣得多，也不用看别人脸色。',
      choices: [
        { text: '辞了吏职，下海经商', effects: { money: -50, freedom: 20, mobility: 25, socialPoints: -10, location: 'urban', newIdentity: 'merchant' } },
        { text: '一边当差一边做点小生意', effects: { money: 60, reputation: -10, risk: 20 } },
        { text: '还是当差稳当，不冒那个险', effects: { socialPoints: 5, mobility: -5 } },
        { text: '先请长假，试试做生意行不行', effects: { money: 30, mobility: 10, risk: 10, location: 'urban', newIdentity: 'merchant' } }
      ]
    },
    {
      id: 'mobility_007',
      month: 11,
      stage: '年终结算',
      narrative: '你在城里打拼了十几年，终于攒了些钱，开了间小铺子。可这些年城里的税越来越重，生意越来越难做，物价也涨得厉害。你想起乡下还有几亩薄田，不如回去当个田舍翁，虽然不富裕，但日子安稳。你站在铺子门口，望着街上人来人往，心里犹豫着。',
      choices: [
        { text: '关掉铺子，回乡下买田种地', effects: { money: 150, food: 100, mobility: -30, pressure: -20, location: 'rural', newIdentity: 'farmer' } },
        { text: '把铺子盘出去，在乡下做点小买卖', effects: { money: 100, mobility: -20, reputation: 10, location: 'rural', newIdentity: 'farmer' } },
        { text: '还是留在城里，再熬熬说不定就好了', effects: { money: 20, mobility: 5, pressure: 10 } },
        { text: '把铺子交给伙计打理，自己回乡下养老', effects: { money: -30, mobility: -15, health: 15, location: 'rural', newIdentity: 'farmer' } }
      ]
    },
    {
      id: 'mobility_008',
      month: 12,
      stage: '年终结算',
      narrative: '年关将至，你在城里的生意亏了本，还欠了不少债。债主天天上门催讨，你实在走投无路了。你想起乡下还有几门远房亲戚，不如先回去避避风头，等风头过了再说。可你也知道，回去容易，再想进城就难了。',
      choices: [
        { text: '连夜逃出城，回乡下去避风头', effects: { money: -50, mobility: -25, reputation: -15, pressure: -20, location: 'rural', newIdentity: 'tenant' } },
        { text: '变卖铺子还债，重新开始', effects: { money: 200, mobility: -10, reputation: 5, location: 'rural', newIdentity: 'farmer' } },
        { text: '找朋友借钱周转，再撑一撑', effects: { money: 100, socialPoints: -20, risk: 15 } },
        { text: '干脆躲起来，等债主找不到你就算了', effects: { money: -20, reputation: -20, mobility: -5, risk: 20 } }
      ]
    }
  ],

  textileEvents: [
    {
      id: 'textile_001',
      month: 1,
      stage: '蚕事筹备',
      narrative: '正月初，年节刚过，蚕事即将开始。你清点着去年的蚕具，发现不少需要添置更新。蚕匾、蚕架、缫丝车，样样都得花钱。邻人张阿婆养了一辈子蚕，经验丰富，或许可以请教。远处传来桑树枝头的雀鸣，提醒着你新一年的蚕事就要开始了。',
      choices: [
        { text: '全力置办：购置全套新蚕具', effects: { money: -80, craftSkill: 5, reputation: 5 } },
        { text: '量力而行：修补旧具，仅添必要之物', effects: { money: -30, craftSkill: 2 } },
        { text: '请教张阿婆：学习养蚕经验', effects: { money: -10, craftSkill: 10, socialPoints: 5 } },
        { text: '桑园劳作：开春修剪桑树', effects: { money: -5, food: 5, health: -5 } }
      ]
    },
    {
      id: 'textile_002',
      month: 2,
      stage: '养蚕缫丝',
      narrative: '二月春风，蚕卵开始孵化。你小心翼翼地将蚕种放在温暖之处，每日观察。刚孵化的蚁蚕细如发丝，需用嫩桑叶喂养。家中妻女齐上阵，轮流值守，生怕有半点差池。养蚕最是辛苦，日夜不得安歇，但想到秋后织成的绢匹，便觉得一切都值得。',
      choices: [
        { text: '全家齐上阵：日夜精心照料', effects: { money: -20, health: -10, craftSkill: 8 } },
        { text: '雇请帮工：请有经验的老妇帮忙', effects: { money: -50, craftSkill: 5 } },
        { text: '谨慎操作：严格控制温度湿度', effects: { money: -15, craftSkill: 10, reputation: 3 } },
        { text: '听天由命：顺其自然，节省人力', effects: { money: 0, risk: 15 } }
      ]
    },
    {
      id: 'textile_003',
      month: 3,
      stage: '养蚕缫丝',
      narrative: '三月，头蚕进入大眠期，再过几日就要上山结茧了。蚕宝宝食量骤增，你每日天不亮就要去采桑叶。桑园里的桑叶嫩绿可爱，却也经不住这么多蚕的消耗。有人建议你去邻村买些桑叶，也有人说可以减少蚕头数保质量。蚕病多发于此时，你需格外小心。',
      choices: [
        { text: '买叶保蚕：去邻村采购桑叶', effects: { money: -40, craftSkill: 5 } },
        { text: '择优汰劣：减少蚕头数保质量', effects: { money: -10, craftSkill: 8, reputation: 5 } },
        { text: '全家采桑：起早贪黑采摘桑叶', effects: { money: 0, health: -15, craftSkill: 3 } },
        { text: '清理蚕室：加强防疫，预防蚕病', effects: { money: -20, safety: 15, craftSkill: 5 } }
      ]
    },
    {
      id: 'textile_004',
      month: 4,
      stage: '养蚕缫丝',
      narrative: '四月，头蚕结茧完毕，白花花的蚕茧堆满了蚕匾。接下来便是缫丝——将蚕茧放入沸水中，抽出蚕丝。这是个技术活，水温、转速、手感都得恰到好处。你家娘子手艺精湛，只见她手指翻飞，蚕丝如银线般连绵不绝。缫好的丝绕在丝框上，熠熠生辉。',
      choices: [
        { text: '亲自操刀：精心缫丝，追求品质', effects: { money: 0, craftSkill: 12, health: -5 } },
        { text: '娘子主理：让内人负责缫丝', effects: { money: -10, craftSkill: 8, socialPoints: 5 } },
        { text: '雇请高手：请城中巧匠指导', effects: { money: -60, craftSkill: 15, reputation: 5 } },
        { text: '赶工出货：多缫快缫，追求数量', effects: { money: 20, reputation: -5, craftSkill: -3 } }
      ]
    },
    {
      id: 'textile_005',
      month: 5,
      stage: '织绢染色',
      narrative: '五月，你架起织机，开始织绢。机杼之声日夜不绝，梭子在经纬间穿梭如飞。你织的是平纹绢，紧密厚实，在市场上颇受欢迎。隔壁的王婆织的是绫罗，花纹精美，卖价是你的两倍。你心中盘算着，是不是也该学学织花纹的手艺？',
      choices: [
        { text: '精益求精：学习织绫技艺', effects: { money: -50, craftSkill: 15, reputation: 10 } },
        { text: '本分织绢：专心织好平纹绢', effects: { money: 30, craftSkill: 5 } },
        { text: '提高产量：日夜赶工多织绢', effects: { money: 50, health: -15, craftSkill: 3 } },
        { text: '拜师学艺：向王婆请教织绫', effects: { money: -30, craftSkill: 12, socialPoints: 10 } }
      ]
    },
    {
      id: 'textile_006',
      month: 5,
      stage: '养蚕缫丝',
      narrative: '五月天气湿热，二蚕正在饲养中。忽然有蚕儿出现病症，身体肿胀，体色发黑，不吃不动。你心头一紧——这是蚕病！若不及时处理，恐怕整批蚕都要遭殃。邻居张阿婆说她有祖传的草药方子，也有人说应该赶紧隔离病蚕，还有人说只能全部丢弃以免传染。',
      choices: [
        { text: '尝试草药：用张阿婆的药方试试', effects: { money: -20, luck: 10, safety: 10 } },
        { text: '紧急隔离：将病蚕全部清除隔离', effects: { money: -30, safety: 20, craftSkill: 5 } },
        { text: '求医问药：去城中请兽医来看', effects: { money: -50, safety: 15, reputation: 3 } },
        { text: '听天由命：或许只是小毛病', effects: { money: 0, risk: 25 } }
      ]
    },
    {
      id: 'textile_007',
      month: 6,
      stage: '养蚕缫丝',
      narrative: '六月，二蚕丰收。正如谚语所说，"豫章一年蚕四五熟，永嘉一年八熟"，江南气候温暖，蚕可多养。你清点着蚕茧，产量比头蚕还多。只是这多季蚕的丝质稍逊于头蚕，卖价也略低。有人建议你将二蚕丝织成粗布，专门卖给普通百姓，薄利多销。',
      choices: [
        { text: '织绢售卖：照常织绢，接受低价', effects: { money: 60, craftSkill: 5 } },
        { text: '织粗布：生产平民布帛', effects: { money: 80, reputation: -3, craftSkill: -2 } },
        { text: '留作自用：织成自家衣物', effects: { money: 20, food: 10, socialPoints: 5 } },
        { text: '三蚕计划：再接再厉养三蚕', effects: { money: -20, craftSkill: 8, health: -10 } }
      ]
    },
    {
      id: 'textile_008',
      month: 7,
      stage: '织绢染色',
      narrative: '七月，你将织好的白绢送到染坊染色。染坊里摆满了各色染缸，红的、蓝的、黄的、绿的，色彩斑斓。染料价格不菲，尤其是红色的茜草和紫色的紫草，贵比黄金。你盘算着，染成什么颜色最好卖？染深色耐脏，适合普通百姓；染浅色鲜亮，适合富贵人家。',
      choices: [
        { text: '染青色：最常见也最畅销', effects: { money: -30, reputation: 2 } },
        { text: '染红色：鲜艳夺目，利润丰厚', effects: { money: -60, reputation: 8, craftSkill: 5 } },
        { text: '染花色：套色印花，精工细作', effects: { money: -80, reputation: 15, craftSkill: 10 } },
        { text: '留白不染：白绢也有市场', effects: { money: 0, reputation: -2 } }
      ]
    },
    {
      id: 'textile_009',
      month: 7,
      stage: '成品销售',
      narrative: '七月七日七夕节，女子们纷纷穿针乞巧。你家娘子也在庭院中摆上香案，陈列瓜果，向织女乞求巧手。城中的女子都在比试针线活，这正是展示你家织品质地的好机会。若是能在乞巧会上脱颖而出，你家的绢布必定声名远扬。',
      choices: [
        { text: '支持娘子：精心准备乞巧用品', effects: { money: -20, socialPoints: 15, reputation: 10 } },
        { text: '举办赛巧：邀请邻里女子比试', effects: { money: -40, reputation: 20, socialPoints: 20 } },
        { text: '借机推销：在乞巧会上展示织品', effects: { money: -25, money: 60, reputation: 5 } },
        { text: '安静过节：不凑热闹', effects: { money: 0, socialPoints: -5 } }
      ]
    },
    {
      id: 'textile_010',
      month: 8,
      stage: '成品销售',
      narrative: '八月，户调的日子到了。按制，每户需缴纳绢二匹、绵三斤。官府的差役上门催收，态度严厉。你家中的绢布刚织好，本想卖个好价钱，如今却要先充户调。更有甚者，差役说今年的绢要按"上阔下狭"的新标准验收，不合规格的要退回重织。',
      choices: [
        { text: '依法缴纳：按数上交绢布', effects: { money: -60, reputation: 5 } },
        { text: '折钱缴纳：交钱代替实物', effects: { money: -80, reputation: 3 } },
        { text: '疏通关系：给差役些好处通融', effects: { money: -40, reputation: -5, socialPoints: 5 } },
        { text: '据理力争：质疑标准的合理性', effects: { money: -30, reputation: 8, risk: 10 } }
      ]
    },
    {
      id: 'textile_011',
      month: 9,
      stage: '成品销售',
      narrative: '九月，秋高气爽，正是布帛销售的旺季。你带着织好的绢布来到建康城中的大市。市场上绢价波动不定，今年因为蚕茧丰收，绢价比往年低了不少。有商人来批量收购，出价不高但可以一次清货；也有零散买家，出价高但卖得慢。你需要做出选择。',
      choices: [
        { text: '批量出货：低价卖给商人', effects: { money: 100, reputation: 3 } },
        { text: '零售为主：摆摊慢慢卖', effects: { money: 150, reputation: 8, socialPoints: 10 } },
        { text: '观望行情：等价格回升再卖', effects: { money: 0, risk: 15, luck: 5 } },
        { text: '换粮易物：用绢布换粮食', effects: { money: 50, food: 60 } }
      ]
    },
    {
      id: 'textile_012',
      month: 11,
      stage: '成品销售',
      narrative: '十一月，天气转寒，冬衣需求大增。你家的棉布和绢布成了抢手货。尤其是那些厚实的棉麻布，普通百姓最是需要。有商家找上门来，想要大量订购冬衣布料，出价合理但要求紧俏。你手头的存货有限，是接下订单赶工，还是先满足老主顾？',
      choices: [
        { text: '接下订单：日夜赶工完成', effects: { money: 120, health: -15, reputation: 5 } },
        { text: '优先老主顾：稳住长期客户', effects: { money: 80, reputation: 15, socialPoints: 15 } },
        { text: '提高价格：趁需求旺赚一笔', effects: { money: 150, reputation: -10 } },
        { text: '适量接单：不紧不慢慢慢来', effects: { money: 70, health: -5, reputation: 3 } }
      ]
    },
    {
      id: 'textile_013',
      month: 12,
      stage: '成品销售',
      narrative: '腊月，一年将尽。你盘点着一年的收成，计算着盈亏。今年蚕事还算顺利，虽然蚕病虚惊一场，但总体收成不错。只是绢价低迷，利润比预想的少。邻家的织户有的转行了，有的改织绫罗发了财。你望着窗外的飞雪，心中盘算着明年的打算。',
      choices: [
        { text: '总结经验：规划明年改进方向', effects: { money: 0, craftSkill: 10, reputation: 5 } },
        { text: '置办年货：好好过个年', effects: { money: -50, food: 30, socialPoints: 15 } },
        { text: '添置织机：为明年扩大生产做准备', effects: { money: -100, craftSkill: 5, reputation: 5 } },
        { text: '节俭过年：省下钱作本钱', effects: { money: 20, food: 10 } }
      ]
    }
  ],

  metallurgyEvents: [
    {
      id: 'metallurgy_001',
      month: 1,
      stage: '采矿备料',
      narrative: '正月，年节刚过，你便开始筹备新一年的冶铸之事。铁矿石、木炭、耐火泥，样样都得备齐。去年的铁矿质量一般，今年听说剡县的铁矿品质上佳，但路途遥远，运费不菲。有同行建议你合伙采矿，分摊成本，也有人说不如直接买现成的矿石省心。',
      choices: [
        { text: '采购好矿：去剡县买优质铁矿', effects: { money: -80, craftSkill: 8, reputation: 5 } },
        { text: '合伙采矿：与同行合伙开矿', effects: { money: -50, socialPoints: 15, risk: 10 } },
        { text: '本地采购：将就着用本地铁矿', effects: { money: -30, craftSkill: -3 } },
        { text: '检修炉窑：趁年初整修熔炉', effects: { money: -40, safety: 15, craftSkill: 5 } }
      ]
    },
    {
      id: 'metallurgy_002',
      month: 2,
      stage: '冶炼铸造',
      narrative: '二月，你点燃了新年的第一炉火。水排鼓风，呼呼作响，炉火熊熊燃烧。这水排是前辈杜诗发明的，利用水力鼓风，比人力省力多了，效率也高。你看着那旋转的水轮，心中盘算着是不是要改进一下水排的结构，让风力更猛，炉温更高。',
      choices: [
        { text: '精心调试：仔细调整水排风量', effects: { money: -20, craftSkill: 10, safety: 5 } },
        { text: '改进水排：尝试改良鼓风装置', effects: { money: -60, craftSkill: 15, risk: 10 } },
        { text: '按部就班：照常冶炼，不求变化', effects: { money: 10, craftSkill: 3 } },
        { text: '收徒传艺：带个徒弟打下手', effects: { money: -30, reputation: 10, craftSkill: 5 } }
      ]
    },
    {
      id: 'metallurgy_003',
      month: 3,
      stage: '冶炼铸造',
      narrative: '三月，你尝试用新学到的灌钢法炼钢。据说这是最新的技艺，将生铁液灌入熟铁中，让碳分渗入，炼成的钢既坚韧又锋利。陶弘景先生在《本草经集注》中记载了此法，你也是从他那里听来的。只是此法不易掌握，温度、比例都得恰到好处。',
      choices: [
        { text: '大胆尝试：亲自试验灌钢法', effects: { money: -50, craftSkill: 15, risk: 15 } },
        { text: '谨慎行事：先做小批量试验', effects: { money: -20, craftSkill: 8, safety: 10 } },
        { text: '请教高人：去茅山找陶弘景请教', effects: { money: -80, craftSkill: 20, reputation: 10 } },
        { text: '继续旧法：还是用老法子稳妥', effects: { money: 0, craftSkill: 2 } }
      ]
    },
    {
      id: 'metallurgy_004',
      month: 4,
      stage: '冶炼铸造',
      narrative: '四月，农事渐起，正是农具需求旺季。你打造的犁铧、锄头等农具，因为坚固耐用，在周边很有名气。有乡农上门订购，说是要赶春耕；也有商家想批量收购，运到别处去卖。你手头的铁料有限，是优先满足乡农的零单，还是接下商家的大单？',
      choices: [
        { text: '优先乡农：薄利多销，积累口碑', effects: { money: 60, reputation: 15, socialPoints: 10 } },
        { text: '接下大单：批量生产利润高', effects: { money: 120, health: -10, reputation: 3 } },
        { text: '提高产能：再加一炉赶工', effects: { money: 100, health: -15, safety: -10 } },
        { text: '介绍同行：自己忙不过来分给别人', effects: { money: 20, socialPoints: 20, reputation: 10 } }
      ]
    },
    {
      id: 'metallurgy_005',
      month: 5,
      stage: '冶炼铸造',
      narrative: '五月，天气渐热，炉前更是酷热难当。你正在熔炼一炉铁水，温度的控制至关重要。温度不够，铁水不纯；温度过高，又浪费燃料。你观察着火候，凭借多年的经验判断着炉温。有学徒问你如何判断温度，你说看火焰的颜色——青白色温度最高，暗红色则温度不够。',
      choices: [
        { text: '严格控温：耐心调整火力', effects: { money: -15, craftSkill: 12, safety: 10 } },
        { text: '高温快炼：提高效率节省时间', effects: { money: 30, safety: -15, craftSkill: -5 } },
        { text: '改进炉型：尝试改造熔炉结构', effects: { money: -70, craftSkill: 18, risk: 12 } },
        { text: '劳逸结合：天热减少工作量', effects: { money: -20, health: 10 } }
      ]
    },
    {
      id: 'metallurgy_006',
      month: 6,
      stage: '打磨修整',
      narrative: '六月，你正在锻造一把钢刀。这是为一位军爷定做的，要求吹毛断发、削铁如泥。你用灌钢法炼出的精钢，反复折叠锻打，千锤百炼。淬火是关键的一步，水温、时机都得拿捏准确。成不成，就看这最后一下了。你屏气凝神，将烧得通红的刀身迅速插入水中。',
      choices: [
        { text: '精心锻造：千锤百炼求极致', effects: { money: -30, craftSkill: 15, reputation: 15 } },
        { text: '创新淬火：尝试不同的淬火液', effects: { money: -40, craftSkill: 12, risk: 15 } },
        { text: '稳扎稳打：按老法子来', effects: { money: 50, craftSkill: 5 } },
        { text: '偷工减料：反正军爷也不懂', effects: { money: 80, reputation: -15, risk: 20 } }
      ]
    },
    {
      id: 'metallurgy_007',
      month: 7,
      stage: '成品出货',
      narrative: '七月，军中派人前来订购兵器。说是边境不宁，需要大量的刀枪剑戟。这可是大生意，但官府的订单价格压得很低，而且要求严格，稍有不合规格就要返工。接还是不接？接了，虽然利薄但量大，还能攀上官府的关系；不接，也不愁卖，但错失了一个机会。',
      choices: [
        { text: '接下订单：薄利多销，建立官方关系', effects: { money: 150, reputation: 20, socialPoints: 15 } },
        { text: '婉言谢绝：专心做民间生意', effects: { money: 60, reputation: 3 } },
        { text: '讨价还价：争取更好的价格', effects: { money: 100, reputation: 8, risk: 10 } },
        { text: '联合同行：大家一起接下订单', effects: { money: 80, socialPoints: 20, reputation: 10 } }
      ]
    },
    {
      id: 'metallurgy_008',
      month: 8,
      stage: '冶炼铸造',
      narrative: '八月，陶弘景先生派人来请你去茅山，说是要记载各种刀剑的炼制方法，写入他的著作中。能被陶先生记载，那可是天大的荣耀，将来你的名字也能跟着书流传后世。只是这一去要花费不少时日，铺子里的生意怎么办？',
      choices: [
        { text: '欣然前往：能被记载是莫大荣幸', effects: { money: -40, reputation: 30, craftSkill: 15, knowledge: 10 } },
        { text: '派徒弟去：让徒弟代表你去', effects: { money: -20, reputation: 10, craftSkill: 5 } },
        { text: '婉言谢绝：生意太忙走不开', effects: { money: 50, reputation: -5 } },
        { text: '书信交流：将技法写下来送去', effects: { money: -10, reputation: 15, craftSkill: 8 } }
      ]
    },
    {
      id: 'metallurgy_009',
      month: 9,
      stage: '成品出货',
      narrative: '九月秋收，又是一个农具需求高峰。你打造的镰刀、锄头等供不应求。市场上也出现了不少竞争者，有的价格比你低，有的质量比你差。你该如何应对？是降价竞争，还是提高品质走高端路线，抑或开发新的产品？',
      choices: [
        { text: '降价促销：薄利多销抢占市场', effects: { money: 80, reputation: -3, socialPoints: 5 } },
        { text: '提升品质：走精品路线', effects: { money: 60, reputation: 15, craftSkill: 10 } },
        { text: '开发新品：研制新式农具', effects: { money: -30, craftSkill: 15, reputation: 10 } },
        { text: '维持现状：老主顾就够了', effects: { money: 40, reputation: 2 } }
      ]
    },
    {
      id: 'metallurgy_010',
      month: 10,
      stage: '采矿备料',
      narrative: '十月秋高气爽，正是采矿的好时节。你带着几个徒弟进山采矿。山里的铁矿脉时富时贫，需要仔细勘探。有人发现了一处新矿苗，看起来品位不错，但位置偏僻，开采不易。是冒险开采新矿，还是继续在老矿点挖？',
      choices: [
        { text: '开采新矿：高风险高回报', effects: { money: -50, craftSkill: 10, risk: 20 } },
        { text: '稳妥为主：继续老矿点', effects: { money: -20, craftSkill: 3, safety: 10 } },
        { text: '雇人开采：请山民帮忙采矿', effects: { money: -60, reputation: 5, socialPoints: 10 } },
        { text: '收购矿石：从山民手中收购', effects: { money: -40, socialPoints: 15 } }
      ]
    },
    {
      id: 'metallurgy_011',
      month: 11,
      stage: '打磨修整',
      narrative: '十一月，你开始对全年生产的铁器进行品质检验。有些农具打磨不够光滑，有些兵器淬火不够均匀。你是个追求完美的人，看着这些瑕疵，心里总觉得不舒服。是回炉重造，还是打折处理，抑或就这样卖出去？',
      choices: [
        { text: '精益求精：不合格的全部回炉', effects: { money: -40, reputation: 20, craftSkill: 10 } },
        { text: '分级销售：优质优价，次品折价', effects: { money: 60, reputation: 8, craftSkill: 5 } },
        { text: '蒙混过关：反正普通人也看不出', effects: { money: 80, reputation: -10, risk: 15 } },
        { text: '送人情：将次品送给乡邻', effects: { money: 20, socialPoints: 25, reputation: 5 } }
      ]
    },
    {
      id: 'metallurgy_012',
      month: 12,
      stage: '成品出货',
      narrative: '腊月，一年将尽。你盘点着一年的收成，冶铸这行虽然辛苦，但收入还算不错。只是近来官府对铁器的管控越来越严，说是怕民间私造兵器。你听到一些风声，说是明年可能要实行盐铁官营。望着炉火映照下的铺子，你心中有些不安。',
      choices: [
        { text: '打听消息：去官府打探风声', effects: { money: -30, knowledge: 15, socialPoints: 10 } },
        { text: '增加农具：多做农具少做兵器', effects: { money: 0, safety: 15, reputation: 5 } },
        { text: '趁势涨价：最后关头多赚一笔', effects: { money: 100, reputation: -10, risk: 15 } },
        { text: '安心过年：船到桥头自然直', effects: { money: -30, food: 20, health: 10 } }
      ]
    }
  ],

  shipbuildingEvents: [
    {
      id: 'shipbuilding_001',
      month: 1,
      stage: '备料开工',
      narrative: '正月，新年刚过，你便开始筹备新船的建造。建康朱雀航是有名的造船基地，你家的船坞就在附近。造船最费木料，尤其是船体的龙骨，需要粗大笔直的上等木材。你派出去的人回报说，浙东的木材好但贵，本地产的便宜但质量稍逊。',
      choices: [
        { text: '采购良材：去浙东买上等木材', effects: { money: -100, craftSkill: 8, reputation: 10 } },
        { text: '本地取材：用本地木材降低成本', effects: { money: -40, craftSkill: -3, safety: -5 } },
        { text: '进山采购：亲自去山里挑选', effects: { money: -60, craftSkill: 5, health: -10 } },
        { text: '整修船坞：趁年初修船坞', effects: { money: -50, safety: 15, reputation: 3 } }
      ]
    },
    {
      id: 'shipbuilding_002',
      month: 2,
      stage: '备料开工',
      narrative: '二月，你来到建康朱雀航的造船工地。这里船坞林立，工匠云集，一派繁忙景象。朝廷的战船、商家的运输船、渔民的小渔船，都在这里建造。你结识了不少同行，有人邀请你加入行会，说是可以统一价格、互通有无；也有人劝你单干，自由自在。',
      choices: [
        { text: '加入行会：抱团取暖好处多', effects: { money: -30, socialPoints: 20, reputation: 10 } },
        { text: '保持独立：自由不受约束', effects: { money: 20, socialPoints: -5 } },
        { text: '观摩学习：去各家船坞参观', effects: { money: -20, craftSkill: 12, socialPoints: 10 } },
        { text: '招揽人才：挖几个好工匠来', effects: { money: -80, craftSkill: 10, reputation: -5 } }
      ]
    },
    {
      id: 'shipbuilding_003',
      month: 3,
      stage: '船体建造',
      narrative: '三月，新船正式开工。首先是打造龙骨——这是整条船的脊梁，必须结实牢固。你设计的是一艘运输船，船身宽大，吃水深，载货量大。有老工匠建议你将船底设计成尖底，破浪性能好；也有人说平底船稳当，适合内河航行。你该如何选择？',
      choices: [
        { text: '尖底设计：破浪性能优良', effects: { money: -40, craftSkill: 10, reputation: 8 } },
        { text: '平底设计：稳妥适合内河', effects: { money: -20, craftSkill: 5, safety: 5 } },
        { text: '借鉴沙船：综合两者优点', effects: { money: -60, craftSkill: 15, risk: 10 } },
        { text: '按老法子：造传统样式最保险', effects: { money: 0, craftSkill: 3 } }
      ]
    },
    {
      id: 'shipbuilding_004',
      month: 4,
      stage: '船体建造',
      narrative: '四月，运输船的船体已经成型。一根根船板密密排列，铁钉牢牢固定。你正在检查船板的拼接缝隙——这可是关乎船只是否漏水的大事。有工匠建议用桐油灰填缝，也有人说用麻丝和石灰更结实。你决定亲自试试不同的方法。',
      choices: [
        { text: '桐油灰缝：传统方法效果好', effects: { money: -30, craftSkill: 8, safety: 10 } },
        { text: '麻丝石灰：结实耐用成本低', effects: { money: -15, craftSkill: 5, safety: 8 } },
        { text: '双重保险：内层麻丝外层桐油', effects: { money: -45, craftSkill: 12, safety: 15 } },
        { text: '偷工减料：随便填填就行', effects: { money: 20, safety: -20, risk: 20 } }
      ]
    },
    {
      id: 'shipbuilding_005',
      month: 5,
      stage: '安装调试',
      narrative: '五月，漕运繁忙起来。朝廷需要大量船只运输粮食布帛，从江南到建康，再从建康到各地。有漕运官员找上门来，想要订购一批漕船，数量不少，但工期很紧。接下这单，不仅能赚一大笔，还能和官府搭上关系；只是工期太紧，怕赶不出来。',
      choices: [
        { text: '接下订单：加班加点赶工期', effects: { money: 200, health: -20, reputation: 15 } },
        { text: '量力而行：只接一半的量', effects: { money: 100, health: -10, reputation: 8 } },
        { text: '联合同行：大家一起分担', effects: { money: 80, socialPoints: 20, reputation: 10 } },
        { text: '婉言谢绝：稳扎稳打不冒进', effects: { money: 0, reputation: -3 } }
      ]
    },
    {
      id: 'shipbuilding_006',
      month: 6,
      stage: '船体建造',
      narrative: '六月，你开始建造一艘战船。这是为地方军队打造的，要求坚固快速，能搭载士兵和兵器。战船与运输船不同，需要考虑速度、机动性和战斗功能。你查阅古籍，又向老水军请教，设计了一种楼船样式，上层建有楼橹，可以瞭望射箭。',
      choices: [
        { text: '精心设计：打造精良战船', effects: { money: -60, craftSkill: 15, reputation: 20 } },
        { text: '按图索骥：照着旧船样造', effects: { money: -20, craftSkill: 5, safety: 5 } },
        { text: '请教水军：请老水兵指导', effects: { money: -40, craftSkill: 12, socialPoints: 15 } },
        { text: '简化设计：能浮起来就行', effects: { money: 40, reputation: -10, safety: -15 } }
      ]
    },
    {
      id: 'shipbuilding_007',
      month: 7,
      stage: '安装调试',
      narrative: '七月，有渔民前来订购渔船。渔船虽然小，但需求量大，是笔稳定的生意。渔民的要求很实际：船要稳、要灵活、要能装下渔网和渔获。你设计了一种小舢板，轻便灵活，适合在内河和近海捕鱼。有老渔民建议你在船首加个挡板，防止浪打进来。',
      choices: [
        { text: '采纳建议：改进渔船设计', effects: { money: -20, craftSkill: 10, reputation: 10 } },
        { text: '批量生产：造一批渔船待售', effects: { money: -50, money: 100, craftSkill: 5 } },
        { text: '定制为主：按渔民要求定做', effects: { money: 60, socialPoints: 15, craftSkill: 8 } },
        { text: '租赁模式：租给渔民收租金', effects: { money: 30, risk: 10, socialPoints: 10 } }
      ]
    },
    {
      id: 'shipbuilding_008',
      month: 8,
      stage: '试航交付',
      narrative: '八月，新造的运输船要下水试航了。你邀请了船主和几位老船工，一同登船试航。船行秦淮河上，速度平稳，转向灵活，看起来一切顺利。可刚到江心，船底突然渗漏，河水汩汩地往船舱里灌。众人大惊失色，你也心头一紧。',
      choices: [
        { text: '沉着应对：组织人手堵漏返航', effects: { money: -30, reputation: 10, safety: 15 } },
        { text: '弃船保命：大家先上岸再说', effects: { money: -100, reputation: -15, safety: 5 } },
        { text: '查明原因：靠岸后仔细检查', effects: { money: -50, craftSkill: 15, reputation: 5 } },
        { text: '推卸责任：说是船主自己弄的', effects: { money: -20, reputation: -25, socialPoints: -20 } }
      ]
    },
    {
      id: 'shipbuilding_009',
      month: 9,
      stage: '试航交付',
      narrative: '九月，侯景之乱的消息传来，朝野震动。朝廷紧急征召船只，运送军队和粮草。官府的人找上门来，说是要征用你船坞里所有已完工和在建的船只，还说要征召所有工匠从军造船。这可是飞来横祸，你该如何应对？',
      choices: [
        { text: '主动捐献：国难当头义不容辞', effects: { money: -150, reputation: 30, socialPoints: 20 } },
        { text: '配合征用：官府怎么说怎么是', effects: { money: -80, reputation: 15 } },
        { text: '藏匿船只：偷偷藏起几艘好船', effects: { money: -20, reputation: -10, risk: 25 } },
        { text: '逃奔他乡：带着家人先避避风头', effects: { money: -100, safety: 20, reputation: -15 } }
      ]
    },
    {
      id: 'shipbuilding_010',
      month: 10,
      stage: '备料开工',
      narrative: '十月，局势稍稳，你回到船坞。战乱中船坞损失不小，有些木材被烧，有些工具被抢。但战乱也带来了机会——大量船只被毁，战后重建需要更多新船。你盘算着，是不是要趁机扩大生意？只是时局未定，风险也不小。',
      choices: [
        { text: '重建船坞：恢复生产', effects: { money: -80, craftSkill: 5, reputation: 10 } },
        { text: '扩大规模：趁势做大做强', effects: { money: -150, craftSkill: 10, reputation: 15, risk: 20 } },
        { text: '转修船舶：先做维修生意稳当', effects: { money: 60, craftSkill: 8, safety: 10 } },
        { text: '观望局势：等安定了再说', effects: { money: 0, safety: 5, risk: 5 } }
      ]
    },
    {
      id: 'shipbuilding_011',
      month: 11,
      stage: '船体建造',
      narrative: '十一月，你忙着给客户维修船只。经过战乱，很多船只都有损伤，有的撞坏了船首，有的漏了船底。有一艘旧渔船破得厉害，船主问你是修还是造新的划算。你算了算，修的钱差不多够造半条新船了，但船主手头紧。',
      choices: [
        { text: '建议修船：能省则省', effects: { money: 40, socialPoints: 10, reputation: 5 } },
        { text: '建议造新：修修补补不长久', effects: { money: 80, reputation: -3, craftSkill: 5 } },
        { text: '以旧换新：旧船折价抵部分款', effects: { money: 60, socialPoints: 15, reputation: 8 } },
        { text: '免费维修：就当积德行善', effects: { money: -20, socialPoints: 25, reputation: 15 } }
      ]
    },
    {
      id: 'shipbuilding_012',
      month: 12,
      stage: '试航交付',
      narrative: '腊月，一年将尽。你站在船坞边，望着停泊在港内的船只，心中感慨万千。这一年经历了战乱，经历了损失，但终究还是挺过来了。江面上寒风凛冽，新的一年又会怎样？你搓了搓冻僵的手，盘算着明年的计划。',
      choices: [
        { text: '总结经验：规划明年发展', effects: { money: 0, craftSkill: 10, reputation: 5 } },
        { text: '犒劳工匠：大家辛苦了', effects: { money: -50, socialPoints: 20, reputation: 10 } },
        { text: '储备木料：趁年底多备些料', effects: { money: -60, craftSkill: 3 } },
        { text: '好好过年：其他事明年再说', effects: { money: -30, food: 20, health: 10 } }
      ]
    }
  ],

  porcelainEvents: [
    {
      id: 'porcelain_001',
      month: 1,
      stage: '采土制坯',
      narrative: '正月，年节刚过，你便开始筹备新一年的制瓷之事。越窑青瓷名闻天下，你家的窑口就在越州附近。制瓷首先要选好瓷土，瓷土的好坏直接决定了瓷器的品质。你派出去的人回报，上虞的瓷土色泽洁白，质地细腻，是上等原料，但运输成本高。',
      choices: [
        { text: '用上好土：采购上虞瓷土', effects: { money: -60, craftSkill: 10, reputation: 10 } },
        { text: '本地取材：用附近的瓷土', effects: { money: -20, craftSkill: -3, reputation: -3 } },
        { text: '亲自勘选：去山里找矿', effects: { money: -30, craftSkill: 8, health: -10 } },
        { text: '整修窑炉：趁年初检修龙窑', effects: { money: -50, safety: 15, craftSkill: 5 } }
      ]
    },
    {
      id: 'porcelain_002',
      month: 2,
      stage: '采土制坯',
      narrative: '二月，你正在淘洗瓷土。这是制瓷的第一道工序，瓷土要经过淘洗、沉淀、陈腐，才能用来制坯。越窑的青瓷之所以精美，与瓷土的精细处理密不可分。有学徒问你，为什么越窑的瓷比别的窑口好，你说关键就在这土和釉的配方上，这是祖传的秘方。',
      choices: [
        { text: '精工细作：严格按祖传工序来', effects: { money: -20, craftSkill: 12, reputation: 8 } },
        { text: '改进工艺：尝试新的淘洗方法', effects: { money: -40, craftSkill: 15, risk: 10 } },
        { text: '提高效率：简化工序增加产量', effects: { money: 30, reputation: -5, craftSkill: -5 } },
        { text: '收徒传艺：培养接班人', effects: { money: -30, reputation: 15, craftSkill: 5 } }
      ]
    },
    {
      id: 'porcelain_003',
      month: 3,
      stage: '采土制坯',
      narrative: '三月，春光明媚，正是制坯的好时节。你坐在转轮前，双手捧着泥团，随着轮盘的旋转，一只瓷碗在你手中渐渐成型。你的手艺是祖传的，拉出来的坯厚薄均匀，器形端正。有徒弟想学，但这手艺不是一朝一夕能练成的，需要多年的功夫。',
      choices: [
        { text: '精心拉坯：每件都精益求精', effects: { money: 0, craftSkill: 10, reputation: 8 } },
        { text: '模具制坯：用模具提高产量', effects: { money: -30, money: 60, craftSkill: -3 } },
        { text: '开发新品：设计新的器形', effects: { money: -20, craftSkill: 12, reputation: 12 } },
        { text: '多收徒弟：扩大生产规模', effects: { money: -50, craftSkill: 5, reputation: 10 } }
      ]
    },
    {
      id: 'porcelain_004',
      month: 4,
      stage: '上釉烧制',
      narrative: '四月，坯体晾干后，开始上釉。越窑的青瓷釉色青翠，如冰似玉，这釉料的配方是关键。你家的釉料是用瓷土、石灰和某种植物灰配制的，比例恰到好处。有人想买你的配方，出了大价钱；也有人想偷师学艺，在你家窑口附近转悠。',
      choices: [
        { text: '严守秘方：祖传配方绝不外传', effects: { money: 0, craftSkill: 5, safety: 10 } },
        { text: '高价售卖：反正也藏不住多久', effects: { money: 200, reputation: -10, craftSkill: -5 } },
        { text: '改进配方：研制更好的釉色', effects: { money: -50, craftSkill: 18, reputation: 15, risk: 10 } },
        { text: '收徒传艺：选可靠的徒弟传授', effects: { money: -30, reputation: 15, socialPoints: 10 } }
      ]
    },
    {
      id: 'porcelain_005',
      month: 5,
      stage: '上釉烧制',
      narrative: '五月，你将上好釉的瓷坯装入窑中，准备烧制。龙窑依山而建，长长的窑膛里摆满了一件件瓷坯。烧窑是最考验经验的环节，火温、气氛、时间，差一点都不行。你亲自守在窑前，观察着火候，三天三夜不曾合眼。',
      choices: [
        { text: '亲自守窑：全程把控火候', effects: { money: -10, health: -15, craftSkill: 12, reputation: 5 } },
        { text: '徒弟值守：自己在旁边指导', effects: { money: 0, health: -5, craftSkill: 8 } },
        { text: '改进窑炉：尝试改造龙窑结构', effects: { money: -60, craftSkill: 15, risk: 15 } },
        { text: '按时熄火：按老经验来就行', effects: { money: 10, craftSkill: 3 } }
      ]
    },
    {
      id: 'porcelain_006',
      month: 6,
      stage: '开窑验货',
      narrative: '六月，窑火熄灭，冷却数日，终于到了开窑的日子。你和徒弟们小心翼翼地打开窑门，一股热浪扑面而来。一件件青瓷静静地躺在窑中，在阳光下泛着温润的光泽。你一件一件地检查着，有的釉色青翠欲滴，堪称极品；有的却有瑕疵，或是窑裂，或是釉色不均。',
      choices: [
        { text: '精选上品：只卖精品保证口碑', effects: { money: 80, reputation: 20, craftSkill: 10 } },
        { text: '分级售卖：优品次晶各有其价', effects: { money: 120, reputation: 8, craftSkill: 5 } },
        { text: '打碎次品：不合格的全部毁掉', effects: { money: 40, reputation: 15, craftSkill: 8 } },
        { text: '全部卖出：能卖多少是多少', effects: { money: 150, reputation: -8 } }
      ]
    },
    {
      id: 'porcelain_007',
      month: 7,
      stage: '销售出货',
      narrative: '七月，你带着烧好的青瓷来到建康城。市场上瓷器不少，有越窑的、瓯窑的、婺州窑的，各有特色。越窑青瓷温润如玉，最受推崇；瓯窑的瓷色偏淡，也别有风味；婺州窑的瓷胎稍厚，但结实耐用。你看着别家的瓷器，心中盘算着自家的定位。',
      choices: [
        { text: '走高端路：主打精品越窑青瓷', effects: { money: 100, reputation: 15, craftSkill: 5 } },
        { text: '薄利多销：走平民路线', effects: { money: 80, reputation: -3, socialPoints: 5 } },
        { text: '学习对手：借鉴其他窑口优点', effects: { money: -30, craftSkill: 12, reputation: 5 } },
        { text: '联手同行：大家一起定价格', effects: { money: 70, socialPoints: 15, reputation: 3 } }
      ]
    },
    {
      id: 'porcelain_008',
      month: 8,
      stage: '销售出货',
      narrative: '八月，宫中派人来挑选瓷器，说是皇家要用。这可是天大的荣幸，若是能入选，你家的瓷器就身价百倍了。但要求也极高，器形、釉色、音质，样样都得完美。你把家里最好的瓷器都拿了出来，可心里还是没底。听说参选的窑口很多，竞争激烈。',
      choices: [
        { text: '全力参选：精心挑选最好的瓷器', effects: { money: -40, reputation: 25, craftSkill: 10 } },
        { text: '贿赂选官：走走后门', effects: { money: -100, reputation: -10, socialPoints: 15, risk: 20 } },
        { text: '重在参与：选不上也无所谓', effects: { money: -10, reputation: 3 } },
        { text: '放弃参选：不想惹麻烦', effects: { money: 0, reputation: -5 } }
      ]
    },
    {
      id: 'porcelain_009',
      month: 9,
      stage: '销售出货',
      narrative: '九月，同泰寺的僧人前来订购一批青瓷，说是寺庙里要用。有香炉、花瓶、钵盂，数量不少。寺庙的订单虽然价格不高，但能与寺院结缘，也是件积功德的事。而且寺庙里的僧人来往的多是达官贵人，说不定能借此机会结识一些施主。',
      choices: [
        { text: '半价结缘：就当供奉寺庙', effects: { money: -20, merit: 30, reputation: 20 } },
        { text: '按价出售：生意归生意', effects: { money: 80, merit: 10, reputation: 5 } },
        { text: '额外赠送：多送几件给方丈', effects: { money: 40, merit: 20, socialPoints: 15 } },
        { text: '婉言谢绝：太忙了顾不上', effects: { money: 0, merit: -10, reputation: -5 } }
      ]
    },
    {
      id: 'porcelain_010',
      month: 10,
      stage: '销售出货',
      narrative: '十月，有海商找上门来，说是要订购一批青瓷运往海外。番邦之人最喜我朝瓷器，运到海外能卖十倍的价钱。这可是大生意，但风险也大——海路凶险，万一船翻了就血本无归；而且官府对瓷器出口有管制，私自出海可是犯法的。',
      choices: [
        { text: '大胆接下：富贵险中求', effects: { money: 200, reputation: 10, risk: 25 } },
        { text: '走官路：通过市舶司正规出口', effects: { money: 120, reputation: 15, socialPoints: 10 } },
        { text: '少量试试：先做一小批看看', effects: { money: 60, risk: 10 } },
        { text: '拒绝生意：不想冒这个险', effects: { money: 0, safety: 10 } }
      ]
    },
    {
      id: 'porcelain_011',
      month: 11,
      stage: '采土制坯',
      narrative: '十一月，天气转寒，你开始储备明年的原料。今年的瓷土采得差不多了，但釉料用的植物灰还不够。你听说山里的某种树烧成的灰配釉最好，但那种树不多，采集不易。有山民愿意帮你采集，但要价不低。',
      choices: [
        { text: '重金收购：好料才能出好瓷', effects: { money: -40, craftSkill: 10, reputation: 5 } },
        { text: '自己采集：带着徒弟进山', effects: { money: -10, health: -15, craftSkill: 8 } },
        { text: '代用材料：试试其他草木灰', effects: { money: -15, craftSkill: 5, risk: 10 } },
        { text: '减少产量：料不够就少烧几窑', effects: { money: -30, reputation: 3 } }
      ]
    },
    {
      id: 'porcelain_012',
      month: 12,
      stage: '销售出货',
      narrative: '腊月，一年将尽。你望着窑厂中堆积的瓷器，盘点着一年的收成。今年的青瓷烧得不错，尤其是有几窑的釉色特别好，堪称极品。只是销路还不够广，大部分都在建康本地卖。你听说西边的蜀地也有青瓷，但那边的人更喜欢越窑的货色。明年是不是要往西边拓展拓展？',
      choices: [
        { text: '开拓西市：派人去蜀地推销', effects: { money: -50, reputation: 10, risk: 15 } },
        { text: '稳扎稳打：先把本地做好', effects: { money: 30, reputation: 5 } },
        { text: '提升品质：争取更上一层楼', effects: { money: -40, craftSkill: 15, reputation: 10 } },
        { text: '好好过年：明年的事明年再说', effects: { money: -30, food: 20, health: 10 } }
      ]
    }
  ],

  papermakingEvents: [
    {
      id: 'papermaking_001',
      month: 1,
      stage: '备料制浆',
      narrative: '正月，年节刚过，你便开始筹备新一年的造纸之事。造纸的原料很多，麻头、破布、树皮、渔网，都可以用来造纸。你最常用的是楮树皮，纤维长，造出来的纸柔韧结实。今年的楮皮收购价涨了不少，你盘算着要不要换用其他原料。',
      choices: [
        { text: '坚持用楮皮：品质最重要', effects: { money: -50, craftSkill: 8, reputation: 8 } },
        { text: '混用原料：楮皮掺些麻头', effects: { money: -20, craftSkill: -2, reputation: -3 } },
        { text: '进山收购：直接向山民收购', effects: { money: -30, health: -10, socialPoints: 10 } },
        { text: '整修作坊：趁年初整修纸坊', effects: { money: -40, safety: 10, craftSkill: 5 } }
      ]
    },
    {
      id: 'papermaking_002',
      month: 2,
      stage: '备料制浆',
      narrative: '二月，你开始沤制原料。将楮树皮浸泡在水中，加入石灰，让其自然发酵腐烂。这是造纸的第一道工序，需要耐心等待。沤好的原料还要经过蒸煮、洗涤、舂捣，才能制成纸浆。作坊里弥漫着一股特有的气味，徒弟们抱怨难闻，你却说这是钱的味道。',
      choices: [
        { text: '延长沤期：充分发酵品质好', effects: { money: -10, craftSkill: 10 } },
        { text: '加石灰催：加快进度多产纸', effects: { money: -20, craftSkill: -3, safety: -5 } },
        { text: '改进工艺：试试新的制浆法', effects: { money: -40, craftSkill: 15, risk: 10 } },
        { text: '按部就班：老法子最稳妥', effects: { money: 0, craftSkill: 3 } }
      ]
    },
    {
      id: 'papermaking_003',
      month: 3,
      stage: '抄纸晾晒',
      narrative: '三月，春光明媚，正是抄纸的好时节。你手持纸帘，在纸浆槽中轻轻一舀，然后左右摇晃，让纤维均匀地铺在帘上。这手艺全凭手感，轻重缓急都有讲究。抄好的纸贴在墙上晾晒，远远望去，一片雪白，像片片白云。',
      choices: [
        { text: '精心抄造：每张都厚薄均匀', effects: { money: 0, craftSkill: 10, reputation: 8 } },
        { text: '加快速度：多抄几张多赚钱', effects: { money: 50, craftSkill: -3, reputation: -3 } },
        { text: '改进纸帘：试试新的帘纹', effects: { money: -30, craftSkill: 12, reputation: 10 } },
        { text: '多收徒弟：扩大抄纸规模', effects: { money: -40, craftSkill: 5, reputation: 5 } }
      ]
    },
    {
      id: 'papermaking_004',
      month: 4,
      stage: '抄纸晾晒',
      narrative: '四月，天气干燥，正是晾纸的好时候。你将抄好的湿纸一张张揭开，贴在焙墙上烘干。纸张的干燥也很有讲究，火温太高容易烤焦，太低又干得慢。你凭借多年经验，调节着火候。看着墙上一张张洁白的纸张，你心中充满了成就感。',
      choices: [
        { text: '文火慢烘：品质第一', effects: { money: -10, craftSkill: 8, safety: 10 } },
        { text: '武火快干：提高效率', effects: { money: 20, craftSkill: -3, safety: -10 } },
        { text: '自然晾干：利用阳光和风', effects: { money: -5, craftSkill: 5, safety: 15 } },
        { text: '改进焙墙：改造烘干设施', effects: { money: -50, craftSkill: 12, risk: 10 } }
      ]
    },
    {
      id: 'papermaking_005',
      month: 5,
      stage: '加工处理',
      narrative: '五月，你开始对纸张进行压光处理。用光滑的石头在纸面上反复碾压，让纸张更加光滑致密，书写起来更流畅。这是你从建康城的纸匠那里学来的新技术，压过光的纸卖价能高一成。有同行来打听方法，你是教还是不教？',
      choices: [
        { text: '严守秘密：这是赚钱的本事', effects: { money: 30, craftSkill: 5, reputation: -3 } },
        { text: '有条件教：收学费才教', effects: { money: 50, craftSkill: 3, socialPoints: 5 } },
        { text: '免费传授：都是同行互相帮助', effects: { money: 0, socialPoints: 20, reputation: 15 } },
        { text: '继续改进：研究更好的压光法', effects: { money: -30, craftSkill: 15, reputation: 10 } }
      ]
    },
    {
      id: 'papermaking_006',
      month: 6,
      stage: '加工处理',
      narrative: '六月，梅雨连绵，纸张容易发霉生虫。你听说有一种黄檗染纸的方法，可以防虫蛀。将纸张在黄檗汁中浸泡，染成黄色，既能防虫，又有一股清香味。这可是个好技术，学会了你的纸就更好卖了。只是黄檗不便宜，染色工艺也复杂。',
      choices: [
        { text: '全力研发：攻克染纸技术', effects: { money: -60, craftSkill: 18, reputation: 15 } },
        { text: '小批量试：先做一些试试水', effects: { money: -20, craftSkill: 10, risk: 5 } },
        { text: '请教行家：去找懂行的人学', effects: { money: -40, craftSkill: 12, socialPoints: 10 } },
        { text: '暂不考虑：成本太高划不来', effects: { money: 0, craftSkill: 2 } }
      ]
    },
    {
      id: 'papermaking_007',
      month: 7,
      stage: '加工处理',
      narrative: '七月，你研制出了一种银光纸。这种纸经过特殊处理，纸面泛着淡淡的银光，书写起来流畅无比，是纸中上品。建康城中的士人最喜这种纸，虽然价格昂贵，但供不应求。你给它起了个名字叫"建康银光纸"，打算打响名气。',
      choices: [
        { text: '精品路线：主打银光纸品牌', effects: { money: 100, reputation: 25, craftSkill: 10 } },
        { text: '限量发售：物以稀为贵', effects: { money: 80, reputation: 20, craftSkill: 5 } },
        { text: '批量生产：降低价格扩大市场', effects: { money: 120, reputation: 5, craftSkill: -3 } },
        { text: '进贡朝廷：争取成为贡纸', effects: { money: -50, reputation: 30, socialPoints: 20 } }
      ]
    },
    {
      id: 'papermaking_008',
      month: 8,
      stage: '销售出货',
      narrative: '八月，你对纸张进行质量分级。最好的是银光纸，供士大夫和官府使用；中等的是普通书写纸，供学生和小吏使用；最差的是烧纸和包装纸。分级销售既能满足不同客户的需求，又能最大化利润。有学徒问你，会不会有人以次充好？你说做生意要讲诚信。',
      choices: [
        { text: '严格分级：童叟无欺', effects: { money: 80, reputation: 15, craftSkill: 5 } },
        { text: '灵活分级：差不多就行', effects: { money: 100, reputation: -3 } },
        { text: '明码标价：各级纸各有其价', effects: { money: 90, reputation: 10, socialPoints: 10 } },
        { text: '只做好纸：低端的不做了', effects: { money: 60, reputation: 12, craftSkill: 8 } }
      ]
    },
    {
      id: 'papermaking_009',
      month: 9,
      stage: '销售出货',
      narrative: '九月，秋高气爽，正是读书的好时节。太学的学生们纷纷来买纸，准备秋冬苦读。你的纸张因为品质好，很受学子欢迎。有个穷书生买不起纸，问你能不能便宜点，或者给他一些次纸。你看着他面黄肌瘦却眼神坚毅的样子，想起了自己年轻时的模样。',
      choices: [
        { text: '免费赠纸：就当资助学子', effects: { money: -20, reputation: 20, merit: 15 } },
        { text: '半价售卖：给他算便宜点', effects: { money: -10, reputation: 15, socialPoints: 10 } },
        { text: '以工换纸：让他帮你干活抵钱', effects: { money: 0, socialPoints: 15, health: -5 } },
        { text: '婉言拒绝：生意就是生意', effects: { money: 10, reputation: -5 } }
      ]
    },
    {
      id: 'papermaking_010',
      month: 10,
      stage: '销售出货',
      narrative: '十月，官府派人来订购大批公文用纸。说是衙门里日常办公消耗大，需要大量纸张。官府的订单数量大，但价格压得低，而且结账慢。接还是不接？接了，虽然利薄但稳定，还能攀上官府的关系；不接，也不愁卖，但少了一个大客户。',
      choices: [
        { text: '接下订单：建立长期合作', effects: { money: 120, reputation: 15, socialPoints: 15 } },
        { text: '讨价还价：争取更好的条件', effects: { money: 100, reputation: 8, risk: 10 } },
        { text: '婉言谢绝：利润太低不划算', effects: { money: 30, reputation: -3 } },
        { text: '找关系：先打点打点再说', effects: { money: -40, socialPoints: 10, risk: 15 } }
      ]
    },
    {
      id: 'papermaking_011',
      month: 11,
      stage: '备料制浆',
      narrative: '十一月，你开始筹备明年的原料。今年的楮皮用得差不多了，趁着冬天农闲，正好可以多收购一些。山民们闲着没事，愿意上山剥楮皮换钱。你打算存够一年的料，省得明年临时抱佛脚。只是存货需要地方放，还要防潮防火。',
      choices: [
        { text: '大量收购：备足一年的料', effects: { money: -80, craftSkill: 5, safety: 5 } },
        { text: '适量储备：够半年用的就行', effects: { money: -40, craftSkill: 3 } },
        { text: '扩建仓库：建个大仓库存料', effects: { money: -100, safety: 15, reputation: 5 } },
        { text: '随用随买：省得占地方', effects: { money: 0, risk: 10 } }
      ]
    },
    {
      id: 'papermaking_012',
      month: 12,
      stage: '销售出货',
      narrative: '腊月，一年将尽。你望着作坊里堆积的纸张，心中感慨。造纸这行当，虽然不如丝绸瓷器值钱，但却是文化传承的载体。古圣先贤的智慧、文人墨客的诗篇、官府的政令、百姓的书信，都要靠纸张来传递。想到这些，你觉得自己做的事情很有意义。',
      choices: [
        { text: '捐书助学：送些纸给学堂', effects: { money: -30, reputation: 25, merit: 20 } },
        { text: '改进技艺：研究更好的造纸法', effects: { money: -40, craftSkill: 15, knowledge: 10 } },
        { text: '盘点收成：好好规划明年', effects: { money: 20, craftSkill: 5, reputation: 3 } },
        { text: '过年休息：辛苦一年该歇歇了', effects: { money: -30, food: 20, health: 10 } }
      ]
    }
  ]
};