const navSelector = document.querySelector("#nav .nav-li");
const footerSelector = document.querySelector("#footer .footer-content");

//Links del nav section
const navLinks = [
  { title: "Ofertas", linkTo: "./outlet.html" },
  { title: "Como comprar", linkTo: "./howto.html" },
  { title: "Costos y tarifas", linkTo: "./taxs.html" },
  { title: "Mis pedidos", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];
//Links del footer section
const footerLinks = [
  {
    title: 'Ofertas',
    links: [
      { text: 'Laptops', linkTo: '#' },
      { text: 'Audio', linkTo: '#' },
      { text: 'Auriculares', linkTo: '#' }
    ]
  },
  {
    title: 'Cómo comprar',
    links: [
      { text: 'Formas de pago', linkTo: '#' },
      { text: 'Envios', linkTo: '#' },
      { text: 'Devoluciones', linkTo: '#' }
    ]
  },
  {
    title: 'Costos y tarifas',
    links: [
      { text: 'Impuestos', linkTo: '#' },
      { text: 'Facturación', linkTo: '#' }
    ]
  },
  {
    title: 'Mis pedidos',
    links: [
      { text: 'Pedir nuevamente', linkTo: '#' },
      { text: 'Lista de deseos', linkTo: '#' }
    ]
  },
  {
    title: 'Garantía',
    links: [
      { text: 'Terminos y condiciones', linkTo: '#' },
      { text: 'Política de devoluciones', linkTo: '#' }
    ]
  }
];

//Creacion de los links del nav
for (const link of navLinks) {
  const navList = document.createElement("li");
  navList.className = "nav-li";
  
  const navItem = document.createElement("a");
  navItem.className = "nav-a";
  navItem.textContent = link.title;
  navItem.href = link.linkTo;

  navList.appendChild(navItem);
  navSelector.appendChild(navList);
}

//Creacion de los links del footer
for (const section of footerLinks) {
  const sectionElement = document.createElement('ul'); //Creamos un elemento <ul> para cada sección.
  sectionElement.classList.add('footer-ul');

  // Crear los elementos de la sección
  const mainItems = document.createElement('li');  //Creamos los links principales y asignamos la clase y propiedades
  mainItems.classList.add('footer-main-item');
  const mainLinks = document.createElement('a');
  mainLinks.classList.add('footer-a');
  mainLinks.href = '#';
  mainLinks.textContent = section.title;
  mainItems.appendChild(mainLinks);
  sectionElement.appendChild(mainItems);

  // Crear los sub-elementos de la sección
  for (const link of section.links) {  //Creamos los links secundarios y asignamos la clase y propiedades
    const item = document.createElement('li');
    item.classList.add('footer-li');
    const linkElement = document.createElement('a');
    linkElement.classList.add('footer-a');
    linkElement.href = link.linkTo;
    linkElement.textContent = link.text;
    item.appendChild(linkElement);
    sectionElement.appendChild(item);
  }

  // Agregar la sección al footer
  footerSelector.appendChild(sectionElement);
}