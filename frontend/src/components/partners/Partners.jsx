import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emirates from "../../assets/images/Emirates_(airline)-Logo.wine.png";
import turkishAirlines from "../../assets/images/Turkish_Airlines-Logo.wine.png";
import brusselsAirlines from "../../assets/images/Brussels_Airlines-Logo.wine.png";
import lufthansa from "../../assets/images/Lufthansa-Logo.wine.png";
import qatarAirways from "../../assets/images/Qatar_Airways-Logo.wine.png";
import ethiopian from "../../assets/images/Ethiopian_Airlines-Logo.wine.png";
import kenyaAirways from "../../assets/images/Kenya_Airways-Logo.wine.png";
import royalAirMaroc from "../../assets/images/Royal_Air_Maroc-Logo.wine.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const logos = [
  { src: emirates, alt: "Emirates" },
  { src: turkishAirlines, alt: "Turkish Airlines" },
  { src: brusselsAirlines, alt: "Brussels Airlines" },
  { src: lufthansa, alt: "Lufthansa" },
  { src: qatarAirways, alt: "Qatar Airways" },
  { src: ethiopian, alt: "Ethiopian" },
  { src: kenyaAirways, alt: "Kenya Airways" },
  { src: royalAirMaroc, alt: "Royal Air Maroc" }
];

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className='w-full bg-zinc-100 py-10'>
      <div className='mx-auto px-4'>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className='flex justify-center items-center p-4'>
              <LazyLoadImage className='h-[100px] sm:h-[120px] md:h-[150px] object-contain' src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
