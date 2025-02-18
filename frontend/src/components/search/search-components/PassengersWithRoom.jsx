import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Context } from "../../../context/contextAPI";

const PassengersWithRoom = () => {
  const [showPassengers, setShowPassengers] = useState(false);
  const { setTravellers } = useContext(Context)
  const [rooms, setRooms] = useState([
    {
      adults: 1,
      children: 0,
      infants: 0,
    },
  ]);

  const togglePassengers = () => {
    setShowPassengers(!showPassengers);
  };

  const decreaseCount = (roomIndex, type) => {
    if (rooms[roomIndex][type] > 0) {
      const newRooms = rooms.map((room, index) => {
        if (index === roomIndex) {
          return {
            ...room,
            [type]: room[type] - 1,
          };
        }
        return room;
      });
      // Calculate the total number of adults in all rooms
      const totalAdults = newRooms.reduce((total, room) => total + room.adults, 0);
      setRooms(newRooms);
      setTravellers(totalAdults)
    }
  };

  const increaseCount = (roomIndex, type) => {
    const newRooms = rooms.map((room, index) => {
      if (index === roomIndex) {
        return {
          ...room,
          [type]: room[type] + 1,
        };
      }
      return room;
    });
    // Calculate the total number of adults in all rooms
    const totalAdults = newRooms.reduce((total, room) => total + room.adults, 0);
    setRooms(newRooms);
    setTravellers(totalAdults)
  };

  const addRoom = () => {
    setRooms([
      ...rooms,
      {
        adults: 1,
        children: 0,
        infants: 0,
      },
    ]);
  };

  const closeDropdown = () => {
    setShowPassengers(false);
  };

  return (
    <>
      <div className="relative mt-0 w-full xl:w-auto">
        <div
          className="flex flex-row w-full xl:w-[365px] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-5 cursor-pointer mb-4 xl:mb-0 z-30"
          onClick={togglePassengers}
        >
          <FaUser className="w-5 h-5 mr-5" />
          <div className="flex flex-col">
            <p className="text-[14px] text-gray-500">Travellers</p>
            <p className="text-[12px] sm:text-[16px] text-gray-700">
              {rooms.reduce((acc, room) => acc + room.adults, 0)} Adult
              {rooms.reduce((acc, room) => acc + room.adults, 0) !== 1 &&
                "s"}, {rooms.reduce((acc, room) => acc + room.children, 0)}{" "}
              Child
              {rooms.reduce((acc, room) => acc + room.children, 0) !== 1 &&
                "ren"}
              , {rooms.reduce((acc, room) => acc + room.infants, 0)} Infant
              {rooms.reduce((acc, room) => acc + room.infants, 0) !== 1 &&
                "s"}{" "}
              | {rooms.length} Room
              {rooms.length !== 1 && "s"}
            </p>
          </div>
        </div>
        {showPassengers && (
          <div className="xl:absolute mt-2 w-full xl:w-[350px] bg-white shadow-lg rounded-lg z-50 top-14">
            <div className="p-4 overflow-y-auto max-h-[300px]">
              {rooms.map((room, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold mb-4 text-[#D9B748]">
                    Room {index + 1}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold">
                      Adults{" "}
                      <span className="text-gray-500 font-normal">
                        ( More than 11 yrs )
                      </span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => decreaseCount(index, "adults")}
                      >
                        -
                      </button>
                      <span>{room.adults}</span>
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => increaseCount(index, "adults")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold">
                      Children{" "}
                      <span className="text-gray-500 font-normal">
                        ( 02 yrs - 11 yrs )
                      </span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => decreaseCount(index, "children")}
                      >
                        -
                      </button>
                      <span>{room.children}</span>
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => increaseCount(index, "children")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold">
                      Infants{" "}
                      <span className="text-gray-500 font-normal">
                        ( Less than 02 yrs )
                      </span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => decreaseCount(index, "infants")}
                      >
                        -
                      </button>
                      <span>{room.infants}</span>
                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => increaseCount(index, "infants")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-end mb-4">
                <div className="w-[100px]">
                  <button
                    className="w-full px-4 py-2 border-[#D9B748] border border-solid text-[#D9B748] hover:bg-[#D9B748] hover:text-white text-[12px] font-semibold rounded"
                    onClick={addRoom}
                  >
                    Add Room
                  </button>
                </div>
              </div>
              <button
                className="w-full px-4 py-2 bg-[#D9B748] font-semibold text-white rounded hover:bg-[#af943c] focus:outline-none"
                onClick={closeDropdown}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PassengersWithRoom;
