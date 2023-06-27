import styled from 'styled-components';

export const HeroContainer=styled.div`
width:100%;
height: 30rem;
display:flex;
justify-content:left;
align-items:left;
position:relative;
padding: 0 30px;
margin-top:5%;
`;

export const HeroImg=styled.image`
height: 30px;
width: 30px;
padding-right:0;
float: right;
justify-content:right;
align-items:right;

@media screen and (max-width: 768px){
    height: 1rem;
    width: 1rem;
}

`;

export const HeroH1=styled.h1`
color:white;
font-size:70px;
padding:5px;

@media screen and (max-width: 768px){
    font-size:40px;
}
@media screen and (max-width: 480px){
    font-size:32px;
}

`;

export const HeroContent=styled.div`
display: flex;
position: relative;
width: 50%;
float: left;
padding: 5%;
overflow: visible;
`;

 