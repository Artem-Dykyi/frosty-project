import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../additional/localstorage-functions.js";

const API_URL = "https://food-boutique.b.goit.study/api/products/popular";
const productsKey = "productsBasket";

fetch(API_URL)
  .then((response) => {
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((products) => {
    const list = document.querySelector(".popular_list");

    products.forEach((product) => {
      const li = document.createElement("li");
       li.classList.add("popular_item");
      li.setAttribute("id", product._id);

      li.innerHTML = `
        <h3 class="popular_card-title" >${product.name} </h3>
        <img src="${product.img}" alt="${product.name}" class="popular_card-img">
        <div class="button-box">       
          <button class="popular_button"  data-id="${product._id}">
            <svg class="popular_button-svg">
              <use href="#basket"></use>
            </svg>
          </button>
        </div>
        <p class="popularCardText">Category: <span class="popular_card-outline">${product.category}</span></p>
        <p class="popularCardText">Size: <span class="popular_card-outline">${product.size}</span></p>
        <p class="popularCardText">Popularity: <span class="popular_card-outline">${product.popularity}</span></p>
      `;

      list.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

document.querySelector(".popular_list").addEventListener("click", (e) => {
  const addBtn = e.target.closest(".popular_button");
  if (!addBtn) return;

  const productId = addBtn.dataset.id;
  const cart = getFromLocalStorage(productsKey) || [];

  if (!cart.includes(productId)) {
    cart.push(productId);
    setToLocalStorage(productsKey, cart);
  }

  if (typeof renderCart === "function") renderCart();
});
