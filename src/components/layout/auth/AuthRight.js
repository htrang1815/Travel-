import React from "react";


const AuthRight = ({children, className}) => {
  return (
    <div  className={`w-full max-w-[50%] p-[40px] h-full relative scroll-hide ${className}`}>
      {children}
    </div>
    
  );
};

export default AuthRight;
