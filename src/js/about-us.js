import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let aboutUsSwiperInstance = null;

function handleAboutUsSlider() {
  const isDesktopOrTablet = window.innerWidth >= 768;

  if (isDesktopOrTablet) {
    if (!aboutUsSwiperInstance) {
      aboutUsSwiperInstance = new Swiper('.about_us__swiper', {
        modules: [Navigation, Pagination],
        loop: false,
        slidesPerView: 2,
        spaceBetween: 24,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        updateOnWindowResize: true,
        navigation: {
          nextEl: '.about_us__btn--next',
          prevEl: '.about_us__btn--prev',
          disabledClass: 'swiper-button-disabled',
        },
        pagination: {
          el: '.about_us__pagination',
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
  window.addEventListener('resize', handleAboutUsSlider);
});

setTimeout(handleAboutUsSlider, 100);
