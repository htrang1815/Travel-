import React, { useEffect, useState } from "react";
import Header from "../home/header/Header";
import Poster from "./poster/Poster";
import "./project.scss";
import "../../index.scss";
import Search from "./search/Search";
import ProjectList from "./projectlist/ProjectList";
import TourGuide from "./tourguide/TourGuide";
import Footer from "../home/footer/Footer";

const ProjectsPage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="bg-[#111] p-0 m-0 overflow-x-hidden ">
      
      {/* 
      <button className="text-[#ccc]" onClick={handleShow}>
        aaaaaaa
      </button>
       {show && (
        <>
        </> )*/}
          <Header></Header>
          <Poster></Poster>
          <Search></Search>
          <ProjectList></ProjectList>
          <TourGuide className='py-[30px] px-[9%] '></TourGuide>
          <Footer className="bg-[#222]"></Footer>
    </div>
  );
};

export default ProjectsPage;
