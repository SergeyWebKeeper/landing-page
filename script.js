// Subtle staggered fade-in for gallery cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = 'opacity .5s ease, transform .5s ease';
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 80 * i);
});
