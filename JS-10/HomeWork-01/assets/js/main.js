$('.item').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.content-item[data-tab="' + id + '"]');

    $('.item.active').removeClass('active');
    $(this).addClass('active');

    $('.content-item.active').removeClass('active');
    content.addClass('active');
});