import React, { useEffect } from "react";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import Poster from "../projects/poster/Poster";
import GuideList from "../projects/tourguide/components/GuideList";
import Recommend from "../projects/tourguide/components/Recommend";
import { useDispatch } from "react-redux";
import {getGuideList} from "../../store/guideList/slice"
import { getProjectList } from "../../store/projectList/slice";

const GuidePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuideList());
    dispatch(getProjectList())
  }, [dispatch]);
  // console.log("getGuideList : ",getGuideList());
  return (
    <div className="bg-[#111] p-0 m-0 overflow-x-hidden ">
      <Header></Header>
      <Poster
        className="bg-bg-poster-guide"
        title="Explore amazing places with the best guide"
      ></Poster>
      <GuideList></GuideList>
      <Recommend className="py-[30px] px-[9%]"></Recommend>
      <Footer className="bg-[#222]"></Footer>
    </div>
  );
};

export default GuidePage;
