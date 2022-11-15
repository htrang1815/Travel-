import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";


const ProfileGuide = () => {
  const { guide } = useSelector((state) => state.guide);
  return (
    <div className="px-[9%] py-[20px] pt-[40px]">
      <div>
        <span className="text-14px block mb-4">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-primary mr-3"
          ></FontAwesomeIcon>
          {guide?.address}
        </span>
        <span className="text-14px block mb-4">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-primary mr-3"
          ></FontAwesomeIcon>
           {guide?.language}
        </span>
      </div>
    </div>
  );
};

export default ProfileGuide;
