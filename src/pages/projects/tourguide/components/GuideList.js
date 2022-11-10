import React from "react";
import ButtonLoadMore from "../../../../components/button/ButtonLoadMore";
import GuideItem from "../../../../components/guides/GuideItem";

const GuideList = () => {
  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full py-[30px] grid grid-cols-4 grid-rows-2 gap-[15px]  mb-[30px]">
        <GuideItem></GuideItem>
        <GuideItem></GuideItem>
        <GuideItem></GuideItem>
        <GuideItem></GuideItem>
        <GuideItem></GuideItem>
        <GuideItem></GuideItem>
        <GuideItem></GuideItem>
        <GuideItem></GuideItem>
      </div>
      <div className="text-center">
        <ButtonLoadMore
          className=" text-primary"
          text="Load More"
        ></ButtonLoadMore>
      </div>
    </div>
  );
};

export default GuideList;
