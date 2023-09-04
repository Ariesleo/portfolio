import React from 'react';

import { NavbarContainer, Logo, NavList, NavItem, NavLink } from './styles.js';

const TopNavBar = () => {
  return (
    <NavbarContainer>
      <Logo>murari-gupta</Logo>
      <div></div>
      <div>
        <NavList style={{ display: 'block' }}>
          <NavItem>
            <NavLink to="/admin/profile">_profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/projects">_projects</NavLink>
          </NavItem>
        </NavList>
      </div>
    </NavbarContainer>
  );
};

export default TopNavBar;
