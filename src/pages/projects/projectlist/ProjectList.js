import React from "react";
import { useSelector } from "react-redux";
import ButtonLoadMore from "../../../components/button/ButtonLoadMore";
import ProjectItem from "../../../components/projects/ProjectItem";

const ProjectList = () => {
  const { projectList } = useSelector((state) => state.projectList);

  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full  grid grid-cols-4 grid-rows-3 gap-[15px]  mb-[30px]">
        {projectList.map((project) => (
          <ProjectItem key={project._id} projectData={project}></ProjectItem>
        ))}
      </div>
      <div className="text-center">
        <ButtonLoadMore
          className=" text-primary"
          text="Load More"
        ></ButtonLoadMore>
      </div>
    </div>
  );
};

export default ProjectList;
