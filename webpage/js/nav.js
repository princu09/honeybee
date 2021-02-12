$(document).ready(function () {
    $('.navbar-collaps').click(function () {
        $(".ul-menu").fadeToggle();
        $(".ul-menu").removeClass("none");
    });

    $('.navbar-close').click(function () {
        $(".ul-menu").fadeToggle();
        $(".ul-menu").addClass("none");
    });

    if ($(window).innerWidth() <= 825) {
        $(".nav-menu").click(function () {
            $(this).children(".sub-menu").fadeToggle("slow");
            $(this).children(".sub-menu").toggleClass("show");
        });
    }
    if ($(window).innerWidth() > 825) {
        $(".nav-menu").hover(function () {
            $(this).children(".sub-menu").toggleClass("show");
        });
    }
});