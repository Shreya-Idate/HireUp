import React, { useState } from 'react';
import HeroSection from '../../components/components/HeroSection/index';
// import Sidebar from '../Sidebar';
import Navbar from '../../components/components/Navbar/index';
import TeroSection from '../../components/components/TeroSection/index';
import FooterSection from '../../components/components/FooterSection/index';
import { AboutNav } from '../../AboutNav';


const Home = () => {
  const[isOpen, setIsOpen]= useState(false)
 const toggle = () => {
    setIsOpen(!isOpen);
 };

    return (
    <>
    {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    {/* <Navbar toggle={toggle} /> */}
    <AboutNav />
    <HeroSection />
    <TeroSection />
    <FooterSection />
    </>
  );
}

export default Home;