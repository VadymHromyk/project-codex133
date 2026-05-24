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

selectContainer.addEventListener('change', filterByCategory);
categoriesContainer.addEventListener('change', filterByCategory);
loadMoreBtn.addEventListener('click', loadMoreDesserts);

async function initDessertList() {
  try {
    showLoader();
    const categories = await getCategories();
    const allCategories = [
      {
        name: 'Всі десерти',
        _id: 'all',
      },
      ...categories,
    ];
    if (!allCategories.length) {
      return;
    }
    renderSelect(allCategories);
    renderCategoriesBtn(allCategories);

    const data = await getDesserts({
      page: currentPage,
      limit: LIMIT,
    });

    renderDesserts(data.desserts);
    const totalPages = Math.ceil(data.totalItems / LIMIT);

    if (currentPage < totalPages) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
  }
}
initDessertList();

async function filterByCategory(event) {
  try {
    showLoader();
    hideLoadMoreBtn();

    currentCategory = event.target.value;
    currentPage = 1;
    dessertContainer.innerHTML = '';
    const params = {
      page: currentPage,
      limit: LIMIT,
    };

    if (currentCategory !== 'all') {
      params.category = currentCategory;
    }
    const data = await getDesserts(params);

    renderDesserts(data.desserts);
    const totalPages = Math.ceil(data.totalItems / LIMIT);

    if (currentPage < totalPages) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
  }
}

async function loadMoreDesserts() {
  currentPage += 1;
  loadMoreBtn.disabled = true;
  showLoader();
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

    if (currentPage < totalPages) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    loadMoreBtn.disabled = false;
    hideLoader();
  }
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
      ({ name, _id }, index) => `
   <label for="${_id}" class="dessert-category-label">
        <input
        ${index === 0 ? 'checked' : ''}
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
