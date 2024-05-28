import { loadLayout } from "./functions/printLayout.js";
import { loadProducts } from "./functions/loadProducts.js";
import { createCartCard } from './functions/createCartCard.js';
import { createEmptyCard } from './functions/createEmptyCard.js'
import { createTotalTemplate } from './functions/createTotalTemplate.js';
import { printCart } from './functions/printCart.js';
import { changeQuantity } from './functions/changeQuantity.js';
import { updateTotal } from './functions/updateTotal.js';
import { removeCard } from './functions/removeCard.js';
import { cartProducts, addFavorite } from './functions/addFavorite.js';
import { buySelector, buyProducts } from './functions/buyProducts.js';

window.addFavorite = addFavorite;
window.removeCard = removeCard;
window.changeQuantity = changeQuantity;
window.addEventListener('DOMContentLoaded', function() {
  const favoriteIconSelector = document.querySelectorAll('.fa-heart');

  favoriteIconSelector.forEach(icon => {
    const productid = icon.dataset.productid;
    const isFavorite = JSON.parse(localStorage.getItem('favs')).some(product => product.id === productid);
    if (isFavorite) {
      icon.classList.add('fa-solid');
    } else {
      icon.classList.remove('fa-solid');
    }
  });
});

printCart(cartProducts, "cartproducts");