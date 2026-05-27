const sliderTrack = document.getElementById('sliderTrack');

const prevBtn = document.getElementById('prevBtn');

const nextBtn = document.getElementById('nextBtn');

const cards = document.querySelectorAll('.product-card');

let currentSlide = 0;

let visibleCards = 3;



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
  return cards.length - visibleCards;
}



function updateSlider() {
  const card = document.querySelector('.product-card');

  const cardWidth = card.offsetWidth + 24;

  sliderTrack.style.transform = `translateX(-${
    currentSlide * cardWidth
  }px)`;

  prevBtn.disabled = currentSlide === 0;

  nextBtn.disabled = currentSlide >= getTotalSlides();
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

sliderTrack.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

sliderTrack.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;

  if (startX - endX > 50 && currentSlide < getTotalSlides()) {
    currentSlide++;
  }

  if (endX - startX > 50 && currentSlide > 0) {
    currentSlide--;
  }

  updateSlider();
});



window.addEventListener('resize', () => {
  updateVisibleCards();

  updateSlider();
});



updateVisibleCards();

updateSlider();