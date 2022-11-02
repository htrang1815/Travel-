import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonBook = ({ text, className }) => {
  return (
    <div className="mb-[30px]">
      <button
        className={`mt-0 text-[14px] font-[500] text-primary px-[15px] py-[10px] rounded-[50px] border-[2px] border-solid  border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit ${className} flex items-center justify-between`}
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
