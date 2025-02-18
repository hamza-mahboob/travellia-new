const express = require("express");
const {
  confirmBooking,
  confirmHotelBooking,
  contactUs,
} = require("../controllers/confirmBooking");

const router = express.Router();

router.post("/confirm", confirmBooking);
router.post("/hotelBooking", confirmHotelBooking);
router.post("/contact", contactUs);
// router.post("/holidayBooking", confirmHotelBooking);
// router.post("/hajjUmrahBooking", confirmHotelBooking);

module.exports = router;
