import React from 'react';

function MovieSection(props) {
    return (
        <section id="moviesSection" className={props.attr}>
            <div className="movies__inner container">
                <div className="movies__text">
                    <h3>개발자 추천 영화</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                        <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <a href="/">자세히 보기</a>
                </div>
                <div className="movies__item">
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
                    <div>
                        <img src="./assets/images/" alt="유튜브" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default MovieSection;
