import React from "react";
import ProjectItem from "../../../../components/projects/ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Recommend = ({ className }) => {
  return (
    <div className={`${className} recommend`}>
      <div className="text-left  mb-[20px]">
        <span className="text-primary text-[18px]">recommened</span>
        <h1 className="text-[30px] text-[#fff] font-[600]">
          You maybe also like places
        </h1>
      </div>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
          <SwiperSlide> <ProjectItem></ProjectItem></SwiperSlide>
        </Swiper>
      </>

    </div>
  );
};

export default Recommend;
