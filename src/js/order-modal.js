import { orderDessert } from './services/api/api.js';

let modal, backdrop, closeBtn, form, submitBtn;
let initialized = false;

function init() {
  if (initialized) return;

  modal     = document.getElementById('contact-modal');
  backdrop  = modal?.querySelector('.modal__backdrop');
  closeBtn  = modal?.querySelector('.modal__close-btn');
  form      = document.getElementById('contact-form');
  submitBtn = form?.querySelector('.modal__submit-btn');

  if (!modal || !form) return;

  initialized = true;

  backdrop.addEventListener('click', closeContactModal);
  closeBtn.addEventListener('click', closeContactModal);
  form.addEventListener('focusout', e => { if (e.target.name) validateField(e.target); });
  form.addEventListener('input', e => { if (e.target.classList.contains('is-invalid')) validateField(e.target); });
  form.addEventListener('submit', handleSubmit);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeContactModal();
  });
}

export function openContactModal(dessert) {
  init();

  if (!modal) {
    console.error('contact-modal не знайдено в DOM');
    return;
  }

  if (dessert?.id) {
    form.dataset.dessertId = dessert.id;
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  form.querySelector('input')?.focus();
}

export function closeContactModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
  form.reset();
  clearAllErrors();
  delete form.dataset.dessertId;
  delete form.dataset.dessertName;
}

const validators = {
  name(value) {
    if (!value.trim()) return "Ім'я є обов'язковим полем";
    if (value.trim().length < 2) return "Ім'я повинно містити щонайменше 2 символи";
    return null;
  },
  phone(value) {
    if (!value.trim()) return 'Номер телефону є обов\'язковим полем';
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length < 10) return 'Введіть коректний номер телефону';
    return null;
  },
  comment(value) {
    if (!value.trim()) return 'Коментар є обов\'язковим полем';
    return null;
  },
};

function setFieldError(input, message) {
  const errorEl = input.closest('.form-field')?.querySelector('.form-field__error');
  if (!errorEl) return;
  if (message) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    errorEl.textContent = message;
  } else {
    input.classList.remove('is-invalid');
    if (input.value.trim()) input.classList.add('is-valid');
    errorEl.textContent = '';
  }
}

function clearAllErrors() {
  form.querySelectorAll('.form-field__input').forEach(input => {
    input.classList.remove('is-invalid', 'is-valid');
    const errorEl = input.closest('.form-field')?.querySelector('.form-field__error');
    if (errorEl) errorEl.textContent = '';
  });
}

function validateField(input) {
  const validator = validators[input.name];
  if (!validator) return true;
  const error = validator(input.value);
  setFieldError(input, error);
  return !error;
}

function validateForm() {
  let isValid = true;
  form.querySelectorAll('[name]').forEach(input => {
    if (!validateField(input)) isValid = false;
  });
  return isValid;
}

function setLoading(state) {
  submitBtn.classList.toggle('is-loading', state);
  submitBtn.disabled = state;
}

function showToast(message, type) {
  document.querySelector('.order-toast')?.remove();
  const toast = document.createElement('div');
  toast.classList.add('order-toast', 'order-toast--' + type);
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('order-toast--visible'), 10);
  setTimeout(() => {
    toast.classList.remove('order-toast--visible');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

async function handleSubmit(event) {
  event.preventDefault();
  if (!validateForm()) return;
  const formData = new FormData(form);
  const payload = {
    name:    formData.get('name').trim(),
    phone:   formData.get('phone').trim(),
    comment: formData.get('comment').trim(),
  };
  if (form.dataset.dessertId) payload.dessertId = form.dataset.dessertId;
  setLoading(true);
  try {
    await orderDessert(payload);
    closeContactModal();
    showToast('Дякуємо! Ваше замовлення прийнято. Менеджер зв\'яжеться з вами незабаром.', 'success');
  } catch (error) {
    console.error(error);
    showToast('Щось пішло не так. Будь ласка, спробуйте ще раз.', 'error');
  } finally {
    setLoading(false);
  }
}