$(function(){
    let currentIndex = 0;
    $(".slider__wrap").append($(".slider").first().clone(true));
    setInterval(function(){
        currentIndex++;
        $(".slider__wrap").animate({marginLeft: -100 * currentIndex + "%" }, 600);
        if(currentIndex == 3){
            setTimeout(function(){
                $(".slider__wrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});

$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().sliderDown;
})

$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().sliderUpwn;
})

//팝업

$(".popup-btn").click(function(){
    $(".popup-view").show();
})

$(".popup-btn").click(function(){
    $(".popup-view").hide();
})