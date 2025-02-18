const express = require("express");
const {
  getFlights,
  getAirport,
  getFlightsFromDb,
} = require("../controllers/flightsController");

const router = express.Router();

router.post("/", getFlights);
router.post("/getFlightsFromDb", getFlightsFromDb);
router.post("/airport", getAirport);

module.exports = router;
