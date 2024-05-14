import { createCartCard } from "./createCartCard.js";
import { createEmptyCard } from "./createEmptyCard.js";
import { createTotalTemplate } from "./createTotalTemplate.js";

export function printCart(cartProducts, idSelector) {
    let productCartTemplate = "";
    let totalTemplate = "";
    
    if (cartProducts) {
      cartProducts.forEach((cartProduct) => {
        productCartTemplate += createCartCard(cartProduct); // Crea una tarjeta de producto y la agrega al array de productos
      });     
      totalTemplate = createTotalTemplate(cartProducts); // Crea el resumen del pedido
    } else {
      productCartTemplate = createEmptyCard();
      totalTemplate = createTotalTemplate(cartProducts);
      
    }   
    const cartSelector = document.getElementById(idSelector);
    cartSelector.innerHTML = productCartTemplate + totalTemplate;
}