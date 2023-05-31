const sliderWrap = document.querySelector(".slider__Wrap")
const sliderImg = sliderWrap.querySelector(".slider__Wrap") //보여지는 영역
const sliderInner = sliderWrap.querySelector(".slider__inner")  //움직이는 영역
const slider = sliderWrap.querySelectorAll(".slide")     //개별 영역

let currentIndex = 0;   //현재보이는 이미지
let sliderCount = slider.length;  //이미지 갯수
let sliderWidth = slider[0].offsetheight;  //이미지 가로값
let sliderInterval = 1000; //이미지 변경 시간
let sliderClone = sliderInner.firstElementChild.cloneNode(true); //첫번째 이미지

        //복사한 첫번째 이미지  마지막에 붙여넣기
        sliderInner.appendChild(sliderClone);

        function sliderEffect() {
            currentIndex++;

            sliderInner.style.transition = "all 0.6s"
            sliderInner.style.transform = "translateY(-" + 400 * currentIndex + "px)"

            //마지막 이미지에 위치 했을 때
            if (currentIndex == sliderCount) {
                setTimeout(() => {
                    sliderInner.style.transition = "0s"
                    sliderInner.style.transform = "translateY(0px)"
                }, 700);
                currentIndex = 0;
            }
        }
        setInterval(sliderEffect, 1000);




const textWrap = document.querySelector(".banner")
const textImg = textWrap.querySelector(".banner") //보여지는 영역
const textInner = textWrap.querySelector(".text__inner")  //움직이는 영역
const text = textWrap.querySelectorAll(".slide__text")     //개별 영역




let currentText = 0;   //현재보이는 이미지
let textCount = text.length;  //이미지 갯수
let textWidth = text[0].offsetheight;  //이미지 가로값
let textInterval = 1000; //이미지 변경 시간
let textClone = textInner.firstElementChild.cloneNode(true); //첫번째 이미지

        //복사한 첫번째 이미지  마지막에 붙여넣기
        textInner.appendChild(textClone);

        function textEffect() {
            currentText++;

            textInner.style.transition = "all 0.6s"
            textInner.style.transform = "translateY(-" + 400 * currentText + "px)"

            //마지막 이미지에 위치 했을 때
            if (currentText == textCount) {
                setTimeout(() => {
                    textInner.style.transition = "0s"
                    textInner.style.transform = "translateY(0px)"
                }, 700);
                currentText = 0;
            }
        }
        setInterval(textEffect, 1000);

        $(".nav > ul > li").mouseover(function(){
            $(this).find(".submenu").stop().slideDown();
        })

        $(".nav > ul > li").mouseout(function(){
            $(this).find(".submenu").stop().slideUp();

        })

// //팝업
$(document).ready(function() {
    // 공지사항 링크를 클릭했을 때 팝업 창을 보이도록 처리
    $('.pop').click(function(e) {
        $('#popup').fadeIn();
    });

    // 팝업 창의 닫기 버튼을 클릭했을 때 팝업 창을 숨기도록 처리
    $('#closeBtn').click(function() {
        $('#popup').fadeOut();
    });
});