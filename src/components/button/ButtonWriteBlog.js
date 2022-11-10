import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonWriteBlog = () => {
    const navigate = useNavigate();

    return (
        <button className="block text-primary hover-readmore mt-[20px] text-[12px] font-[700] uppercase h-[45px] px-[35px] rounded-[4px] bg-[#111] border-[2px] border-solid border-[#ffbc4b] "
        onClick={()=> navigate(`/blog/writeblog`)}
        >Write now</button>

    );
};

export default ButtonWriteBlog;