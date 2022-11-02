import React from 'react';

const Input = ({label, type, placeholder}) => {
    return (
        <div className="w-full">
          <span className="block pb-2 text-[#fff]">{label}</span>
          <input type={type} name="" placeholder={placeholder} className='w-full hover-input rounded-[50px] border-[2px] border-solid border-[#ffbc4b] bg-none text-[14px] transform-none text-[#aaa] mb-[10px] p-3' id=""></input>
        </div>
    );
};

export default Input;