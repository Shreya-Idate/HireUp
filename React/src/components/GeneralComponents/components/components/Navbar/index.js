import React from 'react'
import{ FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks,NavBtn,NavBtnLink} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
  <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>HIRE-UP</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about"> ABOUT </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="findtalent">FIND TALENT </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="findwork"> FIND WORK </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
         <NavBtnLink to="/sign-in">LOGIN</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  </>
  );
}

export default Navbar;