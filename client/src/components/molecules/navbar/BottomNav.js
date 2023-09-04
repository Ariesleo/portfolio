import React from 'react';
import github from '../../../images/svg/github.svg';
import medium from '../../../images/svg/medium.svg';
import linkedIn from '../../../images/svg/linkedIn.svg';
import {
  Wrapper,
  NavList,
  FindMe,
  NameAndLogo,
  Logos,
  ImageLogo,
} from './bottomStyles.js';
import { useAppContext } from '../../../context/appContext';

const BottomNav = () => {
  const { profileData } = useAppContext();
  return (
    <>
      <Wrapper>
        <FindMe>
          {/* find me in */}
          <p>find me in:</p>
        </FindMe>
        <NavList>
          <Logos>
            <a
              href={profileData.media ? profileData.media.linkedInUrl : '/'}
              target="_default"
            >
              <ImageLogo src={linkedIn} alt="linkedIn" />
            </a>
            <a
              href={profileData.media ? profileData.media.mediumUrl : '/'}
              target="_default"
            >
              <ImageLogo src={medium} alt="linkedIn" />
            </a>
          </Logos>
          <NameAndLogo>
            {Object.keys(profileData).length > 0 &&
            profileData.media.githubUrl ? (
              <p>{profileData.media.githubUrl.split('/').pop()}</p>
            ) : (
              <p>@username</p>
            )}
            <a
              href={profileData.media ? profileData.media.githubUrl : '/'}
              target="_default"
            >
              <ImageLogo src={github} alt="github" />
            </a>
          </NameAndLogo>
        </NavList>
      </Wrapper>
    </>
  );
};

export default BottomNav;
