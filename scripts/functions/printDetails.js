export const detailsSelector = document.querySelector("#details");

export function printDetails(id, products) {
    const product = products.find((each) => each.id == id);
    const detailsTemplate = `
            <section class="product-images-block">
              <div class="product-images">
                ${product.image
                  .map(
                    (each) => `<img class="mini-img" src="${each}" alt="${product.name}" onclick="changeMini(event)"}/>`
                  )
                  .join("")}
              </div>
              <img
                class="big-img"
                id="big-img"
                src="${product.image[0]}"
                alt="${product.name}"
              />
            </section>
            <div class="product-description-block">
              <h1 class="product-title">${product.name}</h1>
              <form class="product-selector">
                <fieldset class="product-fieldset">
                  <label class="product-label" for="color">Color</label>
                  <select class="product-select" id="color">
                    <option value="" disabled selected hidden>Selecciona un color</option>
                    ${product.color
                      .map((each) => `<option value=${each}>${each}</option>`)
                      .join("")}
                  </select>
                </fieldset>
              </form>
              <div class="product-description">
                <span class="product-label">SKU</span>
                <p>${product.id}</p>
              </div>
              <div class="product-description">
                <span class="product-label">Descripción</span>
                <p>
                  Experience the power of creativity with the MacBook Pro 13'4.
                  Featuring 8GB of RAM and 512GB of storage, this laptop provides
                  the performance and storage capacity needed for demanding tasks.
                  The sleek design in silver and space gray adds a touch of
                  sophistication. The high-resolution Retina display brings your
                  visuals to life, whether you're editing photos, creating videos,
                  or simply browsing the web. With the latest technology and a
                  lightweight build, the MacBook Pro 13'4 is the perfect companion
                  for professionals and creative individuals alike.
                </p>
              </div>
            </div>
            <div class="product-checkout-block">
              <div class="checkout-container">
                <span class="checkout-total-label">Total:</span>
                <h2 id="price" class="checkout-total-price">$${product.price}</h2>
                <p class="checkout-description">
                  Incluye impuesto PAIS y percepción AFIP. Puedes ahorrar un ${product.discount}%
                  haciendo la solicitud en AFIP.
                </p>
                <ul class="checkout-policy-list">
                  <li>
                    <span class="policy-icon"
                      ><img src="./assets/truck.png" alt="Truck"
                    /></span>
                    <span class="policy-desc"
                      >Agrega el producto al carrito para conocer los costos de
                      envío</span
                    >
                  </li>
                  <li>
                    <span class="policy-icon"
                      ><img src="./assets/plane.png" alt="Plane"
                    /></span>
                    <span class="policy-desc"
                      >Recibí aproximadamente entre 10 y 15 días hábiles,
                      seleccionando envío normal</span
                    >
                  </li>
                </ul>
                <div class="checkout-process">
                  <div class="top">
                    <input id="amount" type="number" min="1" value="1" onchange="changeSubtotal(event)" />
                    <button type="button" class="cart-btn" onclick="saveProduct('${product.id}')">Añadir al Carrito</button>
                  </div>
                </div>
              </div>
            </div>
      `;
  
    detailsSelector.innerHTML = detailsTemplate;
  }

export const favoriteSelector = document.getElementById("favs-container");

export function printFavoritesSection(favProducts) {
    favoriteSelector.innerHTML = "";
    const productsToShow = favProducts.slice(0, 3);
    
    productsToShow.forEach(product =>{
      const favsTemplate = `
        <a class="product-card" href="./details.html">
          <img class="product-img" src="${product.image}" alt="${product.name}" />
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
        </a>
        `;
    
      favoriteSelector.innerHTML += favsTemplate;
    });
  }
  