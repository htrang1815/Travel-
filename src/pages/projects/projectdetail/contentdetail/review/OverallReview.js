import React from "react";
import ButtonFilter from "../../../../../components/button/ButtonFilter";
import StarIcon from "../../../../../components/icon/StarIcon";
import InputRiews from "./InputRiews";

const OverallReview = () => {
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
              4.7 /5
            </h2>
            <StarIcon></StarIcon>
            <span className="text-[#ccc] text-[14px]">Base on 663 reviews</span>
          </div>
            <InputRiews></InputRiews>
        </div>
          <div>
            <ButtonFilter>Alls</ButtonFilter>
            <ButtonFilter>Latest</ButtonFilter>
          </div>
      </div>
    </div>
  );
};

export default OverallReview;
