import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  margin: 0px;
  padding: 1.1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--grey);
  background-color: var(--dark);
  border-bottom: 1px solid var(--fade-dark);

  @media (max-width: 750px) {
    /* Tablet and below */
    padding: 0px 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1rem;
  width: 20%;
  font-weight: 450;
  @media (max-width: 750px) {
    /* Tablet and below */
    width: auto;
  }
`;

const NavList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    /* Tablet and below */
    display: none;
  }
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

const Hamburger = styled.div`
  @media (max-width: 750px) {
    /* Tablet and below */
    display: block;
  }
  @media (min-width: 751px) {
    /* Tablet and above */
    display: none;
  }
`;

const NavItem1 = styled.span`
  padding: 10px 2rem;
  border-bottom: 1px solid var(--fade-dark);
`;

const HamburgerList = styled.div`
  display: ${({ isvisible }) =>
    isvisible && isvisible.toString() === 'true' ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--dark);
  width: 100%;
  z-index: 1;

  width: 100%;
  /* gap: 15px; */
`;

export {
  NavbarContainer,
  Logo,
  NavList,
  NavItem,
  NavLink,
  Hamburger,
  HamburgerList,
  NavItem1,
};
