import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviewInTour } from "../../../../../store/review/reviewSlice";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const { reviewInATour } = useSelector((state) => state.review);
  // console.log(reviewInATour);

  useEffect(() => {
    dispatch(getReviewInTour(projectId));
  }, [dispatch, projectId]);

  return (
    <div>
      {reviewInATour?.map((review) => (
        <ReviewItem key={review._id} review={review}>
          {review.review}{" "}
        </ReviewItem>
      ))}
    </div>
  );
};

export default ReviewList;
