import{a as T,i as E,S,N as C,P as $,R as A,A as D}from"./assets/vendor-B2TmBvB0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const b={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};b.openModalBtn.addEventListener("click",w);b.closeModalBtn.addEventListener("click",w);document.querySelectorAll(".mobile-nav-item, .mob-btn-shop").forEach(e=>{e.addEventListener("click",w)});function w(){b.modal.classList.toggle("is-open")}const j="/project-codex133/assets/sprite-DppQYqKj.svg",m=T.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),y=async(e={})=>(await m.get("/desserts",{params:e})).data,H=async()=>(await m.get("/categories")).data,I=async(e={})=>(await m.get("/feedbacks",{params:e})).data,g=document.querySelector(".dessert-list-select"),B=document.querySelector(".dessert-categories-list"),O=document.querySelector(".loader"),L=document.querySelector(".dessert-list"),n=document.querySelector(".dessert-load-btn");let c=1;const u=8;let d="all";const _=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",z);g.addEventListener("change",P);B.addEventListener("change",P);n.addEventListener("click",R);L.addEventListener("click",G);async function z(){k();try{const e=await H(),t=[{name:"Всі десерти",_id:"all"},...e];if(!t.length){o("Помилка завантаження");return}N(t),V(t);const s=await y({page:c,limit:u});if(!s.desserts.length){o("Помилка завантаження");return}M(s.desserts);const a=Math.ceil(s.totalItems/u);n.classList.remove("is-hidden"),c>=a?n.disabled=!0:n.disabled=!1}catch{o("Помилка завантаження")}finally{x()}}async function P(e){if(k(),q(),d=e.target.value,!d){o("Помилка завантаження");return}c=1,L.innerHTML="";try{const t={page:c,limit:u};d!=="all"&&(t.category=d);const s=await y(t);if(!s.desserts.length){o("Помилка завантаження");return}M(s.desserts);const a=Math.ceil(s.totalItems/u);n.classList.remove("is-hidden"),c>=a?n.disabled=!0:n.disabled=!1}catch{o("Помилка завантаження")}finally{x()}}async function R(){k(),n.disabled=!0,c+=1,q();try{const e={page:c,limit:u};d!=="all"&&(e.category=d);const t=await y(e);if(!t.desserts.length){o("Помилка завантаження");return}M(t.desserts);const a=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:a*1,behavior:"smooth"});const r=Math.ceil(t.totalItems/u);n.classList.remove("is-hidden"),c>=r?n.disabled=!0:n.disabled=!1}catch{o("Помилка завантаження")}finally{x()}}function G(e){const t=e.target.closest(".dessert-list-btn");if(!t)return;const s=t.closest(".dessert-list-item");if(!s)return;const a=s.dataset.id;openModal(a)}function N(e){const t=e.map(({name:s,_id:a})=>`
    <option value="${a}">${s}</option>`).join("");g.innerHTML=t}function V(e){const t=e.map(({name:s,_id:a})=>`
   <label for="${a}" class="dessert-category-label">
        <input ${a==="all"?"checked":""}
        id="${a}" type="radio" name="category" 
        value="${a}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${s}
        </span>
      </label>
      `).join("");B.innerHTML=t}function M(e){const t=e.map(({name:s,_id:a,image:r,price:i,category:l,description:h})=>`
  <li class="dessert-list-item" data-id="${a}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${r}" alt="${s}">
        </div>
        <p class="dessert-list-category">${l.name}</p>
        <h3 class="dessert-list-product">${s}</h3>
        <p class="dessert-list-description">${h}</p>
        <span class="dessert-list-price">${i} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="${j}#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");L.insertAdjacentHTML("beforeend",t)}function k(){O.classList.remove("is-hidden")}function x(){O.classList.add("is-hidden")}function q(){n.classList.add("is-hidden")}g.addEventListener("mousedown",()=>{_.classList.add("is-open")});g.addEventListener("change",()=>{_.classList.remove("is-open")});g.addEventListener("blur",()=>{_.classList.remove("is-open")});function o(e){E.error({message:e,theme:"dark",backgroundColor:"#c07979"})}let p=null;function f(){window.innerWidth>=768?p||(p=new S(".about_us__swiper",{modules:[C,$],loop:!1,slidesPerView:2,spaceBetween:24,observer:!0,observeParents:!0,observeSlideChildren:!0,watchSlidesProgress:!0,watchOverflow:!0,updateOnWindowResize:!0,navigation:{nextEl:".about_us__btn--next",prevEl:".about_us__btn--prev",disabledClass:"swiper-button-disabled"},pagination:{el:".about_us__pagination",type:"bullets",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},grabCursor:!0,allowTouchMove:!0})):p&&(p.destroy(!0,!0),p=null)}document.addEventListener("DOMContentLoaded",()=>{f(),window.addEventListener("resize",f)});setTimeout(f,100);const F="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20fill-opacity='0.2'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",W="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cdefs%3e%3clinearGradient%20id='halfGradient'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='0%25'%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20/%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20stop-opacity='0.2'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23halfGradient)'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e";let v=null;async function K(){try{const e=await I();if(!e)throw new Error("Помилка завантаження даних");const t=(Array.isArray(e)?e:e.feedbacks||[]).slice(0,10),s=document.getElementById("feedbacks-container");if(!s)return;s.innerHTML="",t.forEach((a,r)=>{const i=document.createElement("div");i.classList.add("swiper-slide");const l=`raty-stars-${r}`;i.innerHTML=`
        <div class="testimonial-card">
          <div class="star-rating js-raty-stars" id="${l}"
          data-score="${a.rate||5}"></div>
          <p class="review-text">"${a.description||""}"</p>
          <h4 class="client-name">${a.author||"Anonim"}</h4>
        </div>
      `,s.appendChild(i);const h=i.querySelector(".js-raty-stars");h&&new A(h,{score:a.rate||5,readOnly:!0,half:!0,halfShow:!0,starType:"img",path:"",starOn:F,starOff:U,starHalf:W}).init()}),Q()}catch{E.error({title:"Помилка",message:"Помилка завантаження відгуків:",position:"topRight"})}}function Q(){v&&v.destroy(!0,!0),v=new S(".gallery__swiper",{modules:[C,$],direction:"horizontal",slidesPerView:1,spaceBetween:20,grabCursor:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},pagination:{el:".gallery__pagination",clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:24}}})}document.addEventListener("DOMContentLoaded",()=>{K()});const Y=document.querySelector(".accordion-wrapper"),J=`<div class="accordion-container">
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
  </div>`;Y.insertAdjacentHTML("beforeend",J);new D(".accordion-container");
//# sourceMappingURL=index.js.map
