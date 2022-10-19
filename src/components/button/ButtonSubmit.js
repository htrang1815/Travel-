import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonSubmit = ({className,text}) => {
    const navigate = useNavigate();
    return (
        <button className={`p-3 bg-primary w-[75%] text-center rounded-lg font-bold ${className}`} onClick={() => navigate("/login")}>{text}</button>
    );
};

export default ButtonSubmit;