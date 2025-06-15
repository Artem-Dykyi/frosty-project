import { getFilteredPosts } from "../gets/get-filtred-products"
import { renderProductsList } from "../markups/make-products-list-markup"

const nameInput = document.querySelector("#filter-name-input")
const categoriesInput = document.querySelector("#filter-catagories-input")
const categoriesFilter = document.querySelector("#categories-filter")
const orderInput = document.querySelector("#filter-order-input")
const orderFilter = document.querySelector("#order-filter")
const productList = document.querySelector("#products-list")
const productNothing = document.querySelector("#products-nothing")



nameInput.addEventListener("input", () => {
    createGet(nameInput.value, categoriesInput.value, orderInput.value)
})


categoriesInput.addEventListener("focus", () => {
    categoriesFilter.style.display = "block"
})

categoriesFilter.addEventListener("click", (e) => {
    if (e.target.closest(".filter__desc")) {
        categoriesInput.value = e.target.textContent;
        categoriesFilter.style.display = "none";
        createGet(nameInput.value, categoriesInput.value, orderInput.value)

    }
});

categoriesInput.addEventListener("blur", () => {
    setTimeout(() => {
        categoriesFilter.style.display = "none";
    }, 200);
})

orderInput.addEventListener("focus", () => {
    orderFilter.style.display = "block"
})

orderFilter.addEventListener("click", (e) => {
    if (e.target.closest(".filter__desc")) {
        orderInput.value = e.target.textContent;
        orderFilter.style.display = "none";
        createGet(nameInput.value, categoriesInput.value, orderInput.value)

    }
});

orderInput.addEventListener("blur", () => {
    setTimeout(() => {
        orderFilter.style.display = "none";
    }, 200);
})


const createGet = (name, category, order) => {
    let orderNew = ""
    let orderValue = ""
    if (order === "A to Z") {
        orderNew = "byABC"
        orderValue = true
    }
    if (order === "Z to A") {
        orderNew = "byABC"
        orderValue = false
    }
    if (order === "Cheap") {
        orderNew = "byPrice"
        orderValue = true
    }
    if (order === "Expensive") {
        orderNew = "byPrice"
        orderValue = false
    }
    if (order === "Popular") {
        orderNew = "byPopularity"
        orderValue = true
    }
    if (order === "Not popular") {
        orderNew = "byPopularity"
        orderValue = false
    }
    if (order === "Show all") {
        orderNew = "byABC"
        orderValue = true
    }
    if (category === "Show all") {
        category = ""
    }

    getFilteredPosts(name, category, orderNew, orderValue).then(
        (products) => {
            if (products.results.length === 0) {
                productNothing.style.display = "flex"
                console.log("s")
                productList.innerHTML = ""
            } else {
                productNothing.style.display = "none"
                productList.innerHTML = renderProductsList(products.results)
            }

        }
    )
}