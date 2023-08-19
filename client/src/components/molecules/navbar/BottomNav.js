import React from 'react';
import github from '../../../images/svg/github.svg';
import linkedIn from '../../../images/svg/linkedIn.svg';
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
            <ImageLogo src={linkedIn} alt="github" />
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
