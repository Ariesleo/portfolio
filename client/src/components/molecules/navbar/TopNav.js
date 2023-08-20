import React, { useState } from 'react';
import { useAppContext } from '../../../context/appContext.js';
import {
  NavbarContainer,
  Logo,
  NavList,
  NavItem,
  NavLink,
  Hamburger,
  NavItem1,
  HamburgerList,
} from './styles.js';

const TopNav = () => {
  const profileData = useAppContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

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
      <Hamburger onClick={toggleDropdown}>
        <p style={{ fontWeight: '800', cursor: 'pointer' }}>
          {isDropdownVisible ? 'X' : '☰'}
        </p>
        <HamburgerList isvisible={isDropdownVisible.toString()}>
          <NavItem1>
            <NavLink to="/">_hello</NavLink>
          </NavItem1>
          <NavItem1>
            <NavLink to="/about-me">_about-me</NavLink>
          </NavItem1>
          <NavItem1>
            <NavLink to="/projects">_projects</NavLink>
          </NavItem1>
          <NavItem1>
            <NavLink to="/contact-me">_contact-me</NavLink>
          </NavItem1>
        </HamburgerList>
      </Hamburger>
    </NavbarContainer>
  );
};

export default TopNav;
