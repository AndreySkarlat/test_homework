"use strict";

$(document).ready(function () {
  //first-screen
  $('#carouselOne').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    lazyLoad: false,
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        dots: false
      },
      800: {
        dots: true
      }
    }
  }); //news

  $("#carouselTwo").owlCarousel({
    loop: true,
    lazyLoad: false,
    margin: 30,
    nav: true,
    dots: true,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        margin: 0,
        items: 1
      },
      800: {
        items: 2
      },
      1220: {
        items: 3
      }
    }
  }); //огр. кол-во символов

  $(".news-text p").text(function (i, text) {
    if (text.length >= 60) {
      text = text.substring(0, 60);
      var lastIndex = text.lastIndexOf(" "); // позиция последнего пробела

      text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
    }

    $(this).text(text);
  });
  $(".news-title").text(function (i, text) {
    if (text.length >= 40) {
      text = text.substring(0, 40);
      var Index = text.indexOf("."); // позиция точки

      if (Index != -1) {
        text = text.substring(0, Index) + '.'; // обрезаем до точки
      }
    }

    $(this).text(text);
  }); //gallery

  $("#lightgallery").lightGallery({
    counter: false,
    download: false,
    enableSwipe: false,
    enableDrag: false,
    speed: 500,
    selector: '.item'
  });
}); //map

var map;
var greenIcon = L.icon({
  iconUrl: 'assets/js/leaflet/images/map_icon.png',
  shadowUrl: '',
  iconSize: [96, 96],
  // size of the icon
  shadowSize: [106, 106],
  // size of the shadow
  iconAnchor: [22, 94],
  // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],
  // the same for the shadow
  popupAnchor: [27, -76] // point from which the popup should open relative to the iconAnchor

});

function initMap() {
  document.getElementById("map-img").remove();
  document.getElementById("map-link").remove();
  var monticello = L.layerGroup();
  L.marker([40.68358442550612, -73.90182292110401], {
    icon: greenIcon
  }).bindPopup('Monticello.').addTo(monticello);
  var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  var grayscale = L.tileLayer(mbUrl, {
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr
  }),
      streets = L.tileLayer(mbUrl, {
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr
  });
  var map = L.map('map', {
    center: [40.68358442550612, -73.90182292110401],
    zoom: 13,
    layers: [grayscale, monticello]
  });
  var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
  };
  var overlays = {
    "Monticello": monticello
  };
  L.control.layers(baseLayers, overlays).addTo(map);
}

;
$(document).ready(function () {
  //hamburger
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $("#mobile-menu, #menu-shadow").toggleClass("opened");
  });
  $("#menu-shadow").click(function () {
    $(".hamburger").removeClass("is-active");
    $("#mobile-menu, #menu-shadow").removeClass("opened");
  });
  $(".link-mobile").click(function () {
    $(".hamburger").removeClass("is-active");
    $("#mobile-menu, #menu-shadow").removeClass("opened");
  }); //Scroll menu

  $(window).scroll(function () {
    if ($(window).scrollTop() > 160) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  }); //Menu active

  var btnContainer = document.getElementById("nav-list");
  var btns = btnContainer.getElementsByClassName("nav-link");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("nav-link--active");
      current[0].className = current[0].className.replace(" nav-link--active", "");
      this.className += " nav-link--active";
    });
  } // Lazy


  $(function () {
    $('.lazy').lazyLoad();
  }); //scroll

  $("a.scrollto").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60 //60 - высота фиксированной плавающей шапки

    }, 800);
  });
});