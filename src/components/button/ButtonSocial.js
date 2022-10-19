import React from 'react';

const ButtonSocial = ({text, children}) => {
    return (
        <button className=' p-3 w-[75%] bg-[#ffffff] rounded-lg mb-5'>
            <div className='flex items-center justify-items-start  max-w-[210px] w-full mx-auto'>
                {children}
                <p className='ml-[10px] '>{text}</p>

            </div>
        </button>
    );
};

export default ButtonSocial;