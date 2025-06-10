function t(t,e,o,s){Object.defineProperty(t,e,{get:o,set:s,enumerable:!0,configurable:!0})}var e=globalThis,o={},s={},c=e.parcelRequire332b;null==c&&((c=function(t){if(t in o)return o[t].exports;if(t in s){var e=s[t];delete s[t];var c={id:t,exports:{}};return o[t]=c,e.call(c.exports,c,c.exports),c.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){s[t]=e},e.parcelRequire332b=c);var r=c.register;r("j5vBa",function(t,e){document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("subscribeForm"),e=document.getElementById("footerSubscribeInput"),o=document.querySelector(".subscribe_modal-backdrop"),s=document.querySelector(".already-sub__modal");t.addEventListener("submit",async function(t){if(t.preventDefault(),!e.checkValidity())return void e.reportValidity();let c=e.value.trim();try{let t=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c})}),r=await t.json();t.ok?(e.value="",o.classList.remove("hidden")):(console.log("Error response:",r),s.classList.remove("hidden"))}catch(t){console.log("error:",t),s.classList.remove("hidden")}})})}),r("eOtyb",function(t,e){}),r("l9cwF",function(e,o){t(e.exports,"setToLocalStorage",()=>s),t(e.exports,"getFromLocalStorage",()=>c);let s=(t,e)=>{let o=JSON.stringify(e);localStorage.setItem(t,o)},c=t=>{if(Object.keys(localStorage).includes(t))return JSON.parse(localStorage.getItem(t))}}),fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>{if(!t.ok)throw Error("Error api");return t.json()}).then(t=>{let e=document.querySelector(".discount_list");t.sort(()=>.5-Math.random()).slice(0,2).forEach(t=>{let o=document.createElement("li");o.classList.add("discount_item"),o.innerHTML=`
        <img src="${t.img}" alt="${t.name}" class="discount_card-img">
        <h3 class="discount_card-title">${t.name}</h3>
        <p class="discount_card-text">$${t.price}</p>
        <button class="discount_button">
          <svg class="discount_button-svg">
            <use href="#basket"></use>
          </svg>
        </button>
      `,e.appendChild(o)})}).catch(t=>{console.error("Fetch error:",t)}),c("j5vBa"),c("eOtyb");const a=document.querySelector("#pagination__right"),l=document.querySelector("#pagination__right--two"),i=document.querySelector("#pagination__left"),n=document.querySelector("#pagination__left--two"),d=document.querySelector(".products__list"),u=document.querySelector(".pagination__centers"),p="https://food-boutique.b.goit.study/api/products";let _=1,m=1;async function g(t,e){let o=await fetch(`${t}?page=${e}&limit=9`),s=await o.json();console.log(s),m=s.totalPages;let c="";(s.results||s).forEach(t=>{c+=`
    <li class="products__item">
        <div class="products__content">
          <img
            class="products__photo"
            alt=""
            src="${t.img}"
          />
        </div>
        <div class="products__text">
          <h2 class="products__name">${t.name}</h2>
          <ul class="products__datas">
            <li class="products__data">
              <p class="products__catag">Category: </p>
              <p class="products__info">${t.category.replace(/_/g," ")}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Size:</p>
              <p class="products__info">${t.size}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Popularity:</p>
              <p class="products__info">${t.popularity}</p>
            </li>
          </ul>
          <div class="products__down">
            <p class="products__cost">$${t.price}</p>
            <button class="products__btn">
              <svg class="products__icon" width="18" height="18">
                <use href="../images/icon.svg#basket"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`}),d&&(d.innerHTML=c),1===_?(i.classList.add("pagination__arrow--disabled"),n.classList.add("pagination__arrow--disabled")):(i.classList.remove("pagination__arrow--disabled"),n.classList.remove("pagination__arrow--disabled")),_===m?(a.classList.add("pagination__arrow--disabled"),l.classList.add("pagination__arrow--disabled")):(a.classList.remove("pagination__arrow--disabled"),l.classList.remove("pagination__arrow--disabled")),function(t,e){let o="";if(m<=4)for(let t=1;t<=m;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
        <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
      </li>`;else if(e<=3){for(let t=1;t<=4;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`;o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}else if(e>=m-2){o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=m-3;t<=m;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`}else{o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=e-1;t<=e+2;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`;o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}u.innerHTML=o}(0,e)}a.addEventListener("click",()=>{_<m&&g(p,++_)}),i.addEventListener("click",()=>{_>1&&g(p,--_)}),l.addEventListener("click",()=>{_<m&&g(p,_=m)}),n.addEventListener("click",()=>{_>1&&g(p,_=1)}),g(p,_),fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>{if(!t.ok)throw Error("Network response was not ok");return t.json()}).then(t=>{let e=document.querySelector(".popular_list");t.forEach(t=>{let o=document.createElement("li");o.classList.add("popular_item"),o.innerHTML=`

      
       
       
      <h3 class="popular_card-title">${t.name}</h3>
       <img src="${t.img}" alt="${t.name}" class="popular_card-img">
      <div class="button-box">       
        <button class="popular_button">
          <svg class="popular_button-svg">
            <use href="#basket"></use>
          </svg>
        </button>
        </div>
        <p class="popularCardText">Category: <span class="popular_card-outline">${t.category}</span></p>
        <p class="popularCardText">Size: <span class="popular_card-outline">${t.size}</span></p>
        <p class="popularCardText">Popularity: <span class="popular_card-outline">${t.popularity}</span></p>

        
      `,e.appendChild(o)})}).catch(t=>{console.error("Fetch error:",t)});const b=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products?page=1&limit=9").then(t=>t.json())}catch(t){return t}};var y=c("l9cwF");const h=t=>{let e="";return t.map(t=>{e+=`<li class="products__item" id="${t._id}">
        <div class="products__content">
          <img
            class="products__photo"
            alt="${t.name}"
            src="${t.img}"
          />
        </div>
        <div class="products__text">
          <h2 class="products__name">${t.name}</h2>
          <ul class="products__datas">
            <li class="products__data">
              <p class="products__catag">Category:</p>
              <p class="products__info">${t.category}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Size:</p>
              <p class="products__info">${t.size}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Popularity:</p>
              <p class="products__info">${t.popularity}</p>
            </li>
          </ul>
          <div class="products__down">
            <p class="products__cost">$${t.price}</p>
            ${S(t)}
          </div>
        </div>
      </li>`}),e},v=(0,y.getFromLocalStorage)("productsBasket"),S=t=>{let e;return void 0!==v&&v.includes(t._id)?`<button class="products__btn products__btn--checked">
              <svg class="products__icon" width="18" height="18">
                <use href="#basket"></use>
              </svg>
               <svg class="products__icon-2" width="18" height="18">
                <use href="#check"></use>
              </svg>
            </button>`:`<button class="products__btn">
              <svg class="products__icon" width="18" height="18">
                <use href="#basket"></use>
              </svg>
               <svg class="products__icon-2" width="18" height="18">
                <use href="#check"></use>
              </svg>
            </button>`};var y=c("l9cwF");const f=document.querySelector("#products-list"),L="productsBasket";b().then(t=>{f.innerHTML=h(t.results)}),f.addEventListener("click",t=>{let e=t.target.closest(".products__btn");if(t.target.closest(".products__btn")){if(void 0===(0,y.getFromLocalStorage)(L)){let e=[];e.push(t.target.closest("li").id),(0,y.setToLocalStorage)(L,e)}else{let e=(0,y.getFromLocalStorage)(L);e.includes(t.target.closest("li").id)||(e.push(t.target.closest("li").id),(0,y.setToLocalStorage)(L,e))}e.classList.add("products__btn--checked")}});const q=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}};var y=c("l9cwF");const $=document.querySelector("#products-list"),k=document.querySelector(".backdrop-products"),C=document.querySelector("#close-modal-product"),E=document.querySelector(".modal-products__btn"),x="productsBasket";$.addEventListener("click",t=>{t.target.closest("li")&&!t.target.closest(".products__btn")&&q(t.target.closest("li").id).then(e=>{document.querySelector(".modal-products").id=e._id,document.querySelector(".modal-products__img").src=e.img,document.querySelector(".modal-products__img").alt=e.name,document.querySelector(".modal-products__name").textContent=e.name,document.querySelector("#pr-catagory").textContent=e.category,document.querySelector("#pr-size").textContent=e.size,document.querySelector("#pr-popularity").textContent=e.popularity,document.querySelector(".modal-products__desc").textContent=e.desc,document.querySelector(".modal-products__cost").textContent=`$${e.price}`,t.target.closest("li").lastElementChild.lastElementChild.lastElementChild.classList.contains("products__btn--checked")&&E.classList.add("modal-products__btn--checked"),k.classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll")})}),C.addEventListener("click",()=>{document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",k.classList.add("is-hidden"),E.classList.remove("modal-products__btn--checked"),document.querySelector("body").classList.remove("no-scroll")}),k.addEventListener("click",t=>{t.target.closest(".modal-products")||(document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",k.classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll"))}),E.addEventListener("click",t=>{if(void 0===(0,y.getFromLocalStorage)(x)){let e=[];e.push(t.target.closest("li").id),(0,y.setToLocalStorage)(x,e)}else{let e=(0,y.getFromLocalStorage)(x);e.includes(t.target.closest(".modal-products").id)||(e.push(t.target.closest(".modal-products").id),(0,y.setToLocalStorage)(x,e))}E.classList.add("modal-products__btn--checked"),document.querySelector(`li[id='${t.target.closest(".modal-products").id}']`).lastElementChild.lastElementChild.lastElementChild.classList.add("products__btn--checked")});const w=document.querySelector(".footer_subscribe-box"),T=document.querySelector(".subscribe_modal-backdrop"),F=document.querySelector(".subscribe_modal-button"),O=document.querySelector(".already-sub__modal"),j=document.querySelector(".already-sub__logo-icon");w.addEventListener("submit",t=>{t.preventDefault();let e=w.querySelector('input[type="email"]').value.trim();if(!e)return void alert("Please enter a valid email address.");let o=localStorage.getItem("subscribedEmails"),s=o?JSON.parse(o):[];if(s.includes(e)){O.classList.remove("hidden"),document.body.classList.add("no-scroll"),w.reset();return}s.push(e),localStorage.setItem("subscribedEmails",JSON.stringify(s)),w.reset(),T.classList.remove("hidden"),document.body.classList.add("no-scroll")}),F.addEventListener("click",()=>{T.classList.add("hidden"),document.body.classList.remove("no-scroll")}),j.addEventListener("click",()=>{O.classList.add("hidden"),document.body.classList.remove("no-scroll")});
//# sourceMappingURL=frosty-project.8fe9c053.js.map
