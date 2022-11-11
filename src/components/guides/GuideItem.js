import { faGlobe, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import guide1 from '../../assets/images/guides/pic-4.png'

const GuideItem = () => {
    return (
        <div className="bg-[#222] rounded-[10px] overflow-hidden hover-item cursor-pointer myguide-item">
            <div className="w-full h-[200px] relative img">
                <img src={guide1} alt="" className="object-cover w-full h-full" />
                <span className="block text-primary text-[14px] rounded-lg font-[500] mb-4 absolute px-2 py-1 bg-[#222] top-[2%] right-[2%]">$478.00 </span>
            </div>
            <div className="text-[#fff] p-[20px] guidecontent">
                <div className="">
                    <div className="flex items-center mb-4">
                        <h3 className="text-[16px] font-[600] "> Biese Cooper</h3>
                        <div className="text-primary text-[14px] mx-[5px]">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <span className="text-[14px] font-[600] mr-[5px]">4.8</span>
                        <span className="text-[14px] text-[#aaa]">(362)</span>
                    </div>
                    <div>
                        <span className="text-14px block mb-4">
                            <FontAwesomeIcon icon={faLocationDot} className='text-primary mr-3'></FontAwesomeIcon>
                            New york city, united states
                        </span>
                        <span className="text-14px block mb-4">
                            <FontAwesomeIcon icon={faGlobe} className='text-primary mr-3'></FontAwesomeIcon>
                            English, French +3
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideItem;