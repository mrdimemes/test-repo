class Product {
  constructor({ id, name, price, description }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  withDiscount(percent) {
    const discountedPrice = this.price * (1 - percent / 100);
    const newObj = new Product(this);
    newObj.discountedPrice = discountedPrice;
    return newObj;
  }
}


class Shop {
  products;

  constructor() {
    this.products = [];
  }

  addProducts(products) {
    this.products = this.products.concat(
      products.map((product) => { return new Product(product) })
    );
  }

  getProduct(id) {
    for (const product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
  }
}


// test case from example

var products = [
  {
    "id": 3,
    "name": "Cake",
    "price": 333,
    "description": "The tastiest cake in the world."
  },
  {
    "id": 5,
    "name": "Petroleum",
    "price": 2977,
    "description": "Black gold."
  },
  {
    "id": 8,
    "name": "Moscow metro logo",
    "price": 117000000,
    "description": "Remove circle from logo"
  }
];

var shop = new Shop();
shop.addProducts(products);

// true
console.log(shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6);

