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
const bookForm = document.getElementById('bookForm');
const formNote = document.getElementById('formNote');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Lumen Spa &amp; Wellness — החזירו את האיזון",
 "desc": "Lumen Spa & Wellness — עיסויים, טיפולי פנים וטיפולי גוף במרחב שקט ומרגיע.",
 "k1": "טיפולים",
 "k2": "הפילוסופיה",
 "k3": "תפריט ומחירים",
 "k4": "הזמנה",
 "k5": "הזמינו טיפול",
 "k6": "מקלט של איטיות",
 "k7": "החזירו את האיזון",
 "k8": "Lumen מציעה עיסויים, טיפולי פנים וטיפולי גוף שנועדו להשקיט את הרעש — לשעה, או לאחר צהריים שלם.",
 "k9": "לטיפולים",
 "k10": "דרכים להירגע",
 "k11": "עיסויים",
 "k12": "רקמות עמוק, שוודי וטיפול באבנים חמות.",
 "k13": "טיפולי פנים",
 "k14": "טיפולים מותאמים לכל סוג עור.",
 "k15": "טיפולי גוף",
 "k16": "עטיפות וסקרבים שמותירים את העור מחודש.",
 "k17": "סאונה וחדר אדים",
 "k18": "גישה מלאה כלולה בכל טיפול של 60 דקות.",
 "k19": "הפילוסופיה שלנו",
 "k20": "רווחה בלי למהר",
 "k21": "Lumen נבנתה על אמונה פשוטה: מנוחה אמיתית אי אפשר למהר. כל טיפול מתוכנן עם מרחב סביבו — בלי הזמנות צמודות, בלי למהר לגרש אתכם.",
 "k22": "המטפלים שלנו מורשים, מיומנים לעומק, ובאמת לא ממהרים באופן שבו הם עובדים.",
 "k23": "טיפולים ומחירים",
 "k24": "עיסוי שוודי <span>60 דק׳</span>",
 "k25": "עיסוי רקמות עמוק <span>60 דק׳</span>",
 "k26": "טיפול פנים מסכם <span>50 דק׳</span>",
 "k27": "טיפול באבנים חמות <span>75 דק׳</span>",
 "k28": "עטיפת גוף וסקראב <span>90 דק׳</span>",
 "k29": "המלצות",
 "k30": "דברי האורחים שלנו",
 "k31": "\"העיסוי הראשון בשנים שבאמת השאיר אותי מרגישה אחרת במשך ימים.\"",
 "k32": "— סימון ק.",
 "k33": "\"בלי למהר, בלי למכור לי דברים מיותרים — פשוט טיפול זהיר ושם לב באמת.\"",
 "k34": "— מרקוס ל.",
 "k35": "\"טיפול הפנים החודשי שלי כאן הפך לתור היחיד שאני אף פעם לא מבטלת.\"",
 "k36": "— עאישה ר.",
 "k37": "הזמינו את הביקור שלכם",
 "k38": "בחרו טיפול וזמן — נאשר במהלך היום.",
 "k39": "טיפול",
 "k40": "עיסוי שוודי",
 "k41": "עיסוי רקמות עמוק",
 "k42": "טיפול פנים מסכם",
 "k43": "טיפול באבנים חמות",
 "k44": "עטיפת גוף וסקראב",
 "k45": "בקשת הזמנה",
 "k46": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k47": "&copy; 2026 Lumen Spa &amp; Wellness. תבנית להדגמה בלבד.",
 "k48": "מחירים",
 "k49": "שם מלא",
 "k50": "כתובת אימייל"
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
