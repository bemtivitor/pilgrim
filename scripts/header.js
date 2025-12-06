import { Cart } from "../features/cart";

const counter = document.querySelector("#cart-count");

function updateCartBadge() {
  counter.textContent = Cart.getCount();
}

updateCartBadge();

window.addEventListener("cart:change", updateCartBadge);
