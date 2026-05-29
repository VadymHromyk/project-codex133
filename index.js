import{a as ee,i as b,R as j,S as z,N as F,P as N,A as te}from"./assets/vendor-DvTBHtpq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const I={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};I.openModalBtn.addEventListener("click",S);I.closeModalBtn.addEventListener("click",S);document.querySelectorAll(".mobile-nav-item, .mob-btn-shop").forEach(e=>{e.addEventListener("click",S)});function S(){I.modal.classList.toggle("is-open")}const i="/project-codex133/assets/sprite-DppQYqKj.svg",w=ee.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),M=async(e={})=>(await w.get("/desserts",{params:e})).data,se=async e=>(await w.get(`/desserts/${e}`)).data,ae=async()=>(await w.get("/categories")).data,ne=async(e={})=>(await w.get("/feedbacks",{params:e})).data,re=async e=>(await w.post("/orders",e)).data,R="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%230b0803'%20fill-opacity='0.2'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",G="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cdefs%3e%3clinearGradient%20id='halfGradient'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='0%25'%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20/%3e%3cstop%20offset='50%25'%20stop-color='%230b0803'%20stop-opacity='0.2'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23halfGradient)'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e";let u,D,P,o,k;function U(){u=document.getElementById("contact-modal"),D=u.querySelector(".modal__backdrop"),P=u.querySelector(".modal__close-btn"),o=document.getElementById("contact-form"),k=o.querySelector(".modal__submit-btn"),D.addEventListener("click",E),P.addEventListener("click",E),o.addEventListener("focusout",function(e){const t=e.target;t.name&&B(t)}),o.addEventListener("input",function(e){const t=e.target;t.classList.contains("is-invalid")&&B(t)}),o.addEventListener("submit",ue)}document.addEventListener("DOMContentLoaded",U);document.addEventListener("keydown",function(e){e.key==="Escape"&&u&&u.classList.contains("is-open")&&E()});function oe(e){u||U(),e&&(o.dataset.dessertId=e.id,o.dataset.dessertName=e.name),u.classList.add("is-open"),document.body.style.overflow="hidden",o.querySelector("input").focus()}function E(){u.classList.remove("is-open"),document.body.style.overflow="",o.reset(),le(),delete o.dataset.dessertId,delete o.dataset.dessertName}const ce={name(e){return e.trim()?e.trim().length<2?"Ім'я повинно містити щонайменше 2 символи":null:"Ім'я є обов'язковим полем"},phone(e){return e.trim()?e.replace(/\D/g,"").length<10?"Введіть коректний номер телефону":null:"Номер телефону є обов'язковим полем"},comment(e){return e.trim()?e.trim().length<2?"Коментар повинен містити щонайменше 2 символи":null:"Коментар є обов'язковим полем"}};function ie(e,t){const s=e.closest(".form-field").querySelector(".form-field__error");t?(e.classList.add("is-invalid"),e.classList.remove("is-valid"),s.textContent=t):(e.classList.remove("is-invalid"),e.value.trim()&&e.classList.add("is-valid"),s.textContent="")}function le(){o.querySelectorAll(".form-field__input").forEach(function(t){t.classList.remove("is-invalid","is-valid");const s=t.closest(".form-field").querySelector(".form-field__error");s.textContent=""})}function B(e){const t=ce[e.name];if(!t)return!0;const s=t(e.value);return ie(e,s),!s}function de(){const e=o.querySelectorAll("[name]");let t=!0;return e.forEach(function(s){B(s)||(t=!1)}),t}function A(e){k.classList.toggle("is-loading",e),k.disabled=e}async function ue(e){if(e.preventDefault(),!de())return;const t=new FormData(o),s={name:t.get("name").trim(),phone:t.get("phone").trim().replace("+",""),comment:t.get("comment").trim()};o.dataset.dessertId&&(s.dessertId=o.dataset.dessertId),A(!0);try{await re(s),E(),b.success({message:"Дякуємо! Ваше замовлення прийнято. Менеджер зв'яжеться з вами незабаром.",position:"bottomCenter",backgroundColor:"#7fc0bf",messageColor:"#fff",timeout:3500})}catch(a){console.error(a),b.error({message:"Щось пішло не так. Будь ласка, спробуйте ще раз.",position:"bottomCenter",backgroundColor:"#d50000",messageColor:"#fff",timeout:3500})}finally{A(!1)}}let H=null;async function me(e){const t=document.getElementById("modalOverlay");document.getElementById("modal");const s=document.getElementById("modalClose"),a=document.getElementById("modalOrderBtn"),n=document.getElementById("modalImg");document.getElementById("modalTag");const r=document.getElementById("modalTitle"),l=document.getElementById("modalPrice"),g=document.getElementById("modalStars"),J=document.getElementById("modalDesc"),X=document.getElementById("modalIngredients");if(t)try{n.src="",n.alt="";const d=await se(e);H=d._id,n.src=d.image,n.alt=d.name,r.textContent=d.name,l.textContent=`${d.price} грн`,J.textContent=d.description,X.innerHTML=`<strong>Склад:</strong> ${d.composition??""}`,g.innerHTML="",new j(g,{readOnly:!0,score:d.rate||0,half:!0,halfShow:!0,starType:"img",path:"",starOn:R,starOff:V,starHalf:G}).init(),t.classList.add("active"),document.body.style.overflow="hidden",s.focus(),s.addEventListener("click",()=>L(t),{once:!0}),t.addEventListener("click",Z=>{Z.target===t&&L(t)},{once:!0}),a.addEventListener("click",()=>{L(t),oe({id:H})},{once:!0})}catch{b.error({message:"Не вдалося завантажити десерт",theme:"dark",backgroundColor:"#c07979"})}}function L(e){e.classList.remove("active"),document.body.style.overflow=""}document.addEventListener("keydown",e=>{if(e.key==="Escape"){const t=document.getElementById("modalOverlay");t!=null&&t.classList.contains("active")&&L(t)}});const v=document.querySelector(".dessert-list-select"),W=document.querySelector(".dessert-categories-list"),K=document.querySelector(".loader"),x=document.querySelector(".dessert-list"),c=document.querySelector(".dessert-load-btn");let m=1;const h=8;let f="all";const $=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",pe);v.addEventListener("change",Q);W.addEventListener("change",Q);c.addEventListener("click",ge);x.addEventListener("click",he);async function pe(){q();try{const e=await ae(),t=[{name:"Всі десерти",_id:"all"},...e];if(!t.length){p("Помилка завантаження");return}ve(t),ye(t);const s=await M({page:m,limit:h});if(!s.desserts.length){p("Помилка завантаження");return}O(s.desserts);const a=Math.ceil(s.totalItems/h);c.classList.remove("is-hidden"),m>=a?c.disabled=!0:c.disabled=!1}catch{p("Помилка завантаження")}finally{T()}}async function Q(e){if(q(),Y(),f=e.target.value,fe(f),!f){p("Помилка завантаження");return}m=1,x.innerHTML="";try{const t={page:m,limit:h};f!=="all"&&(t.category=f);const s=await M(t);if(!s.desserts.length){p("Помилка завантаження");return}O(s.desserts);const a=Math.ceil(s.totalItems/h);c.classList.remove("is-hidden"),m>=a?c.disabled=!0:c.disabled=!1}catch{p("Помилка завантаження")}finally{T()}}async function ge(){q(),c.disabled=!0,m+=1,Y();try{const e={page:m,limit:h};f!=="all"&&(e.category=f);const t=await M(e);if(!t.desserts.length){p("Помилка завантаження");return}O(t.desserts);const a=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:a*1,behavior:"smooth"});const n=Math.ceil(t.totalItems/h);c.classList.remove("is-hidden"),m>=n?c.disabled=!0:c.disabled=!1}catch{p("Помилка завантаження")}finally{T()}}function fe(e){v.value=e;const t=document.querySelector(`.dessert-category-input[value="${e}"]`);t&&(t.checked=!0)}function he(e){const t=e.target.closest(".dessert-list-btn");if(!t)return;const s=t.closest(".dessert-list-item");if(!s)return;const a=s.dataset.id;me(a)}function ve(e){const t=e.map(({name:s,_id:a})=>`
    <option value="${a}">${s}</option>`).join("");v.innerHTML=t}function ye(e){const t=e.map(({name:s,_id:a})=>`
   <label class="dessert-category-label">
        <input ${a==="all"?"checked":""}
        id="${a}" type="radio" name="category" 
        value="${a}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${s}
        </span>
      </label>
      `).join("");W.innerHTML=t}function O(e){const t=e.map(({name:s,_id:a,image:n,price:r,category:l,description:g})=>`
  <li class="dessert-list-item" data-id="${a}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${n}" alt="${s}" loading="lazy">
        </div>
        <p class="dessert-list-category">${l.name}</p>
        <h3 class="dessert-list-product">${s}</h3>
        <p class="dessert-list-description">${g}</p>
        <span class="dessert-list-price">${r} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="${i}#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");x.insertAdjacentHTML("beforeend",t)}function q(){K.classList.remove("is-hidden")}function T(){K.classList.add("is-hidden")}function Y(){c.classList.add("is-hidden")}v.addEventListener("mousedown",()=>{$.classList.add("is-open")});v.addEventListener("change",()=>{$.classList.remove("is-open")});v.addEventListener("blur",()=>{$.classList.remove("is-open")});function p(e){b.error({message:e,theme:"dark",backgroundColor:"#c07979"})}let y=null;function be(e,t=150){let s;return(...a)=>{clearTimeout(s),s=setTimeout(()=>e.apply(this,a),t)}}function C(){window.innerWidth>=768?y||(y=new z("#about-us .about_us__swiper",{modules:[F,N],loop:!1,observer:!0,observeParents:!0,observeSlideChildren:!0,watchSlidesProgress:!0,watchOverflow:!0,updateOnWindowResize:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:2,spaceBetween:24}},navigation:{nextEl:"#about-us .about_us__btn--next",prevEl:"#about-us .about_us__btn--prev",disabledClass:"swiper-button-disabled"},pagination:{el:"#about-us .about_us__pagination",type:"bullets",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},grabCursor:!0,allowTouchMove:!0})):y&&(y.destroy(!0,!0),y=null)}document.addEventListener("DOMContentLoaded",()=>{C(),window.addEventListener("resize",be(C))});setTimeout(C,100);let _=null;async function we(){try{const e=await ne();if(!e)throw new Error("Помилка завантаження даних");const t=(Array.isArray(e)?e:e.feedbacks||[]).slice(0,10),s=document.getElementById("feedbacks-container");if(!s)return;s.innerHTML="",t.forEach((a,n)=>{const r=document.createElement("div");r.classList.add("swiper-slide");const l=`raty-stars-${n}`;r.innerHTML=`
        <div class="testimonial-card">
          <div class="star-rating js-raty-stars" id="${l}"
          data-score="${a.rate||5}"></div>
          <p class="review-text">"${a.description||""}"</p>
          <h4 class="client-name">${a.author||"Anonim"}</h4>
        </div>
      `,s.appendChild(r);const g=r.querySelector(".js-raty-stars");g&&new j(g,{score:a.rate||5,readOnly:!0,half:!0,halfShow:!0,starType:"img",path:"",starOn:R,starOff:V,starHalf:G}).init()}),Le()}catch{b.error({title:"Помилка",message:"Помилка завантаження відгуків:",position:"topRight"})}}function Le(){_&&_.destroy(!0,!0),_=new z(".gallery__swiper",{modules:[F,N],direction:"horizontal",slidesPerView:1,spaceBetween:20,grabCursor:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},pagination:{el:".gallery__pagination",clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:24}}})}document.addEventListener("DOMContentLoaded",()=>{we()});const Ee=document.querySelector(".accordion-wrapper"),_e=`<div class="accordion-container">
    <div class="ac">
      <h2 class="ac-header">
        <button type="button" class="ac-trigger">
          1. Які способи оплати ви приймаєте?

          <svg class="accordion-icon" width="32" height="32">
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
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
            <use href="${i}#keyboard_arrow_down"></use>
          </svg>
        </button>
      </h2>
      <div class="ac-panel">
        <p class="ac-text">
          Ми завжди раді зворотному зв'язку! Якщо у вас виникли питання, скарги або пропозиції, будь ласка, напишіть нам на електронну пошту [Вказати email] або зателефонуйте. Ваша думка допомагає нам ставати кращими.
        </p>
      </div>
    </div>
  </div>`;Ee.insertAdjacentHTML("beforeend",_e);new te(".accordion-container");
//# sourceMappingURL=index.js.map
