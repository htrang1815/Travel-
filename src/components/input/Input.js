import moment from "moment";
import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  label,
  type,
  placeholder,
  className,
  id,
  control = "",
  disabled = false,
  errors,
}) => {
  const { field } = useController({
    control,
    name: id,
    defaultValue: "",
  });
  // console.log(control);
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
        className={`w-full hover-input rounded-[50px] border-[2px] border-solid border-[#ffbc4b] bg-none text-[14px] transform-none text-[#111] mb-[10px] p-3 normal-case ${className}`}
        {...field}
        autoCapitalize="none"
      ></input>
      <p className="text-[#f77171] font-semibold mb-[10px]">{errors}</p>
    </div>
  );
};

export default Input;
