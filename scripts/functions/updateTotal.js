export function updateTotal() {
    const cartProducts = JSON.parse(localStorage.getItem("cart"));
    let newTotal = 0;
    // Iterar sobre cada producto del carrito para sumar los subtotales individuales
    if (cartProducts) {
        for (const cartProduct of cartProducts) {
            newTotal += cartProduct.subtotal;
        }
    }
    // Actualiza el subtotal total del pedido en el HTML
    document.querySelector('.total').innerHTML  = `$${newTotal}`;
}