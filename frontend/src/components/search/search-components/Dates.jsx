/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { format, addDays, isAfter, isBefore, isEqual } from "date-fns";
import { FaCalendarDay } from "react-icons/fa";
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import { Context } from "../../../context/contextAPI";

const Dates = ({ text1, text2, customStyles, minDate }) => {
  const today = new Date();
  const endDate = addDays(today, 3);
  const formattedStartDate = format(today, "dd MMM, yy");
  const formattedEndDate = format(endDate, "dd MMM, yy");

  const { setDepartureDate, setReturnDate, departureDate, returnDate } = useContext(Context);
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(endDate);

  useEffect(() => {
    if (isAfter(departureDate, checkOutDate)) {
      setCheckOutDate(departureDate); // Update the checkOutDate
    }
  }, [departureDate]);

  useEffect(() => {
    handleCheckInDateChange();
    // if (text1.includes("Returning Date")) {
    //   setCheckInDate(minDate)
    // }
  }, []);

  const handleCheckInDateChange = (date) => {
    if (!date) {
      date = new Date();
    }
    // //console.log('date',date)
    setCheckInDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));

    if (text1.includes("Returning Date") && (isAfter(date, departureDate) || isEqual(date, departureDate))) {
      setReturnDate(format(date, "yyyy-MM-dd"));
      setCheckOutDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
    } else if (isAfter(date, departureDate) && isBefore(date, returnDate)) {
      setDepartureDate(format(date, "yyyy-MM-dd"));
    }
    else if(isBefore(date, departureDate)){
      setDepartureDate(format(date, "yyyy-MM-dd"));
      setCheckOutDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
    }
    else if (isAfter(date, departureDate)) {
      setDepartureDate(format(date, "yyyy-MM-dd"));
      setReturnDate(format(date, "yyyy-MM-dd"));
      setCheckOutDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
    }
    else {
      setDepartureDate(format(date, "yyyy-MM-dd"));
      setReturnDate(format(date, "yyyy-MM-dd"));
      setCheckOutDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()))
    }
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div className={`flex flex-row w-full xl:w-[11rem] 2xl:w-[15rem] border border-solid border-gray-600 rounded-xl gap-5 h-[50px] items-center px-3 2xl:px-5 cursor-pointer mb-4 xl:mb-0 ${customStyles}`}>
      {/* {//console.log('compare:', isAfter(departureDate, checkInDate))} */}
      <FaCalendarDay className="xl:size-3 2xl:size-5 shrink-0" />
      <div className="flex flex-col">
        <p className="text-[14px] text-gray-500">{text1}</p>
        <DatePicker
          selected={text1.includes("Returning Date") ? checkOutDate : checkInDate}
          onChange={handleCheckInDateChange}
          minDate={text1.includes("Returning Date") ? departureDate : (isAfter(departureDate, new Date()) ? new Date() : departureDate)}  // Set the min date correctly based on condition
          value={isAfter(departureDate, checkInDate) ? format(departureDate, 'd MMM, yyyy') : format(checkInDate, 'd MMM, yyyy')}
          dateFormat="dd MMM, yy"
          className="text-[16px] text-gray-700 border-none bg-transparent h-[25px] pl-0 focus-visible:outline-none focus-visible:ring-0 hover:cursor-pointer"
          popperClassName="date-picker-popper"
          shouldCloseOnSelect={true}
          showPopperArrow={false}
          calendarClassName="date-picker-calendar"
        />
      </div>
    </div>
  );
};

export default Dates;
