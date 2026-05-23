import { getCategories } from './services/api/api';

const selectContainer = document.querySelector('.dessert-list-select');
const categoriesContainer = document.querySelector('.dessert-categories-list');

console.log(selectContainer);
console.log(categoriesContainer);

async function initDessertList() {
  try {
    const categories = await getCategories();
    console.log(categories);
    renderSelect(categories);
    renderCategoriesBtn(categories);
  } catch (error) {
    console.log(error.message);
  }
}
initDessertList();

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
        <input ${index === 0 ? 'checked' : ''} 
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
