// components/cart-item.js
import { Cart } from "../features/cart.js";

class CartItem extends HTMLElement {
  connectedCallback() {
    this.productId = this.getAttribute("product-id");
    this.image = this.getAttribute("image");
    this.name = this.getAttribute("name");
    this.size = this.getAttribute("size");
    this.quantity = Number(this.getAttribute("quantity")) || 0;
    this.price = this.getAttribute("price");

    this.render();
    this.attachEvents();
  }

  render() {
    this.innerHTML = `
      <div class="card-container">
        <div class="card-image">
          <img src="${this.image}" alt="${this.name}">
        </div>
        <div class="card-info">
          <p>${this.name} <span>(${this.size})</span></p>
          <i class="fa-solid fa-trash trash" title="Remover item"></i>
          <div class="card-actions">
            <button class="btn-minus" title="Diminuir quantidade"><i class="fa-solid fa-minus"></i></button>
            <p class="qty">${this.quantity}</p>
            <button class="btn-plus" title="Aumentar quantidade"><i class="fa-solid fa-plus"></i></button>
          </div>
          <p class="price">R$ ${this.price}</p>
        </div>
      </div>
    `;
  }

  attachEvents() {
    const trash = this.querySelector(".trash");
    const plus = this.querySelector(".btn-plus");
    const minus = this.querySelector(".btn-minus");

    trash.addEventListener("click", () => {
      Cart.remove(this.productId, this.size);
    });

    plus.addEventListener("click", () => {
      Cart.changeQuantity(this.productId, this.size, +1);
    });

    minus.addEventListener("click", () => {
      Cart.changeQuantity(this.productId, this.size, -1);
    });
  }
}

customElements.define("cart-item", CartItem);
