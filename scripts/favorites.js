import { options, printNavBar, printFooter } from "./functions/printLayout.js";
import { createFavoriteCard } from "./functions/createFavoriteCard.js";
import { createEmptyFavoriteCard } from "./functions/createEmptyFavoriteCard.js";
import { printFavoriteCard } from "./functions/printFavoriteCard.js";
import { removeFavoriteCard } from "./functions/removeFavoriteCard.js";

printNavBar(options, "nav");
printFooter(options, "footer");

const favProducts = JSON.parse(localStorage.getItem("favs"));
printFavoriteCard(favProducts, "products-favs");
window.removeFavoriteCard = (event) => removeFavoriteCard(event, favProducts);