/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Context } from "../../../context/contextAPI";
import axios from "axios";

const Location = ({ text, customStyles }) => {
  const { setLeavingFrom, setGoingTo, leavingFrom, goingTo, Dest, setDest } =
    useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState("");
  const [airports, setAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (text.includes("Destination") && Dest) {
      setValue(Dest);
      setDest("");
    }
  }, [Dest, setDest, text]);

  //useEffect for fetching airports
  // useEffect(() => {
  //   // Create a timer variable to store the timeout ID
  //   let timer;

  //   const fetchAirports = async () => {
  //     if (value.length > 1 && !selectedAirport) {
  //       try {
  //         const response = await fetch("https://travellia-tau.vercel.app/api/flights/airport",
  //           // const response = await fetch("http://localhost:3000/api/flights/airport",
  //           {
  //             method: "POST",
  //             body: JSON.stringify({ value }),
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const json = await response.json();
  //         console.log("airport api returned results");
  //         console.log(json);
  //         if (response.ok) {
  //           setAirports(json);
  //           // console.log('my airports', airports);
  //           setShowDropdown(false);
  //           setShowDropdown(true);
  //           clearTimeout(timer);
  //         } else {
  //           //console.log("There was an error");
  //           clearTimeout(timer);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching airports:", error);
  //         clearTimeout(timer);
  //       }
  //     } else {
  //       setAirports([]); // Clear results if the query is too short or an airport is selected
  //       clearTimeout(timer);
  //     }
  //   };

  //   // Clear the previous timer if value or selectedAirport changes
  //   if (timer) {
  //     clearTimeout(timer);
  //   }

  //   // Set a new timer to fetch airports after 0.75 seconds
  //   timer = setTimeout(() => {
  //     fetchAirports();
  //   }, 10);

  //   // Cleanup function to clear the timer on component unmount or before the next effect
  //   return () => clearTimeout(timer);
  // }, [value, selectedAirport]);

  // useEffect(() => {
  //   const fetchAirports = async () => {
  //     if (value.length > 2 && !selectedAirport) {
  //       // const response = await fetch("https://travellia-tau.vercel.app/api/flights/airport",
  //       const response = await fetch("http://localhost:3000/api/flights/airport",
  //         {
  //           method: "POST",
  //           body: JSON.stringify({ value }),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         })
  //       const json = await response.json()
  //       // //console.log('airports', json);
  //       //console.log('airports api called');

  //       if (response.ok) {
  //         setAirports(json)
  //       }
  //       if (!response.ok)
  //         //console.log('there was an error');

  //     }
  //     else {
  //       setAirports([]); // Clear results if the query is too short or an airport is selected
  //     }
  //   };

  //   fetchAirports();
  //   // //console.log('airports', airports.data);
  // }, [value, selectedAirport]);

  useEffect(() => {
    const controller = new AbortController();
    let timer;
  
    const fetchAirports = async () => {
      if (value.length > 1 && !selectedAirport) {
        try {
          const response = await fetch(
            "https://travellia-tau.vercel.app/api/flights/airport",
            {
              method: "POST",
              body: JSON.stringify({ value }),
              headers: {
                "Content-Type": "application/json",
              },
              signal: controller.signal
            }
          );
          
          const json = await response.json();
          
          if (response.ok) {
            setAirports(json);
            setShowDropdown(true);
          } else {
            setAirports([]);
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            return;
          }
          console.error("Error fetching airports:", error);
          setAirports([]);
        }
      } else {
        setAirports([]);
        setShowDropdown(false);
      }
    };
  
    // Clear the previous timer if value or selectedAirport changes
    if (timer) {
      clearTimeout(timer);
    }
  
    // Set a new timer to fetch airports after 10ms
    timer = setTimeout(() => {
      fetchAirports();
    }, 10);
  
    // Cleanup function to clear both timer and abort controller
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [value, selectedAirport]);

  useEffect(() => {
    // Close dropdown if clicking outside
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleInputChange = (e) => {
    if (e.target.value === 0) setAirports([]);
    setValue(e.target.value);
    //console.log(value);
    setShowDropdown(true);

    if (selectedAirport) {
      setSelectedAirport(null); // Reset selected airport to enable dropdown to reappear
    }
  };

  const handleInputChangeForDB = (e) => {
    setValue(e.target.value);
    if (text.includes("Leaving")) {
      setLeavingFrom(e.target.value);
    } else {
      setGoingTo(e.target.value);
    }
    // //console.log('leaving from is:', leavingFrom, 'Going to is:', goingTo)
  };

  const handleAirportSelect = (airport) => {
    setSelectedAirport(airport);
    setValue(airport.name);
    setShowDropdown(false);
    if (text.includes("Leaving")) {
      setLeavingFrom(airport.IATA);
    } else {
      setGoingTo(airport.IATA);
    }
    setAirports([]);
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative flex flex-row w-full xl:w-[12rem] 2xl:w-[15rem] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-3 cursor-pointer mb-4 xl:mb-0 ${customStyles}`}
    >
      <MdLocationOn className="w-7 h-7 2xl:mr-1" />
      <input
        type="text"
        placeholder={text}
        id={text}
        className="border-none rounded-lg w-full focus-visible:outline-none focus-visible:ring-0"
        value={value}
        onChange={handleInputChange}
        // onChange={handleInputChangeForDB}
        onClick={() => setShowDropdown(true)}
        autoComplete="off"
      />
      {showDropdown && (
        <div
          className={`absolute top-[105%] left-0 w-full max-w-[15rem] max-h-60 xl:max-h-96 bg-slate-50 rounded-md z-50 overflow-y-scroll no-scrollbar`}
        >
          {/* {console.log(airports[0])} */}
          {airports && Array.isArray(airports) && airports.length > 0
            ? airports
              .map((airport) => (
                airport.name ? (<div
                  key={airport.IATA + airport.name}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleAirportSelect(airport)}
                >
                  {airport.name} ({airport.IATA})
                </div>) : null
              ))
            : null}
        </div>
      )}

    </div>
  );
};

export default Location;
