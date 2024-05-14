import { printCart } from './printCart.js'
import { updateTotal } from './updateTotal.js';

export function removeCard(event) {
    const cartProducts = JSON.parse(localStorage.getItem("cart"));
    const productid = event.target.dataset.productid;
    const index = cartProducts.findIndex(product => product.id === productid);
  
    // Verifica si se encontró el producto
    if (index !== -1) {
      // Elimina el producto del array en el almacenamiento local
      cartProducts.splice(index, 1);
      // Si no hay más elementos en el array 'cart', elimina el key del almacenamiento local
      if (cartProducts.length === 0) {
        localStorage.removeItem('cart');
        printCart(null, "cartproducts");
      } else {
        // Elimina la card
        let cartElement = document.getElementById(`product-cart-${productid}`);
        if (cartElement) {
          cartElement.parentNode.removeChild(cartElement);
        }
        // Actualiza el almacenamiento local con los productos restantes
        localStorage.setItem('cart', JSON.stringify(cartProducts));
        
        updateTotal();
      }
    }
  }