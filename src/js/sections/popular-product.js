// Получение данных с API и заполнение карточек
const API_URL = "https://food-boutique.b.goit.study/api/products/popular";

fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const products = data;
    const list = document.querySelector(".popular_list");

    products.forEach((product) => {
      const li = document.createElement("li");
      li.classList.add("popular_item");

      li.innerHTML = `

      
        <img src="${product.img}" alt="${product.name}" class="popular_card-img">
        <h3 class="popular_card-title">${product.name}</h3>
        <p class="popularCardText">Category: <span class="popular_card-outline">${product.category}</span></p>
        <p class="popularCardText">Size: <span class="popular_card-outline">${product.size}</span></p>
        <p class="popularCardText">Popularity: <span class="popular_card-outline">${product.popularity}</span></p>
        <p class="discountCardPrice">Price: <span class="popular_card-outline">$${product.price}</span></p>
        <button class="popular_button">
          <svg class="popular_button-svg">
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
