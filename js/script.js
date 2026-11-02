document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

function observeReveals(root = document) {
  root.querySelectorAll('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
}

/* ---------- i18n rendering ---------- */
const STORAGE_KEY = 'portfolio-lang';

function renderLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = t.htmlLang;
  document.getElementById('pageTitle').textContent = t.pageTitle;
  document.getElementById('pageDescription').setAttribute('content', t.pageDescription);

  // Nav
  document.getElementById('navAbout').textContent = t.nav.about;
  document.getElementById('navExperience').textContent = t.nav.experience;
  document.getElementById('navEducation').textContent = t.nav.education;
  document.getElementById('navSkills').textContent = t.nav.skills;
  document.getElementById('navCertifications').textContent = t.nav.certifications;
  document.getElementById('navContact').textContent = t.nav.contact;

  // Hero
  document.getElementById('heroEyebrow').textContent = t.hero.eyebrow;
  document.getElementById('heroName1').textContent = t.hero.name1;
  document.getElementById('heroName2').textContent = t.hero.name2;
  document.getElementById('heroRole').textContent = t.hero.role;
  document.getElementById('heroDesc').textContent = t.hero.desc;
  document.getElementById('heroCta1').textContent = t.hero.cta1;
  document.getElementById('heroCta2').textContent = t.hero.cta2;

  const heroCta3 = document.getElementById('heroCta3');
  heroCta3.innerHTML = `<span class="download-icon" aria-hidden="true">⭳</span> ${t.hero.cta3}`;
  heroCta3.setAttribute('href', t.cv.file);
  heroCta3.setAttribute('download', t.cv.filename);

  const contactCtaDownload = document.getElementById('contactCtaDownload');
  contactCtaDownload.innerHTML = `<span class="download-icon" aria-hidden="true">⭳</span> ${t.hero.cta3}`;
  contactCtaDownload.setAttribute('href', t.cv.file);
  contactCtaDownload.setAttribute('download', t.cv.filename);

  // Stats
  document.getElementById('statsGrid').innerHTML = t.stats.map(s => `
    <div class="stat reveal">
      <span class="stat-number">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');

  // About
  document.getElementById('aboutEyebrow').textContent = t.about.eyebrow;
  document.getElementById('aboutTitle').textContent = t.about.title;
  document.getElementById('aboutText').textContent = t.about.text;
  document.getElementById('aboutLangsTitle').textContent = t.about.langsTitle;
  document.getElementById('langList').innerHTML = t.about.langs.map(l => `
    <li><span>${l.name}</span><em>${l.level}</em></li>
  `).join('');

  // Experience
  document.getElementById('expEyebrow').textContent = t.experience.eyebrow;
  document.getElementById('expTitle').textContent = t.experience.title;
  document.getElementById('timeline').innerHTML = t.experience.items.map(item => `
    <article class="timeline-item reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date}</span>
        <h3>${item.title}</h3>
        <p class="timeline-org">${item.org}</p>
        <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    </article>
  `).join('');

  // Education
  document.getElementById('eduEyebrow').textContent = t.education.eyebrow;
  document.getElementById('eduTitle').textContent = t.education.title;
  document.getElementById('educationGrid').innerHTML = t.education.items.map(item => `
    <div class="edu-card reveal">
      <span class="edu-badge">${item.badge}</span>
      <h3>${item.title}</h3>
      <p class="edu-field">${item.field}</p>
      <p class="edu-meta">${item.meta}</p>
    </div>
  `).join('');

  // Skills
  document.getElementById('skillsEyebrow').textContent = t.skills.eyebrow;
  document.getElementById('skillsTitle').textContent = t.skills.title;
  document.getElementById('skillsGrid').innerHTML = t.skills.blocks.map(block => `
    <div class="skill-block reveal">
      <h3>${block.title}</h3>
      <div class="tags">${block.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
    </div>
  `).join('');

  // Certifications
  document.getElementById('certEyebrow').textContent = t.certifications.eyebrow;
  document.getElementById('certTitle').textContent = t.certifications.title;
  document.getElementById('certList').innerHTML = t.certifications.items.map(item => `
    <li class="reveal">${item}</li>
  `).join('');

  // Contact
  document.getElementById('contactEyebrow').textContent = t.contact.eyebrow;
  document.getElementById('contactTitle').textContent = t.contact.title;
  document.getElementById('contactText').textContent = t.contact.text;

  // Footer
  document.getElementById('footerRights').textContent = t.footer.rights;

  // Toggle active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  observeReveals();
}

function setLanguage(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  renderLanguage(lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const initialLang = localStorage.getItem(STORAGE_KEY) || 'fr';
renderLanguage(initialLang);

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Active nav link on scroll ---------- */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { threshold: 0.3, rootMargin: '-76px 0px -50% 0px' });

sections.forEach(section => navObserver.observe(section));
