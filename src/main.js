import { fetchPortfolio } from './js/portfolio-api.js';
import {
  renderGalleryMarkup,
  updateGallery,
  renderError,
  renderNotFound,
} from './js/render-reviews.js';


(async () => {
  const response = await fetchPortfolio();
  try {
    const ul = document.querySelector('.reviews-list');
    updateGallery(ul, renderGalleryMarkup(response));
  } catch (error) {
    renderError();
    renderNotFound();
  }
})();
