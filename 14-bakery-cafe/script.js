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
 "title": "Sweet Crumb — מאפייה ובית קפה",
 "desc": "מאפיית Sweet Crumb — מאפים טריים, עוגות בהזמנה וקפה, אפויים מדי יום באהבה.",
 "k1": "תפריט",
 "k2": "הסיפור שלנו",
 "k3": "מבצעים מיוחדים",
 "k4": "בואו לבקר",
 "k5": "הזמינו אונליין",
 "k6": "אפוי טרי, כל בוקר מחדש",
 "k7": "החיים קצרים.<br>תאכלו את <span>המאפה.</span>",
 "k8": "Sweet Crumb אופה קרואסונים, עוגות וקפה מאפס מדי יום — עם חמאה, בלי קיצורי דרך.",
 "k9": "לתפריט",
 "k10": "בואו לבקר",
 "k11": "האהובים ביותר",
 "k12": "ישר מהתנור",
 "k13": "קרואסון חמאה",
 "k14": "טארט תותים",
 "k15": "רולד קינמון",
 "k16": "כיכר שאור",
 "k17": "מתנור ביתי אחד<br>אל שולחן הבוקר שלכם",
 "k18": "Sweet Crumb התחילה במטבח של דירה קטנה, כשמכרנו קרואסונים לשכנים בסופי שבוע. השמועה עברה, ואחרי שמונה שנים אנחנו עדיין עושים את זה באותה דרך — אצוות קטנות, חמאה אמיתית וללא קיצורי דרך.",
 "k19": "הכול נאפה לפני הזריחה, כדי שיהיה טרי ברגע שאנחנו פותחים.",
 "k20": "המבצעים של השבוע",
 "k21": "פינוקים במהדורה מוגבלת",
 "k22": "לחמניית קרם מאצ'ה",
 "k23": "ג׳–ה׳ בלבד",
 "k24": "מאפין דלעת ותבלינים",
 "k25": "עד גמר המלאי",
 "k26": "עוגות יום הולדת בהזמנה",
 "k27": "הזמנה 48 שעות מראש",
 "k28": "מילים מתוקות",
 "k29": "מה הלקוחות הקבועים אומרים",
 "k30": "\"הקרואסונים קלקלו לי כל מאפייה אחרת. שווה את השעון המעורר המוקדם.\"",
 "k31": "— טליה ר.",
 "k32": "\"הזמנתי עוגת יום הולדת ברגע האחרון והיא יצאה מושלמת בכל זאת.\"",
 "k33": "— יונס מ.",
 "k34": "\"הילדים שלי מבקשים 'את המקום עם הקינמון' בכל סוף שבוע עכשיו.\"",
 "k35": "— משפחת נגוין",
 "k36": "בואו להגיד שלום",
 "k37": "פתוח מדי יום משעה 06:30. אפשר להזמין מראש אונליין לאיסוף, או פשוט לקפוץ — תמיד יש משהו חם.",
 "k38": "📍 רחוב האלון 42",
 "k39": "🕕 א׳–א׳, 06:30 – 16:00",
 "k40": "הצטרפו לרשימת הפירורים",
 "k41": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k42": "&copy; 2026 Sweet Crumb. תבנית להדגמה בלבד.",
 "k43": "השם שלכם",
 "k44": "אימייל לעדכוני הזמנה"
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
