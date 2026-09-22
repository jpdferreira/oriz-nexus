const header = document.querySelector('.site-header');
const toggle = document.querySelector('.lang-toggle');
const translatable = [...document.querySelectorAll('[data-en][data-pt]')];

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

toggle.addEventListener('click', () => {
  const next = toggle.dataset.lang === 'en' ? 'pt' : 'en';
  toggle.dataset.lang = next;
  toggle.textContent = next === 'en' ? 'PT' : 'EN';
  document.documentElement.lang = next;
  translatable.forEach(el => el.textContent = el.dataset[next]);
});

document.getElementById('year').textContent = new Date().getFullYear();
