import React from "react";
import { useSelector } from "react-redux";
import GuideItem from "../../../components/guides/GuideItem"

const OurGuide = () => {
  const { guideList } = useSelector((state) => state.guideList);
  console.log(guideList);
  return (
    <div className="py-[30px] px-[9%] ">
      <div className="text-center mb-[20px]">
        <span className="text-primary text-[20px] box-border">Our Guide</span>
        <h1 className="text-[#fff] text-[40px] font-[700] box-border">
          Make your Experience
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-[15px]">
      {guideList?.map((guide) => (
          <GuideItem  key={guide._id} guideData={guide}></GuideItem>
        ))}     
      </div>
    </div>
  );
};

export default OurGuide;
