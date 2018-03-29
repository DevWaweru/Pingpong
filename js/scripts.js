// Backend Logic
var outPut = "";
var answer;

var condition = function (figure) {
    if (figure % 15 === 0) {
        outPut = "Ping Pong";
    } else if (figure % 5 === 0) {
        outPut = "Pong";
    } else if (figure % 3 === 0) {
        outPut = "Ping";
    } else outPut = figure;
    return outPut;
}
// Frontend Logic
$(document).ready(function () {
    var noTries = parseInt(prompt("How many Tries?  "))
    $("ul#list-2").empty;
    for (steps = 1; steps <= noTries; steps++) {
        answer = condition(steps);
        $("ul#list-2").append("<li>" + answer + "</li>");
    }

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    //Scroll to the top
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navMain',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#navMain").offset().top > 100) {
            $("#navMain").addClass("navbar-shrink");
        } else {
            $("#navMain").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

});