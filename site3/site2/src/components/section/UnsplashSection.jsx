import React from 'react';

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
                    <div>
                        <img src="./assets/images/" alt="유튜브" />
                    </div>
                    <div>
                        <img src="./assets/images/" alt="유튜브" />
                    </div>
                    <div>
                        <img src="./assets/images/" alt="유튜브" />
                    </div>
                    <div>
                        <img src="./assets/images/" alt="유튜브" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default UnsplashSection;
