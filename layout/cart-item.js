class CartItem extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const size = this.getAttribute("size");
    const quantity = this.getAttribute("quantity");
    const price = this.getAttribute("price");

    this.innerHTML = `
      <div class="card-container">
        <div class="card-image">
          <img src="${image}" alt="${title}">
        </div>
        <div class="card-info">
          <p>${title} <span>(${size})</span></p>
          <i class="fa-solid fa-trash trash"></i>
          <div class="card-actions">
            <button><i class="fa-solid fa-minus"></i></button>
            <p>${quantity}</p>
            <button><i class="fa-solid fa-plus"></i></button>
          </div>
          <p class="price">R$ ${price}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("cart-item", CartItem);
