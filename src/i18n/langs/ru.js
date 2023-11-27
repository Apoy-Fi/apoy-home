
import enLocale from "element-ui/lib/locale/lang/en";
const ru = {
  common: {
    projectName: "Apoy",
    homeTip1: "Apoy Finance — это DeFi, предоставляющий ликвидность с использованием заемных средств и фонды управления активами на основе искусственного интеллекта для дексов AMM и CLMM.",
    product: "Продукты",
    whitePaper: "Белая бумага",
    community: "Сообщество",
    video: "видео",
    secure: "Безопасный",
    docs: "Документы",
    buyApoy: "Купить APOY",
    launchApp: "Запуск",
    tvl: "Общая стоимость заблокирована",
    lock: "Замок",
    learnMore: "Узнать больше",
    twitter: "Twitter",
    discord: "Discord",
    telegram: "Telegram",
    homeCardTitleFund: "Децентрализованный фонд",
    homeCardTitleAi: "Искусственный интеллект",
    homeFirst1: "Apoy — первое решение для управления активами, полностью совместимое с алгоритмами AMM и CLMM.",
    homeFirst2: "Apoy — первая компания, которая использует децентрализованные смарт-контракты для фондов управления активами.",
    homeFirst3: "Apoy — первая компания, которая использует алгоритмы искусственного интеллекта для получения максимальной прибыли от фондов..",
    howItWorkTitle: "Как это работает?",
    howItWorkLYFTitle: "Доходные фермы с кредитным плечом",
    howItWorkLYF1: "• Занимайте токены у кредитных пулов в качестве кредитного плеча и предоставляйте Dex ликвидность для получения вознаграждений.",
    howItWorkLYF2: "• Он может воспользоваться многими хорошо продуманными стратегиями.",
    howItWorkLYF3: "• Профессиональное решение для поставщика ликвидности как для AMM, так и для CLMM.",
    howItWorkLendTitle: "Кредитование",
    howItWorkLend1: "• Пользователи вносят депозиты в кредитные пулы, чтобы получать прибыль от заемщиков.",
    howItWorkLend2: "• Кредитование не будет предоставлять токены другим внешним протоколам. Он предоставляет токены только доходным фермам и фондам Apoy с кредитным плечом.",
    howItWorkAMFTitle: "Фонды управления активами",
    howItWorkAMF1: "• Автоматическое управление позициями в доходных фермах с кредитным плечом для пользователей.",
    howItWorkAMF2: "• Хеджирование рыночного риска с помощью алгоритма Apoy.",
    howItWorkAMF3: "• Не только извлекайте выгоду из долгосрочной ценности, когда цена токенов растет, но и получайте вознаграждение за фарминг.",
    howItWorkDexTitle: "Декс",
    howItWorkDex1: "• Ликвидность Apoy хранится в дексах Uniswap и PancakeSwap.",
    howItWorkDex2: "• Apoy — первый DeFi, поддерживающий управление активами по алгоритмам AMM и CLMM.",
    lyfHead: "Фермерство с использованием заемных средств",
    lyfDesc1: "Алгоритм Apoy может автоматически перебалансировать дексы CLMM, чтобы избежать выхода за пределы диапазона.",
    lyfDesc2: "Фермы доходности с кредитным плечом позволяют пользователям выполнять как ДЛИННЫЕ, так и КОРОТКИЕ операции. Заимствование из кредитных пулов аналогично функции SHORT. Это полезно, когда рыночная цена падает. Удержание позиций аналогично функции LONG.",
    lyfDesc3: "Использовать кредитное плечо рискованно. Тем не менее, пользователи могут избежать рисков с помощью хорошо продуманных стратегий и получить богатые награды за сельское хозяйство.",
    lyfStrategy1: "Стратегия двойных стабильных токенов",
    lyfStrategy2: "Нет стратегии с использованием кредитного плеча",
    lyfStrategy3: "ДЛИННАЯ позиция в стратегии бычьего рынка",
    lyfStrategy4: "SHORT в стратегии медвежьего рынка",
    lyfStrategy5: "Стратегия хеджирования рисков",
    lyfStrategy6: "1 стратегия длительного воздействия",
    amfHead: "Фонды управления активами",
    amfBondTitle: "Фонды облигаций",
    amfBondFund1: "• Чрезвычайно стабильный доход от инвестиций за счет использования двойных стабильных токенов", 
    amfBondFund2: "• Интеллектуальный алгоритм Apoy автоматически рассчитывает оптимальную ставку кредитного плеча и проценты по займам для максимизации инвестиций.", 
    amfBondFund3: "• Прибыль и убытки основаны на стандарте стабильных токенов.", 
    amfHedgeTitle: "Хедж-фонды",
    amfHedgeFund1: "• Apoy использует смарт-контракты для управления как ДЛИННЫМИ, так и КОРОТКИМИ позициями, чтобы свести риски к нулю.",
    amfHedgeFund2: "• Он может нейтрализовать рыночный риск и получить высокую и стабильную доходность инвестиций.",
    amfHedgeFund3: "• Apoy использует интеллектуальные алгоритмы для автоматической регулировки позиций.",
    amfHedgeFund4: "• Прибыль и убытки основаны на стандарте стабильных токенов.",
    amfIndexTitle: "Индексные фонды",
    amfIndexFund1: "• Apoy использует смарт-контракты для управления ДЛИННЫМИ и КОРОТКИМИ позициями, чтобы отслеживать колебания цен.",
    amfIndexFund2: "• Наслаждайтесь не только долгосрочным ростом цен, но и богатыми сельскохозяйственными наградами.",
    amfIndexFund3: "• Apoy использует интеллектуальные алгоритмы для автоматической корректировки позиций.",
    amfIndexFund4: "• Прибыль и убытки основаны на нестабильном стандарте токенов.",
    aiHead: "Искусственный интеллект",
    aiDesc1: "Анализ данных для набора данных в цепочке. Извлечение признаков с помощью алгоритма кластеризации.",
    aiDesc2: "Модель обучения с использованием алгоритмов искусственного интеллекта, таких как SVM DNN.",
    aiDesc3: "Рассчитайте оптимальные параметры с помощью модели и спрогнозируйте лучшие результаты.",
    aiDesc4: "Получите максимум вознаграждений для пользователей.",
    diyTitle: "Сделай сам на Дексе",
    diyAdvn: "Преимущества",
    diyAdvanTip1: "Кредитное плечо означает больше токенов и больше вознаграждений",
    diyAdvanTip2: "Apoy имеет как LONG, так и SHORT операции. Для сравнения, DIY имеет только ДЛИННЫЕ функции. Пользователи могут извлечь выгоду из операций LONG и SHORT и получить больше стратегий.",
    diyAdvanTip3: "Apoy предоставляет фонды управления автомобильными активами, включая фонды облигаций, хедж-фонды и индексные фонды.",
    diyAdvanTip4: "Поставщики ликвидности могут сделать позицию нулевой, что называется дельта-нейтрализацией, чтобы избежать рыночного риска. И одновременно получайте богатые награды за сельское хозяйство.",
    diyAdvanTip5: "Поставщики ликвидности могут отслеживать долгосрочную стоимость, когда цена криптовалюты растет, и получать богатые вознаграждения за сельское хозяйство.",
    diyAdvanTip6: "Алгоритм Apoy может автоматически перебалансировать дексы CLMM, чтобы избежать выхода за пределы диапазона.",
    diyAdvanTip7: "Алгоритм Apoy AI для максимизации доходов пользователей.",
    joinCommunity: "Присоединяйтесь к сообществу",

  },
  error: {},

  ...enLocale,
};

export default ru;