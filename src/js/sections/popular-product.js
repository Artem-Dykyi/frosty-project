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
      <h3 class="popular_card-title">${product.name}</h3>
       <img src="${product.img}" alt="${product.name}" class="popular_card-img">
      <div class="button-box">       
        <button class="popular_button">
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
