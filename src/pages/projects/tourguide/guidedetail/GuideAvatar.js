import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const GuideAvatar = ({ className }) => {
  const { guide } = useSelector((state) => state.guide);
  console.log(guide);
  return (
    <div className={`${className} flex items-end justify-between min-w-[20%]`}>
      <img
        src={guide?.avatarUrl}
        alt=""
        className={`rounded-full w-[120px] h-[120px] mr-[15px] object-cover`}
      />
      <div>
        <span className="text-primary text-[24px] font-[600] pt-[60px]">
          {guide?.name}
        </span>
        <div className="flex">
          <div className="text-primary">
            <Rating
              readOnly
              icon={
                <FontAwesomeIcon
                  icon={faStar}
                  color="#ffbc4a"
                ></FontAwesomeIcon>
              }
              emptyIcon={
                <FontAwesomeIcon
                  icon={faStar}
                  color="#aaaaaa"
                ></FontAwesomeIcon>
              }
              style={{
                color: "#ffbc4a",
                fontSize: "20",
              }}
              value={guide?.ratingAverage || 0}
              precision={0.5}
            ></Rating>
          </div>
          <span className="text-[14px] font-[600] text-[#aaa] mr-[10px]">
            {guide?.ratingAverage}
          </span>
          <span className="text-[14px] text-[#aaa]">
            ({guide?.ratingsQuantity})
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuideAvatar;
