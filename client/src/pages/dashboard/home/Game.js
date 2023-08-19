/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {
  GameWrapper,
  GamePlayGround,
  KeyInstructions,
  KeyArrows,
} from './styles.js';

import Button from '../../../components/atoms/button/index.js';
import downKey from '../../../images/arrowKeySVG/downKey.svg';
import upKey from '../../../images/arrowKeySVG/upKey.svg';
import leftKey from '../../../images/arrowKeySVG/leftKey.svg';
import rightKey from '../../../images/arrowKeySVG/rightKey.svg';
import snake from '../../../images/snake/snake.svg';
import activeFood from '../../../images/snake/activeFood.svg';
// import inActiveFood from '../../../images/snake/inActiveFood.svg';

const SnakeGame = () => {
  return (
    <GameWrapper>
      <GamePlayGround>
        <div style={{ marginBottom: '95px' }}>
          <img src={activeFood} alt="food" />
          <img src={snake} alt="snake" />
        </div>
        <Button game="true">start-game</Button>
      </GamePlayGround>
      <KeyInstructions>
        <div>
          <KeyArrows>
            <p>// use keyboard</p>
            <p>// arrow to play</p>
            <div style={{ textAlign: 'center' }}>
              <img src={upKey} alt="upKey" />
            </div>
            <div>
              <img src={leftKey} alt="leftKey" />
              <img src={downKey} alt="downKey" />
              <img src={rightKey} alt="rightKey" />
            </div>
          </KeyArrows>
          <div>
            <p> // food left</p>
          </div>
        </div>
        <div>
          <Button outlined="true" style={{ float: 'right' }}>
            Skip
          </Button>
        </div>
      </KeyInstructions>
    </GameWrapper>
  );
};

export default SnakeGame;
