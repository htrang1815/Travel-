import React from 'react';


const ReviewItem = ({pic}) => {
    return (
        <div className='flex-review-item rounded-[10px] p-[20px] bg-[#222] border-solid border-[2px] border-[#111] hover-reviewitem'>
            <p className='text-[14px] pb-[10px] text-[#aaa] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem magnam dignissimos voluptatum dolor rerum fuga a? Animi qui, distinctio tempora, porro illo in eius corporis sit dolorem ipsam quibusdam repudiandae.</p>
            <div className='flex-review-user'>
                <img src={pic} alt="" className='h-[50px] w-[50px] rounded-[50%]'/>
                <div className=''>
                    <h3 className='text-[17px] text-[#fff] font-[700]' >John Deo</h3>
                    <span className='text-[15px] text-[#aaa]'>Volunteer</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;