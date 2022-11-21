import React from "react";

const UserAvata = ({ className, show, setShow = () => {}, avatarUrl }) => {
  // console.log(avatarUrl);
  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
      className="flex items-center justify-center"
    >
      <img
        src={avatarUrl}
        alt=""
        className={`${className} object-cover rounded-full w-[30px] h-[30px]`}
      />
    </div>
  );
};

export default UserAvata;
