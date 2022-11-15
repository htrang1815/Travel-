import React from "react";
import GuideItem from "../../../components/guides/GuideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

const TourGuide = ({ className }) => {
  const { guideList } = useSelector((state) => state.guideList);
  return (
    <div className={`${className} recommend py-[30px] px-[9%]`}>
      <div className="text-left  mb-[20px]">
        <span className="text-primary text-[18px]">recommened</span>
        <h1 className="text-[30px] text-[#fff] font-[600]">
          You maybe also like guides
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
        {guideList?.map((guide) => (
          <SwiperSlide>
            {" "}
            <GuideItem  key={guide._id} guideData={guide}></GuideItem>
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

export default TourGuide;
