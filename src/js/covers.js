document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers');
  const tileLines = document.querySelectorAll('.covers-tiles-line');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tileLines.forEach(line => line.classList.add('animate'));
      } else {
        tileLines.forEach(line => line.classList.remove('animate'));
      }
    });
  }, observerOptions);

  observer.observe(coversSection);
});
