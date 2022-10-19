import React from 'react';
import loginImg from "../../../assets/images/auth/home-bg.jpg";
import HikingIcon from '@mui/icons-material/Hiking';

const AuthLeft = () => {
    return (
        <div className="w-full max-w-[50%] p-[40px] relative">
            <div className='absolute  top-[-15%] left-0'>
                <div className='flex items-center'>
                    <HikingIcon style={{fontSize:"28px", color: "#FFBC4B"}}></HikingIcon>
                    <h1 className='font-bold text-[32px]'>Travel</h1>
                </div>
            </div>
            <div className="">
                <img
                src={loginImg}
                alt=""
                className="w-full object-cover rounded h-[480px] self-center"
                />
            </div>
        </div>
        
    );
};

export default AuthLeft;