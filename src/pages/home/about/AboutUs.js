import React, { useState } from "react";
import ButtonAbout from "../../../components/button/ButtonAbout";
import videoblog from "../../../assets/videos/video-1.mp4";
import videoblog1 from "../../../assets/videos/video-2.mp4";
import videoblog2 from "../../../assets/videos/video-3.mp4";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Pagination, Navigation } from "swiper";

const AboutUs = () => {
  const aboutItem = [
    {
      id: 0,
      video: videoblog,
      title: "Travel to meet different cultures",
      content:
        "Travel exposes us to different cultures and ancient traditions and through these authentic encounters, we learn to embrace and celebrate both our similarities and our differences. Travel teaches us about humanity and gives us an appreciation, understanding and respect for different points of view and ways of life.",
    },
    {
      id: 1,
      video: videoblog1,
      title: "Travel to learn",
      content:
        "Not all classrooms have four walls and travel is the best way to immerse yourself in geography, history, culture, gastronomy, languages, biology … you name it. Travel enriches the mind and educates us far beyond any textbook or travel guide. Not only do curious travellers learn about different landscapes, languages and lifestyles;",
    },
    {
      id: 2,
      video: videoblog2,
      title: "Travel to relax",
      content:
        "Our lives are time-starved and technology-driven and, let’s be honest, it’s not often that we actually take the necessary time to de-stress and truly switch off. Travel allows us to escape life’s daily demands, dramas and deadlines and enables us to clear our minds.",
    },
  ];
  return (
    <div className="aboutus cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {aboutItem.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" flex flex-row items-center gap-5 mt-[50px] py-[30px] px-[9%] transition-about">
              <div className="mr-[10px]">
                <video
                  src={item.video}
                  muted
                  autoPlay
                  loop
                  className="w-full rounded-[10px] object-contain"
                ></video>
                <div className="text-center px-0 py-[20px] block ">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mb-[50px]">
                <span className="text-primary text-[20px]">
                  Why choose us ?
                </span>
                <h3 className="text-[#fff] text-[40px] mt-[5px] font-[700]">
                  {item.title}
                </h3>
                <p className="text-[#aaa] text-[14px] py-[10px] leading-[28px]">
                  {item.content}
                </p>
                <ButtonAbout
                  className="mt-[10px]"
                  text="Read More"
                ></ButtonAbout>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutUs;
