import React from "react";
import BlogItem from "./BlogItem";
import { useDispatch, useSelector } from "react-redux";
import { setBlogPage } from "../../../store/blogList/slice";

const Blog = () => {
  // const dispatch = useDispatch();
  const { blogList, blogPage } = useSelector((state) => state.blogList);
  const data = blogList;
  // dispatch(setBlogPage(1))
  const currentItems = data.slice(0, 6);
  console.log(blogPage);
  return (
    <div className="px-[9%] py-[30px]">
      <div className="text-center mb-[20px]">
        <span className="text-primary text-[20px]">Blogs & Posts</span>
        <h1 className="text-[40px] text-[#fff] font-[700]">
          We untold stories
        </h1>
        4
      </div>
      <div className="grid-blog">
        {currentItems?.map((blog) => (
          <BlogItem key={blog._id} blogData={blog} className=""></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default Blog;
