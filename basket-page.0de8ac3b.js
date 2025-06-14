function t(t,e,r,c){Object.defineProperty(t,e,{get:r,set:c,enumerable:!0,configurable:!0})}var e=globalThis,r={},c={},o=e.parcelRequire332b;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in c){var e=c[t];delete c[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){c[t]=e},e.parcelRequire332b=o);var s=o.register;s("j5vBa",function(t,e){document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".footer_subscribe-box"),e=document.getElementById("footerSubscribeInput"),r=document.querySelector(".subscribe_modal-backdrop"),c=document.querySelector(".already-sub__modal");t.addEventListener("submit",async function(t){if(t.preventDefault(),!e.checkValidity())return void e.reportValidity();let o=e.value.trim();try{let t=await fetch("https://food-boutique.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})}),s=await t.json();t.ok?(e.value="",r.classList.remove("hidden")):(console.log("Error response:",s),c.classList.remove("hidden"))}catch(t){console.log("error:",t),c.classList.remove("hidden")}})})}),s("eOtyb",function(t,e){var r=o("l9cwF");let c=document.querySelector(".header__text"),s=0,a=(0,r.getFromLocalStorage)("productsBasket");s=Array.isArray(a)?a.length:0,c.textContent=`CART(${s})`}),s("l9cwF",function(e,r){t(e.exports,"setToLocalStorage",()=>c),t(e.exports,"getFromLocalStorage",()=>o);let c=(t,e)=>{let r=JSON.stringify(e);localStorage.setItem(t,r)},o=t=>{if(Object.keys(localStorage).includes(t))return JSON.parse(localStorage.getItem(t))}}),o("j5vBa"),o("eOtyb");const a=t=>t.map(t=>`<li class="cart__product-item" id="${t._id}">
                        <div class="cart__img-wrap">
                            <img src="${t.img}" alt="product" class="cart__product-img">
                        </div>
                        <div class="cart__product-box">
                            <h2 class="cart__product-title">${t.name}</h2>
                            <button type="button" class="cart__delete-btn" data-id="${t._id}">
                                <svg class="cart__icon-cross-box" width="20" height="20">
                                    <use href="#cross"></use>
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
                                            <use href="#minus"></use>
                                        </svg>
                                    </button>
                                    <p class="cart__product-plus-text">1</p>
                                    <button type="button" class="cart__btn-plus">
                                        <svg class="cart__icon-plus" width="20" height="20">
                                            <use href="../images/icon.svg#cross"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>`).join("");var l=o("l9cwF");const d=async()=>{console.log("teona");let t=(0,l.getFromLocalStorage)("products");if(t&&Array.isArray(t))return t;try{let t=await fetch("https://food-boutique.b.goit.study/api/products"),e=await t.json();return(0,l.setToLocalStorage)("products",e.results||e),e.results||e}catch(t){return console.error(t),[]}};var l=o("l9cwF");const n=()=>{let t=(0,l.getFromLocalStorage)("productsBasket")||[];d().then(e=>{let r=e.filter(e=>t.includes(e._id));document.querySelector(".cart__product-list").innerHTML=a(r),0===t.length?(h.classList.add("hidden"),v.classList.add("hidden"),b.classList.remove("hidden")):(h.classList.remove("hidden"),v.classList.remove("hidden"),b.classList.add("hidden"));let c=document.querySelectorAll(".cart__btn-plus"),o=document.querySelectorAll(".cart__btn-minus");c.forEach(t=>{t.addEventListener("click",()=>{let e=t.closest(".cart__product-item").querySelector(".cart__product-plus-text"),r=parseInt(e.textContent);e.textContent=++r,L()})}),o.forEach(t=>{t.addEventListener("click",()=>{let e=t.closest(".cart__product-item").querySelector(".cart__product-plus-text"),r=parseInt(e.textContent);r>1&&(e.textContent=--r,L())})}),L()})};n();const i=document.querySelector(".cart__title"),u=document.querySelector(".header__text"),_=document.querySelector(".cart__product-list"),p=document.querySelector(".cart__order-price"),m=document.querySelector(".cart__modal-close"),g=document.querySelector(".cart__bacdrop"),y=document.querySelector(".cart__order-btn"),h=document.querySelector(".cart__order"),v=document.querySelector(".cart__wraper-delete"),b=document.querySelector(".cart__emoty"),S=document.querySelector(".cart__delete-btn-all");function L(){let t=_.querySelectorAll(".cart__product-item"),e=0;t.forEach(t=>{let r=t.querySelector(".cart__product-price").textContent,c=t.querySelector(".cart__product-plus-text").textContent,o=parseFloat(r.replace("$","")),s=parseInt(c);e+=o*s}),p.textContent=`$${e.toFixed(2)}`;let r=0,c=(0,l.getFromLocalStorage)("productsBasket");r=Array.isArray(c)?c.length:0,i.textContent=`CART(${r})`,u.textContent=`CART(${r})`}m.addEventListener("click",()=>{g.classList.add("hidden")}),y.addEventListener("click",()=>{document.querySelector(".cart__product-list").innerHTML="",localStorage.removeItem("productsBasket"),h.classList.add("hidden"),v.classList.add("hidden"),b.classList.remove("hidden"),g.classList.remove("hidden"),L()}),document.addEventListener("click",t=>{let e=t.target.closest(".cart__delete-btn");if(e){let t=e.dataset.id,r=((0,l.getFromLocalStorage)("productsBasket")||[]).filter(e=>e!==t);(0,l.setToLocalStorage)("productsBasket",r),n()}}),S.addEventListener("click",()=>{document.querySelector(".cart__product-list").innerHTML="",localStorage.removeItem("productsBasket"),h.classList.add("hidden"),v.classList.add("hidden"),b.classList.remove("hidden"),L()});
//# sourceMappingURL=basket-page.0de8ac3b.js.map
