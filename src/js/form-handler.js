document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.work-together__form');
    const popup = document.getElementById('popup');
  
    if (!form || !popup) return;
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      const email = form.querySelector('input[type="email"]').value.trim();
      const comment = form.querySelector('input[type="text"]').value.trim();
  
      if (email === '' || comment === '') {
        alert('Please fill out both fields.');
        return;
      }
  
      popup.style.display = 'flex';
  
      form.reset();
    });
  });
  
  function hidePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none';
    }
  }
  
  window.hidePopup = hidePopup;
  