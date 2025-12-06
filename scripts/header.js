import { Cart } from "../features/cart.js";

function init() {
  const count = document.getElementById("cart-count");
  if (!count) {
    console.log("header not loaded yet… retrying");
    requestAnimationFrame(init);
    return;
  }

  function updateCount() {
    count.textContent = Cart.getCount();
  }

  updateCount();
  Cart.addEventListener("change", updateCount);
}

init();
