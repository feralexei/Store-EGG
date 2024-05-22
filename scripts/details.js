import { Product } from "./products.js";
import { loadProducts } from "./functions/loadProducts.js";
import { loadLayout } from "./functions/printLayout.js";
import { detailsSelector, printDetails, favoriteSelector, printFavoritesSection } from "./functions/printDetails.js";
import { changeMini } from "./functions/changeMini.js";
import { changeSubtotal } from "./functions/changeSubtotal.js";
import { saveProduct } from "./functions/saveProduct.js";


const favProducts = JSON.parse(localStorage.getItem("favs")) || [];
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
console.log("ID del producto:", id);

document.addEventListener("DOMContentLoaded", async () => {
    const products = await loadProducts();
    // Asigna las funciones al contexto global para que puedan ser usadas en los event handlers inline
    window.changeMini = changeMini;
    window.changeSubtotal = (event) => changeSubtotal(event, id, products);
    window.saveProduct = (id) => saveProduct(id, products);
    
    printDetails(id, products);
    printFavoritesSection(favProducts);
});



