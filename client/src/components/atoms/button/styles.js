import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  gap: 10px;
  cursor: pointer;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  color: var(--white);
  align-items: center;
  display: inline-flex;
  justify-content: center;
  font-family: var(--bodyFont);
  background: var(--button-dark);
  transition: background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--yellow);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  ${(props) =>
    props.outlined &&
    css`
      background: transparent;
      border: 1px solid var(--white);
    `}

  ${(props) =>
    props.game &&
    css`
      background: var(--yellow);
      color: var(--black);
      font-size: 0.8rem;
      &:hover {
        border: 1px solid var(--green);
      }
    `}

  ${(props) =>
    props.text &&
    css`
      background: transparent;
      &:hover {
        border: none;
        color: var(--yellow);
      }
    `}

  /* styles for disabled state */
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export { StyledButton };
