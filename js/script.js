// ------------ lang change -------------
$(document).ready(function () {
    $('.lang_btn').click(function () {
        if ($('.another_lang').hasClass('lang_chng_down')) {
            $('.another_lang').removeClass('lang_chng_down')
            $('.another_lang').toggleClass('lang_chng_up')
            $('.lang_btn').toggleClass('arrow_rotate')
        } else {
            $('.another_lang').removeClass('lang_chng_up')
            $('.another_lang').toggleClass('lang_chng_down')
            $('.lang_btn').toggleClass('arrow_rotate')
        }
    });
});


//--------------- mobile menu -------------------
$(document).ready(function () {
    $('.menu_btn').click(function () {
        $('.menu_btn').toggleClass('menu_btn_active')
        $('.nav_bar').toggleClass('show')
    });
});


//---------------- video -----------------------
$(document).ready(function() {
    $(".play_btn").click(function() {
        if ($("#myVideo").get(0).paused)  {
            $("#myVideo").trigger('play');
            $('.play_btn').toggleClass('pause')
        } else {
            $("#myVideo").trigger('pause');
            $('.play_btn').removeClass('pause')
        }
    });
});


//----------------- slider ---------------------
$(document).ready(function () {
    $('.appDownload_slider').slick({
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false
    });
});

