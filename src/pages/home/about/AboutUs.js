import React, { useState } from "react";
import ButtonAbout from "../../../components/button/ButtonAbout";
import videoblog from "../../../assets/videos/Sea - 6399.mp4";
import videoblog1 from "../../../assets/videos/about-vid-2.mp4";
import videoblog2 from "../../../assets/videos/about-vid-3.mp4";

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
      title: "Nature's Majesty Awaits You",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa quo in cumque saepe quaerat earum ducimus exercitationem iusto reiciendis quas velit, dolorum soluta sunt repudiandae voluptatibus, perspiciatis officiis nulla?",
    },
    {
      id: 1,
      video: videoblog1,
      title: "Nature's Majesty Awaits ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa quo in cumque saepe quaerat earum ducimus exercitationem iusto reiciendis quas velit, dolorum soluta sunt repudiandae voluptatibus, perspiciatis officiis nulla?",
    },
    {
      id: 2,
      video: videoblog2,
      title: "Nature's Majesty",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa quo in cumque saepe quaerat earum ducimus exercitationem iusto reiciendis quas velit, dolorum soluta sunt repudiandae voluptatibus, perspiciatis officiis nulla?",
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
