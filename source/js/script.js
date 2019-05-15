var button = document.querySelector(".menu-toggle");
var menu = document.querySelector(".main-nav");
var sizeX = 50;
var sizeY = 45;
var coordXPin = 59.938631;
var coordYPin = 30.323055;
var coordXCenter = 59.938631;
var coordYCenter = 30.323055;
var iconImageOffsetX = -25;
var iconImageOffsetY = -30;
var mainForm = document.querySelector(".main-form");
var fieldCatName = document.querySelector("#cat-name");
var fieldCatWeight = document.querySelector("#cat-weight");
var fieldCatAge = document.querySelector("#cat-age");
var fieldManMail = document.querySelector("#man-mail");
var fieldManPhone = document.querySelector("#man-phone");
var fieldCommentText = document.querySelector("#comment-text");

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

//карта
ymaps.ready(init);

if (window.innerWidth >= 768) {
  sizeX = 100;
  sizeY = 90;
  iconImageOffsetX = -40;
  iconImageOffsetY = -75;
}

if (window.innerWidth >= 1300) {
  coordXCenter = 59.938521;
  coordYCenter = 30.320595;
}

function init() {
  myMap = new ymaps.Map("yandex-map", {
      center: [coordXCenter, coordYCenter],
      zoom: 17,
      controls: ['smallMapDefaultSet']
    }),

    myPlacemark = new ymaps.Placemark([coordXPin, coordYPin], {
      hintContent: 'Магазин спортивного питания Cat Energy'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [sizeX, sizeY],
      iconImageOffset: [iconImageOffsetX, iconImageOffsetY]
    });

  myMap.geoObjects
    .add(myPlacemark);
};

//поведение формы
if (mainForm) {
  mainForm.addEventListener("submit", function (evt) {
    if (!fieldCatName.value || !fieldCatWeight.value || !fieldCatAge.value || !fieldManMail.value || !fieldManPhone.value || !fieldCommentText.value) {
      evt.preventDefault();
      if (!fieldCatName.value) {
        fieldCatName.classList.add("fieldset-cat__input--error");
      }
      if (!fieldCatWeight.value) {
        fieldCatWeight.classList.add("fieldset-cat__input--error");
      }
      if (!fieldCatAge.value) {
        fieldCatAge.classList.add("fieldset-cat__input--error");
      }
      if (!fieldManMail.value) {
        fieldManMail.classList.add("fieldset-man__input--error");
      }
      if (!fieldManPhone.value) {
        fieldManPhone.classList.add("fieldset-man__input--error");
      }
      if (!fieldCommentText.value) {
        fieldCommentText.classList.add("fieldset-comment__text--error");
      }
    }
  });

  mainForm.addEventListener("keydown", function (evt) {
    if (fieldCatName.value && fieldCatName.classList.contains("fieldset-cat__input--error")) {
      fieldCatName.classList.remove("fieldset-cat__input--error");
    }
    if (fieldCatWeight.value && fieldCatWeight.classList.contains("fieldset-cat__input--error")) {
      fieldCatWeight.classList.remove("fieldset-cat__input--error");
    }
    if (fieldCatAge.value && fieldCatAge.classList.contains("fieldset-cat__input--error")) {
      fieldCatAge.classList.remove("fieldset-cat__input--error");
    }
    if (fieldManMail.value && fieldManMail.classList.contains("fieldset-man__input--error")) {
      fieldManMail.classList.remove("fieldset-man__input--error");
    }
    if (fieldManPhone.value && fieldManPhone.classList.contains("fieldset-man__input--error")) {
      fieldManPhone.classList.remove("fieldset-man__input--error");
    }
    if (fieldCommentText.value && fieldCommentText.classList.contains("fieldset-comment__text--error")) {
      fieldCommentText.classList.remove("fieldset-comment__text--error");
    }
  });
}
