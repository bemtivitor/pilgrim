export function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  const body = document.body;
  const overlay = document.getElementById("cart-container-overlay");
  cartContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("not-scrollable");
}

window.toggleCart = toggleCart;
