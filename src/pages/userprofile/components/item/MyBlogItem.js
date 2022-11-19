import {
  faPenToSquare,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMyReview } from "../../../../realtimeCommunication/socketConnection";
import domain from "../../../../utils/common";
import BlogItem from "../../../home/blog/BlogItem";

const MyBlogItem = ({data}) => {
  // console.log(data);
  // console.log(blog);
  // const blogId = data._id;
  const handleDeleteMyBlog = async () => {
    const myblog = await axios.delete(`${domain}/api/v1/blogs/${data._id}`);
    
    // console.log(data._id)
  }
  return (
    <div className="relative">
      <BlogItem blogData={data}></BlogItem>
      <div className="flex absolute top-[10px] right-[10px]">
        {/* <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[18px] text-primary block pr-[20px] cursor-pointer"
                    onClick={() => {
                      console.log("Click");
                    }}
                  ></FontAwesomeIcon> */}
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-[18px] text-[#fff] block pr-[20px] cursor-pointer"
          onClick={() => {
            console.log("Click");
          }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faSquareMinus}
          className="text-[18px] text-[#fc3f3f] block pr-[20px] cursor-pointer"
          onClick={handleDeleteMyBlog}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default MyBlogItem;
