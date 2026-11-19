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

// Demo form
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Nova Studio — סוכנות מיתוג ועיצוב דיגיטלי",
 "desc": "Nova Studio — מיתוג, עיצוב אתרים ועיצוב מוצרים דיגיטליים לחברות שאפתניות.",
 "k1": "עבודות",
 "k2": "שירותים",
 "k3": "תהליך",
 "k4": "צור קשר",
 "k5": "מתחילים פרויקט",
 "k6": "סטודיו למיתוג ועיצוב מוצר",
 "k7": "אנחנו מעצבים מותגים<br>שאנשים <span>זוכרים</span>",
 "k8": "Nova Studio שותפה ליזמים וצוותים כדי לבנות זהויות, אתרים ומוצרים שלא מתמזגים עם הרקע.",
 "k9": "לעבודות שלנו",
 "k10": "עבודות נבחרות",
 "k11": "פרויקטים אחרונים",
 "k12": "<span>Orbital — זהות מותג</span>",
 "k13": "<span>Vessel — מסחר אלקטרוני</span>",
 "k14": "<span>Halcyon — עיצוב אפליקציה</span>",
 "k15": "<span>Northwind — פלטפורמת אינטרנט</span>",
 "k16": "<span>Prismatic — אריזות</span>",
 "k17": "מה אנחנו עושים",
 "k18": "זהות מותג",
 "k19": "לוגו, מערכת ויזואלית והנחיות מותג שעומדים בכל מקום.",
 "k20": "עיצוב ופיתוח אתרים",
 "k21": "אתרים מהירים ויפים שנבנו להמיר, לא רק להיראות טוב.",
 "k22": "עיצוב מוצר",
 "k23": "UI/UX לאפליקציות ופלטפורמות, משרטוט ועד פיצ'ר שעלה לאוויר.",
 "k24": "איך אנחנו עובדים",
 "k25": "גילוי",
 "k26": "מבינים את המותג, הקהל והיעדים שלכם.",
 "k27": "עיצוב",
 "k28": "בוחנים כיוונים, מדייקים ומגיעים להסכמה על החזון.",
 "k29": "בנייה",
 "k30": "הופכים עיצובים מאושרים למוצר מלוטש ופועל.",
 "k31": "השקה",
 "k32": "מעלים לאוויר, מודדים וחוזרים לשפר יחד.",
 "k33": "משוב לקוחות",
 "k34": "\"Nova מיקמה מחדש את המותג שלנו לגמרי — סוף סוף אנחנו נראים טוב כמו המוצר שלנו.\"",
 "k35": "— Orbital Co.",
 "k36": "\"מהירים, חדים ובאמת משתפי פעולה. האתר החדש הכפיל את ההמרות כבר בחודש הראשון.\"",
 "k37": "— Vessel",
 "k38": "\"הם התנגדו לרעיון הראשון שלנו והיו צודקים לחלוטין. סמכו על התהליך.\"",
 "k39": "— Halcyon",
 "k40": "יש לכם פרויקט בראש?",
 "k41": "ספרו לנו עליו קצת — אנחנו משיבים לכל פנייה תוך יום עסקים אחד.",
 "k42": "סוג הפרויקט",
 "k43": "זהות מותג",
 "k44": "עיצוב אתר",
 "k45": "עיצוב מוצר",
 "k46": "משהו אחר",
 "k47": "שלחו פנייה",
 "k48": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k49": "&copy; 2026 Nova Studio. תבנית להדגמה בלבד.",
 "k50": "שם מלא",
 "k51": "כתובת אימייל"
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
