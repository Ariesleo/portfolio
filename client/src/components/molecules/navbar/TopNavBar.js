import React from 'react';

import { NavbarContainer, Logo, NavList, NavItem, NavLink } from './styles.js';

const TopNavBar = () => {
  return (
    <NavbarContainer>
      <Logo>murari-gupta</Logo>
      <div></div>
      <div>
        <NavList>
          <NavItem>
            <NavLink to="/edit/profile">_profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/edit/projects">_projects</NavLink>
          </NavItem>
        </NavList>
      </div>
    </NavbarContainer>
  );
};

export default TopNavBar;
