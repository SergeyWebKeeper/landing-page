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

// Demo form
const visitForm = document.getElementById('visitForm');
const formNote = document.getElementById('formNote');
visitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Chapter &amp; Verse — חנות ספרים ובית קפה",
 "desc": "Chapter & Verse — חנות ספרים עצמאית ובית קפה עם חידושים, המלצות הצוות וערבי מועדון קריאה.",
 "k1": "חדשים על המדף",
 "k2": "בית הקפה",
 "k3": "אירועים",
 "k4": "בואו לבקר",
 "k5": "בואו לבקר",
 "k6": "חנות ספרים ובית קפה עצמאיים &middot; מאז 2009",
 "k7": "הלכו לאיבוד<br>בין<br>ה<em>דפים</em>",
 "k8": "ספרים חדשים ומשומשים שנבחרו בקפידה, כוס קפה איטית וקהילה של אנשים שקוראים מאהבה.",
 "k9": "לאירועים הקרובים",
 "k10": "להמלצות הצוות",
 "k11": "המלצות הצוות",
 "k12": "מה אנחנו קוראים עכשיו",
 "k13": "<span>ספרות יפה</span>",
 "k14": "שעת הנדודים",
 "k15": "\"רומן הרסני בשקט — קראתי אותו בישיבה אחת.\" — מאיה, צוות",
 "k16": "<span>עיון</span>",
 "k17": "הערות על חיים איטיים",
 "k18": "\"שינה את הדרך שבה אני חושב על הבקרים שלי.\" — תיאו, צוות",
 "k19": "<span>שירה</span>",
 "k20": "מזג אוויר קטן",
 "k21": "\"קניתי אותו כבר לשישה חברים שונים.\" — רות, צוות",
 "k22": "<span>מתח</span>",
 "k23": "הדייר האחרון",
 "k24": "\"ניחשתי לא נכון עד העמוד האחרון.\" — סם, צוות",
 "k25": "בית הקפה",
 "k26": "קפה, שקוע בין המדפים",
 "k27": "בית הקפה שלנו מגיש קפה טפטוף איטי, תה ומאפים שנאפים מדי יום — כדי ליהנות מהם ליד שולחן שחוק מהשימוש עם ספר שעוד לא סיימתם.",
 "k28": "אינטרנט אלחוטי חינם, פינות שקטות ומילויים חוזרים שלא ממהרים לגרש אתכם.",
 "k29": "מועדוני קריאה וערבי קריאה",
 "k30": "3 באוק׳",
 "k31": "מועדון ספרות יפה",
 "k32": "דיון חודשי, 19:00 — הבחירה החודשית: \"שעת הנדודים\"",
 "k33": "10 באוק׳",
 "k34": "במה פתוחה לשירה",
 "k35": "הביאו משלכם או קראו אהוב — כולם מוזמנים, 18:30",
 "k36": "18 באוק׳",
 "k37": "הרצאת סופר וחתימה על ספרים",
 "k38": "סופר מקומי קורא מתוך הרומן החדש שלו, 19:00",
 "k39": "המלצות",
 "k40": "מהקבועים שלנו",
 "k41": "\"מדף המלצות הצוות מעולם לא איכזב אותי. הם פשוט מבינים.\"",
 "k42": "— אדאז'ה א.",
 "k43": "\"המקום האהוב עליי לעבוד בו מרחוק — שקט, חמים והקפה באמת מעולה.\"",
 "k44": "— בן פ.",
 "k45": "\"מועדון הקריאה כאן הביא לי כמה מהחברים הקרובים ביותר שלי. מקום נדיר.\"",
 "k46": "— לין ט.",
 "k47": "בואו לשבת עם ספר",
 "k48": "פתוח מדי יום. הירשמו לניוזלטר שלנו להזמנות לאירועים ורשימות חידושים.",
 "k49": "📍 שדרות הערבה 214",
 "k50": "🕘 א׳–א׳, 08:00 – 21:00",
 "k51": "הצטרפו לניוזלטר",
 "k52": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k53": "&copy; 2026 Chapter &amp; Verse. תבנית להדגמה בלבד.",
 "k54": "ספרים",
 "k55": "השם שלכם",
 "k56": "כתובת אימייל"
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
