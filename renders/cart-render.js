// scripts/cart-render.js
import { Cart } from "../features/cart.js";

console.log("cart-render loaded");

const cartList = document.querySelector(".cart-list");

function renderCart() {
  if (!cartList) return;
  cartList.innerHTML = "";

  if (!Cart.items || Cart.items.length === 0) {
    cartList.innerHTML = `<p class="empty-msg">Seu carrinho está vazio</p>`;
    return;
  }

  Cart.items.forEach((item) => {
    const el = document.createElement("cart-item");

    el.setAttribute("product-id", item.id);
    el.setAttribute("image", item.image || "");
    el.setAttribute("name", item.name || "");
    el.setAttribute("size", item.size || "");
    el.setAttribute("quantity", String(item.quantity || 0));
    el.setAttribute("price", item.price || "0");

    cartList.appendChild(el);
  });
}

renderCart();
Cart.addEventListener("change", renderCart);
