import React from 'react';

const InputRiews = () => {
    return (
        <div className='mb-[30px]'>
            <h3 className='text-primary text-[18px] mb-[20px]'>Review about this place </h3>
            <div className='flex gap-6'>
                <input type="text" placeholder='Enter your review' className='w-full py-[10px] px-[12px] rounded-[50px] text-[#aaa] border-[2px] border-solid border-[#ffbc4b] transform-none text-[14px]  hover-input'/>
                <button className='text-primary hover-button py-[10px] text-[14px] px-[32px] rounded-[25px] border-[2px] border-solid border-[#ffbc4b]'>Send</button>
            </div>
        </div>
    );
};

export default InputRiews;