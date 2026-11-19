// Sticky nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
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

// Fare estimator
const distance = document.getElementById('distance');
const distanceVal = document.getElementById('distanceVal');
const fareVal = document.getElementById('fareVal');
const chips = document.querySelectorAll('.chip');
let rate = 1.2;

function updateFare() {
  const base = 3.5;
  const km = parseFloat(distance.value);
  const fare = base + km * rate;
  fareVal.textContent = '$' + fare.toFixed(2);
  distanceVal.textContent = km;
}
distance.addEventListener('input', updateFare);
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    rate = parseFloat(chip.dataset.rate);
    updateFare();
  });
});
updateFare();

// Demo booking form
const bookForm = document.getElementById('bookForm');
const formNote = document.getElementById('formNote');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
  "title": "SwiftRide — העיר שלך, לפי דרישה",
  "k2": "שירותים",
  "k3": "איך זה עובד",
  "k4": "צי הרכבים",
  "k5": "מחירים",
  "k6": "המלצות",
  "k7": "הזמנת נסיעה",
  "k8": "נסיעות 24/7 · 40 ערים",
  "h1": "העיר שלך בתנועה.<br>ואנחנו <span>איתה.</span>",
  "k10": "לוחצים, נוסעים, מגיעים. SwiftRide מביאה אתכם בדיוק לאן שצריך — מהר, בטוח ובזמן, יום ולילה.",
  "k11": "הזמינו נסיעה עכשיו",
  "k12": "ראו איך זה עובד",
  "k13": "נסיעות הושלמו",
  "k14": "% דיוק בזמנים",
  "k15": "דירוג ממוצע",
  "k16": "הסעות לשדה התעופה",
  "k18": "זמינות 24/7",
  "k19": "נהגים מורשים",
  "k20": "מחירים קבועים",
  "k21": "מעקב באפליקציה",
  "k22": "תשלום ללא מזומן",
  "k23": "בחרו את הנסיעה שלכם",
  "k24": "רגיל",
  "k25": "נסיעות יומיומיות במחיר משתלם ברחבי העיר, עם התאמת נהג בפחות מ-3 דקות.",
  "k26": "XL",
  "k27": "יותר מקום לקבוצות ולמזוודות — עד 6 נוסעים.",
  "k28": "פרימיום",
  "k29": "נהגים בדירוג גבוה, רכבים חדשים יותר ונסיעה שקטה ונוחה יותר.",
  "k30": "שדה תעופה",
  "k31": "הסעות לשדה התעופה במחיר קבוע, עם מעקב טיסות וללא הפתעות.",
  "k32": "שלוש לחיצות ואתם בדרך",
  "k34": "קבעו יעד",
  "k35": "סמנו נקודה או הקלידו כתובת — אנחנו מוצאים את המסלול המהיר ביותר מיד.",
  "k37": "מקבלים נהג",
  "k38": "הנהג המורשה הקרוב ביותר מאשר את הנסיעה שלכם תוך שניות.",
  "k40": "עוקבים ונוסעים",
  "k41": "צפו בנהג מגיע בזמן אמת, ואז פשוט שבו ותירגעו.",
  "k42": "הצי שלנו",
  "k43": "רכב לכל נסיעה",
  "k44": "סדאן",
  "k45": "1–4 נוסעים",
  "k46": "ואן",
  "k47": "5–8 נוסעים",
  "k48": "אקזקיוטיב",
  "k49": "נוחות ברמה גבוהה",
  "k50": "נגיש",
  "k51": "מותאם לכיסא גלגלים",
  "k52": "הערכת מחיר",
  "k53": "דעו מה המחיר לפני שיוצאים",
  "dist": "מרחק הנסיעה:",
  "km": "ק״מ",
  "k55": "מחיר משוער",
  "k56": "מחיר בסיס + מרחק, ללא תוספת ביקוש במסלולים שקטים",
  "k57": "הנוסעים אוהבים את SwiftRide",
  "k58": "\"הזמנתי ב-2 בלילה אחרי עיכוב בטיסה — הנהג חיכה בחוץ אחרי 4 דקות. מדהים.\"",
  "k59": "— דניאלה מ.",
  "k60": "\"מחיר קבוע אומר שאין יותר בהייה במונה מתוך לחץ. אני אוהב את מחשבון המחיר.\"",
  "k61": "— מרקוס ט.",
  "k62": "\"רכבים נקיים, נהגים אדיבים, והאפליקציה פשוט עובדת. זו כבר נסיעת היומיום שלי.\"",
  "k63": "— פריה ק.",
  "k64": "מוכנים לצאת לדרך?",
  "k65": "הורידו את האפליקציה או הזמינו מיד מהדפדפן — הנהג שלכם קרוב יותר ממה שאתם חושבים.",
  "pickup": "נקודת איסוף",
  "dest": "יעד",
  "k66": "מצאו לי נסיעה",
  "k67": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
  "k68": "&copy; 2026 SwiftRide. תבנית להדגמה בלבד."
};

const EN = {};
const i18nEls = document.querySelectorAll('[data-i18n]');
const i18nPh = document.querySelectorAll('[data-i18n-placeholder]');
i18nEls.forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
i18nPh.forEach(el => { EN[el.dataset.i18nPlaceholder] = el.getAttribute('placeholder'); });

const langSwitch = document.getElementById('langSwitch');
const metaDesc = document.querySelector('meta[name="description"]');
const descEN = metaDesc.content;
const descHE = 'SwiftRide — שירות מוניות מהיר, בטוח ותמיד בזמן. הזמינו נסיעה תוך שניות.';

function setLang(lang) {
  const dict = lang === 'he' ? HE : EN;
  i18nEls.forEach(el => { const t = dict[el.dataset.i18n]; if (t !== undefined) el.innerHTML = t; });
  i18nPh.forEach(el => { const t = dict[el.dataset.i18nPlaceholder]; if (t !== undefined) el.setAttribute('placeholder', t); });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  metaDesc.content = lang === 'he' ? descHE : descEN;
  langSwitch.textContent = lang === 'he' ? 'English' : 'עברית';
  try { localStorage.setItem('lang', lang); } catch (e) {}
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
