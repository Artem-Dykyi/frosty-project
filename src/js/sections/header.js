// import { updeteCartProd } from "./basket";
// updeteCartProd()
import { getFromLocalStorage, setToLocalStorage } from "../additional/localstorage-functions";

function updateHeader() {
    const headerText = document.querySelector(".header__text")

    let countLocalLeng = 0;
    
        const countLocalProd = getFromLocalStorage("productsBasket");
    
        if (Array.isArray(countLocalProd)) {
            countLocalLeng = countLocalProd.length;
        } else {
            countLocalLeng = 0;
        }
    
        // cartTitle.textContent = `CART(${countLocalLeng})`
        headerText.textContent = `CART(${countLocalLeng})`
}
updateHeader()