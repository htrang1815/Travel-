import React from "react";

const Poster = ({ title }) => {
  return (
    <div className="my-0 mx-auto mt-[78px] w-[90%] min-h-[80vh] bg-poster rounded-[10px]  relative flex items-center justify-center">
      <div className="absolute block w-[600px] p-0 m-0 mr-[50px] capitalize text-center">
        <h3 className="text-[50px] font-[700] text-[#fff]">{title}</h3>
      </div>
    </div>
  );
};

export default Poster;
