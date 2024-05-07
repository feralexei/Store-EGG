const searchSelector = document.querySelector("#search");

function filterProducts(event) {
    // Guarda el valor capturado por el evento en una variable "searchText"
    const searchText = event.target.value.toLowerCase(); // se convierte a minúsculas para poder compararse correctamente
    const filteredText = products.filter(product => product.name.toLowerCase().includes(searchText)); // filtrar el array de productos por aquellos cuyo nombre incluya el texto capturado
    
    printCards(filteredText, "products"); // actualiza la vista con una nueva impresión de las tarjetas
}
searchSelector.addEventListener("keyup", event=>filterProducts(event));
