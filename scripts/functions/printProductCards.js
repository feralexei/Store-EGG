import { createProductCard } from "./createProductCard.js";

//IMPRIME TODAS LAS TARJETAS DE PRODUCTOS EN EL HTML
export function printProductCards(arrayOfProducts, idSelector) {
  arrayOfProducts.sort((a, b) => a.name.localeCompare(b.name));

  let productsTemplate = ""; // Inicializa una cadena vacía para almacenar las tarjetas de productos generadas
  const productsSelector = document.getElementById(idSelector);   // Obtiene el elemento "ID" HTML donde se imprimirán las tarjetas de productos
  if (arrayOfProducts.length>0) {
    for (const product of arrayOfProducts) {  // Itera sobre el array de productos y genera una tarjeta para cada uno
      productsTemplate += createProductCard(product); // Llama a la función createCard para generar una tarjeta de producto y la agrega a la cadena de productos
    }
    productsSelector.innerHTML = productsTemplate; // Inserta todas las tarjetas de productos generadas en el HTML del documento    
  } else {
    productsSelector.innerHTML = "<h3 style='width: 100%; text-align: center'>No hay coincidencias</h3>";
  } 
}
