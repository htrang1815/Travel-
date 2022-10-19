import React from 'react';
import ButtonProjects from '../../../components/button/ButtonProjects';

const SliderContent = ({className}) => {
    return (
        <div className={`${className}`}>
            <span className='block text-2xl font-[500]'>Never Stop </span>
            <span className='block font-bold text-[40px] text-[#FFBC4B] mt-5'>EXPLORING </span>
            <p className='mt-5 leading-[26px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab corrupti impedit pariatur perspiciatis, tenetur debitis fugiat provident deleniti! Culpa, ducimus. Reprehenderit ipsam perspiciatis asperiores doloribus hic cumque eius odio.</p>
            <ButtonProjects className='mt-5'></ButtonProjects>
        </div>
    );
};

export default SliderContent;