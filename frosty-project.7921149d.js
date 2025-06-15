function t(t,o,s,r){Object.defineProperty(t,o,{get:s,set:r,enumerable:!0,configurable:!0})}var o=globalThis,s={},r={},c=o.parcelRequire332b;null==c&&((c=function(t){if(t in s)return s[t].exports;if(t in r){var o=r[t];delete r[t];var c={id:t,exports:{}};return s[t]=c,o.call(c.exports,c,c.exports),c.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,o){r[t]=o},o.parcelRequire332b=c);var a=c.register;a("l9cwF",function(o,s){t(o.exports,"setToLocalStorage",()=>r),t(o.exports,"getFromLocalStorage",()=>c);let r=(t,o)=>{let s=JSON.stringify(o);localStorage.setItem(t,s)},c=t=>{if(Object.keys(localStorage).includes(t))return JSON.parse(localStorage.getItem(t))}}),a("j5vBa",function(t,o){document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".footer_subscribe-box"),o=document.getElementById("footerSubscribeInput"),s=document.querySelector(".subscribe_modal-backdrop"),r=document.querySelector(".already-sub__modal");t.addEventListener("submit",async function(t){if(t.preventDefault(),!o.checkValidity())return void o.reportValidity();let c=o.value.trim();try{let t=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c})}),a=await t.json();t.ok?(o.value="",s.classList.remove("hidden")):(console.log("Error response:",a),r.classList.remove("hidden"))}catch(t){console.log("error:",t),r.classList.remove("hidden")}})})}),a("eOtyb",function(t,o){var s=c("l9cwF");let r=document.querySelector(".header__text"),a=0,n=(0,s.getFromLocalStorage)("productsBasket");a=Array.isArray(n)?n.length:0,r.textContent=`CART(${a})`}),fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>{if(!t.ok)throw Error("Error api");return t.json()}).then(t=>{let o=document.querySelector(".discount_list");t.sort(()=>.5-Math.random()).slice(0,2).forEach(t=>{let s=document.createElement("li");s.classList.add("discount_item"),s.innerHTML=`
       <div class="discount__circle">
          <svg class="discount__icon" width="18" height="18">
            <use href="#leaf"></use>
          </svg>
        </div>
        <img src="${t.img}" alt="${t.name}" class="discount_card-img">
        <h3 class="discount_card-title">${t.name}</h3>
        <p class="discount_card-text">$${t.price}</p>
        <button class="discount_button">
          <svg class="discount_button-svg">
            <use href="#basket"></use>
          </svg>
        </button>
      `,o.appendChild(s)})}).catch(t=>{console.error("Fetch error:",t)});const n=async(t,o,s,r)=>{let c=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${o}`;s&&(c+=`&${s}=${r}`),console.log(c+="&page=1&limit=9");try{return await fetch(c).then(t=>t.json())}catch(t){return t}};var l=c("l9cwF");const i=t=>{let o="";return t.map(t=>{o+=`<li class="products__item" id="${t._id}">
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
      </li>`}),o},d=(0,l.getFromLocalStorage)("productsBasket"),u=t=>{let o;return void 0!==d&&d.includes(t._id)?`<button class="products__btn products__btn--checked">
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
            </button>`},p=document.querySelector("#filter-name-input"),_=document.querySelector("#filter-catagories-input"),m=document.querySelector("#categories-filter"),g=document.querySelector("#filter-order-input"),y=document.querySelector("#order-filter"),b=document.querySelector("#products-list"),h=document.querySelector("#products-nothing"),v=document.querySelector("#products-blocked"),S=document.querySelector("#name-category-blocked");let f="";p.addEventListener("input",()=>{L(p.value,f,g.value,e.target.textContent)}),_.addEventListener("focus",()=>{m.style.display="block"}),m.addEventListener("click",t=>{t.target.closest(".filter__desc")&&(_.value=t.target.textContent,f=t.target.parentElement.id,m.style.display="none",L(p.value,f,g.value,t.target.textContent))}),_.addEventListener("blur",()=>{setTimeout(()=>{m.style.display="none"},200)}),g.addEventListener("focus",()=>{y.style.display="block"}),y.addEventListener("click",t=>{t.target.closest(".filter__variant")&&(g.value=t.target.textContent,f=t.target.parentElement.id,m.style.display="none",L(p.value,f,g.value,t.target.textContent))}),g.addEventListener("blur",()=>{setTimeout(()=>{y.style.display="none"},200)});const L=(t,o,s,r)=>{let c="",a="";"A to Z"===s&&(c="byABC",a=!0),"Z to A"===s&&(c="byABC",a=!1),"Cheap"===s&&(c="byPrice",a=!0),"Expensive"===s&&(c="byPrice",a=!1),"Popular"===s&&(c="byPopularity",a=!0),"Not popular"===s&&(c="byPopularity",a=!1),"Show all"===s&&(c="byABC",a=!0),"Show_all"===o&&(o=""),"Breads_/_Bakery"===o||"Meat_&_Seafood"===o?(h.style.display="none",v.style.display="flex",S.textContent=r,b.innerHTML=""):n(t,o,c,a).then(t=>{0===t.results.length?(h.style.display="flex",b.innerHTML=""):(h.style.display="none",b.innerHTML=i(t.results))})};c("j5vBa"),c("eOtyb");const q=document.querySelector("#pagination__right"),k=document.querySelector("#pagination__right--two"),C=document.querySelector("#pagination__left"),x=document.querySelector("#pagination__left--two"),$=document.querySelector(".products__list"),E=document.querySelector(".pagination__centers"),w="https://food-boutique.b.goit.study/api/products";let T=1,F=1;async function O(t,o){let s=await fetch(`${t}?page=${o}&limit=9`),r=await s.json();console.log(r),F=r.totalPages;let c=i(r.results||r);$&&($.innerHTML=c),1===T?(C.classList.add("pagination__arrow--disabled"),x.classList.add("pagination__arrow--disabled")):(C.classList.remove("pagination__arrow--disabled"),x.classList.remove("pagination__arrow--disabled")),T===F?(q.classList.add("pagination__arrow--disabled"),k.classList.add("pagination__arrow--disabled")):(q.classList.remove("pagination__arrow--disabled"),k.classList.remove("pagination__arrow--disabled")),function(t,o){let s="";if(F<=4)for(let t=1;t<=F;t++)s+=`<li class="pagination__center${t===o?" pagination__center--active":""}">
        <p class="pagination__number${t===o?" pagination__number--active":""}">${t}</p>
      </li>`;else if(o<=3){for(let t=1;t<=4;t++)s+=`<li class="pagination__center${t===o?" pagination__center--active":""}">
          <p class="pagination__number${t===o?" pagination__number--active":""}">${t}</p>
        </li>`;s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}else if(o>=F-2){s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=F-3;t<=F;t++)s+=`<li class="pagination__center${t===o?" pagination__center--active":""}">
          <p class="pagination__number${t===o?" pagination__number--active":""}">${t}</p>
        </li>`}else{s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=o-1;t<=o+2;t++)s+=`<li class="pagination__center${t===o?" pagination__center--active":""}">
          <p class="pagination__number${t===o?" pagination__number--active":""}">${t}</p>
        </li>`;s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}E.innerHTML=s}(0,o)}q.addEventListener("click",()=>{T<F&&O(w,++T)}),C.addEventListener("click",()=>{T>1&&O(w,--T)}),k.addEventListener("click",()=>{T<F&&O(w,T=F)}),x.addEventListener("click",()=>{T>1&&O(w,T=1)}),O(w,T),fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>{if(!t.ok)throw Error("Network response was not ok");return t.json()}).then(t=>{let o=document.querySelector(".popular_list");t.forEach(t=>{let s=document.createElement("li");s.classList.add("popular_item"),s.innerHTML=`
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

        
      `,o.appendChild(s)})}).catch(t=>{console.error("Fetch error:",t)});const j=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products?page=1&limit=9").then(t=>t.json())}catch(t){return t}};var l=c("l9cwF");const B=document.querySelector("#products-list"),M="productsBasket";j().then(t=>{B.innerHTML=i(t.results)}),B.addEventListener("click",t=>{let o=t.target.closest(".products__btn");if(t.target.closest(".products__btn")){if(void 0===(0,l.getFromLocalStorage)(M)){let o=[];o.push(t.target.closest("li").id),(0,l.setToLocalStorage)(M,o)}else{let o=(0,l.getFromLocalStorage)(M);o.includes(t.target.closest("li").id)||(o.push(t.target.closest("li").id),(0,l.setToLocalStorage)(M,o))}o.classList.add("products__btn--checked")}});const P=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}};var l=c("l9cwF");const N=document.querySelector("#products-list"),z=document.querySelector(".backdrop-products"),A=document.querySelector("#close-modal-product"),H=document.querySelector(".modal-products__btn"),I="productsBasket";N.addEventListener("click",t=>{t.target.closest("li")&&!t.target.closest(".products__btn")&&P(t.target.closest("li").id).then(o=>{document.querySelector(".modal-products").id=o._id,document.querySelector(".modal-products__img").src=o.img,document.querySelector(".modal-products__img").alt=o.name,document.querySelector(".modal-products__name").textContent=o.name,document.querySelector("#pr-catagory").textContent=o.category,document.querySelector("#pr-size").textContent=o.size,document.querySelector("#pr-popularity").textContent=o.popularity,document.querySelector(".modal-products__desc").textContent=o.desc,document.querySelector(".modal-products__cost").textContent=`$${o.price}`,t.target.closest("li").lastElementChild.lastElementChild.lastElementChild.classList.contains("products__btn--checked")&&H.classList.add("modal-products__btn--checked"),z.classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll")})}),A.addEventListener("click",()=>{document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",z.classList.add("is-hidden"),H.classList.remove("modal-products__btn--checked"),document.querySelector("body").classList.remove("no-scroll")}),z.addEventListener("click",t=>{t.target.closest(".modal-products")||(document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",z.classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll"))}),H.addEventListener("click",t=>{if(void 0===(0,l.getFromLocalStorage)(I)){let o=[];o.push(t.target.closest("li").id),(0,l.setToLocalStorage)(I,o)}else{let o=(0,l.getFromLocalStorage)(I);o.includes(t.target.closest(".modal-products").id)||(o.push(t.target.closest(".modal-products").id),(0,l.setToLocalStorage)(I,o))}H.classList.add("modal-products__btn--checked"),document.querySelector(`li[id='${t.target.closest(".modal-products").id}']`).lastElementChild.lastElementChild.lastElementChild.classList.add("products__btn--checked")});const D=document.querySelector(".footer_subscribe-box"),J=document.querySelector(".subscribe_modal-backdrop"),R=document.querySelector(".subscribe_modal-button"),U=document.querySelector(".already-sub__modal"),V=document.querySelector(".already-sub__logo-icon");D.addEventListener("submit",t=>{t.preventDefault();let o=D.querySelector('input[type="email"]').value.trim();if(!o)return;let s=localStorage.getItem("subscribedEmails"),r=s?JSON.parse(s):[];if(r.includes(o)){U.classList.remove("hidden"),document.body.classList.add("no-scroll"),D.reset();return}r.push(o),localStorage.setItem("subscribedEmails",JSON.stringify(r)),D.reset(),J.classList.remove("hidden"),document.body.classList.add("no-scroll")}),R.addEventListener("click",()=>{J.classList.add("hidden"),document.body.classList.remove("no-scroll")}),V.addEventListener("click",()=>{U.classList.add("hidden"),document.body.classList.remove("no-scroll")});
//# sourceMappingURL=frosty-project.7921149d.js.map
