import React from "react";
import avt1 from "../../assets/images/guides/pic-2.png";

const UserAvata = ({ className, show, setShow = () => {} }) => {
  return (
    <div
      onClick={() => {
        setShow(!show);
      }}
    >
      <img
        src={avt1}
        alt=""
        className={`${className} rounded-full w-[30px] h-[30px]`}
      />
    </div>
  );
};

export default UserAvata;
