import { printCart } from "./printCart.js";

export const buySelector = document.getElementById("buy-btn");

export function buyProducts(event) {
    // Elimina todos los productos del array en el almacenamiento local
    localStorage.removeItem('cart');
    printTotal(null, "cartproducts");
}
window.buyProducts = buyProducts;
