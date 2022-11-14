import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import domain from "../../utils/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BookingSuccessful = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] bg-bg-success bg-opacity-30 bg-cover bg-center bg-no-repeat relative">
      <div className="absolute max-w-[40%] w-full h-[50vh] bg-[#111] bg-opacity-95 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-10 pt-12 gap-8 flex flex-col items-center justify-center">
      <FontAwesomeIcon icon={faCheck} className='text-[#48d441] text-[60px] font-[600] border-[8px] border-solid border-[#73f46c] rounded-full p-3 flex-grow'></FontAwesomeIcon>
      <h1 className="text-primary text-[28px] font-[700] ">Booking Success</h1>
      <span className="block text-[#fff] text-[16px] normal-case">Thanks for your booking</span>
      <button className="block mb-5 p-4 rounded-lg text-[#111] bg-primary w-full text-[16px] font-[500]"
        onClick={() => {
          navigate("/home");
        }}
      >
        Make new booking
      </button>
    </div>
    </div>
  );
};

export default BookingSuccessful;
