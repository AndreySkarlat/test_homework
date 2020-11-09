"use strict";

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $("#mobile-menu, #menu-shadow").toggleClass("opened");
  });
  $("#menu-shadow").click(function () {
    $(".hamburger").removeClass("is-active");
    $("#mobile-menu, #menu-shadow").removeClass("opened");
  });
  $(".list-mobile .link").click(function () {
    $(".hamburger").removeClass("is-active");
    $("#mobile-menu, #menu-shadow").removeClass("opened");
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 755) {
      $('header').addClass('scrolled');
    } else if ($(window).scrollTop() < 755) {
      $('header').removeClass('scrolled');
    }
  }); // Menu Active

  var btnContainer = document.getElementById("nav-list");
  var btns = btnContainer.getElementsByClassName("link");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("link--active");
      current[0].className = current[0].className.replace(" link--active", "");
      this.className += " link--active";
    });
  }

  $(function () {
    var hash = location.hash;
    $('.main_nav').find('a[href="' + hash + '"]').addClass('active');
  }); // Lazy

  $(function () {
    $('.lazy').lazy();
  });
});