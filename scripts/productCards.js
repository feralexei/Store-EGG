//CREA UNA CARD PARA CADA PRODUCTO A PARTIR DE SUS DATOS
function createCard(product) {
  return `
  <a class="product-card" href="./details.html?id=${product.id}">
    <img
      class="product-img"
      src="${product.image[0]}"
      alt="${product.id}"
    />
    <div class="product-info">
      <span class="product-title">${product.name}</span>
      <span class="product-description">${product.color}</span>
      <div class="product-price-block">
        <span class="product-price">$${product.price}</span>
        <span class="product-discount">${product.discount}% Off</span>
      </div>
      <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
      </div>
    </div>
  </a>`;
}

//IMPRIME TODAS LAS TARJETAS DE PRODUCTOS EN EL HTML
function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = ""; // Inicializa una cadena vacía para almacenar las tarjetas de productos generadas
  for (const product of arrayOfProducts) {  // Itera sobre el array de productos y genera una tarjeta para cada uno
    productsTemplate += createCard(product); // Llama a la función createCard para generar una tarjeta de producto y la agrega a la cadena de productos
  }
  const productsSelector = document.getElementById(idSelector);   // Obtiene el elemento "ID" HTML donde se imprimirán las tarjetas de productos
  productsSelector.innerHTML = productsTemplate; // Inserta todas las tarjetas de productos generadas en el HTML del documento
}
printCards(products, "products"); // Llama a la función printCards para imprimir todas las tarjetas de productos en el elemento con el ID "products"
