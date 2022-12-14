import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

const BlogItem = ({ blogData, className }) => {
  // console.log(blogData);
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#222] rounded-[10px] overflow-hidden hover-item cursor-pointer myblog-item ${className}`}
      onClick={() => {
        window.scrollTo(10, 0);
        navigate(`/blog/${blogData?._id}`);
        // console.log('click')
      }}
    >
      <div className="img">
        <img
          src={blogData?.bannerImage}
          alt=""
          className="h-[250px] w-full object-cover bg-center"
        />
      </div>
      <div className="p-[20px] blog-content flex flex-col">
        <a href="#" className="text-[20px] text-[#fff] h-[61px] block">
          {blogData?.title}
        </a>
        <p className="py-[10px] text-[14px] text-[#aaa] leading-[28px] text-wrap blog grow block">
          {blogData?.article}
        </p>
        <div className="pt-[10px] flex items-center justify-between ">
          <div className="text-[14px] text-[#aaa]">
            <FontAwesomeIcon
              icon={faClock}
              className="pr-[5px] font-[900] text-primary"
            />{" "}
            <Moment format="YYYY/MM/DD">{blogData?.publishAt}</Moment>
          </div>
          <div className="text-[14px] text-[#aaa]">
            <FontAwesomeIcon
              icon={faUser}
              className="pr-[5px] font-[900] text-primary"
            />{" "}
            {blogData?.user?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
