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
    // function moveGame () {
    //     if ($(window).width() <= 1024) {
    //         $("#games").appendTo("#gamesMobil");
    //     } else {
    //         $("#games").appendTo("#gameList");
    //     }
    // }
    //
    // $(".card").mouseenter(function() {
    //     $('.games-list  #' + this.id + ' .overlay').addClass('overlay-flex');
    // });
    // $(".card").mouseleave(function() {
    //     $('.games-list  #' + this.id + ' .overlay').removeClass('overlay-flex');
    // });
    //
    // $(window).on('load resize',winSize);
    // $(window).on('load resize',moveGame);

    $('.winerCarousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // variableWidth: true,
});


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

    var mySwiper = new Swiper ('.swiper-container', {
        // slidesPerView: 3,
        // freeMode: true,
        // autoplay: {
        //     delay: 5000,
        // },
        // spaceBetween: 60,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
    })


});
