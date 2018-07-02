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
        navText: ['<i class = "fa fa-angle-left"></i>', '<i class = "fa fa-angle-right"></i>'],
        responsive:{
            0: {
                items:1
            },
            480:{
                items:2
            }
        }
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
        navText: ['<i class = "fa fa-angle-left"></i>', '<i class = "fa fa-angle-right"></i>'],
         responsive:{
            0: {
                items:2
            },
            480:{
                items:3
            },
            768:{
                items:6
            }
        }
    });
});
/*
=========================
Google map
=========================*/
$(window).on("load", function () {

    //map var 
    var addressString = "Wyszyńskiego 63, 50-001 Wrocław"
    var myLatlng = {
        lat: 51.118010,
        lng: 17.051591
    };

    //render google map {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: myLatlng
    });

    //add marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to see address"

    });

    //info window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    //show info window
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    
    //resize function 
    google.maps.event.addDomListener(window, "resize", function(){
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

});
/*
=========================
Navifation
=========================*/
$(function () {

    showHideNav()

    $(window).scroll(function () {

        showHideNav()

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //show white navbar
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png")
            //show back-to-top button
            $(".btn-back-to-top").fadeIn();
        } else {
            //hide white navbar
            $("nav").removeClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png")
            //hide back-to-top button
            $(".btn-back-to-top").fadeOut();
        }
    }
});

/*
=========================
Smooth scrolling
=========================*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get section id
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

/*
=========================
Easing
=========================*/