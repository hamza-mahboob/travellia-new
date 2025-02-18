import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchFlights from '../pages/SearchFlights';
import ContactUsPage from '../pages/ContactUsPage';
import ContactUs from '../components/contactus/ContactUs';
import Landing from '../components/landing/Landing';
import Header from '../components/header/Header';
import bg0 from '../assets/images/auckland.jpg';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<Home />} />
      <Route path='/search-flights' element={<SearchFlights />} />
      <Route path='/reserve-flights' element={<ContactUsPage />} />
      <Route path='/hotels' element={<Landing />} />
      <Route path='/vacations' element={<Landing />} />
      <Route path='/contact' element={
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden z-50"
          style={{ backgroundImage: `url(${bg0})` }} // Corrected the backgroundImage syntax
        >
          <div className='-mb-40'>
          <Header />
          </div>
          <ContactUs />
        </div>
      } />

      <Route path='/about' element={<Header />} />
      <Route path='/termsnconditions' element={<Header />} />
    </Routes>
  )
}

export default Routers