$(document).ready(function () {
    $(function () {
        $(".owl-carousel").owlCarousel({
            items: 3,
            margin: 10,
            loop: true,
            nav: true,
            dots: true,
            navText: [  '<span aria-label="Previous" style="background: url(icon/prev.png) no-repeat; background-size: contain; width: 32px; height: 77px"></span>', 
                        '<span aria-label="Next"  style="background: url(icon/right.png) no-repeat; background-size: contain; width: 32px; height: 77px"></span>'],
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1180: {
                    items: 3
                }
            }
        });
    });
});