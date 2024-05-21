export function saveProduct(id, products) {
    //traer el producto
    const found = products.find((each) => each.id == id);  
    
    // Crea el objeto del producto
    const addProduct = {
      id: found.id,
      name: found.name,
      price: found.price,
      image: found.image[0],
      color: document.querySelector("#color").value,
      quantity: parseInt(document.querySelector("#amount").value),
      discount: found.discount,
      subtotal: found.price * parseInt(document.querySelector("#amount").value),
    };
    // Obtiene el nombre del producto para usarlo como clave en localStorage
    // const productName = found.name.replace(/\s+/g, "_").toLowerCase();
    // const productName = found.id;
      
    let cart = [];
    if (localStorage.getItem("cart")) { //verifica si existe un array de productos del cart
      cart = JSON.parse(localStorage.getItem("cart")); // actualiza el local storage con los productos existentes
      Swal.fire('¡CANTIDAD ACTUALIZADA!', 'Se actualizó la cantidad de productos en el carrito', 'success');
      const ProductIndex = cart.findIndex(item => item.id == id);
  
      if (ProductIndex !== -1) { //verifica si el producto existe en el cart
        cart[ProductIndex].quantity += addProduct.quantity; // si existe, se actualiza la cantidad y el subtotal de cada producto en el local storage
        cart[ProductIndex].subtotal += addProduct.subtotal;
        } else {  // si no existe en el cart, agrega un producto al array
          cart.push(addProduct);
          Swal.fire('¡NUEVO PRODUCTO!', 'Producto agregado al carrito', 'success');
      }
    } else {
        cart.push(addProduct); // si no existe un array de productos del cart, lo crea.
        Swal.fire('¡NUEVO PRODUCTO!', 'Producto agregado al carrito', 'success');
      }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  }