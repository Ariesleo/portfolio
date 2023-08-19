import React from 'react';
import { useAppContext } from '../../../context/appContext.js';
import { NavbarContainer, Logo, NavList, NavItem, NavLink } from './styles.js';

const TopNav = () => {
  const profileData = useAppContext();
  return (
    <NavbarContainer>
      <Logo>
        {profileData && profileData.name ? profileData.name : 'Your Name'}
      </Logo>
      <NavList>
        <div>
          <NavItem>
            <NavLink to="/">_hello</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about-me">_about-me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">_projects</NavLink>
          </NavItem>
        </div>
        <div>
          <NavItem>
            <NavLink to="/contact-me">_contact-me</NavLink>
          </NavItem>
        </div>
      </NavList>
    </NavbarContainer>
  );
};

export default TopNav;
