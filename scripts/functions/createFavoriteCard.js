export function createFavoriteCard(product) {
    return `
    <article class="product-cart" id="${product.id}">
        <img class="product-img" src="./assets/mock1.jpg" alt=""/>
        <div class="product-details">
            <span class="product-title">${product.name} 64GB, ${product.color} - Full Unlocked</span>
            <span class="product-price">$${product.price}</span>
        </div>                       
        <i class="fa-solid fa-trash" data-productid="${product.id}" onclick="removeFavoriteCard(event);"></i>
    </article>`;
}
