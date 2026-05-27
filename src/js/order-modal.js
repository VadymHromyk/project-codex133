import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ── DOM refs ──────────────────────────────────────────────
const overlay   = document.getElementById('orderOverlay');
const closeBtn  = document.getElementById('orderClose');
const form      = document.getElementById('orderForm');
const nameInput = document.getElementById('orderName');
const phoneInput= document.getElementById('orderPhone');
const commentInput = document.getElementById('orderComment');

// ── Public API (імпортується в dessert-details-modal.js) ──
export function openOrderModal() {
  form.reset();
  clearErrors();
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  nameInput.focus();
}

// ── Private ───────────────────────────────────────────────
function closeOrderModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function clearErrors() {
  [nameInput, phoneInput, commentInput].forEach(el => el.classList.remove('error'));
}

function validate() {
  let valid = true;

  if (!nameInput.value.trim()) {
    nameInput.classList.add('error'); valid = false;
  } else {
    nameInput.classList.remove('error');
  }

  const phoneRaw = phoneInput.value.replace(/\D/g, '');
  if (phoneRaw.length < 10) {
    phoneInput.classList.add('error'); valid = false;
  } else {
    phoneInput.classList.remove('error');
  }

  if (!commentInput.value.trim()) {
    commentInput.classList.add('error'); valid = false;
  } else {
    commentInput.classList.remove('error');
  }

  return valid;
}

// ── Listeners ─────────────────────────────────────────────
closeBtn.addEventListener('click', closeOrderModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeOrderModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOrderModal(); });

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) {
    iziToast.error({
      message: 'Будь ласка, заповніть усі поля',
      theme: 'dark',
      backgroundColor: '#c07979',
    });
    return;
  }

  iziToast.success({
    message: 'Заявку надіслано! Ми зв\'яжемось з вами найближчим часом.',
    backgroundColor: '#ebfcfb',
    position: 'topRight',
  });

  closeOrderModal();
});