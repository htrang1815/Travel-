import React from "react";
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
  return (
    <div className="bg-[#111] p-0 m-0 overflow-x-hidden ">
      <Header></Header>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <PopularProject></PopularProject>
      <Advance></Advance>
      <Gallery></Gallery>
      <Review></Review>
      <Blog></Blog>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
