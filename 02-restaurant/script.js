// Sticky nav
const nav = document.getElementById('nav');
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 30);
  heroBg.style.transform = `translateY(${y * 0.25}px)`;
});

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Menu tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.menu-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('is-active'));
    panels.forEach(p => p.classList.remove('is-active'));
    tab.classList.add('is-active');
    document.querySelector(`.menu-panel[data-panel="${tab.dataset.tab}"]`).classList.add('is-active');
  });
});

// Testimonial carousel (auto-rotate)
const testimonials = document.querySelectorAll('.testimonial');
const dotsWrap = document.getElementById('carouselDots');
let current = 0;
testimonials.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('is-active');
  dot.addEventListener('click', () => showTestimonial(i));
  dotsWrap.appendChild(dot);
});
function showTestimonial(index) {
  testimonials[current].classList.remove('is-active');
  dotsWrap.children[current].classList.remove('is-active');
  current = index;
  testimonials[current].classList.add('is-active');
  dotsWrap.children[current].classList.add('is-active');
}
setInterval(() => showTestimonial((current + 1) % testimonials.length), 5000);

// Reservation demo form
const reserveForm = document.getElementById('reserveForm');
const formNote = document.getElementById('formNote');
reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Bella Vista — מסעדה איטלקית משובחת",
 "desc": "מסעדת Bella Vista — פסטה בעבודת יד, מרכיבים עונתיים וערב בלתי נשכח.",
 "k1": "הסיפור שלנו",
 "k2": "תפריט",
 "k3": "גלריה",
 "k4": "המלצות",
 "k5": "שריינו שולחן",
 "k6": "מאז 1998 · במרכז העיר",
 "k7": "ערב שכדאי<br><em>ליהנות ממנו</em>",
 "k8": "פסטה בעבודת יד, מנות קלאסיות מתנור עצים ויין שנבחר בקפידה לארוחות ערב איטיות ובלתי נשכחות.",
 "k9": "לתפריט",
 "k10": "גללו",
 "k11": "שורשים במסורת,<br>הגשה באהבה",
 "k12": "Bella Vista התחילה כמטבח משפחתי בטורינו וגדלה לשולחן שבו מתכונים מהעולם הישן פוגשים טכניקה מודרנית. כל מנה מוכנה אצלנו מדי יום — ממתיחת המוצרלה ועד גלגול הטליאטלה ביד.",
 "k13": "השפים שלנו מביאים תוצרת מחקלאים מקומיים בכל בוקר, כך שהתפריט משתנה בעדינות עם העונות בעוד שנשמת האוכל נשארת אותה נשמה.",
 "k14": "<strong>27</strong><span>שנים בשירות העיר</span>",
 "k15": "<strong>100%</strong><span>פסטה תוצרת בית</span>",
 "k16": "<strong>4.9</strong><span>דירוג ממוצע</span>",
 "k17": "טעימה מהערב",
 "k18": "מנות ראשונות",
 "k19": "מנות עיקריות",
 "k20": "קינוחים",
 "k21": "בורטה אל טרטופו",
 "k22": "בורטה קרמית, כמהין שחורות, פוקאצ'ה קלויה",
 "k23": "קרפאצ'ו די מנצו",
 "k24": "בקר פרוס דק, רוקט, פרמזן בשל",
 "k25": "זופה דל ג'ורנו",
 "k26": "מרק היום של השף, ירקות עונתיים",
 "k27": "טליאטלה אל רגו",
 "k28": "רגו בקר מבושל לאט, פסטה בעבודת יד",
 "k29": "ברנזינו אל פורנו",
 "k30": "דג בס מתנור עצים, לימון, צלפים",
 "k31": "ריזוטו אי פונג'י",
 "k32": "ריזוטו פטריות יער, שמן כמהין",
 "k33": "טירמיסו דלה קאזה",
 "k34": "ספוג באספרסו, קרם מסקרפונה",
 "k35": "פנה קוטה",
 "k36": "פול וניל, קומפוט פירות יער עונתי",
 "k37": "אפוגטו",
 "k38": "ג'לטו וניל, אספרסו חם, אמרטי",
 "k39": "הצצה פנימה",
 "k40": "מה האורחים אומרים",
 "k41": "\"הטליאטלה אל רגו שווה את הנסיעה לבדה. שירות חם וערב בלתי נשכח.\"",
 "k42": "— אלנה ר.",
 "k43": "\"הרגשנו כמו בטרטוריה קטנה בטוסקנה. כל מנה הייתה הפתעה.\"",
 "k44": "— ג'יימס או.",
 "k45": "\"ארוחת יום השנה שלנו כאן הפכה למסורת שנתית. פשוט הכי טוב.\"",
 "k46": "— סופיה ומרקו",
 "k47": "שריון",
 "k48": "הזמינו שולחן",
 "k49": "מומלץ להזמין מראש, במיוחד בערבי חמישי עד שבת. מתקבלים גם ללא הזמנה בבר.",
 "k50": "📍 רחוב הגפן 128, מרכז העיר",
 "k51": "🕕 ג׳–א׳, 17:00 – 23:00",
 "k52": "אשרו הזמנה",
 "k53": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k54": "&copy; 2026 Bella Vista. תבנית להדגמה בלבד.",
 "k55": "שם מלא",
 "k56": "מספר סועדים"
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
