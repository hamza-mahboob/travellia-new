import React, { useState } from "react";
import contact from "../../assets/images/contact.jpg";
import Swal from "sweetalert2";


function ContactUs() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(formData)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://travellia-tau.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Query sent successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while sending the message.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto my-[100px] " id="my-contact-form">
        <div className="mx-5 text-center flex flex-col">
          {/* <h1 className="text-[20px] text-[#D9B748]">CONTACT</h1> */}
          <h1 className="font-bold text-[50px] mb-[60px] mt-2 tracking-wider">
            Plan Your Trip With Us
          </h1>
          <div className="flex flex-col xl:flex-row justify-between gap-20 xl:gap-0 items-center xl:items-start">
            <div className="flex flex-col gap-6 mx-5 my-2 order-2 lg:order-1">
              <div className="flex flex-col md:flex-row gap-12 justify-center lg:justify-normal">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-start font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-none focus-visible:outline-[#D9B748] focus-visible:ring-0"
                    placeholder="Your first name..."
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-start font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-none focus-visible:outline-[#D9B748] focus-visible:ring-0"
                    placeholder="Your last name..."
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 justify-center lg:justify-normal">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-start font-semibold">
                    Your Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-none focus-visible:outline-[#D9B748] focus-visible:ring-0"
                    placeholder="name@travellia.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-start font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full md:w-[300px] rounded-xl bg-[#F9FAFB] border-none focus-visible:outline-[#D9B748] focus-visible:ring-0"
                    placeholder="+44 123 456 789"
                    maxLength="15"
                    pattern="[\d+]*" // Allows only digits and the "+" sign
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^+\d]/g, ''); // Removes any character that is not a digit or "+"
                    }}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-12 justify-center lg:justify-normal">
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-start font-semibold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    className="w-full md:w-[650px] h-[200px] rounded-xl bg-[#F9FAFB] border-none focus-visible:outline-[#D9B748] focus-visible:ring-0 resize-none"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-10 justify-center lg:justify-normal">
                <button className="w-[180px] h-[56px] text-center text-[#D9B748] rounded-xl mt-[31px] bg-white font-semibold border border-[#D9B748] hover:bg-[#D9B748] hover:text-white" onClick={handleSubmit}>
                  Request a Callback
                </button>
                {/* <button className="w-[180px] h-[56px] text-center bg-[#D9B748] rounded-xl mt-[31px] text-white font-semibold hover:bg-[#b4993d]">
                  Send Message
                </button> */}
              </div>
            </div>
            <img
              src={contact}
              alt=""
              className="w-full h-auto lg:size-[25rem] xl:size-[35rem] object-cover object-center order-1 lg:order-2 shadow-xl shadow-[#d9b748a9] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
