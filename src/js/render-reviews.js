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
}
