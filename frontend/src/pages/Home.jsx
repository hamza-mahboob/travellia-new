import React, { useRef } from "react";
import Partners from "../components/partners/Partners";
import category1 from "../assets/images/guided-tours.png";
import category2 from "../assets/images/flight-options.png";
import category3 from "../assets/images/religious-tours.png";
import category4 from "../assets/images/luxury.png";
import familyAdventure from "../assets/images/family1.jpg";
import familyAdventure2 from "../assets/images/family2.jpg";
import familyAdventure3 from "../assets/images/family3.jpg";
import familyAdventure4 from "../assets/images/family4.jpg";
import bookflights from "../assets/images/book-flights.png";
import resort from "../assets/images/resort.jpg";
import chooseDestination from "../assets/images/choose-destination.png";
import letsGo from "../assets/images/lets-go.png";
import checkAvailability from "../assets/images/check-availability.png";
import statueOfLiberty from "../assets/images/statue-of-liberty.png";
import losangeles from "../assets/images/LosAngeles.jpg";
import maldives from "../assets/images/maldives.jpg";
import lasvegas from "../assets/images/las vegas.jpg";
import { IoBriefcase } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import dealImg from "../assets/images/deals1.jpg";
import ImgCarousel from "../components/carousel/ImgCarousel";
import ContactUs from "../components/contactus/ContactUs";
import Landing from "../components/landing/Landing";

const Home = () => {
  const trendyRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTrendy = () => {
    smoothScroll(trendyRef.current);
  };

  const smoothScroll = (target) => {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const scrollAmount = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * scrollAmount);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const scrollToContact = () => {
    smoothScroll(contactRef.current);
  };



  return (
    <>
      <Landing />
    
      <Partners />
      {/*----------------- CATEGORY------------- */}
      <div className="container mx-auto my-[100px] xl:px-20 2xl:px-0">
        <div className="mx-5 flex flex-wrap flex-col items-center">
          <h1 className="text-[20px] text-[#D9B748] font-semibold text-center ">
            CATEGORY
          </h1>
          <h1 className="font-bold text-[50px] mb-[100px] text-center">
            We Offer Best Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-between xl:gap-10 2xl:gap-32">
            <div className="flex flex-col items-center gap-5 w-[250px] text-center">
              <img
                className="w-[87px] h-[85px]"
                src={category1}
                alt="Guided Tours"
              />
              <h1 className="text-[20px] font-bold">Incredible Destinations</h1>
              <p className="text-[15px] text-gray-500 w-52">
                Explore top destinations with our knowledgeable guides, ensuring
                an enriching travel experience.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-[250px] text-center">
              <img
                className="w-[87px] h-[85px]"
                src={category2}
                alt="Best Flight Options"
              />
              <h1 className="text-[20px] font-bold">Best Flights Options</h1>
              <p className="text-[15px] text-gray-500 w-52">
                Choose from a variety of flight options tailored to your
                preferences and budget, ensuring a seamless journey.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-[250px] text-center">
              <img
                className="w-[87px] h-[85px]"
                src={category3}
                alt="Religious Tours"
              />
              <h1 className="text-[20px] font-bold">Religious / Spiritual Tours</h1>
              <p className="text-[15px] text-gray-500 w-52">
                Embark on spiritual journeys to sacred places, fostering deeper
                connections and cultural understanding.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-[250px] text-center">
              <img
                className="w-[150px] h-[85px]"
                src={category4}
                alt="Medical Insurance"
              />
              <h1 className="text-[20px] font-bold">Luxury Accommodation</h1>
              <p className="text-[15px] text-gray-500 w-52">
                Experience unparalleled luxury and comfort with our curated
                selection of premium accommodations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*----------------- Flights------------- */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-[50px]">
        <div className="flex flex-col md:justify-center md:pl-[50px] xl:py-[50px] xl:pl-[133px] xl:w-[600px] 2xl:w-[700px] text-center md:text-start items-center md:items-start mx-2 ">
          <h3 className="text-[20px] text-[#D9B748] font-semibold">
            QUICK & CONVENIENT
          </h3>
          <h1 className="font-bold text-[50px] mb-[20px]">
            Book Your Flights Effortlessly
          </h1>
          <p className="text-[16px] text-gray-500 ml-1">
          Enjoy seamless booking to our top family-friendly destinations. Whether it's theme parks, wildlife safaris, interactive museums, or outdoor activities, embark on exciting adventures and create lasting memories with your loved ones in safe, fun-filled environments.
          </p>
          <button
            className="w-[180px] h-[56px] text-center bg-[#D9B748] rounded-xl mt-[31px] text-white font-semibold ml-1"
            onClick={scrollToContact}
          >
            Request a Callback
          </button>
        </div>
        <div className="h-full mt-5">
          <img src={bookflights} alt="" />
        </div>
      </div>

      {/*---------------- Family Adventure ------------- */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-[100px]">
        <div className="h-full flex flex-col xl:flex-row py-10 xl:relative gap-10 lg:gap-0 ">
          <img
            src={familyAdventure}
            alt=""
            className="h-[300px] my-auto mx-10 shadow-xl rounded-xl object-cover object-center"
          />
          <img
            src={familyAdventure4}
            alt=""
            className="h-[300px] mx-10 lg:mx-0 shadow-xl rounded-xl object-cover object-bottom"
          />
          <img
            src={familyAdventure3}
            alt=""
            className="h-[300px] my-auto mx-10 shadow-xl rounded-xl object-cover object-bottom "
          />
          <img
            src={familyAdventure2}
            alt=""
            className="h-[300px] xl:absolute xl:top-96 xl:left-[280px] mx-10 xl:mx-0 shadow-xl rounded-xl object-cover object-center"
          />
        </div>
        <div className="flex flex-col md:justify-center md:pl-[100px] xl:py-[172px] xl:pl-[133px] xl:w-[600px] 2xl:w-[700px] text-center md:text-start items-center md:items-start mx-2 ">
          <h3 className="text-[20px] text-[#D9B748] font-semibold">
            FAMILY ADVENTURES
          </h3>
          <h1 className="font-bold text-[50px] mb-[20px]">
            Exciting Family-Friendly Destinations
          </h1>
          <p className="text-[16px] text-gray-500 ml-1">
            Embark on thrilling family adventures at our handpicked
            destinations. From theme parks and wildlife safaris to interactive
            museums and outdoor activities, create unforgettable memories with
            your loved ones in exciting and safe environments.
          </p>
          <button
            className="w-[180px] h-[56px] text-center bg-[#D9B748] rounded-xl mt-[31px] text-white font-semibold ml-1"
            onClick={scrollToTrendy}
          >
            View Packages
          </button>
        </div>
      </div>

      {/*---------------- Deals ------------- */}
      <div className="relative container mx-auto px-4">
        <div className="md:mx-5">
          <img
            src={dealImg}
            alt="Summer Deals"
            className="rounded-3xl h-[700px] w-full object-cover"
          />
          <div className="absolute left-2 right-2 xl:left-10 xl:right-0 top-52 bg-white p-5 m-4 rounded-3xl xl:w-[400px]">
            <h1 className="text-4xl font-semibold mb-2">
              Big Summer deals are on now
            </h1>
            <p className="text-md w-[300px]">
              Make your big summer getaway happen: members save 25% or more on
              thousands of hotels worldwide.
            </p>
            <button
              className="w-[180px] h-[56px] text-center bg-[#D9B748] rounded-xl mt-[31px] text-white font-semibold"
              onClick={scrollToTrendy}
            >
              Book by 21 July
            </button>
          </div>
        </div>
      </div>

      {/*------------- Img Carousel ----------- */}
      <ImgCarousel />

      {/*------------- RESORT BOOKINGS ----------- */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-[50px]">
        <div className="flex flex-col md:justify-center md:pl-[50px] xl:py-[50px] xl:pl-[133px] xl:w-[600px] 2xl:w-[700px] text-center md:text-start items-center md:items-start mx-2 ">
          <h3 className="text-[20px] text-[#D9B748] font-semibold">
            FAST & EASY
          </h3>
          <h1 className="font-bold text-[50px] mb-[20px]">
            Get Your Favourite Hotels/Resort Bookings
          </h1>
          <div className="flex flex-col gap-[42px] text-start">
            <div className="flex flex-row gap-[20px]">
              <img
                className="w-[47px] h-[48px] my-auto"
                src={chooseDestination}
                alt=""
              />
              <div className="flex flex-col w-[300px]">
                <h1 className="font-bold text-[16px]">Choose Destination</h1>
                <p className="">
                  Find your perfect travel spot from our diverse list of
                  destinations.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[20px]">
              <img
                className="w-[47px] h-[48px] my-auto"
                src={checkAvailability}
                alt=""
              />
              <div className="flex flex-col w-[300px]">
                <h1 className="font-bold text-[16px]">Check Availability</h1>
                <p className="">
                  Get real-time updates on flights, hotels, and activities.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[20px]">
              <img className="w-[47px] h-[48px] my-auto" src={letsGo} alt="" />
              <div className="flex flex-col w-[300px]">
                <h1 className="font-bold text-[16px]">Let's Go</h1>
                <p className="">
                  Start your adventure with everything planned and ready.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full mt-5 flex justify-center items-center mx-5 ">
          <img
            src={resort}
            alt=""
            className="w-full rounded-xl md:w-[600px] md:h-[400px] object-cover object-center"
          />
        </div>
      </div>

      {/*------------- Trendy ----------- */}
      <div
        ref={trendyRef}
        className="container mx-auto flex flex-col items-center my-[100px]"
      >
        <h3 className="text-[20px] text-[#D9B748] font-semibold">TRENDY</h3>
        <h1 className="font-bold text-[50px] mb-[51px] text-center">
          Our Trending Tour Packages
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[100px]">
          <div className="flex flex-col w-[280px] xl:w-[300px] 2xl:w-[400px]">
            <img
              src={losangeles}
              alt=""
              className="rounded-xl w-[400px] h-[300px] object-cover object-center"
            />
            <div className="flex flex-row gap-[35px]">
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <IoBriefcase />8 Days
              </div>
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <FaUser />
                25 People Going
              </div>
            </div>
            <div className="flex flex-row gap-[3px] justify-between">
              <h1 className="font-bold text-[30px] mt-[10px] ">Los Angeles</h1>
              <div className="flex flex-row">
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center mt-3 text-gray-500">
              <IoLocationOutline className="size-[28px] " />
              <p className="font-semibold">United States</p>
            </div>
            <div className="flex flex-row gap-[21px] mt-[10px]">
              <p className="font-semibold text-[30px] text-[#D9B748]">£499</p>
              <p className="font-semibold text-[30px] text-gray-400 line-through">
                £699
              </p>
            </div>
            <p className="mt-3">
              Experience the vibrant city of Los Angeles, known for its
              entertainment industry, beautiful beaches, and diverse cultural
              attractions.
            </p>
            <button
              className="w-[135px] h-[50px] bg-[#D9B748] rounded-xl mt-10 text-white font-semibold "
              onClick={scrollToContact}
            >
              Explore Now
            </button>
          </div>

          <div className="flex flex-col w-[280px] xl:w-[300px] 2xl:w-[400px]">
            <img
              src={maldives}
              alt=""
              className="rounded-xl w-[400px] h-[300px] object-cover object-center"
            />
            <div className="flex flex-row gap-[35px]">
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <IoBriefcase />8 Days
              </div>
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <FaUser />
                60 People Going
              </div>
            </div>
            <div className="flex flex-row gap-[3px]  justify-between">
              <h1 className="font-bold text-[30px] mt-[10px]">Maldives</h1>
              <div className="flex flex-row">
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center mt-3 text-gray-500">
              <IoLocationOutline className="size-[28px] " />
              <p className="font-semibold">Maldives</p>
            </div>
            <div className="flex flex-row gap-[21px] mt-[10px]">
              <p className="font-semibold text-[30px] text-[#D9B748]">£499</p>
              <p className="font-semibold text-[30px] text-gray-400 line-through">
                £699
              </p>
            </div>
            <p className="mt-3">
              Explore the breathtaking beauty of the Maldives, with its pristine
              beaches, crystal-clear waters, and luxurious resorts offering the
              perfect tropical getaway.
            </p>
            <button
              className="w-[135px] h-[50px] bg-[#D9B748] rounded-xl mt-10 text-white font-semibold "
              onClick={scrollToContact}
            >
              Explore Now
            </button>
          </div>

          <div className="flex flex-col w-[280px] xl:w-[300px] 2xl:w-[400px]">
            <img
              src={lasvegas}
              alt=""
              className="rounded-xl w-[400px] h-[300px] object-cover object-center"
            />
            <div className="flex flex-row gap-[35px]">
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <IoBriefcase />8 Days
              </div>
              <div className="flex flex-row items-center gap-[10px] mt-[20px] text-gray-500">
                <FaUser />
                155 People Going
              </div>
            </div>
            <div className="flex flex-row gap-[3px] justify-between">
              <h1 className="font-bold text-[30px] mt-[10px]">Las Vegas</h1>
              <div className=" flex flex-row">
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
                <IoStarSharp className="mt-[25px] text-[#ffd64f] size-[20px]" />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center mt-3 text-gray-500">
              <IoLocationOutline className="size-[28px] " />
              <p className="font-semibold">United States</p>
            </div>
            <div className="flex flex-row gap-[21px] mt-[10px]">
              <p className="font-semibold text-[30px] text-[#D9B748]">£499</p>
              <p className="font-semibold text-[30px] text-gray-400 line-through">
                £699
              </p>
            </div>
            <p className="mt-3">
              Experience the excitement of Las Vegas, famous for its vibrant
              nightlife, world-class entertainment, and iconic casinos set
              against the backdrop of the Nevada desert.
            </p>
            <button
              className="w-[135px] h-[50px] bg-[#D9B748] rounded-xl mt-10 text-white font-semibold "
              onClick={scrollToContact}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/*------------- Statue of Liberty ----------- */}
      <div>
        <img className="w-full h-[400px]" src={statueOfLiberty} alt="" />
      </div>

      {/*------------- Contact Us ----------- */}
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
