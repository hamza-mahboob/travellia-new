import React, { useContext } from 'react';
import Header from '../header/Header'; // Replace with the actual path to your Header component
import Hero from '../hero/Hero'; // Replace with the actual path to your Hero component
import bg0 from '../../assets/images/hero-background-3.jpg';
import bg1 from '../../assets/images/AbuDhabi.jpg';
import bg2 from '../../assets/images/Colombo.jpg';
import bg3 from '../../assets/images/makkah.jpg';
import { Context } from '../../context/contextAPI';

const Landing = () => {
  const bgs = [bg0, bg1, bg2, bg3]
  const { bg } = useContext(Context)
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden" style={{ backgroundImage: `url(${bgs[bg - 1]})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Landing;
