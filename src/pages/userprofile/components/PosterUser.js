import React from "react";
import UserAvata from "../../../components/user/UserAvata";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";

const PosterUser = () => {
  const { user } = useAuthStateChanged();
  // console.log(user);
  return (
    <div className="poster-user relative mt-[68px] h-[50vh]">
      <div
        className={`my-0 mx-auto w-[90%] min-h-[40vh] bg-bg-guide-detail rounded-[10px] bg-cover bg-left flex items-center justify-center`}
      >
        <div className="absolute left-[9%] bottom-[10px] flex items-end justify-between w-[82%]">
          <div className="flex items-center min-w-[23%]">
            <UserAvata
              avatarUrl={user?.avatarUrl}
              className="w-[120px] h-[120px] border-[10px] border-solid border-[#111] mr-[20px]"
            ></UserAvata>
            <span className="text-[#fff] pt-[40px] text-[20px] font-[600] ">
              {user?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterUser;
