// const sliderWrap = document.querySelector(".main__wrap")
// const sliderImg = sliderWrap.querySelector(".slider__img") 
// const sliderInner = sliderWrap.querySelector(".slider__inner")  
// const slider = sliderWrap.querySelectorAll(".slider")     

// let currentIndex = 0;   
// let sliderCount = slider.length;  
// let sliderInterval = 1000; 

// sliderInner.style.transition = "all 0.2s"

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % sliderCount;

//     sliderInner.style.transform = "translateY("+ 430 * currentIndex + "px)";
// }, sliderInterval);

const sliderWrap = document.querySelector(".main__wrap")
const sliderImg = sliderWrap.querySelector(".slider__img") 
const sliderInner = sliderWrap.querySelector(".slider__inner")  
const slider = sliderWrap.querySelectorAll(".slider")     

let currentIndex = -2150;   
let sliderCount = slider.length;  
let sliderInterval = 1000; 

sliderInner.style.transition = "all 0.5s"

setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderCount;

    sliderInner.style.transform = "translateY("+ 430 * currentIndex  + "px)";

    if (currentIndex === 0) {
            currentIndex = -(sliderCount);
    }

}, sliderInterval);