import { getPosts } from "../gets/get-products";
import { renderProductsList } from "../markups/make-products-list-markup";
import { getFromLocalStorage, setToLocalStorage } from "../additional/localstorage-functions";


const productsList = document.querySelector("#products-list")
const productsKey = "productsBasket"

getPosts().then((products) => {
    productsList.innerHTML = renderProductsList(products.results)
})

productsList.addEventListener("click", (e) => {
    const productsBtn = e.target.closest(".products__btn")
    if (e.target.closest(".products__btn")) {
        if (getFromLocalStorage(productsKey) === undefined) {
            const productsBasket = []
            productsBasket.push(e.target.closest("li").id)
            setToLocalStorage(productsKey, productsBasket)
        } else {
            const productsBasket = getFromLocalStorage(productsKey)
            if (!productsBasket.includes(e.target.closest("li").id)) {
                productsBasket.push(e.target.closest("li").id)
                setToLocalStorage(productsKey, productsBasket)
            }
        }
        productsBtn.classList.add("products__btn--checked")
    }
})
