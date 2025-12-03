import { Cart } from "./cart.js";

const counter = document.querySelector("#cart-count");

function updateCartBadge() {
  counter.textContent = Cart.getCount();
}

updateCartBadge();

window.addEventListener("cart:change", updateCartBadge);
