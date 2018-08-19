$(document).ready(function() {

    //NAVBAR
    $(window).scroll(function() {
        var mask = $(".mask");
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
            $(".nav-wrapper").addClass("mask");
        } else {
            $('header').removeClass("sticky");
            $(".nav-wrapper").removeClass("mask");
        }
    });

    // NAVIGATION MOBILE
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function() {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });

    // SWITCH BUTTON
    $(".switch").on("click", function() {
        $(".navigation").slideToggle();
        $(this).toggleClass("active");
    });
    $('.navigation li a').on("click", function() {
        $('#menu').slideUp();
    });

    $("a[href='#contact']").click(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, 2000);
        return false;
      });

    // OWL CAROUSEL
    $("#owl-demo").owlCarousel({

        //autoPlay: 5000, //Set AutoPlay to 3 seconds
        navigation: true, // Show next and prev buttons
        navigationText: [
            "<i class='icon-chevron-left icon-white'></i>",
            "<i class='icon-chevron-right icon-white'></i>"
        ],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        loop: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
});