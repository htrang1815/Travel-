import React from "react";
import SliderContent from "./SliderContent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
// Để slider nằm trên 1 hàng ta sẽ import scss của nó
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div>
      <Swiper
        // Slide tự động chạy
        autoplay={{ delay: 5000 }}
        spaceBetween={50}
        // Số slide
        slidesPerView={1}
        modules={[Navigation, A11y, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        grabCursor={true}
        // Chạy hết slide quay lại slide ban đầu (đỡ giật)
        loop={true}
      >
        <SwiperSlide>
          <SliderContent className='bg-bg-slider1'></SliderContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent className='bg-bg-slider2'></SliderContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent className='bg-bg-slider3'></SliderContent>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent className='bg-bg-slider4'></SliderContent>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
