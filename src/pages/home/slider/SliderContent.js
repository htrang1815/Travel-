import React from "react";
import ButtonDetailProjects from "../../../components/button/ButtonProjects";

const SliderContent = ({ className }) => {
  return (
    <div
      className={`my-0 mx-auto mt-[90px] w-[90%] min-h-[80vh] bg-bg-slider1 rounded-[10px] bg-cover relative flex items-center justify-end ${className}`}
    >
      <div className="absolute block w-[500px] p-0 m-0 mr-[50px] capitalize">
        <span className="block text-[40px] font-[400] text-[#111]">
          Never Stop{" "}
        </span>
        <h3 className="font-bold text-[60px] text-[#FFBC4B] uppercase ">
          EXPLORING{" "}
        </h3>
        <p className=" text-[15px] leading-[26px] text-[#111]">
          Travel isn’t always pretty. It isn’t always comfortable. Sometimes it
          hurts, it even breaks your heart. But that’s okay. The journey changes
          you; it should change you. It leaves marks on your memory, on your
          consciousness, on your heart, and on your body. Hopefully, you leave something good behind.
        </p>
        <ButtonDetailProjects
          className="mt-3 border-[#111] text-[#111]"
          text="Get started"
        ></ButtonDetailProjects>
      </div>
    </div>
  );
};

export default SliderContent;
