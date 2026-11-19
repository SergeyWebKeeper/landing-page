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
const estimateForm = document.getElementById('estimateForm');
const formNote = document.getElementById('formNote');
estimateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Torque &amp; Tow Auto — מוסך שירות מלא",
 "desc": "Torque & Tow Auto — טכנאים מוסמכים, מחירים הוגנים ושירות באותו יום.",
 "k1": "שירותים",
 "k2": "למה אנחנו",
 "k3": "הצעת מחיר",
 "k4": "המלצות",
 "k5": "הזמינו טיפול",
 "k6": "מוסמכי ASE &middot; עסק משפחתי מאז 1994",
 "k7": "הרכב שלכם,<br>מתוקן נכון<br><span>בפעם הראשונה</span>",
 "k8": "אבחון כן, מחירים הוגנים וטכנאים שמסבירים בדיוק מה התקלה לפני שהם נוגעים במפתח.",
 "k9": "קבלו הצעת מחיר חינם",
 "k10": "לשירותים",
 "k11": "שנות פעילות",
 "k12": "רכבים טופלו",
 "k13": "שעות גרירה זמינה",
 "k14": "מה אנחנו מתקנים",
 "k15": "שמן ונוזלים",
 "k16": "החלפות שמן סינתטי ומינרלי, ומילוי כל הנוזלים.",
 "k17": "בלמים וצמיגים",
 "k18": "רפידות, דיסקים, כיוון פרונט והחלפה או סבב צמיגים.",
 "k19": "אבחון מנוע",
 "k20": "נורות תקלה מאובחנות עם תשובות אמיתיות, לא ניחושים.",
 "k21": "מיזוג וחימום",
 "k22": "תיקון מערכות אקלים לנוחות בכל עונה.",
 "k23": "מצבר וחשמל",
 "k24": "בדיקת מצברים, החלפה ואיתור תקלות חשמל.",
 "k25": "גרירה 24/7",
 "k26": "תקועים? אנחנו גוררים בכל אזור המטרופולין, בכל שעה ביום.",
 "k27": "למה Torque &amp; Tow",
 "k28": "בלי הצעות מיותרות. בלי הפתעות.",
 "k29": "הצעת מחיר כתובה חינם לפני תחילת העבודה",
 "k30": "טכנאים מוסמכי ASE בכל עבודה",
 "k31": "אחריות ל-12 חודשים / 20,000 ק״מ על תיקונים",
 "k32": "רכבי חלופי זמינים לתיקונים ארוכים",
 "k33": "🏆<span>הסמכת ASE</span>",
 "k34": "🛡️<span>12 חודשי אחריות</span>",
 "k35": "⭐<span>דירוג 4.8/5</span>",
 "k36": "🚗<span>רכב חלופי</span>",
 "k37": "קבלו הצעת מחיר",
 "k38": "ספרו לנו מה התקלה",
 "k39": "השירות הנדרש",
 "k40": "החלפת שמן",
 "k41": "בלמים",
 "k42": "אבחון / נורת תקלה במנוע",
 "k43": "צמיגים וכיוון פרונט",
 "k44": "אחר",
 "k45": "שלחו בקשה להצעת מחיר חינם",
 "k46": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k47": "המלצות לקוחות",
 "k48": "נהגים בעיר סומכים עלינו",
 "k49": "\"הראו לי את החלק השחוק לפני שחייבו אותי עליו. המוסך הראשון שאני באמת סומך עליו.\"",
 "k50": "— רנלדו פ.",
 "k51": "\"גררו את הרכב שלי ב-2 בלילה ותיקנו אותו באותו יום. אי אפשר להמליץ מספיק.\"",
 "k52": "— קיילה פ.",
 "k53": "\"מחירים הוגנים בכל פעם במשך 8 שנים. נדיר בימינו.\"",
 "k54": "— צי הרכב של דוד ג'ו",
 "k55": "&copy; 2026 Torque &amp; Tow Auto. תבנית להדגמה בלבד.",
 "k56": "הצעת מחיר",
 "k57": "יצרן ודגם הרכב",
 "k58": "שנת ייצור",
 "k59": "מספר טלפון"
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
