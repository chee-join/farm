$(function () {
    $(".hamburger-circle").on('click', function () {

        $(this).toggleClass('active');
        $("#slide-in").toggleClass('panelactive');
    });

    $(".hamburger__menu-list a").click(function(){
        $(".hamburger-circle").removeClass('active');
        $("#slide-in").removeClass('panelactive');
    });

});

/*swiper製品一覧*/
const swiper = new Swiper(".swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 40,
    autoplay: {
        delay: 5000 //5秒ごとにスライダを切り替える
    },
    speed: 1000,

    breakpoints: {
        768: {
            slidesPerView: 3.8,
            loop: true,
        },
    },

});

