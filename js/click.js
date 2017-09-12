/**
 * Created by varunp on 9/12/17.
 */
$(document).ready(function()
{

    $('#projects-link').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#projects-container").offset().top
        }, 1000);
    });

    $('#about-link').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#about-container").offset().top
        }, 1000);
    });

});