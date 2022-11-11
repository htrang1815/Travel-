import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProjectList } from "../../store/projectList/slice";
import AboutUs from "./about/AboutUs";
import Advance from "./advance/Advance";
import Banner from "./banner/Banner";
import Blog from "./blog/Blog";
import Footer from "./footer/Footer";
import Gallery from "./gallery/Gallery";
import Header from "./header/Header";
import PopularProject from "./popular-project/PopularProject";
import Review from "./review/Review";
import Slider from "./slider/Slider";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectList());
  }, [dispatch]);
  return (
    <div className="bg-[#111] p-0 m-0 overflow-x-hidden ">
      <Header></Header>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <PopularProject></PopularProject>
      <Blog></Blog>
      <Advance></Advance>
      <Review></Review>
      <Gallery></Gallery>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
