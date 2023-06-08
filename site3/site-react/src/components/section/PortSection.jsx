import React from 'react';

const portText = [
    {
        Img: './assets/images/port/port01.png',
        icImg: './assets/images/member/member01.jpg',
        title: '김현빈 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        Img: './assets/images/port/port02.png',
        icImg: './assets/images/member/member01.jpg',
        title: '김현빈 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        Img: './assets/images/port/port03.png',
        icImg: './assets/images/member/member01.jpg',
        title: '김현빈 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        Img: './assets/images/port/port04.png',
        icImg: './assets/images/member/member01.jpg',
        title: '김현빈 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        Img: './assets/images/port/port05.png',
        icImg: './assets/images/member/member01.jpg',
        title: '김현빈 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
    {
        Img: './assets/images/port/port06.png',
        icImg: './assets/images/member/member01.jpg',
        title: '김현빈 포트폴리오',
        desc: '프론트앤드 개발자 포트폴리오',
    },
];

function PortDesc({portImg, iconImg, title, desc}) {
    return (
        <div className="port">
            <figure className="port__header">
                <img src={portImg} alt="색을 고르는 법" />
            </figure>
            <div className="port__body">
                <span className="pic">
                    <img src={iconImg} alt="/" />
                </span>
                <div className="title">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}

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
                    {portText.map((text, index) => (
                        <PortDesc
                            key={index}
                            portImg = {text.Img}
                            iconImg = {text.icImg}
                            title ={ text.title}
                            desc = {text.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default PortSection;
