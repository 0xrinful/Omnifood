const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click", function (event) {
  document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", function (event) {
  document.body.classList.remove("show-mobile-menu");
});
