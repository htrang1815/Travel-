import React from 'react';

const ButtonSocial = ({text, children , className}) => {
    return (
        <button className={`p-3  bg-[#222] rounded-[25px] mb-5 border-solid border-[#ffbc4b] text-[16px] hover-buttonauth ${className}`}>
            <div className='flex items-center justify-items-start  max-w-[210px] w-full mx-auto text-primary '>
                {children}
                <p className='ml-[10px] text-primary'>{text}</p>
            </div>
        </button>
    );
};

export default ButtonSocial;