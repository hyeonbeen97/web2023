import React from 'react'

function Header(props){
    return (
        <header id="header" className={props.attr} role="heading" aria-level="1">
            <div className="header__inner container">
                <div className="header__logo score9">
                    <a href="/">
                        HB<em>site</em>
                    </a>
                </div>
                <div className="header__nav" role="navigation">
                    <ul>
                        <li>
                            <a href="#introSection">소개</a>
                        </li>
                        <li>
                            <a href="#memberSection">멤버</a>
                        </li>
                        <li>
                            <a href="#portSection">포트폴리오</a>
                        </li>
                        <li>
                            <a href="#youtubeSection">유튜브</a>
                        </li>
                        <li>
                            <a href="#unsplashSection">이미지</a>
                        </li>
                        <li>
                            <a href="#moviesSection">영화</a>
                        </li>
                        <li>
                            <a href="#reviewSection">리뷰</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header