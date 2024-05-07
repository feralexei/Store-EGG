const cartProducts = JSON.parse(localStorage.getItem("cart"));

//CREA UNA CARD PARA CADA PRODUCTO A PARTIR DE SUS DATOS
function createCartCard(cartProduct) {
    return `
    <article id="product-cart-${cartProduct.id}" class="product-cart" data-price="${cartProduct.price}">
      <img class="product-img" src="${cartProduct.image}" alt=""/>
        <div class="product-details">
          <span class="product-title">${cartProduct.name}, 64GB, ${cartProduct.color} - Full Unlocked</span>
          <span class="product-description">Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage</span>
          <div>
            <input class="product-input" id="amount" type="number" min="1" value="${cartProduct.quantity}" onchange="changeQuantity(event)"/>                             
            <i class="fa-regular fa-heart" data-productid="${cartProduct.id}" onclick="addFavorite(event)"></i>
            <i class="fa-solid fa-trash" data-productid="${cartProduct.id}" onclick="removeCard(event)"></i>          
          </div>          
        </div>                       
        <span class="product-price" id="price">$${cartProduct.subtotal}</span>
    </article>
    `; 
}
//CREA UNA CARD VACIA
function createEmptyCard() {
  return `
      <article class="product-cart" data-price="0">
        <div class="product-details">
          <h2>¡Carrito vacío!</h2>
          <h1>Actualmente no tienes ningún producto en tu carrito de compras.</h1>
        </div>            
      </article>`;
}  
function createTotalTemplate(cartProducts) {
  let total = 0;
  if (cartProducts) {
    for (const cartProduct of cartProducts) {
      // Suma el subtotal de cada producto al total
      total += cartProduct.subtotal;
    }  
  }
  return `
    <article class="cart-resume" id="total">
        <div class="cart-data">
            <h2 class="cart-title">Resumen del Pedido</h2>
            <p class="cart-total">Subtotal </p>
            <span id="total" class="total">$${total}</span>
            <p class="cart-tax">Incluye impuesto PAIS y percepción AFIP</p>
            <button type="button" class="buy-btn" onclick="buyProducts(event)">Finalizar Compra</button>
        </div>
    </article>
    `;
}
function printTotal(cartProducts, idSelector) {
    let productCartTemplate = "";
    let totalTemplate = "";
    
    if (cartProducts) {
      cartProducts.forEach((cartProduct) => {
        productCartTemplate += createCartCard(cartProduct); // Crea una tarjeta de producto y la agrega al array de productos
      });     
      totalTemplate = createTotalTemplate(cartProducts); // Crea el resumen del pedido
    } else {
      productCartTemplate = createEmptyCard();
      totalTemplate = createTotalTemplate(cartProducts);
      
    }   
    const cartSelector = document.getElementById(idSelector);
    cartSelector.innerHTML = productCartTemplate + totalTemplate;
}
function changeQuantity(event){
    const currentProductCard = event.target.closest('.product-cart'); // Encuentra la card de producto actual
    const id = currentProductCard.id.replace('product-cart-', ''); // Obtiene el ID del producto

    const newQuantity = parseInt(event.target.value); // Obtiene el nuevo valor de cantidad del input
    const productPrice = parseFloat(currentProductCard.dataset.price); // Obtiene el precio inicial del producto desde el dataset
    const newSubtotal = newQuantity * productPrice; // Calcula el nuevo subtotal

    // Actualiza el subtotal dentro de la tarjeta de producto actual
    currentProductCard.querySelector('.product-price').textContent = `$${newSubtotal}`;

    // Actualiza la cantidad y el subtotal en el objeto del producto en el local
    let cart = JSON.parse(localStorage.getItem("cart"));
    const ProductIndex = cart.findIndex(item => item.id == id);
    if (ProductIndex !== -1) {
        cart[ProductIndex].quantity = newQuantity;
        cart[ProductIndex].subtotal = newSubtotal;
        localStorage.setItem("cart", JSON.stringify(cart));
    }   
    updateTotal();
}
function updateTotal() {
    const cartProducts = JSON.parse(localStorage.getItem("cart"));
    let newTotal = 0;
    // Iterar sobre cada producto del carrito para sumar los subtotales individuales
    if (cartProducts) {
        for (const cartProduct of cartProducts) {
            newTotal += cartProduct.subtotal;
        }
    }
    // Actualiza el subtotal total del pedido en el HTML
    document.querySelector('.total').innerHTML  = `$${newTotal}`;
}
function removeCard(event) {
  const cartProducts = JSON.parse(localStorage.getItem("cart"));
  const productid = event.target.dataset.productid;
  const index = cartProducts.findIndex(product => product.id === productid);

  // Verifica si se encontró el producto
  if (index !== -1) {
    // Elimina el producto del array en el almacenamiento local
    cartProducts.splice(index, 1);
    // Si no hay más elementos en el array 'cart', elimina el key del almacenamiento local
    if (cartProducts.length === 0) {
      localStorage.removeItem('cart');
      printTotal(null, "cartproducts");
    } else {
      // Elimina la card
      let cartElement = document.getElementById(`product-cart-${productid}`);
      if (cartElement) {
        cartElement.parentNode.removeChild(cartElement);
      }
      // Actualiza el almacenamiento local con los productos restantes
      localStorage.setItem('cart', JSON.stringify(cartProducts));
      
      updateTotal();
    }
  }
}
function addFavorite(event) { 
  const icon = event.target;
  icon.classList.toggle('fa-regular');
  icon.classList.toggle('fa-solid');
    
  const productid = event.target.dataset.productid;
  const found = cartProducts.find(product => product.id === productid);
  let favorites = [];
  if (localStorage.getItem("favs")) {  
    favorites = JSON.parse(localStorage.getItem("favs"));

    const index = favorites.findIndex(product => product.id === productid);    
    if (index !== -1) {
        favorites.splice(index,1)
      } else {
        favorites.push(found);
    }
  } else {
    favorites.push(found);
    }

  localStorage.setItem('favs', JSON.stringify(favorites));
}
window.addEventListener('DOMContentLoaded', function() {
  const favoriteIconSelector = document.querySelectorAll('.fa-heart');

  favoriteIconSelector.forEach(icon => {
    const productid = icon.dataset.productid;
    const isFavorite = JSON.parse(localStorage.getItem('favs')).some(product => product.id === productid);
    if (isFavorite) {
      icon.classList.add('fa-solid');
    } else {
      icon.classList.remove('fa-solid');
    }
  });
});

printTotal(cartProducts, "cartproducts");


