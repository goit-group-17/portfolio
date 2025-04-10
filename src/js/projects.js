import Swiper from 'swiper/bundle';


export default function initProjectSwiper () {
  new Swiper('.swiper-projects', {
    keyboard: { enabled: true },
    slidesPerView: 'auto',
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     slidesSizesGrid: 343,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     slidesSizesGrid: 344,
    //   },
    //   1440: {
    //     slidesPerView: 1,
    //     slidesSizesGrid: 332,
    //   },
    // },
    navigation: {
      nextEl: '.project-swiper-button-next',
      prevEl: '.project-swiper-button-prev',
      enabled: true,
    }

  });

}



