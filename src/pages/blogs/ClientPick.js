import React from "react";
import ButtonLoadMore from "../../components/button/ButtonLoadMore";
import BlogItem from "../home/blog/BlogItem";
import userblog1 from "../../assets/images/blogs/userblog1.jpeg";
import userblog2 from "../../assets/images/blogs/userblog2.jpeg";
import userblog3 from "../../assets/images/blogs/userblog3.jpeg";

const ClientPick = () => {
  return (
    <div className="px-[9%] py-[30px]">
      <div className="">
        <h2 className="text-[30px] font-[700] text-primary mb-[20px] ">
          Client's Pick
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-[20px]">
        <BlogItem pic={userblog1} className=""></BlogItem>
        <BlogItem pic={userblog2}></BlogItem>
        <BlogItem pic={userblog3}></BlogItem>
        <BlogItem pic={userblog1}></BlogItem>
        <BlogItem pic={userblog2}></BlogItem>
        <BlogItem pic={userblog3}></BlogItem>
      </div>
      <div className="text-center">
        <ButtonLoadMore
          text="Load More"
          className="text-primary"
        ></ButtonLoadMore>
      </div>
    </div>
  );
};

export default ClientPick;
