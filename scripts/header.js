import { Cart } from "../features/cart.js";
console.log("entrpu?");

document.addEventListener("DOMContentLoaded", () => {
  console.log("entrpu?");
  const count = document.getElementById("cart-count");

  function updateCount() {
    count.textContent = Cart.getCount();
  }

  updateCount();
});
