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
    const duration = 1500;
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

// Animated bar chart
const bars = document.querySelectorAll('.bar');
const chartIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bars.forEach((bar, i) => setTimeout(() => bar.classList.add('grown'), i * 80));
      chartIO.disconnect();
    }
  });
}, { threshold: 0.4 });
if (bars.length) chartIO.observe(bars[0].closest('.chart-card'));

// Consultation demo form
const consultForm = document.getElementById('consultForm');
const formNote = document.getElementById('formNote');
consultForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Meridian Wealth — תכנון פיננסי שאפשר לסמוך עליו",
 "desc": "Meridian Wealth — ייעוץ פיננסי עצמאי לפרישה, להשקעות ולתכנון מס.",
 "k1": "שירותים",
 "k2": "תהליך",
 "k3": "למה אנחנו",
 "k4": "המלצות",
 "k5": "קבעו פגישת ייעוץ",
 "k6": "יועצים עצמאיים בשכר קבוע",
 "k7": "תכננו את ההון שלכם בבהירות, לא בניחושים",
 "k8": "Meridian Wealth בונה תוכניות פיננסיות אישיות לפרישה, להשקעות וליעילות מס — על בסיס ייעוץ נאמנות ולא עמלות.",
 "k9": "קבעו ייעוץ חינם",
 "k10": "גלו את השירותים",
 "k11": "משפחות מקבלות ייעוץ",
 "k12": "מיליארד $ נכסים בניהול",
 "k13": "שנות ניסיון",
 "k14": "צמיחת תיק ההשקעות",
 "k15": "+186% ב-7 שנים<sup>*</sup>",
 "k16": "ייעוץ המותאם ליעדים שלכם",
 "k17": "תכנון השקעות",
 "k18": "תיקים מגוונים ויעילים מבחינת מס, שנבנים סביב אופק הזמן ורמת הסיכון שלכם.",
 "k19": "תכנון פרישה",
 "k20": "בנו מודל להכנסה בפרישה ובחנו אותו מול ירידות בשוק.",
 "k21": "אסטרטגיית מס",
 "k22": "תכנון מס יזום כדי שיישאר לכם יותר ממה שאתם מרוויחים, שנה אחר שנה.",
 "k23": "תכנון עיזבון",
 "k24": "תיאום נאמנויות, צוואות ומוטבים כדי שהמורשת שלכם תועבר בצורה חלקה.",
 "k25": "התהליך שלנו",
 "k26": "ארבעה שלבים לתוכנית בטוחה",
 "k27": "שיחת היכרות",
 "k28": "שיחה חינם של 30 דקות על היעדים, החששות והמצב הפיננסי הנוכחי שלכם.",
 "k29": "ניתוח פיננסי",
 "k30": "אנחנו ממפים את התמונה הפיננסית המלאה — נכסים, חובות, הכנסות וסיכונים.",
 "k31": "תוכנית מותאמת",
 "k32": "תוכנית כתובה הכוללת השקעות, מיסים, פרישה והגנה.",
 "k33": "ליווי שוטף",
 "k34": "פגישות רבעוניות והתאמות בהתאם לשינויים בחייכם ובשווקים.",
 "k35": "למה Meridian",
 "k36": "נאמנות, תמיד",
 "k37": "אנחנו מחויבים על פי חוק לפעול לטובתכם — לא לטובתנו. בלי עמלות נסתרות, בלי מוצרים בבעלותנו, רק ייעוץ המותאם ליעדיכם.",
 "k38": "תמחור שקוף בשכר קבוע",
 "k39": "צוות יועצים בעל הסמכת CFP®",
 "k40": "ללא מינימום השקעה לתכנון",
 "k41": "אבטחה ברמה בנקאית בכל החשבונות",
 "k42": "🛡️<span>תקן נאמנות</span>",
 "k43": "🎓<span>מוסמכי CFP®</span>",
 "k44": "🔒<span>רשומים ב-SEC</span>",
 "k45": "⭐<span>דירוג לקוחות 4.9/5</span>",
 "k46": "סיפורי לקוחות",
 "k47": "סומכים עלינו בדברים החשובים באמת",
 "k48": "\"בפעם הראשונה יש לנו תוכנית פרישה אמיתית על הנייר, לא רק תקווה. הקלה עצומה.\"",
 "k49": "— רוברט ואן ק.",
 "k50": "\"הם מצאו חיסכון במס שרואה החשבון הקודם שלנו מעולם לא הזכיר. השירות החזיר את עצמו מיד.\"",
 "k51": "— דייוויד ל.",
 "k52": "\"בלי לחץ ובלי ז'רגון — רק אפשרויות ברורות ופשרות כנות. בדיוק מה שהייתי צריכה.\"",
 "k53": "— מישל ט.",
 "k54": "מתחילים",
 "k55": "קבעו ייעוץ חינם",
 "k56": "30 דקות, ללא התחייבות. נבחן את מצבכם ונגיד לכם בכנות אם נוכל לעזור.",
 "k57": "במה נוכל לעזור?",
 "k58": "תכנון פרישה",
 "k59": "ניהול השקעות",
 "k60": "אסטרטגיית מס",
 "k61": "תכנון עיזבון",
 "k62": "בקשת ייעוץ",
 "k63": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k64": "&copy; 2026 Meridian Wealth. תבנית להדגמה בלבד.",
 "k65": "שם מלא",
 "k66": "כתובת אימייל"
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
