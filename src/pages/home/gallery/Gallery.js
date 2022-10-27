import React from 'react';
import gallery1 from '../../../assets/images/gallery/gallery-img-1.jpg'
import gallery2 from '../../../assets/images/gallery/gallery-img-2.jpg'
import gallery3 from '../../../assets/images/gallery/gallery-img-3.jpg'
import gallery4 from '../../../assets/images/gallery/gallery-img-4.jpg'
import gallery5 from '../../../assets/images/gallery/gallery-img-5.jpg'
import gallery6 from '../../../assets/images/gallery/gallery-img-6.jpg'
import gallery7 from '../../../assets/images/gallery/gallery-img-7.jpg'
import gallery8 from '../../../assets/images/gallery/gallery-img-8.jpg'
import gallery9 from '../../../assets/images/gallery/gallery-img-9.jpg'

const Gallery = () => {
    return (
        <div className='px-[9%] py-[30px]'>
            <div className='text-center mb-[20px]'>
                <span className='text-primary text-[20px]'>Our Gallery</span>
                <h1 className='text-[40px] text-[#fff] font-[700]'>We record memories</h1>
            </div>
            <div className='columns-3 gap-[15px]'>
                <div className='gallery-item mb-[10px] '>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery1} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery2} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery3} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery4} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery5} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery6} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery7} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery8} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                <div className='gallery-item mb-[10px]'>
                    <img className='w-full rounded-[10px] mb-[10px]' src={gallery9} alt="" />
                    <span className='text-[14px] text-[#aaa]'>travel spot</span>
                    <h3 className='mt-[5px] text-[20px] text-[#fff]'>iceland</h3>
                </div>
                
            </div>
        </div>
    );
};

export default Gallery;