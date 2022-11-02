import React from "react";
import projectImg from "../../assets/images/projects/about-img.jpg";
import ButtonDetailProjects from "../button/ButtonDetailProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const ProjectItem = () => {
  return (
    <div className="bg-[#222] rounded-[10px] overflow-hidden hover-item">
      <div className="w-full h-[200px]">
        <img src={projectImg} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="text-[#fff] p-[20px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
              <div className="text-primary text-[14px] mr-[5px]">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <span className="text-[14px] font-[600] mr-[5px]">4.8</span>
              <span className="text-[14px] text-[#aaa]">(362)</span>
          </div>
          <span className="text-[14px]">35+Guides</span>
        </div>
        <h3 className="text-[16px] font-[600] mb-4">Small-Group Yosemite Day Tour from san francisco</h3>
        <span className="text-14px block mb-4">
          <FontAwesomeIcon icon={faLocationDot} className='text-primary mr-3'></FontAwesomeIcon>
          New york city, united states
        </span>
        <span className="text-14px block mb-4">
          <FontAwesomeIcon icon={faCalendarDay} className='text-primary mr-3'></FontAwesomeIcon>
          November 28th 2022 
        </span>
        <span className="block font-[500] mb-4">$478.00 </span>
        <div className="text-center">
          <ButtonDetailProjects text="Read More"></ButtonDetailProjects>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
