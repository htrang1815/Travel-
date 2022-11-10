import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="h-[50px] border-t-0 border-x-0 border-b-[0.5px] flex items-center   border-solid border-primary bg-[#111]">
      <div className="wrapper w-full p-[20px] flex items-center justify-center">
        <div className="flex items-center border-[0.5px] border-solid border-primary px-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#111]"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-primary"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="flex items-center">
        <div className="item flex items-center mr-5 relative ">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar w-[30px] h-[30px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
