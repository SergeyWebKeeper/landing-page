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
const enrollForm = document.getElementById('enrollForm');
const formNote = document.getElementById('formNote');
enrollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Little Sprouts — מעון יום שבו הקטנים גדלים",
 "desc": "Little Sprouts — טיפול בתינוקות, תוכניות לפעוטות וגן ילדים בסביבה בטוחה ושמחה.",
 "k1": "תוכניות",
 "k2": "יום אצלנו",
 "k3": "למה אנחנו",
 "k4": "צור קשר",
 "k5": "הירשמו עכשיו",
 "k6": "מעון מורשה ומוכר",
 "k7": "איפה שקטנים<br>גדלים <span>בגדול</span>",
 "k8": "Little Sprouts מציעה סביבה חמה, בטוחה ומובנית בשמחה לתינוקות ועד גן חובה — כי השנים הראשונות הן החשובות ביותר.",
 "k9": "קבעו סיור",
 "k10": "התוכניות שלנו",
 "k11": "קבוצת גיל לכל אחד",
 "k12": "טיפול בתינוקות",
 "k13": "6 שבועות – 12 חודשים",
 "k14": "תוכנית פעוטות",
 "k15": "1 – 2 שנים",
 "k16": "גן טרום חובה",
 "k17": "3 – 4 שנים",
 "k18": "גן חובה",
 "k19": "4 – 5 שנים",
 "k20": "איך נראה יום טיפוסי",
 "k21": "הגעה ומשחק חופשי",
 "k22": "מעגל למידה",
 "k23": "משחק בחוץ",
 "k24": "ארוחת צהריים ומנוחה",
 "k25": "אמנות ומוזיקה",
 "k26": "חטיף ואיסוף",
 "k27": "למה הורים בוחרים בנו",
 "k28": "שקט נפשי, מובנה מראש",
 "k29": "יחס נמוך של 4:1 בין מורה לילדים",
 "k30": "כניסה מאובטחת וגישה למצלמות חיות",
 "k31": "ארוחות מזינות שמוכנות במקום מדי יום",
 "k32": "תוכנית לימודים מוכרת ומורשית על ידי המדינה",
 "k33": "שנות שירות למשפחות",
 "k34": "ילד לכל מטפלת",
 "k35": "% שביעות רצון הורים",
 "k36": "+ ילדים סיימו אצלנו",
 "k37": "המלצות הורים",
 "k38": "משפחות אוהבות את Little Sprouts",
 "k39": "\"הבת שלנו רצה לדלת כל בוקר. זה אומר לנו כל מה שצריך לדעת.\"",
 "k40": "— משפחת אלווארז",
 "k41": "\"תכונת המצלמה נתנה לי כל כך הרבה שקט נפשי בחזרה לעבודה. גם צוות מדהים.\"",
 "k42": "— פריה נ.",
 "k43": "\"הוא למד כאן בשנה אחת יותר ממה שציפינו מגן ילדים. מורות נפלאות באמת.\"",
 "k44": "— מרקוס ט.",
 "k45": "בואו לראות את הכיתות שלנו ולפגוש את המורות — הסיורים מתקיימים בבקרים בימי חול.",
 "k46": "בקשת סיור",
 "k47": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k48": "&copy; 2026 Little Sprouts. תבנית להדגמה בלבד.",
 "k49": "שם ההורה",
 "k50": "גיל הילד",
 "k51": "כתובת אימייל"
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
