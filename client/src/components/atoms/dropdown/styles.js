import styled from 'styled-components';
import Button from '../button';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(Button)`
  min-width: 200px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: var(--dark);
  border: 1px solid var(--fade-dark);
  border-radius: 10px;
  display: ${(props) => (props.isopen === 'true' ? 'block' : 'none')};
`;

const DropdownListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
    border: 1px solid var(--yellow);
  }
`;

export { DropdownContainer, DropdownButton, DropdownList, DropdownListItem };
