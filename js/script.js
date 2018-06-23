/*
=========================
Preloader
=========================*/
$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});
/*
=========================
Team
=========================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class = "fa fa-angle-left"></i>', '<i class = "fa fa-angle-right"></i>']
    });
});
/*
=========================
Progress bars
=========================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });;

        this.destroy();
    }, {
        offset: "bottom-in-view"
    });
});
/*
=========================
Responsive Tabs
=========================*/
$(function () {
    $("#services-tabs").responsiveTabs({

    });
});

/*
=========================
Isotope filter
=========================*/
$(window).on("load", function () {
    //initialize isotope

    $("#isotope-filters").on("click", "button", function () {

        //get filter value

        var filterValue = $(this).attr("data-filter");

        //filter portfolio 
        $("#isotope-container").isotope({

            filter: filterValue

        });

        $("#isotope-filters").find(".active").removeClass("active")
        $(this).addClass("active");


    });

});

/*
=========================
Magnifier
=========================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: "a", // child items selector, by clicking on it popup will open
        type: "image",
        gallery: {
            // options for gallery
            enabled: true
        },
    });
});
/*
=========================
Testimonials
=========================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class = "fa fa-angle-left"></i>', '<i class = "fa fa-angle-right"></i>']
    });
});

/*
=========================
Stats
=========================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*
=========================
Clients
=========================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class = "fa fa-angle-left"></i>', '<i class = "fa fa-angle-right"></i>']
    });
});


























