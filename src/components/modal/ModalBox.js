import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";

import { setShowMorePhoto } from "../../store/showModal/showSlice";

const ModalBox = () => {
  const { showMorePhoto, photo } = useSelector((state) => state.show);

  console.log(photo);
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 z-[1010] flex justify-center items-center visible opacity-100 transition ease-in duration-200 ${
        showMorePhoto ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute w-full h-full bg-[rgba(0,0,0,0.68)] z-[1010]"
        onClick={() => {
          dispatch(setShowMorePhoto(false));
        }}
      ></div>
      <div className="max-w-[800px] w-full absolute bg-white z-[1020] rounded-lg">
        <div>
          <Swiper
            slidesPerView={1}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            grabCursor={true}
          >
            {photo.map((img) => (
              <SwiperSlide key={img._id}>
                <img
                  src={img && require(`../../assets/tour/${img}`)}
                  alt=""
                  className="h-[600px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default ModalBox;
