import Swiper from 'swiper/bundle';
import 'swiper/css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGalleryMarkup(reviews) {
  return reviews
    .map(
      ({ author, avatar_url, review }) => `
        <li class="reviews-item swiper-slide">
            <img class="reviews-photo" src="${avatar_url}" alt="${author}" width="48" height="48">
            <h3 class="reviews-name">${author}</h3>
            <p class="reviews-content">${review}</p>
        </li>
    `
    )
    .join('');
}

export function updateGallery(gallery, markup) {
  gallery.insertAdjacentHTML('beforeend', markup);

  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,
    },
    keyboard: { enabled: true },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesSizesGrid: 343,
      },
      768: {
        slidesPerView: 2,
        slidesSizesGrid: 344,
      },
      1440: {
        slidesPerView: 4,
        slidesSizesGrid: 332,
      },
    },
  });
}

export function renderError() {
  iziToast.error({
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    theme: 'dark',
    progressBarColor: '#B51B1B',
    maxWidth: '432',
    messageSize: '16',
    position: 'topRight',
    message: 'Error loading reviews: Not found',
  });
}

export function renderNotFound() {
  document.querySelector('.swiper').style.display = 'none';
}
