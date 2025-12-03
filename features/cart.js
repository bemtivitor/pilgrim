class CartStore extends EventTarget {
  constructor() {
    super();
    this.key = "cart";
    this.items = JSON.parse(localStorage.getItem(this.key)) || [];
  }

  _emit() {
    this.dispatchEvent(new CustomEvent("change", { detail: this.items }));
  }

  save() {
    localStorage.setItems(this.key, JSON.stringify(this.items));
    this._emit();
  }

  add(product) {
    const existing = this.items.find((i) => i.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  remove(id) {
    this.items = this.items.filter((product) => product.id !== id);
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }

  getCount() {
    // ver com o vitor se aqui vai mostrar a quantidade de "tipos" de produtos, ou contar cada produto, mesmo que seja mais que um
    // return this.items.length
    return this.items.reduce((sum, item) => item.quantity + sum, 0);
  }
}

export const Cart = new CartStore();
