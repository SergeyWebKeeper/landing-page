// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Animated counters
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterIO.observe(el));

// Demo form
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Sterling &amp; Associates — עורכי דין",
 "desc": "Sterling & Associates — ייעוץ משפטי מהימן בדיני חברות, תביעות אזרחיות ודיני משפחה.",
 "k1": "תחומי עיסוק",
 "k2": "עורכי הדין",
 "k3": "תוצאות",
 "k4": "צור קשר",
 "k5": "בקשת ייעוץ",
 "k6": "מאז 1987",
 "k7": "ייעוץ אמין.<br>תוצאות מוכחות.",
 "k8": "Sterling &amp; Associates מעניקה ייצוג משפטי דיסקרטי ומדוקדק בדיני חברות, בתביעות אזרחיות ובענייני משפחה.",
 "k9": "בקשו ייעוץ",
 "k10": "תחומי העיסוק שלנו",
 "k11": "דיני חברות",
 "k12": "הקמה, חוזים, מיזוגים ורכישות, ציות לרגולציה.",
 "k13": "תביעות אזרחיות",
 "k14": "יישוב סכסוכים, משא ומתן וייצוג בבית משפט.",
 "k15": "דיני משפחה",
 "k16": "גירושין, משמורת וענייני עיזבון המטופלים בדיסקרטיות.",
 "k17": "דיני מקרקעין",
 "k18": "עסקאות, חוזי שכירות, תכנון ובנייה וסכסוכי נכסים.",
 "k19": "עורכי הדין שלנו",
 "k20": "ייעוץ שאפשר לסמוך עליו",
 "k21": "מרגרט סטרלינג",
 "k22": "שותפה מייסדת &middot; דיני חברות",
 "k23": "ג'יימס ויטפילד",
 "k24": "שותף בכיר &middot; ליטיגציה",
 "k25": "פריה אנאנד",
 "k26": "שותפה &middot; דיני משפחה",
 "k27": "רקורד מוכח",
 "k28": "תוצאות שמדברות בעד עצמן",
 "k29": "שנות פעילות",
 "k30": "תיקים שנסגרו",
 "k31": "% שביעות רצון לקוחות",
 "k32": "עורכי דין בצוות",
 "k33": "המלצות לקוחות",
 "k34": "מה הלקוחות שלנו אומרים",
 "k35": "\"מרגרט ניהלה את הרכישה שלנו בדיוק ובשקיפות מלאה לאורך כל הדרך.\"",
 "k36": "— קבוצת הולוואי",
 "k37": "\"ג'יימס נאבק עבורנו בתיק קשה והשיג תוצאה שלא ציפינו לה.\"",
 "k38": "— ר. דנברס",
 "k39": "\"רגישים ויסודיים בתקופה קשה מאוד למשפחה שלנו.\"",
 "k40": "— א. קולמן",
 "k41": "צרו קשר",
 "k42": "קבעו פגישת ייעוץ חסויה",
 "k43": "כל הפניות מטופלות בסודיות מוחלטת. אנחנו משיבים תוך יום עסקים אחד.",
 "k44": "תחום משפטי",
 "k45": "דיני חברות",
 "k46": "תביעות אזרחיות",
 "k47": "דיני משפחה",
 "k48": "מקרקעין",
 "k49": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k50": "&copy; 2026 Sterling &amp; Associates. תבנית להדגמה בלבד.",
 "k51": "תחומי עיסוק",
 "k52": "שם מלא",
 "k53": "כתובת אימייל",
 "k54": "תארו בקצרה את הנושא שלכם"
};

const EN = {};
const i18nEls = document.querySelectorAll('[data-i18n]');
const i18nPh = document.querySelectorAll('[data-i18n-placeholder]');
i18nEls.forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
i18nPh.forEach(el => { EN[el.dataset.i18nPlaceholder] = el.getAttribute('placeholder'); });

const langSwitch = document.getElementById('langSwitch');
const metaDesc = document.querySelector('meta[name="description"]');
const descEN = metaDesc ? metaDesc.content : '';

function setLang(lang) {
  const dict = lang === 'he' ? HE : EN;
  i18nEls.forEach(el => { const t = dict[el.dataset.i18n]; if (t !== undefined) el.innerHTML = t; });
  i18nPh.forEach(el => { const t = dict[el.dataset.i18nPlaceholder]; if (t !== undefined) el.setAttribute('placeholder', t); });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  if (metaDesc) metaDesc.content = lang === 'he' ? HE.desc : descEN;
  langSwitch.textContent = lang === 'he' ? 'English' : 'עברית';
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}
langSwitch.addEventListener('click', () => {
  setLang(document.documentElement.lang === 'he' ? 'en' : 'he');
});
let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) {}
if (savedLang === 'he') setLang('he');

// Keep the language button readable on every nav theme
function syncLangColor() {
  const burgerOn = getComputedStyle(burger).display !== 'none';
  const ref = burgerOn ? burger.querySelector('span') : document.querySelector('.nav__links a');
  if (!ref) return;
  langSwitch.style.color = burgerOn ? getComputedStyle(ref).backgroundColor : getComputedStyle(ref).color;
}
window.addEventListener('scroll', syncLangColor, { passive: true });
window.addEventListener('resize', syncLangColor);
document.addEventListener('langchange', syncLangColor);
syncLangColor();
