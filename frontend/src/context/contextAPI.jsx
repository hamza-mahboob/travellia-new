import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [flightsJson, setFlightsJson] = useState(null);
  const [tripType, setTripType] = useState("ROUND_TRIP");
  const [bg, setBg] = useState(1);
  const [Dest, setDest] = useState('');
  const [selectedBookingClass, setSelectedBookingClass] = useState("ECONOMY");


  return (
    <Context.Provider
      value={{
        leavingFrom,
        setLeavingFrom,
        goingTo,
        setGoingTo,
        departureDate,
        setDepartureDate,
        returnDate,
        setReturnDate,
        travellers,
        setTravellers,
        flightsJson,
        setFlightsJson,
        tripType,
        setTripType,
        bg,
        setBg,
        Dest,
        setDest,
        selectedBookingClass,
        setSelectedBookingClass
      }}
    >
      {children}
      {console.log('context data:', '\nleaving from: ', leavingFrom, '\ngoing to: ', goingTo, '\ndepart date: ', departureDate, '\nreturn date: ', returnDate, '\ntravellers: ', travellers, '\ntrip type: ', tripType, '\nbg: ', bg, '\nflights json: ', flightsJson, '\nDestination: ', Dest, '\nBooking Class: ', selectedBookingClass)}
    </Context.Provider>
  );
};
