import React from 'react';
import ButtonProjects from '../../../components/button/ButtonProjects';


const SliderContent = () => {
    return (
        <div className='my-0 mx-auto mt-[90px] w-[90%] min-h-[80vh] bg-bg-slider1 rounded-[10px] bg-cover relative flex items-center justify-end'>            
            <div className='absolute block w-[500px] p-0 m-0 mr-[50px] capitalize'>
                <span className='block text-[40px] font-[400] mb-[30px]'>Never Stop </span>
                <h3 className='font-bold text-[60px] text-[#FFBC4B] pt-[10px] uppercase my-[20px]'>EXPLORING </h3>
                <p className='py-[10px] text-[15px] leading-[26px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab corrupti impedit pariatur, tenetur debitis fugiat provident deleniti! Culpa, ducimus. Reprehenderit ipsam perspiciatis asperiores doloribus hic cumque eius odio.</p>
                <ButtonProjects className='mt-3 border-[#111] text-[#111]' text="Get started"></ButtonProjects>
            </div>
        </div>
    );
};

export default SliderContent;