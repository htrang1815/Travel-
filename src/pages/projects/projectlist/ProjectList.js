import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import ProjectItem from "../../../components/projects/ProjectItem";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { setProjectPage } from "../../../store/projectList/slice";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { projectList } = useSelector((state) => state.projectList);
  console.log("projectList : ", projectList);

  const pageCount =  8;
  // const pageCount = projectList?.length / 8;
  console.log(pageCount)
  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full  grid grid-cols-4 grid-rows-2 gap-[15px] mb-[30px]">
        {projectList?.map((project) => (
          <ProjectItem key={project._id} projectData={project}></ProjectItem>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10 gap-x-5">
        {/* <ButtonLoadMore
          className=" text-primary"
          text="Load More"
        ></ButtonLoadMore> */}
        <ArrowBackIosNewRoundedIcon
          className="cursor-pointer"
          style={{
            color: "#ffbc4a",
            fontSize: 20,
          }}
        ></ArrowBackIosNewRoundedIcon>

        {new Array(pageCount).fill(0).map((item, index) => (
          <span
            key={index}
            className="cursor-pointer text-[16px] leading-none border-[1px] border-solid border-primary inline-block px-5 py-3 rounded-lg text-primary"
            onClick={() => {
              dispatch(setProjectPage(index + 1));
            }}
          >
            {index + 1}
          </span>
        ))}

        <ArrowForwardIosRoundedIcon
          className="cursor-pointer"
          style={{
            color: "#ffbc4a",
            fontSize: 20,
          }}
        ></ArrowForwardIosRoundedIcon>
      </div>
    </div>
  );
};

export default ProjectList;
