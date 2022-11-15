import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ModalError = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-[100vh] bg-[#ffffff] relative">
        <div className="absolute max-w-[40%] w-full h-[50vh] bg-[#111] bg-opacity-95 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-10 pt-12 gap-8 flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[#ff3333] text-[40px] font-[600] border-[8px] border-solid border-[#ff3333] rounded-full p-3 flex-grow"
          ></FontAwesomeIcon>
          <h1 className="text-primary text-[28px] font-[700] ">Opps!</h1>
          <span className="block text-[#fff] text-[16px] normal-case">
            Something was wrong
          </span>
          <button
            className="block mb-5 p-4 rounded-lg text-[#111] bg-primary w-full text-[16px] font-[500]"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalError;
