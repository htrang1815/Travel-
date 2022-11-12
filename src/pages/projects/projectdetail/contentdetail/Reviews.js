import React from "react";
import { useSelector } from "react-redux";
import ButtonLoadMore from "../../../../components/button/ButtonLoadMore";
import InputRiews from "./review/InputRiews";
import OverallReview from "./review/OverallReview";
import ReviewList from "./review/ReviewList";

const Reviews = ({ className }) => {
  const { reviewInfo } = useSelector((state) => state.review);
  console.log(reviewInfo);

  return (
    <div className={`mb-[30px] py-[30px] px-[9%] ${className}`}>
      <OverallReview></OverallReview>
      <ReviewList></ReviewList>
      <div className="text-center">
        <ButtonLoadMore
          text="Load more"
          className="text-primary"
        ></ButtonLoadMore>
      </div>
    </div>
  );
};

export default Reviews;
