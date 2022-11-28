import React, { useState } from "react";
import ButtonLoadMore from "../../components/button/ButtonLoadMore";
import BlogItem from "../home/blog/BlogItem";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setBlogPage } from "../../store/blogList/slice";
import axios from "axios";
import domain from "../../utils/common";

const ClientPick = () => {
  const dispatch = useDispatch();

  const { blogList, blogPage } = useSelector((state) => state.blogList);
  const data = blogList;
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);}

    return (
      <div className="px-[9%] py-[30px]">
        <div className="">
          <h2 className="text-[30px] font-[700] text-primary mb-[20px] ">
            Client's Pick
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-[20px]">
          {currentItems?.map((blog) => (
            <BlogItem key={blog._id} blogData={blog} className=""></BlogItem>
          ))}
          {/* <BlogItem pic={userblog2}></BlogItem>
        <BlogItem pic={userblog3}></BlogItem>
        <BlogItem pic={userblog1}></BlogItem>
        <BlogItem pic={userblog2}></BlogItem>
        <BlogItem pic={userblog3}></BlogItem> */}
        </div>
        <div className="paginate mt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination"
            prevRel={null}
          />
        </div>
        {/* <div className="text-center">
        <ButtonLoadMore
          text="Load More"
          className="text-primary"
        ></ButtonLoadMore>
      </div> */}
      </div>
    );
  };

export default ClientPick;
