import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import ProjectItem from "../../../components/projects/ProjectItem";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { setProjectPage } from "../../../store/projectList/slice";
import ReactPaginate from "react-paginate";

const itemsPerPage = 3;
// itemsPerPage: số lượng phần tử hiển thị
const ProjectList = () => {
  const { projectList } = useSelector((state) => state.projectList);
  console.log("projectList : ", projectList);

  const [itemOffset, setItemOffset] = useState(0);
  // itemOffset là để hiển thị dấu ...
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = projectList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(projectList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % projectList.length;
    // event.selected: số mà ta chọn
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log(pageCount);
  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full  grid grid-cols-4 grid-rows-2 gap-[15px] mb-[30px]">
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
    </div>
  );
};

export default ProjectList;
