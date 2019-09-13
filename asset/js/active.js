/*===== owl-carousel js======*/
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dotted:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
new WOW().init();

/*===== counter js======*/

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/*===== jQuery main js======*/

 $(document).ready(function(){
    $(".bars-menu").click(function(){
        $(".level-menu").fadeToggle();
    })
});