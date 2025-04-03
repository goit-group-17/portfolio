import { fetchPortfolio } from './js/portfolio-api';
import { renderGalleryMarkup, updateGallery } from './js/render-reviews.js';

const response = await fetchPortfolio();

const ul = document.querySelector('.reviews-list');
updateGallery(ul, renderGalleryMarkup(response));

console.log(response);
