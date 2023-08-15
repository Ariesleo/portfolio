import React from 'react';

import {
  NavbarContainer,
  Nav,
  Logo,
  NavList,
  NavItem,
  NavLink,
} from './styles.js';

const TopNavBar = () => {
  return (
    <NavbarContainer>
      <Nav>
        <Logo>murari-gupta</Logo>
        <NavList>
          <NavItem>
            <NavLink to="/edit/profile">_profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/edit/projects">_projects</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </NavbarContainer>
  );
};

export default TopNavBar;
