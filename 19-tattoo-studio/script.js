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
 "title": "Black Ravens Tattoo — סטודיו לקעקועים בהתאמה אישית",
 "desc": "Black Ravens Tattoo — אמנות קעקוע בהתאמה אישית: מסורתי, בלקוורק, קו דק וכיסוי קעקועים.",
 "k1": "סגנונות",
 "k2": "האמנים",
 "k3": "גלריה",
 "k4": "הזמנה",
 "k5": "קבעו ייעוץ",
 "k6": "סטודיו לקעקועים בהתאמה אישית &middot; מאז 2011",
 "k7": "דיו עם כוונה",
 "k8": "כל יצירה מעוצבת במיוחד לעור שעליו היא תחיה. בלי קיצורי דרך מהקיר — רק הסיפור שלכם, נעשה נכון.",
 "k9": "קבעו ייעוץ",
 "k10": "לפורטפוליו",
 "k11": "במה אנחנו מתמחים",
 "k12": "מסורתי",
 "k13": "קווים נועזים, צבע רווי וסגנון אמריקאי על-זמני.",
 "k14": "בלקוורק",
 "k15": "דיו שחור כבד, עיצובים גאומטריים ואבסטרקטיים.",
 "k16": "קו דק",
 "k17": "קווים עדינים ומדויקים ליצירות מינימליסטיות.",
 "k18": "יפני",
 "k19": "עבודות גדולות בהשראת אירזומי מסורתי.",
 "k20": "כיסוי קעקועים",
 "k21": "הופכים קעקועים ישנים או לא רצויים לאמנות חדשה.",
 "k22": "עיצוב אישי",
 "k23": "מפגשי עיצוב אישיים ליצירות מקוריות לחלוטין.",
 "k24": "האמנים",
 "k25": "הכירו את הצוות",
 "k26": "רייבן קול",
 "k27": "בלקוורק וגאומטרי",
 "k28": "מיקה ווס",
 "k29": "קו דק ובוטני",
 "k30": "דייגו קיין",
 "k31": "מסורתי וכיסויים",
 "k32": "פורטפוליו",
 "k33": "עבודות אחרונות",
 "k34": "המלצות",
 "k35": "סומכים עלינו על אמנות קבועה",
 "k36": "\"רייבן הפך סקיצה גסה ליצירה הכי טובה על הגוף שלי. אמן אמיתי.\"",
 "k37": "— ז'ול מ.",
 "k38": "\"כיסו קעקוע גרוע ממקום אחר — אף אחד לא היה מנחש שהוא היה שם.\"",
 "k39": "— אנדרה פ.",
 "k40": "\"סטודיו נקי, תהליך מקצועי, אפס לחץ. בדיוק איך שקעקוע ראשון אמור להרגיש.\"",
 "k41": "— סיסי ר.",
 "k42": "מוכנים ליצירה שלכם?",
 "k43": "ספרו לנו את הרעיון, המיקום והגודל — נתאים לכם את האמן הנכון.",
 "k44": "בקשת ייעוץ",
 "k45": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k46": "&copy; 2026 Black Ravens Tattoo. תבנית להדגמה בלבד.",
 "k47": "שם מלא",
 "k48": "כתובת אימייל",
 "k49": "תארו את רעיון הקעקוע, הגודל והמיקום"
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
