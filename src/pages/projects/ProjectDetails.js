import React from "react";
import ButtonBack from "../../components/button/ButtonBack";
import ButtonBook from "../../components/button/ButtonBook";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import ContentDetail from "./projectdetail/ContentDetail";
import ImgDetail from "./projectdetail/contentdetail/ImgDetail";

const ProjectDetails = () => {
  return (
    <div className="bg-[#111] p-0 m-0 overflow-x-hidden ">
      <Header></Header>
      <div className="py-[30px] px-[9%]">
        <div className="mt-[90px]">
          <div className="flex items-center justify-between">
            <ButtonBack
              text="back to home"
              className="rounded-[12px] "
            ></ButtonBack>
            <ButtonBook text="Book now" className="rounded-[12px]"></ButtonBook>
          </div>
          <ImgDetail></ImgDetail>
          <ContentDetail></ContentDetail>
        </div>
      </div>
      <Footer className="bg-[#222]"></Footer>
    </div>
  );
};

export default ProjectDetails;
