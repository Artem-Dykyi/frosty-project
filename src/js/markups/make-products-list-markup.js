import { getFromLocalStorage } from "../additional/localstorage-functions"

export const renderProductsList = (products) => {
  let productsList = ''
  products.map(pr => {
    productsList +=
      `<li class="products__item" id="${pr._id}">
        <div class="products__content">
          <img
            class="products__photo"
            alt="${pr.name}"
            src="${pr.img}"
          />
        </div>
        <div class="products__text">
          <h2 class="products__name">${pr.name}</h2>
          <ul class="products__datas">
            <li class="products__data">
              <p class="products__catag">Category:</p>
              <p class="products__info">${pr.category}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Size:</p>
              <p class="products__info">${pr.size}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Popularity:</p>
              <p class="products__info">${pr.popularity}</p>
            </li>
          </ul>
          <div class="products__down">
            <p class="products__cost">$${pr.price}</p>
            ${makeButton(pr)}
          </div>
        </div>
      </li>`


  })
  return productsList
}

const checkedProducts = getFromLocalStorage("productsBasket")

const makeButton = (pr) => {
  let isChecked
  if (checkedProducts === undefined) {
    isChecked = false
  } else {
    isChecked = checkedProducts.includes(pr._id);
  }
  if (isChecked) {
    return `<button class="products__btn products__btn--checked">
              <svg class="products__icon" width="18" height="18">
                <use href="#basket"></use>
              </svg>
               <svg class="products__icon-2" width="18" height="18">
                <use href="#check"></use>
              </svg>
            </button>`
  } else {
    return `<button class="products__btn">
              <svg class="products__icon" width="18" height="18">
                <use href="#basket"></use>
              </svg>
               <svg class="products__icon-2" width="18" height="18">
                <use href="#check"></use>
              </svg>
            </button>`
  }
}