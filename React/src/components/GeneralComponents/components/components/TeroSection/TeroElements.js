import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const TeroContainer=styled.div`
height:340px;
background:#899CA3;
display:flex;
justify-content:right;
align-items:right;
position:relative;
padding: 0 30px;
`;

export const TeroContent=styled.div`
padding: 8px 24px;
align-items:right;
flex-direction: column;
display:flex;
max-width:1000px;
`;

export const TeroP = styled.p`
padding-top: 2%; 
color:#0D1F25;
font-size:22px;
text-align:right;
${'' /* max-width:500px; */}


@media screen and (max-width: 768px){
    font-size:24px;
    text-align: left;
}
@media screen and (max-width: 480px){
    font-size:18px;
}
`;

export const TeroBtnWrapper=styled.div`
${'' /* margin-top:32px; */}
display:flex;
font-size:30px;
${'' /* flex-direction:column; */}
align-items:right;
margin-bottom:50px;
`;

 export const ArrowForward= styled(MdArrowForward)`
 margin-left:8px;
 font-size:40px;

 `;

 export const ArrowRight= styled(MdKeyboardArrowRight)`
 margin-left:8px;
 font-size: 40px;
 `;
