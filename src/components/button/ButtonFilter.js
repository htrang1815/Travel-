import React from 'react';

const ButtonFilter = ({className,children}) => {
    return (
        <button className={`${className} px-[10px] py-[5px] text-primary text-[14px] border border-solid border-[#ffbc4b] rounded-lg hover-button mr-[10px] hover-button`}>
            {children}
        </button>
    );
};

export default ButtonFilter;