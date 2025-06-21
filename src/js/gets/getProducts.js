//muuuuuuuuuu

import { setToLocalStorage, getFromLocalStorage } from "../additional/localstorage-functions.js";

// export const getproducts = async () => {
//     console.log("teona");
//     const localData = getFromLocalStorage("productsBasket");

//     if (localData && Array.isArray(localData)) {
//         return localData;
//     }

//     try {
//         const response = await fetch(`https://food-boutique.b.goit.study/api/products`);
//         const data = await response.json();
//         setToLocalStorage("productsBasket", data.results || data);
//         return data.results || data;
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// };

export const getproducts = async () => {
    console.log("teona");
    const productsBasket = getFromLocalStorage("productsBasket");
  
    if (!productsBasket || !Array.isArray(productsBasket) || productsBasket.length === 0) {
      return [];
    }
  
    try {
      const productFetches = productsBasket.map(async (id) => {
        const response = await fetch(`https://food-boutique.b.goit.study/api/products/${id}`);
        const data = await response.json();
        return data;
      });
  
      const fullProducts = await Promise.all(productFetches);
      return fullProducts;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
