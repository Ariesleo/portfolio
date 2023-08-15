import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  margin: 0px;
  padding: 1.1rem 0px;
  background-color: var(--dark);
  border-bottom: 1px solid var(--fade-dark);
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding-left: 2rem;
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: 450;
  color: var(--grey);
`;

const NavList = styled.div`
  display: flex;
`;

const NavItem = styled.span`
  margin-right: 20px;
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

export { NavbarContainer, Nav, Logo, NavList, NavItem, NavLink };
