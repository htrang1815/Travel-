import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { joinPlace } from "../../../realtimeCommunication/socketConnection";
import Footer from "../../home/footer/Footer";
import Header from "../../home/header/Header";
import { getGuide } from "../../../store/guide/slice";
import Reviews from "../projectdetail/contentdetail/Reviews";
import ControlDetail from "./guidedetail/ControlDetail";
import DescribeGuide from "./guidedetail/DescribeGuide";
import PosterDetail from "./guidedetail/PosterDetail";
import ProfileGuide from "./guidedetail/ProfileGuide";
import ReviewGuide from "./guidedetail/ReviewGuide";
import ModalContactGuide from "../../../components/modal/ModalContactGuide";
import ModalShare from "../../../components/modal/ModalShare";
import ModalError from "../../../components/modal/ModalError";
import RecommendPlace from "./guidedetail/RecommendPlace";
import { getProjectList } from "../../../store/projectList/slice";

const GuideDetail = () => {
  const { guideId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    joinPlace(guideId);
  }, [guideId]);

  useEffect(() => {
    dispatch(getGuide(guideId));
    dispatch(getProjectList());
  }, [dispatch, guideId]);

  return (
    <>
      <div className="bg-[#111] h-auto p-0 m-0 overflow-x-hidden ">
        <Header></Header>
        <ControlDetail></ControlDetail>
        <PosterDetail></PosterDetail>
        <ProfileGuide></ProfileGuide>
        <div className="px-[9%] py-[30px] grid grid-flow-row grid-cols-3 gap-[30px] mb-[20px]">
          <DescribeGuide className="col-span-2"></DescribeGuide>
          <ReviewGuide></ReviewGuide>
        </div>
        <RecommendPlace></RecommendPlace>
        <Footer className="bg-[#222]"></Footer>
      </div>
      <ModalContactGuide></ModalContactGuide>
      <ModalShare></ModalShare>
    </>
  );
};
export default GuideDetail;
