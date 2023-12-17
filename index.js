document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-button");
  const navbarMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", function () {
    navbarMenu.classList.add("active");
    closeButton.classList.add("active");
  });

  closeButton.addEventListener("click", function () {
    navbarMenu.classList.remove("active");
    closeButton.classList.remove("active");
  });
});
