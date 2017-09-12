$(document).ready(function() {

    $(window).on("load", function () {

        $(window).scroll(function () {
            var scrollTop = $("#scroll-container").offset().top;

            $(".splash").each(function () {
                var objectBottom = $(this).offset().top + $(this).outerHeight();

                if (objectBottom < scrollTop) {
                    if ($(this).css("opacity") == 0)
                        $(this).fadeTo(500, 1);
                }
                else {
                    if ($(this).css("opacity") == 1)
                        $(this).fadeTo(300, 0);
                }
            });
        }).scroll();
    });

});