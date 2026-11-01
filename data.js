window.LESSONS = [
  {
    id: 1, title: "第一次见面", subtitle: "问候、姓名与出差目的", icon: "👋",
    goal: "用三句话完成一次自然、礼貌的第一次见面。",
    dialogue: [
      ["You", "Good morning. I'm Li Wei from Shanghai.", "古德 莫宁。艾姆 李伟 弗让 上海。", "早上好。我是来自上海的李伟。"],
      ["Host", "Nice to meet you. Welcome to Singapore.", "奈斯 兔 米特 优。威尔肯 兔 新加坡。", "很高兴认识你。欢迎来到新加坡。"]
    ],
    phrases: [
      ["Good morning.", "古德 莫宁。", "早上好。"],
      ["Nice to meet you.", "奈斯 兔 米特 优。", "很高兴认识你。"],
      ["I'm here on a business trip.", "艾姆 希尔 昂 额 比兹尼斯 吹普。", "我来这里出差。"]
    ],
    quiz: { prompt: "对方说 Nice to meet you，最自然的回答是？", choices: ["Thank you.", "Nice to meet you, too.", "I am fine.", "You are welcome."], answer: 1, explanation: "回复同样用 Nice to meet you, too. 最自然。" },
    speakingPrompt: "请介绍你的名字、公司和出差目的。"
  },
  {
    id: 2, title: "办理值机", subtitle: "柜台、座位和行李", icon: "🛫",
    goal: "顺利办理值机，并选择座位和托运行李。",
    dialogue: [
      ["You", "I'd like to check in for flight CA123.", "艾德 莱克 兔 切克 因 佛 弗莱特 C A 一二三。", "我想办理 CA123 航班的值机。"],
      ["Agent", "May I see your passport and ticket, please?", "梅 艾 西 尤尔 帕斯波特 安德 提克特，普利兹？", "请出示您的护照和机票。"]
    ],
    phrases: [
      ["Where is the check-in counter?", "威尔 伊兹 惹 切克因 康特？", "值机柜台在哪里？"],
      ["I'd like a window seat.", "艾德 莱克 额 温豆 西特。", "我想要靠窗座位。"],
      ["How many bags can I check?", "好 曼尼 拜格斯 坎 艾 切克？", "我可以托运几件行李？"]
    ],
    quiz: { prompt: "你想要靠窗座位，应该说？", choices: ["A coffee, please.", "I'd like a window seat.", "Where is my bag?", "Two nights, please."], answer: 1, explanation: "window seat 是靠窗座位。" },
    speakingPrompt: "说出目的地、航班号和座位偏好。"
  },
  {
    id: 3, title: "安检与登机", subtitle: "行李、登机口和航班状态", icon: "🛡️",
    goal: "听懂常见安检指令，并询问登机口。",
    dialogue: [
      ["Officer", "Please take out your laptop.", "普利兹 泰克 奥特 尤尔 拉普托普。", "请把笔记本电脑拿出来。"],
      ["You", "Which gate is my flight using?", "维奇 盖特 伊兹 麦 弗莱特 尤星？", "我的航班使用哪个登机口？"]
    ],
    phrases: [
      ["Do I need to take out my laptop?", "杜 艾 尼德 兔 泰克 奥特 麦 拉普托普？", "我需要拿出笔记本电脑吗？"],
      ["Which gate is it?", "维奇 盖特 伊兹 伊特？", "是哪个登机口？"],
      ["Is the flight on time?", "伊兹 惹 弗莱特 昂 泰姆？", "航班准点吗？"]
    ],
    quiz: { prompt: "登机口用英语怎么说？", choices: ["Gate", "Counter", "Platform", "Floor"], answer: 0, explanation: "登机口是 gate。" },
    speakingPrompt: "询问登机口，并确认航班是否准点。"
  },
  {
    id: 4, title: "入境问答", subtitle: "目的、停留时间和返程", icon: "🛂",
    goal: "用简短、清晰的回答通过边检。",
    dialogue: [
      ["Officer", "What's the purpose of your visit?", "沃茨 惹 珀珀斯 奥夫 尤尔 维兹特？", "您此行的目的是什么？"],
      ["You", "I'm here for business meetings.", "艾姆 希尔 佛 比兹尼斯 米丁兹。", "我来参加商务会议。"]
    ],
    phrases: [
      ["I'm here on business.", "艾姆 希尔 昂 比兹尼斯。", "我是来出差的。"],
      ["I'll stay for five days.", "艾尔 斯泰 佛 法伊夫 戴兹。", "我会停留五天。"],
      ["Here is my return ticket.", "希尔 伊兹 麦 里特恩 提克特。", "这是我的返程机票。"]
    ],
    quiz: { prompt: "边检问 How long will you stay?，应该回答？", choices: ["For five days.", "At the hotel.", "By taxi.", "In Shanghai."], answer: 0, explanation: "How long 询问停留多久。" },
    speakingPrompt: "回答访问目的、停留天数和住宿地点。"
  },
  {
    id: 5, title: "行李与海关", subtitle: "取行李和申报物品", icon: "🧳",
    goal: "找到行李转盘并回答海关问题。",
    dialogue: [
      ["You", "Where can I collect my luggage?", "威尔 坎 艾 克莱克特 麦 拉吉奇？", "我在哪里取行李？"],
      ["Officer", "Do you have anything to declare?", "杜 优 哈夫 安尼辛 兔 迪克莱尔？", "您有需要申报的物品吗？"]
    ],
    phrases: [
      ["Baggage claim is downstairs.", "拜吉奇 克雷姆 伊兹 当斯泰尔兹。", "行李提取处在楼下。"],
      ["I have nothing to declare.", "艾 哈夫 纳辛 兔 迪克莱尔。", "我没有需要申报的物品。"],
      ["This is for personal use.", "迪斯 伊兹 佛 珀森诺 尤斯。", "这是个人用品。"]
    ],
    quiz: { prompt: "I have nothing to declare 表示？", choices: ["我丢了行李", "我有东西要申报", "我没有需要申报的物品", "我要取行李"], answer: 2, explanation: "declare 是申报，nothing 表示什么都没有。" },
    speakingPrompt: "说明你只携带个人物品。"
  },
  {
    id: 6, title: "打车去酒店", subtitle: "地址、时间和车费", icon: "🚕",
    goal: "告诉司机地址，并确认耗时和价格。",
    dialogue: [
      ["You", "Could you take me to this hotel?", "库德 优 泰克 米 兔 迪斯 侯泰尔？", "可以带我去这家酒店吗？"],
      ["Driver", "Sure. It takes about thirty minutes.", "舒尔。伊特 泰克斯 额包特 瑟提 米尼茨。", "可以，大约需要三十分钟。"]
    ],
    phrases: [
      ["How long will it take?", "好 朗 威尔 伊特 泰克？", "需要多长时间？"],
      ["How much is the fare?", "好 马奇 伊兹 惹 菲尔？", "车费是多少？"],
      ["Please stop here.", "普利兹 斯达普 希尔。", "请在这里停车。"]
    ],
    quiz: { prompt: "想确认到酒店需要多久，应说？", choices: ["How much is it?", "How long will it take?", "Where is the gate?", "What is your name?"], answer: 1, explanation: "How long will it take? 用来询问需要多长时间。" },
    speakingPrompt: "把酒店地址给司机，并询问需要多久。"
  },
  {
    id: 7, title: "酒店入住", subtitle: "预订、护照和房卡", icon: "🏨",
    goal: "完成酒店入住并确认离店时间。",
    dialogue: [
      ["You", "I have a reservation under Li.", "艾 哈夫 额 雷泽维申 安德 李。", "我有一个用李预订的房间。"],
      ["Receptionist", "May I see your passport, please?", "梅 艾 西 尤尔 帕斯波特，普利兹？", "请出示您的护照。"]
    ],
    phrases: [
      ["I'll stay for two nights.", "艾尔 斯泰 佛 兔 奈茨。", "我住两晚。"],
      ["Is breakfast included?", "伊兹 布瑞克法斯特 因克鲁迪德？", "包含早餐吗？"],
      ["Could I have the Wi-Fi password?", "库德 艾 哈夫 惹 歪发 帕斯沃德？", "可以给我 Wi-Fi 密码吗？"]
    ],
    quiz: { prompt: "I have a reservation 是什么意思？", choices: ["我有一个房间预订", "我丢了房卡", "我要退房", "我要换房间"], answer: 0, explanation: "reservation 是预订。" },
    speakingPrompt: "报出预订姓名，并询问 Wi-Fi 密码。"
  },
  {
    id: 8, title: "酒店服务", subtitle: "早餐、延迟退房和帮助", icon: "🛎️",
    goal: "用礼貌表达提出常见酒店需求。",
    dialogue: [
      ["You", "What time does breakfast start?", "沃特 泰姆 达兹 布瑞克法斯特 斯达特？", "早餐几点开始？"],
      ["Staff", "It starts at seven and ends at ten.", "伊特 斯达茨 艾特 塞文 安德 恩兹 艾特 腾。", "七点开始，十点结束。"]
    ],
    phrases: [
      ["Could I have a late checkout?", "库德 艾 哈夫 额 莱特 切克奥特？", "我可以延迟退房吗？"],
      ["Could you call a taxi for me?", "库德 优 科尔 额 泰克西 佛 米？", "可以帮我叫一辆出租车吗？"],
      ["The air conditioner is not working.", "惹 艾尔 康迪申纳 伊兹 纳特 沃金。", "空调坏了。"]
    ],
    quiz: { prompt: "希望酒店帮你叫车，应说？", choices: ["Could you call a taxi for me?", "Can I have breakfast?", "I lost my key.", "Where is the airport?"], answer: 0, explanation: "Could you...for me 是礼貌求助。" },
    speakingPrompt: "礼貌地向酒店提出一个请求。"
  },
  {
    id: 9, title: "餐厅点餐", subtitle: "人数、推荐和结账", icon: "🍽️",
    goal: "独立完成入门、点餐和请求结账。",
    dialogue: [
      ["Waiter", "Are you ready to order?", "阿 优 雷迪 兔 奥德？", "您准备点餐了吗？"],
      ["You", "Yes. What do you recommend?", "耶斯。沃特 杜 优 瑞科曼德？", "是的。你有什么推荐？"]
    ],
    phrases: [
      ["A table for two, please.", "额 泰博 佛 兔，普利兹。", "请给两人安排一张桌子。"],
      ["Could I have the menu?", "库德 艾 哈夫 惹 曼纽？", "可以给我菜单吗？"],
      ["The check, please.", "惹 切克，普利兹。", "请结账。"]
    ],
    quiz: { prompt: "在餐厅想请服务员结账，应说？", choices: ["One ticket, please.", "The check, please.", "Check in, please.", "Two nights, please."], answer: 1, explanation: "The check, please 是最直接的结账表达。" },
    speakingPrompt: "订两人的座位，并请服务员推荐一道菜。"
  },
  {
    id: 10, title: "咖啡与付款", subtitle: "早餐、刷卡和收据", icon: "☕",
    goal: "购买简单餐点并索要收据。",
    dialogue: [
      ["You", "A black coffee and a croissant, please.", "额 布莱克 卡菲 安德 额 克瓦松，普利兹。", "请给我一杯黑咖啡和一个可颂。"],
      ["Cashier", "For here or to go?", "佛 希尔 奥 兔 狗？", "在这里吃还是带走？"]
    ],
    phrases: [
      ["For here, please.", "佛 希尔，普利兹。", "在这里吃。"],
      ["Can I pay by card?", "坎 艾 佩 拜 卡德？", "可以刷卡吗？"],
      ["Could I have a receipt?", "库德 艾 哈夫 额 瑞西特？", "可以给我收据吗？"]
    ],
    quiz: { prompt: "店员问 For here or to go?，想带走时怎么说？", choices: ["To go, please.", "For here, please.", "Two nights.", "Thank you."], answer: 0, explanation: "to go 表示带走。" },
    speakingPrompt: "点一杯咖啡，要求带走，并刷卡付款。"
  },
  {
    id: 11, title: "商务介绍", subtitle: "介绍同事和公司角色", icon: "🤝",
    goal: "介绍自己、同事和双方的工作内容。",
    dialogue: [
      ["You", "This is Anna, our project manager.", "迪斯 伊兹 安娜，奥儿 普罗杰克特 曼尼杰。", "这是安娜，我们的项目经理。"],
      ["Client", "It's a pleasure to work with your team.", "伊茨 额 普莱热 兔 沃克 威兹 尤尔 提姆。", "很高兴与你们团队合作。"]
    ],
    phrases: [
      ["I work in the sales department.", "艾 沃克 因 惹 塞尔斯 迪帕特门特。", "我在销售部门工作。"],
      ["I'm responsible for quality control.", "艾姆 瑞斯旁西博 佛 夸莱提 康戳尔。", "我负责质量控制。"],
      ["Our company is based in Shanghai.", "奥儿 康帕尼 伊兹 贝斯特 因 上海。", "我们公司位于上海。"]
    ],
    quiz: { prompt: "介绍同事最自然的是？", choices: ["This is Anna, our project manager.", "Anna is a table.", "I need Anna.", "Where is Anna?"], answer: 0, explanation: "This is + 人名，用于当面介绍他人。" },
    speakingPrompt: "用姓名、部门、职责介绍自己。"
  },
  {
    id: 12, title: "参观公司与工厂", subtitle: "安全要求、流程和提问", icon: "🏭",
    goal: "听懂安全要求，并就流程提出问题。",
    dialogue: [
      ["Host", "Please wear safety glasses in this area.", "普利兹 维尔 塞夫提 格拉西斯 因 迪斯 艾里亚。", "请在这个区域佩戴安全眼镜。"],
      ["You", "Understood. What is the next step?", "安德斯图德。沃特 伊兹 惹 奈克斯特 斯泰普？", "明白。下一步是什么？"]
    ],
    phrases: [
      ["Where is the restroom?", "威尔 伊兹 惹 瑞斯图姆？", "洗手间在哪里？"],
      ["Could you explain this process?", "库德 优 伊克斯普莱恩 迪斯 普罗塞斯？", "可以解释一下这个流程吗？"],
      ["What is your production capacity?", "沃特 伊兹 尤尔 普罗达克申 卡帕西提？", "你们的产能是多少？"]
    ],
    quiz: { prompt: "希望对方解释一个流程，应说？", choices: ["Could you explain this process?", "Could I have a menu?", "Where is my bag?", "How much is it?"], answer: 0, explanation: "explain 是解释，process 是流程。" },
    speakingPrompt: "确认安全要求，并询问下一个步骤。"
  },
  {
    id: 13, title: "会议开场", subtitle: "欢迎、议程和开始会议", icon: "👥",
    goal: "清楚开场，并确认大家都准备好。",
    dialogue: [
      ["You", "Thank you all for joining today.", "桑克 优 奥儿 佛 乔伊宁 图德。", "感谢大家今天参加。"],
      ["You", "Shall we get started?", "肖 维 盖特 斯达提德？", "我们开始吧？"]
    ],
    phrases: [
      ["Here is today's agenda.", "希尔 伊兹 图德兹 阿真达。", "这是今天的议程。"],
      ["Can everyone hear me clearly?", "坎 艾夫里万 希尔 米 克利尔利？", "大家能清楚听到我吗？"],
      ["Let's move on to the next topic.", "莱茨 姆夫 昂 兔 惹 奈克斯特 托皮克。", "我们进入下一个话题。"]
    ],
    quiz: { prompt: "Shall we get started? 表示？", choices: ["我们开始吧？", "请等一下", "再讲一次", "今天结束"], answer: 0, explanation: "Shall we... 是礼貌提出共同行动。" },
    speakingPrompt: "欢迎参会者，并说明今天有两个议题。"
  },
  {
    id: 14, title: "听不懂时", subtitle: "请求重复、放慢和解释", icon: "👂",
    goal: "听不懂时不沉默，能用简单句主动澄清。",
    dialogue: [
      ["Client", "We need to align on the delivery window.", "维 尼德 兔 额莱恩 昂 惹 迪里弗瑞 温豆。", "我们需要在交付时间上达成一致。"],
      ["You", "Could you explain that in another way?", "库德 优 伊克斯普莱恩 达特 因 额纳德 韦？", "可以换一种方式解释吗？"]
    ],
    phrases: [
      ["Could you say that again, please?", "库德 优 塞 达特 额根，普利兹？", "可以再说一遍吗？"],
      ["Could you speak more slowly?", "库德 优 斯匹克 莫 斯洛利？", "可以说慢一点吗？"],
      ["Do you mean next Friday?", "杜 优 敏 奈克斯特 弗莱戴？", "你是指下周五吗？"]
    ],
    quiz: { prompt: "不要假装听懂，最合适的说法是？", choices: ["Could you say that again, please?", "I am fine.", "The check, please.", "Goodbye."], answer: 0, explanation: "主动请求重复能避免商务误解。" },
    speakingPrompt: "请求对方放慢语速，并确认你听到的日期。"
  },
  {
    id: 15, title: "表达需求与确认", subtitle: "需求、时间点和确认理解", icon: "💬",
    goal: "准确提出需求，并用确认句避免误会。",
    dialogue: [
      ["You", "We need the sample by Wednesday.", "维 尼德 惹 桑普 拜 温兹戴。", "我们需要在周三前拿到样品。"],
      ["You", "So, we'll receive it on Tuesday. Is that correct?", "搜，维尔 瑞西夫 伊特 昂 图兹戴。伊兹 达特 科瑞克特？", "所以我们会周二收到，对吗？"]
    ],
    phrases: [
      ["We need two more days.", "维 尼德 兔 莫 戴兹。", "我们还需要两天。"],
      ["Let me confirm the details.", "莱特 米 康弗姆 惹 迪泰尔斯。", "让我确认一下细节。"],
      ["Is that correct?", "伊兹 达特 科瑞克特？", "这样正确吗？"]
    ],
    quiz: { prompt: "复述信息后确认是否正确，应说？", choices: ["Is that correct?", "What time is it?", "Where is the hotel?", "Can I pay by card?"], answer: 0, explanation: "Is that correct? 用来确认自己的理解。" },
    speakingPrompt: "提出一个截止时间，并复述确认。"
  },
  {
    id: 16, title: "安排日程", subtitle: "约时间、改时间与时区", icon: "📅",
    goal: "用简单句式约会议、调整时间。",
    dialogue: [
      ["You", "Are you available tomorrow afternoon?", "阿 优 额维勒博 图莫柔 阿夫特努？", "你明天下午有空吗？"],
      ["Client", "I'm free after three.", "艾姆 弗瑞 阿夫特 斯瑞。", "我三点以后有空。"]
    ],
    phrases: [
      ["Does two o'clock work for you?", "达兹 兔 额克洛克 沃克 佛 优？", "两点对你合适吗？"],
      ["Could we move the meeting to Friday?", "库德 维 姆夫 惹 米丁 兔 弗莱戴？", "可以把会议改到周五吗？"],
      ["I'll send a calendar invite.", "艾尔 森德 额 卡林达 因外特。", "我会发送日历邀请。"]
    ],
    quiz: { prompt: "Does 2 p.m. work for you? 是在？", choices: ["安排时间", "询问价格", "解释路线", "点餐"], answer: 0, explanation: "work for you 表示时间对你是否合适。" },
    speakingPrompt: "提议明天下午三点开会，并询问对方是否合适。"
  },
  {
    id: 17, title: "电话与视频会议", subtitle: "连接、声音和重新联系", icon: "📹",
    goal: "处理视频会议中常见的连接问题。",
    dialogue: [
      ["You", "Can you hear me now?", "坎 优 希尔 米 闹？", "现在能听到我吗？"],
      ["Colleague", "I can hear you, but your screen is frozen.", "艾 坎 希尔 优，巴特 尤尔 斯克琳 伊兹 弗柔增。", "我能听到你，但你的屏幕卡住了。"]
    ],
    phrases: [
      ["The line is unstable.", "惹 莱恩 伊兹 安斯泰博。", "线路不稳定。"],
      ["I'll call you back.", "艾尔 科尔 优 拜克。", "我会给你回电话。"],
      ["Could you share your screen?", "库德 优 谢尔 尤尔 斯克琳？", "可以共享屏幕吗？"]
    ],
    quiz: { prompt: "I'll call you back 的意思是？", choices: ["我会给你回电话", "我听不到你", "请共享屏幕", "会议结束了"], answer: 0, explanation: "call back 是回电。" },
    speakingPrompt: "说明网络不稳定，并建议稍后回电。"
  },
  {
    id: 18, title: "展示方案", subtitle: "问题、方案和结果", icon: "📊",
    goal: "用“问题—方案—结果”结构做简短展示。",
    dialogue: [
      ["You", "Our solution can reduce delivery time.", "奥儿 索鲁申 坎 瑞丢斯 迪里弗瑞 泰姆。", "我们的方案可以缩短交付时间。"],
      ["You", "As a result, you can launch sooner.", "艾兹 额 瑞扎特，优 坎 朗奇 速纳。", "因此，你们可以更早发布。"]
    ],
    phrases: [
      ["Let's start with the key point.", "莱茨 斯达特 威兹 惹 基 波因特。", "我们先从重点开始。"],
      ["The main problem is cost.", "惹 梅恩 普罗布莱姆 伊兹 科斯特。", "主要问题是成本。"],
      ["Our solution improves efficiency.", "奥儿 索鲁申 因普鲁夫兹 伊菲申西。", "我们的方案能提高效率。"]
    ],
    quiz: { prompt: "连接问题和结果，常用哪句话？", choices: ["As a result...", "Could I have a receipt?", "Nice to meet you.", "The check, please."], answer: 0, explanation: "As a result 表示因此、结果是。" },
    speakingPrompt: "用三句话介绍问题、方案和结果。"
  },
  {
    id: 19, title: "价格与交付", subtitle: "单价、数量和交货期", icon: "💵",
    goal: "询问商务条件并准确表达数字。",
    dialogue: [
      ["You", "What is the unit price?", "沃特 伊兹 惹 尤尼特 普莱斯？", "单价是多少？"],
      ["Supplier", "It's twelve dollars, with a minimum order of five hundred.", "伊茨 推尔夫 达勒兹，威兹 额 米尼姆 奥德 奥夫 法伊夫 汉德瑞德。", "单价十二美元，起订量五百。"]
    ],
    phrases: [
      ["What is the delivery time?", "沃特 伊兹 惹 迪里弗瑞 泰姆？", "交货时间是多久？"],
      ["Could you offer a better price?", "库德 优 奥佛 额 贝特 普莱斯？", "可以提供更好的价格吗？"],
      ["Could you send a written quote?", "库德 优 森德 额 瑞腾 阔特？", "可以发送书面报价吗？"]
    ],
    quiz: { prompt: "询价最直接的说法是？", choices: ["What is the delivery time?", "What is the unit price?", "Where is the gate?", "How long will you stay?"], answer: 1, explanation: "unit price 是单价。" },
    speakingPrompt: "询问单价、起订量和交货时间。"
  },
  {
    id: 20, title: "谈判与让步", subtitle: "目标价、条件与折中", icon: "⚖️",
    goal: "礼貌表达目标价，并探索双方可接受的条件。",
    dialogue: [
      ["You", "Our target price is ten dollars per unit.", "奥儿 塔吉特 普莱斯 伊兹 腾 达勒兹 珀 尤尼特。", "我们的目标价是每件十美元。"],
      ["Supplier", "We could lower the price if you increase the quantity.", "维 库德 娄尔 惹 普莱斯 伊夫 优 因克里斯 惹 夸恩提提。", "如果增加数量，我们可以降低价格。"]
    ],
    phrases: [
      ["We're flexible on the delivery date.", "维尔 弗莱克西博 昂 惹 迪里弗瑞 戴特。", "交付日期可以商量。"],
      ["Let's meet halfway.", "莱茨 米特 哈夫韦。", "我们各让一步吧。"],
      ["That works for us.", "达特 沃克斯 佛 阿斯。", "这对我们可行。"]
    ],
    quiz: { prompt: "Let's meet halfway 的意思是？", choices: ["我们各让一步", "我们在中间等", "请再说一次", "价格太贵"], answer: 0, explanation: "meet halfway 是折中、各让一步。" },
    speakingPrompt: "提出目标价，并表示愿意讨论数量。"
  },
  {
    id: 21, title: "客户晚餐", subtitle: "点菜、饮食禁忌与敬酒", icon: "🥂",
    goal: "在商务晚餐中进行自然、克制的交流。",
    dialogue: [
      ["Host", "Is there anything you don't eat?", "伊兹 惹尔 安尼辛 优 东特 伊特？", "您有什么不吃的吗？"],
      ["You", "I don't eat spicy food, but everything else is fine.", "艾 东特 伊特 斯派西 夫德，巴特 艾夫里辛 埃尔斯 伊兹 法恩。", "我不吃辣，其他都可以。"]
    ],
    phrases: [
      ["I have a food allergy.", "艾 哈夫 额 夫德 艾勒吉。", "我有食物过敏。"],
      ["Everything was delicious.", "艾夫里辛 沃兹 迪里西斯。", "每道菜都很好吃。"],
      ["Thank you for your hospitality.", "桑克 优 佛 尤尔 豪斯皮塔利提。", "感谢您的款待。"]
    ],
    quiz: { prompt: "说明食物过敏，最关键的是？", choices: ["I have a food allergy.", "I am hungry.", "The check, please.", "Let's go."], answer: 0, explanation: "food allergy 是食物过敏。" },
    speakingPrompt: "说明一个饮食禁忌，并感谢对方款待。"
  },
  {
    id: 22, title: "问路", subtitle: "地点、方向和地标", icon: "🗺️",
    goal: "询问地点，并复述路线确认方向。",
    dialogue: [
      ["You", "How do I get to the convention center?", "好 杜 艾 盖特 兔 惹 康文申 森特？", "怎么去会展中心？"],
      ["Passerby", "Go straight and turn left at the bank.", "狗 斯特雷特 安德 特恩 莱夫特 艾特 惹 班克。", "直走，在银行处左转。"]
    ],
    phrases: [
      ["Is it within walking distance?", "伊兹 伊特 威兹因 沃金 迪斯坦斯？", "步行能到吗？"],
      ["Could you show me on the map?", "库德 优 秀 米 昂 惹 麦普？", "可以在地图上指给我看吗？"],
      ["Is this the right direction?", "伊兹 迪斯 惹 莱特 迪瑞克申？", "这个方向对吗？"]
    ],
    quiz: { prompt: "希望对方在地图上指出位置，应说？", choices: ["Could you show me on the map?", "Could I have a receipt?", "How much is it?", "What time is it?"], answer: 0, explanation: "show me on the map 是在地图上指给我看。" },
    speakingPrompt: "问去车站怎么走，并确认是否可以步行。"
  },
  {
    id: 23, title: "地铁与公共交通", subtitle: "票卡、站台和换乘", icon: "🚇",
    goal: "购买车票、找到站台并询问换乘。",
    dialogue: [
      ["You", "Where can I buy a metro card?", "威尔 坎 艾 拜 额 麦戳 卡德？", "在哪里可以买地铁卡？"],
      ["Staff", "You can buy one at the ticket machine.", "优 坎 拜 万 艾特 惹 提克特 马新。", "你可以在售票机购买。"]
    ],
    phrases: [
      ["Which platform should I go to?", "维奇 普拉特佛姆 舒德 艾 狗 兔？", "我应该去哪个站台？"],
      ["Do I need to transfer?", "杜 艾 尼德 兔 特朗普弗？", "我需要换乘吗？"],
      ["How many stops is it?", "好 曼尼 斯达普斯 伊兹 伊特？", "要坐几站？"]
    ],
    quiz: { prompt: "换乘用英语怎么说？", choices: ["Transfer", "Arrive", "Return", "Exchange"], answer: 0, explanation: "transfer 表示换乘；exchange 更常用于交换或退换。" },
    speakingPrompt: "询问地铁站台和需要坐几站。"
  },
  {
    id: 24, title: "购物与尺码", subtitle: "尺寸、试穿和付款", icon: "🛍️",
    goal: "在商店询问尺码、试穿并完成付款。",
    dialogue: [
      ["You", "Do you have this in a larger size?", "杜 优 哈夫 迪斯 因 额 拉杰 塞兹？", "这件有大一号的吗？"],
      ["Staff", "Let me check the stock for you.", "莱特 米 切克 惹 斯达克 佛 优。", "我帮你查一下库存。"]
    ],
    phrases: [
      ["Can I try it on?", "坎 艾 踹 伊特 昂？", "我可以试穿吗？"],
      ["How much is this?", "好 马奇 伊兹 迪斯？", "这个多少钱？"],
      ["Where is the checkout counter?", "威尔 伊兹 惹 切克奥特 康特？", "收银台在哪里？"]
    ],
    quiz: { prompt: "试穿衣服应说？", choices: ["Can I try it on?", "Can I take it out?", "Can I check in?", "Can I pay later?"], answer: 0, explanation: "try it on 是试穿。" },
    speakingPrompt: "询问更大尺码并请求试穿。"
  },
  {
    id: 25, title: "退换与发票", subtitle: "退换货、收据和公司信息", icon: "🧾",
    goal: "说明退换需求并索要正式发票。",
    dialogue: [
      ["You", "I'd like to exchange this item.", "艾德 莱克 兔 伊克斯切恩吉 迪斯 艾特姆。", "我想换这件商品。"],
      ["Staff", "Do you have the receipt?", "杜 优 哈夫 惹 瑞西特？", "你有收据吗？"]
    ],
    phrases: [
      ["Could I get a refund?", "库德 艾 盖特 额 瑞方德？", "可以退款吗？"],
      ["I need a VAT invoice.", "艾 尼德 额 V A T 因沃伊斯。", "我需要增值税发票。"],
      ["The company name is on this card.", "惹 康帕尼 内姆 伊兹 昂 迪斯 卡德。", "公司名称在这张卡片上。"]
    ],
    quiz: { prompt: "希望退款时，应说？", choices: ["Could I get a refund?", "Could I check in?", "Could I have a menu?", "Could I try it on?"], answer: 0, explanation: "refund 是退款。" },
    speakingPrompt: "说明你要换货，并询问是否需要收据。"
  },
  {
    id: 26, title: "紧急求助", subtitle: "走失、失物和请求帮助", icon: "🆘",
    goal: "在紧急情况下用短句快速说明问题。",
    dialogue: [
      ["You", "I've lost my phone. Could you help me?", "艾夫 洛斯特 麦 丰。库德 优 赫尔普 米？", "我的手机丢了。可以帮我吗？"],
      ["Officer", "Where did you last see it?", "威尔 迪德 优 拉斯特 西 伊特？", "你最后一次看到它是在哪里？"]
    ],
    phrases: [
      ["I need help.", "艾 尼德 赫尔普。", "我需要帮助。"],
      ["Please call the police.", "普利兹 科尔 惹 珀利斯。", "请报警。"],
      ["I'm staying at this hotel.", "艾姆 斯泰因 艾特 迪斯 侯泰尔。", "我住在这家酒店。"]
    ],
    quiz: { prompt: "最紧急、最清楚的求助句是？", choices: ["Could I have a receipt?", "I need help.", "The check, please.", "Let's move on."], answer: 1, explanation: "紧急求助时应使用短而明确的句子。" },
    speakingPrompt: "清楚说明你丢了包，并请求帮助。"
  },
  {
    id: 27, title: "药店与身体不适", subtitle: "描述症状、过敏和用药", icon: "💊",
    goal: "简洁描述常见不适，并说明药物过敏。",
    dialogue: [
      ["You", "I have a headache and a sore throat.", "艾 哈夫 额 赫戴克 安德 额 索 斯柔特。", "我头痛，喉咙也痛。"],
      ["Pharmacist", "Do you have any allergies?", "杜 优 哈夫 安尼 艾勒吉兹？", "你有过敏史吗？"]
    ],
    phrases: [
      ["I'm allergic to penicillin.", "艾姆 额勒吉克 兔 佩尼西林。", "我对青霉素过敏。"],
      ["Do I need a prescription?", "杜 艾 尼德 额 普瑞斯克瑞普申？", "我需要处方吗？"],
      ["How often should I take it?", "好 奥芬 舒德 艾 泰克 伊特？", "我应该多久服用一次？"]
    ],
    quiz: { prompt: "说明自己对某药过敏，应说？", choices: ["I'm allergic to penicillin.", "I need a receipt.", "I am on business.", "I have a reservation."], answer: 0, explanation: "allergic to 表示对……过敏。" },
    speakingPrompt: "说明头痛，并明确一个药物过敏信息。"
  },
  {
    id: 28, title: "告别与后续联系", subtitle: "感谢、表达合作意愿", icon: "🛫",
    goal: "礼貌结束会面，并留下后续合作信号。",
    dialogue: [
      ["You", "Thank you for your time today.", "桑克 优 佛 尤尔 泰姆 图德。", "感谢您今天抽出的时间。"],
      ["Client", "It was a productive meeting.", "伊特 沃兹 额 普罗达克提夫 米丁。", "这是一次富有成效的会议。"]
    ],
    phrases: [
      ["I look forward to working with you.", "艾 卢克 佛沃德 兔 沃金 威兹 优。", "期待与您合作。"],
      ["I'll send you a follow-up email.", "艾尔 森德 优 额 法洛阿普 伊梅尔。", "我会给你发送一封跟进邮件。"],
      ["Have a safe trip home.", "哈夫 额 塞夫 吹普 后姆。", "祝你回程一路平安。"]
    ],
    quiz: { prompt: "表达期待合作，较正式的说法是？", choices: ["I look forward to working with you.", "Good morning.", "A table for two.", "Please stop here."], answer: 0, explanation: "look forward to doing 表示期待做某事。" },
    speakingPrompt: "感谢会面，并表示会发送跟进邮件。"
  },
  {
    id: 29, title: "30 天口语复盘", subtitle: "把高频表达连成出差流程", icon: "🧠",
    goal: "按“到达—交通—酒店—会议—返程”串起核心表达。",
    dialogue: [
      ["You", "I'm here on business for five days.", "艾姆 希尔 昂 比兹尼斯 佛 法伊夫 戴兹。", "我来出差五天。"],
      ["You", "Could we confirm the schedule for tomorrow?", "库德 维 康弗姆 惹 斯凯久 佛 图莫柔？", "我们可以确认明天的日程吗？"]
    ],
    phrases: [
      ["Could you say that again?", "库德 优 塞 达特 额根？", "可以再说一遍吗？"],
      ["That works for us.", "达特 沃克斯 佛 阿斯。", "这对我们可行。"],
      ["I'll send you a follow-up email.", "艾尔 森德 优 额 法洛阿普 伊梅尔。", "我会发送跟进邮件。"]
    ],
    quiz: { prompt: "沟通中最能减少误会的策略是？", choices: ["听不懂也不要问", "只用单词回答", "复述并问 Is that correct?", "尽量说得很快"], answer: 2, explanation: "复述并确认是商务沟通里最重要的习惯之一。" },
    speakingPrompt: "用 5 句话描述你从下飞机到离开酒店的基本流程。"
  },
  {
    id: 30, title: "出差情境挑战", subtitle: "独立完成一轮综合对话", icon: "🌍",
    goal: "在一次综合练习中完成问候、确认、协商和告别。",
    dialogue: [
      ["Client", "Can you deliver the samples by Wednesday?", "坎 优 迪里弗 惹 桑普斯 拜 温兹戴？", "你们可以在周三前交付样品吗？"],
      ["You", "Wednesday is tight. Thursday morning works for us. Is that acceptable?", "温兹戴 伊兹 泰特。瑟兹戴 莫宁 沃克斯 佛 阿斯。伊兹 达特 额克塞普特博？", "周三比较紧。周四上午对我们可行，可以接受吗？"]
    ],
    phrases: [
      ["Let me confirm the details.", "莱特 米 康弗姆 惹 迪泰尔斯。", "让我确认一下细节。"],
      ["We're flexible on the date.", "维尔 弗莱克西博 昂 惹 戴特。", "日期可以商量。"],
      ["Thank you for your understanding.", "桑克 优 佛 尤尔 安德斯坦丁。", "感谢您的理解。"]
    ],
    quiz: { prompt: "对方问 Wednesday，但你需要更晚的时间，合适的回答是？", choices: ["No.", "Wednesday is tight. Thursday morning works for us.", "Good morning.", "The check, please."], answer: 1, explanation: "先说明困难，再给出替代方案，比直接拒绝更专业。" },
    speakingPrompt: "模拟客户要求周三交付，你提出周四上午并确认。"
  }
];
