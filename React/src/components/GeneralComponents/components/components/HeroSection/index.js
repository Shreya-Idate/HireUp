import React from 'react';
import office from '../../../images/images/img1.png'
import{HeroContainer,HeroImg,HeroContent,HeroH1} from './HeroElements';


const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
            <HeroH1>Hire the TOP<br /> Freelance Talent <br /> at S.I.E.S.</HeroH1>
            <HeroImg>
                <img src={office} alt="noImage" width={"2500%"}/>
            </HeroImg>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;