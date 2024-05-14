//CREA UNA CARD VACIA
export function createEmptyCard() {
  return `
      <article class="product-cart" data-price="0">
        <div class="product-details">
          <h2>¡Carrito vacío!</h2>
          <h1>Actualmente no tienes ningún producto en tu carrito de compras.</h1>
        </div>            
      </article>`;
}  