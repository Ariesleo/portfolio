/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {
  Wrapper,
  Designation,
  Name,
  GithubInfo,
  GithubInfoMobile,
} from './styles.js';
import SnakeGame from './Game.js';
import { useAppContext } from '../../../context/appContext.js';

const Home = () => {
  const { profileData } = useAppContext();
  return (
    <Wrapper>
      <div>
        {/* basic info section */}
        <span>Hi all. I am</span>
        <Name>{profileData.name || '...'}</Name>
        <Designation>
          &gt;{' '}
          {profileData.designation
            ? profileData.designation
            : 'Designation Here'}
        </Designation>
        <GithubInfo>
          <p> // you can also see it on my Github page</p>
          <span style={{ color: '#4D5BCE' }}>const </span>
          <span style={{ color: '#43D9AD' }}>githubLink </span>={' '}
          {Object.keys(profileData).length > 0 &&
          profileData.media.githubUrl ? (
            <span style={{ color: '#E99287' }}>
              <q>
                <a
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  href={profileData.media.githubUrl}
                  target="default"
                >
                  {profileData.media.githubUrl}
                </a>
              </q>
            </span>
          ) : (
            '...incoming url'
          )}
        </GithubInfo>
        <GithubInfoMobile>
          <p> // you can also see me on my Github page</p>
          <span style={{ color: '#4D5BCE' }}>const </span>
          <span style={{ color: '#43D9AD' }}>githubLink </span>={' '}
          {Object.keys(profileData).length > 0 &&
          profileData.media.githubUrl ? (
            <span style={{ color: '#E99287' }}>
              <q>
                <a
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  href={profileData.media.githubUrl}
                  target="default"
                >
                  {profileData.media.githubUrl}
                </a>
              </q>
            </span>
          ) : (
            '...incoming url'
          )}
        </GithubInfoMobile>
      </div>
      <SnakeGame />
    </Wrapper>
  );
};

export default Home;
