// features/cart.js
class CartStore extends EventTarget {
  constructor() {
    super();
    this.key = "cart";
    try {
      this.items = JSON.parse(localStorage.getItem(this.key)) || [];
    } catch {
      this.items = [];
    }
  }

  _emit() {
    this.dispatchEvent(
      new CustomEvent("change", { detail: structuredClone(this.items) })
    );
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
    this._emit();
  }

  add(product, amount = 1) {
    if (!product || !product.id) return;
    const existing = this.items.find(
      (i) => i.id === product.id && i.size === product.size
    );

    if (existing) {
      existing.quantity = (existing.quantity || 0) + Number(amount);
    } else {
      this.items.push({ ...product, quantity: Number(amount) });
    }
    this.save();
  }

  setQuantity(id, size, quantity) {
    quantity = Number(quantity);
    const idx = this.items.findIndex((i) => i.id === id && i.size === size);
    if (idx === -1) return;

    if (quantity <= 0) {
      this.items.splice(idx, 1);
    } else {
      this.items[idx].quantity = quantity;
    }
    this.save();
  }

  changeQuantity(id, size, delta) {
    const item = this.items.find((i) => i.id === id && i.size === size);
    if (!item) return;
    item.quantity = (item.quantity || 0) + Number(delta);
    if (item.quantity <= 0) {
      this.items = this.items.filter((i) => !(i.id === id && i.size === size));
    }
    this.save();
  }

  remove(id, size) {
    if (typeof size === "undefined") {
      this.items = this.items.filter((product) => product.id !== id);
    } else {
      this.items = this.items.filter(
        (product) => !(product.id === id && product.size === size)
      );
    }
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }

  getCount() {
    return this.items.reduce(
      (sum, item) => sum + (Number(item.quantity) || 0),
      0
    );
  }
}

export const Cart = new CartStore();
