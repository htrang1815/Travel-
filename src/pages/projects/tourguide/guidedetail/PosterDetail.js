import React from "react";
import GuideAvatar from "./GuideAvatar";

const PosterDetail = ({ className }) => {
  return (
    <div className="relative h-[50vh]">
      <div
        className={`my-0 mx-auto w-[90%] min-h-[40vh] bg-bg-guide-detail rounded-[10px] bg-cover bg-left flex items-center justify-center ${className}`}
      >
        <div className="absolute left-[9%] bottom-0 flex items-end justify-between w-[82%]">
          <GuideAvatar
            className=""
            guideName="Wade Copper"
          ></GuideAvatar>
          <button type="submit" className="text-primary px-[10px] py-[5px] border border-solid border-[#ffbc4b] rounded-lg hover-button">Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default PosterDetail;
