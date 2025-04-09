import axios from "axios";
import iziToast from "izitoast";

export default function initFormHandler() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.work-together__form');
    const emailInput = form.querySelector('input[name="email"]');
    const commentInput = form.querySelector('input[name="message"]');
    const popup = document.getElementById('popup');

    if (!form || !emailInput || !commentInput || !popup) return;

    [emailInput, commentInput].forEach(input => {
      input.addEventListener('blur', () => {
        const maxLength = 25;
        if (input.value.length > maxLength) {
          input.dataset.fullValue = input.value; // зберігаємо повне значення, якщо потрібно відновити
          input.value = input.value.slice(0, maxLength) + '...';
        }
      });
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Відновлюємо значення, якщо вони були обрізані
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

        if (response.status === 200 || response.status === 201) {
          const data = response.data;
          popup.querySelector('.popup__content').innerHTML = `
            <button type="button" class="popup__close"></button>
            <h3>${data.title}</h3>
            <p>${data.message}</p>
          `;

          popup.classList.add('active');
          form.reset();

          const closeBtn = popup.querySelector('.popup__close');
          closeBtn.addEventListener('click', () => popup.classList.remove('active'));

          popup.addEventListener('click', (e) => {
            if (e.target === popup) popup.classList.remove('active');
          });

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') popup.classList.remove('active');
          });
        }
      } catch (error) {
        if (error.response) {
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
        } else {
          iziToast.error({ title: 'Error', message: `Network error: ${error.message}` });
        }
      }
    });
  });
}
