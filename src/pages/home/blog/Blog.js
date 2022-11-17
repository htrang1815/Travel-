import React from "react";
import BlogItem from "./BlogItem";
import blog1 from "../../../assets/images/blogs/blog-1.jpg";
import blog2 from "../../../assets/images/blogs/blog-2.jpg";
import blog3 from "../../../assets/images/blogs/blog-3.jpg";
import { useSelector } from "react-redux";

const Blog = () => {
  const { blogList } = useSelector((state) => state.blogList);
  return (
    <div className="px-[9%] py-[30px]">
      <div className="text-center mb-[20px]">
        <span className="text-primary text-[20px]">Blogs & Posts</span>
        <h1 className="text-[40px] text-[#fff] font-[700]">
          We untold stories
        </h1>
      </div>
      <div className="grid-blog">
        {blogList?.map((blog) => (
          <BlogItem key={blog._id} blogData={blog} className=""></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default Blog;
