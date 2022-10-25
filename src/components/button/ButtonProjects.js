import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonProjects = ({className,text}) => {
    const navigate = useNavigate();
    return (
        <button className={`mt-0 text-[17px] text-primary px-[30px] py-[10px] rounded-[50px] border-[2px] border-solid  border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit ${className}`} onClick={() => navigate("#")}>{text}</button>
    );
};

export default ButtonProjects;