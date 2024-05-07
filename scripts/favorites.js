const favProducts = JSON.parse(localStorage.getItem('favs'));

function createFavoriteCard(product) {
    return `
    <article class="product-cart" id="${product.id}">
        <img class="product-img" src="./assets/mock1.jpg" alt=""/>
        <div class="product-details">
            <span class="product-title">${product.name} 64GB, ${product.color} - Full Unlocked</span>
            <span class="product-price">$${product.price}</span>
        </div>                       
        <i class="fa-solid fa-trash" data-productid="${product.id}" onclick="removeFavorite(event)"></i>
    </article>`;
}
function createEmptyCard() {
    return `
    <article class="product-cart" data-price="0">
      <div class="product-details">
        <h2>No tienes ningún favorito guardado.</h2>
      </div>            
    </article>`;
}
function printFavorites(favProducts, idSelector) {
    let favoriteCartTemplate = '';
    if (favProducts) {
        favProducts.forEach(product => {
            favoriteCartTemplate += createFavoriteCard(product);
        });
    } else {
        favoriteCartTemplate = createEmptyCard();
    }    
    const favSelector = document.getElementById(idSelector);
    favSelector.innerHTML = favoriteCartTemplate;
}
function removeFavorite(event) { 
    const productid = event.target.dataset.productid;
    const index = favProducts.findIndex(product => product.id === productid);    
    if (index !== -1) {
        favProducts.splice(index,1)
        
        if (favProducts.length === 0) {
            localStorage.removeItem('favs');
            printFavorites(null, 'products-favs');            
        } else {
            let favElement = document.getElementById(`${productid}`);
            if (favElement) {
                favElement.parentNode.removeChild(favElement);
            }
            localStorage.setItem('favs', JSON.stringify(favProducts));
        }
    }
}

printFavorites(favProducts, 'products-favs');