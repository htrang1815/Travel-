import React from 'react';
import StarIcon from '../../../../components/icon/StarIcon';
import UserInfo from '../../../../components/user/UserInfo';

const ReviewItem = ({children, review}) => {
    return (
        <div className="mb-[20px]">
          <div className="w-full h-[1px] bg-primary mb-[10px]"></div>
          <StarIcon></StarIcon>
          <div className="mb-[10px] w-full flex items-center justify-between overflow-clip">
            <p className="w-full text-justify ... truncate ...">{children}</p>
            {review?.image && review?.image?.length !== 0 ? (
          <div className="w-[20%] h-[80px] flex justify-end gap-3">
            <img src={review.image} className=" object-cover w-[80%]" alt="" />
          </div>
        ) : (
          ""
        )}
          </div>
          <UserInfo userInfo={review.user}></UserInfo>
        </div>

    );
};

export default ReviewItem;