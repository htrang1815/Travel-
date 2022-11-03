import React from "react";
import {
  faGear,
  faUser,
  faReceipt,
  faHeart,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import DropdownItem from "./DropdownItem";
import domain from "../../utils/common";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${domain}/api/v1/users/logout`);
      console.log(res);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };
  return (
<<<<<<< HEAD
    <div className="absolute right-[-120%] top-[120%] w-[200px]  bg-primary  rounded-[20px]">
      <DropdownItem text="My profile" icon={faUser} className='rounded-t-[20px]'></DropdownItem>
=======
    <div className="absolute right-[-120%] top-[120%] w-[250px]  bg-primary  rounded-[20px]">
      <DropdownItem
        text="My profile"
        icon={faUser}
        className="rounded-t-[20px]"
      ></DropdownItem>
>>>>>>> e07169d9c71571555547a19561698a69b7f559f5
      <DropdownItem text="Setting" icon={faGear}></DropdownItem>
      <DropdownItem text="My booking" icon={faReceipt}></DropdownItem>
      <DropdownItem text="My save" icon={faHeart}></DropdownItem>
      <DropdownItem
        text="Log out"
        className="rounded-b-[20px]"
        icon={faArrowRightFromBracket}
        onClick={handleLogout}
      ></DropdownItem>
    </div>
  );
};

export default UserDropdown;
