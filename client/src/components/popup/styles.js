import styled from 'styled-components';
import Button from '../atoms/button';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.visible === 'true' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  padding: 3rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--dark);
  border: 2px solid var(--fade-dark);
  position: relative;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export { PopupContainer, PopupContent, CloseButton };
