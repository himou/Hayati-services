const skills = [
  { name: "Pilotage de recette et strategie de tests", years: 10, level: "expert" },
  { name: "Conception et execution de tests fonctionnels", years: 10, level: "expert" },
  { name: "Automatisation des tests web, mobile et API", years: 7, level: "expert" },
  { name: "Productivite QA renforcee avec des outils IA", years: 1, level: "confirme" },
  { name: "Gestion des anomalies et des environnements", years: 10, level: "expert" },
  { name: "Structuration d'equipe QA et suivi des releases", years: 7, level: "confirme" },
  { name: "Tests d'accessibilite et qualite des livrables", years: 3, level: "confirme" }
];

const toolsByLevel = [
  { name: "Postman", years: 10, label: "10 ans", level: "expert" },
  { name: "Jira Xray", years: 10, label: "10 ans", level: "expert" },
  { name: "Squash TM", years: 7, label: "7 ans", level: "expert" },
  { name: "Robot Framework", years: 6, label: "6 ans", level: "expert" },
  { name: "ALM", years: 4, label: "4 ans", level: "confirme" },
  { name: "SQL", years: 4, label: "4 ans", level: "confirme" },
  { name: "Gherkin / Cucumber / Selenium", years: 3, label: "3 ans", level: "confirme" },
  { name: "BrowserStack", years: 3, label: "3 ans", level: "confirme" },
  { name: "Confluence", years: 3, label: "3 ans", level: "confirme" },
  { name: "Bruno", years: 2, label: "2 ans", level: "confirme" },
  { name: "Katalon", years: 2, label: "2 ans", level: "confirme" },
  { name: "TFS", years: 2, label: "2 ans", level: "confirme" },
  { name: "Cypress", years: 1, label: "1 an", level: "confirme" },
  { name: "Assistants IA pour QA", years: 1, label: "1 an", level: "confirme" },
  { name: "Wizard", years: 1, label: "1 an", level: "confirme" },
  { name: "Playwright", years: 0.33, label: "4 mois", level: "debutant" },
  { name: "K2", years: 1, label: "1 an", level: "debutant" },
  { name: "Java", years: 1, label: "1 an", level: "debutant" }
];

const projects = [
  {
    title: "Migration de 500+ requetes Postman vers Bruno",
    description:
      "Chez Kereis, migration des collections API et industrialisation des tests fonctionnels API avec acceleration via assistants IA (generation de scenarios, optimisation des scripts et analyse rapide).",
    tag: "Kereis"
  },
  {
    title: "Mise en place QA from scratch",
    description:
      "Chez ASSIA et Noelse, definition de la politique et de la strategie de tests puis structuration d'equipe.",
    tag: "Lead QA"
  },
  {
    title: "Automatisation web, mobile et API en sante",
    description:
      "Sur Mon Espace Sante et DMP: automatisation API, web et parcours applicatifs critiques.",
    tag: "Assurance Maladie"
  },
  {
    title: "POC d'automatisation gagnant",
    description:
      "Chez CGI, mise en place d'un POC de tests automatises ayant contribue a remporter un projet.",
    tag: "CGI"
  },
  {
    title: "Methodologie tests BPM basee graphes",
    description:
      "Chez Low Code Factory by K2, approche de conception de tests pour mieux couvrir les process metier.",
    tag: "Renault"
  },
  {
    title: "Automatisation TNR a 90%",
    description:
      "Chez Orange OAB, automatisation avancee des tests de non-regression sur applications web et mobiles.",
    tag: "Orange"
  },
  {
    title: "Applications mobiles territoriales",
    description:
      "Tests des applications Nantes/Perpignan/La Rochelle dans ma poche: services publics et informations territoriales.",
    tag: "Orange OAB"
  },
  {
    title: "Application de Navigation Airbus",
    description:
      "Tests mobiles de la solution de navigation et d'information pour environnement aeronautique.",
    tag: "Orange OAB"
  },
  {
    title: "Application Mobile Guivauden",
    description:
      "Tests et assurance qualite de l'application mobile de gestion client et suivi de commandes.",
    tag: "Orange OAB"
  },
  {
    title: "Livebox - Ecosystem d'applications",
    description:
      "Tests fonctionnels des applications web, mobile (iOS/Android) et client lourd de gestion Livebox Orange.",
    tag: "Orange OAB"
  }
];

const applications = [
  {
    name: "Mon Espace de Santé",
    type: "Web + Mobile (iOS/Android)",
    sector: "Assurance Maladie / Sante",
    description: "Plateforme de gestion des informations medicales et acces au dossier medical partage.",
    techs: "Katalon, BrowserStack, Tests d'accessibilite"
  },
  {
    name: "Dossier Médical Partagé (DMP) - API",
    type: "API FHIR",
    sector: "Assurance Maladie / Sante",
    description: "Service centralisé de partage des informations medicales entre professionnels de sante.",
    techs: "Postman, Tests API FHIR, Katalon"
  },
  {
    name: "Plateforme Bancaire Noelse",
    type: "Web + Mobile (iOS/Android)",
    sector: "Neobanque / Services Financiers",
    description: "Services bancaires en ligne pour particuliers et professionnels avec gestion de portefeuille.",
    techs: "Robot Framework, Gherkin/Cucumber, Appium"
  },
  {
    name: "Solutions BPM Renault",
    type: "Plateforme low-code",
    sector: "Automobile / Processus Metier",
    description: "Modelisation et automatisation des processus metier via plateforme K2.",
    techs: "K2, Tests BPM, Squash TM"
  },
  {
    name: "Nantes dans ma poche",
    type: "Mobile (iOS/Android)",
    sector: "Grand Public / Ville de Nantes",
    description: "Application de services publics et d'informations pour les habitants.",
    techs: "TestFlight, Appium, Gestion de donnees"
  },
  {
    name: "Perpignan dans ma poche",
    type: "Mobile (iOS/Android)",
    sector: "Grand Public / Ville de Perpignan",
    description: "Application de services publics pour la commune de Perpignan.",
    techs: "TestFlight, Appium"
  },
  {
    name: "La Rochelle dans ma poche",
    type: "Mobile (iOS/Android)",
    sector: "Grand Public / Ville de La Rochelle",
    description: "Application mobile de services et d'informations territoriales.",
    techs: "TestFlight, Appium"
  },
  {
    name: "Application de Navigation",
    type: "Mobile",
    sector: "Aeronautique / Airbus",
    description: "Solution mobile de navigation et d'information pour environnement aeronautique.",
    techs: "Tests mobiles, Execution fonctionnelle"
  },
  {
    name: "Application Client",
    type: "Mobile",
    sector: "Cosmétique / Guivauden",
    description: "Application mobile pour gestion client et suivi de commandes.",
    techs: "Tests mobiles, Gestion des anomalies"
  },
  {
    name: "Demande de Devis Assurance Auto 2 Roues",
    type: "Web",
    sector: "Services Postaux / Assurance",
    description: "Plateforme web pour la demande et la gestion de devis d'assurance moto et scooter.",
    techs: "Robot Framework, Selenium, SoapUI"
  },
  {
    name: "Applications Client Lourd - Bureaux La Poste",
    type: "Desktop Client Lourd",
    sector: "Services Postaux",
    description: "Applications client lourd pour la gestion operationnelle dans les bureaux de poste.",
    techs: "Tests fonctionnels, Gestion des environnements, MANTIS"
  },
  {
    name: "Serveur Vocal Interactif (SVI)",
    type: "Web",
    sector: "Telecom / Orange",
    description: "Interface web de construction et parametrage de serveurs vocaux interactifs.",
    techs: "Robot Framework, Keyword Driven Testing, Selenium"
  }
];

const clients = [
  {
    name: "Kereis",
    note: "Assurance emprunteur"
  },
  {
    name: "ASSIA",
    note: "Plateformes SaaS mutuelles et prevoyance"
  },
  {
    name: "Assurance Maladie",
    note: "Mon Espace Sante et DMP"
  },
  {
    name: "Noelse",
    note: "Neobanque"
  },
  {
    name: "La Poste (via CGI)",
    note: "Applications assurance, guichet et services"
  },
  {
    name: "Renault (via LCF by K2)",
    note: "Projets BPM low-code"
  },
  {
    name: "Orange",
    note: "Applications B2B, B2C, B2E et Livebox"
  },
  {
    name: "Orange OLPS",
    note: "API Java pour serveur vocal interactif"
  }
];

const experiences = [
  {
    role: "QA Automaticien",
    company: "Kereis",
    dates: "Juil. 2025 - Dec. 2025",
    summary:
      "Referent Squash, automatisation des tests fonctionnels en Cypress et des API avec Bruno, avec usage concret d'outils IA pour accelerer la generation des scripts, la couverture des cas de test et l'analyse des anomalies."
  },
  {
    role: "Lead QA",
    company: "ASSIA",
    dates: "Avr. 2024 - Juin 2025",
    summary:
      "Redaction de la politique et de la strategie de tests, pilotage d'equipe QA, automatisation web et API et suivi des releases."
  },
  {
    role: "QA Senior",
    company: "Assurance Maladie (via Atos)",
    dates: "Sep. 2021 - Avr. 2024",
    summary:
      "Analyse/conception/execution de tests, gestion des anomalies, automatisation API et web, tests d'accessibilite sur des produits sante critiques."
  },
  {
    role: "Lead QA",
    company: "Noelse (via Davao)",
    dates: "Mars 2020 - Aout 2021",
    summary:
      "Pilotage des tests fonctionnels manuels et automatises, gestion de production, mise en place de la strategie QA et structuration d'equipe."
  },
  {
    role: "Pilote de Recette",
    company: "CGI (pour La Poste)",
    dates: "Mai 2019 - Fev. 2020",
    summary:
      "Conception/execution des tests, automatisation, gestion des environnements et jeux de donnees, pilotage de recette et anomalies."
  },
  {
    role: "Referant Testeur",
    company: "Low Code Factory by K2 (pour Renault)",
    dates: "Jan. 2019 - Avr. 2019",
    summary:
      "Elaboration de strategie de tests BPM, organisation et execution des tests, integration/developpement K2 et gestion des anomalies."
  },
  {
    role: "Responsable Qualification Validation",
    company: "Orange OAB",
    dates: "Jan. 2018 - Dec. 2018",
    summary:
      "Pilotage de tests fonctionnels et automatises d'applications mobiles/web, strategie de tests, automatisation de web services SoapUI."
  },
  {
    role: "Ingenieur Test et Qualification",
    company: "Orange OAB",
    dates: "Avr. 2016 - Dec. 2017",
    summary:
      "Tests fonctionnels et automatises d'une application web SVI, conception TDD, automatisation Keyword Driven et gestion des anomalies."
  },
  {
    role: "Ingenieur Test et Qualification",
    company: "Orange OAB",
    dates: "Sep. 2015 - Mars 2016",
    summary:
      "Tests fonctionnels d'applications PC, web et mobile autour de l'ecosysteme Livebox, gestion de jeux de donnees et anomalies."
  },
  {
    role: "Stage de fin d'etudes - Developpeur Java",
    company: "Orange OLPS",
    dates: "Mars 2015 - Aout 2015",
    summary:
      "Conception et developpement d'une API Java pour l'extraction Excel vers serveur vocal interactif, puis integration/deploiement."
  }
];

function renderSkills(items) {
  const root = document.getElementById("skills-grid");
  if (!root) return;

  const maxYears = Math.max(...items.map((item) => item.years), 1);
  root.innerHTML = items
    .map((item) => {
      const width = Math.round((item.years / maxYears) * 100);
      const label = getLevelLabel(item.level);
      const starCount = getLevelStars(item.level);
      const stars = "★".repeat(starCount) + "☆".repeat(5 - starCount);
      return `
      <article class="skill-card">
        <div class="skill-header">
          <h3>${item.name}</h3>
          <span class="level-badge level-${item.level}">${label}</span>
        </div>
        <p class="tool-stars" aria-label="Niveau ${label}">${stars}</p>
        <div class="level-track" aria-hidden="true">
          <span class="level-fill" style="width: ${width}%"></span>
        </div>
        <p class="tool-level-foot">${item.years} an(s) d'experience</p>
      </article>
    `;
    })
    .join("");
}

function getLevelLabel(level) {
  if (level === "expert") return "Expert";
  if (level === "confirme") return "Confirme";
  return "Debutant";
}

function getLevelStars(level) {
  if (level === "expert") return 5;
  if (level === "confirme") return 4;
  return 2;
}

function renderToolCards(root, items, maxYears) {
  if (!root) return;

  root.innerHTML = items
    .map((item) => {
      const width = Math.round((item.years / maxYears) * 100);
      const label = getLevelLabel(item.level);
      const starCount = getLevelStars(item.level);
      const stars = "★".repeat(starCount) + "☆".repeat(5 - starCount);
      return `
      <article class="tool-level-item">
        <div class="tool-level-header">
          <h3>${item.name}</h3>
          <span class="level-badge level-${item.level}">${label}</span>
        </div>
        <p class="tool-stars" aria-label="Niveau ${label}">${stars}</p>
        <div class="level-track" aria-hidden="true">
          <span class="level-fill" style="width: ${width}%"></span>
        </div>
        <p class="tool-level-foot">${item.label} d'experience</p>
      </article>
    `;
    })
    .join("");
}

function renderToolsByLevel(items) {
  const leftRoot = document.getElementById("tools-left-list");
  const rightRoot = document.getElementById("tools-right-list");
  if (!leftRoot || !rightRoot) return;

  const maxYears = Math.max(...items.map((item) => item.years), 1);
  const leftItems = items.filter((item) => item.level === "expert" || item.level === "debutant");
  const rightItems = items.filter((item) => item.level === "confirme");

  renderToolCards(leftRoot, leftItems, maxYears);
  renderToolCards(rightRoot, rightItems, maxYears);
}

function renderCards(id, items, type) {
  const root = document.getElementById(id);
  if (!root) return;

  if (type === "project") {
    root.innerHTML = items
      .map(
        (item) => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span class="badge">${item.tag}</span>
        </article>
      `
      )
      .join("");
    return;
  }

  root.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <h3>${item.name}</h3>
        <p>${item.note}</p>
      </article>
    `
    )
    .join("");
}

function renderExperiences(items) {
  const root = document.getElementById("experience-list");
  if (!root) return;

  root.innerHTML = items
    .map(
      (item) => `
      <article>
        <div class="timeline-dot"></div>
        <div>
          <h3>${item.role} - ${item.company}</h3>
          <p class="timeline-date">${item.dates}</p>
          <p>${item.summary}</p>
        </div>
      </article>
    `
    )
    .join("");
}

function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function renderApplications(items) {
  const root = document.getElementById("applications-grid");
  if (!root) return;

  root.innerHTML = items
    .map(
      (item) => `
      <article class="app-card">
        <div class="app-card-header">
          <h3>${item.name}</h3>
          <span class="app-type">${item.type}</span>
        </div>
        <p class="app-sector"><strong>Secteur:</strong> ${item.sector}</p>
        <p class="app-desc">${item.description}</p>
        <p class="app-techs"><strong>Outils:</strong> ${item.techs}</p>
      </article>
    `
    )
    .join("");
}

renderSkills(skills);
renderToolsByLevel(toolsByLevel);
renderExperiences(experiences);
renderApplications(applications);
renderCards("project-grid", projects, "project");
renderCards("client-grid", clients, "client");
revealOnScroll();

document.getElementById("year").textContent = new Date().getFullYear();
