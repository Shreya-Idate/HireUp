// import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Button} from '../ButtonElements';
import { TeroContainer,
    TeroContent,
    TeroP,
    TeroBtnWrapper,
    ArrowForward,
    ArrowRight }
    from './TeroElements';

const TeroSection = () => {
    const [hover,setHover] =useState(false);

    const onHover =()=> {
        setHover(!hover)
    }

  return (
   <TeroContainer>
    <TeroContent>
        <TeroP>
            Get the chance to hire the best talents at SIES and be sure of their performance by looking at their reviews and ratings given by previous employers! Hire them at affordable cost.
        </TeroP>
        <TeroBtnWrapper>
            <Button to="login" onMouseEnter={onHover}
             onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
            {/* <Button to="login" onMouseEnter={onHover}
             onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button> */}
        </TeroBtnWrapper>
    </TeroContent>
   </TeroContainer>
  );
};

export default TeroSection;