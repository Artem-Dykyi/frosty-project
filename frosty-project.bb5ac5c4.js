function e(e,t,o,s){Object.defineProperty(e,t,{get:o,set:s,enumerable:!0,configurable:!0})}var t=globalThis,o={},s={},r=t.parcelRequire332b;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){s[e]=t},t.parcelRequire332b=r);var c=r.register;c("l9cwF",function(t,o){e(t.exports,"setToLocalStorage",()=>s),e(t.exports,"getFromLocalStorage",()=>r);let s=(e,t)=>{let o=JSON.stringify(t);localStorage.setItem(e,o)},r=e=>{if(Object.keys(localStorage).includes(e))return JSON.parse(localStorage.getItem(e))}}),c("j5vBa",function(e,t){document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".footer_subscribe-box"),t=document.getElementById("footerSubscribeInput"),o=document.querySelector(".subscribe_modal-backdrop"),s=document.querySelector(".already-sub__modal");e.addEventListener("submit",async function(e){if(e.preventDefault(),!t.checkValidity())return void t.reportValidity();let r=t.value.trim();try{let e=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})}),c=await e.json();e.ok?(t.value="",o.classList.remove("hidden")):(console.log("Error response:",c),s.classList.remove("hidden"))}catch(e){console.log("error:",e),s.classList.remove("hidden")}})})}),c("eOtyb",function(e,t){var o=r("l9cwF");let s=document.querySelector(".header__text"),c=0,a=(0,o.getFromLocalStorage)("productsBasket");c=Array.isArray(a)?a.length:0,s.textContent=`CART(${c})`}),fetch("https://food-boutique.b.goit.study/api/products/discount").then(e=>{if(!e.ok)throw Error("Error api");return e.json()}).then(e=>{let t=document.querySelector(".discount_list");e.sort(()=>.5-Math.random()).slice(0,2).forEach(e=>{let o=document.createElement("li");o.classList.add("discount_item"),o.innerHTML=`
       <div class="discount__circle">
          <svg class="discount__icon" width="18" height="18">
            <use href="#leaf"></use>
          </svg>
        </div>
        <img src="${e.img}" alt="${e.name}" class="discount_card-img">
        <h3 class="discount_card-title">${e.name}</h3>
        <p class="discount_card-text">$${e.price}</p>
        <button class="discount_button">
          <svg class="discount_button-svg">
            <use href="#basket"></use>
          </svg>
        </button>
      `,t.appendChild(o)})}).catch(e=>{console.error("Fetch error:",e)});const a=async(e,t,o,s)=>{let r=`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${t}`;o&&(r+=`&${o}=${s}`),console.log(r+="&page=1&limit=9");try{return await fetch(r).then(e=>e.json())}catch(e){return e}};var l=r("l9cwF");const n=e=>{let t="";return e.map(e=>{t+=`<li class="products__item" id="${e._id}">
        <div class="products__content">
          <img
            class="products__photo"
            alt="${e.name}"
            src="${e.img}"
          />
        </div>
        <div class="products__text">
          <h2 class="products__name">${e.name}</h2>
          <ul class="products__datas">
            <li class="products__data">
              <p class="products__catag">Category:</p>
              <p class="products__info">${e.category}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Size:</p>
              <p class="products__info">${e.size}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Popularity:</p>
              <p class="products__info">${e.popularity}</p>
            </li>
          </ul>
          <div class="products__down">
            <p class="products__cost">$${e.price}</p>
            ${d(e)}
          </div>
        </div>
      </li>`}),t},i=(0,l.getFromLocalStorage)("productsBasket"),d=e=>{let t;return void 0!==i&&i.includes(e._id)?`<button class="products__btn products__btn--checked">
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
            </button>`},u=document.querySelector("#filter-name-input"),p=document.querySelector("#filter-catagories-input"),_=document.querySelector("#categories-filter"),m=document.querySelector("#filter-order-input"),g=document.querySelector("#order-filter"),y=document.querySelector("#products-list"),b=document.querySelector("#products-nothing");u.addEventListener("input",()=>{h(u.value,p.value,m.value)}),p.addEventListener("focus",()=>{_.style.display="block"}),_.addEventListener("click",e=>{e.target.closest(".filter__desc")&&(p.value=e.target.textContent,_.style.display="none",h(u.value,p.value,m.value))}),p.addEventListener("blur",()=>{setTimeout(()=>{_.style.display="none"},200)}),m.addEventListener("focus",()=>{g.style.display="block"}),g.addEventListener("click",e=>{e.target.closest(".filter__desc")&&(m.value=e.target.textContent,g.style.display="none",h(u.value,p.value,m.value))}),m.addEventListener("blur",()=>{setTimeout(()=>{g.style.display="none"},200)});const h=(e,t,o)=>{let s="",r="";"A to Z"===o&&(s="byABC",r=!0),"Z to A"===o&&(s="byABC",r=!1),"Cheap"===o&&(s="byPrice",r=!0),"Expensive"===o&&(s="byPrice",r=!1),"Popular"===o&&(s="byPopularity",r=!0),"Not popular"===o&&(s="byPopularity",r=!1),"Show all"===o&&(s="byABC",r=!0),"Show all"===t&&(t=""),a(e,t,s,r).then(e=>{0===e.results.length?(b.style.display="flex",console.log("s"),y.innerHTML=""):(b.style.display="none",y.innerHTML=n(e.results))})};r("j5vBa"),r("eOtyb");const v=document.querySelector("#pagination__right"),S=document.querySelector("#pagination__right--two"),f=document.querySelector("#pagination__left"),L=document.querySelector("#pagination__left--two"),q=document.querySelector(".products__list"),$=document.querySelector(".pagination__centers"),k="https://food-boutique.b.goit.study/api/products";let C=1,E=1;async function x(e,t){let o=await fetch(`${e}?page=${t}&limit=9`),s=await o.json();console.log(s),E=s.totalPages;let r=n(s.results||s);q&&(q.innerHTML=r),1===C?(f.classList.add("pagination__arrow--disabled"),L.classList.add("pagination__arrow--disabled")):(f.classList.remove("pagination__arrow--disabled"),L.classList.remove("pagination__arrow--disabled")),C===E?(v.classList.add("pagination__arrow--disabled"),S.classList.add("pagination__arrow--disabled")):(v.classList.remove("pagination__arrow--disabled"),S.classList.remove("pagination__arrow--disabled")),function(e,t){let o="";if(E<=4)for(let e=1;e<=E;e++)o+=`<li class="pagination__center${e===t?" pagination__center--active":""}">
        <p class="pagination__number${e===t?" pagination__number--active":""}">${e}</p>
      </li>`;else if(t<=3){for(let e=1;e<=4;e++)o+=`<li class="pagination__center${e===t?" pagination__center--active":""}">
          <p class="pagination__number${e===t?" pagination__number--active":""}">${e}</p>
        </li>`;o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}else if(t>=E-2){o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let e=E-3;e<=E;e++)o+=`<li class="pagination__center${e===t?" pagination__center--active":""}">
          <p class="pagination__number${e===t?" pagination__number--active":""}">${e}</p>
        </li>`}else{o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let e=t-1;e<=t+2;e++)o+=`<li class="pagination__center${e===t?" pagination__center--active":""}">
          <p class="pagination__number${e===t?" pagination__number--active":""}">${e}</p>
        </li>`;o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}$.innerHTML=o}(0,t)}v.addEventListener("click",()=>{C<E&&x(k,++C)}),f.addEventListener("click",()=>{C>1&&x(k,--C)}),S.addEventListener("click",()=>{C<E&&x(k,C=E)}),L.addEventListener("click",()=>{C>1&&x(k,C=1)}),x(k,C),fetch("https://food-boutique.b.goit.study/api/products/popular").then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{let t=document.querySelector(".popular_list");e.forEach(e=>{let o=document.createElement("li");o.classList.add("popular_item"),o.innerHTML=`
      <h3 class="popular_card-title">${e.name}</h3>
       <img src="${e.img}" alt="${e.name}" class="popular_card-img">
      <div class="button-box">       
        <button class="popular_button">
          <svg class="popular_button-svg">
            <use href="#basket"></use>
          </svg>
        </button>
        </div>
        <p class="popularCardText">Category: <span class="popular_card-outline">${e.category}</span></p>
        <p class="popularCardText">Size: <span class="popular_card-outline">${e.size}</span></p>
        <p class="popularCardText">Popularity: <span class="popular_card-outline">${e.popularity}</span></p>

        
      `,t.appendChild(o)})}).catch(e=>{console.error("Fetch error:",e)});const w=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products?page=1&limit=9").then(e=>e.json())}catch(e){return e}};var l=r("l9cwF");const T=document.querySelector("#products-list"),F="productsBasket";w().then(e=>{T.innerHTML=n(e.results)}),T.addEventListener("click",e=>{let t=e.target.closest(".products__btn");if(e.target.closest(".products__btn")){if(void 0===(0,l.getFromLocalStorage)(F)){let t=[];t.push(e.target.closest("li").id),(0,l.setToLocalStorage)(F,t)}else{let t=(0,l.getFromLocalStorage)(F);t.includes(e.target.closest("li").id)||(t.push(e.target.closest("li").id),(0,l.setToLocalStorage)(F,t))}t.classList.add("products__btn--checked")}});const O=async e=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${e}`).then(e=>e.json())}catch(e){return e}};var l=r("l9cwF");const j=document.querySelector("#products-list"),P=document.querySelector(".backdrop-products"),B=document.querySelector("#close-modal-product"),M=document.querySelector(".modal-products__btn"),N="productsBasket";j.addEventListener("click",e=>{e.target.closest("li")&&!e.target.closest(".products__btn")&&O(e.target.closest("li").id).then(t=>{document.querySelector(".modal-products").id=t._id,document.querySelector(".modal-products__img").src=t.img,document.querySelector(".modal-products__img").alt=t.name,document.querySelector(".modal-products__name").textContent=t.name,document.querySelector("#pr-catagory").textContent=t.category,document.querySelector("#pr-size").textContent=t.size,document.querySelector("#pr-popularity").textContent=t.popularity,document.querySelector(".modal-products__desc").textContent=t.desc,document.querySelector(".modal-products__cost").textContent=`$${t.price}`,e.target.closest("li").lastElementChild.lastElementChild.lastElementChild.classList.contains("products__btn--checked")&&M.classList.add("modal-products__btn--checked"),P.classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll")})}),B.addEventListener("click",()=>{document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",P.classList.add("is-hidden"),M.classList.remove("modal-products__btn--checked"),document.querySelector("body").classList.remove("no-scroll")}),P.addEventListener("click",e=>{e.target.closest(".modal-products")||(document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",P.classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll"))}),M.addEventListener("click",e=>{if(void 0===(0,l.getFromLocalStorage)(N)){let t=[];t.push(e.target.closest("li").id),(0,l.setToLocalStorage)(N,t)}else{let t=(0,l.getFromLocalStorage)(N);t.includes(e.target.closest(".modal-products").id)||(t.push(e.target.closest(".modal-products").id),(0,l.setToLocalStorage)(N,t))}M.classList.add("modal-products__btn--checked"),document.querySelector(`li[id='${e.target.closest(".modal-products").id}']`).lastElementChild.lastElementChild.lastElementChild.classList.add("products__btn--checked")});const z=document.querySelector(".footer_subscribe-box"),A=document.querySelector(".subscribe_modal-backdrop"),H=document.querySelector(".subscribe_modal-button"),I=document.querySelector(".already-sub__modal"),D=document.querySelector(".already-sub__logo-icon");z.addEventListener("submit",e=>{e.preventDefault();let t=z.querySelector('input[type="email"]').value.trim();if(!t)return void alert("Please enter a valid email address.");let o=localStorage.getItem("subscribedEmails"),s=o?JSON.parse(o):[];if(s.includes(t)){I.classList.remove("hidden"),document.body.classList.add("no-scroll"),z.reset();return}s.push(t),localStorage.setItem("subscribedEmails",JSON.stringify(s)),z.reset(),A.classList.remove("hidden"),document.body.classList.add("no-scroll")}),H.addEventListener("click",()=>{A.classList.add("hidden"),document.body.classList.remove("no-scroll")}),D.addEventListener("click",()=>{I.classList.add("hidden"),document.body.classList.remove("no-scroll")});
//# sourceMappingURL=frosty-project.bb5ac5c4.js.map
