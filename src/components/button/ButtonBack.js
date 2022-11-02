import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ButtonBack = ({className,text}) => {
    return (
        <div className='mb-[30px]'>
            <button className={`mt-0 text-[14px] font-[500] text-primary px-[15px] py-[10px] rounded-[50px] border-[2px] border-solid  border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit ${className} flex items-center justify-between`}>
            <FontAwesomeIcon className='text-[14px] mr-3' icon={faChevronLeft}></FontAwesomeIcon>
            {text}</button>
        </div>
    );
};

export default ButtonBack;