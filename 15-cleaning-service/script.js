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

// Price estimator
const size = document.getElementById('size');
const sizeVal = document.getElementById('sizeVal');
const priceVal = document.getElementById('priceVal');
const chips = document.querySelectorAll('.chip');
let rate = 70;

function updatePrice() {
  const bedrooms = parseInt(size.value, 10);
  const price = rate * 0.5 + bedrooms * (rate * 0.4);
  priceVal.textContent = '$' + Math.round(price);
  sizeVal.textContent = bedrooms;
}
size.addEventListener('input', updatePrice);
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    rate = parseFloat(chip.dataset.rate);
    updatePrice();
  });
});
updatePrice();

// Demo form
const bookForm = document.getElementById('bookForm');
const formNote = document.getElementById('formNote');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "CrystalClean — שירותי ניקיון לבית ולמשרד",
 "desc": "CrystalClean — צוותי ניקיון מבוטחים ובעלי בדיקת רקע לבתים ולמשרדים.",
 "k1": "שירותים",
 "k2": "איך זה עובד",
 "k3": "מחירים",
 "k4": "המלצות",
 "k5": "קבלו הצעת מחיר",
 "k6": "צוותים מבוטחים ובעלי בדיקת רקע",
 "k7": "בית נקי ומבריק, בלי להזיז אצבע",
 "k8": "הזמינו מנקים אמינים ומוסמכים בפחות מ-60 שניות. חד-פעמי או קבוע — המרחב שלכם, הסטנדרטים שלנו.",
 "k9": "קבלו הצעת מחיר מיידית",
 "k10": "השירותים שלנו",
 "k11": "<span class=\"check\">✓</span> ניקיון יסודי של המטבח",
 "k12": "<span class=\"check\">✓</span> חיטוי חדרי רחצה",
 "k13": "<span class=\"check\">✓</span> שאיבה ושטיפת רצפות",
 "k14": "<span class=\"check\">✓</span> ניקוי אבק, מלמעלה למטה",
 "k15": "בכל ביקור, בהתחייבות.",
 "k16": "ניקיון לכל מרחב",
 "k17": "ניקיון למגורים",
 "k18": "ניקיון קבוע או חד-פעמי המותאם לבית שלכם.",
 "k19": "משרדים ומסחרי",
 "k20": "שעות גמישות ששומרות על מקום העבודה שלכם נקי ומבריק.",
 "k21": "ניקיון יסודי",
 "k22": "איפוס מלמעלה למטה לכניסה לדירה, ניקיון אביב או אירועים.",
 "k23": "כניסה / יציאה מדירה",
 "k24": "השאירו את הדירה הישנה נקייה, והגיעו לחדשה באותו מצב.",
 "k25": "שטיחים וריפוד",
 "k26": "ניקוי עמוק בשאיבה שמסיר כתמים וריחות.",
 "k27": "ניקוי חלונות",
 "k28": "שירות חלונות פנים וחוץ ללא פסים.",
 "k29": "איך זה עובד",
 "k30": "הזמנה תוך דקות",
 "k31": "בחרו שירות",
 "k32": "ספרו לנו מה גודל המרחב ומה צריך לנקות.",
 "k33": "בחרו זמן",
 "k34": "זמינים תורים לאותו יום ותורים קבועים אונליין.",
 "k35": "אנחנו מנקים",
 "k36": "צוות מוסמך ומבוטח מגיע ומתחיל לעבוד.",
 "k37": "נהנים",
 "k38": "לא מרוצים? ננקה שוב בחינם, בהתחייבות.",
 "k39": "תמחור מיידי",
 "k40": "הערכת מחיר לניקיון שלכם",
 "k41": "גודל הבית:",
 "k42": "חדרי שינה",
 "k43": "רגיל",
 "k44": "ניקיון יסודי",
 "k45": "יציאה מדירה",
 "k46": "מחיר משוער",
 "k47": "ההצעה הסופית מאושרת לאחר סיור קצר",
 "k48": "שכנים כמוכם סומכים עלינו",
 "k49": "\"אותו צוות בכל פעם, תמיד בזמן, תמיד יסודי. בית נקי בלי לחשוב על זה.\"",
 "k50": "— נורה ו.",
 "k51": "\"ניקיון היציאה החזיר לנו את כל הפיקדון. בעל הבית התרשם מאוד.\"",
 "k52": "— משפחת פיטרסון",
 "k53": "\"במשרד באמת מרגישים רעננות, לא רק סדר. העובדים אפילו העירו על זה.\"",
 "k54": "— Bright Path Studio",
 "k55": "מוכנים למרחב נקי ומבריק?",
 "k56": "קבלו הצעת מחיר מיידית — בלי התחייבות ובלי שיחות מכירה לוחצות.",
 "k57": "השירות הנדרש",
 "k58": "ניקיון למגורים",
 "k59": "ניקיון משרדים",
 "k60": "ניקיון יסודי",
 "k61": "כניסה / יציאה מדירה",
 "k62": "קבלו את הצעת המחיר החינמית שלי",
 "k63": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k64": "&copy; 2026 CrystalClean. תבנית להדגמה בלבד.",
 "k65": "שם מלא",
 "k66": "מספר טלפון"
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
