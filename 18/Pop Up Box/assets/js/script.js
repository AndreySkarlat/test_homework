$(document).ready(function($) {
    // Клик по ссылке "Закрыть".
    $('.popup__close').click(function() {
        $(this).parents('.popup__fade').fadeOut();
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup__fade').fadeOut();
        }
    });

    // Клик по фону, но не по окну.
    $('.popup__fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});