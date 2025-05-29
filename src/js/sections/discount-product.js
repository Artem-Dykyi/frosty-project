const API_URL = "https://food-boutique.b.goit.study/api/products/discount";

fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error api");
    }
    return response.json();
  })
  .then((data) => {
    const products = data;
    const list = document.querySelector(".discount_list");
    const shuffled = products.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);

    selected.forEach((product) => {
      const li = document.createElement("li");
      li.classList.add("discount_item");

      li.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="discount_card-img">
        <h3 class="discount_card-title">${product.name}</h3>
        <p class="discount_card-text">$${product.price}</p>
        <button class="discount_button">
          <svg class="discount_button-svg">
            <use href="./images/icon.svg#basket"></use>
          </svg>
        </button>
      `;

      list.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
