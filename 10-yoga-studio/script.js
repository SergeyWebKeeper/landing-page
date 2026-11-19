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
const joinForm = document.getElementById('joinForm');
const formNote = document.getElementById('formNote');
joinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Serene Flow Yoga — נושמים. זזים. שייכים.",
 "desc": "סטודיו Serene Flow Yoga — שיעורי ויניאסה, יין, האטה ומדיטציה לכל גוף.",
 "k1": "שיעורים",
 "k2": "מורים",
 "k3": "מחירים",
 "k4": "המלצות",
 "k5": "הזמינו שיעור",
 "k6": "סטודיו לכל גוף",
 "k7": "נושמים.<br>זזים.<br><span>שייכים.</span>",
 "k8": "Serene Flow מציע שיעורי ויניאסה, יין, האטה ומדיטציה במרחב חם ולא ממהר — בלי צורך בניסיון קודם.",
 "k9": "הזמינו את השיעור הראשון",
 "k10": "לוח השיעורים",
 "k11": "<span>נשימה</span>",
 "k12": "לוח שבועי",
 "k13": "מצאו את הזרימה שלכם",
 "k14": "<span>שיעור</span><span>יום</span><span>שעה</span><span>רמה</span>",
 "k15": "<span>ויניאסה פלואו</span><span>ב׳ / ד׳ / ו׳</span><span>07:00</span><span>כל הרמות</span>",
 "k16": "<span>יין יוגה</span><span>ג׳ / ה׳</span><span>18:30</span><span>מתחילים</span>",
 "k17": "<span>האטה יוגה</span><span>ב׳ / ד׳</span><span>12:00</span><span>כל הרמות</span>",
 "k18": "<span>מעגל מדיטציה</span><span>יום א׳</span><span>09:00</span><span>כל הרמות</span>",
 "k19": "<span>פאוור ויניאסה</span><span>שבת</span><span>10:00</span><span>בינוני</span>",
 "k20": "מונחים בקפידה",
 "k21": "מאיהת'ורנטון",
 "k22": "ויניאסה ופאוור יוגה",
 "k23": "קנג'י אוסיי",
 "k24": "האטה ומדיטציה",
 "k25": "ליילה חדאד",
 "k26": "יין ושיקומי",
 "k27": "מנוי",
 "k28": "תמחור פשוט וכן",
 "k29": "כניסה בודדת",
 "k30": "$24<span>/שיעור</span>",
 "k31": "מושלם להתנסות או לביקורים מזדמנים.",
 "k32": "בחרו מסלול",
 "k33": "האהוב ביותר",
 "k34": "מנוי חודשי ללא הגבלה",
 "k35": "$129<span>/חודש</span>",
 "k36": "שיעורים ללא הגבלה, בכל סגנון, בכל שבוע.",
 "k37": "כרטיסייה של 10 שיעורים",
 "k38": "$199<span>/כרטיסייה</span>",
 "k39": "קרדיטים גמישים שתקפים לשנה שלמה.",
 "k40": "דברי הקהילה שלנו",
 "k41": "\"הסטודיו הכי מזמין שנכנסתי אליו אי פעם — כמתחילה לגמרי, זה היה משמעותי כל כך.\"",
 "k42": "— רנה א.",
 "k43": "\"יין יוגה עם ליילה באמת שינתה את הדרך שבה אני מתמודדת עם לחץ. ממליצה בחום.\"",
 "k44": "— פריה ד.",
 "k45": "\"המנוי ללא הגבלה שווה כל שקל — עכשיו אני מגיע כמעט כל יום.\"",
 "k46": "— תום ה.",
 "k47": "השיעור הראשון עלינו",
 "k48": "חדשים כאן? הצטרפו אלינו לשיעור מתנה — רק ספרו לנו קצת על עצמכם.",
 "k49": "השיעור המועדף",
 "k50": "ויניאסה פלואו",
 "k51": "יין יוגה",
 "k52": "האטה יוגה",
 "k53": "מעגל מדיטציה",
 "k54": "אני רוצה את שיעור המתנה",
 "k55": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k56": "&copy; 2026 Serene Flow Yoga. תבנית להדגמה בלבד.",
 "k57": "שם מלא",
 "k58": "כתובת אימייל"
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
