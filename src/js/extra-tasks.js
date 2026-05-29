import { getDesserts } from './services/api/api';

const sliderTrack =
  document.getElementById('sliderTrack');

const prevBtn =
  document.getElementById('prevBtn');

const nextBtn =
  document.getElementById('nextBtn');

let currentSlide = 0;

let visibleCards = 3;


async function renderPopularDesserts() {
  try {
    const desserts = await getDesserts({
      type: 'popular',
    });

    sliderTrack.innerHTML = desserts
      .map(
        ({
          name,
          category,
          description,
          price,
          image,
        }) => `
        <article class="product-card">
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
                  alt="arrow outward"
                />
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    updateSlider();
  } catch (error) {
    console.log(error);
  }
}


function updateVisibleCards() {
  if (window.innerWidth <= 768) {
    visibleCards = 1;
  } else if (window.innerWidth <= 1024) {
    visibleCards = 2;
  } else {
    visibleCards = 3;
  }
}


function getTotalSlides() {
  const cards =
    document.querySelectorAll('.product-card');

  return cards.length - visibleCards;
}


function updateSlider() {
  const card =
    document.querySelector('.product-card');

  if (!card) return;

  const cardWidth = card.offsetWidth + 24;

  sliderTrack.style.transform = `translateX(-${
    currentSlide * cardWidth
  }px)`;

  prevBtn.disabled = currentSlide === 0;

  nextBtn.disabled =
    currentSlide >= getTotalSlides();
}


nextBtn.addEventListener('click', () => {
  if (currentSlide < getTotalSlides()) {
    currentSlide++;

    updateSlider();
  }
});


prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;

    updateSlider();
  }
});


let startX = 0;

let endX = 0;

sliderTrack.addEventListener(
  'touchstart',
  e => {
    startX = e.touches[0].clientX;
  }
);

sliderTrack.addEventListener(
  'touchend',
  e => {
    endX = e.changedTouches[0].clientX;

    if (
      startX - endX > 50 &&
      currentSlide < getTotalSlides()
    ) {
      currentSlide++;
    }

    if (
      endX - startX > 50 &&
      currentSlide > 0
    ) {
      currentSlide--;
    }

    updateSlider();
  }
);


window.addEventListener('resize', () => {
  updateVisibleCards();

  updateSlider();
});

/* INIT */

updateVisibleCards();

renderPopularDesserts();