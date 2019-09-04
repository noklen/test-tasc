$(document).ready(function() {
    function winSize () {
        if ($(window).width() <= 768) {
            $('.mobil-header').removeClass('header-none');
            $('.top-menu').addClass('header-none');
            $('.top-menu-login').addClass('header-none');
        } else {
            $('.mobil-header').addClass('header-none');
            $('.top-menu').removeClass('header-none');
            $('.top-menu-login').removeClass('header-none');
        }
    }

    function moveGame () {
        if ($(window).width() <= 1024) {
            $("#games").appendTo("#gamesMobil");
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

    $(window).on('load resize',winSize);
    $(window).on('load resize',moveGame);

    $('.navicon').click(function(e){
        $(this).next().slideToggle(500);
    });


});
