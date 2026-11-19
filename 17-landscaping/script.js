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
const quoteForm = document.getElementById('quoteForm');
const formNote = document.getElementById('formNote');
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "GreenScape Outdoor — גינון ועיצוב נוף",
 "desc": "GreenScape Outdoor — עיצוב נוף, טיפוח דשא, פיתוח חוץ ותחזוקה עונתית.",
 "k1": "שירותים",
 "k2": "תהליך",
 "k3": "גלריה",
 "k4": "המלצות",
 "k5": "קבלו הצעת מחיר חינם",
 "k6": "עסק משפחתי &middot; מורשה ומבוטח",
 "k7": "מרחבי חוץ<br>ששווה <em>לצאת אליהם</em>",
 "k8": "מטיפוח דשא שבועי ועד עיצוב נוף מלא, GreenScape בונה ומתחזקת מרחבי חוץ שתרצו באמת לבלות בהם.",
 "k9": "השירותים שלנו",
 "k10": "מה אנחנו עושים",
 "k11": "טיפוח דשא",
 "k12": "כיסוח, דישון והדברת עשבים בלוח זמנים שאתם קובעים.",
 "k13": "עיצוב נוף",
 "k14": "תוכניות שתילה ופריסה מותאמות אישית, שנבנות סביב המרחב שלכם.",
 "k15": "פיתוח חוץ",
 "k16": "פטיו, שבילים וקירות תמך שנבנים להחזיק עשרות שנים.",
 "k17": "השקיה",
 "k18": "מערכות ממטרות חכמות שחוסכות מים ושומרות על דשא רענן.",
 "k19": "טיפול בעצים ובשיחים",
 "k20": "גיזום, שתילה וטיפולי בריאות לנוף בוגר.",
 "k21": "ניקיון עונתי",
 "k22": "ניקיונות אביב וסתיו שמכינים את החצר שלכם לעונה.",
 "k23": "התהליך שלנו",
 "k24": "מפרוע לנהדר",
 "k25": "ייעוץ חינם",
 "k26": "אנחנו עוברים על הנכס ומדברים על המטרות שלכם.",
 "k27": "עיצוב מותאם אישית",
 "k28": "תוכנית המותאמת למרחב, לתקציב ולאקלים שלכם.",
 "k29": "התקנה",
 "k30": "הצוות שלנו מביא את העיצוב לחיים, מההתחלה ועד הסוף.",
 "k31": "טיפול שוטף",
 "k32": "תחזוקה עונתית שומרת על שגשוג לאורך כל השנה.",
 "k33": "פרויקטים אחרונים",
 "k34": "חצרות שהפכנו",
 "k35": "שכונות סומכות על GreenScape",
 "k36": "\"החצר האחורית שלנו עברה מבור בוץ לחלק הכי טוב בבית. עבודת עיצוב מדהימה.\"",
 "k37": "— משפחת הוליס",
 "k38": "\"צוות הדשא השבועי אמין ויסודי — כבר לא צריך לחשוב על זה.\"",
 "k39": "— מרקוס ד.",
 "k40": "\"הפטיו ומערכת ההשקיה החדשים החזירו את עצמם רק בזכות המראה מבחוץ.\"",
 "k41": "— אלנה ט.",
 "k42": "קבלו הצעת מחיר חינם",
 "k43": "ספרו לנו על הנכס שלכם — נקבע סיור תוך שבוע.",
 "k44": "השירות הנדרש",
 "k45": "טיפוח דשא",
 "k46": "עיצוב נוף",
 "k47": "עוד לא בטוח",
 "k48": "בקשו את הצעת המחיר החינמית שלי",
 "k49": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k50": "&copy; 2026 GreenScape Outdoor. תבנית להדגמה בלבד.",
 "k51": "שם מלא",
 "k52": "כתובת הנכס"
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
