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
const enrollForm = document.getElementById('enrollForm');
const formNote = document.getElementById('formNote');
enrollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Crescendo Music Academy — שיעורים לכל גיל",
 "desc": "Crescendo Music Academy — שיעורי פסנתר, גיטרה, שירה ותופים למתחילים ועד מתקדמים.",
 "k1": "תוכניות",
 "k2": "מורים",
 "k3": "שיעורים",
 "k4": "המלצות",
 "k5": "הירשמו עכשיו",
 "k6": "שיעורי מוזיקה לכל גיל ורמה",
 "k7": "מצאו את הצליל שלכם",
 "k8": "Crescendo מתאימה תלמידים למורים שהופכים את לימוד המוזיקה למשחק ולא לשיעורי בית — לילדים, לנוער ולמבוגרים כאחד.",
 "k9": "הזמינו שיעור ניסיון",
 "k10": "לתוכניות שלנו",
 "k11": "בחרו את הכלי שלכם",
 "k12": "פסנתר",
 "k13": "מסולמות ראשונים ועד רפרטואר מתקדם, בקצב שלכם.",
 "k14": "גיטרה",
 "k15": "אקוסטית וחשמלית, מאקורדים ועד סולואים.",
 "k16": "שירה",
 "k17": "טכניקה, טווח וביטחון לזמרים מכל סגנון.",
 "k18": "תופים",
 "k19": "מיסודות הקצב ועד נגינה על סט מלא.",
 "k20": "כינור",
 "k21": "יסודות קלאסיים בגישה סבלנית ומעודדת.",
 "k22": "תיאוריה מוזיקלית",
 "k23": "הבינו את ה\"למה\" שמאחורי המוזיקה שאתם מנגנים.",
 "k24": "לומדים ממוזיקאים פעילים",
 "k25": "אלנה מארש",
 "k26": "פסנתר ותיאוריה מוזיקלית",
 "k27": "דייגו סאלאס",
 "k28": "גיטרה ובס",
 "k29": "נעמי ריד",
 "k30": "שירה והופעה",
 "k31": "חבילות שיעורים",
 "k32": "תמחור פשוט",
 "k33": "שיעור בודד",
 "k34": "$45<span>/שיעור</span>",
 "k35": "מפגשים של 30 או 60 דקות",
 "k36": "כל כלי נגינה",
 "k37": "ללא התחייבות",
 "k38": "בחרו מסלול",
 "k39": "המשתלם ביותר",
 "k40": "חודשי (4 שיעורים)",
 "k41": "$160<span>/חודש</span>",
 "k42": "שיעורים שבועיים",
 "k43": "מעקב התקדמות",
 "k44": "הזדמנויות לנגן בקונצרטים",
 "k45": "מסלול משפחתי",
 "k46": "$280<span>/חודש</span>",
 "k47": "שני תלמידים, שיעורים שבועיים",
 "k48": "משבצת משותפת בקונצרט",
 "k49": "10% הנחת אחים",
 "k50": "סיפורי תלמידים",
 "k51": "מהתו הראשון ועד הקונצרט הראשון",
 "k52": "\"הבן שלי עבר מסירוב להתאמן לבקשה לשיעורים נוספים. אלנה היא מתנה.\"",
 "k53": "— פריה ס.",
 "k54": "\"התחלתי גיטרה בגיל 34 בלי שום ניסיון. שנה אחרי ניגנתי בבמה פתוחה. פשוט מטורף.\"",
 "k55": "— תום ר.",
 "k56": "\"סבלנית, מסודרת ובאמת כיפית. הבת שלי מצפה לכל שיעור.\"",
 "k57": "— משפחת קים",
 "k58": "הזמינו שיעור ניסיון חינם",
 "k59": "ספרו לנו איזה כלי ונתאים לכם את המורה הנכון.",
 "k60": "כלי נגינה",
 "k61": "הזמינו את שיעור הניסיון שלי",
 "k62": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k63": "&copy; 2026 Crescendo Music Academy. תבנית להדגמה בלבד.",
 "k64": "שם התלמיד",
 "k65": "כתובת אימייל"
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
