//в хедері щоб відображалось кількість товарів скільки додано 
//щоб можна було діставати товари та записувати їх в локал сторадж 
//можна додавати +- 1 по кліку на кнопці 

function updeteCartProd(){



    const cartTitle = document.querySelector(".cart__title")
    const headerText = document.querySelector(".header__text")
    
    
    console.log("test")
    
    const cartProductList = document.querySelector(".cart__product-list")
    const cartOrderPrice = document.querySelector(".cart__order-price")

    const cartProductItems = cartProductList.querySelectorAll(".cart__product-item")

    let total = 0;
    cartProductItems.forEach( cartProdItem => {
        const cartProdPrice = cartProdItem.querySelector(".cart__product-price").textContent
        const cartProductPlusText = cartProdItem.querySelector(".cart__product-plus-text").textContent
    
        const price = parseFloat(cartProdPrice.replace('$', ''));
        const quantity = parseInt(cartProductPlusText);
    
        total += price * quantity
    });

    cartOrderPrice.textContent = `$${total.toFixed(2)}`
    
    const countNumHead = cartProductItems.length;
    cartTitle.textContent = `CART(${countNumHead})`
    headerText.textContent = `CART(${countNumHead})`

}

// console.log(update())


import { creatProducts } from "../gets/creatProducts"
import { getProducts } from "../gets/getProducts"
import { deleteProducts } from "../gets/deleteProducts"

getProducts().then((products) => {
    document.querySelector(".cart__product-list").innerHTML = creatProducts(products)
    updeteCartProd()
})

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart__delete-btn")) {
      const productId = event.target.dataset.id;
      deleteProducts(productId).then(() => {
        getProducts().then((products) => {document.querySelector(".cart__product-list").innerHTML = creatProducts(products)
        updeteCartProd()
        });
      });
    }
  });