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

// FAQ accordion
document.querySelectorAll('.acc-head').forEach(head => {
  head.addEventListener('click', () => {
    const item = head.closest('.acc-item');
    const wasOpen = item.classList.contains('is-open');
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });
});

// Demo form
const bookForm = document.getElementById('bookForm');
const formNote = document.getElementById('formNote');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Bright Smile Dental — טיפול עדין, חיוכים בריאים",
 "desc": "Bright Smile Dental — רפואת שיניים משפחתית וידידותית: ניקויים, הלבנה, שתלים ועוד.",
 "k1": "שירותים",
 "k2": "למה אנחנו",
 "k3": "שאלות נפוצות",
 "k4": "צור קשר",
 "k5": "קבעו תור",
 "k6": "רפואת שיניים משפחתית ואסתטית",
 "k7": "החיוך שלכם ראוי<br><span>לטיפול עדין ומקצועי</span>",
 "k8": "מניקויים שגרתיים ועד מהפכת חיוך מלאה, אנחנו הופכים כל ביקור לנוח — לילדים ולמבוגרים כאחד.",
 "k9": "קבעו ביקור",
 "k10": "השירותים שלנו",
 "k11": "<span>⭐ דירוג 4.9</span>       <span>🦷 מעל 12,000 חיוכים טופלו</span>       <span>🩺 טיפול חירום באותו יום</span>",
 "k12": "כל מה שהחיוך שלכם צריך",
 "k13": "ניקויים ובדיקות",
 "k14": "טיפול שגרתי לשמירה על שיניים ולחיכיים בריאים לאורך כל השנה.",
 "k15": "הלבנת שיניים",
 "k16": "הבהרת החיוך בבטחה, במרפאה או בבית.",
 "k17": "שתלי שיניים",
 "k18": "פתרונות קבועים ובעלי מראה טבעי לשיניים חסרות.",
 "k19": "Invisalign וגשרים",
 "k20": "יישור שיניים בדיסקרטיות בכל גיל.",
 "k21": "רפואת שיניים לילדים",
 "k22": "טיפול עדין וסבלני שהופך את הביקור של ילדים לנטול לחץ.",
 "k23": "טיפול חירום",
 "k24": "תורים באותו יום לכאבי שיניים בלתי צפויים.",
 "k25": "למה לבחור בנו",
 "k26": "טיפול שמרגיש אחרת",
 "k27": "נוחות ללא שיפוטיות",
 "k28": "בלי נאומים — רק הכוונה כנה ואדיבה בקצב שלכם.",
 "k29": "תורים בזמן",
 "k30": "אנחנו מכבדים את לוח הזמנים שלכם עם זמני המתנה מינימליים.",
 "k31": "תשלומים גמישים",
 "k32": "חיוב ידידותי לביטוח ואפשרויות מימון זמינות.",
 "k33": "חיוכים טופלו",
 "k34": "שנות ניסיון",
 "k35": "דירוג ממוצע",
 "k36": "% ימליצו עלינו",
 "k37": "שאלות ותשובות",
 "k38": "האם אתם מקבלים ביטוח שיניים? <span>+</span>",
 "k39": "כן — אנחנו עובדים עם רוב חברות הביטוח הגדולות ומציעים מימון עצמי לטיפולים שאינם מכוסים במלואם.",
 "k40": "באיזו תדירות כדאי לבקר אצל רופא השיניים? <span>+</span>",
 "k41": "אנחנו ממליצים על בדיקה וניקוי כל שישה חודשים, אם כי רופא השיניים עשוי להציע לוח זמנים שונה בהתאם לצרכים שלכם.",
 "k42": "האם אתם מטפלים בילדים? <span>+</span>",
 "k43": "בהחלט — צוות רפואת השיניים לילדים שלנו מתמחה בכך שמטופלים צעירים ירגישו רגועים ונוחים כבר מהביקור הראשון.",
 "k44": "מה אם יש לי מקרה חירום דנטלי? <span>+</span>",
 "k45": "התקשרו אלינו ישירות — אנחנו שומרים תורים לאותו יום למקרי חירום כמו כאב עז, נפיחות או שן שבורה.",
 "k46": "בואו נחזיר לכם את החיוך",
 "k47": "בחרו זמן שנוח לכם — הצוות שלנו יאשר תוך יום עסקים אחד.",
 "k48": "סיבת הביקור",
 "k49": "בדיקה וניקוי",
 "k50": "הלבנה",
 "k51": "חירום",
 "k52": "אחר",
 "k53": "בקשת תור",
 "k54": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k55": "&copy; 2026 Bright Smile Dental. תבנית להדגמה בלבד.",
 "k56": "שם מלא",
 "k57": "מספר טלפון"
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
