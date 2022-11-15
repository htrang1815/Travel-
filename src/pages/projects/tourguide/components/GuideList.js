import React from "react";
import ButtonLoadMore from "../../../../components/button/ButtonLoadMore";
import GuideItem from "../../../../components/guides/GuideItem";
import { useSelector } from "react-redux";

const GuideList = () => {

  const { guideList } = useSelector((state) => state.guideList);
  console.log("guideList",guideList);
  return (
    <div className="py-[30px] px-[9%]">
      <div className="w-full py-[30px] grid grid-cols-4 grid-rows-2 gap-[15px]  mb-[30px]">
      {guideList?.map((guide) => (
          <GuideItem  key={guide._id} guideData={guide}></GuideItem>
        ))}
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
