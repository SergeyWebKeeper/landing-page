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
 "title": "Ironclad Brewing Co. — בירה בוטיק, מבושלת בנחישות",
 "desc": "Ironclad Brewing Co. — בירה בוטיק בבישול קטן ופאב מבשלה ששווה לבקר בו.",
 "k1": "הבירות שלנו",
 "k2": "התהליך",
 "k3": "הפאב",
 "k4": "בואו לבקר",
 "k5": "בואו לפאב",
 "k6": "מבשלת בוטיק בבישול קטן &middot; מאז 2014",
 "k7": "מבושלת בנחישות,<br>מוגשת בגאווה",
 "k8": "Ironclad מבשלת אייל ולאגר בבישול קטן בדרך הכנה — מרכיבים אמיתיים, בלי קיצורי דרך, ונבדקת קודם על קהל הפאב שלנו.",
 "k9": "לבירות שלנו",
 "k10": "בברז",
 "k11": "ההרכב שלנו",
 "k12": "Ironclad IPA",
 "k13": "6.8% אלכוהול &middot; הדרים ואורן בולטים",
 "k14": "Foundry Stout",
 "k15": "7.2% אלכוהול &middot; קפה ושוקולד מריר",
 "k16": "Rivet Pilsner",
 "k17": "4.9% אלכוהול &middot; פריכה ונקייה",
 "k18": "רוטציה עונתית",
 "k19": "משתנה &middot; תמיד משהו חדש בברז",
 "k20": "התהליך שלנו",
 "k21": "מבושלת בדרך הכנה",
 "k22": "ערבול",
 "k23": "דגן מאלט שנשרה כדי להפיק סוכרים לתסיסה.",
 "k24": "הרתחה",
 "k25": "הופס מתווסף למרירות, לטעם ולארומה.",
 "k26": "תסיסה",
 "k27": "שבועות של תסיסה סבלנית במיכלי פלדה.",
 "k28": "מוזגים",
 "k29": "מוגשת טרייה, ממש כאן בפאב שלנו.",
 "k30": "הפאב",
 "k31": "משכו שרפרף",
 "k32": "הפאב שלנו נמצא ממש ליד בית הבישול — אפשר לראות איך מכינים את האצווה הבאה בזמן ששותים את הקודמת. משאיות אוכל מתחלפות מדי שבוע, והמרפסת הידידותית לכלבים פתוחה עד מאוחר.",
 "k33": "סט טעימות, גרולרים וקראולרים לקחת הביתה, תמיד זמינים.",
 "k34": "מה אומרים עלינו",
 "k35": "אהובה מקומית, ובצדק",
 "k36": "\"ה-IPA הכי טוב בעיר, בלי תחרות. גם האווירה בפאב אין שנייה לה.\"",
 "k37": "— דרק ה.",
 "k38": "\"הרוטציה העונתית מחזירה אותנו בכל חודש. אף פעם לא כוס גרועה.\"",
 "k39": "— נדיה פ.",
 "k40": "\"הבאתי גרולר הביתה מחופשה, ועכשיו זה סיבוב חודשי אצל Ironclad.\"",
 "k41": "— משפחת אוסיי",
 "k42": "בואו למשוך שרפרף",
 "k43": "פתוח ד׳–א׳. הצטרפו לרשימת התפוצה להודעות על מהדורות חדשות.",
 "k44": "📍 רחוב היציקה 88",
 "k45": "🕔 ד׳–א׳, 16:00 – 23:00",
 "k46": "הצטרפו לרשימת התפוצה",
 "k47": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k48": "&copy; 2026 Ironclad Brewing Co. תבנית להדגמה בלבד.",
 "k49": "בירות",
 "k50": "השם שלכם",
 "k51": "כתובת אימייל"
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
