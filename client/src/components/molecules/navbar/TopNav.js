import React from 'react';

import {
  NavbarContainer,
  Nav,
  Logo,
  NavList,
  NavItem,
  NavLink,
} from './styles.js';

const TopNav = () => {
  return (
    <NavbarContainer>
      <Nav>
        <Logo>murari-gupta</Logo>
        <NavList>
          <NavItem>
            <NavLink to="/">_hello</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about-me">_about-me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">_projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact-me">_contact-me</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </NavbarContainer>
  );
};

export default TopNav;
