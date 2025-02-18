const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    // Create a transporter object
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "travellialimited@gmail.com", // Your Gmail email
        pass: "YOUR_APP_PASSWORD", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate errors
      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: '"noreply" <your-email@gmail.com>', // Sender address
      to: to, // List of receivers
      subject: subject, // Subject line
      html: text, // html body
    });

    // //console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
