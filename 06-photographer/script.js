// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30));

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
revealEls.forEach(el => io.observe(el));

// Custom cursor dot (desktop only)
const cursorDot = document.getElementById('cursorDot');
if (window.matchMedia('(hover: hover)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .m-item').forEach(el => {
    el.addEventListener('mouseenter', () => { cursorDot.style.width = '24px'; cursorDot.style.height = '24px'; });
    el.addEventListener('mouseleave', () => { cursorDot.style.width = '10px'; cursorDot.style.height = '10px'; });
  });
}

// Demo form
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Lens &amp; Light Studio — צילום",
 "desc": "Lens & Light Studio — צילום עריכתי, חתונות ופורטרטים.",
 "k1": "עבודות",
 "k2": "אודות",
 "k3": "שירותים",
 "k4": "צור קשר",
 "k5": "צילום עריכתי וחתונות — מאז 2015",
 "k6": "אנחנו ממסגרים<br>את הרגעים<br><em>שתשמרו</em> לתמיד",
 "k7": "לצפייה בעבודות ↓",
 "k8": "עבודות נבחרות",
 "k9": "<span>חתונה על החוף — 2025</span>",
 "k10": "<span>פורטרטים בסטודיו</span>",
 "k11": "<span>סדרה עריכתית</span>",
 "k12": "<span>אירוסין בשעת הזהב</span>",
 "k13": "<span>קמפיין מותג</span>",
 "k14": "<span>פורטרטים משפחתיים</span>",
 "k15": "על הסטודיו",
 "k16": "צילום שמרגיש אמיתי",
 "k17": "Lens &amp; Light הוקם על רעיון פשוט: התמונות הטובות ביותר נולדות כשאנשים שוכחים שהמצלמה שם. אנחנו עובדים בשקט, מצלמים באופן טבעי ועורכים בריסון — ונותנים לרגעים האמיתיים לשאת את הסיפור.",
 "k18": "ממוקמים בעיר, וזמינים בכל העולם לחתונות, עבודות עריכתיות וקמפיינים למותגים.",
 "k19": "מה אנחנו מצלמים",
 "k20": "חתונות",
 "k21": "סיקור יום מלא, צילומי אירוסין ואלבומים שעוברים מדור לדור.",
 "k22": "פורטרטים",
 "k23": "צילומים אישיים, זוגיים ומשפחתיים — בסטודיו או בלוקיישן.",
 "k24": "עריכתי ואירועים",
 "k25": "סיקור בסגנון תיעודי להשקות, גאלות ואירועי עיתונות.",
 "k26": "מסחרי",
 "k27": "צילום מותגים לקמפיינים, מוצרים ותוכן לייפסטייל.",
 "k28": "מילים טובות",
 "k29": "\"כל תמונה הרגישה כאילו היא לכדה בדיוק מי שאנחנו. בלי תנוחות נוקשות — רק אנחנו.\"",
 "k30": "— אנה ותיאו",
 "k31": "\"מקצועי, לא מפריע, והגלריה הסופית הביאה אותי לדמעות. שווה כל שקל.\"",
 "k32": "— מריסול ו.",
 "k33": "\"תמונות הקמפיין שלנו הצליחו יותר מכל תמונת סטוק שהשתמשנו בה בעבר. עבודה מרהיבה.\"",
 "k34": "— Nova Brand Co.",
 "k35": "בואו נדבר",
 "k36": "יש לכם תאריך בראש?",
 "k37": "ספרו לנו על הפרויקט שלכם — בדרך כלל אנחנו משיבים תוך 24 שעות.",
 "k38": "שלחו פנייה",
 "k39": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k40": "&copy; 2026 Lens &amp; Light Studio. תבנית להדגמה בלבד.",
 "k41": "שם מלא",
 "k42": "כתובת אימייל",
 "k43": "ספרו לנו על הפרויקט שלכם"
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
