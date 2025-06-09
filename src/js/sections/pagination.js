const pagRight = document.querySelector('#pagination__right');
const pagRightTwo = document.querySelector('#pagination__right--two');
const pagLeft = document.querySelector('#pagination__left');
const pagLeftTwo = document.querySelector('#pagination__left--two');
const ProductList = document.querySelector('.products__list');
const pagination = document.querySelector(".pagination__centers");

const api = "https://food-boutique.b.goit.study/api/products";
let currentPage = 1;
let totalPages = 1;

pagRight.addEventListener('click', () => {
  if (currentPage < totalPages) {
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
  if (currentPage < totalPages) {
    currentPage = totalPages;
    showPage(api, currentPage);
  }
});
pagLeftTwo.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    showPage(api, currentPage);
  }
});

async function showPage(api, currentPage) {
  const response = await fetch(`${api}?page=${currentPage}&limit=9`);
  const data = await response.json();
  console.log(data); 
  totalPages = data.totalPages;
  let markup = '';

  const products = data.results || data;

  products.forEach(item => {
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
  updatePaginationButtons();
  createPagination(api, currentPage);
}

function updatePaginationButtons() {
  if (currentPage === 1) {
    pagLeft.classList.add('pagination__arrow--disabled');
    pagLeftTwo.classList.add('pagination__arrow--disabled');
  } else {
    pagLeft.classList.remove('pagination__arrow--disabled');
    pagLeftTwo.classList.remove('pagination__arrow--disabled');
  }
  if (currentPage === totalPages) {
    pagRight.classList.add('pagination__arrow--disabled');
    pagRightTwo.classList.add('pagination__arrow--disabled');
  } else {
    pagRight.classList.remove('pagination__arrow--disabled');
    pagRightTwo.classList.remove('pagination__arrow--disabled');
  }
}

function createPagination(api, currentPage) {
  let markup = '';
  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      markup += `<li class="pagination__center${i === currentPage ? ' pagination__center--active' : ''}">
        <p class="pagination__number${i === currentPage ? ' pagination__number--active' : ''}">${i}</p>
      </li>`;
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        markup += `<li class="pagination__center${i === currentPage ? ' pagination__center--active' : ''}">
          <p class="pagination__number${i === currentPage ? ' pagination__number--active' : ''}">${i}</p>
        </li>`;
      }
      markup += `<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;
    } else if (currentPage >= totalPages - 2) {
      markup += `<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;
      for (let i = totalPages - 3; i <= totalPages; i++) {
        markup += `<li class="pagination__center${i === currentPage ? ' pagination__center--active' : ''}">
          <p class="pagination__number${i === currentPage ? ' pagination__number--active' : ''}">${i}</p>
        </li>`;
      }
    } else {
      markup += `<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;
      for (let i = currentPage - 1; i <= currentPage + 2; i++) {
        markup += `<li class="pagination__center${i === currentPage ? ' pagination__center--active' : ''}">
          <p class="pagination__number${i === currentPage ? ' pagination__number--active' : ''}">${i}</p>
        </li>`;
      }
      markup += `<li class="pagination__center">
        <p class="pagination__number">...</p>
      </li>`;
    }
  }
  pagination.innerHTML = markup;
}

showPage(api, currentPage);