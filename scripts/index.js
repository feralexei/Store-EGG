import { Product } from "./products.js";
import { loadLayout } from "./functions/printLayout.js";
import { createProductCard } from "./functions/createProductCard.js";
import { loadProducts, printProductCards} from "./functions/printProductCards.js";
import { filterProducts } from "./functions/filterProducts.js";

document.addEventListener("DOMContentLoaded", async () => {
    const products = await loadProducts();
    printProductCards(products, "products");
    const searchSelector = document.querySelector("#search");
    searchSelector.addEventListener("keyup", (event) => filterProducts(event, products));
});