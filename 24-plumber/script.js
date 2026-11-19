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

// Animated counters
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterIO.observe(el));

// Demo form
const requestForm = document.getElementById('requestForm');
const formNote = document.getElementById('formNote');
requestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "ClearFlow Plumbing — אינסטלציה מהירה ואמינה",
 "desc": "ClearFlow Plumbing — פתיחת סתימות, תיקון נזילות, דודי מים ושירות חירום אינסטלציה 24/7.",
 "k1": "שירותים",
 "k2": "למה אנחנו",
 "k3": "המלצות",
 "k4": "התקשרו עכשיו: &lrm;(555) 018-4400&lrm;",
 "k5": "אינסטלטורים מורשים &middot; שירות חירום 24/7",
 "k6": "אינסטלציה מהירה<br>ואמינה שאפשר<br><span>לסמוך עליה</span>",
 "k7": "מברז מטפטף ועד צינור שהתפוצץ ב-2 בלילה, ClearFlow מגיעה, מאבחנת נכון ומתקנת פעם אחת.",
 "k8": "בקשת שירות",
 "k9": "לשירותים",
 "k10": "מה אנחנו מתקנים",
 "k11": "פתיחת סתימות",
 "k12": "סתימות נפתחות מהר, עם בדיקת מצלמה כשצריך.",
 "k13": "תיקון נזילות",
 "k14": "איתור מדויק של נזילות לפני שפותחים קיר.",
 "k15": "דודי מים",
 "k16": "תיקון, החלפה והתקנת מערכות ללא מיכל.",
 "k17": "התקנת אביזרים",
 "k18": "ברזים, אסלות וכיורים מותקנים נקי ובצורה נכונה.",
 "k19": "החלפת צנרת",
 "k20": "החלפת צנרת בכל הבית למערכות ישנות או כושלות.",
 "k21": "שירות חירום",
 "k22": "שיגור 24/7 לצינורות שהתפוצצו ולנזילות גדולות.",
 "k23": "למה ClearFlow",
 "k24": "מחיר שקוף מראש. בלי הפתעות.",
 "k25": "אבחון חינם עם כל תיקון שהושלם",
 "k26": "אינסטלטורים מורשים, מבוטחים וערבים",
 "k27": "אחריות לשנה על כל העבודה",
 "k28": "נקיים ומכבדים את הבית שלכם בכל ביקור",
 "k29": "שנות פעילות",
 "k30": "דקות זמן תגובה ממוצע",
 "k31": "% שיעור שביעות רצון",
 "k32": "שעות קו חירום",
 "k33": "בקשת שירות",
 "k34": "קבלו עזרה מהירה",
 "k35": "הבעיה",
 "k36": "סתימה בביוב",
 "k37": "נזילה",
 "k38": "דוד מים",
 "k39": "חירום / צינור שהתפוצץ",
 "k40": "אחר",
 "k41": "בקשו שירות עכשיו",
 "k42": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k43": "התקשרתם פעם אחת, תוקן לתמיד",
 "k44": "\"צינור התפוצץ בחצות, הם היו כאן תוך 40 דקות. מצילי חיים.\"",
 "k45": "— רנה א.",
 "k46": "\"אבחנו נזילה ששני אינסטלטורים אחרים פספסו. עבודה כנה ויסודית.\"",
 "k47": "— מרקוס ב.",
 "k48": "\"התקנת דוד המים ללא מיכל הייתה נקייה ומהירה. לא נשאר שום בלגן.\"",
 "k49": "— משפחת פררו",
 "k50": "&copy; 2026 ClearFlow Plumbing. תבנית להדגמה בלבד.",
 "k51": "שם מלא",
 "k52": "מספר טלפון",
 "k53": "כתובת הנכס"
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
