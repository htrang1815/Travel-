import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ButtonFilter = ({className,text}) => {
    const navigate = useNavigate();
    return (
        <button className={`mt-0 text-[17px] px-[30px] py-[10px] rounded-[50px] border-[2px] border-solid text-primary border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit flex items-center justify-between ${className}`} onClick={() => navigate("#")}>
            <FontAwesomeIcon icon = {faSliders}></FontAwesomeIcon>
            {text}
            <FontAwesomeIcon icon = {faChevronDown}></FontAwesomeIcon>
        </button>
    );
};

export default ButtonFilter;