import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import domain from "../../utils/common";

const BookingSuccessful = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Thank you for your order</h1>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to home page
      </button>
    </div>
  );
};

export default BookingSuccessful;
