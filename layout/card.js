class Card extends HTMLElement {
  connectedCallback() {
    const url = this.getAttribute("url");
    const image = this.getAttribute("image");
    const discount = parseFloat(this.getAttribute("discount")) || 0;
    const title = this.getAttribute("title");
    const price = parseFloat(this.getAttribute("price")) || 0;

    const discountedPrice = discount ? price - price * discount : price;

    this.innerHTML = `
      <div class="product-card">
        <a href="${url}">
          <div class="image-wrapper">
            <img src="${image}" alt="${title}"
              onerror="this.src='https://placehold.co/400x500/EEE/31343C?text=CAMISA+1'">
            ${
              discount
                ? `<span class="discount-badge">-${discount * 100}% OFF</span>`
                : ""
            }
          </div>

          <div class="product-info">
            <h3>${title}</h3>

            <div class="price-container">
              ${
                discount
                  ? `<span class="old-price">R$ ${price.toFixed(2)}</span>`
                  : `<span class="current-price">R$ ${price.toFixed(2)}</span>`
              }

              ${
                discount
                  ? `<span class="current-price">R$ ${discountedPrice.toFixed(
                      2
                    )}</span>`
                  : ""
              }
            </div>
          </div>
        </a>
      </div>
    `;
  }
}

customElements.define("product-card", Card);
