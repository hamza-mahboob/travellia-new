import React from "react";
import img1 from "../../assets/images/Dubai.jpg";
import img2 from "../../assets/images/Conakry.jpg";
import img4 from "../../assets/images/Accra.jpg";
import img5 from "../../assets/images/Harare.jpg";
import img6 from "../../assets/images/Lagos.jpg";
import img7 from "../../assets/images/Manila.jpg";
import img8 from "../../assets/images/Mumbai.jpg";
import img9 from "../../assets/images/brisbane.jpg";
import img10 from "../../assets/images/singapore.jpg";
import img11 from "../../assets/images/perth.jpg";
import img12 from "../../assets/images/auckland.jpg";
import img13 from "../../assets/images/maldives.jpg";
import img14 from "../../assets/images/new york.jpg";
import img15 from "../../assets/images/makkah.jpg";
import img16 from "../../assets/images/madina.jpg";
// import img17 from "../../assets/images/LosAngeles.jpg";
import img18 from "../../assets/images/AbuDhabi.jpg";
import img19 from "../../assets/images/Lahore.jpg";
import img20 from "../../assets/images/Colombo.jpg";
import img21 from "../../assets/images/Islamabad.jpg";
import { Carousel } from "flowbite-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const destinations = [
  { img: img1, name: "Dubai" },
  { img: img2, name: "Conakry" },
  { img: img4, name: "Accra" },
  { img: img5, name: "Harare" },
  { img: img6, name: "Lagos" },
  { img: img7, name: "Manila" },
  { img: img8, name: "Mumbai" },
  { img: img9, name: "Brisbane" },
  { img: img10, name: "Singapore" },
  { img: img11, name: "Perth" },
  { img: img12, name: "Auckland" },
  { img: img13, name: "Maldives" },
  { img: img14, name: "New York" },
  { img: img15, name: "Makkah" },
  { img: img16, name: "Madina" },
  { img: img18, name: "Abu Dhabi" },
  { img: img19, name: "Lahore" },
  { img: img20, name: "Colombo" },
  { img: img21, name: "Islamabad" }
];

function ImgCarousel() {
  return (
    <div className="container mx-auto my-20 flex flex-col justify-center items-center px-4 overflow-x-hidden">
      <h3 className="text-[20px] text-[#D9B748] font-semibold mb-2">POPULAR</h3>
      <h1 className="font-bold text-[50px] mb-6 text-center">
        Our Popular Destinations
      </h1>
      <Carousel slideInterval={2000} pauseOnHover>
        {destinations.map((destination, index) => (
          <div key={index} className="relative w-full h-auto aspect-[16/9]">
            <LazyLoadImage
              src={destination.img}
              alt={destination.name}
              className="w-full h-full object-contain rounded"
            />
            <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-[#D9B748] text-center py-2 px-4 rounded">
              <h2 className="text-sm sm:text-md md:text-xl lg:text-2xl font-semibold">{destination.name}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
