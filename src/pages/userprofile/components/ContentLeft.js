import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setShowModalUser } from "../../../store/showModal/showSlice";
import useAuthStateChanged from "../../../hooks/useAuthStateChange";
import Moment from "react-moment";

const ContentLeft = () => {
  const dispatch = useDispatch();
  const { user } = useAuthStateChanged();
  return (
    <div className="content__left w-[25%] bg-[#222] pl-[40px] mr-[40px] min-h-[50vh] h-full rounded-lg">
      <div className="py-[20px] flex items-center justify-between">
        <h1 className="text-[18px] block font-[600] text-primary">
          My profile
        </h1>
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-[18px] text-primary block pr-[20px] cursor-pointer"
          onClick={() => {
            dispatch(setShowModalUser(true));
          }}
        ></FontAwesomeIcon>
      </div>
      <div className="user__desc">
        <div className="mb-[20px]">
          <span className=" normal-case mb-[20px] w-[150px] text-primary mr-[10px]">
            Name :
          </span>
          <span className=" normal-case mb-[20px]">{user?.name}</span>
        </div>
        <div className="mb-[20px]">
          <span className=" normal-case mb-[20px] w-[150px] text-primary mr-[10px]">
            Email :
          </span>
          <span className=" normal-case mb-[20px]">{user?.email}</span>
        </div>
        <div className="mb-[20px]">
          <span className=" normal-case mb-[20px] w-[150px] text-primary mr-[10px]">
            Date of birth :
          </span>
          <span className=" normal-case mb-[20px]">
            <Moment format="YYYY/MM/DD">{user?.dateOfBirth}</Moment>
          </span>
        </div>
        <div className="mb-[20px]">
          <span className=" normal-case mb-[20px] w-[150px] text-primary mr-[10px]">
            Phone :
          </span>
          <span className=" normal-case mb-[20px]">{user?.phone}</span>
        </div>
        <div className="mb-[20px]">
          <span className=" normal-case mb-[20px] w-[150px] text-primary mr-[10px]">
            Address :
          </span>
          <span className=" normal-case mb-[20px]">{user?.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
