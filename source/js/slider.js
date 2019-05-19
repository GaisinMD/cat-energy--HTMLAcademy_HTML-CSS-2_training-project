var before = document.querySelector("#before");
var after = document.querySelector("#after");
var image = document.querySelector(".cat-transformer__cat-before");
var controller = document.querySelector(".controller-before-after__input");
var slider = document.querySelector(".controller-before-after__input-wraper");
var decorationMain = document.querySelector(".cat-transformer-decoration");
var decorationSecond = document.querySelector(".global-wraper--color");

before.addEventListener("click", function (evt) {
  evt.preventDefault();
  image.style.width = "690px";
  controller.style.left = "0px";
  if (window.innerWidth >= 768) {
    decorationMain.style.width = "50%";
    decorationSecond.classList.add("global-wraper--color-modified");
  }
});

after.addEventListener("click", function (evt) {
  evt.preventDefault();
  image.style.width = 0;
  if (window.innerWidth < 768) {
    controller.style.left = "39px";
  } else {
    decorationMain.style.width = "0";
    decorationSecond.classList.add("global-wraper--color-no-pseudo");
    decorationSecond.classList.remove("global-wraper--color-modified");
    controller.style.left = "398px";
  }
});

if (window.innerWidth < 768) {
  slider.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (controller.style.left == "0px") {
      image.style.width = "0";
      controller.style.left = "39px";
    } else {
      image.style.width = "100%";
      controller.style.left = "0";
    }
  });
}
