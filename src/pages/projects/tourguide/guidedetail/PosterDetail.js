import React from "react";
import { useSelector } from "react-redux";
import GuideAvatar from "./GuideAvatar";

const PosterDetail = ({ className }) => {
  const { guide } = useSelector((state) => state.guide);
  return (
    <div className="relative h-[50vh]">
      <div
        className={`my-0 mx-auto w-[90%] min-h-[40vh] bg-bg-guide-detail rounded-[10px] bg-cover bg-left flex items-center justify-center ${className}`}
      >
        <div className="absolute left-[9%] bottom-0 flex items-end justify-between w-[82%]">
          <GuideAvatar
            className=""
          ></GuideAvatar>
          
        </div>
      </div>
    </div>
  );
};

export default PosterDetail;
