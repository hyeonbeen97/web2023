import React from 'react';

function MemberSection(props) {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>세계적인 선수 소개</h3>
            <p>세계적으로 인정받는 테니스 선수</p>
            <div className="member__inner container">
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/member01.jpg" alt="색을 고르는 법" />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">로저 페더러</h4>
                        <p className="desc"> (Roger Federer)</p>
                        <a href="/" className="btn">
                            자세히보기
                        </a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/member02.jpg" alt="색을 고르는 법" />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">라파엘 나달</h4>
                        <p className="desc">(Rafael Nadal)</p>
                        <a href="/" className="btn">
                            자세히보기
                        </a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/member03.jpg" alt="색을 고르는 법" />
                    </figure>
                    <div className="member__body">
                        <h4 className="title">노바크 조코비치</h4>
                        <p className="desc">(Novak Djokovic)</p>
                        <a href="/" className="btn">
                            자세히보기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default MemberSection;
