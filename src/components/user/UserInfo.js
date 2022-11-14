import React from "react";
import avt1 from "../../assets/images/guides/pic-2.png";
import UserAvata from "./UserAvata";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="flex items-center">
      <UserAvata className="mr-[10px]" avatar={userInfo.avatarUrl}></UserAvata>
      <span>{userInfo.name}</span>
    </div>
  );
};

export default UserInfo;
