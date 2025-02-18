const axios = require("axios");
const sendEmail = require("./sendEmail");
const colors = require("colors");

const confirmBooking = async (req, res) => {
  const { formState, data } = req.body;

  // //console.log("formstate: ", formState);
  const passenger = formState[0];
  if (
    !passenger.firstName?.trim() ||
    !passenger.lastName?.trim() ||
    !passenger.email?.trim() ||
    !passenger.phone?.trim() ||
    !passenger.gender?.trim()
  ) {
    // //console.log("here");
    return res
      .status(400)
      .json({ message: "No valid passenger data provided." });
  }

  // Initialize the flight details string
  let flightDetails = "<p><strong>Flight Details:</strong></p>";

  data.segments.forEach((segment, segmentIndex) => {
    segment.legs.forEach((leg, legIndex) => {
      flightDetails += `<p><strong>Segment ${segmentIndex + 1} - Flight ${
        legIndex + 1
      }:</strong></p>`;
      flightDetails += `<p>Airline: ${leg.operatingCarrier.displayName}</p>`;
      flightDetails += `<p>Airline Code: ${leg.operatingCarrierCode}</p>`;
      flightDetails += `<p>Cabin Class: ${leg.classOfService}</p>`;
      flightDetails += `<p>Departure Time: ${leg.departureDateTime
        .split("T")[1]
        .slice(0, -9)}</p>`;
      flightDetails += `<p>Departure City: ${leg.originStationCode}</p>`;
      flightDetails += `<p>Departure Date: ${
        leg.departureDateTime.split("T")[0]
      }</p>`;
      flightDetails += `<p>Arrival Time: ${leg.arrivalDateTime
        .split("T")[1]
        .slice(0, -9)}</p>`;
      flightDetails += `<p>Arrival City: ${leg.destinationStationCode}</p>`;
      flightDetails += `<p>Arrival Date: ${
        leg.arrivalDateTime.split("T")[0]
      }</p>`;
      flightDetails += `<p>Flight Number: ${leg.flightNumber}</p>`;
      flightDetails += `<p>Distance: ${leg.distanceInKM} KM</p>`;
      flightDetails += `<hr>`; // Horizontal line to separate flights
    });

    if (segment.layovers && segment.layovers.length > 0) {
      segment.layovers.forEach((layover, layoverIndex) => {
        flightDetails += `<p><strong>Layover ${layoverIndex + 1}:</strong></p>`;
        flightDetails += `<p>Duration: ${Math.floor(
          layover.durationInMinutes / 60
        )}h ${layover.durationInMinutes % 60}m</p>`;
        flightDetails += `<p>Station Change: ${
          layover.hasStationChange ? "Yes" : "No"
        }</p>`;
        flightDetails += `<hr>`; // Horizontal line to separate layovers
      });
    }
  });

  flightDetails += `<p><strong>Total Price:</strong> £${Math.floor(
    data?.purchaseLinks[0].totalPrice
  )}.00</p>`;
  flightDetails += `<hr>`;

  let emailContent = "<p><strong>Passenger Details:</strong></p>";

  formState.forEach((passenger, index) => {
    emailContent += `<p><strong>Passenger ${index + 1}:</strong></p>`;
    emailContent += `<p>Name: ${passenger.firstName} ${passenger.lastName}</p>`;
    emailContent += `<p>Gender: ${passenger.gender}</p>`;
    emailContent += `<p>Email: ${passenger.email}</p>`;
    emailContent += `<p>Phone: ${passenger.phone}</p>`;
    // emailContent += `<p>Nationality: ${passenger.nationality}</p>`;
    emailContent += `<hr>`; // Horizontal line to separate passengers
  });

  // Combine flight details and passenger details
  let fullEmailContent = flightDetails + emailContent;

  // Send the email
  try {
    await sendEmail(
      "info@travellia.co.uk",
      // "shazibunderscore@gmail.com",
      "Flight & Passenger Details",
      fullEmailContent
    );

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);

    return res.status(500).json({ message: "Failed to send email." });
  }
};

const confirmHotelBooking = async (req, res) => {
  const {
    name,
    contactNumber,
    email,
    leavingFrom,
    goingTo,
    departureDate,
    returnDate,
    travellers,
    bg,
  } = req.body;

  if (!name || !contactNumber || !email) {
    return res.status(400).json({ error: "all fields must be filled" });
  }

  let emailContent = "";

  if (bg == 2) emailContent += "<p><strong>Hotel:</strong></p>";
  if (bg == 3) emailContent += "<p><strong>Holiday Package:</strong></p>";
  if (bg == 4) emailContent += "<p><strong>Hajj/Umrah Package:</strong></p>";

  emailContent += "<p>Passenger Details:</p>";

  emailContent += `<p>Name: ${name}</p>`;
  emailContent += `<p>Email: ${email}</p>`;
  emailContent += `<p>Phone: ${contactNumber}</p>`;
  if (leavingFrom) emailContent += `<p>Leaving From: ${leavingFrom}</p>`;
  emailContent += `<p>Going To: ${goingTo}</p>`;
  emailContent += `<p>Departure Date: ${departureDate}</p>`;
  emailContent += `<p>Return Date: ${returnDate}</p>`;
  emailContent += `<p>Travellers: ${travellers}</p>`;

  // Send the email
  try {
    await sendEmail(
      "info@travellia.co.uk",
      // "shazibunderscore@gmail.com",
      "Flight & Passenger Details",
      emailContent
    );

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);

    return res.status(500).json({ message: "Failed to send email." });
  }
};

const contactUs = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Validate required fields
  if (
    !firstName?.trim() ||
    !lastName?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !message?.trim()
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Prepare email content
  let emailContent = `
    <p><strong>Contact Details:</strong></p>
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>
  `;

  // Send the email
  try {
    await sendEmail(
      "info@travellia.co.uk",      // Your business email
      "New Contact Us Message",
      emailContent
    );

    return res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ message: "Failed to send query. Please try again later." });
  }
};

module.exports = { confirmBooking, confirmHotelBooking, contactUs };
