import { getPostFull } from "../gets/get-product-full"
import { getFromLocalStorage, setToLocalStorage } from "../additional/localstorage-functions"

const productsList = document.querySelector("#products-list")
const productBackdrop = document.querySelector(".backdrop-products")
const productClose = document.querySelector("#close-modal-product")
const productsBtn = document.querySelector(".modal-products__btn")

const productsKey = "productsBasket"

productsList.addEventListener("click", (e) => {
    if (e.target.closest("li") && !e.target.closest(".products__btn")) {
        getPostFull(e.target.closest("li").id).then((product) => {
            document.querySelector(".modal-products").id = product._id
            document.querySelector(".modal-products__img").src = product.img
            document.querySelector(".modal-products__img").alt = product.name
            document.querySelector(".modal-products__name").textContent = product.name
            document.querySelector("#pr-catagory").textContent = product.category
            document.querySelector("#pr-size").textContent = product.size
            document.querySelector("#pr-popularity").textContent = product.popularity
            document.querySelector(".modal-products__desc").textContent = product.desc
            document.querySelector(".modal-products__cost").textContent = `$${product.price}`
            if (e.target.closest("li").lastElementChild.lastElementChild.lastElementChild.classList.contains("products__btn--checked")) {
                productsBtn.classList.add("modal-products__btn--checked")
            }
            productBackdrop.classList.remove("is-hidden")
            document.querySelector("body").classList.add("no-scroll")
        })
    }
})

productClose.addEventListener("click", () => {
    document.querySelector(".modal-products").id = ""
    document.querySelector(".modal-products__img").src = "#"
    document.querySelector(".modal-products__img").alt = ""
    document.querySelector(".modal-products__name").textContent = ""
    document.querySelector("#pr-catagory").textContent = ""
    document.querySelector("#pr-size").textContent = ""
    document.querySelector("#pr-popularity").textContent = ""
    document.querySelector(".modal-products__desc").textContent = ""
    document.querySelector(".modal-products__cost").textContent = ""
    productBackdrop.classList.add("is-hidden")
    productsBtn.classList.remove("modal-products__btn--checked")
    document.querySelector("body").classList.remove("no-scroll")
})

productBackdrop.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-products")) {
        document.querySelector(".modal-products").id = ""
        document.querySelector(".modal-products__img").src = "#"
        document.querySelector(".modal-products__img").alt = ""
        document.querySelector(".modal-products__name").textContent = ""
        document.querySelector("#pr-catagory").textContent = ""
        document.querySelector("#pr-size").textContent = ""
        document.querySelector("#pr-popularity").textContent = ""
        document.querySelector(".modal-products__desc").textContent = ""
        document.querySelector(".modal-products__cost").textContent = ""
        productBackdrop.classList.add("is-hidden")
        document.querySelector("body").classList.remove("no-scroll")
    }
})

productsBtn.addEventListener("click", (e) => {
    if (getFromLocalStorage(productsKey) === undefined) {
        const productsBasket = []
        productsBasket.push(e.target.closest("li").id)
        setToLocalStorage(productsKey, productsBasket)
    } else {
        const productsBasket = getFromLocalStorage(productsKey)
        if (!productsBasket.includes(e.target.closest(".modal-products").id)) {
            productsBasket.push(e.target.closest(".modal-products").id)
            setToLocalStorage(productsKey, productsBasket)
        }
    }
    productsBtn.classList.add("modal-products__btn--checked")
    const itemChecked = document.querySelector(`li[id='${e.target.closest(".modal-products").id}']`)
    itemChecked.lastElementChild.lastElementChild.lastElementChild.classList.add("products__btn--checked")
})