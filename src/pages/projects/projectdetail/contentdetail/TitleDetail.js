import {
  faCalendarDay,
  faHourglassStart,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const TitleDetail = () => {
  const { project } = useSelector((state) => state.project);

  return (
    <div className="mb-[30px]">
      <div className="title">
        <h2 className="text-[#fff] text-[26px] font-[700]">{project?.name}</h2>
      </div>
      <div className="icon mb-[20px]">
        <div className="flex mb-[20px]">
          <div className="text-primary text-[14px] mr-[5px]">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <span className="text-[14px] font-[600] text-[#aaa] mr-[5px]">
            {project?.ratingAverage}
          </span>
          <span className="text-[14px] text-[#aaa]">
            ({project?.ratingsQuantity})
          </span>
        </div>
        <div className="flex items-center ">
          <div className="mr-[10px]">
            <FontAwesomeIcon
              icon={faHourglassStart}
              className="text-primary text-[14px] mr-[5px]"
            ></FontAwesomeIcon>
            <span className="text-[14px] text-[#aaa]">
              {project.duration} days
            </span>
          </div>
          <div className="mr-[10px]">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-primary text-[14px] mr-[5px]"
            ></FontAwesomeIcon>
            <span className="text-[14px] text-[#aaa]">
              {project?.startLocation?.description}
            </span>
          </div>
          <div className="mr-[10px]">
            <FontAwesomeIcon
              icon={faUser}
              className="text-primary text-[14px] mr-[5px]"
            ></FontAwesomeIcon>
            <span className="text-[14px] text-[#aaa]">
              Participants: {project.maxGroupSize}
            </span>
          </div>
          <div className="mr-[10px]">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="text-primary text-[14px] mr-[5px]"
            ></FontAwesomeIcon>
            <span className="text-[14px] text-[#aaa]">20 December, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleDetail;
