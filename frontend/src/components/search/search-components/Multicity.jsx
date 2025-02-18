import React, { useState } from "react";
import Dates from "./Dates";
import Location from "./Location";
import PassengersWithoutRoom from "./PassengersWithoutRoom";

function Multicity() {
  const [flights, setFlights] = useState([{ id: 1 }, { id: 2 }]); // Start with 2 flights

  const addFlight = () => {
    if (flights.length < 5) {
      setFlights([...flights, { id: flights.length + 1 }]);
    }
  };

  return (
    <>
      <div className="flex flex-col px-4 xl:px-10 ">
        <PassengersWithoutRoom />
        {flights.map((flight) => (
          <div key={flight.id} className="">
            <h1 className="font-semibold text-[#D9B748] text-[16px] mt-5">
              Flight {flight.id}
            </h1>
            <div className="flex flex-col xl:flex-row py-2 items-center justify-between gap-5">
              <Location
                text={"Leaving from?"}
                customStyles="xl:flex-1 xl:w-[12rem]"
              />
              <Location
                text={"Going to?"}
                customStyles="xl:flex-1 xl:w-[12rem]"
              />
              <Dates
                text1={"Departure Date"}
                customStyles="xl:flex-1 xl:w-[12rem]"
              />
            </div>
          </div>
        ))}
        <div className="flex flex-col lg:flex-row justify-between items-center my-2">
          <button
            onClick={addFlight}
            className={`w-full xl:w-[200px] h-[30px] rounded-lg border border-solid ${
              flights.length >= 4
                ? " cursor-not-allowed text-[#D9B748]" // Dim color and blocked cursor
                : "border-[#D9B748] hover:bg-[#D9B748] hover:text-white text-[#D9B748]"
            } font-semibold mt-4 xl:mt-0`}
            disabled={flights.length >= 4} // Disable button when 4 flights are added
          >
            + Add another Flight
          </button>
          <button className="w-full xl:w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Multicity;
