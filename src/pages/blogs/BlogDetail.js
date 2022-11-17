import React, { useEffect } from "react";
import Header from "../home/header/Header";
import Moment from 'react-moment';
// import 'moment-timezone';
import Footer from "../home/footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../store/blog/slice";

// import { joinBlog } from "../../realtimeCommunication/socketConnection";

const BlogDetail = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   joinBlog(blogId);
  // }, [blogId]);

  useEffect(() => {
    dispatch(getBlog(blogId));
  }, [dispatch, blogId]);

  const { blog } = useSelector((state) => state.blog);
  console.log("blog", blog);
  return (
    <div className="bg-[#111] ">
      <Header></Header>
      <div className="bg-[#111] w-full pt-[78px] h-[400px] px-[5%] ">
        <div className=" w-full h-full text-primary  bg-cover bg-center relative ">
          <img
            src={blog?.bannerImage}
            alt=""
            className="w-full h-full object-cover rounded-[20px] object-center"
          />
        </div>
      </div>
      <div className="bg-[#111] w-full px-[5%] py-[30px]">
        <h1 className="block w-full min-h-[100px] h-auto text-[50px] font-[600]  bg-[#111] text-primary normal-case ">
          {blog?.title}
        </h1>
        <span className="normal-case pb-[20px] italic mr-[12px]">
          Puslished at - 
          <Moment format="YYYY/MM/DD">
          {blog?.publishAt}
            </Moment>
        </span>
        <span className="normal-case pb-[20px] italic">
          Create by - {blog?.user?.name}
        </span>
      </div>
      <div className="bg-[#111] w-full px-[7%] py-[20px]">
        <p className="w-full bg-[#fff] px-[2%] py-[10px] leading-9d l text-[#111]">
          {blog?.article}
        </p>
      </div>
      <Footer className="bg-[#222]"></Footer>
    </div>
  );
};

export default BlogDetail;
