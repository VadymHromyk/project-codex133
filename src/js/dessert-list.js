import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getCategories,
  getDesserts,
  getDessertsById,
} from './services/api/api';

const selectContainer = document.querySelector('.dessert-list-select');
const categoriesContainer = document.querySelector('.dessert-categories-list');
const loader = document.querySelector('.loader');

const dessertContainer = document.querySelector('.dessert-list');
const loadMoreBtn = document.querySelector('.dessert-load-btn');

let currentPage = 1;
const LIMIT = 8;
let currentCategory = 'all';
const select = document.querySelector('.dessert-list-select');
const wrapper = document.querySelector('.dessert-select-wrapper');

document.addEventListener('DOMContentLoaded', initDessertList);
selectContainer.addEventListener('change', filterByCategory);
categoriesContainer.addEventListener('change', filterByCategory);
loadMoreBtn.addEventListener('click', loadMoreDesserts);
dessertContainer.addEventListener('click', openDessertModal);

async function initDessertList() {
  showLoader();
  try {
    const categories = await getCategories();
    const allCategories = [
      {
        name: 'Всі десерти',
        _id: 'all',
      },
      ...categories,
    ];
    if (!allCategories.length) {
      iziToast.error({
        titleColor: 'white',
        position: 'topRight',
        title: 'Error',
        backgroundColor: 'red',
        messageColor: 'white',
        message: 'No images found for this query. Please try again.',
      });
      return;
    }
    renderSelect(allCategories);
    renderCategoriesBtn(allCategories);

    const data = await getDesserts({
      page: currentPage,
      limit: LIMIT,
    });
    if (!data.desserts.length) {
      iziToast.error({
        titleColor: 'white',
        position: 'topRight',
        title: 'Error',
        backgroundColor: 'red',
        messageColor: 'white',
        message: 'Something went wrong. Please try again later.',
      });
      return;
    }
    renderDesserts(data.desserts);
    const totalPages = Math.ceil(data.totalItems / LIMIT);

    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.disabled = currentPage >= totalPages;
  } catch (error) {
    iziToast.error({
      titleColor: 'white',
      position: 'topRight',
      title: 'Error',
      backgroundColor: 'red',
      messageColor: 'white',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
}

async function filterByCategory(event) {
  showLoader();
  hideLoadMoreBtn();
  currentCategory = event.target.value;
  if (!currentCategory) return;

  currentPage = 1;
  dessertContainer.innerHTML = '';
  try {
    const params = {
      page: currentPage,
      limit: LIMIT,
    };

    if (currentCategory !== 'all') {
      params.category = currentCategory;
    }
    const data = await getDesserts(params);
    if (!data.desserts.length) {
      iziToast.error({
        titleColor: 'white',
        position: 'topRight',
        title: 'Error',
        backgroundColor: 'red',
        messageColor: 'white',
        message: 'Something went wrong. Please try again later.',
      });
      return;
    }
    renderDesserts(data.desserts);
    // Notify.success('Десерти завантажено');
    const totalPages = Math.ceil(data.totalItems / LIMIT);

    loadMoreBtn.classList.remove('is-hidden');
    // loadMoreBtn.disabled = currentPage >= totalPages;

    if (currentPage >= totalPages) {
      loadMoreBtn.disabled = true;
      iziToast.success({
        titleColor: 'white',
        position: 'topRight',
        title: 'OK',
        backgroundColor: 'green',
        messageColor: 'white',
        message: 'Десерти завантажено',
      });
    } else {
      loadMoreBtn.disabled = false;
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      titleColor: 'white',
      position: 'topRight',
      title: 'Error',
      backgroundColor: 'red',
      messageColor: 'white',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
}

async function loadMoreDesserts() {
  showLoader();
  loadMoreBtn.disabled = true;
  currentPage += 1;
  hideLoadMoreBtn();
  try {
    const params = {
      page: currentPage,
      limit: LIMIT,
    };

    if (currentCategory !== 'all') {
      params.category = currentCategory;
    }
    const data = await getDesserts(params);
    renderDesserts(data.desserts);

    const card = document.querySelector('.dessert-list-item');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 1,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalItems / LIMIT);

    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.disabled = currentPage >= totalPages;
  } catch (error) {
    console.error(error);
    iziToast.error({
      titleColor: 'white',
      position: 'topRight',
      title: 'Error',
      backgroundColor: 'red',
      messageColor: 'white',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
}

function openDessertModal(event) {
  const btn = event.target.closest('.dessert-list-btn');

  if (!btn) return;
  const card = btn.closest('.dessert-list-item');
  const id = card.dataset.id;

  // openModal(id);
}

function renderSelect(arr) {
  const markup = arr
    .map(
      ({ name, _id }) => `
    <option value="${_id}">${name}</option>`
    )
    .join('');
  selectContainer.innerHTML = markup;
}

function renderCategoriesBtn(arr) {
  const markup = arr
    .map(
      ({ name, _id }) => `
   <label for="${_id}" class="dessert-category-label">
        <input ${_id === 'all' ? 'checked' : ''}
        id="${_id}" type="radio" name="category" 
        value="${_id}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${name}
        </span>
      </label>
      `
    )
    .join('');
  categoriesContainer.innerHTML = markup;
}

function renderDesserts(arr) {
  const markup = arr
    .map(
      ({ name, _id, image, price, category, description }) => `
  <li class="dessert-list-item" data-id="${_id}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${image}" alt="${name}">
        </div>
        <p class="dessert-list-category">${category.name}</p>
        <h3 class="dessert-list-product">${name}</h3>
        <p class="dessert-list-description">${description}</p>
        <span class="dessert-list-price">${price} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="/img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`
    )
    .join('');
  dessertContainer.insertAdjacentHTML('beforeend', markup);
}
select.addEventListener('mousedown', () => {
  wrapper.classList.add('is-open');
});

select.addEventListener('change', () => {
  wrapper.classList.remove('is-open');
});

select.addEventListener('blur', () => {
  wrapper.classList.remove('is-open');
});
function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}
function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('is-hidden');
}
