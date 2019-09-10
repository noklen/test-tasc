$(document).ready(function() {
    // function winSize () {
    //     if ($(window).width() <= 768) {
    //         $('.mobil-header').removeClass('header-none');
    //         $('.top-menu').addClass('header-none');
    //         $('.top-menu-login').addClass('header-none');
    //     } else {
    //         $('.mobil-header').addClass('header-none');
    //         $('.top-menu').removeClass('header-none');
    //         $('.top-menu-login').removeClass('header-none');
    //     }
    // }
    //
    function moveGame () {
        if ($(window).width() <= 767) {
            var swiper = new Swiper('#slider_1', {

            });

        } else {
            $("#games").appendTo("#gameList");
        }
    }

    $(".card").mouseenter(function() {
        $('.games-list  #' + this.id + ' .overlay').addClass('overlay-flex');
    });
    $(".card").mouseleave(function() {
        $('.games-list  #' + this.id + ' .overlay').removeClass('overlay-flex');
    });

    // $(window).on('load resize',winSize);
    // $(window).on('load resize',moveGame);



        $('.icon-menu').click(function() {
            $('.menu').animate({
                left: '0px'
            }, 200);
            $('.mobil-back').removeClass('none');

        });

        $('.mobil-back').click(function() {
            $('.menu').animate({
                left: '-285px'
            }, 200);
            $('.mobil-back').addClass('none');
        });


});
var swiper = new Swiper('#slider_2', {
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
    },
});
// var swiper = new Swiper('#slider_1', {
//     slidesPerView: 3,
//     // spaceBetween: 10,
//     autoplay: {
//         delay: 5000,
//     },
//
// });
