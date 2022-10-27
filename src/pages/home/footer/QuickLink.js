import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const QuickLink = () => {
    return (
        <div className="py-[10px] px-0">
            <h3 className='text-[22px] text-[#fff] py-[10px] px-0 font-[700]'>quick links</h3>
            <a className='text-[14px] text-[#aaa] py-[10px] px-0 block hover-quicklink' href="#home" > 
                <FontAwesomeIcon icon={faArrowRight} className='pr-[5px] text-primary font-[900] '></FontAwesomeIcon> 
                    <span> home </span>
                    </a>
            <a className='text-[14px] text-[#aaa] py-[10px] px-0 block hover-quicklink' href="#about" > 
                <FontAwesomeIcon icon={faArrowRight} className='pr-[5px] text-primary font-[900] '></FontAwesomeIcon> 
                    <span> about</span>  </a>
            <a className='text-[14px] text-[#aaa] py-[10px] px-0 block hover-quicklink' href="#destination" > 
                <FontAwesomeIcon icon={faArrowRight} className='pr-[5px] text-primary font-[900] '></FontAwesomeIcon> 
                    <span> destination </span>  </a>
            <a className='text-[14px] text-[#aaa] py-[10px] px-0 block hover-quicklink' href="#services" > 
                <FontAwesomeIcon icon={faArrowRight} className='pr-[5px] text-primary font-[900] '></FontAwesomeIcon> 
                    <span> services </span>  </a>
            <a className='text-[14px] text-[#aaa] py-[10px] px-0 block hover-quicklink' href="#gallery" > 
                <FontAwesomeIcon icon={faArrowRight} className='pr-[5px] text-primary font-[900] '></FontAwesomeIcon> 
                    <span> gallery </span>  </a>
            <a className='text-[14px] text-[#aaa] py-[10px] px-0 block hover-quicklink' href="#blogs" > 
                <FontAwesomeIcon icon={faArrowRight} className='pr-[5px] text-primary font-[900] '></FontAwesomeIcon> 
                    <span> blogs </span>  </a>
        </div>
    );
};

export default QuickLink;