// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Testimonial carousel (auto-rotate)
const testimonials = document.querySelectorAll('.testimonial');
const dotsWrap = document.getElementById('carouselDots');
let current = 0;
testimonials.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('is-active');
  dot.addEventListener('click', () => showTestimonial(i));
  dotsWrap.appendChild(dot);
});
function showTestimonial(index) {
  testimonials[current].classList.remove('is-active');
  dotsWrap.children[current].classList.remove('is-active');
  current = index;
  testimonials[current].classList.add('is-active');
  dotsWrap.children[current].classList.add('is-active');
}
setInterval(() => showTestimonial((current + 1) % testimonials.length), 5000);

// Demo form
const inquireForm = document.getElementById('inquireForm');
const formNote = document.getElementById('formNote');
inquireForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Evermore Weddings — תכנון ועיצוב חתונות",
 "desc": "Evermore Weddings — תכנון חתונות בשירות מלא, עיצוב וניהול יום האירוע.",
 "k1": "שירותים",
 "k2": "תהליך",
 "k3": "גלריה",
 "k4": "חבילות",
 "k5": "השאירו פנייה",
 "k6": "באהבה, תמיד",
 "k7": "הסיפור שלכם ראוי<br>לספור אותו יפה",
 "k8": "Evermore Weddings מעצבת ומתכננת חגיגות שמרגישות בדיוק כמוכם — מחתונות אינטימיות ועד אירועים של סוף שבוע שלם.",
 "k9": "מתחילים לתכנן",
 "k10": "לחתונות שלנו",
 "k11": "איך שלא תגידו \"כן\"",
 "k12": "תכנון מלא",
 "k13": "תכנון מקצה לקצה, מהאולם ועד הפרידה, מההתחלה ועד הסוף.",
 "k14": "ניהול יום האירוע",
 "k15": "אתם תכננתם — אנחנו דואגים שהיום יעבור בלי שום תקלה.",
 "k16": "עיצוב וסטיילינג",
 "k17": "פרחים, קישוטים וסטיילינג שמביאים את החזון שלכם לחיים.",
 "k18": "חבילות חתונה אינטימית",
 "k19": "קטנה, אינטימית ומתוכננת להפליא — בכל מקום שתבחרו.",
 "k20": "התהליך שלנו",
 "k21": "מ\"כן\" ועד \"הרי את\"",
 "k22": "היכרות",
 "k23": "אנחנו מכירים את סיפור האהבה, הסגנון והחזון שלכם על כוס קפה.",
 "k24": "עיצוב",
 "k25": "קונספט עיצובי מותאם אישית — פלטת צבעים, פרחים, פריסה — שנבנה סביבכם.",
 "k26": "תכנון",
 "k27": "הזמנת ספקים, לוחות זמנים ולוגיסטיקה, בטיפול קפדני.",
 "k28": "החגיגה",
 "k29": "אנחנו במקום כל היום כדי שאתם פשוט תהיו נוכחים בו.",
 "k30": "חתונות אמיתיות",
 "k31": "רגעים שעזרנו ליצור",
 "k32": "מכתבי אהבה",
 "k33": "\"הם הבינו את החזון שלנו טוב יותר ממה שהצלחנו לנסח במילים. כל פרט הרגיש כמונו.\"",
 "k34": "— האנה ואוון",
 "k35": "\"המשפחות שלנו עדיין מדברות על כמה שהיום הרגיש חלק. פשוט יכולנו ליהנות.\"",
 "k36": "— פריה ודב",
 "k37": "\"שווה כל שקל. עבודת העיצוב לבדה עלתה על כל מה שדמיינו.\"",
 "k38": "— קלייר וסם",
 "k39": "השקעה",
 "k40": "חתונה אינטימית",
 "k41": "החל מ-$2,400",
 "k42": "תכנון ותיאום",
 "k43": "המלצות על ספקים",
 "k44": "עד 20 אורחים",
 "k45": "הכי מוזמנת",
 "k46": "החל מ-$8,900",
 "k47": "תכנון ועיצוב מלאים",
 "k48": "תיאום ספקים ללא הגבלה",
 "k49": "ניהול יום האירוע",
 "k50": "החל מ-$1,800",
 "k51": "בניית לוח זמנים",
 "k52": "אישורי ספקים",
 "k53": "תיאום בשטח",
 "k54": "בואו נדבר",
 "k55": "ספרו לנו על היום שלכם",
 "k56": "שתפו כמה פרטים ונחזור אליכם לקביעת שיחת היכרות חינם.",
 "k57": "שלחו פנייה",
 "k58": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k59": "&copy; 2026 Evermore Weddings. תבנית להדגמה בלבד.",
 "k60": "השמות שלכם",
 "k61": "כתובת אימייל",
 "k62": "תאריך החתונה",
 "k63": "מספר אורחים"
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
