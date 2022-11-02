import React from 'react';

const AccordionContent = ({children}) => {
    return (
        <div>
            <p className="text-[14px] text-[#aaa]">
             {children}
            </p>
       </div>
    );
};

export default AccordionContent;