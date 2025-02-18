import React, { useState } from "react";
import Dates from "./Dates";
import Location from "./Location";
import PassengersWithRoom from "./PassengersWithRoom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons
import PassengerForm from "./PassengerFormSearchBar";

function Packages() {
  // const [stayText, setStayText] = useState("Stay");
  // const [flightText, setFlightText] = useState("Flight");
  const [showBookingClassDropdown, setShowBookingClassDropdown] = useState(false);
  const [selectedBookingClass, setSelectedBookingClass] = useState("Economy");

  // const handleStayClick = () => {
  //   setStayText((prev) => (prev === "Stay" ? "Stay Added" : "Stay"));
  // };

  // const handleFlightClick = () => {
  //   setFlightText((prev) => (prev === "Flight" ? "Flight Added" : "Flight"));
  // };

  const handleBookingClassClick = () => {
    setShowBookingClassDropdown(!showBookingClassDropdown);
  };

  const handleSelectBookingClass = (bookingClass) => {
    setSelectedBookingClass(bookingClass);
    setShowBookingClassDropdown(false);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-2 md:space-x-4 mt-4 px-4 xl:px-6">
          {/* <button
            className={`w-full xl:w-[120px] h-[30px] rounded-lg border border-solid text-[14px] ${stayText.includes("Added") ? 'bg-[#D9B748] text-white' : 'border-[#D9B748] text-[#D9B748]'} hover:bg-[#D9B748] hover:text-white font-semibold`}
            onClick={handleStayClick}
          >
            {stayText}
          </button>
          <button
            className={`w-full xl:w-[120px] h-[30px] rounded-lg border border-solid text-[14px] ${flightText.includes("Added") ? 'bg-[#D9B748] text-white' : 'border-[#D9B748] text-[#D9B748]'} hover:bg-[#D9B748] hover:text-white font-semibold`}
            onClick={handleFlightClick}
          >
            {flightText}
          </button> */}
          <div
            className="flex flex-row items-center justify-between w-[200px] h-[30px] border border-[#D9B748] px-5 rounded-xl cursor-pointer relative bg-[#e7ca68]"
            onClick={handleBookingClassClick}
          >
            <p>{selectedBookingClass}</p>
            {showBookingClassDropdown ? <FaChevronUp /> : <FaChevronDown />}
            {showBookingClassDropdown && (
              <div className="absolute top-full mt-1 left-0 w-full bg-white border border-[#D9B748] rounded-xl z-40">
                {["Economy", "Premium Economy", "Business Class", "First Class"].map((className, index) => (
                  <p
                    key={index}
                    className={`cursor-pointer hover:bg-[#D9B748] p-2 ${index === 0 ? "rounded-tl-xl rounded-tr-xl" : (index === 3 ? "rounded-bl-xl rounded-br-xl" : "")}`}
                    onClick={() => handleSelectBookingClass(className)}
                  >
                    {className}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row px-4 xl:-px-10 pl-5 py-4 xl:py-6 items-center justify-between gap-1">
          <Location text={"Leaving From?"} />
          <Location text={"Going to?"} />

          <Dates text1={"Departure Date"} />
          <Dates text1={"Returning Date"} />
          <PassengersWithRoom />


          {/* <button className="w-full xl:min-w-[80px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0">
            Submit
          </button> */}
        </div>
        <PassengerForm />
      </div>
    </>
  );
}

export default Packages;
