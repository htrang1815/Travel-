import moment from "moment";
import React from "react";
import { useController } from "react-hook-form";

<<<<<<< HEAD
const Input = ({ label, type, placeholder,className, id, control = "", disabled=false}) => {
=======
const Input = ({ label, type, placeholder, className, id, control = "" }) => {
>>>>>>> 2727dfbf3dd8f80b7767b8b683b102ff116ded21
  const { field } = useController({
    control,
    name: id,
    defaultValue: "",
  });
  return (
    <div className={`w-full  ${className}`}>
      <label htmlFor={id} className="block pb-2 text-[#fff]">
        {label}
      </label>
      <input
        id={id}
        // value ={moment(value, "YYYY-MM-DD")}
        type={type}
        name=""
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full hover-input rounded-[50px] border-[2px] border-solid border-[#ffbc4b] bg-none text-[14px] transform-none text-[#aaa] mb-[10px] p-3 normal-case ${className}`}
        {...field}
        autoCapitalize="none"
      ></input>
    </div>
  );
};

export default Input;
