import{a as V,i as b,S as D,N as T,P as j,R as N,A as G}from"./assets/vendor-B2TmBvB0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const M={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};M.openModalBtn.addEventListener("click",S);M.closeModalBtn.addEventListener("click",S);document.querySelectorAll(".mobile-nav-item, .mob-btn-shop").forEach(e=>{e.addEventListener("click",S)});function S(){M.modal.classList.toggle("is-open")}const c="/project-codex133/assets/sprite-DppQYqKj.svg",w=V.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),C=async(e={})=>(await w.get("/desserts",{params:e})).data,U=async()=>(await w.get("/categories")).data,W=async(e={})=>(await w.get("/feedbacks",{params:e})).data,K=async e=>(await w.post("/orders",e)).data,v=document.querySelector(".dessert-list-select"),H=document.querySelector(".dessert-categories-list"),F=document.querySelector(".loader"),x=document.querySelector(".dessert-list"),i=document.querySelector(".dessert-load-btn");let l=1;const g=8;let p="all";const $=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",Q);v.addEventListener("change",z);H.addEventListener("change",z);i.addEventListener("click",Y);x.addEventListener("click",J);async function Q(){q();try{const e=await U(),t=[{name:"Всі десерти",_id:"all"},...e];if(!t.length){d("Помилка завантаження");return}X(t),Z(t);const s=await C({page:l,limit:g});if(!s.desserts.length){d("Помилка завантаження");return}B(s.desserts);const a=Math.ceil(s.totalItems/g);i.classList.remove("is-hidden"),l>=a?i.disabled=!0:i.disabled=!1}catch{d("Помилка завантаження")}finally{O()}}async function z(e){if(q(),R(),p=e.target.value,!p){d("Помилка завантаження");return}l=1,x.innerHTML="";try{const t={page:l,limit:g};p!=="all"&&(t.category=p);const s=await C(t);if(!s.desserts.length){d("Помилка завантаження");return}B(s.desserts);const a=Math.ceil(s.totalItems/g);i.classList.remove("is-hidden"),l>=a?i.disabled=!0:i.disabled=!1}catch{d("Помилка завантаження")}finally{O()}}async function Y(){q(),i.disabled=!0,l+=1,R();try{const e={page:l,limit:g};p!=="all"&&(e.category=p);const t=await C(e);if(!t.desserts.length){d("Помилка завантаження");return}B(t.desserts);const a=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:a*1,behavior:"smooth"});const r=Math.ceil(t.totalItems/g);i.classList.remove("is-hidden"),l>=r?i.disabled=!0:i.disabled=!1}catch{d("Помилка завантаження")}finally{O()}}function J(e){const t=e.target.closest(".dessert-list-btn");if(!t)return;const s=t.closest(".dessert-list-item");if(!s)return;const a=s.dataset.id;openModal(a)}function X(e){const t=e.map(({name:s,_id:a})=>`
    <option value="${a}">${s}</option>`).join("");v.innerHTML=t}function Z(e){const t=e.map(({name:s,_id:a})=>`
   <label for="${a}" class="dessert-category-label">
        <input ${a==="all"?"checked":""}
        id="${a}" type="radio" name="category" 
        value="${a}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${s}
        </span>
      </label>
      `).join("");H.innerHTML=t}function B(e){const t=e.map(({name:s,_id:a,image:r,price:o,category:u,description:m})=>`
  <li class="dessert-list-item" data-id="${a}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${r}" alt="${s}">
        </div>
        <p class="dessert-list-category">${u.name}</p>
        <h3 class="dessert-list-product">${s}</h3>
        <p class="dessert-list-description">${m}</p>
        <span class="dessert-list-price">${o} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="${c}#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");x.insertAdjacentHTML("beforeend",t)}function q(){F.classList.remove("is-hidden")}function O(){F.classList.add("is-hidden")}function R(){i.classList.add("is-hidden")}v.addEventListener("mousedown",()=>{$.classList.add("is-open")});v.addEventListener("change",()=>{$.classList.remove("is-open")});v.addEventListener("blur",()=>{$.classList.remove("is-open")});function d(e){b.error({message:e,theme:"dark",backgroundColor:"#c07979"})}let h=null;function ee(e,t=150){let s;return(...a)=>{clearTimeout(s),s=setTimeout(()=>e.apply(this,a),t)}}function _(){window.innerWidth>=768?h||(h=new D("#about-us .about_us__swiper",{modules:[T,j],loop:!1,observer:!0,observeParents:!0,observeSlideChildren:!0,watchSlidesProgress:!0,watchOverflow:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}},navigation:{nextEl:"#about-us .about_us__btn--next",prevEl:"#about-us .about_us__btn--prev",disabledClass:"swiper-button-disabled"},pagination:{el:"#about-us .about_us__pagination",type:"bullets",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},grabCursor:!0,allowTouchMove:!0})):h&&(h.destroy(!0,!0),h=null)}document.addEventListener("DOMContentLoaded",()=>{_(),window.addEventListener("resize",ee(_))});setTimeout(_,100);const te="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",se="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20fill-opacity='0.2'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",ae="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cdefs%3e%3clinearGradient%20id='halfGradient'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='0%25'%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20/%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20stop-opacity='0.2'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23halfGradient)'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e";let L=null;async function re(){try{const e=await W();if(!e)throw new Error("Помилка завантаження даних");const t=(Array.isArray(e)?e:e.feedbacks||[]).slice(0,10),s=document.getElementById("feedbacks-container");if(!s)return;s.innerHTML="",t.forEach((a,r)=>{const o=document.createElement("div");o.classList.add("swiper-slide");const u=`raty-stars-${r}`;o.innerHTML=`
        <div class="testimonial-card">
          <div class="star-rating js-raty-stars" id="${u}"
          data-score="${a.rate||5}"></div>
          <p class="review-text">"${a.description||""}"</p>
          <h4 class="client-name">${a.author||"Anonim"}</h4>
        </div>
      `,s.appendChild(o);const m=o.querySelector(".js-raty-stars");m&&new N(m,{score:a.rate||5,readOnly:!0,half:!0,halfShow:!0,starType:"img",path:"",starOn:te,starOff:se,starHalf:ae}).init()}),oe()}catch{b.error({title:"Помилка",message:"Помилка завантаження відгуків:",position:"topRight"})}}function oe(){L&&L.destroy(!0,!0),L=new D(".gallery__swiper",{modules:[T,j],direction:"horizontal",slidesPerView:1,spaceBetween:20,grabCursor:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},pagination:{el:".gallery__pagination",clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:24}}})}document.addEventListener("DOMContentLoaded",()=>{re()});const ne=document.querySelector(".accordion-wrapper"),ie=`<div class="accordion-container">
    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          1. Які способи оплати ви приймаєте?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
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
            <use href="${c}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Ми завжди раді зворотному зв'язку! Якщо у вас виникли питання, скарги або пропозиції, будь ласка, напишіть нам на електронну пошту [Вказати email] або зателефонуйте. Ваша думка допомагає нам ставати кращими.
        </p>
      </div>
    </div>
  </div>`;ne.insertAdjacentHTML("beforeend",ie);new G(".accordion-container");let f,P,I,n,E;function ce(){f=document.getElementById("contact-modal"),P=f.querySelector(".modal__backdrop"),I=f.querySelector(".modal__close-btn"),n=document.getElementById("contact-form"),E=n.querySelector(".modal__submit-btn"),P.addEventListener("click",y),I.addEventListener("click",y),n.addEventListener("focusout",function(e){const t=e.target;t.name&&k(t)}),n.addEventListener("input",function(e){const t=e.target;t.classList.contains("is-invalid")&&k(t)}),n.addEventListener("submit",fe)}document.addEventListener("DOMContentLoaded",ce);document.addEventListener("keydown",function(e){e.key==="Escape"&&f&&f.classList.contains("is-open")&&y()});function y(){f.classList.remove("is-open"),document.body.style.overflow="",n.reset(),ue(),delete n.dataset.dessertId,delete n.dataset.dessertName}const le={name(e){return e.trim()?e.trim().length<2?"Ім'я повинно містити щонайменше 2 символи":null:"Ім'я є обов'язковим полем"},phone(e){return e.trim()?e.replace(/\D/g,"").length<10?"Введіть коректний номер телефону":null:"Номер телефону є обов'язковим полем"},comment(e){return e.trim()?null:"Коментар є обов'язковим полем"}};function de(e,t){const s=e.closest(".form-field").querySelector(".form-field__error");t?(e.classList.add("is-invalid"),e.classList.remove("is-valid"),s.textContent=t):(e.classList.remove("is-invalid"),e.value.trim()&&e.classList.add("is-valid"),s.textContent="")}function ue(){n.querySelectorAll(".form-field__input").forEach(function(t){t.classList.remove("is-invalid","is-valid");const s=t.closest(".form-field").querySelector(".form-field__error");s.textContent=""})}function k(e){const t=le[e.name];if(!t)return!0;const s=t(e.value);return de(e,s),!s}function pe(){const e=n.querySelectorAll("[name]");let t=!0;return e.forEach(function(s){k(s)||(t=!1)}),t}function A(e){E.classList.toggle("is-loading",e),E.disabled=e}async function fe(e){if(e.preventDefault(),!pe())return;const t=new FormData(n),s={name:t.get("name").trim(),phone:t.get("phone").trim(),comment:t.get("comment").trim()};n.dataset.dessertId&&(s.dessertId=n.dataset.dessertId),A(!0);try{await K(s),y(),b.success({message:"Дякуємо! Ваше замовлення прийнято. Менеджер зв'яжеться з вами незабаром.",position:"bottomCenter",backgroundColor:"#7fc0bf",messageColor:"#fff",timeout:3500})}catch(a){console.error(a),b.error({message:"Щось пішло не так. Будь ласка, спробуйте ще раз.",position:"bottomCenter",backgroundColor:"#d50000",messageColor:"#fff",timeout:3500})}finally{A(!1)}}function ge(e){e.classList.remove("active"),document.body.style.overflow=""}document.addEventListener("keydown",e=>{if(e.key==="Escape"){const t=document.getElementById("modalOverlay");t!=null&&t.classList.contains("active")&&ge(t)}});
//# sourceMappingURL=index.js.map
