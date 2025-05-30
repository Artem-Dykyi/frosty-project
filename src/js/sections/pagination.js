const pagRight = document.querySelector('#pagination__right');
const pagRightTwo = document.querySelector('#pagination__right--two');
const pagLeft = document.querySelector('#pagination__left');
const pagLeftTwo = document.querySelector('#pagination__left--two');
const ProductList = document.querySelector('.products__list');

const api = "https://food-boutique.b.goit.study/api/products";
let pages = 0;
fetch(api)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    pages = Math.ceil(data.length / 6);
  })
let currentPage = 1;

async function showPage(api, currentPage) {
  const response = await fetch(`${api}?page=${currentPage}&limit=6`);
  const data = await response.json();
  console.log(data.results);
  let markup = '';
  data.results.forEach(item => {
    markup += `
    <li class="products__item">
        <div class="products__content">
          <img
            class="products__photo"
            alt=""
            src="${item.img}"
          />
        </div>
        <div class="products__text">
          <h2 class="products__name">${item.name}</h2>
          <ul class="products__datas">
            <li class="products__data">
              <p class="products__catag">Category: </p>
              <p class="products__info">${item.category.replace(/_/g, ' ')}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Size:</p>
              <p class="products__info">${item.size}</p>
            </li>
            <li class="products__data">
              <p class="products__catag">Popularity:</p>
              <p class="products__info">${item.popularity}</p>
            </li>
          </ul>
          <div class="products__down">
            <p class="products__cost">$${item.price}</p>
            <button class="products__btn">
              <svg class="products__icon" width="18" height="18">
                <use href="../images/icon.svg#basket"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`;
  });
  if (ProductList) {
    ProductList.innerHTML = markup;
  }
  pagRight.addEventListener('click', () => {
    if (currentPage < data.totalPages) {
      currentPage++;
      showPage(api, currentPage);
    }
  });
  pagLeft.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(api, currentPage);
    }
  });
  pagRightTwo.addEventListener('click', () => {
    if (currentPage < data.totalPages) {
      currentPage = data.totalPages;
      showPage(api, currentPage);
    }
  });
  pagLeftTwo.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage = 1;
      showPage(api, currentPage);
    }
  });
}

showPage(api, currentPage)


