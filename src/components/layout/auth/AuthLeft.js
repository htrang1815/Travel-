import React from "react";
import loginImg from "../../../assets/images/auth/home-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const AuthLeft = () => {
  return (
    <div className="w-full max-w-[50%] p-[40px] ">
      <div className="absolute  top-[5%] left-[5%]">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-primary text-[28px] pr-[5px] font-[900]"
          />
          <h1 className="font-bold text-[32px] text-[#fff]">Travel</h1>
        </div>
      </div>
      <div className="">
        <img
          src={loginImg}
          alt=""
          className="w-full object-cover object-left rounded h-[480px] self-center"
        />
      </div>
    </div>
  );
};

export default AuthLeft;
