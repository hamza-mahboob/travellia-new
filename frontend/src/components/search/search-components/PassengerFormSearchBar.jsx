import React, { useContext, useState } from 'react'
import { Context } from '../../../context/contextAPI';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const PassengerForm = () => {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const { leavingFrom, goingTo, departureDate, returnDate, travellers, bg } = useContext(Context);
    const navigate = useNavigate()
    // let response = null

    const handleSubmit = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Sending query!",
            didOpen: async () => {
                Swal.showLoading();
                let response;
                try {
                    response = await fetch("https://travellia-tau.vercel.app/api/confirmBooking/hotelBooking", {
                        method: "POST",
                        body: JSON.stringify({
                            leavingFrom,
                            goingTo,
                            departureDate,
                            returnDate,
                            travellers,
                            name,
                            contactNumber,
                            email,
                            bg
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    const json = await response.json();
                    //console.log(json);

                    if (response.ok) {
                        Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Query submitted successfully!",
                            didClose: () => {
                                navigate('/');
                                window.location.reload();
                            }
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: "There was an error sending the query.",
                            didClose: () => {
                                navigate('/hotels');
                            }
                        });
                    }
                } catch (error) {
                    console.error(error);
                    Swal.fire({
                        icon: "error",
                        title: "Error!",
                        text: "There was an unexpected error!",
                        didClose: () => {
                            navigate('/hotels');
                        }
                    });
                }
            }
        });
    };


    return (

        < div className="flex flex-col xl:flex-row" >
            <form className="bg-white flex flex-col xl:flex-row justify-around rounded-lg p-3 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    <div className="flex gap-16 justify-around">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="shadow appearance-none border rounded-xl w-full lg:w-60 2xl:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => { setName(e.target.value) }}
                                placeholder='Your Name...'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="contact">
                                Contact
                            </label>
                            <input
                                type="text" // Changed to text to allow pattern matching
                                id="contact"
                                name="contact"
                                className="shadow appearance-none border rounded-xl w-full lg:w-60 2xl:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {
                                    setContactNumber(e.target.value);
                                }}
                                maxLength="15"
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^+\d]/g, ''); // Allows only digits and "+"
                                }}
                                placeholder='+44 123 456 7890'
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow appearance-none border rounded-xl w-full lg:w-60 2xl:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                onChange={(e) => { setEmail(e.target.value) }} 
                                placeholder='name@travellia.com'
                                required
                                />
                        </div>
                    </div>
                    <button
                        className="w-full xl:max-w-[10rem] h-12 rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-3 justify-center"
                        // onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
            {/* {//console.log("name: ", name, 'number: ', contactNumber, 'email: ', email)} */}
        </div >
    )
}

export default PassengerForm
