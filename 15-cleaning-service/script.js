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

// Price estimator
const size = document.getElementById('size');
const sizeVal = document.getElementById('sizeVal');
const priceVal = document.getElementById('priceVal');
const chips = document.querySelectorAll('.chip');
let rate = 70;

function updatePrice() {
  const bedrooms = parseInt(size.value, 10);
  const price = rate * 0.5 + bedrooms * (rate * 0.4);
  priceVal.textContent = '$' + Math.round(price);
  sizeVal.textContent = bedrooms;
}
size.addEventListener('input', updatePrice);
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    rate = parseFloat(chip.dataset.rate);
    updatePrice();
  });
});
updatePrice();

// Demo form
const bookForm = document.getElementById('bookForm');
const formNote = document.getElementById('formNote');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.hidden = false;
});
