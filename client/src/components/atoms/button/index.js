import React from 'react';
import { StyledButton } from './styles';

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

/* 
button demo

<Button outlined>Skip</Button>
      <Button text>text</Button>
      <Button>view-project</Button>
      <Button game>start-game</Button>
*/
