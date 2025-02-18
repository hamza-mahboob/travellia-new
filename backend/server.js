require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

//express app
const app = express();

//middleware
app.use(
  cors({
    origin: "https://www.travellia.co.uk",
    // origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/flights", flightRoutes);
app.use("/api/confirmBooking", bookingRoutes);
app.use("/api", bookingRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "travellia", // Ensure you're connecting to the 'travellia' database
    });
    console.log("Connected to MongoDB Atlas");
    // Start the server only after connecting to the DB
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running on port", process.env.PORT || 3000);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

connectDB();
