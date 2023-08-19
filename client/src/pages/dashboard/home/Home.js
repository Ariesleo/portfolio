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

const Home = () => {
  return (
    <Wrapper>
      <div>
        {/* basic info section */}
        <span>Hi all. I am</span>
        <Name>Murari Gupta</Name>
        <Designation>&gt; Full-Stack Developer</Designation>
        <GithubInfo>
          <p> // you can also see it on my Github page</p>
          <span style={{ color: '#4D5BCE' }}>const </span>
          <span style={{ color: '#43D9AD' }}>githubLink </span>={' '}
          <span style={{ color: '#E99287', textDecoration: 'underline' }}>
            "https://github.com/game/url"
          </span>
        </GithubInfo>
        <GithubInfoMobile>
          <p> // you can also see me on my Github page</p>
          <span style={{ color: '#4D5BCE' }}>const </span>
          <span style={{ color: '#43D9AD' }}>githubLink </span>={' '}
          <span style={{ color: '#E99287', textDecoration: 'underline' }}>
            "https://github.com/user/url"
          </span>
        </GithubInfoMobile>
      </div>
      <SnakeGame />
    </Wrapper>
  );
};

export default Home;
