import React from "react";
import ButtonProjects from "../../../components/button/ButtonProjects";

const Banner = () => {
  return (
    <div className="bg-banner py-[30px] px-[20px] text-center">
      <div>
        <span className="text-primary text-[20px]">start your adventures</span>
        <h3 className="text-[#fff] text-[40px] font-[700] mt-[10px]">
          Let's Explore This World
        </h3>
        <p className="text-[#aaa] text-[14px] max-w-[600px] my-[10px] mx-auto leading-[28px]">
          “There are no foreign lands. It is the traveler only who is foreign” –
          Robert Louis Stevenson
        </p>
        <ButtonProjects
          text="Book Now"
          className="text-primary"
        ></ButtonProjects>
      </div>
    </div>
  );
};

export default Banner;
