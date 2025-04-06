import Accordion from "accordion-js";
import Swiper from 'swiper/bundle';

export default function InitAboutMe() {
  new Accordion(".about-me-ac-container", {
    openOnInit: [0],
    elementClass: "about-me-ac-item",
    panelClass: "about-me-ac-panel",

  });

  new Swiper('.about-me-swiper-container', {
    keyboard: { enabled: true },
    loop: true,
    navigation: {
      nextEl: '.about-me-swiper-button-next',
      enabled: true,

    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesSizesGrid: 343,
      },
      768: {
        slidesPerView: 3,
        slidesSizesGrid: 600,
      },
    },
  });

  document.querySelector('.about-me-ac-container').style.display = 'block';
  document.querySelector('.about-me-swiper').style.display = 'flex';
}