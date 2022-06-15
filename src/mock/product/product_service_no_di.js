//나쁜 버전 (no dependency injection)
const ProductClient = require("./product_client");
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }
  async fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}
module.exports = ProductService;
