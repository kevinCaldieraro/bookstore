module.exports = class Order {
  #total;
  #items;
  #user;
  constructor(items, user) {
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error(
          `Quantidade insuficiente em estoque! Em estoque: ${product.inStock}`
        );
      }
    });
    this.#items = items;
    this.#user = user;
    this.#total = this.#items.reduce((accum, { product, quantity }) => {
      return accum + product.price * quantity;
    }, 0);
  }

  get orderData() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total
    };
  }
};
