(function ($) {

    $.isHiddenAtTheBottom = function (element) {
        var upper = $(window).height() + $(window).scrollTop();
        return upper < $(element).offset().top;
    };

    $.isHiddenAtTheTop = function (element) {
        var scrollTop = $(window).scrollTop();
        return scrollTop > $(element).offset().top + $(element).height();
    };

    $.isHiddenOnTheRight = function (element) {
        var fromLeft = $(window).width() + $(window).scrollLeft();
        return fromLeft < $(element).offset().left;
    };

    $.isHiddenOnTheLeft = function (element) {
        var scrollLeft = $(window).scrollLeft();
        return scrollLeft > $(element).offset().left + $(element).width();
    };

    $.inView = function (element) {
        var isInView = !$.isHiddenAtTheBottom(element) && !$.isHiddenAtTheTop(element)
                       && !$.isHiddenOnTheRight(element) && !$.isHiddenOnTheLeft(element);
        return isInView;
    };

    $.extend($.expr[':'], {
        "in-view": function (a) {
            return $.inView(a);
        }
    });

})(jQuery);