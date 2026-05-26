import { getDessertsById } from './services/api/api';

function buildStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  const starSVG = (cls) => `
    <svg viewBox="0 0 24 24" class="${cls}">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="${cls === 'star-empty' ? 'none' : 'currentColor'}"
        stroke="currentColor" stroke-width="1.5"/>
    </svg>`;

  const halfSVG = `
    <svg viewBox="0 0 24 24" class="star-half">
      <defs>
        <linearGradient id="hg">
          <stop offset="50%" stop-color="currentColor"/>
          <stop offset="50%" stop-color="transparent"/>
        </linearGradient>
      </defs>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="url(#hg)" stroke="currentColor" stroke-width="1.5"/>
    </svg>`;

  return (
    Array(full).fill(starSVG('star-filled')).join('') +
    (half ? halfSVG : '') +
    Array(empty).fill(starSVG('star-empty')).join('')
  );
}

// Змінено: приймає id замість card.dataset,
// бо dessert-list.js рендерить картки тільки з data-id
export async function openModal(id) {
  const overlay          = document.getElementById('modalOverlay');
  const closeBtn         = document.getElementById('modalClose');
  const modalImg         = document.getElementById('modalImg');
  const modalTag         = document.getElementById('modalTag');
  const modalTitle       = document.getElementById('modalTitle');
  const modalPrice       = document.getElementById('modalPrice');
  const modalStars       = document.getElementById('modalStars');
  const modalDesc        = document.getElementById('modalDesc');
  const modalIngredients = document.getElementById('modalIngredients');

  const dessert = await getDessertsById(id);

  modalImg.src               = dessert.image;
  modalImg.alt               = dessert.name;
  modalTag.textContent       = dessert.category?.name ?? '';
  modalTitle.textContent     = dessert.name;
  modalPrice.textContent     = `${dessert.price} грн`;
  modalStars.innerHTML       = buildStars(parseFloat(dessert.rating ?? 0));
  modalDesc.textContent      = dessert.description;
  modalIngredients.innerHTML = `<strong>Склад:</strong> ${dessert.ingredients ?? ''}`;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function initDessertModal() {
  const overlay       = document.getElementById('modalOverlay');
  const closeBtn      = document.getElementById('modalClose');
  const modalOrderBtn = document.getElementById('modalOrderBtn');
  const modalTitle    = document.getElementById('modalTitle');

  // Змінено: слухаємо клік на контейнері через делегування,
  // бо картки .dessert-list-item рендеряться динамічно з API
  const dessertList = document.querySelector('.dessert-list');
  dessertList.addEventListener('click', async (e) => {
    const btn = e.target.closest('.dessert-list-btn');
    if (!btn) return;
    const card = btn.closest('.dessert-list-item');
    if (!card) return;
    await openModal(card.dataset.id);
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  modalOrderBtn.addEventListener('click', () => {
    alert(`Додано до замовлення: ${modalTitle.textContent}`);
    closeModal();
  });
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('DOMContentLoaded', initDessertModal);