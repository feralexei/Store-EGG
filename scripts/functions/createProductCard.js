//CREA UNA CARD PARA CADA PRODUCTO A PARTIR DE SUS DATOS
export function createProductCard(product) {
    return `
    <a class="product-card" href="./details.html?id=${product.id}">
      <img
        class="product-img"
        src="${product.image[0]}"
        alt="${product.id}"
      />
      <div class="product-info">
        <span class="product-title">${product.name}</span>
        <span class="product-description">${product.color}</span>
        <div class="product-price-block">
          <span class="product-price">$${product.price}</span>
          <span class="product-discount">${product.discount}% Off</span>
        </div>
        <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </a>`;
  }  