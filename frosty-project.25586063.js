fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>{if(!t.ok)throw Error("Error api");return t.json()}).then(t=>{let e=document.querySelector(".discount_list");t.sort(()=>.5-Math.random()).slice(0,2).forEach(t=>{let s=document.createElement("li");s.classList.add("discount_item"),s.innerHTML=`
        <img src="${t.img}" alt="${t.name}" class="discount_card-img">
        <h3 class="discount_card-title">${t.name}</h3>
        <p class="discount_card-text">$${t.price}</p>
        <button class="discount_button">
          <svg class="discount_button-svg">
            <use href="./images/icon.svg#basket"></use>
          </svg>
        </button>
      `,e.appendChild(s)})}).catch(t=>{console.error("Fetch error:",t)}),document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("subscribeForm"),e=document.getElementById("footerSubscribeInput"),s=document.querySelector(".subscribe_modal-backdrop"),c=document.querySelector(".already-sub__modal");t.addEventListener("submit",async function(t){if(t.preventDefault(),!e.checkValidity())return void e.reportValidity();let o=e.value.trim();try{let t=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})}),r=await t.json();t.ok?(e.value="",s.classList.remove("hidden")):(console.log("Error response:",r),c.classList.remove("hidden"))}catch(t){console.log("error:",t),c.classList.remove("hidden")}})});const t=document.querySelector("#pagination__right"),e=document.querySelector("#pagination__right--two"),s=document.querySelector("#pagination__left"),c=document.querySelector("#pagination__left--two"),o=document.querySelector(".products__list"),r=document.querySelector(".pagination__centers"),a="https://food-boutique.b.goit.study/api/products";let l=1,n=1;async function d(a,d){let i=await fetch(`${a}?page=${d}&limit=6`),u=await i.json();console.log(u),n=u.totalPages;let p="";(u.results||u).forEach(t=>{p+=`
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
      </li>`}),o&&(o.innerHTML=p),1===l?(s.classList.add("pagination__arrow--disabled"),c.classList.add("pagination__arrow--disabled")):(s.classList.remove("pagination__arrow--disabled"),c.classList.remove("pagination__arrow--disabled")),l===n?(t.classList.add("pagination__arrow--disabled"),e.classList.add("pagination__arrow--disabled")):(t.classList.remove("pagination__arrow--disabled"),e.classList.remove("pagination__arrow--disabled")),function(t,e){let s="";if(n<=4)for(let t=1;t<=n;t++)s+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
        <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
      </li>`;else if(e<=3){for(let t=1;t<=4;t++)s+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`;s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}else if(e>=n-2){s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=n-3;t<=n;t++)s+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`}else{s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;for(let t=e-1;t<=e+2;t++)s+=`<li class="pagination__center${t===e?" pagination__center--active":""}">
          <p class="pagination__number${t===e?" pagination__number--active":""}">${t}</p>
        </li>`;s+=`<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`}r.innerHTML=s}(0,d)}t.addEventListener("click",()=>{l<n&&d(a,++l)}),s.addEventListener("click",()=>{l>1&&d(a,--l)}),e.addEventListener("click",()=>{l<n&&d(a,l=n)}),c.addEventListener("click",()=>{l>1&&d(a,l=1)}),d(a,l),fetch("https://food-boutique.b.goit.study/api/products/popular").then(t=>{if(!t.ok)throw Error("Network response was not ok");return t.json()}).then(t=>{let e=document.querySelector(".popular_list");t.forEach(t=>{let s=document.createElement("li");s.classList.add("popular_item"),s.innerHTML=`

      
        <img src="${t.img}" alt="${t.name}" class="popular_card-img">
        <h3 class="popular_card-title">${t.name}</h3>
        <p class="popularCardText">Category: <span class="popular_card-outline">${t.category}</span></p>
        <p class="popularCardText">Size: <span class="popular_card-outline">${t.size}</span></p>
        <p class="popularCardText">Popularity: <span class="popular_card-outline">${t.popularity}</span></p>
        <p class="discountCardPrice">Price: <span class="popular_card-outline">$${t.price}</span></p>
        <button class="popular_button">
          <svg class="popular_button-svg">
            <use href="./images/icon.svg#basket"></use>
          </svg>
        </button>
        
      `,e.appendChild(s)})}).catch(t=>{console.error("Fetch error:",t)});const i=async()=>{try{return await fetch("https://food-boutique.b.goit.study/api/products?page=1&limit=9").then(t=>t.json())}catch(t){return t}},u=(t,e)=>{let s=JSON.stringify(e);localStorage.setItem(t,s)},p=t=>{if(Object.keys(localStorage).includes(t))return JSON.parse(localStorage.getItem(t))},_=t=>{let e="";return t.map(t=>{e+=`<li class="products__item" id="${t._id}">
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
            ${g(t)}
          </div>
        </div>
      </li>`}),e},m=p("productsBasket"),g=t=>{let e;return void 0!==m&&m.includes(t._id)?`<button class="products__btn products__btn--checked">
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
            </button>`},h=document.querySelector("#products-list"),y="productsBasket";i().then(t=>{h.innerHTML=_(t.results)}),h.addEventListener("click",t=>{let e=t.target.closest(".products__btn");if(t.target.closest(".products__btn")){if(void 0===p(y)){let e=[];e.push(t.target.closest("li").id),u(y,e)}else{let e=p(y);e.includes(t.target.closest("li").id)||(e.push(t.target.closest("li").id),u(y,e))}e.classList.add("products__btn--checked")}});const b=async t=>{try{return await fetch(`https://food-boutique.b.goit.study/api/products/${t}`).then(t=>t.json())}catch(t){return t}},v=document.querySelector("#products-list"),S=document.querySelector(".backdrop-products"),L=document.querySelector("#close-modal-product"),q=document.querySelector(".modal-products__btn"),f="productsBasket";v.addEventListener("click",t=>{t.target.closest("li")&&!t.target.closest(".products__btn")&&b(t.target.closest("li").id).then(e=>{document.querySelector(".modal-products").id=e._id,document.querySelector(".modal-products__img").src=e.img,document.querySelector(".modal-products__img").alt=e.name,document.querySelector(".modal-products__name").textContent=e.name,document.querySelector("#pr-catagory").textContent=e.category,document.querySelector("#pr-size").textContent=e.size,document.querySelector("#pr-popularity").textContent=e.popularity,document.querySelector(".modal-products__desc").textContent=e.desc,document.querySelector(".modal-products__cost").textContent=`$${e.price}`,t.target.closest("li").lastElementChild.lastElementChild.lastElementChild.classList.contains("products__btn--checked")&&q.classList.add("modal-products__btn--checked"),S.classList.remove("is-hidden"),document.querySelector("body").classList.add("no-scroll")})}),L.addEventListener("click",()=>{document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",S.classList.add("is-hidden"),q.classList.remove("modal-products__btn--checked"),document.querySelector("body").classList.remove("no-scroll")}),S.addEventListener("click",t=>{t.target.closest(".modal-products")||(document.querySelector(".modal-products").id="",document.querySelector(".modal-products__img").src="#",document.querySelector(".modal-products__img").alt="",document.querySelector(".modal-products__name").textContent="",document.querySelector("#pr-catagory").textContent="",document.querySelector("#pr-size").textContent="",document.querySelector("#pr-popularity").textContent="",document.querySelector(".modal-products__desc").textContent="",document.querySelector(".modal-products__cost").textContent="",S.classList.add("is-hidden"),document.querySelector("body").classList.remove("no-scroll"))}),q.addEventListener("click",t=>{if(void 0===p(f)){let e=[];e.push(t.target.closest("li").id),u(f,e)}else{let e=p(f);e.includes(t.target.closest(".modal-products").id)||(e.push(t.target.closest(".modal-products").id),u(f,e))}q.classList.add("modal-products__btn--checked"),document.querySelector(`li[id='${t.target.closest(".modal-products").id}']`).lastElementChild.lastElementChild.lastElementChild.classList.add("products__btn--checked")});const $=document.querySelector(".footer_subscribe-box"),C=document.querySelector(".subscribe_modal-backdrop"),E=document.querySelector(".subscribe_modal-button"),x=document.querySelector(".already-sub__modal"),k=document.querySelector(".already-sub__logo-icon"),w="http://localhost:3000/email";$.addEventListener("submit",async t=>{t.preventDefault();let e=$.querySelector('input[type="email"]').value;if(!e)return void alert("Please enter a valid email address.");try{let t=await fetch(w),s=await t.json(),c=s.reduce((t,e)=>Math.max(t,e.id),0);if(s.some(t=>t.email===e)){x.classList.remove("hidden"),document.body.classList.add("no-scroll"),$.reset();return}let o=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,id:c+1})});await o.json(),$.reset(),C.classList.remove("hidden"),document.body.classList.add("no-scroll")}catch(t){console.error("Error:",t),alert("There was an error subscribing. Please try again later.")}}),E.addEventListener("click",()=>{C.classList.add("hidden"),document.body.classList.remove("no-scroll")}),k.addEventListener("click",()=>{x.classList.add("hidden"),document.body.classList.remove("no-scroll")});const T=t=>t.map(t=>`<li class="cart__product-item" id="${t._id}">
                        <div class="cart__img-wrap">
                            <img src="${t.img}" alt="product" class="cart__product-img">
                        </div>
                        <div class="cart__product-box">
                            <h2 class="cart__product-title">${t.name}</h2>
                            <button type="button" class="cart__delete-btn" data-id="${t._id}">
                                <svg class="cart__icon-cross-box" width="20" height="20">
                                    <use href="./images/icon.svg#cross"></use>
                                </svg>
                            </button>
                            <ul class="cart__product-wraper">
                                <li class="cart__product-info">
                                    <p class="cart__product-category">Category:</p>
                                    <p class="cart__product-fresh">${t.category}</p>
                                </li>
                                <li class="cart__product-info">
                                    <p class="cart__product-category">Size:</p>
                                    <p class="cart__product-fresh">${t.size}</p>
                                </li>
                            </ul>
                            <div class="cart__product-add-wrap">
                                <p class="cart__product-price">$${t.price}</p>
                                <div class="cart__product-plus">
                                    <button type="button" class="cart__btn-minus">
                                        <svg class="cart__icon-minus" width="20" height="20">
                                            <use href="./images/icon.svg#minus"></use>
                                        </svg>
                                    </button>
                                    <p class="cart__product-plus-text">1</p>
                                    <button type="button" class="cart__btn-plus">
                                        <svg class="cart__icon-plus" width="20" height="20">
                                            <use href="./images/icon.svg#cross"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>`).join(""),j=async()=>{try{return await fetch("http://localhost:3000/products").then(t=>t.json())}catch(t){console.error(t)}},M=async t=>{try{return await fetch(`http://localhost:3000/products/${t}`,{method:"DELETE"}).then(t=>t.json())}catch(t){console.error(t)}},z=document.querySelector(".cart__title"),I=document.querySelector(".header__text"),P=document.querySelector(".cart__product-list"),H=document.querySelector(".cart__order-price"),O=document.querySelector(".cart__modal-close"),A=document.querySelector(".cart__bacdrop"),B=document.querySelector(".cart__order-btn"),D=document.querySelector(".cart__order"),F=document.querySelector(".cart__wraper-delete"),N=document.querySelector(".cart__emoty"),J=document.querySelector(".cart__delete-btn-all");function R(){let t=P.querySelectorAll(".cart__product-item"),e=0;t.forEach(t=>{let s=t.querySelector(".cart__product-price").textContent,c=t.querySelector(".cart__product-plus-text").textContent,o=parseFloat(s.replace("$","")),r=parseInt(c);e+=o*r}),H.textContent=`$${e.toFixed(2)}`;let s=t.length;z.textContent=`CART(${s})`,I.textContent=`CART(${s})`}j().then(t=>{document.querySelector(".cart__product-list").innerHTML=T(t),R()}),document.addEventListener("click",t=>{t.target.classList.closest(".cart__delete-btn")&&M(t.target.dataset.id).then(()=>{j().then(t=>{document.querySelector(".cart__product-list").innerHTML=T(t),R()})})}),j().then(t=>{document.querySelector(".cart__product-list").innerHTML=T(t),R();let e=document.querySelectorAll(".cart__btn-plus"),s=document.querySelectorAll(".cart__btn-minus");e.forEach(t=>{t.addEventListener("click",()=>{let e=t.closest(".cart__product-item").querySelector(".cart__product-plus-text"),s=parseInt(e.textContent);e.textContent=++s,R()})}),s.forEach(t=>{t.addEventListener("click",()=>{let e=t.closest(".cart__product-item").querySelector(".cart__product-plus-text"),s=parseInt(e.textContent);s>1&&(e.textContent=--s,R())})})}),O.addEventListener("click",()=>{A.classList.add("hidden")}),B.addEventListener("click",()=>{P.textContent="",D.classList.add("hidden"),F.classList.toggle("hidden"),N.classList.remove("hidden"),localStorage.setItem("cartEmoty","true"),R()}),J.addEventListener("click",()=>{P.textContent="",D.classList.add("hidden"),F.classList.toggle("hidden"),N.classList.toggle("hidden"),R()}),document.addEventListener("DOMContentLoaded",()=>{"true"===localStorage.getItem("cartEmoty")?(P.textContent="",D.classList.add("hidden"),F.classList.toggle("hidden"),N.classList.remove("hidden"),R()):j().then(t=>{P.innerHTML=T(t),R(),t.length>0&&(D.classList.remove("hidden"),F.classList.toggle("hidden"),N.classList.add("hidden"))})});
//# sourceMappingURL=frosty-project.25586063.js.map
