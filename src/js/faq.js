import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iconSprite from '../img/icons/sprite.svg?url';

const accordionWrapper = document.querySelector('.accordion-wrapper');

const accordionMarcup = `<div class="accordion-container">
    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          1. Які способи оплати ви приймаєте?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Ми приймаємо оплату онлайн банківськими картками Visa та Mastercard, через платіжні системи Apple Pay та Google Pay, а також готівкою кур'єру при отриманні замовлення.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          2. Чи є у вас доставка?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Так, ми здійснюємо доставку по всьому місту. Вартість та умови доставки залежать від вашого району, деталі можна уточнити при оформленні замовлення.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          3. Як швидко здійснюється доставка?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Зазвичай доставка займає від 60 до 90 хвилин з моменту підтвердження замовлення. У пікові години час доставки може бути збільшений, про що ми вас обов'язково повідомимо.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          4. Чи можна забрати замовлення самостійно?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Так, ви можете забрати своє замовлення самостійно за адресою [Вказати адресу самовивозу] у робочі години магазину.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          5. Чи пропонуєте ви десерти для людей з особливими дієтичними потребами (безглютенові, безлактозні, веганські)?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Ми постійно розширюємо наш асортимент. Наразі у нас є обмежений вибір безглютенових та безлактозних десертів. Будь ласка, перегляньте наш каталог або зв'яжіться з нами для отримання детальної інформації.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          6. Як я можу зробити замовлення на індивідуальний торт?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Для замовлення індивідуального торта, будь ласка, зв'яжіться з нашим менеджером за телефоном [Вказати номер телефону] або залиште заявку на сайті. Ми обговоримо всі деталі дизайну, начинки та терміни виконання.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          7. Чи можна змінити або скасувати замовлення після його оформлення?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Якщо вам потрібно змінити або скасувати замовлення, будь ласка, негайно зв'яжіться з нами за телефоном. Можливість внесення змін залежить від етапу, на якому знаходиться ваше замовлення.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          8. Який термін зберігання ваших десертів?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Термін зберігання десертів залежить від їхнього типу та інгредієнтів. Зазвичай десерти рекомендується вживати протягом 24-72 годин. Точна інформація про термін зберігання вказана на упаковці кожного виробу.
        </p>
      </div>
    </div>

    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          9. Чи є у вас програма лояльності або знижки для постійних клієнтів?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Так, ми цінуємо наших постійних клієнтів! Деталі нашої програми лояльності та діючих акцій ви можете знайти на окремій сторінці нашого сайту або уточнити у менеджера.
        </p>
      </div>
    </div>

    <div class="ac last-element">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          10. Що робити, якщо у мене є скарга або пропозиція?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${iconSprite}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Ми завжди раді зворотному зв'язку! Якщо у вас виникли питання, скарги або пропозиції, будь ласка, напишіть нам на електронну пошту [Вказати email] або зателефонуйте. Ваша думка допомагає нам ставати кращими.
        </p>
      </div>
    </div>
  </div>`;

accordionWrapper.insertAdjacentHTML('beforeend', accordionMarcup);

new Accordion('.accordion-container');
