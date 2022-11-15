import { faGlobe, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuideItem = ({guideData, className}) => {
    const navigate = useNavigate();
    console.log("guidedata",guideData);
    return (
        <div className="bg-[#222] rounded-[10px] overflow-hidden hover-item cursor-pointer myguide-item"
        onClick={()=>{
            navigate(`/guide/${guideData?._id}`
            );
            window.scroll(0,10);
        }}
        >
            <div className="w-full h-[200px] relative img">
                <img src={guideData?.avatarUrl} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="text-[#fff] p-[20px] guidecontent">
                <div className="">
                    <div className="flex items-center mb-4">
                        <h3 className="text-[16px] font-[600] "> 
                        {guideData?.name}
                        </h3>
                        <div className="text-primary text-[14px] mx-[5px]">
                        <Rating
        readOnly
        icon={<FontAwesomeIcon icon={faStar} color="#ffbc4a"></FontAwesomeIcon>}
        emptyIcon={
          <FontAwesomeIcon icon={faStar} color="#aaaaaa"></FontAwesomeIcon>
        }
        style={{
          color: "#ffbc4a",
        }}
        sx={20}
        defaultValue={guideData?.ratingAverage}
        precision={0.5}
      ></Rating>
                        </div>
                        <span className="text-[14px] font-[600] mr-[5px]"> {guideData?.ratingAverage}</span>
                        <span className="text-[14px] text-[#aaa]">({guideData?.ratingsQuantity})</span>
                    </div>
                    <div>
                        <span className="text-14px block mb-4">
                            <FontAwesomeIcon icon={faLocationDot} className='text-primary mr-3'></FontAwesomeIcon>
                            {guideData?.address}
                        </span>
                        <span className="text-14px block mb-4">
                            <FontAwesomeIcon icon={faGlobe} className='text-primary mr-3'></FontAwesomeIcon>
                            {guideData?.language}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideItem;