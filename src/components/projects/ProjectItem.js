import React from "react";

import ButtonDetailProjects from "../button/ButtonDetailProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({ projectData }) => {
  return (
    <div className="bg-[#222] rounded-[10px] overflow-hidden hover-item">
      <div className="w-full h-[200px]">
        <img
          src={
            projectData?.images &&
            require(`../../assets/tour/${projectData?.images[0]}`)
          }
          alt=""
          className="object-cover w-full h-full cursor-pointer"
        />
      </div>
      <div className="text-[#fff] p-[20px] flex flex-col">
        <div className="grow h-[182px]">
          <div className="flex justify-between items-center mb-4">
            <div className="flex">
              <div className="text-primary text-[14px] mr-[5px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <span className="text-[14px] font-[600] mr-[5px]">
                {projectData?.ratingAverage}
              </span>
              <span className="text-[14px] text-[#aaa]">
                ({projectData?.ratingsQuantity})
              </span>
            </div>
            <span className="text-[14px]">
              {projectData?.maxGroupSize}+Guides
            </span>
          </div>
          <h3 className="text-[16px] font-[600] mb-4 text-wrap-title">{projectData?.name}</h3>
          <span className="text-14px block mb-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-primary mr-3"
            ></FontAwesomeIcon>
            {projectData?.startLocation?.description}
          </span>
          <span className="text-14px block mb-4">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="text-primary mr-3"
            ></FontAwesomeIcon>
            November 28th 2022
          </span>
          <span className="block font-[500] mb-4">
            $ {projectData?.price}.00{" "}
          </span>
        </div>
        <div className="text-center block flex-none">
          <ButtonDetailProjects
            text="Read More"
            projectId={projectData?._id}
            
          ></ButtonDetailProjects>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
