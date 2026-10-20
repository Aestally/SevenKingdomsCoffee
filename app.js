/* ============================================================
   TAIXIAN COFFEE — app.js
   hash view router + product filter + EN/FR chrome labels + form
   ============================================================ */

(function () {
  "use strict";

  /* ---------- EN / FR chrome labels (product copy stays EN) ---------- */
  var dict = {
    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navProducts: "Produits",
      navContact: "Contact",
      navFactory: "Usine",
      navSustainability: "Durabilité",
      navNews: "Académie du café",
      navCta: "Demander un devis",
      brandSub: "CAFÉ DU YUNNAN · FOURNISSEUR MONDIAL",
      heroEyebrow: "CAFÉ DU YUNNAN · PRÊT À L'EXPORT",
      heroTitle: "Le café du Yunnan.<br/>Prêt pour votre marché.",
      heroSub: "Usine de café instantané professionnelle",
      heroCtaProducts: "Voir les produits",
      heroCtaQuote: "Demander un devis",
      statProductsL: "produits prêts à l'export",
      statLinesL: "gammes de produits",
      statCountriesL: "pays desservis",
      statResponseL: "réponse à la demande",
      catEyebrow: "CAFÉ POUR UNE VRAIE DEMANDE",
      catTitle: "Sept gammes, conçues pour l'export",
      catLead: "Cafés instantanés et liquides par procédé de production, plus drip et prêt à boire — spécification, torréfaction et conditionnement adaptés à vos clients.",
      catGround: "Torréfié & moulu",
      catInstant: "Café instantané",
      catDrip: "Drip coffee",
      catSpice: "Café aux épices",
      catRtd: "Prêt à boire",
      catExtract: "Concentré de café",
      catSpray: "Poudre spray-dry",
      catFreezeDry: "Poudre lyophilisée",
      catAgglo: "Aggloméré",
      catBlock: "Bloc lyophilisé",
      mEyebrow: "MARCHÉS À L'EXPORT · MONDIAL",
      mTitle: "Prêts pour les acheteurs du monde entier",
      mLead: "Nous approvisionnons distributeurs, torréfacteurs et marques en Amériques, Europe, Asie, Moyen-Orient et Afrique — avec documents d'export, conditionnement et expédition adaptés.",
      viewRange: "VOIR LA GAMME",
      oemEyebrow: "CAFÉ SUR MESURE · OEM / ODM",
      oemTitle: "Café sur mesure, sous votre marque",
      oemLead: "Nous développons, produisons et conditionnons votre café, sous votre marque et votre spécification.",
      packTitle: "Formats de conditionnement",
      oemCta: "Demander un devis",
      oemExtract: "<b>Extrait de café :</b> personnalisez la concentration, le volume et l'emballage — stick, bouteille, jerrican, sachet ou gobelet — sous votre marque.",
      clEyebrow: "CLIENTS OEM · MARQUE PRIVÉE",
      clTitle: "Des marques que nous produisons et conditionnons",
      clLead: "De la recette au rayon, nous fabriquons café instantané, 3-en-1 et café noir pour des marques en Afrique, au Moyen-Orient et au-delà — sous leur étiquette, selon leur spécification.",
      clNiger: "Café torréfié et instantané pour l'Afrique de l'Ouest — Niger et marchés régionaux.",
      clBon: "Sachets de café instantané single-serve (2g) au profil de torréfaction classique.",
      clCefa: "Café instantané 3-en-1 (24×20g), doux et riche, conditionné sous marque client.",
      kEyebrow: "HISTOIRE DE MARQUE · SEPT ROYAUMES",
      kTitle: "Le café a toujours voyagé à travers les royaumes.",
      kLead: "Des hautes terres où poussent les grains aux ports d'expédition, des ateliers de torréfaction aux tasses qui commencent la journée — chaque tasse traverse plusieurs terres. Nous les appelons les Sept Royaumes : un symbole des sept étapes qui façonnent chaque café.",
      k1T: "Origine", k1D: "Chaque grain commence par le sol, l'altitude, la pluie et le soleil.",
      k2T: "Sélection", k2D: "Seuls les meilleurs lots sont retenus pour leur saveur, leur constance et leur caractère.",
      k3T: "Torréfaction", k3D: "La chaleur transforme les grains verts en arôme, corps et équilibre.",
      k4T: "Mouture", k4D: "La précision transforme la torréfaction en texture, extraction et clarté.",
      k5T: "Infusion", k5D: "L'eau rencontre le café, et la saveur devient expérience.",
      k6T: "Partage", k6D: "Une tasse se déguste rarement seul ; elle relie les gens.",
      k7T: "Retour", k7D: "Chaque gorgée inspire la prochaine récolte, la prochaine torréfaction, le prochain voyage.",
      kBody: "Seven Kingdoms Coffee se situe au croisement de l'origine et du savoir-faire. Nous travaillons avec des cultivateurs de confiance, des torréfacteurs expérimentés et des partenaires d'approvisionnement rigoureux pour porter le café de la ferme à la tasse, avec intégrité, constance et respect.",
      kClosing: "De l'origine à la tasse, chaque royaume compte.",
      fEyebrow: "USINE & PRODUCTION",
      fTitle: "Conçu pour le volume, pensé pour la qualité",
      fLead: "Une usine moderne du Yunnan pour la torréfaction, l'extraction et la fabrication du café instantané, avec une capacité qui suit vos commandes.",
      fStatFoundedL: "fondée",
      fStatAreaL: "surface de production standard",
      fStatWorkforceL: "effectif",
      fStatDailyL: "production quotidienne de café instantané",
      fStatAnnualL: "capacité annuelle",
      fStatPatentsL: "brevets nationaux",
      fCoEyebrow: "DU GRAIN VERT À L'INSTANTANÉ",
      fCoTitle: "Une chaîne de production complète",
      fCoP: "Nos ateliers standard couvrent plus de 20 000 m² avec des lignes de café instantané entièrement automatisées et écologiques. L'usine couvre le tri, la torréfaction, l'extraction, la concentration, le séchage par pulvérisation, la lyophilisation et la stérilisation terminale — avec plus de dix brevets nationaux.",
      fLi1: "Torréfaction et mouture sur spécification",
      fLi2: "Café instantané spray-dry et lyophilisé",
      fLi3: "Extraction, concentration et stérilisation",
      fLi4: "Conditionnement OEM / ODM : boîte, bouteille, stick, sachet",
      fCapEyebrow: "CAPACITÉS DE PRODUCTION",
      fCapTitle: "Ce que nous maîtrisons en interne",
      fAddrLabel: "Usine :",
      fModelsLabel: "Modèles de café instantané spray-dry :",
      sEyebrow: "DURABILITÉ",
      sTitle: "Un café qui respecte ses origines",
      sLead: "Approvisionnement traçable, production responsable et certifications vérifiées — de la ferme d'altitude au port d'export.",
      sCoEyebrow: "TRACABLE DE LA FERME",
      sCoTitle: "Enraciné dans les hautes terres du Yunnan",
      sCoP: "Nous nous approvisionnons dans des origines éprouvées — à commencer par l'arabica du Yunnan — et nous blendons via des partenaires responsables, en gardant chaque lot traçable et constant.",
      sLi1: "Origines : Yunnan, Vietnam, Malaisie, Colombie, Kenya",
      sLi2: "Production écologique avec moins de déchets et d'énergie",
      sLi3: "Qualité, sécurité alimentaire et gestion environnementale certifiées",
      sCertEyebrow: "CERTIFIÉ & RESPONSABLE",
      sCertTitle: "Vérifié à chaque étape",
      nEyebrow: "ACADÉMIE DU CAFÉ · CENTRE DE CONNAISSANCES",
      nTitle: "Des connaissances pratiques du café pour les acheteurs",
      nLead: "Guides sur l'infusion, le café instantané et lyophilisé, l'approvisionnement et l'export — pour torréfacteurs, distributeurs et marques.",
      nCatGuide: "GUIDE DU CAFÉ",
      nCatOem: "OEM & MARQUE PRIVÉE",
      nCatNews: "ACTUALITÉ PRODUIT",
      valueEyebrow: "POURQUOI SEVEN KINGDOMS",
      valueTitle: "Un partenaire qui livre à votre façon",
      value1T: "Approvisionnement flexible",
      value2T: "Qualité vérifiée",
      value3T: "Support direct",
      value4T: "Prêt à l'export",
      popTitle: "Faites votre shortlist",
      moq: "Quantité mini",
      moqVal: "Nous contacter",
      viewProduct: "Voir le produit",
      fullCatalogue: "Voir le catalogue complet",
      coEyebrow: "UN PARTENAIRE D'APPROVISIONNEMENT EN CHINE",
      coTitle: "Du Yunnan à votre entrepôt",
      coP1: "Nous aidons les importateurs à sourcer un café constant, sans perdre le contrôle de la spécification, de la torréfaction ou du conditionnement.",
      coP2: "Depuis le Yunnan, notre équipe coordonne plantations, usines, échantillons, contrôles qualité et documents d'export.",
      coLi1: "Conditionnement OEM et marque privée",
      coLi2: "Confirmation de torréfaction, mouture et spécification",
      coLi3: "Sourcing multi-produits pour développer vos gammes",
      coAbout: "Notre entreprise",
      procEyebrow: "DE LA DEMANDE À L'EXPÉDITION",
      procTitle: "Un processus d'achat simple",
      ctaTitle: "Conçu pour les acheteurs du monde entier",
      ctaSub: "Indiquez votre port de destination, votre niveau de torréfaction et votre volume. Nous répondrons avec des options concrètes.",
      ctaBtn: "Lancer une demande",
      pEyebrow: "CATALOGUE",
      pTitle: "Café & café instantané, prêts à l'export",
      pLead: "Spécifications flexibles et informations de commande pratiques.",
      filterAll: "Tous les produits",
      aEyebrow: "UN COMMERCE FIABLE",
      aTitle: "Un processus clair pour des acheteurs exigeants",
      aLead: "Une communication simple et une qualité vérifiable à chaque étape.",
      certEyebrow: "CERTIFIÉ & RECONNU",
      certTitle: "La qualité est une séquence, pas un slogan",
      certLead: "Certifications indépendantes et brevets appuient nos contrôles.",
      qTitle: "Chaque étape réduit l'ambiguïté",
      curTitle: "Réglez dans la devise de votre choix",
      aCtaTitle: "Axé sur votre marché",
      aCtaSub: "Les marchés diffèrent par la torréfaction, l'emballage, le prix et les goûts. Nous partons de votre destination et de votre canal.",
      aCtaBtn: "Discuter de votre marché",
      cEyebrow: "CONTACT",
      cTitle: "Parlons de votre café",
      cLead: "Indiquez votre destination, spécification et volume — réponse sous un jour ouvré.",
      fName: "Nom *",
      fCompany: "Entreprise",
      fEmail: "E-mail *",
      fCountry: "Pays / Région",
      fProduct: "Produit d'intérêt",
      fProductOpt: "Sélectionnez",
      fOther: "Autre / Mixte",
      fVolume: "Volume estimé",
      fMsg: "Message",
      fSubmit: "Envoyer la demande",
      fWhatsapp: "Discuter sur WhatsApp",
      fNote: "Préférez un contact direct ? Utilisez les coordonnées à droite.",
      contactHead: "CAFÉ SEVEN KINGDOMS",
      cTel: "Téléphone",
      cEmail: "E-mail",
      cWhatsapp: "WhatsApp",
      cFactory: "Usine",
      cOffice: "Bureau commercial",
      footerTag: "Café en vrac et instantané, prêt à l'export depuis le Yunnan.",
      footerExplore: "EXPLORER",
      footerCatalog: "Catalogue produits",
      footerAbout: "Notre sourcing",
      footerQuote: "Demander un devis",
      footerContact: "CONTACT",
      footerWhatsapp: "WhatsApp: +81 80 8082 1820",
      footerAddr: "Yunnan, Chine",
      footerCat: "CATALOGUE",
      footerCatBtn: "Catalogue export anglais",
      footerWhatsappBtn: "Démarrer une conversation",
      footerCopy: "© 2026 YUNNAN TAIXIAN BIOTECHNOLOGY CO., LTD. Tous droits réservés."
    },
    zh: {
      navHome: "首页", navAbout: "关于我们", navProducts: "产品", navContact: "联系我们",
      navFactory: "工厂", navNews: "咖啡学院", navCta: "获取报价",
      brandSub: "云南咖啡 · 全球供应",
      heroEyebrow: "云南咖啡 · 出口就绪", heroSub: "专业速溶咖啡工厂",
      heroCtaProducts: "浏览产品", heroCtaQuote: "获取报价",
      statProducts: "30+", statProductsL: "出口就绪产品",
      statLines: "7+", statLinesL: "产品线",
      statCountriesL: "服务国家",
      statResponse: "24/7", statResponseL: "询盘响应",
      catTitle: "七大产品线，为出口而设计",
      catLead: "按生产工艺划分的速溶和液态咖啡，另有挂耳和即饮线——规格、烘焙度和包装按您的客户调整。",
      catSpray: "喷雾干燥粉", catFreezeDry: "冻干咖啡粉", catAgglo: "复聚造粒",
      catExtract: "咖啡浓缩液", catBlock: "冻干咖啡块", catDrip: "挂耳咖啡",
      catRtd: "即饮咖啡", catOem: "OEM / ODM 定制",
      mEyebrow: "出口市场 · 全球", mTitle: "为全球采购商做好准备",
      mLead: "我们为美洲、欧洲、亚洲、中东和非洲的分销商、烘焙商和品牌供货——提供出口文件、包装和物流支持。",
      oemEyebrow: "定制咖啡 · OEM/ODM", oemTitle: "按您的品牌定制咖啡",
      oemLead: "我们按您的品牌和规格开发、生产和包装您的咖啡。",
      oemCta: "获取报价", packTitle: "包装规格",
      kEyebrow: "品牌故事 · 七王国",
      kTitle: "咖啡总是穿越王国。",
      kLead: "从豆子生长的高地到出运港口，从烘焙车间到开启一天的杯子——每杯咖啡跨越多片土地。我们称之为七王国：塑造每一杯咖啡的七个步骤的象征。",
      k1T: "产地", k1D: "每颗豆子始于土壤、海拔、雨水与阳光。",
      k2T: "甄选", k2D: "只保留风味、稳定性和品质最好的批次。",
      k3T: "烘焙", k3D: "热力将生豆转化为香气、醇厚度与平衡。",
      k4T: "研磨", k4D: "精度将烘焙转化为口感、萃取与清澈。",
      k5T: "萃取", k5D: "水遇见咖啡，风味化为体验。",
      k6T: "分享", k6D: "一杯咖啡很少独饮；它连接人们。",
      k7T: "回归", k7D: "每一口都启发下一次收获、烘焙和旅程。",
      kClosing: "从产地到杯子，每个王国都重要。",
      fEyebrow: "工厂与生产", fTitle: "为产量而建，为质量而思",
      fLead: "云南现代化工厂，覆盖烘焙、萃取和速溶咖啡制造，产能随您的订单增长。",
      fStatFoundedL: "成立", fStatAreaL: "标准生产面积", fStatWorkforceL: "员工",
      fStatDailyL: "日产速溶咖啡", fStatAnnualL: "年产能", fStatPatentsL: "国家专利",
      fCoEyebrow: "从生豆到速溶", fCoTitle: "完整咖啡生产链",
      fCoP: "标准车间占地2万多平方米，配备全自动环保速溶咖啡生产线。工厂覆盖筛选、烘焙、萃取、浓缩、喷雾干燥、冻干和终端灭菌——拥有十余项国家专利。",
      fCapEyebrow: "生产能力", fCapTitle: "我们内部掌握的工艺",
      sEyebrow: "可持续", sTitle: "尊重产地的咖啡",
      sLead: "可追溯采购、负责任生产和经过验证的认证——从高地农场到出口港口。",
      sCoEyebrow: "从农场可追溯", sCoTitle: "扎根云南高地",
      sCoP: "我们从经过验证的产地采购——以云南高地阿拉比卡为起点——通过负责任的合作伙伴拼配，保持每批次可追溯且稳定。",
      sCertEyebrow: "认证与责任", sCertTitle: "每一步都经过验证",
      nEyebrow: "咖啡学院 · 知识中心", nTitle: "为采购商提供实用咖啡知识",
      nLead: "关于冲泡、速溶与冻干咖啡、采购和出口的指南——面向烘焙商、分销商和品牌。",
      nCatGuide: "咖啡指南", nCatOem: "OEM与自有品牌", nCatNews: "产品动态",
      valueTitle: "稳定的供应伙伴，按您的方式发货",
      value1T: "灵活供应", value1D: "最小起订量灵活，按您的市场需求调整。",
      value2T: "质量验证", value2D: "每批次都经过实验室检测和感官评估。",
      value3T: "直接支持", value3D: "直接对接国际销售团队，响应快速。",
      value4T: "出口就绪", value4D: "提供完整出口文件、包装和物流方案。",
      pEyebrow: "产品目录", pTitle: "咖啡与速溶咖啡，出口就绪",
      pLead: "灵活规格与便捷订购信息。",
      filterAll: "全部产品", viewProduct: "查看产品", moq: "起订量", moqVal: "请联系我们",
      aEyebrow: "可靠贸易", aTitle: "为专业采购商设计的清晰流程",
      aLead: "简单沟通，每一步质量可验证。",
      certEyebrow: "认证与认可", certTitle: "质量是流程，不是口号",
      certLead: "独立认证和专利支撑我们的品控。",
      oEyebrow: "咖啡产地", oTitle: "全球优质产地",
      oLead: "从云南高地到世界各咖啡产区，我们精选每一颗豆子。",
      oYunnan: "云南", oVietnam: "越南", oMalaysia: "印度尼西亚",
      oColombia: "哥伦比亚", oKenya: "肯尼亚",
      coEyebrow: "中国供应伙伴", coTitle: "从云南到您的仓库",
      coP1: "我们帮助进口商采购稳定的咖啡，同时不失去对规格、烘焙度和包装的控制。",
      coP2: "我们的团队从云南协调种植园、工厂、样品、质检和出口文件。",
      procEyebrow: "从询盘到出运", procTitle: "简单采购流程",
      proc1T: "询盘", proc1D: "告诉我们您需要的产品、规格和数量。",
      proc2T: "报价与样品", proc2D: "我们提供报价和免费样品供您评估。",
      proc3T: "确认与生产", proc3D: "确认订单后安排生产和质检。",
      proc4T: "出运", proc4D: "包装、装柜并发送完整出口文件。",
      cEyebrow: "联系", cTitle: "谈谈您的咖啡需求",
      cLead: "请告知目的地、规格和采购量——一个工作日内回复。",
      fName: "姓名 *", fCompany: "公司", fEmail: "邮箱 *",
      fCountry: "国家 / 地区", fProduct: "感兴趣的产品", fProductOpt: "请选择",
      fOther: "其他 / 混合", fVolume: "预估用量", fMsg: "留言",
      fSubmit: "发送询盘", fWhatsapp: "WhatsApp 咨询",
      contactHead: "Seven Kingdoms Coffee",
      cEmail: "邮箱", cWhatsapp: "WhatsApp", cFactory: "工厂", cOffice: "销售办公室",
      footerTag: "散装与速溶咖啡，云南出口就绪。",
      footerContact: "联系我们", footerWhatsappBtn: "开始 WhatsApp 对话",
      footerCopy: "© 2026 云南泰贤生物科技有限公司 版权所有。"
    },
    ar: {
      navHome: "الرئيسية", navAbout: "من نحن", navProducts: "المنتجات", navContact: "اتصل بنا",
      navFactory: "المصنع", navNews: "أكاديمية القهوة", navCta: "اطلب عرض سعر",
      brandSub: "قهوة يوننان · توريد عالمي",
      heroEyebrow: "قهوة يوننان · جاهزة للتصدير", heroSub: "مصنع قهوة فورية احترافي",
      heroCtaProducts: "استعرض المنتجات", heroCtaQuote: "اطلب عرض سعر",
      statProducts: "30+", statProductsL: "منتجات جاهزة للتصدير",
      statLines: "7+", statLinesL: "خطوط إنتاج",
      statCountriesL: "دول نخدمها",
      statResponse: "24/7", statResponseL: "رد على الاستفسارات",
      catTitle: "سبعة خطوط إنتاج مصممة للتصدير",
      catLead: "قهوة فورية وسائلة حسب طريقة الإنتاج، بالإضافة إلى أكياس التنقيط والجاهزة للشرب — مع تخصيص المواصفات والتحميص والتعبئة لعملائك.",
      catSpray: "مسحوق مجفف بالرش", catFreezeDry: "مسحوق مجفف بالتجميد", catAgglo: "حبيبات مكتلة",
      catExtract: "مركزات القهوة", catBlock: "قوالب مجففة بالتجميد", catDrip: "أكياس قهوة التنقيط",
      catRtd: "قهوة جاهزة للشرب", catOem: "تصنيع خاص / ODM",
      mEyebrow: "أسواق التصدير · عالمية", mTitle: "جاهزون للمشترين حول العالم",
      mLead: "نوّرّد الموزعين والمحمصين والعلامات التجارية في الأمريكتين وأوروبا وآسيا والشرق الأوسط وأفريقيا — مع وثائق التصدير والتعبئة واللوجستيات.",
      oemEyebrow: "قهوة مخصصة · OEM/ODM", oemTitle: "قهوتك تحت علامتك التجارية",
      oemLead: "نطور وننتج ونعبئ قهوتك تحت علامتك التجارية ومواصفاتك.",
      oemCta: "اطلب عرض سعر", packTitle: "أشكال التعبئة",
      kEyebrow: "قصة العلامة · الممالك السبع",
      kTitle: "لقد سافرت القهوة دائماً عبر الممالك.",
      kLead: "من المرتفعات حيث تنمو الحبوب إلى موانئ الشحن، ومن ورش التحميص إلى الفنجان الذي يبدأ اليوم — كل فنجان يعبر أراضٍ متعددة. نسميها الممالك السبع: رمز للخطوات السبع التي تصنع كل فنجان.",
      k1T: "الأصل", k1D: "كل حبة تبدأ بالتربة والارتفاع والمطر والشمس.",
      k2T: "الاختيار", k2D: "لا نحتفظ إلا بأفضل الدفعات من حيث النكهة والثبات والجودة.",
      k3T: "التحميص", k3D: "الحرارة تحول الحبوب الخضراء إلى رائحة وقوام وتوازن.",
      k4T: "الطحن", k4D: "الدقة تحول التحميص إلى ملمس واستخلاص ووضوح.",
      k5T: "الاستخلاص", k5D: "يلتقي الماء بالقهوة، وتصبح النكهة تجربة.",
      k6T: "المشاركة", k6D: "نادراً ما يُشرب الفنجان وحده؛ إنه يربط الناس.",
      k7T: "العودة", k7D: "كل رشفة تلهم الحصاد والتحميص والرحلة التالية.",
      kClosing: "من الأصل إلى الفنجان، كل مملكة مهمة.",
      fEyebrow: "المصنع والإنتاج", fTitle: "مصمم للحجم، مفكر للجودة",
      fLead: "مصنع حديث في يوننان للتحميص والاستخلاص وصناعة القهوة الفورية، بطاقة تتبع نمو طلبك.",
      fStatFoundedL: "تأسس", fStatAreaL: "مساحة الإنتاج القياسية", fStatWorkforceL: "القوى العاملة",
      fStatDailyL: "إنتاج القهوة الفورية اليومي", fStatAnnualL: "الطاقة السنوية", fStatPatentsL: "براءات وطنية",
      fCoEyebrow: "من الحبوب الخضراء إلى الفورية", fCoTitle: "سلسلة إنتاج قهوة كاملة",
      fCoP: "تغطي ورشنا القياسية أكثر من 20,000 متر مربع بخطوط قهوة فورية مؤتمتة وصديقة للبيئة. يغطي المصنع الفرز والتحميص والاستخلاص والتركيز والتجفيف بالرش والتجفيف بالتجميد والتعقيم النهائي — مع أكثر من عشر براءات وطنية.",
      fCapEyebrow: "قدرات الإنتاج", fCapTitle: "ما نتقنه داخلياً",
      sEyebrow: "الاستدامة", sTitle: "قهوة تحترم أصولها",
      sLead: "مصادر قابلة للتتبع، وإنتاج مسؤول، وشهادات موثقة — من مزرعة المرتفعات إلى ميناء التصدير.",
      sCoEyebrow: "قابل للتتبع من المزرعة", sCoTitle: "متجذر في مرتفعات يوننان",
      sCoP: "نشتري من أصول مثبتة — تبدأ بأرابيكا مرتفعات يوننان — ونمزج عبر شركاء مسؤولين، مع الحفاظ على كل دفعة قابلة للتتبع وثابتة.",
      sCertEyebrow: "معتمد ومسؤول", sCertTitle: "محقق في كل خطوة",
      nEyebrow: "أكاديمية القهوة · مركز المعرفة", nTitle: "معرفة قهوة عملية للمشترين",
      nLead: "أدلة حول التحضير والقهوة الفورية والمجففة بالتجميد، والمصادر والتصدير — للمحمصين والموزعين والعلامات التجارية.",
      nCatGuide: "دليل القهوة", nCatOem: "التصنيع الخاص والعلامة الخاصة", nCatNews: "أخبار المنتجات",
      valueTitle: "شريك مستقر يشحن بالطريقة التي تناسبك",
      value1T: "توريد مرن", value1D: "الحد الأدنى للطلب مرن، ويتكيف مع احتياجات سوقك.",
      value2T: "جودة موثقة", value2D: "كل دفعة تخضع للفحص المخبري والتقييم الحسي.",
      value3T: "دعم مباشر", value3D: "تواصل مباشر مع فريق المبيعات الدولي، استجابة سريعة.",
      value4T: "جاهز للتصدير", value4D: "نوفر وثائق التصدير الكاملة والتعبئة واللوجستيات.",
      pEyebrow: "كتالوج المنتجات", pTitle: "قهوة وقهوة فورية جاهزة للتصدير",
      pLead: "مواصفات مرنة ومعلومات طلب مريحة.",
      filterAll: "جميع المنتجات", viewProduct: "عرض المنتج", moq: "الحد الأدنى للطلب", moqVal: "تواصل معنا",
      aEyebrow: "تجارة موثوقة", aTitle: "عملية واضحة للمشترين المحترفين",
      aLead: "تواصل بسيط وجودة قابلة للتحقق في كل خطوة.",
      certEyebrow: "معتمد ومعترف به", certTitle: "الجودة عملية، لا شعار",
      certLead: "شهادات مستقلة وبراءات اختراع تدعم رقابتنا للجودة.",
      oEyebrow: "أصول القهوة", oTitle: "أصول عالمية متميزة",
      oLead: "من مرتفعات يوننان إلى مناطق القهوة العالمية، نختار كل حبة بعناية.",
      oYunnan: "يوننان", oVietnam: "فيتنام", oMalaysia: "إندونيسيا",
      oColombia: "كولومبيا", oKenya: "كينيا",
      coEyebrow: "شريك التوريد في الصين", coTitle: "من يوننان إلى مستودعك",
      coP1: "نساعد المستوردين على شراء قهوة ثابتة، دون فقدان السيطرة على المواصفات والتحميص والتعبئة.",
      coP2: "ينسق فريقنا من يوننان المزارع والمصانع والعينات وفحوص الجودة ووثائق التصدير.",
      procEyebrow: "من الاستفسار إلى الشحن", procTitle: "عملية شراء بسيطة",
      proc1T: "استفسار", proc1D: "أخبرنا بالمنتج والمواصفات والكمية التي تحتاجها.",
      proc2T: "عرض سعر وعينات", proc2D: "نوفر عرض سعر وعينات مجانية للتقييم.",
      proc3T: "تأكيد وإنتاج", proc3D: "بعد تأكيد الطلب نرتب الإنتاج وفحص الجودة.",
      proc4T: "شحن", proc4D: "التعبئة والحاويات وإرسال وثائق التصدير الكاملة.",
      cEyebrow: "اتصل بنا", cTitle: "لنتحدث عن احتياجاتك من القهوة",
      cLead: "أخبرنا بوجهتك ومواصفاتك وكميتك — نرد خلال يوم عمل واحد.",
      fName: "الاسم *", fCompany: "الشركة", fEmail: "البريد الإلكتروني *",
      fCountry: "الدولة / المنطقة", fProduct: "المنتج المهتم به", fProductOpt: "اختر",
      fOther: "أخرى / مختلط", fVolume: "الكمية التقديرية", fMsg: "الرسالة",
      fSubmit: "إرسال الاستفسار", fWhatsapp: "تحدث عبر واتساب",
      contactHead: "سيفن كينغدومز كوفي",
      cEmail: "البريد الإلكتروني", cWhatsapp: "واتساب", cFactory: "المصنع", cOffice: "مكتب المبيعات",
      footerTag: "قهوة سائبة وفورية، جاهزة للتصدير من يوننان.",
      footerContact: "اتصل بنا", footerWhatsappBtn: "ابدأ محادثة واتساب",
      footerCopy: "© 2026 يوننان تايشيان للتكنولوجيا الحيوية. جميع الحقوق محفوظة."
    }
  };

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- view router ---------- */
  var views = $$(".view");
  var navLinks = $$(".site-nav a");

  function showView(name) {
    var found = false;
    views.forEach(function (v) {
      var on = v.getAttribute("data-view") === name;
      v.classList.toggle("active", on);
      if (on) found = true;
    });
    if (!found) {
      // default to home
      views.forEach(function (v) { v.classList.toggle("active", v.getAttribute("data-view") === "home"); });
    }
    navLinks.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === name);
    });
  }

  function route() {
    var hash = (location.hash || "#home").replace("#", "");
    showView(hash);
    // reset scroll to top on view change
    window.scrollTo(0, 0);
  }

  /* ---------- product filter (products view) ---------- */
  var filterBtns = $$(".filter-btn");
  var allCards = $$("#all-products .product-card");
  var countEl = $("#filter-count");
  var activeFilter = "all";

  function applyFilter() {
    var n = 0;
    allCards.forEach(function (c) {
      var cat = c.getAttribute("data-cat");
      var on = activeFilter === "all" || cat === activeFilter;
      c.style.display = on ? "" : "none";
      if (on) n++;
    });
    if (countEl) countEl.textContent = n + " products";
  }

  filterBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      activeFilter = b.getAttribute("data-filter");
      filterBtns.forEach(function (x) { x.classList.toggle("active", x === b); });
      applyFilter();
    });
  });

  /* category cards on home jump to products and preselect filter */
  $$(".category-card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      var cat = card.getAttribute("data-cat");
      location.hash = "products";
      // preselect after view becomes active
      setTimeout(function () {
        var target = null;
        filterBtns.forEach(function (b) {
          if (b.getAttribute("data-filter") === cat) target = b;
        });
        if (target) {
          activeFilter = cat;
          filterBtns.forEach(function (x) { x.classList.toggle("active", x === target); });
          applyFilter();
        }
      }, 30);
    });
  });

  /* ---------- language toggle ---------- */
  var langSelect = $(".lang-select");
  function applyLang(lang) {
    if (!dict[lang]) { lang = "en"; }
    var d = dict[lang] || {};
    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (d[key]) {
        el.innerHTML = d[key];
      } else if (lang === "en") {
        if (el.dataset.i18nEn) el.innerHTML = el.dataset.i18nEn;
      }
    });
    // RTL for Arabic
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", lang);
    }
    langSelect.value = lang;
  }
  // snapshot EN originals once
  $$("[data-i18n]").forEach(function (el) { el.dataset.i18nEn = el.innerHTML; });
  langSelect.addEventListener("change", function () { applyLang(langSelect.value); });

  /* ---------- inquiry form (submits directly via FormSubmit.co) ---------- */

  /* ---------- init ---------- */
  window.addEventListener("hashchange", route);
  route();
  applyFilter();
})();
