import React from 'react';
import ButtonBlogs from '../../../components/button/ButtonBlogs';
import videoblog  from '../../../assets/videos/Sea - 6399.mp4'

const AboutUs = () => {
    return (
       <div className='flex flex-row items-center gap-5 mt-[50px] py-[30px] px-[9%] '>
            <div>
                <video src={videoblog} muted auto loop className='w-full rounded-[10px] object-contain'></video>
                <div className='text-center px-0 py-[20px] block '>
                    <span className = 'inline-block w-5 h-5 rounded-full m-[7px] bg-[#fff] cursor-pointer hover-controlblogs '></span>
                    <span className = 'inline-block w-5 h-5 rounded-full m-[7px] bg-[#fff] cursor-pointer hover-controlblogs'></span>
                    <span className = 'inline-block w-5 h-5 rounded-full m-[7px] bg-[#fff] cursor-pointer hover-controlblogs'></span>
                </div>    
            </div>
            <div className='mb-[50px]'>
                <span className='text-primary text-[20px]'>Why choose us ?</span>
                <h3 className='text-[#fff] text-[40px] mt-[5px] font-[700]'>Nature's Majesty Awaits You</h3>
                <p className='text-[#aaa] text-[14px] py-[10px] leading-[28px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, at! Obcaecati nemo repellat molestias dolorum et commodi rerum numquam. Dolorum omnis nostrum laudantium voluptatum nemo. Labore eum iure vitae porro!</p>
                <ButtonBlogs className='mt-[10px]' text="Read More"></ButtonBlogs>
            </div>
       </div>
    );
};

export default AboutUs;