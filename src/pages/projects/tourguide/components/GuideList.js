import React, { useState } from "react";
import ButtonLoadMore from "../../../../components/button/ButtonLoadMore";
import GuideItem from "../../../../components/guides/GuideItem";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const GuideList = () => {
  const dispatch = useDispatch();

  const itemsPerPage = 8;
  const { guideList } = useSelector((state) => state.guideList);
  // console.log("guideList",guideList);
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(guideList.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % guideList.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    // dispatch(setProjectPage(event.selected + 1));
  };


  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full py-[30px] grid grid-cols-4 grid-rows-2 gap-[15px]  mb-[30px]">
      {guideList?.map((guide) => (
          <GuideItem  key={guide._id} guideData={guide}></GuideItem>
        ))}
      </div>
      {/* <div className="text-center">
        <ButtonLoadMore
          className=" text-primary"
          text="Load More"
        ></ButtonLoadMore>
      </div> */}
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
    </div>
  );
};

export default GuideList;
