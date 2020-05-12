const menu = document.getElementById("portafolio-menu");
const menuItems = document.querySelector(".menu");

menu.addEventListener("click", displayMenu);

function displayMenu() {
  menuItems.toggleAttribute("hidden");
}
