$(function(){

    // GNB 메뉴 영역 //
    $("#gnb li").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(1000);
    });

    $("#gnb li").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(800);
    });
    // GNB 메뉴 영역 //

    // 슬라이드쇼 이미지 영역 //
    setInterval (fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame a:first-child").fadeOut(600);
        $("#shuttleFrame a:nth-child(2)").fadeIn(
            1000,
            function(){
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
            });
    }
    // 슬라이드쇼 이미지 영역 //

});
