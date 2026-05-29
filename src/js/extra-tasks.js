import { getDesserts } from './services/api/api.js';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const popularList = document.querySelector(
  '.popular-list'
);

async function renderPopularDesserts() {
  try {
    const desserts = await getDesserts({
      type: 'popular',
    });

    popularList.innerHTML = desserts
      .map(
        ({
          name,
          category,
          description,
          price,
          image,
        }) => `
        <article class="product-card swiper-slide">

          <img
            src="${image}"
            alt="${name}"
            class="product-image"
          />

          <div class="product-content">

            <div class="product-header">

              <p class="product-category">
                ${category}
              </p>

              <div class="product-info">

                <h3 class="product-title">
                  ${name}
                </h3>

                <p class="product-description">
                  ${description}
                </p>

              </div>
            </div>

            <div class="product-bottom">

              <p class="product-price">
                ${price} грн
              </p>

              <button
                type="button"
                class="product-button"
              >
                <img
                  src="./src/images/icons/arrow-outward.svg"
                  alt="arrow"
                />
              </button>

            </div>
          </div>
        </article>
      `
      )
      .join('');

    runSwiper();
  } catch (error) {
    console.log(error);
  }
}

function runSwiper() {
  new Swiper('.popular-swiper', {
    modules: [Pagination, Navigation],

    slidesPerGroup: 1,

    cssMode: true,

    nested: true,

    spaceBetween: 24,

    navigation: {
      nextEl: '.navigation-next',
      prevEl: '.navigation-previus',
    },

    pagination: {
      el: '.swiper-pagination',

      bulletClass: 'popular-bullet',

      bulletActiveClass:
        'popular-bullet-active',

      clickable: true,
    },

    breakpoints: {
      375: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}

renderPopularDesserts();