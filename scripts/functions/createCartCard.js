//CREA UNA CARD PARA CADA PRODUCTO A PARTIR DE SUS DATOS
import { loadProducts } from "./loadProducts.js";

export function createCartCard(cartProduct) {
    return `
    <article id="product-cart-${cartProduct.id}" class="product-cart" data-price="${cartProduct.price}">
      <img class="product-img" src="${cartProduct.image}" alt=""/>
        <div class="product-details">
          <span class="product-title">${cartProduct.name}, 64GB, ${cartProduct.color} - Full Unlocked</span>
          <span class="product-description">Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage</span>
          <div>
            <input class="product-input" id="amount" type="number" min="1" value="${cartProduct.quantity}" onchange="changeQuantity(event)"/>                             
            <i class="fa-regular fa-heart" data-productid="${cartProduct.id}" onclick="addFavorite(event)"></i>
            <i class="fa-solid fa-trash" data-productid="${cartProduct.id}" onclick="removeCard(event)"></i>          
          </div>          
        </div>                       
        <span class="product-price" id="price">$${cartProduct.subtotal}</span>
    </article>
    `; 
}