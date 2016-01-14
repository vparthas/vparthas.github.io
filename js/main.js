$(document).ready(function(){
    $("#headingText").delay(0).animate({ opacity: 1 }, 1000);
    $("#subHeading").delay(1000).animate({ opacity: 1 }, 1000);

    $('#aboutLink').delay(2000).animate({opacity: 1}, 1000);
    $('#projectsLink').delay(2500).animate({opacity: 1}, 1000);
    $('#contactLink').delay(3000).animate({opacity: 1}, 1000);
    $('#resumeLink').delay(3500).animate({opacity: 1}, 1000);

    $('#aboutLink').hover(
        function() {
            $('#aboutLink').animate({
                left: "-=20px"
            }, 500)
        },
        function() {
            $('#aboutLink').animate({
                left: "+=20px"
            }, 500)
        });

    $('#projectsLink').hover(
        function() {
            $('#projectsLink').animate({
                left: "-=20px"
            }, 500)
        },
        function() {
            $('#projectsLink').animate({
                left: "+=20px"
            }, 500)
        });

    $('#contactLink').hover(
        function() {
            $('#contactLink').animate({
                left: "-=20px"
            }, 500)
        },
        function() {
            $('#contactLink').animate({
                left: "+=20px"
            }, 500)
        });

    $('#resumeLink').hover(
        function() {
            $('#resumeLink').animate({
                left: "-=20px"
            }, 500)
        },
        function() {
            $('#resumeLink').animate({
                left: "+=20px"
            }, 500)
        });

    $('#contactLink').click(function() {
        $('#aboutDiv').animate({opacity : 0}, 500);
        $('#projectsDiv').animate({opacity : 0}, 500);
        $('#contactDiv').animate({opacity : $('#contactDiv').css("opacity") == 1 ? 0 : 1}, 500);
    });

    $('#aboutLink').click(function() {
        $('#contactDiv').animate({opacity : 0}, 500);
        $('#projectsDiv').animate({opacity : 0}, 500);
        $('#aboutDiv').animate({opacity : $('#aboutDiv').css("opacity") == 1 ? 0 : 1}, 500);
    });

    $('#projectsLink').click(function() {
        $('#contactDiv').animate({opacity : 0}, 500);
        $('#aboutDiv').animate({opacity : 0}, 500);
        $('#projectsDiv').animate({opacity : $('#projectsDiv').css("opacity") == 1 ? 0 : 1}, 500);
    });
});
