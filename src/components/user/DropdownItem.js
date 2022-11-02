import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DropdownItem = ({icon,text,className}) => {
    return (
        <div className={`items-center py-[15px] px-[5%] hover-dropdown text-[#111] w-full ${className}`}>
        <FontAwesomeIcon
          className="text-[14px]  mr-[10px]"
          icon={icon}
        ></FontAwesomeIcon>
        <span className="text-[14px] font-[400] text-[#111] ">{text}</span>
      </div>
    );
};

export default DropdownItem;