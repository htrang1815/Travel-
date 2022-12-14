import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getGuideList } from "../../store/guideList/slice";
import ModalAlert from "../../components/modal/ModalAlert";
import ModalBooking from "../../components/modal/ModalBooking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { setShowModalBooking } from "../../store/showModal/showSlice";
// import { getGuide } from "../../store/guide/slice";
// import { setSaveFavourite } from "../../store/showModal/showSlice";
// import axios from "axios";
// import domain from "../../utils/common";

const ProjectDetails = () => {
  const currentURL = window.location.href;
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { showModalBooking } = useSelector((state) => state.show);
  useEffect(() => {
    joinPlace(projectId);
  }, [projectId]);

  useEffect(() => {
    dispatch(getProject(projectId));
    dispatch(getGuideList());
  }, [dispatch, projectId]);

  console.log(showModalBooking);

  return (
    <>
      <div className="bg-[#fff] p-0 m-0 overflow-x-hidden ">
        <Header></Header>
        <div className="py-[30px] px-[9%]">
          <div className="mt-[90px]">
            <div className="flex items-center justify-between">
              <ButtonBack
                text="back to page"
                className="rounded-[12px] "
              ></ButtonBack>
              <button
                className="rounded-[12px] mt-0 text-[14px] font-[500] text-primary px-[15px] py-[10px] border-[2px] border-solid  border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit flex items-center justify-between"
                onClick={() => {
                  dispatch(setShowModalBooking(true));
                }}
              >
                Book now
                <FontAwesomeIcon
                  className="text-[14px] ml-3"
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </button>
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
      <ModalAlert></ModalAlert>
      <ModalBooking></ModalBooking>
    </>
  );
};

export default ProjectDetails;
