import '../css/order-modal.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { orderDessert } from './services/api/api.js';

let modal;
let backdrop;
let closeBtn;
let form;
let submitBtn;

function init() {
  modal = document.getElementById('contact-modal');
  backdrop = modal.querySelector('.modal__backdrop');
  closeBtn = modal.querySelector('.modal__close-btn');
  form = document.getElementById('contact-form');
  submitBtn = form.querySelector('.modal__submit-btn');

  backdrop.addEventListener('click', closeContactModal);
  closeBtn.addEventListener('click', closeContactModal);

  form.addEventListener('focusout', function(event) {
    const input = event.target;
    if (input.name) {
      validateField(input);
    }
  });

  form.addEventListener('input', function(event) {
    const input = event.target;
    if (input.classList.contains('is-invalid')) {
      validateField(input);
    }
  });

  form.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', init);

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal && modal.classList.contains('is-open')) {
    closeContactModal();
  }
});

export function openContactModal(dessert) {
  if (!modal) init();

  if (dessert) {
    form.dataset.dessertId = dessert.id;
    form.dataset.dessertName = dessert.name;
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  const firstInput = form.querySelector('input');
  firstInput.focus();
}

function closeContactModal() {
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
    if (!value.trim()) return "Номер телефону є обов'язковим полем";
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
  const errorEl = input.closest('.form-field').querySelector('.form-field__error');

  if (message) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    errorEl.textContent = message;
  } else {
    input.classList.remove('is-invalid');
    if (input.value.trim()) {
      input.classList.add('is-valid');
    }
    errorEl.textContent = '';
  }
}

function clearAllErrors() {
  const inputs = form.querySelectorAll('.form-field__input');

  inputs.forEach(function(input) {
    input.classList.remove('is-invalid', 'is-valid');
    const errorEl = input.closest('.form-field').querySelector('.form-field__error');
    errorEl.textContent = '';
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
  const inputs = form.querySelectorAll('[name]');
  let isValid = true;

  inputs.forEach(function(input) {
    const result = validateField(input);
    if (!result) {
      isValid = false;
    }
  });

  return isValid;
}

function setLoading(state) {
  submitBtn.classList.toggle('is-loading', state);
  submitBtn.disabled = state;
}

async function handleSubmit(event) {
  event.preventDefault();

  if (!validateForm()) return;

  const formData = new FormData(form);

  const payload = {
    name: formData.get('name').trim(),
    phone: formData.get('phone').trim(),
    comment: formData.get('comment').trim(),
  };

  if (form.dataset.dessertId) {
    payload.dessertId = form.dataset.dessertId;
  }

  setLoading(true);

  try {
    await orderDessert(payload);
    closeContactModal();
    iziToast.success({
      message: 'Дякуємо! Ваше замовлення прийнято. Менеджер зв\'яжеться з вами незабаром.',
      position: 'bottomCenter',
      backgroundColor: '#7fc0bf',
      messageColor: '#fff',
      timeout: 3500,
    });
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Щось пішло не так. Будь ласка, спробуйте ще раз.',
      position: 'bottomCenter',
      backgroundColor: '#d50000',
      messageColor: '#fff',
      timeout: 3500,
    });
  } finally {
    setLoading(false);
  }
}

export { closeContactModal };