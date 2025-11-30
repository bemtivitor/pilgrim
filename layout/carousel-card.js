class CarouselCard extends HTMLElement {
  connectedCallback() {
    const url = this.getAttribute("url");
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const comingSoon = this.hasAttribute("comingSoon");

    this.innerHTML = `
      <div class="collection-card ${comingSoon ? "coming-soon" : ""}">
        ${comingSoon ? `<div class="coming-soon-badge">EM BREVE</div>` : ""}
        
        <img src="${image}" alt="${title}">
        
        <span class="banner-title-span">
          ${title}
          ${
            description
              ? `<span class="coming-soon-text">${description}</span>`
              : ""
          }
        </span>
      </div>
    `;
  }
}

customElements.define("carousel-card", CarouselCard);
