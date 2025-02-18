import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import ukFlag from "../../assets/images/uk-flag.png";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import WhatsAppButton from "../whatsappbutton/whatsappbutton";
import { Context } from "../../context/contextAPI";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { setBg } = useContext(Context)
  const location = useLocation();

  const navLinks = [
    { title: "Flights", url: "/flights" },
    { title: "Hotels", url: "/hotels" },
    { title: "Vacations", url: "/vacations" },
    { title: "About", url: "/about" },
    { title: "Contact Us", url: "/contact" },
    { title: "Terms & Conditions", url: "/termsnconditions" },
  ];

  const handleLogoClick = () => {
    // Clear local storage
    localStorage.clear();

    // Refresh the page
    window.location.reload();
  };


  const handleClick = (e, index) => {
    setIsNavOpen(false);

    // Ensure the index is within the range 1-3
    let adjustedIndex = index + 1;

    if (adjustedIndex > 3 || adjustedIndex < 1) {
      adjustedIndex = 1;
    }

    // //console.log('index adjusted: ', adjustedIndex);
    localStorage.setItem('selectedItem', adjustedIndex);
    // setBg(adjustedIndex);
  };



  return (
    <div className={`px-4 md:px-8 lg:px-12 mb-40 w-full bg-black ${location.pathname == '/contact' ? 'bg-opacity-40' : 'bg-transparent'}`}>
      < div className="flex items-center justify-between py-4 mx-2" >
        {/* Left side: Logo */}
        < Link to="/" className="flex items-center justify-center" onClick={handleLogoClick} >
          <img src={logo} alt="Logo" className="h-12 xl:h-14 2xl:h-20 w-auto" />
        </Link >

        {/* Center: Tabs/Navigation Links */}
        < nav
          className={`lg:flex ${isNavOpen
            ? "flex flex-col absolute left-0 top-20 bg-white shadow-lg w-full z-10 rounded-xl "
            : "hidden lg:flex md:relative md:top-0 md:w-auto md:shadow-none"
            }`}
        >
          {
            navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-[#D9B84A] lg:hover:scale-110 font-bold text-sm xl:text-lg transition-all ease-in-out p-4 will-change-transform"
                onClick={(e) => handleClick(e, index)}
              >
                {link.title}
              </a>
            ))
          }
        </nav >

        {/* Right side: Phone number and Hamburger Icon */}
        < div className="flex items-center space-x-4" >
          <div className="ml-1 items-center space-x-1 hidden lg:flex">
            <FaPhoneAlt className="text-[#D9B84A]" />
            <span className="text-[#D9B84A] font-bold">+44 203 504 0786</span>
          </div>

          {/* Hamburger Icon for smaller screens */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <FaTimes className="text-[#D9B84A] h-6 w-6" />
            ) : (
              <FaBars className="text-[#D9B84A] h-6 w-6" />
            )}
          </div>
        </div >
      </div >
      <WhatsAppButton />
    </div >
  );
};

export default Header;
