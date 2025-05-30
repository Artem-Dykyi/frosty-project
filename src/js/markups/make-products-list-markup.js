export const renderProductsList = (products) => {
    let productsList = ''
    products.map(pr => {
        productsList +=
            `<li class="products__item" id="${pr.id}">
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
            <p class="products__cost">${pr.price}</p>
            <button class="products__btn">
              <svg class="products__icon" width="18" height="18">
                <use href="./images/icon.svg#basket"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`

    })
    return productsList
}