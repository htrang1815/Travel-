import React from "react";
import TourGuide from "../tourguide/TourGuide";
import DescribeDetail from "./contentdetail/DescribeDetail";
import MapDetail from "./contentdetail/MapDetail";
import Reviews from "./contentdetail/Reviews";
import ShareDetail from "./contentdetail/ShareDetail";
import TitleDetail from "./contentdetail/TitleDetail";
const ContentDetail = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-[40px] ">
        <div className="describe col-span-2">
          <TitleDetail></TitleDetail>
          <DescribeDetail></DescribeDetail>
        </div>
        <div>
          <ShareDetail></ShareDetail>
          <MapDetail></MapDetail>
        </div>
      </div>
      <TourGuide className="w-full py-[80px]"></TourGuide>
      <Reviews></Reviews>
    </div>
  );
};

export default ContentDetail;
