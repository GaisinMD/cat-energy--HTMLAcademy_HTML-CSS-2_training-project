var button = document.querySelector(".menu-toggle");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--show");
button.classList.remove("menu-toggle--hidden");

//кнопка вызова меню в мобильной версии
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (button.classList.contains("menu-toggle--active")) {
    menu.classList.remove("main-nav--show");
    button.classList.remove("menu-toggle--active");
  } else {
    menu.classList.add("main-nav--show");
    button.classList.add("menu-toggle--active");
  }
});
