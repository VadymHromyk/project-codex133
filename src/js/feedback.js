// import $ from 'jquery';
// import 'raty-js'; // Імпортуємо плагін за його правильною npm-назвою

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const swiper = new Swiper('.gallery__swiper', {
//   modules: [Navigation, Pagination],
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 10,
//   grabCursor: true,
//   navigation: {
//     nextEl: '.gallery__button-next',
//     prevEl: '.gallery__button-prev',
//   },
//   pagination: {
//     el: '.gallery__pagination',
//     clickable: true,
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 24,
//     },
//     1280: {
//       slidesPerView: 3,
//       spaceBetween: 32,
//     },
//   },
// });

// // Глобально реєструємо jQuery, інакше raty-js викине помилку в консоль Vite
// window.$ = window.jQuery = $;

// const BaseURL = 'https://deserts-store.b.goit.study/api';

// async function fetchAndRenderFeedbacks() {
//   try {
//     const response = await fetch(`${BaseURL}/feedbacks`);
//     if (!response.ok) throw new Error('Network response was not ok');

//     const data = await response.json();
//     const feedbacks = data.slice(0, 10);

//     const container = document.getElementById('feedbacks-container');
//     if (!container) return;
//     container.innerHTML = '';

//     feedbacks.forEach((item, index) => {
//       const slide = document.createElement('div');
//       slide.classList.add('swiper-slide');
//       const ratyId = `raty-stars-${index}`;

//       slide.innerHTML = `
//         <div class="testimonial-card">
//           <div class="star-rating-block">
//             <div class="star-rating" id="${ratyId}"></div>
//             <span class="rating-value">${Number(item.rating).toFixed(1)}</span>
//           </div>
//           <p class="review-text">"${item.comment || item.text || ''}"</p>
//           <h4 class="client-name">${item.name}</h4>
//         </div>
//       `;
//       container.appendChild(slide);

//       // Ініціалізуємо Raty з вашими SVG-файлами
//       $(`#${ratyId}`).raty({
//         score: item.rating,
//         readOnly: true,
//         half: true,
//         halfShow: true,
//         starType: 'img',
//         path: '/img', // Ваші 3 файли маємо покласти в public/img/
//         starOn: 'star-on.svg',
//         starOff: 'star-off.svg',
//         starHalf: 'star-half.svg',
//       });
//     });

//     initFeedbackSlider();
//   } catch (error) {
//     console.error('Помилка завантаження відгуків:', error);
//   }
// }

// let feedbackSliderInstance = null;
// function initFeedbackSlider() {
//   new Swiper('.gallery__swiper', {
//     modules: [Navigation, Pagination],
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     grabCursor: true,
//     breakpoints: {
//       768: { slidesPerView: 2, spaceBetween: 24 },
//       1280: { slidesPerView: 3, spaceBetween: 32 },
//     },
//     navigation: {
//       nextEl: '.gallery__button-next',
//       prevEl: '.gallery__button-prev',
//     },
//     pagination: {
//       el: '.gallery__pagination',
//       clickable: true,
//     },
//   });
// }

// fetchAndRenderFeedbacks();
import $ from 'jquery';
import 'raty-js'; // Імпортуємо плагін

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Обов'язково імпортуємо стилі в JS (Vite їх сам збере в один загальний CSS)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Глобальна реєстрація для raty-js в середовищі Vite
window.$ = window.jQuery = $;

// Правильний ендпоінт для відгуків GoIT API
const FEEDBACKS_URL = 'https://deserts-store.b.goit.study/api/feedbacks';
let feedbackSliderInstance = null;

async function fetchAndRenderFeedbacks() {
  try {
    const response = await fetch(FEEDBACKS_URL);
    if (!response.ok) throw new Error('Помилка завантаження даних');

    const feedbacks = await response.json();
    const limitedFeedbacks = feedbacks.slice(0, 10); // Беремо перші 10

    const container = document.getElementById('feedbacks-container');
    if (!container) return;
    container.innerHTML = '';

    // 1. Генеруємо чистий HTML для слайдів
    const slidesHTML = limitedFeedbacks
      .map((item, index) => {
        return `
        <div class="swiper-slide">
          <div class="testimonial-card">
            <div class="star-rating-block">
              <div class="star-rating" id="raty-stars-${index}"></div>
            </div>
            <p class="review-text">'${item.comment || item.text || ''}'</p>
            <h4 class="client-name">${item.name || 'Анонім'}</h4>
          </div>
        </div>
      `;
      })
      .join('');

    container.innerHTML = slidesHTML;

    // 2. Ініціалізуємо зірочки Raty за допомогою символів Font, а не картинок (це вирішить проблему з квадратиками!)
    limitedFeedbacks.forEach((item, index) => {
      $(`#raty-stars-${index}`).raty({
        score: item.rating,
        readOnly: true,
        half: true,
        halfShow: true,
        // Замість картинок використовуємо вбудовані шрифтові символи або UTF-зірки, щоб уникнути помилок шляхів у Vite
        starType: 'i',
        hints: ['wretched', 'poor', 'mediocre', 'good', 'gorgeous'],
      });
    });

    // 3. Запускаємо слайдер після того, як весь HTML вже на сторінці
    initFeedbackSlider();
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
  }
}

function initFeedbackSlider() {
  if (feedbackSliderInstance) {
    feedbackSliderInstance.destroy(true, true);
  }

  feedbackSliderInstance = new Swiper('.gallery__swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // Той самий Infinite Loop
    grabCursor: true,
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },
    pagination: {
      el: '.gallery__pagination',
      clickable: true,
    },
  });
}

// Запуск
fetchAndRenderFeedbacks();
