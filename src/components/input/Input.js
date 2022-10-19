import React from 'react';

const Input = ({label, type, placeholder}) => {
    return (
        <div className="w-[75%]">
          <span className="block pb-2">{label}</span>
          <input 
            type={type}
            className="p-[10px] w-full rounded-lg mb-5 border border-[#828282] text-[12px]"
            placeholder={placeholder}
            />
        </div>
    );
};

export default Input;