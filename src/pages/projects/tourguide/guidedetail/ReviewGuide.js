import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonLoadMore from "../../../../components/button/ButtonLoadMore";
import ReviewItem from "./ReviewItem";
import { getReviewInAGuide } from "../../../../store/reviewGuide/reviewSlice";
import InputRiews from "../../projectdetail/contentdetail/review/InputRiews";

const ReviewGuide = ({ guideName, className }) => {
  const dispatch = useDispatch();
  const { guideId } = useParams();

  const { reviewInAGuide } = useSelector((state) => state.reviewGuide);
  useEffect(() => {
    dispatch(getReviewInAGuide(guideId));
  }, [dispatch, guideId]);

  return (
    <div
      className={`${className} border border-solid border-primary min-h-[40vh] flex flex-col rounded-[10px] pb-[10px] px-[8px]`}
    >
      <div className="pt-[10px]">
        <InputRiews className="mb-[10px]"></InputRiews>
        <h2 className="text-[16px] text-primary font-[500] pb-[10px]">
          Client say about {guideName}
        </h2>
      </div>
      <div className="review-list px-[10px] h-auto flex-grow overflow-hidden ">
        {reviewInAGuide?.map((review) => (
          <ReviewItem key={review._id} review={review}>
            {review.review}{" "}
          </ReviewItem>
        ))}
        {/* <div className="">
          <ReviewItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
            aspernatur rem provident quis ducimus blanditiis tempora illum
            corporis eius, dignissimos, vitae architecto! Voluptatum placeat
            quidem fugit quam laborum debitis.
          </ReviewItem>
          <ReviewItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
            aspernatur rem provident quis ducimus blanditiis tempora illum
            corporis eius, dignissimos, vitae architecto! Voluptatum placeat
            quidem fugit quam laborum debitis.
          </ReviewItem>
          <ReviewItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
            aspernatur rem provident quis ducimus blanditiis tempora illum
            corporis eius, dignissimos, vitae architecto! Voluptatum placeat
            quidem fugit quam laborum debitis.
          </ReviewItem>
          <ReviewItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
            aspernatur rem provident quis ducimus blanditiis tempora illum
            corporis eius, dignissimos, vitae architecto! Voluptatum placeat
            quidem fugit quam laborum debitis.
          </ReviewItem>
          <ReviewItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
            aspernatur rem provident quis ducimus blanditiis tempora illum
            corporis eius, dignissimos, vitae architecto! Voluptatum placeat
            quidem fugit quam laborum debitis.
          </ReviewItem>
          <ReviewItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
            aspernatur rem provident quis ducimus blanditiis tempora illum
            corporis eius, dignissimos, vitae architecto! Voluptatum placeat
            quidem fugit quam laborum debitis.
          </ReviewItem>
        </div> */}
      </div>
      <div className="text-center">
        <ButtonLoadMore
          text="Load more"
          className="text-primary"
        ></ButtonLoadMore>
      </div>
    </div>
  );
};

export default ReviewGuide;
