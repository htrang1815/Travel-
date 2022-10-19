import React from "react";
import ProjectItem from "../../../components/projects/ProjectItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PopularProject = () => {
  return (
    <div>
      <div className="text-center pt-12">
        <h2 className="text-[40px] font-[500]">UPCOMING PROJECTS</h2>
        <span className="block mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div className='w-full py-[50px] px-[9%]'>
        <div className="flex w-[90%] mx-auto overflow-hidden ">
          <ArrowBackIosIcon className="absolute top-[50%] translate-y-[-50%] left-[100px] cursor-pointer"></ArrowBackIosIcon>
          <ProjectItem></ProjectItem>
          <ArrowForwardIosIcon className="absolute top-[50%] translate-y-[-50%] right-[100px] cursor-pointer"></ArrowForwardIosIcon>
        </div>

      </div>
    </div>
  );
};

export default PopularProject;
