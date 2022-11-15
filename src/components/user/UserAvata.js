import React from "react";
import avt1 from "../../assets/images/guides/pic-2.png";

const UserAvata = ({ className, show, setShow = () => {}, avatar = "" }) => {
  console.log(avatar);
  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
      className="flex items-center justify-center"
    >
      <img
        src={avatar}
        alt=""
        className={`${className} object-cover rounded-full w-[30px] h-[30px]`}
      />
    </div>
  );
};

export default UserAvata;
