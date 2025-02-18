import React, { useState } from "react";

const Trips = () => {
  const tripTypes = [
    { id: 1, name: "Round Trip" },
    { id: 2, name: "One Way" },
    { id: 3, name: "Multi City" }
    // Add more trip types as needed
  ];

  const [selectedTripType, setSelectedTripType] = useState(null);
  const [showTripTypes, setShowTripTypes] = useState(false);

  const toggleTripTypes = () => {
    setShowTripTypes(!showTripTypes);
  };

  const handleTripTypeSelect = (tripType) => {
    setSelectedTripType(tripType);
    setShowTripTypes(false); // Close the dropdown after selection (optional)
  };

  return (
    <div className="relative">
      <div
        className="w-full md:w-[700px] lg:w-[900px] xl:w-[200px] h-[90px] flex items-center justify-between px-4 sm:px-auto bg-white cursor-pointer"
        onClick={toggleTripTypes}
      >
        <div className="w-[70%] sm:w-full flex flex-col justify-center items-start px-2 sm:px-4 py-auto">
          <p className="font-bold">Trip Type</p>
          <p>
            {selectedTripType ? selectedTripType.name : "Select trip type"}
          </p>
        </div>
        <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
      </div>
      {showTripTypes && (
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg z-20 bottom-24">
          {tripTypes.map((tripType) => (
            <div
              key={tripType.id}
              className="py-3 px-4 text-sm cursor-pointer hover:bg-gray-100"
              onClick={() => handleTripTypeSelect(tripType)}
            >
              <p className="font-bold">{tripType.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trips;
