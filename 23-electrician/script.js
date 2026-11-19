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
const requestForm = document.getElementById('requestForm');
const formNote = document.getElementById('formNote');
requestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Volt &amp; Watt Electric — חשמלאים מורשים",
 "desc": "Volt & Watt Electric — שדרוג לוחות חשמל, חיווט, עמדות טעינה לרכב חשמלי ושירות חירום 24/7.",
 "k1": "שירותים",
 "k2": "למה אנחנו",
 "k3": "קבלו הצעה",
 "k4": "המלצות",
 "k5": "קו חירום 24/7",
 "k6": "מורשים ומבוטחים &middot; שירות חירום 24/7",
 "k7": "מחשמלים את הבית שלכם,<br><span>בבטחה</span>",
 "k8": "משדרוג לוחות חשמל ועד עמדות טעינה לרכב חשמלי, Volt &amp; Watt מבצעת עבודות חשמל לבתים ולעסקים — נכון כבר בפעם הראשונה.",
 "k9": "בקשת שירות",
 "k10": "לשירותים",
 "k11": "במה אנחנו מטפלים",
 "k12": "שדרוג לוחות חשמל",
 "k13": "מודרניזציה של לוחות חשמל ישנים לבטיחות ולקיבולת.",
 "k14": "חיווט וחיווט מחדש",
 "k15": "חיווט בבנייה חדשה וחיווט מחדש לבתים ישנים.",
 "k16": "התקנת תאורה",
 "k17": "מערכות תאורה פנימיות, חיצוניות וחכמות.",
 "k18": "התקנת עמדות טעינה לרכב חשמלי",
 "k19": "עמדות טעינה ביתיות ברמה 2, מותקנות לפי התקן.",
 "k20": "התקנת גנרטורים",
 "k21": "מערכות גיבוי להפסקות חשמל, בגודל המתאים לבית שלכם.",
 "k22": "שירות חירום",
 "k23": "מענה 24/7 להפסקות חשמל, ניצוצות או סכנות חשמל.",
 "k24": "למה Volt &amp; Watt",
 "k25": "מוסמכים. מבוטחים. בזמן.",
 "k26": "חשמלאי מאסטר בכל עבודה",
 "k27": "מחיר קבוע ושקוף מראש",
 "k28": "אחריות של שנתיים על כל ההתקנות",
 "k29": "משאיות מאובזרות במלואן — רוב העבודות מסתיימות בביקור אחד",
 "k30": "🎓<span>הסמכת מאסטר</span>",
 "k31": "🛡️<span>שנתיים אחריות</span>",
 "k32": "⭐<span>דירוג 4.9/5</span>",
 "k33": "🚚<span>שירות באותו יום</span>",
 "k34": "בקשת שירות חשמל",
 "k35": "השירות הנדרש",
 "k36": "שדרוג לוח חשמל",
 "k37": "חיווט / חיווט מחדש",
 "k38": "התקנת תאורה",
 "k39": "התקנת עמדת טעינה לרכב חשמלי",
 "k40": "חירום — אין חשמל / ניצוצות",
 "k41": "בקשו את ההצעה שלי",
 "k42": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k43": "המלצות לקוחות",
 "k44": "סומכים עלינו על החיווט שמאחורי הקירות",
 "k45": "\"שדרוג הלוח הסתיים בצהריים אחד, עבודה נקייה ומחיר שקוף. בדיוק מה שהייתי צריך.\"",
 "k46": "— פארה ד.",
 "k47": "\"הגיעו ב-23:00 בגלל שקע שמצנצץ, תיקנו מהר והסבירו הכול בשלווה.\"",
 "k48": "— אוון ט.",
 "k49": "\"התקנת עמדת הטעינה הייתה חלקה — נבדקה ואושרה כבר בפעם הראשונה.\"",
 "k50": "— פריה מ.",
 "k51": "&copy; 2026 Volt &amp; Watt Electric. תבנית להדגמה בלבד.",
 "k52": "הצעה",
 "k53": "שם מלא",
 "k54": "מספר טלפון",
 "k55": "כתובת הנכס"
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
