import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import ProjectItem from "../../../components/projects/ProjectItem";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { setProjectPage } from "../../../store/projectList/slice";
import ReactPaginate from "react-paginate";

const itemsPerPage = 8;
// itemsPerPage: số lượng phần tử hiển thị
const ProjectList = () => {
  const dispatch = useDispatch();
  // const { projectList } = useSelector((state) => state.projectList);
  // console.log("projectList : ", projectList);
  const { projectList, projectPage } = useSelector(
    (state) => state.projectList
  );
  // console.log("projectList : ", projectList);

  const [itemOffset, setItemOffset] = useState(0);
  // itemOffset là để hiển thị dấu ...

  const pageCount = Math.ceil(projectList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % projectList.length;
    // event.selected: số mà ta chọn
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    dispatch(setProjectPage(event.selected + 1));
  };

  // const pageCount =  8;
  // const pageCount = projectList?.length / 8;
  console.log(pageCount);
  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full  grid grid-cols-4 grid-rows-2 gap-[15px] mb-[30px]">
        {projectList?.map((project) => (
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
