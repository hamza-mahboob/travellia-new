import React from 'react'
import Header from '../components/header/Header'
import PassengerForm from '../components/PassengerForm/PassengerForm'
import Landing from '../components/landing/Landing'
import { useLocation } from 'react-router-dom'

const ContactUsPage = () => {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <div className='min-h-screen'>
      <Header />
      <div className="-mt-20 bg-black-50">
        <h1 className="text-4xl text-[#D9B748] font-semibold text-center mt-10">
          FLIGHT BOOKING
        </h1>
        <h2 className="text-lg text-[#595959] font-semibold text-center mt-5">
          Please Enter Your Details Below
        </h2>
      </div>
      <PassengerForm data={data} />
    </div>
  )
}

export default ContactUsPage
