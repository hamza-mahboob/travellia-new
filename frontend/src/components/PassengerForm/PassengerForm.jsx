/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { IoMdAirplane } from "react-icons/io";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/contextAPI";

const PassengerForm = ({ data }) => {
  const navigate = useNavigate();
  const { travellers } = useContext(Context)
  const [formState, setFormState] = useState(
    Array.from({ length: travellers }, () => ({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phone: "",
      nationality: "",
      emailError: "",
    }))
  );

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormState = [...formState];

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      updatedFormState[index].emailError = emailPattern.test(value)
        ? ""
        : "Invalid email address";

      if (value === "") updatedFormState[index].emailError = "";
    }

    // Ensure the phone field only takes numbers
    if (name === "phone" && value) {
      const numericValue = value.replace(/\D/g, "");
      updatedFormState[index].phone = numericValue;
    } else {
      updatedFormState[index][name] = value;
    }

    setFormState(updatedFormState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Check for any email errors
    for (const entry of formState) {
      if (entry.emailError !== "") {
        // //console.log(entry.emailError, entry.firstName);
        return;
      }
    }

    //console.log("formstate", formState);

    Swal.fire({
      title: "Submitting your query...",
      didOpen: async () => {
        Swal.showLoading();
        let response;
        try {
          // Send fetch to backend
          response = await fetch("https://travellia-tau.vercel.app/api/confirmBooking/confirm", {
            method: "POST",
            body: JSON.stringify({ formState, data }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const json = await response.json();

          if (response.ok) {
            //console.log("submitted", json.message);
            Swal.fire({
              title: "Booking Confirmation Needed",
              text: "Thank you for booking with us! To complete your booking, kindly answer the call from our team to confirm the details. We look forward to serving you on your upcoming journey!",
              icon: "info",
              confirmButtonText: "Cool",
            }).then(() => {
              navigate('/'); // Navigate to the home page
              window.location.reload(); // Refresh the page after navigation
            });
          } else {
            //console.log("there was an error");
            Swal.fire({
              title: "Error!",
              text: "There was an error submitting your query.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        } catch (error) {
          console.error("Unexpected error:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an unexpected error!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      },
    });
  };


  return (
    <>
      {/* {console.log("item", data)} */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row border-solid border my-20 rounded-lg justify-between">
          <form className="flex flex-col gap-4 w-full xl:w-2/4 p-5">
            {console.log('FORM STATE:', formState)}
            {console.log('TRAVELLERS:', travellers)}
            {formState.map((passenger, index) => (
              <div key={index} className="w-full rounded-xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Passenger {index + 1}
                </h3>
                <div className="flex flex-col md:flex-row justify-between gap-5">
                  <div className="mb-4 w-full">
                    <Label htmlFor={`firstName-${index}`} value="First Name" />
                    <TextInput
                      id={`firstName-${index}`}
                      type="text"
                      name="firstName"
                      value={passenger.firstName}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <Label htmlFor={`lastName-${index}`} value="Last Name" />
                    <TextInput
                      id={`lastName-${index}`}
                      type="text"
                      name="lastName"
                      value={passenger.lastName}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-4 w-full">
                  <Label htmlFor={`gender-${index}`} value="Gender" />
                  <select
                    id={`gender-${index}`}
                    name="gender"
                    value={passenger.gender}
                    onChange={(e) => handleChange(index, e)}
                    className="form-select mt-1 block w-full rounded"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-5">
                  <div className="mb-4 w-full">
                    <Label htmlFor={`email-${index}`} value="Email" />
                    <TextInput
                      id={`email-${index}`}
                      type="email"
                      name="email"
                      value={passenger.email}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                    />
                    {passenger.emailError && (
                      <p className="text-red-500 text-sm">
                        {passenger.emailError}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 w-full">
                    <Label htmlFor={`phone-${index}`} value="Phone Number" />
                    <TextInput
                      id={`phone-${index}`}
                      type="tel"
                      name="phone"
                      value={passenger.phone}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                      pattern="[0-9]*"
                    />
                  </div>
                </div>

                {/* <div className="mb-4 w-full">
                  <Label htmlFor={`nationality-${index}`} value="Nationality" />
                  <TextInput
                    id={`nationality-${index}`}
                    type="text"
                    name="nationality"
                    value={passenger.nationality}
                    onChange={(e) => handleChange(index, e)}
                    sizing="md"
                    className="w-full"
                  />
                </div> */}
              </div>
            ))}

            <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-4 rounded-lg">
              <div className="flex items-start lg:w-[80%]">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  value="newsletter"
                  className="rounded mt-1"
                />
                <label htmlFor="newsletter" className="ml-2">
                  I do not wish to receive any newsletters about cheap air fares
                  or other offers.
                  <br />
                  By booking you confirm that the names on the booking match
                  those on the passports of those travelling.
                </label>
              </div>
              <button
                className="mt-4 lg:mt-0 w-full lg:w-[120px] h-[48px] text-center bg-[#D9B748] rounded-xl text-white font-semibold hover:bg-[#b4993d]"
                onClick={submitHandler}
              >
                Book Flight
              </button>
            </div>
          </form>
          <div className="w-full xl:w-2/4 flex flex-col mb-5">
            {data?.segments.map((segment, segmentIndex) => (
              <div key={segmentIndex} className="p-5 border mx-5 mt-5 h-fit rounded-lg">
                {segment.legs.map((leg, legIndex) => (
                  <div key={legIndex} className="flex flex-col md:flex-row justify-between mb-10 md:mb-4">
                    <div className="flex flex-col items-start">
                      <div className="flex bg-black rounded-full text-white px-5 h-[20px] justify-between gap-2 items-center p-3 mb-4">
                        <IoMdAirplane className="text-white text-[16px]" />
                        <p className="text-[12px]">{leg.classOfService}</p>
                      </div>
                      <div>
                        <img
                          src={leg.operatingCarrier.logoUrl}
                          className="size-20 flex justify-center rounded-2xl object-cover object-center"
                          alt={leg.operatingCarrier.displayName}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between px-5 md:gap-10">
                      <div className="flex flex-col items-center mt-8">
                        <p className="text-[1rem] md:text-[1.25rem] font-bold text-black">
                          {leg.departureDateTime.split('T')[1].slice(0, -6)}
                        </p>
                        <p className="text-[0.625rem] md:text-[0.875rem]">
                          <span className="text-semi-bold ">{leg.originStationCode}</span>
                        </p>
                        <p className="text-[0.625rem] md:text-[0.875rem]">
                          {leg.departureDateTime.split('T')[0]}
                        </p>
                      </div>
                      <div className="flex flex-col items-center mt-8">
                        <p className="text-[0.625rem] md:text-[0.875rem] mb-1 md:mb-2">
                          {/* Display flight duration here if needed */}
                        </p>
                        <div className="my-2 rotate-0 w-full items-center flex justify-center relative min-w-[70px] max-w-[70px]">
                          <div className="after:absolute w-full after:left-[50%] after:w-full after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%]  after:border-t-[0.15625rem] after:border-solid after:border-gray-400 after:right-[calc(0.625rem - 1px)] after:content-[''] after:block after:w-full"></div>
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
                      </div>
                      <div className="flex flex-col items-center mt-8">
                        <p className="text-[1rem] md:text-[1.25rem] font-bold text-black">
                          {leg.arrivalDateTime.split('T')[1].slice(0, -6)}
                        </p>
                        <p className="text-[0.625rem] md:text-[0.875rem]">
                          <span className="text-semi-bold ">{leg.destinationStationCode}</span>
                        </p>
                        <p className="text-[0.625rem] md:text-[0.875rem]">
                          {leg.arrivalDateTime.split('T')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* {segment.layovers.length > 0 && (
                  <div className="text-center text-gray-500">
                    Layover: {segment.layovers[0].durationInMinutes} minutes
                  </div>
                )} */}
              </div>
            ))}
            <div className="p-5 flex flex-row justify-between border mx-5 h-fit bg-slate-200 rounded-bl-lg rounded-br-lg">
              <span className="text-[1.25rem] font-bold">
                £{Math.floor(data?.purchaseLinks[0].totalPrice)}.00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* reserver data from db */}
      {/* <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row border-solid border my-20 rounded-lg justify-between">
          <form className="flex flex-col gap-4 w-full lg:w-2/3 p-5">
            {formState.map((passenger, index) => (
              <div key={index} className="w-full rounded-xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Passenger {index + 1}
                </h3>
                <div className="flex flex-col md:flex-row justify-between gap-5">
                  <div className="mb-4 w-full">
                    <Label htmlFor={`firstName-${index}`} value="First Name" />
                    <TextInput
                      id={`firstName-${index}`}
                      type="text"
                      name="firstName"
                      value={passenger.firstName}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <Label htmlFor={`lastName-${index}`} value="Last Name" />
                    <TextInput
                      id={`lastName-${index}`}
                      type="text"
                      name="lastName"
                      value={passenger.lastName}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-4 w-full">
                  <Label htmlFor={`gender-${index}`} value="Gender" />
                  <select
                    id={`gender-${index}`}
                    name="gender"
                    value={passenger.gender}
                    onChange={(e) => handleChange(index, e)}
                    className="form-select mt-1 block w-full rounded"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-5">
                  <div className="mb-4 w-full">
                    <Label htmlFor={`email-${index}`} value="Email" />
                    <TextInput
                      id={`email-${index}`}
                      type="email"
                      name="email"
                      value={passenger.email}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                    />
                    {passenger.emailError && (
                      <p className="text-red-500 text-sm">
                        {passenger.emailError}
                      </p>
                    )}
                  </div>
                  <div className="mb-4 w-full">
                    <Label htmlFor={`phone-${index}`} value="Phone Number" />
                    <TextInput
                      id={`phone-${index}`}
                      type="tel"
                      name="phone"
                      value={passenger.phone}
                      onChange={(e) => handleChange(index, e)}
                      sizing="md"
                      className="w-full"
                      pattern="[0-9]*"
                    />
                  </div>
                </div>

                <div className="mb-4 w-full">
                  <Label htmlFor={`nationality-${index}`} value="Nationality" />
                  <TextInput
                    id={`nationality-${index}`}
                    type="text"
                    name="nationality"
                    value={passenger.nationality}
                    onChange={(e) => handleChange(index, e)}
                    sizing="md"
                    className="w-full"
                  />
                </div>
              </div>
            ))}

            <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-4 rounded-lg">
              <div className="flex items-start lg:w-[80%]">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  value="newsletter"
                  className="rounded mt-1"
                />
                <label htmlFor="newsletter" className="ml-2">
                  I do not wish to receive any newsletters about cheap air fares
                  or other offers.
                  <br />
                  By booking you confirm that the names on the booking match
                  those on the passports of those travelling.
                </label>
              </div>
              <button
                className="mt-4 lg:mt-0 w-full lg:w-[120px] h-[48px] text-center bg-[#D9B748] rounded-xl text-white font-semibold hover:bg-[#b4993d]"
                onClick={submitHandler}
              >
                Book Flight
              </button>
            </div>
          </form>
          <div className="w-full lg:w-1/3 flex flex-col ">
            <div className="p-5 flex flex-row justify-between border mx-5 mt-5 h-fit ">
              <div className="flex flex-col items-center">
                <div className="flex bg-black rounded-full text-white w-[105px] h-[20px] justify-between gap-2 items-center p-3 mb-4">
                  <IoMdAirplane className="text-white text-[16px]" />
                  <p className="text-[12px]">
                    {"ECONOMY"}
                  </p>
                </div>
                <div className="size-12">
                  <img
                    src={""}
                    alt="Logo"
                    className="size-12 flex justify-center rounded-xl object-cover object-center"
                  ></img>
                  <h2>{data.airline_name}</h2>
                </div>
              </div>
              <div className="flex flex-col items-center mt-8">
                <p className="text-[1rem] @md:text-[1.75rem] font-bold text-black">
                  {"Depart time"}
                </p>
                <p className="text-[0.625rem] @md:text-[0.875rem]">
                  <span className="text-semi-bold ">
                    {data?.departure_airport_name}
                  </span>
                </p>
                <p className="text-[0.625rem] @md:text-[0.875rem]">
                  {"Depart date"}
                </p>
              </div>
              <div className="flex flex-col items-center mt-8">
                <p className="text-[0.625rem] @md:text-[0.875rem] mb-1 @md:mb-2">
                  {`flight duration`}
                </p>
                <div className="my-2 rotate-0 w-full items-center flex justify-center relative min-w-[70px] max-w-[70px]">
                  <div className="after:absolute w-full after:left-[50%] after:w-full after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%]  after:border-t-[0.15625rem] after:border-solid after:border-gray-400 after:right-[calc(0.625rem - 1px)] after:content-[''] after:block after:w-full"></div>
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
              </div>
              <div className="flex flex-col items-center mt-8">
                <p className="text-[1rem] @md:text-[1.75rem] font-bold text-black">
                  {"arrival time"}
                </p>
                <p className="text-[0.625rem] @md:text-[0.875rem]">
                  <span className="text-semi-bold ">
                    {data?.arrival_airport_name}
                  </span>
                </p>
                <p className="text-[0.625rem] @md:text-[0.875rem]">
                  {"arrival date"}
                </p>
              </div>
            </div>
            <div className="p-5 flex flex-row justify-between border mx-5 h-fit bg-slate-200">
              <span className="text-[1.25rem] font-bold">£{data?.price}.00</span>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default PassengerForm;
