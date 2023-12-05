
import enLocale from "element-ui/lib/locale/lang/en";
const cnt = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Finance是為AMM和CLMM Dexes提供槓桿流動性和基於人工智慧的資產管理基金的DeFi協議",
    product: "產品",
    whitePaper: "白皮書",
    community: "社群",
    video: "影片",
    secure: "安全",
    docs: "文檔",
    buyApoy: "購買APOY",
    launchApp: "進入",
    tvl: "總鎖倉量",
    lock: "鎖倉",
    learnMore: "了解更多",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    homeCardTitleFund: "分散式基金",
    homeCardTitleAi: "人工智慧",
    homeFirst1: "Apoy是第一個完全相容AMM和CLMM演算法的資產管理協議。",
    homeFirst2: "Apoy是第一個將去中心化智能合約用於資產管理的基金協議.",
    homeFirst3: "Apoy是第一個使用人工智慧演算法獲得最佳收入的基金協議.",
    howItWorkTitle: "如何運作?",
    howItWorkLYFTitle: "槓桿收益農場",
    howItWorkLYF1: "• 從借貸池借用代幣作為槓桿資金，並向Dex提供流動性以獲得獎勵.",
    howItWorkLYF2: "• 可以利用許多精心設計的策略.",
    howItWorkLYF3: "• 能夠自動調解CLMM做市的價格段，防止價格越界，提升收益率.",
    howItWorkLendTitle: "借貸",
    howItWorkLend1: "• 用戶可在貸款池中存款，以向借款人獲得回報.",
    howItWorkLend2: "• 借貸不會向其他外部協議提供代幣，它只向Apoy Finance槓桿收益農場和基金出借代幣，借到的資金不允許用戶提走，借款時不要求超額抵押。",
    howItWorkAMFTitle: "資產管理基金",
    howItWorkAMF1: "• 為使用者自動管理槓桿收益農場中的部位，利用人工智慧演算法，在風險與效益中取得最佳平衡.",
    howItWorkAMF2: "• 有多樣化的基金，滿足不同資產管理需求。 如債券基金，對沖基金，指數基金等.",
    howItWorkAMF3: "",
    howItWorkDexTitle: "分散式交易所",
    howItWorkDex1: "• Apoy的流動性儲存於Uniswap和PancakeSwap等Dexes.",
    howItWorkDex2: "• Apoy是DeFi第一個支援AMM和CLMM演算法的資產管理協議.",
    lyfHead: "槓桿收益農場",
    lyfDesc1: "Apoy演算法可以自動調整CLMM的流動性質押的價格範圍，以避免超出價格範圍，同時取得更高.",
    lyfDesc2: "槓桿收益農場允許使用者同時進行做多和做空操作。 向貸款池借款相當於做空功能，持有部位則相當於做多功能。 相較之下，使用者自己在Dex上進行流動性質押，則只有做多的功能.",
    lyfDesc3: "槓桿是有風險的。儘管如此，使用者可以透過精心設計的策略來規避風險，並獲得豐厚的農場獎勵.",
    lyfStrategy1: "雙穩定幣策略",
    lyfStrategy2: "無槓桿策略",
    lyfStrategy3: "牛市做多策略",
    lyfStrategy4: "熊市做空策略",
    lyfStrategy5: "對沖風險策略",
    lyfStrategy6: "一倍敞口做多策略",
    amfHead: "資產管理基金",
    amfBondTitle: "債券基金",
    amfBondFund1: "• 使用雙穩定代幣獲得極為穩定的投資報酬率",
    amfBondFund2: "• Apoy智慧演算法自動計算最佳槓桿率和借款利息，實現投資最大化.",
    amfBondFund3: "• 損益以穩定幣為計價標準.",
    amfHedgeTitle: "對沖基金",
    amfHedgeFund1: "• Apoy使用智慧合約管理多頭和空頭頭寸，將風險敞口對沖至零.",
    amfHedgeFund2: "• 可以中和市場風險，獲得高而穩定的投資回報.",
    amfHedgeFund3: "• Apoy使用智慧演算法自動調整部位.",
    amfHedgeFund4: "• 損益以穩定幣為計價標準.",
    amfIndexTitle: "指數基金",
    amfIndexFund1: "• Apoy使用智能合約管理多頭和空頭部位以追蹤價格波動.",
    amfIndexFund2: "• 不僅享受幣價上漲的長期價值增長，還享受豐厚的農場回報.",
    amfIndexFund3: "• Apoy使用人工智慧演算法自動調整部位.",
    amfIndexFund4: "• 損益以非穩定幣為計價標準.",
    aiHead: "人工智慧",
    aiTitle1: "問題",
    aiDesc1: "流動性質押時，如何在更高的資金使用效率與更低的無常損失取得平衡？ 基金調倉與重新平衡之際，如何設定最佳的曝險調整比例，才能在價值損失與調倉頻率之間達到最佳效果？",
    aiTitle2: "特徵工程",
    aiDesc2: "Apoy將鏈上的資料取樣，並以聚類演算法進行特徵工程，包括特徵抽取，特徵組合。 產生高維特徵空間，能夠對線上問題進行良好的擬合，以便在模型訓練時使用。",
    aiTitle3: "演算法",
    aiDesc3: "Apoy使用了SVM（Support Vector Machines)，DNN（Deep Neural Network）等機器學習人工智慧演算法來解決這些問題，包括特徵工程與模型訓練、線上預測。 以幫用戶獲得最佳效益",
    diyTitle: "在Dex自己做市",
    diyAdvn: "優點",
    diyAdvanTip1: "槓桿意味著更多代幣和更多獎勵",
    diyAdvanTip2: "Apoy同時具有做多和做空操作。相較之下，在Dex自己做市只有做多功能。使用者可以從做多和做空操作中獲益，並使用更多策略.",
    diyAdvanTip3: "Apoy提供自動資產管理基金，包括債券基金、對沖基金和指數基金.",
    diyAdvanTip4: "流動性提供者可以使頭寸敞口為零，稱為市場中性策略，以避免市場風險。同時獲得豐厚的農場獎勵.",
    diyAdvanTip5: "流動性提供者可以在加密貨幣價格上漲時獲得長期價值，並獲得豐厚的農場獎勵.",
    diyAdvanTip6: "Apoy演算法可以自動重新平衡使用CLMM演算法的Dexes以避免超出範圍.",
    diyAdvanTip7: "Apoy人工智慧演算法為用戶帶來最大收益.",
    joinCommunity: "加入社群",

  },
  error: {},
  ...enLocale,
};

export default cnt;