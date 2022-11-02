import {
  faCalendarDay,
  faHourglassStart,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TitleDetail = () => {
  return (
    <div className="mb-[30px]">
      <div className="title">
        <h2 className="text-[#fff] text-[26px] font-[700]">
          Small-group yosemite day tour from san francisco
        </h2>
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
            4.8
          </span>
          <span className="text-[14px] text-[#aaa]">(362)</span>
        </div>
        <div className="flex items-center ">
          <div className="mr-[10px]">
            <FontAwesomeIcon
              icon={faHourglassStart}
              className="text-primary text-[14px] mr-[5px]"
            ></FontAwesomeIcon>
            <span className="text-[14px] text-[#aaa]">5 days</span>
          </div>
          <div className="mr-[10px]">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-primary text-[14px] mr-[5px]"
            ></FontAwesomeIcon>
            <span className="text-[14px] text-[#aaa]">San Francisco, US</span>
          </div>
          <div className="mr-[10px]">
            <FontAwesomeIcon
              icon={faUser}
              className="text-primary text-[14px] mr-[5px]"
            ></FontAwesomeIcon>
            <span className="text-[14px] text-[#aaa]">Participants: 35</span>
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
