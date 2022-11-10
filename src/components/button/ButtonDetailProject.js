import React from "react";
import { useNavigate } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonDetailProjects = ({ className, text, projectId }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`text-[17px] text-primary ${className}`}
      onClick={() => {
        window.scrollTo(10, 0);
        navigate(`/project/${projectId}`);
      }}
    >
      {text}
      <FontAwesomeIcon icon={faAngleRight} className="pl-[5px] font-[900]" />
    </button>
  );
};

export default ButtonDetailProjects;
