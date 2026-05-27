import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getDessertsById } from './services/api/api';

// ── DOM refs (винесені за межі функцій) ───────────────────
const overlay          = document.getElementById('modalOverlay');
const closeBtn         = document.getElementById('modalClose');
const modalOrderBtn    = document.getElementById('modalOrderBtn');
const modalImg         = document.getElementById('modalImg');
const modalTag         = document.getElementById('modalTag');
const modalTitle       = document.getElementById('modalTitle');
const modalPrice       = document.getElementById('modalPrice');
const modalStars       = document.getElementById('modalStars');
const modalDesc        = document.getElementById('modalDesc');
const modalIngredients = document.getElementById('modalIngredients');

// ── Public API (імпортується в dessert-list.js) ───────────
export async function openModal(id) {
  try {
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
  } catch {
    iziToast.error({
      message: 'Не вдалося завантажити десерт',
      theme: 'dark',
      backgroundColor: '#c07979',
    });
  }
}

// ── Private ───────────────────────────────────────────────
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function buildStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  const starSVG = cls => `
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

// ── Listeners ─────────────────────────────────────────────
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

modalOrderBtn.addEventListener('click', () => {
  iziToast.success({
    message: `«${modalTitle.textContent}» додано до замовлення`,
    backgroundColor: '#ebfcfb',
    position: 'topRight',
  });
  closeModal();
});