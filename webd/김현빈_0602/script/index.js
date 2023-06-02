    // 슬라이더
    let currentIndex = 0;
    const $sliderWrap = $(".slider__inner"); //이미지 부모 : 움직이는 영역
    const $slider = $(".slide"); //각각의 이미지
    const $sliderHeight = $slider.height(); //이미지 가로값
$sliderWrap.append($slider.first().clone(true));
    setInterval(function () {
        currentIndex++; //현재 이미지를 1씩 증가
        $sliderWrap.animate({ marginTop: - $sliderHeight * currentIndex }, 600);
        if (currentIndex === $slider.length) {
            setTimeout(function () {
                $sliderWrap.animate({ marginTop: 0 }, 0);
                currentIndex = 0;
            }, 100);
        }
    }, 1000);

    //탭 메뉴
    const tabBtn = $(".infomenu > h3 > a");
    const tabCont = $(".infocont > ul");
    tabCont.hide().eq(0).show();
    tabBtn.on("click", function () {
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });



// 메뉴
$(function () {
    $(".nav > ul > li").mouseover(function () {
        $(".nav > ul > li").find(".submenu").stop().slideDown(200);
        $(".nav").addClass("on");
    });
    $(".nav > ul > li").mouseout(function () {
        $(".nav > ul > li").find(".submenu").stop().slideUp(200);
        $(".nav").removeClass("on");

    });

    $(".nav > ul > li").focusin(function () {
        $(".nav > ul > li").find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").focusout(function () {
        $(".nav > ul > li").find(".submenu").stop().slideUp(200);
    });
    
});
// //팝업
$(document).ready(function () {
    // 공지사항 링크를 클릭했을 때 팝업 창을 보이도록 처리
    $(".pop").click(function (e) {
        $("#popup").fadeIn();
    });

    // 팝업 창의 닫기 버튼을 클릭했을 때 팝업 창을 숨기도록 처리
    $("#closeBtn").click(function () {
        $("#popup").fadeOut();
    });
});