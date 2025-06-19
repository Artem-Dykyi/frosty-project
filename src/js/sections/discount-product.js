import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../additional/localstorage-functions.js";

const API_URL = "https://food-boutique.b.goit.study/api/products/discount";
const productsKey = "productsBasket";

fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error api");
    }
    return response.json();
  })
  .then((products) => {
    const list = document.querySelector(".discount_list");
    const shuffled = products.sort(() => 0.5 - Math.random( ));
    const selected = shuffled.slice(0, 2);

    selected.forEach((product) => {
      const li = document.createElement("li");
      li.classList.add("discount_item");
      li.setAttribute("id", product._id);

      li.innerHTML = `
        <div class="discount__circle">
          <svg class="discount__icon" width="18" height="18">
            <use href="#leaf"></use>
          </svg>
        </div>
        <img src="${product.img}" alt="${product.name}"  class="discount_card-img">
        <h3 class="discount_card-title">${product.name}</h3>
        <p class="discount_card-text">$${product.price}</p>
        <button class="discount_button" data-id="${product._id}">
          <svg class="discount_button-svg">
            <use href="#basket"> </use>
          </svg>
        </button>

      `;

      list.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

document.querySelector(".discount_list").addEventListener("click", (e) => {
  const addBtn = e.target.closest(".discount_button");
  if (!addBtn) return;

  const productId = addBtn.dataset.id;
  const cart = getFromLocalStorage(productsKey) || [];

  if (!cart.includes(productId)) {
    cart.push(productId);
    setToLocalStorage(productsKey, cart);
  }

  if (typeof renderCart === "function") renderCart();
});
