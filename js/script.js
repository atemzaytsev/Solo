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

$(function(){
  $(".owl-carousel").owlCarousel({
      items:2,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
      nav:true,
      dots:false,
      navText:['<i class = "fa fa-angle-left"></i>','<i class = "fa fa-angle-right"></i>' ]
  });
});