import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import GuideItem from '../../../components/guides/GuideItem';

const TourGuide = ({className}) => {
    return (
        <div className={`${className}`}>
            <div className='text-left  mb-[20px]'>
                <span className='text-primary text-[18px]'>recommened</span>
                <h1 className='text-[30px] text-[#fff] font-[600]'>You maybe also like guides</h1>
            </div>
            <div className='w-full  grid grid-cols-4 grid-rows-1 gap-[15px]  mb-[30px] relative'>
                <FontAwesomeIcon icon={faChevronLeft} 
                    className='text-[26px] cursor-pointer text-[#222] p-1 w-[30px] h-[30px] rounded-full bg-primary absolute left-[-5%] top-[50%] translate-y-[-50%]'></FontAwesomeIcon>
                <GuideItem></GuideItem>
                <GuideItem></GuideItem>
                <GuideItem></GuideItem>
                <GuideItem></GuideItem>
                <FontAwesomeIcon icon={faChevronRight} className='text-[26px] cursor-pointer text-[#222] p-1 w-[30px] h-[30px] rounded-full bg-primary absolute right-[-5%] top-[50%] translate-y-[-50%] '></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default TourGuide;