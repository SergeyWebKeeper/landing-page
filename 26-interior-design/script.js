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

// Before/after slider
const baRange = document.getElementById('baRange');
const baAfter = document.getElementById('baAfter');
const baHandle = document.getElementById('baHandle');
baRange.addEventListener('input', () => {
  const val = baRange.value;
  baAfter.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
  baHandle.style.left = val + '%';
});

// Demo form
const consultForm = document.getElementById('consultForm');
const formNote = document.getElementById('formNote');
consultForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});

// ---- Language switch (EN / HE) ----
const HE = {
 "title": "Atelier Home — סטודיו לעיצוב פנים",
 "desc": "Atelier Home — עיצוב פנים בשירות מלא, תכנון חללים וסטיילינג.",
 "k1": "שירותים",
 "k2": "פורטפוליו",
 "k3": "תהליך",
 "k4": "צור קשר",
 "k5": "קבעו ייעוץ",
 "k6": "עיצוב פנים בשירות מלא",
 "k7": "חללים שמעוצבים<br>סביב האופן שבו אתם <em>חיים</em>",
 "k8": "Atelier Home יוצרת חדרים שמרגישים מחושבים, נוחים לחיים ובלי ספק שלכם — מרענון חדר בודד ועד בית שלם.",
 "k9": "לפורטפוליו שלנו",
 "k10": "טרנספורמציות",
 "k11": "גררו כדי לראות את ההבדל",
 "k12": "לפני",
 "k13": "אחרי",
 "k14": "איך נוכל לעזור",
 "k15": "עיצוב בשירות מלא",
 "k16": "מקונספט ועד התקנה, מנוהל עבורכם במלואו.",
 "k17": "תכנון חללים",
 "k18": "פריסות שגורמות לחדר סוף סוף להיות הגיוני.",
 "k19": "עיצוב מרחוק",
 "k20": "חבילות עיצוב מרחוק לכל תקציב ולכל עיר.",
 "k21": "סטיילינג והום סטיינג",
 "k22": "השכבה האחרונה שגורמת למקום להרגיש גמור.",
 "k23": "פרויקטים אחרונים",
 "k24": "<span>סלון על הגבעה</span>",
 "k25": "<span>לופט במרכז העיר</span>",
 "k26": "<span>סוויטת הורים בחוף</span>",
 "k27": "<span>רענון מטבח משפחתי</span>",
 "k28": "איך אנחנו עובדים יחד",
 "k29": "גילוי",
 "k30": "סיור במרחב, בסגנון וביעדים שלכם.",
 "k31": "קונספט",
 "k32": "לוחות השראה, פריסות ובחירת חומרים.",
 "k33": "רכש",
 "k34": "ריהוט, קישוטים ובעלי מקצוע מתואמים עבורכם.",
 "k35": "התקנה",
 "k36": "החשיפה הסופית — חלל שמרגיש שלם.",
 "k37": "משוב לקוחות",
 "k38": "מה הלקוחות אומרים",
 "k39": "\"הם הבינו בדיוק מה אנחנו רוצים עוד לפני שהצלחנו להסביר את זה היטב.\"",
 "k40": "— נעמי וכריס",
 "k41": "\"הסלון שלנו סוף סוף מרגיש גמור. שווה כל חלק מהתהליך.\"",
 "k42": "— דניאל ר.",
 "k43": "\"חבילת העיצוב מרחוק התאימה בדיוק לתקציב שלנו ועדיין הרגישה מותאמת אישית לגמרי.\"",
 "k44": "— פריה ס.",
 "k45": "בואו נעצב את המרחב שלכם",
 "k46": "ספרו לנו על הפרויקט — נחזור אליכם לקביעת שיחת היכרות.",
 "k47": "סוג הפרויקט",
 "k48": "חדר בודד",
 "k49": "בית שלם",
 "k50": "עיצוב מרחוק",
 "k51": "סטיילינג בלבד",
 "k52": "שלחו פנייה",
 "k53": "הדגמה בלבד — לתבנית אין צד שרת. חברו את הטופס עבור הלקוח שלכם.",
 "k54": "&copy; 2026 Atelier Home. תבנית להדגמה בלבד.",
 "k55": "שם מלא",
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
