import Swiper from 'swiper';


export default function initProjectSwiper() {
  document.addEventListener('DOMContentLoaded', () => {

    new Swiper('.swiper-container-project', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
        enabled: true,
      },
      on: {
        slideChange: function () {
          const slides = document.querySelectorAll('.content-title');
          slides.forEach((slide, index) => {
            if (index === this.activeIndex) {
              slide.classList.add('active');
              slide.classList.remove('hidden');
            } else {
              slide.classList.remove('active');
              slide.classList.add('hidden');
            }
          });
          updateButtonStates(this);
        },
      },
    });


    function updateButtonStates(swiper) {
      const prevButton = document.querySelector('.swiper-btn-prev');
      const nextButton = document.querySelector('.swiper-btn-next');


      if (swiper.activeIndex === 0) {
        prevButton.disabled = true;
      } else {
        prevButton.disabled = false;
      }


      if (swiper.activeIndex === swiper.slides.length - 1) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
    }

  });

}


