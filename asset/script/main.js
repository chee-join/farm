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
    const $submitBtn = $('#submit__btn');

    $('#form input,#form textarea').on('change', function () {
        console.log('change');

    });

});

// if (
//     $('#form input[type="radio"]').val() !== "" &&
//     $('#form input[type="text"]').val() !== "" &&
//     $('#form input[type="email"]').val() === true

// ) {
//     $submitBtn.prop('disabled', false);

// } else {
//     $submitBtn.prop('disabled', true);
// }

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

/*ローディング*/

