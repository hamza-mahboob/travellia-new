import React from "react";
import Dates from "./Dates";
import Location from "./Location";
import PassengersWithoutRoom from "./PassengersWithoutRoom";
import { Checkbox, Label } from "flowbite-react";

function Return({ handleSearch }) {
  return (
    <>
      <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-between gap-1">
        {/* Location selection component */}
        <Location text={"Leaving from?"} />
        <Location text={"Going to?"} />

        {/* Date selection component */}
        <Dates text1={"Departure Date"} />

        {/* Passengers selection component */}
        <PassengersWithoutRoom />

        {/* Search button */}
        <button className="w-full xl:w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0" onClick={handleSearch}>
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
