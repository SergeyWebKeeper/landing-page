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
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString();
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterIO.observe(el));

// Demo forms
document.querySelectorAll('.search-btn').forEach(btn => btn.addEventListener('click', (e) => e.preventDefault()));
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Prestige Properties — נדל״ן יוקרה",
 "desc": "Prestige Properties — בתי יוקרה נבחרים וייצוג מקצועי לקונים ולמוכרים בעלי טעם.",
 "k1": "נכסים",
 "k2": "למה אנחנו",
 "k3": "הסוכנים",
 "k4": "צור קשר",
 "k5": "קבעו צפייה",
 "k6": "נדל״ן יוקרה נבחר",
 "k7": "מצאו בית שמרגיש<br>כמו <em>הגעה הביתה</em>",
 "k8": "Prestige Properties מייצגת את הבתים המשובחים ביותר בעיר — בדיסקרטיות ובמומחיות שרכישה משמעותית דורשת.",
 "k9": "מיקום",
 "k10": "סוג נכס",
 "k11": "כל סוג",
 "k12": "פנטהאוז",
 "k13": "וילה",
 "k14": "בית עירוני",
 "k15": "מחיר מקסימלי",
 "k16": "כל מחיר",
 "k17": "חיפוש",
 "k18": "נכסים מובילים",
 "k19": "בתים ששווה להגיע אליהם",
 "k20": "פנטהאוז סקייליין",
 "k21": "4 חדרי שינה &middot; 5 חדרי רחצה &middot; 353 מ״ר",
 "k22": "וילה מודרנית על הגבעה",
 "k23": "5 חדרי שינה &middot; 4 חדרי רחצה &middot; 427 מ״ר",
 "k24": "בית עירוני היסטורי",
 "k25": "3 חדרי שינה &middot; 3 חדרי רחצה &middot; 223 מ״ר",
 "k26": "למה Prestige",
 "k27": "ייצוג, לא רק מודעה",
 "k28": "גישה לנכסים בלעדיים שאינם בשוק",
 "k29": "סיורים פרטיים ודיסקרטיים בזמנים שלכם",
 "k30": "ליווי מלא במשא ומתן ובסגירת העסקה",
 "k31": "רשת מהימנה של בודקים ומממנים",
 "k32": "בתים נמכרו",
 "k33": "מיליארד $ במכירות",
 "k34": "שנות ניסיון",
 "k35": "% שביעות רצון לקוחות",
 "k36": "הכירו את הצוות",
 "k37": "הסוכנים שלכם",
 "k38": "איזבל גרנט",
 "k39": "סוכנת מייסדת &middot; בתי יוקרה",
 "k40": "נתניאל קרוס",
 "k41": "סוכן בכיר &middot; נכסי חוף",
 "k42": "סופיה לין",
 "k43": "סוכנת &middot; פנטהאוזים עירוניים",
 "k44": "מתחילים",
 "k45": "קבעו סיור פרטי",
 "k46": "ספרו לנו מה אתם מחפשים — סוכן יחזור אליכם תוך יום עסקים אחד.",
 "k47": "בקשת סיור",
 "k48": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k49": "&copy; 2026 Prestige Properties. תבנית להדגמה בלבד.",
 "k50": "עיר או שכונה",
 "k51": "שם מלא",
 "k52": "כתובת אימייל",
 "k53": "מספר טלפון",
 "k54": "מה אתם מחפשים?"
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
