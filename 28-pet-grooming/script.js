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
 "title": "Fluff &amp; Fold — מספרת חיות מחמד",
 "desc": "Fluff & Fold — טיפוח חיות מחמד בשירות מלא: אמבטיות, תספורות, גזירת ציפורניות וטיפולי הפחתת נשירה.",
 "k1": "שירותים",
 "k2": "גלריה",
 "k3": "מחירים",
 "k4": "הזמנה",
 "k5": "הזמינו טיפוח",
 "k6": "טיפוח עדין וללא לחץ לחיות מחמד",
 "k7": "פינוק ל<br><span>חבר הכי טוב</span> שלכם",
 "k8": "מאמבטיה מהירה ועד תספורת מלאה לפי תקן הגזע, המטפחים שלנו מתייחסים לכל חיה כאילו הייתה שלהם — בסבלנות, בעדינות ובלי פחד באמת.",
 "k9": "קבעו תור",
 "k10": "השירותים שלנו",
 "k11": "תפריט טיפוח בשירות מלא",
 "k12": "אמבטיה ופיצוח קשרים",
 "k13": "שמפו, ייבוש ובירוש לפרווה רעננה ורכה.",
 "k14": "טיפוח מלא",
 "k15": "תספורות לפי תקן הגזע או בהתאמה אישית, בסגנון שתבחרו.",
 "k16": "גזירת ציפורניים",
 "k17": "גזירה מהירה ועדינה — אפילו לחיות שמפחדות מזה.",
 "k18": "טיפול הפחתת נשירה",
 "k19": "מפחית נשירה משמעותית לגזעים עם פרווה עבה.",
 "k20": "טיפוח ראשון לגורים",
 "k21": "היכרות איטית ועדינה עם חוויית הטיפוח.",
 "k22": "טיפוח חתולים",
 "k23": "טיפול מיוחד וטכניקות הרגעה לחתולים.",
 "k24": "לפני ואחרי",
 "k25": "תספורות שאנחנו גאים בהן",
 "k26": "<span>גזירת גולדן רטריבר</span>",
 "k27": "<span>טיפוח מלא לפודל</span>",
 "k28": "<span>טיפוח לחתול פרסי</span>",
 "k29": "<span>תספורת גור שיצו</span>",
 "k30": "מחיר לפי גודל",
 "k31": "קטן (עד 9 ק״ג)",
 "k32": "החל מ-$45",
 "k33": "אמבטיה ופיצוח קשרים",
 "k34": "גזירת ציפורניים כלולה",
 "k35": "ניקוי אוזניים",
 "k36": "הנפוץ ביותר",
 "k37": "בינוני (9–23 ק״ג)",
 "k38": "החל מ-$65",
 "k39": "טיפוח מלא",
 "k40": "גזירת ציפורניים וניקוי אוזניים",
 "k41": "אפשר להוסיף הפחתת נשירה",
 "k42": "גדול (23+ ק״ג)",
 "k43": "החל מ-$85",
 "k44": "זמן נוסף לפרווה עבה",
 "k45": "המלצות",
 "k46": "חיות שמחות, הורים מרוצים",
 "k47": "\"הכלבה המאומצת והחרדתית שלי בעצם נרגעת בתורים שלה עכשיו. זה אומר הכול.\"",
 "k48": "— ג'נה וקוקו 🐕",
 "k49": "\"תספורת הפודל הכי טובה שקיבלנו, והמטפח הקודם שלנו היה יקר במרכז העיר.\"",
 "k50": "— מרקוס פ.",
 "k51": "\"הם כל כך סבלניים עם החתול שלי, שבאמת שונא את כולם. עושי ניסים.\"",
 "k52": "— תרזה ל.",
 "k53": "הזמינו יום ספא לחיית המחמד שלכם",
 "k54": "ספרו לנו על חיית המחמד ועל הזמן המועדף עליכם — נאשר בקרוב.",
 "k55": "השירות הנדרש",
 "k56": "גזירת ציפורניים",
 "k57": "טיפול הפחתת נשירה",
 "k58": "קבעו תור",
 "k59": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k60": "&copy; 2026 Fluff &amp; Fold. תבנית להדגמה בלבד.",
 "k61": "השם שלכם",
 "k62": "שם חיית המחמד והגזע"
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
