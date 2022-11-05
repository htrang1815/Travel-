import React from "react";
import BlogItem from "../home/blog/BlogItem";
import adblog1 from "../../assets/images/blogs/adblog1.jpeg"
import adblog2 from "../../assets/images/blogs/adblog2.jpeg"
import adblog3 from "../../assets/images/blogs/adblog3.jpeg"

const AdminPick = () => {
  return (
    <div className="px-[9%] py-[30px] ">
      <div className="">
        <h2 className="text-[30px] font-[700] text-primary mb-[20px] ">Must read</h2>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-[20px]">
        <BlogItem pic={adblog1} className=''></BlogItem>
        <BlogItem pic={adblog2} ></BlogItem>
        <BlogItem pic={adblog3} ></BlogItem>
        <BlogItem pic={adblog1} ></BlogItem>
        <BlogItem pic={adblog2} ></BlogItem>
        <BlogItem pic={adblog3} ></BlogItem>
      </div> 
    </div>
  );
};

export default AdminPick;
