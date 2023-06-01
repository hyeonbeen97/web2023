import React from 'react';

function PortSection(props) {
    return (
        <section id="portSection" className={props.attr}>
            <h3>포트폴리오</h3>
            <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 포트폴리오</p>
            <div className="port__inner container">
                <div className="port__btn">
                    <a href="/">21기</a>
                    <a href="/">22기</a>
                    <a href="/">23기</a>
                    <a href="/">24기</a>
                </div>
                <div className="port__cont">
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/port/" alt="색을 고르는 법" />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <img src="./assets/images/port/" alt="/" />
                            </span>
                            <div className="title">
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/port/" alt="색을 고르는 법" />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <img src="./assets/images/port/" alt="" />
                            </span>
                            <div className="title">
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/port/" alt="색을 고르는 법" />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <img src="./assets/images/port/" alt="" />
                            </span>
                            <div className="title">
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/port/" alt="색을 고르는 법" />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <img src="./assets/images/port/" alt="" />
                            </span>
                            <div className="title">
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/port/" alt="색을 고르는 법" />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <img src="./assets/images/port/" alt="" />
                            </span>
                            <div className="title">
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/port/" alt="색을 고르는 법" />
                        </figure>
                        <div className="port__body">
                            <span className="pic">
                                <img src="./assets/images/port/" alt="" />
                            </span>
                            <div className="title">
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PortSection;
