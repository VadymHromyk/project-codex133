import{a as A,i as E,S,N as C,P as B,R as D,A as I}from"./assets/vendor-B2TmBvB0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const w={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};w.openModalBtn.addEventListener("click",y);w.closeModalBtn.addEventListener("click",y);document.querySelectorAll(".mobile-nav-item, .mob-btn-shop").forEach(e=>{e.addEventListener("click",y)});function y(){w.modal.classList.toggle("is-open")}const c="/project-codex133/assets/sprite-DppQYqKj.svg",m=A.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),L=async(e={})=>(await m.get("/desserts",{params:e})).data,j=async()=>(await m.get("/categories")).data,H=async(e={})=>(await m.get("/feedbacks",{params:e})).data,h=document.querySelector(".dessert-list-select"),P=document.querySelector(".dessert-categories-list"),O=document.querySelector(".loader"),_=document.querySelector(".dessert-list"),n=document.querySelector(".dessert-load-btn");let i=1;const p=8;let u="all";const M=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",z);h.addEventListener("change",T);P.addEventListener("change",T);n.addEventListener("click",R);_.addEventListener("click",V);async function z(){$();try{const e=await j(),t=[{name:"Всі десерти",_id:"all"},...e];if(!t.length){l("Помилка завантаження");return}G(t),N(t);const s=await L({page:i,limit:p});if(!s.desserts.length){l("Помилка завантаження");return}k(s.desserts);const a=Math.ceil(s.totalItems/p);n.classList.remove("is-hidden"),i>=a?n.disabled=!0:n.disabled=!1}catch{l("Помилка завантаження")}finally{x()}}async function T(e){if($(),q(),u=e.target.value,!u){l("Помилка завантаження");return}i=1,_.innerHTML="";try{const t={page:i,limit:p};u!=="all"&&(t.category=u);const s=await L(t);if(!s.desserts.length){l("Помилка завантаження");return}k(s.desserts);const a=Math.ceil(s.totalItems/p);n.classList.remove("is-hidden"),i>=a?n.disabled=!0:n.disabled=!1}catch{l("Помилка завантаження")}finally{x()}}async function R(){$(),n.disabled=!0,i+=1,q();try{const e={page:i,limit:p};u!=="all"&&(e.category=u);const t=await L(e);if(!t.desserts.length){l("Помилка завантаження");return}k(t.desserts);const a=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:a*1,behavior:"smooth"});const r=Math.ceil(t.totalItems/p);n.classList.remove("is-hidden"),i>=r?n.disabled=!0:n.disabled=!1}catch{l("Помилка завантаження")}finally{x()}}function V(e){const t=e.target.closest(".dessert-list-btn");if(!t)return;const s=t.closest(".dessert-list-item");if(!s)return;const a=s.dataset.id;openModal(a)}function G(e){const t=e.map(({name:s,_id:a})=>`
    <option value="${a}">${s}</option>`).join("");h.innerHTML=t}function N(e){const t=e.map(({name:s,_id:a})=>`
   <label for="${a}" class="dessert-category-label">
        <input ${a==="all"?"checked":""}
        id="${a}" type="radio" name="category" 
        value="${a}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${s}
        </span>
      </label>
      `).join("");P.innerHTML=t}function k(e){const t=e.map(({name:s,_id:a,image:r,price:o,category:d,description:v})=>`
  <li class="dessert-list-item" data-id="${a}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${r}" alt="${s}">
        </div>
        <p class="dessert-list-category">${d.name}</p>
        <h3 class="dessert-list-product">${s}</h3>
        <p class="dessert-list-description">${v}</p>
        <span class="dessert-list-price">${o} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="${c}#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");_.insertAdjacentHTML("beforeend",t)}function $(){O.classList.remove("is-hidden")}function x(){O.classList.add("is-hidden")}function q(){n.classList.add("is-hidden")}h.addEventListener("mousedown",()=>{M.classList.add("is-open")});h.addEventListener("change",()=>{M.classList.remove("is-open")});h.addEventListener("blur",()=>{M.classList.remove("is-open")});function l(e){E.error({message:e,theme:"dark",backgroundColor:"#c07979"})}let g=null;function F(e,t=150){let s;return(...a)=>{clearTimeout(s),s=setTimeout(()=>e.apply(this,a),t)}}function f(){window.innerWidth>=768?g||(g=new S("#about-us .about_us__swiper",{modules:[C,B],loop:!1,observer:!0,observeParents:!0,observeSlideChildren:!0,watchSlidesProgress:!0,watchOverflow:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}},navigation:{nextEl:"#about-us .about_us__btn--next",prevEl:"#about-us .about_us__btn--prev",disabledClass:"swiper-button-disabled"},pagination:{el:"#about-us .about_us__pagination",type:"bullets",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},grabCursor:!0,allowTouchMove:!0})):g&&(g.destroy(!0,!0),g=null)}document.addEventListener("DOMContentLoaded",()=>{f(),window.addEventListener("resize",F(f))});setTimeout(f,100);const U="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",W="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20fill-opacity='0.2'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",K="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cdefs%3e%3clinearGradient%20id='halfGradient'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='0%25'%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20/%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20stop-opacity='0.2'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23halfGradient)'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e";let b=null;async function Q(){try{const e=await H();if(!e)throw new Error("Помилка завантаження даних");const t=(Array.isArray(e)?e:e.feedbacks||[]).slice(0,10),s=document.getElementById("feedbacks-container");if(!s)return;s.innerHTML="",t.forEach((a,r)=>{const o=document.createElement("div");o.classList.add("swiper-slide");const d=`raty-stars-${r}`;o.innerHTML=`
        <div class="testimonial-card">
          <div class="star-rating js-raty-stars" id="${d}"
          data-score="${a.rate||5}"></div>
          <p class="review-text">"${a.description||""}"</p>
          <h4 class="client-name">${a.author||"Anonim"}</h4>
        </div>
      `,s.appendChild(o);const v=o.querySelector(".js-raty-stars");v&&new D(v,{score:a.rate||5,readOnly:!0,half:!0,halfShow:!0,starType:"img",path:"",starOn:U,starOff:W,starHalf:K}).init()}),Y()}catch{E.error({title:"Помилка",message:"Помилка завантаження відгуків:",position:"topRight"})}}function Y(){b&&b.destroy(!0,!0),b=new S(".gallery__swiper",{modules:[C,B],direction:"horizontal",slidesPerView:1,spaceBetween:20,grabCursor:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},pagination:{el:".gallery__pagination",clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:24}}})}document.addEventListener("DOMContentLoaded",()=>{Q()});const J=document.querySelector(".accordion-wrapper"),X=`<div class="accordion-container">
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
  </div>`;J.insertAdjacentHTML("beforeend",X);new I(".accordion-container");
//# sourceMappingURL=index.js.map
