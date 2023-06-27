import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterElements";

function FooterSection() {
  return (
    <Box>
      {/* <h1 style={{ color: "#CAD4DD", 
                   textAlign: "center"}}>
        HIRE-UP
      </h1> */}
      <Container>
        <Row>
          <Column>
            {/* <Heading>About Us</Heading> */}
            <FooterLink href="#">About Us</FooterLink>
          </Column>
          
          <Column>
            {/* <Heading>Contact Us</Heading> */}
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            {/* <Heading>Contact Us</Heading> */}
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}
export default FooterSection;
