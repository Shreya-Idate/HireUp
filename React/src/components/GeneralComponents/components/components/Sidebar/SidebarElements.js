import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import React from "react";

export const SidebarContainer = styled.aside`
position:fixed;
z-index:000;
width:100%;
height:100%;
backgroung: #0d0d0d;
display:grid;
align-items: center;
top:0;
left:0;
transition:0.3 ease-in-out;
top:0;
${'' /* opacity: ${({ isOpen })=> (isOpen ? '100%': '0')}; */}
${'' /* top: ${({ isOpen }) => (isOpen ? '0': "-100%")}; */}
`;
export const CloseIcon= styled(FaTimes)`
color:black;

`;

export const Icon = styled.div`
position:absolute
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor:pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color:black;
`;


export const SidebarMenu=styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align:center;

@media screen and (max-width:480px){
    grid-template-rows: repeat(6, 60px);

}
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration:none;
list-style: none;
transition: 0.2s ease-in-out;
color:black;
cursor: pointer;

&:hover{
    color:01bf71;
    transition:0.2s ease-in-out;
}
`;

export const SideBtnWrap=styled.div`
display:flex;
justify-content:center;
`;

export const SidebarRoute=styled(LinkR)`
border-radius:50px;
background:red;
white-space:nowrap;
padding:16px 64px;
font-size:16px;
border:none;
color:black ;
outline:none;
cursor:pointer;
text-decoration:none;
transition: all 0.2s ease-in-out;
&:hover{
    transition:all 0.2s ease-in-out;
    background: @fff;
    color:white;
}
`;

export default SidebarContainer;