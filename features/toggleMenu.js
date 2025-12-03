export function toggleMenu() {
  const drawer = document.getElementById("mobileDrawer");
  const overlay = document.querySelector(".overlay");
  drawer.classList.toggle("active");
  overlay.classList.toggle("active");
}
