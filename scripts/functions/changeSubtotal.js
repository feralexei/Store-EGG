export function changeSubtotal(event){
    const quantity = amount.value;
    const product = products.find((each) => each.id == id);
    const subtotal = quantity * product.price;
    const subtotalSelector = document.getElementById("price");
    subtotalSelector.innerHTML = "$" + subtotal;
  }