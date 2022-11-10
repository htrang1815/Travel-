import React from "react";
import avt1 from "../../../../assets/images/guides/pic-2.png";
import StarIcon from "../../../../components/icon/StarIcon";

const GuideAvatar = ({ className, guideName }) => {
  return (
    <div
      className={`${className} flex items-end justify-between min-w-[20%]`}
    >
      <img
        src={avt1}
        alt=""
        className={`rounded-full w-[120px] h-[120px] mr-[15px]`}
      />
      <div>
        <span className="text-primary text-[24px] font-[600] pt-[60px]">
          {guideName}
        </span>
        <div className="flex">
          <StarIcon className="mr-[10px]"></StarIcon>
          <span className="text-[14px] font-[600] text-[#aaa] mr-[10px]">
            4.8/5
          </span>
          <span className="text-[14px] text-[#aaa]">(135)</span>
        </div>
      </div>
    </div>
  );
};

export default GuideAvatar;
