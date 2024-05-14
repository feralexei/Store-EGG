import { printFavoriteCard } from "./printFavoriteCard.js";

export function removeFavoriteCard(event, favProducts) { 
    const productid = event.target.dataset.productid;
    const index = favProducts.findIndex(product => product.id === productid);    
    if (index !== -1) {
        favProducts.splice(index,1)
        
        if (favProducts.length === 0) {
            localStorage.removeItem('favs');
            printFavoriteCard(null, 'products-favs');            
        } else {
            let favElement = document.getElementById(`${productid}`);
            if (favElement) {
                favElement.parentNode.removeChild(favElement);
            }
            localStorage.setItem('favs', JSON.stringify(favProducts));
        }
    }
}