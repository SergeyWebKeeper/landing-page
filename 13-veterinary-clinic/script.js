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
 "title": "Paws &amp; Care — וטרינריה, בריאות חיות מחמד באהבה",
 "desc": "Paws & Care — בדיקות כלליות, חיסונים, ניתוחים וטיפול חירום לחיות המחמד שלכם.",
 "k1": "שירותים",
 "k2": "הווטרינרים שלנו",
 "k3": "המלצות",
 "k4": "צור קשר",
 "k5": "קבעו ביקור",
 "k6": "טיפול אמין בחיות מחמד מאז 2005",
 "k7": "כי הן גם<br><span>חלק מהמשפחה</span>",
 "k8": "מבדיקות שגרתיות ועד טיפול חירום, הצוות שלנו מתייחס לכל מטופל בעדינות שמגיעה לו.",
 "k9": "קבעו תור",
 "k10": "השירותים שלנו",
 "k11": "<span>🐶 כלבים</span><span>🐱 חתולים</span><span>🐰 חיות קטנות</span><span>🚨 חירום 24/7</span>",
 "k12": "טיפול רפואי מלא לחיות מחמד",
 "k13": "בדיקות כלליות",
 "k14": "בדיקות שנתיות לאיתור בעיות מוקדם ולשמירה על חיים בריאים.",
 "k15": "חיסונים",
 "k16": "חיסוני ליבה וחיסונים לפי אורח החיים, בהתאמה לצרכים של חיית המחמד שלכם.",
 "k17": "ניתוחים",
 "k18": "מעיקור וסירוס ועד הליכים מתקדמים, בסביבה רגועה.",
 "k19": "טיפולי שיניים",
 "k20": "ניקויים ועקירות להגנה על הבריאות לטווח ארוך.",
 "k21": "טיפול חירום",
 "k22": "ביקורים דחופים באותו יום כשחיית המחמד זקוקה לעזרה מהירה.",
 "k23": "טיפוח",
 "k24": "מקלחות, גזירת ציפורניים וטיפול בפרווה לנוחות החיה.",
 "k25": "הצוות שלנו",
 "k26": "הכירו את הווטרינרים",
 "k27": "ד״ר לורן צ'ו",
 "k28": "וטרינרית ראשית &middot; 15 שנות ניסיון",
 "k29": "ד״ר מיגל אורטיז",
 "k30": "כירורגיה ואורתופדיה",
 "k31": "ד״ר עאישה בלו",
 "k32": "חירום וטיפול נמרץ",
 "k33": "הורים מאושרים",
 "k34": "מה הלקוחות אומרים",
 "k35": "\"הם טיפלו בכלבה המאומצת והחרדתית שלנו בסבלנות רבה. עכשיו היא בעצם אוהבת לבוא!\"",
 "k36": "— מייגן וביסקוויט 🐶",
 "k37": "\"ניתוח חירום במוצאי שבת — הם היו רגועים, מהירים והצילו את חיי החתול שלנו.\"",
 "k38": "— דניאל וויסקרס 🐱",
 "k39": "\"מחירים שקופים והם אף פעם לא דוחפים טיפולים מיותרים. אמון אמיתי.\"",
 "k40": "— משפחת אלווארז",
 "k41": "בואו נדאג להם",
 "k42": "בחרו זמן וספרו לנו על חיית המחמד שלכם — נאשר תוך יום עסקים אחד.",
 "k43": "סיבת הביקור",
 "k44": "בדיקה כללית",
 "k45": "חיסון",
 "k46": "משהו לא בסדר",
 "k47": "אחר",
 "k48": "בקשת תור",
 "k49": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k50": "&copy; 2026 Paws &amp; Care. תבנית להדגמה בלבד.",
 "k51": "השם שלכם",
 "k52": "שם חיית המחמד והסוג"
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
