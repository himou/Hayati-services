const translations = {
  fr: {
    htmlLang: "fr",
    pageTitle: "Ibrahim Soumana Harouna — Portfolio",
    pageDescription: "Portfolio professionnel d'Ibrahim Soumana Harouna — QA Automation Engineer, spécialiste des tests web, mobile et API dans les secteurs réglementés.",
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      skills: "Compétences",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Paris, France",
      name1: "Ibrahim",
      name2: "Soumana Harouna",
      role: "QA Automation Engineer — Web, Mobile & API",
      desc: "Plus de 10 ans d'expérience en automatisation des tests web, mobile et API, au service de la fiabilité des logiciels dans l'assurance, la santé, la banque et les télécoms.",
      cta1: "Me contacter",
      cta2: "Voir le parcours",
      cta3: "Télécharger le CV (PDF)"
    },
    cv: {
      file: "cv/Ibrahim_Soumana_Harouna_CV.pdf",
      filename: "Ibrahim_Soumana_Harouna_CV.pdf"
    },
    stats: [
      { number: "10+", label: "Années d'expérience" },
      { number: "8", label: "Entreprises accompagnées" },
      { number: "4", label: "Secteurs réglementés" },
      { number: "3", label: "Certifications" }
    ],
    about: {
      eyebrow: "À propos",
      title: "Un parcours au service de la qualité logicielle",
      text: "Depuis plus de dix ans, je conçois et j'automatise des tests pour des logiciels qui ne peuvent pas se permettre de planter — assurance, santé, banque, télécom. De l'écriture des premiers scripts à la mise en place de politiques de test complètes pour trois entreprises, mon parcours reflète un engagement constant pour la fiabilité des logiciels, l'accessibilité numérique (RGAA/WCAG) et l'intégration continue.",
      langsTitle: "Méthodologies",
      langs: [
        { name: "Scrum", level: "Confirmé" },
        { name: "SAFe", level: "Confirmé" },
        { name: "Kanban", level: "Confirmé" },
        { name: "TDD", level: "Familier" }
      ]
    },
    experience: {
      eyebrow: "Parcours professionnel",
      title: "Expérience",
      items: [
        {
          date: "Juillet 2025 — Présent",
          title: "QA Automaticien",
          org: "Kereis · Nantes, France",
          bullets: [
            "Tests fonctionnels manuels et automatisés sur 4 applications web en production",
            "Automatisation des tests en Cypress, migration en cours vers Playwright",
            "Utilisation de GitHub Copilot pour accélérer l'automatisation des tests",
            "Tests d'API automatisés avec Bruno, après migration de plus de 500 requêtes depuis Postman",
            "Intégration continue avec GitLab et référent interne Squash TM"
          ]
        },
        {
          date: "Avril 2024 — Juin 2025",
          title: "Lead QA",
          org: "ASSIA · Quimper, France",
          bullets: [
            "Rédaction de la politique et de la stratégie de test du groupe, à partir de zéro",
            "Pilotage d'une équipe de 3 testeurs sur la refonte complète de la plateforme SaaS",
            "Automatisation du site web en Robot Framework et de l'API en Postman",
            "Mise en place de toute la démarche qualité du groupe, de A à Z"
          ]
        },
        {
          date: "Septembre 2021 — Avril 2024",
          title: "QA Senior",
          org: "Assurance Maladie (via Atos) · Nantes, France",
          bullets: [
            "Tests manuels et automatisés du mobile et du web de « Mon Espace Santé », avec Katalon et BrowserStack",
            "Tests d'API avec Postman, y compris le standard médical FHIR",
            "Audits d'accessibilité RGAA/WCAG pour une plateforme utilisée par des millions de Français",
            "Suivi des anomalies dans Jira Xray et ALM"
          ]
        },
        {
          date: "Mars 2020 — Août 2021",
          title: "Lead QA",
          org: "Noelse (via Daveo) · France",
          bullets: [
            "Rédaction de la politique et de la stratégie de test de la néobanque, à partir de zéro",
            "Pilotage d'une équipe de recette de 4 personnes plus un stagiaire",
            "Gestion des anomalies, des jeux de données et des mises en production",
            "Mise en place d'un comité de mise en production (Lead QA, Tech Lead, PO, décideurs)"
          ]
        },
        {
          date: "Mai 2019 — Février 2020",
          title: "Pilote de recette",
          org: "CGI · pour La Poste",
          bullets: [
            "Pilotage de la recette sur les applications PC, mobile et web de la filiale B2B",
            "Mise en place d'un POC d'automatisation Robot Framework/Selenium qui a aidé CGI à remporter le contrat client",
            "Gestion des anomalies et des jeux de données"
          ]
        },
        {
          date: "Janvier 2019 — Avril 2019",
          title: "Référent testeur",
          org: "Low Code Factory · pour Renault",
          bullets: [
            "Stratégie de test pour l'ensemble des projets BPM K2",
            "Application de la théorie des graphes pour concevoir une nouvelle méthodologie de test BPM"
          ]
        },
        {
          date: "Mars 2015 — Décembre 2018",
          title: "Ingénieur Test et Qualification",
          org: "Orange",
          bullets: [
            "Validation d'applications mobiles B2B/B2C/B2E, automatisation des web services avec SoapUI (Groovy)",
            "90% des tests de non-régression automatisés en Keyword-Driven Testing (Robot Framework) sur une application web de serveur vocal interactif",
            "Tests des applications de gestion de contenu LiveBox"
          ]
        },
        {
          date: "Mars 2015 — Août 2015",
          title: "Stagiaire développeur Java",
          org: "Orange",
          bullets: [
            "Développement d'une API Java extrayant des données de fichiers Excel pour un serveur vocal interactif",
            "API toujours utilisée en production aujourd'hui"
          ]
        }
      ]
    },
    education: {
      eyebrow: "Parcours académique",
      title: "Formation",
      items: [
        {
          badge: "Master",
          title: "Master MIAGE",
          field: "Systèmes d'information & management",
          meta: "Université de Mulhouse · 2013 – 2015"
        },
        {
          badge: "Master",
          title: "Master Systèmes",
          field: "Systèmes",
          meta: "Université de Besançon · 2011 – 2013"
        },
        {
          badge: "Licence",
          title: "Licence Informatique",
          field: "Informatique",
          meta: "Université de Mostaganem, Algérie · 2008 – 2011"
        }
      ]
    },
    skills: {
      eyebrow: "Savoir-faire",
      title: "Compétences",
      blocks: [
        {
          title: "Automatisation & frameworks",
          tags: ["Cypress", "Playwright", "Robot Framework", "Selenium", "Katalon", "Appium", "Gherkin / Cucumber"]
        },
        {
          title: "Tests API & gestion de tests",
          tags: ["Postman", "Bruno", "SoapUI", "Squash TM", "Jira / Xray", "ALM", "TFS", "Confluence", "BrowserStack"]
        },
        {
          title: "Accessibilité",
          tags: ["RGAA", "WCAG", "Wave", "Tag Inspector"]
        },
        {
          title: "CI/CD & développement",
          tags: ["GitLab CI/CD", "Jenkins", "Git", "SQL", "Java", "K2 BPM"]
        }
      ]
    },
    certifications: {
      eyebrow: "Renforcement de capacités",
      title: "Certifications",
      items: [
        "Certification ISTQB Foundation (2017) — tests logiciels",
        "Certification K2 (2019) — plateforme BPM low-code",
        "Certification Data Manager (2022) — gestion des données"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Travaillons ensemble",
      text: "Basé à Paris, France — disponible pour des missions de test et d'automatisation, en présentiel ou à distance."
    },
    footer: {
      rights: "Tous droits réservés."
    }
  },

  en: {
    htmlLang: "en",
    pageTitle: "Ibrahim Soumana Harouna — Portfolio",
    pageDescription: "Professional portfolio of Ibrahim Soumana Harouna — QA Automation Engineer, specialising in web, mobile and API testing across regulated industries.",
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Paris, France",
      name1: "Ibrahim",
      name2: "Soumana Harouna",
      role: "QA Automation Engineer — Web, Mobile & API",
      desc: "10+ years of experience automating web, mobile and API tests, dedicated to software reliability in insurance, healthcare, banking and telecom.",
      cta1: "Get in touch",
      cta2: "View experience",
      cta3: "Download CV (PDF)"
    },
    cv: {
      file: "cv/Ibrahim_Soumana_Harouna_CV.pdf",
      filename: "Ibrahim_Soumana_Harouna_CV.pdf"
    },
    stats: [
      { number: "10+", label: "Years of experience" },
      { number: "8", label: "Companies served" },
      { number: "4", label: "Regulated sectors" },
      { number: "3", label: "Certifications" }
    ],
    about: {
      eyebrow: "About",
      title: "A career dedicated to software quality",
      text: "For over ten years, I've designed and automated tests for software that can't afford to break — insurance, healthcare, banking, telecom. From writing the first scripts to building complete test policies for three companies, my career reflects a sustained commitment to software reliability, digital accessibility (RGAA/WCAG), and continuous integration.",
      langsTitle: "Methodologies",
      langs: [
        { name: "Scrum", level: "Proficient" },
        { name: "SAFe", level: "Proficient" },
        { name: "Kanban", level: "Proficient" },
        { name: "TDD", level: "Familiar" }
      ]
    },
    experience: {
      eyebrow: "Professional Background",
      title: "Experience",
      items: [
        {
          date: "July 2025 — Present",
          title: "QA Automation Engineer",
          org: "Kereis · Nantes, France",
          bullets: [
            "Manual and automated functional testing on 4 production web applications",
            "Test automation in Cypress, currently migrating to Playwright",
            "Using GitHub Copilot to speed up test automation",
            "Automated API testing in Bruno, after migrating 500+ requests from Postman",
            "Continuous integration with GitLab, internal referent for Squash TM"
          ]
        },
        {
          date: "April 2024 — June 2025",
          title: "Lead QA",
          org: "ASSIA · Quimper, France",
          bullets: [
            "Wrote the group's test policy and strategy from scratch",
            "Led a 3-person test team through a full SaaS platform redesign",
            "Automated the website in Robot Framework and the API in Postman",
            "Built the group's entire QA process from the ground up"
          ]
        },
        {
          date: "September 2021 — April 2024",
          title: "Senior QA Engineer",
          org: "Assurance Maladie (via Atos) · Nantes, France",
          bullets: [
            "Manual and automated testing of the mobile and web apps for \"Mon Espace Santé\", with Katalon and BrowserStack",
            "API testing with Postman, including the FHIR medical data standard",
            "RGAA/WCAG accessibility audits on a platform used by millions of French citizens",
            "Defect tracking in Jira Xray and ALM"
          ]
        },
        {
          date: "March 2020 — August 2021",
          title: "Lead QA",
          org: "Noelse (via Daveo) · France",
          bullets: [
            "Wrote the neobank's test policy and strategy from scratch",
            "Led a 4-person UAT team plus one intern",
            "Managed defect triage, test data and production releases",
            "Set up a formal release-readiness committee (Lead QA, Tech Lead, PO, decision-makers)"
          ]
        },
        {
          date: "May 2019 — February 2020",
          title: "UAT Lead",
          org: "CGI · for La Poste",
          bullets: [
            "Ran UAT across PC, mobile and web apps for the B2B subsidiary",
            "Built a Robot Framework/Selenium automation POC that helped CGI win the client contract",
            "Managed defects and test data"
          ]
        },
        {
          date: "January 2019 — April 2019",
          title: "Test Referent",
          org: "Low Code Factory · for Renault",
          bullets: [
            "Owned test strategy for all K2 BPM projects",
            "Applied graph theory to design a new BPM testing methodology"
          ]
        },
        {
          date: "March 2015 — December 2018",
          title: "Test & Qualification Engineer",
          org: "Orange",
          bullets: [
            "B2B/B2C/B2E mobile app validation, web service automation with SoapUI (Groovy)",
            "90% of regression tests automated via Keyword-Driven Testing (Robot Framework) on an IVR-builder web app",
            "Testing of LiveBox content-management applications"
          ]
        },
        {
          date: "March 2015 — August 2015",
          title: "Java Developer Intern",
          org: "Orange",
          bullets: [
            "Built a Java API extracting data from Excel files for an interactive voice server",
            "The API is still used in production today"
          ]
        }
      ]
    },
    education: {
      eyebrow: "Academic Background",
      title: "Education",
      items: [
        {
          badge: "Master's",
          title: "MSc, MIAGE",
          field: "Information systems & management",
          meta: "Université de Mulhouse · 2013 – 2015"
        },
        {
          badge: "Master's",
          title: "MSc, Systems",
          field: "Systems",
          meta: "Université de Besançon · 2011 – 2013"
        },
        {
          badge: "Bachelor's",
          title: "BSc, Computer Science",
          field: "Computer Science",
          meta: "Université de Mostaganem, Algeria · 2008 – 2011"
        }
      ]
    },
    skills: {
      eyebrow: "Expertise",
      title: "Skills",
      blocks: [
        {
          title: "Automation & frameworks",
          tags: ["Cypress", "Playwright", "Robot Framework", "Selenium", "Katalon", "Appium", "Gherkin / Cucumber"]
        },
        {
          title: "API testing & test management",
          tags: ["Postman", "Bruno", "SoapUI", "Squash TM", "Jira / Xray", "ALM", "TFS", "Confluence", "BrowserStack"]
        },
        {
          title: "Accessibility",
          tags: ["RGAA", "WCAG", "Wave", "Tag Inspector"]
        },
        {
          title: "CI/CD & development",
          tags: ["GitLab CI/CD", "Jenkins", "Git", "SQL", "Java", "K2 BPM"]
        }
      ]
    },
    certifications: {
      eyebrow: "Capacity Building",
      title: "Certifications",
      items: [
        "ISTQB Foundation Certification (2017) — software testing",
        "K2 Certification (2019) — low-code BPM platform",
        "Data Manager Certification (2022) — data management"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      text: "Based in Paris, France — available for testing and automation engagements, on-site or remote."
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};
