export const options = [
  {
    title: "Ofertas",
    href: "./index.html",
    refs: ["Laptops", "Audio", "Auticulares"],
  },
  {
    title: "Cómo comprar",
    href: "./index.html",
    refs: ["Formas de pago", "Envios", "Devoluciones"],
  },
  {
    title: "Costos y tarifas",
    href: "./index.html",
    refs: ["Impuestos", "Facturación"],
  },
  {
    title: "Mis pedidos",
    href: "./index.html",
    refs: ["Pedir nuevamente", "Lista de deseos"],
  },
  { title: "Garantía", 
    href: "./index.html", 
    refs: ['Terminos y condiciones', 'Política de devoluciones'],
  }
];

export function printNavBar(options, id) {
  let template = "";
  for (const option of options) {
    template =
      template +
      `
      <li class="nav-li">
        <a class="nav-a" href="${option.href}">${option.title}</a>
      </li>
    `;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}

export function printFooter(options, id) {
  let template = "";
  for (const option of options) {
    template =
      template +
      `
        <ul class="footer-ul">
        <li class="footer-main-item">
          <a class="footer-a" href="./index.html">${option.title}</a>
        </li>
        ${option.refs
          .map(
            (ref) =>
              `<li class="footer-li"><a class="footer-a" href="./index.html">${ref}</a></li>`
          )
          .join("")}
      </ul>
    `;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}