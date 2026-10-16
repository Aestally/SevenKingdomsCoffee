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
      footerWhatsapp: "WhatsApp: +86 400-8169-118",
      footerAddr: "Yunnan, Chine",
      footerCat: "CATALOGUE",
      footerCatBtn: "Catalogue export anglais",
      footerWhatsappBtn: "Démarrer une conversation",
      footerCopy: "© 2026 YUNNAN TAIXIAN BIOTECHNOLOGY CO., LTD. Tous droits réservés."
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
    if (lang !== "fr") { lang = "en"; }
    var d = dict[lang] || {};
    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (d[key]) {
        el.innerHTML = d[key];
      } else if (lang === "en") {
        // EN is the authored content; only restore original markup if previously changed
        if (el.dataset.i18nEn) el.innerHTML = el.dataset.i18nEn;
      }
    });
  }
  // snapshot EN originals once
  $$("[data-i18n]").forEach(function (el) { el.dataset.i18nEn = el.innerHTML; });
  langSelect.addEventListener("change", function () { applyLang(langSelect.value); });

  /* ---------- inquiry form ---------- */
  var form = $("#inquiry-form");
  var EMAIL = $("[data-edit='email']") ? $("[data-edit='email']").textContent : "sales@taixiancoffee.com";
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#f-name").value.trim();
      var email = $("#f-email").value.trim();
      if (!name || !email) return;
      var company = $("#f-company").value.trim();
      var country = $("#f-country").value.trim();
      var product = $("#f-product").value;
      var volume = $("#f-volume").value.trim();
      var msg = $("#f-msg").value.trim();
      var subject = "Coffee inquiry — " + (company || name);
      var body = "Name: " + name + "\n" +
                 "Company: " + company + "\n" +
                 "Email: " + email + "\n" +
                 "Country: " + country + "\n" +
                 "Product: " + product + "\n" +
                 "Volume: " + volume + "\n\n" +
                 "Message:\n" + msg;
      window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- init ---------- */
  window.addEventListener("hashchange", route);
  route();
  applyFilter();
})();
