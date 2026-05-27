import{a as $,i as q,S as x,N as O,P as T,A as B}from"./assets/vendor-t7rkesM2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const v={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};v.openModalBtn.addEventListener("click",b);v.closeModalBtn.addEventListener("click",b);document.querySelectorAll(".mobile-nav-item, .mob-btn-shop").forEach(e=>{e.addEventListener("click",b)});function b(){v.modal.classList.toggle("is-open")}const D="/project-codex133/assets/sprite-DppQYqKj.svg",M=$.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),m=async(e={})=>(await M.get("/desserts",{params:e})).data,A=async()=>(await M.get("/categories")).data,g=document.querySelector(".dessert-list-select"),S=document.querySelector(".dessert-categories-list"),k=document.querySelector(".loader"),f=document.querySelector(".dessert-list"),i=document.querySelector(".dessert-load-btn");let n=1;const l=8;let d="all";const y=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",j);g.addEventListener("change",C);S.addEventListener("change",C);i.addEventListener("click",I);f.addEventListener("click",H);async function j(){L();try{const e=await A(),t=[{name:"Всі десерти",_id:"all"},...e];if(!t.length){c("Помилка завантаження");return}N(t),z(t);const s=await m({page:n,limit:l});if(!s.desserts.length){c("Помилка завантаження");return}w(s.desserts);const a=Math.ceil(s.totalItems/l);i.classList.remove("is-hidden"),n>=a?i.disabled=!0:i.disabled=!1}catch{c("Помилка завантаження")}finally{_()}}async function C(e){if(L(),E(),d=e.target.value,!d){c("Помилка завантаження");return}n=1,f.innerHTML="";try{const t={page:n,limit:l};d!=="all"&&(t.category=d);const s=await m(t);if(!s.desserts.length){c("Помилка завантаження");return}w(s.desserts);const a=Math.ceil(s.totalItems/l);i.classList.remove("is-hidden"),n>=a?i.disabled=!0:i.disabled=!1}catch{c("Помилка завантаження")}finally{_()}}async function I(){L(),i.disabled=!0,n+=1,E();try{const e={page:n,limit:l};d!=="all"&&(e.category=d);const t=await m(e);if(!t.desserts.length){c("Помилка завантаження");return}w(t.desserts);const a=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:a*1,behavior:"smooth"});const r=Math.ceil(t.totalItems/l);i.classList.remove("is-hidden"),n>=r?i.disabled=!0:i.disabled=!1}catch{c("Помилка завантаження")}finally{_()}}function H(e){const t=e.target.closest(".dessert-list-btn");if(!t)return;const s=t.closest(".dessert-list-item");if(!s)return;const a=s.dataset.id;openModal(a)}function N(e){const t=e.map(({name:s,_id:a})=>`
    <option value="${a}">${s}</option>`).join("");g.innerHTML=t}function z(e){const t=e.map(({name:s,_id:a})=>`
   <label for="${a}" class="dessert-category-label">
        <input ${a==="all"?"checked":""}
        id="${a}" type="radio" name="category" 
        value="${a}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${s}
        </span>
      </label>
      `).join("");S.innerHTML=t}function w(e){const t=e.map(({name:s,_id:a,image:r,price:o,category:u,description:P})=>`
  <li class="dessert-list-item" data-id="${a}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${r}" alt="${s}">
        </div>
        <p class="dessert-list-category">${u.name}</p>
        <h3 class="dessert-list-product">${s}</h3>
        <p class="dessert-list-description">${P}</p>
        <span class="dessert-list-price">${o} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="${D}#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t)}function L(){k.classList.remove("is-hidden")}function _(){k.classList.add("is-hidden")}function E(){i.classList.add("is-hidden")}g.addEventListener("mousedown",()=>{y.classList.add("is-open")});g.addEventListener("change",()=>{y.classList.remove("is-open")});g.addEventListener("blur",()=>{y.classList.remove("is-open")});function c(e){q.error({message:e,theme:"dark",backgroundColor:"#c07979"})}let p=null;function h(){window.innerWidth>=768?p||(p=new x(".about_us__swiper",{modules:[O,T],loop:!1,slidesPerView:2,spaceBetween:24,observer:!0,observeParents:!0,observeSlideChildren:!0,watchSlidesProgress:!0,watchOverflow:!0,updateOnWindowResize:!0,navigation:{nextEl:".about_us__btn--next",prevEl:".about_us__btn--prev",disabledClass:"swiper-button-disabled"},pagination:{el:".about_us__pagination",type:"bullets",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},grabCursor:!0,allowTouchMove:!0})):p&&(p.destroy(!0,!0),p=null)}document.addEventListener("DOMContentLoaded",()=>{h(),window.addEventListener("resize",h)});setTimeout(h,100);const R=document.querySelector(".accordion-wrapper"),U=`<div class="accordion-container">
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
  </div>`;R.insertAdjacentHTML("beforeend",U);new B(".accordion-container");
//# sourceMappingURL=index.js.map
