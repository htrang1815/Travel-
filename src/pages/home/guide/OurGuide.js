import React from "react";
import GuideItem from "../../../components/guides/GuideItem"

const OurGuide = () => {
  return (
    <div className="py-[30px] px-[9%] ">
      <div className="text-center mb-[20px]">
        <span className="text-primary text-[20px] box-border">Our Guide</span>
        <h1 className="text-[#fff] text-[40px] font-[700] box-border">
          Make your Experience
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-[15px]">
      <GuideItem></GuideItem>      
      <GuideItem></GuideItem>      
      <GuideItem></GuideItem>      
      <GuideItem></GuideItem>      
      <GuideItem></GuideItem>      
      <GuideItem></GuideItem>      
      <GuideItem></GuideItem>      
      <GuideItem></GuideItem>      
      </div>
    </div>
  );
};

export default OurGuide;
