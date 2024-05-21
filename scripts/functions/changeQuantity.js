import { updateTotal } from "./updateTotal.js";

export function changeQuantity(event){
    const currentProductCard = event.target.closest('.product-cart'); // Encuentra la card de producto actual
    const id = currentProductCard.id.replace('product-cart-', ''); // Obtiene el ID del producto

    const newQuantity = parseInt(event.target.value); // Obtiene el nuevo valor de cantidad del input
    const productPrice = parseFloat(currentProductCard.dataset.price); // Obtiene el precio inicial del producto desde el dataset
    const newSubtotal = newQuantity * productPrice; // Calcula el nuevo subtotal

    // Actualiza el subtotal dentro de la tarjeta de producto actual
    currentProductCard.querySelector('.product-price').textContent = `$${newSubtotal}`;

    // Actualiza la cantidad y el subtotal en el objeto del producto en el local
    let cart = JSON.parse(localStorage.getItem("cart"));
    const ProductIndex = cart.findIndex(item => item.id == id);
    if (ProductIndex !== -1) {
        cart[ProductIndex].quantity = newQuantity;
        cart[ProductIndex].subtotal = newSubtotal;
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Cantidad actualizada',
            text: `El subtotal del producto es $${newSubtotal}`,
            showConfirmButton: false,
            timer: 3000
            });
    }   
    updateTotal();
}