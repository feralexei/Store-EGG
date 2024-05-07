const buySelector = document.getElementById("buy-btn");

function buyProducts(event) {
    // Elimina todos los productos del array en el almacenamiento local
    localStorage.removeItem('cart');
  
    printTotal(null, "cartproducts");
  }
