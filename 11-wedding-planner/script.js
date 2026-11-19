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

// Demo form
const inquireForm = document.getElementById('inquireForm');
const formNote = document.getElementById('formNote');
inquireForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});
