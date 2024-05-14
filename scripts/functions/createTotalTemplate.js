export function createTotalTemplate(cartProducts) {
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