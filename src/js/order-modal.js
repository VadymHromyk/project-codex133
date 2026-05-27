import '../css/order-modal.css';
import { orderDessert } from './services/api/api.js';

const modal = document.getElementById('contact-modal');
const backdrop = modal.querySelector('.modal__backdrop');
const closeBtn = modal.querySelector('.modal__close-btn');
const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('.modal__submit-btn');

export function openContactModal(dessert) {
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

function showToast(message, type) {
  const existingToast = document.querySelector('.order-toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.classList.add('order-toast', 'order-toast--' + type);
  toast.setAttribute('role', 'status');
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(function() {
    toast.classList.add('order-toast--visible');
  }, 10);

  setTimeout(function() {
    toast.classList.remove('order-toast--visible');
    setTimeout(function() {
      toast.remove();
    }, 300);
  }, 3500);
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
    showToast('Дякуємо! Ваше замовлення прийнято. Менеджер зв\'яжеться з вами незабаром.', 'success');
  } catch (error) {
    console.error(error);
    showToast('Щось пішло не так. Будь ласка, спробуйте ще раз.', 'error');
  } finally {
    setLoading(false);
  }
}



backdrop.addEventListener('click', closeContactModal);

closeBtn.addEventListener('click', closeContactModal);

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeContactModal();
  }
});

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

export { closeContactModal };
