//GOOD (dependency injection)
class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }
  async fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}
module.exports = ProductService;
