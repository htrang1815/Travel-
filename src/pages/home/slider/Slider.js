import React from 'react';
import sliderImg1 from "../../../assets/images/auth/home-bg.jpg";
import SliderContent from './SliderContent';

const Slider = () => {
    return (
        <div className='w-full h-full relative'>
            <img src={sliderImg1} alt="" />
            <SliderContent className="absolute w-full max-w-[40%] right-[12%] top-[40%]"></SliderContent>
        </div>
    );
};

export default Slider;