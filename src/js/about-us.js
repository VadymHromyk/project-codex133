import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let aboutUsSwiperInstance = null;

// Оптимизация производительности при изменении размера экрана
function debounce(func, delay = 150) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function handleAboutUsSlider() {
  const isDesktopOrTablet = window.innerWidth >= 768;

  if (isDesktopOrTablet) {
    if (!aboutUsSwiperInstance) {
      aboutUsSwiperInstance = new Swiper('#about-us .about_us__swiper', {
        modules: [Navigation, Pagination],
        loop: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        updateOnWindowResize: true,

        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        },

        navigation: {
          nextEl: '#about-us .about_us__btn--next',
          prevEl: '#about-us .about_us__btn--prev',
          disabledClass: 'swiper-button-disabled',
        },
        pagination: {
          el: '#about-us .about_us__pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        grabCursor: true,
        allowTouchMove: true,
      });
    }
  } else {
    if (aboutUsSwiperInstance) {
      aboutUsSwiperInstance.destroy(true, true);
      aboutUsSwiperInstance = null;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  handleAboutUsSlider();
  window.addEventListener('resize', debounce(handleAboutUsSlider));
});

setTimeout(handleAboutUsSlider, 100);
