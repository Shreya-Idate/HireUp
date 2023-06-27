import React from 'react'
import { SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink, 
  // SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sidebar = (isOpen,toggle) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
         <CloseIcon />   
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="findtalent" onClick={toggle}>Find Talent</SidebarLink>
            <SidebarLink to="findwork" onClick={toggle}>Find Work</SidebarLink>
            <SidebarLink to="login" onClick={toggle}>Login</SidebarLink>
          </SidebarMenu>
          {/* <SideBtnWrap>
            <SidebarRoute to='/login'>Login</SidebarRoute>
          </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;