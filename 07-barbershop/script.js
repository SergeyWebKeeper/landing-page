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

// Demo form
const bookForm = document.getElementById('bookForm');
const formNote = document.getElementById('formNote');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "The Gentlemen's Cut — מספרה קלאסית",
 "desc": "The Gentlemen's Cut — ספרות מסורתית, גילוח במגבת חמה ופייד מדויק.",
 "k1": "שירותים",
 "k2": "ספרים",
 "k3": "גלריה",
 "k4": "המלצות",
 "k5": "הזמינו כיסא",
 "k6": "מאז 1962 &middot; ספרות מסורתית",
 "k7": "תספורות חדות.<br>אומנות מהדור הישן.",
 "k8": "פייד מדויק, גילוח בתער ישר ושירות מגבת חמה — כמו שמספרה אמורה להרגיש.",
 "k9": "לשירותים",
 "k10": "מחירון",
 "k11": "תספורת קלאסית",
 "k12": "פייד עד העור",
 "k13": "עיצוב וקיצוץ זקן",
 "k14": "גילוח במגבת חמה",
 "k15": "תספורת + גילוח",
 "k16": "תספורת ילדים (עד גיל 12)",
 "k17": "הצוות",
 "k18": "הכירו את הספרים שלכם",
 "k19": "מרקוס ריז",
 "k20": "ספר מאסטר &middot; 18 שנות ניסיון",
 "k21": "דומיניק וולס",
 "k22": "מומחה פייד &middot; 9 שנות ניסיון",
 "k23": "אנג'לו ריצ'י",
 "k24": "מומחה תער ישר &middot; 22 שנות ניסיון",
 "k25": "תספורות טריות, כל יום",
 "k26": "נאמנים מהיום הראשון",
 "k27": "\"מגיע לכאן כבר 6 שנים. מרקוס יודע בדיוק מה אני רוצה בלי שאצטרך לבקש.\"",
 "k28": "— דייב ר.",
 "k29": "\"הגילוח הכי טוב במגבת חמה בעיר. מרגיש כמו לחזור בזמן — במובן הטוב.\"",
 "k30": "— אלייג'ה ס.",
 "k31": "\"לקחתי את הבן שלי לתספורת הראשונה שלו כאן. סבלניים, אדיבים, והתספורת יצאה מושלמת.\"",
 "k32": "— מרקוס או.",
 "k33": "שריינו את הכיסא שלכם",
 "k34": "מקבלים גם בלי תור, אבל הזמנה מראש אומרת בלי המתנה.",
 "k35": "הספר המועדף",
 "k36": "ללא העדפה",
 "k37": "הזמינו עכשיו",
 "k38": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k39": "&copy; 2026 The Gentlemen's Cut. תבנית להדגמה בלבד.",
 "k40": "שם מלא",
 "k41": "מספר טלפון"
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
