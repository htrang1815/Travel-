import React from 'react';
import StarIcon from '../../../../components/icon/StarIcon';
import UserInfo from '../../../../components/user/UserInfo';

const ReviewItem = ({children}) => {
    return (
        <div className="mb-[20px]">
          <div className="w-full h-[1px] bg-primary mb-[10px]"></div>
          <StarIcon></StarIcon>
          <div className="mb-[10px] w-full flex items-center justify-between overflow-clip">
            <p className="w-full text-justify ... truncate ...">{children}</p>
          </div>
          <UserInfo></UserInfo>
        </div>

    );
};

export default ReviewItem;