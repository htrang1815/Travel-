import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonBack from "../../components/button/ButtonBack";
import ButtonBook from "../../components/button/ButtonBook";
import { getProject } from "../../store/project/slice";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import ContentDetail from "./projectdetail/ContentDetail";
import ImgDetail from "./projectdetail/contentdetail/ImgDetail";
import ModalShare from "../../components/modal/ModalShare";
import ModalBox from "../../components/modal/ModalBox";
import TourGuide from "./tourguide/TourGuide";
import Reviews from "./projectdetail/contentdetail/Reviews";
import ModalReview from "../../components/modal/ModalReview";
import { joinPlace } from "../../realtimeCommunication/socketConnection";
import { getGuide } from "../../store/guide/slice";
import { getGuideList } from "../../store/guideList/slice";

const ProjectDetails = () => {
  const currentURL = window.location.href;

  const { projectId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    joinPlace(projectId);
  }, [projectId]);

  useEffect(() => {
    dispatch(getProject(projectId));
    dispatch(getGuideList());
  }, [dispatch, projectId]);

  return (
    <>
      <div className="bg-[#111] p-0 m-0 overflow-x-hidden ">
        <Header></Header>
        <div className="py-[30px] px-[9%]">
          <div className="mt-[90px]">
            <div className="flex items-center justify-between">
              <ButtonBack
                text="back to home"
                className="rounded-[12px] "
              ></ButtonBack>
              <ButtonBook
                text="Book now"
                className="rounded-[12px]"
              ></ButtonBook>
            </div>
            <ImgDetail></ImgDetail>
            <ContentDetail></ContentDetail>
          </div>
        </div>
        <TourGuide></TourGuide>
        <Reviews></Reviews>
        <Footer className="bg-[#222]"></Footer>
      </div>
      <ModalShare currentURL={currentURL}></ModalShare>
      <ModalBox></ModalBox>
      <ModalReview></ModalReview>
    </>
  );
};

export default ProjectDetails;
