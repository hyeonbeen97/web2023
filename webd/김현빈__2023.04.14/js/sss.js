const testWrap = document.querySelector(".test__wrap")
const sliderInner = testWrap.querySelector(".slider__inner")
const sliderInnerImg = testWrap.querySelectorAll(".slider__inner img");


let currentIndex = 0;
let Count = sliderInnerImg.length;
let slierInterval = 3000;
let sliderHeight = sliderInnerImg[0].offsetHeight;

sliderInner.style.transition = "all 0.2s"
setInterval(() => {
    currentIndex = (currentIndex + 1) % Count;
    sliderInner.style.transform = "translateY("+ -sliderHeight * currentIndex + "px)";
}, slierInterval);
