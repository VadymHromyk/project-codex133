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

console.log(selectContainer);
console.log(categoriesContainer);
let currentPage = 1;

selectContainer.addEventListener('change', filterByCategory);
categoriesContainer.addEventListener('change', filterByCategory);
async function initDessertList() {
  try {
    const categories = await getCategories();
    console.log(categories);
    console.log(categories);

    renderSelect(categories);
    renderCategoriesBtn(categories);
    const desserts = await getDesserts({
      page: currentPage,
      limit: 8,
    });
    console.log(desserts);

    renderDesserts(desserts.desserts);
  } catch (error) {
    console.log(error.message);
  }
}
initDessertList();

async function filterByCategory(event) {
  dessertContainer.innerHTML = '';
  try {
    showLoader();
    loadMoreBtn.hidden = true;
    const category = event.target.value;
    let data;
    if (category === 'all') {
      data = await getDesserts({
        page: currentPage,
        limit: 8,
      });
    } else {
      data = await getDesserts({
        category,
        page: currentPage,
        limit: 8,
      });
      console.log(data);
    }
    renderDesserts(data.desserts);
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
  }
}

function renderSelect(arr) {
  const markup = arr
    .map(({ name, _id }) => `<option value="${_id}">${name}</option>`)
    .join('');
  selectContainer.insertAdjacentHTML('beforeend', markup);
}

function renderCategoriesBtn(arr) {
  const markup = arr
    .map(
      ({ name, _id }, index) => `
   <label for="${_id}" class="dessert-category-label">
        <input
        id="${_id}" type="radio" name="category" 
        value="${_id}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${name}
        </span>
      </label>
      `
    )
    .join('');
  categoriesContainer.insertAdjacentHTML('beforeend', markup);
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
  loader.style.display = 'block';
}
function hideLoader() {
  loader.style.display = 'none';
}
