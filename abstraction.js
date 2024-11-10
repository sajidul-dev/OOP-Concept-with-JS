class BetterArray {
  #items;
  constructor() {
    this.#items = [];
  }
  getItems() {
    return [...this.#items];
  }
  addItem(item) {
    this.#items.push(item);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
  modifyItem(itemToModify, newItem) {
    const index = this.#items.indexOf(itemToModify);
    if (index !== -1) {
      this.#items[index] = newItem;
    }
  }
}

const array = new BetterArray();
array.addItem(1);
array.addItem(2);
console.log(array.getItems());
