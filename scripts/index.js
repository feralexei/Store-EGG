import { options, printNavBar, printFooter } from "./functions/printLayout.js";
import { Product, products } from "./products.js";
import { createProductCard } from "./functions/createProductCard.js";
import { printProductCards } from "./functions/printProductCards.js";
import { filterProducts } from "./functions/filterProducts.js";

printNavBar(options, "nav");
printFooter(options, "footer");

printProductCards(products, "products"); // Llama a la función printCards para imprimir todas las tarjetas de productos en el elemento con el ID "products"
const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", (event) => filterProducts(event, products));