import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Social = () => {
    return (
        <div className='p-[10px]'>
            <div className="text-[25px] font-bold text-[#fff] cursor-pointer">
            <FontAwesomeIcon icon={faPaperPlane} className="text-primary pr-[5px] font-[900]"/>Travel
            <p className='text-[14px] text-[#aaa] py-[10px] px-0 font-[400] leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed quam labore quia natus? Iste, repellat fugit? </p>
            <div>
                <a href="#" className='h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary'>
                    <FontAwesomeIcon icon={faFacebookF} className=" 
                     font-[400] "/>
                </a>
                <a href="#" className='h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary'>
                    <FontAwesomeIcon icon={faTwitter} className=" 
                     font-[400] "/>
                </a>
                <a href="#" className='h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary'>
                    <FontAwesomeIcon icon={faInstagram} className=" 
                     font-[400] "/>
                </a>
                <a href="#" className='h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary'>
                    <FontAwesomeIcon icon={faLinkedin} className=" 
                     font-[400] "/>
                </a>
            </div>
      </div>
        </div>
    );
};

export default Social;