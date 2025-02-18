/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Dates from "./Dates";
import Location from "./Location";
import PassengersWithoutRoom from "./PassengersWithoutRoom";
import { Checkbox, Label } from "flowbite-react";
import AirportDropdown from "../../airportdropdown/AirportDropdown";
import { Context } from "../../../context/contextAPI";

function Return({ handleSearch }) {
  const { departureDate } = useContext(Context);
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");

  return (
    <>
      <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-between gap-1">
        {/* Location selection component */}
        <Location text={"Leaving from?"} />

        {/* Input field to trigger the dropdown */}
        {/* <div className="relative w-full xl:max-w-[200px]">
          <input
            type="text"
            value={leavingFrom}
            onChange={(e) => setLeavingFrom(e.target.value)}
            className="w-full h-[40px] border border-[#D9B748] px-5 rounded-xl bg-white text-gray-700"
            placeholder="Type airport name..."
          />
          {leavingFrom && <AirportDropdown query={leavingFrom} />}
        </div> */}

        <Location text={"Destination"} />

        {/* <div className="relative w-full xl:max-w-[200px]">
          <input
            type="text"
            value={goingTo}
            onChange={(e) => setGoingTo(e.target.value)}
            className="w-full h-[40px] border border-[#D9B748] px-5 rounded-xl bg-white text-gray-700"
            placeholder="Type airport name..."
          />
          {goingTo && <AirportDropdown query={goingTo} />}
        </div> */}

        {/* Date selection component */}
        <Dates text1={"Departure Date"} customStyles="" minDate={new Date()} />
        <Dates
          text1={"Returning Date"}
          customStyles=""
          minDate={departureDate}
        />

        {/* Passengers selection component */}
        <PassengersWithoutRoom />

        {/* Search button */}
        <button
          className="hidden 2xl:block w-full xl:max-w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="2xl:hidden flex justify-center">
        <button
          className="w-full xl:max-w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Additional options for adding a flight or car */}
      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mt-4 ml-4 xl:ml-10 gap-4 xl:mt-0 pb-4">
        <div className="flex items-center gap-2">
          <Checkbox className="hover:border-[#D9B748] cursor-pointer" />
          <Label htmlFor="rememberHotel">Add a place to stay</Label>
        </div>
      </div>
    </>
  );
}

export default Return;
