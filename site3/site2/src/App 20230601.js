import React from 'react';
import Header from "./components/layout/Header.jsx"
import FooterSection from './components/layout/FooterSection.jsx';
import Main from './components/layout/Main.jsx';

import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import MemberSection from './components/section/MemberSection.jsx';
import PortSection from './components/section/PortSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';


function App() {
  return (
      <>
        <Header attr={'header__wrap score3'} />
        <Main>
          <SliderSection attr={'slider__wrap core3 section'} />
          <IntroSection attr={'intro__wrap core3 section'} />
          <MemberSection attr={'member__wrap core3 section center'} />
          <PortSection attr={'port__wrap core3 section center'} />
          <YoutubeSection attr={'youtube__wrap core3 section'} />
          <UnsplashSection attr={'unsplash__wrap core3 section'} />
          <MovieSection attr={'movies__wrap core3 section'} />
        </Main>
        <FooterSection attr={'footer__wrap section core3'} />
      </>
  );
}

export default App;
