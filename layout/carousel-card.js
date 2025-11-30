class CarouselCard extends HTMLElement {
  connectedCallback() {
    const url = this.getAttribute("url");
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const comingSoon = this.getAttribute("comingSoon");
  }
}
