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
