class CarouselContainer extends HTMLElement {
  connectedCallback() {
    this.classList.add("carousel-container");

    // Drag-to-scroll logic
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    this.addEventListener("mousedown", (e) => {
      isDown = true;
      this.style.cursor = "grabbing";
      startX = e.pageX - this.offsetLeft;
      scrollLeft = this.scrollLeft;
    });

    this.addEventListener("mouseleave", () => {
      isDown = false;
      this.style.cursor = "pointer";
    });

    this.addEventListener("mouseup", () => {
      isDown = false;
      this.style.cursor = "pointer";
    });

    this.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();

      const x = e.pageX - this.offsetLeft;
      const walk = (x - startX) * 2;
      this.scrollLeft = scrollLeft - walk;
    });
  }
}

customElements.define("carousel-container", CarouselContainer);
