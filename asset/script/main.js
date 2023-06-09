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
    slidesPerView: 1.5,
    spaceBetween: 24,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    grabCursor: true,
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

/*問い合わせフォーム*/
$(document).ready(function () {
    console.log('問い合わせフォーム開始');

    const $submitBtn = $('#submit__btn')
    $('#contact_form input,#contact_form textarea').on('change', function () {
        if ($('#contact_form input[type="text"]').val() !== "" &&
            $('#contact_form input[type="email"]').val() !== "" &&
            $('#contact_form textarea"]').val() !== "" &&
            $('#contact_form input[type="radio"]:checked').val() === true
        ) {
            $submitBtn.prop('disabled', false);
        } else {
            $submitBtn.prop('disabled', true);
        }
    });
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




