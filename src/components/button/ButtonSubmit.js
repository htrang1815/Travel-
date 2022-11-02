import React from "react";

const ButtonSubmit = ({ className, children, onClick = () => {} }) => {
  return (
    <button
      type="submit"
      className={`mt-0 text-[17px] text-primary px-[30px] py-[10px] rounded-[50px] border-[2px] border-solid  border-[#ffbc4b] bg-none m-0 capitalize hover-btnsubmit ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
