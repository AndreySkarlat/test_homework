$('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 40,
    nav: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})