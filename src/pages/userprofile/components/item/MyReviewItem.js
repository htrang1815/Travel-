import { faPenToSquare, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReviewItem from '../../../projects/projectdetail/contentdetail/review/ReviewItem';
import pic1 from "../../../../assets/images/reviews/pic-1.png";

const MyReviewItem = () => {
    return (
        <div className='relative'>
                <ReviewItem pic={pic1}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                </ReviewItem>
              <div className="flex absolute top-[10px] right-[10px]">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[18px] text-primary block pr-[20px] cursor-pointer"
                    onClick={() => {
                      console.log("Click");
                    }}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className="text-[18px] text-[#fc3f3f] block pr-[20px] cursor-pointer"
                    onClick={() => {
                      console.log("Click");
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
    );
};

export default MyReviewItem;