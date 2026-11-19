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
