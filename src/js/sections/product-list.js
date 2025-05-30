import { getPosts } from "../gets/get-products";
import { renderProductsList } from "../markups/make-products-list-markup";


const productsList = document.querySelector("#products-list")

getPosts().then((products) => {
    productsList.innerHTML = renderProductsList(products.results)
})