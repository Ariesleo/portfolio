import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  margin: 0px;
  padding: 1.1rem 1rem;
  display: flex;
  color: var(--grey);
  background-color: var(--dark);
  border-bottom: 1px solid var(--fade-dark);
`;

const Logo = styled.div`
  font-size: 1rem;
  width: 20%;
  font-weight: 450;
`;

const NavList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.span`
  padding: 0px 1rem;
`;

const NavLink = styled(Link)`
  color: var(--grey);
  font-size: 1rem;
  font-weight: 450;
  text-decoration: none;

  &:hover {
    color: var(--white);
  }
`;

export { NavbarContainer, Logo, NavList, NavItem, NavLink };
