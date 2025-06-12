import { creatProducts } from "../gets/creatProducts"
import { getproducts } from "../gets/getProducts"
import { getFromLocalStorage, setToLocalStorage } from "../additional/localstorage-functions";


// console.log(getFromLocalStorage("productsBasket"))

const renderCart = () => {    
const cartIds = getFromLocalStorage("productsBasket") || [];

getproducts().then((products) => {
    const cartItems = products.filter(product => cartIds.includes(product._id));
    document.querySelector(".cart__product-list").innerHTML = creatProducts(cartItems);

    if (cartIds.length === 0) {
        cartOrder.classList.add("hidden");
        cartWrapperDelete.classList.add("hidden");
        cartEmoty.classList.remove("hidden");
        // cartDeleteBtnAll.classList.add("hidden");
      } else {
        cartOrder.classList.remove("hidden");
        cartWrapperDelete.classList.remove("hidden");
        cartEmoty.classList.add("hidden");
        // cartDeleteBtnAll.classList.remove("hidden");
      }



    const plusBtns = document.querySelectorAll(".cart__btn-plus");
    const minusBtns = document.querySelectorAll(".cart__btn-minus");

    plusBtns.forEach(btn => {
        btn.addEventListener("click", () => {
        const parent = btn.closest(".cart__product-item");
        const countEl = parent.querySelector(".cart__product-plus-text");
        let count = parseInt(countEl.textContent);
        count++;
        countEl.textContent = count;
        updeteCartProd();
        });
    });

    minusBtns.forEach(btn => {
        btn.addEventListener("click", () => {
        const parent = btn.closest(".cart__product-item");
        const countEl = parent.querySelector(".cart__product-plus-text");
        let count = parseInt(countEl.textContent);
        if (count > 1) {
            count--;
            countEl.textContent = count;
            updeteCartProd();
        }
        });
    });

    updeteCartProd();
  });
};

renderCart()
// document.addEventListener("DOMContentLoaded", renderCart);




// .............................................










    const cartTitle = document.querySelector(".cart__title")
    const headerText = document.querySelector(".header__text")
    const cartProductList = document.querySelector(".cart__product-list")
    const cartOrderPrice = document.querySelector(".cart__order-price")


    const cartModalClose = document.querySelector(".cart__modal-close")
    const cartBackDrop = document.querySelector(".cart__bacdrop")
    const cartOrderBtn = document.querySelector(".cart__order-btn")


    const cartOrder = document.querySelector(".cart__order")
    const cartWrapperDelete = document.querySelector(".cart__wraper-delete")
    const cartEmoty = document.querySelector(".cart__emoty")

    const cartDeleteBtnAll = document.querySelector(".cart__delete-btn-all")


export function updeteCartProd(){
    // const countLocalProd = getFromLocalStorage("productsBasket") || [];
    const cartProductItems = cartProductList.querySelectorAll(".cart__product-item");
    let total = 0;
    cartProductItems.forEach( cartProdItem => {
        const cartProdPrice = cartProdItem.querySelector(".cart__product-price").textContent
        const cartProductPlusText = cartProdItem.querySelector(".cart__product-plus-text").textContent
    
        const price = parseFloat(cartProdPrice.replace('$', ''));
        const quantity = parseInt(cartProductPlusText);
        total += price * quantity


    });

    cartOrderPrice.textContent = `$${total.toFixed(2)}`
    // const countNumHead = cartProductItems.length;
    // cartTitle.textContent = `CART(${countNumHead})`
    // headerText.textContent = `CART(${countNumHead})`


    // const countLocalLeng = countLocalProd.length
    let countLocalLeng = 0;

    const countLocalProd = getFromLocalStorage("productsBasket");

    if (Array.isArray(countLocalProd)) {
        countLocalLeng = countLocalProd.length;
    } else {
        countLocalLeng = 0;
    }

    cartTitle.textContent = `CART(${countLocalLeng})`
    headerText.textContent = `CART(${countLocalLeng})`

    // // const countLocalLeng = countLocalProd.length

    
}

// getProducts().then((products) => {
//     document.querySelector(".cart__product-list").innerHTML = creatProducts(products)
//     updeteCartProd()
// })

// document.addEventListener("click", (event) => {
//     if (event.target.classList.closest(".cart__delete-btn")) {
//       const productId = event.target.dataset.id;
//       deleteProducts(productId).then(() => {
//         getProducts().then((products) => {document.querySelector(".cart__product-list").innerHTML = creatProducts(products)
//             updeteCartProd()
//         });
//       });
//     }
//   });

  

//   getproducts().then((products) => {
//     document.querySelector(".cart__product-list").innerHTML = creatProducts(products);
//     updeteCartProd(); 
  
    
//     const plusBtns = document.querySelectorAll(".cart__btn-plus");
//     const minusBtns = document.querySelectorAll(".cart__btn-minus");
  
//     plusBtns.forEach(btn => {
//       btn.addEventListener("click", () => {
//         const parent = btn.closest(".cart__product-item");
//         const countEl = parent.querySelector(".cart__product-plus-text");
//         let count = parseInt(countEl.textContent);
//         count++;
//         countEl.textContent = count;
//         updeteCartProd();
//       });
//     });
  
//     minusBtns.forEach(btn => {
//       btn.addEventListener("click", () => {
//         const parent = btn.closest(".cart__product-item");
//         const countEl = parent.querySelector(".cart__product-plus-text");
//         let count = parseInt(countEl.textContent);
//         if (count > 1) {
//           count--;
//           countEl.textContent = count;
//           updeteCartProd();
//         }
//       });
//     });


//   });
  






cartModalClose.addEventListener("click", () => {
    cartBackDrop.classList.add("hidden")
})

cartOrderBtn.addEventListener("click", () => {

    document.querySelector(".cart__product-list").innerHTML = "";
    localStorage.removeItem("productsBasket");
  
    cartOrder.classList.add("hidden");
    cartWrapperDelete.classList.add("hidden");
    cartEmoty.classList.remove("hidden");
    // cartDeleteBtnAll.classList.add("hidden");
    cartBackDrop.classList.remove("hidden")


    updeteCartProd()
})

// cartOrderBtn.addEventListener("click", () => {
//     cartProductList.textContent = "";
//     cartOrder.classList.add("hidden");
//     cartWrapperDelete.classList.toggle("hidden");
//     cartEmoty.classList.remove("hidden");
  
//     localStorage.setItem("cartEmoty", "true");
  
//     updeteCartProd();
//   });

document.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".cart__delete-btn");
  
    if (deleteBtn) {
      const id = deleteBtn.dataset.id;
      const cart = getFromLocalStorage("productsBasket") || [];
      const updatedCart = cart.filter(cartId => cartId !== id);
  
      setToLocalStorage("productsBasket", updatedCart);
      renderCart(); 
    }
  });

cartDeleteBtnAll.addEventListener("click", () => {
    document.querySelector(".cart__product-list").innerHTML = "";
    localStorage.removeItem("productsBasket");
  
    cartOrder.classList.add("hidden");
    cartWrapperDelete.classList.add("hidden");
    cartEmoty.classList.remove("hidden");
  
    updeteCartProd();
  });

// document.addEventListener("DOMContentLoaded", () => {
//     const isCartEmpty = localStorage.getItem("cartEmoty");
  
//     if (isCartEmpty === "tru") {//e add
//       cartProductList.textContent = "";
//       cartOrder.classList.add("hidde");
//       cartWrapperDelete.classList.toggle("hidden");
//       cartEmoty.classList.remove("hidden");
//       updeteCartProd();
//     } else {
//       getProducts().then((products) => {
//         cartProductList.innerHTML = creatProducts(products);
//         updeteCartProd();
  
//         if (products.length > 0) {
//           cartOrder.classList.remove("hidde");
//           cartWrapperDelete.classList.toggle("hidden");
//           cartEmoty.classList.add("hidden");
//         }
//       });
//     }
//   });
  


