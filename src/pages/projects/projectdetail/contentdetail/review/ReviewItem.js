import React from "react";
import StarIcon from "../../../../../components/icon/StarIcon";
import UserInfo from "../../../../../components/user/UserInfo";
import imgreview from "../../../../../assets/images/gallery/gallery-img-1.jpg";

const ReviewItem = ({children}) => {
  return (
    <div className="mb-[20px]">
      <div className="w-full h-[1px] bg-primary mb-[20px]"></div>
      <StarIcon></StarIcon>
      <div className="mb-[10px] w-full flex items-center justify-between overflow-clip">
        <p className="w-[80%]">
          {children}
        </p>
        <div className="w-[20%] h-[80px] flex justify-end gap-3">
            <img src={imgreview} className=' object-cover w-[80%]' alt="" />
            {/* <img src={imgreview} className=' object-cover' alt="" /> */}
        </div>
      </div>
      <UserInfo></UserInfo>
    </div>
  );
};

export default ReviewItem;
