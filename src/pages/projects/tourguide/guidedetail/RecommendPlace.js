import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import ProjectItem from "../../../../components/projects/ProjectItem";

const RecommendPlace = ({ className }) => {
  const { projectList } = useSelector((state) => state.projectList);
  console.log(projectList);
  return (
    <div className={`${className} recommend py-[30px] px-[9%]`}>
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
          {projectList?.map((project) => (
            <SwiperSlide key={project._id}>
              {" "}
              <ProjectItem projectData={project}></ProjectItem>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <GuideItem></GuideItem>
          </SwiperSlide> */}
        </Swiper>
      </>
    </div>
  );
};

export default RecommendPlace;
