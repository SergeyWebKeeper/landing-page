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
const orderForm = document.getElementById('orderForm');
const formNote = document.getElementById('formNote');
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Petal &amp; Stem — פרחים ומשלוחי פרחים",
 "desc": "Petal & Stem — זרי פרחים טריים לרגעים יומיומיים, חתונות ואירועים.",
 "k1": "קולקציות",
 "k2": "מומלצים",
 "k3": "משלוחים",
 "k4": "הזמנה",
 "k5": "הזמינו פרחים",
 "k6": "פרחים טריים, נשלחים באהבה",
 "k7": "פרחים לכל<br><em>רגע</em>",
 "k8": "Petal &amp; Stem קושרת כל זר ביד בבוקר שבו הוא יוצא — ליום הולדת, לבקשת סליחה, לחתונה, ולימים שלא צריכים שום סיבה.",
 "k9": "לקולקציות",
 "k10": "זרים לכל אירוע",
 "k11": "זרי יומיום",
 "k12": "זרים טריים ועונתיים בלי שום סיבה.",
 "k13": "חתונות ואירועים",
 "k14": "עיצוב פרחוני בשירות מלא ליום הגדול שלכם.",
 "k15": "ניחומים",
 "k16": "זרים מתחשבים שמגיעים באהבה ובמהירות.",
 "k17": "מנויים",
 "k18": "פרחים שבועיים או חודשיים שמגיעים שוב ושוב.",
 "k19": "מומלצים השבוע",
 "k20": "אהובי העונה",
 "k21": "<span>זר ורדי גן</span>",
 "k22": "<span>תערובת פרחי בר</span>",
 "k23": "<span>סידור בוטני מיובש</span>",
 "k24": "באותו יום, כשזה חשוב",
 "k25": "הזמינו עד 13:00 למשלוח מקומי באותו יום. כל גבעול מגיע טרי ומסודר בבוקר היציאה — לא עומד ימים במקרר.",
 "k26": "משלוח ארצי זמין לסידורים מיובשים ומשומרים נבחרים.",
 "k27": "המלצות",
 "k28": "מה הלקוחות אומרים",
 "k29": "\"הזמנתי באותו יום ליום נישואים שכמעט שכחתי. הסידור היה מהמם.\"",
 "k30": "— דניאל ר.",
 "k31": "\"פרחי החתונה היו יפים יותר במציאות מבהדמיות. אמנים אמיתיים.\"",
 "k32": "— אלנה ומרקו",
 "k33": "\"המנוי החודשי הוא הדבר הקטן הכי טוב שאני עושה לעצמי. תמיד טרי.\"",
 "k34": "— פריה נ.",
 "k35": "הזמינו פרחים טריים",
 "k36": "ספרו לנו מה האירוע ונעזור לבחור את הסידור המושלם.",
 "k37": "אירוע",
 "k38": "יומיום / סתם כי כיף",
 "k39": "יום הולדת",
 "k40": "חתונה / אירוע",
 "k41": "שלחו את הפנייה שלי",
 "k42": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k43": "&copy; 2026 Petal &amp; Stem. תבנית להדגמה בלבד.",
 "k44": "השם שלכם",
 "k45": "כתובת אימייל"
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
