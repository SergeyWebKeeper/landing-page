// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Typing animation
const typeTarget = document.getElementById('typeTarget');
const phrases = ['rebooting your IT.', 'securing your network.', 'answering the helpdesk.'];
let phraseIndex = 0, charIndex = 0, deleting = false;
function typeLoop() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    charIndex++;
    typeTarget.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typeTarget.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

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
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString();
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterIO.observe(el));

// Demo form
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "ByteGuard IT Solutions — IT מנוהל ואבטחת סייבר",
 "desc": "ByteGuard IT Solutions — IT מנוהל, אבטחת סייבר, מעבר לענן ותמיכה טכנית 24/7.",
 "k1": "שירותים",
 "k2": "למה אנחנו",
 "k3": "מחירים",
 "k4": "צור קשר",
 "k5": "קבלו תמיכה",
 "k6": "<span class=\"dot dot--r\"></span><span class=\"dot dot--y\"></span><span class=\"dot dot--g\"></span><span class=\"terminal__title\">byteguard@support:~</span>",
 "k7": "IT מנוהל, אבטחת סייבר ותמיכה טכנית לעסקים צומחים.",
 "k8": "קבלו תמיכה עכשיו",
 "k9": "<span dir=\"ltr\">./view-services</span>",
 "k10": "// שירותים",
 "k11": "מה אנחנו מנהלים",
 "k12": "IT מנוהל",
 "k13": "ניטור ותחזוקה יזומים לכל הרשת שלכם.",
 "k14": "אבטחת סייבר",
 "k15": "זיהוי איומים, חומות אש והדרכות אבטחה לעובדים.",
 "k16": "מעבר לענן",
 "k17": "מעבירים מערכות לענן בלי השבתה ובלי אובדן נתונים.",
 "k18": "תמיכה טכנית",
 "k19": "קו תמיכה 24/7 לכל הצוות שלכם, אנשים אמיתיים בלבד.",
 "k20": "הקמת רשתות",
 "k21": "תכנון והתקנה של רשתות שגדלות עם העסק שלכם.",
 "k22": "גיבוי נתונים",
 "k23": "גיבויים אוטומטיים ובדוקים, כך שאובדן נתונים לעולם לא יהיה משבר.",
 "k24": "// למה ByteGuard",
 "k25": "זמן תגובה שאפשר לסמוך עליו",
 "k26": "זמן תגובה ממוצע של 15 דקות",
 "k27": "מהנדסים מוסמכים, לא סקריפטים של קבלני משנה",
 "k28": "מחיר חודשי קבוע, בלי חשבוניות מפתיעות",
 "k29": "ניטור והתראות 24/7/365",
 "k30": "דקות זמן תגובה ממוצע",
 "k31": "% זמינות (SLA)",
 "k32": "+ עסקים בשירות",
 "k33": "/7 ניטור",
 "k34": "// מחירים",
 "k35": "תוכניות במחיר קבוע",
 "k36": "בסיסי",
 "k37": "$399<span>/חודש</span>",
 "k38": "עד 10 מכשירים",
 "k39": "תמיכה בשעות העבודה",
 "k40": "דוחות בריאות חודשיים",
 "k41": "בחרו מסלול",
 "k42": "הכי פופולרי",
 "k43": "עסקי",
 "k44": "$899<span>/חודש</span>",
 "k45": "עד 30 מכשירים",
 "k46": "תמיכה וניטור 24/7",
 "k47": "אבטחת סייבר כלולה",
 "k48": "ארגוני",
 "k49": "מותאם אישית",
 "k50": "מכשירים ללא הגבלה",
 "k51": "מהנדס חשבון ייעודי",
 "k52": "תנאי SLA מותאמים",
 "k53": "דברו עם המכירות",
 "k54": "// משוב לקוחות",
 "k55": "סומכים עלינו על המערכות החשובות",
 "k56": "\"הם עצרו ניסיון כופרה לפני שנגע בקובץ אחד. שווה כל דולר.\"",
 "k57": "— Halstead Logistics",
 "k58": "\"המעבר לענן התבצע בסוף שבוע, בלי שום השבתה ביום שני בבוקר.\"",
 "k59": "— Nova Design Co.",
 "k60": "\"התמיכה הטכנית באמת עונה לטלפון. זה נדיר בימינו, וזה משנה.\"",
 "k61": "— Ferris & Kane LLP",
 "k62": "קבלו תמיכת IT עוד היום",
 "k63": "ספרו לנו על ההתקנה שלכם — נשיב תוך שעת עבודה אחת.",
 "k64": "גודל הצוות",
 "k65": "1-10 עובדים",
 "k66": "11-50 עובדים",
 "k67": "51-200 עובדים",
 "k68": "200+ עובדים",
 "k69": "בקשו הצעת מחיר",
 "k70": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k71": "&copy; 2026 ByteGuard IT Solutions. תבנית להדגמה בלבד.",
 "k72": "שם מלא",
 "k73": "אימייל עבודה"
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


// Hebrew typing phrases
const phrasesEN = phrases.slice();
const phrasesHE = ['מאתחלים את ה-IT שלכם.', 'מאבטחים את הרשת שלכם.', 'עונים לפניות התמיכה.'];
function applyPhrases() {
  const he = document.documentElement.lang === 'he';
  phrases.splice(0, phrases.length, ...(he ? phrasesHE : phrasesEN));
  phraseIndex = 0; charIndex = 0; deleting = false;
}
document.addEventListener('langchange', applyPhrases);
applyPhrases();

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
