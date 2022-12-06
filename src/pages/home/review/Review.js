import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pic1 from "../../../assets/images/reviews/pic-1.png";
import pic2 from "../../../assets/images/reviews/pic-2.png";
import pic3 from "../../../assets/images/reviews/pic-3.png";
import pic4 from "../../../assets/images/reviews/pic-4.png";
import { getReviewList } from "../../../store/reviewList/slice";
import ReviewItem from "./ReviewItem";

const Review = () => {
  const { reviewList } = useSelector((state) => state.reviewList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewList());
  }, [dispatch]);

  const data = reviewList;
  const currentItems = data.slice(0, 4);
  //   console.log(currentItems);
  return (
    <div className="py-[30px] px-[9%] flex-review">
      <div className="mb-[20px] flex-review-content text-left">
        <span className="text-primary text-[20px] ">Reviews</span>
        <h1 className="text-[#fff] text-[30px] font-[700] ">
          Good News From Our Clients
        </h1>
        <p className="text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]">
          Travel takes us out of our comfort zones and inspires us to see, taste
          and try new things. It constantly challenges us, not only to adapt to
          and explore new surroundings, to share new and meaningful experiences
          with friends and loved ones
        </p>
      </div>
      <div className="flex-review-container">
        {currentItems?.map((review) => (
          <ReviewItem key={review._id} data={review}></ReviewItem>
        ))}
      </div>
    </div>
  );
};

export default Review;
