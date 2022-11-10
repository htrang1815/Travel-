import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import StarIcon from "../../../../components/icon/StarIcon";

const ProfileGuide = () => {
  return (
    <div className="px-[9%] py-[20px] pt-[40px]">
      <div>
        <span className="text-14px block mb-4">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-primary mr-3"
          ></FontAwesomeIcon>
          New york city, united states
        </span>
        <span className="text-14px block mb-4">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-primary mr-3"
          ></FontAwesomeIcon>
          English, French +3
        </span>
      </div>
    </div>
  );
};

export default ProfileGuide;
