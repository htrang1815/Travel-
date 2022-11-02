import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faReceipt,
  faHeart,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import DropdownItem from "./DropdownItem";

const UserDropdown = () => {
  return (
    <div className="absolute right-[-120%] top-[120%] w-[250px]  bg-primary  rounded-[20px]">
      <DropdownItem text="My profile" icon={faUser} className='rounded-t-[20px]'></DropdownItem>
      <DropdownItem text="Setting" icon={faGear}></DropdownItem>
      <DropdownItem text="My booking" icon={faReceipt}></DropdownItem>
      <DropdownItem text="My save" icon={faHeart}></DropdownItem>
      <DropdownItem text="Log out" className='rounded-b-[20px]' icon={faArrowRightFromBracket}></DropdownItem>  
    </div>
  );
};

export default UserDropdown;
