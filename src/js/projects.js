import Swiper from 'swiper/bundle';


export default function initProjectSwiper () {
  new Swiper('.swiper-projects', {
    keyboard: { enabled: true },
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.project-swiper-button-next',
      prevEl: '.project-swiper-button-prev',
      enabled: true,
    }

  });

  document.querySelector('.section-projects').style.display = 'block';
}



