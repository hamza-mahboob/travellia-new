const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
  IATA: String,
  name: String,
  locationServed: String,
});

const Airport = mongoose.model("Airport", airportSchema, "airports"); 

module.exports = Airport;
