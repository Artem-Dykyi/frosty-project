function t(t,e,o,s){Object.defineProperty(t,e,{get:o,set:s,enumerable:!0,configurable:!0})}var e=globalThis,o={},s={},r=e.parcelRequire332b;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in s){var e=s[t];delete s[t];var r={id:t,exports:{}};return o[t]=r,e.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){s[t]=e},e.parcelRequire332b=r);var c=r.register;c("l9cwF",function(e,o){t(e.exports,"setToLocalStorage",()=>s),t(e.exports,"getFromLocalStorage",()=>r);let s=(t,e)=>{let o=JSON.stringify(e);localStorage.setItem(t,o)},r=t=>{if(Object.keys(localStorage).includes(t))return JSON.parse(localStorage.getItem(t))}}),c("j5vBa",function(t,e){document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".footer_subscribe-box"),e=document.getElementById("footerSubscribeInput"),o=document.querySelector(".subscribe_modal-backdrop"),s=document.querySelector(".already-sub__modal");t.addEventListener("submit",async function(t){if(t.preventDefault(),!e.checkValidity())return void e.reportValidity();let r=e.value.trim();try{let t=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r})}),c=await t.json();t.ok?(e.value="",o.classList.remove("hidden")):(console.log("Error response:",c),s.classList.remove("hidden"))}catch(t){console.log("error:",t),s.classList.remove("hidden")}})})}),c("eOtyb",function(t,e){var o=r("l9cwF");let s=document.querySelector(".header__text"),c=0,a=(0,o.getFromLocalStorage)("productsBasket");c=Array.isArray(a)?a.length:0,s.textContent=`CART(${c})`});var a=r("l9cwF");const l="productsBasket";fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>{if(!t.ok)throw Error("Error api");return t.json()}).then(t=>{let e=document.querySelector(".discount_list");t.sort(()=>.5-Math.random()).slice(0,2).forEach(t=>{let o=document.createElement("li");o.classList.add("discount_item"),o.setAttribute("id",t._id),o.innerHTML=`
        <div class="discount__circle">
          <svg class="discount__icon" width="18" height="18">
            <use href="#leaf"></use>
          </svg>
        </div>
        <img src="${t.img}" alt="${t.name}"  class="discount_card-img">
        <h3 class="discount_card-title">${t.name}</h3>
        <p class="discount_card-text">$${t.price}</p>
        <button class="discount_button" data-id="${t._id}">
          <svg class="discount_button-svg">
            <use href="#basket"> </use>
          </svg>
        </button>

      `,e.appendChild(o)})}).catch(t=>{console.error("Fetch error:",t)}),document.querySelector(".discount_list").addEventListener("click",t=>{let e=t.target.closest(".discount_button");if(!e)return;let o=e.dataset.id,s=(0,a.getFromLocalStorage)(l)||[];s.includes(o)||(s.push(o),(0,a.setToLocalStorage)(l,s)),"function"==typeof renderCart&&renderCart()});const n=async(t,e,o,s)=>{let r=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}`;o&&(r+=`&${o}=${s}`),console.log(r+="&page=1&limit=9");try{return await fetch(r).then(t=>t.json())}catch(t){return t}};var a=r("l9cwF");const i=t=>{let e="";return t.map(t=>{e+=`<li class="products__item" id="${t._id}">
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
            ${u(t)}
          </div>
        </div>
      </li>`}),e},d=(0,a.getFromLocalStorage)("productsBasket"),u=t=>{let e;return void 0!==d&&d.includes(t._id)?`<button class="products__btn products__btn--checked">
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
            </button>`},p=document.querySelector("#filter-name-input"),_=document.querySelector("#filter-catagories-input"),m=document.querySelector("#categories-filter"),g=document.querySelector("#filter-order-input"),y=document.querySelector("#order-filter"),b=document.querySelector("#products-list"),h=document.querySelector("#products-nothing"),v=document.querySelector("#products-blocked"),S=document.querySelector("#name-category-blocked");let f="";p.addEventListener("input",()=>{L(p.value,f,g.value,p.value)}),_.addEventListener("focus",()=>{m.style.display="block"}),m.addEventListener("click",t=>{t.target.closest(".filter__desc")&&(_.value=t.target.textContent,f=t.target.parentElement.id,m.style.display="none",L(p.value,f,g.value,t.target.textContent))}),_.addEventListener("blur",()=>{setTimeout(()=>{m.style.display="none"},200)}),g.addEventListener("focus",()=>{y.style.display="block"}),y.addEventListener("click",t=>{t.target.closest(".filter__variant")&&(g.value=t.target.textContent,f=t.target.parentElement.id,m.style.display="none",L(p.value,f,g.value,t.target.textContent))}),g.addEventListener("blur",()=>{setTimeout(()=>{y.style.display="none"},200)});const L=(t,e,o,s)=>{let r="",c="";"A to Z"===o&&(r="byABC",c=!0),"Z to A"===o&&(r="byABC",c=!1),"Cheap"===o&&(r="byPrice",c=!0),"Expensive"===o&&(r="byPrice",c=!1),"Popular"===o&&(r="byPopularity",c=!0),"Not popular"===o&&(r="byPopularity",c=!1),"Show all"===o&&(r="byABC",c=!0),"Show_all"===e&&(e=""),"Breads_/_Bakery"===e||"Meat_&_Seafood"===e?(h.style.display="none",v.style.display="flex",S.textContent=s,b.innerHTML=""):n(t,e,r,c).then(t=>{0===t.results.length?(v.style.display="none",h.style.display="flex",b.innerHTML=""):(v.style.display="none",h.style.display="none",b.innerHTML=i(t.results))})};r("j5vBa"),r("eOtyb");const q=document.querySelector("#pagination__right"),k=document.querySelector("#pagination__right--two"),C=document.querySelector("#pagination__left"),$=document.querySelector("#pagination__left--two"),E=document.querySelector(".products__list"),x=document.querySelector(".pagination__centers"),w="https://food-boutique.b.goit.study/api/products";let T=1,F=1;async function B(t,e){let o=await fetch(`${t}?page=${e}&limit=9`),s=await o.json();console.log(s),F=s.totalPages;let r=i(s.results||s);E&&(E.innerHTML=r),1===T?(C.classList.add("pagination__arrow--disabled"),$.classList.add("pagination__arrow--disabled")):(C.classList.remove("pagination__arrow--disabled"),$.classList.remove("pagination__arrow--disabled")),T===F?(q.classList.add("pagination__arrow--disabled"),k.classList.add("pagination__arrow--disabled")):(q.classList.remove("pagination__arrow--disabled"),k.classList.remove("pagination__arrow--disabled")),function(t,e){let o="";if(F<=4)for(let t=1;t<=F;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
        <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
      </li>`;else if(e<=3){for(let t=1;t<=4;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`;o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}else if(e>=F-2){o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=F-3;t<=F;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`}else{o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=e-1;t<=e+2;t++)o+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`;o+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}x.innerHTML=o}(0,e)}q.addEventListener("click",()=>{T<F&&B(w,++T)}),C.addEventListener("click",()=>{T>1&&B(w,--T)}),k.addEventListener("click",()=>{T<F&&B(w,T=F)}),$.addEventListener("click",()=>{T>1&&B(w,T=1)}),B(w,T);var a=r("l9cwF");const O="productsBasket";fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>{if(!t.ok)throw Error("Network response was not ok");return t.json()}).then(t=>{let e=document.querySelector(".popular_list");t.forEach(t=>{let o=document.createElement("li");o.classList.add("popular_item"),o.setAttribute("id",t._id),o.innerHTML=`
        <h3 class="popular_card-title" >${t.name} </h3>
        <img src="${t.img}" alt="${t.name}" class="popular_card-img">
        <div class="button-box">       
          <button class="popular_button"  data-id="${t._id}">
            <svg class="popular_button-svg">
              <use href="#basket"></use>
            </svg>
          </button>
        </div>
        <p class="popularCardText">Category: <span class="popular_card-outline">${t.category}</span></p>
        <p class="popularCardText">Size: <span class="popular_card-outline">${t.size}</span></p>
        <p class="popularCardText">Popularity: <span class="popular_card-outline">${t.popularity}</span></p>
      `,e.appendChild(o)})}).catch(t=>{console.error("Fetch error:",t)}),document.querySelector(".popular_list").addEventListener("click",t=>{let e=t.target.closest(".popular_button");if(!e)return;let o=e.dataset.id,s=(0,a.getFromLocalStorage)(O)||[];s.includes(o)||(s.push(o),(0,a.setToLocalStorage)(O,s)),"function"==typeof renderCart&&renderCart()});const j=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products?page=1&limit=9").then(t=>t.json())}catch(t){return t}};var a=r("l9cwF");const M=document.querySelector("#products-list"),A="productsBasket";j().then(t=>{M.innerHTML=i(t.results)}),M.addEventListener("click",t=>{let e=t.target.closest(".products__btn");if(t.target.closest(".products__btn")){if(void 0===(0,a.getFromLocalStorage)(A)){let e=[];e.push(t.target.closest("li").id),(0,a.setToLocalStorage)(A,e)}else{let e=(0,a.getFromLocalStorage)(A);e.includes(t.target.closest("li").id)||(e.push(t.target.closest("li").id),(0,a.setToLocalStorage)(A,e))}e.classList.add("products__btn--checked")}});const P=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}};var a=r("l9cwF");const N=document.querySelector("#products-list"),z=document.querySelector(".backdrop-products"),H=document.querySelector("#close-modal-product"),I=document.querySelector(".modal-products__btn"),D="productsBasket";N.addEventListener("click",t=>{t.target.closest("li")&&!t.target.closest(".products__btn")&&P(t.target.closest("li").id).then(e=>{document.querySelector(".modal-products").id=e._id,document.querySelector(".modal-products__img").src=e.img,document.querySelector(".modal-products__img").alt=e.name,document.querySelector(".modal-products__name").textContent=e.name,document.querySelector("#pr-catagory").textContent=e.category,document.querySelector("#pr-size").textContent=e.size,document.querySelector("#pr-popularity").textContent=e.popularity,document.querySelector(".modal-products__desc").textContent=e.desc,document.querySelector(".modal-products__cost").textContent=`$${e.price}`,t.target.closest("li").lastElementChild.lastElementChild.lastElementChild.classList.contains("products__btn--checked")&&I.classList.add("modal-products__btn--checked"),z.classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll")})}),H.addEventListener("click",()=>{document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",z.classList.add("is-hidden"),I.classList.remove("modal-products__btn--checked"),document.querySelector("body").classList.remove("no-scroll")}),z.addEventListener("click",t=>{t.target.closest(".modal-products")||(document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",z.classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll"))}),I.addEventListener("click",t=>{if(void 0===(0,a.getFromLocalStorage)(D)){let e=[];e.push(t.target.closest("li").id),(0,a.setToLocalStorage)(D,e)}else{let e=(0,a.getFromLocalStorage)(D);e.includes(t.target.closest(".modal-products").id)||(e.push(t.target.closest(".modal-products").id),(0,a.setToLocalStorage)(D,e))}I.classList.add("modal-products__btn--checked"),document.querySelector(`li[id='${t.target.closest(".modal-products").id}']`).lastElementChild.lastElementChild.lastElementChild.classList.add("products__btn--checked")});const J=document.querySelector(".footer_subscribe-box"),R=document.querySelector(".subscribe_modal-backdrop"),U=document.querySelector(".subscribe_modal-button"),V=document.querySelector(".already-sub__modal"),Z=document.querySelector(".already-sub__logo-icon");J.addEventListener("submit",t=>{t.preventDefault();let e=J.querySelector('input[type="email"]').value.trim();if(!e)return;let o=localStorage.getItem("subscribedEmails"),s=o?JSON.parse(o):[];if(s.includes(e)){V.classList.remove("hidden"),document.body.classList.add("no-scroll"),J.reset();return}s.push(e),localStorage.setItem("subscribedEmails",JSON.stringify(s)),J.reset(),R.classList.remove("hidden"),document.body.classList.add("no-scroll")}),U.addEventListener("click",()=>{R.classList.add("hidden"),document.body.classList.remove("no-scroll")}),Z.addEventListener("click",()=>{V.classList.add("hidden"),document.body.classList.remove("no-scroll")});
//# sourceMappingURL=frosty-project.87456b9a.js.map
