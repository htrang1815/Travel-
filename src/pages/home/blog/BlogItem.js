import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const BlogItem = ({pic}) => {
    return (
        <div className='bg-[#222] rounded-[10px] overflow-hidden hover-blogitem  cursor-pointer'>
            <div className=''>
                <img src={pic} alt="" className='h-[250px] w-full h'/>
            </div>
            <div className='p-[20px]'>
                <a href="#" className='text-[20px] text-[#fff]' >Life is a journey, not a destination</a>
                <p className='py-[10px] text-[14px] text-[#aaa] leading-[28px] text-wrap '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, distinctio debitis similique unde est officiis cum voluptas tempora eos vitae nihil cupiditate ex sit. Ipsam deleniti alias natus molestiae officiis?</p>
                <div className='pt-[10px] flex items-center justify-between '>
                    <div className='text-[14px] text-[#aaa]'>
                    <FontAwesomeIcon icon={faClock} className='pr-[5px] font-[900] text-primary'/>  21st may, 2022
                    </div>
                    <div className='text-[14px] text-[#aaa]'>
                    <FontAwesomeIcon icon={faUser}  className='pr-[5px] font-[900] text-primary'/>  by admin
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;