//muuuuuuuuuu

import { setToLocalStorage, getFromLocalStorage } from "../additional/localstorage-functions.js";

export const getproducts = async (id) => {
    console.log("teona");
    const localData = getFromLocalStorage("products");

    if (localData && Array.isArray(localData)) {
        return localData;
    }

    try {
        const response = await fetch(`https://food-boutique.b.goit.study/api/products/${id}`);
        const data = await response.json();
        setToLocalStorage("products", data.results || data);
        return data.results || data;
    } catch (error) {
        console.error("Помилка отримання продуктів:", error);
        return [];
    }
};