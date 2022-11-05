import React from "react";
import { useSelector } from "react-redux";
import ProjectItem from "../../../components/projects/ProjectItem";

const PopularProject = () => {
  const { projectList } = useSelector((state) => state.projectList);

  console.log(projectList);
  return (
    <div className="py-[30px] px-[9%] ">
      <div className="text-center mb-[20px]">
        <span className="text-primary text-[20px] box-border">
          Our Projects
        </span>
        <h1 className="text-[#fff] text-[40px] font-[700] box-border">
          Make your Projects
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-[15px]">
        {projectList.map((project) => (
          <ProjectItem key={project._id} projectData={project}></ProjectItem>
        ))}
      </div>
    </div>
  );
};

export default PopularProject;
