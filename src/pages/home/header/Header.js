import React from "react";
import HikingIcon from "@mui/icons-material/Hiking";
import { Link } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ButtonSubmit from "../../../components/button/ButtonSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ListLink = [
  {
    id: 1,
    to: "#",
    title: "Home",
  },
  {
    id: 2,
    to: "#",
    title: "Projects",
  },
  {
    id: 3,
    to: "#",
    title: "Blogs",
  },
  {
    id: 4,
    to: "#",
    title: "About",
  },
  {
    id: 5,
    to: "#",
    title: "Contact",
  },
];

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-[1000] w-full flex items-center justify-between px-[9%] py-[15px]  bg-header">
      <div className="text-[25px] font-bold text-[#fff] cursor-pointer">
        <FontAwesomeIcon icon={faPaperPlane} className="text-primary pr-[5px] font-[900]"/>
        Travel
      </div>
      <div className="flex list-none items-center m-0 p-0  ">
        {ListLink.map((link) => (
          <li className="text-[17px] text-[#aaa] mx-[10px] cursor-pointer capitalize hover-menu" key={link.id}>
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </div>
      <div>
        {/* <BookmarkIcon className="ml-[16px]"></BookmarkIcon> */}
        <ButtonSubmit
          className=""
          text="Login"
        ></ButtonSubmit>
      </div>
    </div>
  );
};

export default Header;
