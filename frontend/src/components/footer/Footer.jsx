import React, { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { Context } from "../../context/contextAPI";

const Footer = () => {
  const { setBg, setDest } = useContext(Context)
  const year = new Date().getFullYear();

  const scrollToTop = (to) => {
    window.scrollTo({
      top: to,
      behavior: "smooth"
    });
  };

  const handleUmrahPackagesClick = () => {
    localStorage.setItem('selectedItem', 4);
    setBg(4)
    scrollToTop(0)
    // Navigate to the main page or refresh the current page
    // navigate('/'); // Adjust the path if necessary
  };

  const handleHolidayPackagesClick = () => {
    localStorage.setItem('selectedItem', 3);
    setBg(3)
    scrollToTop(0)
    // Navigate to the main page or refresh the current page
    // navigate('/'); // Adjust the path if necessary
  };

  const handleCustomPackagesClick = () => {
    //bad practice apparently
    const el = document.querySelector('#my-contact-form')
    el.scrollIntoView({ behavior: 'smooth' })

    // localStorage.setItem('selectedItem', 3);
    // window.scrollTo(0, 0)
    // Navigate to the main page or refresh the current page
    // navigate('/'); // Adjust the path if necessary
  };

  const handleDestinationClick = (e) => {
    // const el = document.querySelector('#Destination')
    localStorage.setItem('selectedItem', 1);
    setBg(1)
    // el.value = e.target.innerHTML;
    setDest(e.target.innerText)
    scrollToTop(0)
  }

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex flex-col lg:flex-row pb-10 px-5">
        <div className="flex flex-col w-full lg:w-1/4 mb-10 lg:mb-0 lg:mr-10">
          <img
            src={logo}
            alt="Logo"
            className="mb-4 w-60 h-60 mx-auto md:mx-0"
          />
          <div className="flex flex-row gap-5 mb-4 items-center">
            <FaMapLocation className="w-6 h-6 flex-shrink-0" />
            <p className="text-[16px]">
              West 44, 44-60 Richardshaw Lane, Stanningley, Pudsey, England,
              LS28 7UR
            </p>
          </div>
          <div className="flex flex-row gap-5 mb-4">
            <AiOutlineMail className="w-6 h-6 flex-shrink-0" />
            <p className="text-[16px]">info@travellia.co.uk</p>
          </div>
          <p className="text-[16px] leading-7 font-[400] text-textColor">
            Copyright © {year}. All Rights Reserved.
          </p>
          <div className="flex mt-4">
            <a
              href="https://www.facebook.com/Travellialtd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9B748] hover:text-[#c2a443] cursor-pointer"
            >
              <FaFacebook className="w-6 h-6 mr-5" />
            </a>
            <a
              href="https://www.instagram.com/travelliauk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9B748] hover:text-[#c2a443] cursor-pointer"
            >
              <FaInstagram className="w-6 h-6 mr-5" />
            </a>
            <a
              href="https://www.x.com/travelliauk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9B748] hover:text-[#c2a443] cursor-pointer"
            >
              <FaTwitter className="w-6 h-6 mr-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/6 mb-10 lg:mb-0 text-center lg:text-left mt-20">
          <h1 className="text-[21px] font-semibold text-[#D9B748]">
            Company
          </h1>
          <div className="mt-4 lg:mt-12 ">
            <Link to="/about" className="mb-5 block hover:text-[#D9B748]">
              About Us
            </Link>
            <Link to="/careers" className="mb-5 block hover:text-[#D9B748]">
              Careers
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/6 mb-10 lg:mb-0 text-center lg:text-left mt-20">
          <h1 className="text-[21px] font-semibold text-[#D9B748]">
            Destinations
          </h1>
          <div className="mt-4 lg:mt-12">
            <Link className="mb-5 block  hover:text-[#D9B748]" onClick={handleDestinationClick}>
              Maldives
            </Link>
            <Link className="mb-5 block hover:text-[#D9B748]" onClick={handleDestinationClick}>
              Los Angeles
            </Link>
            <Link className="mb-5 block hover:text-[#D9B748]" onClick={handleDestinationClick}>
              Las Vegas
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/6 mb-10 lg:mb-0 text-center lg:text-left mt-20">
          <h1 className="text-[21px] font-semibold text-[#D9B748]">
            Packages
          </h1>
          <div className="mt-4 lg:mt-12">
            <Link className="mb-5 block hover:text-[#D9B748]" onClick={handleUmrahPackagesClick}>
              Umrah Packages
            </Link>
            <Link className="mb-5 block hover:text-[#D9B748]" onClick={handleHolidayPackagesClick}>
              Holiday Packages
            </Link>
            <Link className="mb-5 block hover:text-[#D9B748]" onClick={handleCustomPackagesClick}>
              Custom Packages
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/4 text-center lg:text-left mt-20">
          <h1 className="text-[20px] mb-[48px] font-[700] text-[#D9B748]">
            Subscribe
          </h1>
          <p className="text-[16px] leading-7 font-[400] text-textColor mb-[20px]">
            Subscribe to get the latest blog news from us.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <input
              type="text"
              className="border w-full lg:w-[300px] h-[50px] rounded-[20px] pl-[15px] mr-3"
              placeholder="Email Address"
            />
            <div className="w-[50px] h-[50px] cursor-pointer bg-[#D9B748] rounded-full flex items-center justify-center">
              <FaArrowRight className="text-white size-[32px] cursor-pointer rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
