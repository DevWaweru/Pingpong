// Backend Logic
var outPut = "";
var classUsed = "";
var answer, getClass;
// Decide whether answer is ping, pong or Ping Pong
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
// Decide what class to allocate the Pings, Pongs and Ping Pongs
var classFn = function (figure) {
    if (figure % 15 === 0) {
        classUsed = "red-class";
    } else if (figure % 5 === 0) {
        classUsed = "blue-class";
    } else if (figure % 3 === 0) {
        classUsed = "yellow-class";
    } else classUsed = "";
    return classUsed;
}
// Frontend Logic
$(document).ready(function () {
    // This facilitates smooth scrolling using jQuery easing
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
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
    // Closes responsive menu when a smooth scroll class is triggered
    // this is for small screens with small pixel widths
    $('.smooth-scroll').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    //Scroll to the top
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navMain',
        offset: 54
    });

    // Collapse Navbar when the scroll is triggered
    var navbarCollapse = function () {
        if ($("#navMain").offset().top > 100) {
            $("#navMain").addClass("navbar-shrink");
        } else {
            $("#navMain").removeClass("navbar-shrink");
        }
    };
    // Collapse the nav bar if page is not at the top
    navbarCollapse();
    // Collapse the navbar when there is scroll activity
    $(window).scroll(navbarCollapse);

    // Get the number of tries and display the results
    $("form#get-results").submit(function (event) {
        event.preventDefault();
        $("ul#list-1").html("");
        $("ul#list-2").html("");
        var listName = "";
        var noTries = $("#user-input").val();
        for (steps = 1; steps <= noTries; steps++) {
            answer = condition(steps);
            getClass = classFn(steps);
            // if the number of tries is greater than 50, the results spill over to the next column
            if (noTries >= 50) {
                if (steps <= (noTries / 2)) listName = "list-1";
                else listName = "list-2";
            } else if (noTries < 50) listName = "list-2";
            // Display the results
            $("ul#" + listName).append("<li class=" + getClass + ">" + answer + "</li>");
        }
    });

});