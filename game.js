(() => {
  "use strict";

  const ASSET = "assets/images/v3/";
  const SAVE_KEY = "balance-city-v3-save";
  const CHOICE_LETTERS = ["A", "B", "C"];

  const characterAssets = {
    xiaojie: `${ASSET}characters/xiaojie/master_rgba.png`,
    leader: `${ASSET}characters/class-leader/master_rgba.png`,
    treasurer: `${ASSET}characters/treasurer/master_rgba.png`,
    teacher: `${ASSET}characters/teacher/master_rgba.png`
  };

  const worlds = [
    {
      title: "任務起點：天秤廣場",
      short: "任務起點",
      image: `${ASSET}map-hub-3d.png`,
      alt: "有學校、圖書館、燈塔與傳送門的天秤廣場",
      spawn: { x: 50, y: 84 },
      bounds: { minX: 7, maxX: 93, minY: 23, maxY: 88 },
      solids: [{ x1: 42, x2: 58, y1: 29, y2: 47 }],
      intro: "先熟悉移動方式，再前往中央傳送門。",
      events: [{
        title: "消失的兩千元",
        icon: "✉️",
        mission: "走近發光的傳送門，接下第一個任務",
        x: 72, y: 30,
        story: "六年一班辦完義賣，辛苦賺到的 2,000 元班費不見了。裝錢的信封最後出現在走廊花盆旁，但當時沒有人看清楚發生了什麼。",
        question: "你願意穿越三個平行世界，找出規則與善意怎麼一起幫助大家嗎？"
      }]
    },
    {
      title: "世界一：只看規定城",
      short: "只看規定城",
      image: `${ASSET}map-rules-city-3d.png`,
      alt: "藍灰色校園與走廊組成的只看規定城",
      spawn: { x: 50, y: 84 },
      bounds: { minX: 7, maxX: 93, minY: 25, maxY: 88 },
      solids: [{ x1: 39, x2: 61, y1: 23, y2: 38 }],
      intro: "這裡的人常說：「規定沒寫，就不用多做。」請觀察只守最低底線會帶來什麼結果。",
      goals: ["處理遺失的班費信封", "面對需要幫忙的同學", "了解拾得物報酬的正確程序"],
      npcs: [
        { name: "小傑", asset: "xiaojie", x: 72, y: 58 },
        { name: "班長", asset: "leader", x: 30, y: 62 }
      ],
      events: [
        {
          title: "花盆旁的信封",
          icon: "✉️", x: 68, y: 70,
          mission: "前往花盆旁，看看遺失的信封",
          story: "你在走廊花盆旁發現一個寫著「六年一班班費」的信封。附近沒有人，天空又快下雨了。",
          question: "你會怎麼處理？",
          choices: [
            { label: "記下時間與地點，立刻交給老師或學務處", detail: "保護信封，也留下可以核對的事實。", delta: { rules: 10, care: 5, evidence: 1, trust: 5 }, tone: "good", outcome: "班費被安全保管，老師也能從時間、地點開始查證。大家不用靠猜測找人負責。", note: "處理遺失物時，先保管、記錄並交給適當的人，是同時守規則與減少誤會的做法。" },
            { label: "先放進自己的書包，放學後再說", detail: "本意可能是保管，但別人看見時很容易誤會。", delta: { rules: -3, care: 1, trust: -6 }, tone: "caution", outcome: "有人只看到你把信封放進書包，傳言立刻出現。你雖然想稍後交還，卻沒有留下紀錄，也沒有告知任何人。", note: "好意需要清楚、可被核對的做法，否則容易讓自己和別人陷入誤會。" },
            { label: "當作沒看到，免得惹麻煩", detail: "規定沒有要求我一定要多管閒事。", delta: { care: -8, trust: -3 }, tone: "caution", outcome: "雨水滲進信封，部分義賣紀錄被弄濕。你沒有拿走錢，卻錯過了阻止損失的機會。", note: "法律不會列出生活中的每一種善意；有些事情雖然不一定被處罰，仍會影響大家。" }
          ]
        },
        {
          title: "散落一地的紙張",
          icon: "📄", x: 28, y: 64,
          mission: "去看看跌倒、資料散落的同學",
          story: "班長抱著義賣資料快步走過來，不小心跌倒，紙張散落一地，膝蓋也擦傷了。",
          question: "規定沒有寫「一定要幫忙」，你會怎麼做？",
          choices: [
            { label: "先問她是否受傷，再一起撿資料", detail: "先確認安全，也主動付出一點力量。", delta: { care: 10, trust: 6 }, tone: "good", outcome: "班長得到協助，很快整理好資料，也願意把自己知道的線索告訴你。", note: "同理心能填補規定沒有寫到的地方，讓人感到被尊重。" },
            { label: "請附近老師來幫忙，自己留在旁邊", detail: "找合適的大人處理傷勢，也不讓她獨自等待。", delta: { rules: 4, care: 8, trust: 4 }, tone: "good", outcome: "老師檢查擦傷，你陪著班長把資料收好。安全與關心都被照顧到了。", note: "遇到受傷狀況，尋求適當協助也是負責任的關心。" },
            { label: "繞過去，因為幫忙不是我的義務", detail: "只做規定要求的最低限度。", delta: { care: -10, trust: -6 }, tone: "caution", outcome: "紙張被風吹散，班長一個人又痛又著急。之後同學遇到困難，也開始彼此觀望。", note: "只問「會不會被罰」，可能讓安全的環境變得冷漠。" }
          ]
        },
        {
          title: "可以直接拿兩百元嗎？",
          icon: "⚖️", x: 76, y: 43,
          mission: "到公布欄旁，釐清拾得物報酬規定",
          story: "小傑說：「撿到 2,000 元，就可以直接留下 200 元吧？」大家對規定的說法都不一樣。",
          question: "你會怎麼回應？",
          choices: [
            { label: "先交還並詢問正式程序，不自行拿錢", detail: "拾得人的報酬請求有條件與程序，最高可到物品價值十分之一。", delta: { rules: 10, evidence: 1, trust: 6 }, tone: "good", outcome: "老師說明：遺失物應先交給失主、警察或適當的管理單位。是否請求報酬要依程序處理，不能自己從信封拿走 200 元。", note: "「最多十分之一」不是「一定能直接拿十分之一」；先完成交還與招領程序才是重點。" },
            { label: "完整交還，並表示不請求報酬", detail: "這是可以自由做出的善意選擇。", delta: { rules: 5, care: 9, trust: 7 }, tone: "good", outcome: "班費完整回到班上。大家感謝你的選擇，也更願意在別人需要時互相幫忙。", note: "合法可以主張的權利，不代表每次都必須使用；放棄報酬可以是自願的善意。" },
            { label: "直接抽出 200 元，再把剩下的交還", detail: "反正十分之一就是我的。", delta: { rules: -12, care: -5, trust: -10 }, tone: "caution", outcome: "自行取走金錢引發更大的爭議，也可能涉及侵占遺失物。即使法律設有報酬規定，也不能跳過程序自己拿。", note: "權利要用正確程序行使；不能只記住數字，忽略條件與做法。" }
          ]
        }
      ]
    },
    {
      title: "世界二：只靠勸說森林",
      short: "只靠勸說森林",
      image: `${ASSET}map-persuasion-forest-3d.png`,
      alt: "有發光對話泡泡與岔路的只靠勸說森林",
      spawn: { x: 50, y: 85 },
      bounds: { minX: 7, maxX: 93, minY: 22, maxY: 89 },
      solids: [{ x1: 43, x2: 57, y1: 23, y2: 37 }],
      intro: "這裡沒有共同調查程序，大家只靠感覺與勸說。當傳言出現，善意也可能變成壓力。",
      goals: ["面對未查證的傳言", "用證據重建事情經過", "真相出現後修復關係"],
      npcs: [
        { name: "小傑", asset: "xiaojie", x: 74, y: 56 },
        { name: "班長", asset: "leader", x: 28, y: 57 },
        { name: "老師", asset: "teacher", x: 54, y: 38 }
      ],
      events: [
        {
          title: "會說話的紫色泡泡",
          icon: "💬", x: 25, y: 44,
          mission: "追上發光的傳言泡泡",
          story: "森林裡飄著一句話：「我看到小傑站在花盆附近，所以一定是他拿走班費！」這句話正被越傳越遠。",
          question: "你收到這個消息時，會怎麼做？",
          choices: [
            { label: "先不轉傳，詢問消息從哪裡來", detail: "把「親眼看見」和「猜測」分開。", delta: { rules: 3, care: 5, evidence: 1, trust: 6 }, tone: "good", outcome: "你發現最初的同學只看到小傑經過，沒看見他拿信封。傳言的確定語氣並沒有證據支持。", note: "查來源不是不相信朋友，而是避免把猜測說成事實。" },
            { label: "立刻轉傳，提醒大家小心小傑", detail: "先保護大家比較重要，之後再查。", delta: { care: -6, trust: -12 }, tone: "caution", outcome: "消息快速擴散，小傑還沒機會說明，就被同學排擠。即使後來澄清，受傷的感覺也不會立刻消失。", note: "未查證的指控會造成真實傷害；「我只是轉傳」不能消除影響。" },
            { label: "不轉傳，但也不處理", detail: "我沒有說壞話，應該就沒事。", delta: { care: -2, trust: -3 }, tone: "caution", outcome: "你沒有加入傳言，但泡泡仍繼續擴散。班上越來越多人把猜測當成真相。", note: "沉默有時能避免加害，但若安全且做得到，也可以提醒大家先查證。" }
          ]
        },
        {
          title: "岔路上的調查",
          icon: "🔎", x: 55, y: 58,
          mission: "沿著線索路徑，決定怎麼調查",
          story: "大家都想找回班費。有人提議直接投票：「覺得是小傑的人舉手！」",
          question: "哪一種方法比較公平？",
          choices: [
            { label: "重走動線，查時間、地點與失物招領紀錄", detail: "先蒐集可以核對的資料。", delta: { rules: 8, evidence: 2, trust: 7 }, tone: "good", outcome: "你們比對收攤時間、走廊動線和辦公室紀錄，發現有人早已把信封送到失物招領處。", note: "公平的程序不是拖時間，而是保護每個人不被感覺定罪。" },
            { label: "全班投票，多數人覺得是誰就是誰", detail: "大家的道德判斷加起來應該很準。", delta: { rules: -10, care: -5, trust: -10 }, tone: "caution", outcome: "票數只能表示大家怎麼想，不能證明事情真的發生。少數人也可能被多數人的聲音壓過。", note: "人多不等於證據多；公平判斷需要可核對的事實。" },
            { label: "要求小傑當眾證明自己沒拿", detail: "如果沒做，應該很容易證明。", delta: { rules: -7, care: -7, trust: -9 }, tone: "caution", outcome: "小傑被迫在眾人面前辯解，但沒有人說清楚要用什麼證據。懷疑並沒有因此消失。", note: "不能只因為被懷疑，就把證明清白的責任全丟給對方。" }
          ]
        },
        {
          title: "真相之後",
          icon: "🌱", x: 77, y: 67,
          mission: "到林間長椅，修復被傳言傷害的關係",
          story: "真相找到了：信封一直安全放在辦公室。小傑沒有拿錢，但他已經被議論和排擠了一整天。",
          question: "班上接下來應該怎麼做？",
          choices: [
            { label: "公開更正消息、向小傑道歉，約定下次先查證", detail: "承認影響，也改變未來的做法。", delta: { rules: 5, care: 10, trust: 12 }, tone: "good", outcome: "班長清楚說明真相，轉傳過的人也願意道歉。小傑仍需要時間，但看見大家認真修補關係。", note: "修復不只是說「對不起」，還包括更正錯誤資訊與建立不再重犯的方法。" },
            { label: "把訊息刪掉就好，不必再提", detail: "越解釋可能越尷尬。", delta: { care: -2, trust: -4 }, tone: "caution", outcome: "新訊息消失了，但曾經聽過傳言的人不一定知道真相，小傑也沒有得到正式澄清。", note: "錯誤資訊傳開後，只刪除往往不夠；更正要讓原本的接收者知道。" },
            { label: "怪大家太容易相信，自己不用負責", detail: "反正不是我最先說的。", delta: { care: -8, trust: -10 }, tone: "caution", outcome: "每個人都把責任推給別人，結果沒有人修正消息，也沒有人關心小傑受到的傷害。", note: "共同造成的影響，仍需要每個人負起自己那一部分責任。" }
          ]
        }
      ]
    },
    {
      title: "世界三：規則與善意合作島",
      short: "合作島",
      image: `${ASSET}map-cooperation-island-3d.png`,
      alt: "陽光下有圖書館、燈塔與天秤雕像的合作島",
      spawn: { x: 50, y: 86 },
      bounds: { minX: 7, maxX: 93, minY: 24, maxY: 89 },
      solids: [{ x1: 43, x2: 57, y1: 31, y2: 49 }],
      intro: "這裡用規則守住公平，也用同理心照顧人的感受。試著讓事情既安全、又有溫度。",
      goals: ["依程序保護班費與證據", "照顧焦急同學的感受", "正確談論報酬與班級消息", "完成全班共同約定"],
      npcs: [
        { name: "小傑", asset: "xiaojie", x: 76, y: 63 },
        { name: "出納小安", asset: "treasurer", x: 29, y: 59 },
        { name: "老師", asset: "teacher", x: 73, y: 39 }
      ],
      events: [
        {
          title: "再次出現的信封",
          icon: "✉️", x: 67, y: 71,
          mission: "保護信封，留下清楚紀錄",
          story: "同樣的信封再次出現在花盆旁。這一次，你同時記得規則、公平和同學焦急的心情。",
          question: "哪個做法最完整？",
          choices: [
            { label: "原地保護、記下時間地點，通知老師一起交接", detail: "避免遺失，也讓過程有人可以核對。", delta: { rules: 12, care: 7, evidence: 2, trust: 8 }, tone: "good", outcome: "老師與你一起確認信封，記錄交接時間。班費安全，調查也有清楚起點。", note: "規則提供可核對的程序；關心讓我們願意立刻行動。兩者可以同時做到。" },
            { label: "先放書包保管，等有人詢問再拿出來", detail: "我保證不會動裡面的錢。", delta: { rules: -4, care: 2, trust: -5 }, tone: "caution", outcome: "信封沒有淋雨，但沒有告知與紀錄，仍產生不必要的懷疑。好意的結果不如預期。", note: "透明的交接程序能保護失主，也保護拾得人不被誤會。" },
            { label: "拍照貼班群，請大家自己來認領", detail: "越多人看到，應該越快找到失主。", delta: { rules: -2, care: -3, trust: -4 }, tone: "caution", outcome: "照片露出班級與金額資訊，也引來好幾個無法確認身分的人詢問。", note: "求快仍要注意資訊範圍與認領核對，公開不一定等於安全。" }
          ]
        },
        {
          title: "焦急的出納小安",
          icon: "💛", x: 31, y: 59,
          mission: "陪出納小安釐清事情經過",
          story: "負責保管班費的小安急得快哭了，一直說：「都是我害大家的！」",
          question: "你會怎麼陪她處理？",
          choices: [
            { label: "先安定她，再陪她按時間順序回想與通報", detail: "情緒被照顧後，也依程序找線索。", delta: { rules: 8, care: 12, evidence: 1, trust: 8 }, tone: "good", outcome: "小安慢慢平靜，想起自己收攤時在花盆旁整理過資料。這條線索幫助大家找到信封。", note: "同理心不是放棄查明責任；被好好對待的人，往往更能一起解決問題。" },
            { label: "先責怪她粗心，讓她記住教訓", detail: "犯錯的人就該先被罵。", delta: { care: -10, trust: -8 }, tone: "caution", outcome: "小安更緊張，記憶變得混亂，也不敢再說自己可能忘記的細節。", note: "責任可以之後釐清；羞辱和責任並不是同一件事。" },
            { label: "只照表填寫，不談她的感受", detail: "程序正確就好，情緒不重要。", delta: { rules: 6, care: -4, trust: -2 }, tone: "caution", outcome: "紀錄完成了，但小安感到孤單。她提供的資訊也因太緊張而不完整。", note: "程序守住公平，同理心則讓人能安心參與程序。" }
          ]
        },
        {
          title: "報酬與感謝",
          icon: "🎖️", x: 77, y: 45,
          mission: "和老師確認拾得物的權利與程序",
          story: "班費找回後，同學想感謝拾得人。有人再次問：「法律是不是保證一定拿到 200 元？」",
          question: "最準確的說法是什麼？",
          choices: [
            { label: "先完成交還；報酬依規定與程序請求，最高可到十分之一", detail: "權利、條件與程序要一起說。", delta: { rules: 12, evidence: 1, trust: 7 }, tone: "good", outcome: "大家學會不只背「十分之一」，也理解不能自行取走金錢，且有些情況會影響報酬請求。", note: "法律知識要包含條件與程序，才不會把權利誤用成任意拿取。" },
            { label: "拾得人可以自願不請求報酬", detail: "依法處理後，也能做出善意選擇。", delta: { rules: 6, care: 10, trust: 7 }, tone: "good", outcome: "全班用感謝卡表達心意。拾得人沒有請求金錢，這是他的自由選擇，不是別人可以強迫的。", note: "守法與行善不是互相排斥；先守住底線，再自由選擇更溫暖的做法。" },
            { label: "直接拿 200 元最快，之後再解釋", detail: "結果一樣就不用走程序。", delta: { rules: -12, care: -3, trust: -9 }, tone: "caution", outcome: "自行拿錢再次引發爭議。正確結果不能用錯誤方法達成。", note: "公平程序也在保護拾得人，讓權利的行使清楚、可信。" }
          ]
        },
        {
          title: "全班共同訊息",
          icon: "📣", x: 23, y: 41,
          mission: "在公告板留下全班的共同約定",
          story: "事情解決了。老師請你為班群擬一則訊息，避免下次又出現猜測與排擠。",
          question: "你會發布哪一則？",
          choices: [
            { label: "班費已找回。遇到遺失物請交老師；未查證前不猜人、不轉傳", detail: "說明程序，也保護每個人的名譽。", delta: { rules: 10, care: 10, trust: 12 }, tone: "good", outcome: "大家有了清楚可做的步驟，也知道如何照顧被懷疑者。班級比事件發生前更有合作能力。", note: "好的規範不只禁止錯誤，也告訴大家遇到事情時可以怎麼做。" },
            { label: "班費找到了，某些粗心的人自己要小心", detail: "不點名，但讓大家知道有人犯錯。", delta: { care: -6, trust: -5 }, tone: "caution", outcome: "同學開始猜「某些人」是誰，小安再次成為議論焦點。模糊暗示仍可能傷人。", note: "公告應聚焦可改進的做法，不必用影射製造新的猜測。" },
            { label: "不要再談，反正錢回來就好", detail: "事情結束，不需要規定。", delta: { rules: -4, trust: -3 }, tone: "caution", outcome: "這次風波過去了，但班上沒有留下共同做法，下次遇到相似事件仍可能重演。", note: "把經驗整理成簡單流程，能讓下一次的行動更安全。" }
          ]
        }
      ]
    },
    {
      title: "終章：天秤議會",
      short: "天秤議會",
      image: `${ASSET}map-hub-3d.png`,
      alt: "舉行天秤議會的中央廣場",
      spawn: { x: 50, y: 83 },
      bounds: { minX: 7, maxX: 93, minY: 23, maxY: 88 },
      solids: [{ x1: 42, x2: 58, y1: 29, y2: 47 }],
      intro: "把行動放上天秤：這是規則要求、善意選擇、兩者都有，還是資料不足？",
      events: []
    }
  ];

  const councilCards = [
    { text: "把撿到的班費信封交給老師或學務處", answer: "law", why: "遺失物需要依程序交還或送交適當單位，這是在守住基本規則。" },
    { text: "看到同學跌倒，主動問他要不要幫忙", answer: "care", why: "這通常不是靠處罰強迫，而是出於同理心的善意。" },
    { text: "保護信封、記下時間地點，再由老師共同確認", answer: "both", why: "既依程序保護物品，也主動減少失主焦急與他人被誤會。" },
    { text: "只因某人站在花盆旁，就認定是他拿錢", answer: "unknown", why: "出現在附近不是拿走信封的證據，現有資料不足。" },
    { text: "拾得人直接從 2,000 元中拿走 200 元", answer: "law", why: "不能自行取走金錢；報酬權利要依條件與程序行使。" },
    { text: "安慰焦急的班級出納，陪他回想事情經過", answer: "care", why: "這是超過最低要求的關心，也可能幫助大家找到線索。" },
    { text: "班群公告先說明處理程序，並提醒不要猜人", answer: "both", why: "程序保護公平，不猜人則照顧每個人的名譽與感受。" },
    { text: "監視畫面模糊，看見一個背影就公開姓名", answer: "unknown", why: "模糊影像無法確認身分，應繼續查證而不是公開指控。" }
  ];

  const categoryLabels = { law: "規則要求", care: "善意選擇", both: "兩者都有", unknown: "資料不足" };

  const defaultState = () => ({
    version: 3, chapter: 0, eventIndex: 0, rules: 45, care: 45, evidence: 0, trust: 50,
    history: [], sound: true, councilIndex: 0, councilCorrect: 0, councilLog: [], completed: false,
    player: { x: 50, y: 84 }
  });

  let state = defaultState();
  let savedAtLaunch = null;
  let modalOpen = false;
  let activeHotspot = null;
  let nearHotspot = false;
  let lastFrame = performance.now();
  let robotPos = { x: 45, y: 84 };
  const heldKeys = new Set();
  const joystickVector = { x: 0, y: 0 };

  const $ = (selector) => document.querySelector(selector);
  const dom = {
    worldName: $("#worldName"), worldBackground: $("#worldBackground"), questText: $("#questText"),
    rulesFill: $("#rulesFill"), rulesValue: $("#rulesValue"), careFill: $("#careFill"), careValue: $("#careValue"),
    evidenceCount: $("#evidenceCount"), npcLayer: $("#npcLayer"), hotspotLayer: $("#hotspotLayer"),
    player: $("#player"), robot: $("#robot"), nearHint: $("#nearHint"), modalRoot: $("#modalRoot"),
    soundBtn: $("#soundBtn"), helpBtn: $("#helpBtn"), journalBtn: $("#journalBtn"),
    interactBtn: $("#interactBtn"), joystick: $("#joystick"), joystickKnob: $("#joystickKnob"),
    viewport: $("#gameViewport"), saveState: $("#saveState")
  };

  const sounds = {
    tap: new Audio("sound/ui-tap.mp3"), enter: new Audio("sound/world-enter.mp3"),
    clue: new Audio("sound/clue-open.mp3"), clear: new Audio("sound/level-clear.mp3"), ending: new Audio("sound/ending.mp3")
  };
  Object.values(sounds).forEach((audio) => { audio.volume = 0.38; audio.preload = "auto"; });

  function playSound(name) {
    if (!state.sound || !sounds[name]) return;
    try { sounds[name].currentTime = 0; sounds[name].play().catch(() => {}); } catch (_) { /* sound is optional */ }
  }

  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

  function loadSave() {
    try {
      const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (parsed && parsed.version === 3) return { ...defaultState(), ...parsed };
    } catch (_) { /* ignore invalid local data */ }
    return null;
  }

  function saveGame() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      dom.saveState.textContent = "已自動儲存";
      setTimeout(() => { dom.saveState.textContent = "進度會自動保存在這台裝置"; }, 1400);
    } catch (_) { dom.saveState.textContent = "此瀏覽器無法儲存進度"; }
  }

  function resetGame() {
    state = defaultState();
    robotPos = { x: 45, y: 84 };
    saveGame();
    loadWorld(0, false);
    showTutorial();
  }

  function updateHud() {
    state.rules = clamp(state.rules, 0, 100);
    state.care = clamp(state.care, 0, 100);
    dom.rulesFill.style.width = `${state.rules}%`;
    dom.rulesValue.textContent = state.rules;
    dom.careFill.style.width = `${state.care}%`;
    dom.careValue.textContent = state.care;
    dom.evidenceCount.textContent = state.evidence;
    dom.soundBtn.textContent = state.sound ? "🔊" : "🔇";
    dom.soundBtn.setAttribute("aria-label", state.sound ? "關閉音效" : "開啟音效");
    document.querySelectorAll("#chapterRail li").forEach((item) => {
      const chapter = Number(item.dataset.chapter);
      item.classList.toggle("is-current", chapter === state.chapter);
      item.classList.toggle("is-complete", chapter < state.chapter || state.completed);
    });
  }

  function loadWorld(index, showIntro = true) {
    state.chapter = index;
    const world = worlds[index];
    if (!world) return;
    state.player = { ...world.spawn };
    robotPos = { x: state.player.x - 5, y: state.player.y + 1 };
    dom.worldName.textContent = world.title;
    dom.worldBackground.style.opacity = "0";
    setTimeout(() => {
      dom.worldBackground.src = world.image;
      dom.worldBackground.alt = world.alt;
      dom.worldBackground.style.opacity = "1";
    }, 150);
    renderScene();
    updateHud();
    saveGame();
    if (index === 4) {
      if (showIntro) showLevelIntro(index);
      else showCouncilCard();
    } else if (showIntro && index > 0) {
      showLevelIntro(index);
    }
    playSound("enter");
  }

  function renderScene() {
    const world = worlds[state.chapter];
    const events = world.events || [];
    activeHotspot = events[state.eventIndex] || null;
    dom.questText.textContent = activeHotspot ? activeHotspot.mission : (state.chapter === 4 ? "完成天秤議會的八張判斷卡" : "本區域任務已完成");
    dom.player.style.left = `${state.player.x}%`;
    dom.player.style.top = `${state.player.y}%`;
    dom.robot.style.left = `${robotPos.x}%`;
    dom.robot.style.top = `${robotPos.y}%`;

    dom.npcLayer.innerHTML = (world.npcs || []).map((npc) => `
      <div class="npc" style="left:${npc.x}%;top:${npc.y}%">
        <img src="${characterAssets[npc.asset]}" alt=""><span class="npc-name">${npc.name}</span>
      </div>`).join("");

    dom.hotspotLayer.innerHTML = events.map((event, index) => {
      const status = index < state.eventIndex ? "is-complete" : index > state.eventIndex ? "is-locked" : "";
      const label = index < state.eventIndex ? `${event.title}，已完成` : index > state.eventIndex ? `${event.title}，尚未開放` : `${event.title}，可互動`;
      return `<button class="hotspot ${status}" data-event="${index}" style="left:${event.x}%;top:${event.y}%" type="button" aria-label="${label}" ${index > state.eventIndex ? "disabled" : ""}><span>${index < state.eventIndex ? "✓" : event.icon}</span><small>${index < state.eventIndex ? "已完成" : event.title}</small></button>`;
    }).join("");
    dom.hotspotLayer.querySelectorAll(".hotspot").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.event);
        if (index === state.eventIndex) openCurrentEvent();
      });
    });
    updateNearHint();
  }

  function canMoveTo(x, y) {
    const world = worlds[state.chapter];
    if (x < world.bounds.minX || x > world.bounds.maxX || y < world.bounds.minY || y > world.bounds.maxY) return false;
    return !(world.solids || []).some((r) => x > r.x1 && x < r.x2 && y > r.y1 && y < r.y2);
  }

  function movementLoop(now) {
    const elapsed = Math.min(32, now - lastFrame);
    lastFrame = now;
    let dx = joystickVector.x;
    let dy = joystickVector.y;
    if (heldKeys.has("arrowleft") || heldKeys.has("a")) dx -= 1;
    if (heldKeys.has("arrowright") || heldKeys.has("d")) dx += 1;
    if (heldKeys.has("arrowup") || heldKeys.has("w")) dy -= 1;
    if (heldKeys.has("arrowdown") || heldKeys.has("s")) dy += 1;
    const moving = !modalOpen && (Math.abs(dx) > .08 || Math.abs(dy) > .08);
    if (moving) {
      const length = Math.hypot(dx, dy) || 1;
      const speed = .026 * elapsed;
      dx = dx / length * speed;
      dy = dy / length * speed;
      const nx = state.player.x + dx;
      const ny = state.player.y + dy;
      if (canMoveTo(nx, state.player.y)) state.player.x = nx;
      if (canMoveTo(state.player.x, ny)) state.player.y = ny;
      dom.player.classList.add("is-walking");
      dom.player.classList.toggle("is-left", dx < -.02);
    } else {
      dom.player.classList.remove("is-walking");
    }
    robotPos.x += ((state.player.x - 5) - robotPos.x) * .055;
    robotPos.y += ((state.player.y + 1) - robotPos.y) * .055;
    dom.player.style.left = `${state.player.x}%`;
    dom.player.style.top = `${state.player.y}%`;
    dom.robot.style.left = `${robotPos.x}%`;
    dom.robot.style.top = `${robotPos.y}%`;
    updateNearHint();
    requestAnimationFrame(movementLoop);
  }

  function updateNearHint() {
    if (!activeHotspot || modalOpen) {
      nearHotspot = false;
      dom.nearHint.classList.remove("is-visible");
      return;
    }
    const distance = Math.hypot(state.player.x - activeHotspot.x, state.player.y - activeHotspot.y);
    nearHotspot = distance < 12;
    dom.nearHint.classList.toggle("is-visible", nearHotspot);
    dom.nearHint.querySelector("span").textContent = nearHotspot ? `互動：${activeHotspot.title}` : "互動";
  }

  function interact() {
    if (modalOpen) return;
    if (nearHotspot) openCurrentEvent();
    else showToast("再靠近發光的任務點，就可以互動囉！");
  }

  function openModal(content, wide = false) {
    modalOpen = true;
    dom.modalRoot.classList.add("is-open");
    dom.modalRoot.innerHTML = `<div class="modal-backdrop"><section class="modal ${wide ? "wide" : ""}" role="dialog" aria-modal="true">${content}</section></div>`;
    setTimeout(() => dom.modalRoot.querySelector("button")?.focus(), 30);
  }

  function closeModal() {
    modalOpen = false;
    dom.modalRoot.classList.remove("is-open");
    dom.modalRoot.innerHTML = "";
    dom.viewport.focus({ preventScroll: true });
  }

  function modalHeader(icon, eyebrow, title) {
    return `<header class="modal-head"><span class="modal-icon" aria-hidden="true">${icon}</span><div><span class="modal-eyebrow">${eyebrow}</span><h2>${title}</h2></div></header>`;
  }

  function showTitle() {
    const hasSave = Boolean(savedAtLaunch);
    openModal(`
      <div class="modal-body hero-title">
        <div class="emblem" aria-hidden="true">⚖</div>
        <h2>天秤之城：平行時空</h2>
        <p class="subtitle">法律守住底線，善意讓生活更溫暖</p>
        <div class="mission-strip">六年一班的 2,000 元班費消失了。穿越三個世界，看看不同做法會帶來什麼後果。</div>
        <p>這不是考試，也沒有唯一的「完美玩家」。請做出你真正想選的決定，再觀察結果。</p>
      </div>
      <div class="modal-actions">
        ${hasSave ? '<button id="restartBtn" class="secondary-btn" type="button">重新開始</button><button id="continueBtn" class="primary-btn" type="button">繼續上次進度</button>' : '<button id="startBtn" class="primary-btn" type="button">開始冒險</button>'}
      </div>`);
    $("#startBtn")?.addEventListener("click", resetGame);
    $("#restartBtn")?.addEventListener("click", resetGame);
    $("#continueBtn")?.addEventListener("click", () => {
      state = savedAtLaunch;
      loadWorld(state.chapter, false);
      closeModal();
      if (state.chapter === 4) showCouncilCard();
    });
  }

  function showTutorial() {
    openModal(`${modalHeader("🎮", "出發前說明", "先學會移動與互動")}
      <div class="modal-body">
        <div class="tutorial-grid">
          <div class="tutorial-card"><span class="big">⌨️</span><h3>電腦操作</h3><p>方向鍵或 WASD 移動；靠近任務點後按 E 或空白鍵。</p></div>
          <div class="tutorial-card"><span class="big">📱</span><h3>iPad 操作</h3><p>拖曳左側圓形搖桿移動；靠近後點右側手掌。</p></div>
          <div class="tutorial-card"><span class="big">✨</span><h3>找任務點</h3><p>跟著發光圓圈前進，也可以直接點發光圓圈互動。</p></div>
          <div class="tutorial-card"><span class="big">🧭</span><h3>做決定</h3><p>每個選擇都會顯示後果。選得不理想，也能在後面修復。</p></div>
        </div>
      </div>
      <div class="modal-actions"><button id="tutorialGo" class="primary-btn" type="button">我會操作了，前往傳送門</button></div>`, true);
    $("#tutorialGo").addEventListener("click", () => { playSound("tap"); closeModal(); renderScene(); });
  }

  function showHelp() {
    openModal(`${modalHeader("?", "隨時可以回來看", "操作與任務說明")}
      <div class="modal-body">
        <div class="tutorial-grid">
          <div class="tutorial-card"><span class="big">↕️</span><h3>移動</h3><p>電腦用方向鍵／WASD；iPad 用左側搖桿。</p></div>
          <div class="tutorial-card"><span class="big">☝</span><h3>互動</h3><p>靠近發光點按 E、空白鍵或右側手掌；也可直接點任務點。</p></div>
        </div>
        <p class="think-note">上方兩條能量不是分數排名。它們記錄你在旅途中使用「規則」與「關懷」思考的方式。</p>
      </div><div class="modal-actions"><button id="closeHelp" class="primary-btn" type="button">回到遊戲</button></div>`);
    $("#closeHelp").addEventListener("click", closeModal);
  }

  function showJournal() {
    const entries = state.history.length ? state.history.map((entry) => `<div class="journal-item"><b>${entry.world}｜${entry.event}</b><br>${entry.choice}</div>`).join("") : '<p class="journal-empty">還沒有任務紀錄。完成第一個選擇後，紀錄會出現在這裡。</p>';
    openModal(`${modalHeader("📋", "我的旅程", "任務紀錄")}
      <div class="modal-body"><div class="journal-list">${entries}</div><p class="think-note">目前信任感：${state.trust}／100。信任不會因一次選擇永遠消失，願意澄清、道歉和改進就能慢慢修復。</p></div>
      <div class="modal-actions"><button id="closeJournal" class="primary-btn" type="button">回到遊戲</button></div>`, true);
    $("#closeJournal").addEventListener("click", closeModal);
  }

  function showLevelIntro(index) {
    const world = worlds[index];
    openModal(`${modalHeader(index === 1 ? "🏙️" : index === 2 ? "🌲" : index === 3 ? "🏝️" : "⚖️", `第 ${index} 關`, world.title)}
      <div class="modal-body level-preview">
        <img src="${world.image}" alt="${world.alt}">
        <div><p>${world.intro}</p>${world.goals ? `<strong>本關任務：</strong><ul>${world.goals.map((goal) => `<li>${goal}</li>`).join("")}</ul>` : ""}</div>
      </div>
      <div class="modal-actions"><button id="enterLevel" class="primary-btn" type="button">${index === 4 ? "開始議會判斷" : "進入關卡"}</button></div>`, true);
    $("#enterLevel").addEventListener("click", () => {
      closeModal();
      if (index === 4) showCouncilCard();
    });
  }

  function openCurrentEvent() {
    const event = worlds[state.chapter].events[state.eventIndex];
    if (!event) return;
    playSound("clue");
    if (state.chapter === 0) {
      openModal(`${modalHeader("✉️", "冒險任務", event.title)}
        <div class="modal-body"><div class="story-box"><p>${event.story}</p></div><p class="question">${event.question}</p><p>小衡機器人會陪你記錄線索。每個世界都會發生同一件事，但人們的處理方式不同。</p></div>
        <div class="modal-actions"><button id="beginWorlds" class="primary-btn" type="button">接受任務，進入世界一</button></div>`);
      $("#beginWorlds").addEventListener("click", () => { closeModal(); state.eventIndex = 0; loadWorld(1, true); });
      return;
    }
    const choices = event.choices.map((choice, index) => `<button class="choice-btn" data-choice="${index}" type="button"><span class="choice-letter">${CHOICE_LETTERS[index]}</span><span>${choice.label}<small>${choice.detail}</small></span></button>`).join("");
    openModal(`${modalHeader(event.icon, worlds[state.chapter].short, event.title)}
      <div class="modal-body"><div class="story-box"><p>${event.story}</p></div><p class="question">${event.question}</p><div class="choice-list">${choices}</div></div>`, true);
    dom.modalRoot.querySelectorAll("[data-choice]").forEach((button) => button.addEventListener("click", () => chooseOption(Number(button.dataset.choice))));
  }

  function chooseOption(index) {
    const world = worlds[state.chapter];
    const event = world.events[state.eventIndex];
    const choice = event.choices[index];
    if (!choice) return;
    const delta = choice.delta || {};
    state.rules = clamp(state.rules + (delta.rules || 0), 0, 100);
    state.care = clamp(state.care + (delta.care || 0), 0, 100);
    state.evidence = Math.max(0, state.evidence + (delta.evidence || 0));
    state.trust = clamp(state.trust + (delta.trust || 0), 0, 100);
    state.history.push({ world: world.short, event: event.title, choice: choice.label });
    updateHud();
    saveGame();
    playSound("tap");
    const impacts = [
      effectChip("規則", delta.rules), effectChip("關懷", delta.care), effectChip("證據卡", delta.evidence), effectChip("信任", delta.trust)
    ].filter(Boolean).join("");
    openModal(`${modalHeader(choice.tone === "good" ? "✨" : "🧭", "選擇造成的結果", event.title)}
      <div class="modal-body"><div class="consequence ${choice.tone}"><h3>${choice.tone === "good" ? "這個做法帶來幫助" : "這個做法出現了需要留意的影響"}</h3><p>${choice.outcome}</p><div class="impact-row">${impacts}</div><div class="think-note">想一想：${choice.note}</div></div></div>
      <div class="modal-actions"><button id="continueStory" class="primary-btn" type="button">繼續前進</button></div>`, true);
    $("#continueStory").addEventListener("click", finishEvent);
  }

  function effectChip(name, value) {
    if (!value) return "";
    const positive = value > 0;
    return `<span class="impact ${positive ? "plus" : "minus"}">${name} ${positive ? "+" : ""}${value}</span>`;
  }

  function finishEvent() {
    closeModal();
    state.eventIndex += 1;
    saveGame();
    const world = worlds[state.chapter];
    if (state.eventIndex < world.events.length) {
      renderScene();
      showToast("新的任務點亮起來了！");
    } else {
      renderScene();
      showLevelComplete();
    }
  }

  function showLevelComplete() {
    const chapter = state.chapter;
    const next = chapter + 1;
    playSound("clear");
    const summaries = {
      1: "只靠規定能守住一些底線，但規定不可能寫完每一種善意。只問「會不會被罰」，生活會失去互助。",
      2: "只靠感覺與勸說，容易讓傳言變成多數人的壓力。公平程序與可核對的證據能保護每個人。",
      3: "規則守住公平與安全；同理心讓人願意合作、修復關係。兩者一起使用，才能讓班級真正安心。"
    };
    openModal(`${modalHeader("🏅", "關卡完成", worlds[chapter].title)}
      <div class="modal-body"><p class="story-box">${summaries[chapter]}</p><div class="report-grid"><div class="report-card"><span>⚖️</span><strong>${state.rules}</strong><small>規則守護</small></div><div class="report-card"><span>💛</span><strong>${state.care}</strong><small>關懷溫度</small></div><div class="report-card"><span>🔎</span><strong>${state.evidence}</strong><small>證據卡</small></div></div></div>
      <div class="modal-actions"><button id="nextWorld" class="primary-btn" type="button">${next === 4 ? "前往天秤議會" : "前往下一個世界"}</button></div>`);
    $("#nextWorld").addEventListener("click", () => { closeModal(); state.eventIndex = 0; loadWorld(next, true); });
  }

  function showCouncilCard(feedback = null) {
    const index = state.councilIndex;
    if (index >= councilCards.length) { showFinalReport(); return; }
    const card = councilCards[index];
    const feedbackHtml = feedback ? `<div class="consequence ${feedback.correct ? "good" : "caution"}"><h3>${feedback.correct ? "判斷得很完整！" : `這張卡較適合：${categoryLabels[card.answer]}`}</h3><p>${card.why}</p></div>` : `<div class="council-card">${card.text}</div><div class="category-grid">${Object.entries(categoryLabels).map(([key, label]) => `<button class="category-btn" data-category="${key}" type="button">${label}</button>`).join("")}</div>`;
    openModal(`${modalHeader("⚖️", "終章任務", "天秤議會")}
      <div class="modal-body"><div class="council-progress">判斷卡 ${index + 1}／${councilCards.length}</div>${feedbackHtml}</div>
      ${feedback ? '<div class="modal-actions"><button id="nextCouncil" class="primary-btn" type="button">下一張判斷卡</button></div>' : ""}`);
    if (feedback) {
      $("#nextCouncil").addEventListener("click", () => { state.councilIndex += 1; saveGame(); showCouncilCard(); });
    } else {
      dom.modalRoot.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => answerCouncil(button.dataset.category)));
    }
  }

  function answerCouncil(category) {
    const card = councilCards[state.councilIndex];
    const correct = category === card.answer;
    if (correct) state.councilCorrect += 1;
    state.councilLog.push({ card: card.text, selected: category, correct });
    saveGame();
    playSound(correct ? "clue" : "tap");
    showCouncilCard({ correct });
  }

  function showFinalReport() {
    state.completed = true;
    updateHud();
    saveGame();
    playSound("ending");
    const strongest = state.rules >= state.care ? "你很會用清楚程序保護公平" : "你很能注意別人的感受與需要";
    const nextStep = state.rules < state.care ? "下一次做決定時，再多問一句：「有沒有可核對的程序或證據？」" : "下一次做決定時，再多問一句：「這個做法會讓當事人有什麼感受？」";
    openModal(`${modalHeader("🌟", "旅程完成", "我的思辨旅程")}
      <div class="modal-body">
        <p class="story-box"><strong>${strongest}</strong>。你完成了三個平行世界，也看見：法律像安全圍欄，守住每個人的基本權利；道德像心中的指南針，引導我們做出更體貼的選擇。</p>
        <div class="report-grid"><div class="report-card"><span>⚖️</span><strong>${state.rules}</strong><small>規則守護</small></div><div class="report-card"><span>💛</span><strong>${state.care}</strong><small>關懷溫度</small></div><div class="report-card"><span>🧠</span><strong>${state.councilCorrect}／8</strong><small>議會判斷</small></div></div>
        <div class="next-step"><strong>下一步挑戰：</strong>${nextStep}</div>
        <p class="think-note">真正成熟的判斷，不是永遠一次選對，而是願意看見後果、查證事實，並在需要時修復關係。</p>
      </div>
      <div class="modal-actions"><button id="reviewJourney" class="secondary-btn" type="button">查看任務紀錄</button><button id="playAgain" class="primary-btn" type="button">重新體驗</button></div>`, true);
    $("#reviewJourney").addEventListener("click", showJournal);
    $("#playAgain").addEventListener("click", resetGame);
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 1900);
  }

  function setupKeyboard() {
    window.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      if (["arrowleft", "arrowright", "arrowup", "arrowdown", "w", "a", "s", "d"].includes(key)) {
        heldKeys.add(key);
        event.preventDefault();
      }
      if (!event.repeat && (key === "e" || key === " ")) {
        interact();
        event.preventDefault();
      }
    });
    window.addEventListener("keyup", (event) => heldKeys.delete(event.key.toLowerCase()));
    window.addEventListener("blur", () => heldKeys.clear());
  }

  function setupJoystick() {
    let pointerId = null;
    const update = (event) => {
      const rect = dom.joystick.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = (event.clientX - cx) / (rect.width * .5);
      let dy = (event.clientY - cy) / (rect.height * .5);
      const length = Math.hypot(dx, dy);
      if (length > 1) { dx /= length; dy /= length; }
      joystickVector.x = dx;
      joystickVector.y = dy;
      dom.joystickKnob.style.transform = `translate(calc(-50% + ${dx * 42}%), calc(-50% + ${dy * 42}%))`;
    };
    const end = (event) => {
      if (pointerId !== event.pointerId) return;
      pointerId = null;
      joystickVector.x = 0; joystickVector.y = 0;
      dom.joystickKnob.style.transform = "translate(-50%, -50%)";
    };
    dom.joystick.addEventListener("pointerdown", (event) => {
      pointerId = event.pointerId;
      dom.joystick.setPointerCapture(pointerId);
      update(event);
    });
    dom.joystick.addEventListener("pointermove", (event) => { if (pointerId === event.pointerId) update(event); });
    dom.joystick.addEventListener("pointerup", end);
    dom.joystick.addEventListener("pointercancel", end);
  }

  function init() {
    savedAtLaunch = loadSave();
    state = savedAtLaunch || defaultState();
    loadWorld(state.chapter, false);
    dom.soundBtn.addEventListener("click", () => { state.sound = !state.sound; updateHud(); saveGame(); playSound("tap"); });
    dom.helpBtn.addEventListener("click", showHelp);
    dom.journalBtn.addEventListener("click", showJournal);
    dom.interactBtn.addEventListener("click", interact);
    setupKeyboard();
    setupJoystick();
    requestAnimationFrame(movementLoop);
    showTitle();
  }

  init();
})();
