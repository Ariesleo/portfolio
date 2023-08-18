import React from 'react';
import github from '../../../images/svg/github.svg';
import facebook from '../../../images/svg/facebook.svg';
import twitter from '../../../images/svg/twitter.svg';
import {
  Wrapper,
  NavList,
  FindMe,
  NameAndLogo,
  Logos,
  ImageLogo,
} from './bottomStyles.js';

const BottomNav = () => {
  return (
    <>
      <Wrapper>
        <FindMe>
          {/* find me in */}
          <p>find me in:</p>
        </FindMe>
        <NavList>
          <Logos>
            <a href="https://github.com" target="default">
              <ImageLogo src={facebook} alt="github" />
            </a>
            <ImageLogo src={twitter} alt="github" />
          </Logos>
          <NameAndLogo>
            <p>@username</p>
            <ImageLogo src={github} alt="github" />
          </NameAndLogo>
        </NavList>
      </Wrapper>
    </>
  );
};

export default BottomNav;
