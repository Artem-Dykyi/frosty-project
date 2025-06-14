export const creatProducts = (products) => 
products.map((product)=> 
    `<li class="cart__product-item" id="${product._id}">
                        <div class="cart__img-wrap">
                            <img src="${product.img}" alt="product" class="cart__product-img">
                        </div>
                        <div class="cart__product-box">
                            <h2 class="cart__product-title">${product.name}</h2>
                            <button type="button" class="cart__delete-btn" data-id="${product._id}">
                                <svg class="cart__icon-cross-box" width="20" height="20">
                                    <use href="#cross"></use>
                                </svg>
                            </button>
                            <ul class="cart__product-wraper">
                                <li class="cart__product-info">
                                    <p class="cart__product-category">Category:</p>
                                    <p class="cart__product-fresh">${product.category}</p>
                                </li>
                                <li class="cart__product-info">
                                    <p class="cart__product-category">Size:</p>
                                    <p class="cart__product-fresh">${product.size}</p>
                                </li>
                            </ul>
                            <div class="cart__product-add-wrap">
                                <p class="cart__product-price">$${product.price}</p>
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
                    </li>`
).join("")