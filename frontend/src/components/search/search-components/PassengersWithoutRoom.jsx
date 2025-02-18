import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Context } from "../../../context/contextAPI";

const PassengersWithoutRoom = () => {
  const { travellers, setTravellers } = useContext(Context)
  const [showPassengers, setShowPassengers] = useState(false);
  const wrapperRef = useRef(null);
  const [rooms, setRooms] = useState([
    {
      adults: 1,
      children: 0,
      infants: 0,
    },
  ]);

  // useEffect(() => {
  //   setTravellers(1)
  // }, [])

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
      // const totalAdults = newRooms.reduce((total, room) => total + room.adults, 0);
      // setTravellers(totalAdults)
      const totalTravellers = newRooms[0].adults + newRooms[0].children;
      setRooms(newRooms);
      setTravellers(totalTravellers)
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
    // const totalAdults = newRooms.reduce((total, room) => total + room.adults, 0);
    // setTravellers(totalAdults)
    const totalTravellers = newRooms[0].adults + newRooms[0].children;
    setRooms(newRooms);
    setTravellers(totalTravellers)
  };

  useEffect(() => {
    // Close dropdown if clicking outside
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowPassengers(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <>
      <div className="relative mt-0 w-full xl:w-auto" ref={wrapperRef}>
        <div
          className="flex flex-row w-full xl:w-[12rem] 2xl:w-[20rem] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-4 cursor-pointer mb-4 xl:mb-0"
          onClick={togglePassengers}
        >
          <FaUser className="h-3 w-3 2xl:w-5 2xl:h-5 mr-4" />
          <div className="flex flex-col">
            <p className="text-[14px] text-gray-500">Travellers</p>
            <p className="text-[12px] sm:text-[16px] text-gray-700">
              {rooms.reduce((acc, room) => acc + room.adults, 0)} Adult
              {rooms.reduce((acc, room) => acc + room.adults, 0) !== 1 && "s"}

              <span className="hidden 2xl:inline">, {rooms.reduce((acc, room) => acc + room.children, 0)} Child
                {rooms.reduce((acc, room) => acc + room.children, 0) !== 1 && "ren"}
              </span>

              <span className="hidden 2xl:inline">, {rooms.reduce((acc, room) => acc + room.infants, 0)} Infant
                {rooms.reduce((acc, room) => acc + room.infants, 0) !== 1 && "s"}
              </span>
            </p>
          </div>
        </div>
        {showPassengers && (
          <div className="xl:absolute mt-2 w-full xl:w-[350px] bg-white shadow-xl border rounded-lg z-50 top-14">
            <div className="p-4 overflow-y-auto max-h-[400px]">
              {rooms.map((room, index) => (
                <div key={index} className="mb-4">
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PassengersWithoutRoom;
