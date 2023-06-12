/*ローディング*/
//ページの読み込み完了時にローディング画面をフェードアウト
$(window).on('load', function () {
    $('.js-loader').delay(800).fadeOut(600);//画像をフェードアウト
    $('.js-loader-bg').delay(1300).fadeOut(600);//背景色をフェードアウト
});

//ページの読み込みが完了しなくても5秒たったら強制的にローディング画面をフェードアウト
setTimeout('stoploading()', 5000);
function stoploading() {
    $('.js-loader-bg').fadeOut(600);
}


/*ハンバーガーメニュー*/
$(function () {
    $(".hamburger-circle").on('click', function () {

        $(this).toggleClass('active');
        $("#slide-in").toggleClass('panelactive');
    });

    $(".hamburger__menu-list a").click(function () {
        $(".hamburger-circle").removeClass('active');
        $("#slide-in").removeClass('panelactive');
    });

});

/*swiper製品一覧*/
const swiper = new Swiper(".swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    grabCursor: true,
    mousewheel: {
        forceToAxis: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 24,
            centeredSlides: false,
        },
    },
});

/*FAQ アコーディオン*/
$(function () {
    $('.js_q').on('click', function () {
        $(this).next().slideToggle();
        $(this).find('.open-icon').toggleClass('active');
    });
});


$(document).ready(function () {
    const $submitBtn = $('#submit__btn')
    $('#contact_form input,#contact_form #message').on('change', function () {
        if ($('#contact_form input[type="text"]').val() !== "" &&
            $('#contact_form input[type="email"]').val() !== "" &&
            $('#contact_form input[type="radio"]:checked').val() !== "" &&
            $('#message').val() !== ""
        ) {
            $submitBtn.prop('disabled', false);
        } else {
            $submitBtn.prop('disabled', true);
        }
    });

    $('#message,#address_text').on('keydown keyup keypress change focus blur', function() {
        if (jQuery(this).val() == "") {
        jQuery(this).css({
        backgroundColor: '#EFEAE6' /* 未入力時の背景色 */
        });
        } else {
        jQuery(this).css({
        backgroundColor: '#e8f0fe'/* 入力済みの背景色 */
        });
        }
        }).change();
});

/*スムーススクロール*/
$(function () {
    $('a[href^="#"]').click(function () {
        const speed = 600;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});




