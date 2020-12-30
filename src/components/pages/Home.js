import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import About from './About';
import Team from './Team';
import Work from './Work';
import Service from './Service';

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Team />
      <Work />
      <Service />
    </div>
  );
}

export default Home;