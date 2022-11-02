import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StarIcon = () => {
  return (
    <div className="text-primary mb-[10px]">
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
    </div>
  );
};

export default StarIcon;
