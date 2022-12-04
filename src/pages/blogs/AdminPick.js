import React, { useEffect } from "react";
import BlogItem from "../home/blog/BlogItem";
import adblog1 from "../../assets/images/blogs/adblog1.jpeg";
import adblog2 from "../../assets/images/blogs/adblog2.jpeg";
import adblog3 from "../../assets/images/blogs/adblog3.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getMyBlog } from "../../store/myblog/slice";

const AdminPick = () => {
  const userId = "637cd34b74a8cf4e7a35b298";
  // const { user } = useAuthStateChanged();
  // console.log(user.bookmark);
  const dispatch = useDispatch();
  const { myblog } = useSelector((state) => state.myblog);
  const data = myblog;
  const currentItems = data.slice(0, 6);

  useEffect(() => {
    dispatch(getMyBlog(userId));
  }, [dispatch, userId]);

  return (
    <div className="px-[9%] py-[30px] ">
      <div className="">
        <h2 className="text-[30px] font-[700] text-primary mb-[20px] ">
          Must read
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-[20px]">
        {currentItems.map((blog) => (
          <BlogItem key={blog._id} blogData={blog}></BlogItem>
        ))}
        {/* <BlogItem pic={adblog1} className=""></BlogItem>
        <BlogItem pic={adblog2}></BlogItem>
        <BlogItem pic={adblog3}></BlogItem>
        <BlogItem pic={adblog1}></BlogItem>
        <BlogItem pic={adblog2}></BlogItem>
        <BlogItem pic={adblog3}></BlogItem> */}
      </div>
    </div>
  );
};

export default AdminPick;
