import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10, 
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
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

    const btnSend = document.querySelector('.btn-send');
    if (btnSend) {
        btnSend.addEventListener('click', function () {
            window.open('https://github.com/front-band-17/project-wr23-45', '_blank');
        });
    } else {
        console.error('.btn-send not found!');
    }
});

