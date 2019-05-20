var sizeX = 50;
var sizeY = 45;
var coordXPin = 59.938631;
var coordYPin = 30.323055;
var coordXCenter = 59.938631;
var coordYCenter = 30.323055;
var iconImageOffsetX = -25;
var iconImageOffsetY = -30;

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
      controls: ["smallMapDefaultSet"]
    }),

    myPlacemark = new ymaps.Placemark([coordXPin, coordYPin], {
      hintContent: "Магазин спортивного питания Cat Energy"
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/map-pin.png",
      iconImageSize: [sizeX, sizeY],
      iconImageOffset: [iconImageOffsetX, iconImageOffsetY]
    });

  myMap.geoObjects
    .add(myPlacemark);
};
