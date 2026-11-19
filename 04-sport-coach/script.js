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

// Animated progress bars
const fills = document.querySelectorAll('.progress-fill');
const progressIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fills.forEach((f, i) => setTimeout(() => f.classList.add('grown'), i * 120));
      progressIO.disconnect();
    }
  });
}, { threshold: 0.3 });
if (fills.length) progressIO.observe(fills[0].closest('.progress-grid'));

// Demo form
const startForm = document.getElementById('startForm');
const formNote = document.getElementById('formNote');
startForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Apex Performance — אימון אישי שמביא תוצאות",
 "desc": "Apex Performance — תוכניות אימון אישי ומאמן לבניית כוח, הורדת שומן וביצועים בשיאם.",
 "k1": "תוכניות",
 "k2": "תוצאות",
 "k3": "מחירים",
 "k4": "המלצות",
 "k5": "מתחילים להתאמן",
 "k6": "אימון אישי ואונליין",
 "k7": "תתאמנו כאילו<br><span>אתם מתכוונים לזה</span>",
 "k8": "אימון כוח, כושר ותזונה אישי שנבנה סביב המטרות שלכם — לא תבנית גנרית.",
 "k9": "התחילו את התוכנית",
 "k10": "לתוכניות",
 "k11": "מתאמנים שליווינו",
 "k12": "שנות אימון",
 "k13": "% השגת יעדים",
 "k14": "בחרו את הדרך שלכם",
 "k15": "כוח ועוצמה",
 "k16": "תכנות מתקדם לבניית כוח גולמי עם טכניקה נכונה והתאוששות.",
 "k17": "איפוס שומן",
 "k18": "אימון מובנה + ליווי תזונתי להורדת שומן יציבה ובת קיימא.",
 "k19": "אימון אונליין",
 "k20": "תוכנית אישית ובדיקות שבועיות, בכל מקום שבו אתם מתאמנים, בזמן שנוח לכם.",
 "k21": "תוצאות אמיתיות",
 "k22": "התקדמות שאפשר למדוד",
 "k23": "<span>עלייה בכוח</span><span>+64%</span>",
 "k24": "<span>ירידה באחוזי שומן</span><span>-18%</span>",
 "k25": "<span>שיפור בסיבולת</span><span>+52%</span>",
 "k26": "<span>עמידה בתוכנית</span><span>91%</span>",
 "k27": "בחרו את רמת האימון שלכם",
 "k28": "עצמאי",
 "k29": "$49<span>/חודש</span>",
 "k30": "תוכנית אימון מותאמת",
 "k31": "מעקב באפליקציה",
 "k32": "עדכוני תוכנית חודשיים",
 "k33": "בחרו מסלול",
 "k34": "הכי פופולרי",
 "k35": "אימון אישי 1 על 1",
 "k36": "$199<span>/חודש</span>",
 "k37": "הכול כמו במסלול העצמאי",
 "k38": "בדיקות שבועיות",
 "k39": "ליווי תזונתי",
 "k40": "תמיכה בהודעות ישירות",
 "k41": "ביצועי עילית",
 "k42": "$399<span>/חודש</span>",
 "k43": "הכול כמו באימון האישי",
 "k44": "שיחות וידאו אחת לשבועיים",
 "k45": "תוכנית התאוששות וניידות",
 "k46": "משוב מהמתאמנים",
 "k47": "הם הגיעו. זה עבד.",
 "k48": "\"ירדתי 10 ק״ג ואני מרים יותר מאי פעם. התוכנית פשוט עובדת.\"",
 "k49": "— ג'ורדן פ.",
 "k50": "\"סוף סוף מאמנת שמתאימה את התוכנית לחיים האמיתיים שלי, ולא להפך.\"",
 "k51": "— טאשה מ.",
 "k52": "\"בכושר הכי טוב של חיי בגיל 41. הבדיקות השבועיות שמרו עליי ממוקד בכל שבוע.\"",
 "k53": "— קרלוס ד.",
 "k54": "מוכנים להתחיל?",
 "k55": "ספרו לנו מה המטרה שלכם — נתאים לכם את התוכנית הנכונה ונתחיל לזוז כבר השבוע.",
 "k56": "המטרה העיקרית שלכם",
 "k57": "בניית כוח",
 "k58": "הורדת שומן",
 "k59": "כושר כללי",
 "k60": "ביצועים ייעודיים לענף ספורט",
 "k61": "קבלו את התוכנית שלי",
 "k62": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k63": "&copy; 2026 Apex Performance. תבנית להדגמה בלבד.",
 "k64": "שם מלא",
 "k65": "כתובת אימייל"
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
