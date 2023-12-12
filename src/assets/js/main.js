(function ($) {
    "use strict";

    /*----------------------
    Document-Reader-Function
    -----------------------*/
    $(document).on('ready', function () {

        /*--------------------
        Show-Body
        ----------------------*/
        $('body').css({
            'opacity': '1'
        });

        /*---------------------
        Scroll-Top-Button
        ----------------------*/
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });

        /*---------------------
        Data-Lity-Lightbox
        ----------------------*/
        $(document).on('click', '[data-lightbox]', lity);

        /*-- Drop-Down-Menu--*/
        function dropdown_menu() {
            $('.hamburger .mainmenu').fadeOut();
            var sub_menu = $('.mainmenu .sub-menu')
            menu_a = $('.mainmenu ul li a');
            sub_menu.siblings('a').append('<i class="fa fa-angle-right"></i>')
            sub_menu.hide();
            sub_menu.siblings('a').on('click', function (event) {
                event.preventDefault();
                $(this).parent('li').siblings('li').find('.sub-menu').slideUp();
                $(this).siblings('.sub-menu').find('.sub-menu').slideUp();
                $(this).siblings('.sub-menu').slideToggle();
                $(this).parents('li').siblings('li').removeClass('open');
                $(this).siblings('.sub-menu').find('li.open').removeClass('open');
                $(this).parent('li').toggleClass('open');
                return false;
            });
        }
        dropdown_menu();


        /*-- Burger-Menu --*/
        function burger_menu() {
            var burger = $('.burger'),
                hm_menu = $('.hamburger .mainmenu');

            burger.on('click', function () {
                $(this).toggleClass('play');
                $(this).siblings('.mainmenu').fadeToggle();
            });

        }
        burger_menu();


        /*---------------------
        Mail-Chimp-Integration
        -----------------------*/
        $('#mc-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('.subscrie-form input, .subscrie-form button').fadeOut();
                }
            }
        });

        /*-----------------------
        Mouse-Move-Parallax
        -------------------------*/
        $(document).on("mousemove", function (e) {
            $('.layer').parallax(50, e);
            $('.layer1').parallax(30, e);
            $('.layer2').parallax(60, e);
            $('.layer3').parallax(90, e);
        });

    });

    /*------------------------
    Window-Load-Function
    -------------------------*/
    $(window).on("load", function () {

        /*--------------------
        Preloader-JS
        ---------------------*/
        $('.preloader').fadeOut(500);


        /*-------------------
        Wow-Animation-JS
        ---------------------*/
        new WOW().init({
            mobile: true,
        });


    });

})(jQuery);