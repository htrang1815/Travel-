import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import StarIcon from "../../../../../components/icon/StarIcon";
import InputRiews from "./InputRiews";

const OverallReview = () => {
  const { project } = useSelector((state) => state.project);
  return (
    <div>
      <h3 className="text-primary text-[18px] mb-[20px]">
        Review about this place{" "}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-end justify-between mb-[30px] w-[30%]">
          <div className="text-center">
            <span className="text-[#ccc] text-[14px] mb-[10px]">
              Overall rating
            </span>
            <h2 className="text-[24px] font-[600] text-primary mb-[10px]">
            {project?.ratingAverage}
            </h2>
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
                  fontSize : 20,
                }}
                // sx={20}
                defaultValue={project?.ratingAverage || 4.5}
                precision={0.5}
              ></Rating>
            </div>
            <span className="text-[#ccc] text-[14px]">
              Base on {project?.ratingsQuantity || 0} reviews
            </span>
          </div>
          <InputRiews></InputRiews>
        </div>
        <div>
          <button className="p-3 text-primary border border-solid border-primary mr-[12px] rounded-[12px]">
            Oldest
          </button>
          <button className="p-3 text-primary border border-solid border-primary rounded-[12px]">
            Latest
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverallReview;
