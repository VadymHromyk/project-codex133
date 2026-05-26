import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import starOn from '../img/icons/star-on.svg';
import starOff from '../img/icons/star-off.svg';
import starHalf from '../img/icons/star-half.svg';
import Raty from 'raty-js';

const BaseURL = 'https://deserts-store.b.goit.study/api';
let feedbackSliderInstance = null;

async function fetchAndRenderFeedbacks() {
  try {
    const response = await fetch(`${BaseURL}/feedbacks`);
    if (!response.ok) throw new Error('Помилка завантаження даних');

    const data = await response.json();
    const feedbacksArray = (data.feedbacks || []).slice(0, 10);

    const container = document.getElementById('feedbacks-container');
    if (!container) return;
    container.innerHTML = '';

    feedbacksArray.forEach((item, index) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      const ratyId = `raty-stars-${index}`;

      slide.innerHTML = `
        <div class="testimonial-card">
          <div class="star-rating js-raty-stars" id="${ratyId}"
          data-score="${item.rate || 5}"></div>
          <p class="review-text">"${item.description || ''}"</p>
          <h4 class="client-name">${item.author || 'Anonim'}</h4>
        </div>
      `;
      container.appendChild(slide);

      const starElement = slide.querySelector('.js-raty-stars');
      if (starElement) {
        new Raty(starElement, {
          score: item.rate || 5,
          readOnly: true,
          half: true,
          halfShow: true,
          starType: 'img',
          path: '',
          starOn: starOn,
          starOff: starOff,
          starHalf: starHalf,
        }).init();
      }
    });

    initFeedbackSlider();
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Помилка завантаження відгуків:',
      position: 'topRight',
    });
  }
}

function initFeedbackSlider() {
  if (feedbackSliderInstance) {
    feedbackSliderInstance.destroy(true, true);
  }

  feedbackSliderInstance = new Swiper('.gallery__swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },
    pagination: {
      el: '.gallery__pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderFeedbacks();
});
