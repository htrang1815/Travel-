import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const ResetLayout = ({ icon, header, subHeader, children }) => {
  return (
    <div className="w-full min-h-screen p-10 bg-[#111]">
      <div className="w-full max-w-[556px] bg-[#fff] rounded-xl px-5 py-8s lg:px-16 lg:py-12 mx-auto shadow-profile text-center">
        <div className="inline-block p-5 bg-[#f8f5fe] rounded-full">
          <div className="p-4 bg-[#f4ebfe] rounded-full text-[64px] text-primary">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </div>
        </div>
        <h1 className="font-bold text-[28px] mt-[10px]">{header}</h1>
        <p className="mt-[10px] text-[18px] text-[#111]">{subHeader}</p>
        {children}
        <Link
          to={"/login"}
          className="flex items-center justify-center hover:text-primary transition-all linear"
        >
          <div className="mt-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </div>
          <p className="text-[#111] mt-[12px]">Back to log in</p>
        </Link>
      </div>
    </div>
  );
};

export default ResetLayout;
