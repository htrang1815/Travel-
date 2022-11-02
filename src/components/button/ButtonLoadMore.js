import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonLoadMore = ({className,text}) => {
        const navigate = useNavigate();
    return (
        <button className={`mt-0 text-[14px] px-[25px] py-[8px] rounded-[20px] border-[2px] border-solid  border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit ${className}`} onClick={() => navigate("#")}>{text}</button>
    );
};

export default ButtonLoadMore;