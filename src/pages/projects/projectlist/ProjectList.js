import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import ProjectItem from "../../../components/projects/ProjectItem";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import {
  getProjectList,
  setProjectPage,
} from "../../../store/projectList/slice";
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
  // useEffect(() => {
  //   dispatch(getProjectList());
  //   dispatch(getGuideList());
  // }, [dispatch]);
  // ;
  const data = projectList;

  // console.log("projectList : ", projectList);

  const [itemOffset, setItemOffset] = useState(0);
  // itemOffset là để hiển thị dấu ...
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(projectList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % projectList.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    // dispatch(setProjectPage(event.selected + 1));
  };

  // const pageCount =  8;
  // const pageCount = projectList?.length / 8;
  console.log(currentItems);
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
    </div>
  );
};

export default ProjectList;
