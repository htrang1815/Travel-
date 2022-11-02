import React from 'react';
import detail1 from '../../../../assets/images/detailproject/NY1.jpeg'
import detail3 from '../../../../assets/images/detailproject/NY3.jpeg'
import detail4 from '../../../../assets/images/detailproject/NY4.jpeg'

const ImgDetail = () => {
    return (
        <div className='w-full grid  grid-detail grid-flow-col gap-y-[10px] gap-x-[20px] mb-[30px]'>
            <img className='object-cover w-full h-full rounded-lg col-span-2 row-start-1 row-end-7 ' src={detail4} alt="" />
            <img className='object-cover w-full h-full rounded-lg row-start-1 row-end-4' src={detail3} alt="" />
            <img className='object-cover w-full h-full rounded-lg row-start-4 row-end-6' src={detail1} alt="" />
            <button className='row-start-6 row-end-7 bg-primary rounded-lg'>More 7 photos</button>
        </div>
    );
};

export default ImgDetail;