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
    $(".owl-carousel").owlCarousel({
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
Responsive Tabs
=========================*/
$(window).on("load", function () {
    //initialize isotope
    
//    $("#isotope-container").isotope({
//        
//    })
    
     //filter items on button click
    
    $("#isotope-filters").on("click","button", function(){

    //get filter value
        
    var filterValue = $(this).attr("data-filter");
        
    //filter portfolio 
     $("#isotope-container").isotope({
         
        filter:filterValue
        
    });
        
        $("#isotope-filters").find(".active").removeClass("active")
        $(this).addClass("active");
        
        
    });
    
});


























