import React from "react";

const ReviewItem = ({ data }) => {
  return (
    <div className="flex-review-item rounded-[10px] p-[20px] bg-[#222] border-solid border-[2px] border-[#111] hover-reviewitem">
      <p className="text-[14px] pb-[10px] text-[#aaa] ">
       {data.review}
      </p>
      <div className="flex-review-user">
        <img src={data.user.avatarUrl} alt="" className="h-[50px] w-[50px] rounded-[50%]" />
        <div className="">
          <h3 className="text-[17px] text-[#fff] font-[700]">{data.user.name}</h3>
          <span className="text-[15px] text-[#aaa]">Volunteer</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
