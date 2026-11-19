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

// Demo form
const enrollForm = document.getElementById('enrollForm');
const formNote = document.getElementById('formNote');
enrollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "GreenLight Driving School — לומדים לנהוג בביטחון",
 "desc": "GreenLight Driving School — שיעורי נהיגה לנוער ולמבוגרים, נהיגה defensive והכנה לטסט.",
 "k1": "תוכניות",
 "k2": "למה אנחנו",
 "k3": "מחירים",
 "k4": "המלצות",
 "k5": "הירשמו עכשיו",
 "k6": "מורי נהיגה מוסמכים",
 "k7": "הביטחון מתחיל כאן",
 "k8": "GreenLight מלמדת נהגים חדשים ומתוחים כאחד — מורים סבלניים, רכבים עם דוושה כפולה וחוויית לימוד רגועה באמת.",
 "k9": "לתוכניות",
 "k10": "שיעורים לכל נהג",
 "k11": "נהיגה לנוער",
 "k12": "שעות החובה הנדרשות בתוספת ביטחון אמיתי על הכביש.",
 "k13": "שיעורים למבוגרים",
 "k14": "נהגים חדשים או חוזרים, בקצב שלכם.",
 "k15": "נהיגה מונעת",
 "k16": "קורסים מאושרי חברות ביטוח לנהיגה בטוחה וחדה יותר.",
 "k17": "הכנה לטסט",
 "k18": "תרגול המסלול והמיומנויות המדויקים שנבחנים בטסט.",
 "k19": "למה GreenLight",
 "k20": "מורים סבלניים, תוצאות אמיתיות",
 "k21": "96% עוברים בניסיון הראשון",
 "k22": "רכבים עם דוושה כפולה לבטיחות נוספת",
 "k23": "שעות גמישות, ערבים וסופי שבוע",
 "k24": "איסוף מהבית או מבית הספר",
 "k25": "% עוברים טסט",
 "k26": "שנות הוראה",
 "k27": "תלמידים למדו",
 "k28": "דירוג ממוצע",
 "k29": "חבילות שיעורים פשוטות",
 "k30": "שיעור בודד",
 "k31": "$65<span>/שעה</span>",
 "k32": "הוראה אחד על אחד",
 "k33": "איסוף כלול",
 "k34": "ללא התחייבות",
 "k35": "בחרו מסלול",
 "k36": "הכי פופולרי",
 "k37": "חבילת 6 שיעורים",
 "k38": "6 שעות הוראה",
 "k39": "מעקב התקדמות",
 "k40": "תרגול מסלול הטסט כלול",
 "k41": "הכנה מלאה לרישיון",
 "k42": "10 שעות הוראה",
 "k43": "טסט מדומה",
 "k44": "ליווי ביום הטסט",
 "k45": "נהגים לחוצים, בוגרים בטוחים בעצמם",
 "k46": "\"הבת שלי פחדה מנהיגה בכביש מהיר. היא עברה את הטסט בניסיון הראשון, רגועה לגמרי.\"",
 "k47": "— רנטה ק.",
 "k48": "\"למדתי לנהוג בגיל 34 בלי שום שיפוטיות מצד המורה. סבלני באמת לאורך כל הדרך.\"",
 "k49": "— מרקוס ט.",
 "k50": "\"תרגול מסלול הטסט המדומה גרם לטסט האמיתי להרגיש קל. שווה כל שקל.\"",
 "k51": "— פריה ד.",
 "k52": "מוכנים לעלות על הכביש?",
 "k53": "ספרו לנו קצת על הנהג ונתאים את המורה והחבילה המתאימים.",
 "k54": "תוכנית",
 "k55": "נהיגה לנוער",
 "k56": "שיעורים למבוגרים",
 "k57": "נהיגה מונעת",
 "k58": "הכנה לטסט",
 "k59": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k60": "&copy; 2026 GreenLight Driving School. תבנית להדגמה בלבד.",
 "k61": "שם התלמיד",
 "k62": "כתובת אימייל"
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
