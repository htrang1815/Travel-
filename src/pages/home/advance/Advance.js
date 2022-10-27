import React from 'react';
import AdvanceItem from './AdvanceItem';

const Advance = () => {
    return (
        <div className='px-[9%] py-[30px]'>
            <div className='text-center mb-[20px]'>
                <span className='text-primary text-[20px]'>Our Advance</span>
                <h1 className='text-[40px] text-[#fff] font-[700]'>What makes us different?</h1>
            </div>
            <div className='grid grid-cols gap-[15px]'>
                <AdvanceItem icon="faArrowUpFromBracket"></AdvanceItem>
            </div>
        </div>
    );
};

export default Advance;