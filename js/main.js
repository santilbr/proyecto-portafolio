const nav = document.querySelector("nav");

function Menu(nav) {
  const menu = nav.querySelector(".menu-list");
  const link = nav.querySelector(".link");

  link.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menu.toggleAttribute("hidden");
    link.classList.toggle("italica");
  }
}

Menu(nav);
