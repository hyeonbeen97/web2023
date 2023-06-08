import React from 'react';


const unsplashText = [
    {
        img: './assets/images/youtube/x1.PNG'
    },
    {
        img: './assets/images/youtube/x1.PNG'
    },
    {
        img: './assets/images/youtube/x1.PNG'
    },
    {
        img: './assets/images/youtube/x1.PNG'
    },
];



function UnsplashDesc({ img }){
    return (
        <div>
            <img src={img} alt="유튜브" />
        </div>
    );
}

function UnsplashSection(props) {
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>이미지 다운로드 추천</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <a href="/">자세히 보기</a>
                </div>
                <div className="unsplash__item">
                    {unsplashText.map((text, index) => (
                        <UnsplashDesc
                            key = {index}
                            img={text.img}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default UnsplashSection;
