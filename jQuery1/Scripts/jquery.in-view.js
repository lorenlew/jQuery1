(function ($)
{
    var scrollToTheTop = $(window).scrollTop();
    var scrollToTheLeft = $(window).scrollLeft();

    function isNotBelowWindowBottom(element, elementOffsetTop)
    {
        var windowBottomOffsetTop = $(window).height() + scrollToTheTop;
        return !(elementOffsetTop > windowBottomOffsetTop);
    };

    function isNotAboveWindowTop(element, elementOffsetTop)
    {
        var bottomOfElementOffsetTop = elementOffsetTop + $(element).height();
        return !(bottomOfElementOffsetTop < scrollToTheTop);
    };

    function isNotToTheRightOfWindowRightSide(element, elementOffsetLeft)
    {
        var rightSideOfWindowOffsetLeft = $(window).width() + scrollToTheLeft;
        return !(elementOffsetLeft > rightSideOfWindowOffsetLeft);
    };

    function isNotToTheLeftOfWindowLeftSide(element, elementOffsetLeft)
    {
        var rightSideOfElementOffsetLeft = elementOffsetLeft + $(element).width();
        return !(rightSideOfElementOffsetLeft < scrollToTheLeft);
    };

    $.inView = function (element)
    {
        var elementOffsetTop = $(element).offset().top;
        var elementOffsetLeft = $(element).offset().left;

        var isInView = isNotBelowWindowBottom(element, elementOffsetTop) &&
                       isNotAboveWindowTop(element, elementOffsetTop) &&
                       isNotToTheRightOfWindowRightSide(element, elementOffsetLeft) &&
                       isNotToTheLeftOfWindowLeftSide(element, elementOffsetLeft);
        return isInView;
    };

    $.extend($.expr[':'], {
        "in-view": function (a)
        {
            return $.inView(a);
        }
    });

})(jQuery);