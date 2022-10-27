import React from 'react';
import pic1 from '../../../assets/images/reviews/pic-1.png';
import pic2 from '../../../assets/images/reviews/pic-2.png';
import pic3 from '../../../assets/images/reviews/pic-3.png';
import pic4 from '../../../assets/images/reviews/pic-4.png';
import ReviewItem from './ReviewItem';

const Review = () => {
    return (
        <div className="py-[30px] px-[9%] flex-review">
            <div className="mb-[20px] flex-review-content text-left">
                <span className="text-primary text-[20px] ">Reviews</span>
                <h1 className="text-[#fff] text-[30px] font-[700] ">Good News From Our Clients</h1>
                <p className='text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo, quaerat velit veniam nihil esse rerum qui mollitia ab earum voluptates adipisci distinctio enim neque dolore debitis facilis, quas maxime.</p>
            </div>
            <div className='flex-review-container'>
                <ReviewItem pic={pic1}></ReviewItem>
                <ReviewItem pic={pic2}></ReviewItem>
                <ReviewItem pic={pic3}></ReviewItem>
                <ReviewItem pic={pic4}></ReviewItem>
            </div>
      </div>
    );
};

export default Review;