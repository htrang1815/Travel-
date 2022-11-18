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
import useAuthStateChanged from "../../hooks/useAuthStateChange";

const UserDropdown = () => {
  let navigate = useNavigate();
  const { user } = useAuthStateChanged();
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
    <div className="absolute right-[-120%] top-[120%] w-[250px]  bg-primary  rounded-[20px]">
      <DropdownItem
        text="My profile"
        icon={faUser}
        className="rounded-t-[20px]"
        onClick={() => navigate(`/userprofile/${user._id}`)}
      ></DropdownItem>
      <DropdownItem
        text="Setting"
        icon={faGear}
        onClick={() => navigate(`/userprofile/${user._id}`)}
      ></DropdownItem>
      <DropdownItem
        text="My booking"
        icon={faReceipt}
        onClick={() => navigate(`/userprofile/${user._id}`)}
      ></DropdownItem>
      <DropdownItem
        text="My save"
        icon={faHeart}
        onClick={() => navigate(`/userprofile/${user._id}`)}
      ></DropdownItem>
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
