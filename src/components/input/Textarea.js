import React from "react";

const Textarea = ({label,id,type,placeholder,className,classNameLabel,rows}) => {
  return (
    <div className="w-full ">
      <label className={`block pb-2 text-[#fff] ${classNameLabel}`}>
        {label}
      </label>
      <textarea
        id={id}
        type={type}
        name=""
        rows={rows}
        placeholder={placeholder}
        className={`w-full hover-input rounded-[50px] border-[2px] border-solid border-[#ffbc4b] bg-none text-[14px] transform-none text-[#aaa] mb-[10px] p-3 normal-case resize-none ${className}`}
      ></textarea>
    </div>
  );
};

export default Textarea;
