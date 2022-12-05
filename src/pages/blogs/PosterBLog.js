import React from "react";
import ButtonWriteBlog from "../../components/button/ButtonWriteBlog";

const PosterBLog = () => {
  return (
    <div className="my-0 mx-auto mt-[67px] w-[90%] min-h-[80vh] bg-bg-blog bg-no-repeat bg-cover rounded-[10px] relative flex items-center justify-center ">
      <div className="max-w-[57%] absolute px-[20px] left-[5%] bg-[#111] bg-opacity-40 py-5">
        <h3 className="text-[45px] font-[800] text-primary">
          <a href="#">
          Share your experiences after your trip
          </a>
        </h3>
        <p className="text-[#fff]  mb-3">
          Import demos, pages or elements separately with a click as needed.
          Single WordPress license gives you access to all of...{" "}
        </p>
        <span className="mb-3 ">
          <span className="text-[#fff]  mr-3">By Michael</span>
          <span className="text-[#fff] ">July 29, 2022</span>
        </span>
        <ButtonWriteBlog></ButtonWriteBlog>
      </div>
    </div>
  );
};

export default PosterBLog;
