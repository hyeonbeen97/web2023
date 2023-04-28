
//선택자
const sliderWrap = document.querySelector("#wrap")
const sliderImg = sliderWrap.querySelector(".slider__img")
const slider = sliderWrap.querySelectorAll(".slider1")

let currentIndex = 0;   //현재보이는 이미지
let sliderCount = slider.length;  //이미지 갯수
let sliderInterval = 1000; //이미지 변경 시간


setInterval( () => {
            let nextIndex = (currentIndex + 1) % sliderCount;

            slider[currentIndex].style.opacity = "0" 
            slider[nextIndex].style.opacity = "1"

            currentIndex = nextIndex;

            console.log(currentIndex);

        }, sliderInterval)
