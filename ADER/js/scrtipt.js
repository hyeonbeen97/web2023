const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
document.querySelector(".swiper-button-play").style.display = "none";

document.querySelector(".swiper-button-play").addEventListener("click", ()=>{
    swiper.autoplay.start();
    document.querySelector(".swiper-button-stop").style.display = "block";
    document.querySelector(".swiper-button-play").style.display = "none";

})
document.querySelector(".swiper-button-stop").addEventListener("click", ()=>{
    swiper.autoplay.stop();
    document.querySelector(".swiper-button-stop").style.display = "none";
    document.querySelector(".swiper-button-play").style.display = "block";
})

$(function () {
    $(".header__menu__left > ul > li").mouseover(function () {
        $(".header__menu__left > ul > li").find(".submenu").stop().slideDown(200);
        $(".header__menu__left").addClass("on");
    });
    $(".header__menu__left > ul > li").mouseout(function () {
        $(".header__menu__left > ul > li").find(".submenu").stop().slideUp(200);
        $(".header__menu__left").removeClass("on");

    });

    $(".header__menu__left > ul > li").focusin(function () {
        $(".header__menu__left > ul > li").find(".submenu").stop().slideDown(200);
    });
    $(".header__menu__left > ul > li").focusout(function () {
        $(".header__menu__left > ul > li").find(".submenu").stop().slideUp(200);
    });
    
});