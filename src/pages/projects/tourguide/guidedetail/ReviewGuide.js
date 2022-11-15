import React from "react";
import ButtonLoadMore from "../../../../components/button/ButtonLoadMore";
import ReviewItem from "./ReviewItem";

const ReviewGuide = ({ guideName, className }) => {
  return (
    <div
      className={`${className} border border-solid border-primary min-h-[80vh] flex flex-col rounded-[10px] pb-[10px] px-[8px]`}
    >
      <div className="">
        <h2 className="text-[16px] text-primary font-[500] pb-[10px] py-[10px]">
          Client say about {guideName}
        </h2>
      </div>
      <div className="review-list px-[10px] h-auto flex-grow overflow-hidden ">
        <div className="">
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
        </div>
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
