(function ($) {
    'use strict';

    function isViewableFromBottom ($element, $window) {
        var elementBottomBorderOffsetTop = $element.offset().top + $element.height();
        var topHeight = $window.scrollTop() + $window.height();
        return elementBottomBorderOffsetTop <= topHeight;
    }

    function isViewableFromTop ($element, $window) {
        var scrollToTheTop = $window.scrollTop();
        var elementOffsetTop = $element.offset().top;;
        return elementOffsetTop >= scrollToTheTop;
    }

    function isViewableFromRight ($element, $window) {
        var leftWidth = $window.scrollLeft() + $window.width();
        var elementRightBorderOffsetLeft = $element.offset().left + $element.width();
        return elementRightBorderOffsetLeft <= leftWidth;
    }

    function isViewableFromLeft ($element, $window) {
        var elementOffsetLeft = $element.offset().left;
        var scrollToTheLeft = $window.scrollLeft();
        return elementOffsetLeft >= scrollToTheLeft;
    }

    $.inView = function (element) {

        var $window = $(window);
        var $element = $(element);
        var isInView = isViewableFromBottom($element, $window) &&
            isViewableFromTop($element, $window) &&
            isViewableFromRight($element, $window) &&
            isViewableFromLeft($element, $window);
        return isInView;
    };

    $.extend($.expr[':'], {
        'in-view': function (element) {
            return $.inView(element);
        }
    });

})(jQuery);