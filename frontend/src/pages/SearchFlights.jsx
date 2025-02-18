/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef } from "react";
import { IoMdAirplane } from "react-icons/io";
import { FaShareSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Context } from "../context/contextAPI";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Landing from "../components/landing/Landing";

function SearchFlights() {
  const targetRef = useRef(null);
  const navigate = useNavigate()
  const { flightsJson, departureTime, arrivalTime, departureDate } = useContext(Context)
  const json = flightsJson
  // || {
  //   "status": true,
  //   "data": {
  //     "flights": [
  //       {
  //         "segments": [
  //           {
  //             "legs": [
  //               {
  //                 "classOfService": "Economy",
  //                 "operatingCarrier": {
  //                   "displayName": "British Airways",
  //                   "logoUrl": "https://example.com/logo-ba.png"
  //                 },
  //                 "operatingCarrierCode": "BA",
  //                 "flightNumber": "154",
  //                 "departureDateTime": "2024-11-01T14:30:00",
  //                 "originStationCode": "LHR",
  //                 "arrivalDateTime": "2024-11-01T18:00:00",
  //                 "destinationStationCode": "JFK"
  //               }
  //             ]
  //           }
  //         ],
  //         "purchaseLinks": [
  //           {
  //             "totalPrice": 450
  //           }
  //         ]
  //       },
  //       {
  //         "segments": [
  //           {
  //             "legs": [
  //               {
  //                 "classOfService": "Business",
  //                 "operatingCarrier": {
  //                   "displayName": "Emirates",
  //                   "logoUrl": "https://example.com/logo-emirates.png"
  //                 },
  //                 "operatingCarrierCode": "EK",
  //                 "flightNumber": "202",
  //                 "departureDateTime": "2024-11-02T09:00:00",
  //                 "originStationCode": "DXB",
  //                 "arrivalDateTime": "2024-11-02T17:30:00",
  //                 "destinationStationCode": "LAX"
  //               }
  //             ]
  //           }
  //         ],
  //         "purchaseLinks": [
  //           {
  //             "totalPrice": 1200
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // }


  useEffect(() => {
    // if (targetRef.current) {
    //   targetRef.current.scrollIntoView({
    //     behavior: 'smooth', // Optional: for smooth scrolling
    //     block: 'start' // Aligns the target to the top of the viewport
    //   });
    // }
    window.scrollBy({
      top: 600, // Scroll down 500 pixels
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  }, [flightsJson]);

  //---------------------------sort based on ticket price before mapping
  // let sortedOffers = null;
  // if (json != null) {
  //   sortedOffers = [...json.data.flightOffers].sort((a, b) => {
  //     return a.priceBreakdown.total.units - b.priceBreakdown.total.units;
  //   });
  // }

  return (
    <>
      {/* <Header /> */}
      <Landing />
      <div ref={targetRef} className="pt-2 bg-black-50">
        <h1 className="text-[20px] text-[#D9B748] font-semibold text-center mt-10">
          FLIGHTS
        </h1>
        <h1 className="font-bold w-full md:w-[600px] text-[45px] mb-20 text-center mx-auto">
          Your Next Adventure Is Just a Button Click Away!
        </h1>
        {!json?.status == false ? Array.isArray(json.data.flights) && json?.data?.flights?.map((item, index) => (
          <div className="container mx-auto px-5 md:px-20 my-[50px]" key={index}>
            <div className="flex flex-col md:mx-10 w-full shadow-[#D9B748] shadow-sm rounded-xl ">
              <div className="flex flex-col md:flex-row justify-center md:justify-between border px-10 py-5 rounded-tr-xl rounded-tl-xl w-full gap-5">
                <div className="flex flex-col gap-5 items-center md:items-start">
                  <div className="flex bg-black rounded-full text-white w-[105px] h-[30px] justify-between gap-2 items-center p-3 ">
                    <IoMdAirplane className="text-white text-[16px]" />
                    <p className="text-[12px]">{item.segments[0].legs[0].classOfService}</p>
                  </div>
                  <div className="flex flex-row justify-center gap-3 items-center mb-5 md:mb-0">
                    <div className="size-12">
                      <img
                        className="flex justify-center rounded-xl object-cover object-center"
                        src={item.segments[0].legs[0].operatingCarrier.logoUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-semibold md:w-40">
                        {item.segments[0].legs[0].operatingCarrier.displayName}
                      </p>
                      <p className="text-[14px] font-semibold opacity-70">{item.segments[0].legs[0].operatingCarrierCode + " " + item.segments[0].legs[0].flightNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[1rem] md:text-[1.75rem] font-bold text-black">
                    {item.segments[0].legs[0].departureDateTime.split('T')[1].slice(0, -9)}
                  </p>
                  <p className="text-[0.625rem] md:text-[0.875rem]">
                    {item.segments[0].legs[0].originStationCode}
                  </p>
                  <p className="text-[0.625rem] md:text-[0.875rem]">
                    {item.segments[0].legs[0].departureDateTime.split('T')[0]}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[0.625rem] md:text-[0.875rem] mb-1 md:mb-2">
                    {/* {`${Math.floor(item.segments[0].totalTime / 3600)}h ${Math.floor((item.segments[0].totalTime % 3600) / 60)}m`} */}
                  </p>
                  <div className="my-2 rotate-0 w-full items-center flex justify-center relative min-w-[70px] max-w-[70px]">
                    <div className="after:absolute w-full after:left-[50%] after:w-full after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%]  after:border-t-[0.15625rem] after:border-solid after:border-gray-400 after:right-[calc(0.625rem - 1px)] after:content-[''] after:block after:w-full"></div>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex gap-1">
                      <svg
                        viewBox="0 0 64 64"
                        pointerEvents="all"
                        aria-hidden="true"
                        height="10px"
                        width="10px"
                        fill="rgb(102, 102, 102)"
                        role="presentation"
                      >
                        <path
                          d="M32 56.007A24 24 0 1156 32a24.029 24.029 0 01-24 24"
                          fill="#fff"
                        ></path>
                        <path d="M32 16a16 16 0 11-16 16 16.017 16.017 0 0116-16m0-16a32 32 0 1032 32A32.006 32.006 0 0032 0"></path>
                      </svg>
                    </div>
                    <div className="absolute top-[-5px] right-[-5px]">
                      <svg
                        viewBox="0 0 64 64"
                        pointerEvents="all"
                        aria-hidden="true"
                        role="presentation"
                        fill="rgb(102, 102, 102)"
                        height="10px"
                        width="10px"
                      >
                        <path d="M59.709 32L4.291 0v64z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[0.625rem] md:text-[0.875rem] mt-1 md:mt-2">
                    {/* {item.tripType} */}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[1rem] md:text-[1.75rem] font-bold text-black">
                    {item.segments[0].legs.at(-1).arrivalDateTime.split('T')[1].slice(0, -9)}
                  </p>
                  <p className="text-[0.625rem] md:text-[0.875rem]">
                    {item.segments[0].legs.at(-1).destinationStationCode}
                  </p>
                  <p className="text-[0.625rem] md:text-[0.875rem]">
                    {item.segments[0].legs.at(-1).arrivalDateTime.split('T')[0]}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between border items-center px-1 md:px-10 py-2 rounded-bl-xl rounded-br-xl w-full gap-4">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <p className="text-[1.25rem] font-bold">£{Math.floor(item.purchaseLinks[0].totalPrice)}.00</p>
                    <p className="text-[0.75rem] text-center hidden md:inline-block">
                      Total
                    </p>
                  </div>
                  {/* <div className="flex flex-row justify-center items-center gap-1">
                  <FaShareSquare className="" />
                  <p className="text-[16px] block hover:underline hover:cursor-pointer">Share</p>
                </div> */}
                </div>
                <div className="w-full md:w-auto">
                  <div className="flex items-center gap-[7px] justify-end">
                    <a
                      href="https://wa.me/442035040786?text=I want to inquire about my flight from Lahore to Islamabad on Sunday 11 Aug"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                        clipRule="evenodd"
                      >
                        <path
                          fill="#fff"
                          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                        ></path>
                        <path
                          fill="#cfd8dc"
                          d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                        ></path>
                        <path
                          fill="#40c351"
                          d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                        ></path>
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    {/* <button className="w-[180px] h-[56px] text-center text-[#D9B748] rounded-xl bg-white font-semibold border border-[#D9B748] hover:bg-[#D9B748] hover:text-white">
                    Better Deal
                  </button> */}
                    <button className="w-[150px] h-[56px] text-center bg-[#D9B748] rounded-xl text-white font-semibold hover:bg-[#b4993d]" onClick={() => { navigate('/reserve-flights', { state: { data: item } }) }}>
                      Reserve
                    </button>
                  </div>
                  <h4 className="mt-2 text-md font-normal opacity-50 italic text-end">Refundable / Changeable</h4>

                </div>
              </div>
            </div>
          </div>
        )) : <h1 className="text-5xl font-semibold text-center my-5 py-5 mb-20 italic">Error fetching flights... <br /><br />
          <span>{json?.message}</span></h1>}

        {/* flights from db */}
        {/* {Array.isArray(json) ? json?.map((item, index) => (
        <div className="container mx-auto px-20 my-[50px]" key={index}>
          <div className="flex flex-col mx-10">
            <div className="flex flex-row justify-between border px-10 py-5">
              <div className="flex flex-col gap-2">
                <div className="flex bg-black rounded-full text-white w-[105px] h-[30px] justify-between gap-2 items-center p-3 ">
                  <IoMdAirplane className="text-white text-[16px]" />
                  <p className="text-[12px]">{"Economy"}</p>
                </div>
                <div className="flex flex-row justify-between gap-3 items-center">
                  <div className="size-12">
                    <img
                      className="flex justify-center rounded-xl object-cover object-center"
                      src={""}
                      alt="Logo"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[14px] font-semibold w-40">
                      {item.airline_name}
                    </p>
                    <p className="text-[14px] font-semibold opacity-70">{item.airlineid + " " + "flight number"}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[1rem] md:text-[1.75rem] font-bold text-black">
                  {departureDate}
                </p>
                <p className="text-[0.625rem] md:text-[0.875rem]">
                  {item.departure_airport_name}
                </p>
                <p className="text-[0.625rem] md:text-[0.875rem]">
                  {"departure time"}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[0.625rem] md:text-[0.875rem] mb-1 md:mb-2">
                  {`total duration`}
                </p>
                <div className="my-2 rotate-0 w-full items-center flex justify-center relative min-w-[70px] max-w-[70px]">
                  <div className="after:absolute w-full after:left-[50%] after:w-full after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%]  after:border-t-[0.15625rem] after:border-solid after:border-gray-400 after:right-[calc(0.625rem - 1px)] after:content-[''] after:block after:w-full"></div>
                  <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex gap-1">
                    <svg
                      viewBox="0 0 64 64"
                      pointerEvents="all"
                      aria-hidden="true"
                      height="10px"
                      width="10px"
                      fill="rgb(102, 102, 102)"
                      role="presentation"
                    >
                      <path
                        d="M32 56.007A24 24 0 1156 32a24.029 24.029 0 01-24 24"
                        fill="#fff"
                      ></path>
                      <path d="M32 16a16 16 0 11-16 16 16.017 16.017 0 0116-16m0-16a32 32 0 1032 32A32.006 32.006 0 0032 0"></path>
                    </svg>
                  </div>
                  <div className="absolute top-[-5px] right-[-5px]">
                    <svg
                      viewBox="0 0 64 64"
                      pointerEvents="all"
                      aria-hidden="true"
                      role="presentation"
                      fill="rgb(102, 102, 102)"
                      height="10px"
                      width="10px"
                    >
                      <path d="M59.709 32L4.291 0v64z"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[0.625rem] md:text-[0.875rem] mt-1 md:mt-2">
                  {/* {item.tripType} }
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[1rem] md:text-[1.75rem] font-bold text-black">
                  {"arrival date"}
                </p>
                <p className="text-[0.625rem] md:text-[0.875rem]">
                  {item.arrival_airport_name}
                </p>
                <p className="text-[0.625rem] md:text-[0.875rem]">
                  {"arrival time"}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between border px-10 py-2">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <p className="text-[1.25rem] font-bold">£{item.price}</p>
                  <p className="text-[0.75rem] text-center hidden md:inline-block">
                    Total
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                  <FaShareSquare className="" />
                  <p className="text-[16px] block hover:underline hover:cursor-pointer">Share</p>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex items-center gap-[7px]">
                  <a
                    href="https://wa.me/442079935550?text=I want to inquire about my flight from Lahore to Islamabad on Sunday 11 Aug"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="48px"
                      height="48px"
                      clipRule="evenodd"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <button className="w-[180px] h-[56px] text-center text-[#D9B748] rounded-xl bg-white font-semibold border border-[#D9B748] hover:bg-[#D9B748] hover:text-white">
                    Better Deal
                  </button>
                  <button className="w-[180px] h-[56px] text-center bg-[#D9B748] rounded-xl text-white font-semibold hover:bg-[#b4993d]" onClick={() => { navigate('/reserve-flights', { state: { data: item } }) }}>
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) : <div className="w-full text-center my-5 p-5 text-3xl font-normal"> {json?.error}</div>} */}
      </div>
    </>
  );
}

export default SearchFlights;
