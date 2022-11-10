import React from "react";
import Footer from "../../home/footer/Footer";
import Header from "../../home/header/Header";
import Reviews from "../projectdetail/contentdetail/Reviews";
import ControlDetail from "./guidedetail/ControlDetail";
import DescribeGuide from "./guidedetail/DescribeGuide";
import PosterDetail from "./guidedetail/PosterDetail";
import ProfileGuide from "./guidedetail/ProfileGuide";
import ReviewGuide from "./guidedetail/ReviewGuide";

const GuideDetail = () => {
  return (
    <div className="bg-[#111] h-auto p-0 m-0 overflow-x-hidden ">
      <Header></Header>
      <ControlDetail></ControlDetail>
      <PosterDetail></PosterDetail>
      <ProfileGuide></ProfileGuide>
      <div className="px-[9%] py-[30px] grid grid-cols-3 gap-[30px]">
        <DescribeGuide className="col-span-2"></DescribeGuide>
        <ReviewGuide></ReviewGuide>
      </div>
      <Footer className='bg-[#222]'></Footer>
    </div>
  );
};
export default GuideDetail;
