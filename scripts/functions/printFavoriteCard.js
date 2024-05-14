import { createFavoriteCard } from "./createFavoriteCard.js";
import { createEmptyFavoriteCard } from "./createEmptyFavoriteCard.js";

export function printFavoriteCard(favProducts, idSelector) {
    const favSelector = document.getElementById(idSelector);
    let favoriteCartTemplate = '';
    if (favProducts) {
        favProducts.forEach(product => {
            favoriteCartTemplate += createFavoriteCard(product);
        });
    } else {
        favoriteCartTemplate = createEmptyFavoriteCard();
    }    
    favSelector.innerHTML = favoriteCartTemplate;
}