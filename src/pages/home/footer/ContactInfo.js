import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
    return (
        <div className="py-[10px] px-0">
            <h3 className='text-[22px] text-[#fff] py-[10px] px-0 font-[700]'>Contact Info</h3>
            <p className='text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]'>
                <FontAwesomeIcon icon={faMap} className='pr-[5px] text-primary'></FontAwesomeIcon>
                Hanoi, Vietnam
            </p>
            <p className='text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]'>
                <FontAwesomeIcon icon={faPhone} className='pr-[5px] text-primary'></FontAwesomeIcon>
                +035-406-7746
            </p>
            <p className='text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]'>
                <FontAwesomeIcon icon={faEnvelope} className='pr-[5px] text-primary'></FontAwesomeIcon>
                TravelVolunteer@gmail.com
            </p>
            <p className='text-[14px] text-[#aaa] py-[10px] px-0 leading-[28px]'>
                <FontAwesomeIcon icon={faClock} className='pr-[5px] text-primary'></FontAwesomeIcon>
                7:00am - 10:00pm
            </p>
        </div>
    );
};

export default ContactInfo;