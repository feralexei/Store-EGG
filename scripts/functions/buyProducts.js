import { printCart } from "./printCart.js";

export const buySelector = document.getElementById("buy-btn");

export function buyProducts(event) {
    const cartProducts = JSON.parse(localStorage.getItem("cart"));
    if (cartProducts) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción no se puede revertir.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar'
            }).then(result => {
                if (result.isConfirmed) {
                    localStorage.removeItem('cart');
                    printCart(null, "cartproducts");
                    Swal.fire({
                        title: 'Compra realizada',
                        text: 'Tu compra se ha realizado con éxito.',
                        iconHtml: '<ion-icon name="cart" class="alert-icons"></ion-icon>',
                        confirmButtonText: 'Entendido'
                        });
                }
            });        
    } else {
        Swal.fire({
            title: 'Carrito Vacio',
            text: 'No hay productos en el carrito.',
            iconHtml: '<ion-icon name="cart-outline" class="alert-icons"></ion-icon>',
            confirmButtonText: 'Ok'
            });
    }
    
}
window.buyProducts = buyProducts;
