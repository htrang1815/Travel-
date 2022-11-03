import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faHeadset,faGlobe, faPeopleArrows, faPersonHiking, faWallet, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const AdvanceItem = () => {
    return (
        <div className='grid grid-cols-3 gap-[15px]'>
            <div className='bg-[#222] rounded-[10px] p-[30px] text-center border-[2px] border-[#111] cursor-pointer hover-advanceitem'>
                <FontAwesomeIcon icon={faGlobe} className='text-primary text-[40px] mb-[20px]'/>
                <h3 className='text-[20px] text-[#fff] font-[700]'>worldwide</h3>
                <p className='py-[10px] px-0 text-[#fff] text-[14px] leading-[28px] text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, saepe voluptas nisi voluptatibus, nemo fugiat eum quia temporibus libero quasi esse voluptates nobis magni earum, non inventore rem fuga! Velit.</p>
            </div>
            <div className='bg-[#222] rounded-[10px] p-[30px] text-center border-[2px] border-[#111] cursor-pointer hover-advanceitem'>
                <FontAwesomeIcon icon={faPeopleArrows} className='text-primary text-[40px] mb-[20px]'/>
                <h3 className='text-[20px] text-[#fff] font-[700]'>social responsibility</h3>
                <p className='py-[10px] px-0 text-[#fff] text-[14px] leading-[28px] text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, saepe voluptas nisi voluptatibus, nemo fugiat eum quia temporibus libero quasi esse voluptates nobis magni earum, non inventore rem fuga! Velit.</p>
            </div>
            <div className='bg-[#222] rounded-[10px] p-[30px] text-center border-[2px] border-[#111] cursor-pointer hover-advanceitem'>
                <FontAwesomeIcon icon={faHeadset} className='text-primary text-[40px] mb-[20px]'/>
                <h3 className='text-[20px] text-[#fff] font-[700]'>24/7 Support</h3>
                <p className='py-[10px] px-0 text-[#fff] text-[14px] leading-[28px] text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, saepe voluptas nisi voluptatibus, nemo fugiat eum quia temporibus libero quasi esse voluptates nobis magni earum, non inventore rem fuga! Velit.</p>
            </div>
            <div className='bg-[#222] rounded-[10px] p-[30px] text-center border-[2px] border-[#111] cursor-pointer hover-advanceitem'>
                <FontAwesomeIcon icon={faPersonHiking} className='text-primary text-[40px] mb-[20px]'/>
                <h3 className='text-[20px] text-[#fff] font-[700]'>Adventures</h3>
                <p className='py-[10px] px-0 text-[#fff] text-[14px] leading-[28px] text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, saepe voluptas nisi voluptatibus, nemo fugiat eum quia temporibus libero quasi esse voluptates nobis magni earum, non inventore rem fuga! Velit.</p>
            </div>
            <div className='bg-[#222] rounded-[10px] p-[30px] text-center border-[2px] border-[#111] cursor-pointer hover-advanceitem'>
                <FontAwesomeIcon icon={faHandshakeAngle} className='text-primary text-[40px] mb-[20px]'/>
                <h3 className='text-[20px] text-[#fff] font-[700]'>Community Support</h3>
                <p className='py-[10px] px-0 text-[#fff] text-[14px] leading-[28px] text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, saepe voluptas nisi voluptatibus, nemo fugiat eum quia temporibus libero quasi esse voluptates nobis magni earum, non inventore rem fuga! Velit.</p>
            </div>
            <div className='bg-[#222] rounded-[10px] p-[30px] text-center border-[2px] border-[#111] cursor-pointer hover-advanceitem'>
                <FontAwesomeIcon icon={faWallet} className='text-primary text-[40px] mb-[20px]'/>
                <h3 className='text-[20px] text-[#fff] font-[700]'>Affordable Price</h3>
                <p className='py-[10px] px-0 text-[#fff] text-[14px] leading-[28px] text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, saepe voluptas nisi voluptatibus, nemo fugiat eum quia temporibus libero quasi esse voluptates nobis magni earum, non inventore rem fuga! Velit.</p>
            </div>
        </div>
    );
};

export default AdvanceItem;