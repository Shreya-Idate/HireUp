import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button= styled(Link)`
position: relative;
border-radius:30px;
background: ${({primary}) => (primary ? '#1B4D60' : '#010606')};
white-space:nowrap;
color: ${({dark})=>(dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
font-size:30px;
margin-left: 50%;
cursor:pointer;
display:flex;
justify-content: right;
align-items: right;
transition: all 0.2s ease-in-out;
text-decoration: none;
padding: 2.5%;
display: inline;
margin-right: 2%;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? "#fff" :'#1B4D60' )};
};

@media screen and (max-width: 768px){
    margin: 2%;
}

`;
export default Button; 