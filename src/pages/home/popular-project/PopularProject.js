import React from "react";
import ProjectItem from "../../../components/projects/ProjectItem";

const PopularProject = () => {
  return (
    <div className="w-full h-full bg-[#fff2d7] z-50">
      <div className="text-center pt-16 line-after">
        <h2 className="text-[36px] font-[750] relative inline-block">UPCOMING PROJECTS</h2>
        <span className="block mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div className='w-full py-[50px] px-[9%]'>
        <div className="grid grid-cols-3 w-[90%] gap-4 mx-auto overflow-hidden">
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default PopularProject;
