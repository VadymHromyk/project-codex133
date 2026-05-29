import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Raty from 'raty-js';
import starOn from '../img/icons/star-on.svg';
import starOff from '../img/icons/star-off.svg';
import starHalf from '../img/icons/star-half.svg';

import { getDessertsById } from './services/api/api';
import { openContactModal } from './order-modal';

let currentDessertId = null;

export async function openModal(id) {
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modalClose');
  const modalOrderBtn = document.getElementById('modalOrderBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalStars = document.getElementById('modalStars');
  const modalDesc = document.getElementById('modalDesc');
  const modalIngredients = document.getElementById('modalIngredients');

  if (!overlay) return;

  try {
    const dessert = await getDessertsById(id);
    currentDessertId = dessert._id;

    modalImg.src = dessert.image;
    modalImg.alt = dessert.name;
    // modalTag.textContent       = dessert.category?.name ?? '';
    modalTitle.textContent = dessert.name;
    modalPrice.textContent = `${dessert.price} грн`;
    modalDesc.textContent = dessert.description;
    modalIngredients.innerHTML = `<strong>Склад:</strong> ${dessert.composition ?? ''}`;

    modalStars.innerHTML = '';
    new Raty(modalStars, {
      readOnly: true,
      score: dessert.rate || 0,
      half: true,
      halfShow: true,
      starType: 'img',
      path: '',
      starOn: starOn,
      starOff: starOff,
      starHalf: starHalf,
    }).init();

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();

    closeBtn.addEventListener('click', () => closeModal(overlay), {
      once: true,
    });
    overlay.addEventListener(
      'click',
      e => {
        if (e.target === overlay) closeModal(overlay);
      },
      { once: true }
    );
    modalOrderBtn.addEventListener(
      'click',
      () => {
        closeModal(overlay);
        openContactModal({ id: currentDessertId });
      },
      { once: true }
    );
  } catch {
    iziToast.error({
      message: 'Не вдалося завантажити десерт',
      theme: 'dark',
      backgroundColor: '#c07979',
    });
  }
}

function closeModal(overlay) {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('modalOverlay');
    if (overlay?.classList.contains('active')) closeModal(overlay);
  }
});
