const axios = require("axios");
const mysql = require("mysql2");
const Airport = require("../models/Airport");

const getFlights = async (req, res) => {
  //get these option from the frontend in params/body/header
  // return console.log(req.body);
  const {
    leavingFrom,
    goingTo,
    departureDate,
    returnDate,
    travellers,
    tripType,
    selectedBookingClass,
  } = req.body;

  let returnDateForRoundTrip = returnDate;

  console.log(
    leavingFrom,
    goingTo,
    departureDate,
    returnDate,
    travellers,
    tripType,
    selectedBookingClass
  );

  //make sure returndate does not have a value if its one way even tho the api doesnt pick it up regardless
  if (tripType.includes("ONE_WAY")) {
    returnDateForRoundTrip = "";
  }

  const options = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights",
    params: {
      sourceAirportCode: leavingFrom,
      destinationAirportCode: goingTo,
      // sourceAirportCode: "DXB",
      // destinationAirportCode: "LHR",
      // itineraryType: "ROUND_TRIP",
      itineraryType: tripType,
      sortOrder: "ML_BEST_VALUE",
      date: departureDate,
      returnDate: returnDateForRoundTrip,
      // date: "2024-09-02",
      numAdults: travellers,
      // numAdults: "1",
      // numSeniors: "0",
      classOfService: selectedBookingClass,
      pageNumber: "1",
      nearby: "yes",
      // nonstop: "yes",
      currencyCode: "GBP",
      region: "UK",
    },
    headers: {
      "x-rapidapi-host": "YOUR_RAPIDAPI_KEY",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    response.data.data?.flights?.forEach((item) => {
      item.purchaseLinks[0].totalPrice =
        item.purchaseLinks[0].totalPrice * 0.75;
      // console.log("total price: ", item.purchaseLinks[0].totalPrice);
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    return res.status(400).json({ error });
  }
};

//from mongodb atlas
const getAirport = async (req, res) => {
  const { value } = req.body;
  const searchValue = value.trim().toLowerCase(); // Trim and convert input to lowercase
  console.log("airport query value", searchValue);

  try {
    // Case-insensitive search for partial matches in IATA, name, and locationServed
    const airports = await Airport.find({
      $or: [
        { IATA: { $regex: searchValue, $options: "i" } }, // Match 'IATA' partially
        { name: { $regex: searchValue, $options: "i" } }, // Match 'name' partially
        { locationServed: { $regex: searchValue, $options: "i" } }, // Match 'locationServed' partially
      ],
    });

    console.log("Found airports:", airports);
    return res.status(200).json(airports);
  } catch (error) {
    console.error("Error fetching airports:", error);
    return res.status(400).json({ error: "Failed to fetch airport data" });
  }
};

const getFlightsFromDb = async (req, res) => {
  const { leavingFrom, goingTo } = req.body;

  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "travellia",
  });
  // const sql = `
  //   SELECT fares.*, airlines.name AS airline_name
  //   FROM fares
  //   JOIN airlines ON fares.airlineid = airlines.code
  //   WHERE fromairportid = ? AND toairportid = ?
  //   AND fares.status = 1
  // `;
  const sql = `
    SELECT fares.*, airlines.name AS airline_name, 
           departure_airport.name AS departure_airport_name, 
           arrival_airport.name AS arrival_airport_name
    FROM fares
    JOIN airlines ON fares.airlineid = airlines.code
    JOIN airports AS departure_airport ON fares.fromairportid = departure_airport.code
    JOIN airports AS arrival_airport ON fares.toairportid = arrival_airport.code
    WHERE fromairportid = ? AND toairportid = ? AND fares.status = 1`;

  db.query(sql, [leavingFrom, goingTo], (err, results) => {
    if (err) {
      // Handle the database query error first

      return res.status(500).json({ error: "Database query error" });
    }

    if (results.length < 1) {
      // Handle the case where no results are found
      console.log("results", results);

      return res.status(404).json({ error: "No flights found..." });
    }

    // If no errors and results are found, return the results
    console.log("results", results);

    return res.status(200).json(results);
  });
};

module.exports = { getFlights, getAirport, getFlightsFromDb };