import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { useDispatch } from "react-redux";
import { setShowShare } from "../../../../store/showModal/showSlice";

const ShareDetail = ({className}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={`save&share flex justify-end ${className}`}>
        <button className="save px-[10px] py-[5px] text-primary text-[14px] border border-solid border-[#ffbc4b] rounded-lg hover-button mr-[10px]">
          <FontAwesomeIcon
            className=" mr-[5px]"
            icon={faHeart}
          ></FontAwesomeIcon>
          Save
        </button>
        <button
          className=" share px-[10px] py-[5px] text-primary text-[14px] border border-solid border-[#ffbc4b] rounded-lg hover-button"
          onClick={() => {
            dispatch(setShowShare(true));
          }}
        >
          <FontAwesomeIcon
            className=" mr-[5px]"
            icon={faShareNodes}
          ></FontAwesomeIcon>
          Share
        </button>
      </div>
    </>
  );
};

export default ShareDetail;
