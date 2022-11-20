import React from "react";
import { useController } from "react-hook-form";

const Input = ({ label, type, placeholder, className, id, control = "" }) => {
  const { field } = useController({
    control,
    name: id,
    defaultValue: "",
  });
  return (
    <div className="w-full ">
      <label htmlFor={id} className="block pb-2 text-[#fff]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name=""
        placeholder={placeholder}
        className={`w-full hover-input rounded-[50px] border-[2px] border-solid border-[#ffbc4b] bg-none text-[14px] transform-none text-[#aaa] mb-[10px] p-3 normal-case ${className}`}
        {...field}
        autoCapitalize="none"
      ></input>
    </div>
  );
};

export default Input;
