import React from "react";

const PosterBLog = () => {
  return (
    <div className="my-0 mx-auto mt-[78px] w-[90%] min-h-[80vh] bg-bg-blog bg-no-repeat bg-cover rounded-[10px] relative flex items-center justify-center ">
      <div className="max-w-[57%] absolute px-[20px] left-[5%] bg-[#111] bg-opacity-40">
        <h3 className="text-[45px] font-[800] text-primary">
          <a href="#">My Favorite Skincare Gift Sets On Holiday Sale</a>
        </h3>
        <p className="text-[#fff]  mb-3">
          Import demos, pages or elements separately with a click as needed.
          Single WordPress license gives you access to all of...{" "}
        </p>
        <span className="mb-3 ">
          <span className="text-[#fff]  mr-3">By Michael</span>
          <span className="text-[#fff] ">July 29, 2022</span>
        </span>
        <button className="block text-primary hover-readmore mt-[20px] text-[12px] font-[700] uppercase h-[45px] px-[35px] rounded-[4px] bg-[#111] border-[2px] border-solid border-[#ffbc4b] ">Read more</button>
      </div>
    </div>
  );
};

export default PosterBLog;
