$(document).ready(function() {
    $("#tel").mask('+38 (000) 000-00-00');

    $(".hamburger").click(function() {
        $(".hamburger").toggleClass("is-active");
        $("#mobile_menu, #menu_shadow").toggleClass("opened");
    });

    $("#menu_shadow").click(function() {
        $(".hamburger").removeClass("is-active");
        $("#mobile_menu, #menu_shadow").removeClass("opened");
    });

    $(".nav__link__mobile").click(function() {
        $(".hamburger").removeClass("is-active");
        $("#mobile_menu, #menu_shadow").removeClass("opened");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });

    // Get the container element
    var btnContainer = document.getElementById("nav__list");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("nav__link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("nav__link--active");
            current[0].className = current[0].className.replace(" nav__link--active", "");
            this.className += " nav__link--active";
        });
    }

    $(function() {
        var hash = location.hash;
        $('.main_nav').find('a[href="' + hash + '"]').addClass('active');
    });
    $(function() {
        $('.lazy').lazy();
    });

});