import { fetchPortfolio } from './js/portfolio-api';
import {
  renderGalleryMarkup,
  updateGallery,
  renderError,
  renderNotFound,
} from './js/render-reviews.js';

try {
  const response = await fetchPortfolio();

  const ul = document.querySelector('.reviews-list');
  updateGallery(ul, renderGalleryMarkup(response));
} catch (error) {
  renderError();
  renderNotFound();
}
