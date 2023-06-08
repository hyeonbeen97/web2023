import React from 'react';
import Main from '../layout/Main.jsx';

import SliderSection from '../section/SliderSection.jsx';
import IntroSection from '../section/IntroSection.jsx';
import MemberSection from '../section/MemberSection.jsx';
import PortSection from '../section/PortSection.jsx';
import YoutubeSection from '../section/YoutubeSection.jsx';
import UnsplashSection from '../section/UnsplashSection.jsx';
import MovieSection from '../section/MovieSection.jsx';

function Home() {
  return (
      <>
          <Main>
              <SliderSection attr={'slider__wrap core3 section'} />
              <IntroSection attr={'intro__wrap core3 section'} />
              <MemberSection attr={'member__wrap core3 section center'} />
              <PortSection attr={'port__wrap core3 section center'} />
              <YoutubeSection attr={'youtube__wrap core3 section'} />
              <UnsplashSection attr={'unsplash__wrap core3 section'} />
              <MovieSection attr={'movies__wrap core3 section'} />
          </Main>
      </>
  );
}

export default Home;
