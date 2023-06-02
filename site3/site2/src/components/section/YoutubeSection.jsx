import React from 'react';

function YoutubeSection(props) {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>개발자 추천 유튜브</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <a href="/">자세히 보기</a>
                </div>
                <div className="youtube__item">
                    <div>
                        <img src="./assets/images/youtube/x1.png" alt="유튜브" />
                    </div>
                    <div>
                        <img src="./assets/images/youtube/x1.png" alt="유튜브" />
                    </div>
                    <div>
                        <img src="./assets/images/youtube/x1.png" alt="유튜브" />
                    </div>
                    <div>
                        <img src="./assets/images/youtube/x1.png" alt="유튜브" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default YoutubeSection;
