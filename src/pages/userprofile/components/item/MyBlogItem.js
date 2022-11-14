import {
  faPenToSquare,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BlogItem from "../../../home/blog/BlogItem";

const MyBlogItem = () => {
  return (
    <div className="relative">
      <BlogItem></BlogItem>
      <div className="flex absolute top-[10px] right-[10px]">
        {/* <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[18px] text-primary block pr-[20px] cursor-pointer"
                    onClick={() => {
                      console.log("Click");
                    }}
                  ></FontAwesomeIcon> */}
        <FontAwesomeIcon
          icon={faSquareMinus}
          className="text-[18px] text-[#fc3f3f] block pr-[20px] cursor-pointer"
          onClick={() => {
            console.log("Click");
          }}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default MyBlogItem;
