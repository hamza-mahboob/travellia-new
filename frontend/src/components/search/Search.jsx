/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Checkbox, Label } from "flowbite-react";
import Dates from "./search-components/Dates";
import Location from "./search-components/Location";
import PassengersWithRoom from "./search-components/PassengersWithRoom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Return from "./search-components/Return";
import Oneway from "./search-components/Oneway";
import Multicity from "./search-components/Multicity";
import Packages from "./search-components/Packages";
import { Context } from "../../context/contextAPI";
import AirportDropdown from "../airportdropdown/AirportDropdown";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import PassengerForm from "./search-components/PassengerFormSearchBar";

const Search = () => {
  const menuItems = [
    { id: 1, text: "Flights" },
    { id: 2, text: "Hotels" },
    { id: 3, text: "Holiday Packages" },
    { id: 4, text: "Hajj / Umrah Packages" },
  ];

  const loadingSentences = ["Hold tight! Your next adventure is loading...",
    "Searching the skies for the best deals...",
    "Great journeys begin with a little patience...",
    "Wings ready... just finding the perfect flight for you!",
    "Sit back and relax, your dream destination is just a click away...",
    "Exploring options for your perfect getaway...",
    "Fasten your seatbelt... Your flight options are on the way!",
    "Almost there! Crafting your travel experience..."]

  const randomSentence = loadingSentences[Math.floor(Math.random() * loadingSentences.length)];

  const { leavingFrom, goingTo, departureDate, returnDate, travellers, setFlightsJson, flightsJson, setTripType, tripType, setBg, bg, selectedBookingClass, setSelectedBookingClass } = useContext(Context)

  const [clickedItem, setClickedItem] = useState(1);
  const [addFlight, setAddFlight] = useState(false);
  const [showBookingClassDropdown, setShowBookingClassDropdown] = useState(false);
  const [selectedTripType, setSelectedTripType] = useState("ROUND_TRIP");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const selectedItem = Number(localStorage.getItem("selectedItem"));
    // //console.log('index in search component: ', selectedItem);
    setClickedItem(selectedItem || 1)
    setBg(selectedItem || 1)
    // //console.log('clicked item: ', clickedItem);
  }, [setBg])

  //i dont know if this breaks anything :D
  useEffect(() => {
    setClickedItem(bg)
    // //console.log('clicked item: ', clickedItem);
  }, [bg])

  const navigate = useNavigate();

  const handleClick = (itemId) => {
    setClickedItem(itemId);
    setBg(itemId);
  };

  const handleAddFlightChange = () => {
    setAddFlight(!addFlight);
  };

  const handleBookingClassClick = () => {
    setShowBookingClassDropdown(!showBookingClassDropdown);
  };

  const handleSelectBookingClass = (bookingClass) => {
    setSelectedBookingClass(bookingClass);
    setShowBookingClassDropdown(false);
  };

  const handleTripTypeChange = (event) => {
    setSelectedTripType(event.target.value);
    setTripType(event.target.value);
  };

  const handleSearch = async () => {
    if (!leavingFrom || !goingTo)
      return

    setLoading(true); // Start loading
    try {
      const response = await fetch("https://travellia-tau.vercel.app/api/flights"
      // const response = await fetch("http://localhost:3000/api/flights"
        // const response = await fetch("http://localhost:4000/api/flights/getFlightsFromDb"
        , {
          method: "POST",
          body: JSON.stringify({
            leavingFrom,
            goingTo,
            departureDate,
            returnDate,
            travellers,
            tripType,
            selectedBookingClass,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

      const json = await response.json();

      //redirect to search flights page if response is ok
      if (response.ok) {
        //console.log('navigating to search flights');
        setFlightsJson(json)
        //console.log('flights', flightsJson);
        navigate('/search-Flights')
      }
      if (!response.ok) {
        //console.log('there was an error getting flights')
        setFlightsJson(json)
        navigate('/search-Flights')
      }
    } catch (error) {
      //console.log(error)
    } finally {
      setLoading(false); // End loading
    }

    // //console.log(json);
  };

  // const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div className="container w-full lg:w-9/12 2xl:w-full mx-auto md:bg-transparent rounded-3xl mb-10 ">
      <div className="border border-solid flex flex-col bg-white rounded-3xl mx-5">
        {loading ? (
          <div className="flex flex-col justify-center items-center fixed inset-0 bg-neutral-200 z-50">
            <img
              src={logo}
              alt="Logo"
              className="h-20 md:h-40 w-auto mb-4 animate-blink"
            />
            <h1 className="text-2xl my-2 italic animate-blink text-gray-950 text-center">{randomSentence}</h1>
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#D9B748] my-2 mt-2"></div>
          </div>
        ) : (
          <>
            <div className="flex overflow-x-auto space-x-4 w-full max-w-[500px] mx-auto px-4 py-2">
              {menuItems.slice(0, 2).map((item) => (
                <h1
                  key={item.id}
                  className={`text-[16px] font-semibold cursor-pointer relative ${clickedItem === item.id ? "text-[#D9B748]" : "text-gray-600"
                    }`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.text}
                  {clickedItem === item.id && (
                    <span className={`absolute bottom-[-8px] left-0 h-[2px] w-full bg-[#D9B748]`}></span>
                  )}
                </h1>
              ))}
              <div className="flex space-x-4">
                {menuItems.slice(2).map((item) => (
                  <h1
                    key={item.id}
                    className={`text-[16px] font-semibold cursor-pointer relative ${clickedItem === item.id ? "text-[#D9B748]" : "text-gray-600"
                      }`}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.text}
                    {clickedItem === item.id && (
                      <span className={`absolute bottom-[-8px] left-0 h-[2px] w-full bg-[#D9B748]`}></span>
                    )}
                  </h1>
                ))}
              </div>
            </div>
            <div className="bg-gray-300 h-[1px] w-full"></div>

            {clickedItem === 1 && (
              <div className="flex flex-col">
                <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-start gap-3">
                  <div className="flex items-center gap-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tripType"
                        value="ROUND_TRIP"
                        className="form-radio text-[#D9B748] border-[#D9B748]"
                        checked={selectedTripType === "ROUND_TRIP"}
                        onChange={handleTripTypeChange}
                      />
                      <span className="ml-2 text-gray-700">Return</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tripType"
                        value="ONE_WAY"
                        className="form-radio text-[#D9B748] border-[#D9B748]"
                        checked={selectedTripType === "ONE_WAY"}
                        onChange={handleTripTypeChange}
                      />
                      <span className="ml-2 text-gray-700">One-way</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tripType"
                        value="multiCity"
                        className="form-radio text-[#D9B748] border-[#D9B748]"
                        checked={selectedTripType === "multiCity"}
                        onChange={handleTripTypeChange}
                      />
                      <span className="ml-2 text-gray-700">Multi-city</span>
                    </label>
                  </div>

                  <div
                    className="flex flex-row items-center justify-between w-[200px] h-[40px] border border-[#D9B748] px-5 rounded-xl cursor-pointer relative bg-[#e7ca68]"
                    onClick={handleBookingClassClick}
                  >
                    <p>{{
                      ECONOMY: 'Economy',
                      PREMIUM_ECONOMY: 'Premium Economy',
                      BUSINESS: 'Business Class',
                      FIRST: 'First Class',
                    }[selectedBookingClass] || null}</p>


                    {showBookingClassDropdown ? <FaChevronUp /> : <FaChevronDown />}
                    {showBookingClassDropdown && (
                      <div className="absolute top-full mt-1 left-0 w-full bg-white border border-[#D9B748] rounded-xl z-40">
                        <p className="cursor-pointer hover:bg-[#D9B748] p-2 rounded-tl-xl rounded-tr-xl" onClick={() => handleSelectBookingClass("ECONOMY")}>
                          Economy
                        </p>
                        <p className="cursor-pointer hover:bg-[#D9B748] p-2" onClick={() => handleSelectBookingClass("PREMIUM_ECONOMY")}>
                          Premium Economy
                        </p>
                        <p className="cursor-pointer hover:bg-[#D9B748] p-2" onClick={() => handleSelectBookingClass("BUSINESS")}>
                          Business Class
                        </p>
                        <p className="cursor-pointer hover:bg-[#D9B748] p-2 rounded-bl-xl rounded-br-xl" onClick={() => handleSelectBookingClass("FIRST")}>
                          First Class
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Conditionally render based on selected trip type */}
                {selectedTripType === "ROUND_TRIP" && <Return handleSearch={handleSearch} />}
                {selectedTripType === "ONE_WAY" && <Oneway handleSearch={handleSearch} />}
                {selectedTripType === "multiCity" && <Multicity />}
              </div>
            )}

            {clickedItem === 2 && (
              <div className="flex flex-col">
                <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-between gap-2">
                  <Location text={"Where to?"} />
                  <Dates text1={"Check In"} />
                  <Dates text1={"Check Out"} />
                  <PassengersWithRoom />

                  {/* <button className="w-full xl:w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0">
                    Submit
                  </button> */}
                </div>
                <PassengerForm />

                <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mt-4 ml-4 xl:ml-10 gap-4 xl:mt-0 pb-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      className="hover:border-[#D9B748] cursor-pointer"
                      id="rememberFlight"
                      checked={addFlight}
                      onChange={handleAddFlightChange}
                    />
                    <Label htmlFor="rememberFlight">Add a Flight</Label>
                  </div>
                </div>
                {addFlight && (
                  <div className="flex flex-col xl:flex-row px-4 xl:px-10 pb-4 items-center justify-between">
                    <Location text={"Leaving From?"} />
                  </div>
                )}
              </div>
            )}

            {clickedItem === 3 && <Packages />}
            {clickedItem === 4 && <Packages />}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
