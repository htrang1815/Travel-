import React from "react";
import UserInfo from "../../../../../components/user/UserInfo";
import imgreview from "../../../../../assets/images/gallery/gallery-img-1.jpg";
import { Rating } from "@mui/material";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewItem = ({ children, review }) => {
  console.log(review);
  return (
    <div className="mb-[20px]">
      <div className="w-full h-[1px] bg-primary mb-[20px]"></div>
      {/* <StarIcon></StarIcon> */}
      <Rating
        readOnly
        icon={<FontAwesomeIcon icon={faStar} color="#ffbc4a"></FontAwesomeIcon>}
        emptyIcon={
          <FontAwesomeIcon icon={faStar} color="#aaaaaa"></FontAwesomeIcon>
        }
        style={{
          color: "#ffbc4a",
          fontSize: "20px",
        }}
        defaultValue={review?.rating}
        precision={0.5}
      ></Rating>
      <div className="mb-[10px] w-full flex items-center justify-between overflow-clip">
        <p className="w-[80%]">{review?.review}</p>
        {review?.image && review?.image?.length !== 0 ? (
          <div className="w-[20%] h-[80px] flex justify-end gap-3">
            <img src={review?.image} className=" object-cover w-[80%]" alt="" />
          </div>
        ) : (
          ""
        )}

        {/* <img src={imgreview} className=' object-cover' alt="" /> */}
      </div>
      <UserInfo userInfo={review?.user}></UserInfo>
    </div>
  );
};

export default ReviewItem;
