import{a as P,i as E,S as $,N as x,P as O,A as T}from"./assets/vendor-t7rkesM2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const L=P.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),v=async(s={})=>(await L.get("/desserts",{params:s})).data,q=async()=>(await L.get("/categories")).data,g=document.querySelector(".dessert-list-select"),_=document.querySelector(".dessert-categories-list"),M=document.querySelector(".loader"),b=document.querySelector(".dessert-list"),o=document.querySelector(".dessert-load-btn");let c=1;const l=8;let d="all";const f=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",D);g.addEventListener("change",C);_.addEventListener("change",C);o.addEventListener("click",A);b.addEventListener("click",B);async function D(){w();try{const s=await q(),e=[{name:"Всі десерти",_id:"all"},...s];if(!e.length){n("Помилка завантаження");return}I(e),j(e);const t=await v({page:c,limit:l});if(!t.desserts.length){n("Помилка завантаження");return}m(t.desserts);const r=Math.ceil(t.totalItems/l);o.classList.remove("is-hidden"),c>=r?o.disabled=!0:o.disabled=!1}catch{n("Помилка завантаження")}finally{y()}}async function C(s){if(w(),k(),d=s.target.value,!d){n("Помилка завантаження");return}c=1,b.innerHTML="";try{const e={page:c,limit:l};d!=="all"&&(e.category=d);const t=await v(e);if(!t.desserts.length){n("Помилка завантаження");return}m(t.desserts);const r=Math.ceil(t.totalItems/l);o.classList.remove("is-hidden"),c>=r?o.disabled=!0:o.disabled=!1}catch{n("Помилка завантаження")}finally{y()}}async function A(){w(),o.disabled=!0,c+=1,k();try{const s={page:c,limit:l};d!=="all"&&(s.category=d);const e=await v(s);if(!e.desserts.length){n("Помилка завантаження");return}m(e.desserts);const r=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:r*1,behavior:"smooth"});const a=Math.ceil(e.totalItems/l);o.classList.remove("is-hidden"),c>=a?o.disabled=!0:o.disabled=!1}catch{n("Помилка завантаження")}finally{y()}}function B(s){const e=s.target.closest(".dessert-list-btn");if(!e)return;const t=e.closest(".dessert-list-item");t&&t.dataset.id}function I(s){const e=s.map(({name:t,_id:r})=>`
    <option value="${r}">${t}</option>`).join("");g.innerHTML=e}function j(s){const e=s.map(({name:t,_id:r})=>`
   <label for="${r}" class="dessert-category-label">
        <input ${r==="all"?"checked":""}
        id="${r}" type="radio" name="category" 
        value="${r}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${t}
        </span>
      </label>
      `).join("");_.innerHTML=e}function m(s){const e=s.map(({name:t,_id:r,image:a,price:i,category:u,description:S})=>`
  <li class="dessert-list-item" data-id="${r}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${a}" alt="${t}">
        </div>
        <p class="dessert-list-category">${u.name}</p>
        <h3 class="dessert-list-product">${t}</h3>
        <p class="dessert-list-description">${S}</p>
        <span class="dessert-list-price">${i} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="/img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");b.insertAdjacentHTML("beforeend",e)}function w(){M.classList.remove("is-hidden")}function y(){M.classList.add("is-hidden")}function k(){o.classList.add("is-hidden")}g.addEventListener("mousedown",()=>{f.classList.add("is-open")});g.addEventListener("change",()=>{f.classList.remove("is-open")});g.addEventListener("blur",()=>{f.classList.remove("is-open")});function n(s){E.error({message:s,theme:"dark",backgroundColor:"#c07979"})}let p=null;function h(){window.innerWidth>=768?p||(p=new $(".about_us__swiper",{modules:[x,O],loop:!1,slidesPerView:2,spaceBetween:24,observer:!0,observeParents:!0,observeSlideChildren:!0,watchSlidesProgress:!0,watchOverflow:!0,updateOnWindowResize:!0,navigation:{nextEl:".about_us__btn--next",prevEl:".about_us__btn--prev",disabledClass:"swiper-button-disabled"},pagination:{el:".about_us__pagination",type:"bullets",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},grabCursor:!0,allowTouchMove:!0})):p&&(p.destroy(!0,!0),p=null)}document.addEventListener("DOMContentLoaded",()=>{h(),window.addEventListener("resize",h)});setTimeout(h,100);const H=document.querySelector(".accordion-wrapper"),N=`<div class="accordion-container">
    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          1. Які способи оплати ви приймаєте?

          <svg class="accordion-icon" width="32" height="32">
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
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
            <use href="/img/icons/sprite.svg#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Ми завжди раді зворотному зв'язку! Якщо у вас виникли питання, скарги або пропозиції, будь ласка, напишіть нам на електронну пошту [Вказати email] або зателефонуйте. Ваша думка допомагає нам ставати кращими.
        </p>
      </div>
    </div>
  </div>`;H.insertAdjacentHTML("beforeend",N);new T(".accordion-container");
//# sourceMappingURL=index.js.map
