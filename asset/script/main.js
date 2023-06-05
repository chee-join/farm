$(function () {
    $(".hamburger-circle").on('click', function () {

        $(this).toggleClass('active');
        $("#slide-in").toggleClass('panelactive');
    });

    $(".hamburger__menu-list a").click(function(){
        $(".hamburger-circle").removeClass('active');
        $("#slide-in").removeClass('panelactive');
    });

    $("#slide-in.panelactive").on('click',function(){
        console.log('click');
        $(this).removeClass('panelactive');
    });
});


// panelactiveで開いたページを一定時間表示する
// 何もクリックされなかったら
// panelactiveを外す(ページを閉じる)

/*swiper製品一覧*/
const swiper = new Swiper(".swiper", {


});

