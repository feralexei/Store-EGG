class Product {
  constructor(id, image, name, color, price, discount){
    this.id = id
    this.image = image
    this.name = name
    this.color = color
    this.price = price
    this.discount = discount
  }
}

export const products = [
  new Product('P7Q8R90', ['./assets/mock1.jpg','./assets/mock2.jpg', './assets/mock3.webp', './assets/mock4.webp'], 'iPad Pro 12.9', ['Silver','White', 'Black'], 1800, 50),
  new Product('P7Q8R91', ['./assets/mock1.jpg','./assets/mock2.jpg', './assets/mock3.webp', './assets/mock4.webp'], 'iPhone 12', ["Silver", "Graphite", "Gold", "Blue"], 1400, 20),
  new Product('P7Q8R92', ['./assets/mock1.jpg','./assets/mock2.jpg', './assets/mock3.webp', './assets/mock4.webp'], 'MacBook Air', ["Graphite", "Space Gray"], 1600, 30),
  new Product('P7Q8R93', ['./assets/mock1.jpg','./assets/mock2.jpg', './assets/mock3.webp', './assets/mock4.webp'], 'Apple Watch Series 6', ["Graphite", "Gold"], 600, 10),
  new Product('P7Q8R94', ['./assets/mock1.jpg','./assets/mock2.jpg', './assets/mock3.webp', './assets/mock4.webp'], 'AirPods Pro', ["Graphite", "Blue"], 300, 15),
  new Product('P7Q8R95', ['./assets/mock1.jpg','./assets/mock2.jpg', './assets/mock3.webp', './assets/mock4.webp'], 'HomePod Mini', ["Gold", "Blue", "Space Gray"], 200, 5),
];
export { Product };