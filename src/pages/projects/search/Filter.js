import React from 'react';

const Filter = ({text}) => {
    return (
        <div className=' cursor-pointer text-[14px] text-[#ccc] rounded-[14px] border-[2px] border-solid border-[#ffbc4b] inline-block py-2 px-4 mr-4 hover-filter'>
            {text}
        </div>
    );
};

export default Filter;