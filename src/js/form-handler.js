import axios from "axios";
import iziToast from "izitoast";

export default function initFormHandler() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.work-together__form');
    const emailInput = form?.querySelector('input[name="email"]');
    const commentInput = form?.querySelector('input[name="message"]');
    const popup = document.getElementById('popup');

    if (!form || !emailInput || !commentInput || !popup) return;

    const popupTitle = popup.querySelector('h3');
    const popupMessage = popup.querySelector('p');
    const closeBtn = popup.querySelector('.popup__close');

    [emailInput, commentInput].forEach(input => {
      input.addEventListener('blur', () => {
        const maxLength = 25;
        if (input.value.length > maxLength) {
          input.dataset.fullValue = input.value;
          input.value = input.value.slice(0, maxLength) + '...';
        }
      });
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (emailInput.dataset.fullValue) emailInput.value = emailInput.dataset.fullValue;
      if (commentInput.dataset.fullValue) commentInput.value = commentInput.dataset.fullValue;

      const email = emailInput.value.trim();
      const comment = commentInput.value.trim();
      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

      if (!email || !comment) {
        iziToast.warning({ title: 'Warning', message: 'Please fill out both fields.' });
        return;
      }

      if (!emailPattern.test(email)) {
        iziToast.warning({ title: 'Warning', message: 'Please enter a valid email address.' });
        return;
      }

      const payload = { email, comment };

      try {
        const response = await axios.post('https://portfolio-js.b.goit.study/api/requests', payload, {
          headers: { 'Accept': 'application/json' },
        });

        if (response.status !== 201) {
          return;
        }
          const data = response.data;

    if (popupTitle) { popupTitle.textContent = data.title; }
    if (popupMessage) { popupMessage.textContent = data.message; }

          popup.classList.add('active');
          document.body.classList.add('modal-popup-open');
          form.reset();

          const closePopup = () => {
            popup.classList.remove('active');
            document.body.classList.remove('modal-popup-open');
          };

          closeBtn?.addEventListener('click', closePopup);
          popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup();
          });
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePopup();
          });
      } catch (error) {
        if (!error.response) {
          iziToast.error({ title: 'Error', message: `Network error: ${error.message}` });
          return;
        }
        
        switch (error.response.status) {
          case 400:
            iziToast.error({ title: 'Error', message: 'Bad Request: Invalid request body.' });
            break;
          case 404:
            iziToast.error({ title: 'Error', message: 'Not Found: Endpoint does not exist.' });
            break;
          case 500:
            iziToast.error({ title: 'Error', message: 'Server Error: Please try again later.' });
            break;
          default:
            iziToast.error({ title: 'Error', message: error.response.statusText });
            break;
        }
       
      }
    });
  });
}