import { fetchPortfolio } from './js/portfolio-api';
import { renderGalleryMarkup, updateGallery } from './js/render-reviews.js';

const response = await fetchPortfolio();

const ul = document.querySelector('.reviews-list');
updateGallery(ul, renderGalleryMarkup(response));

console.log(response);

import Swiper from 'swiper/bundle';

import 'swiper/css';
// import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: true,
  },
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
