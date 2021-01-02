import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import About from './About';
import Team from './Team';
import Work from './Work';
import Service from './Service';
import Price from './Price';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Team />
      <Work />
      <Service />
      <Price />
      <Contact />
    </div>
  );
}

export default Home;