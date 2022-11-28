import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import ProjectItem from "../../../components/projects/ProjectItem";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { setProjectPage } from "../../../store/projectList/slice";
import ReactPaginate from "react-paginate";

const ProjectList = () => {
  const dispatch = useDispatch();
  // const { projectList } = useSelector((state) => state.projectList);

  const { projectList, projectPage } = useSelector(
    (state) => state.projectList
  );
  const data = projectList;
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full  grid grid-cols-4 gap-[15px] mb-[30px]">
        {currentItems?.map((project) => (
          <ProjectItem key={project._id} projectData={project}></ProjectItem>
        ))}
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
      {/* <div className="flex items-center justify-center mt-10 gap-x-5"> */}
      {/* <ButtonLoadMore
          className=" text-primary"
          text="Load More"
        ></ButtonLoadMore> */}
      {/* <ArrowBackIosNewRoundedIcon
          className="cursor-pointer"
          style={{
            color: "#ffbc4a",
            fontSize: 20,
          }}
          onClick={() => {
            dispatch(setProjectPage(projectPage - 1));
          }}
        ></ArrowBackIosNewRoundedIcon> */}

      {/* {new Array(pageCount).fill(0).map((item, index) => (
          <span
            key={index}
            className="cursor-pointer text-[16px] leading-none border-[1px] border-solid border-primary inline-block px-5 py-3 rounded-lg text-primary"
            onClick={() => {
              dispatch(setProjectPage(index + 1));
            }}
          >
            {index + 1}
          </span>
        ))} */}

      {/* <ArrowForwardIosRoundedIcon
          className="cursor-pointer"
          style={{
            color: "#ffbc4a",
            fontSize: 20,
          }}
          onClick={() => {
            dispatch(setProjectPage(projectPage + 1));
          }}
        ></ArrowForwardIosRoundedIcon> */}
      {/* </div> */}
    </div>
  );
};

export default ProjectList;
