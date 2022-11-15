import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setShowFilter } from '../../store/showModal/showSlice';

const ButtonFilter = ({className,text}) => {
    const {showFilter} = useSelector((state) => state.show);
    
    const dispatch = useDispatch();
    return (
        <button className={`mt-0 text-[17px] px-[30px] py-[10px] rounded-[50px] border-[2px] border-solid text-primary border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit flex items-center justify-between ${className}`} onClick={() => {
            dispatch(setShowFilter(true));
            console.log("click");
        }}>
            <FontAwesomeIcon icon = {faSliders}></FontAwesomeIcon>
            {text}
            <FontAwesomeIcon icon = {faChevronDown}></FontAwesomeIcon>
        </button>
    );
};

export default ButtonFilter;