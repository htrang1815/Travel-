import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useAuthStateChanged from "../../hooks/useAuthStateChange";
import domain from "../../utils/common";
import { useStripe } from "@stripe/react-stripe-js";

const ButtonBook = ({ text, className }) => {
  const { projectId } = useParams();
  const { isLogin } = useAuthStateChanged();
  const stripe = useStripe();
  const handleCheckout = async () => {
    const session = await axios.get(
      `${domain}/api/v1/bookings/checkout-session/${projectId}`
    );
    const sessionId = session.data.session.id;

    // Thanh toán thành công và chuyển sang trang thanh toán
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-[30px]">
      <button
        className={`mt-0 text-[14px] font-[500] text-primary px-[15px] py-[10px] rounded-[50px] border-[2px] border-solid  border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit ${className} flex items-center justify-between`}
        onClick={() => {
          if (isLogin) {
            handleCheckout();
          } else {
            console.log("Please login to book tour");
          }
        }}
      >
        {text}
        <FontAwesomeIcon
          className="text-[14px] ml-3"
          icon={faChevronRight}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ButtonBook;
